# AI-Footprint Audit — KisanStatus.com

**Date:** 2026-08-12  
**Scope:** 96 article components under `components/articles/**` (224,439 words of rendered prose)  
**Method:** static scan of the repo at `78dd2ca` — n-gram repetition on rendered text, component-block sequence similarity (LCS), heading-text clustering, FAQ extraction (both `q/a` literals and `FAQPage` JSON-LD), internal-link/related-card set overlap, and cross-file sentence matching.  
**Scripts:** `scripts/kisanstatus_dup_scan.py`, `kisanstatus_struct_scan.py`, `kisanstatus_intro_scan.py`, `kisanstatus_faq_scan.py` (in the Letaido workspace, not this repo).

> Nothing in this file has been changed in the codebase. It is a findings document only.

## 1. Summary — what reads as AI-generated

| # | Signal | Scale | Why it looks AI |
|---|---|---|---|
| 1 | Repetitive keyword phrases | **88 of 96** articles repeat a phrase ≥8× | exact-match head phrase in every heading, alt, FAQ and para |
| 2 | Same closing-block formula ("Seedhi Baat" / "Bottom Line") | **67 marker hits across 47 distinct files** | every article ends with the same rhetorical device |
| 3 | Identical article skeleton (component-block order) | **30 file pairs ≥0.80 similar**, worst cluster = `loan-mandi-pashupalan/` (10 of 11 files) | one template filled 10× |
| 4 | Copy-pasted disclaimer / CTA boilerplate | 6 files share the disclaimer verbatim, 7 files share the portal CTA sentence | literal duplicate sentences site-wide |
| 5 | Near-duplicate FAQ questions | **18 cross-file pairs ≥0.60 similar**; 714 FAQs total | same question re-asked with a swapped noun |
| 6 | Cloned internal-link blocks | **2 identical related-card sets**, 61 near-identical pairs | related links not chosen per article |
| 7 | Repeated single sentences | **19 real prose sentences** appear in 2+ articles | verbatim reuse |
| 8 | Filler / hype words | `zaroor` 362×, `turant` 98×, `complete guide` 38×, `bilkul free hai` 22× | LLM-favoured intensifiers |

**The single highest-impact fix** is #2 + #4 together: the closing block. It is the most visible, most mechanical tell (same section title, same "do it today bhai" pep-talk, same disclaimer wording) and it sits at the bottom of nearly every page — the exact place a reader or a quality rater forms their final impression.

## 2. Repetitive keywords (per article)

88 of 96 articles contain at least one 2–4 word phrase repeated 8+ times. Natural Hinglish writing sits around 3–5 mentions per 1,000 words; anything above ~8 is a stuffing footprint.

### Worst 30 (by density per 1,000 words)

| # | Article | Words | Phrase | Repeats | /1000w |
|---|---|---|---|---|---|
| 1 | `PmKisanLandSeedingForm.tsx` | 2042 | "gov in" | 41× | **20.1** |
| 2 | `soil-health-card-complete-guide-2026.tsx` | 1413 | "soil health" | 27× | **19.1** |
| 3 | `kisanguides/PMFMEYojana.tsx` | 2809 | "pm fme" | 48× | **17.1** |
| 4 | `rajya-yojana/tools/PmKisanFamilyChecker.tsx` | 1222 | "naam par" | 20× | **16.4** |
| 5 | `PmKisanMasterGuide2026.tsx` | 2084 | "pm kisan" | 32× | **15.4** |
| 6 | `maandhan/PmKisanMaandhanAutoDebitPooraSach.tsx` | 2854 | "pm kisan" | 40× | **14.0** |
| 7 | `PmKisanRejectedStatusReApplyGuide.tsx` | 2063 | "pm kisan" | 28× | **13.6** |
| 8 | `hindi-yojana/NamoShetkariYojanaMaharashtra.tsx` | 2818 | "pm kisan" | 38× | **13.5** |
| 9 | `PmKusumYojanaSolarSubsidy2026.tsx` | 2002 | "pm kusum" | 27× | **13.5** |
| 10 | `PmKisanVillageWiseListPdfDownload.tsx` | 2116 | "gov in" | 28× | **13.2** |
| 11 | `kisanguides/VerminCompost.tsx` | 2670 | "vermi compost" | 34× | **12.7** |
| 12 | `PmKisanMobileNumberChangeUpdate.tsx` | 3050 | "pm kisan" | 38× | **12.5** |
| 13 | `hindi-yojana/MukhyamantriKisanKalyanYojanaMp.tsx` | 3012 | "pm kisan" | 34× | **11.3** |
| 14 | `PmKisanStateNodalOfficerList.tsx` | 1939 | "nodal officer" | 21× | **10.8** |
| 15 | `PmKisan24viKist2026.tsx` | 1602 | "24vi kist" | 16× | **10.0** |
| 16 | `rajya-yojana/RythuBharosaStatusCheck.tsx` | 2543 | "rythu bharosa" | 25× | **9.8** |
| 17 | `rajya-yojana/MpKisanKalyanYojanaKist.tsx` | 2743 | "pm kisan" | 26× | **9.5** |
| 18 | `PmKisanBeneficiaryList2026.tsx` | 1612 | "pm kisan" | 15× | **9.3** |
| 19 | `rajya-yojana/OdishaCmKisanStatusCheck.tsx` | 2752 | "cm kisan" | 25× | **9.1** |
| 20 | `PmKisanEkycOnline2026.tsx` | 2586 | "pm kisan" | 23× | **8.9** |
| 21 | `PmKisanCorrectionForm2026.tsx` | 1956 | "pm kisan" | 17× | **8.7** |
| 22 | `rajya-yojana/tools/StateYojanaFinder.tsx` | 921 | "pm kisan" | 8× | **8.7** |
| 23 | `rajya-yojana/KrishakUnnatiYojanaStatusCheck.tsx` | 2920 | "antar rashi" | 25× | **8.6** |
| 24 | `rajya-yojana/RajasthanKisanSammanNidhi9000.tsx` | 2796 | "pm kisan" | 24× | **8.6** |
| 25 | `maandhan/PmKisanMaandhanEligibilityDocuments.tsx` | 1986 | "pm kisan" | 17× | **8.6** |
| 26 | `PmKisanBankAccountChangeProcess.tsx` | 1857 | "bank account" | 16× | **8.6** |
| 27 | `PmKisanVoluntarySurrenderGuide.tsx` | 1186 | "sakti hai" | 10× | **8.4** |
| 28 | `PmKisanSelfRegisteredStatusCheck.tsx` | 1928 | "status check" | 16× | **8.3** |
| 29 | `maandhan/pmkmy-bank-account-change.tsx` | 2590 | "bank account" | 21× | **8.1** |
| 30 | `PmKisanMaandhanYojanaPension.tsx` | 2086 | "har mahine" | 17× | **8.1** |

Full list of every flagged article with its top 6 phrases is in section 9.

**Note on the noise in this table:** some hits are structural, not editorial — `"gov in"` (41× in `PmKisanLandSeedingForm.tsx`) is the domain repeated in link text and URLs, `"mandi topvegetables"` is data-array content, `"sakti hai"` / `"jaata hai"` are ordinary Hindi verb endings. Fix the *branded head phrases* first ("soil health", "pm fme", "vermi compost", "pm kusum", "nodal officer", "rythu bharosa", "antar rashi", "auto debit"), and treat repeated bare URLs as a linking problem instead.

## 3. Same skeleton frame (article structure)

Signature = the ordered sequence of rendered blocks in each file (`SI`, `StepList`, `WB`, `DB`, `SH`, `GovLink`, `FAQBlock`, `CalcBanner`, `AuthorBox`, `BottomNav`, `Disclaimer`, `Image`, `table`, `h2`, `h3`, `ol`, `ul`). Two articles scoring ≥0.80 are structurally the same page with different words.

**30 pairs** score ≥0.80. They collapse into four template families:

**loan-mandi-pashupalan/ (10 of the 11 files in the folder — the tightest cluster)**

- `BiharPashupalanLoanYojana.tsx`
- `DairyFarmLoanWithoutCollateral.tsx`
- `EnamRegistrationKaiseKare.tsx`
- `GehuKaBhavMspVsMandi.tsx`
- `JansamarthPortalLoanApply.tsx`
- `MandiBhavAppComparison.tsx`
- `MspList202627.tsx`
- `MurgiPalanLoanNlmSubsidy.tsx`
- `RashtriyaGokulMissionSubsidy.tsx`
- `SbiDairyLoanInterestRate.tsx`

