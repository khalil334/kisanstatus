# Article Rewrite Prompts — Humanize · Unique Structure · Kill Repetition

Companion to [`content-audit-red-flags.md`](./content-audit-red-flags.md). Har flagged article ke liye ek ready-to-use rewrite prompt niche diya hai. Pehle GLOBAL RULES padho — ye har rewrite par apply hote hain — phir apne article ka prompt utha kar use karo.

---

## GLOBAL RULES (har article par lagu)

### 1. Humanize — AI-jaisi writing se strictly bacho
- **Line/paragraph length vary karo.** AI ki pehchan: har paragraph 3–4 line ka, har sentence 15–20 words ka. Insaan aise nahi likhta. Kabhi ek-line ka jhatka do ("Bas. Itna hi kaam hai."), kabhi 6-line ka detailed para. Rhythm todo.
- **Uniform sentence-openers band.** Lagataar "Agar aap… / Iske baad… / Yeh bhi…" se shuru hone wale sentences = template smell. Har section me openers alag rakho.
- **AI-filler words/phrases delete karo:** "in today's digital age", "it is important to note", "overall", "moreover", "seamlessly", "comprehensive guide", "delve", "landscape", "furthermore" — aur inke Hinglish equivalents ("aaj ke digital yug mein", "yeh dhyan dena zaroori hai", "sampoorn jankari").
- **First-hand awaaz do.** "Maine khud CSC par dekha hai ki…", "Ek kisan bhai ne bataya tha ki…", "Portal 2 baje ke baad slow chalta hai" — aisi cheezein jo sirf real experience se aati hain. Fake experience mat gadho — jo cheez genuinely common knowledge hai (portal ka behaviour, office ka process) wahi likho.
- **Padhne wala kisan hai, SEO bot nahi.** Har paragraph likhne ke baad khud se poocho: "kya ek 45-saal ka kisan isse kuch naya seekhega?" Nahi — to kaat do.

### 2. Repetitive keywords — strictly avoid
- Exact-match keyword phrase sirf **4 jagah**: (1) title/h1, (2) pehle paragraph me ek baar, (3) kisi ek h2 me, (4) FAQ me ek baar. **Baaki har jagah natural variant** — pronoun ("iska", "is form ka"), Hindi synonym, ya phrase todkar.
- Rewrite ke baad check: `grep -oi "<phrase>" file | wc -l` — target **≤6 total** (abhi kai pages 30–50× par hain).
- `lib/*-data.ts` ka `keywords[]` array bhi theek karo: 6–9 entries me se max 2 same stem se shuru hon. Mix: head term + long-tail sawal ("… kaise check kare") + Hindi Devanagari variant + related entity (portal/app/form ka naam).

### 3. Unique frame/structure — har article ka apna skeleton
- **Copy-paste skeleton band.** Ek hi h2-sequence 4 articles me = duplicate template. Har article ka structure uske topic se nikalna chahiye:
  - *Status-check* article → "Pehle ye 2 cheezein taiyar rakho → Portal ka exact raasta → Har status ka matlab (table) → Paisa nahi aaya to kis din kya karo"
  - *Form/process* article → "Kis case me ye form lagta hai (aur kis me NAHI) → Documents → Step-by-step with screenshots → Reject hone ke 5 asli kaaran → Timeline"
  - *Comparison* article → decision-first: "Seedha jawab: X walon ke liye A, Y walon ke liye B → ab detail"
  - *Yojana guide* → "Ye scheme kiske liye hai hi nahi (disqualify pehle) → benefit calculation ek real example se → apply → milne ke baad kya"
- **Semantic headings zaroori:** har section real `<h2>`/`<h3>` render kare (props-only `SH` component se nahi). H2 me sawal ya specific claim likho, generic label nahi ("Documents" ❌ → "In 4 documents ke bina form aage nahi badhta" ✅).
- **Har article me kam se kam 1 unique module** jo kisi aur page par nahi hai: state-wise table, chhota calculator, decision-tree ("aapka status X hai? → yahan jao"), real timeline, sample filled-form image.

### 4. Helpful real info — kaise likhein
- **Specifics > generalities.** "Documents le jao" ❌. "Aadhaar + bank passbook ki photocopy + khatauni ki naqal — teeno original bhi saath rakho, CSC wala milaan karta hai" ✅.
- **Numbers with source.** Fees, amounts, dates — sirf official source (pmkisan.gov.in, scheme guidelines PDF) se, aur source link do. Jo confirm nahi hai, saaf likho "iski koi official date nahi hai" — andaza date mat chhapo.
- **Edge cases hi asli value hain.** Happy path sab jaante hain. "OTP nahi aa raha", "naam Aadhaar se match nahi karta", "pati-patni dono ka naam hai" — in par section do.
- **Har page par ek 'agla kadam':** article khatam hone par reader ko exactly pata ho ab kya karna hai (kis office, kaunsa form, kitne din wait).

