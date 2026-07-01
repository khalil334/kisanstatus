// ─ lib/articles-data.ts ────────────────────────────────────────────────────
// Centralized article metadata for all pages
// Auto-updates dates via: npm run update-dates (uses git history)

export const CATEGORIES = {
  'status-check': {
    name: 'Status Check',
    description: 'PM Kisan kist status, beneficiary list, FTO, land seeding guides',
    icon: '📊',
    color: 'blue',
  },
  'ekyc': {
    name: 'eKYC',
    description: 'eKYC verification, Aadhaar OTP, and CSC biometric guides',
    icon: '',
    color: 'green',
  },
  'payment': {
    name: 'Payment Issues',
    description: 'Payment failed, rejected list, RFT, PFMS problems and solutions',
    icon: '💸',
    color: 'red',
  },
  'loan': {
    name: 'Loans & KCC',
    description: 'Kisan Credit Card, tractor loan, and bank loan guides',
    icon: '🏦',
    color: 'amber',
  },
  'registration': {
    name: 'Registration',
    description: 'New PM Kisan registration and eligibility guides',
    icon: '📝',
    color: 'purple',
  },
  'farming': {
    name: 'Farming & Schemes',
    description: 'Soil health, PMFBY, AgriStack, Nano DAP and other schemes',
    icon: '🌾',
    color: 'emerald',
  },
  'correction': {
    name: 'Corrections',
    description: 'Name, mobile, Aadhaar, bank account correction guides',
    icon: '️',
    color: 'orange',
  },
  'mandi': {
    name: 'Mandi Bhav',
    description: 'Daily vegetable and fruit market rates, wholesale prices',
    icon: '📈',
    color: 'yellow',
  },
} as const;

export type CategorySlug = keyof typeof CATEGORIES;

export interface ArticleMeta {
  slug: string;
  title: string;
  desc: string;
  ogTitle: string;
  readonly keywords: readonly string[];
  component: string;
  category: CategorySlug;
  publishedTime: string;
  modifiedTime: string;
  readingTime?: number; // Estimated reading time in minutes
}