**rajya-yojana/ status-check family (9 files)**

- `IkhedutPortalStatusCheck2026.tsx`
- `KrishakUnnatiYojanaStatusCheck.tsx`
- `MeriFasalMeraByoraStatusCheck2026.tsx`
- `NamoShetkariYojanaStatus.tsx`
- `OdishaCmKisanStatusCheck.tsx`
- `PariharaPaymentStatusCheck2026.tsx`
- `PmKisanPatiPatniRule.tsx`
- `RythuBharosaStatusCheck.tsx`
- `UpKisanKarjRahatList2026.tsx`

**kisanguides/ business-guide family (3 files by structure; MadhumakhiPalan + MushroomKheti join them on closing-paragraph similarity)**

- `PMatsyaSampada.tsx`
- `SilageMaking.tsx`
- `VerminCompost.tsx`

**maandhan/ family (5 files)**

- `MaandhanContributionGuide.tsx`
- `PmKisanMaandhanAutoDebitPooraSach.tsx`
- `PmKisanMaandhanEligibilityDocuments.tsx`
- `PmKisanMaandhanPensionCalculator.tsx`
- `PmkmyVsApyComparison2026.tsx`

### Top structural pairs

| Similarity | A | B |
|---|---|---|
| 0.851 | `loan-mandi-pashupalan/JansamarthPortalLoanApply.tsx` | `loan-mandi-pashupalan/MandiBhavAppComparison.tsx` |
| 0.85 | `rajya-yojana/PariharaPaymentStatusCheck2026.tsx` | `rajya-yojana/UpKisanKarjRahatList2026.tsx` |
| 0.849 | `kisanguides/SilageMaking.tsx` | `kisanguides/VerminCompost.tsx` |
| 0.848 | `loan-mandi-pashupalan/GehuKaBhavMspVsMandi.tsx` | `loan-mandi-pashupalan/JansamarthPortalLoanApply.tsx` |
| 0.844 | `loan-mandi-pashupalan/GehuKaBhavMspVsMandi.tsx` | `loan-mandi-pashupalan/RashtriyaGokulMissionSubsidy.tsx` |
| 0.839 | `rajya-yojana/KrishakUnnatiYojanaStatusCheck.tsx` | `rajya-yojana/MeriFasalMeraByoraStatusCheck2026.tsx` |
| 0.839 | `rajya-yojana/KrishakUnnatiYojanaStatusCheck.tsx` | `rajya-yojana/PmKisanPatiPatniRule.tsx` |
| 0.833 | `rajya-yojana/IkhedutPortalStatusCheck2026.tsx` | `rajya-yojana/RythuBharosaStatusCheck.tsx` |
| 0.828 | `loan-mandi-pashupalan/JansamarthPortalLoanApply.tsx` | `loan-mandi-pashupalan/MspList202627.tsx` |
| 0.826 | `loan-mandi-pashupalan/GehuKaBhavMspVsMandi.tsx` | `loan-mandi-pashupalan/MandiBhavAppComparison.tsx` |
| 0.826 | `loan-mandi-pashupalan/JansamarthPortalLoanApply.tsx` | `loan-mandi-pashupalan/RashtriyaGokulMissionSubsidy.tsx` |
| 0.826 | `loan-mandi-pashupalan/MandiBhavAppComparison.tsx` | `loan-mandi-pashupalan/RashtriyaGokulMissionSubsidy.tsx` |
| 0.824 | `kisanguides/PMatsyaSampada.tsx` | `kisanguides/VerminCompost.tsx` |
| 0.824 | `rajya-yojana/MeriFasalMeraByoraStatusCheck2026.tsx` | `rajya-yojana/UpKisanKarjRahatList2026.tsx` |
| 0.82 | `loan-mandi-pashupalan/MspList202627.tsx` | `loan-mandi-pashupalan/MurgiPalanLoanNlmSubsidy.tsx` |

Two clusters are byte-level identical in shape:

- `Image>h2>table>h3>ul` → `hindi-yojana/GehuKaRateAajMspVsMandiBhav.tsx`, `hindi-yojana/MukhyamantriKisanKalyanYojanaMp.tsx`, `hindi-yojana/NpciAadhaarSeedingDbtPayment.tsx`
- `h2>ul` → `rajya-yojana/tools/KrishakBandhuChecker.tsx`, `rajya-yojana/tools/OdishaCmKisanChecker.tsx`

**Verdict:** a shared *component library* is good engineering and not a problem by itself. The problem is that the **section order and section types are also identical** — same intro → same warning box → same numbered steps → same table → same FAQ → same closing pep-talk, in the same order, 10 times inside one folder. Vary which sections exist and where, per article.

## 4. The "Seedhi Baat" closing formula — the biggest single tell

Nearly every article closes with the same rhetorical block under one of these headings:

| Heading text | Occurrences |
|---|---|
| "Seedhi Baat" | 11 |
| "Bottom Line" | 8 |
| "Ek Baat Yaad Rakhein" | 5 |
| "Seedhi Baat (Bottom Line)" | 3 |
| "Seedhi baat:" | 3 |
| "Aakhri Baat" | 3 |
| "Seedhi Baat Karein Toh:" | 1 |
| "Meri Salah:" | 1 |
| "Bottom Line:" | 1 |

Marker occurrences per file:

- **"seedhi baat"** — 24 files: `AgriStackKyaHai2026.tsx`, `KisanCreditCardOnlineApply2026.tsx`, `PmKisan24viKist2026.tsx`, `PmKisan25viKist2027.tsx`, `PmKisanBeneficiaryList2026.tsx`, `PmKisanEkycOnline2026.tsx`, `PmKisanLandSeedingForm.tsx`, `PmKisanMasterGuide2026.tsx`, `PmKisanPaymentFailedFix2026.tsx`, `PmKisanRejectedStatusReApplyGuide.tsx`, `PmKisanSelfRegisteredStatusCheck.tsx`, `PmKisanStateNodalOfficerList.tsx`, `PmKisanVillageWiseListPdfDownload.tsx`, `PmfbyCropInsurance2026.tsx`, `kisanguides/MushroomKheti.tsx`, `kisanguides/PMFMEYojana.tsx`, `loan-mandi-pashupalan/EnamRegistrationKaiseKare.tsx`, `maandhan/PmKisanMaandhanRegistration2026.tsx`, `maandhan/PmKisanMaandhanStatusCheckOnline.tsx`, `mandi-bhav-today.tsx`, `pm-kisan-fto-generated-ka-matlab-kya-hai.tsx`, `rajya-yojana/MeriFasalMeraByoraStatusCheck2026.tsx`, `rajya-yojana/NamoShetkariYojanaStatus.tsx`, `soil-health-card-complete-guide-2026.tsx`
- **"yaad rakhein"** — 12 files: `KisanCreditCardOnlineApply2026.tsx`, `PmKisanEkycOnline2026.tsx`, `PmKisanVoluntarySurrenderGuide.tsx`, `PmfbyCropInsurance2026.tsx`, `kisanguides/DripSprinkler.tsx`, `maandhan/PmKisanMaandhanAutoDebitPooraSach.tsx`, `maandhan/PmKisanMaandhanEligibilityDocuments.tsx`, `maandhan/PmKisanMaandhanRegistration2026.tsx`, `maandhan/PmkmyVsApyComparison2026.tsx`, `maandhan/family-pension-rules.tsx`, `maandhan/kisan-pension-card-download.tsx`, `maandhan/pmkmy-bank-account-change.tsx`
- **"bottom line"** — 11 files: `KisanCreditCardOnlineApply2026.tsx`, `KisanRinKahaSeLe2026.tsx`, `KisanTractorLoan2026.tsx`, `NanoDap500mlPriceInIndia2026.tsx`, `PmKisan25viKist2027.tsx`, `PmKisanEkycOnline2026.tsx`, `PmKisanPaymentFailedFix2026.tsx`, `PmKisanSelfRegisteredStatusCheck.tsx`, `PmKisanStateNodalOfficerList.tsx`, `loan-mandi-pashupalan/EnamRegistrationKaiseKare.tsx`, `loan-mandi-pashupalan/MspList202627.tsx`
- **"aakhri baat"** — 5 files: `kisanguides/BakriPalanYojana.tsx`, `maandhan/MaandhanContributionGuide.tsx`, `maandhan/PmKisanMaandhanPensionCalculator.tsx`, `maandhan/PmkmyVsApyComparison2026.tsx`, `rajya-yojana/BiharKisanRegistrationStatusCheck2026.tsx`
- **"ek baat yaad rakhein"** — 5 files: `maandhan/PmKisanMaandhanAutoDebitPooraSach.tsx`, `maandhan/PmKisanMaandhanEligibilityDocuments.tsx`, `maandhan/family-pension-rules.tsx`, `maandhan/kisan-pension-card-download.tsx`, `maandhan/pmkmy-bank-account-change.tsx`
- **"asli baat"** — 4 files: `PmKusumYojanaSolarSubsidy2026.tsx`, `loan-mandi-pashupalan/RashtriyaGokulMissionSubsidy.tsx`, `rajya-yojana/IkhedutPortalStatusCheck2026.tsx`, `rajya-yojana/UpKisanKarjRahatList2026.tsx`
- **"meri salah"** — 3 files: `PmKisan24viKist2026.tsx`, `kisanguides/CHCPortal.tsx`, `maandhan/PmkmyVsApyComparison2026.tsx`
- **"sach kya hai"** — 2 files: `KisanTractorLoan2026.tsx`, `maandhan/AutoDebitFailRegularization.tsx`
- **"sach ye hai"** — 1 files: `PmKisanMaandhanYojanaPension.tsx`

