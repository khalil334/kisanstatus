# Rajya Yojana Articles — Hindi Version Missing (+ Writing Prompts)

Source: `lib/rajya-yojana-data.ts` vs `lib/hindi-hreflang.ts` + `lib/hindi-articles-data.ts`

- Total rajya-yojana articles: 15 (sab live)
- Hindi version maujood: 8 (MP Kisan Kalyan, Namo Shetkari, Rajasthan Kisan Samman Nidhi, Annadata Sukhibhava, Rythu Bharosa, Krishak Bandhu, Odisha CM Kisan, Pati-Patni PM Kisan Rule)
- Hindi version MISSING: 7 (neeche list + har ek ka alag writing prompt; DONE wale tick ho chuke hain)

## Common rules (har prompt ke saath lagu hongi)

Ye rules HAR article par apply hoti hain — prompt ke saath copy karo:

1. **Language — PURE HINDI (Devanagari)**: Poora article shuddh Hindi mein Devanagari lipi mein likho. Hinglish mix (Roman Hindi) BILKUL nahi — na headings mein, na paragraphs mein, na FAQs mein. English sentences ya aadhi-English lines mana hain. Sirf wo technical shabd jo Hindi mein hote hi nahi (OTP, eKYC, portal ke button/menu ke asli naam jaise "Know Your Status") waise hi rehne do — baaki sab Hindi: status → स्थिति, list → सूची, payment → भुगतान, amount → राशि. Aisa lage jaise Hindi akhbaar ka likhne wala likh raha hai, Google translate nahi.
2. **Length**: 2000+ words. Lekin words ginne ke liye faltu padding mat karo — har section mein kaam ki baat ho.
3. **Facts — real info with VERIFIED source (zaroori)**: Sirf real info. Likhne se pehle official portal khol ke verify karo (portal har prompt mein diya hai). Amount, dates, process steps — jo confirm na ho, wo mat likho. Andaza lagana mana hai. **Har major fact (amount, kist date, eligibility rule) ka source article ke text mein naturally mention karo** — jaise "official portal (fasal.haryana.gov.in) ke mutabik..." ya "sarkari notification mein saaf likha hai ki...". Bina source ke koi number nahi. Agar do sources mein alag figures milen to jo official portal kehta hai wahi likho.
4. **Human style — sabse zaroori**:
   - Paragraph lengths alag-alag rakho — kahin 1 line, kahin 5-6 line. Uniform blocks bilkul nahi.
   - AI-type repetitive keyword stuffing mat karo. Main keyword pura article mein 4-6 baar se zyada na aaye, aur har baar alag tarah se sentence mein ghula ho.
   - "Is article mein hum janenge...", "Nishkarsh", "Antim shabd", "Yah dhyan dena mahatvapurna hai" — aise robotic phrases BAN hain.
   - **Insano jaisi typo/spelling mistakes ZAROOR daalo — har article mein 2-3 chhoti natural galtiyan** (jaise 'किस्त' ki jagah kahin 'किश्त', matra ki halki galti, kahin space ki galti, ya ek English word ki spelling thodi off — 'recieve' type). Ye galtiyan sirf aam text mein ho — amounts, dates, portal URLs, scheme names mein KABHI nahi. 3-4 se zyada bhi mat karo warna article ganda lagega.
   - Kahin-kahin personal touch — "mere gaon ke ek kisan ne bataya...", "maine khud portal khol ke dekha to...".
   - Har article ka structure DUSRE articles se alag ho — same heading pattern repeat mat karo.
5. **Tables**: Sirf wahan use karo jahan sach mein data compare ho raha ho (kist dates, amounts, documents). Har article mein table zaroori nahi.
6. **FAQs**: 4-7 FAQs, lekin sawal wahi jo kisan sach mein Google/WhatsApp pe poochte hain. Ratta-mara "Q: yojana kya hai?" type nahi.
7. **Internal links**: Har prompt mein diye gaye related paths ko naturally text ke beech mein lagao — "links" section alag se mat banao.
8. **File placement**: Component `components/articles/hindi-yojana/` mein banega, entry `lib/hindi-articles-data.ts` mein, mapping `lib/hindi-hreflang.ts` mein. Existing Hinglish article (`app/rajya-yojana/<slug>`) ko FACT source ki tarah use karo lekin usse copy-paste ya line-by-line translate BILKUL mat karo — naya likhna hai.
9. **Workflow — ek article, ek push**: Har article COMPLETE hote hi (component + data entry + hreflang mapping + build pass) turant GitHub (github.com/khalil334/kisanstatus) par push karo. Sab articles jama karke ek saath push nahi karna — 1 article = 1 commit = 1 push.

