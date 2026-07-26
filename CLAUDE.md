# Kisanstatus — Ahrefs Site Audit fix notes

Ahrefs Site Audit project: **10042735** (target `kisanstatus.com/`, subdomains scope, verified).

## Tech stack
- **Next.js 16 App Router + TypeScript**, deployed on **Vercel**. Tailwind CSS.
- No CMS/database — all page content is in-repo (React components + TS data files).

## Content structure (important for fixes)
- Regular articles: route `/articles/<slug>` → `app/articles/[slug]/page.tsx`; data in `lib/articles-data.ts`.
- **Maandhan articles: route `/maandhan/<slug>`** (NOT `/articles/maandhan/`) → template `app/maandhan/[slug]/page.tsx`; data in `lib/maandhan-data.ts`; bodies are one component each in `components/articles/maandhan/`.
- Sitemap: `app/sitemap.ts` (maps maandhan articles to `/maandhan/<slug>`). Robots: `app/robots.ts`.
- Images live in `public/images/articles/maandhan/`. Referenced with `/images/...` absolute paths.

## Canonical pattern
- Root layout (`app/layout.tsx`) sets `alternates.canonical = SITE_URL` (homepage) as the default.
- **Every page/template must set its own self-referencing canonical** or it inherits the homepage one → "non-canonical page in sitemap". `app/articles/[slug]` and static pages do this; `app/maandhan/[slug]` did NOT until fixed (PR #7).
- `SITE_URL` exported from `lib/site-config.ts`.

## Known false-positive / gotchas
- Common bug pattern: internal links written as `/articles/maandhan/...` (old path) → 404. Correct path is `/maandhan/...`. Check any new maandhan links.

## Fixed so far
- PR #7 (branch `fix/tier1-critical-seo`): corrected 3 bad `/articles/maandhan/*` links in `PmKisanMaandhanStatusCheckOnline.tsx`; added self-canonical to `app/maandhan/[slug]/page.tsx`.

## Outstanding
- Broken image `public/images/articles/maandhan/csc-registration-process.webp` referenced in `PmKisanMaandhanRegistration2026.tsx` (line ~260) — file missing from repo. Needs the real image, a swap, or removal.
- 13 orphan pages (indexable, all under `/articles/`) — need internal links added. Editorial decision pending.
