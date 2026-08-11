# Content Audit — Red-Flag Articles (Thin Content · Uniform Templates · Repetitive Keywords)

**Date:** 2026-08-11
**Scope:** All 88 article components under `components/articles/` (incl. subfolders `hindi-yojana/`, `kisanguides/`, `loan-mandi-pashupalan/`, `maandhan/`, `rajya-yojana/`), plus keyword metadata in `lib/*-data.ts`.

**Method (all numbers measured from the code, not guessed):**
- **Prose word count** = visible text extracted from JSX (Tailwind classes, imports, props stripped). Threshold for "thin": under ~2,700 prose words for a "complete guide"-style page — the bottom of the repo's own distribution (repo median ≈ 4,300).
- **Template uniformity** = identical component-set fingerprint + heading-skeleton similarity (SequenceMatcher on h2/h3 sequences). 1.00 = same skeleton.
- **Keyword repetition** = same 3-word phrase repeated ≥8× in visible prose, and/or near-duplicate `keywords[]` arrays in the data files.

---

## 🔴 Priority 1 — Thin + templated + keyword-repetitive (worst combination)

### 1. `components/articles/PmKisan25viKist2027.tsx` (slug: `PmKisan25viKist2027`)
- **Thin:** ~1,552 prose words — the thinnest article in the repo. Only 1 real `<h2>` extracted.
- **Speculative topic:** article about a *future* installment ("25vi kist 2027") whose own FAQ admits "koi exact date nahi hai abhi… Hum guess nahi karte." A page built around information that doesn't exist yet = classic thin/placeholder content.
- **Templated:** shares its exact component-set frame with `NanoDap500mlPriceInIndia2026`, `KisanTractorLoan2026`, `PmKisanCorrectionForm2026`.
- **Overlaps** heavily with `PmKisan24viKist2026` and `hindi-yojana/PmKisan25viKistKabAayegi.tsx` (same intent, near-duplicate targeting).
- **Fix:** merge into a single evergreen "agli kist kab aayegi" page or noindex until real dates exist; add substantive unique sections (state-wise disbursal history, verification walkthrough).

### 2. `components/articles/PmKisanVoluntarySurrenderGuide.tsx`
- **Thin:** ~1,888 prose words, 1 h2.
- **Uniform frame:** heading skeleton is **100% identical** to `PmKisanFaceAuthenticationEkyc`, `PmKisanCscRegistrationCharges`, and `PmKisanBankAccountChangeProcess` (SequenceMatcher = 1.00). Four articles, one skeleton.
- **Keyword repetition:** "agar eligible nahi" ×8; "voluntary surrender" 18× as a bigram in a ~1.9k-word page.
- **Fix:** differentiate structure (unique h2s per topic), expand with real surrender-form walkthrough, cut phrase repetition.

### 3. `components/articles/PmKisanCscRegistrationCharges.tsx`
- **Thin:** ~1,993 prose words, 1 h2.
- **Uniform frame:** same 1.00-identical skeleton group as #2.
- **Keywords metadata:** 5 of 6 `keywords[]` entries start with "pm kisan" (near-duplicate keyword list).
- **Fix:** as #2; also diversify the `keywords` array in `lib/articles-data.ts`.

### 4. `components/articles/PmKisanFaceAuthenticationEkyc.tsx`
- **Thin:** ~2,304 prose words, 1 h2.
- **Uniform frame:** same 1.00 skeleton group.
- **Keyword stuffing:** "face authentication" appears **52×** in the page body.
- **Fix:** replace repeated exact-match phrase with natural variants (chehre se eKYC, FaceRD app, etc.); add unique heading structure.

### 5. `components/articles/PmKisanBankAccountChangeProcess.tsx`
- **Thin:** ~2,664 prose words, 1 h2.
- **Uniform frame:** same 1.00 skeleton group (4th member).
- **Keyword stuffing:** "bank account" ×38, "naya account" ×29, "naya account number" ×12 as trigram.
- **Also:** 6/6 `keywords[]` entries start "pm kisan".
- **Fix:** as above; this page also near-duplicates `maandhan/pmkmy-bank-account-change.tsx` in intent — cross-link, don't clone.

### 6. `components/articles/PmKisanBeneficiaryList2026.tsx`
- **Thin:** ~2,056 prose words, 2 h2.
- **Keyword stuffing:** "kisan beneficiary list" ×10, "village wise list" ×8.
- **Cannibalization:** overlaps `PmKisanVillageWiseListPdfDownload.tsx` (which itself repeats "village wise" targeting; 6/6 keywords start "pm kisan"). Two pages competing for the same query.
- **Fix:** consolidate the two pages or clearly split intent (list check vs PDF download); dedupe keywords.