---

## 1. ~~Rajasthan Kisan Samman Nidhi 2026~~ ✅ DONE

- Hinglish slug: `rajya-yojana/rajasthan-kisan-samman-nidhi-9000` · State: Rajasthan · Portal: rajkisan.rajasthan.gov.in (verify karo)
- Suggested Hindi slug: `hi/rajasthan-kisan-samman-nidhi`

**Prompt:**
Ek Rajasthan ke kisan ki nazar se likho jo ye jaanna chahta hai ki uske ₹2000 wali PM Kisan kist ke UPAR Rajasthan sarkar kitna extra de rahi hai aur kab. Article ki shuruaat ek seedhe jawab se karo — kitna paisa, kab-kab — phir detail mein jao. Cover karo: badhi hui rashi ka break-up (PM Kisan + state top-up), kist ka schedule, status check karne ka tareeka (jan aadhaar se), aur wo 3-4 common wajah jinse Rajasthan ke kisano ka paisa atakta hai. Ek chhota table sirf amount break-up ke liye. FAQs mein "jan aadhaar link nahi hai to kya karein" jaise practical sawal. Internal links: `/articles/PmKisanMasterGuide2026`, `/articles/PmKisan24viKist2026`, aur Hinglish version `/rajya-yojana/rajasthan-kisan-samman-nidhi-9000`. Keywords naturally: rajasthan kisan samman nidhi, mukhyamantri kisan samman nidhi rajasthan.

## 2. ~~Annadata Sukhibhava Status Check 2026~~ ✅ DONE

- Hinglish slug: `rajya-yojana/annadata-sukhibhava-status-check-2026` · State: Andhra Pradesh · Portal: annadathasukhibhava.ap.gov.in
- Suggested Hindi slug: `hi/annadata-sukhibhava-status`

**Prompt:**
Ye article un Hindi-bhashi kisano ke liye hai jo AP mein rehte hain ya jinke rishtedaar wahan zameen rakhte hain. Story-style opening lo — YSR Rythu Bharosa ka naam badal ke Annadata Sukhibhava kaise hua, aur isse aam kisan ko kya farak pada. Phir: CCRC card (tenant farmers) ka concept saaf-saaf samjhao kyunki ye is scheme ki sabse confusing cheez hai, status check ka step-by-step (screenshots-jaisi detail se, portal ke asli menu names use karo), payment kitne installments mein aata hai, aur eligibility. Table sirf installment schedule ke liye. FAQs mein tenant farmer wale sawal zaroor ho. Internal links: `/articles/PmKisanMasterGuide2026`, `/articles/PmKisanBeneficiaryList2026`, `/rajya-yojana/annadata-sukhibhava-status-check-2026`.

## 3. ~~Rythu Bharosa Status Check 2026 (Telangana)~~ ✅ DONE

- Hinglish slug: `rajya-yojana/rythu-bharosa-status-check-2026` · State: Telangana · Portal: rythubharosa.telangana.gov.in (verify karo)
- Suggested Hindi slug: `hi/rythu-bharosa-status`

**Prompt:**
Sabse pehla kaam: Rythu Bandhu vs Rythu Bharosa ka confusion khatam karo — ye article ka core hai kyunki log dono ko mila dete hain. Comparison ek chhote table mein. Phir per-acre amount (verify karo current rate), phase-wise payment kaise hota hai, status check ka tareeka, aur beneficiary list mein naam kaise dhundhein. Ek section un kisano ke liye jinka paisa aana band ho gaya — land records (Dharani portal) ka connection samjhao. Opening mein koi table ya list nahi — 2-3 line ka seedha, baat-cheet jaisa intro. FAQs 5 se zyada nahi. Internal links: `/articles/PmKisanMasterGuide2026`, `/articles/PmKisanBeneficiaryList2026`, `/rajya-yojana/rythu-bharosa-status-check-2026`.

## 4. ~~Krishak Bandhu Status Check 2026 (West Bengal)~~ ✅ DONE

