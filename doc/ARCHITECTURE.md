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
- `app/api/contact/challenge/route.js` - endpoint pro rotující anti-spam otázku.
- `components/*` - UI bloky, navigace, formulář.
- `lib/site-config.js` - source of truth pro host, kontakt a ceny.
- `lib/contact-rate-limit.js` - rate limit (Upstash + in-memory fallback).
- `lib/contact-challenge.js` - generování a ověření podepsaného anti-spam challenge tokenu.

## Tok kontaktního formuláře
1. Uživatel odešle `ContactForm`.
2. Klient načte z `/api/contact/challenge` rotující otázku + podepsaný token.
3. Klient pošle JSON na `/api/contact` včetně honeypot, odpovědi a challenge tokenu.
4. API zkontroluje origin/referer, anti-spam token, časový limit odpovědi, rate limit a validaci polí.
5. API odešle e-mail přes Resend.
6. Klient dostane obecnou success/error zprávu bez technických detailů.
