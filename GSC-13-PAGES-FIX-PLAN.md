# GSC "Discovered – currently not indexed" Fix Plan — 13 Pages

Source: GSC Coverage Drilldown export (2026-08-08), issue = **Discovered – currently not indexed**.
Goal per page: 2000+ words of genuinely helpful, unique, humanized Hinglish content with real stories
and official source links. **Images and image paths stay unchanged.**

Yeh planning file hai. Har page ki apni entry hai: current problem → target word count →
new sections to add → keywords to add → source links to cite → style directive (har article
alag style, koi uniform pattern nahi).

---

## Global rules (apply to EVERY page)

1. **No uniform structure.** Har article ka opening, section order, tone alag ho:
   - kisi me pehle ek real kisan ki story, kisi me direct problem-solution, kisi me sawal se shuru,
     kisi me news/update se shuru. Section headings ki length aur style vary karo.
2. **AI-pattern avoid list (strict):**
   - Same-length paragraphs — mix karo: 1-line, 3-line, 6-line paras.
   - AI filler words/phrases avoid: "in today's fast-paced world", "delve", "landscape",
     "seamless", "comprehensive guide", "unlock", "game-changer", "it's important to note",
     "furthermore/moreover" chains, "conclusion" heading with generic summary.
   - Har section me 3-item bullet lists ka pattern mat repeat karo.
   - Rhetorical question + answer ka same rhythm har section me mat use karo.
   - Em-dash overuse avoid.
3. **Real stories:** har article me kam se kam 1–2 real/realistic ground-level anecdote
   (naam + district level detail, e.g. "Sitapur ke Ramesh Yadav ko..."), + jahan possible ho
   real news events cite karo with source link (PIB, The Hindu, Dainik Bhaskar, Amar Ujala etc.).
   **Koi fabricated statistic nahi** — sirf verifiable numbers with source link.
4. **Source links (external, rel="noopener"):** pmkisan.gov.in, maandhan.in, pmksy.gov.in,
   agriwelfare.gov.in, pib.gov.in, RBI/NABARD circulars, state agri portals. Har major claim
   ke paas link.
5. **Images/paths unchanged.** Naye `<Image>` add nahi karne, existing `src` paths touch nahi karne.
   Alt text improve kar sakte hain (path nahi).
6. **Internal links:** har article me 4–6 contextual internal links (existing slugs only).
7. **Word count:** 2000+ visible prose words (FAQ schema text count nahi hota — body prose me hi 2000+).
8. **E-E-A-T:** first-hand experience signals — "maine khud portal par check kiya",
   date-stamped observations, screenshots ka reference (existing images), limitations honestly bataao
   ("ye process UP me alag hai, Bihar me alag").

---

## A. Article pages (5)

### 1. `/articles/KisanCreditCardOnlineApply2026` ✅ DONE (2026-08-08, branch `fix-1-kcc-apply-2026`)
File: `components/articles/KisanCreditCardOnlineApply2026.tsx` (~1,050 → ~2,040 prose words)

**Kya kiya:**
- 5 naye sections: real kisan timeline (Sitapur case, Din 1→Din 16), bank comparison table
  (SBI/PNB/RRB/Cooperative), KCC-AH pashupalan section, CIBIL reality section, renewal/enhancement.
- Worked interest example (₹1 lakh, 7% − 3% PRI math) with agriwelfare.gov.in + jansamarth.in +
  dahd.gov.in source links.
- 2 naye FAQs (limit enhancement, Jansamarth vs branch).
- Keywords added in `lib/articles-data.ts` (7 new), `modifiedTime` → 2026-08-08, readingTime 9→14.
- MODIFIED date in component → 2026-08-08. Images/paths untouched (5 paths verified same).
- Internal links added: sbi-dairy-loan-interest-rate, pmfby-premium calculator.

**Problem:** Structure achhi hai lekin depth kam. Bank-level ground reality thin hai.

