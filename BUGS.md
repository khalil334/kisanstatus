# KisanStatus — Bug & Issue Audit (2026-08-07)

Full audit of the live site (kisanstatus.com, all 94 sitemap URLs) and this repository
(commit `a45eadd`). Grouped by severity. TypeScript compiles clean (`tsc --noEmit`);
all live pages return 200; no duplicate titles/descriptions; all 331 images resolve
with alt text; JSON-LD is valid. The items below are what's actually broken or risky.

---

## 🔴 High

### 1. `next` has 9 known high-severity vulnerabilities (npm audit)
- **Where:** `package.json` → `next@16.2.7`
- **What:** `npm audit` flags high-severity advisories against the installed Next.js range, including cache confusion (GHSA-68g3-v927-f742), SSRF in rewrites (GHSA-p9j2-gv94-2wf4), DoS in the Image Optimization API via SVGs (GHSA-q8wf-6r8g-63ch), and unauthenticated disclosure of Server Function endpoints (GHSA-955p-x3mx-jcvp). This site uses App Router + `next/image` heavily, so several of these apply.
- **Fix:** upgrade to `next@16.3.0` (latest patched): `npm install next@16.3.0 eslint-config-next@16.3.0 @next/bundle-analyzer@16.3.0`, then run the build to confirm. Also run `npm audit fix` for the transitive `brace-expansion`, `js-yaml`, `postcss`, `sharp` advisories.

