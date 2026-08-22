# Content Audit — Duplicate & AI-Uniform Articles

**Repo:** khalil334/kisanstatus · **Audited commit:** 9ca66994 · **Date:** 2026-08-21
**Scope:** 124 article components under `components/articles/` + 86 metadata entries in `lib/*-data.ts`.

**Method:** n-gram shingle similarity (4/5-gram Jaccard + containment) on extracted prose (CSS/JSX boilerplate stripped), heading-structure fingerprinting, component-usage signatures, and title/slug topic-overlap analysis.

---

## 1. Verdict (TL;DR)

- ❌ **No exact or near-duplicate article content found.** Highest prose similarity between any two articles is ~3% — far below duplicate threshold (~30%+).
- ⚠️ **Strong template/structural uniformity** (AI-assisted production pattern) across several article groups — not plagiarism, but a "same skeleton, different words" footprint.
- ⚠️ **Topic-overlap / keyword-cannibalization risks** in a few clusters (listed below) — separate articles competing for the same search intent.
- ✅ English↔Hindi article pairs are **intentional translations**, properly cross-linked via `lib/hindi-hreflang.ts` (29 hreflang pairs) — these are NOT duplicates.

---

## 2. Content near-duplicates

None at article level. Only overlap found (shared code, not article prose):

| Similarity | File A | File B | Nature |
|---|---|---|---|
| j=0.19 (raw) / 0.06 (prose) | `rajya-yojana/tools/KrishakBandhuChecker.tsx` | `rajya-yojana/tools/OdishaCmKisanChecker.tsx` | Interactive checker **tools** sharing UI scaffolding — refactor into one shared component, not a content issue |
| j=0.10 | `rajya-yojana/tools/OdishaCmKisanChecker.tsx` | `rajya-yojana/tools/PmKisanFamilyChecker.tsx` | Same — shared tool scaffolding |

---

## 3. Topic-overlap / cannibalization risks (same intent, separate articles)

These are distinct texts but target overlapping queries. Recommend consolidating or sharply differentiating titles/H1s:

1. **PM Kisan kist series** — `PmKisan24viKist2026`, `PmKisan25viKist2027`, `PmKisan26viKist` (the 26vi one is thin: ~1,800 words vs 4,100–4,400). All compete on "PM Kisan kist kab aayegi". Suggest: one evergreen "next kist" URL, or clear archival strategy for past kists.
2. **eKYC pair** — `PmKisanEkycOnline2026` vs `PmKisanFaceAuthenticationEkyc`. Face-auth is a subset of eKYC; both target "PM Kisan eKYC". Differentiate H1/title or merge face-auth as a section.
3. **Maandhan overview vs cluster** — `PmKisanMaandhanYojanaPension` (overview, title "PM Kisan Maandhan 2026: ₹3000 Pension") vs 13 deep-dives in `components/articles/maandhan/`. Overview title collides almost 1:1 with `PmKisanMaandhanRegistration2026` ("PM Kisan Maandhan Registration: ₹3000 Pension"). Fix: make the overview a hub page and remove "₹3000 Pension" from one of the two titles.
4. **Bank-account change pair** — `PmKisanBankAccountChangeProcess` (PM Kisan) vs `maandhan/pmkmy-bank-account-change` (Maandhan). Different schemes, near-identical query shape — ensure titles clearly say "PM Kisan" vs "Maandhan (PMKMY)".
5. **Helpline pair** — `pm-kisan-helpline-155261` vs `maandhan/pmkmy-grievance-complaint-helpline`. Same as above: scheme disambiguation in title/H1.

---

## 4. AI-uniform (template-produced) article groups

Prose is varied per article, but these groups share an identical component skeleton (same imports, same section order: intro → figures → SchemeTable/DB → InfoBox → FAQ block → JSON-LD → RelatedArticles → AuthorBox), a hallmark of batch/AI-assisted generation:

