# KisanStatus — SEO Audit & Fix Log

**Audit date:** 2026-08-05
**Ahrefs Site Audit project:** 10042735 ("Kisanstatus", target `kisanstatus.com/`)
**Crawl analysed:** 2026-08-04 21:05 UTC — verified project, GSC linked
**Branch:** `seo-fixes`

---

## 1. Ahrefs Site Audit — crawl summary

| Metric | Value |
|---|---|
| Health Score | **100 / 100** |
| Pages crawled | 373 |
| Broken pages | **0** |
| Redirects | 3 |
| Blocked pages | 0 |
| Δ vs previous crawl | health 0, +15 crawled |

Ahrefs evaluated **173 issue definitions**; only **6 were active** (`count > 0`).
**Zero Critical issues.**

### Active issues, by severity

| Level | Issue | Pages | Verified against real data | Verdict |
|---|---|---|---|---|
| Warning | 3XX redirect | 3 | `http://www.kisanstatus.com/`, `http://kisanstatus.com/`, `https://www.kisanstatus.com/` | **False positive** — these are the intended canonical/protocol redirects |
| Warning | Slow page | 2 | `/articles/drip-sprinkler-irrigation-subsidy`, `/articles/PmKisanEkycOnline2026` | **Real** — open item, see §4 |
| Notice | Pages to submit to IndexNow | 82 | — | Ahrefs UI action, not a code fix |
| Notice | Page and SERP titles do not match | 4 | All four differ only in separator (`\|` vs `-`) | **False positive** — Google rewrites the separator |
| Notice | HTTP to HTTPS redirect | 2 | www / protocol variants | **False positive** — intended |
| Notice | Redirect chain | 1 | `http://www.kisanstatus.com/` (http+www → https, 2 hops) | Minor, host-level |

**Conclusion:** technically the site is clean in Ahrefs' view. 4 of the 6 active
issues are false positives, 1 is a dashboard action, 1 is a real performance item.

---

## 2. Source-code audit — issues Ahrefs could not see

Ahrefs reported 0 broken pages, but the crawler never followed several
navigation and widget links whose targets do not exist as routes. A direct
audit of the repo against the actual route table found **6 real defects**.

Method: extracted every internal `href` from `app/`, `components/`, `lib/`
and diffed it against the real route set (`app/**/page.tsx` + the slug lists in
`lib/articles-data.ts`, `lib/maandhan-data.ts`, `lib/rajya-yojana-data.ts`).

### 🔴 Critical

**C1 — Header navigation contained two 404 links, on every page**
`lib/site-config.ts` → `MAIN_NAVIGATION`

| Broken href | Status | Fixed to |
|---|---|---|
| `/pm-kisan-ekyc` | no such route | `/articles/PmKisanEkycOnline2026` |
| `/pm-kisan-registration` | no such route | `/articles/PmKisanMasterGuide2026` |

`MAIN_NAVIGATION` renders in the site header, so this was **373 pages × 2 dead
links**, both marked `priority: 0.9`. **Fixed.**

**C2 — `env.local` was committed to git** (commit `4b43a3e "Create env.local"`)
The file's own header says *"NEVER commit .env.local to git"*. `.gitignore`
listed `.env.local` (with a leading dot) but the committed file was named
`env.local` (no dot), so the rule never matched.
**Fixed** — removed from the index and `.gitignore` hardened with `.env.*`,
`env.local`, `env.*.local` (plus `!.env.example`).

> ⚠️ **Action required by the site owner:** removing the file from `HEAD` does
> not purge it from git history. Any credential that was ever in `env.local`
> should be treated as exposed and **rotated** (GA/GTM IDs are low risk;
> rotate any API keys or tokens). Purging history requires a force-push
> (`git filter-repo`) and is deliberately left to the owner.

### 🟠 Warning

**W1 — Eight broken internal links from the calculator template**
`components/KisanCalculatorPage.tsx` → `RELATED_ARTICLES` (7) and
`app/author/page.tsx` (1). The widget renders on all 7 calculator pages.

Root cause: the hrefs were written in kebab-case while the real article slugs in
`lib/articles-data.ts` are PascalCase.

| Broken href | Fixed to | Note |
|---|---|---|
| `/articles/kisan-rin-kaha-se-le-2026` | `/articles/KisanRinKahaSeLe2026` | case fix |
| `/articles/kisan-tractor-loan-2026` | `/articles/KisanTractorLoan2026` | case fix |
| `/articles/pmfby-crop-insurance-2026` | `/articles/PmfbyCropInsurance2026` | case fix |
| `/articles/pm-kisan-payment-failed-fix-2026` | `/articles/PmKisanPaymentFailedFix2026` | case fix (×2 sites) |
| `/articles/pm-kisan-21vi-installment-status-check` | `/articles/PmKisan24viKist2026` | was a 301 hop; now direct |
| `/articles/pm-kisan-payment-failed-status-2026` | `/articles/PmKisanPaymentFailedFix2026` | was a 301 hop; now direct |
| `/articles/pm-kisan-installment-history-check-online` | `/articles/PmKisanMasterGuide2026` | ⚠️ **no dedicated article exists** — interim target |
| `/articles/pm-kisan-registration-online-2026` | `/articles/PmKisanMasterGuide2026` | ⚠️ **no dedicated article exists** — interim target |

**Fixed.** The last two are interim: they point at the master guide so nothing
404s, but they deserve their own articles (see §4).

**W2 — Two fully-written pages are dead code**
`next.config.js` declares a 301 for a route that also has a `page.tsx`, so the
redirect always wins and the page never renders:

