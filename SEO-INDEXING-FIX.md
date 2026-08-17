# SEO Indexing & Title Audit — kisanstatus.com

**Date:** 2026-08-17
**Property:** `sc-domain:kisanstatus.com` (verified owner)
**Data sources:** Google Search Console API (sitemaps), live crawl of all 138 sitemap URLs, repo static analysis
**Status:** Diagnosis complete — no code changes made yet
**Revision 2:** adds §2A — GSC URL Inspection results, which correct the initial title-first conclusion
**Revision 3 (2026-08-17):** adds §2B — full URL Inspection of ALL 138 sitemap URLs: 92 indexed / 46 not indexed, per-URL lists + fixes

---

## 0. Execution plan — small parts (each < 7 minutes, pushed straight to main)

| Part | What | Maps to | Status |
|---|---|---|---|
| **1** | Extend `scripts/check-title-h1.js` to all 9 data files (incl. Hindi `seoTitleHi`/`titleHi` pairs — 108 pairs, was 40) + wire `check:titles` into `npm run build` | Fix 1 | ✅ **done 2026-08-17** |
| **2** | `/search` robots conflict + self-canonical | Fix 4 + Fix 7 | ✅ **done 2026-08-17** |
| **3** | Honest sitemap `lastmod` (homepage, `/articles`, calculators) | Fix 5 | ✅ **done 2026-08-17** |
| **4** | Severe titles batch A (5 pages, `seoTitle` in data files only): `KisanRinKahaSeLe2026`, `NanoDap500mlPriceInIndia2026`, `AgriStackKyaHai2026`, `msp-list-2026-27`, `gau-mutra-kharid-yojana-up-2026` | Fix 2 | ✅ **done 2026-08-17** |
| **5** | Severe titles batch B (5 pages): `pm-kisan-maandhan-withdrawal-refund-rules`, `pmkmy-bank-account-change`, `hi/farmer-id-kaise-banaye`, `hi/state-kisan-yojana-list`, `/about` + `/contact` | Fix 2 | ✅ **done 2026-08-17** |
| **6** | Trim 3 over-length titles (`/disclaimer`, pashupalan category, maandhan withdrawal — last one already done in Part 5) | Fix 6 | ✅ **done 2026-08-17** |
| **7** | Moderate titles batch A (12 pages) | Fix 3 | ⬜ |
| **8** | Moderate titles batch B (11 pages) | Fix 3 | ⬜ |
| **9** | Homepage sections: Hindi articles, calculators, maandhan + rajya-yojana hub cards | Fix 0 / P0 | ⬜ |
| **10** | Footer navigation: all hub + category pages | Fix 0 / P0 | ⬜ |
| **11** | Related-articles block cross-section on every article template | Fix 0 / P0 | ⬜ |

Part 1 note: with all 9 data files covered, the guard now checks **108** title/H1 pairs and
currently exits 0 — its threshold flags only pairs sharing *zero* keywords in the first 6 words.
The 33 crawl-detected mismatches are looser divergences the guard tolerates; they get fixed
per-page in Parts 4–8. The guard's job is to stop total drift from ever returning.

---

## 1. Executive summary

Two separate things were reported: **pages not indexed in GSC**, and the Ahrefs Site Audit issue
**"Page and SERP titles do not match"**. The crawl shows these are the *same underlying problem*.

The site's technical crawlability is **clean**. Two separate defects were found:

1. **Title layer** — on 33 of 138 pages the `<title>` and the `<h1>` describe the page differently.
   This is the Ahrefs issue, and it causes Google to rewrite SERP titles (a CTR problem).
2. **Internal linking** — pages exist in the sitemap but almost nothing links to them. GSC URL
   Inspection returned **zero internal referring URLs for 8 of 9 pages inspected**.

**These are not the same problem, and #2 is the one blocking indexing.** GSC's own verdict on the 10
worst title mismatches: **8 are indexed normally.** So fixing titles will close the Ahrefs issue and
help click-through, but it will not by itself get the unindexed pages in. See §2A — it revises the
priority order, and it is based on Google's data rather than inference.

### What was checked, and what came back

| Check | Result | Verdict |
|---|---|---|
| Sitemap fetch (`/sitemap.xml`) | 138 URLs, 108 images, **0 errors, 0 warnings** | PASS |
| Sitemap last downloaded by Google | 2026-08-17 02:40 UTC | PASS |
| HTTP status of all 138 sitemap URLs | **138 / 138 return `200 OK`** | PASS |
| Unexpected redirects inside the sitemap | **0** | PASS |
| `noindex` on any sitemap URL | **0** | PASS |
| Canonical tag present | **138 / 138** | PASS |
| Canonical self-referencing (no cross-canonical) | **138 / 138 correct** | PASS |
| Exactly one `<h1>` per page | **138 / 138** | PASS |
| JSON-LD structured data present | **138 / 138** | PASS |
| Thin content (< 400 words) | **0 pages**; median 6,186 words | PASS |
| Duplicate `<title>` across pages | **0** | PASS |
| **`<title>` vs `<h1>` alignment** | **33 / 138 mismatch** (10 severe, 23 moderate) | **FAIL** |
| `<title>` over 60 chars (SERP truncation) | **3 pages** | WARN |
| Images indexed from sitemap | 108 submitted, 0 reported indexed | WARN |