### 7. `components/articles/PmKisan24viKist2026.tsx`
- **Thin:** ~2,133 prose words, 1 h2.
- **Keyword stuffing:** "24vi kist" ×35 in body.
- **Cannibalization:** part of the kist-cluster (24vi/25vi/25vi-hindi) with near-identical purpose.
- **Fix:** consolidate kist articles into one updatable hub; cut exact-match repetition.

### 8. `components/articles/PmKisanLandSeedingForm.tsx`
- **Keyword stuffing (severe):** "land seeding form" ×30 and "kisan land seeding" ×11 as trigrams; "land seeding" ×92 as bigram. Prose ~2,542 words → extreme phrase density.
- **Keywords metadata:** 6/9 keywords start "pm kisan".
- **Fix:** rewrite repeated anchor phrase into natural language; density should drop by ~70%.

### 9. `components/articles/PmKisanRejectedStatusReApplyGuide.tsx`
- **Thin:** ~2,824 prose words, 1 h2.
- **Keyword stuffing:** "kisan rejected status" ×13, "kisan status check" ×8.
- **Keywords metadata:** 6/6 start "pm kisan".
- **Fix:** natural-language rewrite of repeated phrases; add unique h2 structure.

---

## 🟠 Priority 2 — Uniform template frames (same skeleton reused across whole folders)

### A. `loan-mandi-pashupalan/` — 11 articles, one identical frame, **zero h2 headings**
All of: `BiharPashupalanLoanYojana`, `GehuKaBhavMspVsMandi`, `JansamarthPortalLoanApply`, `MandiBhavAppComparison`, `MurgiPalanLoanNlmSubsidy`, `RashtriyaGokulMissionSubsidy`, `SabziBhavGuidePyazAlooTamatar`, `EnamRegistrationKaiseKare`, `MspList202627`, `SbiDairyLoanInterestRate`, `DairyFarmLoanWithoutCollateral` — plus 3 root articles (`PmKisanVoluntarySurrenderGuide`, `PmKisanCscRegistrationCharges`, `PmKisanFaceAuthenticationEkyc`) — share **one identical component-set fingerprint** (13-article group).
- Most render **0 extractable `<h2>`** (headings are done via a shared `SH` component with props, giving every page the same DOM shape).
- `EnamRegistrationKaiseKare` ↔ `MspList202627` heading skeletons: **1.00 identical**.
- **Fix (template-level, one change fixes 11+ pages):** vary section structure per article in the shared layout; ensure semantic `<h2>/<h3>` output; add per-article unique modules (tables, calculators, state data) instead of the same block sequence.

### B. `kisanguides/` — 6 articles, identical frame + `span span span` filler
`MadhumakhiPalan`, `VerminCompost`, `MushroomKheti`, `PMFMEYojana`, `SilageMaking`, `PMatsyaSampada` share one fingerprint. Repeated empty `<span>` chains ("span span span" ×15–26 per page) = decorative markup inflating pages without content.
- **Fix (template-level):** extract the shared decorative blocks into one component; differentiate section order and content per guide.

### C. `rajya-yojana/` — 5 status-check articles, one frame
`KrishakUnnatiYojanaStatusCheck`, `RythuBharosaStatusCheck`, `AnnadataSukhibhavaStatusCheck`, `NamoShetkariYojanaStatus`, `MpKisanKalyanYojanaKist` — same fingerprint; per-state content is real but the skeleton is uniform.
- `NamoShetkariYojanaStatus` additionally stuffs "namo shetkari mahasanman" ×10 + "namo shetkari" ×73 bigrams.
- **Fix:** keep the shared frame (acceptable for a status-check series) but fix the phrase stuffing in `NamoShetkariYojanaStatus`.

### D. `maandhan/` — skeleton clones
- `PmKisanMaandhanAutoDebitPooraSach` ↔ `PmKisanMaandhanEligibilityDocuments`: heading skeleton **1.00 identical**.
- `pmkmy-bank-account-change.tsx`: worst single-page stuffing in the repo — **"bank account change" ×48** as a trigram, "naye bank account" ×13, plus "span span span" ×20. Also near-duplicates root `PmKisanBankAccountChangeProcess.tsx`.
- `AutoDebitFailRegularization.tsx`: "auto debit fail" ×20, "debit fail hone" ×14 — near-duplicates `PmKisanMaandhanAutoDebitPooraSach` ("auto debit band" ×14, "auto debit mandate" ×11). Two pages, one intent.
- **Fix:** merge or clearly split the two auto-debit pages and the two bank-account-change pages; rewrite stuffed phrases.