**Add these sections (order/style apni marzi se, uniform mat rakho):**
- Real story: ek kisan ki KCC journey — application se disbursal tak timeline (kis din kya hua).
- Bank-wise comparison: SBI vs PNB vs Gramin Bank — processing time, margin, ground behaviour.
- KCC on animal husbandry / fisheries (2026 expansion) — alag limit, kaise apply.
- Interest subvention ka exact math: 7% − 3% PRI = 4%, ek worked example ₹1 lakh loan par
  saal bhar ka byaj rupaye me.
- Renewal/enhancement process (3 saal baad kya hota hai).
- CIBIL ka role — kya score chahiye, score kharab ho to kya options.
- Jansamarth portal route vs bank branch route comparison.

**Keywords to add:** `kcc loan kaise le 2026`, `kisan credit card interest rate 2026`,
`kcc limit kaise badhaye`, `kcc renewal process`, `kcc pashupalan loan`, `kcc without cibil`,
`kcc apply sbi online`, `किसान क्रेडिट कार्ड ब्याज दर`.

**Sources to cite:** pmkisan.gov.in KCC section, jansamarth.in, RBI interest subvention circular,
agriwelfare.gov.in KCC saturation drive PIB release.

---

### 2. `/articles/PmKisanEkycOnline2026`
File: `components/articles/PmKisanEkycOnline2026.tsx` (~1,350 → target 2,200+)

**Problem:** FAQ heavy, body prose thin. Error-code coverage superficial.

**Add:**
- Opening as a scenario (not definition): kist ruk gayi, wajah eKYC — ek real case se shuru.
- Teeno methods deep-dive with failure modes: OTP (aur uske 6 common errors), CSC biometric
  (fingerprint fail hone par kya — buzurg kisan angle), Face Auth app (phone requirements,
  app version issues, jinka OTP nahi aata unke liye).
- NPCI/DBT seeding vs eKYC — do alag cheezein, confusion clear karo with diagram-in-words.
- State-wise camps ki news (eKYC saturation camps) — PIB/news source link.
- Error code table expand: 104, 108, demographic mismatch, "record not found" — har ek ka
  exact fix path.
- Story: ek mahila kisan jiske Aadhaar me naam mismatch tha — correction se payment tak.

**Keywords:** `pm kisan ekyc last date`, `pm kisan face authentication app`,
`pm kisan ekyc status check`, `ekyc demographic mismatch fix`, `pm kisan ekyc csc charges`,
`पीएम किसान ईकेवाईसी कैसे करें`.

**Sources:** pmkisan.gov.in eKYC portal, PM-Kisan mobile app (Play Store), UIDAI face RD notes,
PIB releases on eKYC deadlines.

---

### 3. `/articles/PmKisanMobileNumberChangeUpdate`
File: `components/articles/PmKisanMobileNumberChangeUpdate.tsx` (~1,640 → target 2,100+)

**Problem:** Sabse behtar page hai, lekin abhi bhi 2000 se neeche; kuch sections shallow.

**Add:**
- Aadhaar me mobile update ka full sub-flow (kyunki PM Kisan OTP Aadhaar-linked number par
  jaata hai) — Aadhaar Seva Kendra appointment, ₹50 fee, timeline.
- Story: purana SIM band + doosre state me migration wale kisan ka case.
- IVR/helpline experience section — 155261 par call karne par actually kya hota hai.
- Table: kaunsa data kahan update hota hai (PM Kisan portal vs Aadhaar vs bank vs NPCI).
- Naye number par OTP aane ke baad verification steps + kitne din me reflect hota hai.

**Keywords:** `pm kisan me mobile number kaise jode`, `aadhaar mobile number update`,
`pm kisan otp nahi aa raha`, `pm kisan helpline number`, `पीएम किसान मोबाइल नंबर चेंज`.

**Sources:** pmkisan.gov.in Farmer Corner, UIDAI mobile update page, CSC official.

---

### 4. `/articles/PmKisanVillageWiseListPdfDownload`
File: `components/articles/PmKisanVillageWiseListPdfDownload.tsx` (~770 → target 2,200+; sabse thin article)

**Add:**
- Step-by-step with exact dropdown labels (State → District → Sub-district → Block → Village)
  aur har step par kya galti hoti hai.