- Hinglish slug: `rajya-yojana/krishak-bandhu-status-check-2026` · State: West Bengal · Portal: krishakbandhu.wb.gov.in
- Suggested Hindi slug: `hi/krishak-bandhu-status`

**Prompt:**
Is article ki khaas baat: voter ID se status check — ye WB ka unique system hai, isko hero banao. Step-by-step process portal ke asli field names ke saath. Phir do alag benefits saaf-saaf alag karo: saalana paisa (Rabi/Kharif do kist) aur death benefit (₹2 lakh — verify karo). Death benefit wala section sensitively likho, ek chhoti kahani-nu ma andaz mein. Amounts ka ek table (zameen ke hisab se kitna milta hai). FAQs mein "voter card number se check nahi ho raha" aur "death benefit ka claim kaise karein" zaroor ho. Bangla word 'কৃষক বন্ধু' ek baar mention kar do search ke liye. Internal links: `/articles/PmKisanMasterGuide2026`, `/articles/PmKisanCorrectionForm2026`, `/rajya-yojana/krishak-bandhu-status-check-2026`.

## 5. ~~Odisha CM Kisan Status Check 2026~~ ✅ DONE

- Hinglish slug: `rajya-yojana/odisha-cm-kisan-status-check-2026` · State: Odisha · Portal: cmkisan.odisha.gov.in
- Suggested Hindi slug: `hi/odisha-cm-kisan-status`

**Prompt:**
KALIA se CM Kisan tak ka safar 3-4 line mein nipta do (log purane naam se search karte hain, isliye zaroori hai) — lekin nostalgia mat bharo, aage badho. Is scheme ki sabse alag baat: landless (bhoomiheen) kisano ko bhi paisa milta hai — is par ek pura section, kyunki baaki states mein aisa nahi hai. Status check village-wise list se kaise karein, step-by-step. Kitna paisa kis category ko (chhota table). FAQs mein landless wale sawal aur "KALIA ka purana paisa" wale sawal. Structure baaki articles se alag rakhne ke liye is article mein ek "5 minute mein check karne ka shortcut" wala box-section daalo. Internal links: `/articles/PmKisanMasterGuide2026`, `/articles/PmKisanBeneficiaryList2026`, `/rajya-yojana/odisha-cm-kisan-status-check-2026`.

## 6. ~~Pati Patni Dono Ko PM Kisan Milega?~~ ✅ DONE

- Hinglish slug: `rajya-yojana/pm-kisan-pati-patni-dono-ko-milega` · State: ALL · Portal: pmkisan.gov.in
- Suggested Hindi slug: `hi/pati-patni-pm-kisan-rule`

**Prompt:**
Ye myth-busting article hai — style baaki sab se alag hogi. Seedha jawab pehli line mein: NAHI, ek parivar (pati-patni-nabalig bachche) mein sirf EK ko milega. Phir 'kyun' — family definition scheme guidelines se quote karo (verify karo pmkisan.gov.in ke operational guidelines se). Real-life cases banao: "Ramesh aur uski patni dono ke naam zameen hai, dono ne form bhara — ab kya hoga?" jaise 3-4 scenario, har ek ka jawab. Galti se dono le rahe the to recovery notice aur paisa wapas (voluntary surrender) ka process. Is article mein table ki zaroorat nahi — scenarios hi kaafi hain. FAQs mein sasur-bahu, bhai-bhai, adult beta jaise rishtey cover karo. Internal links: `/articles/PmKisanVoluntarySurrenderGuide`, `/articles/PmKisanRejectedStatusReApplyGuide`, `/rajya-yojana/pm-kisan-pati-patni-dono-ko-milega`.

## 7. ~~State Kisan Yojana List 2026 — Sabhi Rajya~~ ✅ DONE

- Hinglish slug: `rajya-yojana/state-kisan-yojana-list-all-states-2026` · State: ALL
- Suggested Hindi slug: `hi/state-kisan-yojana-list`

