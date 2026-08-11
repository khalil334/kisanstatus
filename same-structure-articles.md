# Kisanstatus.com — Same Structure / Frame / Internal-Links / Hook / Intro Wale Articles

Repo (`khalil334/kisanstatus`) aur kisanstatus.com ke sabhi article components ka audit.
Neeche har group ke articles ek hi template/frame share karte hain — same helper components,
same section flow, same hook style, same intro pattern, same internal-linking scheme.

---

## Group 1 — Rajya Yojana template (15 articles) — ✅ BATCH 1 COMPLETE (uniqueness pass done)

> **Status (Batch 1 done):** Sab 15 articles ab ek dusre se unique hain — koi duplicate H2 heading nahi,
> koi duplicate sentence nahi (disclaimers included), koi duplicate FAQ sawaal nahi, "… FAQ 2026" italic
> caption pattern har file mein alag caption se replace, "Padosi Ko Mil Gaya…" H2 ab sirf variants mein,
> hub-link anchors sab unique. Kuch bhi delete nahi hua — sirf replace. Facts/slugs/exports unchanged.
> Build pass (next build).

> **Status (Batch 1 — keyword-density pass, 4/15 files done):** `docs/keyword-repetition-report.md` mein
> jo over-optimization mili thi, uska fix shuru. **Sakht niyam jo is pass mein follow ho rahe hain:**
> (1) **ranking keyword kabhi delete nahi** — pehle `lib/rajya-yojana-data.ts` se us page ka `mainKeyword`
> + `secondaryKeywords` padhe jaate hain, wo H1 / 1-2 H2 / intro / FAQ mein poore rehte hain;
> (2) sirf **filler repeats** replace hote hain (wahi shabd jo ek hi paragraph mein 3-4 baar bina
> matlab aaya ho); (3) **word count kabhi kam nahi** — har file ka before/after count compare hota hai
> aur 2000 se neeche kabhi nahi; (4) target density ~0.8–1.5% (na stuffing, na keyword loss).
>
> | File | Keyword | Pehle | Ab | Words |
> |---|---|---|---|---|
> | StateKisanYojanaHub | `state` (main kw) | ×88 (2.74%) | ×36 (1.11%) | 3215 → 3236 |
> | IkhedutPortalStatusCheck2026 | `arji` (main kw) | ×84 (2.56%) | ×62 (1.89%) | 3277 → 3279 |
> | BiharKisanRegistrationStatusCheck2026 | `registration` (main kw) | ×43 (1.77%) | ×33 (1.35%) | 2436 → 2437 |
> | NamoShetkariYojanaStatus | `kisan` (filler) | ×49 (1.84%) | ×40 (1.51%) | 2657 → 2696 |
>
> Verified per file: hrefs, ₹ amounts, .gov.in URLs, export name, image src, H1 text, H2 count,
> FAQ count — **sab byte-identical**. `next build --webpack` pass (126 pages).
>
> **Pending (11 files):** MpKisanKalyanYojanaKist, UpKisanKarjRahatList2026, OdishaCmKisanStatusCheck,
> RajasthanKisanSammanNidhi9000, RythuBharosaStatusCheck, MeriFasalMeraByoraStatusCheck2026,
> PmKisanPatiPatniRule, PariharaPaymentStatusCheck2026, AnnadataSukhibhavaStatusCheck,
> KrishakUnnatiYojanaStatusCheck, KrishakBandhuStatusCheck (last one already clean — no unigram >1%).

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

## Group 2 — Hindi Yojana template (15 articles) — ✅ BATCH 2 COMPLETE (uniqueness pass done)

> **Status (Batch 2 done):** Sab 15 articles ke internal-link anchors ab unique hain — koi bhi anchor
> text do files mein repeat nahi hota ("PM Kisan Master Guide", "eKYC Online Guide", "Sab Utilities
> Dekho", "Kist Tracker Kholo", "इस page पर समझाया है" jaise repeated anchors har file mein alag
> wording se replace). Repeated CTA-box copy ("Kist Ruki Hai? Pata Karo Kyun" + subtitle, 5 files)
> ab har file mein unique. Repeated portal-card caption ("Government of India — pmkisan.gov.in",
> 6 files) har file mein alag. Hooks, H2 headings, FAQ sawaal aur figcaptions pehle se hi unique thay
> (verified — 0 duplicates). Kuch bhi delete nahi hua — sirf replace. Facts/slugs/URLs/exports
> unchanged. Build pass (next build).

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

