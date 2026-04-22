# Decisions (ADR log)

## 2026-04-21 - Canonical host
- Rozhodnutí: canonical host je `https://www.svoucestou.info`.
- Důvod: jednotné SEO signály a konzistentní metadata.

## 2026-04-21 - Source of truth pro ceny a kontakty
- Rozhodnutí: hodnoty držet v `lib/site-config.js`.
- Důvod: odstranit drift mezi routami a dokumentací.

## 2026-04-21 - Contact recipient policy
- Rozhodnutí: jediný produkční recipient je `info@svoucestou.info`.
- Důvod: bezpečnost leadů a predikovatelné provozní chování.

## 2026-04-22 - Contact recipient policy update
- Rozhodnutí: `CONTACT_TO_EMAIL` může být libovolná schválená cílová schránka; pokud chybí, fallback je `SITE.contactEmail`.
- Důvod: jednodušší provoz a možnost dočasného směrování leadů bez změny kódu.

## 2026-04-22 - Anti-spam bez externí služby
- Rozhodnutí: nahradit statickou otázku rotující podepsanou challenge otázkou s časovým limitem (`/api/contact/challenge` + ověření v `/api/contact`).
- Důvod: lepší odolnost proti botům bez závislosti na externí anti-bot službě.

## 2026-04-21 - Analytics režim
- Rozhodnutí: Matomo v minimalistickém režimu, transparentně popsané v privacy stránce.
- Důvod: zachování základní provozní analytiky bez rozšiřování scope první vlny.