### Why it reads AI

It is not just the heading — the *content shape* is identical every time: a one-line verdict, then an imperative pep-talk with the same emotional beats ("aaj hi kar lo bhai", "bahana mat banao", "30 minute ka kaam hai"), then a benefit restatement. Examples pulled verbatim:

- `PmKisanEkycOnline2026.tsx` → "Aaj hi kar lo bhai. Kal ka wait mat karo. Phone se 2 minute lagte hain. Phone na ho toh CSC free hai. Bahana mat banao — yeh ₹6000 saalana aapka haq hai…"
- `soil-health-card-complete-guide-2026.tsx` → "Soil health card chhoti cheez lag sakti hai lekin pura farming setup improve kar deta hai. Government ye free diye hain to use kar lo. 30 minute ka kaam hai, lekin 3 saal ke liye benefit milega."
- `PmKisan24viKist2026.tsx` → "Seedhi baat — bina eKYC ke koi kist nahi milegi. Period."

**Fix:** keep the *intent* (a clear verdict) but drop the shared label and the shared sentence rhythm. Give each article a closing that only makes sense for that article — a specific number, a specific deadline, a specific mistake farmers make on that form. Delete "bhai", "bahana mat banao", "Period." — they are the same voice tic repeated.

## 5. Verbatim duplicate sentences / boilerplate

### 5a. The disclaimer — identical in 6 `kisanguides/` files

> "Yeh article general information ke liye hai. Actual costs, subsidies, aur procedures aapke location aur specific circumstances ke hisaab se vary kar sakte hain. Koi bhi financial decision lene se pehle qualified professionals … se consult karein. Prices aur guidelines change hote rehte hain, isliye latest information ke liye official sources se verify karein. Last updated: July 2026."

Same paragraph, only the profession in brackets swapped, under a rotating label — "Kaam Ki Suchna" / "Ek Saaf Baat" / "Pehle Padh Lein" / "Suchna". Rotating the *label* while keeping the *body* identical is itself a generation artifact.

Files: `kisanguides/MadhumakhiPalan.tsx`, `kisanguides/MushroomKheti.tsx`, `kisanguides/PMFMEYojana.tsx`, `kisanguides/PMatsyaSampada.tsx`, `kisanguides/SilageMaking.tsx`, `kisanguides/VerminCompost.tsx`

**Fix:** move it into one `<GuideDisclaimer profession="…" updated={MODIFIED} />` component. One canonical wording, no rotating label, date from the article constant instead of a hardcoded date string — `kisanguides/` currently has six files stamped "July 2026" (`MadhumakhiPalan`, `VerminCompost`, `PMatsyaSampada`, `PMFMEYojana`, `SilageMaking`, `CHCPortal`) and two stamped "August 2026" (`BakriPalanYojana`, `MushroomKheti`), all hand-typed.

### 5b. The portal CTA — identical in 7 files

> "… ya koi bhi kaam ke liye official portal par jaayein. 10 second baad portal khulega."

Files: `PmKisanMasterGuide2026.tsx`, `PmKisanRejectedStatusReApplyGuide.tsx`, `PmKusumYojanaSolarSubsidy2026.tsx`, `PmfbyCropInsurance2026.tsx`, `PmKisanVillageWiseListPdfDownload.tsx`, `soil-health-card-complete-guide-2026.tsx`, `pm-kisan-fto-generated-ka-matlab-kya-hai.tsx`

### 5c. Other sentences appearing in 2+ articles

| Files | Sentence |
|---|---|
| 3 | note neeche diye gaye numbers estimated ranges hain |
| 2 | ram kumar aur ram kumar singh ko system alag maanta hai |
| 2 | ye sawal bahut logon ke mann mein aata hai |
| 2 | official pm kisan portal khulne wala hai |
| 2 | httpspmkisangovin yahan click karo pm kisan portal khulega |
| 2 | actual costs subsidies aur procedures aapke location state policies aur specific circumstances ke hisaab se vary kar sak |
| 2 | daily 34 hours de sakte hain monitoring zaroori hai |
| 2 | original documents verification time par dikhane padenge |
| 2 | yeh aapke local material rates inflation aur field conditions ke hisaab se badal sakte hain |
| 2 | par yaad rakho subsidy milna guaranteed nahi hai |
| 2 | application process mein 36 months lag sakte hain |
| 2 | isliye apni planning subsidy ke bina karein |
| 2 | actual costs subsidies aur procedures aapke location aur specific circumstances ke hisaab se vary kar sakte hain |
| 2 | prices aur guidelines change hote rehte hain isliye latest information ke liye official sources se verify karein |
| 2 | koi bhi financial decision lene se pehle qualified professionals agriculture officers cas se consult karein |

(Entries beginning `bg…` / `slug …` in the raw data are CSS class strings and related-card metadata, not prose — excluded above.)

### 5d. Repeated phrases across 3+ articles

| Files | Phrase |
|---|---|
| 5 | ministry of agriculture & farmers welfare |
| 4 | …process mein 3-6 mahine lag sakte hain |
| 4 | 18 se 40 saal ke beech |
| 3 | toh helpline 155261 par call karo |
| 3 | seedha bank account mein aata hai |
| 3 | …saal tak sms alerts aate rehte hain |
| 3 | pmkisan gov in par farmers corner |
| 3 | pmkisan gov in know your status |
| 3 | par depend karta hai, koi fixed… |
| 3 | notice board par bhi lagti hai |
| 3 | परिवार में एक ही सदस्य को |

Some of these are legitimately shared facts (the 155261 helpline, the 18–40 age rule). Those should live in **one** shared component or data constant so the wording is intentional, not accidentally duplicated prose.

## 6. FAQs

**86 of 96** files carry FAQs; **714 questions** total. Good news: **zero exact duplicates** across files.

### 6a. Near-duplicate questions (same question, one noun swapped)

