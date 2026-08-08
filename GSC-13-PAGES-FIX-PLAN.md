# GSC "Discovered – currently not indexed" Fix Plan — 13 Pages

**Rev 2 (this revision).** Source: GSC Coverage drilldown export, issue = **Discovered – currently not indexed**.

Goal per page: **YMYL-grade, E-E-A-T backed, genuinely helpful Hinglish content** jo Google
crawl karke index kare aur AdSense policy (specially "Scaled content abuse" aur
"Low value content") clear kare. **Images aur image paths unchanged rehte hain.**

Yeh planning file hai — code change nahi. Har page ki apni entry hai: current problem →
kya add hona hai → keywords → source links. User ek-ek page ka rewrite alag branch/PR me
karwayega. **Koi auto-merge, koi auto-publish nahi.**

---

## 0. Rev 2 me kya badla (padhna zaroori hai)

Rev 1 me ek rule tha: *"har article me 1–2 real/realistic ground-level anecdote (naam +
district level detail, e.g. 'Sitapur ke Ramesh Yadav ko...')"*.

**Ye rule delete kar diya gaya hai.** Wajah:

- Aisi "realistic" story actually **fabricated** hoti hai. Ye Google ki
  spam policy (`scaled content abuse`, `misleading content`) aur AdSense
  publisher policy dono ke against hai, aur YMYL topic (paisa + government
  benefit) me trust ko sabse zyada nuksan pahunchati hai.
- Fake anecdote se index bhi nahi hota — jo cheez index karati hai wo hai
  **verifiable, first-hand, source-linked information**.

**Naya replacement rule → "Evidence block" (neeche §2 dekho).** Story ki jagah ab
process-level, verifiable observation aati hai: portal par kya actually dikha, kis date
par, kaunse error par kya hua, kaunsa official document kya kehta hai.

**Rev 1 ke jo cheezein ban ho gayi hain:**

| Ban | Kyun |
|---|---|
| Naam + district wale invented kisan cases | fabricated experience = policy violation |
| "target 2,200+ words" type word quota | padding paida karta hai; AdSense low-value flag |
| "har article me 4–6 internal links" jaisa fixed quota | unnatural link pattern |
| Paragraph rhythm ka artificial mixing (1-line/3-line/6-line ka formula) | ye bhi ek AI pattern hai, bas doosri shakal me |
| Invented statistic, invented subsidy %, invented timeline | YMYL me sabse bada risk |

**Remediation (naya kaam, Rev 2 me add):**
`components/articles/KisanCreditCardOnlineApply2026.tsx` me Rev 1 ke tehat ek invented case
add ho chuka hai ("Sitapur (UP) ke ek 2-acre wale kisan ka case", ~line 213 par
"real journey / timeline" section). Isko **process timeline** me convert karna hai —
naam/district/persona hataao, "Din 1 → Din 16" ka bank process retain karo aur usko
official source (bank KCC policy / agriwelfare KCC circular) se attribute karo.
Ye page-1 rewrite ke saath hi thik hoga. Details §A.1 me.

---

## 1. Global content rules (apply to EVERY page)

1. **Sirf verifiable claims.** Har number (subsidy %, pension amount, interest rate, fee,
   deadline, contribution slab) ke saath ek official source link. Agar source nahi mila →
   number likho hi nahi. "Approx", "around", "lagbhag" se guess ko chhupana bhi allowed nahi.
2. **Koi fabricated person, story, testimonial, screenshot-claim ya case study nahi.**
   Experience signal sirf usi cheez se aayega jo actually verify ki gayi ho (§2).
3. **Length demand se nahi, coverage se aayegi.** Rule: *ek reader ka sawal poora resolve ho —
   entry condition, exact steps, failure modes, escalation path.* Jo page us test me pass ho
   gaya, use aur lamba karne ki zaroorat nahi. Jo fail ho raha hai, wahan missing
   sub-topic add karo (§A–§D me per page list hai) — filler nahi.
4. **Freshness honestly.** `modifiedTime` sirf tab badlo jab content actually change ho.
   Jhoothi date = trust loss + GSC me "dateModified" mismatch.
5. **Uncertainty likho.** "Ye process UP me X hai, Bihar portal me alag flow hai — apne state
   portal par confirm karein." YMYL me limitation batana E-E-A-T ka plus point hai, minus nahi.
