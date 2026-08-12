# Kisanstatus.com — Same Structure / Frame / Internal-Links / Hook / Intro Wale Articles

Repo (`khalil334/kisanstatus`) aur kisanstatus.com ke sabhi article components ka audit.
Neeche har group ke articles ek hi template/frame share karte hain — same helper components,
same section flow, same hook style, same intro pattern, same internal-linking scheme.

> **Note (2026-08-12):** this audit measures *structural* sameness — shared helper
> components, section flow, hook and intro pattern. It is **not** the related-cards audit.
> Two earlier claims that circulated alongside it have since been disproved and are
> deliberately **not** repeated here:
>
> - the supposed "byte-identical" clusters in `hindi-yojana/` and the `rajya-yojana/`
>   status-check family were a tokenizer artefact (local components like `Hd`, `Sec`,
>   `Tip`, `Figure` were not recognised, so every file collapsed to the same signature).
>   With a generic tokenizer both families score **0 pairs >=0.80**.
> - "one related-section label site-wide" is already resolved — `RelatedArticles`
>   hardcodes a single heading by design.
>
> Duplicate *related-card sets* were fixed separately in PR #268 (Part 6a) and PR #270
> (Part 6f); as of `main` after #270 there are **0 byte-identical `RELATED` sets** and
> **0 pairs with >=0.6 slug overlap**.

---

## Group 1 — Rajya Yojana template (15 articles) — SABSE ZYADA SAME

**Shared frame:** local `Fig()` helper (Image + figcaption card) · `InfoBox` · `SchemeTable` ·
`ExternalLinkButton` · hero.webp with priority · H1 → intro paras → status-check steps →
beneficiary list section → "Padosi ko mil gaya, mujhe nahi" style hook section →
reasons paisa ruka → FAQ block (italic caption `... FAQ 2026`) → "Baaki Rajyon / Aur Bhi States"
section → internal link to state hub (`/rajya-yojana/state-kisan-yojana-list-all-states-2026`).

**Shared intro/hook:** conversational Hinglish opening ("Suno zara…", "Hua kuch aisa…",
"seedhi baat, jaise koi apna hi samjha raha ho"), 2–3 short paras, phir hero Fig.

**Internal links:** sab 15 articles state-hub page ko link karte hain + ek dusre ko cross-link.

Files (`components/articles/rajya-yojana/`):
1. AnnadataSukhibhavaStatusCheck.tsx — `/rajya-yojana/annadata-sukhibhava-status-check-2026`
2. BiharKisanRegistrationStatusCheck2026.tsx — `/rajya-yojana/bihar-kisan-registration-status-check-2026`
3. IkhedutPortalStatusCheck2026.tsx — `/rajya-yojana/ikhedut-portal-status-check-2026`
4. KrishakBandhuStatusCheck.tsx — `/rajya-yojana/krishak-bandhu-status-check-2026`
5. KrishakUnnatiYojanaStatusCheck.tsx — `/rajya-yojana/krishak-unnati-yojana-status-check-2026`
6. MeriFasalMeraByoraStatusCheck2026.tsx — `/rajya-yojana/meri-fasal-mera-byora-status-check-2026`
7. MpKisanKalyanYojanaKist.tsx — `/rajya-yojana/mp-kisan-kalyan-yojana-kist-status`
8. NamoShetkariYojanaStatus.tsx — `/rajya-yojana/namo-shetkari-yojana-status-check-2026`
9. OdishaCmKisanStatusCheck.tsx — `/rajya-yojana/odisha-cm-kisan-status-check-2026`
10. PariharaPaymentStatusCheck2026.tsx — `/rajya-yojana/parihara-payment-status-check-2026`
11. PmKisanPatiPatniRule.tsx — `/rajya-yojana/pm-kisan-pati-patni-dono-ko-milega`
12. RajasthanKisanSammanNidhi9000.tsx — `/rajya-yojana/rajasthan-kisan-samman-nidhi-9000`
13. RythuBharosaStatusCheck.tsx — `/rajya-yojana/rythu-bharosa-status-check-2026`
14. StateKisanYojanaHub.tsx — `/rajya-yojana/state-kisan-yojana-list-all-states-2026` (hub)
15. UpKisanKarjRahatList2026.tsx — `/rajya-yojana/up-kisan-karj-rahat-list-2026`

