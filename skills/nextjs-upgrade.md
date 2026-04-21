# Next.js upgrade

## Cíl
Držet Next/React/ESLint na patch level bez známých otevřených advisory.

## Postup
1. `npm outdated --json`
2. Aktualizace patch verzí (`next`, `react`, `react-dom`, `eslint-config-next`).
3. `npm audit fix`
4. Ověřit `npm run lint` a `npm run build`.

## Typické pasti
- `next lint` je zastaralé pro novější Next, používej `eslint .`.
- U ESLint 9+ preferuj `eslint.config.mjs`.
- Po změně major verze kontroluj peer dependencies.
