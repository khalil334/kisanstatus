// Categories Definition
export const CATEGORIES = {
  'status-check': { name: 'Status Check', description: 'PM Kisan kist status, beneficiary list, FTO, land seeding guides' },
  'ekyc': { name: 'eKYC', description: 'eKYC verification, Aadhaar OTP, and CSC biometric guides' },
  'payment': { name: 'Payment Issues', description: 'Payment failed, rejected list, RFT, PFMS problems and solutions' },
  'loan': { name: 'Loans & KCC', description: 'Kisan Credit Card, tractor loan, and bank loan guides' },
  'registration': { name: 'Registration', description: 'New PM Kisan registration and eligibility guides' },
  'farming': { name: 'Farming & Schemes', description: 'Soil health, PMFBY, AgriStack, Nano DAP and other schemes' },
  'correction': { name: 'Corrections', description: 'Name, mobile, Aadhaar, bank account correction guides' },
} as const;

export type CategorySlug = keyof typeof CATEGORIES;

export interface ArticleMeta {
  slug:          string;
  title:         string;
  desc:          string;
  ogTitle:       string;
  keywords:      string[];
  component:     string;
  category:      CategorySlug; // ✅ NEW FIELD ADDED
  publishedTime?: string;
  modifiedTime?:  string;
}