| Sim | Question A | Question B | Files |
|---|---|---|---|
| 0.88 | Bina zameen ke loan mil sakta hai? | Bina zameen ke tractor loan mil sakta hai? | `KisanRinKahaSeLe2026.tsx` / `KisanTractorLoan2026.tsx` |
| 0.83 | CSC registration fees kitni hai? | CSC registration ki fees kitni hai? | `PmKisanCscRegistrationCharges.tsx` / `pm-kisan-fto-generated-ka-matlab-kya-hai.tsx` |
| 0.73 | MSP par bechne ke liye kya karna padta hai? | MSP par bechne ke liye registration kahan karna padta hai? | `GehuKaBhavMspVsMandi.tsx` / `MspList202627.tsx` |
| 0.71 | Mere paas 2.5 hectare zameen hai, kya main apply kar sakta hoo | Agar mere paas zameen nahi hai, kya main apply kar sakta hoon? | `PmKisanMaandhanEligibilityDocuments.tsx` / `AnnadataSukhibhavaStatusCheck.tsx` |
| 0.7 | आधार में mobile number link नहीं है, तो? | आधार में mobile number link नहीं है — क्या करूं? | `FarmerIdCardKaiseBanaye2027.tsx` / `PmKisanNewRegistration2027.tsx` |
| 0.69 | Kya mujhe alag se PM Kisan ke liye apply karna padega? | Kya mujhe Rythu Bharosa ke liye alag se apply karna padega? | `AnnadataSukhibhavaStatusCheck.tsx` / `RythuBharosaStatusCheck.tsx` |
| 0.67 | Dobara apply karne mein kitna time lagta hai? | Surrender karne mein kitna time lagta hai? | `PmKisanRejectedStatusReApplyGuide.tsx` / `PmKisanVoluntarySurrenderGuide.tsx` |
| 0.67 | Kya main ghar baithe online dobara apply kar sakta hoon? | Kya main ye kaam online ghar baithe kar sakta hoon? | `PmKisanRejectedStatusReApplyGuide.tsx` / `pmkmy-bank-account-change.tsx` |
| 0.67 | योजना की किस्तें कब-कब आती हैं? | किस्तें कब-कब आती हैं? | `MukhyamantriKisanKalyanYojanaMp.tsx` / `NamoShetkariYojanaMaharashtra.tsx` |
| 0.67 | MSP par bechne ke baad paisa kitne din mein aata hai? | FTO ke baad kitne din mein paisa aata hai? | `MspList202627.tsx` / `pm-kisan-fto-generated-ka-matlab-kya-hai.tsx` |
| 0.64 | IFFCO liquid DAP ka aaj ka rate kya chal raha hai? | Aloo ka aaj ka rate kya chal raha hai? | `NanoDap500mlPriceInIndia2026.tsx` / `mandi-bhav-today.tsx` |
| 0.64 | MP में किसान को कुल कितना पैसा मिलता है? | महाराष्ट्र के किसान को कुल कितना पैसा मिलता है? | `MukhyamantriKisanKalyanYojanaMp.tsx` / `NamoShetkariYojanaMaharashtra.tsx` |
| 0.62 | पति-पत्नी दोनों के नाम जमीन है — क्या दोनों को ₹12,000-12,000  | पति-पत्नी दोनों के नाम जमीन है — क्या दोनों को नमो शेतकरी मिले | `MukhyamantriKisanKalyanYojanaMp.tsx` / `NamoShetkariYojanaMaharashtra.tsx` |
| 0.62 | Agar meri NLM application reject ho gayi, toh kya main dobara  | Application reject ho gayi toh dobara kab apply kar sakta hoon | `BakriPalanYojana.tsx` / `DairyFarmLoanWithoutCollateral.tsx` |
| 0.62 | Kaun apply kar sakta hai — documents kya lagenge? | Kaun apply kar sakta hai? | `BiharPashupalanLoanYojana.tsx` / `MurgiPalanLoanNlmSubsidy.tsx` |
| 0.62 | Gehu ka MSP 2026 mein kitna hai? | Gehu ka MSP 2026-27 kitna hai? | `GehuKaBhavMspVsMandi.tsx` / `MspList202627.tsx` |
| 0.6 | Bina zameen ke loan mil sakta hai? | kya bina zameen ke solar pump mil sakta hai? | `KisanRinKahaSeLe2026.tsx` / `PmKusumYojanaSolarSubsidy2026.tsx` |
| 0.6 | Bank account change karne mein kitna time lagta hai? | Surrender karne mein kitna time lagta hai? | `PmKisanBankAccountChangeProcess.tsx` / `PmKisanVoluntarySurrenderGuide.tsx` |

### 6b. Question-opener monotony

Openers repeated across the FAQ corpus:

| Opener | Count |
|---|---|
| "pm kisan…" | 21 |
| "kya main…" | 19 |
| "kya pm…" | 8 |
| "mera naam…" | 5 |
| "24vi kist…" | 5 |
| "msp par…" | 5 |
| "bank account…" | 4 |
| "csc wala…" | 4 |
| "mobile number…" | 4 |
| "registration ke…" | 4 |
| "kitne din…" | 4 |
| "land seeding…" | 4 |

19 questions start "Kya main…" and 21 start "PM Kisan…". Real search queries are more varied and more elliptical ("2 hectare wala bhi milega?", "CSC ne 50 rupaye maange").

### 6c. Three FAQ implementations coexist

| Pattern | Files | Risk |
|---|---|---|
| `<FAQBlock faqs={FAQS_DATA} />` — schema generated from the visible array | 51 | none, this is the good one |
| JSON-LD built with `FAQS_DATA.map(...)` | 36 | fine (single source), but duplicates `FAQBlock`'s own schema logic |
| **JSON-LD written as hand-typed literals, then the same Q&A re-typed as visible markup** | **8** | **answer text exists twice and has already drifted** |

The 8 hand-typed files:

- `kisanguides/BakriPalanYojana.tsx`
- `kisanguides/MadhumakhiPalan.tsx`
- `kisanguides/MushroomKheti.tsx`
- `kisanguides/PMFMEYojana.tsx`
- `kisanguides/PMatsyaSampada.tsx`
- `kisanguides/SilageMaking.tsx`
- `kisanguides/VerminCompost.tsx`
- `hindi-yojana/KisanKarjMafiList2027.tsx`

`kisanguides/VerminCompost.tsx` is the clearest case — the JSON-LD answer says "…premium quality (microbial activity) nahi aati. Usse aap normal FYM (Farm Yard Manure) ke roop mein bech sakte hain, jiska rate thoda kam (₹5-8/kg) hota hai" while the visible copy says "…premium quality nahi aati. Usse aap normal FYM ke roop mein bech sakte hain (₹5 - ₹8/kg)". Same answer, two hand-maintained versions.

**Fix:** migrate those 8 files to `<FAQBlock>` — one array, schema derived. This is a real correctness fix (structured data matching visible text is a Google requirement), not just de-duplication.

### 6d. 10 files have no FAQ at all

- `ArticleStub.tsx`
- `kisanguides/CHCPortal.tsx`
- `kisanguides/DripSprinkler.tsx`
- `maandhan/PmKisanMaandhanStatusCheckOnline.tsx`
- `rajya-yojana/PariharaPaymentStatusCheck2026.tsx`
- `rajya-yojana/UpKisanKarjRahatList2026.tsx`
- `rajya-yojana/tools/KrishakBandhuChecker.tsx`
- `rajya-yojana/tools/OdishaCmKisanChecker.tsx`
- `rajya-yojana/tools/PmKisanFamilyChecker.tsx`
- `rajya-yojana/tools/StateYojanaFinder.tsx`

Four of those are `rajya-yojana/tools/*` interactive checkers where FAQs may not fit; the other six are ordinary guides. Coverage swings from 0 to 18 questions per article with a mode of 7 — and the 7/8-question articles cluster inside the same template families.

## 7. Internal-link / related-card frames

**2 pairs share a byte-identical related-card set**:

- `PmKisan25viKist2027.tsx`, `PmKisanSelfRegisteredStatusCheck.tsx` → `PmKisan24viKist2026, PmKisanBeneficiaryList2026, PmKisanEkycOnline2026, PmKisanMasterGuide2026, PmKisanPaymentFailedFix2026, pm-kisan-fto-generated-ka-matlab-kya-hai`
- `maandhan/PmKisanMaandhanAutoDebitPooraSach.tsx`, `maandhan/PmKisanMaandhanEligibilityDocuments.tsx` → `pm-kisan-maandhan-pension-calculator, pm-kisan-maandhan-registration-2026, pm-kisan-maandhan-withdrawal-refund-rules`

**61 further pairs** overlap ≥50%. The tightest group is the four `loan-mandi-pashupalan/` mandi articles (`GehuKaBhavMspVsMandi`, `MandiBhavAppComparison`, `MspList202627`, `SabziBhavGuidePyazAlooTamatar`) — every pair among them shares 5 of ~7 slugs:

| Overlap | A | B | Shared slugs |
|---|---|---|---|
| 1.0 | `PmKisan25viKist2027.tsx` | `PmKisanSelfRegisteredStatusCheck.tsx` | 6 |
| 1.0 | `PmKisanMaandhanAutoDebitPooraSach.tsx` | `PmKisanMaandhanEligibilityDocuments.tsx` | 3 |
| 0.8 | `AgriStackKyaHai2026.tsx` | `PmKisanMaandhanYojanaPension.tsx` | 4 |
| 0.75 | `PmKisanEkycOnline2026.tsx` | `mandi-bhav-today.tsx` | 3 |
| 0.71 | `BiharPashupalanLoanYojana.tsx` | `DairyFarmLoanWithoutCollateral.tsx` | 5 |
| 0.71 | `GehuKaBhavMspVsMandi.tsx` | `MandiBhavAppComparison.tsx` | 5 |
| 0.71 | `GehuKaBhavMspVsMandi.tsx` | `MspList202627.tsx` | 5 |
| 0.71 | `GehuKaBhavMspVsMandi.tsx` | `SabziBhavGuidePyazAlooTamatar.tsx` | 5 |
| 0.71 | `MandiBhavAppComparison.tsx` | `MspList202627.tsx` | 5 |
| 0.71 | `MandiBhavAppComparison.tsx` | `SabziBhavGuidePyazAlooTamatar.tsx` | 5 |
| 0.71 | `MspList202627.tsx` | `SabziBhavGuidePyazAlooTamatar.tsx` | 5 |
| 0.67 | `mandi-bhav-today.tsx` | `pm-kisan-fto-generated-ka-matlab-kya-hai.tsx` | 4 |

### Link-target concentration

| Times linked | Target |
|---|---|
| 53 | `/` |
| 52 | `/about` |
| 39 | `/articles` |
| 20 | `/articles/PmKisanMasterGuide2026` |
| 19 | `/articles/KisanCreditCardOnlineApply2026` |
| 13 | `/maandhan` |
| 13 | `/rajya-yojana/state-kisan-yojana-list-all-states-2026` |
| 11 | `/articles/PmKisanBeneficiaryList2026` |
| 10 | `/articles/PmKisanEkycOnline2026` |
| 10 | `/articles/PmKisanPaymentFailedFix2026` |
| 8 | `/articles/PmKisanStateNodalOfficerList` |
| 8 | `/rajya-yojana/mp-kisan-kalyan-yojana-kist-status` |
| 7 | `/articles/PmKisanCscRegistrationCharges` |
| 7 | `/articles/pm-fme-yojana-food-processing` |
| 7 | `/maandhan/pm-kisan-maandhan-registration-2026` |

`/articles/PmKisanMasterGuide2026` (20×) and `/articles/KisanCreditCardOnlineApply2026` (19×) are linked from a fifth of the site — including from articles where KCC is only tangentially relevant. That is a template slot, not an editorial link.

### Related-section headings also rotate mechanically

"Aapke Liye Zaroori Articles" (3) / "आगे पढ़ने लायक" (3) / "Related Articles — Yeh Bhi Padho" (3) / "Related Articles" (1) — four labels for one section.

**Fix:** one label site-wide, and pick related cards per article (2 topically adjacent + 1 next-step) instead of pasting the folder default.

## 8. AI-flavoured filler words and phrases

| Total | Files | Phrase |
|---|---|---|
| 362 | 76 | "zaroor" |
| 98 | 44 | "turant" |
| 38 | 18 | "complete guide" |
| 31 | 26 | "sabse pehle" |
| 22 | 18 | "bilkul free hai" |
| 14 | 12 | "step by step" |
| 14 | 12 | "agar aapko" |
| 13 | 12 | "yaad rakhein" |
| 10 | 8 | "is guide mein" |
| 6 | 6 | "dhyan dein" |
| 5 | 3 | "note karein" |
| 3 | 3 | "is article mein" |
| 2 | 2 | "ant mein" |
| 1 | 1 | "niche diye gaye" |
| 1 | 1 | "poori jankari" |
| 1 | 1 | "kul milakar" |
| 1 | 1 | "ye bhi padhein" |

`zaroor` (362× across 76 files) and `turant` (98× / 44 files) are the two words to cut hardest — they are used as intensifiers where a plain verb reads better. "complete guide" (38×) and "bilkul free hai" (22×) are marketing tics; "step by step" (14×) is the classic listicle tell.

### Title patterns

Of 148 titles in `lib/*-data.ts`: **68 contain a year** (2026/2027), **44 use a colon**, 19 contain "Check". The `Topic: Subtitle 2026` shape is the dominant frame.

## 9. Appendix — every flagged article with its top phrases