---

## Group 2 — Hindi Yojana template (15 articles) — SAME FRAME

**Shared frame:** `FAQ_SCHEMA` JSON-LD script tag sabse upar · local `Fig()`/`Figure` helper ·
green "छोटा जवाब / एक line में" short-answer box · Devanagari Hindi body ·
step-by-step portal walkthrough · FAQ section · internal links `/articles/hi/...` (12/15 files
mein cross-links).

**Shared intro/hook:** bold question ya press-release/aankda hook ("…का आंकड़ा देखिए"),
phir "यह guide आपके लिए है" line, phir short-answer box, phir hero Figure.

Files (`components/articles/hindi-yojana/`):
1. FarmerIdCardKaiseBanaye2027.tsx — `/articles/hi/farmer-id-kaise-banaye`
2. GehuKaRateAajMspVsMandiBhav.tsx — `/articles/hi/gehu-ka-rate-aaj`
3. KccLimitKaiseBadhaye3Se5Lakh.tsx — `/articles/hi/kcc-limit-kaise-badhaye`
4. KisanKarjMafiList2027.tsx — `/articles/hi/karj-mafi-list`
5. MukhyamantriKisanKalyanYojanaMp.tsx — `/articles/hi/mp-kisan-kalyan-yojana`
6. NamoShetkariYojanaMaharashtra.tsx — `/articles/hi/namo-shetkari-yojana`
7. NpciAadhaarSeedingDbtPayment.tsx — `/articles/hi/npci-aadhaar-seeding`
8. PmKisan25viKistKabAayegi.tsx — `/articles/hi/pm-kisan-25vi-kist`
9. PmKisanEkycMobileSeKaiseKare.tsx — `/articles/hi/ekyc-mobile-se`
10. PmKisanHelplineNumberComplaint.tsx — `/articles/hi/helpline-shikayat`
11. PmKisanNewRegistration2027.tsx — `/articles/hi/nayi-registration`
12. PmKisanPaymentStoppedByStateFix.tsx — `/articles/hi/payment-stopped-by-state`
13. PmKisanRecoveryNoticePaisaWapas.tsx — `/articles/hi/recovery-notice`
14. PmKisanStatusCheckMobileNumberSe.tsx — `/articles/hi/status-check-mobile-se`
15. TractorSubsidy2027StateWiseList.tsx — `/articles/hi/tractor-subsidy`

---

## Group 3 — Maandhan template (13 articles)

**Shared frame:** `FAQS_DATA` const (3 FAQs typical) · same pension-scheme section flow
(eligibility → contribution → status → withdrawal) · `article` prop (`MaandhanArticleMeta`) ·
FAQ block at end · maandhan articles aapas mein internal-link karte hain.

Files (`components/articles/maandhan/`):
1. AutoDebitFailRegularization.tsx
2. family-pension-rules.tsx
3. kisan-pension-card-download.tsx
4. MaandhanContributionGuide.tsx
5. PmKisanMaandhanAutoDebitPooraSach.tsx
6. PmKisanMaandhanEligibilityDocuments.tsx
7. PmKisanMaandhanPensionCalculator.tsx
8. PmKisanMaandhanRegistration2026.tsx
9. PmKisanMaandhanStatusCheckOnline.tsx
10. PmKisanMaandhanWithdrawalRefund.tsx
11. pmkmy-bank-account-change.tsx
12. pmkmy-grievance-complaint-helpline.tsx
13. PmkmyVsApyComparison2026.tsx

---

## Group 4 — Loan / Mandi / Pashupalan template (11 articles)

**Shared frame:** `FAQS_DATA` const (2 FAQ blocks) · `article: ArticleMeta` prop ·
`FAQBlock` component at end · same guide flow (kya hai → eligibility → apply steps →
documents → FAQ).

