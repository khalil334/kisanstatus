# AI-Footprint Audit — KisanStatus.com (open items only)

**Originally scanned:** 2026-08-12 (repo at `78dd2ca`, 96 article components, 224,439 words)
**This revision:** 2026-08-13 — re-measured against `main` at `dab5f5c`. **Everything that has
been fixed is removed from this file.** What remains below is what is still open, plus a short
ledger of closed items at the end so the history is traceable.

**Method:** static scan of the repo — n-gram repetition on rendered text, component-block
sequence similarity (LCS), heading clustering, FAQ extraction, related-card overlap, and
cross-file sentence matching. Scripts live in the Letaido workspace, not this repo.

> Findings document. Nothing here has been changed in the codebase yet.

---

## 1. What is still open

| # | Item | Scale on current `main` | Status |
|---|---|---|---|
| 1 | Branded head-phrase density | 10 articles still ≥9 repeats /1000w | **open** — see §2 |
| 2 | Identical article skeleton (Part 6b–6d) | 4 template families, worst `loan-mandi-pashupalan/` | **held** — owner decision, see §3 |
| 3 | Shared facts duplicated as prose | helpline 155261 in 18 files; "18 se 40 saal" in 6; 2 verbatim sentence pairs | **open** — see §4 |
| 4 | Residual filler / repeated headings | "Step by Step" heading in 8 files; `turant` ×6; `bilkul free hai` ×6 | **open (low)** — see §5 |
| 5 | Internal-link concentration | KCC linked 27×, MasterGuide 25× from a fifth of the site | **open** — see §6 |
| 6 | `Topic: Subtitle 2026` title frame | 59 of ~76 titles carry a year | **held** — ranking risk, see §7 |
| 7 | Two factual self-contradictions on fees | CSC registration fee; mobile-number change charge | **open — owner decision needed**, see §8 |

---

## 2. Branded head-phrase density (open)

Re-measured on `main` (`dab5f5c`). Part 5 de-stuffed the original worst 8; these are the
articles that now sit highest. Natural Hinglish is ~3–5 mentions /1000w; ≥8 reads as stuffing.

| # | Article | Words | Phrase | Repeats | /1000w |
|---|---|---|---|---|---|
| 1 | `PmKisanMasterGuide2026.tsx` | 2095 | "pm kisan" | 30× | **14.3** |
| 2 | `hindi-yojana/NamoShetkariYojanaMaharashtra.tsx` | 2821 | "pm kisan" | 39× | **13.8** |
| 3 | `PmKisanRejectedStatusReApplyGuide.tsx` | 2084 | "pm kisan" | 27× | **13.0** |
| 4 | `maandhan/PmKisanMaandhanAutoDebitPooraSach.tsx` | 2901 | "pm kisan" | 37× | **12.8** |
| 5 | `PmKisanMobileNumberChangeUpdate.tsx` | 3047 | "pm kisan" | 37× | **12.1** |
| 6 | `hindi-yojana/MukhyamantriKisanKalyanYojanaMp.tsx` | 3010 | "pm kisan" | 35× | **11.6** |
| 7 | `soil-health-card-complete-guide-2026.tsx` | 1436 | "soil health" | 15× | **10.4** |
| 8 | `kisanguides/PMFMEYojana.tsx` | 2470 | "pm fme" | 24× | **9.7** |
| 9 | `PmKusumYojanaSolarSubsidy2026.tsx` | 1982 | "solar pump" | 19× | **9.6** |
| 10 | `rajya-yojana/MpKisanKalyanYojanaKist.tsx` | 2739 | "pm kisan" | 26× | **9.5** |

**Noise to ignore, not fix as keyword work:**
`"gov in"` (41× in `PmKisanLandSeedingForm.tsx`, 28× in `PmKisanVillageWiseListPdfDownload.tsx`)
is the domain repeated in link text/URLs — a linking problem, not stuffing.
`"naam par"`, `"ke liye"`, `"nahi hai"`, `"jaata hai"`, `"sakti hai"` are ordinary Hindi
constructions. `"mandi topvegetables"` is data-array content.