export const ARTICLES: ArticleMeta[] = [
  // 1
  {
    slug:      'kisan-rin-kaha-se-le-2026',
    title:     "Kisan Rin Kaha Se Le 2026 | Kisan Credit Card, Bank Loan, CSC Center Guide",
    desc:      "Kisan Rin Kaha Se Le 2026 – Jaaniye Kisan Credit Card, SBI Kisan Loan, Cooperative Society, CSC Center se loan kaise milta hai.",
    ogTitle:   "Kisan Rin Kaha Se Le 2026 – Puri Jankari Hindi Mein",
    keywords:  ['Kisan Rin Kaha Se Le 2026', 'Kisan Credit Card', 'Kisan Loan 2026', 'SBI Kisan Loan', 'CSC Center Loan', 'किसान ऋण कहाँ से लें', 'किसान लोन 2026', 'किसान क्रेडिट कार्ड', 'एसबीआई किसान लोन', 'सीएससी सेंटर लोन', 'kisan loan kaise le', 'kisan rin 2026', 'kisan credit card apply'],
    component: 'KisanRinKahaSeLe2026',
    category:  'loan', // ✅
    publishedTime: '2026-01-10T08:00:00+05:30',
    modifiedTime:  '2026-06-23T08:00:00+05:30',
  },
  // 2
  {
    slug:      'kisan-tractor-loan-2026',
    title:     "Kisan Tractor Loan Kaise Le Bina Down Payment 2026 | Complete Guide",
    desc:      "Kisan tractor loan kaise le bina down payment ke? Bank aur finance company se tractor loan lene ka pura process, eligibility, documents, interest rates — 2026 complete guide.",
    ogTitle:   "Kisan Tractor Loan Kaise Le Bina Down Payment 2026",
    keywords:  ['Kisan Tractor Loan Kaise Le Bina Down Payment', 'Tractor Loan 2026', 'Tractor Loan Eligibility', 'Tractor Loan Documents', 'किसान ट्रैक्टर लोन 2026', 'ट्रैक्टर लोन बिना डाउन पेमेंट', 'ट्रैक्टर फाइनेंस', 'किसान ट्रैक्टर सब्सिडी', 'tractor loan bank se kaise le', 'tractor loan without down payment', 'kisan tractor finance 2026'],
    component: 'KisanTractorLoan2026',
    category:  'loan', // ✅
    publishedTime: '2026-01-20T08:00:00+05:30',
    modifiedTime:  '2026-06-23T08:00:00+05:30',
  },
  // 3
  {
    slug:      'pm-kisan-21vi-installment-status-check',
    title:     "PM Kisan 21vi Installment Status Check 2026 | Aadhaar & Mobile Se Check Karo",
    desc:      "PM Kisan 21vi Installment Status Check 2026 — Aadhaar number se, Mobile number se, step-by-step guide. eKYC status, payment fail reason, aur beneficiary list.",
    ogTitle:   "PM Kisan 21vi Installment Status Check 2026 — Step by Step Guide",
    keywords:  ['PM Kisan 21vi installment status check', 'PM Kisan 21vi kist 2026', 'PM Kisan payment status check online', 'पीएम किसान 21वीं किस्त स्टेटस', 'पीएम किसान 21वीं किस्त 2026', 'पीएम किसान पेमेंट स्टेटस', 'pm kisan 21 kist status', 'pm kisan installment check aadhaar', 'pm kisan 21vi kist kab aayi'],
    component: 'PmKisan21viInstallmentStatusCheck',
    category:  'status-check', // ✅
    publishedTime: '2026-02-01T08:00:00+05:30',
    modifiedTime:  '2026-06-23T08:00:00+05:30',
  },
  // 4
  {
    slug:      'pm-kisan-beneficiary-list-2026',
    title:     "PM Kisan Beneficiary List 2026 | Village Wise Naam Check Karo",
    desc:      "PM Kisan beneficiary list 2026 check karo — naam online search karo, village wise list dekho, PDF download karo aur missing naam fix karo.",
    ogTitle:   "PM Kisan Beneficiary List 2026 — Village Wise Check",
    keywords:  ['PM Kisan beneficiary list 2026', 'PM Kisan village wise list', 'PM Kisan list mein naam check', 'PM Kisan PDF download', 'पीएम किसान लाभार्थी सूची 2026', 'पीएम किसान गांव वार सूची', 'पीएम किसान लिस्ट में नाम', 'पीएम किसान पीडीएफ डाउनलोड', 'pm kisan beneficiary list village wise', 'pm kisan list check online 2026', 'pm kisan naam list dekho'],
    component: 'PmKisanBeneficiaryList2026',
    category:  'status-check', // ✅
    publishedTime: '2026-02-10T08:00:00+05:30',
    modifiedTime:  '2026-06-23T08:00:00+05:30',
  },
  // 5
  {
    slug:      'pm-kisan-beneficiary-list-village-wise-2026',
    title:     "PM Kisan Beneficiary List Village Wise 2026 | Apne Gaon Ki List Dekhen",
    desc:      "PM Kisan Beneficiary List Village Wise 2026 kaise dekhen? State, District, Block aur Village select karke apna naam check karein.",
    ogTitle:   "PM Kisan Beneficiary List Village Wise 2026 — Gaon Ki List Kaise Dekhen",
    keywords:  ['PM Kisan Beneficiary List Village Wise 2026', 'PM Kisan Village Wise List', 'PM Kisan list me naam kaise dekhen', 'पीएम किसान ग्राम वार लाभार्थी सूची', 'पीएम किसान गांव की सूची 2026', 'पीएम किसान अपने गांव की लिस्ट', 'pm kisan gaon ki list 2026', 'pm kisan village beneficiary list check', 'pm kisan gram panchayat list'],
    component: 'PmKisanBeneficiaryListVillageWise2026',
    category:  'status-check', // ✅
    publishedTime: '2026-02-15T08:00:00+05:30',
    modifiedTime:  '2026-06-23T08:00:00+05:30',
  },
  // 6
  {
    slug:      'pm-kisan-correction-deactivate-block-guide-2026',
    title:     "PM Kisan Correction, Deactivate Aur Block Guide 2026 | Naam, Aadhaar, Bank Fix Karo",
    desc:      "PM Kisan naam correction, Aadhaar correction, bank account update, deactivate account reactivation, aur block fix karne ka poora guide 2026.",
    ogTitle:   "PM Kisan Correction, Deactivate & Block Guide 2026",
    keywords:  ['PM Kisan correction 2026', 'PM Kisan naam correction kaise kare', 'PM Kisan account deactivate', 'PM Kisan block account fix', 'पीएम किसान नाम करेक्शन 2026', 'पीएम किसान आधार करेक्शन', 'पीएम किसान बैंक अपडेट', 'पीएम किसान डीएक्टिवेट खाता', 'pm kisan naam theek karo', 'pm kisan bank account update 2026', 'pm kisan correction online kaise kare'],
    component: 'PmKisanCorrectionDeactivateBlockGuide2026',
    category:  'correction', // ✅
    publishedTime: '2026-02-20T08:00:00+05:30',
    modifiedTime:  '2026-06-23T08:00:00+05:30',
  },
  // 7
  {
    slug:      'pm-kisan-ekyc-online-2026',
    title:     "PM Kisan eKYC Online 2026 | Aadhaar OTP & CSC Verification Complete Guide",
    desc:      "PM Kisan eKYC online 2026 complete guide. Aadhaar OTP se ghar baithe ya CSC biometric se eKYC karo. Status check, common errors fix.",
    ogTitle:   "PM Kisan eKYC Online 2026 — Complete Guide",
    keywords:  ['PM Kisan eKYC online 2026', 'PM Kisan eKYC kaise kare', 'PM Kisan Aadhaar OTP eKYC', 'PM Kisan CSC eKYC', 'पीएम किसान ईकेवाईसी 2026', 'पीएम किसान आधार ओटीपी ईकेवाईसी', 'पीएम किसान सीएससी बायोमेट्रिक', 'pm kisan ekyc ghar baithe', 'pm kisan ekyc status check 2026', 'pm kisan ekyc free kaise kare'],
    component: 'PmKisanEkycOnline2026',
    category:  'ekyc', // ✅
    publishedTime: '2026-03-01T08:00:00+05:30',
    modifiedTime:  '2026-06-23T08:00:00+05:30',
  },
  // 8
  {
    slug:      'pm-kisan-installment-history-check-online',
    title:     "PM Kisan Installment History Check Online 2026 | Purani Installments Kaise Dekhen",
    desc:      "PM Kisan Installment History Check Online kaise karein? Registration number, mobile number ya Aadhaar se pichli sari installments ki details dekhen.",
    ogTitle:   "PM Kisan Installment History Check Online 2026 — Pichli Sari Payments Ek Jagah",
    keywords:  ['PM Kisan Installment History Check Online', 'PM Kisan Payment History Check', 'PM Kisan purani installment kaise dekhen', 'पीएम किसान किस्त इतिहास ऑनलाइन', 'पीएम किसान पुरानी किस्त कैसे देखें', 'पीएम किसान पेमेंट हिस्ट्री', 'pm kisan sari kist history', 'pm kisan previous payment check', 'pm kisan installment list online 2026'],
    component: 'PmKisanInstallmentHistoryCheckOnline',
    category:  'status-check', // ✅
    publishedTime: '2026-03-05T08:00:00+05:30',
    modifiedTime:  '2026-06-23T08:00:00+05:30',
  },
  // 9
  {
    slug:      'pm-kisan-land-seeding-status-check',
    title:     "PM Kisan Land Seeding Status Check 2026 | Pending, Rejected, Approved Guide",
    desc:      "PM Kisan Land Seeding Status Check kaise kare 2026 mein – Pending, Rejected, Approved ka matlab, common errors, documents, aur step-by-step solution guide.",
    ogTitle:   "PM Kisan Land Seeding Status Check 2026 – Puri Jankari Hinglish Mein",
    keywords:  ['PM Kisan Land Seeding Status Check', 'Land Seeding Pending Fix', 'PM Kisan Installment Not Coming', 'पीएम किसान लैंड सीडिंग स्टेटस', 'पीएम किसान जमीन लिंक नहीं', 'लैंड सीडिंग पेंडिंग कैसे ठीक करें', 'pm kisan land seeding kya hota hai', 'pm kisan zameen link nahi 2026', 'land seeding no fix kaise kare'],
    component: 'PmKisanLandSeedingStatusCheck',
    category:  'status-check', // ✅
    publishedTime: '2026-03-10T08:00:00+05:30',
    modifiedTime:  '2026-06-23T08:00:00+05:30',
  },
  // 10
  {
    slug:      'pm-kisan-name-correction-online-2026',
    title:     "PM Kisan Name Correction Online 2026 | Aadhaar Naam Mismatch Fix Guide",
    desc:      "PM Kisan name correction online 2026 — Aadhaar naam mismatch, bank account naam galat, spelling error sab fix karo. Step-by-step guide.",
    ogTitle:   "PM Kisan Name Correction Online 2026",
    keywords:  ['PM Kisan name correction online 2026', 'PM Kisan naam correction kaise kare', 'PM Kisan Aadhaar name mismatch', 'पीएम किसान नाम सुधार 2026', 'पीएम किसान आधार नाम मिसमैच', 'पीएम किसान स्पेलिंग गलत कैसे ठीक करें', 'pm kisan naam galat fix', 'pm kisan naam update online 2026', 'pm kisan aadhaar naam theek karo'],
    component: 'PmKisanNameCorrectionOnline2026',
    category:  'correction', // ✅
    publishedTime: '2026-03-15T08:00:00+05:30',
    modifiedTime:  '2026-06-23T08:00:00+05:30',
  },
  // 11
  {
    slug:      'pm-kisan-payment-failed-status-2026',
    title:     "PM Kisan Payment Failed Status 2026 — Reasons & Solutions",
    desc:      "PM Kisan payment failed status 2026 — error codes, Aadhaar mismatch, bank verification problems aur step-by-step solutions.",
    ogTitle:   "PM Kisan Payment Failed Status 2026 — Reasons & Solutions",
    keywords:  ['PM Kisan payment failed 2026', 'PM Kisan payment fail reason', 'PM Kisan NPCI error', 'PM Kisan payment nahi aayi solution', 'पीएम किसान पेमेंट फेल 2026', 'पीएम किसान पैसा नहीं आया', 'पीएम किसान एनपीसीआई एरर', 'पीएम किसान पेमेंट रुकी', 'pm kisan paisa kyon nahi aaya', 'pm kisan payment fail fix kaise kare', 'pm kisan bank verification problem'],
    component: 'PmKisanPaymentFailedStatus2026',
    category:  'payment', // ✅
    publishedTime: '2026-03-20T08:00:00+05:30',
    modifiedTime:  '2026-06-23T08:00:00+05:30',
  },
  // 12
  {
    slug:      'pm-kisan-problems-solution-guide-2026',
    title:     "PM Kisan Problems Solution Guide 2026 | RFT, PFMS, Payment Fail — Sab Fix Karo",
    desc:      "PM Kisan ki 10 sabse badi problems aur unka seedha hal — RFT Signed, PFMS Pending, Payment Fail, naam galat, eKYC pending.",
    ogTitle:   "PM Kisan Problems Solution Guide 2026 — 10 Problems, 10 Solutions",
    keywords:  ['PM Kisan problems solution 2026', 'PM Kisan RFT signed matlab', 'PM Kisan PFMS pending', 'PM Kisan payment fail solution', 'पीएम किसान समस्या समाधान 2026', 'पीएम किसान आरएफटी साइन्ड मतलब', 'पीएम किसान पीएफएमएस पेंडिंग', 'pm kisan RFT signed kya hai', 'pm kisan PFMS error fix', 'pm kisan samasya ka hal 2026'],
    component: 'PmKisanProblemsSolutionGuide2026',
    category:  'payment', // ✅
    publishedTime: '2026-03-25T08:00:00+05:30',
    modifiedTime:  '2026-06-23T08:00:00+05:30',
  },
  // 13
  {
    slug:      'pm-kisan-registration-online-2026',
    title:     "PM Kisan Registration Online 2026 | Complete Guide",
    desc:      "PM Kisan registration online 2026 — naye farmers ke liye complete guide. Eligibility, required documents, step-by-step process, status check aur common errors fix.",
    ogTitle:   "PM Kisan Registration Online 2026 — Complete Guide",
    keywords:  ['PM Kisan registration online 2026', 'PM Kisan new farmer registration', 'PM Kisan registration kaise kare', 'पीएम किसान रजिस्ट्रेशन ऑनलाइन 2026', 'पीएम किसान नया किसान पंजीकरण', 'पीएम किसान रजिस्ट्रेशन कैसे करें', 'pm kisan naya registration kaise kare', 'pm kisan registration status check 2026', 'pm kisan eligibility 2026'],
    component: 'PmKisanRegistrationOnline2026',
    category:  'registration', // ✅
    publishedTime: '2026-04-01T08:00:00+05:30',
    modifiedTime:  '2026-06-23T08:00:00+05:30',
  },
  // 14
  {
    slug:      'pm-kisan-rejected-list-2026',
    title:     "PM Kisan Rejected List 2026 — Reasons & Fix",
    desc:      "PM Kisan rejected list 2026 check karo — naam rejection reasons, Aadhaar mismatch, eKYC problems aur step-by-step solutions.",
    ogTitle:   "PM Kisan Rejected List 2026 — Reasons & Fix",
    keywords:  ['PM Kisan rejected list 2026', 'PM Kisan rejection reason', 'PM Kisan naam rejected', 'PM Kisan application rejected fix', 'पीएम किसान रिजेक्टेड लिस्ट 2026', 'पीएम किसान नाम रिजेक्ट क्यों हुआ', 'पीएम किसान आवेदन अस्वीकार', 'pm kisan naam reject kyon hua', 'pm kisan rejected list se naam hataye', 'pm kisan rejection fix 2026'],
    component: 'PmKisanRejectedList2026',
    category:  'payment', // ✅
    publishedTime: '2026-04-10T08:00:00+05:30',
    modifiedTime:  '2026-06-23T08:00:00+05:30',
  },
  // 15
  {
    slug:      'pmfby-crop-insurance-2026',
    title:     "PMFBY Crop Insurance Claim Status Check 2026 | Pradhan Mantri Fasal Bima Yojana Guide",
    desc:      "PMFBY crop insurance claim status check kaise karein? Registration, claim file karna, online status track karna aur insurance payment receive karna.",
    ogTitle:   "PMFBY Crop Insurance Claim Status Check 2026 – Complete Guide",
    keywords:  ['PMFBY Crop Insurance', 'PMFBY Claim Status Check', 'Pradhan Mantri Fasal Bima Yojana 2026', 'fasal bima yojana claim kaise kare', 'पीएमएफबीवाई फसल बीमा 2026', 'प्रधानमंत्री फसल बीमा योजना क्लेम', 'फसल बीमा दावा कैसे करें', 'पीएमएफबीवाई स्टेटस', 'PMFBY claim online kaise kare', 'fasal bima paisa kab aayega', 'crop insurance 2026 india'],
    component: 'PmfbyCropInsurance2026',
    category:  'farming', // ✅
    publishedTime: '2026-04-20T08:00:00+05:30',
    modifiedTime:  '2026-06-23T08:00:00+05:30',
  },
  // 16
  {
    slug:      'pm-kisan-23vi-kist-2026-status-check',
    title:     "PM Kisan 23vi Kist Status Check 2026",
    desc:      "PM Kisan Yojana ki 23vi kist ka status online kaise check karein. Mobile number, Aadhaar, Registration number se payment status check karein.",
    ogTitle:   "PM Kisan 23vi Kist Status Check 2026 - Complete Guide",
    keywords:  ['PM Kisan 23vi Kist', 'PM Kisan Status Check', '23vi Kist Payment Status', 'PM Kisan Next Installment', 'पीएम किसान 23वीं किस्त', 'पीएम किसान 23वीं किस्त स्टेटस 2026', 'पीएम किसान तेईसवीं किस्त कब आई', 'pm kisan 23vi kist status check', 'pm kisan 23vi kist payment date', 'pm kisan 23 installment aai ya nahi'],
    component: 'PmKisan23viKistStatusCheck2026',
    category:  'status-check', // ✅
    publishedTime: '2026-04-01T00:00:00+05:30',
    modifiedTime:  '2026-06-23T08:00:00+05:30',
  },
  // 17
  {
    slug:      'kisan-credit-card-online-apply-2026',
    title:     "Kisan Credit Card (KCC) Online Apply 2026 | Eligibility, Documents Aur Loan Limit Guide",
    desc:      "Kisan Credit Card online apply 2026 — eligibility, documents, loan limit ₹5 lakh tak, interest rate 4% se shuru. Step-by-step Hinglish guide — Sidhu Singh.",
    ogTitle:   "Kisan Credit Card (KCC) Online Apply 2026 — Complete Guide",
    keywords:  ['Kisan Credit Card Online Apply 2026', 'KCC Apply Online', 'KCC Eligibility 2026', 'KCC Loan Limit', 'KCC Interest Rate 2026', 'किसान क्रेडिट कार्ड ऑनलाइन अप्लाई 2026', 'केसीसी लोन कैसे लें', 'किसान क्रेडिट कार्ड पात्रता', 'किसान क्रेडिट कार्ड ब्याज दर', 'kcc loan apply kaise kare', 'kisan credit card documents required', 'kcc loan limit 2026'],
    component: 'KisanCreditCardOnlineApply2026',
    category:  'loan', // ✅
    publishedTime: '2026-06-01T08:00:00+05:30',
    modifiedTime:  '2026-06-23T08:00:00+05:30',
  },
  // 18
  {
    slug:      'pm-kisan-fto-generated-ka-matlab-kya-hai',
    title:     "PM Kisan FTO Generated Ka Matlab Kya Hai 2026 | FTO Status Complete Guide",
    desc:      "PM Kisan FTO Generated ka matlab kya hai? FTO Pending, FTO Processed aur Payment Order ka poora explanation — step-by-step Hinglish guide.",
    ogTitle:   "PM Kisan FTO Generated Ka Matlab Kya Hai 2026 — Complete Guide",
    keywords:  ['PM Kisan FTO Generated', 'FTO Generated matlab', 'PM Kisan FTO status', 'FTO processed meaning', 'पीएम किसान एफटीओ जेनरेटेड मतलब', 'एफटीओ जेनरेटेड क्या होता है', 'पीएम किसान एफटीओ पेंडिंग', 'pm kisan FTO kya hota hai', 'FTO generated ke baad paisa kab aayega', 'pm kisan payment FTO status 2026'],
    component: 'PmKisanFtoGeneratedKaMatlabKyaHai',
    category:  'status-check', // ✅
    publishedTime: '2026-06-23T08:00:00+05:30',
    modifiedTime:  '2026-06-23T08:00:00+05:30',
  },
  // 19
  {
    slug:      'nano-dap-500ml-price-in-india-2026',
    title:     "Nano DAP 500ml Price In India 2026 | IFFCO Nano DAP Kahan Se Khariden & Kaise Use Karein",
    desc:      "Nano DAP 500ml price in India 2026 — IFFCO Nano DAP ki kimat, kahan milega, kaise use karein, traditional DAP se kya farak hai.",
    ogTitle:   "Nano DAP 500ml Price In India 2026 — IFFCO Nano DAP Complete Guide",
    keywords:  ['Nano DAP 500ml price India 2026', 'IFFCO Nano DAP price', 'Nano DAP kaise use kare', 'Nano DAP kahan milega', 'नैनो डीएपी 500ml कीमत 2026', 'आईएफएफसीओ नैनो डीएपी', 'नैनो डीएपी कैसे उपयोग करें', 'नैनो डीएपी कहाँ मिलेगा', 'nano dap vs dap kya fark hai', 'nano dap farmer guide 2026', 'IFFCO nano dap price per bottle'],
    component: 'NanoDap500mlPriceInIndia2026',
    category:  'farming', // ✅
    publishedTime: '2026-06-24T08:00:00+05:30',
    modifiedTime:  '2026-06-24T08:00:00+05:30',
  },
  // 20
  {
    slug:      'pm-kisan-24vi-kist',
    title:     "PM Kisan 24vi Kist 2026 | Status Check, Date Aur Payment Guide",
    desc:      "PM Kisan 24vi Kist 2026 kab aayegi? Status check kaise karein Aadhaar, Mobile aur Registration number se. Payment date, eKYC status aur solutions.",
    ogTitle:   "PM Kisan 24vi Kist 2026 — Status Check & Payment Date Guide",
    keywords:  ['PM Kisan 24vi Kist 2026', 'PM Kisan 24vi installment', 'PM Kisan 24vi kist kab aayegi', 'PM Kisan next installment 2026', 'पीएम किसान 24वीं किस्त 2026', 'पीएम किसान चौबीसवीं किस्त कब आएगी', 'पीएम किसान अगली किस्त कब आएगी', 'pm kisan 24vi kist status check', 'pm kisan 24 kist payment date', 'pm kisan next kist 2026 date'],
    component: 'PmKisan24viKist2026',
    category:  'status-check', // ✅
    publishedTime: '2026-06-24T08:00:00+05:30',
    modifiedTime:  '2026-06-24T08:00:00+05:30',
  },
  // 21
  {
    slug:      'agristack-kya-hai',
    title:     "AgriStack Kya Hai 2026 | Farmers Digital Identity & PM Kisan Connection Guide",
    desc:      "AgriStack kya hai? Farmer ID kaise banegi, PM Kisan se kya connection hai, data privacy, benefits aur registration process — complete Hinglish guide.",
    ogTitle:   "AgriStack Kya Hai 2026 — Farmer Digital ID Complete Guide",
    keywords:  ['AgriStack kya hai', 'AgriStack 2026', 'Farmer ID AgriStack', 'PM Kisan AgriStack connection', 'एग्रीस्टैक क्या है', 'किसान आईडी एग्रीस्टैक', 'एग्रीस्टैक रजिस्ट्रेशन 2026', 'फार्मर डिजिटल पहचान', 'agristack farmer id kaise banaye', 'agristack registration kaise kare', 'agristack benefits for farmers 2026'],
    component: 'AgriStackKyaHai2026',
    category:  'farming', // ✅
    publishedTime: '2026-06-24T08:00:00+05:30',
    modifiedTime:  '2026-06-24T08:00:00+05:30',
  },
  // 22
  {
    slug:      'pm-kisan-mobile-number-change',
    title:     "PM Kisan Mobile Number Change 2026 | Online & CSC Se Number Update Guide",
    desc:      "PM Kisan mobile number change kaise karein 2026 mein? Online portal se ya CSC center se number update karne ka step-by-step guide.",
    ogTitle:   "PM Kisan Mobile Number Change 2026 — Complete Update Guide",
    keywords:  ['PM Kisan mobile number change 2026', 'PM Kisan number update kaise kare', 'PM Kisan CSC mobile update', 'पीएम किसान मोबाइल नंबर बदलें 2026', 'पीएम किसान फोन नंबर अपडेट', 'पीएम किसान मोबाइल नंबर कैसे बदलें', 'pm kisan mobile number badlna', 'pm kisan registered mobile change kaise kare', 'pm kisan phone number update 2026'],
    component: 'PmKisanMobileNumberChange2026',
    category:  'correction', // ✅
    publishedTime: '2026-06-24T08:00:00+05:30',
    modifiedTime:  '2026-06-24T08:00:00+05:30',
  },
  // 23
  {
    slug:      'pm-kisan-complete-guide',
    title:     "PM Kisan Complete Guide 2026: Solve All Problems & Check Status",
    desc:      "Comprehensive 3000-word guide to solve PM Kisan issues - status check, e-KYC, payment problems, rejection solutions with step-by-step help.",
    ogTitle:   "PM Kisan Complete Guide 2026 — Solve All Problems & Check Status",
    keywords:  ['PM Kisan complete guide 2026', 'PM Kisan status check', 'PM Kisan eKYC', 'PM Kisan payment problem', 'PM Kisan rejected list fix', 'PM Kisan beneficiary list', 'PM Kisan all problems solution', 'पीएम किसान पूर्ण गाइड', 'पीएम किसान समस्या समाधान', 'पीएम किसान स्टेटस चेक', 'पीएम किसान ईकेवाईसी', 'pm kisan complete guide in hindi', 'pm kisan all issues fix 2026'],
    component: 'PmKisanCompleteGuide',
    category:  'status-check', // ✅
    publishedTime: '2026-06-27T08:00:00+05:30',
    modifiedTime:  '2026-06-27T08:00:00+05:30',
  },
  // 24
  {
    slug:      'soil-health-card-complete-guide-2026',
    title:     "Soil Health Card Complete Guide 2026 | Download, Status Check, PDF & Registration",
    desc:      "Soil Health Card complete guide 2026 — download kaise kare, status check online, PDF download, registration process, card number kaise nikale, mobile se check kare.",
    ogTitle:   "Soil Health Card Complete Guide 2026 — Download, Status & Registration",
    keywords:  ['Soil Health Card Complete Guide 2026', 'Soil Health Card Download', 'Soil Health Card Status Check', 'Soil Health Card PDF Download', 'Soil Health Card Registration', 'Soil Health Card Number', 'मिट्टी स्वास्थ्य कार्ड 2026', 'सॉइल हेल्थ कार्ड डाउनलोड', 'मिट्टी स्वास्थ्य कार्ड स्टेटस', 'soil health card kaise banwaye', 'soil health card download kaise kare', 'mitti swasthya card 2026'],
    component: 'SoilHealthCardCompleteGuide2026',
    category:  'farming', // ✅
    publishedTime: '2026-06-27T08:00:00+05:30',
    modifiedTime:  '2026-06-27T08:00:00+05:30',
  },
];

export const ARTICLES_MAP = Object.fromEntries(
  ARTICLES.map(a => [a.slug, a])
);

export function getArticleBySlug(slug: string): ArticleMeta {
  return ARTICLES_MAP[slug];
}