### 5. Har rewrite ke baad self-check (pass hone tak publish nahi)
1. Target phrase count ≤6? (`grep -c`)
2. Koi 3-word phrase prose me ≥6× to nahi? (audit script se re-check)
3. H2 skeleton kisi doosre article se match to nahi karta?
4. Lagataar 3 paragraphs same length ke to nahi?
5. Kya is page me kam se kam 3 baatein hain jo site ke kisi aur page par nahi?

---

## PER-ARTICLE PROMPTS

Har prompt self-contained hai — copy karke as-is use karo (LLM ko do ya khud follow karo). Sab par upar ke GLOBAL RULES bhi lagenge.

### 🔴 Priority 1

#### `components/articles/PmKisan25viKist2027.tsx`
> **Prompt:** Ye page ~1,552 words ka speculative page hai jiska apna FAQ maanta hai ki date kisi ko nahi pata. Ise "25vi kist" se hatakar ek **evergreen "PM Kisan agli kist tracker"** page banao: (1) ab tak ki sabhi kisto ka release-history table (kist number, date, source link) — ye iska unique module hoga; (2) "agli kist se pehle ye 3 cheezein verify karo" (eKYC, land seeding, NPCI seeding) with exact portal steps; (3) "afwah vs official" section — kaise pehchane ki date fake hai; (4) FAQ. `PmKisan24viKist2026` aur `hindi-yojana/PmKisan25viKistKabAayegi` ka content isme merge karo aur unse redirect/canonical yahan lao — teen pages ek hi query ladh rahe hain. Koi bhi date fabricate mat karo; jo unknown hai use unknown likho. Naya h2 skeleton banao jo kisi aur article se match na kare.

#### `components/articles/PmKisan24viKist2026.tsx`
> **Prompt:** "24vi kist" phrase 35× aata hai — kaatkar ≤6 karo (variants: "is baar ki kist", "24vi", "ye installment"). Agar 24vi kist release ho chuki hai to page ko **historical + troubleshooting** page banao: "24vi aayi thi [date, source] — nahi mili? Ye 6 asli kaaran, har ek ka fix, kitne din me paisa aata hai" — reason-wise decision tree iska unique module. Agar upar wale evergreen tracker me merge ho raha hai to yahan sirf redirect chhodo. Structure 25vi/master-guide pages se bilkul alag rakho.

#### `components/articles/PmKisanVoluntarySurrenderGuide.tsx`
> **Prompt:** ~1,888 words, skeleton 3 aur articles se 100% same, "agar eligible nahi" 8×. Naya skeleton is topic se nikalo: (1) "Surrender kise karna CHAHIYE aur kise nahi" — 5 real scenarios (income-tax payer ban gaye, sarkari naukri lag gayi, galti se do baar registration…); (2) surrender ka exact portal path with har screen ka naam; (3) "surrender ke baad kya hota hai" — recovery notice aayega ya nahi, dobara apply kar sakte hain ya nahi; (4) surrender vs chup rehna — consequences comparison table (unique module). Word count content se badhe, padding se nahi — agar 2,500 honest words hi bante hain to wahi rakho lekin har word kaam ka ho.

#### `components/articles/PmKisanCscRegistrationCharges.tsx`
> **Prompt:** Same 100%-identical skeleton group. Naya angle: **"CSC par kya free hai, kya paid, aur overcharging pakdo"** — (1) official CSC rate list table with source (unique module); (2) kaunse kaam ghar se free ho jate hain vs CSC zaroori; (3) "CSC wala zyada maang raha hai to kya karo" — complaint process with helpline; (4) receipt kyun zaroor lo. `keywords[]` me 5/6 "pm kisan" se shuru hain — dedupe karo (e.g. "csc pm kisan fees", "ekyc kitne ka hota hai", "सीएससी चार्ज लिस्ट", "csc overcharging complaint").

#### `components/articles/PmKisanFaceAuthenticationEkyc.tsx`
> **Prompt:** "face authentication" **52×** — sabse pehle ise ≤6 karo (variants: "chehre se eKYC", "FaceRD wala tarika", "ye method"). Skeleton bhi 100% clone hai — naya banao: (1) "OTP vs Face vs Biometric — aapke liye kaunsa" decision-first opening; (2) FaceRD app setup with common install errors (unique module: error-message → fix table); (3) buzurg/feature-phone walon ke liye alternate raasta; (4) "photo match nahi ho raha" troubleshooting. Real edge cases hi is page ki value hai.

