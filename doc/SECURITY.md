# Security

## Aktuální minimum
- Contact route je fail-closed při chybějících kritických env.
- Povinná kontrola Origin/Referer pro `/api/contact`.
- Honeypot + rotující podepsaná bezpečnostní otázka.
- Odpověď má minimální i maximální časový limit.
- Rate limit: Upstash persistentní, fallback in-memory.
- Uživatel dostává pouze obecné chyby, technické detaily jdou do server logů.

## Known risks
- Bez nakonfigurovaného Upstash běží rate limit jen v paměti instance.
- Matomo běží v minimalistickém režimu, nutné držet transparentní komunikaci v privacy dokumentaci.

## Release security checklist
- [ ] `CONTACT_TO_EMAIL` je nastavený na schválenou cílovou schránku.
- [ ] `RESEND_FROM` používá ověřenou doménu.
- [ ] Endpoint `/api/contact/challenge` vrací otázku + token bez cache.
- [ ] Bezpečnostní otázka ve formuláři odpovídá serverové validaci.
- [ ] Anti-spam token je platný a není expirovaný.
- [ ] Upstash je dostupný (nebo je zdokumentovaný fallback).
- [ ] Formulář vrací netechnické chyby.
