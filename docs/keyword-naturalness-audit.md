# Keyword Naturalness Audit — KisanStatus.com

**Date:** 2026-08-12 · **Scope:** all 105 article components (`components/articles/**`, `app/articles/**`) · **Method:** automated n-gram repetition analysis of rendered text (2–4 word phrases, ≥8 repeats per article)

## Summary

**84 of 105 articles** repeat their target keyword phrase in a robotic, over-optimized way. The worst offenders repeat the exact head phrase 20–40+ times in a single article (density up to 23 per 1,000 words — natural writing sits around 3–5).

This pattern (exact-match phrase repeated in every heading, alt text, FAQ question, and paragraph) is a classic keyword-stuffing footprint. Google's Helpful Content system specifically flags it, and it makes the Hinglish copy read machine-generated.

## How to fix (general rules)

1. **Say the full phrase once per section, then use short forms.** "PM Kisan land seeding form" first mention → after that "yeh form", "seeding wala form", "form".
2. **Use natural Hindi/Hinglish variants**, not the English SEO phrase every time:
   - "mobile number change" → "number badalna", "naya number lagana", "number update karwana"
   - "bank account change" → "khata badalna", "naya khata jodna", "account detail update"
   - "status check" → "status dekhna", "check karna", "pata karna"
3. **Headings must not all contain the keyword.** Keep it in H1 + one H2; rewrite the rest as questions a farmer would ask ("Form kahan milega?", "Kitne din lagte hain?").
4. **Alt texts:** describe the *image*, not the keyword. Max 1 exact-match alt per article.
5. **FAQ questions:** vary phrasing — real people don't start every question with the full product name.
6. **Pronouns exist.** "PM Kisan Maandhan Yojana" 20× → "yeh yojana", "is scheme mein", "Maandhan".
7. Target density: **head phrase ≤5–6 mentions per 1,000 words**; supporting variants free.

## Priority fix list (worst first)