| Group | Files | Shared skeleton |
|---|---|---|
| loan-mandi-pashupalan core | 13 files (e.g. `BiharPashupalanLoanYojana`, `DairyFarmLoanWithoutCollateral`, `EnamRegistrationKaiseKare`, `GehuKaBhavMspVsMandi`, `JansamarthPortalLoanApply`, `MandiBhavAppComparison`, `MspList202627`, `RashtriyaGokulMissionSubsidy`, `SabziBhavGuidePyazAlooTamatar`, `SbiDairyLoanInterestRate`, + 3 root articles) | AuthorBox, BottomNav, DB, Disclaimer, FAQBlock, GovLink, IB, SH, SI |
| kisanguides subsidy set | 6 files (`MadhumakhiPalan`, `MushroomKheti`, `PMFMEYojana`, `PMatsyaSampada`, `SilageMaking`, `VerminCompost`) | AuthorBox, ExternalLinkButton, FAQBlock, GuideDisclaimer |
| root "2026" set | 5 files (`KisanRinKahaSeLe2026`, `KisanTractorLoan2026`, `NanoDap500mlPriceInIndia2026`, `PmKisan25viKist2027`, `PmKisanCorrectionForm2026`) | + CalcBanner variant |
| hindi-yojana-2026 set | 5 files (`FasalBimaClaimStatusHindi`, `KisanKarjMafiAllStatesHindi`, `MgnregaPashuShedYojanaHindi`, `PmKisanHelpline155261Hindi`, `PmKisanKhadYojanaSachHindi`) | Head + Image + Link minimal skeleton |
| rajya-yojana status set | 5 files (`AnnadataSukhibhavaStatusCheck`, `KrishakUnnatiYojanaStatusCheck`, `MpKisanKalyanYojanaKist`, `NamoShetkariYojanaStatus`, `RythuBharosaStatusCheck`) | Fig, InfoBox, SchemeTable |

Other uniformity signals:
- **Formulaic titles:** ~70% follow "`<Topic> 2026: <Hook>`" pattern.
- **Identical FAQ/JSON-LD scaffolding** repeated verbatim in 32+ files (schema code, fine for SEO, but each file re-declares the same `FAQBlock`/`SH`/`IB` helper components inline — should be extracted to shared `components/ui/`).
- **Uniform figure blocks** (`width=1200 height=675/800`, same figcaption styling) in 29+ files.

**Note:** structural uniformity here is a maintainability + "pattern footprint" concern, not a duplicate-content penalty risk — Google indexes prose, and the prose is distinct.

---

## 5. English ↔ Hindi translation pairs (intentional, NOT duplicates)

29 pairs mapped in `lib/hindi-hreflang.ts` (`HINDI_TO_HINGLISH`), e.g.:

- `PmKisan25viKist2027` ↔ `hi/pm-kisan-25vi-kist`
- `PmKisanEkycOnline2026` ↔ `hi/ekyc-mobile-se`
- `annadata-sukhibhava-status-check-2026` ↔ `hi/annadata-sukhibhava-status`
- `gau-mutra-kharid-yojana-up-2026` ↔ `hi/gau-mutra-kharid-yojana`
- …(full map in `lib/hindi-hreflang.ts`)

Measured cross-language prose overlap ≤ 2% (different scripts, genuinely rewritten). Keep hreflang tags intact; no action needed. Hindi files not present in the map should be added if an English counterpart exists.

---

## 6. Recommendations (priority order)

1. Consolidate/differentiate the **kist series** (esp. thin `PmKisan26viKist`).
2. Fix title collisions in the **Maandhan cluster** (overview vs registration).
3. Extract repeated inline helpers (`FAQBlock`, `SH`, `IB`, `Fig`, checker-tool scaffolding) into `components/ui/` — cuts ~30–40% duplicated JSX code.
4. Vary the title formula on new articles to reduce the AI-batch footprint.
5. Verify every Hindi article has a `hindi-hreflang.ts` entry where an English twin exists.

---
*Generated by automated audit: prose shingling (4/5-gram Jaccard/containment), heading fingerprints, component signatures. No content was modified.*

---

# 7. FIX GUIDE — AI-uniform se nikal kar har article ko insaan jaisa unique banana

Ye section batata hai ke upar wali problems ko kaise theek karna hai — taake har article ek real insaan ka likha lage, ek doosre se alag ho, kisi website se copy-paste na ho, aur keywords repeat na hon.

## 7.1 Title formula todo (sabse pehla kaam)

Abhi ~70% titles ek hi pattern par hain: `<Topic> 2026: <Hook>`. Isse batch-generated footprint banta hai.

**Kaise fix karein — har naye/update title par ye 5 alag shapes rotate karo:**
1. Sawaal shape — "26vi Kist Ka Paisa Ruk Gaya? Ye 3 Wajah Ho Sakti Hain"
2. Result shape — "Maine 2 Minute Mein eKYC Kiya — Poora Tareeka"
3. Warning shape — "Land Seeding 'No' Hai To Kist Nahi Aayegi — Pehle Ye Karo"
4. Number shape — "KCC Limit ₹3 Se ₹5 Lakh: Bank Manager Se Kya Kehna Hai"
5. Simple shape — "Bakri Palan Loan Lene Ka Sahi Tareeka"