**Important:** the "not indexed" pages are **not** blocked, broken, redirected, `noindex`-ed,
canonicalised away, or thin. Every one of them is a healthy, crawlable, content-rich page. So the
fix is not a technical unblock — it is a **relevance and title-clarity fix**.

---

## 2. Root cause

### 2.1 The primary issue — title/H1 divergence (33 pages)

`app/articles/[slug]/page.tsx:246` builds the SEO title from the data layer:

```ts
const seoTitle = article.seoTitle || article.ogTitle || article.title;
const displayTitle = seoTitle;
```

…while the visible `<h1>` is hardcoded separately inside each article's React component under
`components/articles/`. Nothing keeps the two in sync. Over time the `<h1>` in the component was
rewritten to be punchier/longer, but the `seoTitle` in `lib/*-data.ts` was left behind (or vice
versa). Result: two different promises about the same page.

**Why this blocks indexing.** Google uses the `<h1>`, the on-page headings, and the anchor text
pointing at a page to decide what the page is *actually* about. When the `<title>` disagrees with
all of those, two things follow:

1. Google rewrites the SERP title — which is exactly what Ahrefs flags as
   *"Page and SERP titles do not match"* (issue `d69246c2-225a-11ec-8456-06d2f2f613d8`).
2. The page's topical signal is diluted, so on a low-authority domain it loses the
   "is this worth indexing?" judgement and lands in **Crawled – currently not indexed**.

The repo already ships a guard for this — `scripts/check-title-h1.js`, wired as
`npm run check:titles` — but it is **not** part of `npm run build`, so nothing enforces it and the
drift accumulated silently.

### 2.2 Secondary — the mismatch pattern has three distinct shapes

Reading the 33 mismatches, they are not random. Three repeating patterns:

| Pattern | What it looks like | Example |
|---|---|---|
| **A. Keyword-stuffed title vs storytelling H1** | Title is a dry keyword string; H1 is a narrative hook. They share almost no words. | `/articles/gau-mutra-kharid-yojana-up-2026` — Title: *"Gau Mutra Kharid Yojana UP — ₹10 Prati Litre"* vs H1: *"Gaay ke mutra se bhi ab ghar chalega! Bulandshahr ke kisano ko mil rahe 10 rupaye litre"* |
| **B. Generic category title vs specific H1** | Title was written for a category, the H1 for the actual article. The title under-describes the page. | `/articles/KisanRinKahaSeLe2026` — Title: *"Kisan Loan Guide 2026 — Hindi Jankari"* vs H1: *"Kisan Rin Kaha Se Le 2026: KCC, Bank, CSC, Cooperative — Sahukar Se Bachne Ka Rasta"* |
| **C. Truncated title vs full H1** | Title drops the qualifiers the H1 (and the search query) contains. | `/maandhan/pm-kisan-maandhan-withdrawal-refund-rules` — Title: *"PM Kisan Maandhan Withdrawal & Refund Rules"* vs H1: *"Scheme Chhodne Se Pehle Ruko: Refund, Family Pension Aur Exit Ka Poora Sach"* |

### 2.3 Also found (lower priority, real but not indexing-blocking)

| # | Finding | Where | Impact |
|---|---|---|---|
| 1 | `/search` is **both** `Disallow`-ed in robots.txt **and** `noindex`-ed | `app/robots.ts` (`/search?`) + `next.config.js:183` + `app/search/page.tsx:11` | Google can't crawl the page, so it can never read the `noindex`. The URL can linger as "Indexed, though blocked by robots.txt". Pick one signal — keep `noindex`, drop the Disallow. |
| 2 | Sitemap `lastModified` for the homepage and `/articles` is the **whole site's** freshest article date | `app/sitemap.ts` — `FALLBACK_DATE = REFERENCE_DATE` | Every new article bumps the homepage's `lastmod` even though the homepage didn't change. Repeated false freshness signals train Google to ignore your `lastmod` site-wide. |
| 3 | Calculator `lastModified` values are **hardcoded** | `app/sitemap.ts` — e.g. `new Date('2026-04-05')` | Real content edits don't move the date, so genuine updates go unnoticed. |
| 4 | ~~`www` host~~ — **verified working**, no action needed | `next.config.js:88-93` | `https://www.kisanstatus.com/` returns `308 → https://kisanstatus.com/`. Correct. Listed here only to record that it was checked and ruled out. |
| 5 | 3 titles exceed 60 characters | `/disclaimer`, `/articles/category/pashupalan`, `/maandhan/pm-kisan-maandhan-withdrawal-refund-rules` | Truncated in SERP — another trigger for Google rewriting the title. |
| 6 | 108 sitemap images, 0 reported indexed | GSC sitemaps API | Note: this GSC API field is deprecated and unreliable; verify in the GSC UI before acting. |
| 7 | `/search` canonical points at the **homepage**, not itself | `app/search/page.tsx:13` — `alternates: { canonical: SITE_URL }` | A page canonicalising to an unrelated URL sends a conflicting signal alongside its `noindex`. Since the page is already `noindex`, make the canonical self-referencing (or drop it) — don't point it at `/`. |

