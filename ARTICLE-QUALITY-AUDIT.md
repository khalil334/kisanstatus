# kisanstatus.com — Article Content Quality Audit

**Kya audit hua:** `components/articles/**/*.tsx` — 108 article components + 4 interactive
tool widgets. `ArticleStub.tsx` (placeholder template) scoring se bahar rakha gaya.

**Kaise:** har component se prose text extract kiya (JSX text nodes + string literals,
Tailwind class-names aur import paths filter karke), phir 7 checks:

1. Word count (thin content)
2. Heading density — words per H2 (wall-of-text)
3. Keyword density + repeated n-grams (keyword stuffing)
4. Cross-article near-duplicate detection (6-word shingle overlap)
5. Duplicate boilerplate paragraphs (>=3 articles mein same text)
6. Structure similarity (component + heading shingles) — same-template detection
7. AI-uniform filler phrase markers

**Repeatable:** `python3 scripts/kisan_content_audit.py . > audit.json`

---

## 1. Bottom line — pehle ye padhein

**Aap ne 4 cheezein poochi thin: thin content, AI-uniform, same structure, repetitive
keywords. Inmein se 3 ka jawab hai: masla nahi hai.**

| Aap ka sawaal | Audit ka jawaab |
|---------------|-----------------|
| Thin/low content? | **Sirf 7 articles** genuinely thin (<1300w). Site median **2129 words** hai. |
| AI-uniform writing? | Voice natural hai — lekin **70 pages mein generic filler phrases** hain. Ye real issue hai, magar cosmetic. |
| Same structure? | **Nahi.** Max heading-text overlap 0.12, content overlap **0 pairs**. Structure genuinely varied hai. |
| Repetitive keywords? | **Haan — ye asal masla hai.** 24 pages par density >2% (max 3.95%), aur 59 pages par koi phrase >=10x repeat hoti hai. |

Priority order:

| # | Issue | Pages | Severity | Fix type |
|---|-------|-------|----------|----------|
| **P1** | Keyword over-repetition (density >2%, phrase >=10x) | 66 | **High** | Per-page text edit |
| **P2** | 9 Hindi pages ka hreflang pair missing | 9 | **High** | Config — 1 file |
| **P3** | Thin articles (<1300 words) | 7 | Medium | Content expansion |
| **P4** | AI-uniform filler phrases | 70 | Medium | Find-replace + review |
| **P5** | 26 pages mein koi table nahi, 14 mein koi image nahi | 26 | Medium | Content addition |
| **P6** | 21 pages par <=3 internal links | 21 | Medium | Internal linking pass |
| **P7** | 2 articles mein FAQ schema nahi | 2 | Medium | Per-page |
| **P8** | 29 files mein local heading component duplicate | 29 | Low | Refactor (maintainability) |
| **P9** | `StateYojanaFinder.tsx` dead code | 1 | Low | Delete ya embed |

**Sabse zyada ROI:** P2 (30 min, 1 file, 9 pages) → P1 ke top 14 pages (density >2.4% —
real ranking risk) → P6 + P5 (mechanical, koi writing nahi).

---

## 2. P1 — Keyword over-repetition (66 pages)

Breakdown: **24 pages** par koi keyword 2% density cross karta hai, aur
**59 pages** par koi exact phrase 10+ baar repeat hoti hai (overlap ke saath total 66).

Ye sabse serious content issue hai. Do signals: **single-word density >2%** aur
**exact phrase >=10 repeats**.

> Hindi articles mein `में` / `है।` / `बैंक` ki high density normal hai (grammar particles).
> Neeche sirf content keywords hain.

### Worst — single keyword density

