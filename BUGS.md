# KisanStatus — Bug & Issue Audit (2026-08-07)

Full audit of the live site (kisanstatus.com, all 94 sitemap URLs) and this repository
(commit `a45eadd`). Grouped by severity. TypeScript compiles clean (`tsc --noEmit`);
all live pages return 200; no duplicate titles/descriptions; all 331 images resolve
with alt text; JSON-LD is valid. The items below are what's actually broken or risky.

---

**Fix status:** 11 of 12 fixed. Only **BUG-8** (client-exposed `NEXT_PUBLIC_*` API keys) remains. Each fix lands as its own commit on `main`; this file is updated after every fix.

**Last updated:** 2026-08-07

---

## 🔴 High

### 1. ~~`next` has 9 known high-severity vulnerabilities (npm audit)~~ ✅ FIXED 2026-08-07
- **Where:** `package.json` → `next@16.2.7`
- **What:** `npm audit` flags high-severity advisories against the installed Next.js range, including cache confusion (GHSA-68g3-v927-f742), SSRF in rewrites (GHSA-p9j2-gv94-2wf4), DoS in the Image Optimization API via SVGs (GHSA-q8wf-6r8g-63ch), and unauthenticated disclosure of Server Function endpoints (GHSA-955p-x3mx-jcvp). This site uses App Router + `next/image` heavily, so several of these apply.
- **Fix:** upgrade to `next@16.3.0` (latest patched): `npm install next@16.3.0 eslint-config-next@16.3.0 @next/bundle-analyzer@16.3.0`, then run the build to confirm. Also run `npm audit fix` for the transitive `brace-expansion`, `js-yaml`, `postcss`, `sharp` advisories.
- **Fixed (2026-08-07):** `next` 16.2.7 → **16.3.0**, `eslint-config-next` + `@next/bundle-analyzer` → **16.3.0** (all pinned exactly, as before), `sharp` ^0.33.5 → **^0.35.3** (libvips CVE-2026-33327/33328/35590/35591), plus `npm audit fix` for the transitive `brace-expansion` / `js-yaml` / `postcss` advisories. `npm audit` now reports **0 vulnerabilities** (was 9 high). Verified: `tsc --noEmit` clean, `next build` succeeds, all routes still prerender — no URL changed.