6. **Images/paths unchanged.** Naya `<Image>` nahi, existing `src` touch nahi. Alt text
   improve kar sakte hain.
7. **Internal links tabhi jab contextually zaroori** — jahan reader ka next logical sawal
   doosre article me answer ho. Existing slugs only. Koi minimum quota nahi.
8. **External links:** `EXTERNAL_LINK_PROPS` use karo (already `lib/site-config.ts` me:
   `target=_blank`, `rel="noopener noreferrer nofollow"`).
9. **Har page par disclaimer visible** — `Disclaimer()` from `components/ArticleShared.tsx`
   (DISCLAIMER_TEXT already saaf likhta hai ki site government-affiliated nahi hai). YMYL
   ke liye ye non-negotiable hai.

---

## 2. Evidence block (story ka replacement)

Har page par kam se kam ek block jo **actually verify ki gayi** cheez batata hai. Teen
allowed shapes — jo bhi honestly available ho:

**Shape A — Portal walkthrough (verified):**
> "Portal par eKYC tab kholne par teen option dikhte hain: OTP, Face Auth, CSC.
> OTP option Aadhaar-linked number par jaata hai — agar number purana hai to yahan
> koi error message nahi aata, OTP simply nahi pahunchta. Verified on `pmkisan.gov.in`
> (checked <DATE>)."

Rule: sirf wahi likho jo screen par actually hai — labels, dropdown order, error text.
Date daalo. Portal UI badle to date se reader ko pata chalega.

**Shape B — Document-backed rule:**
> "Interest subvention: 7% base, 3% prompt-repayment incentive → effective 4%.
> [source: agriwelfare.gov.in / RBI circular link]"

Rule: claim + link, ek hi saans me.

**Shape C — Documented public case (attributed):**
> "PIB ke <date> release ke mutabik eKYC saturation camps X states me chalaye gaye
> [link]." — Ya kisi published news report ko naam + link ke saath cite karo.

Rule: attribution mandatory. Bina link "news me aaya tha" allowed nahi.

**Kya banned hai:** "Sitapur ke Ramesh ko 16 din me loan mila." (kaun Ramesh? kaunsa bank?
verify kaise hoga? → delete.)

---

## 3. E-E-A-T layer (site-wide, 13 pages ke bahar bhi asar)

Ye 13 content pages ke saath ye trust infrastructure bhi durust hona chahiye, warna YMYL
pages akele index/monetize nahi honge.

| Item | Current state (repo) | Action |
|---|---|---|
| Author identity | `AUTHOR_NAME = 'KisanStatus Team'`, `AUTHOR_BIO` generic (`lib/site-config.ts`) | Site par jo real author/editor content aur bio maujood hai use `site-config` + `AuthorBox` me daalo. Schema me `Organization` ki jagah named `Person` author (with `/about#author` @id) tab hi use karo jab real person publicly named ho. |
| AuthorBox | `components/ArticleShared.tsx` → sirf 🌾 emoji + "PM Kisan Experts & Annadata Advocates" | Real credential line + "Last updated" ke saath "kis cheez par kaam kiya" — vague expert claim hataao. |
| Reviewed-by | absent | Optional but strong for YMYL: `reviewedBy` field, sirf agar real reviewer ho. |
| About page | `app/about/page.tsx` — solid; `STATS` me "12 Cr+ Kisan Labhanvit" scheme ka number hai, site ka nahi | Un stats ko clearly scheme-level label + source link do, ya hata do. Ambiguity AdSense review me misleading lagti hai. |
| Contact | `SUPPORT_EMAIL`, `HELPLINE`, `OFFICIAL_EMAIL` present | `app/contact/page.tsx` par real reachable channel + response expectation. Helpline numbers ko clearly "official govt helpline, humara nahi" label karo. |
| Policy pages | privacy-policy, terms, disclaimer sab exist | Editorial / correction policy add karo: content kaise verify hota hai, correction kaise request karein. YMYL trust signal + AdSense friendly. |
| Ads | `public/ads.txt` exists | Content approve hone tak ad density low rakho; thin pages par ads = "low value content" flag. |

---

## 4. GSC indexing side (content se alag, parallel)