| Article | Words | Top repeated phrases (count × /1000w) |
|---|---|---|
| `PmKisanLandSeedingForm.tsx` | 2042 | "gov in" 41× (20.1); "url https" 37× (18.1); "in slug" 37× (18.1); "gov in slug" 32× (15.7) |
| `soil-health-card-complete-guide-2026.tsx` | 1413 | "soil health" 27× (19.1); "health card" 22× (15.6); "soil health card" 22× (15.6); "official portal" 10× (7.1) |
| `kisanguides/PMFMEYojana.tsx` | 2809 | "pm fme" 48× (17.1); "food processing" 15× (5.3); "fme yojana" 12× (4.3); "pm fme yojana" 12× (4.3) |
| `rajya-yojana/tools/PmKisanFamilyChecker.tsx` | 1222 | "naam par" 20× (16.4); "ke naam" 8× (6.5); "ke naam par" 8× (6.5) |
| `PmKisanMasterGuide2026.tsx` | 2084 | "pm kisan" 32× (15.4); "gov in" 13× (6.2); "pmkisan gov" 12× (5.8); "pmkisan gov in" 12× (5.8) |
| `maandhan/PmKisanMaandhanAutoDebitPooraSach.tsx` | 2854 | "pm kisan" 40× (14.0); "auto debit" 23× (8.1); "kisan maandhan" 13× (4.6); "pm kisan maandhan" 13× (4.6) |
| `PmKisanRejectedStatusReApplyGuide.tsx` | 2063 | "pm kisan" 28× (13.6); "dobara apply" 16× (7.8); "rejected status" 8× (3.9); "status active" 8× (3.9) |
| `hindi-yojana/NamoShetkariYojanaMaharashtra.tsx` | 2818 | "pm kisan" 38× (13.5); "नमो शेतकरी" 17× (6.0); "kisan की" 10× (3.5); "pm kisan की" 10× (3.5) |
| `PmKusumYojanaSolarSubsidy2026.tsx` | 2002 | "pm kusum" 27× (13.5); "solar pump" 20× (10.0); "kusum yojana" 15× (7.5); "pm kusum yojana" 14× (7.0) |
| `PmKisanVillageWiseListPdfDownload.tsx` | 2116 | "gov in" 28× (13.2); "in url" 18× (8.5); "url https" 18× (8.5); "in note" 18× (8.5) |
| `kisanguides/VerminCompost.tsx` | 2670 | "vermi compost" 34× (12.7); "compost business" 12× (4.5); "vermi compost business" 12× (4.5); "raw material" 11× (4.1) |
| `PmKisanMobileNumberChangeUpdate.tsx` | 3050 | "pm kisan" 38× (12.5); "mobile number" 32× (10.5); "number update" 15× (4.9); "number par" 15× (4.9) |
| `hindi-yojana/MukhyamantriKisanKalyanYojanaMp.tsx` | 3012 | "pm kisan" 34× (11.3); "gov in" 13× (4.3); "राज्य की" 12× (4.0); "6 000" 11× (3.7) |
| `PmKisanStateNodalOfficerList.tsx` | 1939 | "nodal officer" 21× (10.8); "pm kisan" 19× (9.8); "state nodal" 9× (4.6); "officer ko" 9× (4.6) |
| `PmKisan24viKist2026.tsx` | 1602 | "24vi kist" 16× (10.0); "2 000" 11× (6.9); "kar lo" 11× (6.9) |
| `rajya-yojana/RythuBharosaStatusCheck.tsx` | 2543 | "rythu bharosa" 25× (9.8); "portal par" 10× (3.9); "per acre" 9× (3.5); "6 000" 8× (3.1) |
| `rajya-yojana/MpKisanKalyanYojanaKist.tsx` | 2743 | "pm kisan" 26× (9.5); "saara portal" 11× (4.0); "top up" 10× (3.6); "6 000" 10× (3.6) |
| `PmKisanBeneficiaryList2026.tsx` | 1612 | "pm kisan" 15× (9.3); "pdf download" 12× (7.4); "portal par" 11× (6.8); "pmkisan gov" 10× (6.2) |
| `rajya-yojana/OdishaCmKisanStatusCheck.tsx` | 2752 | "cm kisan" 25× (9.1); "e kyc" 10× (3.6); "pm kisan" 10× (3.6); "landless track" 9× (3.3) |
| `PmKisanEkycOnline2026.tsx` | 2586 | "pm kisan" 23× (8.9); "mobile number" 12× (4.6); "aadhaar se" 9× (3.5); "otp based" 9× (3.5) |
| `PmKisanCorrectionForm2026.tsx` | 1956 | "pm kisan" 17× (8.7); "portal par" 15× (7.7); "mobile number" 11× (5.6); "aadhaar seeding" 11× (5.6) |
| `rajya-yojana/tools/StateYojanaFinder.tsx` | 921 | "pm kisan" 8× (8.7); "rows push" 8× (8.7) |
| `rajya-yojana/KrishakUnnatiYojanaStatusCheck.tsx` | 2920 | "antar rashi" 25× (8.6); "khadya vibhag" 11× (3.8); "ki entry" 10× (3.4); "khaate mein" 10× (3.4) |
| `rajya-yojana/RajasthanKisanSammanNidhi9000.tsx` | 2796 | "pm kisan" 24× (8.6); "jan aadhaar" 14× (5.0); "9 000" 12× (4.3); "3 000" 10× (3.6) |
| `maandhan/PmKisanMaandhanEligibilityDocuments.tsx` | 1986 | "pm kisan" 17× (8.6) |
| `PmKisanBankAccountChangeProcess.tsx` | 1857 | "bank account" 16× (8.6); "pm kisan" 13× (7.0); "naya account" 13× (7.0); "account mein" 11× (5.9) |
| `PmKisanVoluntarySurrenderGuide.tsx` | 1186 | "sakti hai" 10× (8.4); "surrender karne" 8× (6.7) |
| `PmKisanSelfRegisteredStatusCheck.tsx` | 1928 | "status check" 16× (8.3); "gov in" 12× (6.2); "self registration" 12× (6.2); "pmkisan gov" 11× (5.7) |
| `maandhan/pmkmy-bank-account-change.tsx` | 2590 | "bank account" 21× (8.1); "bank branch" 15× (5.8); "account se" 14× (5.4); "naye bank" 14× (5.4) |
| `PmKisanMaandhanYojanaPension.tsx` | 2086 | "har mahine" 17× (8.1); "pm kisan" 14× (6.7); "60 saal" 11× (5.3); "maandhan yojana" 8× (3.8) |
| `maandhan/AutoDebitFailRegularization.tsx` | 1886 | "auto debit" 15× (8.0); "jaata hai" 13× (6.9); "debit fail" 9× (4.8); "ho jaata" 8× (4.2) |
| `hindi-yojana/PmKisanStatusCheckMobileNumberSe.tsx` | 2995 | "registration number" 23× (7.7); "know your" 12× (4.0); "है और" 11× (3.7); "के लिए" 11× (3.7) |
| `kisanguides/DripSprinkler.tsx` | 2367 | "unit cost" 18× (7.6); "micro irrigation" 14× (5.9); "top up" 11× (4.6); "ke saath" 9× (3.8) |
| `NanoDap500mlPriceInIndia2026.tsx` | 1850 | "nano dap" 14× (7.6); "traditional dap" 10× (5.4); "liquid dap" 8× (4.3) |
| `kisanguides/CHCPortal.tsx` | 1320 | "custom hiring" 10× (7.6); "hiring centre" 10× (7.6); "custom hiring centre" 10× (7.6); "centre chc" 8× (6.1) |
| `loan-mandi-pashupalan/MspList202627.tsx` | 2853 | "2026 27" 21× (7.4); "margin 50" 13× (4.6); "50 crop" 11× (3.9); "margin 50 crop" 11× (3.9) |
| `pm-kisan-fto-generated-ka-matlab-kya-hai.tsx` | 3078 | "pm kisan" 21× (6.8); "land seeding" 13× (4.2); "ka matlab" 10× (3.2); "pmkisan gov" 10× (3.2) |
| `maandhan/MaandhanContributionGuide.tsx` | 1778 | "pm kisan" 12× (6.7); "har mahine" 10× (5.6) |
| `maandhan/pmkmy-grievance-complaint-helpline.tsx` | 1803 | "licindia com" 12× (6.7); "portal par" 12× (6.7); "reference number" 12× (6.7); "scpms licindia" 10× (5.5) |
| `kisanguides/MadhumakhiPalan.tsx` | 2032 | "madhumakhi palan" 13× (6.4); "kvic subsidy" 10× (4.9); "apis mellifera" 8× (3.9) |
| `mandi-bhav-today.tsx` | 3485 | "mandi topvegetables" 22× (6.3); "pyaaz tamatar" 20× (5.7); "aloo pyaaz" 19× (5.5); "aloo pyaaz tamatar" 16× (4.6) |
| `kisanguides/PMatsyaSampada.tsx` | 3279 | "fish farming" 20× (6.1); "matsya sampada" 16× (4.9); "sampada yojana" 15× (4.6); "matsya sampada yojana" 15× (4.6) |
| `loan-mandi-pashupalan/SabziBhavGuidePyazAlooTamatar.tsx` | 2610 | "jaata hai" 16× (6.1); "cold storage" 13× (5.0); "mandi bhav" 8× (3.1); "buffer stock" 8× (3.1) |
| `KisanRinKahaSeLe2026.tsx` | 1477 | "term loan" 9× (6.1) |
| `PmfbyCropInsurance2026.tsx` | 1355 | "pmfby gov" 8× (5.9); "gov in" 8× (5.9); "pmfby gov in" 8× (5.9) |
| `rajya-yojana/KrishakBandhuStatusCheck.tsx` | 2764 | "krishak bandhu" 16× (5.8); "jaata hai" 12× (4.3); "voter id" 10× (3.6); "death benefit" 9× (3.3) |
| `maandhan/PmKisanMaandhanRegistration2026.tsx` | 2078 | "pm kisan" 12× (5.8); "maandhan in" 8× (3.8) |
| `loan-mandi-pashupalan/SbiDairyLoanInterestRate.tsx` | 2688 | "term loan" 15× (5.6); "animal husbandry" 9× (3.3); "dairy loan" 8× (3.0); "hai isliye" 8× (3.0) |
| `rajya-yojana/NamoShetkariYojanaStatus.tsx` | 2686 | "namo shetkari" 15× (5.6); "7 12" 14× (5.2); "jaata hai" 8× (3.0); "3 000" 8× (3.0) |
| `loan-mandi-pashupalan/RashtriyaGokulMissionSubsidy.tsx` | 2522 | "milta hai" 14× (5.6); "sex sorted" 14× (5.6); "sorted semen" 14× (5.6); "sex sorted semen" 14× (5.6) |
| `PmKisanPaymentFailedFix2026.tsx` | 2384 | "jaata hai" 13× (5.5); "pm kisan" 11× (4.6) |
| `maandhan/PmkmyVsApyComparison2026.tsx` | 1998 | "ki umar" 11× (5.5); "40 saal" 9× (4.5); "saal ki" 9× (4.5); "saal ki umar" 9× (4.5) |
| `maandhan/PmKisanMaandhanStatusCheckOnline.tsx` | 3036 | "contribution history" 16× (5.3); "csc center" 16× (5.3); "pm kisan" 12× (4.0); "status check" 12× (4.0) |
| `rajya-yojana/PmKisanPatiPatniRule.tsx` | 2846 | "pm kisan" 15× (5.3); "jaata hai" 12× (4.2); "pati patni" 10× (3.5); "record mein" 9× (3.2) |
| `PmKisanCscRegistrationCharges.tsx` | 1534 | "pm kisan" 8× (5.2) |
| `hindi-yojana/TractorSubsidy2027StateWiseList.tsx` | 2971 | "portal पर" 15× (5.0); "के लिए" 12× (4.0); "है और" 9× (3.0); "होता है।" 9× (3.0) |
| `rajya-yojana/AnnadataSukhibhavaStatusCheck.tsx` | 2591 | "annadata sukhibhava" 13× (5.0); "pm kisan" 10× (3.9); "rythu bharosa" 8× (3.1); "andhra pradesh" 8× (3.1) |
| `PmKisanFaceAuthenticationEkyc.tsx` | 1637 | "play store" 8× (4.9) |
| `hindi-yojana/FarmerIdCardKaiseBanaye2027.tsx` | 3102 | "के लिए" 15× (4.8); "farmer id" 13× (4.2); "के बाद" 13× (4.2); "के नाम" 11× (3.5) |
| `hindi-yojana/NpciAadhaarSeedingDbtPayment.tsx` | 2916 | "mapper में" 14× (4.8); "npci mapper" 11× (3.8); "बैंक में" 10× (3.4); "है और" 10× (3.4) |
| `loan-mandi-pashupalan/EnamRegistrationKaiseKare.tsx` | 2276 | "help desk" 11× (4.8); "mandi mein" 10× (4.4); "enam gov" 8× (3.5); "gov in" 8× (3.5) |
| `KisanTractorLoan2026.tsx` | 1869 | "down payment" 9× (4.8) |
| `hindi-yojana/PmKisanNewRegistration2027.tsx` | 2851 | "farmer id" 13× (4.6); "के लिए" 9× (3.2); "pm kisan" 9× (3.2); "है और" 9× (3.2) |
| `rajya-yojana/UpKisanKarjRahatList2026.tsx` | 2182 | "loan account" 10× (4.6); "karj rahat" 9× (4.1); "pm kisan" 9× (4.1) |
| `maandhan/family-pension-rules.tsx` | 2465 | "ki umar" 11× (4.5); "60 saal" 10× (4.1); "surviving spouse" 8× (3.2); "saal ki" 8× (3.2) |
| `hindi-yojana/PmKisanPaymentStoppedByStateFix.tsx` | 2975 | "की जांच" 13× (4.4); "by state" 11× (3.7); "जांच में" 11× (3.7); "राज्य की" 11× (3.7) |
| `loan-mandi-pashupalan/GehuKaBhavMspVsMandi.tsx` | 2252 | "2026 27" 10× (4.4); "msp se" 9× (4.0); "ka rate" 8× (3.6) |
| `kisanguides/BakriPalanYojana.tsx` | 1878 | "6 mahine" 8× (4.3) |
| `hindi-yojana/KccLimitKaiseBadhaye3Se5Lakh.tsx` | 3088 | "है और" 13× (4.2); "5 लाख" 12× (3.9); "के लिए" 10× (3.2); "scale of" 10× (3.2) |
| `rajya-yojana/PariharaPaymentStatusCheck2026.tsx` | 2593 | "survey number" 11× (4.2); "payment status" 10× (3.9); "village wise" 9× (3.5); "list me" 9× (3.5) |
| `loan-mandi-pashupalan/MandiBhavAppComparison.tsx` | 2353 | "mandi bhav" 10× (4.2); "modal price" 10× (4.2); "apni mandi" 8× (3.4) |
| `hindi-yojana/KisanKarjMafiList2027.tsx` | 3638 | "कर्ज माफी" 15× (4.1); "loan account" 14× (3.8); "के लिए" 13× (3.6); "crop loan" 12× (3.3) |
| `hindi-yojana/GehuKaRateAajMspVsMandiBhav.tsx` | 3177 | "सरकारी खरीद" 13× (4.1); "मंडी में" 12× (3.8); "है तो" 10× (3.1); "है और" 10× (3.1) |
| `hindi-yojana/PmKisanEkycMobileSeKaiseKare.tsx` | 2939 | "आधार में" 12× (4.1); "face auth" 11× (3.7); "के लिए" 9× (3.1); "ekyc के" 9× (3.1) |
| `rajya-yojana/BiharKisanRegistrationStatusCheck2026.tsx` | 2438 | "aadhaar se" 10× (4.1); "pm kisan" 8× (3.3); "jaata hai" 8× (3.3) |
| `loan-mandi-pashupalan/JansamarthPortalLoanApply.tsx` | 2203 | "portal par" 9× (4.1); "farmer id" 9× (4.1); "jansamarth in" 8× (3.6) |
| `rajya-yojana/MeriFasalMeraByoraStatusCheck2026.tsx` | 2784 | "family id" 11× (4.0); "status check" 10× (3.6); "meri fasal" 9× (3.2); "fasal mera" 8× (2.9) |
| `kisanguides/MushroomKheti.tsx` | 2506 | "kamre mein" 10× (4.0); "nhb subsidy" 8× (3.2); "mushroom farming" 8× (3.2) |
| `kisanguides/SilageMaking.tsx` | 3105 | "jaati hai" 12× (3.9); "jaata hai" 9× (2.9); "silage business" 8× (2.6); "smam subsidy" 8× (2.6) |
| `hindi-yojana/PmKisan25viKistKabAayegi.tsx` | 2907 | "है और" 11× (3.8); "है तो" 10× (3.4); "खाते में" 10× (3.4); "जाता है" 9× (3.1) |
| `hindi-yojana/PmKisanHelplineNumberComplaint.tsx` | 2868 | "gov in" 11× (3.8); "help desk" 10× (3.5); "है और" 10× (3.5); "के लिए" 9× (3.1) |
| `KisanCreditCardOnlineApply2026.tsx` | 2954 | "land record" 11× (3.7); "hai lekin" 10× (3.4); "karta hai" 10× (3.4); "kisan credit" 9× (3.0) |
| `maandhan/PmKisanMaandhanPensionCalculator.tsx` | 2169 | "pm kisan" 8× (3.7) |
| `maandhan/kisan-pension-card-download.tsx` | 3070 | "pension card" 11× (3.6); "account number" 10× (3.3); "hai lekin" 9× (2.9); "pm kisan" 8× (2.6) |
| `rajya-yojana/IkhedutPortalStatusCheck2026.tsx` | 3383 | "ghatak me" 12× (3.5); "print jama" 9× (2.7); "purv manjuri" 9× (2.7) |
| `hindi-yojana/PmKisanRecoveryNoticePaisaWapas.tsx` | 2898 | "notice में" 10× (3.5); "कृषि विभाग" 9× (3.1); "income tax" 9× (3.1) |
| `rajya-yojana/StateKisanYojanaHub.tsx` | 3233 | "6 000" 10× (3.1); "guide mein" 10× (3.1); "pm kisan" 9× (2.8); "apne yahan" 9× (2.8) |
| `loan-mandi-pashupalan/DairyFarmLoanWithoutCollateral.tsx` | 3065 | "20 lakh" 9× (2.9); "sc st" 9× (2.9); "10 lakh" 8× (2.6) |

