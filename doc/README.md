# Dokumentace projektu SvouCestou.info

Tento adresář je provozní zdroj pravdy pro technický provoz webu `www.svoucestou.info`.

## Jak dokumentaci číst
1. `AGENTS.md` - pravidla práce v repozitáři.
2. `ARCHITECTURE.md` - struktura aplikace a datové toky.
3. `DEPLOYMENT.md` - Netlify deploy, release a rollback.
4. `SECURITY.md` - bezpečnostní minimum, formulář, anti-spam.
5. `SEO_A11Y.md` - canonical host, metadata, sitemap, a11y.
6. `CONTENT_MODEL.md` - source of truth pro ceny a kontakty.
7. `QA_CHECKLIST.md` - pre/post-release kontrola.
8. `CHANGELOG_PROCESS.md` - jak zapisovat změny.
9. `DECISIONS.md` - krátké ADR záznamy klíčových rozhodnutí.

## Provozní pravidla
- Každá změna produkčního chování musí aktualizovat relevantní soubor v `doc/` ve stejném PR.
- Nejprve stabilita, potom elegance.
- URL veřejných stránek se nemění bez explicitního rozhodnutí.
- Přidávej změny po malých dávkách, vždy s ověřením `lint` + `build`.
