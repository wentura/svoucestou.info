# Content model

## Zdroj pravdy
- Primární source of truth: `lib/site-config.js`.
- Tento dokument popisuje význam hodnot, ale neobsahuje runtime logiku.

## Ceny
- `PRICING.monthlyTuitionCzk`: 6500
- `PRICING.siblingDiscountPercent`: 10
- `PRICING.skolkaDays`: učící úterý až čtvrtek
- `PRICING.skolaDays`: sportovní pondělí, učící úterý až čtvrtek

## Kontaktní údaje
- `SITE.contactEmail`: info@svoucestou.info
- `SITE.contactPhoneDisplay`: 777 687 496
- `SITE.contactPhoneHref`: +420777687496
- `SITE.addressStreet`: Nebužely 3, mlýn Kroužek
- `SITE.addressCity`: Nebužely
- `SITE.addressPostalCode`: 277 34
- `SITE.founderName`: Montessori Guru z.s.

## Pravidla změn
- Při změně hodnot v `lib/site-config.js` aktualizuj tento dokument ve stejném PR.
- Pokud je změna obchodního rozhodnutí (cena/kontakt), zapiš ji i do `doc/DECISIONS.md`.
