# Release smoke

## Před releasem
1. `npm run lint`
2. `npm run build`
3. `npm run smoke`

## Po releasu
Ověř:
- `/`
- `/skola`
- `/skolka`
- `/cenik`
- `/kontakt`
- `/novinky`
- `/sitemap.xml`
- `/robots.txt`

## Kritické invarianty
- Canonical host je `www.svoucestou.info`.
- Ceník je konzistentní mezi hlavními stránkami.
- Formulář vrací validní success/error stavy.
