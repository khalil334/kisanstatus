# Article Rewrite Prompts — Har Article Ka Apna Alag Prompt

Companion to [`content-audit-red-flags.md`](./content-audit-red-flags.md). **Har flagged article ke liye ek independent, self-contained prompt** — koi shared/group prompt nahi. Pehle GLOBAL RULES padho (ye har rewrite par lagti hain), phir apne article ka prompt copy karke as-is use karo.

---

## GLOBAL RULES (har article par lagu — non-negotiable)

### 0. Hard constraints
- **URLs, slugs, internal links, image paths — bilkul UNCHANGED.** Kisi `href`, `src`, route, canonical, ya image filename ko mat chhedo. Content badlega, addresses nahi.
- **Har article minimum 2,000+ prose words** — lekin content se, padding se nahi. Agar honest content 2,600 words ka banta hai to wahi likho; filler daal kar 2,000 poora karna FAIL hai.
- **Zero copy-paste.** Kisi doosre article se, kisi website se, ya purane version se paragraphs utha kar mat chipkao. Har line is article ke liye likhi gayi ho.
- **Sirf real, verify-ki-hui information.** Fees, dates, amounts, portal steps — official source (pmkisan.gov.in, scheme guidelines PDF, RBI/NABARD circular) se confirm karke hi likho, aur source link do. Jo confirm nahi hai, saaf likho "iski koi official date/figure nahi hai" — andaza mat chhapo. **Fabricate kuch nahi.**

### 1. Humanize — AI-jaisi writing se strictly bacho
- **Line/paragraph length vary karo.** AI ki pehchan: har paragraph 3–4 line, har sentence 15–20 words. Insaan aise nahi likhta. Kabhi ek-line ka jhatka ("Bas. Itna hi kaam hai."), kabhi 6-line ka detailed para. Lagataar 3 paragraphs same length ke = fail.
- **Uniform sentence-openers band.** Lagataar "Agar aap… / Iske baad… / Yeh bhi…" = template smell. Har section me openers alag.
- **AI-filler words/phrases delete:** "in today's digital age", "it is important to note", "overall", "moreover", "seamlessly", "comprehensive guide", "delve", "landscape", "furthermore" — aur Hinglish equivalents ("aaj ke digital yug mein", "yeh dhyan dena zaroori hai", "sampoorn jankari").
- **First-hand awaaz.** "Maine khud CSC par dekha hai ki…", "Portal 2 baje ke baad slow chalta hai" — jo genuinely common knowledge hai wahi likho; fake experience mat gadho.
- **Padhne wala kisan hai, SEO bot nahi.** Har paragraph ke baad poocho: "kya 45-saal ka kisan isse kuch naya seekhega?" Nahi — to kaat do.

### 2. Repetitive keywords — strictly avoid
- Exact-match keyword phrase sirf **4 jagah**: (1) title/h1, (2) pehle paragraph me ek baar, (3) kisi ek h2 me, (4) FAQ me ek baar. Baaki har jagah natural variant — pronoun, Hindi synonym, ya phrase todkar.
- Rewrite ke baad check: `grep -oi "<phrase>" file | wc -l` — target **≤6 total**.
- `lib/*-data.ts` ka `keywords[]` bhi: 6–9 entries me max 2 same stem se shuru. Mix: head term + long-tail sawal + Devanagari variant + related entity (portal/app/form ka naam).

### 3. Unique frame/structure — har article ka apna skeleton
- **Ek hi h2-sequence do articles me = duplicate template = fail.** Har article ka structure uske apne prompt me diya hai — wahi follow karo, kisi aur article ka nahi.
- **Semantic headings zaroori:** har section real `<h2>`/`<h3>` render kare (props-only `SH` se nahi). H2 me sawal ya specific claim, generic label nahi ("Documents" ❌ → "In 4 documents ke bina form aage nahi badhta" ✅).
- **Har article me kam se kam 1 unique module** jo kisi aur page par nahi — har prompt me specify hai.

