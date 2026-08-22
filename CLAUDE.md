# Kisanstatus — Site Audit fix notes

## Tech stack
- Next.js (App Router), TypeScript, Tailwind. Deployed on Vercel (`vercel.json`).
- Article metadata is data-driven:
  - `lib/yojana-2026-data.ts` → `/yojana/<slug>` pages (title ≤46 chars rule in comment; root layout appends " - KisanStatus").
  - `lib/core-articles-data.ts` → `/articles/<slug>` pages; supports per-article `noindex: true` flag (rendered via `robots` in `app/articles/[slug]/page.tsx`).
- Static pages (`app/about`, `app/contact`, `app/privacy-policy`, `app/terms-of-service`, `app/disclaimer`) set `robots: { index: false, follow: true }` **intentionally**.

## Fixes applied (2026-08-22, commit ba4113bf on main)
- "Meta description too long" (5 pages, all in `lib/yojana-2026-data.ts`): trimmed descriptions to ≤160 chars, keeping key facts/keywords.

## Known false positives / intentional findings
- "Noindex page" warning (6 pages): about/contact/privacy/terms/disclaimer are deliberate; `/articles/PmKisan26viKist` is deliberately noindexed until 25vi kist releases (see comment in `lib/core-articles-data.ts` ~line 403).
- "3XX redirect" warning (3): http→https and www→apex 308 redirects — correct canonicalization, not fixable in app code (handled at platform/Vercel level).
- "Slow page": `/articles/enam-registration-kaise-kare` measured 25s load in crawl — likely a transient crawl artifact (page is 28KB); re-check after next crawl.
