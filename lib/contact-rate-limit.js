/**
 * Preferuje persistentní limit v Upstash Redis (pokud je nakonfigurováno),
 * jinak padá zpět na in-memory fallback.
 */
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 2;
const WINDOW_SECONDS = 60;

const buckets = new Map();

async function allowContactSubmitInMemory(ip) {
  const now = Date.now();
  let times = buckets.get(ip);
  if (!times) {
    times = [];
    buckets.set(ip, times);
  }
  const recent = times.filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    buckets.set(ip, recent);
    return false;
  }
  recent.push(now);
  buckets.set(ip, recent);
  return true;
}

async function allowContactSubmitInUpstash(ip) {
  const url = process.env.UPSTASH_REDIS_REST_URL?.trim();
  const token = process.env.UPSTASH_REDIS_REST_TOKEN?.trim();

  if (!url || !token) {
    return null;
  }

  const key = `contact:rate:${ip}:${Math.floor(Date.now() / WINDOW_MS)}`;
  const api = `${url}/pipeline`;

  const body = JSON.stringify([
    ["INCR", key],
    ["EXPIRE", key, WINDOW_SECONDS],
  ]);

  const res = await fetch(api, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body,
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Upstash rate-limit request failed with ${res.status}`);
  }

  const data = await res.json();
  const count = Number(data?.[0]?.result ?? data?.result?.[0] ?? NaN);
  if (Number.isNaN(count)) {
    throw new Error("Upstash rate-limit response parse failed");
  }

  return count <= MAX_PER_WINDOW;
}

export async function allowContactSubmit(ip) {
  try {
    const persistentResult = await allowContactSubmitInUpstash(ip);
    if (typeof persistentResult === "boolean") {
      return persistentResult;
    }
  } catch (error) {
    console.error("Persistent rate limit unavailable, using memory fallback:", error);
  }

  return allowContactSubmitInMemory(ip);
}