### 4. Self-check har rewrite ke baad (pass hone tak publish nahi)
1. Prose word count ≥2,000 (padding ke bina)?
2. Target phrase count ≤6? Koi 3-word phrase ≥6× to nahi?
3. H2 skeleton kisi doosre article se match to nahi?
4. Lagataar 3 paragraphs same length ke to nahi?
5. Saare URLs/image paths byte-for-byte wahi hain jo pehle the?
6. Kam se kam 3 baatein jo site ke kisi aur page par nahi?

---

## PER-ARTICLE PROMPTS

### 🔴 Priority 1

#### 1. `components/articles/PmKisan25viKist2027.tsx`
> Ye ~1,552 words ka speculative page hai — apna FAQ maanta hai ki date kisi ko nahi pata. Ise evergreen **"PM Kisan agli kist tracker"** banao. Skeleton: (1) ab tak ki sabhi kisto ka release-history table (kist number, date, official source link) — unique module; (2) "agli kist se pehle ye 3 cheezein verify karo" (eKYC, land seeding, NPCI) with exact portal path; (3) "afwah vs official" — fake date kaise pehchane; (4) FAQ. Koi date fabricate mat karo — jo unknown hai use unknown likho. 2,000+ real words; slug/URL/images unchanged.

#### 2. `components/articles/PmKisan24viKist2026.tsx`
> "24vi kist" 35× — ≤6 karo ("is baar ki kist", "24vi", "ye installment"). Page ko **historical + troubleshooting** angle do: "24vi aayi thi [official date + source] — nahi mili? Ye 6 asli kaaran, har ek ka fix, kitne din me paisa aata hai." Reason-wise decision tree unique module. Opening kist-history se karo, verification se nahi — taaki 25vi tracker se skeleton na mile. Release date sirf pmkisan.gov.in se confirm karke likho.

#### 3. `components/articles/PmKisanVoluntarySurrenderGuide.tsx`
> ~1,888 words, skeleton 3 aur articles se 100% same, "agar eligible nahi" 8×. Naya skeleton: (1) "Surrender kise karna CHAHIYE aur kise nahi" — 5 real scenarios (income-tax payer ban gaye, sarkari naukri, double registration…); (2) portal ka exact surrender path, har screen ka naam; (3) "surrender ke baad kya hota hai" — recovery notice, dobara apply; (4) surrender vs chup rehna — consequences comparison table (unique module). 2,000+ honest words.

#### 4. `components/articles/PmKisanCscRegistrationCharges.tsx`
> Same 100%-clone skeleton group ka member. Naya angle: **"CSC par kya free, kya paid, overcharging kaise pakdo."** Skeleton: (1) official CSC rate list table with source (unique module); (2) kaunse kaam ghar se free vs CSC zaroori; (3) "CSC wala zyada maang raha hai" — complaint process + helpline; (4) receipt kyun lo. Rates sirf official CSC/scheme source se — confirm nahi to "rate state-wise vary karta hai, receipt se milao" likho. `keywords[]` me 5/6 "pm kisan" stem — dedupe.

#### 5. `components/articles/PmKisanFaceAuthenticationEkyc.tsx` — ✅ Done (2026-08-11)
> "face authentication" **52×** — pehle ise ≤6 karo ("chehre se eKYC", "FaceRD wala tarika", "ye method"). Skeleton clone hai — naya: (1) decision-first opening "OTP vs Face vs Biometric — aapke liye kaunsa"; (2) FaceRD app setup with install errors — error-message → fix table (unique module); (3) buzurg/feature-phone walon ka alternate raasta; (4) "photo match nahi ho raha" troubleshooting. Error messages real app ke hone chahiye, gadhe hue nahi.

#### 6. `components/articles/PmKisanBankAccountChangeProcess.tsx`
> "bank account" 38×, "naya account" 29× — density kaato. Page **sirf PM-Kisan (₹2000)** ke liye; pehle para me Maandhan pension walon ko `pmkmy-bank-account-change` page ka link (existing URL, mat badlo). Unique module: "NPCI seeding hui ya nahi — khud check karo" mini-walkthrough. Skeleton alag: problem-first kholo ("payment fail hua? 90% case NPCI hai"), phir process. 6/6 keywords "pm kisan" stem — dedupe.

