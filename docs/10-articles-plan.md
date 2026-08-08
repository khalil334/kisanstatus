# 10 Naye Articles — Content Plan

*Plan date: February 2027 · Goal: naya Devanagari-search traffic unlock karna*
*Base analysis: [traffic-analysis-and-10x-plan.md](./traffic-analysis-and-10x-plan.md)*

## Rules (har article ke liye)

1. **Title + H1 + headings Devanagari mein** — body Hinglish-Devanagari mix chalega, lekin jo text Google SERP mein dikhega (title, desc, headings) woh Devanagari ho
2. **URL slug Roman mein** (existing pattern follow karo, redirects ka jhanjhat nahi)
3. **Sirf verified facts** — helpline numbers, portal URLs, scheme rules official source se confirm karke. Jo pata nahi, woh "official announcement ka wait karo" likhna hai, fake date nahi
4. **Existing components reuse** — `ArticleShared.tsx` (SH, IB, WB, DB, StepList, FAQBlock, GovLink, RelatedArticles)
5. **FAQBlock zaroor** — FAQPage schema free mein milta hai
6. **3-5 internal links** existing articles ki taraf, aur unme se wapas naye article ki taraf
7. **Writing style**: seedhi baat, chhote-bade mixed paragraphs, kisan se baat karne wala tone (jaise `PmKisan25viKist2027.tsx` mein hai — "Bhai, koi exact date nahi hai abhi"). Repetitive keyword stuffing nahi.
8. **Har article ke baad yeh plan.md update karo** — status column mein ✅ lagao

## Status Tracker

| # | Article | Slug | Priority | Status |
|---|---------|------|----------|--------|
| 1 | पीएम किसान हेल्पलाइन + शिकायत गाइड | pm-kisan-helpline-shikayat-kaise-kare | 🔴 High | ✅ Done (hindi/helpline-shikayat) |
| 2 | पीएम किसान स्टेटस चेक मोबाइल नंबर से | pm-kisan-status-check-mobile-number-se | 🔴 High | ✅ Done (hindi/status-check-mobile-se) |
| 3 | फार्मर आईडी कार्ड कैसे बनाएं (AgriStack) | farmer-id-card-kaise-banaye | 🔴 High | ✅ Done (hindi/farmer-id-kaise-banaye) |
| 4 | किसान कर्ज माफी लिस्ट — राज्यवार | kisan-karj-mafi-list-rajyawar | 🟡 Medium | ✅ Done (hindi/karj-mafi-list) |
| 5 | मुख्यमंत्री किसान कल्याण योजना MP ₹12000 | mp-kisan-kalyan-yojana-12000 | 🟡 Medium | ✅ Done (hindi/mp-kisan-kalyan-yojana) |
| 6 | पीएम किसान नई रजिस्ट्रेशन गाइड | pm-kisan-nayi-registration-kaise-kare | 🟡 Medium | ✅ Done (hindi/nayi-registration) |
| 7 | ट्रैक्टर सब्सिडी राज्यवार लिस्ट | tractor-subsidy-rajyawar-list | 🟡 Medium | ✅ Done (hindi/tractor-subsidy) |
| 8 | गेहूं का रेट — MSP vs मंडी भाव | gehu-ka-rate-msp-vs-mandi-devanagari | 🟢 Later | ✅ Done (hindi/gehu-ka-rate-aaj) |
| 9 | पीएम किसान eKYC मोबाइल से (Devanagari) | pm-kisan-ekyc-mobile-se-devanagari | 🟢 Later | ✅ Done (hindi/ekyc-mobile-se) |
| 10 | नमो शेतकरी योजना Maharashtra ₹12000 | namo-shetkari-yojana-maharashtra | 🟢 Later | ⬜ Pending |

*Priority logic: High = kam competition + turant likha ja sakta hai (sab facts verifiable). Medium = research chahiye. Later = existing Hinglish article se overlap hai, dhyan se differentiate karna hoga.*

---

## Article 1: पीएम किसान हेल्पलाइन नंबर — शिकायत कैसे करें?

- **Slug:** `pm-kisan-helpline-shikayat-kaise-kare` · **Category:** status-check
- **Target queries:** पीएम किसान हेल्पलाइन नंबर · pm kisan complaint kaise kare · पीएम किसान शिकायत · pm kisan helpline number kya hai
- **Kyun pehle:** Payment atakne par har kisan yeh search karta hai. Competition kam, intent high. Sab facts 100% verifiable (official numbers).
- **Verified facts (in numbers ko final draft se pehle pmkisan.gov.in par dobara confirm karo):**
  - Helpline: 155261 · Landline: 011-24300606, 011-23381092
  - Email: pmkisan-ict@gov.in
  - Online grievance: pmkisan.gov.in → Farmers Corner → "Help Desk" / Grievance (Aadhaar/Account/Mobile number se query register hoti hai)
  - Timing: Mon–Sat working hours