"Discovered – currently not indexed" ka matlab: Google ko URL pata hai, crawl budget /
perceived value ki wajah se crawl nahi kiya. Content fix zaroori hai, lekin ye technical
checks bhi ek baar verify karo:

1. `app/sitemap.ts` — ye 13 URLs sitemap me hain? `lastmod` real hai?
2. `app/robots.ts` — koi accidental disallow nahi.
3. Canonical — har page ka self-canonical (article template `alternates.canonical` set karta hai; 13 URLs par spot-check).
4. Internal discovery — hub/category pages se in 13 URLs tak ek natural path ho (orphan URL discovered-not-indexed me hi atka rehta hai). §C aur §D ka kaam yahi solve karta hai.
5. Sitemap me low-value/duplicate URLs ki bheed ho to crawl budget bat jaata hai — sitemap size ek baar review karo.
6. Har rewrite merge hone ke baad: GSC → URL Inspection → **Request Indexing** (manual, user karega).

---

## 5. Measured page size + priority order

Rev 1 ke word-count andaaze stale the. Neeche actual measured prose (repo `main`,
JSX text nodes + long string literals — FAQ text included, so real visible prose isse
thoda kam hai; ranking ke liye kaafi accurate):

| Page / file | Measured prose | Verdict |
|---|---|---|
| `app/rajya-yojana/page.tsx` | **56** | empty shell — highest upside |
| `app/maandhan/page.tsx` | **75** | empty shell — highest upside |
| `app/articles/category/[category]/page.tsx` (shared, 3 categories) | **748** total template | per-category intro absent |
| `components/articles/kisanguides/DripSprinkler.tsx` | **1,064** | thinnest real article |
| `.../maandhan/PmKisanMaandhanRegistration2026.tsx` | 2,198 | mid |
| `.../maandhan/PmKisanMaandhanStatusCheckOnline.tsx` | 2,403 | mid |
| `components/articles/PmKisanVillageWiseListPdfDownload.tsx` | 2,490 | mid (Rev 1 ne isko "sabse thin" kaha tha — **galat**) |
| `components/articles/PmKisanEkycOnline2026.tsx` | 3,725 | length fine, depth/differentiation ka issue |
| `components/articles/PmKisanMobileNumberChangeUpdate.tsx` | 4,198 | length fine |
| `.../maandhan/kisan-pension-card-download.tsx` | 5,369 | length fine |
| `components/articles/KisanCreditCardOnlineApply2026.tsx` | 5,936 | longest — aur yahin invented case hai |

**Isse do saaf nateeje:**

1. **Length in 13 pages ka main problem nahi hai.** 8 of 11 files pehle se substantial hain
   aur phir bhi "Discovered – currently not indexed" me atke hain. Matlab bottleneck
   **crawl-value + discovery** hai, not word count. Isliye Rev 2 me word quotas hataye gaye —
   unko chase karna galat direction thi.
2. **Sabse zyada return** un 5 shells se aayega jo actually khaali hain
   (`/rajya-yojana` 56 words, `/maandhan` 75 words, 3 category intros) — kyunki wahi pages
   baaki 8 articles ke liye internal discovery path bhi bante hain (§4.4 orphan-URL issue).

**Recommended order:**

| # | Kaam | Kyun pehle | Status |
|---|---|---|---|
| 1 | §D hub pages (`/maandhan`, `/rajya-yojana`) | 56/75 words = clear low-value; ye theek hone se doosre pages ko crawl path milta hai | ✅ done (`f53ffcd`, `8590556`) |
| 2 | §C category intros (loan, pashupalan, agri-business) | same discovery logic, ek shared template edit | ✅ done (`dcba0aa`) |
| 3 | §A.1 KCC invented-case remediation | policy risk, live hai — content add nahi, correction hai | ✅ done (`b12415a`) |
| 4 | §A.5 DripSprinkler (1,064) | thinnest article + paisa-decision page | ✅ done (`5d90006`) |
| 5 | §B.2 Maandhan Registration (2,198) | exit rules/family pension = high-demand gap | ⬜ next |
| 6 | Baaki (B.3, A.4, A.2, A.3, B.1) | depth + differentiation pass, length nahi | ⬜ pending |

---

## A. Article pages (5)

