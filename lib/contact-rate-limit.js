/**
 * Jednoduchý rate limit v paměti procesu (2 požadavky / min / IP).
 * Na serverless více instancí = limit na instanci; pro vyšší přesnost použijte Redis/Upstash.
 */
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 2;

const buckets = new Map();

export function allowContactSubmit(ip) {
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
