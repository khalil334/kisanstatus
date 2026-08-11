# Keyword Repetition Report — `components/articles/rajya-yojana/`

Repo: [khalil334/kisanstatus](https://github.com/khalil334/kisanstatus/tree/main/components/articles/rajya-yojana)
Scan: sirf **visible article text** (headings, paragraphs, FAQs, table text) — code, imports, classNames exclude kiye gaye hain.

**Kaise padhein:** `×N` = word/phrase kitni baar aaya. `(x%)` = article ke total words ka kitna percent.
**Thumb rule:** kisi bhi single keyword ki density **1% se upar** = over-optimization risk; kisi exact phrase ka **15+ baar** repeat hona = stuffing signal.

---

## Fix Progress

| Batch | Articles | Status | Branch |
|---|---|---|---|
| 1 | StateKisanYojanaHub, NamoShetkariYojanaStatus, BiharKisanRegistrationStatusCheck2026 | ✅ **Fixed** (11 Aug 2026) | `fix/keyword-repetition-batch1` |
| 2 | MpKisanKalyanYojanaKist, IkhedutPortalStatusCheck2026, RajasthanKisanSammanNidhi9000, UpKisanKarjRahatList2026 | ⏳ Pending | — |
| 3 | #8–#13 (🟡 medium) | ⏳ Pending | — |
| 4 | #14–#15 (🟢 minor) | ⏳ Pending | — |

### ⚠️ Counting note (verified 11 Aug 2026)
Original counts in this report ran **~1.5–2× high** vs. a re-scan of the same files
(e.g. StateKisanYojanaHub `state` was ×88 not ×116; `alag` ×42 not ×70; `pm kisan` ×29 not ×43).
The **ranking and the problem itself were correct** — only the absolute numbers were inflated.
Before/after figures below are from the re-scan, so they are comparable to each other.

---

## Priority: SABSE ZYADA repetitive (pehle fix karein)

### 1. StateKisanYojanaHub.tsx — ✅ FIXED
**Before → After** (words ≈3,305 → 3,222)
- `state` ×88 (2.66%) → **×19 (0.59%)**
- `kisan` ×63 (1.91%) → **×27 (0.84%)**
- `alag` ×42 (1.27%) → **×3 (0.09%)**
- `portal` ×40 (1.21%) → **×22 (0.68%)**
- `pm kisan` ×29 → **×9** · `har state` ×17 → **×0** · `state ke/ka/ki/mein` ×52 → **×5**

**Kya kiya:** "state" → *rajya, pradesh, apne yahan, apni jagah*; "har state" hataya, headings
rajya-war kiye (`Har State Ka Short Hisaab` → `Rajya-War Short Hisaab`); "alag" → *judaa,
apna-apna, doosra*; "pm kisan" → *kendra, kendriya hissa/grant* jahan context clear tha.
Official scheme naam, links, amounts aur JSX structure chhue nahi — sirf visible text badla.

### 2. NamoShetkariYojanaStatus.tsx — ✅ FIXED
**Before → After** (words ≈2,727 → 2,679)
- `kisan` ×49 (1.80%) → **×8 (0.30%)**
- `shetkari` ×28 → **×16 (0.60%)** · `namo` ×15 · `naam` ×28 → **×23**
- `maharashtra` ×21 → **×19 (0.71%)**
- `pm kisan` ×41 (!) → **×5** · `namo shetkari` ×25 → **×14**

**Kya kiya:** "pm kisan" → *kendra, kendriya grant/list/record* (pehli 2 mentions rakhi — wo
zaroori context hai); "namo shetkari" → *ye yojana, mahasanman nidhi, rajya ka hapta, ye madad*;
"state" → *pradesh, rajya, treasury wali*; "status" → *sthiti, jaanch*. H1, official portal naam
(NSMNY, nsmny.mahait.org), target keyword phrases ("namo shetkari yojana status check",
"namo shetkari hapta kadhi milel") aur ₹ figures jaan-boojh kar rakhe — wo ranking ke liye hain.

### 3. BiharKisanRegistrationStatusCheck2026.tsx — ✅ FIXED
**Before → After** (words ≈2,474 → 2,438)
- `registration` ×43 (1.74%) → **×3 (0.12%)**
- `aavedan` ×27 (1.09%) → **×3 (0.12%)** (naya spread: `arji` ×21)
- `anudan` ×28 (1.09%) → **×13 (0.53%)**
- `number` ×33 (1.33%) → **×23 (0.94%)** · `kisan` ×31 → **×20 (0.82%)**
- `status` ×25 → **×11 (0.45%)** · `aadhaar` ×24 (unchanged — factual, har mention zaroori)
- `registration number` ×12 → **×0** (→ *panjikaran sankhya, 13-anka number, wahi number*)

**Kya kiya:** "registration" → *panjikaran, enrolment, entry, record*; "aavedan" → *arji, form,
claim*; "anudan" → *madad, muawza, sahayata*; "status" → *sthiti, haal, screen par*.
`aadhaar` intentionally chhoda — har mention ek asli step/error hai, synonym dena galat hoga.
Official portal naam, ₹ rates, dates, external links aur `Ext`/`Fig` components as-is.

### 4. MpKisanKalyanYojanaKist.tsx — 🟠 Medium-High
- `kisan` ×90 (1.87%), `kist` ×61 (1.27%), `saara` ×48, `state` ×42, `portal` ×41
- Phrases: `pm kisan` ×44, `saara portal` ×21
- **Fix:** "kist" → *installment, hapta, paisa, transfer*; "pm kisan" → *central scheme, kendriya kist*; "saara portal" pehli baar full naam, phir → *portal, us site par, wahan*.

### 5. IkhedutPortalStatusCheck2026.tsx — 🟠 Medium-High
- `arji` ×137 (2.48%) — is poore folder ka sabse zyada repeated single word
- `ghatak` ×49, `status` ×41, `stage` ×41, `print` ×36
- Phrases: `par arji` ×16, `ghatak me` ×16, `print jama` ×15, `purv manjuri` ×15
- **Fix:** "arji" → *application, aavedan, form, request*; alternate karte rahein. "ghatak" → *component, scheme category (pehli mention par bracket mein Gujarati term rakhein)*.

### 6. RajasthanKisanSammanNidhi9000.tsx — 🟠 Medium
- `kisan` ×72 (1.51%), `aadhaar` ×50 (1.05%), `rajasthan` ×48 (1.01%), `jan` ×40, `kist` ×37
- Phrases: `pm kisan` ×38, `jan aadhaar` ×27
- **Fix:** "rajasthan" har jagah zaroori nahi — *state, yahan, pradesh* use karein. "jan aadhaar" pehli mention ke baad → *JA card, wahi card, family card*.

### 7. UpKisanKarjRahatList2026.tsx — 🟠 Medium
- `loan` ×63 (2.04%), `bank` ×52 (1.68%), `list` ×38 (1.23%), `kisan` ×35 (1.13%)
- Phrases: `loan account` ×19
- **Fix:** "loan" → *karj, rin, udhaar, fasali rin*; "loan account" → *khata, KCC account, wahi account*; "list" → *suchi, beneficiary list, naamawali*.

## Medium repetition (fix karna achha rahega)

### 8. MeriFasalMeraByoraStatusCheck2026.tsx — 🟡
- `registration` ×55 (1.27%), `fasal` ×51 (1.17%); `family id` ×17, `har season` ×13
- **Fix:** "registration" → *panjikaran, entry, byora darj karna*; "fasal" kai jagah → *crop, kheti, upaj*.

### 9. OdishaCmKisanStatusCheck.tsx — 🟡
- `kisan` ×50 (1.76%) — chhota article (2,841 words), isliye density high; `cm kisan` ×27
- **Fix:** "cm kisan" → *Odisha ki scheme, ye yojana, state scheme*.

### 10. AnnadataSukhibhavaStatusCheck.tsx — 🟡
- `kisan` ×35 (1.06%), `naam` ×34 (1.03%); `annadata sukhibhava` ×19
- **Fix:** "naam" → *entry, record, listing*; scheme ka full naam pehli 2-3 mentions ke baad → *ye scheme, AP wali yojana*.

### 11. PmKisanPatiPatniRule.tsx — 🟡
- `registration` ×52 (1.5%); `jaata hai` ×18, `pm kisan` ×17
- **Fix:** "registration" → *panjikaran, entry, khata*; "do registration" → *double entry, dono ke naam*.

### 12. KrishakUnnatiYojanaStatusCheck.tsx — 🟡
- `kisan` ×47 (1.25%); `antar rashi` ×31, `khadya vibhag` ×19
- **Fix:** "antar rashi" ×31 bahut zyada hai — pehli mention par define karein, phir → *difference amount, ye rashi, wo paisa*.

### 13. PariharaPaymentStatusCheck2026.tsx — 🟡
- `aadhaar` ×46 (1.17%), `survey` ×41 (1.05%); `survey number` ×17, `village wise list` ×10
- **Fix:** "survey number" → *khasra/survey no., wahi number, zameen ka number*.

## Low repetition (theek hain, minor touch-up)

### 14. KrishakBandhuStatusCheck.tsx — 🟢
- Koi unigram 1% cross nahi karta. `krishak bandhu` ×25 thoda high — beech mein *ye scheme, Bengal wali yojana* use karein.

### 15. RythuBharosaStatusCheck.tsx — 🟢
- `rythu` ×39 (1.43%) chhote article ki wajah se high; `rythu bharosa` ×32 — alternate karein: *ye scheme, Telangana yojana, is madad*.

---

## Unique kaise karein — general rules (sab articles par lagu)

1. **Scheme ka full naam sirf**: title, H1, pehla paragraph, 1-2 H2 headings, aur FAQ mein 2-3 baar. Baaki jagah pronoun/synonym: *ye yojana, is scheme, state ka hapta*.
2. **Density target:** koi bhi keyword total words ka **0.5–0.8%** se zyada na ho (5,000-word article mein max ~35 baar).
3. **Synonym rotation** (Hinglish content ke liye):
   - kisan → farmer, annadata, khetihar, laabharthi
   - status → sthiti, progress, position, update
   - portal → website, site, online platform
   - registration → panjikaran, enrolment, entry
   - list → suchi, naamawali, beneficiary list
   - kist → installment, hapta, transfer, paisa
   - naam → entry, record, listing
4. **Sentence restructure > word swap:** "PM Kisan ka status PM Kisan portal par PM Kisan number se check karein" → "Portal par apne registration number se sthiti check karein."
5. **Headings mein variation:** har H2 mein scheme ka naam mat dohrayein — "Namo Shetkari Status Kaise Check Karein", "Namo Shetkari List 2026", "Namo Shetkari Payment"… → sirf ek heading mein naam, baaki mein *List mein naam kaise dekhein*, *Payment nahi aayi to kya karein*.
6. **Achhi khabar:** cross-article duplicate sentences **zero** mile — articles aapas mein copy-paste nahi hain. Problem sirf har article ke ANDAR keyword repetition ki hai.