- **Structure:** Kab helpline use karo (kaunsi problem kahan solve hogi — table) → Phone se shikayat → Online Help Desk query step-by-step → Email format → Query status kaise track karo → Kitne din mein solution → State Nodal Officer kab contact karo → FAQ (6-7)
- **Internal links:** PmKisanPaymentFailedFix2026, PmKisanStateNodalOfficerList, PmKisanRejectedStatusReApplyGuide, PmKisanEkycOnline2026
- **Reverse links:** PaymentFailedFix + RejectedStatus articles mein is article ka link add karo

## Article 2: पीएम किसान स्टेटस चेक मोबाइल नंबर से

- **Slug:** `pm-kisan-status-check-mobile-number-se` · **Category:** status-check
- **Target queries:** पीएम किसान स्टेटस चेक मोबाइल नंबर से · pm kisan status mobile number se kaise dekhe · मोबाइल नंबर से किस्त कैसे चेक करें
- **Kyun:** Kisan ke paas registration number nahi hota — mobile number hota hai. Sabse common how-to search.
- **Structure:** Know Your Status page par mobile number se OTP flow (step-by-step, har screen ka description) → Registration number bhool gaye to "Know your registration no." option → OTP nahi aa raha (SIM band case → MobileNumberChangeUpdate link) → Status ke har field ka matlab (eKYC YES/NO, payment status) → FAQ
- **Internal links:** PmKisanMobileNumberChangeUpdate, PmKisan24viKist2026, pm-kisan-fto-generated-ka-matlab-kya-hai, PmKisanMasterGuide2026
- **Note:** Existing MasterGuide se overlap hai — yeh article SIRF mobile-number route par focused rahe, master guide broad hai

## Article 3: फार्मर आईडी कार्ड कैसे बनाएं (AgriStack Farmer Registry)

- **Slug:** `farmer-id-card-kaise-banaye` · **Category:** farming
- **Target queries:** फार्मर आईडी कार्ड कैसे बनाएं · farmer id registration · किसान आईडी कार्ड ऑनलाइन
- **Kyun:** Trending topic, volume badh raha hai, competition abhi kam. PM Kisan ke liye mandatory ho raha hai — urgency real hai.
- **Research needed:** Har state ka Farmer Registry portal URL verify karo (UP: upfr.agristack.gov.in type — LIVE check karke hi likhna). Kaunse states mein mandatory ho chuka hai — sirf confirmed states list karo.
- **Structure:** Farmer ID kya hai, PM Kisan se kya connection → Kaunse documents chahiye → Self-registration steps (portal + app) → CSC se kaise banwaye → State-wise portal table → Status check → FAQ
- **Internal links:** AgriStackKyaHai2026 (existing — generic hai, yeh specific how-to), PmKisanLandSeedingForm, PmKisanEkycOnline2026
- **Differentiation:** AgriStackKyaHai2026 = "kya hai" · yeh article = "kaise banaye" — overlap nahi

## Article 4: किसान कर्ज माफी लिस्ट — किन राज्यों में कर्ज माफ हुआ?

- **Slug:** `kisan-karj-mafi-list-rajyawar` · **Category:** loan
- **Target queries:** किसान कर्ज माफी लिस्ट · kisan karj mafi 2027 · कर्ज माफी योजना [state]
- **Kyun:** Evergreen high-volume topic, site par bilkul missing.
- **⚠️ Research critical:** Yeh YMYL-sensitive topic hai. SIRF officially announced schemes likho — "expected" karj mafi ki afwah nahi. Har state section mein official portal/GR ka link. Jo state mein koi active scheme nahi, wahan saaf likho "abhi koi scheme nahi hai" — yehi honesty ranking mein help karegi kyunki baaki sites clickbait karti hain.
- **Structure:** Karj mafi kaise kaam karti hai (state subject hai, center ki nahi) → State-wise sections (sirf active/recent schemes: eligibility, list kaise check kare, portal link) → Fake news se kaise bache → FAQ
- **Internal links:** KisanRinKahaSeLe2026, KisanCreditCardOnlineApply2026, jansamarth-portal article

## Article 5: मुख्यमंत्री किसान कल्याण योजना MP — ₹12000 कैसे मिलेंगे?

- **Slug:** `mp-kisan-kalyan-yojana-12000` · **Category:** farming (ya rajya-yojana section — jo pattern LIVE_RAJYA_YOJANA mein hai use follow karo)
- **Target queries:** मुख्यमंत्री किसान कल्याण योजना · mp kisan kalyan yojana status · किसान कल्याण योजना की किस्त कब आएगी
- **Kyun:** MP ke lakhs of farmers, national sites kam cover karti hain. PM Kisan + state top-up = ₹12,000/saal ka angle unique hai.
- **Research needed:** Current amount verify karo (₹6,000/saal state se — 3 kist ya 2, official saarathi/MP portal se confirm), eligibility = PM Kisan beneficiary hona zaroori.
- **Structure:** Scheme kya hai, PM Kisan se rishta → Total ₹12,000 ka math → Eligibility → Status check (saara.mp.gov.in type portal — verify karo) → Kist history → Problems + fix → FAQ
- **Internal links:** PmKisan24viKist2026, PmKisanBeneficiaryList2026, rajya-yojana section
- **Note:** Repo mein `rajya-yojana` section already hai — check karo yeh scheme wahan cover to nahi hui. Agar hai, to us article ko upgrade karo, duplicate mat banao.