export const ARTICLES: readonly ArticleMeta[] = [
  {
    slug: 'kisan-rin-kaha-se-le-2026',
    title: 'Kisan Rin Kaha Se Le 2026 | Kisan Credit Card, Bank Loan, CSC Center Guide',
    desc: 'Kisan Rin Kaha Se Le 2026 – Jaaniye Kisan Credit Card, SBI Kisan Loan, Cooperative Society, CSC Center se loan kaise milta hai.',
    ogTitle: 'Kisan Rin Kaha Se Le 2026 – Puri Jankari Hindi Mein',
    keywords: [
      'Kisan Rin Kaha Se Le 2026',
      'Kisan Credit Card',
      'Kisan Loan 2026',
      'SBI Kisan Loan',
      'CSC Center Loan',
      'किसान ऋण कहाँ से लें',
      'किसान लोन 2026',
      'kisan loan apply online',
      'agricultural loan India',
    ],
    component: 'KisanRinKahaSeLe2026',
    category: 'loan',
    publishedTime: '2026-01-10T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 8,
  },
  {
    slug: 'kisan-tractor-loan-2026',
    title: 'Kisan Tractor Loan Kaise Le Bina Down Payment 2026 | Complete Guide',
    desc: 'Kisan tractor loan kaise le bina down payment ke? Bank aur finance company se tractor loan lene ka pura process, eligibility, documents, interest rates.',
    ogTitle: 'Kisan Tractor Loan Kaise Le Bina Down Payment 2026',
    keywords: [
      'Kisan Tractor Loan',
      'Tractor Loan 2026',
      'Tractor Loan Eligibility',
      'ट्रैक्टर लोन बिना डाउन पेमेंट',
      'किसान ट्रैक्टर लोन 2026',
      'tractor finance India',
      'tractor loan interest rate',
    ],
    component: 'KisanTractorLoan2026',
    category: 'loan',
    publishedTime: '2026-01-20T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 10,
  },
  {
    slug: 'pm-kisan-21vi-installment-status-check',
    title: 'PM Kisan 21vi Installment Status Check 2026 | Aadhaar & Mobile Se Check Karo',
    desc: 'PM Kisan 21vi Installment Status Check 2026 — Aadhaar number se, Mobile number se, step-by-step guide.',
    ogTitle: 'PM Kisan 21vi Installment Status Check 2026 — Step by Step Guide',
    keywords: [
      'PM Kisan 21vi installment',
      'PM Kisan 21vi kist 2026',
      'पीएम किसान 21वीं किस्त स्टेटस',
      'PM Kisan 21st installment status',
      'PM Kisan payment check',
    ],
    component: 'PmKisan21viInstallmentStatusCheck',
    category: 'status-check',
    publishedTime: '2026-02-01T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 6,
  },
  {
    slug: 'pm-kisan-beneficiary-list-2026',
    title: 'PM Kisan Beneficiary List 2026 | Village Wise Naam Check Karo',
    desc: 'PM Kisan beneficiary list 2026 check karo — naam online search karo, village wise list dekho, PDF download karo.',
    ogTitle: 'PM Kisan Beneficiary List 2026 — Village Wise Check',
    keywords: [
      'PM Kisan beneficiary list 2026',
      'PM Kisan village wise list',
      'पीएम किसान लाभार्थी सूची 2026',
      'PM Kisan list download',
      'PM Kisan naam check',
    ],
    component: 'PmKisanBeneficiaryList2026',
    category: 'status-check',
    publishedTime: '2026-02-10T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 7,
  },
  {
    slug: 'pm-kisan-beneficiary-list-village-wise-2026',
    title: 'PM Kisan Beneficiary List Village Wise 2026 | Apne Gaon Ki List Dekhen',
    desc: 'PM Kisan Beneficiary List Village Wise 2026 kaise dekhen? State, District, Block aur Village select karke apna naam check karein.',
    ogTitle: 'PM Kisan Beneficiary List Village Wise 2026 — Gaon Ki List Kaise Dekhen',
    keywords: [
      'PM Kisan Beneficiary List Village Wise',
      'PM Kisan Village Wise List',
      'पीएम किसान ग्राम वार लाभार्थी सूची',
      'PM Kisan gaon wise list',
      'PM Kisan district list',
    ],
    component: 'PmKisanBeneficiaryListVillageWise2026',
    category: 'status-check',
    publishedTime: '2026-02-15T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 6,
  },
  {
    slug: 'pm-kisan-correction-deactivate-block-guide-2026',
    title: 'PM Kisan Correction, Deactivate Aur Block Guide 2026 | Naam, Aadhaar, Bank Fix Karo',
    desc: 'PM Kisan naam correction, Aadhaar correction, bank account update, deactivate account reactivation guide 2026.',
    ogTitle: 'PM Kisan Correction, Deactivate & Block Guide 2026',
    keywords: [
      'PM Kisan correction 2026',
      'PM Kisan naam correction',
      'PM Kisan account deactivate',
      'पीएम किसान नाम करेक्शन 2026',
      'PM Kisan block fix',
      'PM Kisan reactivate',
    ],
    component: 'PmKisanCorrectionDeactivateBlockGuide2026',
    category: 'correction',
    publishedTime: '2026-02-20T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 9,
  },
  {
    slug: 'pm-kisan-ekyc-online-2026',
    title: 'PM Kisan eKYC Online 2026 | Aadhaar OTP & CSC Verification Complete Guide',
    desc: 'PM Kisan eKYC online 2026 complete guide. Aadhaar OTP se ghar baithe ya CSC biometric se eKYC karo.',
    ogTitle: 'PM Kisan eKYC Online 2026 — Complete Guide',
    keywords: [
      'PM Kisan eKYC online 2026',
      'PM Kisan eKYC kaise kare',
      'पीएम किसान ईकेवाईसी 2026',
      'PM Kisan Aadhaar verification',
      'PM Kisan biometric eKYC',
    ],
    component: 'PmKisanEkycOnline2026',
    category: 'ekyc',
    publishedTime: '2026-03-01T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 7,
  },
  {
    slug: 'pm-kisan-installment-history-check-online',
    title: 'PM Kisan Installment History Check Online 2026 | Purani Installments Kaise Dekhen',
    desc: 'PM Kisan Installment History Check Online kaise karein? Registration number, mobile number ya Aadhaar se pichli sari installments ki details dekhen.',
    ogTitle: 'PM Kisan Installment History Check Online 2026',
    keywords: [
      'PM Kisan Installment History',
      'PM Kisan Payment History',
      'पीएम किसान किस्त इतिहास ऑनलाइन',
      'PM Kisan past payments',
      'PM Kisan transaction history',
    ],
    component: 'PmKisanInstallmentHistoryCheckOnline',
    category: 'status-check',
    publishedTime: '2026-03-05T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 6,
  },
  {
    slug: 'pm-kisan-land-seeding-status-check',
    title: 'PM Kisan Land Seeding Status Check 2026 | Pending, Rejected, Approved Guide',
    desc: 'PM Kisan Land Seeding Status Check kaise kare 2026 mein – Pending, Rejected, Approved ka matlab aur solution guide.',
    ogTitle: 'PM Kisan Land Seeding Status Check 2026',
    keywords: [
      'PM Kisan Land Seeding',
      'Land Seeding Pending Fix',
      'पीएम किसान लैंड सीडिंग स्टेटस',
      'PM Kisan land verification',
      'PM Kisan land linking',
    ],
    component: 'PmKisanLandSeedingStatusCheck',
    category: 'status-check',
    publishedTime: '2026-03-10T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 8,
  },
  {
    slug: 'pm-kisan-name-correction-online-2026',
    title: 'PM Kisan Name Correction Online 2026 | Aadhaar Naam Mismatch Fix Guide',
    desc: 'PM Kisan name correction online 2026 — Aadhaar naam mismatch, bank account naam galat sab fix karo.',
    ogTitle: 'PM Kisan Name Correction Online 2026',
    keywords: [
      'PM Kisan name correction',
      'PM Kisan Aadhaar name mismatch',
      'पीएम किसान नाम सुधार 2026',
      'PM Kisan naam theek karo',
      'PM Kisan name update',
    ],
    component: 'PmKisanNameCorrectionOnline2026',
    category: 'correction',
    publishedTime: '2026-03-15T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 7,
  },
  {
    slug: 'pm-kisan-payment-failed-status-2026',
    title: 'PM Kisan Payment Failed Status 2026 — Reasons & Solutions',
    desc: 'PM Kisan payment failed status 2026 — error codes, Aadhaar mismatch, bank verification problems aur solutions.',
    ogTitle: 'PM Kisan Payment Failed Status 2026 — Reasons & Solutions',
    keywords: [
      'PM Kisan payment failed 2026',
      'PM Kisan NPCI error',
      'पीएम किसान पेमेंट फेल 2026',
      'PM Kisan payment error',
      'PM Kisan bank issue',
    ],
    component: 'PmKisanPaymentFailedStatus2026',
    category: 'payment',
    publishedTime: '2026-03-20T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 8,
  },
  {
    slug: 'pm-kisan-problems-solution-guide-2026',
    title: 'PM Kisan Problems Solution Guide 2026 | RFT, PFMS, Payment Fail — Sab Fix Karo',
    desc: 'PM Kisan ki 10 sabse badi problems aur unka seedha hal — RFT Signed, PFMS Pending, Payment Fail.',
    ogTitle: 'PM Kisan Problems Solution Guide 2026',
    keywords: [
      'PM Kisan problems solution',
      'PM Kisan RFT signed',
      'PM Kisan PFMS pending',
      'पीएम किसान समस्या समाधान 2026',
      'PM Kisan issues fix',
    ],
    component: 'PmKisanProblemsSolutionGuide2026',
    category: 'payment',
    publishedTime: '2026-03-25T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 10,
  },
  {
    slug: 'pm-kisan-registration-online-2026',
    title: 'PM Kisan Registration Online 2026 | Complete Guide',
    desc: 'PM Kisan registration online 2026 — naye farmers ke liye complete guide. Eligibility, documents, step-by-step process.',
    ogTitle: 'PM Kisan Registration Online 2026 — Complete Guide',
    keywords: [
      'PM Kisan registration online 2026',
      'PM Kisan new farmer registration',
      'पीएम किसान रजिस्ट्रेशन ऑनलाइन 2026',
      'PM Kisan apply online',
      'PM Kisan form fill',
    ],
    component: 'PmKisanRegistrationOnline2026',
    category: 'registration',
    publishedTime: '2026-04-01T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 9,
  },
  {
    slug: 'pm-kisan-rejected-list-2026',
    title: 'PM Kisan Rejected List 2026 — Reasons & Fix',
    desc: 'PM Kisan rejected list 2026 check karo — naam rejection reasons aur step-by-step solutions.',
    ogTitle: 'PM Kisan Rejected List 2026 — Reasons & Fix',
    keywords: [
      'PM Kisan rejected list 2026',
      'PM Kisan rejection reason',
      'पीएम किसान रिजेक्टेड लिस्ट 2026',
      'PM Kisan application rejected',
      'PM Kisan fix rejection',
    ],
    component: 'PmKisanRejectedList2026',
    category: 'payment',
    publishedTime: '2026-04-10T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 7,
  },
  {
    slug: 'pmfby-crop-insurance-2026',
    title: 'PMFBY Crop Insurance Claim Status Check 2026 | Pradhan Mantri Fasal Bima Yojana Guide',
    desc: 'PMFBY crop insurance claim status check kaise karein? Registration, claim file karna, online status track karna.',
    ogTitle: 'PMFBY Crop Insurance Claim Status Check 2026',
    keywords: [
      'PMFBY Crop Insurance',
      'PMFBY Claim Status',
      'प्रधानमंत्री फसल बीमा योजना क्लेम',
      'PMFBY 2026',
      'crop insurance India',
      'fasal bima yojana',
    ],
    component: 'PmfbyCropInsurance2026',
    category: 'farming',
    publishedTime: '2026-04-20T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 12,
  },
  {
    slug: 'pm-kisan-23vi-kist-2026-status-check',
    title: 'PM Kisan 23vi Kist Status Check 2026',
    desc: 'PM Kisan Yojana ki 23vi kist ka status online kaise check karein. Mobile, Aadhaar, Registration number se payment status check.',
    ogTitle: 'PM Kisan 23vi Kist Status Check 2026 - Complete Guide',
    keywords: [
      'PM Kisan 23vi Kist',
      'PM Kisan Status Check',
      'पीएम किसान 23वीं किस्त स्टेटस 2026',
      'PM Kisan 23rd installment',
      'PM Kisan payment 2026',
    ],
    component: 'PmKisan23viKistStatusCheck2026',
    category: 'status-check',
    publishedTime: '2026-04-01T00:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 7,
  },
  {
    slug: 'kisan-credit-card-online-apply-2026',
    title: 'Kisan Credit Card (KCC) Online Apply 2026 | Eligibility, Documents Aur Loan Limit Guide',
    desc: 'Kisan Credit Card online apply 2026 — eligibility, documents, loan limit ₹5 lakh tak, interest rate 4% se shuru.',
    ogTitle: 'Kisan Credit Card (KCC) Online Apply 2026 — Complete Guide',
    keywords: [
      'Kisan Credit Card Online Apply 2026',
      'KCC Apply Online',
      'KCC Eligibility 2026',
      'किसान क्रेडिट कार्ड ऑनलाइन अप्लाई 2026',
      'KCC loan limit',
      'KCC interest rate',
    ],
    component: 'KisanCreditCardOnlineApply2026',
    category: 'loan',
    publishedTime: '2026-06-01T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 9,
  },
  {
    slug: 'pm-kisan-fto-generated-ka-matlab-kya-hai',
    title: 'PM Kisan FTO Generated Ka Matlab Kya Hai 2026 | FTO Status Complete Guide',
    desc: 'PM Kisan FTO Generated ka matlab kya hai? FTO Pending, FTO Processed aur Payment Order ka poora explanation.',
    ogTitle: 'PM Kisan FTO Generated Ka Matlab Kya Hai 2026',
    keywords: [
      'PM Kisan FTO Generated',
      'FTO Generated matlab',
      'एफटीओ जेनरेटेड क्या होता है',
      'PM Kisan FTO status',
      'FTO full form PM Kisan',
    ],
    component: 'PmKisanFtoGeneratedKaMatlabKyaHai',
    category: 'status-check',
    publishedTime: '2026-06-23T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 6,
  },
  {
    slug: 'nano-dap-500ml-price-in-india-2026',
    title: 'Nano DAP 500ml Price In India 2026 | IFFCO Nano DAP Kahan Se Khariden & Kaise Use Karein',
    desc: 'Nano DAP 500ml price in India 2026 — IFFCO Nano DAP ki kimat, kahan milega, kaise use karein.',
    ogTitle: 'Nano DAP 500ml Price In India 2026 — IFFCO Nano DAP Complete Guide',
    keywords: [
      'Nano DAP 500ml price India 2026',
      'IFFCO Nano DAP price',
      'नैनो डीएपी 500ml कीमत 2026',
      'Nano DAP use kaise karein',
      'Nano DAP benefits',
    ],
    component: 'NanoDap500mlPriceInIndia2026',
    category: 'farming',
    publishedTime: '2026-06-24T08:00:00+05:30',
    modifiedTime: '2026-06-24T08:00:00+05:30',
    readingTime: 7,
  },
  {
    slug: 'pm-kisan-24vi-kist',
    title: 'PM Kisan 24vi Kist 2026 | Status Check, Date Aur Payment Guide',
    desc: 'PM Kisan 24vi Kist 2026 kab aayegi? Status check kaise karein. Payment date, eKYC status aur solutions.',
    ogTitle: 'PM Kisan 24vi Kist 2026 — Status Check & Payment Date Guide',
    keywords: [
      'PM Kisan 24vi Kist 2026',
      'PM Kisan next installment 2026',
      'पीएम किसान 24वीं किस्त 2026',
      'PM Kisan 24th installment date',
      'PM Kisan upcoming payment',
    ],
    component: 'PmKisan24viKist2026',
    category: 'status-check',
    publishedTime: '2026-06-24T08:00:00+05:30',
    modifiedTime: '2026-06-24T08:00:00+05:30',
    readingTime: 6,
  },
  {
    slug: 'agristack-kya-hai',
    title: 'AgriStack Kya Hai 2026 | Farmers Digital Identity & PM Kisan Connection Guide',
    desc: 'AgriStack kya hai? Farmer ID kaise banegi, PM Kisan se kya connection hai, benefits aur registration process.',
    ogTitle: 'AgriStack Kya Hai 2026 — Farmer Digital ID Complete Guide',
    keywords: [
      'AgriStack kya hai',
      'AgriStack 2026',
      'Farmer ID AgriStack',
      'एग्रीस्टैक क्या है',
      'digital farmer ID India',
      'AgriStack registration',
    ],
    component: 'AgriStackKyaHai2026',
    category: 'farming',
    publishedTime: '2026-06-24T08:00:00+05:30',
    modifiedTime: '2026-06-24T08:00:00+05:30',
    readingTime: 10,
  },
  {
    slug: 'pm-kisan-mobile-number-change',
    title: 'PM Kisan Mobile Number Change 2026 | Online & CSC Se Number Update Guide',
    desc: 'PM Kisan mobile number change kaise karein 2026 mein? Online portal se ya CSC center se number update karein.',
    ogTitle: 'PM Kisan Mobile Number Change 2026 — Complete Update Guide',
    keywords: [
      'PM Kisan mobile number change 2026',
      'PM Kisan number update',
      'पीएम किसान मोबाइल नंबर बदलें 2026',
      'PM Kisan mobile update',
      'PM Kisan contact change',
    ],
    component: 'PmKisanMobileNumberChange2026',
    category: 'correction',
    publishedTime: '2026-06-24T08:00:00+05:30',
    modifiedTime: '2026-06-24T08:00:00+05:30',
    readingTime: 6,
  },
  {
    slug: 'pm-kisan-complete-guide',
    title: 'PM Kisan Complete Guide 2026: Solve All Problems & Check Status',
    desc: 'Comprehensive guide to solve PM Kisan issues - status check, e-KYC, payment problems, rejection solutions.',
    ogTitle: 'PM Kisan Complete Guide 2026 — Solve All Problems & Check Status',
    keywords: [
      'PM Kisan complete guide 2026',
      'PM Kisan all problems solution',
      'पीएम किसान पूर्ण गाइड',
      'PM Kisan comprehensive guide',
      'PM Kisan master guide',
    ],
    component: 'PmKisanCompleteGuide',
    category: 'status-check',
    publishedTime: '2026-06-27T08:00:00+05:30',
    modifiedTime: '2026-06-27T08:00:00+05:30',
    readingTime: 15,
  },
  {
    slug: 'soil-health-card-complete-guide-2026',
    title: 'Soil Health Card Complete Guide 2026 | Download, Status Check, PDF & Registration',
    desc: 'Soil Health Card complete guide 2026 — download, status check, PDF download, registration process.',
    ogTitle: 'Soil Health Card Complete Guide 2026 — Download, Status & Registration',
    keywords: [
      'Soil Health Card Complete Guide 2026',
      'Soil Health Card Download',
      'मिट्टी स्वास्थ्य कार्ड 2026',
      'Soil Health Card registration',
      'Soil Health Card status check',
    ],
    component: 'SoilHealthCardCompleteGuide2026',
    category: 'farming',
    publishedTime: '2026-06-27T08:00:00+05:30',
    modifiedTime: '2026-06-27T08:00:00+05:30',
    readingTime: 8,
  },
  {
    slug: 'pm-kisan-self-registered-status-check',
    title: 'PM Kisan Self Registered Farmer Status Check 2026 | Online Status Kaise Dekhen',
    desc: 'PM Kisan Self Registered Farmer Status Check kaise karein. Jaaniye kaise online check karein apna application status pmkisan.gov.in par.',
    ogTitle: 'PM Kisan Self Registered Farmer Status Check 2026',
    keywords: [
      'pm kisan self registered farmer status check',
      'pm kisan status check',
      'self registration status',
      'pmkisan status',
      'पीएम किसान सेल्फ रजिस्टर्ड स्टेटस',
      'PM Kisan self registration',
    ],
    component: 'PmKisanSelfRegisteredStatusCheck',
    category: 'status-check',
    publishedTime: '2026-06-28T08:00:00+05:30',
    modifiedTime: '2026-06-28T08:00:00+05:30',
    readingTime: 7,
  },
  {
    slug: 'pm-kisan-status-check-online-2026-complete-guide',
    title: 'PM Kisan Status Check Online 2026 — Real Farmer Guide With Screenshots',
    desc: 'PM Kisan status check kaise karein 2026 mein? Real examples ke sath step-by-step guide — Aadhaar, mobile, registration number se check karo. Common errors aur unka fix bhi.',
    ogTitle: 'PM Kisan Status Check 2026 — Real Farmer Experience & Step-by-Step Guide',
    keywords: [
      'PM Kisan status check 2026',
      'PM Kisan online status',
      'PM Kisan Aadhaar check',
      'PM Kisan mobile check',
      'पीएम किसान स्टेटस चेक',
      'PM Kisan beneficiary status',
    ],
    component: 'PmKisanStatusCheckOnline2026CompleteGuide',
    category: 'status-check',
    publishedTime: '2026-06-29T08:00:00+05:30',
    modifiedTime: '2026-06-29T08:00:00+05:30',
    readingTime: 10,
  },
  {
    slug: 'mandi-bhav-today',
    title: 'Aaj Ka Mandi Bhav 30 June 2026 - Sabzi aur Fruit Rates Today in Hindi',
    desc: 'Aaj ka mandi bhav - aloo ₹20-24, pyaaz ₹26-30, tamatar ₹38-45. Wholesale mandi rates today in Hindi. Daily updated sabzi aur fruit prices.',
    ogTitle: 'Aaj Ka Mandi Bhav 30 June 2026 - Live Sabzi aur Fruit Rates',
    keywords: [
      'aaj ka mandi bhav',
      'mandi bhav today in hindi',
      'aaj ke sabzi bhav',
      'aloo ka bhav',
      'pyaaz ka rate aaj',
      'tamatar ka bhav kya hai',
      'fruit mandi bhav',
      'wholesale mandi rates',
      'aaj ka sabzi rate',
      'mandi rates today',
    ],
    component: 'MandiBhavToday',
    category: 'mandi',
    publishedTime: '2026-06-30T09:30:00+05:30',
    modifiedTime: '2026-06-30T09:30:00+05:30',
    readingTime: 5,
  },
] as const;

