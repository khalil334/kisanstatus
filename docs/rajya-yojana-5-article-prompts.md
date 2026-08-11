# Rajya Yojana — 5 New Articles ke Writing Prompts
strictly rules no repeative keywords no copy paste unique style and unique words real words helpful words natural human style 
**Repo:** github.com/khalil334/kisanstatus · **Folder:** `components/articles/rajya-yojana/`
**Source plan:** `docs/rajya-yojana-5-new-articles.md`

---

## GLOBAL RULES (har prompt ke saath apply hongi — prompt me paste karte waqt inko bhi bhejo)

1. **Language:** Pura article **Hinglish** (Roman Hindi + English mix) — jaise ek kisan-helper bhai WhatsApp par samjhata hai. Pure English paragraph BILKUL nahi, pure Devanagari paragraph bhi nahi. Devanagari sirf portal ke actual button/field naam quote karne ke liye (jaise "आवेदन की स्थिति").
2. **Length:** Minimum **2000 words** (2200–2600 ideal). Word count fluff se nahi, real steps + real examples + troubleshooting se badhao.
3. **100% humanize:** Chhoti-badi mili-juli sentence length. Kahin 4 word ka sentence, kahin 30 word ka. Bracket me side-comment ( jaise yahi wali cheez ), ek-do jagah dash — se soch todna, kahin rhetorical question. "Moreover / Furthermore / In conclusion / delve / seamless / robust / leverage / tapestry / it is important to note" jaise AI words **strictly banned**.
4. **Spelling mistakes:** Har article me **exactly 2 se 4 chhoti natural typo** daalo (jaise "pahle" → "pehle", "documnet", "recieve", "goverment", "aplication"). **Sirf normal Hinglish shabdon me** — scheme ka naam, portal URL, amount, date, helpline number, keyword ya heading me **kabhi nahi**. Typos ko separate list me note bhi karo article ke end me `<!-- typos: ... -->` comment ke roop me (dev ke liye).
5. **No fabrication:** Amount, date, helpline, portal path, GO number — jo confirm nahi, wo **likho hi na**. Uski jagah likho "abhi last date official portal par check karo, ye har season badalti hai". Fake screenshots/fake beneficiary naam se bhi bacho.
6. **Real examples with source link:** Kam se kam **3 real examples** (real district/village, real scheme window, real news case) + har example ke saath **official ya news source ka clickable link** (portal page, gov PIB release, ya credible news). Link `rel="nofollow noopener" target="_blank"` ke saath external.
7. **Uniqueness:** Paanch article ka **frame, intro hook, heading style, FAQ style, table style, internal-link style — sab alag**. Neeche har prompt me uska apna frame diya hai; usse hatna nahi hai. Ek article ka structure doosre me copy hua to reject.
8. **Metadata (Google-friendly):** Title 55–60 char, primary keyword shuru me, saal include. Meta description 145–158 char, ek benefit + ek action verb. Slug plan wala hi. `keywords`, `og:title`, `og:description`, plus **JSON-LD schema** (jo prompt me bola gaya hai — sab me alag type).
9. **Tech pattern (existing site ke hisaab se):** `lib/rajya-yojana-data.ts` me entry (slug, mainKeyword, secondaryKeywords, officialPortal), component `components/articles/rajya-yojana/<Name>.tsx`, hero + 4-5 webp `public/images/articles/rajya-yojna/<slug>/`, related links me PM Kisan Master Guide + Payment Failed Fix.
10. **E-E-A-T:** Article me ek line "last updated <month year>" + "ye guide official portal ke steps par based hai, koi bhi paisa kisi agent ko na dein" type honest warning. Sales tone zero.

---

# 1. Meri Fasal Mera Byora Status Check 2026 (Haryana)

**Slug:** `meri-fasal-mera-byora-status-check-2026` · **Portal:** fasal.haryana.gov.in
**Primary keyword:** `meri fasal mera byora status check`

### PROMPT (copy-paste karke use karo)