| # | Article file | Words | Worst phrase | Repeats | Density /1000w | Severity |
|---|---|---|---|---|---|---|
| 1 | `components/articles/PmKisanLandSeedingForm.tsx` | 1652 | "land seeding" | 38× | 23.0 | 🔴 High |
| 2 | `components/articles/soil-health-card-complete-guide-2026.tsx` | 1244 | "soil health" | 26× | 20.9 | 🔴 High |
| 3 | `components/articles/kisanguides/VerminCompost.tsx` | 2429 | "vermi compost" | 41× | 16.9 | 🔴 High |
| 4 | `components/articles/PmKisanStateNodalOfficerList.tsx` | 1771 | "nodal officer" | 28× | 15.8 | 🔴 High |
| 5 | `components/articles/PmKisanMobileNumberChangeUpdate.tsx` | 2773 | "mobile number" | 40× | 14.4 | 🔴 High |
| 6 | `components/articles/PmKisanBankAccountChangeProcess.tsx` | 1672 | "bank account" | 23× | 13.8 | 🔴 High |
| 7 | `components/articles/maandhan/pmkmy-bank-account-change.tsx` | 2641 | "bank account" | 36× | 13.6 | 🔴 High |
| 8 | `components/articles/rajya-yojana/RythuBharosaStatusCheck.tsx` | 2607 | "rythu bharosa" | 31× | 11.9 | 🟠 Medium |
| 9 | `components/articles/maandhan/MaandhanContributionGuide.tsx` | 1705 | "kisan maandhan" | 19× | 11.1 | 🟠 Medium |
| 10 | `components/articles/PmKisanVoluntarySurrenderGuide.tsx` | 1094 | "voluntary surrender" | 12× | 11.0 | 🟠 Medium |
| 11 | `components/articles/PmKisanMaandhanYojanaPension.tsx` | 1859 | "maandhan yojana" | 20× | 10.8 | 🟠 Medium |
| 12 | `components/articles/maandhan/AutoDebitFailRegularization.tsx` | 1961 | "auto debit fail" | 21× | 10.7 | 🟠 Medium |
| 13 | `components/articles/PmKusumYojanaSolarSubsidy2026.tsx` | 1705 | "kusum yojana" | 18× | 10.6 | 🟠 Medium |
| 14 | `components/articles/PmKisanFaceAuthenticationEkyc.tsx` | 1579 | "face authentication" | 16× | 10.1 | 🟠 Medium |
| 15 | `components/articles/maandhan/PmKisanMaandhanRegistration2026.tsx` | 2149 | "kisan maandhan" | 20× | 9.3 | 🟠 Medium |
| 16 | `components/articles/PmKisanSelfRegisteredStatusCheck.tsx` | 1726 | "self registration" | 16× | 9.3 | 🟠 Medium |
| 17 | `components/articles/rajya-yojana/KrishakUnnatiYojanaStatusCheck.tsx` | 3039 | "antar rashi" | 28× | 9.2 | 🟠 Medium |
| 18 | `components/articles/PmKisanBeneficiaryList2026.tsx` | 1211 | "pdf download" | 11× | 9.1 | 🟠 Medium |
| 19 | `components/articles/PmKisanCscRegistrationCharges.tsx` | 1311 | "csc registration" | 11× | 8.4 | 🟠 Medium |
| 20 | `components/articles/maandhan/PmKisanMaandhanEligibilityDocuments.tsx` | 2042 | "kisan maandhan" | 17× | 8.3 | 🟠 Medium |
| 21 | `components/articles/PmKisanRejectedStatusReApplyGuide.tsx` | 1924 | "dobara apply" | 16× | 8.3 | 🟠 Medium |
| 22 | `components/articles/kisanguides/CHCPortal.tsx` | 1243 | "custom hiring" | 10× | 8.0 | 🟠 Medium |
| 23 | `components/articles/kisanguides/PMatsyaSampada.tsx` | 3009 | "fish farming" | 24× | 8.0 | 🟡 Low |
| 24 | `components/articles/KisanTractorLoan2026.tsx` | 1667 | "tractor loan" | 13× | 7.8 | 🟡 Low |
| 25 | `components/articles/maandhan/PmKisanMaandhanPensionCalculator.tsx` | 1945 | "kisan maandhan" | 15× | 7.7 | 🟡 Low |
| 26 | `components/articles/KisanCreditCardOnlineApply2026.tsx` | 2736 | "kisan credit" | 21× | 7.7 | 🟡 Low |
| 27 | `components/articles/hindi-yojana/PmKisanStatusCheckMobileNumberSe.tsx` | 2776 | "registration number" | 21× | 7.6 | 🟡 Low |
| 28 | `components/articles/kisanguides/DripSprinkler.tsx` | 2149 | "micro irrigation" | 16× | 7.4 | 🟡 Low |
| 29 | `components/articles/maandhan/pmkmy-grievance-complaint-helpline.tsx` | 1944 | "kisan maandhan" | 14× | 7.2 | 🟡 Low |
| 30 | `components/articles/loan-mandi-pashupalan/RashtriyaGokulMissionSubsidy.tsx` | 2537 | "rashtriya gokul" | 18× | 7.1 | 🟡 Low |
| 31 | `components/articles/NanoDap500mlPriceInIndia2026.tsx` | 1573 | "traditional dap" | 11× | 7.0 | 🟡 Low |
| 32 | `components/articles/maandhan/PmKisanMaandhanAutoDebitPooraSach.tsx` | 2903 | "kisan maandhan" | 20× | 6.9 | 🟡 Low |
| 33 | `components/articles/maandhan/family-pension-rules.tsx` | 2482 | "family pension" | 17× | 6.8 | 🟡 Low |
| 34 | `components/articles/maandhan/PmkmyVsApyComparison2026.tsx` | 2069 | "kisan maandhan" | 14× | 6.8 | 🟡 Low |
| 35 | `components/articles/maandhan/kisan-pension-card-download.tsx` | 3108 | "pension card" | 21× | 6.8 | 🟡 Low |
| 36 | `components/articles/rajya-yojana/KrishakBandhuStatusCheck.tsx` | 2878 | "krishak bandhu" | 19× | 6.6 | 🟡 Low |
| 37 | `components/articles/maandhan/PmKisanMaandhanWithdrawalRefund.tsx` | 1707 | "kisan maandhan" | 11× | 6.4 | 🟡 Low |
| 38 | `components/articles/rajya-yojana/AnnadataSukhibhavaStatusCheck.tsx` | 2535 | "annadata sukhibhava" | 16× | 6.3 | 🟡 Low |
| 39 | `components/articles/PmKisanVillageWiseListPdfDownload.tsx` | 1962 | "gov in https" | 12× | 6.1 | 🟡 Low |
| 40 | `components/articles/kisanguides/MadhumakhiPalan.tsx` | 1973 | "madhumakhi palan" | 12× | 6.1 | 🟡 Low |
| 41 | `components/articles/maandhan/PmKisanMaandhanStatusCheckOnline.tsx` | 3006 | "kisan maandhan" | 18× | 6.0 | 🟡 Low |
| 42 | `components/articles/PmKisanPaymentFailedFix2026.tsx` | 2235 | "kisan payment" | 13× | 5.8 | 🟡 Low |
| 43 | `components/articles/rajya-yojana/MpKisanKalyanYojanaKist.tsx` | 2780 | "saara portal" | 16× | 5.8 | 🟡 Low |
| 44 | `components/articles/PmKisanCorrectionForm2026.tsx` | 1919 | "aadhaar seeding" | 11× | 5.7 | 🟡 Low |
| 45 | `components/articles/rajya-yojana/UpKisanKarjRahatList2026.tsx` | 1774 | "loan account" | 10× | 5.6 | 🟡 Low |
| 46 | `components/articles/rajya-yojana/RajasthanKisanSammanNidhi9000.tsx` | 2847 | "jan aadhaar" | 16× | 5.6 | 🟡 Low |
| 47 | `components/articles/kisanguides/PMFMEYojana.tsx` | 2684 | "food processing" | 15× | 5.6 | 🟡 Low |
| 48 | `components/articles/rajya-yojana/NamoShetkariYojanaStatus.tsx` | 2692 | "namo shetkari" | 15× | 5.6 | 🟡 Low |
| 49 | `components/articles/rajya-yojana/StateKisanYojanaHub.tsx` | 2878 | "rajya yojana" | 16× | 5.6 | 🟡 Low |
| 50 | `components/articles/loan-mandi-pashupalan/SabziBhavGuidePyazAlooTamatar.tsx` | 2721 | "cold storage" | 15× | 5.5 | 🟡 Low |
| 51 | `components/articles/loan-mandi-pashupalan/EnamRegistrationKaiseKare.tsx` | 2195 | "enam registration" | 12× | 5.5 | 🟡 Low |
| 52 | `components/articles/kisanguides/BakriPalanYojana.tsx` | 1864 | "bakri palan" | 10× | 5.4 | 🟡 Low |
| 53 | `components/articles/PmKisanMasterGuide2026.tsx` | 1750 | "complete guide" | 9× | 5.1 | 🟡 Low |
| 54 | `components/articles/rajya-yojana/PariharaPaymentStatusCheck2026.tsx` | 2550 | "karnataka gov" | 13× | 5.1 | 🟡 Low |
| 55 | `components/articles/loan-mandi-pashupalan/MurgiPalanLoanNlmSubsidy.tsx` | 2396 | "nlm subsidy" | 12× | 5.0 | 🟡 Low |
| 56 | `components/articles/pm-kisan-fto-generated-ka-matlab-kya-hai.tsx` | 2687 | "land seeding" | 13× | 4.8 | 🟡 Low |
| 57 | `components/articles/mandi-bhav-today.tsx` | 1671 | "mandi bhav today" | 8× | 4.8 | 🟡 Low |
| 58 | `components/articles/PmKisanEkycOnline2026.tsx` | 2255 | "mobile number" | 10× | 4.4 | 🟡 Low |
| 59 | `components/articles/loan-mandi-pashupalan/JansamarthPortalLoanApply.tsx` | 2272 | "jansamarth portal" | 10× | 4.4 | 🟡 Low |
| 60 | `components/articles/loan-mandi-pashupalan/BiharPashupalanLoanYojana.tsx` | 2295 | "pashupalan loan" | 10× | 4.4 | 🟡 Low |
| 61 | `components/articles/loan-mandi-pashupalan/MandiBhavAppComparison.tsx` | 2324 | "modal price" | 10× | 4.3 | 🟡 Low |
| 62 | `components/articles/hindi-yojana/PmKisanHelplineNumberComplaint.tsx` | 2580 | "pmkisan gov" | 11× | 4.3 | 🟡 Low |
| 63 | `components/articles/rajya-yojana/MeriFasalMeraByoraStatusCheck2026.tsx` | 2585 | "status check" | 11× | 4.3 | 🟡 Low |
| 64 | `components/articles/hindi-yojana/NamoShetkariYojanaMaharashtra.tsx` | 2604 | "pm kisan की" | 11× | 4.2 | 🟡 Low |
| 65 | `components/articles/hindi-yojana/GehuKaRateAajMspVsMandiBhav.tsx` | 2917 | "सरकारी खरीद" | 12× | 4.1 | 🟡 Low |
| 66 | `components/articles/hindi-yojana/NpciAadhaarSeedingDbtPayment.tsx` | 2677 | "npci mapper" | 11× | 4.1 | 🟡 Low |
| 67 | `components/articles/loan-mandi-pashupalan/SbiDairyLoanInterestRate.tsx` | 2696 | "sbi dairy loan" | 11× | 4.1 | 🟡 Low |
| 68 | `components/articles/hindi-yojana/KisanKarjMafiList2027.tsx` | 3445 | "loan account" | 14× | 4.1 | 🟡 Low |
| 69 | `components/articles/loan-mandi-pashupalan/GehuKaBhavMspVsMandi.tsx` | 2253 | "kharid kendra" | 9× | 4.0 | 🟡 Low |
| 70 | `components/articles/kisanguides/MushroomKheti.tsx` | 2283 | "mushroom farming" | 9× | 3.9 | 🟡 Low |
| 71 | `components/articles/rajya-yojana/BiharKisanRegistrationStatusCheck2026.tsx` | 2322 | "kisan salahkar" | 9× | 3.9 | 🟡 Low |
| 72 | `components/articles/hindi-yojana/MukhyamantriKisanKalyanYojanaMp.tsx` | 2663 | "saara mp gov" | 10× | 3.8 | 🟡 Low |
| 73 | `components/articles/hindi-yojana/PmKisan25viKistKabAayegi.tsx` | 2508 | "pmkisan gov" | 9× | 3.6 | 🟡 Low |
| 74 | `components/articles/rajya-yojana/PmKisanPatiPatniRule.tsx` | 2834 | "record mein" | 10× | 3.5 | 🟡 Low |
| 75 | `components/articles/hindi-yojana/PmKisanNewRegistration2027.tsx` | 2552 | "pmkisan gov" | 9× | 3.5 | 🟡 Low |
| 76 | `components/articles/rajya-yojana/OdishaCmKisanStatusCheck.tsx` | 2869 | "landless track" | 10× | 3.5 | 🟡 Low |
| 77 | `components/articles/hindi-yojana/PmKisanPaymentStoppedByStateFix.tsx` | 2802 | "payment stopped" | 9× | 3.2 | 🟡 Low |
| 78 | `components/articles/hindi-yojana/PmKisanRecoveryNoticePaisaWapas.tsx` | 2579 | "noopener noreferrer" | 8× | 3.1 | 🟡 Low |
| 79 | `components/articles/hindi-yojana/KccLimitKaiseBadhaye3Se5Lakh.tsx` | 2906 | "scale of finance" | 9× | 3.1 | 🟡 Low |
| 80 | `components/articles/hindi-yojana/FarmerIdCardKaiseBanaye2027.tsx` | 2962 | "land record" | 9× | 3.0 | 🟡 Low |
| 81 | `components/articles/rajya-yojana/IkhedutPortalStatusCheck2026.tsx` | 2974 | "purv manjuri" | 9× | 3.0 | 🟡 Low |
| 82 | `components/articles/hindi-yojana/PmKisanEkycMobileSeKaiseKare.tsx` | 2720 | "pmkisan gov" | 8× | 2.9 | 🟡 Low |
| 83 | `components/articles/kisanguides/SilageMaking.tsx` | 2832 | "business guide" | 8× | 2.8 | 🟡 Low |
| 84 | `components/articles/loan-mandi-pashupalan/DairyFarmLoanWithoutCollateral.tsx` | 2997 | "dairy farm loan" | 8× | 2.7 | 🟡 Low |