#### 7. `components/articles/PmKisanBeneficiaryList2026.tsx`
> "kisan beneficiary list" 10× — kaato. Intent: **"list me apna naam LIVE check karo."** Skeleton: (1) portal walkthrough screen-by-screen; (2) har status ka matlab (table — unique module); (3) "naam list me nahi hai" — 4 kaaran + fix; (4) FAQ. Pehle para me `PmKisanVillageWiseListPdfDownload` ka existing link: "poore gaon ki PDF chahiye to wahan jao." Keywords 6/6 same stem — dedupe.

#### 8. `components/articles/PmKisanVillageWiseListPdfDownload.tsx`
> "village wise list" 8× — kaato. Intent: **"poore gaon ki PDF download"** (patwari/panchayat use-case). Skeleton — BeneficiaryList se bilkul alag: (1) kis kaam ke liye poore gaon ki list chahiye hoti hai; (2) download ka exact path; (3) PDF ke har column ka matlab (unique module: column-decoder table); (4) purani vs nayi list ka farq. Pehle para me BeneficiaryList page ka existing link. Keywords dedupe.

#### 9. `components/articles/PmKisanLandSeedingForm.tsx`
> "land seeding form" 30×, "land seeding" 92× — repo ka worst stuffing. Phrase ≤6; variants: "ye form", "zameen ka record jodna", "seeding". Unique module: **sample bhara hua form** — existing image assets use karo (paths unchanged), callouts se batao kaunse box me kya. Plus "form reject hone ke 5 kaaran jo patwari khud batata hai." Skeleton: rejection-risk-first kholo. `keywords[]` 6/9 same stem — dedupe.

#### 10. `components/articles/PmKisanRejectedStatusReApplyGuide.tsx`
> "kisan rejected status" 13×, keywords 6/6 same stem. Structure **rejection-reason-first**: portal par dikhne wala har exact rejection message ka apna h3 (jaisa portal par dikhta hai waisa quote — verify karke, gadhkar nahi) → kaaran + fix + timeline. Ye reason→fix mapping unique module. Generic "dobara apply" steps chhote rakho.

### 🟠 Priority 2 — pehle shared-frame fix, phir har article apna rewrite

**Template pre-step (ek baar):** `loan-mandi-pashupalan/` aur `kisanguides/` ka shared `SH`-style heading component theek karo taaki asli `<h2>`/`<h3>` DOM me render ho, aur `kisanguides/` ke empty `<span>` chains delete karo. Iske BAAD niche ke per-article prompts chalao.

#### 11. `loan-mandi-pashupalan/BiharPashupalanLoanYojana.tsx`
> Eligibility-first skeleton: (1) "Bihar ka hona kaafi nahi — ye 4 shartein"; (2) kitna loan, kitni subsidy — Bihar govt notification se verified figures + source link; (3) apply ka raasta; (4) unique module: **district-level kahan sampark kare** table. Figures confirm na hon to "notification me dekho" likho, number mat gadho.

#### 12. `loan-mandi-pashupalan/GehuKaBhavMspVsMandi.tsx`
> Data-first skeleton: seedha aaj/current season ke verified MSP figure se kholo (source: CACP/govt press release, link do). Unique module: **"MSP par becho ya mandi me" decision calculator-style section** — 3 real scenarios with math. Mandi rates jo verify nahi ho sakte unhe range + "apni mandi ka board dekho" likho.

#### 13. `loan-mandi-pashupalan/JansamarthPortalLoanApply.tsx`
> Portal-walkthrough-first: har screen ka naam + kya bharna hai. Unique module: **"Jansamarth vs seedha bank jaana" comparison** — kab portal better, kab branch. Common portal errors ka section (sirf real errors). Kisi doosre loan article ka h2-order copy mat karo.