```
Tum ek Haryana ka experienced CSC/atal seva kendra operator ho jo pichle 6 saal se kisano ka Meri Fasal Mera Byora registration khud apne haath se bhar raha hai. Us tone me likho — jaise counter par baithe kisan ko samjha rahe ho.

ARTICLE: "Meri Fasal Mera Byora Status Check 2026" — Hinglish, 2200+ words, kisanstatus.com ke liye.

FRAME (sirf isi article ka): **SEASONAL DEADLINE TIMELINE frame.**
Pura article Rabi/Kharif ke calendar ke around ghoomega — "registration window khula → verification → e-Kharid mandi gate pass → MSP payment bank me". Har section ek stage hai us safar ka. Section headings statement style rakho, question style NAHI (question style article #2 ke liye reserved hai).

INTRO HOOK (unique): Ek **mandi ka scene** se shuru karo — gate par khadi tractor-trolley, aur operator keh raha hai "bhai byora me verify nahi hua, gate pass nahi banega". 3-4 chhote paragraph, phir seedha promise: "aaj ye article padh ke aap 5 minute me apna status khud check kar loge, aur agar reject hua to kya karna hai wo bhi."

MUST-COVER SECTIONS (isi order me):
1. Meri Fasal Mera Byora asal me kya hai — aur MSP se iska direct rishta (MFMB ke bina e-Kharid par fasal nahi bik sakti, ye clearly likho)
2. Registration se pehle 5 cheezein tayyar rakho — checklist (family ID/PPP, khewat-killa number, bank passbook, mobile OTP wala number, aadhaar)
3. Step-by-step registration — fasal.haryana.gov.in par "Farmer Corner" → registration flow, screen-by-screen (jo field ka naam Devanagari me dikhta hai wo Devanagari me quote karo)
4. **Status check ke 3 raste** — (a) registration/mobile number se, (b) family ID se, (c) CSC operator ke through — aur teeno me kya different dikhta hai
5. Status ke matlab decode karo — Pending / Verified by Patwari / Rejected / Payment Released. Ek chhota **2-column table** (status → aapko kya karna hai). Note: table sirf 2 column ka, kyunki #4 me bada multi-column table aayega.
6. Dhaan seedhi bijai (DSR) incentive ₹4500/acre wala subsection — eligibility + status kahan dikhta hai (amount tabhi likho jab confirm ho, warna "prati acre incentive" likh do)
7. Mera Pani Meri Virasat ₹8000/acre subsection — same rule
8. MSP payment bank me nahi aaya to? — 4 real causes (bank account frozen/KYC, IFSC merge ke baad badla, patwari verification pending, gata number mismatch) aur har cause ka fix
9. Last date ka sach — kyu har season badalti hai, aur kahan check karni hai (koi fixed date NA likho)
10. Helpline + district-level escalation (sirf wo number jo official portal/press release par mile; warna "portal ke Contact Us page par updated number milega")

REAL EXAMPLES (3, source link ke saath):
- Ek real Haryana district ka mandi-procurement example (Karnal / Kaithal / Sirsa jaisa) — official portal ya news source link
- Bank IFSC merge ke baad payment fail hone wala real case (bank merger ki official/news source)
- DSR ya Mera Pani Meri Virasat ka official scheme page link
Links external, nofollow, new tab.

FAQ STYLE (sirf isi article ka): **"Kisan poochta hai / Operator jawab deta hai" dialogue format.** 8 FAQ, sawaal kisan ki asli boli me ("bhai mera status pending hi dikha raha hai 15 din se"), jawab 2-4 line ka practical. Accordion nahi, dialogue block.

INTERNAL LINK STYLE (sirf isi article ka): **In-line contextual links only** — paragraph ke beech natural anchor par (jaise "...agar PM-Kisan ka paisa bhi ruka hua hai to [payment failed fix guide] dekh lo"). End me alag "Related Articles" list NAHI banani. 4-5 in-line links: PM Kisan Master Guide, Payment Failed Fix, aur 2-3 doosre rajya-yojana articles.

METADATA:
- Title (55-60 char): "Meri Fasal Mera Byora Status Check 2026" se shuru
- Meta description 145-158 char, "5 minute me" jaisa concrete benefit + action verb
- JSON-LD: **HowTo** schema (registration + status check steps)

TONE CHECK: bilkul zero corporate tone. 2 se 4 chhoti spelling mistake daalo (rules ke hisaab se), aur end me `<!-- typos: ... -->` comment me list karo.
```

