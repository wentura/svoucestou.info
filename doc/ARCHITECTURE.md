# Architektura

## Stack
- Next.js App Router
- React
- Tailwind CSS
- Resend (odesílání leadů)
- Matomo pixel (minimal analytics)

## Klíčové části
- `app/*` - veřejné routy a metadata.
- `app/api/contact/route.js` - server route pro odeslání formuláře.
- `components/*` - UI bloky, navigace, formulář.
- `lib/site-config.js` - source of truth pro host, kontakt a ceny.
- `lib/contact-rate-limit.js` - rate limit (Upstash + in-memory fallback).
- `lib/turnstile.js` - ověření anti-spam tokenu.

## Tok kontaktního formuláře
1. Uživatel odešle `ContactForm`.
2. Klient pošle JSON na `/api/contact` včetně honeypot a Turnstile tokenu.
3. API zkontroluje origin/referer, anti-spam, rate limit, validaci polí.
4. API odešle e-mail přes Resend.
5. Klient dostane obecnou success/error zprávu bez technických detailů.