## Per-article detail — top 20 worst

Each entry lists all flagged phrases (≥8 repeats) and the specific rewrite approach.

### `components/articles/PmKisanLandSeedingForm.tsx`
- Words: 1652 · Severity: 🔴 High
- Flagged phrases: "land seeding" ×38, "gov in https" ×27, "seeding form" ×23, "land seeding form" ×23, "pm kisan land" ×12, "kisan land seeding" ×12, "pm kisan land seeding" ×12, "kisan land seeding form" ×10
- **Fix:** Use "yeh form", "seeding record", "zameen ka record" after first mention. Alt texts: describe the screenshot, not the keyword.

### `components/articles/soil-health-card-complete-guide-2026.tsx`
- Words: 1244 · Severity: 🔴 High
- Flagged phrases: "soil health" ×26, "health card" ×23, "soil health card" ×23
- **Fix:** Use "SHC", "card", "mitti ki report" as variants. Only H1 + 1 H2 keep the full phrase.

### `components/articles/kisanguides/VerminCompost.tsx`
- Words: 2429 · Severity: 🔴 High
- Flagged phrases: "vermi compost" ×41, "compost business" ×12, "vermi compost business" ×12, "raw material" ×11, "organic fertilizer" ×9
- **Fix:** Use "khaad", "compost", "iska business" after intro. "vermi compost business" ×12 → "yeh business".

