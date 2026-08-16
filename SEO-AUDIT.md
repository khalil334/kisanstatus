# KisanStatus.com — SEO & Bug Audit

**Date:** 2026-08-16 (audit crawl)
**Scope:** Live site (all 138 sitemap URLs crawled) + GitHub repo `khalil334/kisanstatus` (main branch)
**Overall verdict:** 🟢 **Healthy.** Fundamentals are solid — no broken links, no missing/duplicate titles or descriptions, clean canonicals, single H1 per page, structured data everywhere, HSTS, proper 308 redirects, working 404s. The findings below are polish items and a few real risks, ordered by priority.

---

## Summary scorecard

| Area | Status |
|---|---|
| HTTP status of all 138 sitemap URLs | ✅ 100% return 200 |
| Titles (present, unique, ≤60 chars) | ✅ Clean |
| Meta descriptions (present, unique, ≤160) | ✅ Clean (2 slightly short, see M4) |
| Canonicals | ✅ Present + self-referencing on all pages |
| H1 (exactly one per page) | ✅ Clean; `check-title-h1.js` passes (40/40) |
| Internal links | ✅ 0 broken, 0 redirect chains (79 checked) |
| robots.txt / sitemap.xml | ✅ Present, valid, cross-referenced |
| HTTPS / www / trailing-slash redirects | ✅ Single 308 to `https://kisanstatus.com` (no chains) |
| Structured data (JSON-LD) | ⚠️ Missing on 2 hub pages (M1) |
| og:image / twitter:card / og:locale | ✅ Present everywhere |
| Image alt text (homepage sample) | ✅ All images have alt |
| Security headers | ⚠️ CSP is Report-Only (H2) |
| Hreflang for Hindi/Hinglish variants | ✅ Implemented (see H1 correction) |
| Secrets in repo | ✅ None found (only `.env.example`) |
| XSS via search reflection | ✅ Not reflected (tested) |

---

## 🔴 High priority

### H1. ~~No hreflang between Hindi/Hinglish variants~~ — CORRECTED: already implemented ✅
**Correction (post-audit):** the initial crawl reported zero hreflang due to a case-sensitive check (`hreflang=` vs the rendered `hrefLang=`). The live pages **do** emit reciprocal `hi-IN` / `hi-Latn` / `x-default` alternates via `lib/hindi-hreflang.ts` for all 22 mapped Hindi/Hinglish pairs, and unpaired pages self-reference. No action needed. (Optional polish: `<html>` still declares `lang="hi-IN"` on Latin-script Hinglish pages; `hi-Latn-IN` would be more accurate.)

### H2. Content-Security-Policy is Report-Only — never enforced, and it's stale
`next.config.js:137` sends `Content-Security-Policy-Report-Only`, so the CSP protects nothing in practice. Worse, the policy is out of date: `connect-src` still allowlists `https://api.openweathermap.org`, but the code (`app/api/weather/route.ts`) migrated to Open-Meteo server-side. There is no `report-uri`/`report-to` endpoint either, so the "report" mode reports to nowhere.

**Fix:** Update the policy (drop `openweathermap`, verify GTM/GA needs) and switch the header key to `Content-Security-Policy`. With 91 `dangerouslySetInnerHTML` call sites in the codebase (most are JSON-LD, but some render table content, e.g. `PmKisanCscRegistrationCharges.tsx:332`), an enforced CSP is your safety net.

### H3. `dangerouslySetInnerHTML` used for non-JSON-LD content
Most of the 91 usages are JSON-LD script tags (fine), but a few inject HTML into page content, e.g.:
- `components/articles/PmKisanCscRegistrationCharges.tsx:332` — table cell `__html: check`
- `components/articles/rajya-yojana/PmKisanPatiPatniRule.tsx:474`
- `components/articles/rajya-yojana/AnnadataSukhibhavaStatusCheck.tsx:508`
- `components/articles/rajya-yojana/StateKisanYojanaHub.tsx:527`

Today the data is static/authored, so there's no live XSS — but it's a foot-gun: any future change that feeds user/API data into these paths becomes an XSS. (Search reflection was tested live: **not vulnerable**.)

**Fix:** Replace with plain JSX rendering where the content doesn't actually need HTML; where it does, sanitize or whitelist markup.

---

## 🟡 Medium priority

### M1. Missing JSON-LD on two hub pages
`/maandhan` and `/rajya-yojana` are the only 2 of 135 pages with **no structured data**. Both are section hubs with 14–15 child articles each — ideal candidates for `CollectionPage` + `ItemList` (and `BreadcrumbList`) schema.

### M2. Loading-placeholder text baked into SSR HTML
"Kripya thoda intezar karein, page/content load ho raha hai..." appears **6 times in the server-rendered homepage HTML** (`app/page.tsx:101`, `app/loading.tsx`, `components/HomeContent.tsx`). Crawlers index this text as page content, and it signals client-side-rendered sections whose real content may not be in the initial HTML. Check which homepage sections hydrate client-side and server-render them (or at minimum keep placeholder text out of the crawlable HTML).