| Route | Page file | Redirect destination |
|---|---|---|
| `/pm-kisan-status` | `app/pm-kisan-status/page.tsx` | `/articles/PmKisan24viKist2026` |
| `/new-registration` | `app/new-registration/page.tsx` | `/articles/PmKisanMasterGuide2026` |

`/pm-kisan-status` is in `MAIN_NAVIGATION` at `priority: 0.9`, so a
high-intent page is being thrown away. **Open — owner decision needed (§4).**

### 🟡 Notice

**N1 — Indexable routes missing from the sitemap**
`/author` and `/official-links` are both indexable (canonical set,
`robots: index:true`) but absent from `app/sitemap.ts`. `/author` is the
E-E-A-T author page, which matters for YMYL topics like government schemes.
**Fixed** — both added.

Correctly excluded and left alone: `/search` and `/speed-insights`
(`robots: index:false`), the two `/download` sub-routes, and the two dead
routes from W2.

**N2 — Sitemap `lastModified` was frozen in the past**
`app/sitemap.ts` had `const REFERENCE_DATE = new Date('2026-07-20T00:00:00+05:30')`
hardcoded. Every `lastModified` that fell back to it reported a stale
`<lastmod>` regardless of deploy date. **Fixed** — now `new Date()`.

---

## 3. What was already correct — do not "fix" these

Verified as healthy; changing them would regress SEO:

- **Structured data** — JSON-LD across 64 files: `FAQPage` (8), `Article` (8),
  `BreadcrumbList` (5), `Organization` (16), `WebPage` (8), `ImageObject` (8),
  10 × `Question`/`Answer`. Strong rich-result coverage.
- **AEO / GEO** — `app/llms.txt/route.ts` implements the llms.txt spec and is
  generated from the same source of truth as the sitemap, so it cannot drift.
  `geo.region`/`geo.position`/`ICBM` meta present; `lang="hi-IN"`, `hi_IN` OG locale.
- **AI-bot policy** in `app/robots.ts` — deliberate allow/deny split
  (GPTBot, ClaudeBot, PerplexityBot, Applebot allowed; CCBot, Google-Extended,
  Bytespider, SemrushBot, MJ12bot, DotBot, BLEXBot denied). AhrefsBot allowed.
- **Titles & meta descriptions** — every entry in `articles-data.ts` is within
  length limits (0 titles > 60 chars, 0 descriptions > 160 chars).
- **Security headers** — HSTS w/ preload, X-Frame-Options, nosniff,
  Referrer-Policy, Permissions-Policy in `next.config.js`.
- **Canonicalisation** — `www` → apex 301 and per-page canonicals in place.
- **Soft-404 handling** — dynamic routes correctly `noindex` their not-found shells.
- **Caching** — immutable long-cache for `/images`, `/_next/static`, `/fonts`;
  s-maxage + stale-while-revalidate on content routes.
- **`middleware.ts`** — strips only spam params; `gclid` deliberately preserved
  for ad attribution.

---

## 4. Open items — need an owner decision

1. **`/pm-kisan-status` and `/new-registration` (W2).** Both have complete
   pages blocked by a 301. Either **(a)** remove the redirect so the pages go
   live — `/pm-kisan-status` is already in the nav at priority 0.9 — or
   **(b)** delete the page files and keep the redirects. Not actioned either way.
2. **Two missing articles (W1).** `pm-kisan-installment-history-check-online`
   and `pm-kisan-registration-online-2026` are linked from the calculator
   template but were never written. Both currently point at
   `PmKisanMasterGuide2026`. Either write them or drop the links.
3. **Slow pages (Ahrefs Warning).** `/articles/drip-sprinkler-irrigation-subsidy`
   and `/articles/PmKisanEkycOnline2026` are flagged as slow. Needs a profiling
   pass (page weight, image sizes, client-component boundaries) — not attempted
   here because it is a performance task, not a link/metadata fix.
4. **Rotate any secrets** that were in `env.local` (see C2) and decide whether
   to purge git history.
5. **Off-page SEO** — backlinks / DR / referring domains cannot be fixed in this
   repo. Requires a separate Ahrefs Site Explorer pull and a link-acquisition plan.
6. **IndexNow (82 pages).** Repo has `scripts/submit-indexnow.js`; Ahrefs can
   also submit from the issue report. Worth wiring into the deploy step.

---

## 5. Changes in this branch

| File | Change |
|---|---|
| `lib/site-config.ts` | C1 — 2 nav 404s repointed to real articles |
| `components/KisanCalculatorPage.tsx` | W1 — 7 broken hrefs in `RELATED_ARTICLES` fixed |
| `app/author/page.tsx` | W1 — 1 broken href fixed |
| `app/sitemap.ts` | N1 — `/author` + `/official-links` added; N2 — dynamic `REFERENCE_DATE` |
| `.gitignore` | C2 — env patterns hardened |
| `env.local` | C2 — deleted / removed from index |
| `SEO-AUDIT.md` | this file |

**Verification:** internal-link diff re-run after the edits —
**0 broken internal links remaining** (was 10).

### Pages to re-check in a browser after deploy

- Any page — confirm the header **eKYC Guide** and **Registration** links resolve (C1)
- `/calculator/quick-status-check` — the `RELATED_ARTICLES` widget, all 8 links (W1)
- `/calculator/kcc-loan-emi` — same widget, second sample
- `/author` — confirm the Payment-Failed card link resolves (W1)
- `/sitemap.xml` — confirm `/author` + `/official-links` appear and `<lastmod>` is current (N1, N2)

Then **trigger a fresh Ahrefs crawl** (project 10042735 → Site Audit → Run crawl)
and compare the issue counts against §1.
