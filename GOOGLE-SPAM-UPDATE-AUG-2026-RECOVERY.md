# Kisanstatus.com — Google August 2026 Spam Update: Diagnosis & Recovery Plan

**Site:** kisanstatus.com (launched ~June 2026, ~2 months old)
**Date hit:** 14–18 August 2026 (crash on 18 Aug)
**Update:** Google August 2026 Spam Update — announced 18 Aug 2026, rollout "a few days", global, all languages
**Data source:** Google Search Console (verified, siteOwner)

---

## 1. What actually happened (GSC-verified)

The site was in healthy growth mode until mid-August:

| Date | Clicks | Impressions | Avg position |
|------|-------:|------------:|-------------:|
| 10 Aug | 32 | 1,807 | 7.2 |
| 11 Aug | 43 | 2,404 | 7.1 |
| **12 Aug (peak)** | **53** | **2,550** | 6.7 |
| 13 Aug | 52 | 2,577 | 7.2 |
| 14 Aug | 26 | 2,048 | 7.4 |
| 15 Aug | 34 | 1,738 | 7.5 |
| 16 Aug | 26 | 1,743 | 7.3 |
| 17 Aug | 16 | 1,420 | 7.5 |
| 18 Aug | ~0* | ~23* | — |

\* 17–18 Aug figures are provisional (GSC finalizes data with 1–2 days lag) — re-check in GSC after 2 days.

- Decline actually **began 14 Aug**, four days before the official announcement — consistent with pre-rollout ranking shifts, or a second contributing factor.
- The **18 Aug collapse** lines up with the August 2026 Spam Update announcement (Google Search Status Dashboard incident LEubPCm2octf2uMqCFKE).
- Index status is fine: homepage and sampled pages are "Submitted and indexed", robots.txt allowed, fetch successful, no de-indexing. This is a **ranking demotion, not removal**.
- Note: sitemap report shows 150 submitted / 0 indexed — but URL Inspection confirms pages ARE indexed; they were just indexed via discovery, not attributed to the sitemap. Not a problem by itself.

## 2. Confirmed technical problem: canonical mismatch / doorway pattern

URL Inspection found a **real, verifiable defect** (this is the #1 fix):

- `https://kisanstatus.com/beneficiary-list/goa` declares `rel=canonical` → `/articles/PmKisanBeneficiaryList2026` (a different page).
- `https://kisanstatus.com/articles/PmKisanBeneficiaryListVillageWise2026` also declares canonical → `/articles/PmKisanBeneficiaryList2026`.
- Google **ignored** the declared canonical in both cases and chose the page itself.

Many near-identical state/village pages all pointing canonical at one article is exactly the **doorway-page pattern** that spam updates (SpamBrain) target. With dozens of `/beneficiary-list/<state>` and `/rajya-yojana/<state>-...` pages, this is the most likely trigger.

## 3. What was ranking (peak week 7–13 Aug, top pages)

Top earners — these are the pages to protect and rebuild around:

1. `/rajya-yojana/odisha-cm-kisan-status-check-2026` — 46 clicks / 1,214 impr
2. `/articles/hi/pm-kisan-25vi-kist` — 29 clicks / 588 impr (pos 2.6!)
3. `/rajya-yojana/mp-kisan-kalyan-yojana-kist-status` — 19 clicks / 530 impr
4. `/articles/PmKisanLandSeedingForm` — 16 clicks / 241 impr
5. `/articles/hi/farmer-id-kaise-banaye` — 14 clicks / 1,509 impr
6. `/articles/msp-list-2026-27` — 14 clicks / 734 impr

## 4. Recovery plan (prioritised)

### Fix 1 — Canonicals (template fix, do first)
Every page must have a **self-referencing canonical** (`/beneficiary-list/goa` → canonical = `/beneficiary-list/goa`). Find the shared template/layout emitting the wrong canonical and fix it in one place. If a page truly is a duplicate, don't canonical it away — either add unique content or 301 it.

### Fix 2 — De-doorway the state pages
For every `/beneficiary-list/<state>` and `/rajya-yojana/<state>-...` page, ask: does this page contain **state-specific, useful information** (that state's actual process, portal links, amounts, dates)? 
- Yes → keep, strengthen, self-canonical.
- No (same template, only the state name changes) → consolidate into one strong page with a state table, and 301 the thin ones.
Fewer, better pages beat 150 thin ones.

### Fix 3 — Content quality on top pages
Rewrite/deepen the peak-week top pages (list above): original explanation, screenshots of the real process, dates, sources, author info. These had proven demand.

### Fix 4 — Trust signals
About, Contact, Privacy Policy pages with real identity. Accurate "last updated" dates. No misleading buttons ("Check Status" links that just navigate to more pages).

### Fix 5 — Check the non-update factor
Decline started 14 Aug, before the update. Also review: recent template/content changes around 12–14 Aug, ad density changes, and GSC → **Manual actions** + **Security issues** in the dashboard (not visible via API): https://search.google.com/search-console

## 5. What NOT to do

- ❌ Don't mass-produce more state/district pages to recover — that deepens the demotion.
- ❌ Don't buy links.
- ❌ Don't file a reconsideration request (algorithmic update ≠ manual action).
- ❌ Don't panic-delete everything — the top pages above had genuine traction.

## 6. Expectations

- The update is still rolling out (a few days) — numbers may move further either way until it completes.
- After fixes: recovery is typically **weeks to months**; some sites recover fully only at the next spam-update cycle. Keep publishing genuinely useful content meanwhile.

## 7. Sources

- Google Search Status Dashboard — August 2026 spam update: https://status.search.google.com/incidents/LEubPCm2octf2uMqCFKE (announced 18 Aug 2026)
- GSC Search Analytics + URL Inspection API data for sc-domain:kisanstatus.com (pulled 18 Aug 2026)
- Google spam policies: https://developers.google.com/search/docs/essentials/spam-policies