---

# 2. Bihar Kisan Registration Status Check 2026 (DBT Agriculture)

**Slug:** `bihar-kisan-registration-status-check-2026` · **Portal:** dbtagriculture.bihar.gov.in
**Primary keyword:** `dbt agriculture bihar status check`

### PROMPT

```
Tum Bihar ke ek Kisan Salahkar (advisor) ho jo panchayat level par roz 30-40 kisano ka DBT registration aur anudan status dekhta hai. Bhojpuri-tinge wala Hinglish, par readable — over-the-top dialect nahi.

ARTICLE: "Bihar Kisan Registration Status Check 2026 — DBT Agriculture" — Hinglish, 2300+ words.

FRAME (sirf isi article ka): **"EK REGISTRATION NUMBER = SAARI SCHEME" hub-and-spoke frame.**
Central idea: Bihar me kisan registration number ek master key hai. Article ka structure = beech me registration number, aur uske chaaro taraf spokes — diesel anudan, krishi input anudan (badh/sukhad), beej anudan, PM-Kisan link, kisan credit. Har spoke ka apna chhota block, aur har block me "iska status kahan dikhega".
Headings **question style** me rakho (jaise "Registration number kho gaya to kaise nikale?") — statement style #1 ne le liya hai.

INTRO HOOK (unique): Ek **flashback/badh (flood) story** se shuru — 2024-25 ki barish ke baad input anudan ke liye line, aur do kisan: ek ka paisa 12 din me aa gaya, doosre ka 4 mahine atka. Farq sirf ek tha — registration ki detail. Phir promise. Mandi scene REPEAT nahi karna (wo #1 me hai).

MUST-COVER SECTIONS:
1. DBT Agriculture Bihar portal kya hai — aur kyu iske bina koi bhi krishi anudan nahi milta
2. Registration ke 3 type (Raiyat / Gair-Raiyat / dono) — kis kisan ko konsa chunna hai, aur galat chunne par kya hota hai
3. Naya registration kaise kare — step by step (aadhaar + demographic auth wala step alag se samjhao, yahi jagah sabse zyada log fasste hain)
4. **Registration status check** — full flow, aur "Application Status" vs "Registration Enquiry" ka farq
5. Registration number kho gaya / bhool gaya to kaise nikale — aadhaar se, naam+panchayat se, aur CSC ke through
6. Spoke blocks (har ek 150-250 word): Diesel Anudan status · Krishi Input Anudan (badh/sukhad) status · Beej Anudan / BRBN status · PM-Kisan aur DBT link ka rishta · KCC
7. Status me aane wale common error messages + unka exact matlab (Aadhaar authentication failed, name mismatch, account invalid, LPC pending)
8. Verification chain kaun-kaun dekhta hai — Kisan Salahkar → Krishi Samanvayak → BAO. Escalation kis level par karna hai
9. Bank account se paisa reject ho gaya to re-submission process
10. Dhyan rakho: agent ko paisa mat do — DBT registration free hai (honest warning)

TABLE STYLE (sirf isi article ka): ek **3-column table** — Scheme naam | Status kahan dikhega | Kitne din lagte hain (din tabhi likho jab source ho, warna "official timeline portal par"). Sirf ek table, decorative table nahi.

REAL EXAMPLES (3, source link ke saath):
- Bihar badh/sukhad input anudan ka real notified district round (official DBT portal notice ya Bihar Krishi Vibhag page link)
- Diesel anudan ka real season window (official source)
- PM-Kisan Bihar beneficiary scale ka official data point (pmkisan.gov.in dashboard ya PIB link)

FAQ STYLE (sirf isi article ka): **"Galatfehmi vs Sach" myth-buster format.** 7 items — har ek me "❌ Log kehte hain: ..." aur "✅ Asal baat: ...". Dialogue format NAHI (wo #1 me hai).

INTERNAL LINK STYLE (sirf isi article ka): article ke beech me **ek highlighted "Aage kya padhna hai" box** (3 links) + end me 2 in-line links. Total 5. PM Kisan Master Guide + Payment Failed Fix zaroor.

METADATA:
- Title: "DBT Agriculture Bihar Status Check 2026" primary keyword front-loaded
- Meta description me "registration number", "anudan status" dono aayein
- JSON-LD: **FAQPage** schema

2-4 natural typo + `<!-- typos: ... -->` list. AI-flavour words zero.
```