**Prompt:**
Ye ek listicle/hub hai — iska structure hi list-based hoga, lekin robotic catalog nahi. Angle: "PM Kisan ke ₹6000 ke upar tumhara rajya kitna deta hai?" Har major state (RJ, MP, MH, AP, TG, WB, OD, CG, HR, BR, KA, UP, GJ minimum) ka 3-5 line ka mini-section: scheme ka naam, kitna paisa, kaun eligible. HAR amount official source se verify karo — ye article fact-heavy hai, ek bhi galat number nahi. Ek master comparison table (state / scheme / saalana rashi) article ke beech mein. Jin states ka humara detailed Hindi/Hinglish article hai, wahan internal link lagao (jaise `/rajya-yojana/mp-kisan-kalyan-yojana-kist-status`, `/rajya-yojana/krishak-bandhu-status-check-2026`, etc. — sab 13-15 rajya-yojana articles). Ye sabse lamba article hoga, 2500+ words chalega. Internal links: `/articles/PmKisanMasterGuide2026` + sabhi state articles.

## 8. ~~Krishak Unnati Yojana Status Check 2026 (Chhattisgarh)~~ ✅ DONE

- Hinglish slug: `rajya-yojana/krishak-unnati-yojana-status-check-2026` · State: Chhattisgarh · Portal: khadya.cg.nic.in
- Suggested Hindi slug: `hi/krishak-unnati-yojana-status`

**Prompt:**
CG ke dhan (paddy) kisano ke liye likho — ye scheme dhan bechne se judi hai, isliye article ka flow mandi/society se shuru karo: kisan ne dhan becha, ab antar rashi (difference amount) kab aur kaise milegi. 'Antar rashi' ka concept ekdum saral bhasha mein — MSP vs ₹3100 wala hisab ek chhote example ke saath (2 acre wale kisan ka calculation karke dikhao). Status check ka process, aur kya-kya documents/registration chahiye. Verify karo current rate aur per-acre limit. Ek calculation table chalega. FAQs mein "society mein becha tha lekin paisa nahi aaya" type sawal. Internal links: `/articles/PmKisanMasterGuide2026`, `/articles/PmKisan24viKist2026`, `/rajya-yojana/krishak-unnati-yojana-status-check-2026`.

## 9. ~~Meri Fasal Mera Byora Status Check 2026 (Haryana)~~ ✅ DONE

- Hinglish slug: `rajya-yojana/meri-fasal-mera-byora-status-check-2026` · State: Haryana · Portal: fasal.haryana.gov.in
- Suggested Hindi slug: `hi/meri-fasal-mera-byora-status`

**Prompt:**
Ye registration-to-MSP-payment ka poora safar wala article hai — timeline structure use karo (registration → verification → gate pass → e-kharid → payment), har stage ek section. Family ID (PPP) ka role clearly samjhao kyunki Haryana mein sab kuch usi se chalta hai. Last date miss hone par kya option bachta hai — ye section imandaari se likho (agar koi option nahi to saaf bolo). Gate pass ka process detail mein — mandi jaane se pehle kya-kya saath le jana hai. Table sirf important dates/deadlines ke liye (verify karo current season ki dates — galat date mat likhna, agar confirm na ho to "portal pe check karein" bolo). FAQs mein family ID mismatch aur payment delay wale sawal. Internal links: `/articles/PmKisanMasterGuide2026`, `/articles/PmKisanPaymentFailedFix2026`, `/rajya-yojana/meri-fasal-mera-byora-status-check-2026`.

## 10. DBT Agriculture Bihar Status Check 2026

- Hinglish slug: `rajya-yojana/bihar-kisan-registration-status-check-2026` · State: Bihar · Portal: dbtagriculture.bihar.gov.in
- Suggested Hindi slug: `hi/bihar-kisan-registration-status`

**Prompt:**
Bihar ka DBT portal ek chhata (umbrella) hai — registration ek, schemes kai (diesel anudan, krishi input anudan, beej anudan...). Article ka core: 13-digit kisan panjikaran sankhya — kaise nikale agar bhool gaye (mobile/aadhaar se), aur usse har scheme ka status kaise dekhe. Har major anudan ka apna chhota section: kya milta hai, kab apply hota hai, status kahan dikhega. Ye article FAQ-heavy banao — 7 FAQs tak chalega kyunki Bihar ke kisano ke sawal bahut specific hote hain ("CSC wale ne registration kiya tha, number nahi diya" type real situations). Table optional — agar anudan amounts confirm kar pao to hi banao. Internal links: `/articles/PmKisanMasterGuide2026`, `/articles/PmKisanPaymentFailedFix2026`, `/rajya-yojana/bihar-kisan-registration-status-check-2026`.

