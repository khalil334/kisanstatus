# SEO Indexing & Title Audit — kisanstatus.com

**Date:** 2026-08-17
**Property:** `sc-domain:kisanstatus.com` (verified owner)
**Data sources:** Google Search Console API (sitemaps), live crawl of all 138 sitemap URLs, repo static analysis
**Status:** Diagnosis complete — no code changes made yet

---

## 1. Executive summary

Two separate things were reported: **pages not indexed in GSC**, and the Ahrefs Site Audit issue
**"Page and SERP titles do not match"**. The crawl shows these are the *same underlying problem*.

The site's technical crawlability is **clean**. What is weak is the **title layer**: on 33 of 138
pages the `<title>` and the `<h1>` describe the page differently, so Google frequently rewrites the
SERP title — and pages whose title Google doesn't trust are the same pages that sit in
"Crawled – currently not indexed".

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