## 10. Suggested fix order (nothing done yet)

| Priority | Work | Files touched | Type |
|---|---|---|---|
| P0 | Rewrite the closing block — kill the shared "Seedhi Baat / Bottom Line" label and the shared pep-talk rhythm | 47 | per-article copy |
| P0 | One `<GuideDisclaimer>` component; delete 6 copy-pasted disclaimers; date from `MODIFIED` | 6 + 1 new | template |
| P1 | Migrate the 8 hand-typed `FAQPage` JSON-LD blocks to `<FAQBlock>` — fixes schema/visible-text drift | 8 | template |
| P1 | Reduce the 8 worst branded head phrases to ≤6/1000w — headings, alt text and FAQ questions first | 8 | per-article copy |
| P1 | De-duplicate the 7-file portal CTA sentence | 7 | copy |
| P2 | Re-pick related cards for the `loan-mandi-pashupalan/` and `PM Kisan` clusters; one section label site-wide | ~20 | editorial |
| P2 | Vary section order inside the 4 template families (drop/move/add a section per article) | ~26 | structural |
| P2 | Global filler pass: `zaroor`, `turant`, `complete guide`, `bilkul free hai`, `step by step` | 76 | copy |
| P3 | Diversify FAQ question openers; add FAQs to the 6 non-tool articles that have none | 6 | copy |
| P3 | Break the `Topic: Subtitle 2026` title frame on a subset | ~68 | metadata |

P0/P1 are where the AI feel actually lives. P2/P3 are polish.

## 11. Fix Plan — Parts (approved working plan)

**Date added:** 2026-08-12
**Execution model:** one part at a time, small PRs, review + manual merge (no auto-merge). Fix branch per part: `fix/part-<n>-<slug>`.

### Ground rules (apply to every part)

