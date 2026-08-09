https://github.com/khalil334/kisanstatus/tree/main/components%2Farticles%2Fhindi-yojana
 GitHub.com/khalil334/kisanstatus 
token ke lye card do
मेरे KisanStatus.com के hindi-yojana folder के सभी 15 articles को revise करो। नीचे की rules strictly follow करो:

1. **Har article minimum 2000+ mixed words (Hindi+English) hona chahiye** — current word count sab 1200-1800 ke beech hai. Content trim mat karo, **expand karo**. Genuinely useful detail add karo: real farmer examples, state-wise process differences, document checklists, timeline scenarios, common mistakes with solutions, field observations, ya bank/CSC ke real experiences. Filler mat bharto, har line ka reader ke liye value hona chahiye.

2. **Yeh phrases 2 se zyada articles mein bilkul mat use karo** — har article mein alag words chunno:
   - "एक नजर में" — max 1 article mein
   - "guide में" / "guide में है" — max 1 article mein  
   - "किस्त वाले दिन" — sirf PM Kisan wale articles mein, baaki mein mat use karo
   - "निचोड़" — max 1 article mein
   - "screenshot रख" / "डायरी में" / "कागज संभाल" — max 1-2 articles mein

3. **Har article ka structure bilkul alag ho** — kisi mein table ho, kisi mein nahi. Kisi mein FAQ block ho, kisi mein inline bold Q&A, kisi mein tip boxes. Intro, body flow, aur ending har file mein unique ho.

4. **Scam warnings har article mein alag tarah se likho** — same 4-point OTP warning copy-paste mat karo. Har topic ke hisaab se words, order, aur examples alag rakho.

5. **Cross-linking varied karo** — "guide में है" har jagah mat likho. Har baar alag phrase use karo jaise "detail यहाँ है", "पूरा तरीका इस page पर", "और जानकारी यहाँ", "step-by-step यहाँ देखें".

6. **Source citations alag tarah se karo** — har article mein different style. Kahi paragraph ke beech mein, kahi footnote, kahi simple closing line.

7. **Intro aur ending har article mein unique ho** — direct question, bold statement, real scenario, ya caution note se shuru karo. Ending mein kahi summary, kahi checklist, kahi next steps.

Output: Har article ko same TSX component format mein wapas do. Koi fact, date, amount, ya official source link change mat karna.

---

## Progress log — Rule 3 (structure variety) + Rule 7 (unique endings)

Word counts (Rule 1) sabhi 15 articles me already 2500+ hain — PR #166–#173 me expand ho chuka.
Rule 2 (banned phrases) bhi limits ke andar hai. Isliye ab kaam Rule 3 + Rule 7 par hai:
har article ka FAQ presentation aur ending alag banana. Facts/dates/amounts/source links
kabhi change nahi kiye jate.

FAQ presentation ke liye `FAQBlock` me optional `variant` prop hai (`accordion` = default,
`inline` = bold Q + answer paragraph, `cards` = tip-card grid). FAQPage JSON-LD teeno
variants me identical rehta hai — SEO par koi asar nahi.

| # | Article | FAQ variant | Ending | Status |
|---|---------|-------------|--------|--------|
| 1 | PmKisanHelplineNumberComplaint | inline | "फोन उठाने से पहले" 6-line पर्ची checklist | ✅ done |
| 2 | MukhyamantriKisanKalyanYojanaMp | cards | "सब मिलाकर बात इतनी सी है" summary | ✅ done |
| 3 | TractorSubsidy2027StateWiseList | accordion | (already unique) + state/portal table added | ✅ done |
| 4 | KccLimitKaiseBadhaye3Se5Lakh | accordion | "Branch जाने से पहले" 4-step checklist + SOF table added | ✅ done |
| 5 | FarmerIdCardKaiseBanaye2027 | inline | table add | ⬜ todo |
| 6 | KisanKarjMafiList2027 | accordion | (already unique) + table add | ⬜ todo |
| 7 | NamoShetkariYojanaMaharashtra | cards | (already unique) | ⬜ todo |
| 8 | NpciAadhaarSeedingDbtPayment | accordion | vary ending | ⬜ todo |
| 9 | PmKisan25viKistKabAayegi | accordion | (already unique) | ⬜ todo |
| 10 | PmKisanEkycMobileSeKaiseKare | inline | vary ending | ⬜ todo |
| 11 | PmKisanNewRegistration2027 | cards | vary ending | ⬜ todo |
| 12 | PmKisanPaymentStoppedByStateFix | accordion | vary ending | ⬜ todo |
| 13 | PmKisanRecoveryNoticePaisaWapas | inline | vary ending | ⬜ todo |
| 14 | PmKisanStatusCheckMobileNumberSe | accordion | vary ending | ⬜ todo |
| 15 | GehuKaRateAajMspVsMandiBhav | cards | vary ending | ⬜ todo |

Workflow: ek article fix → `npx tsc --noEmit` + `npx eslint` pass → commit + push direct to main → yeh table update → next article.
