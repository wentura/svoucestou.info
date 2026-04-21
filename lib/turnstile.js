const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

/**
 * Ověří Cloudflare Turnstile token.
 * Vrací objekt s výsledkem a bezpečnou chybou pro klienta.
 */
export async function verifyTurnstileToken({ token, ip }) {
  const secret = process.env.TURNSTILE_SECRET_KEY?.trim();
  const isProd = process.env.NODE_ENV === "production";

  if (!secret) {
    return {
      ok: !isProd,
      error: isProd
        ? "Odeslání formuláře je dočasně nedostupné."
        : null,
      reason: "missing_secret",
    };
  }

  if (typeof token !== "string" || token.trim().length < 8) {
    return {
      ok: false,
      error: "Ověření proti spamu selhalo. Zkuste to prosím znovu.",
      reason: "missing_token",
    };
  }

  const form = new URLSearchParams();
  form.set("secret", secret);
  form.set("response", token.trim());
  if (ip && ip !== "unknown") {
    form.set("remoteip", ip);
  }

  try {
    const response = await fetch(VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: form.toString(),
      cache: "no-store",
    });
    const data = await response.json();

    if (!data?.success) {
      return {
        ok: false,
        error: "Ověření proti spamu selhalo. Zkuste to prosím znovu.",
        reason: "verification_failed",
      };
    }

    return { ok: true, error: null, reason: "ok" };
  } catch {
    return {
      ok: false,
      error: "Odeslání formuláře je dočasně nedostupné.",
      reason: "verification_error",
    };
  }
}
