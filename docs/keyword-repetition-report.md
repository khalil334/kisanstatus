# Keyword Repetition Report — `components/articles/rajya-yojana/`

Repo: [khalil334/kisanstatus](https://github.com/khalil334/kisanstatus/tree/main/components/articles/rajya-yojana)
Scan: sirf **visible article text** (headings, paragraphs, FAQs, table text) — code, imports, classNames exclude kiye gaye hain.

**Kaise padhein:** `×N` = word/phrase kitni baar aaya. `(x%)` = article ke total words ka kitna percent.
**Thumb rule:** kisi bhi single keyword ki density **1% se upar** = over-optimization risk; kisi exact phrase ka **15+ baar** repeat hona = stuffing signal.

---

## Priority: SABSE ZYADA repetitive (pehle fix karein)

### 1. StateKisanYojanaHub.tsx — 🔴 High
- `state` ×116 (2.29%), `kisan` ×95 (1.88%), `alag` ×70 (1.38%), `yojana` ×53, `portal` ×49
- Phrases: `pm kisan` ×43, `har state` ×28, `state ke/ka/ki/mein` ×77 combined, `official portal` ×19
- **Problem:** "state" aur "har state" har paragraph mein hai; "alag" 70 baar filler ki tarah use hua hai.
- **Fix:** "state" → *rajya, pradesh, region, apne yahan*; "har state" → *alag-alag rajyon mein, rajya-war*; "alag" → *bhinn, apna-apna, judaa*; ya sentence hi restructure karein ("Har state ka portal alag hai" → "Rajya-war portal ki list neeche di gayi hai"). "pm kisan" jahan context clear ho wahan → *central scheme / kendriya yojana / is scheme*.

### 2. NamoShetkariYojanaStatus.tsx — 🔴 High
- `kisan` ×92 (1.81%), `shetkari` ×57, `naam` ×51, `namo` ×50, `maharashtra` ×38
- Phrases: `pm kisan` ×73 (!), `namo shetkari` ×50, `7 12` ×25
- **Problem:** "pm kisan" 73 baar — 5,000-word article mein har 70 words par ek baar. "namo shetkari" bhi 50 baar.
- **Fix:** Pehli mention ke baad → *kendriya yojana, central scheme, PM-KISAN wali list, us scheme*. "namo shetkari" → *ye yojana, state ka hapta, mahasanman nidhi, is scheme*. "naam" repeats → *entry, record, beneficiary listing*.

### 3. BiharKisanRegistrationStatusCheck2026.tsx — 🔴 High
- `registration` ×67 (1.66%), `kisan` ×58, `number` ×56, `aavedan` ×49, `aadhaar` ×48, `anudan` ×45, `status` ×43
- Phrases: `registration number` ×22, `aadhaar se` ×18
- **Problem:** 7 keywords 1%+ density par — is folder ka sabse stuffed article.
- **Fix:** "registration" → *panjikaran, DBT entry, enrolment*; "registration number" → *13-anko wala number, panjikaran sankhya, wahi number*; "aavedan" → *application, arji, form*; "status" → *sthiti, current position, progress*.

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
