# QA checklist

## Pre-release
- [ ] `npm ci`
- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] `npm run smoke`

## Post-release smoke
- [ ] `/` vrací 200 a obsahuje hlavní nadpis.
- [ ] `/skola`, `/skolka`, `/cenik`, `/kontakt`, `/novinky` vrací 200.
- [ ] `sitemap.xml` a `robots.txt` vrací 200.
- [ ] canonical host je `https://www.svoucestou.info`.
- [ ] formulář projde end-to-end odesláním.
- [ ] footer year odpovídá aktuálnímu roku.
