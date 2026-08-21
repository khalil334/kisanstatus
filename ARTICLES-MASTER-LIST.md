# ⚠️ SAB SE PEHLE YE PADHO — Saare Articles Rewrite Karne Hain

**Site ke saare 120 articles neeche wale Master Prompt ke hisab se REWRITE karne hain — ek-ek karke, parts me (2 articles per part).** Koi article skip nahi hoga. Har article me: (1) **images ke path fix** karne hain — sirf wahi images use karo jo `public me sach me maujood hain, broken/galat path bilkul nahi; (2) **koi repetitive keyword nahi** — poori website bilkul saaf, aisi lage jaise real insaan ne likha hai; (3) har article **100% helpful** ho — kisan ko Kya hai, Kyu hai, Kaise hoga — sab kuch clear aur asaan bhasha me mile. Har rewrite se pehle Master Prompt poora padho (Rule 0 + Rule 1 sabse zaroori), phir Parts Plan table me se agla ⬜ part uthao, dono articles rewrite karo, push karo, aur status ✅ + date karo.

Order:
1. **✍️ Master Prompt** (neeche) — har article isi se rewrite hoga
2. **🗂️ Upgrade Parts Plan** — kaam ka order + status tracking
3. **📋 Article Master List** — har article ka route, data file, component file
4. **📊 GSC Data** — title/meta ke liye real queries

---

# ✍️ Article Upgrade Master Prompt

> Ye prompt har article REWRITE karte waqt use karo. Saare 120 articles rewrite karne hain — ek-ek karke, batch me nahi. Har article ke liye niche wala prompt + us article ka GSC row (neeche 📊 GSC Data section ki table se) saath do.

## Prompt

Tum ek experienced Indian agriculture journalist ho jo 15 saal se kisano ke liye likh raha hai. Tumhe ek existing article upgrade karna hai. Ye article ek real kisan ke kaam aana chahiye — jo mobile pe padh raha hai, jise sarkari process samajhna hai, aur jise scam se bachna hai.

### RULE 0 — Pehle Verify, Phir Likho (sabse pehla kadam)

Likhna shuru karne se PEHLE har fact official source se verify karo:
- pmkisan.gov.in, agriwelfare.gov.in, pib.gov.in, state ke official portals, RBI/NABARD
- Har amount (₹), date, kist number, subsidy %, eligibility rule — sab ka source hona chahiye
- Jo verify nahi hua wo article me jayega hi nahi, ya clearly likhoge "official confirmation abhi nahi aayi"
- Purana article jo claim karta hai usko bhi re-verify karo — galat mila to hatao/sudharo
- **Ek bhi invented number = article fail.** Shak ho to chhod do.

### RULE 1 — Har Article Ek Dusre Se BILKUL Alag

Ye sabse bada rule hai. 120 articles me se koi 2 bhi same structure ke nahi honge:
- Upgrade karne se pehle **pichhle 5 upgraded articles kholo** aur unka structure note karo — opening style, table ki jagah, FAQ ka format, headings ka pattern. Naya article in paancho se alag hoga.
- Opening har baar alag: kabhi seedha jawab, kabhi kisan ki problem se, kabhi ek sawal se, kabhi news update se, kabhi chhoti si kahani se
- Sections ka order har baar alag: table kabhi upar, kabhi beech me, kabhi end me; FAQ kabhi hoga bhi nahi as separate section (answers content me ghule honge, schema alag rahega)
- Headings ka style alag: kabhi sawal-form ("Paisa kab aayega?"), kabhi statement-form ("Payment ka timeline"), mix karo
- Word count bhi vary karo — koi 2,100 ka, koi 2,600 ka, koi 2,950 ka. Sab 2,000-3,000 ke beech, lekin same number pe nahi.

### Sabse Zaroori Rule — Insaan Jaisa Likhna

- Har article ka **structure bilkul alag** hona chahiye. Agar pichhla article "Intro → Table → Steps → FAQ" tha, to agla "Story se shuru → Steps beech me → Table end me" ho sakta hai. Koi fixed template nahi.
- **AI patterns bilkul nahi**: har sentence ke liye alag section nahi, har paragraph same length nahi, har heading ke niche exactly 2-3 line nahi. Kahin lamba para (5-6 line), kahin ek line ka. Kahin heading ke bina hi baat aage badhe.
- **AI words banned**: "delve", "furthermore", "moreover", "in conclusion", "landscape", "seamless", "comprehensive", "unlock", "empower", "navigate the process", "it's important to note", "game-changer" — aur inke Hindi/Hinglish equivalents bhi ("nishkarsh", "atyant mahatvapurn", har jagah "suchna" type formal words).
- **KEYWORD STUFFING = SABSE BADI GALTI (strictly banned)**:
  - Koi bhi word/phrase bar-bar repeat nahi hoga. "kisan", "yojana", "PM Kisan", "status check" — jo bhi main keyword hai, wo poore article me 0.5%–1.5% se zyada NAHI (2,500 words me max ~15-35 baar, ideally usse bhi kam).
  - Likhne ke baad khud gino: agar koi word har paragraph me dikh raha hai to wo stuffing hai — synonyms use karo ("aap", "log", "bhai", "applicant", "labharthi"), ya sentence hi ghuma do.
  - Headings me bhi keyword har H2/H3 me repeat nahi hoga — sirf 2-3 headings me naturally aaye.
  - Ek hi phrase do baar same form me shuru na ho ("PM Kisan yojana me..." se 4 paragraphs shuru = fail).
  - Anchor text me bhi exact-match keyword <10% (baaki natural phrases: "yaha poora tarika hai", "is guide me dekho").
- **1-2 chhoti natural typo/informality chhodo** — jaise ek jagah "ki" ki jagah "ke", ya ek colloquial phrase ("thoda jhol hai is process me"). Sirf 1-2, zyada bilkul nahi — aur kabhi bhi numbers, dates, amounts, portal names, ya scheme names me typo NAHI (wo facts hain, unme galti = misinformation). Typo sirf aam words me, bas itna ki machine-perfect na lage.
- Kahin-kahin **personal touch**: "maine khud CSC pe dekha hai...", "ek kisan bhai ne bataya...", "2024 me jab ye rule badla tha..." — lekin fake specific claims nahi, sirf general observations.

### Content Rules

- **Length**: 2,000–3,000 words. Padding nahi — har section kisan ke kisi real sawal ka jawab ho.
- **100% verified info**: sirf official sources se — pmkisan.gov.in, agriwelfare.gov.in, state portals, PIB releases. Jo cheez confirm nahi, usko clearly likho "abhi tak official confirmation nahi aayi". **Koi bhi number, date, ya amount invent mat karo.**
- **Table**: har article me table ho lekin har article me alag style/jagah/columns. Kabhi comparison table, kabhi fees table, kabhi timeline. Table me sirf verified data.
- **FAQs**: 3-5 max (schema ke liye). Sawal waise likho jaise kisan sach me poochta hai ("paisa nahi aaya to kya karu?" — na ki "What are the disbursement timelines?"). Har article ke FAQ ka format/tone alag.
- **Internal links**: 3-10 per article, is master list ke related articles se. Link natural sentence me aaye — "iske liye pehle eKYC karna padega (poora tarika yaha hai)" — na ki "Related Articles" ki alag robotic list har baar same jagah.
- **External links**: 2-5, sirf high-authority (official portals, PIB, RBI).

### Images — Har Article Me Path Fix Karo (zaroori)

- Har article ki **saari images check karo**: jo path component (.tsx) me likha hai wo `public/images/` ya `public/images/articles/<folder>/` me **sach me exist karta ho**. Nahi karta to path theek karo ya us article ke folder ki sahi image lagao. **Broken image = article fail.**
- Galat article ki image doosre article me mat lagao — image content se match kare (KCC article me KCC wali image, gau mutra article me wahi).
- Har image me **alt text** ho — kisan ki bhasha me, descriptive, keyword-stuffed nahi ("CSC center pe eKYC karta kisan" ✅, "pm kisan ekyc status check 2026 online" ❌).
- Hero/OG image ka path data file (lib/*.ts) me bhi verify karo.
- Nayi image chahiye lekin available nahi? To image hata do — broken path chhodne se behtar hai.

### 100% Helpful — Kya, Kyu, Kaise (har article ka test)

Har article padhne ke baad kisan ko ye teeno cheezein bilkul clear honi chahiye:
- **Kya hai** — yojana/process/cheez kya hai, seedhe shabdon me, pehli 2-3 lines me hi
- **Kyu hai / kyu zaroori hai** — kisan ko isse kya milega (paisa, subsidy, bachav), kise milega, kise nahi
- **Kaise hoga** — exact steps: kaha jana hai (portal/CSC/bank), kya documents, kitna paisa/fees, kitna time lagega, problem aaye to kya karna

Agar koi bhi ek missing hai to article adhoora hai. Sab kuch **clear aur asaan** — 8vi pass kisan bhi mobile pe padh ke khud kaam kar sake. Ye hi 100% helpful ka matlab hai.

### AEO/SEO Limits — Image Wale Rules (K. Pemasiri AEO chart se, har article me follow karo)

| Cheez | Limit |
|---|---|
| Keyword density | 0.5%–1.5% max |
| Primary keywords | 1-2 per page |
| Secondary keywords | 3-5 max |
| Paragraph | 2-4 lines max (kabhi-kabhi break karo naturally) |
| Sentence | 8-16 words average |
| H1 | 1 per page |
| H2 | 3-8 per page |
| H3 | 5-15 per page |
| Title tag | 50-60 characters |
| Meta description | 120-155 characters |
| URL | 50-75 characters |
| Internal links | 3-10 |
| External links | 2-5 high-authority |
| Schema (structured data) | 1-3 types per page |
| FAQ schema questions | 3-5 max |
| Answer block (A+ answer) | 40-60 words per answer |
| Voice search answer | 20-40 words |
| Content length (AEO ideal) | 800-2,500 words — lekin hamara target 2,000-3,000, kyunki farming guides detail mangte hain; 2,000-2,500 sweet spot hai |
| Anchor text exact match | < 10% |
| Content update frequency | har 30-90 din me refresh |
| Page speed / LCP | < 2.5 sec (dev ka kaam, likhte waqt heavy embeds mat dalo) |
| CLS | < 0.1 |
| INP | < 200 ms |
| Bounce rate target | < 50% — pehli 2 lines me hi kisan ka jawab shuru ho jaye |

### Title + Meta (GSC data se)

- Neeche 📊 GSC Data section ki table me is article ka row dekho. **Top Real Queries ke exact words** title me naturally lao.
- Title 50-60 chars, saal (2026) tabhi jab query me ho, clickbait nahi lekin benefit clear ho ("₹5 Lakh", "2 Min Me", "Bina OTP").
- Meta description 120-155 chars — kisan ki bhasha me, ek action word ke saath.
- 🔴 URGENT wale pages pehle karo — waha impressions already hain, sirf CTR badhana hai.

### Kya Nahi Karna

- Purane article ka accurate data delete nahi karna — sirf improve/update karna.
- Publish/Modified dates aur slugs nahi badalne (URL change = ranking loss).
- Ek hi din me saare articles nahi — natural update pattern rakho.
- Dusre articles ke sections copy-paste nahi — har article fresh likhna.

### Har Article Ke Baad Checklist

- [ ] Har fact official source se PEHLE verify kiya? (Rule 0)
- [ ] 2,000-3,000 words? (exact count baaki articles se alag?)
- [ ] Structure pichhle 5 upgraded articles se alag?
- [ ] Koi AI word/pattern nahi? (upar wali list check karo)
- [ ] Keyword stuffing check kiya? (main keyword gina — 1.5% se kam? har paragraph me to nahi dikh raha? Poore article me KOI word/phrase repetitive nahi — real insaan jaisa padhe?)
- [ ] Saari images ka path verify kiya? (file `public/images/` me exist karti hai, image content se match karti hai, alt text natural hai)
- [ ] Kya-Kyu-Kaise teeno clear hain? (kisan bina kisi aur page pe gaye khud kaam kar sake)
- [ ] Headings me keyword sirf 2-3 baar?
- [ ] Table unique style me?
- [ ] FAQ 3-5, kisan ki bhasha me?
- [ ] Internal links 3-10, natural sentences me?
- [ ] Title 50-60 chars, GSC query match?
- [ ] Meta 120-155 chars?
- [ ] Saare facts official source se verified?
- [ ] 1-2 natural informality/typo hai?

## Upgrade Order (Priority)

1. **🔴 URGENT pages** (GSC table me) — title/meta + content, sabse pehle
2. **🟡 Improve pages** — title/meta fix + content upgrade
3. **🟢 OK pages with traffic** — content depth upgrade
4. **Baaki articles** (100 se kam impressions) — content upgrade, freshness

---

# 🗂️ Upgrade Parts Plan — 2 Articles Per Part (60 Parts)

Kaam parts me hoga: **har part = 2 articles**. Ek part ke dono articles upgrade hone ke baad turant repo me push karo AUR is file me us part ke aage ⬜ → ✅ + date lagao. Order GSC impressions ke hisab se (zyada impressions = pehle). `0 imp` = GSC me abhi 100+ impressions nahi, phir bhi upgrade hona hai.

| Part | Status | Article 1 | Article 2 |
|---|---|---|---|
| 1 | ✅ 2026-08-21 | `/articles/pm-kisan-fto-generated-ka-matlab-kya-hai` (2565 imp) | `/articles/hi/farmer-id-kaise-banaye` (2353 imp) |
| 2 | ✅ 2026-08-21 | `/rajya-yojana/odisha-cm-kisan-status-check-2026` (1776 imp) | `/articles/NanoDap500mlPriceInIndia2026` (1764 imp) |
| 3 | ✅ 2026-08-20 | `/articles/hi/namo-shetkari-yojana` (1697 imp) | `/articles/hi/pm-kisan-25vi-kist` (1149 imp) |
| 4 | ✅ 2026-08-20 | `/articles/msp-list-2026-27` (1062 imp) | `/articles/hi/npci-aadhaar-seeding` (940 imp) |
| 5 | ✅ 2026-08-20 | `/rajya-yojana/mp-kisan-kalyan-yojana-kist-status` (913 imp) | `/articles/PmKisanLandSeedingForm` (757 imp) |
| 6 | ✅ 2026-08-20 | `/articles/hi/tractor-subsidy` (691 imp) | `/rajya-yojana/namo-shetkari-yojana-status-check-2026` (638 imp) |
| 7 | ✅ 2026-08-20 | `/articles/bihar-pashupalan-loan-yojana` (635 imp) | `/articles/PmfbyCropInsurance2026` (560 imp) |
| 8 | ✅ 2026-08-20 | `/articles/bakri-palan-yojana-nlm-subsidy` (493 imp) | `/articles/hi/mp-kisan-kalyan-yojana` (402 imp) |
| 9 | ✅ 2026-08-20 | `/articles/mushroom-kheti-nhb-subsidy` (378 imp) | `/articles/PmKisanStateNodalOfficerList` (329 imp) |
| 10 | ✅ 2026-08-21 | `/articles/custom-hiring-centre-chc-portal` (312 imp) | `/maandhan/auto-debit-fail-hone-par-regularization-kaise-karein` (307 imp) |
| 11 | ✅ 2026-08-21 | `/rajya-yojana/annadata-sukhibhava-status-check-2026` (277 imp) | `/rajya-yojana/rajasthan-kisan-samman-nidhi-9000` (274 imp) |
| 12 | ✅ 2026-08-21 | `/articles/hi/kcc-limit-kaise-badhaye` (256 imp) | `/articles/mandi-bhav-app-comparison` (238 imp) |
| 13 | ✅ 2026-08-21 | `/articles/gehu-ka-bhav-msp-vs-mandi` (234 imp) | `/rajya-yojana/parihara-payment-status-check-2026` (214 imp) |
| 14 | ✅ 2026-08-21 | `/articles/hi/status-check-mobile-se` (206 imp) | `/rajya-yojana/rythu-bharosa-status-check-2026` (196 imp) |
| 15 | ✅ 2026-08-21 | `/articles/pm-matsya-sampada-yojana-fish-farming` (192 imp) | `/articles/AgriStackKyaHai2026` (191 imp) |
| 16 | ✅ 2026-08-21 | `/articles/murgi-palan-loan-nlm-subsidy` (191 imp) | `/articles/mandi-bhav-today` (176 imp) |
| 17 | ✅ 2026-08-21 | `/maandhan/pmkmy-bank-account-change` (168 imp) | `/rajya-yojana/krishak-bandhu-status-check-2026` (168 imp) |
| 18 | ✅ 2026-08-21 | `/articles/hi/nayi-registration` (156 imp) | `/articles/PmKisanPaymentFailedFix2026` (155 imp) |
| 19 | ✅ 2026-08-21 | `/rajya-yojana/state-kisan-yojana-list-all-states-2026` (155 imp) | `/articles/jansamarth-portal-loan-apply` (152 imp) |
| 20 | ✅ 2026-08-21 | `/articles/PmKisanBeneficiaryList2026` (140 imp) | `/articles/hi/recovery-notice` (137 imp) |
| 21 | ✅ 2026-08-21 | `/articles/PmKisanMasterGuide2026` (120 imp) | `/articles/dairy-farm-loan-without-collateral` (117 imp) |
| 22 | ✅ 2026-08-21 | `/maandhan/pm-kisan-maandhan-withdrawal-refund-rules` (113 imp) | `/articles/pm-kisan-self-registered-status-check` (107 imp) |
| 23 | ✅ 2026-08-21 | `/articles/madhumakhi-palan-kvic-subsidy` (103 imp) | `/rajya-yojana/bihar-kisan-registration-status-check-2026` (101 imp) |
| 24 | ✅ 2026-08-21 | `/articles/PmKisanCscRegistrationCharges` (99 imp) | `/maandhan/pm-kisan-maandhan-age-wise-contribution-chart-2026` (95 imp) |
| 25 | ✅ 2026-08-21 | `/articles/PmKisan24viKist2026` (84 imp) | `/articles/hi/ekyc-mobile-se` (81 imp) |
| 26 | ✅ 2026-08-21 | `/rajya-yojana/krishak-unnati-yojana-status-check-2026` (77 imp) | `/maandhan/pmkmy-grievance-complaint-helpline` (76 imp) |
| 27 | ✅ 2026-08-21 | `/articles/silage-making-business-guide` (75 imp) | `/articles/enam-registration-kaise-kare` (75 imp) |
| 28 | ✅ 2026-08-21 | `/articles/PmKisanRejectedStatusReApplyGuide` (73 imp) | `/articles/KisanTractorLoan2026` (69 imp) |
| 29 | ✅ 2026-08-21 | `/articles/PmKisanCorrectionForm2026` (67 imp) | `/articles/rashtriya-gokul-mission-subsidy` (64 imp) |
| 30 | ✅ 2026-08-21 | `/articles/PmKisanBankAccountChangeProcess` (63 imp) | `/maandhan/pm-kisan-maandhan-pension-calculator` (63 imp) |
| 31 | ✅ 2026-08-21 | `/articles/soil-health-card-complete-guide-2026` (61 imp) | `/articles/PmKisan25viKist2027` (50 imp) |
| 32 | ✅ 2026-08-21 | `/maandhan/pm-kisan-maandhan-vs-atal-pension-yojana` (47 imp) | `/articles/PmKisanVoluntarySurrenderGuide` (43 imp) |
| 33 | ✅ 2026-08-21 | `/articles/hi/gehu-ka-rate-aaj` (42 imp) | `/articles/sabzi-bhav-guide-pyaz-aloo-tamatar` (41 imp) |
| 34 | ✅ 2026-08-21 | `/articles/KisanRinKahaSeLe2026` (38 imp) | `/articles/sbi-dairy-loan-interest-rate` (37 imp) |
| 35 | ✅ 2026-08-21 | `/articles/PmKisanFaceAuthenticationEkyc` (36 imp) | `/rajya-yojana/pm-kisan-pati-patni-dono-ko-milega` (36 imp) |
| 36 | ✅ 2026-08-21 | `/articles/gau-mutra-kharid-yojana-up-2026` (34 imp) | `/maandhan/pm-kisan-maandhan-eligibility-documents` (27 imp) |
| 37 | ✅ 2026-08-21 | `/articles/hi/namo-drone-didi-yojana` (26 imp) | `/articles/vermi-compost-business-guide` (22 imp) |
| 38 | ✅ 2026-08-21 | `/articles/pm-fme-yojana-food-processing` (18 imp) | `/articles/PmKusumYojanaSolarSubsidy2026` (16 imp) |
| 39 | ✅ 2026-08-21 | `/maandhan/pm-kisan-maandhan-auto-debit-poora-sach` (15 imp) | `/articles/PmKisanMaandhanYojanaPension` (12 imp) |
| 40 | ✅ 2026-08-21 | `/articles/namo-drone-didi-yojana-shg-selection` (12 imp) | `/maandhan/family-pension-rules` (11 imp) |
| 41 | ✅ 2026-08-21 | `/articles/drip-sprinkler-irrigation-subsidy` (1 imp) | `/articles/hi/gau-mutra-kharid-yojana` (1 imp) |
| 42 | ✅ 2026-08-21 | `/rajya-yojana/ikhedut-portal-status-check-2026` (1 imp) | `/articles/PmKisanEkycOnline2026` (0 imp) |
| 43 | ✅ 2026-08-21 | `/articles/KisanCreditCardOnlineApply2026` (0 imp) | `/articles/fto-status-check-paisa-kab-aayega` (0 imp) |
| 44 | ✅ 2026-08-21 | `/articles/PmKisan26viKist` (0 imp) | `/articles/PmKisanVillageWiseListPdfDownload` (0 imp) |
| 45 | ✅ 2026-08-21 | `/articles/PmKisanMobileNumberChangeUpdate` (0 imp) | `/articles/hi/payment-stopped-by-state` (0 imp) |
| 46 | ✅ 2026-08-21 | `/articles/hi/rajasthan-kisan-samman-nidhi` (0 imp) | `/articles/hi/annadata-sukhibhava-status` (0 imp) |
| 47 | ✅ 2026-08-21 | `/articles/hi/rythu-bharosa-status` (0 imp) | `/articles/hi/krishak-bandhu-status` (0 imp) |
| 48 | ✅ 2026-08-21 | `/articles/hi/odisha-cm-kisan-status` (0 imp) | `/articles/hi/pati-patni-pm-kisan-rule` (0 imp) |
| 49 | ✅ 2026-08-21 | `/articles/hi/state-kisan-yojana-list` (0 imp) | `/articles/hi/krishak-unnati-yojana-status` (0 imp) |
| 50 | ✅ 2026-08-21 | `/articles/hi/meri-fasal-mera-byora-status` (0 imp) | `/articles/hi/bihar-kisan-registration-status` (0 imp) |
| 51 | ✅ 2026-08-21 | `/articles/hi/parihara-payment-status` (0 imp) | `/articles/hi/up-kisan-karj-rahat-list` (0 imp) |
| 52 | ⬜ | `/articles/hi/ikhedut-portal-status` (0 imp) | `/articles/hi/fasal-bima-claim-status` (0 imp) |
| 53 | ⬜ | `/articles/hi/kisan-karj-mafi-list` (0 imp) | `/articles/hi/pm-kisan-khad-yojana-sach` (0 imp) |
| 54 | ⬜ | `/articles/hi/pm-kisan-helpline-155261` (0 imp) | `/articles/hi/mgnrega-pashu-shed-yojana` (0 imp) |
| 55 | ⬜ | `/articles/hi/pashu-kisan-credit-card` (0 imp) | `/maandhan/pm-kisan-maandhan-registration-2026` (0 imp) |
| 56 | ⬜ | `/maandhan/pm-kisan-maandhan-status-check-online` (0 imp) | `/maandhan/pm-kisan-maandhan-pension-card-download` (0 imp) |
| 57 | ⬜ | `/rajya-yojana/meri-fasal-mera-byora-status-check-2026` (0 imp) | `/rajya-yojana/up-kisan-karj-rahat-list-2026` (0 imp) |
| 58 | ⬜ | `/yojana/fasal-bima-claim-status-check` (0 imp) | `/yojana/kisan-karj-mafi-list-all-states` (0 imp) |
| 59 | ⬜ | `/yojana/pm-kisan-khad-yojana-11000-sach` (0 imp) | `/yojana/pm-kisan-helpline-155261` (0 imp) |
| 60 | ⬜ | `/yojana/mgnrega-pashu-shed-yojana` (0 imp) | `/yojana/pashu-kisan-credit-card-apply` (0 imp) |

**Workflow per part:**
1. Dono articles ka GSC row dekho (neeche 📊 GSC Data table) + Master Prompt (upar, Rule 0, Rule 1, sab) follow karo
2. Dono articles ke component files (.tsx) + data files (title/meta) update karo
3. Push karo — ek commit per part: `Part N: upgrade <article-1>, <article-2>`
4. Is file me part ka status ⬜ → ✅ (date ke saath) karke push karo
5. Agla part shuru karo — pichhle 5 upgraded articles se structure alag rakhna yaad rahe

---

# Article Master List — Poora Picture

**Generated:** 2026-08-20 · **Total articles:** 120

Har article ka: URL route, data file (jaha slug/meta hai), component file (jaha content hai), language, category, dates, noindex status.

| # | Language | Count |
|---|---|---:|
| 1 | Hinglish | 86 |
| 2 | Hindi (Devanagari) | 34 |

---

## `lib/core-articles-data.ts` — 40 articles

| URL Route | Title | Language | Category | Component File | Published | Modified | Flags |
|---|---|---|---|---|---|---|---|
| `/articles/KisanRinKahaSeLe2026` | Kisan Loan 2026: KCC, Bank, CSC Guide | Hinglish | loan | `components/articles/KisanRinKahaSeLe2026.tsx` | 2026-06-20 | 2026-08-18 | — |
| `/articles/KisanTractorLoan2026` | Tractor Loan 2026: Bina Down Payment? | Hinglish | loan | `components/articles/KisanTractorLoan2026.tsx` | 2026-06-20 | 2026-08-20 | — |
| `/articles/PmKisanBeneficiaryList2026` | PM Kisan Beneficiary List 2026: Check | Hinglish | status-check | `components/articles/PmKisanBeneficiaryList2026.tsx` | 2026-06-20 | 2026-08-18 | — |
| `/articles/PmKisanEkycOnline2026` | PM Kisan eKYC 2026: 2 Min Mein Karein | Hinglish | status-check | `components/articles/PmKisanEkycOnline2026.tsx` | 2026-06-20 | 2026-08-18 | — |
| `/articles/PmfbyCropInsurance2026` | PMFBY Crop Insurance 2026: 2% Premium | Hinglish | farming | `components/articles/PmfbyCropInsurance2026.tsx` | 2026-06-20 | 2026-08-14 | — |
| `/articles/KisanCreditCardOnlineApply2026` | Kisan Credit Card 2026: ₹5 Lakh Loan | Hinglish | loan | `components/articles/KisanCreditCardOnlineApply2026.tsx` | 2026-06-21 | 2026-08-18 | — |
| `/articles/fto-status-check-paisa-kab-aayega` | FTO Status Check: Paisa Kab Aayega? | Hinglish | status-check | `components/articles/FtoStatusCheckPaisaKabAayega.tsx` | 2026-08-18 | 2026-08-20 | — |
| `/articles/pm-kisan-fto-generated-ka-matlab-kya-hai` | FTO Ka Full Form & FTO Generated Meaning | Hinglish | status-check | `components/articles/pm-kisan-fto-generated-ka-matlab-kya-hai.tsx` | 2026-06-23 | 2026-08-18 | — |
| `/articles/NanoDap500mlPriceInIndia2026` | Nano DAP 500ml Price 2026: IFFCO Rate | Hinglish | farming | `components/articles/NanoDap500mlPriceInIndia2026.tsx` | 2026-06-24 | 2026-08-20 | — |
| `/articles/PmKisan24viKist2026` | PM Kisan 24vi Kist 2026: Date & Status | Hinglish | status-check | `components/articles/PmKisan24viKist2026.tsx` | 2026-06-24 | 2026-08-17 | — |
| `/articles/AgriStackKyaHai2026` | AgriStack 2026: Digital Kisan ID Guide | Hinglish | farming | `components/articles/AgriStackKyaHai2026.tsx` | 2026-06-24 | 2026-08-20 | — |
| `/articles/PmKisanMasterGuide2026` | PM Kisan Complete Guide 2026: All Fixes | Hinglish | status-check | `components/articles/PmKisanMasterGuide2026.tsx` | 2026-07-05 | 2026-08-18 | — |
| `/articles/soil-health-card-complete-guide-2026` | Soil Health Card 2026: Mitti Test Guide | Hinglish | farming | `components/articles/soil-health-card-complete-guide-2026.tsx` | 2026-06-27 | 2026-08-18 | — |
| `/articles/mandi-bhav-today` | Aaj Ka Mandi Bhav: Daily Sabzi Rates | Hinglish | mandi | `components/articles/mandi-bhav-today.tsx` | 2026-06-30 | 2026-08-18 | — |
| `/articles/PmKisanPaymentFailedFix2026` | PM Kisan Payment Failed 2026: 7 Fixes | Hinglish | status-check | `components/articles/PmKisanPaymentFailedFix2026.tsx` | 2026-07-06 | 2026-08-18 | — |
| `/articles/PmKisan26viKist` | 26vi Kist Kab Aayegi: Date & List | Hinglish | status-check | `components/articles/PmKisan26viKist.tsx` | 2026-08-18 | 2026-08-18 | **noindex** |
| `/articles/PmKisan25viKist2027` | PM Kisan 25vi Kist 2027: Date & Amount | Hinglish | status-check | `components/articles/PmKisan25viKist2027.tsx` | 2026-07-06 | 2026-08-18 | — |
| `/articles/pm-kisan-self-registered-status-check` | PM Kisan Self Reg Status 2026: Check | Hinglish | status-check | `components/articles/PmKisanSelfRegisteredStatusCheck.tsx` | 2026-07-07 | 2026-08-20 | — |
| `/articles/PmKisanCorrectionForm2026` | PM Kisan Correction Form 2026: Fix Guide | Hinglish | status-check | `components/articles/PmKisanCorrectionForm2026.tsx` | 2026-07-08 | 2026-08-20 | — |
| `/articles/PmKusumYojanaSolarSubsidy2026` | PM Kusum Solar Pump 2026: 60% Subsidy | Hinglish | farming | `components/articles/PmKusumYojanaSolarSubsidy2026.tsx` | 2026-07-08 | 2026-08-20 | — |
| `/articles/PmKisanLandSeedingForm` | PM Kisan Land Seeding Form 2026: Poora Sach | Hinglish | status-check | `components/articles/PmKisanLandSeedingForm.tsx` | 2026-07-09 | 2026-08-17 | — |
| `/articles/PmKisanFaceAuthenticationEkyc` | PM Kisan Face Auth eKYC: Bina OTP | Hinglish | status-check | `components/articles/PmKisanFaceAuthenticationEkyc.tsx` | 2026-07-09 | 2026-08-20 | — |
| `/articles/PmKisanVoluntarySurrenderGuide` | PM Kisan Surrender Guide: Kaise Hatte? | Hinglish | status-check | `components/articles/PmKisanVoluntarySurrenderGuide.tsx` | 2026-07-09 | 2026-08-18 | — |
| `/articles/PmKisanStateNodalOfficerList` | PM Kisan Nodal Officer List: Contacts | Hinglish | status-check | `components/articles/PmKisanStateNodalOfficerList.tsx` | 2026-07-09 | 2026-08-20 | — |
| `/articles/PmKisanBankAccountChangeProcess` | PM Kisan Bank Change 2026: Naya Account | Hinglish | status-check | `components/articles/PmKisanBankAccountChangeProcess.tsx` | 2026-07-09 | 2026-08-20 | — |
| `/articles/PmKisanCscRegistrationCharges` | PM Kisan CSC Charges 2026: Sahi Fees | Hinglish | status-check | `components/articles/PmKisanCscRegistrationCharges.tsx` | 2026-07-09 | 2026-08-18 | — |
| `/articles/PmKisanMaandhanYojanaPension` | PM Kisan Maandhan 2026: ₹3000 Pension | Hinglish | farming | `components/articles/PmKisanMaandhanYojanaPension.tsx` | 2026-07-09 | 2026-08-20 | — |
| `/articles/PmKisanRejectedStatusReApplyGuide` | PM Kisan Rejected Status 2026: Reapply | Hinglish | status-check | `components/articles/PmKisanRejectedStatusReApplyGuide.tsx` | 2026-07-09 | 2026-08-20 | — |
| `/articles/PmKisanVillageWiseListPdfDownload` | PM Kisan Village List 2026: PDF Download | Hinglish | status-check | `components/articles/PmKisanVillageWiseListPdfDownload.tsx` | 2026-07-09 | 2026-08-20 | — |
| `/articles/PmKisanMobileNumberChangeUpdate` | PM Kisan Mobile Change 2026: Naya SIM | Hinglish | status-check | `components/articles/PmKisanMobileNumberChangeUpdate.tsx` | 2026-07-09 | 2026-08-17 | — |
| `/articles/bakri-palan-yojana-nlm-subsidy` | Bakri Palan Yojana 2026: NLM Subsidy | Hinglish | pashupalan | `components/articles/kisanguides/BakriPalanYojana.tsx` | 2026-07-12 | 2026-08-20 | — |
| `/articles/mushroom-kheti-nhb-subsidy` | Mushroom Kheti 2026: NHB Subsidy Guide | Hinglish | agri-business | `components/articles/kisanguides/MushroomKheti.tsx` | 2026-07-12 | 2026-08-20 | — |
| `/articles/madhumakhi-palan-kvic-subsidy` | Madhumakhi Palan 2026: KVIC Subsidy | Hinglish | pashupalan | `components/articles/kisanguides/MadhumakhiPalan.tsx` | 2026-07-12 | 2026-08-20 | — |
| `/articles/pm-matsya-sampada-yojana-fish-farming` | PM Matsya Yojana 2026: 60% Subsidy | Hinglish | pashupalan | `components/articles/kisanguides/PMatsyaSampada.tsx` | 2026-07-12 | 2026-08-18 | — |
| `/articles/silage-making-business-guide` | Silage Business 2026: SMAM Subsidy | Hinglish | pashupalan | `components/articles/kisanguides/SilageMaking.tsx` | 2026-07-12 | 2026-08-13 | — |
| `/articles/pm-fme-yojana-food-processing` | PM FME Yojana 2026: 35% Subsidy | Hinglish | agri-business | `components/articles/kisanguides/PMFMEYojana.tsx` | 2026-07-12 | 2026-08-13 | — |
| `/articles/custom-hiring-centre-chc-portal` | Custom Hiring Centre 2026: SMAM Guide | Hinglish | agri-business | `components/articles/kisanguides/CHCPortal.tsx` | 2026-07-12 | 2026-08-20 | — |
| `/articles/vermi-compost-business-guide` | Vermi Compost Business 2026: PKVY Guide | Hinglish | agri-business | `components/articles/kisanguides/VerminCompost.tsx` | 2026-07-12 | 2026-08-18 | — |
| `/articles/drip-sprinkler-irrigation-subsidy` | Drip Sprinkler Subsidy: PDMC ke 55% / 45% Niyam | Hinglish | agri-business | `components/articles/kisanguides/DripSprinkler.tsx` | 2026-07-12 | 2026-08-17 | — |
| `/articles/namo-drone-didi-yojana-shg-selection` | Namo Drone Didi 2026: SHG Selection Sach | Hinglish | agri-business | `components/articles/kisanguides/NamoDroneDidiYojana.tsx` | 2026-08-15 | 2026-08-16 | — |

## `lib/loan-mandi-pashupalan-data.ts` — 12 articles

| URL Route | Title | Language | Category | Component File | Published | Modified | Flags |
|---|---|---|---|---|---|---|---|
| `/articles/dairy-farm-loan-without-collateral` | Dairy Farm Loan Bina Collateral 2026 | Hinglish | loan | `components/articles/loan-mandi-pashupalan/DairyFarmLoanWithoutCollateral.tsx` | 2026-07-11 | 2026-08-01 | — |
| `/articles/sbi-dairy-loan-interest-rate` | SBI Dairy Loan Interest Rate 2026 | Hinglish | loan | `components/articles/loan-mandi-pashupalan/SbiDairyLoanInterestRate.tsx` | 2026-03-12 | 2026-03-21 | — |
| `/articles/jansamarth-portal-loan-apply` | JanSamarth Portal 2026: Loan Apply | Hinglish | loan | `components/articles/loan-mandi-pashupalan/JansamarthPortalLoanApply.tsx` | 2026-06-29 | 2026-07-04 | — |
| `/articles/enam-registration-kaise-kare` | eNAM Registration 2026: Kaise Karein | Hinglish | mandi | `components/articles/loan-mandi-pashupalan/EnamRegistrationKaiseKare.tsx` | 2026-07-02 | 2026-07-16 | — |
| `/articles/msp-list-2026-27` | MSP List 2026-27: Rabi & Kharif | Hinglish | mandi | `components/articles/loan-mandi-pashupalan/MspList202627.tsx` | 2026-05-30 | 2026-08-18 | — |
| `/articles/mandi-bhav-app-comparison` | Best Mandi Bhav Apps 2026: Top 7 | Hinglish | mandi | `components/articles/loan-mandi-pashupalan/MandiBhavAppComparison.tsx` | 2026-03-07 | 2026-03-12 | — |
| `/articles/gehu-ka-bhav-msp-vs-mandi` | Gehu Ka Bhav 2026: MSP vs Mandi Rate | Hinglish | mandi | `components/articles/loan-mandi-pashupalan/GehuKaBhavMspVsMandi.tsx` | 2026-05-26 | 2026-07-07 | — |
| `/articles/sabzi-bhav-guide-pyaz-aloo-tamatar` | Pyaz-Aloo-Tamatar Bhav Guide 2026 | Hinglish | mandi | `components/articles/loan-mandi-pashupalan/SabziBhavGuidePyazAlooTamatar.tsx` | 2026-03-28 | 2026-04-02 | — |
| `/articles/murgi-palan-loan-nlm-subsidy` | Murgi Palan Loan 2026: NLM 50% Subsidy | Hinglish | pashupalan | `components/articles/loan-mandi-pashupalan/MurgiPalanLoanNlmSubsidy.tsx` | 2026-05-08 | 2026-05-29 | — |
| `/articles/bihar-pashupalan-loan-yojana` | Bihar Pashupalan Loan Yojana 2026 | Hinglish | pashupalan | `components/articles/loan-mandi-pashupalan/BiharPashupalanLoanYojana.tsx` | 2026-05-20 | 2026-05-29 | — |
| `/articles/rashtriya-gokul-mission-subsidy` | Rashtriya Gokul Mission 2026: Subsidy | Hinglish | pashupalan | `components/articles/loan-mandi-pashupalan/RashtriyaGokulMissionSubsidy.tsx` | 2026-05-18 | 2026-05-23 | — |
| `/articles/gau-mutra-kharid-yojana-up-2026` | Gau Mutra Kharid Yojana UP 2026: ₹10/Litre | Hinglish | pashupalan | `components/articles/GauMutraKharidYojanaUp2026.tsx` | 2026-08-13 | 2026-08-14 | — |

## `lib/hindi-yojana-data.ts` — 8 articles

| URL Route | Title | Language | Category | Component File | Published | Modified | Flags |
|---|---|---|---|---|---|---|---|
| `/articles/hi/pm-kisan-25vi-kist` | पीएम किसान 25वीं किस्त कब आएगी? Date और Latest Update | Hindi (Devanagari) | status-check | `components/articles/hindi-yojana/PmKisan25viKistKabAayegi.tsx` | 2026-07-27 | 2026-08-05 | — |
| `/articles/hi/status-check-mobile-se` | मोबाइल नंबर से पीएम किसान स्टेटस कैसे चेक करें? आसान तरीका | Hindi (Devanagari) | status-check | `components/articles/hindi-yojana/PmKisanStatusCheckMobileNumberSe.tsx` | 2026-07-24 | 2026-08-07 | — |
| `/articles/hi/nayi-registration` | पीएम किसान नई रजिस्ट्रेशन 2027 — Farmer ID से ऐसे करें Apply | Hindi (Devanagari) | status-check | `components/articles/hindi-yojana/PmKisanNewRegistration2027.tsx` | 2026-04-19 | 2026-04-24 | — |
| `/articles/hi/farmer-id-kaise-banaye` | किसान आईडी कैसे बनाएं 2027? Free, मोबाइल से 10 मिनट में | Hindi (Devanagari) | farming | `components/articles/hindi-yojana/FarmerIdCardKaiseBanaye2027.tsx` | 2026-06-07 | 2026-08-18 | — |
| `/articles/hi/ekyc-mobile-se` | PM Kisan eKYC मोबाइल से कैसे करें? OTP और Face Auth तरीका | Hindi (Devanagari) | status-check | `components/articles/hindi-yojana/PmKisanEkycMobileSeKaiseKare.tsx` | 2026-07-16 | 2026-07-21 | — |
| `/articles/hi/npci-aadhaar-seeding` | Aadhaar Not Seeded? NPCI सीडिंग से DBT फिक्स | Hindi (Devanagari) | status-check | `components/articles/hindi-yojana/NpciAadhaarSeedingDbtPayment.tsx` | 2026-07-19 | 2026-08-18 | — |
| `/articles/hi/payment-stopped-by-state` | "Payment Stopped by State" का मतलब क्या है? जानिए आसान Fix | Hindi (Devanagari) | status-check | `components/articles/hindi-yojana/PmKisanPaymentStoppedByStateFix.tsx` | 2026-05-02 | 2026-05-11 | — |
| `/articles/hi/recovery-notice` | PM Kisan Recovery Notice आया? पैसा वापस करने का पूरा तरीका | Hindi (Devanagari) | status-check | `components/articles/hindi-yojana/PmKisanRecoveryNoticePaisaWapas.tsx` | 2026-04-26 | 2026-06-07 | — |

## `lib/hindi-kisanguides-data.ts` — 2 articles

| URL Route | Title | Language | Category | Component File | Published | Modified | Flags |
|---|---|---|---|---|---|---|---|
| `/articles/hi/tractor-subsidy` | ट्रैक्टर सब्सिडी 2027 — किस राज्य में कितनी छूट? पूरी लिस्ट | Hindi (Devanagari) | agri-business | `components/articles/hindi-kisanguides/TractorSubsidy2027StateWiseList.tsx` | 2026-03-31 | 2026-04-14 | — |
| `/articles/hi/namo-drone-didi-yojana` | नमो ड्रोन दीदी योजना — कोई form नहीं, रास्ता SHG से जाता है | Hindi (Devanagari) | agri-business | `components/articles/hindi-kisanguides/NamoDroneDidiYojanaHindi.tsx` | 2026-08-15 | 2026-08-16 | — |

## `lib/hindi-loan-mandi-pashupalan-data.ts` — 3 articles

| URL Route | Title | Language | Category | Component File | Published | Modified | Flags |
|---|---|---|---|---|---|---|---|
| `/articles/hi/gehu-ka-rate-aaj` | गेहूं का रेट आज — MSP vs मंडी भाव तुलना | Hindi (Devanagari) | mandi | `components/articles/hindi-loan-mandi-pashupalan/GehuKaRateAajMspVsMandiBhav.tsx` | 2026-07-22 | 2026-07-27 | — |
| `/articles/hi/kcc-limit-kaise-badhaye` | KCC लिमिट ₹3 से ₹5 लाख कैसे बढ़ाएं? Renewal का पूरा तरीका | Hindi (Devanagari) | loan | `components/articles/hindi-loan-mandi-pashupalan/KccLimitKaiseBadhaye3Se5Lakh.tsx` | 2026-07-14 | 2026-08-04 | — |
| `/articles/hi/gau-mutra-kharid-yojana` | गाय के मूत्र की खरीद योजना — बुलंदशहर में 10 रुपये लीटर | Hindi (Devanagari) | pashupalan | `components/articles/hindi-loan-mandi-pashupalan/GauMutraKharidYojanaHindi.tsx` | 2026-08-13 | 2026-08-14 | — |

## `lib/hindi-rajya-yojana-data.ts` — 15 articles

| URL Route | Title | Language | Category | Component File | Published | Modified | Flags |
|---|---|---|---|---|---|---|---|
| `/articles/hi/mp-kisan-kalyan-yojana` | MP किसान कल्याण योजना — ₹12000 सालाना कैसे मिलेंगे? जानिए | Hindi (Devanagari) | farming | `components/articles/hindi-rajya-yojana/MukhyamantriKisanKalyanYojanaMp.tsx` | 2026-04-17 | 2026-04-22 | — |
| `/articles/hi/namo-shetkari-yojana` | नमो शेतकरी किस्त कब आएगी? पैसे का पूरा हिसाब जानिए | Hindi (Devanagari) | farming | `components/articles/hindi-rajya-yojana/NamoShetkariYojanaMaharashtra.tsx` | 2026-07-05 | 2026-08-18 | — |
| `/articles/hi/rajasthan-kisan-samman-nidhi` | राजस्थान किसान सम्मान निधि — ₹9,000 का हिसाब और किस्त की स्थिति | Hindi (Devanagari) | farming | `components/articles/hindi-rajya-yojana/RajasthanKisanSammanNidhiHindi.tsx` | 2026-08-16 | 2026-08-16 | — |
| `/articles/hi/annadata-sukhibhava-status` | अन्नदाता सुखीभव स्थिति — ₹20,000 और CCRC का पूरा हिसाब | Hindi (Devanagari) | status-check | `components/articles/hindi-rajya-yojana/AnnadataSukhibhavaStatusHindi.tsx` | 2026-08-16 | 2026-08-16 | — |
| `/articles/hi/rythu-bharosa-status` | रायथु भरोसा स्थिति — बंधु से भरोसा तक, ₹12,000 प्रति एकड़ का हिसाब | Hindi (Devanagari) | status-check | `components/articles/hindi-rajya-yojana/RythuBharosaStatusHindi.tsx` | 2026-08-16 | 2026-08-20 | — |
| `/articles/hi/krishak-bandhu-status` | कृषक बंधु स्थिति — वोटर कार्ड से किस्त और ₹2 लाख का हिसाब | Hindi (Devanagari) | status-check | `components/articles/hindi-rajya-yojana/KrishakBandhuStatusHindi.tsx` | 2026-08-17 | 2026-08-18 | — |
| `/articles/hi/odisha-cm-kisan-status` | ओडिशा CM Kisan स्थिति — भूमिहीन को भी ₹12,500 का रास्ता | Hindi (Devanagari) | status-check | `components/articles/hindi-rajya-yojana/OdishaCmKisanStatusHindi.tsx` | 2026-08-17 | 2026-08-17 | — |
| `/articles/hi/pati-patni-pm-kisan-rule` | पति-पत्नी दोनों को PM Kisan मिलेगा? नियम का सीधा जवाब | Hindi (Devanagari) | status-check | `components/articles/hindi-rajya-yojana/PatiPatniPmKisanRuleHindi.tsx` | 2026-08-17 | 2026-08-17 | — |
| `/articles/hi/state-kisan-yojana-list` | राज्य किसान योजना लिस्ट 2026 — किस राज्य में कितना पैसा मिलता है? | Hindi (Devanagari) | status-check | `components/articles/hindi-rajya-yojana/StateKisanYojanaListHindi.tsx` | 2026-08-17 | 2026-08-17 | — |
| `/articles/hi/krishak-unnati-yojana-status` | कृषक उन्नति योजना स्टेटस 2026 — अंतर राशि कब और कितनी मिलेगी? | Hindi (Devanagari) | status-check | `components/articles/hindi-rajya-yojana/KrishakUnnatiYojanaStatusHindi.tsx` | 2026-08-17 | 2026-08-17 | — |
| `/articles/hi/meri-fasal-mera-byora-status` | मेरी फसल मेरा ब्योरा स्टेटस 2026 — रजिस्ट्रेशन से MSP भुगतान तक | Hindi (Devanagari) | status-check | `components/articles/hindi-rajya-yojana/MeriFasalMeraByoraStatusHindi.tsx` | 2026-08-16 | 2026-08-16 | — |
| `/articles/hi/bihar-kisan-registration-status` | बिहार किसान पंजीकरण स्टेटस 2026 — 13 अंकों का नंबर, सारी योजनाओं का दरवाजा | Hindi (Devanagari) | status-check | `components/articles/hindi-rajya-yojana/BiharKisanRegistrationStatusHindi.tsx` | 2026-08-16 | 2026-08-16 | — |
| `/articles/hi/parihara-payment-status` | परिहार पेमेंट स्टेटस 2026 — फसल नुकसान मुआवजा कहां अटका, कैसे देखें? | Hindi (Devanagari) | status-check | `components/articles/hindi-rajya-yojana/PariharaPaymentStatusHindi.tsx` | 2026-08-16 | 2026-08-20 | — |
| `/articles/hi/up-kisan-karj-rahat-list` | UP किसान कर्ज राहत लिस्ट 2026 — नई माफी का सच और नाम देखने का तरीका | Hindi (Devanagari) | status-check | `components/articles/hindi-rajya-yojana/UpKisanKarjRahatListHindi.tsx` | 2026-08-16 | 2026-08-18 | — |
| `/articles/hi/ikhedut-portal-status` | iKhedut पोर्टल स्टेटस चेक 2026 — अर्जी नंबर से सब्सिडी तक | Hindi (Devanagari) | status-check | `components/articles/hindi-rajya-yojana/IkhedutPortalStatusHindi.tsx` | 2026-08-17 | 2026-08-17 | — |

## `lib/hindi-yojana-2026-data.ts` — 6 articles

| URL Route | Title | Language | Category | Component File | Published | Modified | Flags |
|---|---|---|---|---|---|---|---|
| `/articles/hi/fasal-bima-claim-status` | फसल बीमा क्लेम स्टेटस — पैसा कब और कैसे मिलेगा | Hindi (Devanagari) | farming | `components/articles/hindi-yojana-2026/FasalBimaClaimStatusHindi.tsx` | 2026-08-18 | 2026-08-18 | — |
| `/articles/hi/kisan-karj-mafi-list` | किसान कर्ज माफी 2026 — किस राज्य में सच में चल रही है | Hindi (Devanagari) | farming | `components/articles/hindi-yojana-2026/KisanKarjMafiAllStatesHindi.tsx` | 2026-08-18 | 2026-08-18 | — |
| `/articles/hi/pm-kisan-khad-yojana-sach` | PM किसान खाद योजना ₹11,000 — सच क्या है | Hindi (Devanagari) | farming | `components/articles/hindi-yojana-2026/PmKisanKhadYojanaSachHindi.tsx` | 2026-08-18 | 2026-08-20 | — |
| `/articles/hi/pm-kisan-helpline-155261` | PM किसान हेल्पलाइन 155261 — शिकायत कैसे और कहां करें | Hindi (Devanagari) | status-check | `components/articles/hindi-yojana-2026/PmKisanHelpline155261Hindi.tsx` | 2026-08-18 | 2026-08-18 | — |
| `/articles/hi/mgnrega-pashu-shed-yojana` | मनरेगा पशु शेड योजना — ₹1.6 लाख तक, असली प्रोसेस | Hindi (Devanagari) | farming | `components/articles/hindi-yojana-2026/MgnregaPashuShedYojanaHindi.tsx` | 2026-08-18 | 2026-08-20 | — |
| `/articles/hi/pashu-kisan-credit-card` | पशु किसान क्रेडिट कार्ड — ₹3 लाख तक लोन, बिना जमीन के भी | Hindi (Devanagari) | farming | `components/articles/hindi-yojana-2026/PashuKisanCreditCardHindi.tsx` | 2026-08-18 | 2026-08-20 | — |

## `lib/maandhan-data.ts` — 13 articles

| URL Route | Title | Language | Category | Component File | Published | Modified | Flags |
|---|---|---|---|---|---|---|---|
| `/maandhan/pm-kisan-maandhan-registration-2026` | PM Kisan Maandhan Registration: ₹3000 Pension | Hinglish | pension-scheme | `components/articles/maandhan/PmKisanMaandhanRegistration2026.tsx` | 2026-03-15 | 2026-03-24 | — |
| `/maandhan/pm-kisan-maandhan-eligibility-documents` | PM Kisan Maandhan Eligibility & Documents | Hinglish | pension-scheme | `components/articles/maandhan/PmKisanMaandhanEligibilityDocuments.tsx` | 2026-03-18 | 2026-04-08 | — |
| `/maandhan/pm-kisan-maandhan-pension-calculator` | PM Kisan Maandhan Pension Calculator 2026 | Hinglish | pension-scheme | `components/articles/maandhan/PmKisanMaandhanPensionCalculator.tsx` | 2026-03-20 | 2026-04-03 | — |
| `/maandhan/pm-kisan-maandhan-withdrawal-refund-rules` | Maandhan Exit: Refund & Family Pension Ka Sach | Hinglish | pension-scheme | `components/articles/maandhan/PmKisanMaandhanWithdrawalRefund.tsx` | 2026-03-23 | 2026-04-06 | — |
| `/maandhan/pm-kisan-maandhan-auto-debit-poora-sach` | PM Kisan Maandhan Auto-Debit: Poora Sach | Hinglish | pension-scheme | `components/articles/maandhan/PmKisanMaandhanAutoDebitPooraSach.tsx` | 2026-04-02 | 2026-05-02 | — |
| `/maandhan/pm-kisan-maandhan-status-check-online` | PM Kisan Maandhan Status Check Online | Hinglish | pension-scheme | `components/articles/maandhan/PmKisanMaandhanStatusCheckOnline.tsx` | 2026-04-05 | 2026-04-19 | — |
| `/maandhan/pm-kisan-maandhan-pension-card-download` | PM Kisan Maandhan Pension Card Download | Hinglish | pension-scheme | `components/articles/maandhan/kisan-pension-card-download.tsx` | 2026-04-14 | 2026-04-23 | — |
| `/maandhan/family-pension-rules` | PMKMY Family Pension Rules 2026 — Kya Hoga? | Hinglish | pension-scheme | `components/articles/maandhan/family-pension-rules.tsx` | 2026-04-22 | 2026-05-22 | — |
| `/maandhan/pmkmy-bank-account-change` | PM Kisan Maandhan Bank Account Kaise Badlein | Hinglish | pension-scheme | `components/articles/maandhan/pmkmy-bank-account-change.tsx` | 2026-04-30 | 2026-05-30 | — |
| `/maandhan/pmkmy-grievance-complaint-helpline` | PM Kisan Maandhan Helpline Number 2026 | Hinglish | pension-scheme | `components/articles/maandhan/pmkmy-grievance-complaint-helpline.tsx` | 2026-05-11 | 2026-05-25 | — |
| `/maandhan/auto-debit-fail-hone-par-regularization-kaise-karein` | Auto Debit Fail Regularization Kaise Karein | Hinglish | pension-scheme | `components/articles/maandhan/AutoDebitFailRegularization.tsx` | 2026-05-13 | 2026-05-18 | — |
| `/maandhan/pm-kisan-maandhan-age-wise-contribution-chart-2026` | PM Kisan Maandhan Contribution Chart 2026 | Hinglish | pension-scheme | `components/articles/maandhan/MaandhanContributionGuide.tsx` | 2026-05-22 | 2026-08-20 | — |
| `/maandhan/pm-kisan-maandhan-vs-atal-pension-yojana` | PM Kisan Maandhan vs Atal Pension Yojana 2026 | Hinglish | pension-scheme | `components/articles/maandhan/PmkmyVsApyComparison2026.tsx` | 2026-05-24 | 2026-06-02 | — |

## `lib/rajya-yojana-data.ts` — 15 articles

| URL Route | Title | Language | Category | Component File | Published | Modified | Flags |
|---|---|---|---|---|---|---|---|
| `/rajya-yojana/rajasthan-kisan-samman-nidhi-9000` | Rajasthan Kisan Samman Nidhi — Kist Kab Aayegi | Hinglish | Rajasthan | `components/articles/rajya-yojana/RajasthanKisanSammanNidhi9000.tsx` | 2026-06-09 | 2026-06-18 | — |
| `/rajya-yojana/annadata-sukhibhava-status-check-2026` | Annadata Sukhibhava Status Check 2026 | Hinglish | Andhra Pradesh | `components/articles/rajya-yojana/AnnadataSukhibhavaStatusCheck.tsx` | 2026-06-11 | 2026-07-23 | — |
| `/rajya-yojana/mp-kisan-kalyan-yojana-kist-status` | MP Kisan Kalyan Yojana Kist Status 2026 | Hinglish | Madhya Pradesh | `components/articles/rajya-yojana/MpKisanKalyanYojanaKist.tsx` | 2026-06-13 | 2026-07-04 | — |
| `/rajya-yojana/namo-shetkari-yojana-status-check-2026` | Namo Shetkari Status 2026 — Beneficiary List | Hinglish | Maharashtra | `components/articles/rajya-yojana/NamoShetkariYojanaStatus.tsx` | 2026-06-15 | 2026-06-24 | — |
| `/rajya-yojana/rythu-bharosa-status-check-2026` | Rythu Bharosa Status Check 2026 | Hinglish | Telangana | `components/articles/rajya-yojana/RythuBharosaStatusCheck.tsx` | 2026-06-17 | 2026-07-17 | — |
| `/rajya-yojana/krishak-bandhu-status-check-2026` | Krishak Bandhu Status Check 2026 | Hinglish | West Bengal | `components/articles/rajya-yojana/KrishakBandhuStatusCheck.tsx` | 2026-06-20 | 2026-08-01 | — |
| `/rajya-yojana/odisha-cm-kisan-status-check-2026` | Odisha CM Kisan Status Check 2026 | Hinglish | Odisha | `components/articles/rajya-yojana/OdishaCmKisanStatusCheck.tsx` | 2026-06-23 | 2026-07-02 | — |
| `/rajya-yojana/pm-kisan-pati-patni-dono-ko-milega` | Pati Patni Dono Ko PM Kisan Milega? | Hinglish | ALL | `components/articles/rajya-yojana/PmKisanPatiPatniRule.tsx` | 2026-06-25 | 2026-06-30 | — |
| `/rajya-yojana/state-kisan-yojana-list-all-states-2026` | State Kisan Yojana List 2026 — Sabhi Rajya | Hinglish | ALL | `components/articles/rajya-yojana/StateKisanYojanaHub.tsx` | 2026-06-27 | 2026-08-08 | — |
| `/rajya-yojana/krishak-unnati-yojana-status-check-2026` | Krishak Unnati Yojana Status Check 2026 | Hinglish | Chhattisgarh | `components/articles/rajya-yojana/KrishakUnnatiYojanaStatusCheck.tsx` | 2026-07-07 | 2026-07-16 | — |
| `/rajya-yojana/meri-fasal-mera-byora-status-check-2026` | Meri Fasal Mera Byora Status Check 2026 | Hinglish | Haryana | `components/articles/rajya-yojana/MeriFasalMeraByoraStatusCheck2026.tsx` | 2026-07-31 | 2026-08-06 | — |
| `/rajya-yojana/bihar-kisan-registration-status-check-2026` | DBT Agriculture Bihar Status Check 2026 | Hinglish | Bihar | `components/articles/rajya-yojana/BiharKisanRegistrationStatusCheck2026.tsx` | 2026-08-09 | 2026-08-11 | — |
| `/rajya-yojana/parihara-payment-status-check-2026` | Parihara Payment Status 2026 Village Wise | Hinglish | Karnataka | `components/articles/rajya-yojana/PariharaPaymentStatusCheck2026.tsx` | 2026-08-06 | 2026-08-08 | — |
| `/rajya-yojana/up-kisan-karj-rahat-list-2026` | UP Kisan Karj Rahat List 2026 — Status | Hinglish | Uttar Pradesh | `components/articles/rajya-yojana/UpKisanKarjRahatList2026.tsx` | 2026-08-02 | 2026-08-06 | — |
| `/rajya-yojana/ikhedut-portal-status-check-2026` | iKhedut Portal Status Check 2026 — Arji Status | Hinglish | Gujarat | `components/articles/rajya-yojana/IkhedutPortalStatusCheck2026.tsx` | 2026-08-11 | 2026-08-11 | — |

## `lib/yojana-2026-data.ts` — 6 articles

| URL Route | Title | Language | Category | Component File | Published | Modified | Flags |
|---|---|---|---|---|---|---|---|
| `/yojana/fasal-bima-claim-status-check` | Fasal Bima Claim Status — Paisa Kab Milega | Hinglish | — | `components/articles/yojana-2026/FasalBimaClaimStatusCheck.tsx` | 2026-08-18 | 2026-08-18 | — |
| `/yojana/kisan-karj-mafi-list-all-states` | Kisan Karj Mafi 2026 — Kis State Me Chalu | Hinglish | — | `components/articles/yojana-2026/KisanKarjMafiAllStates.tsx` | 2026-08-18 | 2026-08-18 | — |
| `/yojana/pm-kisan-khad-yojana-11000-sach` | PM Kisan Khad Yojana ₹11,000 — Sach Kya Hai | Hinglish | — | `components/articles/yojana-2026/PmKisanKhadYojanaSach.tsx` | 2026-08-18 | 2026-08-18 | — |
| `/yojana/pm-kisan-helpline-155261` | PM Kisan Helpline 155261 — Complaint Guide | Hinglish | — | `components/articles/yojana-2026/PmKisanHelpline155261.tsx` | 2026-08-18 | 2026-08-18 | — |
| `/yojana/mgnrega-pashu-shed-yojana` | MGNREGA Pashu Shed Yojana — ₹1.6L Tak | Hinglish | — | `components/articles/yojana-2026/MgnregaPashuShedYojana.tsx` | 2026-08-18 | 2026-08-18 | — |
| `/yojana/pashu-kisan-credit-card-apply` | Pashu Kisan Credit Card — ₹3 Lakh Tak | Hinglish | — | `components/articles/yojana-2026/PashuKisanCreditCard.tsx` | 2026-08-18 | 2026-08-18 | — |

---

## Notes

- **Language detection:** title me Devanagari script = Hindi; warna Hinglish (Roman script).
- **Data file** = jaha article ka slug, title, SEO meta, dates define hain.
- **Component file** = jaha article ka actual JSX content hai.
- **noindex** articles sitemap se excluded hain aur Google index nahi karta (dekho `lib/categories.ts` ArticleMeta.noindex).
- Rajya-yojana data me `status` field hai (`live`/`planned`) — is waqt sab 15 `live` hain. `planned` wale table me flag ke saath dikhen ge.
- Ye list repo ke data files se script-generated hai — data files badle to list bhi update karo.

---

# 📊 GSC Data — Last 30 Days (19 Jul – 19 Aug 2026)

Source: Google Search Console, property `sc-domain:kisanstatus.com`. Sirf woh pages jinke 100+ impressions hain (52 pages). Flag ka matlab:
- 🔴 URGENT = high impressions, CTR < 1.5% — title/meta pehle inke fix karo, sabse zyada traffic yahi se milega
- 🟡 Improve = CTR < 2.5% — title/meta improve karo
- 🟢 OK = CTR theek hai, content upgrade pe focus karo

| Page | Clicks | Impr. | CTR | Pos. | Priority | Top Real Queries (GSC se) |
|---|---:|---:|---:|---:|---|---|
| `/articles/pm-kisan-fto-generated-ka-matlab-kya-hai` | 16 | 2565 | 0.6% | 7.7 | 🔴 URGENT | fto will be generated; fto ka full form; fto full form |
| `/articles/hi/farmer-id-kaise-banaye` | 18 | 2353 | 0.8% | 6.9 | 🔴 URGENT | किस आईडी कैसे बनाएं; agristack id kaise banaye; किसान आईडी कैसे बनाएं |
| `/rajya-yojana/odisha-cm-kisan-status-check-2026` | 57 | 1776 | 3.2% | 7.4 | 🟢 OK | cm kisan portal odisha status check 2026; odisha cm kisan status check; cm kisan portal odisha status check |
| `/articles/NanoDap500mlPriceInIndia2026` | 14 | 1764 | 0.8% | 7.2 | 🔴 URGENT | nano dap price 500 ml; nano dap 500ml price; iffco dap price |
| `/articles/hi/namo-shetkari-yojana` | 20 | 1697 | 1.2% | 5.5 | 🔴 URGENT | namo shetkari ke paise kab aayenge; namo shetkari kist kab aaegi; नमो शेतकरी किस्त कब आएगी |
| `/articles/hi/pm-kisan-25vi-kist` | 55 | 1149 | 4.8% | 2.6 | 🟢 OK | pm kisan 25 kist kab aayegi; 25 kist kab aaegi; pm kisan samman nidhi 25 kist kab aayegi |
| `/articles/msp-list-2026-27` | 21 | 1062 | 2.0% | 7.5 | 🟡 Improve | msp 2026-27 list kharif; msp list 2026-27; msp 2026-27 list rabi |
| `/articles/hi/npci-aadhaar-seeding` | 4 | 940 | 0.4% | 7.5 | 🔴 URGENT | वर्तमान में इस प्रक्रिया को मुख्य रूप से भौतिक अनुरोध रूपों और एक अर्ध स्वचालित प्रक्रिया का उपयोग करके किया जाता है ताकि एक डीबीटी लाभार्थी की सुविधा के लिए सीडिंग प्रक्रिया को मूल रूप से प्रबंधित किया जा सके और उस खाते के नियंत्रण में हो जिससे लाभ प्रवाहित होगा यह एक सीडिंग प्लेटफॉर्म स्थापित करने का निर्णय लिया गया है; your aadhaar number is not seeded indane; account seeding |
| `/rajya-yojana/mp-kisan-kalyan-yojana-kist-status` | 38 | 913 | 4.2% | 9.5 | 🟢 OK | mp saara payment status; mp kisan kalyan yojana status; cm kisan beneficiary status mp saara |
| `/articles/PmKisanLandSeedingForm` | 54 | 757 | 7.1% | 7.6 | 🟢 OK | pm kisan land seeding form; land seeding form; pm kisan land seeding form rajasthan pdf |
| `/articles/hi/tractor-subsidy` | 9 | 691 | 1.3% | 7.0 | 🔴 URGENT | — |
| `/rajya-yojana/namo-shetkari-yojana-status-check-2026` | 6 | 638 | 0.9% | 8.6 | 🔴 URGENT | namo shetkari yojana beneficiary list 2026 pdf; namo shetkari yojana beneficiary list 2026; namo shetkari mahasanman nidhi yojana status check |
| `/articles/bihar-pashupalan-loan-yojana` | 13 | 635 | 2.0% | 7.5 | 🟡 Improve | pasupalan loan yojna bihar 2026; bihar pashupalan loan yojana 2026; bihar pashupalan loan yojana 2026 last date |
| `/articles/PmfbyCropInsurance2026` | 1 | 560 | 0.2% | 11.3 | 🔴 URGENT | pmfby status; crop insurance last date 2026; pmfby last date extended 2026 |
| `/articles/bakri-palan-yojana-nlm-subsidy` | 8 | 493 | 1.6% | 7.2 | 🟡 Improve | nlm bakri palan yojana; nlm bakri palan; bakri palan yojana 2026 last date |
| `/articles/hi/karj-mafi-list` | 18 | 464 | 3.9% | 6.2 | 🟢 OK | — |
| `/articles/hi/mp-kisan-kalyan-yojana` | 6 | 402 | 1.5% | 8.5 | 🟡 Improve | pm kisan kalyan yojana mp; mp kisan kalyan yojana; mp kisan kalyan |
| `/articles/mushroom-kheti-nhb-subsidy` | 4 | 378 | 1.1% | 7.1 | 🟡 Improve | nhb mushroom subsidy; nhb subsidy for mushroom farming; national horticulture board mushroom subsidy |
| `/articles/nano-dap-500ml-price-in-india-2026` | 4 | 341 | 1.2% | 4.0 | 🟡 Improve | dap khad price; iffco nano dap 500ml price; dap price in bihar |
| `/articles/pm-kisan-land-seeding-status-check` | 3 | 331 | 0.9% | 8.3 | 🟡 Improve | land seeding status; land record seeding status; pm kisan land seeding status check |
| `/articles/PmKisanStateNodalOfficerList` | 9 | 329 | 2.7% | 9.0 | 🟢 OK | — |
| `/articles/custom-hiring-centre-chc-portal` | 13 | 312 | 4.2% | 7.7 | 🟢 OK | — |
| `/maandhan/auto-debit-fail-hone-par-regularization-kaise-karein` | 1 | 307 | 0.3% | 6.4 | 🟡 Improve | — |
| `/rajya-yojana/annadata-sukhibhava-status-check-2026` | 4 | 277 | 1.4% | 9.8 | 🟡 Improve | annadata sukhibhava beneficiary list 2026; rythu bharosa; annadata sukhibhava status |
| `/rajya-yojana/rajasthan-kisan-samman-nidhi-9000` | 3 | 274 | 1.1% | 7.9 | 🟡 Improve | jan soochna portal cm kisan samman nidhi; rythu bharosa; alwar district mein |
| `/articles/hi/kcc-limit-kaise-badhaye` | 4 | 256 | 1.6% | 4.8 | 🟡 Improve | — |
| `/articles/hi/helpline-shikayat` | 2 | 240 | 0.8% | 7.1 | 🟡 Improve | — |
| `/articles/mandi-bhav-app-comparison` | 5 | 238 | 2.1% | 6.5 | 🟡 Improve | — |
| `/articles/gehu-ka-bhav-msp-vs-mandi` | 0 | 234 | 0.0% | 7.7 | 🟡 Improve | gehu ka rate; gehu msp; ek bori gehu price |
| `/rajya-yojana/parihara-payment-status-check-2026` | 10 | 214 | 4.7% | 9.6 | 🟢 OK | parihara karnataka status check; parihara payment list; parihara payment status by aadhar card |
| `/articles/hi/status-check-mobile-se` | 3 | 206 | 1.5% | 6.8 | 🟡 Improve | — |
| `/rajya-yojana/rythu-bharosa-status-check-2026` | 8 | 196 | 4.1% | 8.9 | 🟢 OK | rythu bharosa status check; rythu bharosa; rythubharosa status |
| `/articles/pm-matsya-sampada-yojana-fish-farming` | 3 | 192 | 1.6% | 9.4 | 🟡 Improve | — |
| `/articles/murgi-palan-loan-nlm-subsidy` | 3 | 191 | 1.6% | 7.5 | 🟡 Improve | — |
| `/articles/AgriStackKyaHai2026` | 1 | 191 | 0.5% | 8.3 | 🟡 Improve | — |
| `/articles/mandi-bhav-today` | 0 | 176 | 0.0% | 9.4 | 🟡 Improve | — |
| `/maandhan/pmkmy-bank-account-change` | 2 | 168 | 1.2% | 9.4 | 🟡 Improve | — |
| `/rajya-yojana/krishak-bandhu-status-check-2026` | 1 | 168 | 0.6% | 9.2 | 🟡 Improve | krishak bandhu status check voter id; kisi bandhu status; kiska bandhu status check |
| `/articles/hi/nayi-registration` | 0 | 156 | 0.0% | 7.5 | 🟡 Improve | — |
| `/rajya-yojana/state-kisan-yojana-list-all-states-2026` | 5 | 155 | 3.2% | 13.3 | 🟢 OK | cm kisan samman nidhi rajasthan 7 kist kab aayegi 2026; rythu bharosa; saara portal mp gov in status check 2026 |
| `/articles/pmfby-crop-insurance-2026` | 3 | 155 | 1.9% | 10.7 | 🟡 Improve | — |
| `/articles/PmKisanPaymentFailedFix2026` | 2 | 155 | 1.3% | 5.6 | 🟡 Improve | — |
| `/articles/jansamarth-portal-loan-apply` | 0 | 152 | 0.0% | 18.8 | 🟡 Improve | — |
| `/articles/PmKisanBeneficiaryList2026` | 1 | 140 | 0.7% | 7.7 | 🟡 Improve | — |
| `/articles/hi/recovery-notice` | 4 | 137 | 2.9% | 5.5 | 🟢 OK | — |
| `/articles/PmKisanMasterGuide2026` | 0 | 120 | 0.0% | 21.0 | 🟡 Improve | — |
| `/articles/dairy-farm-loan-without-collateral` | 2 | 117 | 1.7% | 20.1 | 🟡 Improve | — |
| `/maandhan/pm-kisan-maandhan-withdrawal-refund-rules` | 2 | 113 | 1.8% | 7.9 | 🟡 Improve | — |
| `/articles/pm-kisan-rejected-list-2026` | 1 | 113 | 0.9% | 8.8 | 🟡 Improve | — |
| `/articles/pm-kisan-self-registered-status-check` | 1 | 107 | 0.9% | 11.8 | 🟡 Improve | — |
| `/articles/madhumakhi-palan-kvic-subsidy` | 2 | 103 | 1.9% | 5.6 | 🟡 Improve | — |
| `/rajya-yojana/bihar-kisan-registration-status-check-2026` | 0 | 101 | 0.0% | 10.8 | 🟡 Improve | — |

**Title/Meta fix karte waqt:** upar wale "Top Real Queries" column ke exact words title me use karo — yehi actual searches hain. Example: Nano DAP page pe log "nano dap price 500 ml" search karte hain (604 impressions!), to title me yehi phrase natural tarike se aana chahiye.

**Khaas notes GSC data se:**
- `/articles/pm-kisan-fto-generated-ka-matlab-kya-hai` — "fto ka full form", "fto will be generated", "fto generated" pe rank karta hai lekin CTR sirf 0.6%. Title me "FTO Ka Full Form" aage lao.
- `/articles/NanoDap500mlPriceInIndia2026` — "nano dap price 500 ml" pe 604 imp, pos 10.8. Content me current IFFCO rate table sabse upar chahiye.
- `/articles/hi/farmer-id-kaise-banaye` — Hindi queries ("किसान आईडी कैसे बनाएं") pe pos 3.5 tak hai lekin CTR 0.8%. Meta description Hindi me action-oriented banao.
- `/articles/bakri-palan-yojana-nlm-subsidy` — "nlm bakri palan yojana" (192 imp) pe title match weak hai; "NLM" title ke shuru me lao.
- `/rajya-yojana/mp-kisan-kalyan-yojana-kist-status` — "mp saara payment status" (127 imp) alag intent hai; SAARA portal ka section + title/H2 me "SAARA" mention karo.
- Raw data files: `gsc_top_pages.json`, `gsc_top_queries.json`, `gsc_page_query.json` (workspace me saved, 19 Jul – 19 Aug 2026).