### E. `hindi-yojana/` — skeleton clones
- `PmKisan25viKistKabAayegi` ↔ `PmKisanStatusCheckMobileNumberSe`: **1.00 identical** skeletons; `PmKisanNewRegistration2027` at 0.80 to both.
- `PmKisan25viKistKabAayegi` also duplicates root `PmKisan25viKist2027` intent (see Priority 1 #1).
- **Fix:** differentiate skeletons; resolve the 25vi-kist duplication across folders.

---

## 🟡 Priority 3 — Keyword-repetition only (content depth is OK)

| File | Repeated phrase | Count |
|---|---|---|
| `soil-health-card-complete-guide-2026.tsx` | "soil health card" (trigram) | 38× |
| `PmKisanMobileNumberChangeUpdate.tsx` | "mobile number change" / "kisan mobile number" / "mobile number update" | 14/10/10× |
| `PmKisanStateNodalOfficerList.tsx` | "state nodal officer" | 18× |
| `maandhan/PmKisanMaandhanAutoDebitPooraSach.tsx` | "auto debit band/mandate" | 14/11× |
| `maandhan/AutoDebitFailRegularization.tsx` | "auto debit fail" | 20× |
| `maandhan/pmkmy-bank-account-change.tsx` | "bank account change" | 48× |
| `loan-mandi-pashupalan/RashtriyaGokulMissionSubsidy.tsx` | "rashtriya gokul mission" / "breed multiplication farm" | 16/16× |
| `KisanCreditCardOnlineApply2026.tsx` | "kisan credit card" | 21× |
| `kisanguides/PMatsyaSampada.tsx` | "matsya sampada yojana" | 17× |
| `rajya-yojana/NamoShetkariYojanaStatus.tsx` | "namo shetkari (mahasanman)" | 73× bigram |

**Fix pattern for all:** replace ≥60% of exact-match repeats with natural variants/pronouns; keep the exact phrase in title, first paragraph, one h2, and FAQ — nowhere else systematically.

## Keyword-metadata issues (`lib/*-data.ts`)

14 articles have near-duplicate `keywords[]` arrays where 5–8 of 6–9 entries begin with the same two words (e.g. `PmKisanCorrectionForm2026`: **8/8** start "pm kisan"). Affected slugs:
`PmKisanBeneficiaryList2026, PmKisanCorrectionForm2026, PmKusumYojanaSolarSubsidy2026, PmKisanLandSeedingForm, PmKisanVoluntarySurrenderGuide, PmKisanStateNodalOfficerList, PmKisanBankAccountChangeProcess, PmKisanCscRegistrationCharges, PmKisanRejectedStatusReApplyGuide, PmKisanVillageWiseListPdfDownload, PmKisanMobileNumberChangeUpdate, pm-fme-yojana-food-processing, vermi-compost-business-guide, hi/pm-kisan-25vi-kist`
**Fix:** each array should mix head term + long-tail variants + Hindi variants, not permutations of one stem.

---

## Not flagged (for the record)
Articles like `KrishakBandhuStatusCheck`, `RythuBharosaStatusCheck`, `KrishakUnnatiYojanaStatusCheck`, `OdishaCmKisanStatusCheck`, `FarmerIdCardKaiseBanaye2027`, `DairyFarmLoanWithoutCollateral` etc. have healthy depth (4.5k–9.5k prose words), state-specific detail, and unique FAQs — the shared frame there is a series design, not slop. Per instruction, nothing else was touched.

## Suggested order of work
1. Template-level fixes (Priority 2A/2B) — one edit fixes 11+ / 6 pages.
2. Consolidations: 24vi/25vi kist cluster; bank-account-change pair; auto-debit pair; beneficiary-list/village-wise pair.
3. Phrase-density rewrites on the Priority 1 & 3 pages (worst first: `pmkmy-bank-account-change` 48×, `PmKisanFaceAuthenticationEkyc` 52×, `PmKisanLandSeedingForm` 30×).
4. Keyword-array dedupe in `lib/*-data.ts` (14 slugs above).