**Fix shape (same as Part 5):** replace *surplus mid-paragraph repeats* with variants
("is yojana", "iska", scheme short-forms, pronouns). Title, H1, first paragraph, headings,
FAQ questions, metadata, alt text and keyword arrays stay untouched.

---

## 3. Same skeleton frame — Part 6b–6d (held)

Signature = ordered sequence of rendered blocks per file. Two articles ≥0.80 are the same page
with different words. **30 pairs** score ≥0.80, in four template families:

**`loan-mandi-pashupalan/` — 10 of 11 files (tightest cluster)**
`BiharPashupalanLoanYojana`, `DairyFarmLoanWithoutCollateral`, `EnamRegistrationKaiseKare`,
`GehuKaBhavMspVsMandi`, `JansamarthPortalLoanApply`, `MandiBhavAppComparison`, `MspList202627`,
`MurgiPalanLoanNlmSubsidy`, `RashtriyaGokulMissionSubsidy`, `SbiDairyLoanInterestRate`

**`rajya-yojana/` status-check family — 9 files**
`IkhedutPortalStatusCheck2026`, `KrishakUnnatiYojanaStatusCheck`, `MeriFasalMeraByoraStatusCheck2026`,
`NamoShetkariYojanaStatus`, `OdishaCmKisanStatusCheck`, `PariharaPaymentStatusCheck2026`,
`PmKisanPatiPatniRule`, `RythuBharosaStatusCheck`, `UpKisanKarjRahatList2026`

**`kisanguides/` business-guide family — 3 files**
`PMatsyaSampada`, `SilageMaking`, `VerminCompost` (+ `MadhumakhiPalan`, `MushroomKheti` on closing similarity)

**`maandhan/` family — 5 files**
`MaandhanContributionGuide`, `PmKisanMaandhanAutoDebitPooraSach`, `PmKisanMaandhanEligibilityDocuments`,
`PmKisanMaandhanPensionCalculator`, `PmkmyVsApyComparison2026`

Top pairs: 0.851 `JansamarthPortalLoanApply`/`MandiBhavAppComparison` · 0.85
`PariharaPaymentStatusCheck2026`/`UpKisanKarjRahatList2026` · 0.849 `SilageMaking`/`VerminCompost` ·
0.848 `GehuKaBhavMspVsMandi`/`JansamarthPortalLoanApply` · 0.844 `GehuKaBhavMspVsMandi`/`RashtriyaGokulMissionSubsidy` ·
0.839 `KrishakUnnatiYojanaStatusCheck`/`MeriFasalMeraByoraStatusCheck2026`.

> **Correction (from `docs/same-structure-articles.md`):** the earlier "byte-identical clusters"
> claim for `hindi-yojana/` and the `rajya-yojana/` status-check family was a tokenizer artefact —
> local helpers (`Hd`, `Sec`, `Tip`, `Figure`) weren't recognised. With a generic tokenizer both
> families score **0 pairs ≥0.80**. The counts above use the block-signature tokenizer.

**Verdict:** a shared component library is fine. The problem is that section *order and type*
are also identical — same intro → warning box → numbered steps → table → FAQ, ten times inside
one folder.

**Why held:** PR #270 measured reorder-only changes as ineffective, and genuine section-type
divergence collides with ground rule 1 (no article rewrites). Needs an owner call on whether
rule 1 can be relaxed for these ~30 files.

---

## 4. Shared facts duplicated as prose (open)

### 4a. Two verbatim sentence pairs still present

| Files | Sentence |
|---|---|
| `PmKisanMaandhanYojanaPension.tsx`, `PmKisanMobileNumberChangeUpdate.tsx` | "ye sawal bahut logon ke mann mein aata hai" |
| `kisanguides/PMFMEYojana.tsx`, `kisanguides/PMatsyaSampada.tsx` | "original documents verification time par dikhane padenge" |

