# Security review

## Contact route checklist
- Fail-closed pro chybějící env (`RESEND_API_KEY`, `RESEND_FROM`, `CONTACT_TO_EMAIL`).
- Origin/Referer kontrola.
- Anti-spam (honeypot + bezpečnostní otázka).
- Rate limit (preferovaně persistentní Upstash).
- Bez technických error detailů směrem k uživateli.

## Další kontroly
- Neponechávat fallback recipienty mimo schválenou schránku.
- Ověřit, že privacy stránka odpovídá reálnému zpracování dat.
