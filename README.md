# LifeOS Hub


<!-- AUTO-PACKAGE-BADGES:START -->

<!-- AUTO-PACKAGE-BADGES:END -->
LifeOS Hub is a web app for unifying health, wealth, and insurance visibility into one personal operating system experience.

## What this repository does

- Public marketing + onboarding surface (`/`)
- Email/password and Google auth flows (`/login`, `/signup`)
- Auth-gated dashboard shell (`/dashboard`)
- Supabase-backed session/auth client integration

## How it can be used now

1. Start the app locally.
2. Connect Supabase credentials with `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`.
3. Run through auth and land in the dashboard shell.

## Website in Test (Vercel)

- URL: `TBD`
- Deployment automation reference: see `/DEPLOYMENT_GUIDE.md` (Vercel + GitHub flow).

## Value and goal alignment

- **Value:** consolidates fragmented personal operations into one UX.
- **Goal priority:** establish a trust-first, subscription-ready foundation for deeper AI-assisted life planning.
- **3-year growth target framing:** this repo supports the broader portfolio objective of building toward a $10M business line by shipping a credible front-to-back product surface quickly.

## Revenue projection framing

- Initial model: freemium onboarding + paid subscription tiers.
- Revenue levers: premium insights, integrations, and account-level personalization.
- See `/GO_TO_MARKET.md` for positioning and commercialization details.

## Research engine, suggestions, assets, and artifacts

- Research engine command: `npm run research:engine`
- Source research datasets:
  - `research/engine/suggestions.json`
  - `research/engine/assets.json`
  - `research/engine/artifacts.json`
- Artifact index: [artifacts/RESEARCH_ASSETS.md](./artifacts/RESEARCH_ASSETS.md)
- Generated research artifact: `artifacts/research-engine-output.json`

## Tech stack

- React + TypeScript + Vite
- Tailwind + shadcn/ui
- Supabase Auth/DB integration points

## Local development

```bash
npm install
npm run dev
```

## Validation commands

```bash
npm run lint
npm test
npm run build
npm run baseline:test
npm run baseline:build
npm run research:engine
```

## Standards documentation

- [CHANGELOG.md](./CHANGELOG.md)
- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
- [GO_TO_MARKET.md](./GO_TO_MARKET.md)
- [BRAND_GUIDELINES.md](./BRAND_GUIDELINES.md)
- [SECURITY.md](./SECURITY.md)
- [artifacts/RESEARCH_ASSETS.md](./artifacts/RESEARCH_ASSETS.md)