---

# 3. Parihara Payment Status Check 2026 — Village Wise (Karnataka)

**Slug:** `parihara-payment-status-check-2026` · **Portal:** parihara.karnataka.gov.in
**Primary keyword:** `parihara payment status check`

### PROMPT

```
Tum ek Karnataka ke gram-panchayat level data-entry operator ho jo bele hani (crop loss) survey aur Parihara payment list roz kholta hai. Hinglish likho, par Kannada ke actual portal words Kannada script me quote karo (jaise "ಪರಿಹಾರ", "ಗ್ರಾಮ").

ARTICLE: "Parihara Payment Status Check 2026 — Village Wise List" — Hinglish, 2200+ words.

FRAME (sirf isi article ka): **TROUBLESHOOTING / DECISION-TREE frame.**
Ye article seedha problem-solving mode me likha jayega: "Aapka paisa nahi aaya? Chalo pata karte hain kahan atka hai." Structure = branches. Branch A: naam list me hai hi nahi. Branch B: list me hai par payment pending. Branch C: payment released dikha raha par bank me nahi. Branch D: dusre ke khate me chala gaya / joint holder issue. Har branch ke andar sub-steps.
Headings **imperative/command style** ("Pehle ye check karo", "Ab ye wala step karo") — statement (#1) aur question (#2) style se alag.

INTRO HOOK (unique): **Weather/calamity ke numbers se cold open** — ek line me bataao ki jab bhi sukha ya ativrushti hoti hai, agle 3 hafte me village-wise Parihara search aasman par chadh jati hai; aur 10 me se 6 kisan galat page par status dhundh rahe hote hain (ye claim general rakho, fake % source ke bina na do — behtar: "bahut se kisan galat page par pahunchte hain"). Phir "is article me hum sirf sahi page aur sahi flow dikhayenge". Story-based hook nahi (wo #2 me hai), mandi scene nahi (#1).

MUST-COVER SECTIONS:
1. Parihara kya hai — bele hani, NDRF/SDRF relief, aur DBT se kaise aata hai
2. Konsa portal sahi hai — parihara.karnataka.gov.in vs landrecords.karnataka.gov.in vs Bhoomi. Kis kaam ke liye konsa (ye clarity is article ka biggest value-add hai)
3. **Method 1 — Aadhaar number se payment status** (step by step)
4. **Method 2 — Village-wise / gram-wise list** (district → taluk → hobli → village drill-down, aur PDF/list read kaise karein)
5. Method 3 — survey number / RTC (pahani) se cross-check
6. Branch A: naam list me nahi → survey kab hua tha, VA/RI se kaise confirm karein, objection kaise daalein
7. Branch B: pending → kis level par atka (village accountant → tehsildar → DC office), realistic wait
8. Branch C: released par bank me nahi → aadhaar-bank seeding, NPCI mapping, account dormant
9. Branch D: joint khata / batwara ke case me kiske khate me jata hai
10. FRUITS ID aur Parihara ka connection — kyu FRUITS registration ke bina relief atak sakta hai
11. Kya na karein — screenshot bech-ne wale agent, fake "parihara list download" APK se warning

REAL EXAMPLES (3, source link ke saath):
- Karnataka ka real drought/flood declared-taluk round (Revenue Dept / official notification ya credible news link)
- FRUITS portal ka official page link with what it does
- Ek real relief-disbursement announcement (official ya news source)

FAQ STYLE (sirf isi article ka): **"Error message → Iska matlab → Fix" 3-line micro-FAQ**, 9 items, table-free bullet blocks. Dialogue (#1) aur myth-buster (#2) style repeat nahi.

INTERNAL LINK STYLE (sirf isi article ka): **har major branch ke end me ek single "next step" link line** ("Bank ka issue lag raha hai? → Payment Failed Fix"). Yehi pattern 5 jagah. Koi box nahi, koi Related list nahi.

METADATA:
- Title: "Parihara Payment Status Check 2026 Village Wise" (60 char ke andar)
- Meta description me "Aadhaar se" + "village wise list" dono
- JSON-LD: **HowTo** + **BreadcrumbList** (dono)

2-4 typo (Kannada words aur portal naam me NAHI) + `<!-- typos: ... -->`.
```

