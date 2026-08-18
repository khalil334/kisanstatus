# KisanStatus.com — 15 New Articles: Keywords + Har Article Ka Alag Prompt

> Updated: Aug 2026 · Saare 110 existing slugs check karke banaya — koi overlap nahi.
> Selection: Google pe high search + bari sites (news portals, banks, sarkari sites) detail me
> cover nahi karti — sirf weak blogs rank karte hain.

---
Jo articles phly se ha website py unko dubara ni likho or website se keywords reactive b ni karo sab kch research ke through likho 
har 1 article ke dono version likhny ke bad direct GitHub.com/khalil334/kisanstatus py directly push kardia karo or ye file b update kardia karo 
strictly avoid from repeative keywords ai uniform ai words ai line length paragraph robotic section table FAQs intrnal links 
sab kch real helpful info ho or unique ho 
## Architecture (in 15 articles ke liye ALAG structure)

- **Naya data file:** `lib/apny Marzi ka name rakho data.ts` (existing data files ko touch nahi karna)
- **Naya components folder:** `components/articles/wahi name rakhna Jo data.ts ka rakhogy/` — har article ka apna `.tsx`
- **Naya route:** `app/articles/name same as data.ts[slug]/page.tsx` (ya existing pattern follow karo, par slugs neeche wale hi use karna)
- **Do versions har article ki:**
  - Hinglish (main) — `/yojana/<slug>`
  - Pure Hindi (Devanagari) — `hi/` variant, `lib/hindi-yojana-2026-data.ts` + hreflang pair
- Har article ki entry `lib/cross-links.ts` rotation me bhi jaye.

## Global Writing Rules (har prompt ke sath ye paste karo)

1. **2000+ words** (Hinglish version), Hindi version bhi full — summary nahi.
2. **Insaan jaisa likho, AI jaisa nahi:**
   - Sentence length mix karo — kabhi 4 shabd ka sentence. Kabhi lamba, jisme kisan ki asli situation ka zikr ho, jaise bijli ka bill ya mandi ka bhav.
   - Paragraph 1 se 6 lines tak vary karein — har para 3 line ka nahi.
   - Ye phrases BAN hain: "ghar baithe", "step-by-step process", "sabse pehle", "aaj ke digital yug me", "is article me hum janenge", "nishkarsh", "in conclusion", "chaliye jante hain", "bina kisi pareshani ke", "ek mahatvapurna kadam".
   - Har section heading me keyword thusna mana hai — headings sawaal ya asli baat ho.
   - Kahin kahin ek chhota sa personal-observation type sentence (jaise "Bhiwani ke ek kisan ne 8 mahine wait kiya tha, wajah sirf ek galat IFSC tha.") — par FAKE case study mat banao, generic observation rakho.
3. **Structure har article ka UNIQUE ho** — prompt me diya gaya hai. Do articles ka H2 outline same nahi hona chahiye. FAQ count bhi vary karo (3 se 9). Kisi me table upar, kisi me neeche, kisi me table hi nahi.
4. **Internal links** — har article me 3–5, par section ka naam har jagah alag ("Ye bhi kaam aayega", "Isse pehle ye padh lo", "Related sawal", etc.) aur links contextually paragraph ke andar bhi daalo, sirf end-list nahi.
5. **Real info only** — likhne se pehle official site verify karo (har prompt me source diya hai). Amount, eligibility, portal ka naam, helpline — jo verify na ho use likho hi mat, ya saaf likho "iski official pushti nahi hai". Copy-paste zero — apne shabdon me.
6. FAQPage JSON-LD (ArticleShared ka renderer) + visible "Last updated" date.

---

## Article Prompts