## Group 5 — Core PM-Kisan template (26 articles)

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
27. soil-health-card-complete-guide-2026.tsx

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
| 1 | Rajya Yojana | 15 | ✅ uniqueness pass done · 🟡 keyword-density pass 4/15 (ranking kws preserved, word count never reduced) |
| 2 | Hindi Yojana | 15 | ✅ DONE — Batch 2 uniqueness pass complete (unique anchors/CTA/captions, no dup H2/FAQ/hook) |
| 3 | Maandhan | 13 | High — 3-FAQ frame, pension flow |
| 4 | Loan/Mandi/Pashupalan | 11 | High — FAQBlock + ArticleMeta frame |
| 5 | Core PM-Kisan | 27 | Medium — older 2-FAQ skeleton |
| 6 | Kisanguides | 9 | Medium — ExternalLinkButton guide frame |

Total audited: **90 article components.**

---

# TASK PROMPT — Har Article Ko Ek Dusre Se Unique Banana Hai

> Ye prompt kisi bhi AI agent / developer ko dena hai jo in articles par kaam karega.
> Upar wale 6 groups ke andar articles aapas mein same template share karte hain —
> ab har article ka style, skeleton, FAQs, frame aur internal links **ek dusre se
> unique** karne hain.

## Sakht Rules (kabhi na todein)

1. **DELETE KUCH BHI NAHI.** Koi section, para, FAQ, image, link, ya file delete nahi
   karni. Sirf **REPLACE** karna hai — purani cheez ki jagah nayi unique cheez.
   Content ki length aur information same ya zyada rahe, kam kabhi nahi.
2. **Language fix hai:**
   - Hinglish (Roman script) wale articles **Hinglish mein hi rahenge** — Groups 1, 3, 4, 5, 6
     (rajya-yojana, maandhan, loan-mandi-pashupalan, core PM-Kisan, kisanguides).
   - Hindi (Devanagari) wale articles **Hindi mein hi rahenge** — Group 2 (hindi-yojana,
     `/articles/hi/...`).
   - Language switch karna mana hai.
3. **Facts nahi badalne** — amounts, dates, portal URLs, helpline numbers, eligibility
   rules jaise the waise rahenge. Sirf presentation/structure unique karni hai.
4. **Slugs, routes, file names, exports nahi badalne** — SEO URLs same rahenge.
   Component ka export name aur props (`article` meta) waise hi rahenge.
5. Ek article par kaam karte waqt **doosre articles ko touch nahi karna.**

## Kya-Kya Unique Karna Hai (har article mein)

### 1. Hook / Intro
- Abhi: har group mein same opening pattern (e.g. "Suno zara…", "…का आंकड़ा देखिए",
  bold question + "यह guide आपके लिए है").
- Karna kya hai: **har article ka apna alag hook** — koi ek chunein aur group mein repeat na karein:
  - real-life scene/kahani se shuru (kisan mandi mein, CSC ki line mein…)
  - chaunkane wala aankda ya date
  - seedha problem-statement ("Status Rejected dikha raha hai? …")
  - myth-busting opening ("Log samajhte hain ki… lekin sach ye hai")
  - sawaal-jawab opening
  - season/timeline hook ("Rabi ki kist ka waqt aa gaya hai…")
- Intro ki para count, sentence rhythm, aur short-answer box ka style bhi vary karein
  (kabhi box pehle, kabhi baad mein, kabhi bullet-summary, kabhi bold one-liner).

### 2. Skeleton / Section Flow
- Abhi: group ke sab articles ka H2 flow same hai (status steps → list → "padosi" section →
  reasons → FAQ → other states).
