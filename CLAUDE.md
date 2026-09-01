# Kisanstatus — Site Audit fix notes

## Tech stack
- Next.js (App Router), TypeScript, Tailwind. Deployed on Vercel (`vercel.json`).
- Article metadata is data-driven:
  - `lib/yojana-2026-data.ts` → `/yojana/<slug>` pages (title ≤46 chars rule in comment; root layout appends " - KisanStatus").
  - `lib/core-articles-data.ts` → `/articles/<slug>` pages; supports per-article `noindex: true` flag (rendered via `robots` in `app/articles/[slug]/page.tsx`).
- Static pages (`app/about`, `app/contact`, `app/privacy-policy`, `app/terms-of-service`, `app/disclaimer`) set `robots: { index: false, follow: true }` **intentionally**.

## Fixes applied (2026-08-22, commit ba4113bf on main)
- "Meta description too long" (5 pages, all in `lib/yojana-2026-data.ts`): trimmed descriptions to ≤160 chars, keeping key facts/keywords.

## Fixes applied (2026-09-01, commit bf54581c on main)
From crawl 2026-09-01 (health 98.4, 568 pages).
- "Inconsistent AI training bot policy" (112 pages): `app/robots.ts` had a split policy — GPTBot/ClaudeBot/PerplexityBot allowed while CCBot/Google-Extended/Bytespider were disallowed. Owner's decision: **strictly block AI training crawlers**. All training bots now in one disallow block, plus newer agents (OAI-SearchBot, Perplexity-User, Meta-ExternalAgent/Fetcher, omgili, Timpibot, ImagesiftBot). `Applebot` (Siri/Spotlight *search*) stays allowed; `Applebot-Extended` blocked. SEO crawlers (SemrushBot/MJ12bot/DotBot/BLEXBot) split into their own block — different rationale, keeps the AI list maintainable.
- "Page has links to redirect" (6 indexable pages): all 6 pointed at `/articles/fto-status-check-paisa-kab-aayega` → 308. That fold was deliberate (commit 3bb9d4d6: 0-click duplicate → pm-kisan-fto-generated-ka-matlab-kya-hai, 28 clicks). Fixed the *links*, not the redirect: repointed in `PmKisanFaceAuthenticationEkyc.tsx`, `PmKisanSelfRegisteredStatusCheck.tsx`; removed from `pm-kisan-fto-generated-ka-matlab-kya-hai.tsx` related-list (it linked back to its own page). Redirect + noindex data entry deliberately untouched.
- "Meta description too long" (6 indexable pages): trimmed to 121–134 chars keeping concrete numbers — `lib/core-articles-data.ts` (fto-generated, PmKisan24viKist2026), `lib/loan-mandi-pashupalan-data.ts` (gehu-ka-bhav, jansamarth), `lib/maandhan-data.ts` (pmkmy-bank-account-change, pmkmy-grievance).

### Also fixed (2026-09-01, commit f1deb071)
- "Missing reciprocal hreflang (no return-tag)" (9 pages): `lib/hindi-hreflang.ts` checked `DEINDEXED_PATHS` only against the *counterpart* URL, so a de-indexed page still emitted a full hi-IN/hi-Latn/x-default set pointing at its indexed partner while the partner pointed back at nothing — a one-way annotation. Both builders now also test the page being rendered, so de-indexed pages emit self-referencing alternates only. All 21 mapped pairs verified.

### Deferred, with reasoning (2026-09-01)
- Whether those 19 de-indexed Hindi/yojana pages *should* stay noindex is still open (see Part 1, commit 3bb9d4d6). Strategy call, not a code fix — the hreflang output is now correct either way.
- "Page and SERP titles do not match" (4 pages) — Google rewriting titles; source titles are fine. No action.
- "Noindex page" / "Noindex follow page" (25 each, same set) — verified against the crawl: 19 are the spam-hit de-indexed set in `DEINDEXED_PATHS`, 5 are the deliberate legal/static pages (about, contact, privacy-policy, terms-of-service, disclaimer), 1 is `PmKisan25viKist2027` held back until release. All intentional; forcing them indexable would undo the recovery work.
- "3XX redirect" (4) — verified: 3 are canonicalisation hops (`http://`, `http://www`, `https://www` → apex) and 1 is the deliberate FTO fold. Correct behaviour, handled at Vercel level, not app code.
- "Redirect chain" (1) and "HTTP to HTTPS redirect" (2) — same canonicalisation chain (`http://www` → `https://` → apex). Unavoidable for the www+http entry point; the links dataset returns 0 internal links into it, so nothing on-site points at a chain.
- "Slow page" (1) — `/articles/enam-registration-kaise-kare`, 25s in crawl, page is 28KB. Transient crawl artifact; re-check next crawl.

## Known false positives / intentional findings
- "Noindex page" warning (6 pages): about/contact/privacy/terms/disclaimer are deliberate; `/articles/PmKisan26viKist` is deliberately noindexed until 25vi kist releases (see comment in `lib/core-articles-data.ts` ~line 403).
- "3XX redirect" warning (3): http→https and www→apex 308 redirects — correct canonicalization, not fixable in app code (handled at platform/Vercel level).
- "Slow page": `/articles/enam-registration-kaise-kare` measured 25s load in crawl — likely a transient crawl artifact (page is 28KB); re-check after next crawl.