### 4b. Legitimately shared facts, but hand-typed per article

| Files | Fact |
|---|---|
| 18 | helpline `155261` |
| 6 | the "18 se 40 saal" PMKMY age rule |

These are correct facts, so the risk isn't duplication-as-spam — it's drift (one file gets
updated, 17 don't). **Fix:** move to one shared data constant / component so wording is
intentional and single-sourced.

---

## 5. Residual filler and repeated headings (open, low priority)

Part 4 cut 181 instances across 69 files. What's left on `main`:

| Count | Item | Note |
|---|---|---|
| 274 | `zaroor*` | almost entirely `zaroori` / `zaroorat` — **ordinary Hindi, leave alone**. Bare intensifier `zaroor`: only **2** left |
| 37 | "complete guide" | metadata / H1 / alt only, kept by design as an SEO anchor; **0** in body prose |
| 16 | "step by step" | **8 are section headings** across 8 different articles — this is the live tell, see below |
| 6 | `turant` | mostly table-cell labels ("Turant …"), not prose intensifiers |
| 6 | `bilkul free hai` | worth one differentiation pass |
| 5 | inline `yaad rakhein` | reads as natural prose in all 5 — no action recommended |

**The one real item:** the same `— Step by Step` heading suffix appears in
`PmKisanSelfRegisteredStatusCheck` (×2), `PmfbyCropInsurance2026`, `PmKisanFaceAuthenticationEkyc`,
`AgriStackKyaHai2026`, `KisanCreditCardOnlineApply2026`, `NanoDap500mlPriceInIndia2026` (×2).
Give each a content-led heading instead.

---

## 6. Internal-link concentration (open)

Duplicate related-card *sets* are fixed (PRs #268, #270: 0 byte-identical sets, 0 pairs ≥0.6
overlap) and the section label is single site-wide. What remains is target concentration:

| Times linked | Target |
|---|---|
| 52 | `/about` |
| 40 | `/articles` |
| 27 | `/articles/KisanCreditCardOnlineApply2026` |
| 25 | `/articles/PmKisanMasterGuide2026` |
| 17 | `/articles/PmKisanBeneficiaryList2026` |
| 16 | `/articles/PmKisanPaymentFailedFix2026` |
| 14 | `/rajya-yojana/state-kisan-yojana-list-all-states-2026` |
| 13 | `/maandhan` |
| 12 | `/articles/PmKisanEkycOnline2026` |
| 11 | `/articles/PmKisanStateNodalOfficerList` |

KCC (27×) and the Master Guide (25×) are linked from roughly a fifth of the site, including
articles where KCC is only tangentially relevant. That's a template slot, not an editorial link.
**Fix:** drop the KCC/Master-Guide link from articles where it isn't the natural next step.

---

## 7. Title frame (held)

Of ~76 titles in `lib/*-data.ts`, **59 contain a year** (2026/2027); the `Topic: Subtitle 2026`
shape dominates. **Held pending owner decision** — the year is a real query modifier for a
scheme site, so editing `lib/*-data.ts` titles carries direct ranking risk.

---

## 8. Two factual self-contradictions — owner decision needed

Surfaced while verifying FAQ answers (PR #282 flagged them; not fixed). Both are money
questions farmers act on. No reconciliation was invented.

| Conflict | File A | File B |
|---|---|---|
| CSC registration fee | `PmKisanCscRegistrationCharges.tsx`: official rate ₹25–30 new / ₹15–20 eKYC (rate chart, ₹25 quoted as "sarkari rate") | `pm-kisan-fto-generated-ka-matlab-kya-hai.tsx`: service must be **free**; ₹20–50 "seva shulk" is "unauthorized" |
| Mobile-number change charge | `PmKisanMasterGuide2026.tsx`: "Bilkul free hai", CSC ₹20–30, "official charge zero" | `PmKisanMobileNumberChangeUpdate.tsx`: ₹20–30 at CSC, no single fixed amount stated |

Settle which is correct, then correct the other in its own PR.

---

## 9. Remaining work order

| Priority | Work | Files | Type |
|---|---|---|---|
| P0 | Settle the 2 fee contradictions (§8) and correct the losing file | 2 | factual |
| P1 | De-stuff the 10 articles in §2 to ~5–6 /1000w; anchors untouched | 10 | per-article copy |
| P1 | Single-source helpline 155261 + the 18–40 age rule; split the 2 verbatim sentences (§4) | ~20 + 1 new | template |
| P2 | Re-pick KCC / Master-Guide links where tangential (§6) | ~25 | editorial |
| P2 | Content-led headings instead of the shared "— Step by Step" suffix (§5) | 7 | copy |
| P3 | Differentiate the 6 `bilkul free hai` phrasings (§5) | 6 | copy |
| Held | Section-order/type variation in the 4 template families (§3, Part 6b–6d) | ~30 | structural |
| Held | Break the `Topic: Subtitle 2026` title frame (§7) | ~59 | metadata |

### Ground rules (unchanged, apply to every part)

1. **No article rewrites.** Targeted edits only; surrounding prose stays as written.
2. **No word-count trimming.** Replacements keep roughly the same length; nothing is cut for brevity.
3. **Ranking keywords are protected.** Head phrases stay in title, H1, first paragraph, headings
   and FAQ questions. De-stuffing replaces only surplus mid-paragraph repeats. *(The "0.90" rule
   is still unclarified — until then, treat all ranking keywords as untouchable.)*
4. **Every article keeps its own voice.** When shared blocks are reworked, each file gets distinct
   wording — no new shared formula may replace an old one.
5. **Unrelated issues are out of scope** for whichever part is running.

**Execution model:** one part at a time, small PRs, owner review + manual merge (no auto-merge).
Branch per part: `fix/part-<n>-<slug>`.

---

## 10. Closed items — ledger

Details for each are in the linked PRs and in `git log docs/ai-footprint-audit.md`
(full prose changelog lives in the history of this file, up to `dab5f5c`).

| Closed | Item | Where |
|---|---|---|
| 2026-08-12 | Shared `kisanguides/` disclaimer → one `<GuideDisclaimer>`; hand-typed date stamps gone | Part 1 |
| 2026-08-12 | 7-file portal-CTA sentence ("…10 second baad portal khulega") de-duplicated — 0 left | Part 1 |
| 2026-08-12 | Related-section label unified site-wide (4 rotating labels → 1) | Part 1 |
| 2026-08-12 | 8 hand-typed `FAQPage` JSON-LD files migrated to `<FAQBlock>` (schema/visible drift) | Part 2 |
| 2026-08-13 | 9th hand-typed FAQ file (`maandhan/PmKisanMaandhanStatusCheckOnline`) | Part 2b, #275 |
| 2026-08-12 | "Seedhi Baat / Bottom Line / Aakhri Baat" closing formula — 47 files; **0 markers left** | Part 3a–3d, #253 |
| 2026-08-12 | Filler-word pass — 181 replacements, 69 files, 0 deletions | Part 4, #257–#260 |
| 2026-08-12 | Keyword de-stuffing, original worst 8 articles | Part 5, #262 |
| 2026-08-13 | FAQ coverage — every article component now emits FAQ structured data | #277, #278, #279 |
| 2026-08-13 | FAQ opener monotony (largest bucket 21 → 5) | §6b, #280 |
| 2026-08-13 | Near-duplicate FAQ questions (pairs ≥0.75: 46 → 2, 2 deliberate) | §6a, #281 |
| 2026-08-13 | Duplicate related-card sets (0 byte-identical, 0 pairs ≥0.6 overlap) | Part 6a/6f, #268, #270 |
