# KisanStatus — Bug Audit (bugfix.md)

**Audit date:** 6 August 2026
**Scope:** live crawl of all 94 sitemap URLs on kisanstatus.com + full static analysis of this repo at commit `aaac478` (`npx tsc --noEmit`, `npm run lint`, manual code review).
**Method note:** every finding below was verified against the live site or the actual source file — nothing is estimated. External (gov.in etc.) outbound links could not be verified from the audit sandbox (network-blocked), so they are explicitly **not** reported as broken.

---

## What is NOT broken (verified clean — do not "fix")

- All 94 sitemap URLs return **200 OK** — zero broken internal links.
- Zero duplicate/missing `<title>`, meta description, canonical, or `<h1>` across all 94 pages.
- All rendered `<img>` tags have `alt` text.
- All JSON-LD blocks parse as valid JSON; no `http://` mixed-content references.
- `robots.txt` + `sitemap.xml` correct; 404 page returns a real 404 status.
- `www.` → apex and `http` → `https` both 308-redirect correctly.
- `npx tsc --noEmit` passes with **0 type errors**.
- `node scripts/check-title-h1.js` passes (71 pairs aligned).

---

## BUG 1 — ✅ FIXED (2026-08-06) — Popup pre-open trick is dead code: `window.open('', …, 'noopener')` always returns `null`

> **Resolution:** dropped the pre-open + `noopener` combination (option b). The countdown now ends by rendering a real `<a target="_blank" rel="noopener noreferrer">` button the user taps — popup-blocker-proof, same pattern as `ExternalLinkButton`. Cancel still works. Both hook lint errors on this component (`set-state-in-effect`, `immutability`) are gone.

**File:** `components/articles/PmKisanVillageWiseListPdfDownload.tsx` (lines ~71–88)
**Severity:** Functional bug (High)

```ts
const newPopup = window.open('', '_blank', 'noopener,noreferrer');
setPopupRef(newPopup);
```

Per the HTML spec, when `noopener` is in the features string, `window.open()` returns **`null`** — the opener never gets a handle. So:

- `popupRef` is always `null`.
- Users get a **blank tab immediately** on click, which then just sits there empty.
- After the 10s countdown, the `popupRef && !popupRef.closed` branch never runs; the fallback `window.open(url, …)` executes **outside a user gesture**, so popup blockers (mobile Chrome especially — this site's audience) frequently kill it. Result: blank tab + no navigation.
- The related eslint error confirms it: `react-hooks/immutability` at line 82 (`popupRef.location.href = url` — also illegal on a `noopener` handle even if it existed).

**Fix:** drop the pre-open + `noopener` combination. Either (a) open the popup **without** `noopener` in the features string, keep the handle, and set `location.href` when the countdown ends (add `newPopup.opener = null` manually if opener isolation is wanted), or (b) drop the popup entirely and render a normal `<a target="_blank" rel="noopener noreferrer">` button that appears when the countdown hits 0 (same pattern `ExternalLinkButton` uses). Option (b) is simpler and popup-blocker-proof.

---

## BUG 2 — ✅ FIXED (2026-08-06) — Double-branded `<title>` on `/about` and the 404 page

> **Resolution:** removed the inner brand from both local titles. `/about` → `About Us - PM Kisan Verified Guidance` (layout template appends `| KisanStatus`; now 48+13=~44+15 chars, under 60). 404 → `404 - Page Nahi Mila`. OpenGraph titles untouched (the `%s | KisanStatus` template applies only to `<title>`).

**Severity:** SEO (Medium) — live, verified in rendered HTML

| Page | Rendered title |
|---|---|
| `/about` | `About Us - KisanStatus \| PM Kisan Verified Guidance \| KisanStatus` |
| 404 page | `404 - Page Nahi Mila \| KisanStatus.com \| KisanStatus` |

Cause: both pages hardcode the brand inside their local `title` while `app/layout.tsx` applies the `%s | KisanStatus` template on top.

- `app/about/page.tsx:7` → `` title: `About Us - ${SITE_NAME} | PM Kisan Verified Guidance` `` — remove the inner `${SITE_NAME} |` (also makes the 65-char title fit under 60).
- `app/not-found.tsx:5` → `title: '404 - Page Nahi Mila | KisanStatus.com'` — drop `| KisanStatus.com`.

Note: commit `d04cb0a` fixed this class of bug on `/contact`, `/privacy-policy`, `/disclaimer`, `/terms-of-service`; these two were missed.

---

## BUG 3 — ✅ FIXED (2026-08-06) — 14 titles exceed the ~60-char SERP budget (truncated in Google)

> **Resolution:** all 14 pre-suffix titles trimmed to ≤ 48 chars (full title ≤ ~60 with `| KisanStatus`). Calculator + category pages: trimmed in their `metadata` exports (og titles kept in sync). `bihar-pashupalan-loan-yojana` + `gehu-ka-bhav-msp-vs-mandi`: added a short `seoTitle` in `lib/loan-mandi-pashupalan-data.ts` (route resolves `seoTitle || ogTitle || title`). Maandhan auto-debit article: `title` trimmed to 43 ch in `lib/maandhan-data.ts`. `/about` was fixed by BUG 2. Slugs untouched. `node scripts/check-title-h1.js` passes (71 pairs, no double-branding).

**Severity:** SEO (Low–Medium) — live, measured after HTML-entity decoding

`CLAUDE.md`'s own rule: seoTitle ≤ ~46 chars so the full title stays ≤ ~60 with the `| KisanStatus` suffix. These break it (length | route):

- 67 `/calculator/pm-kisan-benefit`, 67 `/calculator/quick-status-check`
- 66 `/calculator/kcc-loan-emi`, 66 `/calculator/msp-income`, 66 `/maandhan/auto-debit-fail-hone-par-regularization-kaise-karein`
- 65 `/about` (fixed by BUG 2), 65 `/articles/category/loan`, 65 `/articles/category/mandi`, 65 `/calculator/crop-profit`
- 64 `/articles/bihar-pashupalan-loan-yojana`, 64 `/articles/category/farming`, 64 `/articles/gehu-ka-bhav-msp-vs-mandi`, 64 `/calculator`, 64 `/calculator/pmfby-premium`

**Fix:** trim the pre-suffix part to ≤ 48 chars in the respective `metadata` exports / data files. Template-level edit, no prose changes.

---

## BUG 4 — Countdown-redirect logic copy-pasted into 11+ article components, all with the same stale-closure smell

**Severity:** Code quality / maintenance (Medium)

`setTimeout(() => setCount(count - 1), 1000)` + setState-in-effect appears in:
`PmKisanBeneficiaryList2026`, `PmKisanMobileNumberChangeUpdate`, `mandi-bhav-today`, `pm-kisan-fto-generated-ka-matlab-kya-hai`, `PmKisanLandSeedingForm`, `PmfbyCropInsurance2026`, `soil-health-card-complete-guide-2026`, `PmKisanStateNodalOfficerList`, `PmKisanMasterGuide2026`, `PmKisanRejectedStatusReApplyGuide`, `PmKusumYojanaSolarSubsidy2026` — plus the broken variant in BUG 1.

It works today (the `[count]` dep re-arms the timer) but it re-renders every second per instance, triggers 12 `react-hooks/set-state-in-effect` lint errors, and any future fix has to be repeated 12×. The repo already has `ExternalLinkButton` doing the same job properly.

**Fix:** extract one shared `<CountdownRedirect>` (or reuse `ExternalLinkButton`) and delete the 12 inline copies. Use the functional-updater `setCount(c => c - 1)` with an interval, or derive remaining time from a start timestamp.

---

## BUG 5 — ✅ FIXED (2026-08-06) — `lib/LanguageContext.tsx`: synchronous setState in mount effect (hydration flicker)

> **Resolution:** replaced the two `useState` + mount-effect combo with `useSyncExternalStore` backed by a small module-level language store. Server snapshot renders `DEFAULT_LANG` / `isLoaded=false`; the client snapshot lazily resolves `getStoredLanguage() || getBrowserLanguage()` — no setState in effects, no double render. The remaining effect only syncs `document.documentElement.lang/dir`. `setLang` now writes to the store (`setClientLang`) + localStorage as before; public API of `useLang()` unchanged. Lint 28 → 27 problems; `tsc --noEmit` and `next build` both pass.

**Severity:** Code quality (Low) — `react-hooks/set-state-in-effect` at line 92

The mount effect reads localStorage and immediately calls three setStates, causing a double render on every page load. **Fix:** lazy-init the state (`useState(() => getStoredLanguage() || …)` guarded for SSR) or batch into one state object; keep only `updateDocumentLang` in the effect.

---

## BUG 6 — ✅ FIXED (2026-08-06) — Lint debt: 984 errors mean `npm run lint` can't gate anything

> **Resolution:** `react/no-unescaped-entities` turned off in `eslint.config.mjs` (Hinglish prose; React escapes output). `no-require-imports` disabled for `scripts/**/*.js` + `next.config.js` + `postcss.config.js` via an override (files stay `.js`). All 96 unused vars/imports removed (incl. dead `showButton` prop plumbing in `PmKisanBeneficiaryList2026` and an unused `router` in `PmKisanMobileNumberChangeUpdate`; `app/error.tsx` now logs the required `error` prop). 984 → ~28 problems; the remaining errors are the real hook issues tracked as BUG 4/5 plus 16 `no-explicit-any` (out of scope here). `tsc --noEmit` still clean.

**Severity:** Tooling (Low), but it hides real bugs like BUG 1

Breakdown: 948 × `react/no-unescaped-entities` (unescaped `"`/`'` in JSX prose), 96 × `no-unused-vars`, 16 × `no-explicit-any`, 12 × `set-state-in-effect` (BUG 4/5), 7 × `no-require-imports` (`next.config.js`, `scripts/*.js`), 1 × `react-hooks/immutability` (BUG 1).

**Fix (pragmatic):** turn `react/no-unescaped-entities` **off** in `eslint.config.mjs` (it's a Hinglish-prose site; the rule is noise here and Next.js escapes output anyway), rename `scripts/*.js` → `*.cjs` or add an override allowing `require()` in scripts/config, then clean the ~96 unused vars. After that, lint failures become meaningful signal — the two real hook bugs above would have been caught.

---

## BUG 7 — ✅ FIXED (2026-08-06) — Deprecated `middleware.ts` convention (Next.js 16)

> **Resolution:** renamed `middleware.ts` → `proxy.ts` and the export `middleware` → `proxy` per the Next 16 migration guide. Zero logic change — spam-param stripping, 302 redirect, and the `config.matcher` are identical. `next build` no longer prints the deprecation warning and still registers the proxy (`ƒ Proxy`).

**Severity:** Forward-compat (Low) — build prints: `⚠ The "middleware" file convention is deprecated. Please use "proxy" instead.`

The spam-param-stripping middleware works today but the convention is deprecated on Next 16.2.7 and will break on a future major. **Fix:** rename per the migration guide (`middleware` → `proxy` convention), no logic change.

---

## Suggested fix order

| Wave | Bugs | Risk |
|---|---|---|
| 1 | BUG 1 (broken popup UX) + BUG 2 (double-brand titles) | Low risk, user-visible wins |
| 2 | BUG 3 (title trims) | Zero risk, data-file edits |
| 3 | BUG 6 (lint config + unused vars), then BUG 4 + 5 (hook cleanups) | Mechanical |
| 4 | BUG 7 (middleware→proxy rename) | Do alongside next Next.js upgrade |

Content-level issues (thin articles, template uniformity, missing Sources/FAQs) are already tracked separately in `fixplan.md` — not duplicated here.

---

## Re-check after fixes (in a browser)

- `/articles/PmKisanVillageWiseListPdfDownload` — click the download button: no blank tab, navigation happens after countdown even with popup blocker on.
- `/about` and any non-existent URL (404 page) — view source, confirm single `| KisanStatus` in `<title>`.
- The 14 long-title pages — confirm titles ≤ 60 chars.
- One countdown article (e.g. `/articles/PmKisanBeneficiaryList2026`) — countdown still works after the shared-component refactor.