#### 14. `loan-mandi-pashupalan/MandiBhavAppComparison.tsx`
> Verdict-first: pehle para me hi "X walon ke liye A app, Y walon ke liye B." Unique module: **feature-by-feature comparison table** (sirf apps ke actual features — download karke verify karo ya official listing se). Har app ka ek genuine limitation likho — sab ko perfect batana AI smell hai.

#### 15. `loan-mandi-pashupalan/MurgiPalanLoanNlmSubsidy.tsx`
> Disqualify-first: "NLM subsidy kise milti hi nahi." Phir verified subsidy percentages (NLM guidelines PDF se, link). Unique module: **unit-size wise cost-subsidy breakdown table** (500/1000/3000 birds) — sirf guidelines ke figures, apne mat banao.

#### 16. `loan-mandi-pashupalan/RashtriyaGokulMissionSubsidy.tsx`
> "rashtriya gokul mission" 16×, "breed multiplication farm" 16× — dono ≤6. Skeleton: component-wise kholo (kaunse alag-alag components hain, har ek me kitni subsidy — guidelines se verified). Unique module: **application timeline** — apply se sanction tak har stage kitne din.

#### 17. `loan-mandi-pashupalan/SabziBhavGuidePyazAlooTamatar.tsx`
> "pyaz aloo tamatar" 13× — kaato. Season-first skeleton: kis mahine kaunsi sabzi ka bhav girta/chadhta hai (verified seasonal pattern, specific price predictions mat gadho). Unique module: **"bhav girne par bechne ke 3 alternate raaste"** (storage, processing, FPO). Har sabzi ka apna h2, ek jaisa format nahi.

#### 18. `loan-mandi-pashupalan/EnamRegistrationKaiseKare.tsx`
> "mandi help desk" 8× — kaato. Skeleton: "eNAM aapke kaam ka hai ya nahi" se kholo (kis kisan ko fayda, kis ko nahi). Unique module: **registration ke baad pehli sale ka walkthrough** — sirf register karana adha kaam hai, ye baaki pages nahi batate.

#### 19. `loan-mandi-pashupalan/MspList202627.tsx`
> Skeleton `EnamRegistrationKaiseKare` se 1.00 same tha — todo. Data-page ki tarah banao: **2026-27 ki verified MSP table hi hero hai** (CACP/cabinet press release se, link zaroori — jo crop announce nahi hua, "announce hona baaki" likho). Unique module: **pichle 3 saal ka MSP trend** per major crop. Table ke niche har crop par 2-3 line ka context, uniform paragraph nahi.

#### 20. `loan-mandi-pashupalan/SbiDairyLoanInterestRate.tsx`
> Rate-first: current verified SBI rate/scheme se kholo (SBI official page se, link; rate change hota rehta hai to "as of [date]" likho). Unique module: **EMI example table** — 2 lakh / 5 lakh / 10 lakh par real math. "Documents branch se poocho" jaisi khali baat nahi — exact list.

#### 21. `loan-mandi-pashupalan/DairyFarmLoanWithoutCollateral.tsx`
> Myth-first kholo: "bina guarantee loan milta hai — lekin sirf in cases me." CGTMSE/MUDRA ki verified limits + source. Unique module: **"bank mana kar de to" escalation path** (kisko complaint, kaunsa portal). Loan articles ke baaki prompts se alag section-order rakho.

#### 22. `kisanguides/MadhumakhiPalan.tsx`
> Business-guide skeleton: (1) "shuru karne se pehle ye 3 sawal"; (2) unique module: **10-box unit ka real cost-profit table** (verified equipment rates, honey yield range — jo season-dependent hai use range likho); (3) "pehle saal ki 3 galtiyan"; (4) shahad kahan bikega (mandi, brand, direct). Empty spans already delete ho chuke honge — naya decorative filler mat daalo.

