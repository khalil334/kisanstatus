# KisanStatus — SEO Action Plan (Rank #1 Roadmap)

> Data source: Google Search Console, `sc-domain:kisanstatus.com`, 3–16 Aug 2026 (869 queries analysed).
> Traffic context: Aug 10–13 peak (53 clicks/day) was the PM Kisan 25vi kist + Odisha CM Kisan news cycle. The Aug 14+ dip is **demand cooling, not a ranking drop** — average position stayed ~7. This plan converts event-spike traffic into stable, growing daily clicks.

---

## Priority 0 — Fix CTR on pages that ALREADY rank (this week)

These queries already show on page 1 but get few/zero clicks. Title/description rewrites = fastest wins, no new content needed.

### 0.1 `hi/farmer-id-kaise-banaye` — title rewrite (file: `lib/hindi-yojana-data.ts`)

96 queries, ~310 impressions in 2 weeks, **0 clicks**. Users search "किसान आईडी" (Devanagari) + "documents"; current title says neither.

```ts
// OLD
titleHi: 'फार्मर आईडी कैसे बनाएं? AgriStack की पूरी जानकारी यहां',
seoTitleHi: 'फार्मर आईडी कैसे बनाएं — AgriStack जानकारी',
desc: 'फार्मर आईडी कार्ड (AgriStack) घर बैठे मोबाइल से बनाएं — राज्यवार portal link, जरूरी documents और registration का आसान step-by-step process यहां देखें।',
keywords: ['फार्मर आईडी कार्ड कैसे बनाएं', 'farmer id registration 2027', 'agristack farmer id'],

// NEW
titleHi: 'किसान आईडी (Farmer ID) कैसे बनाएं 2026? Documents और AgriStack Registration',
seoTitleHi: 'किसान आईडी (Farmer ID) कैसे बनाएं 2026 — Documents List',
desc: 'किसान आईडी (AgriStack Farmer ID) मोबाइल से 10 मिनट में बनाएं। जरूरी documents की पूरी list, राज्यवार portal links और step-by-step registration process यहां देखें।',
keywords: ['किसान आईडी कैसे बनाएं', 'farmer id kaise banaye', 'agristack id kaise banaye', 'farmer id banane ke liye documents', 'किसान आईडी कार्ड', 'agristack farmer id'],
```

Also in `components/articles/hindi-yojana/FarmerIdCardKaiseBanaye2027.tsx`: ensure one H2 is exactly **"Farmer ID बनाने के लिए जरूरी Documents"** — the documents query-cluster (~36 imp) is the biggest sub-topic.

### 0.2 FTO article — "fto ka full form" (157 + 40 imp, 0 clicks, pos ~10)

Page: `/articles/pm-kisan-fto-generated-ka-matlab-kya-hai`.
- Put **"FTO Full Form"** in the SEO title, e.g.: `FTO Full Form क्या है? PM Kisan में FTO Generated का मतलब 2026`
- First paragraph must answer in one bold line: *FTO = Fund Transfer Order*. Google pulls this as a featured-snippet answer → realistic rank-1 (currently pos 10.8 with zero clicks).
- Add FAQ schema entry: "FTO ka full form kya hai?"

### 0.3 Nano DAP price queries (380 + 32 imp, 0 clicks, pos 7–10)

Queries: `nano dap price 500 ml`, `nano dap 500ml price`, `iffco dap price` (pos 1, still 0 clicks!).
- The ranking page must show the **price in the title/description**, e.g.: `Nano DAP 500ml Price 2026 — ₹600 (IFFCO Rate), Dose & Benefits`
- Add a price table (500ml bottle MRP, dealer rate, subsidy) near the top. Verify current IFFCO MRP before writing — **do not guess the number**.
- `iffco dap price` at pos 1.0 with 0 clicks = users don't see a price in the snippet. Fix the meta description to lead with the rate.

### 0.4 Top-3 queries with 0 clicks — description rewrites

Each ranks 1–3 but earns nothing; rewrite meta descriptions to state the answer/number/date up front:
| Query | Pos | Fix |
|---|---|---|
| `nhb mushroom subsidy` | 1.0–1.3 | Lead desc with subsidy % + max amount |
| `nlm bakri palan` | 1.0 | Lead with subsidy amount + who qualifies |
| `state verification pending` | 1.0 | Lead with "kitne din me clear hota hai" + fix steps |
| `rythu bharosa` | 3.3 | Lead with installment amount + next payout window |

---

## Priority 1 — Push page-1 pages into top 3 (next 2 weeks)

### 1.1 Odisha CM Kisan (biggest single opportunity — ~1,200 imp/2wk across variants, pos 5–8)

Page: `/rajya-yojana/odisha-cm-kisan-status-check-2026`.
- Query variants: `cm kisan portal odisha status check 2026` (342), `odisha cm kisan status check` (398), `... list village wise` (114), `... 2026 list` (51).
- Actions:
  1. Add an H2 for **"CM Kisan Odisha List Village Wise"** with a step-by-step to check the village-wise list (that variant is underserved — pos 6.6).
  2. Add Odia-script keywords once in the intro (ସିଏମ କିଷାନ) — signals local relevance.
  3. Internal links: from homepage + PM Kisan 25vi kist article → this page (anchor: "CM Kisan Odisha Status Check").
  4. Keep the page updated with each Odisha installment date — this is an event page; freshness wins it.

### 1.2 MSP List 2026-27 (`/articles/msp-list-2026-27` — ~390 imp, pos 6–9)