## Article 6: पीएम किसान नई रजिस्ट्रेशन — नया आवेदन कैसे करें?

- **Slug:** `pm-kisan-nayi-registration-kaise-kare` · **Category:** status-check
- **Target queries:** पीएम किसान रजिस्ट्रेशन कैसे करें · pm kisan new registration · पीएम किसान का फॉर्म कैसे भरें
- **Structure:** Kaun eligible hai (exclusion list clearly) → Documents checklist → Self-registration portal flow → CSC route + charges (existing CscRegistrationCharges article se link) → Farmer ID requirement (Article 3 se link) → Registration ke baad kya hota hai (verification timeline) → Status check → FAQ
- **Internal links:** PmKisanCscRegistrationCharges, pm-kisan-self-registered-status-check, farmer-id article (#3), PmKisanLandSeedingForm

## Article 7: ट्रैक्टर सब्सिडी — राज्यवार लिस्ट (50% तक)

- **Slug:** `tractor-subsidy-rajyawar-list` · **Category:** agri-business
- **Target queries:** ट्रैक्टर सब्सिडी · tractor subsidy kaise le · [state] ट्रैक्टर अनुदान
- **Kyun:** "Tractor subsidy" + state combo high-volume hai. Pillar page banao — har state ka section alag rank hoga.
- **⚠️ Research critical:** SMAM/state scheme percentages verify karo. Jo state ka portal down/scheme closed hai, woh saaf likho. Fake "50% sabko milegi" mat likho — categories (SC/ST/women/small farmer) ke hisaab se % alag hota hai.
- **Structure:** Subsidy kaise kaam karti hai (SMAM + state schemes) → Category-wise % table → State-wise sections (UP, Bihar, MP, Rajasthan, Haryana, Maharashtra: portal, kab khulta hai, documents) → Application process generic steps → Tractor loan vs subsidy combo → FAQ
- **Internal links:** KisanTractorLoan2026 (strong pair — loan + subsidy), custom-hiring-centre-chc-portal, KisanRinKahaSeLe2026

## Article 8: गेहूं का रेट आज — MSP vs मंडी भाव

- **Slug:** decide later (existing `gehu-ka-bhav-msp-vs-mandi` se conflict na ho)
- **⚠️ Pehle decide karo:** Existing Hinglish article ko Devanagari upgrade karna hai ya naya banana hai. **Recommendation: existing article ka title/H1/headings Devanagari karo, naya mat banao** — same topic ke do article cannibalization karenge. Isliye yeh "Later" priority hai.
- **Kaam:** Title Devanagari, MSP 2027-28 rabi season ka verified rate, weekly update routine set karo (modifiedTime sach mein update ho)

## Article 9: पीएम किसान eKYC मोबाइल से (Devanagari)

- **Slug:** decide later
- **⚠️ Same decision:** Existing `PmKisanEkycOnline2026` (33KB, solid article) ka Devanagari upgrade better hai vs naya article. **Recommendation: existing ko upgrade karo.** Face Auth app wala existing article bhi hai — teeno mein clear differentiation rakhna hoga agar naya banaya.

## Article 10: नमो शेतकरी योजना Maharashtra — ₹12000

- **Slug:** `namo-shetkari-yojana-maharashtra` · **Category:** rajya-yojana pattern
- **Kyun:** Article 5 (MP) jaisa hi pattern, Maharashtra ke liye. MP wala publish hone ke baad isko template ki tarah use karo.
- **Research needed:** Namo Shetkari Mahasanman Nidhi current status, kist count, portal verify karo. Marathi audience hai — Hindi Devanagari se kaafi reach milegi, lekin queries Marathi mein bhi hoti hain (नमो शेतकरी योजना).

---

## Order of Execution

1. **Article 1 (Helpline)** — sab facts ready, aaj hi ho sakta hai
2. **Article 2 (Mobile status check)** — portal flow describe karna hai, koi risky fact nahi
3. **Article 3 (Farmer ID)** — thoda portal research, phir likho
4. **Articles 6, 5, 7, 4** — research-heavy, ek-ek karke
5. **Articles 8, 9** — existing articles ka Devanagari upgrade (naya nahi)
6. **Article 10** — Article 5 ke template par

## Har Article Ship Karne ki Checklist

- [ ] Component file `components/articles/` mein, `ArticleShared` components use kiye
- [ ] `lib/articles-data.ts` mein ArticleMeta entry (Devanagari title/desc/ogTitle, keywords mein Devanagari + Roman dono)
- [ ] `app/articles/[slug]/page.tsx` ke COMPONENTS map mein entry
- [ ] relatedSlugs set + 2-3 purane articles mein reverse link
- [ ] FAQBlock ke saath
- [ ] Facts double-checked (numbers, URLs, dates — koi guess nahi)
- [ ] Is file mein status ✅ update