Files (`components/articles/loan-mandi-pashupalan/`):
1. BiharPashupalanLoanYojana.tsx
2. DairyFarmLoanWithoutCollateral.tsx
3. EnamRegistrationKaiseKare.tsx
4. GehuKaBhavMspVsMandi.tsx
5. JansamarthPortalLoanApply.tsx
6. MandiBhavAppComparison.tsx
7. MspList202627.tsx
8. MurgiPalanLoanNlmSubsidy.tsx
9. RashtriyaGokulMissionSubsidy.tsx
10. SabziBhavGuidePyazAlooTamatar.tsx
11. SbiDairyLoanInterestRate.tsx

---

## Group 5 — Core PM-Kisan template (28 articles)

**Shared frame:** `FAQS_DATA` (2 blocks) · same PM-Kisan guide skeleton (problem intro →
portal steps → status meanings → fix steps → FAQ) · internal links to other core PM-Kisan
articles · no Fig helper (older template, images kam).

Files (`components/articles/`, root level):
1. AgriStackKyaHai2026.tsx
2. KisanCreditCardOnlineApply2026.tsx
3. KisanRinKahaSeLe2026.tsx
4. KisanTractorLoan2026.tsx
5. mandi-bhav-today.tsx
6. NanoDap500mlPriceInIndia2026.tsx
7. PmfbyCropInsurance2026.tsx
8. PmKisan24viKist2026.tsx
9. PmKisan25viKist2027.tsx
10. PmKisanBankAccountChangeProcess.tsx
11. PmKisanBeneficiaryList2026.tsx
12. PmKisanCorrectionForm2026.tsx
13. PmKisanCscRegistrationCharges.tsx
14. PmKisanEkycOnline2026.tsx
15. PmKisanFaceAuthenticationEkyc.tsx
16. pm-kisan-fto-generated-ka-matlab-kya-hai.tsx
17. PmKisanLandSeedingForm.tsx
18. PmKisanMaandhanYojanaPension.tsx
19. PmKisanMasterGuide2026.tsx
20. PmKisanMobileNumberChangeUpdate.tsx
21. PmKisanPaymentFailedFix2026.tsx
22. PmKisanRejectedStatusReApplyGuide.tsx
23. PmKisanSelfRegisteredStatusCheck.tsx
24. PmKisanStateNodalOfficerList.tsx
25. PmKisanVillageWiseListPdfDownload.tsx
26. PmKisanVoluntarySurrenderGuide.tsx
27. PmKusumYojanaSolarSubsidy2026.tsx
28. soil-health-card-complete-guide-2026.tsx

(`components/articles/ArticleStub.tsx` is the shared fallback renderer, not an article —
excluded from the counts above.)

---

## Group 6 — Kisanguides template (9 articles)

**Shared frame:** `ExternalLinkButton` (2–3 per article) · no FAQ consts · same
business-guide flow (yojana intro → subsidy amount → apply portal button → process steps).

Files (`components/articles/kisanguides/`):
1. BakriPalanYojana.tsx
2. CHCPortal.tsx
3. DripSprinkler.tsx
4. MadhumakhiPalan.tsx
5. MushroomKheti.tsx
6. PMatsyaSampada.tsx
7. PMFMEYojana.tsx
8. SilageMaking.tsx
9. VerminCompost.tsx

---

## Summary

| Group | Template | Articles | Sameness |
|---|---|---|---|
| 1 | Rajya Yojana | 15 | Highest — same Fig/InfoBox/SchemeTable frame, hook, hub links |
| 2 | Hindi Yojana | 15 | High — FAQ_SCHEMA + Fig + short-answer box + `/articles/hi/` links |
| 3 | Maandhan | 13 | High — 3-FAQ frame, pension flow |
| 4 | Loan/Mandi/Pashupalan | 11 | High — FAQBlock + ArticleMeta frame |
| 5 | Core PM-Kisan | 28 | Medium — older 2-FAQ skeleton |
| 6 | Kisanguides | 9 | Medium — ExternalLinkButton guide frame |

Total audited: **91 article components** (96 `.tsx` files under `components/articles/`,
minus `ArticleStub.tsx` and the 4 interactive widgets in `rajya-yojana/tools/`).