### M3. Sitemap `<lastmod>` bulk-stamping
Many URLs share the identical build-time timestamp down to the millisecond (e.g. `2026-08-16T22:52:37.896Z` on 6+ URLs). When most `lastmod` values equal "last deploy time," Google learns to ignore the field entirely — losing you the recrawl-priority benefit on pages that genuinely changed. The repo already has `scripts/update-article-dates.js` deriving real git dates; feed those same dates into the sitemap generator instead of `new Date()` at build.

### M4. Two meta descriptions under ~110 chars
- `/articles/hi/category/loan` (100 chars)
- `/articles/PmfbyCropInsurance2026` (102 chars)

Not wrong, just leaving SERP real estate unused. Extend to ~140–160 chars with a keyword + CTA.

### M5. Inconsistent URL casing — CamelCase slugs
24 article URLs use CamelCase (`/articles/PmKisan24viKist2026`, `/articles/KisanTractorLoan2026`) while newer ones use kebab-case (`/articles/namo-drone-didi-yojana-shg-selection`). URLs are **case-sensitive** here (`/ARTICLES` → 404), so any lowercase mistyping/mislinking of a CamelCase slug 404s. Not worth a risky mass-migration now, but: (a) standardize on kebab-case for all new articles, (b) optionally add a middleware that 308-redirects a case-insensitive slug match to the canonical casing.

### M6. `ads.txt` is a live placeholder
`https://kisanstatus.com/ads.txt` serves only comments with `pub-XXXXXXXXXX` placeholders. Harmless pre-AdSense, but don't forget to fill it on approval — a placeholder ads.txt with no valid entries can block ad serving once you're live with AdSense.

---

## 🟢 Low priority / notes

### L1. Bot-blocking behaviour may catch legitimate tools
Requests with certain UA strings get **403** at the edge (observed live: a plain scripted UA was blocked; `python-requests`, browsers, and Googlebot pass). Verify the WAF/bot rules (Vercel firewall) aren't blocking tools you rely on — e.g. site-audit crawlers, uptime monitors, or social-preview fetchers. Ahrefs/Semrush note: `robots.txt` already blocks `SemrushBot`, `MJ12bot`, `DotBot`, `BLEXBot` — intentional, but remember it means those tools can't audit the site (AhrefsBot/AhrefsSiteAudit are allowed ✅).

### L2. `data.gov.in` public sample key hardcoded in `app/api/mandi/route.ts`
`PUBLIC_SAMPLE_KEY = '579b464d…'` is data.gov.in's published sample key, so it's not a secret leak — but it's rate-limited to partial data. The env override exists; make sure `MANDI_API_KEY` is actually set in Vercel so farmers see full mandi records. Also avoid `NEXT_PUBLIC_MANDI_API_KEY` as a fallback — `NEXT_PUBLIC_*` values get bundled into client JS, so a real key placed there would leak.

### L3. Intermittent slow responses
Three URLs timed out (>25s) on first crawl attempt and returned 200 (0.1–0.4s) on retry — likely ISR cold-cache misses. Fine for users (edge cache: `s-maxage=86400`), just be aware crawl-budget-sensitive bots occasionally hit a slow render.

### L4. Search page correctly `noindex, follow` ✅ and `robots.txt` blocks `/search?` ✅ — no action, just noting the double protection means Google never sees the noindex for blocked URLs. Harmless here since search URLs gain no links.

---

## What's genuinely good (keep doing it)

- Every page: unique title ≤60, unique description ≤160, self-canonical, exactly one H1, og:image, twitter:card, JSON-LD.
- Zero broken internal links; zero redirect chains in internal linking.
- `check-title-h1.js` CI script — real SEO regression testing, rare to see.
- `update-article-dates.js` deriving dates from git history — honest freshness signals.
- IndexNow submission pipeline (`indexnow:submit`) + `llms.txt` + RSS feed.
- HSTS with preload, proper 308 host canonicalization, sane cache headers per asset type in `vercel.json`.
- Well-segmented `robots.txt` (AI bots allowed, scrapers blocked, Ahrefs audit allowed).
- No secrets committed; only `.env.example` in repo.
- 449 images totalling just 32 MB — nothing over 200 KB. Disciplined.

---

## Suggested fix order

1. ~~H1 hreflang~~ — already implemented (audit correction).
2. **H2 enforce CSP** (quick config change after policy cleanup). ✅ Fixed in this commit.
3. **M1 hub-page JSON-LD** + **M3 real sitemap lastmod** (one PR, both touch generation code).
4. **H3 audit non-JSON-LD `dangerouslySetInnerHTML`** (refactor when touching those articles).
5. **M2 placeholder text / SSR** + **M4 short descriptions** (quick wins).
6. **M5/M6/L2** as ongoing conventions.

---

*Audit method: full crawl of all 138 sitemap URLs (status, title, description, canonical, robots meta, H1 count, OG tags, JSON-LD), internal-link check on 79 links from 7 hub pages, redirect/404/UA-block probes, live API endpoint tests, XSS reflection test on /search, and static analysis of the `main` branch source (secrets scan, dangerouslySetInnerHTML audit, config review). No changes were made to the site.*