#### 23. `kisanguides/VerminCompost.tsx`
> "vermi compost business" 12× — ≤6. Skeleton — MadhumakhiPalan se alag order: market-first kholo ("kaun kharidta hai, kis rate par") phir production. Unique module: **bed-size wise production math** (ek 10×3 bed se kitna compost, kitne din me). `keywords[]` 6/6 same stem — dedupe.

#### 24. `kisanguides/MushroomKheti.tsx`
> Skeleton: variety-first ("button vs oyster vs milky — aapke climate me kaunsa"). Unique module: **temperature/season suitability table by variety** (verified agronomy sources). "Training kahan se lo" section with real institutes (KVK, DMR Solan) — koi institute invent mat karo.

#### 25. `kisanguides/PMFMEYojana.tsx`
> Scheme-guide skeleton: (1) "ye scheme kiske liye hai hi nahi" (disqualify-first); (2) 35% subsidy ka real example ek unit ki cost par (guidelines-verified cap ke saath); (3) apply — kis portal, kaun sa DRP madad karta hai; (4) unique module: **"ODOP kya hai aur aapke district ka ODOP product kaise dekhe."** `keywords[]` dedupe (6/6 same stem).

#### 26. `kisanguides/SilageMaking.tsx`
> How-to skeleton — baaki guides se alag: process-first (step-by-step silage banana, har step me common galti inline). Unique module: **"silage kharab ho gaya kaise pehchane"** — smell/color/texture table. Cost section me sirf verifiable items (polythene, machine rent range).

#### 27. `kisanguides/PMatsyaSampada.tsx`
> "matsya sampada yojana" 17× — ≤6 ("PMMSY", "is scheme", "matsya yojana"). Skeleton: beneficiary-type-first (naya talab kholne wala vs existing pond wala vs seller — har ek ka apna raasta). Unique module: **component-wise subsidy table** (general vs SC/ST/women rates — guidelines PDF se verified).

#### 28. `maandhan/pmkmy-bank-account-change.tsx` — ✅ Done (2026-08-11)
> **"bank account change" 48× — repo ka worst.** ≤6 karo. Page sirf **Maandhan pension** account change par; pehle para me PM-Kisan walon ko root `PmKisanBankAccountChangeProcess` ka existing link. Unique module: **"auto-debit naye account se kab shuru hoga" timeline**. "span span span" ×20 filler delete. Skeleton root bank-change page se alag: timeline/consequence-first, process-first nahi.

#### 29. `maandhan/AutoDebitFailRegularization.tsx`
> "auto debit fail" 20× — ≤6. Ye page = **process page**: "fail ho gaya, regularize kaise kare." Skeleton: (1) fail hone par exactly kya hota hai (grace period — LIC/Maandhan rules se verified); (2) regularize ka step-by-step; (3) unique module: **kitne mahine miss par kya consequence** table; (4) dobara fail na ho — balance rakhne ke tarike. Pehle para me `PmKisanMaandhanAutoDebitPooraSach` (decision page) ka existing link + farq.

#### 30. `maandhan/PmKisanMaandhanAutoDebitPooraSach.tsx`
> "auto debit band" 14× — kaato. Ye page = **decision page**: "auto-debit band karna chahiye ya nahi — poora sach." Skeleton — regularization page se bilkul alag: (1) band karne ke asli consequences; (2) kis case me band karna sahi; (3) unique module: **exit vs continue math** — ab tak jama paisa, exit par kya milta hai (scheme rules se verified); (4) band/chalu karne ka process chhota sa. Cross-link to #29.

#### 31. `maandhan/PmKisanMaandhanEligibilityDocuments.tsx`
> Skeleton `PooraSach` se 1.00 same tha — todo. Checklist-style banao: (1) unique module: **age-wise contribution table** (18–40, official chart se verified); (2) "ye 3 log eligible NAHI hain" — income-tax payer, EPF/NPS member, doosri pension scheme; (3) documents — exact list, kya original kya copy; (4) "CSC par kya-kya poocha jayega." H2s sawal-form me, generic labels nahi.

