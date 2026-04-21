# AGENTS pravidla

Tento dokument určuje minimální provozní standard pro AI agenty a editory.

## Hlavní zásady
1. Nejprve stabilita, potom rozšiřování.
2. Neměň veřejné URL bez explicitního rozhodnutí.
3. Každou změnu ověř minimálně přes `lint` a `build`.
4. Nezaváděj nový framework/CMS bez samostatného rozhodnutí.
5. Ceny, kontaktní údaje a canonical host mají jeden zdroj pravdy (`lib/site-config.js` + navazující docs).
6. Placeholder obsah musí být buď opravený, nebo skrytý/noindexovaný.
7. Pro env-závislé chování preferuj fail-closed.
8. Leady z formuláře nesmí jít do neautorizovaného fallback recipientu.
9. Každou významnou technickou změnu zapiš do `doc/DECISIONS.md`.

## Pracovní postup
1. Přečti `doc/README.md`.
2. Přečti relevantní návod v `skills/`.
3. Implementuj změnu v malé dávce.
4. Spusť lokální validace.
5. Aktualizuj dokumentaci ve stejném PR.
6. Připrav stručný release záznam.

## Definition of done
- `npm run lint` a `npm run build` prochází.
- Smoke testy hlavních rout prochází.
- Dokumentace odpovídá realitě.
- Změna nezhoršila SEO, a11y ani konzistenci obsahu.