// ✅ OPTIMIZED: Memoized & frozen ARTICLES_MAP (created only once)
export const ARTICLES_MAP: Readonly<Record<string, ArticleMeta>> = Object.freeze(
  Object.fromEntries(ARTICLES.map((a) => [a.slug, a]))
);

// ── Helper Functions ────────────────────────────────────────────────────────

/** Get single article by slug */
export function getArticleBySlug(slug: string): ArticleMeta | undefined {
  return ARTICLES_MAP[slug];
}

/** Get all articles in a specific category */
export function getArticlesByCategory(category: CategorySlug): readonly ArticleMeta[] {
  return ARTICLES.filter((a) => a.category === category);
}

/** Get latest N articles (sorted by publishedTime descending) */
export function getLatestArticles(limit: number = 5): readonly ArticleMeta[] {
  return [...ARTICLES]
    .sort((a, b) => new Date(b.publishedTime).getTime() - new Date(a.publishedTime).getTime())
    .slice(0, limit);
}

/** Search articles by keyword (searches keywords, title, and description) */
export function getArticlesByKeyword(keyword: string): readonly ArticleMeta[] {
  const lowerKeyword = keyword.toLowerCase();
  return ARTICLES.filter(
    (a) =>
      a.keywords.some((k) => k.toLowerCase().includes(lowerKeyword)) ||
      a.title.toLowerCase().includes(lowerKeyword) ||
      a.desc.toLowerCase().includes(lowerKeyword)
  );
}