---

# 4. iKhedut Portal Status Check 2026 (Gujarat)

**Slug:** `ikhedut-portal-status-check-2026` · **Portal:** ikhedut.gujarat.gov.in
**Primary keyword:** `ikhedut portal status check`

### PROMPT

```
Tum ek Gujarat ke Gram Sevak / VCE ho jo iKhedut par kisano ki arji (application) roz bharta hai — tractor sahay, drip, tar fencing, kheti na sadhan. Practical Hinglish, thoda Gujarati flavour (arji, sahay, khedut, labh) — par har Gujarati word ke aage bracket me Hindi/English meaning.

ARTICLE: "iKhedut Portal Status Check 2026 — Arji Status, Yojana List, Subsidy" — Hinglish, 2400+ words.

FRAME (sirf isi article ka): **APPLICATION LIFECYCLE / SUBSIDY-MARKETPLACE frame.**
iKhedut ko ek "subsidy marketplace" ki tarah explain karo jisme window khulti-band hoti hai. Structure = lifecycle stages: Window khula → Arji bhari → Print + documents jama → Pre-approval (purv manjuri) → Kharidi (purchase) → Bill upload → Inspection → Subsidy credit. Har stage me "yahan status kya dikhega" + "yahan log kahan fasste hain".
Headings **stage/numbered-journey style** ("Stage 3 — Purv Manjuri ka intezaar") — baaki teeno se alag.

INTRO HOOK (unique): **"Window khulne ka countdown"** angle — batao ki iKhedut par ek scheme ki window kabhi-kabhi sirf kuch din khulti hai aur target pura hote hi band ho jati hai; jo pehle apply karta hai wo labh le jata hai. Do line me ek relatable moment: kisan cyber cafe pahuncha, window band. Phir promise: "is guide me window tracking + status check + reject hone par kya karna, teeno."
Mandi (#1), flood story (#2), weather cold-open (#3) — teeno se alag rehna.

MUST-COVER SECTIONS:
1. iKhedut portal kya hai — Krushi/Bagayat/Pashupalan/Matsya, ek hi chhat ke neeche 100+ sahay yojana
2. **Yojana list 2026 kaise dekhein** — ghatak-wise, aur window open/closed kaise pata chalta hai
3. Arji bharne se pehle documents checklist — 7/12 aur 8-A utaara, aadhaar, bank passbook, jaati certificate (agar lagu), quotation
4. Arji kaise bhare — step by step, aur **arji print** ka critical role (bahut se kisan print jama karna bhool jate hain aur arji apne aap invalid ho jati hai — ye zor deke likho)
5. **Arji status check** — "Arji Status Check" page par arji number + mobile/land detail se; aur confirmation number kho gaya to kya
6. Status ke stages ka matlab: Pending / Verified / Purv Manjuri (pre-approval) / Bill Verification / Payment / Reject — har ek me next action
7. Popular schemes ka mini-block (tractor sahay, drip/micro-irrigation, tar fencing, godown, pump set) — kis department ke neeche, status kahan
8. Reject hone ke top 6 karan aur unka fix (print jama nahi, quotation mismatch, target khatam, duplicate survey number, bank detail galat, documnet blur)
9. Subsidy amount kitni aur kab aati hi — % based logic samjhao, fixed rupee amount tabhi likho jab official page se confirm ho
10. Draw/lottery system — jab applications target se zyada, to selection kaise hoti hai
11. Agent se bachao + free helpline / VCE route

TABLE STYLE (sirf isi article ka): ek **stage-wise progress table** — Stage | Portal par kya dikhega | Kisan ka action | Typical atak-ne ki wajah (4 column). #2 ke 3-column table se alag.

REAL EXAMPLES (3, source link ke saath):
- iKhedut ka ek real yojana/ghatak page ya official window notice (ikhedut.gujarat.gov.in link)
- Ek real Gujarat subsidy scheme announcement (official dept / PIB / credible news link)
- 7/12 utaara nikalne ka official AnyROR Gujarat link

FAQ STYLE (sirf isi article ka): **"Quick answer + Detail" two-tier FAQ** — 8 sawaal, har ek me pehle ek bold one-line answer, phir 2-3 line detail. Baaki teeno FAQ styles se alag.

INTERNAL LINK STYLE (sirf isi article ka): **sirf ek curated end-of-article "Ye bhi kaam aayega" 5-link list** with 1-line description per link (in-line links nahi, next-step lines nahi, box nahi). PM Kisan Master Guide + Payment Failed Fix include.

METADATA:
- Title: "iKhedut Portal Status Check 2026" + "Arji Status" (60 char cap)
- Meta description: yojana list + arji status + subsidy — teen intent, 158 char ke andar
- JSON-LD: **Article** + **ItemList** (yojana list ke liye)

2-4 typo + `<!-- typos: ... -->` list. Koi bhi fake amount/date nahi.
```