## 11. Parihara Payment Status Check 2026 (Karnataka)

- Hinglish slug: `rajya-yojana/parihara-payment-status-check-2026` · State: Karnataka · Portal: parihara.karnataka.gov.in
- Suggested Hindi slug: `hi/parihara-payment-status`

**Prompt:**
Ye disaster-compensation (fasal nuksan muavza) article hai — tone thodi empathetic rakho, ye kisan pareshan hoke search karta hai (sukha/baadh ke baad). Opening: "fasal kharab hui hai aur muavze ka status dekhna hai — 2 minute mein bata dete hain." Village-wise list aur aadhaar number — dono tareeke alag-alag sections mein. FRUITS ID kya hai aur kyun zaroori hai — Karnataka-specific cheez, isko achhe se samjhao. Kitna muavza milta hai (SDRF/NDRF rates — verify karo, ye rates official hain aur galat likhna serious hai). Table sirf rates ke liye. FAQs mein "list mein naam hai par paisa nahi aaya" aur "FRUITS ID nahi bana" wale sawal. Internal links: `/articles/PmKisanMasterGuide2026`, `/articles/PmKisanPaymentFailedFix2026`, `/rajya-yojana/parihara-payment-status-check-2026`.

## 12. UP Kisan Karj Rahat List 2026

- Hinglish slug: `rajya-yojana/up-kisan-karj-rahat-list-2026` · State: Uttar Pradesh · Portal: upkisankarjrahat.upsdc.gov.in
- Suggested Hindi slug: `hi/up-kisan-karj-rahat-list`

**Prompt:**
Sabse pehle ek imandaar reality-check section: ye scheme (Rin Mochan) 2017 ki hai — 2026 mein naya karj maaf ho raha hai ya sirf purane cases nipat rahe hain? Ye verify karo aur jo sach hai wo likho, jhoothi umeed mat banao — YE IS ARTICLE KI JAAN HAI kyunki baaki websites clickbait karti hain. Phir: list mein naam kaise dekhein, shikayat (grievance) ka status kaise check karein, aur agar naam nahi hai to kya kar sakte hain. Eligibility ki asli shartein (₹1 lakh tak, 2016 se pehle ka loan — verify karo). Koi table zaroori nahi, ek eligibility checklist chalega (✓/✗ style). FAQs mein "naya karj mafi kab aayega" ka imandaar jawab. Internal links: `/articles/PmKisanMasterGuide2026`, `/articles/PmKisanPaymentFailedFix2026`, `/rajya-yojana/up-kisan-karj-rahat-list-2026`.

## 13. iKhedut Portal Status Check 2026 (Gujarat)

- Hinglish slug: `rajya-yojana/ikhedut-portal-status-check-2026` · State: Gujarat · Portal: ikhedut.gujarat.gov.in
- Suggested Hindi slug: `hi/ikhedut-portal-status`

**Prompt:**
iKhedut koi ek scheme nahi, subsidy application portal hai — pehle ye clear karo. Article ka focus: arji (application) number se status check — arji number kaise nikale agar kho gaya, status ke alag-alag stages ka matlab (pending/approved/pre-approval जैसी asli portal terms verify karke), aur tractor sahay jaisi popular subsidy ka example leke poora flow dikhao. Gujarat ke Hindi-bhashi kisan (kaafi migrant bhi) target audience hain, isliye ekdum basic se shuru karo. Yojana list 2026 ka section — kaunsi subsidies abhi khuli hain (agar verify na ho to categories batao, dates mat banao). Ek table application stages + matlab ke liye. FAQs mein "arji manzoor ho gayi, paisa kab aayega" zaroor. Internal links: `/articles/PmKisanMasterGuide2026`, `/articles/PmKisanPaymentFailedFix2026`, `/rajya-yojana/ikhedut-portal-status-check-2026`.

---

## Jo pehle se Hindi mein hain (reference)

| Title | Rajya Slug | Hindi Slug |
|-------|-----------|------------|
| MP Kisan Kalyan Yojana Kist Status — SAARA Portal | mp-kisan-kalyan-yojana-kist-status | hi/mp-kisan-kalyan-yojana |
| Namo Shetkari Status 2026 — Beneficiary List | namo-shetkari-yojana-status-check-2026 | hi/namo-shetkari-yojana |
