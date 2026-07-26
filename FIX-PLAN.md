# Site Audit Fix Plan — homepage (https://kisanstatus.com/)

Source: Ahrefs Site Audit project `10042735`, issues flagged on the exact URL `https://kisanstatus.com/`.
Scope: homepage only (plus shared templates it inherits from). Nothing merged/published yet.

---

## 1. 🔴 CRITICAL — Hreflang to redirect or broken page  *(template-inherited)*

**What Ahrefs found:** the homepage emits an hreflang annotation
`en-IN → https://kisanstatus.com/en`, but `/en` returns **308** and redirects back to
`/` (200). Hreflang must point to a live 200 URL, so Google may ignore all hreflang on the page.

**Where it comes from:** the `en-IN` alternate is declared in **`app/sitemap.ts`**
(line ~52: `'en-IN': ` `${SITE_URL}/en`). The homepage `app/page.tsx` / `app/layout.tsx`
`alternates.languages` only list `hi-IN` + `x-default` — so the sitemap is the source of the
broken `/en` annotation.

**Fix (choose one, both are template-level — one edit clears it everywhere):**
- **Preferred:** remove the `'en-IN': `${SITE_URL}/en`` line from the homepage entry in
  `app/sitemap.ts` — there is no live `/en` page, the site is single-language (`hi-IN`),
  so the alternate should not exist.
- Alternative: only if a real English homepage at `/en` (HTTP 200) is being built, keep it
  but point it at the live URL.

**Files:** `app/sitemap.ts`

---

## 2. ⚪ NOTICE — Structured data has schema.org validation error  *(template-inherited)*

**What Ahrefs found:** homepage JSON-LD has 2 error kinds:
`Struct_data_property_invalid` and `Struct_data_type_unexpected_scalar`.
Schema types on the page: Answer, BreadcrumbList, ContactPoint, HowToStep, Organization,
WebPage, WebSite. JSON-LD is injected from **`app/layout.tsx`** (Organization/ContactPoint/
Breadcrumb/WebPage graph) and **`app/page.tsx`** (WebPage/ItemList), plus microdata in
`components/HomeContent.tsx` (FAQPage/HowTo/Answer/HowToStep).

**Candidate causes to confirm & fix at implementation time:**
- `app/layout.tsx` — `OpeningHoursSpecification.timeZone` (`SUPPORT_HOURS.timezone`) is **not a
  valid schema.org property** → likely the `Struct_data_property_invalid`. Remove it (bake the
  offset into `opens`/`closes` if needed).
- `app/layout.tsx` — `PostalAddress.addressRegion: 'India'` is the country, not a region;
  review. `founder` typed as `Organization` with a person's name — likely should be `Person`.
- Will validate the exact offending property against Google Rich Results / schema.org validator
  before editing, so we change only what's actually invalid.

**Files:** `app/layout.tsx` (primary), possibly `components/HomeContent.tsx`, `lib/site-config.ts`

---

## 3. ⚪ NOTICE — Page has nofollow AND dofollow incoming internal links  *(template-inherited)*

**What Ahrefs found:** the homepage gets **56 follow** + **1 nofollow** internal links.
The single nofollow comes from **`/search`** (`https://kisanstatus.com/search`) — its logo/home
link is nofollow while every other page's header logo link to `/` is a normal follow link.

**Root cause:** `app/search/page.tsx` sets `robots: { index: false, follow: false }` — the
page-level `follow:false` makes all its outbound links (including the logo → `/`) nofollow.
It's a 3-second redirect stub to `/`.

**Fix options:**
- Simplest: change `/search`'s robots to `{ index: false, follow: true }` so its link to home is
  followed (page still won't be indexed).
- Or make `/search` a real server redirect (307/308 to `/`) instead of a meta-refresh stub, so
  it carries no crawlable body links at all.

**Files:** `app/search/page.tsx`

---

## 4. 🟡 WARNING — Slow page  *(investigate, not a code edit)*

**What Ahrefs found:** homepage HTML load time **1156 ms** (TTFB 1155 ms), size 22 KB.
Threshold is ≥1000 ms. This is a server/TTFB matter, not a markup bug. (Two other pages are
worse — `mushroom-kheti-nhb-subsidy` 15.4 s, `category/status-check` 1.4 s — but those are
outside this URL's scope.)

**Recommendation:** homepage already sets `revalidate = 3600` (ISR). TTFB ~1.1 s suggests
cold serverless render. Options: confirm ISR/CDN caching on Vercel is warm, review any slow
data fetch in `HomeContent`, and consider `dynamic = 'force-static'` where possible. No code
change proposed without your go-ahead.

**Files:** none yet (investigation)

---

## 5. ⚪ NOTICE — Pages to submit to IndexNow  *(no code fix)*

Not a defect — an Ahrefs action prompt. Handled via the IndexNow button in Site Audit, not the
codebase. Skipping unless you want IndexNow set up.

---

## Priority order

1. Hreflang → broken page (Critical, template, one-line fix) — `app/sitemap.ts`
2. Nofollow/dofollow internal links (easy, template) — `app/search/page.tsx`
3. Structured data schema error (template, needs validation) — `app/layout.tsx`
4. Slow page — investigate only
5. IndexNow — skip / out of scope

Nothing will be committed to `main`, merged, or published without your explicit OK.
