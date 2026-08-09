https://github.com/khalil334/kisanstatus/tree/main/components%2Farticles%2Fhindi-yojana
 GitHub.com/khalil334/kisanstatus 
token ke lye card send karo
or phly ye file update karo apny lye 
har 2 articles fix karny ke bad auto merge karke file update kardia karo
मेरे hindi-yojana folder के 15 articles में ये 9 AI patterns repeat हो रहे हैं — words trim मत करो, सिर्फ low-competitive synonyms से replace करो:

1. "वही" (27 baar, 12 files) → "उसी", "यही", "यह", "वह", "इसी", "उस" — har file mein alag word chunno
2. "इसीलिए" (7 baar, 7 files) → "इसी वजह से", "इस कारण", "इसलिए ही", "इसके चलते"
3. "यानी" (9 baar, 7 files) → "अर्थात्", "भावार्थ", "तात्पर्य", "मतलब", "अर्थ"
4. "मतलब" (9 baar, 6 files) → "अर्थ", "भाव", "तात्पर्य", "यानी", "सीधे शब्दों में"
5. "जैसे" (9 baar, 6 files) → "उदाहरणार्थ", "मसलन", "जैसे कि", "उदाहरण के लिए", "जैसा कि"
6. "screenshot रख" (3 files) → "photo save करें", "mobile में रखें", "capture कर लें"
7. "निचोड़" (3 files) → "सारांश", "संक्षेप", "निष्कर्ष", "मुख्य बात"
8. "किस्त वाले दिन" (2 files) → "पैसे आने वाले दिन", "भुगतान वाले दिन"
9. "guide में" (2 files) → "detail यहाँ है", "पूरा तरीका इस page पर"

Rule: Content length same rakhni hai — koi word delete mat karo, sirf replace karo. Same TSX format mein output do.

---
## Progress log (agent-maintained)
Batch size: 2 articles per commit, pushed directly to main.

- [x] FarmerIdCardKaiseBanaye2027.tsx — मतलब→सीधे शब्दों में/तात्पर्य, यानी→अर्थात्, इसीलिए→इसी वजह से, वही→यही (batch 1)
- [x] GehuKaRateAajMspVsMandiBhav.tsx — इसीलिए→इस कारण, यानी→मतलब/अर्थात्, मतलब→तात्पर्य/अर्थ (batch 1)
- [x] KccLimitKaiseBadhaye3Se5Lakh.tsx — मतलब→अर्थ/तात्पर्य, वही→यही/वह (batch 2)
- [x] KisanKarjMafiList2027.tsx — यानी→अर्थात्/मतलब, निचोड़→निष्कर्ष, जैसे→सरीखे/की तरह के (batch 2)
- [x] MukhyamantriKisanKalyanYojanaMp.tsx — यानी→अर्थात्/तात्पर्य, मतलब→सीधे शब्दों में/अर्थ, इसीलिए→इसी वजह से, वही→वह (batch 3)
- [x] NamoShetkariYojanaMaharashtra.tsx — screenshot रख→photo save करें, जैसे→सरीखे/जैसा कि (batch 3)
- [ ] NpciAadhaarSeedingDbtPayment.tsx
- [ ] PmKisan25viKistKabAayegi.tsx
- [ ] PmKisanEkycMobileSeKaiseKare.tsx
- [ ] PmKisanHelplineNumberComplaint.tsx
- [ ] PmKisanNewRegistration2027.tsx
- [ ] PmKisanPaymentStoppedByStateFix.tsx
- [ ] PmKisanRecoveryNoticePaisaWapas.tsx
- [ ] PmKisanStatusCheckMobileNumberSe.tsx
- [ ] TractorSubsidy2027StateWiseList.tsx

Note: "वही" counts in the brief include "वहीं" (locative, natural Hindi) — only bare "वही" instances are replaced. "जैसे" used as "जैसे कि / जैसा" in natural comparisons is left when replacement would break meaning.