### `components/articles/PmKisanStateNodalOfficerList.tsx`
- Words: 1771 · Severity: 🔴 High
- Flagged phrases: "nodal officer" ×28, "state nodal" ×14, "state nodal officer" ×13, "kisan state" ×8, "pm kisan state" ×8, "kisan state nodal" ×8, "pm kisan state nodal" ×8
- **Fix:** Use "officer", "sambandhit adhikari", "unka office". Table headers don't need the full phrase in every row label.

### `components/articles/PmKisanMobileNumberChangeUpdate.tsx`
- Words: 2773 · Severity: 🔴 High
- Flagged phrases: "mobile number" ×40, "number change" ×16, "mobile number change" ×15, "number update" ×13, "kisan mobile" ×12, "pm kisan mobile" ×12, "naya number" ×11, "kisan mobile number" ×11
- **Fix:** Use "number", "naya number", "registered number". "mobile number change" ×15 → "number badalna".

### `components/articles/PmKisanBankAccountChangeProcess.tsx`
- Words: 1672 · Severity: 🔴 High
- Flagged phrases: "bank account" ×23, "account change" ×14, "bank account change" ×14, "naya account" ×11, "account mein" ×10, "pm kisan bank" ×10, "account number" ×9, "articles pm" ×9
- **Fix:** Use "khata", "account", "naya khata". "bank account change" → "khata badalna/update".