Rule: ek category mein lagataar 2 titles same shape ke nahi hone chahiye. "2026:" colon-pattern sirf wahan rakho jahan saal genuinely zaroori hai.

## 7.2 Article skeleton alag-alag karo (5 template groups ka ilaaj)

Har group ke andar sab articles ka section-order same hai (intro → figure → table → InfoBox → FAQ → AuthorBox). Insaan aise nahi likhta.

**Kaise fix karein — har article ke liye opening + flow randomize karo:**
- Opening 4 tarah ki ho sakti hai: (a) kisan ki real situation/story se shuru, (b) seedha answer pehli line mein, (c) ek chaunkane wala fact/number, (d) common galti jo log karte hain.
- Section order badlo: kisi article mein FAQ beech mein ho, kisi mein table pehle, kisi mein bilkul table na ho (prose mein numbers likho).
- Har article mein kam se kam 1 section aisa ho jo us topic ke liye UNIQUE hai aur kisi doosre article mein nahi ho sakta (e.g. mushroom article mein "pehli fasal kharab kyun hoti hai", tractor loan mein "dealer commission ka sach").
- FAQ count fix mat rakho — kahin 3, kahin 7, kahin zero (agar body mein hi cover ho gaya).

## 7.3 Copy-paste se bachne ka process (kisi website se content na uthao)

**Likhne ka safe tareeka (har article ke liye):**
1. Research karte waqt sirf FACTS note karo (amount, dates, portal steps, helpline no.) — sentences kabhi note mat karo.
2. Source tab band karo, phir apne shabdon mein memory se likho.
3. Official portal ke exact button/menu names quote karna theek hai ("Beneficiary Status" option) — par unke paragraphs kabhi nahi.
4. Likhne ke baad 2-3 lambi lines Google mein quotes ("...") laga kar search karo — agar exact match mile to rewrite karo.
5. Har fact ke saath apna experience/context jodo: "maine dekha hai CSC wale iske ₹50 maangte hain, jabki fee ₹15 hai" — ye cheez kisi website par nahi milegi, isliye copy ho hi nahi sakti.

## 7.4 Repetitive keywords hatao (keyword stuffing fix)

Abhi problem: "PM Kisan", "status check", "2026" jaise phrases baar-baar repeat hote hain — titles mein bhi, headings mein bhi, body mein bhi.

**Rules:**
- Main keyword sirf 3 jagah zaroori hai: title, pehla paragraph, ek H2. Baaki jagah natural variations use karo: "is yojana ka paisa", "kist ka status", "aapka naam list mein".
- Ek H2 heading mein keyword repeat mat karo agar upar wali H2 mein already hai. Headings sawaal ya kaam ki baat honi chahiye, keyword ki jagah nahi.
- Density check: 1000 words mein main keyword 5-7 baar se zyada aaye to variations se replace karo.
- Har article ka intent alag rakho — Section 3 ke cannibalization pairs (kist series, eKYC pair, Maandhan titles) ko pehle consolidate/differentiate karo, warna keywords apas mein hi ladenge.

## 7.5 "Insaan jaisa" likhne ki checklist (har article publish se pehle)

- [ ] Kya isme koi 1 baat hai jo sirf experience se aa sakti hai (personal observation, warning, shortcut)?
- [ ] Kya sentences ki lambai mix hai? (AI ka pattern: har sentence 15-20 words. Insaan: kabhi 4 words. Kabhi 25.)
- [ ] Kya kahin halka sa opinion hai? ("mere hisaab se CSC jaana behtar hai agar aap pehli baar kar rahe ho")
- [ ] Kya transitions natural hain? "Moreover/Furthermore/In conclusion" type AI-connectors hata do; "ab asli baat", "yahan log galti karte hain" jaise desi transitions rakho.
- [ ] Kya specific, verifiable details hain? (exact fee, exact button ka naam, exact date) — vague AI filler ("various options available hain") hata do.
- [ ] Kya title apne category ke pichhle article se alag shape ka hai?
- [ ] Google quote-search se 2-3 lines check ki? (copy-paste zero hona chahiye)

## 7.6 Code-level fixes (ek baar ka kaam)