---

# 5. UP Kisan Karj Rahat List 2026 (Uttar Pradesh)

**Slug:** `up-kisan-karj-rahat-list-2026` · **Portal:** upkisankarjrahat.upsdc.gov.in
**Primary keyword:** `up kisan karj rahat list`

### PROMPT

```
Tum ek UP ke sahkari samiti (co-operative society) ke purane karyakarta ho jisne karj rahat yojana ke time hazaro kisano ki list check ki hai aur shikayat (complaint) file ki hai. Awadhi/Purvanchali touch wala Hinglish — respectful, thoda dheema, "dekhiye bhaisaab" wala tone.

ARTICLE: "UP Kisan Karj Rahat List 2026 — Karj Mafi Status Kaise Dekhe" — Hinglish, 2400+ words.

FRAME (sirf isi article ka): **MYTH-CLEARING + ELIGIBILITY REALITY-CHECK frame.**
Ye article pehle expectation set karta hai (karj mafi kiske liye thi, kitne ka loan, kab tak ka — ye scheme ke official criteria ke hisaab se, guess se nahi), phir list check karata hai, phir complaint route deta hai. Kyunki is keyword par aane wale 60% log actually eligible hi nahi hote — unko honest jawab dena hi is page ki USP hai.
Headings **conversational address style** ("Chaliye pehle ye samajh lijiye ki list me naam kab aata hai") — baaki chaar se alag.

INTRO HOOK (unique): **Ek WhatsApp forward ka reality check** se shuru — "aapke gaon ke group me bhi wo message aaya hoga: 'sabka karz maaf, list check karo, link par click karo'. Ruk jaiye." Phir batao ki asli portal ek hi hai aur fake link se kya nuksan hota hai. Phir promise.
Mandi (#1), flood story (#2), weather (#3), countdown (#4) — sabse alag. Fake-link warning is article ka signature opening hai.

MUST-COVER SECTIONS:
1. UP Kisan Karj Rahat Yojana asal me kya hai — kis category ke loan, kis cut-off date tak, kis limit tak (sirf official criteria; jo confirm nahi wo "official portal/GO par verify karein")
2. **Kaun eligible hai aur kaun nahi** — honest list, aur "agar aapka loan private bank / gold loan / KCC renewal ke baad ka hai to..." wale reality checks
3. Asli portal kaunsa hai — upkisankarjrahat.upsdc.gov.in — aur fake sites/APK ki pehchan (URL check karne ka 3-point method)
4. **Karj Rahat list kaise dekhe** — step by step (district → bank → branch → kisan credit card / loan account number)
5. Loan account number kahan milta hai — passbook, sanction letter, samiti record
6. List me naam hai — aage kya hoga (bank me entry, NOC, statement kaise le)
7. **Naam nahi hai to — complaint (shikayat) darj karne ka pura process** + complaint status check + realistic timeline
8. Common reasons for exclusion — loan date criteria se bahar, account NPA classification, aadhaar-loan mismatch, ek se zyada account, bank data upload pending
9. Karj mafi ke naam par thagi — kaise pehchane, kahan report karein (cyber crime + bank)
10. PM-Kisan / KCC ke saath rishta — karj rahat milne se PM-Kisan par asar padta hai ya nahi (clear, honest answer)
11. Aage kya — agar aap eligible nahi to konsi doosri UP/central scheme kaam aa sakti hai (sirf real schemes, links ke saath)

REAL EXAMPLES (3, source link ke saath):
- UP Kisan Karj Rahat Yojana ka official portal/GO page link with its stated criteria
- PM-Kisan UP beneficiary scale ka official data point (pmkisan.gov.in ya PIB link)
- Ek real fraud/fake-link advisory (police cyber cell, PIB Fact Check, ya credible news link)

FAQ STYLE (sirf isi article ka): **"Sach ya Jhooth" (True/False) rapid-fire quiz format** — 10 statements, har ek par "Sach ✔" ya "Jhooth ✘" + 1-2 line explanation. Baaki chaar FAQ styles se completely alag.

INTERNAL LINK STYLE (sirf isi article ka): **do-do links ke chhote inline "pair" clusters**, 2 jagah article ke beech me (ek eligibility section ke baad, ek complaint section ke baad), plus 1 link intro me. Total 5. PM Kisan Master Guide + Payment Failed Fix include.

METADATA:
- Title: "UP Kisan Karj Rahat List 2026" + "Karj Mafi Status" (60 char cap)
- Meta description: list check + complaint — dono intent, 158 char ke andar
- JSON-LD: **FAQPage** + **GovernmentService**

2-4 typo (scheme naam / portal / number me NAHI) + `<!-- typos: ... -->` list. Zero fake amount, zero fake date, zero fake list link.
```