### `components/articles/maandhan/pmkmy-bank-account-change.tsx`
- Words: 2641 · Severity: 🔴 High
- Flagged phrases: "bank account" ×36, "account change" ×24, "bank account change" ×19, "kisan maandhan" ×18, "pm kisan maandhan" ×18, "bank branch" ×15, "bank branch me" ×11, "account number" ×10
- **Fix:** Use "khata", "account", "naya khata". "bank account change" → "khata badalna/update".

### `components/articles/rajya-yojana/RythuBharosaStatusCheck.tsx`
- Words: 2607 · Severity: 🟠 Medium
- Flagged phrases: "rythu bharosa" ×31, "dharani portal" ×9
- **Fix:** Use "yeh yojana", "scheme", "payment" after first mentions per section.

### `components/articles/maandhan/MaandhanContributionGuide.tsx`
- Words: 1705 · Severity: 🟠 Medium
- Flagged phrases: "kisan maandhan" ×19, "pm kisan maandhan" ×18, "maandhan pm" ×8
- **Fix:** Across the whole maandhan/ folder: "PM Kisan Maandhan" full name max 5-6×; then "Maandhan", "yeh pension yojana", "scheme".

### `components/articles/PmKisanVoluntarySurrenderGuide.tsx`
- Words: 1094 · Severity: 🟠 Medium
- Flagged phrases: "voluntary surrender" ×12, "surrender karne" ×8
- **Fix:** Apply general rules: full phrase ≤6×/1000w, vary with Hinglish synonyms and pronouns, de-keyword the headings/alts/FAQs.

### `components/articles/PmKisanMaandhanYojanaPension.tsx`
- Words: 1859 · Severity: 🟠 Medium
- Flagged phrases: "maandhan yojana" ×20, "kisan maandhan" ×14, "pm kisan maandhan" ×14, "kisan maandhan yojana" ×13, "pm kisan maandhan yojana" ×13
- **Fix:** Apply general rules: full phrase ≤6×/1000w, vary with Hinglish synonyms and pronouns, de-keyword the headings/alts/FAQs.

### `components/articles/maandhan/AutoDebitFailRegularization.tsx`
- Words: 1961 · Severity: 🟠 Medium
- Flagged phrases: "auto debit fail" ×21, "debit fail hone" ×17, "auto debit fail hone" ×17, "fail hone par" ×14, "debit fail hone par" ×13, "regularization kaise" ×11, "hone par regularization" ×11, "fail hone par regularization" ×11
- **Fix:** "auto debit fail hone par" ×17 is a template sentence — rewrite the repeating sentence pattern itself, vary structure.