### 2. ~~Conflicting redirects for `/pm-kisan-status` (Vercel wins, Next.js config is dead code)~~ ✅ FIXED 2026-08-07
- **Where:** `vercel.json:50` → `/calculator/quick-status-check`; `next.config.js:82` → `/articles/PmKisan24viKist2026`
- **What:** the same source path redirects to two different destinations. Vercel platform redirects run before Next.js ones, so the live site sends users to the calculator, and the `next.config.js` entry silently never runs. Same double-definition pattern for `/author` and `/official-links` (defined only in `vercel.json` while their page components still exist — see #3). Split-brain redirect config is how future edits go wrong.
- **Fix:** keep redirects in ONE place (recommend `next.config.js`), delete the duplicates from `vercel.json`, and pick one canonical destination for `/pm-kisan-status`.
- **Fixed (2026-08-07):** the whole `redirects` array is removed from `vercel.json` (its `headers` block is untouched); every rule now lives only in `next.config.js`, with a comment warning against re-adding redirects to `vercel.json`. Rules that existed only in `vercel.json` were **moved, not dropped** — `kisanstatus.vercel.app` host normalization, `/pm-kisan-21vi-installment-status-check`, `/articles/pm-kisan-24vi-kist-2026`, `/articles/agri-stack-kya-hai-2026`, `/articles/pm-kisan-mobile-number-change-2026`, `/author` → `/about`, `/official-links` → `/contact`. `/pm-kisan-status` keeps the destination the live site actually served (`/calculator/quick-status-check`), and the conflicting `/articles/PmKisan24viKist2026` duplicate is deleted — **no live URL behaviour changed**. Verified: 54 rules, no duplicate sources, `next build` succeeds.

### 3. ~~Five orphaned page components that can never render (dead code + confusing signals)~~ ✅ FIXED 2026-08-07
- **Where:**
  - `app/pm-kisan-status/page.tsx` — but `/pm-kisan-status` 308-redirects to `/calculator/quick-status-check`
  - `app/new-registration/page.tsx` — redirects to `/articles/PmKisanMasterGuide2026` (`next.config.js:49`)
  - `app/official-links/page.tsx` — redirects to `/contact` (`vercel.json:45`)
  - `app/author/page.tsx` — redirects to `/about` (`vercel.json:40`)
  - `app/beneficiary-list/download/page.tsx` (+ `layout.tsx`) — redirects to `/articles/PmKisanBeneficiaryList2026` (`next.config.js:75`, the `(?!PmKisanBeneficiaryList2026)` negative lookahead matches `download`)
- **What:** these full page components are built and shipped on every deploy but are unreachable — a redirect always fires first. They still cost build time/bundle and mislead anyone editing them expecting a live effect.
- **Fix:** delete the page components (or remove the redirects if the pages are meant to be live — decide per page).
- **Fixed (2026-08-07):** deleted all six unreachable files — `app/pm-kisan-status/page.tsx`, `app/new-registration/page.tsx`, `app/official-links/page.tsx`, `app/author/page.tsx`, `app/beneficiary-list/download/{page,layout}.tsx`. The redirects were **kept** (they are the live behaviour), so **no URL changed**: every one of these paths still 308s to the same destination as before. Checked first that nothing links to them — no `href` in any component, not in the sitemap, not in the IndexNow payload; the only references were their own self-canonicals. Verified: `tsc --noEmit` clean, `next build` succeeds, prerendered routes 109 → 104 (exactly the 5 dead pages gone).

## 🟠 Medium

### 4. ~~ESLint: 24 errors on `main`~~ ✅ FIXED 2026-08-07
- **Where:** run `npx eslint .` — 16× `@typescript-eslint/no-explicit-any` (mostly `app/articles/[slug]/page.tsx` schema builders, `components/articles/mandi-bhav-today.tsx`), 8× `react-hooks/set-state-in-effect` (`components/Header.tsx`, `components/articles/mandi-bhav-today.tsx`, `LanguageSwitcher.tsx`, `ExternalLinkButton.tsx`, `PmKisanMaandhanYojanaPension.tsx`, `app/articles/page.tsx`), 1 warning in `eslint.config.mjs`.
- **What:** `npm run lint` fails, so lint can't gate CI; the `set-state-in-effect` cases cause avoidable cascading re-renders on high-traffic pages (Header runs on every page).
- **Fix:** type the JSON-LD builders (`Record<string, unknown>` or schema-dts), compute initial state instead of setting it in effects (use lazy `useState` initializers / `useMemo`), then wire `npm run lint` into CI.
- **Progress (2026-08-07):** re-ran `npx eslint .` against `main` to get the real state rather than trusting this file — the actual remaining count was **12 errors + 1 warning**, not the originally-audited split. `no-explicit-any` is now **fully cleared**:
  - **Part 1** (PR #110, commit `c232ad4`): the 16 `no-explicit-any` errors in the article pages / schema builders.
  - **Part 2** (PR #111, commit `3ff4eb6`): the last **4** `no-explicit-any` errors, which were in components, not article pages — `components/LanguageSwitcher.tsx` (`handleLanguageChange` now takes `LangCode` instead of `string`, so the `setLang(newLang as any)` cast is gone; both call sites already passed `LANGUAGES[].code`) and `components/articles/mandi-bhav-today.tsx` (new `ForecastEntry` interface for the OpenWeatherMap `/data/2.5/forecast` entries, used for the `weatherMap` record, the `forEach` param and the typed `data.list` access; `clouds` is optional in the API so the rain calc uses `item.clouds?.all`). Types only — verified `tsc --noEmit` clean, `eslint` `no-explicit-any` count **0** (was 4), `next build` succeeds with **103** prerendered routes (unchanged), **no URL changed**.
  - **Part 3** (PR #113, commit `7b639e4`): all **7** remaining `react-hooks/set-state-in-effect` errors plus the last warning. `npm run lint` now exits **0 with 0 errors and 0 warnings**.
    - `ExternalLinkButton.tsx` and `PmKisanMaandhanYojanaPension.tsx`: the countdown tick **and** the final `window.open` moved inside the `setTimeout` callback, so the effect body never calls `setState` synchronously. Countdown timing unchanged.
    - `Header.tsx` → `SearchModal`: the modal is now only *mounted* while open, so the query resets on unmount instead of via `setQuery('')` in an effect; the focus timeout is also cleared on cleanup (it leaked before).
    - `Header.tsx` → `ThemeToggle`: `isDark` + `mounted` now come from `useSyncExternalStore` over a small module-level store, mirroring the existing pattern in `lib/LanguageContext.tsx`. The effect only syncs the `<html>` class — an external system, which is what effects are for.
    - `Header.tsx` → shortcut hint / mobile menu: the Ctrl/⌘+K hint is read through `useSyncExternalStore`; the mobile menu is derived from the pathname it was opened on, so navigation closes it and the `setMobileOpen(false)`-on-pathname effect is gone entirely.
    - `mandi-bhav-today.tsx`: live API results now live in nullable state (`liveVegetables` / `liveFruits` / `liveWeather`) and the state-adjusted static data is **derived** via `useMemo`, so the no-key and fetch-failure paths no longer push fallbacks through `setState` in an effect. Rendered output identical.
    - `eslint.config.mjs`: the config is named before export, clearing the `import/no-anonymous-default-export` warning.
  - Verified across all three parts: `npm run lint` **0 errors / 0 warnings** (was 12 errors + 1 warning when re-measured), `tsc --noEmit` clean, `next build` succeeds with **103** prerendered routes (unchanged), **no URL changed**. Beyond the lint rule this also removes the cascading re-renders the audit flagged on high-traffic pages (`Header` runs on every page).
- **Follow-up (not a bug):** lint is now green, so `npm run lint` can finally be wired into CI as a gate — that step is still to do.
- **Needs a manual browser check after deploy** (interactive client behaviour a build can't prove): the header dark/light toggle incl. reload persistence, the search modal (Ctrl/⌘+K, Esc, backdrop click, query clearing on reopen), the mobile menu open/close and closing on navigation, the countdown buttons on `/articles/pm-kisan-maandhan-yojana-pension`, and the `/articles/mandi-bhav-today` price + weather tables with and without API keys set.

### 5. ~~`/speed-insights` — noindex meta-refresh page shipped as a route~~ ✅ FIXED 2026-08-07
- **Where:** `app/speed-insights/page.tsx`
- **What:** a placeholder "Redirecting…" page using `<meta httpEquiv="refresh" content="3;url=/">` inside the body. It's `noindex`, returns 200, and isn't in the sitemap — it's crawlable-but-dead weight, and meta-refresh inside `<body>` is invalid placement (Next puts arbitrary tags where they render).
- **Fix:** replace with a proper redirect entry (`next.config.js`: `{ source: '/speed-insights', destination: '/', permanent: true }`) and delete the page.
- **Fixed (2026-08-07):** deleted `app/speed-insights/page.tsx` and added `{ source: '/speed-insights', destination: '/', permanent: true }` to the consolidated `redirects()` in `next.config.js` (the single home for redirects per BUG-2). Also removed the page from `scripts/check-title-h1.js` BRAND_ROUTES so the checker doesn't reference a deleted file. The `@vercel/speed-insights` analytics component in `app/layout.tsx` is unrelated and untouched. The page was noindex and not in the sitemap, so no indexed URL changed; visitors hitting `/speed-insights` now get a proper 308 to `/` instead of a 3-second meta-refresh page. Verified: `tsc --noEmit` clean, `next build` succeeds, `/speed-insights` no longer in the prerendered routes.

### 6. ~~Sitemap `REFERENCE_DATE = new Date()` at module scope~~ ✅ FIXED 2026-08-07
- **Where:** `app/sitemap.ts:7`
- **What:** `REFERENCE_DATE` is evaluated at build time, and article `priority` is derived from "days since modified" relative to it. Every deploy silently reshuffles priorities, and if deploys are infrequent the "fresh" buckets go stale — the sitemap claims `changeFrequency: daily` on pages whose lastmod never moves. Priority/changefreq are mostly ignored by Google, but the inconsistent lastmod-vs-priority signal is self-inflicted noise.
- **Fix:** derive priority from `modifiedTime` only (fixed tiers), or accept static priorities; don't couple them to build timestamps.
- **Fixed (2026-08-07):** `REFERENCE_DATE` is now derived from the **content** — the newest `modifiedTime`/`publishedTime` across all articles — instead of `new Date()`, and the no-date fallback (`FALLBACK_DATE`) points at the same value rather than the build clock. The freshness tiers themselves are unchanged; they're just anchored to content. Confirmed the bug was real first: the pre-fix build put the build date in 7 places in the sitemap. Verified: same **94** URLs (`<loc>` set diffed identical), `tsc --noEmit` clean, `next build` succeeds, a clean rebuild is now **byte-identical**, and a build with the system clock moved **60 days forward** produces the same sitemap (before the fix that build would have demoted every article a tier) — no URL changed. Note: the priority spread shifts (49 pages at 1.0 vs 27) because the anchor is the newest article rather than "today"; same URLs, and the values no longer claim freshness the content doesn't have. PR #104, commit `ea26d9b`.

### 7. ~~No `Content-Security-Policy` header~~ ✅ FIXED 2026-08-07 (Report-Only phase)
- **Where:** `vercel.json` headers block (has HSTS, nosniff, XFO, Permissions-Policy — but no CSP)
- **What:** the site inlines JSON-LD, loads GTM/GA and calls two external APIs from the client; without CSP any XSS or compromised third-party script has free rein.
- **Fix:** add a CSP header (start with `Content-Security-Policy-Report-Only` to tune; allow `www.googletagmanager.com`, `region1.google-analytics.com`, `api.data.gov.in`, `api.openweathermap.org`, then enforce). Also note `X-XSS-Protection` is deprecated and can be removed.
- **Fixed (2026-08-07):** added a `Content-Security-Policy-Report-Only` header to the global headers block in `vercel.json`, built from what the site actually loads: `script-src 'self' 'unsafe-inline' https://www.googletagmanager.com` (`'unsafe-inline'` is required — GA4/GTM init and JSON-LD are inline scripts), `connect-src` allowing GA4 regional endpoints (`*.google-analytics.com`, `*.analytics.google.com`), GTM, `api.data.gov.in`, `api.openweathermap.org` and `vitals.vercel-insights.com` (Speed Insights), `img-src 'self' data: https:` (GA pixels + `next/image` remote patterns), plus hardening directives (`object-src 'none'`, `base-uri 'self'`, `form-action 'self'`, `frame-ancestors 'self'`, `upgrade-insecure-requests`). Also removed the deprecated `X-XSS-Protection` header. **Report-Only on purpose:** watch the browser console / CSP reports for violations for a week or two, then flip the key to `Content-Security-Policy` to enforce. No redirects touched (the `headers`-only rule from BUG-2 holds), no URL changed. Verified: `vercel.json` parses, `tsc --noEmit` clean, `next build` succeeds.

### 8. ~~Client-exposed API keys via `NEXT_PUBLIC_*`~~ ✅ FIXED 2026-08-07
- **Where:** `components/articles/mandi-bhav-today.tsx:9-14` — `NEXT_PUBLIC_MANDI_API_KEY` (api.data.gov.in) and `NEXT_PUBLIC_WEATHER_API_KEY` (OpenWeatherMap) are interpolated into client-side fetch URLs.
- **What:** both keys ship in the JS bundle — anyone can extract and abuse them (OpenWeatherMap bills per call). data.gov.in keys are low-risk but OWM is a real quota/billing exposure.
- **Fix:** proxy both calls through a route handler (`app/api/mandi/route.ts`, `app/api/weather/route.ts`) with server-side env vars and cache the responses (mandi data changes daily — an hourly revalidate would also cut latency).
- **Fixed (2026-08-07):**
  - **Part 1 (mandi)** — PR #115, commit `7ed5bb8`: `app/api/mandi/route.ts` proxies api.data.gov.in with a server-only `MANDI_API_KEY` (old public name still accepted as fallback), 1-hour cache, only the fields the component reads forwarded; the component now fetches `/api/mandi?state=…`.
  - **Part 2 (weather)** — this change: `app/api/weather/route.ts` proxies the OpenWeatherMap 5-day forecast with a server-only `WEATHER_API_KEY` (old public name accepted as fallback until the Vercel env var is renamed), 30-min per-state cache, and it takes a `state` name — coordinates resolve server-side from the same fixed table, so it can't be used as an open proxy for arbitrary lat/lon. The component's `WEATHER_API_KEY` / `WEATHER_API_URL` / `STATE_COORDS` are removed from the client; it fetches `/api/weather?state=…` and falls back to `WEATHER_FALLBACK` on any error, exactly as before. `.env.example` updated with the migration note.
  - **Deployment step (manual, Vercel):** add `WEATHER_API_KEY` (same value as the old var), then delete `NEXT_PUBLIC_WEATHER_API_KEY` and `NEXT_PUBLIC_MANDI_API_KEY` and redeploy — until the public vars are deleted the keys keep shipping in the bundle.
  - Verified: `tsc --noEmit` clean, `next lint` clean, `next build` succeeds — no URL changed.

## 🟡 Low

### 9. ~~`dnsimple`-style dead weight: unused `dns-prefetch` to `www.google.com`~~ ✅ FIXED 2026-08-07
- **Where:** `app/layout.tsx:160`
- **What:** `<link rel="dns-prefetch" href="https://www.google.com">` on every page, but nothing on the page fetches from `www.google.com` (the only google.com href is a privacy-policy link). Harmless but pointless — remove.
- **Fixed (2026-08-07):** the `dns-prefetch` link is deleted from `app/layout.tsx`. Re-confirmed before removing that the only `www.google.com` reference in the codebase is the user-clicked `google.com/settings/ads` href in `app/privacy-policy/page.tsx` — a click target, not a page-load fetch, so the hint could never pay off. The two genuine `preconnect` hints (`www.googletagmanager.com`, `region1.google-analytics.com`) are untouched. Verified: `tsc --noEmit` clean, `next build` succeeds, all routes still prerender — no URL changed. PR #100, commit `d6c0a63`.

### 10. ~~Two page titles exceed ~65 chars (SERP truncation)~~ ✅ FIXED 2026-08-07
- **Where (live):** `/articles/category/status-check` (66) and `/articles/murgi-palan-loan-nlm-subsidy` (66)
- **Sources:** category title template in `app/articles/category/[category]/page.tsx` and the murgi-palan entry in `lib/loan-mandi-pashupalan-data.ts`.
- **Fix:** trim both to ≤ 60 chars. (Repo has `npm run check:titles` — consider running it in CI.)
- **Fixed (2026-08-07):** trimmed both titles, keeping the primary keywords intact: status-check category `'PM Kisan Status Check & Verification Guides 2026'` → `'PM Kisan Status Check & Verification 2026'` (final title with brand suffix now 55 chars, was 62), and the murgi-palan `ogTitle` `'Murgi Palan Loan & Subsidy 2026 — NLM se 50% Tak'` → `'Murgi Palan Loan 2026 — NLM se 50% Subsidy'` (final 53 chars, was 62). Only the `<title>`/OG title changed — URLs, H1s, descriptions untouched. Verified: `npm run check:titles` passes (71 pairs), `tsc --noEmit` clean, `next build` succeeds, rendered `<title>` on both pages ≤ 60 chars.

### 11. ~~`scripts/update-article-dates.js` falls back to "now" on missing git history~~ ✅ FIXED 2026-08-07
- **Where:** `scripts/update-article-dates.js` `getGitDates()` catch/empty branches
- **What:** runs on every `npm run build`; if git history is unavailable (shallow clone — Vercel clones shallow by default) it silently stamps `publishedTime`/`modifiedTime` with the current date, i.e. fabricated freshness signals in Article JSON-LD and the sitemap.
- **Fix:** fail loudly (or skip the update) when git log returns empty, instead of defaulting to `new Date()`.
- **Fixed (2026-08-07):** `getGitDates()` now returns `null` when `git log` yields no dates (empty output or throw) instead of `new Date()`; the caller then **skips that article and keeps the existing dates** in `articles-data.ts` — no fabricated freshness ever lands in JSON-LD or the sitemap. If history is missing for ALL articles (the shallow-clone signature), the script prints a loud end-of-run warning naming the likely cause. Verified: normal run still updates all 37 articles from git history; in a repo with no usable history the run updates 0, keeps every existing date, and prints the warning. `tsc --noEmit` clean, `next build` succeeds — no URL changed.

### 12. ~~`robots.txt` blocks `/tools/` for all bots, but no `/tools` routes exist~~ ✅ FIXED 2026-08-07
- **Where:** `app/robots.ts` output
- **What:** cosmetic inconsistency — disallowing a path that 404s. Either drop the rule or leave documented.
- **Fixed (2026-08-07):** dropped the rule — `'/tools/'` removed from the `disallow` list in all **5** user-agent groups (`*`, `Googlebot`, `Bingbot`, the AI-crawler group, `AhrefsBot`/`AhrefsSiteAudit`). Confirmed first that no `/tools` route exists: `app/` has no `tools` segment, and the only `tools` references in the repo are an internal component folder (`components/articles/rajya-yojana/tools/`, never a URL) and an external `tools.google.com` href in the privacy policy. Verified by diffing the generated `.next/server/app/robots.txt.body` — `/tools/` is gone and everything else is byte-identical (all other disallows, `Crawl-delay` values, Googlebot-Image allows, the AI-bot blocklist, the `Sitemap:` line). `tsc --noEmit` clean, `next build` succeeds — no URL changed. PR #102, commit `1c43975`.

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