1. Repeated inline helpers (`FAQBlock`, `SH`, `IB`, `Fig`, checker scaffolding) ko `components/ui/` mein extract karo — 30-40% duplicated JSX code khatam. Isse content uniformity par asar nahi, sirf maintainability behtar.
2. Thin article `PmKisan26viKist` (~1800 words) ko ya to expand karo unique angle ke saath, ya `PmKisan25viKist2027` mein merge kar ke redirect lagao.
3. Maandhan overview (`PmKisanMaandhanYojanaPension`) ko hub page banao — deep-dives ke links + short summaries; "₹3000 Pension" title se hatao (registration article mein already hai).
4. Naye articles ke liye ek internal rule file rakho (e.g. `CONTENT-RULES.md`) jisme 7.1–7.5 ki checklist ho — har writer/session usko follow kare.

## 7.7 Priority order (kis se shuru karein)

> **FIX LOG**
>
> **✅ Part 1 DONE (2026-08-22) — Cannibalization fixes (Section 3):**
> - **Kist series:** `PmKisan26viKist` pehle se noindex + 25vi me merged summary tha — verify kiya, theek hai. `PmKisan25viKist2027` ka title formula-pattern se nikala: ab "25vi Kist Kab Aayegi? Gap Ka Hisaab Samjho" (sawaal shape) — 24vi ("Date & Status") se ab alag shape.
> - **eKYC pair:** `PmKisanFaceAuthenticationEkyc` ne "eKYC" head-term chhod diya — title/seoTitle/ogTitle/H1 ab "Face Authentication — OTP Ke Bina Verify" par focused. "PM Kisan eKYC" query ab sirf `PmKisanEkycOnline2026` target karta hai.
> - **Maandhan overview vs registration:** `PmKisanMaandhanYojanaPension` ab hub-style title/H1 ("PM Kisan Maandhan Yojana Kya Hai — Puri ABCD") — "₹3000 Pension" hata diya; wo ab sirf `PmKisanMaandhanRegistration2026` ke paas hai. 1:1 title collision khatam.
> - **Bank-account pair:** `maandhan/pmkmy-bank-account-change` title/H1/desc ab "Maandhan (PMKMY)" clearly bolte hain; desc me PM-Kisan wale process se alag hone ka zikr. `PmKisanBankAccountChangeProcess` unchanged (already scheme-clear).
> - **Helpline pair:** `maandhan/pmkmy-grievance-complaint-helpline` ab "Maandhan Pension (PMKMY) Ki Shikayat" — 155261 wali PM Kisan helpline se disambiguated.
>
> **✅ Part 2 DONE (2026-08-22) — Title formula-break (§7.1):**
> - 54 titles rewritten across `core-articles-data.ts` (31), `loan-mandi-pashupalan-data.ts` (12), `rajya-yojana-data.ts` (11).
> - "`<Topic> 2026: <Hook>`" colon-pattern removed wherever the year wasn't essential; kept only where it carries meaning (MSP List 2026-27, kist year pages).
> - Five shapes rotated per category — sawaal ("Gehu MSP Par Beche Ya Mandi Me?"), warning ("Land Seeding 'No' Hai To Kist Rukegi"), number ("7 Mandi Bhav Apps Compare Kiye"), result ("Krishak Bandhu Status — Voter ID Se 2 Minute Me"), simple ("eNAM Par Registration Kaise Hota Hai"). No two consecutive titles in a category share a shape.
> - `yojana-2026-data.ts` and `maandhan-data.ts` titles were already varied — left alone (sirf zaroori Part-1 wale badle the).
> - H1s inside components untouched in this part — wo pehle se varied hain; sirf metadata titles ka batch-footprint toda.
> **⏳ Part 3 PENDING** — 5 template groups ke top articles de-uniform (§7.2/7.5).
> **⏳ Part 4 PENDING** — Shared helpers extract to `components/ui/` (§7.6).

1. **Hafta 1:** Cannibalization fix — kist series + eKYC pair + Maandhan titles (Section 3).
2. **Hafta 2:** Sab 124 titles review — formula-break (7.1) apply karo jahan zaroorat hai.
3. **Hafta 3-4:** 5 template groups (Section 4) mein se har group ke 2-3 articles ko re-open kar ke unique section + human touches (7.5) add karo — sabse zyada traffic wale pehle.
4. **Ongoing:** Har naya article 7.3 process + 7.5 checklist se hi publish ho.