- Split intent: `msp 2026-27 list kharif` (253) vs `msp 2026-27 list rabi` (40).
- Add two clearly separated H2 tables: **"Kharif MSP List 2026-27"** and **"Rabi MSP List 2026-27"** with per-crop rates. Use official CACP/Govt figures only.
- SEO title: `MSP List 2026-27 — Kharif & Rabi सभी फसलों के रेट (सरकारी सूची)`.

### 1.3 MP pages (`mp saara payment status` 125 imp pos 10.7; `mp kisan kalyan yojana status` 32 imp pos 7.7)

- `/rajya-yojana/mp-kisan-kalyan-yojana-kist-status` is at pos ~11 — page-2 border.
- Add a dedicated H2: **"MP SAARA Portal Payment Status कैसे देखें"** with the saara.mp.gov.in steps — the SAARA query is 4x bigger than the yojana query and currently underserved.
- Cross-link the two MP pages to each other.

### 1.4 Bihar Pashupalan Loan (63 + 58 + 53 imp, 0 clicks, pos 5–12)

- Queries: `bihar pashupalan loan yojana 2026`, `... last date` (pos 4.6!).
- The **last date** variant ranks 4.6 with zero clicks → put the actual last date in the SEO title/description (verify from the official Bihar govt notification first — don't invent a date).
- Add H2: "Bihar Pashupalan Loan Yojana 2026 Last Date & Apply Link".

---

## Priority 2 — New articles to write (this month)

Ordered by expected impact. Each: 1,200–2,000 words Hindi, one focus keyword, FAQ schema, 2+ internal links in, published under the matching category.

| # | Article (working title) | Target queries (GSC-proven) | Why |
|---|---|---|---|
| 1 | **PM Kisan 26vi Kist Kab Aayegi 2026 — Date, Beneficiary List, Status** | `pm kisan 26 kist kab aayegi` (next cycle of the 25vi pattern) | The 25vi-kist page owns pos 1.8 on "25 kist kab aayegi". Publish the 26vi page NOW so it ages and ranks before the next news spike — this is how the next peak becomes 150 clicks/day instead of 53. Interlink from the 25vi page top. |
| 2 | **Dairy Farm Loan Without Collateral 2026 — बिना गारंटी लोन कैसे लें** | `dairy farm loan without collateral` (32 imp, pos 44 — no real page) | Only true content gap in the data: impressions exist but nothing ranks. A dedicated article can jump straight to page 1. Cover: banks/NABARD schemes, limits, documents, interest. |
| 3 | **NLM Bakri Palan Yojana 2026 — Subsidy, Online Apply, Last Date** | `nlm bakri palan yojana` (66 imp, pos 9.5) + `nlm bakri palan` (pos 1) | Split from the general pashupalan page: a dedicated NLM goat-farming page consolidates both variants at rank 1. |
| 4 | **FTO Status Check 2026 — FTO Generated के बाद पैसा कब आता है** | `fto will be generated` (56 imp), `fto is generated` cluster | Companion to the FTO-meaning article; capture the "paisa kab aayega after FTO" intent separately. |
| 5 | **CM Kisan Samman Nidhi Rajasthan — 7वीं किस्त Status 2026** | `cm kisan samman nidhi rajasthan 7 kist kab aayegi 2026` (33 imp, pos 12.3) | State page pattern already works (Odisha proof). Rajasthan variant is unserved. |

**Rules for every new article:**
- Focus keyword in: SEO title (front-loaded), H1, first 100 words, one H2, URL slug.
- Never fabricate dates/amounts — cite the official portal (pmkisan.gov.in, state portal) and update `modifiedTime` on every real edit.
- Devanagari + Roman both in title when the query data shows both scripts (e.g. "किसान आईडी (Farmer ID)").
- FAQ schema with 3–5 real GSC queries as questions.

---

## Priority 3 — Rank-1 playbook (ongoing habits)

1. **Freshness on event pages.** Kist/status pages win on recency. Every installment announcement day, update the page (date, amount, new FAQ) within 24h and request indexing in GSC.
2. **Protect the top-3 winners.** `pm kisan 25 kist kab aayegi` (pos 1.8), `nhb mushroom subsidy` (1.3), `iffco dap price` (1.0) — don't change their URLs or H1s; only append updates.
3. **Internal linking hub.** The homepage and the 25vi/26vi kist articles are the highest-traffic entry points — every state-yojana page should be reachable in one click from them.
4. **Fix the Ahrefs "Page and SERP titles do not match" issue at the template level**: mismatches happen when Google rewrites weak titles. The P0 rewrites above address the worst offenders; audit remaining articles for titles that (a) miss the dominant Devanagari query, (b) exceed ~60 chars after the `| KisanStatus` suffix, or (c) promise nothing concrete (no number/date/list).
5. **Measure weekly.** GSC → Performance → compare 7d vs previous 7d, watch CTR on the P0 pages. A title change needs ~7–10 days to show.

---

## After every deploy

1. Open changed pages in browser, confirm new `<title>` renders.
2. GSC → URL Inspection → **Request Indexing** for each changed URL.
3. Ahrefs Site Audit → trigger re-crawl (clears the title-mismatch flags).

## Expected outcome

- P0 alone: +10–15 clicks/day within 2 weeks (CTR recovery on existing impressions).
- P1: Odisha + MSP pages into top 3 → +15–20 clicks/day.
- P2 article #1 (26vi kist): the next installment cycle peaks at 3–4x the last one.