| Density | Count | Keyword | Article words | Page |
|---------|-------|---------|---------------|------|
| **3.95%** | 67x | `account` | 1695 | [PmKisanBankAccountChangeProcess](https://kisanstatus.com/articles/PmKisanBankAccountChangeProcess) |
| **3.84%** | 97x | `account` | 2525 | `pmkmy-bank-account-change` (koi public route nahi) |
| **3.84%** | 44x | `list` | 1147 | [PmKisanBeneficiaryList2026](https://kisanstatus.com/articles/PmKisanBeneficiaryList2026) |
| **3.74%** | 110x | `number` | 2938 | [PmKisanMobileNumberChangeUpdate](https://kisanstatus.com/articles/PmKisanMobileNumberChangeUpdate) |
| **3.63%** | 37x | `surrender` | 1018 | [PmKisanVoluntarySurrenderGuide](https://kisanstatus.com/articles/PmKisanVoluntarySurrenderGuide) |
| **3.44%** | 47x | `csc` | 1368 | [PmKisanCscRegistrationCharges](https://kisanstatus.com/articles/PmKisanCscRegistrationCharges) |
| **3.4%** | 39x | `karo` | 1147 | [PmKisanBeneficiaryList2026](https://kisanstatus.com/articles/PmKisanBeneficiaryList2026) |
| **3.27%** | 55x | `rate` | 1683 | [mandi-bhav-today](https://kisanstatus.com/articles/mandi-bhav-today) |
| **3.09%** | 78x | `bank` | 2525 | `pmkmy-bank-account-change` (koi public route nahi) |
| **2.91%** | 54x | `karo` | 1856 | [PmKisanMasterGuide2026](https://kisanstatus.com/articles/PmKisanMasterGuide2026) |
| **2.87%** | 58x | `mandi` | 2018 | [EnamRegistrationKaiseKare](https://kisanstatus.com/articles/enam-registration-kaise-kare) |
| **2.86%** | 43x | `dap` | 1502 | [NanoDap500mlPriceInIndia2026](https://kisanstatus.com/articles/NanoDap500mlPriceInIndia2026) |
| **2.73%** | 35x | `loan` | 1280 | [KisanRinKahaSeLe2026](https://kisanstatus.com/articles/KisanRinKahaSeLe2026) |
| **2.62%** | 40x | `loan` | 1525 | [KisanTractorLoan2026](https://kisanstatus.com/articles/KisanTractorLoan2026) |
| **2.61%** | 65x | `ekyc` | 2491 | [PmKisanEkycOnline2026](https://kisanstatus.com/articles/PmKisanEkycOnline2026) |
| **2.5%** | 31x | `soil` | 1242 | [soil-health-card-complete-guide-2026](https://kisanstatus.com/articles/soil-health-card-complete-guide-2026) |
| **2.48%** | 42x | `bank` | 1695 | [PmKisanBankAccountChangeProcess](https://kisanstatus.com/articles/PmKisanBankAccountChangeProcess) |
| **2.4%** | 53x | `msp` | 2209 | [MspList202627](https://kisanstatus.com/articles/msp-list-2026-27) |
| **2.4%** | 51x | `mandi` | 2125 | [MandiBhavAppComparison](https://kisanstatus.com/articles/mandi-bhav-app-comparison) |
| **2.33%** | 29x | `card` | 1242 | [soil-health-card-complete-guide-2026](https://kisanstatus.com/articles/soil-health-card-complete-guide-2026) |

### Worst — exact phrase repeats

| Repeats | Phrase | Article words | Page |
|---------|--------|---------------|------|
| **39x** | `mobile number` | 2938 | [PmKisanMobileNumberChangeUpdate](https://kisanstatus.com/articles/PmKisanMobileNumberChangeUpdate) |
| **26x** | `bank account` | 2525 | `pmkmy-bank-account-change` (koi public route nahi) |
| **25x** | `unit cost` | 2517 | [DripSprinkler](https://kisanstatus.com/articles/drip-sprinkler-irrigation-subsidy) |
| **23x** | `registration number` | 2610 | [PmKisanStatusCheckMobileNumberSe](https://kisanstatus.com/articles/hi/status-check-mobile-se) |
| **23x** | `auto debit` | 2901 | `PmKisanMaandhanAutoDebitPooraSach` (koi public route nahi) |
| **21x** | `nano dap` | 1502 | [NanoDap500mlPriceInIndia2026](https://kisanstatus.com/articles/NanoDap500mlPriceInIndia2026) |
| **21x** | `auto debit` | 1723 | `AutoDebitFailRegularization` (koi public route nahi) |
| **20x** | `solar pump` | 1602 | [PmKusumYojanaSolarSubsidy2026](https://kisanstatus.com/articles/PmKusumYojanaSolarSubsidy2026) |
| **20x** | `नमो शेतकरी` | 2422 | [NamoShetkariYojanaMaharashtra](https://kisanstatus.com/articles/hi/namo-shetkari-yojana) |
| **20x** | `rythu bharosa` | 2533 | [RythuBharosaStatusCheck](https://kisanstatus.com/rajya-yojana/rythu-bharosa-status-check-2026) |
| **18x** | `bank account` | 1695 | [PmKisanBankAccountChangeProcess](https://kisanstatus.com/articles/PmKisanBankAccountChangeProcess) |
| **18x** | `krishak bandhu` | 2806 | [KrishakBandhuStatusCheck](https://kisanstatus.com/rajya-yojana/krishak-bandhu-status-check-2026) |
| **18x** | `pension card` | 3067 | `kisan-pension-card-download` (koi public route nahi) |
| **17x** | `nodal officer` | 1793 | [PmKisanStateNodalOfficerList](https://kisanstatus.com/articles/PmKisanStateNodalOfficerList) |
| **17x** | `self registration` | 1808 | [PmKisanSelfRegisteredStatusCheck](https://kisanstatus.com/articles/pm-kisan-self-registered-status-check) |
| **17x** | `dobara apply` | 1918 | [PmKisanRejectedStatusReApplyGuide](https://kisanstatus.com/articles/PmKisanRejectedStatusReApplyGuide) |
| **17x** | `account change` | 2525 | `pmkmy-bank-account-change` (koi public route nahi) |
| **16x** | `har mahine` | 1640 | [PmKisanMaandhanYojanaPension](https://kisanstatus.com/articles/PmKisanMaandhanYojanaPension) |
| **16x** | `kisan credit` | 2711 | [KisanCreditCardOnlineApply2026](https://kisanstatus.com/articles/KisanCreditCardOnlineApply2026) |
| **16x** | `credit card` | 2711 | [KisanCreditCardOnlineApply2026](https://kisanstatus.com/articles/KisanCreditCardOnlineApply2026) |

### Root pattern

Classic **exact-match keyword anchoring**: writer ne target keyword ko literally har section
mein repeat kiya, natural variation ke bajaye. Teen saaf examples:

**1. `PmKisanMobileNumberChangeUpdate`** — 2938 words:

```
number                 110x  (3.74%)
mobile number           39x
number update           16x
naya number             13x
number change           12x
mobile number change    11x
purana sim              11x
```

**2. `pmkmy-bank-account-change`** — 2525 words:

```
account                 97x  (3.84%)
bank                    78x  (3.09%)
bank account            26x
account change          17x
bank branch             14x
naye bank               14x
```

**3. `PmKisanBankAccountChangeProcess`** — 1695 words mein `account` **67x (3.95%)** — poore
site ka highest density, aur article sirf 1695 words ka hai.

Note karein: `pmkmy-bank-account-change` aur `PmKisanBankAccountChangeProcess` **do alag**
articles hain jo dono "bank account change" par hain (ek PM Kisan ke liye, ek Maandhan ke
liye). Content duplicate nahi hai (audit ne confirm kiya), lekin dono same keyword cluster
par compete kar rahe hain — **keyword cannibalisation** check karna chahiye.

### Fix — variation pass

Har flagged page par synonym substitution karo. Meaning same, string different:

| Over-used | Replace with (rotate karo) |
|-----------|----------------------------|
| `mobile number` | mobile, phone number, apna number, registered number, wahi number, ye number |
| `bank account` | account, khata, apna khata, ye khata, naya khata, branch account |
| `beneficiary list` | list, benefit list, naam ki list, ye list, list mein naam |
| `soil health card` | SHC, card, ye card, health card *(full form ek hi baar)* |
| `auto debit` | auto-debit, monthly katauti, automatic deduction, ye katauti |
| `kisan credit card` | KCC, card, credit card *(full form intro + ek H2 mein)* |
| `registration number` | reg. number, apna number, ye number, application number |
| `status check` | status dekhna, check karna, apna status, verify karna |

**Density target:** primary keyword H1 mein 1x, first 100 words mein 1x, per H2 section max
1x. Baaki jagah pronoun ya synonym. **Goal: density <2.0%, phrase repeats <8x.**

**Shortcut — bohot repeats step-lists mein hain.** Steps mein subject implicit kar do:

```diff
- 3. Naya mobile number daalo aur mobile number confirm karo
+ 3. Naya number daalo, phir confirm karo

- 5. Bank account number daalo, phir bank account verify karo
+ 5. Account number daalo, phir verify karo
```

Ek article par 20-30 minute lagega. **Sabse pehle top 6 karo** (density >3.4%):
[PmKisanBankAccountChangeProcess](https://kisanstatus.com/articles/PmKisanBankAccountChangeProcess), [PmKisanBeneficiaryList2026](https://kisanstatus.com/articles/PmKisanBeneficiaryList2026), `pmkmy-bank-account-change` (koi public route nahi), [PmKisanMobileNumberChangeUpdate](https://kisanstatus.com/articles/PmKisanMobileNumberChangeUpdate), [PmKisanVoluntarySurrenderGuide](https://kisanstatus.com/articles/PmKisanVoluntarySurrenderGuide), [PmKisanCscRegistrationCharges](https://kisanstatus.com/articles/PmKisanCscRegistrationCharges).

---

## 3. P2 — 9 Hindi pages ka hreflang pair missing

**Ye sabse sasta fix hai — 1 file, 30 minute, 9 pages.**

`lib/hindi-hreflang.ts` mein `HINDI_TO_HINGLISH` map har `hi/` page ko uske Hinglish
counterpart se jodta hai. **30 `hi/` slugs mein se sirf 21 map mein hain.** Baaki 9 ka
`x-default` khud ka Hindi URL ban jata hai — Google ko pata nahi chalta ke ye kis page ka
translation hai. Result: **duplicate-content risk aur split ranking signals.**

### Missing 9

| Hindi page | Likely Hinglish pair | Confidence |
|------------|----------------------|------------|
| `hi/karj-mafi-list` | `/rajya-yojana/up-kisan-karj-rahat-list-2026` | High |
| `hi/kcc-limit-kaise-badhaye` | `/articles/KisanCreditCardOnlineApply2026` | Medium — KCC limit vs KCC apply, topic overlap partial |
| `hi/status-check-mobile-se` | `/articles/PmKisanSelfRegisteredStatusCheck` | Medium |
| `hi/nayi-registration` | `/articles/PmKisanSelfRegisteredStatusCheck` | Conflict — dekhen neeche |
| `hi/npci-aadhaar-seeding` | `/articles/PmKisanCorrectionForm2026` | Medium |
| `hi/payment-stopped-by-state` | `/articles/PmKisanPaymentFailedFix2026` | High |
| `hi/recovery-notice` | `(koi pair nahi mila)` | Pair mat banao |
| `hi/tractor-subsidy` | `(koi pair nahi — subsidy vs loan alag topic)` | Pair mat banao |
| `hi/helpline-shikayat` | `(koi pair nahi mila)` | Pair mat banao |

### Fix

```diff
  export const HINDI_TO_HINGLISH: Readonly<Record<string, string>> = {
    'pm-kisan-25vi-kist': '/articles/PmKisan25viKist2027',
    'ekyc-mobile-se': '/articles/PmKisanEkycOnline2026',
+   'karj-mafi-list': '/rajya-yojana/up-kisan-karj-rahat-list-2026',
+   'payment-stopped-by-state': '/articles/PmKisanPaymentFailedFix2026',
+   'kcc-limit-kaise-badhaye': '/articles/KisanCreditCardOnlineApply2026',
+   'npci-aadhaar-seeding': '/articles/PmKisanCorrectionForm2026',
+   'status-check-mobile-se': '/articles/PmKisanSelfRegisteredStatusCheck',
    // ...
  };
```

**Do warnings:**

1. **`hi/status-check-mobile-se` aur `hi/nayi-registration` dono ka logical pair same page
   hai** (`PmKisanSelfRegisteredStatusCheck`). Ek Hinglish page ke do Hindi versions nahi ho
   sakte — Google confuse hoga. Ya `nayi-registration` ke liye alag Hinglish article banao,
   ya do Hindi pages merge karo. **Ye decide karna aap ka call hai.**

2. **`hi/recovery-notice`, `hi/tractor-subsidy`, `hi/helpline-shikayat` ko map mein NA daalo.**
   Inka genuine Hinglish counterpart nahi hai. Bina pair `hi-IN` + self-referencing
   `x-default` rehna bilkul sahi hai. Galat pair banane se ulta nuksan — Google do unrelated
   pages ko translation samajh lega.

---

## 4. P3 — Thin articles (7 pages)

| Words | H2 | FAQ | Tables | Images | Links | Page |
|-------|----|-----|--------|--------|-------|------|
| **1018** | 10 | 6 | 1 | 4 | 9 | [PmKisanVoluntarySurrenderGuide](https://kisanstatus.com/articles/PmKisanVoluntarySurrenderGuide) |
| **1067** | 7 | 6 | 0 | 0 | 3 | [UpKisanKarjRahatListHindi](https://kisanstatus.com/articles/hi/up-kisan-karj-rahat-list) |
| **1147** | 8 | 10 | 1 | 1 | 4 | [PmKisanBeneficiaryList2026](https://kisanstatus.com/articles/PmKisanBeneficiaryList2026) |
| **1229** | 6 | 6 | 1 | 0 | 3 | [KrishakBandhuStatusHindi](https://kisanstatus.com/articles/hi/krishak-bandhu-status) |
| **1242** | 8 | 7 | 0 | 1 | 3 | [soil-health-card-complete-guide-2026](https://kisanstatus.com/articles/soil-health-card-complete-guide-2026) |
| **1280** | 10 | 7 | 2 | 1 | 5 | [KisanRinKahaSeLe2026](https://kisanstatus.com/articles/KisanRinKahaSeLe2026) |
| **1280** | 7 | 6 | 1 | 0 | 4 | [KrishakUnnatiYojanaStatusHindi](https://kisanstatus.com/articles/hi/krishak-unnati-yojana-status) |

Context: site ka median **2129 words** hai. Ye pages "low quality" nahi hain — inki
structure achhi hai (6-10 headings, 6-10 FAQ). Ye **under-built** hain. Aur teen Hinglish
pages mein keyword density bhi high hai — kam content mein keyword zyada baar, jo P1 ka
worst combination hai.

Neeche 3 Hinglish pages detail mein hain. Baaki 4 Hindi (`hi/`) pages ka fix same pattern
hai: har ek apne Hinglish counterpart se 1000+ words chhota hai — us article ke sections
Hindi mein port karo (translate nahi, rewrite — same info, Hindi reader ke liye).

### Fix — per page

**1. [PmKisanBeneficiaryList2026](https://kisanstatus.com/articles/PmKisanBeneficiaryList2026) (1147w) — highest priority.**
High-intent head term ("beneficiary list check"), lekin site ka sabse chhota real article,
aur `list` = 3.84% density (44x) + `karo` = 3.40% (39x). Add karo:

- **State-wise portal table** — 36 states/UT, direct list-check link per state
- **"Naam list mein nahi hai"** — 7 rejection reasons, per reason exact fix (table format)
- Village-wise PDF ka short section + cross-link (dedicated article already hai)
- Table count 1 se 3 karo — is page par tables ka natural fit hai

**2. [PmKisanVoluntarySurrenderGuide](https://kisanstatus.com/articles/PmKisanVoluntarySurrenderGuide) (1018w)** —
site ka smallest article, aur `surrender` = 3.63% (37x). Content shallow hai, keyword
repeat zyada. Add karo:

- Surrender ke baad kya hota hai — refund timeline, DBT status kaise change hoti hai
- **"Galti se surrender kar diya"** — reversal possible hai ya nahi, seedha jawab
- Income-tax payer / govt employee / pension-holder cases ka eligibility table
- Voluntary surrender vs rejection vs recovery notice — teen alag cheezein hain, farak clear karo

**3. [soil-health-card-complete-guide-2026](https://kisanstatus.com/articles/soil-health-card-complete-guide-2026) (1242w)** —
`soil health card` 13x, `health card` 13x, `soil health` 15x — teen overlapping phrases,
shallow content. **0 tables, 1 image.** Add karo:

- Sample collection ka step-by-step (kitni gehrai, kitni jagah se, kitna sample)
- Report card ke **12 parameters ka meaning table** — ye page ka missing core hai
- "Report aane ke baad fertilizer kaise choose karein" — actionable section

---

## 5. P4 — AI-uniform filler phrases (70 of 108 pages)

Site ki writing **overall natural hai** — audit mein genuinely human lines mili
(`"mera manna hai risk mat lo"`, `"gaon mein sabke khaate mein aaya, aapke mein nahi"`).
Ye AI-generated content nahi lagta.

**Lekin** 70 pages mein wahi generic connector phrases repeat hoti hain. Ye AI-detection
heuristics aur experienced readers dono ko trigger karti hain.

### Frequency across site

| Pages | Phrase | Kya karein |
|-------|--------|------------|
| 36 | `step-by-step` | poora tarika / neeche ke steps / process |
| 28 | `sabse pehle` | pehla kaam / shuru yahan se / sabse zaroori |
| 11 | `step by step` | poora tarika / neeche ke steps / process |
| 10 | `bilkul free` | ₹0 / koi charge nahi / free hai |
| 8 | `ek nazar mein` | chhota summary / short mein |
| 5 | `note karein` | dhyan rahe / yaad rakho |
| 4 | `is guide mein` | **delete** — reader ko pata hai wo guide par hai |
| 4 | `yaad rakhein` | yaad rakho |
| 3 | `puri jankari` | poori detail / sab kuch |
| 2 | `simple bhasha mein` | **delete** — condescending lagta hai |
| 2 | `ant mein` | context ke hisaab se rewrite |
| 2 | `dhyan dein` | dhyan rahe |
| 1 | `complete jankari` | poori detail |
| 1 | `yahan hum` | context ke hisaab se rewrite |
| 1 | `sawal aata hai` | context ke hisaab se rewrite |
| 1 | `sabse pehli baat` | pehli baat |
| 1 | `aasan bhasha mein` | **delete** |

### Fix

Find-replace pass, **manual review ke saath** (kuch jagah phrase genuinely fit hoti hai).
Priority:

1. **`step-by-step` / `step by step`** — sabse zyada pages. Isko heading mein rakhna theek
   hai (`"Apply Karne Ka Poora Tarika"` better hai), lekin body prose mein 3-4 baar aana
   filler hai.
2. **Seedha delete karne wali phrases:** `is guide mein`, `is article mein`,
   `simple bhasha mein`, `chaliye jante hain`. Ye zero value add karti hain aur
   "AI-written intro" ka strongest tell hain. Sentence in ke bagair behtar padhta hai.
3. `sabse pehle` — 8+ pages mein hai, aur usually pehla step already numbered hai, to
   redundant hai.

---

## 6. P5 — 26 pages mein table nahi, 14 mein image nahi

Site ka strength tables hain (comparison, eligibility, state-wise data) — lekin 26 articles
mein ek bhi table nahi. Government-scheme content mein table na hona missed opportunity hai:
featured snippets tables se hi aate hain.

### 0 tables + 0/1 image (worst combination)

| Words | Tables | Images | Links | Page |
|-------|--------|--------|-------|------|
| 3237 | 0 | 1 | 1 | [PariharaPaymentStatusCheck2026](https://kisanstatus.com/rajya-yojana/parihara-payment-status-check-2026) |
| 2960 | 0 | 1 | 4 | [KrishakUnnatiYojanaStatusCheck](https://kisanstatus.com/rajya-yojana/krishak-unnati-yojana-status-check-2026) |
| 2870 | 0 | 1 | 6 | [IkhedutPortalStatusCheck2026](https://kisanstatus.com/rajya-yojana/ikhedut-portal-status-check-2026) |
| 2845 | 0 | 1 | 4 | [PmKisanPatiPatniRule](https://kisanstatus.com/rajya-yojana/pm-kisan-pati-patni-dono-ko-milega) |
| 2806 | 0 | 1 | 5 | [KrishakBandhuStatusCheck](https://kisanstatus.com/rajya-yojana/krishak-bandhu-status-check-2026) |
| 2755 | 0 | 1 | 2 | [KccLimitKaiseBadhaye3Se5Lakh](https://kisanstatus.com/articles/hi/kcc-limit-kaise-badhaye) |
| 2739 | 0 | 1 | 5 | [OdishaCmKisanStatusCheck](https://kisanstatus.com/rajya-yojana/odisha-cm-kisan-status-check-2026) |
| 2630 | 0 | 1 | 9 | [StateKisanYojanaHub](https://kisanstatus.com/rajya-yojana/state-kisan-yojana-list-all-states-2026) |
| 2599 | 0 | 1 | 4 | [NamoShetkariYojanaStatus](https://kisanstatus.com/rajya-yojana/namo-shetkari-yojana-status-check-2026) |
| 2556 | 0 | 1 | 4 | [MpKisanKalyanYojanaKist](https://kisanstatus.com/rajya-yojana/mp-kisan-kalyan-yojana-kist-status) |
| 2533 | 0 | 1 | 4 | [RythuBharosaStatusCheck](https://kisanstatus.com/rajya-yojana/rythu-bharosa-status-check-2026) |
| 2486 | 0 | 1 | 4 | [MeriFasalMeraByoraStatusCheck2026](https://kisanstatus.com/rajya-yojana/meri-fasal-mera-byora-status-check-2026) |
| 2469 | 0 | 1 | 4 | [AnnadataSukhibhavaStatusCheck](https://kisanstatus.com/rajya-yojana/annadata-sukhibhava-status-check-2026) |
| 2206 | 0 | 1 | 5 | [BiharKisanRegistrationStatusCheck2026](https://kisanstatus.com/rajya-yojana/bihar-kisan-registration-status-check-2026) |
| 1721 | 0 | 0 | 4 | [PatiPatniPmKisanRuleHindi](https://kisanstatus.com/articles/hi/pati-patni-pm-kisan-rule) |
| 1645 | 0 | 1 | 7 | [UpKisanKarjRahatList2026](https://kisanstatus.com/rajya-yojana/up-kisan-karj-rahat-list-2026) |
| 1559 | 0 | 0 | 3 | [BiharKisanRegistrationStatusHindi](https://kisanstatus.com/articles/hi/bihar-kisan-registration-status) |
| 1242 | 0 | 1 | 3 | [soil-health-card-complete-guide-2026](https://kisanstatus.com/articles/soil-health-card-complete-guide-2026) |
| 1067 | 0 | 0 | 3 | [UpKisanKarjRahatListHindi](https://kisanstatus.com/articles/hi/up-kisan-karj-rahat-list) |

### Fix

`rajya-yojana/` folder ka pattern saaf hai — **15 mein se 11 pages par 0 tables** hain,
halanki ye state-scheme pages hain jahan table sabse natural fit hai. Har page par add karo:

- **Eligibility table** — kaun eligible, kaun nahi (2 columns)
- **Benefit amount table** — kist, amount, date
- **Documents table** — document, kahan se milega, mandatory ya optional
- **Status meaning table** — portal par jo status likha aata hai, uska matlab (ye sabse
  useful hai aur snippet-friendly bhi)

`components/ui/SchemeTable.tsx` already exists — wahi reuse karo, naya component na banao.

---

## 7. P6 — 21 pages par <=3 internal links

| Links | Words | Page |
|-------|-------|------|
| **1** | 3237 | [PariharaPaymentStatusCheck2026](https://kisanstatus.com/rajya-yojana/parihara-payment-status-check-2026) |
| **1** | 1683 | [mandi-bhav-today](https://kisanstatus.com/articles/mandi-bhav-today) |
| **2** | 2755 | [KccLimitKaiseBadhaye3Se5Lakh](https://kisanstatus.com/articles/hi/kcc-limit-kaise-badhaye) |
| **2** | 1680 | [AnnadataSukhibhavaStatusHindi](https://kisanstatus.com/articles/hi/annadata-sukhibhava-status) |
| **2** | 1551 | [CHCPortal](https://kisanstatus.com/articles/custom-hiring-centre-chc-portal) |
| **3** | 2517 | [DripSprinkler](https://kisanstatus.com/articles/drip-sprinkler-irrigation-subsidy) |
| **3** | 1981 | [VerminCompost](https://kisanstatus.com/articles/vermi-compost-business-guide) |
| **3** | 1931 | [PmKisanCorrectionForm2026](https://kisanstatus.com/articles/PmKisanCorrectionForm2026) |
| **3** | 1856 | [PmKisanMasterGuide2026](https://kisanstatus.com/articles/PmKisanMasterGuide2026) |
| **3** | 1808 | [PmKisanSelfRegisteredStatusCheck](https://kisanstatus.com/articles/pm-kisan-self-registered-status-check) |
| **3** | 1775 | [MeriFasalMeraByoraStatusHindi](https://kisanstatus.com/articles/hi/meri-fasal-mera-byora-status) |
| **3** | 1677 | [OdishaCmKisanStatusHindi](https://kisanstatus.com/articles/hi/odisha-cm-kisan-status) |
| **3** | 1602 | [PmKusumYojanaSolarSubsidy2026](https://kisanstatus.com/articles/PmKusumYojanaSolarSubsidy2026) |
| **3** | 1574 | [IkhedutPortalStatusHindi](https://kisanstatus.com/articles/hi/ikhedut-portal-status) |
| **3** | 1559 | [BiharKisanRegistrationStatusHindi](https://kisanstatus.com/articles/hi/bihar-kisan-registration-status) |
| **3** | 1525 | [KisanTractorLoan2026](https://kisanstatus.com/articles/KisanTractorLoan2026) |
| **3** | 1379 | [RythuBharosaStatusHindi](https://kisanstatus.com/articles/hi/rythu-bharosa-status) |
| **3** | 1338 | [PariharaPaymentStatusHindi](https://kisanstatus.com/articles/hi/parihara-payment-status) |
| **3** | 1242 | [soil-health-card-complete-guide-2026](https://kisanstatus.com/articles/soil-health-card-complete-guide-2026) |
| **3** | 1229 | [KrishakBandhuStatusHindi](https://kisanstatus.com/articles/hi/krishak-bandhu-status) |
| **3** | 1067 | [UpKisanKarjRahatListHindi](https://kisanstatus.com/articles/hi/up-kisan-karj-rahat-list) |

### Fix

`lib/cross-links.ts` aur `relatedSlugs` field already infrastructure de rahe hain — ye pages
use nahi kar rahe. Har page par:

- **3-5 contextual in-body links** — sirf footer related-cards nahi, prose ke andar
- Cluster logic follow karo: status-check pages → eKYC page → payment-failed page → helpline
- `mandi-bhav-today` (1 link, 1683 words) sabse bura hai — ye ek hub page hona chahiye,
  MSP list, gehu rate, sabzi bhav sab se link karo

---

## 8. P7 — 2 articles mein FAQ nahi

| Words | Page |
|-------|------|
| 1645 | [UpKisanKarjRahatList2026](https://kisanstatus.com/rajya-yojana/up-kisan-karj-rahat-list-2026) |
| 2206 | [BiharKisanRegistrationStatusCheck2026](https://kisanstatus.com/rajya-yojana/bihar-kisan-registration-status-check-2026) |

Site ke baaki 105 articles mein 4-12 FAQ hain, aur sab **FAQPage schema** ke saath. Ye 2
pages us benefit se bahar hain. 6-8 FAQ add karo — questions Google "People also ask" se
uthao, aur `FAQBlock` component reuse karo (already `ArticleShared.tsx` mein hai).

---

## 9. P8 — 29 files mein local heading component duplicate

Shared `SH` component 52 files use karti hain (achha). Lekin 29 files apna local helper
define karti hain jo functionally identical hai:

| Local component | Files |
|-----------------|-------|
| `H2` | 9 |
| `Hd` | 9 |
| `Sec` | 3 |
| `T2` | 2 |
| `Head2` | 2 |
| `SH` (local redefine) | 2 |
| `Stage`, `Sub`, `PathCard`, `Rung`, `Milestone`, `H2x`, `T` | 1 each |
| `Note` | 11 |
| `Box` | 3 |

**Ye SEO issue nahi hai** — headings render ho rahi hain aur structure sahi hai (median 11
H2 per article). Ye **maintainability** issue hai: styling change karna ho to 29 jagah edit
karna padega, aur drift already ho chuki hai — kuch `border-green-200`, kuch
`border-[var(--color-border)]` use karti hain, to headings visually consistent nahi hain.

### Fix

`components/ArticleShared.tsx` mein canonical `SH` + `Note` rakho, 29 files se local
definitions delete karke import karo:

```diff
- function Hd({ children }: { children: React.ReactNode }) {
-   return (
-     <h2 className="text-xl font-black text-[var(--color-text)] mt-8 mb-3 pb-2 border-b-2 border-green-200 dark:border-green-900">
-       {children}
-     </h2>
-   );
- }
+ import { SH, Note } from '@/components/ArticleShared';
```

Phir JSX mein `<Hd>` → `<SH>`, `<H2>` → `<SH>`, `<T2>` → `<SH>` etc. Mechanical hai,
sed se ho sakta hai, lekin **build test zaroor karo** — kuch local components extra props
lete hain (`Note` ka `tone`).

---

## 10. P9 — Dead code aur tool widgets

| File | Words | Parent | Status |
|------|-------|--------|--------|
| `StateYojanaFinder.tsx` | 379 | — koi import nahi — | **DEAD CODE** |
| `KrishakBandhuChecker.tsx` | 476 | `rajya-yojana/KrishakBandhuStatusCheck.tsx` | OK — embedded widget |
| `OdishaCmKisanChecker.tsx` | 525 | `rajya-yojana/OdishaCmKisanStatusCheck.tsx` | OK — embedded widget |
| `PmKisanFamilyChecker.tsx` | 934 | `rajya-yojana/PmKisanPatiPatniRule.tsx` | OK — embedded widget |

**In 3 checkers ko na chhuo** — ye by-design thin hain, parent article ke andar embed hote
hain, aur unka apna route nahi hai. Thin-content penalty ka koi risk nahi.

**`StateYojanaFinder.tsx` (379 words)** kisi bhi file mein import nahi hota — grep se
confirm. Do options:

- **(a) Delete** — dead code hatao
- **(b) Embed** — `StateKisanYojanaListHindi` ya `state-kisan-yojana-list-all-states-2026`
  article mein daalo. Ye ek working state-finder tool hai, waste ho raha hai.

**Recommendation: (b)** — tool useful hai, aur us article ko interactive element milega.

---

## 11. Jo cheezein theek hain — inko na chhuo

Audit ne ye confirm kiya. Agar kisi ne kaha ke site par duplicate ya spun content hai, ye
data uska jawab hai:

| Check | Result |
|-------|--------|
| Cross-article near-duplicate (6-word shingle overlap) | **0 pairs** |
| Duplicate FAQ questions across site | **0 of 855** |
| Duplicate FAQ within one article | **0** |
| Duplicate meta descriptions | **0** |
| Title length outliers (<25 ya >65 chars) | **0** |
| Boilerplate paragraph reuse (>=3 articles) | Sirf **2 blocks** — dono CTA link text |
| Heading-text overlap between articles | Max **0.12** jaccard |
| Median headings per article | **11** |
| Median words per heading | **200** (healthy — 250-350 ideal range mein) |
| Wall-of-text pages (>380 words/heading) | **1** (`GauMutraKharidYojanaUp2026`, 404 w/H) |

### "Same structure" ka sach

Structure-similarity check mein 322 article-pairs ka component-set jaccard **1.0** aaya.
Ye pehli nazar mein alarming lagta hai — lekin **iska matlab sirf ye hai ke do articles
same design components use karte hain** (`SH`, `Note`, `Tbl`, `FAQBlock`). Ye achhi baat hai:
consistent design system hai.

Asal test heading **text** aur content ka overlap hai — aur wahan:

- Heading-text overlap: max **0.12** (do articles mein 12% headings common)
- Content shingle overlap: **0 pairs** above threshold
- Sirf 4 article-pairs ka structure-sequence similarity >0.5, aur woh bhi topically related
  pages hain (`MadhumakhiPalan` :: `SilageMaking` — dono farming-business guides)

**Verdict: template reuse hai, content duplication nahi.** Ye exactly aisa hi hona chahiye.

### Word count distribution

| Range | Pages |
|-------|-------|
| <600 | 3 *(sab embedded tool widgets)* |
| 600–1000 | 1 *(tool widget)* |
| 1000–1300 | 7 |
| 1300–1800 | 29 |
| 1800–2500 | 37 |
| 2500+ | 35 |

**Median 2129 words.** Ye thin-content site nahi hai.

---

## 12. Execution plan

| Sprint | Kaam | Files | Pages | Effort |
|--------|------|-------|-------|--------|
| **1** | P2 hreflang map fix (+ `nayi-registration` conflict decide karo) | 1 | 9 | 30 min |
| **1** | P9 `StateYojanaFinder` embed ya delete | 1-2 | 1 | 1 hr |
| **2** | P1 keyword variation — top 6 worst (density >3%) | 6 | 6 | Half day |
| **2** | P1 keyword variation — baaki 12 | 12 | 12 | 1 day |
| **3** | P5 tables add — `rajya-yojana/` ke 11 pages | 11 | 11 | 1-2 days |
| **3** | P6 internal linking pass | 21 | 21 | Half day |
| **4** | P4 filler-phrase find-replace + review | 70 | 70 | 4 hrs |
| **4** | P7 FAQ add — 2 pages | 2 | 2 | 2 hrs |
| **5** | P3 thin content expansion — 7 pages (3 Hinglish + 4 Hindi) | 7 | 7 | 3 days |
| **6** | P8 heading component refactor (build test ke saath) | 29 | 0 | 3 hrs |

**Sprint 1 aaj hi ho sakta hai** — 1.5 ghante, 10 pages, koi content writing nahi.

Sprint 2 sabse zyada ranking impact dega. Sprint 6 sirf code hygiene hai, kabhi bhi karo.

---

## 13. Re-audit

Fix ke baad dobara chalao aur compare karo:

```bash
python3 scripts/kisan_content_audit.py . > audit.json
```

**Target metrics:**

| Metric | Ab | Target |
|--------|-----|--------|
| Content keyword density >2% | 24 pages | 0 |
| Phrase repeats >=10x | 59 pages | 0 |
| Articles <1300 words | 7 | 0 |
| Pages with 0 tables | 26 | <10 |
| Pages with <=3 internal links | 21 | 0 |
| Pages with 0 FAQ | 2 | 0 |
| Filler-phrase hits | 70 pages | <20 |
| `hi/` slugs without hreflang decision | 9 | 0 |
| Cross-article duplicate content | 0 | 0 *(maintain)* |

---

*Audit script: `scripts/kisan_content_audit.py`. Ye report usi ke output se generate hui hai —
koi number manually likha nahi gaya.*