#### `components/articles/PmKisanBankAccountChangeProcess.tsx`
> **Prompt:** "bank account" 38×, "naya account" 29× — density strictly kaato. Ye page `maandhan/pmkmy-bank-account-change.tsx` se intent-clash karta hai: is page ko **sirf PM-Kisan (₹2000 wali)** ke liye rakho aur pehle hi paragraph me bata do ki Maandhan pension wale [us page](link) par jayen — dono me cross-link, content clone nahi. Unique module: "NPCI seeding hui ya nahi khud check karo" mini-walkthrough, kyunki 90% payment-fail wahi hai. Skeleton clone group se alag structure do.

#### `components/articles/PmKisanBeneficiaryList2026.tsx` + `PmKisanVillageWiseListPdfDownload.tsx`
> **Prompt:** Do pages ek query ladh rahe hain ("kisan beneficiary list" 10×, "village wise list" 8× stuffing ke saath). Intent split karo: **BeneficiaryList** = "list me apna naam LIVE check karo" (portal walkthrough, har status ka matlab, naam gayab ho to kya); **VillageWiseListPdf** = "poore gaon ki PDF download karo" (patwari/panchayat use-case, PDF me column ka matlab, purani list vs nayi). Har page ke pehle para me doosre page ka link + kis case me kahan jana hai. Dono ke `keywords[]` dedupe karo (abhi 6/6 "pm kisan" stem). Dono ka h2 skeleton ek doosre se alag.

#### `components/articles/PmKisanLandSeedingForm.tsx`
> **Prompt:** "land seeding form" trigram 30×, "land seeding" bigram 92× — ye repo ke worst stuffing me hai. Rewrite me phrase ≤6 baar; baaki jagah "ye form", "zameen ka record jodna", "seeding". Content already form-focused hai, structure me ye unique module do: **sample bhara hua form** (image with callouts — kaunse box me kya likhna hai) + "form reject hone ke 5 kaaran patwari khud batata hai" section. `keywords[]` (6/9 same stem) dedupe.

#### `components/articles/PmKisanRejectedStatusReApplyGuide.tsx`
> **Prompt:** "kisan rejected status" 13×, keywords 6/6 same stem. Structure ko **rejection-reason-first** banao: portal par dikhne wale har exact rejection message ka apna h3 (message jaisa dikhta hai waisa hi quote karo) → uske niche kaaran + fix + kitne din. Ye reason→fix mapping iska unique module hai — generic "dobara apply kaise kare" steps ko chhota karo, wahi to har page par hai.

### 🟠 Priority 2 — template groups

#### `loan-mandi-pashupalan/` (11 articles — `BiharPashupalanLoanYojana`, `GehuKaBhavMspVsMandi`, `JansamarthPortalLoanApply`, `MandiBhavAppComparison`, `MurgiPalanLoanNlmSubsidy`, `RashtriyaGokulMissionSubsidy`, `SabziBhavGuidePyazAlooTamatar`, `EnamRegistrationKaiseKare`, `MspList202627`, `SbiDairyLoanInterestRate`, `DairyFarmLoanWithoutCollateral`)
> **Prompt (template-level, pehle karo — ek fix 11 pages sudhaarta hai):** Ye sab ek hi component-frame use karte hain aur **0 semantic h2** render karte hain — shared `SH`-style component ko theek karo taaki asli `<h2>`/`<h3>` DOM me aaye. Phir har article ko apna section-order do: loan articles → eligibility-first; bhav/mandi articles → aaj-ka-data-first; comparison articles → verdict-first. Har page me ek data module jo doosre me nahi (interest table, mandi-wise rate table, subsidy calculator, document checklist). Jinme stuffing hai unhe bhi kaato: `RashtriyaGokulMissionSubsidy` ("rashtriya gokul mission" 16×, "breed multiplication farm" 16×), `EnamRegistrationKaiseKare` ("mandi help desk" 8×), `SabziBhavGuidePyazAlooTamatar` ("pyaz aloo tamatar" 13×).

#### `kisanguides/` (6 articles — `MadhumakhiPalan`, `VerminCompost`, `MushroomKheti`, `PMFMEYojana`, `SilageMaking`, `PMatsyaSampada`)
> **Prompt (template-level):** Ek hi frame + har page me khali `<span>` chains ("span span span" 15–26×) — decorative markup ko ek shared component me nikalo aur empty spans delete karo. Har guide ko business-guide ki tarah unique structure do: **real cost-profit table apne climate/scale ke hisab se** (unique module per page), "pehle saal ki 3 galtiyan" section, aur mandi/buyer kahan milega. `PMatsyaSampada` me "matsya sampada yojana" 17× aur `VerminCompost` me "vermi compost business" 12× — density kaato. `vermi-compost-business-guide` aur `pm-fme-yojana-food-processing` ke `keywords[]` (6/6 same stem) dedupe.