### 1. PM Kisan Khad Yojana ₹11,000 — Sach Kya Hai
- **Slug:** `pm-kisan-khad-yojana-11000-sach` · **Verify:** pmkisan.gov.in + fert.nic.in + PIB Fact Check
- **Prompt:** Likho ek myth-buster article. Opening me seedha sawaal ka jawab do: "₹11,000 wali koi alag Khad Yojana officially exist nahi karti" — pehli 3 lines me. Phir explain karo ye rumor kahan se aaya (DBT fertilizer subsidy + PM Kisan ke ₹6000 ko jodkar blogs ne ₹11,000 bana diya). Ek section: asli fertilizer subsidy kaise milti hai (subsidy company ko jati hai, kisan ko sasta khad milta hai — urea ka asli vs subsidized rate table). Ek section: agar kisi site pe "Khad Yojana registration" form dikhe to kya karein (fraud warning, OTP kisi ko na dein). End me: kisan ke liye jo REAL paisa hai wo kaun si schemes hain (PM Kisan, PMFBY) — wahan internal links. FAQ sirf 4 — sab rumor-related. Table of contents mat lagao is article me.

### 2. PM Kisan Tractor Yojana 50% Subsidy — Real Ya Fake
- **Slug:** `pm-kisan-tractor-yojana-subsidy-sach` · **Verify:** agrimachinery.nic.in (SMAM DBT portal) + PIB
- **Prompt:** Structure #1 se bilkul alag rakho: shuruat ek scenario se karo — WhatsApp pe aaya message quote karke (generic, bina naam ke). Phir 2-column myth-vs-fact table TOP pe. Body me: "PM Kisan Tractor Yojana" naam ki koi central scheme nahi hai, PAR tractor pe subsidy milti hai — state-wise SMAM/farm mechanization se. Ek lamba section: agrimachinery.nic.in DBT portal pe registration ka asli process + kaunse states me kitni % (verify karke sirf confirmed states likho). Ek section: dealer se kharidne se pehle 3 cheezein. KisanTractorLoan2026 article ko paragraph ke andar link karo (loan vs subsidy ka farq samjhate hue). FAQ 6. 
 
