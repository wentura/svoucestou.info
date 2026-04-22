import { createContactChallenge } from "@/lib/contact-challenge";

const GENERIC_ERROR = "Bezpecnostni kontrolu se nepodarilo nacist. Zkuste to znovu.";

export async function GET() {
  const secret = process.env.RESEND_API_KEY?.trim();
  if (!secret) {
    return Response.json({ error: GENERIC_ERROR }, { status: 503 });
  }

  const challenge = createContactChallenge({ secret });
  return Response.json(
    {
      prompt: challenge.prompt,
      token: challenge.token,
      ttlMs: challenge.ttlMs,
    },
    { headers: { "Cache-Control": "no-store" } }
  );
}