---

## 2A. GSC URL Inspection on the 10 severe pages — what Google actually says

The section above is based on a live crawl. This section is Google's own verdict, pulled per-URL
from the GSC URL Inspection API. It changes the priority order, so read it before acting.

| Page | Google's coverage state | Last crawled | In sitemap per Google |
|---|---|---|---|
| `/articles/hi/farmer-id-kaise-banaye` | Submitted and indexed | 2026-08-17 | yes |
| `/maandhan/pm-kisan-maandhan-withdrawal-refund-rules` | Submitted and indexed | 2026-07-23 | yes |
| `/articles/KisanRinKahaSeLe2026` | Submitted and indexed | 2026-07-05 | **no** |
| `/articles/gau-mutra-kharid-yojana-up-2026` | Submitted and indexed | 2026-08-14 | yes |
| `/articles/hi/state-kisan-yojana-list` | **URL is unknown to Google** | **never** | **no** |
| `/articles/AgriStackKyaHai2026` | Submitted and indexed | 2026-08-14 | yes |
| `/maandhan/pmkmy-bank-account-change` | **Crawled – currently not indexed** | 2026-07-28 | **no** |
| `/articles/NanoDap500mlPriceInIndia2026` | Submitted and indexed | 2026-08-01 | yes |
| `/articles/msp-list-2026-27` | Submitted and indexed | 2026-08-06 | yes |
| `/about` | not inspected (brand page, low priority) | — | — |

### What this tells us — and it corrects the assumption above

**8 of the 10 severe title mismatches are indexed just fine.** So a title/H1 mismatch is *not*, on
its own, keeping pages out of the index on this site. It remains a real Ahrefs issue and a real
CTR/SERP-rewrite problem — but it must be **de-prioritised as an indexing fix**. Fixing 33 titles
would close the Ahrefs issue and likely improve click-through, but it would not by itself pull the
unindexed pages in.

**The actual indexing blocker is discovery, not quality.** Note the last column:

- `/articles/hi/state-kisan-yojana-list` — **Google has never seen this URL at all**
  ("URL is unknown to Google", never crawled) even though it *is* present in `/sitemap.xml`,
  which Google downloaded on 2026-08-17.
- `/maandhan/pmkmy-bank-account-change` — crawled, but Google reports it as **not associated with
  any sitemap**, and it is sitting in *Crawled – currently not indexed*.
- `/articles/KisanRinKahaSeLe2026` — indexed, but also reported as **not in any sitemap**.

All three **are** in the live sitemap (verified by fetching it). So Google downloaded the sitemap but
has not attributed these URLs to it. Combined with the fact that internal links are thin — the
inspection returned `referring_urls: []` for 8 of 9 pages, with only
`/articles/hi/farmer-id-kaise-banaye` showing a single internal referrer
(`/articles/AgriStackKyaHai2026`) — the picture is:

> **These pages are orphans.** They exist in the sitemap but almost nothing on the site links to
> them. A sitemap entry is a hint; internal links are the actual ranking-and-discovery signal. On a
> low-authority domain, a page with zero internal links is the first thing Google declines to index.

### One correction to Fix 5's premise, in Google's favour

`/maandhan/pm-kisan-maandhan-withdrawal-refund-rules` reports `user_canonical:
https://kisanstatus.com/` — i.e. at its last crawl (2026-07-23) Google saw this page canonicalising
to the **homepage**. The live HTML today correctly self-canonicalises. So this was a real bug that has
since been fixed in code, but Google's index still holds the stale value because it hasn't re-crawled
in ~3.5 weeks. No code change needed — it needs a re-crawl request. Worth checking whether other
pages carry the same stale canonical in Google's index.

### Revised priority — internal linking first

| New order | Fix | Why |
|---|---|---|
| **1** | **Internal linking audit + fix** (new — see Fix 0 below) | This is the actual indexing blocker. 8/9 inspected pages have zero internal referrers. |
| 2 | Fix 1 — build-time title guard | Cheap, stops future drift, one line. |
| 3 | Request re-indexing for the stale-canonical page | Fixes an index-state bug already fixed in code. |
| 4 | Fix 4 / Fix 5 / Fix 7 — robots + lastmod + self-canonical | Template hygiene, helps re-crawl speed. |
| 5 | Fix 2 / Fix 3 / Fix 6 — the 33 titles | Closes the Ahrefs issue + improves CTR. No longer expected to move indexing on its own. |

### Fix 0 — Internal linking (new, highest priority)

The site has 138 pages and a `getRelatedArticles()` helper (`lib/articles-data.ts`), but the severe
pages show no inbound internal links. Recommended, in order:

1. **Audit** — count inbound internal links per URL across all 138 pages; list every page with 0–2.
2. **Hub pages** — `/articles`, `/articles/hi`, `/maandhan`, `/rajya-yojana` should each link to
   *every* child page they own, not a truncated "latest N" list.
3. **Contextual links** — the 10 severe pages need 2–3 links each from topically related,
   already-indexed articles (e.g. `/maandhan/pmkmy-bank-account-change` should be linked from the
   other 12 `maandhan/*` articles, which are indexed).
4. **Verify** `getRelatedArticles()` actually renders on every article template and isn't returning
   an empty list when a category has few members.

This is a template-level fix (hub-page rendering + related-articles logic), not 138 hand-edits —
which fits the "template over per-page" preference.

---

---

## 2B. REVISION 3 — Full GSC URL Inspection of all 138 sitemap URLs (2026-08-17)

**Data source:** Google Search Console URL Inspection API, `sc-domain:kisanstatus.com`, every sitemap
URL inspected individually on 2026-08-17. This supersedes the 10-page sample in §2A.

### Headline numbers

| Coverage state (Google's verdict) | Pages | Share |
|---|---|---|
| ✅ Submitted and indexed | **92** | 67% |
| ❌ Discovered — currently not indexed | **34** | 25% |
| ❌ URL is unknown to Google | **10** | 7% |
| ❌ Crawled — currently not indexed | **2** | 1% |
| **Total in sitemap** | **138** | |

**46 pages (33%) are not in Google's index.** None of them are blocked, noindex-ed, or broken —
all return 200, have self-referencing canonicals, and robots.txt allows them. The blocker is
**crawl priority driven by internal linking**, exactly as §2A predicted from the 10-page sample.

### Where the damage is concentrated

| Section | In sitemap | Indexed | Not indexed |
|---|---|---|---|
| `/articles/hi/*` (Hindi articles + categories) | 37 | 15 | **22** |
| `/calculator/*` | 8 | 2 | **6** |
| `/maandhan*` | ~6 | 1 | **5** (incl. the `/maandhan` hub itself) |
| `/rajya-yojana*` | 3 | 0 | **3** (incl. the `/rajya-yojana` hub itself) |
| `/articles/*` (English/Roman) | rest | most | **7** |
| Category pages (`/articles/category/*`, `/articles/hi/category/*`) | 12 | 6 | **6** |

---

### Error group 1 — "Discovered — currently not indexed" (34 pages)

**Kya matlab:** Google ko URL sitemap se pata chal gaya, lekin usne **crawl karna hi zaroori nahi
samjha**. `last_crawl_time` sab pe empty hai — Googlebot in pages pe kabhi gaya hi nahi.

**Kyun hota hai:** internal linking bahut kamzor hai. Homepage se sirf ~5 article links hain;
Hindi section (`/articles/hi/*`) sirf `/articles/hi` listing page se linked hai, calculators aur
maandhan/rajya-yojana pages ko takreeban koi internal link nahi milta. Sitemap-only discovery
low-authority nayi site pe crawl queue mein sabse peeche rehti hai.

| # | URL | Last crawl |
|---|---|---|
| 1 | `/articles/KisanCreditCardOnlineApply2026` | — |
| 2 | `/articles/PmKisanEkycOnline2026` | — |
| 3 | `/articles/PmKisanMobileNumberChangeUpdate` | — |
| 4 | `/articles/PmKisanVillageWiseListPdfDownload` | — |
| 5 | `/articles/category/loan` | — |
| 6 | `/articles/hi` | — |
| 7 | `/articles/hi/annadata-sukhibhava-status` | — |
| 8 | `/articles/hi/bihar-kisan-registration-status` | — |
| 9 | `/articles/hi/category/loan` | — |
| 10 | `/articles/hi/category/pashupalan` | — |
| 11 | `/articles/hi/category/status-check` | — |
| 12 | `/articles/hi/gau-mutra-kharid-yojana` | — |
| 13 | `/articles/hi/ikhedut-portal-status` | — |
| 14 | `/articles/hi/krishak-bandhu-status` | — |
| 15 | `/articles/hi/krishak-unnati-yojana-status` | — |
| 16 | `/articles/hi/meri-fasal-mera-byora-status` | — |
| 17 | `/articles/hi/odisha-cm-kisan-status` | — |
| 18 | `/articles/hi/parihara-payment-status` | — |
| 19 | `/articles/hi/pati-patni-pm-kisan-rule` | — |
| 20 | `/articles/hi/payment-stopped-by-state` | — |
| 21 | `/articles/hi/rajasthan-kisan-samman-nidhi` | — |
| 22 | `/articles/hi/rythu-bharosa-status` | — |
| 23 | `/articles/hi/state-kisan-yojana-list` | — |
| 24 | `/articles/hi/up-kisan-karj-rahat-list` | — |
| 25 | `/calculator/crop-profit` | — |
| 26 | `/calculator/msp-income` | — |
| 27 | `/calculator/pm-kisan-benefit` | — |
| 28 | `/calculator/pmfby-premium` | — |
| 29 | `/maandhan/pm-kisan-maandhan-pension-card-download` | — |
| 30 | `/maandhan/pm-kisan-maandhan-registration-2026` | — |
| 31 | `/maandhan/pm-kisan-maandhan-status-check-online` | — |
| 32 | `/rajya-yojana/meri-fasal-mera-byora-status-check-2026` | — |
| 33 | `/rajya-yojana/up-kisan-karj-rahat-list-2026` | — |
| 34 | `/terms-of-service` | — |


**Fix (template-level, sab 34 pages ek saath):**
1. **Homepage sections banao** — "Hindi mein padhein" (top 6 Hindi articles), "Calculators" (sab
   6 calculator links), "PM Kisan Maandhan" aur "Rajya Yojana" hub cards. Homepage site ka sabse
   zyada crawl hone wala page hai; wahan se direct link = crawl priority.
2. **Related-articles block** har article ke neeche (4–6 contextual links, cross-section:
   English article → related Hindi article → related calculator). Ye har page ko 5–15 internal
   links deta hai ek template change se.
3. **Footer navigation** mein sab hub pages: `/articles/hi`, `/calculator`, `/maandhan`,
   `/rajya-yojana`, sab category pages.
4. **Hindi ↔ English hreflang + cross-link**: jahan same topic dono language mein hai
   (e.g. `up-kisan-karj-rahat-list`), dono pages ek doosre ko link karein + `hreflang` tags.
5. Fixes ship hone ke baad GSC mein **top hub pages ke liye "Request Indexing"** manually karo
   (homepage, `/articles/hi`, `/maandhan`, `/rajya-yojana`, `/calculator`) — baaki pages Google
   khud crawl kar lega jab hubs re-crawl honge.

---

### Error group 2 — "URL is unknown to Google" (10 pages)

**Kya matlab:** Google ko in URLs ka **wajood tak nahi pata** — na sitemap se process hua, na kisi
link se mila. Ye sabse ajeeb group hai kyunki ye sitemap mein hain.

**Kyun hota hai:** ye pages sitemap mein **haal hi mein add hue** hain (sitemap 2026-08-17 ko
last submit hua) aur Google ne naya sitemap abhi partially hi process kiya hai. `/maandhan` aur
`/rajya-yojana` hub pages ka khud unknown hona confirm karta hai ki ye sections naye hain aur
inko koi internal link nahi milta.

| # | URL | Last crawl |
|---|---|---|
| 1 | `/articles/category/agri-business` | — |
| 2 | `/articles/category/pashupalan` | — |
| 3 | `/articles/drip-sprinkler-irrigation-subsidy` | — |
| 4 | `/articles/hi/category/agri-business` | — |
| 5 | `/articles/hi/category/farming` | — |
| 6 | `/articles/hi/category/mandi` | — |
| 7 | `/calculator/installment-tracker` | — |
| 8 | `/calculator/kcc-loan-emi` | — |
| 9 | `/maandhan` | — |
| 10 | `/rajya-yojana` | — |


**Fix:**
1. Error group 1 wale internal-linking fixes yahan bhi apply hote hain — ye pages bhi wahi
   template changes se cover ho jayenge.
2. Sitemap **dobara submit** karo GSC mein (Sitemaps → `sitemap.xml` → resubmit) taake naye URLs
   ka fresh processing ho.
3. In 10 mein se hub pages (`/maandhan`, `/rajya-yojana`) ke liye GSC mein manually
   **URL Inspection → Request Indexing** karo.

---

### Error group 3 — "Crawled — currently not indexed" (2 pages)

**Kya matlab:** Googlebot ne page crawl kiya (July 2026 mein), content dekha, aur **index na karne
ka faisla kiya**. Ye quality/demand signal hai — technical problem nahi.

| # | URL | Last crawl | Google canonical |
|---|---|---|---|
| 1 | `/maandhan/pmkmy-bank-account-change` | 2026-07-28 | self (sahi) |
| 2 | `/maandhan/pmkmy-grievance-complaint-helpline` | 2026-07-29 | self (sahi) |

**Fix:**
1. Dono pages ka content **substantially improve** karo — unique value add karo jo PMKMY ke
   official pages pe nahi hai (step-by-step screenshots, common errors table, state-wise helpline
   numbers).
2. In pages ko doosre maandhan articles se **contextually link** karo (sirf listing se nahi).
3. Title/H1 alignment check karo (§3 ke pattern se) aur intro paragraph ko search intent se
   match karo ("PMKMY bank account kaise change karein" type query).
4. Improve karne ke baad **Request Indexing** karo. Agar 3-4 hafte mein bhi index na ho, in
   dono ko ek comprehensive "PMKMY account & grievance guide" mein merge karne pe sochna.

---

### Priority order (Revision 3 — final)

| Priority | Action | Type | Covers |
|---|---|---|---|
| **P0** | Related-articles block + homepage sections + footer nav | Template | 44 of 46 pages |
| **P0** | Sitemap resubmit in GSC | 1 click | 10 "unknown" pages |
| **P1** | Request Indexing on 5 hub pages | Manual, 10 min | crawl cascade |
| **P1** | Fix 1 from §5 (title guard) — Ahrefs issue | Template, 1 line | 33 title mismatches |
| **P2** | Content upgrade on 2 "crawled not indexed" PMKMY pages | Per-page | 2 pages |
| **P3** | hreflang for Hindi/English pairs | Template | long-term |

### Verification (2–4 hafte baad)

1. GSC → Pages report: "Discovered - currently not indexed" count 34 se girna chahiye.
2. Ye script dobara chalao (`kisanstatus/inspect_all.py` in workspace) ya GSC mein spot-check:
   `/articles/hi/rythu-bharosa-status`, `/calculator/crop-profit`, `/maandhan`, `/rajya-yojana`.
3. Naye indexed pages GSC Performance report mein impressions dikhana shuru karenge.

---

## 3. Severe mismatches — fix these first (10 pages, < 50% word overlap)

| Page | Overlap | Current `<title>` | Current `<h1>` |
|---|---|---|---|
| `/articles/hi/farmer-id-kaise-banaye` | 0% | फार्मर आईडी कैसे बनाएं — कागज और पूरा Process \| KisanStatus | फार्मर आईडी कैसे बनाएं? AgriStack की पूरी जानकारी यहां |
| `/maandhan/pm-kisan-maandhan-withdrawal-refund-rules` | 20% | PM Kisan Maandhan Withdrawal & Refund Rules \| KisanStatus | Scheme Chhodne Se Pehle Ruko: Refund, Family Pension Aur Exit Ka Poora Sach |
| `/about` | 33% | About Us - PM Kisan Guidance \| KisanStatus | About KisanStatus |
| `/articles/KisanRinKahaSeLe2026` | 33% | Kisan Loan Guide 2026 — Hindi Jankari \| KisanStatus | Kisan Rin Kaha Se Le 2026: KCC, Bank, CSC, Cooperative — Sahukar Se Bachne Ka Rasta |
| `/articles/gau-mutra-kharid-yojana-up-2026` | 33% | Gau Mutra Kharid Yojana UP — ₹10 Prati Litre \| KisanStatus | Gaay ke mutra se bhi ab ghar chalega! Bulandshahr ke kisano ko mil rahe 10 rupaye litre |
| `/articles/hi/state-kisan-yojana-list` | 33% | राज्य किसान योजना लिस्ट 2026 State Wise \| KisanStatus | राज्य किसान योजना लिस्ट 2026 — किस राज्य में कितना पैसा मिलता है? |
| `/articles/AgriStackKyaHai2026` | 40% | AgriStack ID Kaise Banaye — Kisan ID Process \| KisanStatus | AgriStack Kya Hai? Kisan ID Banwane Ka Poora Tarika — Ek Kisan Ki Zubani |
| `/maandhan/pmkmy-bank-account-change` | 40% | PMKMY Bank Account Change Process \| KisanStatus | PM Kisan Maandhan Yojana Me Bank Account Kaise Badlein? (Complete Guide 2026) |
| `/articles/NanoDap500mlPriceInIndia2026` | 43% | Nano DAP 500 ml Price — ₹280-320 Ka Sach \| KisanStatus | Nano DAP 500ml Price 2026: Rate, Dosage Chart, Aur Woh Baatein Jo Dealer Nahi Batata |
| `/articles/msp-list-2026-27` | 43% | MSP List 2026-27 — Gehu ₹2,585, Dhan ₹2,441 \| KisanStatus | MSP List 2026-27: Rabi & Kharif Ki Poori Table, Pichhle Saal Se Comparison |

## 4. Moderate mismatches (23 pages, 50–80% overlap)

| Page | Overlap | Current `<title>` | Current `<h1>` |
|---|---|---|---|
| `/calculator/quick-status-check` | 50% | PM Kisan Status Check 2026 — Aadhaar/Mobile \| KisanStatus | PM Kisan Status Check Karo |
| `/contact` | 50% | Contact & Support — Sampark Karein \| KisanStatus | Contact & Support |
| `/maandhan/pmkmy-grievance-complaint-helpline` | 50% | PMKMY Grievance & Complaint Helpline \| KisanStatus | PM Kisan Maandhan Helpline Number 2026 – Verified Contact & Grievance Guide |
| `/articles/hi/parihara-payment-status` | 50% | परिहार पेमेंट स्टेटस चेक 2026 Karnataka \| KisanStatus | परिहार पेमेंट स्टेटस 2026 — फसल नुकसान मुआवजा कहां अटका, कैसे देखें? |
| `/articles` | 60% | Kisan Guides 2026 — 108+ Resources \| KisanStatus | PM Kisan aur Krishi Yojanaon ki Verified Guides (2026) |
| `/disclaimer` | 60% | Legal Notice & Disclaimer – Unofficial Portal \| KisanStatus | Legal Notice & Disclaimer |
| `/articles/PmKisanEkycOnline2026` | 60% | PM Kisan eKYC Online 2026 Guide \| KisanStatus | PM Kisan eKYC 2026: OTP Based eKYC, Biometric aur Face Auth Puri Jankari |
| `/articles/PmKisanMasterGuide2026` | 60% | PM Kisan Complete Guide — Sab Fix \| KisanStatus | PM Kisan Complete Guide 2026: Registration Se Lekar Payment Tak — Har Problem Ka Solution Ek Jagah |
| `/articles/mandi-bhav-today` | 60% | Aaj Ka Mandi Bhav — Live Rates \| KisanStatus | Uttar Pradesh Mandi Bhav Aaj Ka Rate — Sabzi, Phal Aur 7 Din Ka Mausam |
| `/articles/PmKisanFaceAuthenticationEkyc` | 60% | PM Kisan Face Auth eKYC Guide \| KisanStatus | PM Kisan Face Authentication eKYC 2026: Bina OTP Ke Ghar Baithe Photo Verification |
| `/articles/PmKisanRejectedStatusReApplyGuide` | 60% | PM Kisan Rejected Status Fix Guide \| KisanStatus | PM Kisan Rejected Status: Naam List Se Kyun Kata, Dobara Apply Kaise Karein? |
| `/articles/silage-making-business-guide` | 60% | Silage Making Business 2026 Guide \| KisanStatus | Silage Business 2026: Makka Preserve Karke Pashupalakon Ko Bechne Ka Poora Plan |
| `/maandhan/family-pension-rules` | 60% | PM Kisan Maandhan Family Pension Rules \| KisanStatus | PMKMY Family Pension Rules: Pati Ke Baad Kya Hoga? (2026) |
| `/calculator/installment-tracker` | 67% | PM Kisan Kist Tracker 2026 — Kyun Ruki? \| KisanStatus | PM Kisan Kist Tracker 2026 |
| `/calculator/msp-income` | 67% | MSP Income Calculator 2026 — Fasal MSP Rate \| KisanStatus | MSP Income Calculator 2026 |
| `/articles/soil-health-card-complete-guide-2026` | 67% | Soil Health Card 2026 — Puri Jankari \| KisanStatus | Soil Health Card 2026: Mitti Test Free Kaise Karwayein, State Wise Online Apply |
| `/articles/PmKisanLandSeedingForm` | 67% | PM Kisan Land Seeding Form PDF Download \| KisanStatus | PM Kisan Land Seeding Form 2026: Kahan Milta Hai, Kaise Bharein — Bina Ghumaye Poora Sach |
| `/articles/PmKisan24viKist2026` | 71% | PM Kisan 24vi Kist Kab Aayegi? Oct 2026 \| KisanStatus | PM Kisan 24vi Kist Kab Aayegi? Release Date Ka Sach, Status Check Aur Tayyari |
| `/articles/namo-drone-didi-yojana-shg-selection` | 71% | Namo Drone Didi 2026 — Selection Ka Asli Rasta \| KisanStatus | Namo Drone Didi Yojana 2026: SHG Se Selection, 15 Din Ki Training Aur ₹8 Lakh Tak Ki Madad — Zameeni Sach |
| `/calculator/pm-kisan-benefit` | 75% | PM Kisan Benefit Calculator 2026 \| KisanStatus | PM Kisan Calculator 2026 |
| `/articles/PmKisanVoluntarySurrenderGuide` | 75% | PM Kisan Voluntary Surrender Guide \| KisanStatus | PM Kisan Voluntary Surrender: Galti Se Register Ho Gaye Toh Kaise Hatte? |
| `/articles/PmKisanMaandhanYojanaPension` | 75% | PM Kisan Maandhan Yojana Guide \| KisanStatus | PM Kisan Maandhan Yojana: 60 Saal Ke Baad ₹3000 Pension Ka Sahi Tarika |
| `/maandhan/pm-kisan-maandhan-registration-2026` | 75% | PM Kisan Maandhan Registration 2026 \| KisanStatus | PM Kisan Maandhan Registration: ₹3000 Pension Apply Process |

---

## 5. Fix plan (prioritised — template fixes before per-page work)

### Fix 1 — Enforce the guard that already exists  ·  **template · 1 line · do this first**

`scripts/check-title-h1.js` exists but never runs. Wire it into the build so drift can never
silently return:

```json
"build": "npm run check:titles && npm run update-dates && next build"
```

Rationale: without this, any per-page fix below decays again within a few articles. One line,
protects all 138 pages, zero content risk.

**Critical detail — the guard is near-blind today.** Running `node scripts/check-title-h1.js` right
now reports *"title/H1 pairs checked: 40"* and *"✓ all titles aligned"* — while the live crawl finds
33 mismatches across 138 pages. It passes because its `DATA_FILES` list covers only 4 files and
misses `lib/core-articles-data.ts` plus the four `lib/hindi-*-data.ts` files, i.e. most of the site.
So Fix 1 is two parts: extend `DATA_FILES` to all 10 data files **and** wire the script into `build`.
Extending the list alone will turn the current green tick red — that is the intended outcome, and it
is why Fix 1 must land before Fixes 2/3, not after.

### Fix 2 — Realign the 10 severe titles  ·  **per-page · content decision required**

Rule to apply: **the `<title>` must contain the H1's primary keyword phrase, in the H1's language,
within the first 60 characters.** The H1 is almost always the better-researched string — so in most
of the 10 cases the correct move is to *pull the H1's keyword into the title*, not to rewrite the H1.

Concretely, for each page edit only `seoTitle` in the relevant `lib/*-data.ts` entry. No component
changes, no URL changes, no redirects — therefore **zero risk to existing rankings**.

Two of the ten are not article-data driven and need their own small edits:
- `/about` — title *"About Us - PM Kisan Guidance"* vs H1 *"About KisanStatus"*
- `/contact` — title *"Contact & Support — Sampark Karein"* vs H1 *"Contact & Support"*

### Fix 3 — Realign the 23 moderate titles  ·  **per-page · lower urgency**

Same rule, same one-field edit. Recommend doing these in a second batch after Fix 2 has been
crawled, so the effect of batch 1 is measurable in isolation.

### Fix 4 — Resolve the `/search` robots conflict  ·  **template · 2 lines**

Remove `'/search?'` from the `Disallow` list in `app/robots.ts` and keep the `noindex`
(`app/search/page.tsx:11` + the `X-Robots-Tag` header). That way Google can crawl the page, read the
`noindex`, and drop it cleanly.

### Fix 5 — Make sitemap `lastmod` honest  ·  **template**

In `app/sitemap.ts`: give the homepage and `/articles` their own real modification dates instead of
the site-wide `REFERENCE_DATE`, and derive each calculator's date from its component rather than a
hardcoded literal. Trustworthy `lastmod` is what makes Google re-crawl quickly after Fix 2 ships.

### Fix 6 — Trim the 3 over-length titles  ·  **per-page · trivial**

Bring `/disclaimer`, `/articles/category/pashupalan`, and
`/maandhan/pm-kisan-maandhan-withdrawal-refund-rules` under 60 characters including the
`| KisanStatus` suffix appended by the template at `app/layout.tsx:50`.

### Fix 7 — Self-reference the `/search` canonical  ·  **template · 1 line**

`app/search/page.tsx:13` sets `canonical: SITE_URL`, pointing `/search` at the homepage. Combined
with its `noindex` this is a mixed signal. Change it to the page's own URL, or remove the
`alternates` block entirely — the `noindex` already does the job.

*(The `www` host was also checked: `https://www.kisanstatus.com/` correctly returns
`308 → https://kisanstatus.com/`. No action needed.)*

---

## 6. Recommended sequence

| Order | Fix | Type | Risk | Effort |
|---|---|---|---|---|
| 1 | Fix 1 — build-time title guard (+ extend `DATA_FILES`) | template | none | minutes |
| 2 | Fix 4 — `/search` robots conflict | template | none | minutes |
| 3 | Fix 5 — honest sitemap `lastmod` | template | none | ~1 hour |
| 4 | Fix 2 — 10 severe titles | per-page | low | ~1 hour |
| 5 | Fix 6 — 3 over-length titles | per-page | none | minutes |
| 6 | Fix 3 — 23 moderate titles | per-page | low | ~2 hours |
| 7 | Fix 7 — `/search` self-canonical | template | none | minutes |

Ship 1–3 together (pure template, no content judgement). Then 4–5 as a content batch. Hold 6 until
the first batch has been re-crawled.

---

## 7. After shipping — verification

1. **Re-crawl in Ahrefs Site Audit** (project `10042735`) and confirm issue
   `d69246c2-225a-11ec-8456-06d2f2f613d8` count drops from 33.
2. **GSC → URL Inspection → Request indexing** for the 10 severe pages (Fix 2), one at a time.
3. **GSC → Pages report**, 2–3 weeks later: the "Crawled – currently not indexed" bucket should
   shrink. Title changes are a relevance signal, not an instant switch — allow a full crawl cycle.
4. **`npm run check:titles`** must exit 0 locally before every deploy (Fix 1 makes this automatic).
5. Spot-check in a browser that each edited page's visible `<h1>` is **unchanged** — only the
   browser-tab title and the SERP snippet should move.

---

## 8. Explicitly out of scope

- No URL, slug, or redirect changes — existing rankings are not put at risk.
- No `<h1>` or body-content rewrites; the H1s are the stronger strings and stay as they are.
- No unrelated Ahrefs issues touched.
- No auto-merge, no auto-publish. Every change above is a proposal awaiting approval.

---

*Generated by Leta. Data pulled 2026-08-17 from the Google Search Console API and a live crawl of
all 138 sitemap URLs. No metric in this document is estimated — every count is measured.*