---

## Uniqueness Matrix (quick check — koi bhi cell repeat na ho)

| # | Article | Frame | Intro hook | Heading style | FAQ style | Internal-link style | Table | JSON-LD |
|---|---------|-------|-----------|---------------|-----------|--------------------|-------|---------|
| 1 | MFMB Haryana | Seasonal deadline timeline | Mandi gate scene | Statement | Kisan–Operator dialogue | In-line contextual only | 2-col | HowTo |
| 2 | Bihar DBT | Hub & spoke (one number, all schemes) | Flood flashback, 2 kisan | Question | Myth vs Sach | Mid-article box + 2 in-line | 3-col | FAQPage |
| 3 | Parihara Karnataka | Troubleshooting decision-tree | Calamity cold-open | Imperative/command | Error → Meaning → Fix | Per-branch "next step" line | none | HowTo + Breadcrumb |
| 4 | iKhedut Gujarat | Application lifecycle / marketplace | Window countdown | Stage-numbered | Quick answer + Detail | End-of-article curated 5-list | 4-col stage table | Article + ItemList |
| 5 | UP Karj Rahat | Myth-clearing + eligibility reality check | WhatsApp forward warning | Conversational address | Sach ya Jhooth quiz | Inline 2-link pair clusters | none | FAQPage + GovernmentService |

## Writing order (traffic potential ke hisaab se)

1. Meri Fasal Mera Byora (Haryana) → 2. UP Kisan Karj Rahat → 3. Parihara (Karnataka) → 4. Bihar DBT → 5. iKhedut (Gujarat)

## Final QA checklist (article submit karne se pehle)

- [ ] 2000+ words, Hinglish, koi pura English paragraph nahi
- [ ] 2–4 typo, sirf normal shabdon me, `<!-- typos: -->` list mojood
- [ ] 3+ real example, har ek ke saath live source link (nofollow, new tab)
- [ ] Koi bhi amount / date / helpline fabricate nahi kiya
- [ ] Frame, hook, headings, FAQ style, internal-link style — matrix ke hisaab se unique
- [ ] Title ≤60 char, meta description 145–158 char, JSON-LD assigned type ke hisaab se
- [ ] `lib/rajya-yojana-data.ts` entry + component + 4–5 webp images
- [ ] "Last updated" line + "kisi agent ko paisa na dein" warning
- [ ] AI-flavour words (moreover, furthermore, delve, seamless, robust, tapestry) — zero