### 3. MGNREGA Pashu Shed Yojana — ₹1.6 Lakh Tak
- **Slug:** `mgnrega-pashu-shed-yojana` · **Verify:** nrega.nic.in + state MGNREGA guidelines
- **Prompt:** Ye earnest guide hai, myth-buster nahi — tone alag rakho. Start: kis kisan ke liye hai (2+ pashu, job card holder). Important nuance jo weak blogs galat likhte hain: ye koi "apply online" scheme NAHI hai — gram panchayat ke through kaam hota hai, individual beneficiary works category me. Ye clear karo warna reader form dhundta rahega. Sections: eligibility (job card, pashu count), amount ka sach (state-wise vary, ~₹75k–1.6L range, cattle count pe depend), gram panchayat me application ka tareeka, kaagaz kya lagenge, kitna time lagta hai, agar sarpanch taal raha ho to kya karein (BDO/complaint route). Table sirf ek — pashu count vs approx amount. FAQ 7. Internal links: bakri-palan, murgi-palan, pashu KCC (#4 publish hone ke baad).

### 4. Pashu Kisan Credit Card — ₹3 Lakh Tak Loan
- **Slug:** `pashu-kisan-credit-card-apply` · **Verify:** RBI KCC-AH circular + pashudhanharyana.gov.in + SBI/BOB pages
- **Prompt:** Comparison-heavy article. Opening me farq samjhao: ye normal KCC ka hi animal-husbandry extension hai, Haryana ne isko brand kiya. Per-animal limit table (bhains/gaay/bakri/murgi — sirf verified figures, Haryana scale of finance). Sections: kaun le sakta hai (landless bhi — yahi USP hai, isko highlight karo), interest ka math (7% – 3% subvention = 4% effective, ₹1.6L tak collateral-free), bank me kya bolna hai + kaunse documents, reject hone ke common reasons. Ek chhota section: KCC already hai to kya dusra card milega (nahi — limit enhance hoti hai). Internal links paragraph ke andar: KisanCreditCardOnlineApply2026, kcc-limit wala hi/ article, dairy loan articles. FAQ 5. TOC lagao is me (lamba article hai).

### 5. PM FPO Yojana — ₹15 Lakh Kisan Samuh Ko?
- **Slug:** `pm-fpo-yojana-15-lakh` · **Verify:** sfacindia.com + 10,000 FPO scheme guidelines (agricoop)
- **Prompt:** Half myth-buster half guide. "₹15 lakh seedha khaate me" wala viral dawa pehle hi paragraph me todo — paisa FPO (company) ko equity grant/support ke roop me milta hai, kisi ek kisan ko nahi. Phir asli scheme: 10,000 FPO scheme, CBBO kya hota hai, 300 (plains)/100 (hills) members ka rule, equity grant matching ₹2000/member max ₹15L — ye numbers verify karo. Section: FPO kaise banate hain practically (11+ kisan, registration, CBBO se contact). Section: FPO me judne ke fayde (input sasta, collective selling). Ek imaandaar section: FPO scams — jo log "FPO registration fee" mangte hain. FAQ 8. Structure me numbered steps kam, prose zyada rakho.

### 6. Fasal Bima Claim Status — Paisa Kab Aur Kaise Milega ✅ PUBLISHED 2026-08-18
- **Live:** `/yojana/fasal-bima-claim-status-check` (Hinglish) + `/articles/hi/fasal-bima-claim-status` (Hindi) · hreflang paired · sitemap + cross-links wired · contextual links added in PmfbyCropInsurance2026 + PmKisanPaymentFailedFix2026.
- **Architecture (used for all 15):** `lib/yojana-2026-data.ts` + `components/articles/yojana-2026/` + route `app/yojana/[slug]/page.tsx`; Hindi: `lib/hindi-yojana-2026-data.ts` + `components/articles/hindi-yojana-2026/` at `/articles/hi/<slug>`.
- **Slug:** `fasal-bima-claim-status-check` · **Verify:** pmfby.gov.in (Know Your Policy / Application Status)
- **Prompt:** High-intent status article — reader pareshan hai, claim atka hai. Pehla section seedha: pmfby.gov.in pe status check ke exact clicks (receipt/policy number se). Phir: claim ka lifecycle — crop loss report (72 ghante ka rule!), survey, insurer approval, DBT. 72-hour rule ko prominently rakho, ye sabse zyada miss hota hai. Sections: claim reject kyun hota hai (5 asli reasons), kitne din me paisa aana chahiye (rules kehte 2 mahine settlement), late ho to kahan complaint (insurance company toll-free + DGRO + krishi vibhag), WBCIS vs PMFBY ka chhota note. PmfbyCropInsurance2026 ko "policy kaise li jati hai" context me link karo, fasal-bima premium calculator bhi. FAQ 9 — sab "mera paisa nahi aaya" type asli sawal. Is article me ek bhi generic intro paragraph nahi — seedha kaam ki baat.

### 7. Kisan Karj Mafi 2026 — Kis State Me Sach Me Chal Rahi Hai
- **Slug:** `kisan-karj-mafi-list-all-states` · **Verify:** har state ke official portal/budget announcements — sirf CONFIRMED schemes
- **Prompt:** Sabse sensitive article — yahan imaandaari hi ranking hai. Opening: "karj mafi 2026 all state list" search karne walon ko pehle ye batao ki koi ek national karj mafi scheme NAHI hai. Phir state-wise table: state | scheme ka naam | status (chal rahi / band / sirf announcement) | official link. SIRF wo states dalo jo verify ho payein; jo pakka na ho us pe likho "koi official notification nahi". Section: fake "karj mafi list me naam dekhein" sites se bachao. Section: KCC default ho gaya ho to asli options (OTS schemes, bank se restructuring). up-kisan-karj-rahat-list-2026 aur hi/karj-mafi-list ko link karo. FAQ 4. Ye article har 2 mahine update hoga — top pe update-log block rakho (date + kya badla), ye iska unique structural element hai.

### 8. Bhavantar Bharpai — Mandi Bhav Kam Mile To Sarkar Bharpai Karegi
- **Slug:** `bhavantar-bharpai-yojana` · **Verify:** ekharid/fasal.haryana.gov.in (Haryana) + MP e-uparjan/mandi board
- **Prompt:** Concept-first article: pehle 200 words me bhavantar ka funda ek example ke sath (bajra MSP vs mandi rate ka farq — real verified numbers). Phir do alag sections: Haryana BBY (sabzi/fruit crops, meri fasal mera byora registration zaroori) aur MP ka model. Kaunsi fasal covered, registration window, payment kaise aata hai. Section: kyun kai kisano ko paisa nahi mila (registration nahi, J-form/gate pass nahi liya). mandi-bhav-today, msp-list-2026-27, meri-fasal-mera-byora ko contextually link karo — ye article mandi cluster ka natural hub ban sakta hai. FAQ 6. Ending me koi "conclusion" heading nahi — ek chhota sa "seedhi baat" para.

### 9. Bihar Niji Nalkup Yojana — Boring Pe Subsidy
- **Slug:** `bihar-niji-nalkup-boring-subsidy` · **Verify:** mwrd.bih.nic.in / bihar minor water resources dept portal
- **Prompt:** Bihar-specific, isliye tone thodi local — par stereotype nahi. Cover: kitni subsidy (caste-category wise % — verify exact figures portal se), shallow vs medium tubewell, motor/pump ka component, online apply ka portal + documents (LPC, jameen ke kagaz, photo, bank passbook), selection kaise hota hai, paisa kab milta hai (post-verification, geo-tagging). Ek section: boring karwane se pehle 3 practical baatein (water level, ITI-certified pump seller ka bill). bihar-kisan-registration-status ko link karo (DBT registration zaroori hai). FAQ 5. Is article ka structure Q&A-heavy rakho — H2s sawal ke form me.

### 10. UP Krishi Yantra Token — Booking Ke Din Kya Karna Hai
- **Slug:** `up-krishi-yantra-token-subsidy` · **Verify:** agriculture.up.gov.in / upyantratracking (Darshan portal)
- **Prompt:** Time-critical article — token window ke din traffic aata hai. Isliye TOP pe ek "token day checklist" box (5 cheezein pehle se ready). Phir: portal ka naam + registration, kaunse yantra pe kitni % (40–50%, category-wise — verify), token process (first-come basis, minutes me khatam ho jata hai — isliye tips: OTP wala mobile pass rakho, documents pehle se upload), token milne ke baad ka process (yantra kharido, bill upload, verification, DBT). Section: token nahi mila to kya kare (next window, district-wise quota). custom-hiring-centre article link karo (agar khud nahi kharid sakte to CHC option). FAQ 6. Seasonal update note: har token window pe dates update karo.

### 11. Rajasthan Tarbandi Yojana — Khet Ki Baad (Fencing) Pe 60% Tak
- **Slug:** `rajasthan-tarbandi-yojana-apply` · **Verify:** rajkisan.rajasthan.gov.in
- **Prompt:** SERP me strong page nahi hai — solid basics jeetenge. Cover: kya milta hai (400 running meter tak, % small/marginal vs others — rajkisan portal se verify exact), nilgai/awara pashu problem context (1-2 line, dramatic mat banao), eligibility (min. land requirement — verify, group application ka rule), Raj Kisan Sathi portal pe apply (Jan Aadhaar zaroori), pehle-aao-pehle-pao + budget limit ka sach, verification + geo-tag ke baad payment. Section: kaanta taar khud pehle lagwa liya to subsidy milegi? (nahi — approval ke baad hi kaam shuru). rajasthan-kisan-samman-nidhi link karo. FAQ 5. Table sirf ek (category vs subsidy %). 

### 12. Free Spray Pump Subsidy — Kitna Sach, Kitna Clickbait
- **Slug:** `free-spray-pump-subsidy-sach` · **Verify:** state agriculture portals (UP Darshan, agrimachinery.nic.in)
- **Prompt:** Chhota-topic myth-buster (2000 words me lana hai to depth: sprayer types + state schemes). "Free" wala sach: bilkul free almost kahin nahi — subsidy 40–50% hoti hai, kuch states me chhote yantra pe zyada. Battery sprayer vs manual vs power sprayer — kya farq, kitne ka aata hai (market range), kis pe kitni subsidy. State-wise jahan confirmed scheme hai wahi likho. Fraud section zaroori: "free spray pump form bharo" wali sites ka scam pattern. #10 (UP token) publish ho chuka ho to link karo. FAQ 3 hi rakho — is article me kam FAQ, zyada body. Structure: is me koi bulleted lists overload nahi — prose-driven likho.

### 13. Kisan Drone Subsidy — Akele Kisan Ko Kitni Milegi
- **Slug:** `kisan-drone-subsidy-apply` · **Verify:** agrimachinery.nic.in + SMAM drone guidelines + DGCA (pilot license)
- **Prompt:** Naya topic, early-mover. Namo Drone Didi (SHG) se clearly differentiate karo pehle section me hi — wo alag hai, ye individual/custom-hiring wali subsidy hai. Cover: kitni % kisko (category-wise SMAM rates — verify; agriculture graduates/CHC ko zyada), drone ki asli keemat (10L capacity agri-drone ~6-10 lakh range), DGCA pilot certificate ka chakkar (kahan se, kitne din, kitna kharcha — verify), kya ye business ban sakta hai (custom hiring per-acre spray rate ka math). Imaandaar section: kis kisan ko drone NAHI lena chahiye (chhoti jot, ROI ka hisaab). namo-drone-didi article + custom-hiring-centre link karo. FAQ 7. Is article me ek ROI mini-calculation table rakho — ye iska unique element hai.

### 14. PM Kisan Helpline 155261 — Complaint Kaise Aur Kahan
- **Slug:** `pm-kisan-helpline-155261` · **Verify:** pmkisan.gov.in contact page
- **Prompt:** Utility page — sabse chhota prompt, par 2000 words banane ke liye har complaint-type ka mini-guide banao. Numbers: 155261 / 011-24300606, email pmkisan-ict@gov.in — verify karo current hain. Sections: kis problem ke liye kahan (kist nahi aayi → pehle status khud check karo [status articles link], eKYC issue → CSC, land seeding → lekhpal/tehsil, bank wapas gaya → NPCI seeding [hi/npci link]). Call karne se pehle kya ready rakho (registration no., Aadhaar). Helpline pe kya NAHI hota (naya registration, correction — wo portal pe hota hai). Query escalate kaise kare (grievance portal / nodal officer — PmKisanStateNodalOfficerList link). FAQ 6 — "phone nahi lagta to?", "kitne din me jawab?". Structure: problem→solution matrix table iska core hai, upar rakho.

### 15. NABARD Dairy Yojana — 25–33% Subsidy Ka Poora Hisaab
- **Slug:** `nabard-dairy-yojana-subsidy` · **Verify:** nabard.org (DEDS status check karo — scheme band/chalu ka sach pehle verify karna, DEDS discontinue ho chuki hai; ab AHIDF/state dairy schemes hain)
- **Prompt:** CRITICAL: DEDS (purani NABARD dairy subsidy) band ho chuki hai — 90% blogs abhi bhi use "chalu" batate hain. Tumhara article isi sach se jeetega. Opening: "NABARD Dairy Yojana search kar rahe ho? Jo scheme blogs bata rahe hain wo band ho chuki hai. Par paisa milne ke raste ab bhi hain." Phir: DEDS kya thi + kab band hui, ab kya options hain — AHIDF (infrastructure, bade projects), state dairy schemes, NLM (bakri/murgi ke sath), dairy loan bank se (KCC-AH / mudra). Har option ka 1-para asli assessment: kiske liye sahi. dairy-farm-loan-without-collateral + sbi-dairy-loan + pashu-KCC (#4) link karo. FAQ 5. Ye article "band scheme + asli alternatives" format ka hai — #1 wale myth-buster se tone alag rakho (ye zyada solution-focused).

---

## Publish Order
1. Week 1–2: #6, #7, #1, #14
2. Week 3–4: #3, #4, #10
3. Week 5–6: #2, #5, #11, #12
4. Week 7–8: #8, #9, #13, #15

## Har Publish Ke Baad
- IndexNow script + GSC Request Indexing
- cross-links.ts me entry + 2 purane related articles me is naye ka contextual link add karo
- Hindi (hi/) version + hreflang pair

## Measure
- GSC weekly: 15 slugs ki position. Target: 8 hafte me 10/15 top-10, 4–6 mahine me 8/15 top-3.
