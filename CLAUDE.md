# Kisanstatus — project notes for AI sessions

## Tech stack
- Next.js (App Router) + TypeScript + Tailwind, deployed on Vercel (`vercel.json`, region bom1).
- Article content lives in per-article React components under `components/articles/`;
  metadata lives in data files under `lib/`:
  - `lib/articles-data.ts` — Hinglish articles (`/articles/<slug>`). Supports `seoTitle` override.
  - `lib/hindi-articles-data.ts` — Devanagari articles (`/articles/hi/<slug>`). Supports `seoTitleHi` override (added 2026-08-10).
  - `lib/rajya-yojana-data.ts`, `lib/maandhan-data.ts`, `lib/loan-mandi-pashupalan-data.ts` — other sections.
- `<title>` template is `%s | KisanStatus` (14 extra chars) in `app/layout.tsx`. Keep the `%s` part ≤ 46 chars to stay under 60.
- Redirects are consolidated in `next.config.js` (incl. www → apex host rule). `http→https` and `www→apex` hops are Vercel/host-level — not fixable in repo, and Ahrefs flags them as Notice only.

## Gotchas / patterns
- Article slugs are case-sensitive and inconsistent (some PascalCase like `PmKisan24viKist2026`, some kebab-case). Always grep `lib/*-data.ts` for the real slug before writing an internal `<Link>`. The `component:` field is the React component name, NOT the slug.
- 2026-08-10: broken link `/articles/PmKisanSelfRegisteredStatusCheck` (component name used as slug) — real slug is `pm-kisan-self-registered-status-check`.
- npm registry installs are blocked by the workspace firewall — can't run `tsc`/build locally; keep edits minimal and reviewable.

## Ahrefs Site Audit
- Project id 10042735, target kisanstatus.com. Health ~99.6.
- Known non-defects: "Pages to submit to IndexNow" (submission suggestion), http/www redirect notices (host-level).