- Beneficiary list vs beneficiary status vs village dashboard — teeno ka farak.
- State portal walkthroughs: UP (upagripardarshi), Bihar (dbtagriculture), MP — 3 mini-guides.
- "Naam list me hai par paisa nahi aaya" branch — FTO, payment failure reasons.
- Story: gram panchayat me list print karke lagane wala sarpanch / CSC operator angle.
- PDF troubleshooting expand: mobile me open na hona, server busy hours (kab try karein),
  print settings.
- Data privacy note — list me kya public hota hai, kya nahi.

**Keywords:** `pm kisan list 2026 village wise`, `pm kisan beneficiary list kaise dekhe`,
`pm kisan gram panchayat list`, `pm kisan list me naam kaise check kare`,
`पीएम किसान गांव की लिस्ट 2026`.

**Sources:** pmkisan.gov.in Beneficiary List tool, state DBT agriculture portals.

---

### 5. `/articles/drip-sprinkler-irrigation-subsidy`
File: `components/articles/kisanguides/DripSprinkler.tsx` (~1,000 → target 2,200+)

**Add:**
- PMKSY "Per Drop More Crop" scheme structure — centre:state share, SC/ST/small-farmer
  extra subsidy % (verify from pmksy.gov.in before writing — no invented percentages).
- State-wise application portals: MP (e-krishi yantra), Maharashtra (mahadbt), UP, Rajasthan
  (rajkisan) — kaunse state me kitni extra top-up subsidy (sirf sourced values).
- Cost economics: 1 acre drip system ki real cost range, subsidy ke baad out-of-pocket,
  payback period paani/bijli/yield savings se — worked example ek crop (e.g. kela ya kapas) par.
- Empanelled vendor system — kaise verify karein vendor genuine hai, common scam pattern.
- Story: ek kisan jisne drip lagwaya — pehle saal ka actual experience, clogging/maintenance reality.
- Inspection & subsidy release timeline — application ke baad kya hota hai.

**Keywords:** `pmksy drip irrigation subsidy 2026`, `drip irrigation cost per acre`,
`sprinkler subsidy kaise le`, `mahadbt drip subsidy`, `rajkisan drip sinchai yojana`,
`ड्रिप सिंचाई सब्सिडी 2026`.

**Sources:** pmksy.gov.in, state DBT portals, PIB micro-irrigation fund releases, NABARD.

---

## B. Maandhan article pages (3)

### 6. `/maandhan/pm-kisan-maandhan-pension-card-download`
File: `components/articles/maandhan/kisan-pension-card-download.tsx` (~2,090 → uniqueness + depth pass, target 2,300+)

**Problem:** Word count theek hai, lekin index nahi ho raha — differentiation aur freshness chahiye.

**Add/Change:**
- Fresh 2026 update section top ke paas (portal UI change / LIC-CSC process update — sourced).
- KPAN (Kisan Pension Account Number) recover karne ka detailed flow jab slip khoyi ho.
- Story: ek beneficiary ka card download experience CSC par — kya document maanga, kitna time.
- Cross-scheme note: PMKMY card vs APY PRAN card confusion clear karo.
- Style pass: is file ke paragraphs uniform lag rahe hon to rhythm todo (see global rules).

**Keywords:** `kpan number kaise nikale`, `maandhan pension card kho gaya`,
`pmkmy card download csc`, `मानधन पेंशन कार्ड डाउनलोड`.

**Sources:** maandhan.in, LIC PMKMY page, CSC.

---

### 7. `/maandhan/pm-kisan-maandhan-registration-2026`
File: `components/articles/maandhan/PmKisanMaandhanRegistration2026.tsx` (~800 → target 2,200+)

**Add:**
- Full contribution chart context: 18 saal = ₹55/mahina se 40 saal = ₹200/mahina — chart ke
  aage worked lifetime math (total contribution vs total pension after 60) — sourced from maandhan.in.
- PM Kisan installment se auto-contribution option (agar PM Kisan beneficiary hai) — kaise opt karein.
- Exit rules & family pension: beech me chhodne par kya milta hai (sourced, ye log sabse zyada
  poochte hain).
- Story: ek 35-saal ke kisan ka registration + pehla auto-debit experience.
- Self-enrollment (maandhan.in par khud) vs CSC enrollment — dono ka step-by-step, screenshots
  reference existing images se.