1. **No article rewrites.** Only targeted edits — the surrounding prose stays as written.
2. **No word-count trimming.** Replacements keep roughly the same length; content is never cut for brevity.
3. **Ranking keywords are protected.** Head phrases that rank stay in the title, H1, first paragraph, headings and FAQ questions. De-stuffing (Part 5) only replaces *surplus mid-paragraph repeats* with natural variants/pronouns — never the anchor placements. *(Pending owner clarification on the "0.90" rule — until clarified, treat ALL ranking keywords as untouchable.)*
4. **Every article keeps its own voice.** When a shared block is rewritten (closings, CTAs), each file gets a distinct wording and style — no new shared formula may replace the old one.
5. **Unrelated issues are out of scope** for whichever part is running.

### Part 1 — Shared boilerplate (mechanical, zero content risk) ✅ DONE (2026-08-12, PR: fix/part-1-shared-boilerplate)

*Files: ~14 · Type: template + copy*

- Extract the 6 copy-pasted `kisanguides/` disclaimers into one `<GuideDisclaimer>` component; one canonical wording; date sourced from the article's modified-date constant (kills the hand-typed "July/August 2026" stamps).
- Rewrite the 7-file portal CTA sentence ("…10 second baad portal khulega") so each file words it differently.
- One related-section label site-wide (replaces the 4 rotating labels).

### Part 2 — FAQ schema correctness (Google requirement) ✅ DONE (2026-08-12, PR: fix/part-2-faq-schema)

*Files: 8 · Type: template*

- Migrate the 8 hand-typed `FAQPage` JSON-LD files (`kisanguides/` ×7 + `hindi-yojana/KisanKarjMafiList2027.tsx`) to `<FAQBlock>` — one Q&A array, schema derived from visible text. Fixes the drift (e.g. `VerminCompost.tsx`). FAQ wording itself is not changed beyond picking the correct single version.

### Part 3 — Closing blocks ("Seedhi Baat" formula), 4 batches

*Files: 47 total · Type: per-article copy*

- 3a: root `PmKisan*` files (~12) · 3b: `maandhan/` (~12) · 3c: `rajya-yojana/` + `hindi-yojana/` (~12) · 3d: `kisanguides/` + `loan-mandi-pashupalan/` + rest (~11)
- Per file: drop the shared label + pep-talk rhythm ("aaj hi kar lo bhai", "bahana mat banao", "Period."); write a closing that only fits that article — a specific number, deadline, or mistake. Similar length, unique heading (or none), unique style per article. Only the closing block changes.

### Part 4 — Filler-word pass (light touch)

*Files: ~76 · Type: copy, small diffs*

- Cut/replace `zaroor` (362×) and `turant` (98×) where they are pure intensifiers; also `complete guide`, `bilkul free hai`, `step by step`, `is guide mein`. Sentence-level micro-edits only; no paragraph is restructured; word count stays ~same (replace, don't delete, where possible).

### Part 5 — Keyword de-stuffing (careful, protected)

*Files: 8 worst first (`soil-health-card…`, `PMFMEYojana`, `VerminCompost`, `PmKusum…`, `PmKisanStateNodalOfficerList`, `RythuBharosaStatusCheck`, `KrishakUnnatiYojanaStatusCheck`, `maandhan/…AutoDebitPooraSach`) · Type: per-article copy*

- Target branded head phrases only, from 8–20/1000w down to ~5–6/1000w by swapping surplus mid-body repeats for variants ("is yojana", "iska", scheme short-forms). Anchor placements (title/H1/intro/headings/FAQ) untouched. Repeated bare URLs (`gov in` hits) handled as link-text cleanup, not keyword edits.

### Part 6 — Structure + internal links (biggest, last)

*Files: ~30 · Type: structural/editorial*

- Vary section order/presence inside the 4 template families (worst: `loan-mandi-pashupalan/`, 10 of 11 files ≥0.80 similar).
- Re-pick related cards per article (2 topically adjacent + 1 next-step); break the 2 byte-identical sets and the mandi-cluster overlap; stop templating `/articles/PmKisanMasterGuide2026` + KCC links into tangential articles.

### Order

Part 1 → Part 2 → Part 3 (a–d) → Part 4 → Part 5 → Part 6. Each part ships as its own PR and waits for owner review before the next starts.

## 12. Changelog

### 2026-08-12 — Part 2 complete (`fix/part-2-faq-schema`)

- **Verified the drift before fixing.** Of the 8 hand-typed `FAQPage` JSON-LD files, **3 had genuine schema/visible-text mismatch** — a real Google structured-data violation: `kisanguides/VerminCompost.tsx` (all 4 questions differed), `kisanguides/BakriPalanYojana.tsx` (4 of 7 questions *and* their answers differed), `kisanguides/MadhumakhiPalan.tsx` (3 of 4 questions differed). The other 5 (`MushroomKheti`, `PMatsyaSampada`, `PMFMEYojana`, `SilageMaking`, `hindi-yojana/KisanKarjMafiList2027`) matched but still duplicated their FAQ text in two places, so they were one edit away from drifting.
- **All 8 migrated to `<FAQBlock>`** — schema is now generated from the same array that renders, so drift is structurally impossible. Where the two versions disagreed, the **visible on-page wording won** and the schema follows it. All 44 FAQs preserved verbatim; none reworded, added or removed.
- **`FAQBlock` extended** (`components/ArticleShared.tsx`) — `faqs[].a` widened from `string` to `React.ReactNode` plus a new optional `schemaText`, so an answer containing an internal `<Link>` renders as JSX while contributing plain text to the JSON-LD. Used by `MadhumakhiPalan` (organic-farming-zones link) and `BakriPalanYojana` (KCC guide link). The other 59 existing string-only callers are unaffected.
- **`BakriPalanYojana.tsx` is a server component again** — its file-local `FaqItem` accordion, `useState` and `'use client'` directive were removed in favour of `FAQBlock variant="accordion"`.
- Removed the 6 now-empty `jsonLd` `@graph` objects and their `<script type="application/ld+json">` tags from the `kisanguides/` files. Visible FAQ headings, section order and card/inline styling per article were left as they were.
- No article prose was rewritten; no word-count trimming; no keyword touched.

**Pages to re-check in a browser after deploy:** /articles/vermi-compost-business-guide, /articles/bakri-palan-yojana-nlm-subsidy, /articles/madhumakhi-palan-kvic-subsidy, /articles/mushroom-kheti-nhb-subsidy, /articles/pm-matsya-sampada-yojana-fish-farming, /articles/pm-fme-yojana-food-processing, /articles/silage-making-business-guide, /articles/hi/karj-mafi-list.

### 2026-08-12 — Part 1 complete (`fix/part-1-shared-boilerplate`)

- **New `components/GuideDisclaimer.tsx`** — one canonical disclaimer wording; `Last updated` now rendered from the article's `modifiedTime` in `lib/core-articles-data.ts` (via `getArticleBySlug`), killing the 8 hand-typed "July/August 2026" stamps. Migrated 6 files: `kisanguides/MadhumakhiPalan`, `MushroomKheti`, `PMFMEYojana`, `PMatsyaSampada`, `SilageMaking`, `VerminCompost`. Article-specific notes preserved via the `extra` prop (PMFME portal reference kept). Rotating labels ("Kaam Ki Suchna" / "Ek Saaf Baat" / …) replaced by one label.
- **Portal-CTA sentence de-duplicated** — "…10 second baad portal khulega." reworded uniquely in all 14 occurrences across 7 files (`PmfbyCropInsurance2026`, `pm-kisan-fto-…`, `PmKisanMasterGuide2026`, `PmKisanRejectedStatusReApplyGuide`, `PmKisanVillageWiseListPdfDownload`, `PmKusumYojanaSolarSubsidy2026`, `soil-health-card-complete-guide-2026`). Meaning (10s redirect countdown) kept; no two files share the wording now.
- **Related-section label unified** — "Aapke Liye Zaroori Articles" (3 files), "आगे पढ़ने लायक" (3 files) and bare "Related Articles" (1 file) all now use the shared component's label "Related Articles — Yeh Bhi Padho".
- No article prose was rewritten; no word-count trimming; no keyword touched.

**Pages to re-check in a browser after deploy:** /articles/vermi-compost-business-guide, /articles/pm-fme-yojana-food-processing, /articles/mushroom-kheti-nhb-subsidy, /articles/madhumakhi-palan-kvic-subsidy, /articles/pm-matsya-sampada-yojana-fish-farming, /articles/silage-making-business-guide, /articles/PmKisanMasterGuide2026, /articles/soil-health-card-complete-guide-2026.