### 2. Conflicting redirects for `/pm-kisan-status` (Vercel wins, Next.js config is dead code)
- **Where:** `vercel.json:50` → `/calculator/quick-status-check`; `next.config.js:82` → `/articles/PmKisan24viKist2026`
- **What:** the same source path redirects to two different destinations. Vercel platform redirects run before Next.js ones, so the live site sends users to the calculator, and the `next.config.js` entry silently never runs. Same double-definition pattern for `/author` and `/official-links` (defined only in `vercel.json` while their page components still exist — see #3). Split-brain redirect config is how future edits go wrong.
- **Fix:** keep redirects in ONE place (recommend `next.config.js`), delete the duplicates from `vercel.json`, and pick one canonical destination for `/pm-kisan-status`.

### 3. Five orphaned page components that can never render (dead code + confusing signals)
- **Where:**
  - `app/pm-kisan-status/page.tsx` — but `/pm-kisan-status` 308-redirects to `/calculator/quick-status-check`
  - `app/new-registration/page.tsx` — redirects to `/articles/PmKisanMasterGuide2026` (`next.config.js:49`)
  - `app/official-links/page.tsx` — redirects to `/contact` (`vercel.json:45`)
  - `app/author/page.tsx` — redirects to `/about` (`vercel.json:40`)
  - `app/beneficiary-list/download/page.tsx` (+ `layout.tsx`) — redirects to `/articles/PmKisanBeneficiaryList2026` (`next.config.js:75`, the `(?!PmKisanBeneficiaryList2026)` negative lookahead matches `download`)
- **What:** these full page components are built and shipped on every deploy but are unreachable — a redirect always fires first. They still cost build time/bundle and mislead anyone editing them expecting a live effect.
- **Fix:** delete the page components (or remove the redirects if the pages are meant to be live — decide per page).

## 🟠 Medium

### 4. ESLint: 24 errors on `main`
- **Where:** run `npx eslint .` — 16× `@typescript-eslint/no-explicit-any` (mostly `app/articles/[slug]/page.tsx` schema builders, `components/articles/mandi-bhav-today.tsx`), 8× `react-hooks/set-state-in-effect` (`components/Header.tsx`, `components/articles/mandi-bhav-today.tsx`, `LanguageSwitcher.tsx`, `ExternalLinkButton.tsx`, `PmKisanMaandhanYojanaPension.tsx`, `app/articles/page.tsx`), 1 warning in `eslint.config.mjs`.
- **What:** `npm run lint` fails, so lint can't gate CI; the `set-state-in-effect` cases cause avoidable cascading re-renders on high-traffic pages (Header runs on every page).
- **Fix:** type the JSON-LD builders (`Record<string, unknown>` or schema-dts), compute initial state instead of setting it in effects (use lazy `useState` initializers / `useMemo`), then wire `npm run lint` into CI.

### 5. `/speed-insights` — noindex meta-refresh page shipped as a route
- **Where:** `app/speed-insights/page.tsx`
- **What:** a placeholder "Redirecting…" page using `<meta httpEquiv="refresh" content="3;url=/">` inside the body. It's `noindex`, returns 200, and isn't in the sitemap — it's crawlable-but-dead weight, and meta-refresh inside `<body>` is invalid placement (Next puts arbitrary tags where they render).
- **Fix:** replace with a proper redirect entry (`next.config.js`: `{ source: '/speed-insights', destination: '/', permanent: true }`) and delete the page.

### 6. Sitemap `REFERENCE_DATE = new Date()` at module scope
- **Where:** `app/sitemap.ts:7`
- **What:** `REFERENCE_DATE` is evaluated at build time, and article `priority` is derived from "days since modified" relative to it. Every deploy silently reshuffles priorities, and if deploys are infrequent the "fresh" buckets go stale — the sitemap claims `changeFrequency: daily` on pages whose lastmod never moves. Priority/changefreq are mostly ignored by Google, but the inconsistent lastmod-vs-priority signal is self-inflicted noise.
- **Fix:** derive priority from `modifiedTime` only (fixed tiers), or accept static priorities; don't couple them to build timestamps.

### 7. No `Content-Security-Policy` header
- **Where:** `vercel.json` headers block (has HSTS, nosniff, XFO, Permissions-Policy — but no CSP)
- **What:** the site inlines JSON-LD, loads GTM/GA and calls two external APIs from the client; without CSP any XSS or compromised third-party script has free rein.
- **Fix:** add a CSP header (start with `Content-Security-Policy-Report-Only` to tune; allow `www.googletagmanager.com`, `region1.google-analytics.com`, `api.data.gov.in`, `api.openweathermap.org`, then enforce). Also note `X-XSS-Protection` is deprecated and can be removed.

### 8. Client-exposed API keys via `NEXT_PUBLIC_*`
- **Where:** `components/articles/mandi-bhav-today.tsx:9-14` — `NEXT_PUBLIC_MANDI_API_KEY` (api.data.gov.in) and `NEXT_PUBLIC_WEATHER_API_KEY` (OpenWeatherMap) are interpolated into client-side fetch URLs.
- **What:** both keys ship in the JS bundle — anyone can extract and abuse them (OpenWeatherMap bills per call). data.gov.in keys are low-risk but OWM is a real quota/billing exposure.
- **Fix:** proxy both calls through a route handler (`app/api/mandi/route.ts`, `app/api/weather/route.ts`) with server-side env vars and cache the responses (mandi data changes daily — an hourly revalidate would also cut latency).

## 🟡 Low

### 9. `dnsimple`-style dead weight: unused `dns-prefetch` to `www.google.com`
- **Where:** `app/layout.tsx:160`
- **What:** `<link rel="dns-prefetch" href="https://www.google.com">` on every page, but nothing on the page fetches from `www.google.com` (the only google.com href is a privacy-policy link). Harmless but pointless — remove.

### 10. Two page titles exceed ~65 chars (SERP truncation)
- **Where (live):** `/articles/category/status-check` (66) and `/articles/murgi-palan-loan-nlm-subsidy` (66)
- **Sources:** category title template in `app/articles/category/[category]/page.tsx` and the murgi-palan entry in `lib/loan-mandi-pashupalan-data.ts`.
- **Fix:** trim both to ≤ 60 chars. (Repo has `npm run check:titles` — consider running it in CI.)

### 11. `scripts/update-article-dates.js` falls back to "now" on missing git history
- **Where:** `scripts/update-article-dates.js` `getGitDates()` catch/empty branches
- **What:** runs on every `npm run build`; if git history is unavailable (shallow clone — Vercel clones shallow by default) it silently stamps `publishedTime`/`modifiedTime` with the current date, i.e. fabricated freshness signals in Article JSON-LD and the sitemap.
- **Fix:** fail loudly (or skip the update) when git log returns empty, instead of defaulting to `new Date()`.

### 12. `robots.txt` blocks `/tools/` for all bots, but no `/tools` routes exist
- **Where:** `app/robots.ts` output
- **What:** cosmetic inconsistency — disallowing a path that 404s. Either drop the rule or leave documented.

---

## Verified-OK (no action needed)
- All 94 sitemap URLs → HTTP 200; internal links resolve; no orphan links.
- No duplicate titles/meta descriptions; canonical, H1, OG/Twitter tags correct on every page.
- All 331 referenced images → 200, all `<img>` have `alt`.
- JSON-LD parses clean across the site (Article/FAQPage/BreadcrumbList/HowTo/…).
- www→apex, http→https redirects (308) and trailing-slash normalization correct.
- robots.txt, sitemap.xml, rss.xml, llms.txt all 200.
- HSTS/nosniff/XFO/Referrer-Policy/Permissions-Policy headers present.
- No leftover `console.log`, no duplicate article slugs, all 60 article component mappings resolve to real files.