#### `maandhan/` clones
> **Prompt:** (a) `pmkmy-bank-account-change.tsx` — **"bank account change" 48×, repo ka worst.** Phrase ≤6 karo. Page ko sirf Maandhan-pension account change par rakho, root `PmKisanBankAccountChangeProcess` se cross-link (upar dekho). Unique module: "auto-debit naye account se kab shuru hoga" timeline. (b) `AutoDebitFailRegularization.tsx` ("auto debit fail" 20×) aur `PmKisanMaandhanAutoDebitPooraSach.tsx` ("auto debit band" 14×) — ek hi intent ke do page: merge karo ya split karo — ek "fail ho gaya, regularize kaise kare" (process) aur doosra "auto-debit band/chalu karne ka sach" (decision) — aur dono ke pehle para me farq bata kar cross-link. (c) `PmKisanMaandhanAutoDebitPooraSach` ↔ `PmKisanMaandhanEligibilityDocuments` ka 100%-same h2 skeleton todo.

#### `hindi-yojana/` clones
> **Prompt:** `PmKisan25viKistKabAayegi` ↔ `PmKisanStatusCheckMobileNumberSe` skeleton 100% same, `PmKisanNewRegistration2027` 0.80 par. Teeno ko alag structure do (status-check → portal-path-first; registration → eligibility-first). `PmKisan25viKistKabAayegi` ka content evergreen kist-tracker (Priority 1 #1) me merge karo. `PmKisanStatusCheckMobileNumberSe` me "registration number" 61× bigram — kaato.

### 🟡 Priority 3 — sirf keyword density (structure theek hai)

Har ek ke liye same micro-prompt: *"Niche wala phrase prose me ≤6 baar karo — title, first para, ek h2, ek FAQ me exact rakho, baaki jagah natural variant/pronoun. Content ya structure mat badlo."*

| File | Phrase | Ab | Target |
|---|---|---|---|
| `soil-health-card-complete-guide-2026.tsx` | "soil health card" | 38× | ≤6 |
| `PmKisanMobileNumberChangeUpdate.tsx` | "mobile number change/update" | 24× | ≤6 |
| `PmKisanStateNodalOfficerList.tsx` | "state nodal officer" | 18× | ≤6 |
| `KisanCreditCardOnlineApply2026.tsx` | "kisan credit card" | 21× | ≤8 (KCC bolo) |
| `rajya-yojana/NamoShetkariYojanaStatus.tsx` | "namo shetkari (mahasanman)" | 73× bigram | ≤10 |
| `PmKusumYojanaSolarSubsidy2026.tsx` | "kusum yojana" (strong-tagged) | 11× | ≤6 |
| `maandhan/kisan-pension-card-download.tsx` | "pension card download" | 9× | ≤5 |
| `maandhan/PmKisanMaandhanStatusCheckOnline.tsx` | "maandhan status / status check online" | 17× | ≤6 |
| `pm-kisan-fto-generated-ka-matlab-kya-hai.tsx` | "fund transfer order" | 11× | ≤5 (FTO bolo) |
| `hindi-yojana/PmKisanRecoveryNoticePaisaWapas.tsx` | "portal refund online" + empty spans | 8× | ≤4 |

### Keyword-metadata dedupe (`lib/*-data.ts`)
> **Prompt:** In 14 slugs ke `keywords[]` arrays me 5–8 entries same do-word stem se shuru hoti hain: `PmKisanBeneficiaryList2026, PmKisanCorrectionForm2026, PmKusumYojanaSolarSubsidy2026, PmKisanLandSeedingForm, PmKisanVoluntarySurrenderGuide, PmKisanStateNodalOfficerList, PmKisanBankAccountChangeProcess, PmKisanCscRegistrationCharges, PmKisanRejectedStatusReApplyGuide, PmKisanVillageWiseListPdfDownload, PmKisanMobileNumberChangeUpdate, pm-fme-yojana-food-processing, vermi-compost-business-guide, hi/pm-kisan-25vi-kist`. Har array ko rebuild karo: max 2 same-stem, baaki me long-tail sawal + Devanagari variant + entity naam (portal/form/app). Koi keyword invent mat karo jo topic se related na ho.

---

## Suggested execution order
1. Template fixes (loan-mandi-pashupalan `SH`/h2 fix, kisanguides span cleanup) — sabse zyada leverage.
2. Merges/consolidations (kist cluster, bank-account pair, auto-debit pair, beneficiary-list pair).
3. Priority 1 rewrites (worst stuffing first: FaceAuth 52×, pmkmy-bank-account 48×, LandSeeding 30×).
4. Priority 3 density passes + `keywords[]` dedupe.
5. Har PR ke baad audit script dobara chalao (word count, trigram ≥6×, skeleton similarity) — numbers pass hone par hi merge.
