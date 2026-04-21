# SEO a A11Y

## Canonical a host
- Canonical host je `https://www.svoucestou.info`.
- `metadataBase`, `openGraph.url`, `robots` a `sitemap` musí používat stejný host.

## Sitemap a robots
- Sitemap obsahuje jen veřejné routy.
- API routy nejsou indexované.
- `robots.ts` odkazuje na canonical sitemap.

## Obsahové invarianty
- Ceny jsou konzistentní mezi `/skola`, `/skolka`, `/cenik`.
- Kontaktní údaje jsou konzistentní napříč webem.
- Footer zobrazuje aktuální rok.
- Veřejná navigace obsahuje odkaz na `Ceník`.

## A11Y minimum
- Formulářové prvky mají labely.
- Chyby formuláře mají `role="alert"`.
- Interaktivní odkazy a tlačítka mají srozumitelný text.