### `components/articles/PmKusumYojanaSolarSubsidy2026.tsx`
- Words: 1705 · Severity: 🟠 Medium
- Flagged phrases: "kusum yojana" ×18, "pm kusum yojana" ×17
- **Fix:** Apply general rules: full phrase ≤6×/1000w, vary with Hinglish synonyms and pronouns, de-keyword the headings/alts/FAQs.

### `components/articles/PmKisanFaceAuthenticationEkyc.tsx`
- Words: 1579 · Severity: 🟠 Medium
- Flagged phrases: "face authentication" ×16, "pm kisan face" ×10, "kisan face authentication" ×10, "pm kisan face authentication" ×10
- **Fix:** Apply general rules: full phrase ≤6×/1000w, vary with Hinglish synonyms and pronouns, de-keyword the headings/alts/FAQs.

### `components/articles/maandhan/PmKisanMaandhanRegistration2026.tsx`
- Words: 2149 · Severity: 🟠 Medium
- Flagged phrases: "kisan maandhan" ×20, "pm kisan maandhan" ×17, "maandhan in" ×11, "maandhan pm" ×9, "maandhan pm kisan" ×9, "maandhan pm kisan maandhan" ×9, "pension scheme" ×8
- **Fix:** Across the whole maandhan/ folder: "PM Kisan Maandhan" full name max 5-6×; then "Maandhan", "yeh pension yojana", "scheme".

### `components/articles/PmKisanSelfRegisteredStatusCheck.tsx`
- Words: 1726 · Severity: 🟠 Medium
- Flagged phrases: "self registration" ×16, "status check" ×16, "pmkisan gov" ×15, "pmkisan gov in" ×15, "aadhaar number" ×9, "beneficiary status" ×9
- **Fix:** Apply general rules: full phrase ≤6×/1000w, vary with Hinglish synonyms and pronouns, de-keyword the headings/alts/FAQs.

### `components/articles/rajya-yojana/KrishakUnnatiYojanaStatusCheck.tsx`
- Words: 3039 · Severity: 🟠 Medium
- Flagged phrases: "antar rashi" ×28, "khadya vibhag" ×13, "khaate mein" ×10, "support price" ×8
- **Fix:** Apply general rules: full phrase ≤6×/1000w, vary with Hinglish synonyms and pronouns, de-keyword the headings/alts/FAQs.

### `components/articles/PmKisanBeneficiaryList2026.tsx`
- Words: 1211 · Severity: 🟠 Medium
- Flagged phrases: "pdf download" ×11, "pmkisan gov" ×11, "pmkisan gov in" ×11, "beneficiary list" ×10, "kisan beneficiary" ×9, "pm kisan beneficiary" ×9, "kisan beneficiary list" ×8, "pm kisan beneficiary list" ×8
- **Fix:** Apply general rules: full phrase ≤6×/1000w, vary with Hinglish synonyms and pronouns, de-keyword the headings/alts/FAQs.

### `components/articles/PmKisanCscRegistrationCharges.tsx`
- Words: 1311 · Severity: 🟠 Medium
- Flagged phrases: "csc registration" ×11, "registration charges" ×8, "csc registration charges" ×8
- **Fix:** Apply general rules: full phrase ≤6×/1000w, vary with Hinglish synonyms and pronouns, de-keyword the headings/alts/FAQs.

### `components/articles/maandhan/PmKisanMaandhanEligibilityDocuments.tsx`
- Words: 2042 · Severity: 🟠 Medium
- Flagged phrases: "kisan maandhan" ×17, "pm kisan maandhan" ×13
- **Fix:** Across the whole maandhan/ folder: "PM Kisan Maandhan" full name max 5-6×; then "Maandhan", "yeh pension yojana", "scheme".

## Suggested workflow

1. Fix 🔴 High articles first (8 files) — biggest stuffing footprint.
2. Then 🟠 Medium (~30 files), batch by folder (`maandhan/` shares one template pattern — fix the template sentences once, apply everywhere).
3. 🟡 Low can wait; many are borderline-natural.
4. After each batch: re-run the audit, redeploy, and request re-indexing in Search Console for changed URLs.

*Generated automatically by n-gram analysis; counts are from rendered article text (JSX strings + visible text), code/CSS excluded.*
