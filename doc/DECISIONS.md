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

## 2026-04-21 - Analytics režim
- Rozhodnutí: Matomo v minimalistickém režimu, transparentně popsané v privacy stránce.
- Důvod: zachování základní provozní analytiky bez rozšiřování scope první vlny.