- Karna kya hai: **har article ka section order aur H2 headings alag** karein:
  - sections ko reorder karein (jahan logic allow kare)
  - H2 wording har article mein alag ho — same heading do articles mein na ho
    (e.g. "Padosi Ko Mil Gaya, Mujhe Nahi" sirf EK article mein rahe; baaki mein
    "Gaon Mein Sabko Aaya, Aapko Nahi?" / "List Mein Naam, Khaate Mein Sannata" jaise variants)
  - kuch articles mein extra unique section add karein (checklist, timeline table,
    do's & don'ts, case study, step-by-step troubleshooting tree) — add allowed hai, delete nahi.

### 3. FAQs
- Abhi: same FAQ count, same italic caption pattern ("… FAQ 2026"), overlapping sawaal.
- Karna kya hai:
  - **FAQ count vary** karein (4–8 ke beech, har article alag)
  - sawaal ki **wording har article mein unique** — do articles mein same sawaal na ho;
    same topic ho to angle badlein
  - jawab ka style vary karein (kahin short, kahin step wale, kahin example ke saath)
  - caption/label har jagah alag ("Aksar Poochhe Jaane Wale Sawaal", "Aapke Sawaal — Seedhe Jawab",
    "आपके सवालों के जवाब", etc.)
  - FAQ replace karte waqt purane sawaal ki information naye sawaal/jawab mein cover ho
    (info loss nahi).

### 4. Frame / Visual Components
- Abhi: same local `Fig()` helper, same InfoBox/SchemeTable/ExternalLinkButton placement,
  same figcaption style.
- Karna kya hai:
  - Fig caption style aur placement vary karein (kabhi hero top par, kabhi pehle H2 ke baad)
  - InfoBox types aur positions mix karein (update/info/warning alag-alag jagah)
  - tables ka format vary karein (kahin SchemeTable, kahin simple list, kahin 2-column
    comparison) — data same rahe
  - button placement/label text har article mein alag ho.

### 5. Internal Links
- Abhi: sab articles same hub ko same anchor se link karte hain; cross-links ka pattern same.
- Karna kya hai:
  - **anchor text har link ka unique** ho (same URL ho to bhi anchor alag likhen)
  - link placement vary karein (intro mein, beech ke section mein, end mein — har article alag mix)
  - har article ka **related-links set alag** ho — sab 15 ek hi hub ko ek hi jagah link
    na karein; contextual links banayein (Rythu Bharosa ↔ Annadata Sukhibhava jaisa
    natural pairing)
  - koi existing link **delete nahi** — sirf anchor/position/wording replace.

### 6. Writing Style / Voice
- Sentence length, tone, aur transitions har article mein vary karein:
  kuch articles zyada conversational, kuch checklist-style, kuch narrative,
  kuch Q&A-heavy. Ek group ke andar do articles padh kar same writer ka
  template feel nahi aana chahiye.

## Kaise Kaam Karein (process)

1. Ek group uthayein (pehle Group 1 — Rajya Yojana, sabse zyada same hai).
2. Group ke har article ko ek **uniqueness plan** assign karein (hook type, section order,
   FAQ count, FAQ caption, link placement) — table bana kar ensure karein ki
   koi do articles ka plan same na ho.
3. Ek article = ek commit. Replace karein, delete nahi.
4. Har commit ke baad check: language wahi hai? facts wahi hain? koi content loss nahi?
   slug/export same? build pass (`npm run build`)?
5. Group khatam ho to agle group par jayein (2 → 3 → 4 → 5 → 6).

## Verification Checklist (har article ke baad)

- [ ] Hook group ke kisi doosre article se match nahi karta
- [ ] Koi H2 heading kisi doosre article mein repeat nahi hoti
- [ ] FAQ sawaal 100% unique wording mein hain
- [ ] Internal links ke anchors unique hain, koi link delete nahi hua
- [ ] Language same hai (Hinglish → Hinglish, हिन्दी → हिन्दी)
- [ ] Word count purane se kam nahi hua
- [ ] Facts/URLs/amounts unchanged
- [ ] `npm run build` pass
