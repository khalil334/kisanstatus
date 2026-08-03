# 10 Article Plan — State Kisan Yojana Cluster (kisanstatus.com)

**Section:** `/rajya-yojana/` (naya) · **Data file:** `lib/rajya-yojana-data.ts`

Ye plan sirf keywords ke liye hai. Har article ka **main keyword** (page ka target — title + H1 + slug isi pe) aur **secondary keywords** (H2/H3 aur body mein natural tarah se) neeche diye hain.

Amounts, dates aur numbers article likhte waqt **official portal se confirm karke** likhna — is file mein jaan-boojh kar koi number nahi rakha, taake purana data copy na ho jaye.

---

## Rule (har article pe apply karo)

| Cheez | Rule |
|---|---|
| Main keyword | Title mein, H1 mein, slug mein, first 100 words mein — ek hi baar target karo |
| Secondary keywords | H2/H3 headings mein tod kar daalo, force mat karo |
| Ek page = ek main keyword | Do articles ka main keyword same na ho (cannibalization) |
| Numbers | Official portal se verify — "confirmed" date sirf tab likho jab notification aa gaya ho |
| Internal link | Har state article → hub (#9) + apne matching PM Kisan article ko link kare |

---

## Tier 1 — State income-support schemes

### 1. Annadata Sukhibhava (Andhra Pradesh)
- **Slug:** `annadata-sukhibhava-status-check-2026`
- **Main keyword:** `annadata sukhibhava status check`
- **Secondary keywords:** annadata sukhibhava payment status · annadata sukhibhava eligibility · annadata sukhibhava beneficiary list · ysr rythu bharosa new name · annadata sukhibhava installment date · अन్నदాత సుఖీభవ status
- **Portal:** annadathasukhibhava.ap.gov.in
- **Extra angle (H2 banao):** tenant farmer + CCRC card wale bhi eligible — ye PM Kisan mein nahi hota

### 2. Rythu Bharosa (Telangana)
- **Slug:** `rythu-bharosa-status-check-2026`
- **Main keyword:** `rythu bharosa status check`
- **Secondary keywords:** rythu bandhu list · rythu bharosa payment status · rythu bharosa per acre amount · rythu bharosa phase wise payment · rythu bandhu vs rythu bharosa
- **Extra angle:** payment phase acreage ke hisaab se release hota hai — isliye kisi ka paisa "late" lagta hai

### 3. Namo Shetkari Mahasanman Nidhi (Maharashtra)
- **Slug:** `namo-shetkari-yojana-status-check-2026`
- **Main keyword:** `namo shetkari yojana status check`
- **Secondary keywords:** namo shetkari hapta kadhi milel · namo shetkari beneficiary list · namo shetkari yojana registration · pm kisan aaya namo shetkari nahi aaya · नमो शेतकरी महासन्मान निधी
- **Portal:** nsmny.mahait.org
- **Extra angle:** alag apply nahi karna padta (PM Kisan eligible = auto eligible) + list se naam kat jane ki wajah

### 4. MP CM Kisan Kalyan Yojana
- **Slug:** `mp-kisan-kalyan-yojana-kist-status`
- **Main keyword:** `cm kisan kalyan yojana kist kab aayegi`
- **Secondary keywords:** mp kisan kalyan yojana status check · saara portal kisan kalyan status · kisan kalyan yojana beneficiary list mp · mp kisan kalyan yojana amount
- **Portal:** saara.mp.gov.in
- **Care:** amount pe sources conflict karte hain — SAARA portal se confirm karo, guess mat karo

### 5. Krishak Bandhu (West Bengal)
- **Slug:** `krishak-bandhu-status-check-2026`
- **Main keyword:** `krishak bandhu status check`
- **Secondary keywords:** krishak bandhu verification list · krishak bandhu voter id se status · krishak bandhu death benefit · krishak bandhu payment date · কৃষক বন্ধু status
- **Portal:** krishakbandhu.wb.gov.in
- **Extra angle:** status Voter ID (EPIC) se check hota hai, Aadhaar se nahi — poore site pe ye unique hai

### 6. Odisha CM Kisan (purani KALIA)
- **Slug:** `odisha-cm-kisan-status-check-2026`
- **Main keyword:** `cm kisan odisha status check`
- **Secondary keywords:** kalia list · cm kisan beneficiary list odisha · kalia yojana new name · cm kisan odisha landless farmer benefit · cmkisan.odisha.gov.in status
- **Extra angle:** landless agricultural households ko bhi milta hai — PM Kisan mein nahi milta, naya audience

### 7. Rajasthan Kisan Samman Nidhi
- **Slug:** `rajasthan-kisan-samman-nidhi-9000`
- **Main keyword:** `rajasthan kisan samman nidhi 9000`
- **Secondary keywords:** rajasthan kisan samman nidhi status check · rajasthan kisan nidhi badhi · rajasthan kisan samman nidhi kist · mukhyamantri kisan samman nidhi rajasthan
- **Care:** badhotri announce hui hai, implementation notification pending — "official notification ka intezar hai" saaf likho

---

## Tier 2 — Central gaps

### 8. Pati-patni dono ko PM Kisan?
- **Slug:** `pm-kisan-pati-patni-dono-ko-milega`
- **Main keyword:** `pati patni dono ko pm kisan milega ya nahi`
- **Secondary keywords:** pm kisan family rules · ek parivar mein kitne logo ko pm kisan · pm kisan exclusion list · pm kisan kaun eligible nahi hai · pm kisan galat paisa wapas kaise karein
- **Internal links:** `PmKisanVoluntarySurrenderGuide` + `PmKisanRejectedStatusReApplyGuide`

### 9. Hub page — sab state schemes ek jagah
- **Slug:** `state-kisan-yojana-list-all-states-2026`
- **Main keyword:** `state kisan yojana list`
- **Secondary keywords:** kis state mein kitna paisa milta hai kisan ko · pm kisan plus state scheme · rajya kisan samman nidhi list · state wise farmer scheme amount
- **Format:** ek table — State → scheme → amount → portal → status check link. Har row apne detail article (#1–#7) ko link kare. Ye cluster ka hub hai, #1–#7 ke baad likho.

### 10. PM Kisan kist tracker — naya article NAHI
- **Page:** maujooda `/articles/PmKisan24viKist2026` (isko hi update karo)
- **Main keyword:** already target ho raha hai — `pm kisan 24vi kist kab aayegi`
- **Secondary keywords jo add karne hain:** pm kisan 24vi kist status check · pm kisan kist list 2026 · pm kisan next installment date
- **Kya karna hai:** top pe "Latest Update — [date]" box · kist release ke usi din update · release se pehle "expected" hi likho, "confirmed" nahi · kist ke din #1–#7 state articles ko link karo

---

## Order (kaunsa pehle likho)

1. #7 Rajasthan — news fresh hai, competition kam
2. #1 Annadata Sukhibhava — sabse bada amount
3. #4 MP — kist ka sawal abhi sabse zyada search ho raha hai
4. #3 Namo Shetkari — bada beneficiary base
5. #2 Rythu Bharosa
6. #5 Krishak Bandhu
7. #6 Odisha
8. #8 Pati-patni
9. #9 Hub — sab detail pages ready hone ke baad

#10 (tracker update) kist release se pehle kar lena.

---

## Technical note

`lib/rajya-yojana-data.ts` mein har article ka `status` field hai:

- `'planned'` — abhi likha nahi. Sitemap / RSS / llms.txt / listing page mein **nahi** aayega, URL 404 dega. Safe.
- `'live'` — component ban gaya hai. Tab sitemap mein aa jayega.

Article likhne ke baad **do cheezein** karni hain:
1. `components/articles/rajya-yojana/<Component>.tsx` banao
2. `app/rajya-yojana/[slug]/page.tsx` ke `COMPONENTS` map mein add karo, aur data file mein `status: 'live'` kar do

Isse aadhe-adhoore pages Google ko kabhi nahi dikhte (soft-404 ka masla nahi hoga).
