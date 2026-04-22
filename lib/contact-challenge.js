import crypto from "node:crypto";

const CHALLENGE_TTL_MS = 8 * 60 * 1000;
const CHALLENGE_MIN_SOLVE_MS = 2500;

const QUESTION_BANK = [
  { id: "sum_2_5", prompt: "Jaký je součet 2 a 5?", answers: ["7", "sedm"] },
  { id: "diff_10_4", prompt: "Kolik je 10 bez 4?", answers: ["6", "sest", "šest"] },
  { id: "dog_legs", prompt: "Kolik nohou má pes?", answers: ["4", "ctyri", "čtyři"] },
  { id: "first_letter", prompt: "Jaké je první písmeno slova Montessori?", answers: ["M", "m"] },
];

function normalizeAnswer(value) {
  if (typeof value !== "string") return "";
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
}

function signPayload(payload, secret) {
  return crypto.createHmac("sha256", secret).update(payload).digest("hex");
}

function pickQuestion() {
  const idx = crypto.randomInt(QUESTION_BANK.length);
  return QUESTION_BANK[idx];
}

export function createContactChallenge({ secret, now = Date.now() }) {
  const question = pickQuestion();
  const issuedAt = now;
  const expiresAt = issuedAt + CHALLENGE_TTL_MS;
  const nonce = crypto.randomBytes(8).toString("hex");
  const payload = `${question.id}:${issuedAt}:${expiresAt}:${nonce}`;
  const signature = signPayload(payload, secret);

  return {
    prompt: question.prompt,
    token: `${payload}.${signature}`,
    ttlMs: CHALLENGE_TTL_MS,
  };
}

export function verifyContactChallenge({ token, answer, secret, now = Date.now() }) {
  if (typeof token !== "string" || token.length < 20) {
    return { ok: false, reason: "missing_token" };
  }

  const dotIdx = token.lastIndexOf(".");
  if (dotIdx < 0) {
    return { ok: false, reason: "invalid_token_format" };
  }

  const payload = token.slice(0, dotIdx);
  const signature = token.slice(dotIdx + 1);
  const expected = signPayload(payload, secret);

  const sigBuf = Buffer.from(signature, "utf8");
  const expectedBuf = Buffer.from(expected, "utf8");
  if (
    sigBuf.length !== expectedBuf.length ||
    !crypto.timingSafeEqual(sigBuf, expectedBuf)
  ) {
    return { ok: false, reason: "invalid_signature" };
  }

  const [questionId, issuedAtRaw, expiresAtRaw] = payload.split(":");
  const issuedAt = Number.parseInt(issuedAtRaw, 10);
  const expiresAt = Number.parseInt(expiresAtRaw, 10);
  if (!questionId || !Number.isFinite(issuedAt) || !Number.isFinite(expiresAt)) {
    return { ok: false, reason: "invalid_payload" };
  }

  if (now > expiresAt) {
    return { ok: false, reason: "expired" };
  }
  if (now - issuedAt < CHALLENGE_MIN_SOLVE_MS) {
    return { ok: false, reason: "too_fast" };
  }

  const question = QUESTION_BANK.find((q) => q.id === questionId);
  if (!question) {
    return { ok: false, reason: "unknown_question" };
  }

  const normalizedAnswer = normalizeAnswer(answer);
  if (!normalizedAnswer) {
    return { ok: false, reason: "missing_answer" };
  }

  const valid = question.answers.some((item) => normalizeAnswer(item) === normalizedAnswer);
  if (!valid) {
    return { ok: false, reason: "wrong_answer" };
  }

  return { ok: true, reason: "ok" };
}