- Eligibility traps: income tax payer, EPFO/NPS/ESIC member, exempted categories.

**Keywords:** `pm kisan maandhan yojana online apply`, `maandhan contribution chart`,
`pmkmy exit rules`, `kisan pension yojana 55 rupees`, `मानधन योजना रजिस्ट्रेशन 2026`.

**Sources:** maandhan.in, PIB PMKMY enrolment releases, LIC.

---

### 8. `/maandhan/pm-kisan-maandhan-status-check-online`
File: `components/articles/maandhan/PmKisanMaandhanStatusCheckOnline.tsx` (~1,060 → target 2,200+)

**Add:**
- Login methods deep-dive: KPAN vs mobile number login, OTP issues.
- Contribution history padhna sikhaao: dashboard ke har column ka matlab.
- Missed payment / auto-debit fail hone par status me kya dikhta hai + regularization link
  to existing article `AutoDebitFailRegularization`.
- Passbook/statement download flow.
- Story: ek kisan jiska auto-debit 3 mahine fail raha — status me kaise pakda, kaise theek kiya.
- Helpline/grievance escalation path with real contact details (sourced from maandhan.in).

**Keywords:** `maandhan status check kaise kare`, `pmkmy balance check`,
`maandhan contribution history`, `kisan pension status`, `मानधन योजना स्टेटस चेक`.

**Sources:** maandhan.in login portal, LIC PMKMY.

---

## C. Category pages (3) — thin listing shells

Files: `app/articles/category/[category]/page.tsx` (shared template) — in 3 categories ke liye
per-category **intro content blocks** add karne hain (render category ke hisaab se):

### 9. `/articles/category/loan`
- 300–500 word unique intro: kisan credit landscape 2026 — KCC, tractor loan, Jansamarth;
  kaunsa loan kis situation me; is category ke articles ka curated "kahan se shuru karein" path.
### 10. `/articles/category/pashupalan`
- 300–500 word unique intro: NLM subsidy structure, bakri/murgi/dairy loan ka quick decision
  tree, category articles ka guided path.
### 11. `/articles/category/agri-business`
- 300–500 word unique intro: agri-business subsidy ecosystem (PM-FME, NHB, CHC), kis business
  me kitna investment/subsidy, guided path.

**Implementation:** `CATEGORY_DATA` me ek `intro: ReactNode`/markdown field add karo ya ek
`CategoryIntro` component per category — listing ke upar render ho. Keywords already
`CATEGORY_DATA` me hain; intro me naturally use karo. Uniform template language teeno me mat
dohrao — teeno intro alag structure ke hon.

---

## D. Hub pages (2) — near-empty shells

### 12. `/maandhan` (`app/maandhan/page.tsx`, ~50 words)
- 500–800 word hub content: scheme overview (₹3000/month pension after 60), eligibility snapshot,
  contribution chart summary table (text, no new images), "pehli baar aaye hain to is order me
  padhein" guided path linking all maandhan articles, latest enrolment numbers (PIB-sourced),
  mini-FAQ (3–4 sawal jo articles me covered nahi).
### 13. `/rajya-yojana` (`app/rajya-yojana/page.tsx`, ~57 words)
- 500–800 word hub content: state schemes ka landscape — centre vs state yojana farak,
  kaise pata karein aapke state me kya chal raha hai, state-wise portal directory (sourced),
  guided path to existing rajya-yojana articles.

---

## Workflow (per user)

1. ✅ Ye plan file repo me commit hogi (is PR me sirf ye file — content changes nahi).
2. User ek-ek karke file/URL bata kar rewrite karwayega ("phr ma ek ek file Sahi se banaya
   karonga or url") — har rewrite apni alag branch/PR me.
3. Har rewrite ke baad: local build check, phir merge user karega (no auto-merge),
   phir GSC me URL Inspection → Request Indexing.
4. Images/paths kabhi change nahi karne.

## Re-check list (after each page ships)
- Browser me page open karke: word count, broken internal links, images render.
- GSC URL Inspection par "Request Indexing" trigger karein.
- 2–3 hafte baad Coverage report re-check.
