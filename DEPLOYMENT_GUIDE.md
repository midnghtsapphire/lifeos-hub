# Deployment Guide (Vercel)

## Prerequisites

- Vercel project linked to this repository
- Supabase project configured
- Environment variables available:
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_PUBLISHABLE_KEY`

## GitHub → Vercel automation

1. Import this repository into Vercel.
2. Set Framework Preset to **Vite**.
3. Set build command to `npm run build`.
4. Set output directory to `dist`.
5. Add production + preview environment variables.
6. Enable automatic deploys on pushes to the tracked branch.

## Manual validation after deploy

1. Open homepage and confirm landing sections render.
2. Navigate to `/login` and `/signup`.
3. Validate protected-route behavior on `/dashboard`.

## Website in Test tracking

- Platform: Vercel
- URL: `TBD`