#### 32. `hindi-yojana/PmKisan25viKistKabAayegi.tsx`
> Root `PmKisan25viKist2027` ab evergreen tracker hai (#1) — is Hindi page ko us tracker ka **Hindi-reader companion** banao, clone nahi: (1) seedha jawab pehli line me ("official date abhi nahi hai — aur kisi ki batayi date par bharosa mat karo"); (2) unique module: **"date aane par sabse pehle kahan dikhegi"** — official channels ki priority list; (3) intezar me kya karwa lo (eKYC/NPCI verification); (4) FAQ. Skeleton `PmKisanStatusCheckMobileNumberSe` se 1.00 same tha — poori tarah todo. Slug/URL unchanged; agar canonical root tracker par set karna hai to wo alag PR me, is rewrite me URL structure mat chhedo.

#### 33. `hindi-yojana/PmKisanStatusCheckMobileNumberSe.tsx`
> "registration number" 61× bigram — brutally kaato ("ye number", "aapka registration", pronoun). Portal-path-first skeleton: (1) mobile number se status ka exact raasta, screen-by-screen; (2) unique module: **"registration number bhool gaye? Mobile number se hi nikalo"** walkthrough; (3) har status ka matlab; (4) OTP nahi aa raha — fixes. H2 sequence #32 aur registration page se alag.

#### 34. `hindi-yojana/PmKisanNewRegistration2027.tsx`
> Skeleton doosre hindi-yojana pages se 0.80 match — todo. Eligibility-first: (1) "apply karne se PEHLE ye check karo warna reject hoga" — land record, Aadhaar match, exclusion rules; (2) registration walkthrough; (3) unique module: **"apply ke baad ke 4 stages"** — pending, verification, approval, first payment — har stage kitne din (official process se, andaza mat likho); (4) reject hua to kya.

### 🟡 Priority 3 — density fix (structure theek hai, content depth OK)

In sab me content/structure mat badlo, URLs/images unchanged — sirf phrase density kaato aur AI-uniform lines ko human karo jahan repetition hatane se sentence dobara likhna pade.

#### 35. `soil-health-card-complete-guide-2026.tsx`
> "soil health card" 38× → ≤6. Variants: "ye card", "mitti ki report", "SHC". Title, first para, ek h2, ek FAQ me exact phrase; baaki sab natural.

#### 36. `PmKisanMobileNumberChangeUpdate.tsx`
> "mobile number change" 14× + "kisan mobile number" 10× + "mobile number update" 10× → combined ≤6 exact. Variants: "naya number jodna", "number badalna", pronouns.

#### 37. `PmKisanStateNodalOfficerList.tsx`
> "state nodal officer" 18× → ≤6. Variants: "SNO", "aapke state ka adhikari", "nodal adhikari". `keywords[]` 6/6 same stem — dedupe bhi.

#### 38. `KisanCreditCardOnlineApply2026.tsx`
> "kisan credit card" 21× → ≤8 — baaki jagah **"KCC"** bolo (real log yahi bolte hain).

#### 39. `rajya-yojana/NamoShetkariYojanaStatus.tsx`
> "namo shetkari" 73× bigram, "namo shetkari mahasanman" 10× → bigram ≤10. Variants: "ye yojana", "Maharashtra wali scheme", "NSMNY". Shared status-check frame is series me acceptable hai — frame mat chhedo, sirf density.

#### 40. `PmKusumYojanaSolarSubsidy2026.tsx`
> "kusum yojana" (strong-tagged) 11× → ≤6. `<strong>` tags se keyword bold karna band — emphasis sirf jahan padhne wale ke liye zaroori ho. `keywords[]` dedupe.

#### 41. `maandhan/kisan-pension-card-download.tsx`
> "pension card download" 9× → ≤5. Variants: "card nikalna", "PDF save karna", "ye card".

#### 42. `maandhan/PmKisanMaandhanStatusCheckOnline.tsx`
> "maandhan status" / "status check online" 17× → ≤6 combined. Variants: "apna status", "contribution ka hisab", pronouns.

#### 43. `pm-kisan-fto-generated-ka-matlab-kya-hai.tsx`
> "fund transfer order" 11× → ≤5 — baaki jagah **"FTO"** (page ka topic hi abbreviation explain karna hai, to use karo).

#### 44. `hindi-yojana/PmKisanRecoveryNoticePaisaWapas.tsx`
> "portal refund online" 8× → ≤4, aur empty `<span>` chains delete karo. Content depth theek hai — sirf ye do cheezein.

### 🗂️ Keyword-metadata dedupe (`lib/*-data.ts`) — har slug alag se

Pattern har jagah same hai (max 2 same-stem entries; mix long-tail sawal + Devanagari + entity naam; koi unrelated keyword invent nahi) — lekin har array apne topic se rebuild hoga:

| # | Slug | Abhi | Rebuild direction |
|---|---|---|---|
| 45 | `PmKisanCorrectionForm2026` | 8/8 "pm kisan" | correction-type variants ("naam sudharna", "आधार करेक्शन फॉर्म", form ka naam) |
| 46 | `PmKisanBeneficiaryList2026` | 6/6 | "list me naam kaise dekhe", "लाभार्थी सूची", portal naam |
| 47 | `PmKusumYojanaSolarSubsidy2026` | same stem | "solar pump subsidy kitni", "कुसुम योजना", component naam (A/B/C) |
| 48 | `PmKisanLandSeedingForm` | 6/9 | "zameen record jodna", "भूमि सीडिंग", patwari-related sawal |
| 49 | `PmKisanVoluntarySurrenderGuide` | 5–8 same stem | "paisa wapas karna", "स्वैच्छिक सरेंडर", notice-related |
| 50 | `PmKisanStateNodalOfficerList` | 6/6 | "SNO contact", "नोडल अधिकारी", state-wise sawal |
| 51 | `PmKisanBankAccountChangeProcess` | 6/6 | "khata badalna", "NPCI seeding", "बैंक खाता बदलें" |
| 52 | `PmKisanCscRegistrationCharges` | 5/6 | "csc fees", "ekyc kitne ka", "सीएससी चार्ज", overcharging |
| 53 | `PmKisanRejectedStatusReApplyGuide` | 6/6 | rejection-message variants, "dobara apply", "रिजेक्ट क्यों हुआ" |
| 54 | `PmKisanVillageWiseListPdfDownload` | 6/6 | "gaon ki list", "गांव वार सूची", PDF-related sawal |
| 55 | `PmKisanMobileNumberChangeUpdate` | same stem | "number badalna", "मोबाइल नंबर अपडेट", OTP-related |
| 56 | `pm-fme-yojana-food-processing` | 6/6 | "food processing subsidy", "ODOP", "पीएम एफएमई" |
| 57 | `vermi-compost-business-guide` | 6/6 | "kenchua khad", "वर्मी कम्पोस्ट", buyer/rate sawal |
| 58 | `hi/pm-kisan-25vi-kist` | same stem | tracker-aligned: "agli kist kab", "किस्त कब आएगी", eKYC-related |

---

## Suggested execution order
1. Template pre-step (Priority 2 ka `SH`/h2 fix + span cleanup) — ek change, 17+ pages ka DOM sudhrega.
2. Priority 1 worst-stuffing pehle: #5 FaceAuth (52×), #28 pmkmy-bank-account (48×), #9 LandSeeding (30×/92×).
3. Baaki Priority 1 + kist-cluster (#1, #2, #32) saath me — cross-links consistent rahen.
4. Priority 2 per-article rewrites (#11–#34).
5. Priority 3 density passes (#35–#44) + keyword dedupe (#45–#58).
6. Har PR ke baad audit script dobara: word count ≥2,000, koi trigram ≥6× nahi, skeleton similarity <0.8, saare URLs/images unchanged (`git diff` me sirf text badla ho). Numbers pass → tabhi merge. **Auto-merge nahi.**