### A.1 `/articles/KisanCreditCardOnlineApply2026`
File: `components/articles/KisanCreditCardOnlineApply2026.tsx` (659 lines, **5,936 prose words** — 13 me sabse lamba)

**Status:** Rev 1 me expand ho chuka (commit `f1eaa26`, PR #128), **lekin Rev 2 remediation pending.**
Note: ye page already sabse lamba hai aur phir bhi index nahi hua — proof ki length problem nahi thi.

**Remediation (must):**
- Invented case remove karo: "Sitapur (UP) ke ek 2-acre wale kisan" wala framing (~line 213,
  "Din 1 → Din 16" timeline section). Timeline **structure rakho**, persona hataao →
  heading ko process timeline banao ("Application se disbursal tak: bank ke andar kya hota hai"),
  aur har step ko bank/govt process document se attribute karo. Jo din-count verify na ho
  wo "bank ke SLA par depend karta hai" likho, fixed number nahi.
- Baaki claims audit: bank comparison table (SBI/PNB/RRB/Cooperative) me jo bhi processing
  time / margin numbers hain — har cell ke peeche source hona chahiye. Unsourced cell →
  "bank se confirm karein" likho.
- Interest math (7% − 3% = 4%) ka source link verify ho (agriwelfare / RBI subvention circular).

**Add (jo missing hai):**
- CIBIL section me actual documented rule vs bank discretion ka farak.
- Jansamarth route vs branch route — dono ke actual required documents.

**Keywords:** `kcc loan kaise le 2026`, `kisan credit card interest rate 2026`,
`kcc limit kaise badhaye`, `kcc renewal process`, `kcc pashupalan loan`, `kcc apply sbi online`,
`किसान क्रेडिट कार्ड ब्याज दर`.

**Sources:** pmkisan.gov.in KCC section, jansamarth.in, RBI interest subvention circular,
agriwelfare.gov.in KCC saturation drive PIB release.

---

### A.2 `/articles/PmKisanEkycOnline2026`
File: `components/articles/PmKisanEkycOnline2026.tsx`

**Problem:** FAQ-heavy, body prose thin, error-code coverage superficial.

**Add:**
- Opening: definition se nahi — us situation se jisme reader aata hai (kist ruki hui hai,
  wajah eKYC pending). Koi invented person nahi, sirf situation.
- Teeno methods, har ek ka failure mode: OTP (Aadhaar-linked number purana hone par silent
  fail), CSC biometric (fingerprint fail — buzurg kisan ke liye alternative), Face Auth app
  (Android version / app version / lighting requirements).
- **eKYC vs NPCI/DBT Aadhaar seeding** — do alag cheezein, poora confusion clear karo.
  Ye page ka sabse valuable differentiator hai.
- Error handling table: 104, 108, demographic mismatch, "record not found" — har ek ka
  exact next step. Jo error ka official meaning documented nahi hai, wahan likho ki
  ye field-observed hai aur CSC/helpline se confirm karna hoga.
- Evidence block: Shape A — portal ke eKYC tab par actual options + labels, checked-on date.
- Escalation: helpline + state nodal officer route (existing article link).

**Keywords:** `pm kisan ekyc last date`, `pm kisan face authentication app`,
`pm kisan ekyc status check`, `ekyc demographic mismatch fix`, `pm kisan ekyc csc charges`,
`पीएम किसान ईकेवाईसी कैसे करें`.

**Sources:** pmkisan.gov.in eKYC portal, PM-Kisan mobile app listing, UIDAI Face RD docs,
PIB releases on eKYC deadlines.

---

### A.3 `/articles/PmKisanMobileNumberChangeUpdate`
File: `components/articles/PmKisanMobileNumberChangeUpdate.tsx`

**Problem:** In 13 me sabse healthy page, par kuch sections shallow.

**Add:**
- Aadhaar me mobile update ka sub-flow (kyunki OTP Aadhaar-linked number par jaata hai):
  Aadhaar Seva Kendra appointment, official fee (UIDAI page se exact figure), reflect hone
  ka time. Fee/time UIDAI source se — apne se number nahi.
- Migration/purana SIM band — **situation** ke roop me (persona nahi): kis case me portal se
  update kaafi hai aur kis case me Aadhaar update pehle chahiye.
- Table: kaunsa data kahan update hota hai — PM Kisan portal / Aadhaar / bank / NPCI. Ye table
  is page ka core value hai.
- Helpline reality: 155261 par kya route milta hai, kya expect karein (Shape A evidence, dated).
- Naye number par OTP verify hone ke baad kitne din me reflect hota hai — sirf agar sourced.

**Keywords:** `pm kisan me mobile number kaise jode`, `aadhaar mobile number update`,
`pm kisan otp nahi aa raha`, `pm kisan helpline number`, `पीएम किसान मोबाइल नंबर चेंज`.

**Sources:** pmkisan.gov.in Farmer Corner, UIDAI mobile update page, CSC official.

---

### A.4 `/articles/PmKisanVillageWiseListPdfDownload`
File: `components/articles/PmKisanVillageWiseListPdfDownload.tsx` — **2,490 prose words.**
(Rev 1 ne isko "~770 words, sabse thin" kaha tha — measurement se ye **galat** nikla; ab ye
mid-tier hai aur isko length ki nahi, differentiation ki zaroorat hai.)

**Add:**
- Exact dropdown chain with real labels (State → District → Sub-district → Block → Village)
  aur har step ka common galti point. Labels portal se verify karke likho (Shape A + date).
- **Beneficiary list vs beneficiary status vs village dashboard** — teeno ka farak. Reader
  yahi confuse hota hai; ye page ka differentiator.
- State portal mini-walkthroughs: UP (upagripardarshi), Bihar (dbtagriculture), MP — sirf
  wo steps jo verify ho jaayein.
- Branch: "naam list me hai par paisa nahi aaya" → FTO generated ka matlab, payment failure
  reasons (existing FTO article se link).
- PDF troubleshooting: mobile me open na hona, server slow hours, print settings — jo
  reproducible ho.
- Data privacy note: list me kya public hota hai — ye YMYL/AdSense dono ke liye achha signal.

**Keywords:** `pm kisan list 2026 village wise`, `pm kisan beneficiary list kaise dekhe`,
`pm kisan gram panchayat list`, `pm kisan list me naam kaise check kare`,
`पीएम किसान गांव की लिस्ट 2026`.

**Sources:** pmkisan.gov.in Beneficiary List tool, state DBT agriculture portals.

---

### A.5 `/articles/drip-sprinkler-irrigation-subsidy` — ✅ DONE (`5d90006`)
File: `components/articles/kisanguides/DripSprinkler.tsx` — **1,064 prose words, articles me sabse thin.**

**Kya hua (commit `5d90006`):** ye page length ka case nahi nikla — **claim-accuracy** ka nikla.
13 unsourced numeric claims mile, sab hataye ya source-linked kiye gaye.

Corrections:
- `75% Tak Subsidy` headline aur card title `Drip Irrigation Subsidy 2026: 75% Off`
  → asli PDMC rates: **55% small & marginal, 45% other farmers** (DA&FW statement, Feb 2024).
- Invented slabs (`55-75%`, `45-55%`, `hilly/NE 75-90%`) → official structure:
  55/45 of **indicative unit cost**, NE & Himalayan states ko **25% higher unit cost**,
  low-penetration states ko **15% higher**. Saaf likha gaya ki percentage nahi badalta — unit cost badalta hai.
- Invented per-acre cost table (₹25k-50k drip / ₹15k-30k sprinkler) aur `60% maan kar` +
  `ROI 1-2 saal` wala worked example hataya → 5-step calculation method jisme reader
  apne state ki notified unit cost daale.
- `15-30 din me subsidy transfer` SLA hataya (unsourced).
- PM-KUSUM `60% se 90%` → Component B: **30% central CFA** (special areas 50%), state share
  typically ≥30%, farmer share 10-40%, benchmark ya tender cost jo kam ho.
- `khaad ki 25-35% bachat` aur fixed `har 15-30 din acid flushing` hataya → manufacturer manual.
- Paani bachat ab AICRP-type field studies se attributed (30-70% saving, 26-45% yield increase).

Add (sourced):
- PDMC 2022-23 se **RKVY/PM-RKVY** ke tahat — isi wajah se purane articles/forms conflict karte hain.
- 5 hectare per-beneficiary cap; usi zameen par dobara 7 saal baad.
- State top-up khud verify karne ka tarika (cost norms list + top-up order + empanelled vendor list).
- MIF under NABARD, interest subvention 2% (Union Cabinet, Oct 2024); 102.56 lakh ha to 22 Jul 2025.
- Explicit "is page ki limitations" block (§1.5).
- Shared `<Disclaimer />` (§1.9) + `EXTERNAL_LINK_PROPS` (§1.8).

Images aur paanch `src` paths unchanged; sirf alt text improve hua.
Verified: `tsc --noEmit` clean, `eslint` clean. (`next build` is environment me nahi chal
sakta — Turbopack ka PostCSS worker clean `main` par bhi fail hota hai; CI/Vercel par verify karein.)

**Original plan (reference):**

**Add — har number sourced, warna skip:**
- PMKSY "Per Drop More Crop" structure: centre:state share, SC/ST/small-farmer extra
  subsidy %. **pmksy.gov.in / state guideline se verify karke hi likhna. Invented % zero
  tolerance** — ye page paisa-decision page hai.
- State portals: MP (e-krishi yantra), Maharashtra (mahadbt), UP, Rajasthan (rajkisan) —
  top-up subsidy sirf sourced values.
- Cost economics: 1 acre drip ki cost **range** with source, subsidy ke baad out-of-pocket,
  payback ka worked example. Assumptions clearly label karo ("ye example X cost aur Y yield
  assume karta hai") — assumption ko fact ki tarah pesh nahi karna.
- Empanelled vendor verification — official empanelment list kahan milti hai, kya check karein.
- Maintenance reality: clogging, filter cleaning, drip life — agronomy source ya manufacturer
  spec se, invented farmer experience se nahi.
- Inspection & subsidy release sequence.

**Keywords:** `pmksy drip irrigation subsidy 2026`, `drip irrigation cost per acre`,
`sprinkler subsidy kaise le`, `mahadbt drip subsidy`, `rajkisan drip sinchai yojana`,
`ड्रिप सिंचाई सब्सिडी 2026`.

**Sources:** pmksy.gov.in, state DBT portals, PIB micro-irrigation fund releases, NABARD.

---

## B. Maandhan pages (3)

### B.1 `/maandhan/pm-kisan-maandhan-pension-card-download`
File: `components/articles/maandhan/kisan-pension-card-download.tsx`

**Problem:** Length theek, phir bhi index nahi — differentiation missing.

**Add/Change:**
- KPAN (Kisan Pension Account Number) recover karne ka flow jab slip kho gayi ho — is page ka
  strongest unique angle.
- PMKMY card vs APY PRAN card confusion clear karo.
- Card download ke liye CSC par actually kya document maanga jaata hai — sirf verified list.
- 2026 portal/process update sirf tab likho jab maandhan.in ya LIC page se confirm ho.
- Rev 1 ka "story" directive drop; iski jagah Shape A portal walkthrough (dated).

**Keywords:** `kpan number kaise nikale`, `maandhan pension card kho gaya`,
`pmkmy card download csc`, `मानधन पेंशन कार्ड डाउनलोड`.

**Sources:** maandhan.in, LIC PMKMY page, CSC official.

---

### B.2 `/maandhan/pm-kisan-maandhan-registration-2026`
File: `components/articles/maandhan/PmKisanMaandhanRegistration2026.tsx` — **2,198 prose words.**

**Add:**
- Contribution chart ka context: entry age wise monthly contribution (exact slabs
  maandhan.in se), + lifetime math (total contribution vs pension after 60) — calculation
  dikhao aur inputs cite karo.
- PM Kisan installment se auto-contribution option — kaise opt karein, kya condition.
- **Exit rules & family pension** — beech me chhodne par kya milta hai. Sabse zyada poocha
  jaane wala sawal, aur sourced answer se hi index-worthy banega.
- Eligibility traps: income tax payer, EPFO/NPS/ESIC member, exempted categories.
- Self-enrollment (maandhan.in) vs CSC enrollment — dono ka step-by-step, existing images
  reference karo (naye images nahi).

**Keywords:** `pm kisan maandhan yojana online apply`, `maandhan contribution chart`,
`pmkmy exit rules`, `kisan pension yojana 55 rupees`, `मानधन योजना रजिस्ट्रेशन 2026`.

**Sources:** maandhan.in, PIB PMKMY enrolment releases, LIC.

---

### B.3 `/maandhan/pm-kisan-maandhan-status-check-online`
File: `components/articles/maandhan/PmKisanMaandhanStatusCheckOnline.tsx`

**Add:**
- Login methods: KPAN vs mobile number, OTP failure modes.
- Contribution history padhna sikhaao — dashboard ke har column ka matlab. Ye page ka core.
- Auto-debit fail hone par status me kya dikhta hai → link existing
  `AutoDebitFailRegularization` article.
- Passbook/statement download flow.
- Grievance escalation path — contact details maandhan.in se, invented nahi.
- Evidence: Shape A dated portal walkthrough.

**Keywords:** `maandhan status check kaise kare`, `pmkmy balance check`,
`maandhan contribution history`, `kisan pension status`, `मानधन योजना स्टेटस चेक`.

**Sources:** maandhan.in login portal, LIC PMKMY.

---

## C. Category pages (3) — thin listing shells

Shared template: `app/articles/category/[category]/page.tsx`. Per-category **intro block**
add karna hai (`CATEGORY_DATA` me `intro` field, ya ek `CategoryIntro` component,
listing ke upar render).

Intro ka kaam **navigation value** hai, word count nahi: reader ko batao is category me
kaunsa article kis situation ke liye hai. Teeno intro ka structure alag ho, template
language dohrao mat.

- **C.1 `/articles/category/loan`** — kisan credit options ka map: KCC vs tractor loan vs
  Jansamarth; kaunsa kis situation me; "kahan se shuru karein" path.
- **C.2 `/articles/category/pashupalan`** — NLM subsidy structure (sourced), bakri/murgi/dairy
  ka decision path, category articles ka guided order.
- **C.3 `/articles/category/agri-business`** — PM-FME / NHB / CHC ecosystem, kis business me
  kitna investment aur subsidy (sourced), guided path.

Keywords already `CATEGORY_DATA` me hain — naturally use karo, stuff mat karo.

---

## D. Hub pages (2) — near-empty shells

- **D.1 `/maandhan`** (`app/maandhan/page.tsx`, **measured 75 words**) — scheme overview (pension amount +
  eligibility, maandhan.in se), contribution summary table (text only, no new images),
  "pehli baar aaye hain to is order me padhein" guided path linking sabhi maandhan articles,
  enrolment numbers **sirf PIB/official source ke saath**, 3–4 FAQ jo articles me cover nahi hain.
- **D.2 `/rajya-yojana`** (`app/rajya-yojana/page.tsx`, **measured 56 words**) — centre vs state yojana ka
  farak, apne state me kya chal raha hai ye kaise pata karein, state portal directory
  (verified links), guided path to existing rajya-yojana articles.

Dono hub pages internal discovery bhi theek karte hain — §4.4 ka orphan-URL problem inhi se
solve hota hai.

---

## Workflow (per user)

1. Yeh plan file repo me commit hogi (is PR me sirf ye file — content changes nahi).
2. User ek-ek file/URL bata kar rewrite karwayega — har rewrite apni alag branch/PR me.
3. Har rewrite ke baad: local build check → **user merge karega (no auto-merge)** →
   GSC me URL Inspection → Request Indexing.
4. Images/paths kabhi change nahi karne.
5. `modifiedTime` sirf real change par update.

## Per-page ship checklist

- [ ] Har number ke saath source link (ya number hata diya gaya)
- [ ] Koi invented person/story/testimonial nahi
- [ ] Evidence block present (Shape A/B/C) + date jahan applicable
- [ ] Limitations/state-variation honestly likhi
- [ ] Images aur `src` paths unchanged; alt text sensible
- [ ] Internal links contextual, existing slugs, koi quota-filling nahi
- [ ] `Disclaimer()` render ho raha hai
- [ ] Reader ka core sawal end-to-end resolve hota hai (entry → steps → failure → escalation)
- [ ] Build pass; browser me page open karke internal links + images verify
- [ ] GSC URL Inspection → Request Indexing (manual)
- [ ] 2–3 hafte baad Coverage report re-check