/** Get category info (icon, color, description) */
export function getCategoryInfo(category: CategorySlug) {
  return CATEGORIES[category];
}

/** Get all category slugs */
export function getAllCategories(): readonly CategorySlug[] {
  return Object.keys(CATEGORIES) as CategorySlug[];
}

/** Get total article count */
export function getArticleCount(): number {
  return ARTICLES.length;
}

/** Get articles within a date range */
export function getArticlesByDateRange(startDate: string, endDate: string): readonly ArticleMeta[] {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();

  return ARTICLES.filter((a) => {
    const published = new Date(a.publishedTime).getTime();
    return published >= start && published <= end;
  });
}

/** Get top N primary keywords for an article (for SEO meta tags) */
export function getPrimaryKeywords(slug: string, limit: number = 3): readonly string[] {
  const article = getArticleBySlug(slug);
  if (!article) return [];
  return article.keywords.slice(0, limit);
}

/** Get only Hindi (Devanagari) keywords */
export function getHindiKeywords(slug: string): readonly string[] {
  const article = getArticleBySlug(slug);
  if (!article) return [];
  return article.keywords.filter((k) => /[\u0900-\u097F]/.test(k));
}

/** Get only English keywords */
export function getEnglishKeywords(slug: string): readonly string[] {
  const article = getArticleBySlug(slug);
  if (!article) return [];
  return article.keywords.filter((k) => !/[\u0900-\u097F]/.test(k));
}

/** Get related articles from the same category (excluding current article) */
export function getRelatedArticles(slug: string, limit: number = 3): readonly ArticleMeta[] {
  const current = getArticleBySlug(slug);
  if (!current) return [];
  return ARTICLES.filter((a) => a.slug !== slug && a.category === current.category).slice(0, limit);
}

/** Get reading time as formatted string (e.g., "8 min read") */
export function getReadingTime(slug: string): string {
  const article = getArticleBySlug(slug);
  if (!article || !article.readingTime) return '5 min read';
  return `${article.readingTime} min read`;
}