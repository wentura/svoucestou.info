import { Resend } from "resend";
import { interestLabel } from "@/lib/contact-interest";
import { allowContactSubmit } from "@/lib/contact-rate-limit";
import { SITE } from "@/lib/site-config";

const MAX_LEN = {
  name: 200,
  email: 320,
  childAge: 200,
  message: 8000,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(s) {
  return typeof s === "string" && s.length <= MAX_LEN.email && EMAIL_RE.test(s.trim());
}

function getClientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") || "unknown";
}

const GENERIC_SEND_ERROR = "Odeslání se nepovedlo. Zkuste to prosím později.";

function getOriginFromHeaderValue(value) {
  if (!value) return null;
  try {
    return new URL(value).origin;
  } catch {
    return null;
  }
}

function hasAllowedOrigin(request) {
  const allowedOrigins = new Set([
    SITE.canonicalOrigin,
    "https://svoucestou.info",
  ]);

  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");

  const originValue = getOriginFromHeaderValue(origin);
  const refererValue = getOriginFromHeaderValue(referer);

  if (originValue && allowedOrigins.has(originValue)) {
    return true;
  }
  if (refererValue && allowedOrigins.has(refererValue)) {
    return true;
  }
  return false;
}

function isValidAntiSpamAnswer(value) {
  if (typeof value !== "string") return false;
  const normalized = value.trim().toLowerCase();
  return normalized === "7" || normalized === "sedm";
}

export async function POST(request) {
  if (!hasAllowedOrigin(request)) {
    return Response.json(
      { error: "Neplatný původ požadavku." },
      { status: 403 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Neplatná data." }, { status: 400 });
  }

  const { name, email, childAge, interest, message, antiSpamAnswer, website } = body;

  if (typeof website === "string" && website.trim() !== "") {
    return Response.json({ ok: true }, { status: 200 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "Kontaktní formulář je dočasně nedostupný." },
      { status: 503 }
    );
  }

  if (!isValidAntiSpamAnswer(antiSpamAnswer)) {
    return Response.json(
      { error: "Bezpečnostní kontrola neprošla. Zkuste to prosím znovu." },
      { status: 400 }
    );
  }

  const ip = getClientIp(request);
  if (!(await allowContactSubmit(ip))) {
    return Response.json(
      { error: "Příliš mnoho odeslání. Zkuste to znovu za chvíli." },
      { status: 429 }
    );
  }

  if (typeof name !== "string" || name.trim().length < 1) {
    return Response.json({ error: "Vyplňte jméno." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return Response.json({ error: "Vyplňte platný e-mail." }, { status: 400 });
  }
  if (
    typeof interest !== "string" ||
    !["skolka", "skola", "oboji"].includes(interest)
  ) {
    return Response.json({ error: "Vyberte školku nebo školu." }, { status: 400 });
  }
  if (typeof message !== "string") {
    return Response.json({ error: "Chybí zpráva." }, { status: 400 });
  }

  const safeName = name.trim().slice(0, MAX_LEN.name);
  const safeEmail = email.trim().toLowerCase();
  const safeChildAge =
    typeof childAge === "string" ? childAge.trim().slice(0, MAX_LEN.childAge) : "";
  const safeMessage = message.trim().slice(0, MAX_LEN.message);

  const to = process.env.CONTACT_TO_EMAIL?.trim().toLowerCase();
  const from = process.env.RESEND_FROM?.trim();

  if (!to || to !== SITE.contactEmail) {
    console.error("CONTACT_TO_EMAIL missing or invalid, refusing to send");
    return Response.json(
      { error: "Kontaktní formulář je dočasně nedostupný." },
      { status: 503 }
    );
  }
  if (!from) {
    console.error("RESEND_FROM missing, refusing to send");
    return Response.json(
      { error: "Kontaktní formulář je dočasně nedostupný." },
      { status: 503 }
    );
  }

  const subject = `Dotaz Svou Cestou — ${interestLabel(interest)}`;
  const text = [
    `Jméno: ${safeName}`,
    `E-mail: ${safeEmail}`,
    `Věk dítěte / ročník: ${safeChildAge || "-"}`,
    `Zájem: ${interestLabel(interest)}`,
    "",
    safeMessage || "(bez textu zprávy)",
  ].join("\n");

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: safeEmail,
    subject,
    text,
  });

  if (error) {
    console.error("Resend send failed:", error);
    return Response.json({ error: GENERIC_SEND_ERROR }, { status: 502 });
  }

  return Response.json({ ok: true });
}
