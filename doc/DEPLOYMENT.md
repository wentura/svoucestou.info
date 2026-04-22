# Deployment (Netlify)

## Prostředí
- `preview` - kontrola změn před produkcí.
- `production` - veřejný web `https://www.svoucestou.info`.

## Povinné env proměnné
- `RESEND_API_KEY` - API klíč pro odesílání e-mailů.
- `RESEND_FROM` - ověřený odesílatel.
- `CONTACT_TO_EMAIL` - cílový e-mail pro leady (platná e-mailová adresa).
- `UPSTASH_REDIS_REST_URL` - URL pro persistentní rate limit (doporučeno).
- `UPSTASH_REDIS_REST_TOKEN` - token pro Upstash (doporučeno).

## Release flow
1. Merge do hlavní větve.
2. Netlify preview kontrola.
3. `npm run lint`, `npm run build`, smoke test.
4. Promotion na produkci.
5. Post-release smoke podle `doc/QA_CHECKLIST.md`.

## Rollback
1. Identifikuj poslední zdravý deploy na Netlify.
2. Proveď rollback na poslední stabilní deploy.
3. Zapiš incident a příčinu do `doc/DECISIONS.md`.
4. Připrav hotfix až po potvrzení root cause.
