// ── lib/articles-data.ts ───────────────────────────────────
// Centralized article metadata — single source of truth
// ⚠️ OgImage paths follow /images/articles/{slug}.webp convention
// Run: npm run update-dates to auto-update modifiedTime from git

// ═══════════════════════════════════════════════════════════
// CATEGORIES (unchanged — already clean)
// ═══════════════════════════════════════════════════════════

export const CATEGORIES = {
  'status-check': {
    name: 'Verification & Status',
    nameHi: 'सत्यापन और स्थिति',
    description: 'Tranche verification, beneficiary roster, FTO, land integration guides',
    descriptionHi: 'किस्त सत्यापन, लाभार्थी सूची, एफटीओ, भूमि एकीकरण गाइड',
    icon: '📊',
    color: 'blue',
  },
  'ekyc': {
    name: 'Digital Verification',
    nameHi: 'डिजिटल सत्यापन',
    description: 'Biometric credential OTP, CSC authentication and digital verification guides',
    descriptionHi: 'बायोमेट्रिक ओटीपी, सीएससी प्रमाणीकरण और डिजिटल सत्यापन गाइड',
    icon: '🔐',
    color: 'green',
  },
  'payment': {
    name: 'Payment Issues',
    nameHi: 'भुगतान समस्याएं',
    description: 'Payment failed, rejected roster, RFT, PFMS problems and solutions',
    descriptionHi: 'भुगतान विफल, अस्वीकृत सूची, आरएफटी, पीएफएमएस समस्याएं और समाधान',
    icon: '💸',
    color: 'red',
  },
  'loan': {
    name: 'Credit & Loans',
    nameHi: 'ऋण और क्रेडिट',
    description: 'Credit facility, farm equipment loan, and bank credit guides',
    descriptionHi: 'क्रेडिट सुविधा, कृषि उपकरण ऋण, और बैंक क्रेडिट गाइड',
    icon: '🏦',
    color: 'amber',
  },
  'registration': {
    name: 'Enrollment',
    nameHi: 'नामांकन',
    description: 'New PM Kisan enrollment and eligibility guides',
    descriptionHi: 'नए पीएम किसान नामांकन और पात्रता गाइड',
    icon: '📝',
    color: 'purple',
  },
  'farming': {
    name: 'Farming & Schemes',
    nameHi: 'खेती और योजनाएं',
    description: 'Soil analysis, crop protection, AgriStack, Nano DAP and other schemes',
    descriptionHi: 'मृदा विश्लेषण, फसल सुरक्षा, एग्रीस्टैक, नैनो डीएपी और अन्य योजनाएं',
    icon: '🌾',
    color: 'emerald',
  },
  'correction': {
    name: 'Identity Corrections',
    nameHi: 'पहचान सुधार',
    description: 'Name, contact, biometric credential, bank account correction guides',
    descriptionHi: 'नाम, संपर्क, बायोमेट्रिक, बैंक खाता सुधार गाइड',
    icon: '✏️',
    color: 'orange',
  },
  'mandi': {
    name: 'Market Rates',
    nameHi: 'बाजार दरें',
    description: 'Daily vegetable and fruit market rates, wholesale prices',
    descriptionHi: 'दैनिक सब्जी और फल बाजार दरें, थोक कीमतें',
    icon: '📈',
    color: 'yellow',
  },
} as const;

export type CategorySlug = keyof typeof CATEGORIES;

// ═══════════════════════════════════════════════════════════
// ARTICLE INTERFACE (unchanged — already clean)
// ═══════════════════════════════════════════════════════════

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
  readingTime?: number;
  states?: readonly string[];
  districts?: readonly string[];
  banks?: readonly string[];
  schemes?: readonly string[];
  /** OG image path — MUST be relative to /public, e.g. /images/articles/slug.webp */
  ogImage?: string;
  relatedSlugs?: readonly string[];
}

// ═══════════════════════════════════════════════════════════
// ARTICLES DATA — OgImage paths standardized to /images/articles/
// ═══════════════════════════════════════════════════════════

export const ARTICLES: readonly ArticleMeta[] = [
  {
    slug: 'kisan-rin-kaha-se-le-2026',
    title: 'Kisan Loan Kahan Se Milega 2026? KCC, Bank, CSC — Puri Jankari',
    desc: 'Loan chahiye to confusion hota hai — SBI, cooperative, CSC, har jagah process alag. Is guide mein sab kuch hai. Kaunse bank kitna dete hain, kya documents lagenge, interest rate kya hai.',
    ogTitle: 'Kisan Loan Guide 2026 — Complete Jankari Hindi Mein',
    keywords: ['kisan loan kahan se milega 2026', 'kisan credit card', 'kisan loan 2026', 'SBI kisan loan', 'CSC center loan', 'कृषि ऋण कहाँ से लें', 'किसान लोन 2026', 'kisan loan apply online', 'agricultural loan India', 'credit facility kaise le'],
    component: 'KisanRinKahaSeLe2026',
    category: 'loan',
    publishedTime: '2026-01-10T08:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 8,
    banks: ['sbi', 'pnb', 'bob', 'cooperative'],
    schemes: ['kcc'],
    ogImage: '/images/articles/kisan-rin-kaha-se-le-2026.webp',
    relatedSlugs: ['kisan-credit-card-online-apply-2026', 'kisan-tractor-loan-2026'],
  },
  {
    slug: 'kisan-tractor-loan-2026',
    title: 'Tractor Loan Bina Down Payment — Kya Yeh Sach Mein Mil Sakta Hai?',
    desc: 'Bina down payment ke tractor loan? Sunne mein ajeeb lagta hai, lekin haan — milta hai. Mahindra Finance, TATA Capital, aur kuch state banks mein scheme hai. Eligibility se lekar documents tak poori details.',
    ogTitle: 'Tractor Loan Bina Down Payment 2026 — Puri Jankari',
    keywords: ['tractor loan 2026', 'tractor finance 2026', 'tractor loan eligibility', 'ट्रैक्टर लोन बिना डाउन पेमेंट', 'किसान ट्रैक्टर लोन 2026', 'tractor finance India', 'tractor loan interest rate', 'tractor loan kaise le', 'zero down payment tractor'],
    component: 'KisanTractorLoan2026',
    category: 'loan',
    publishedTime: '2026-01-20T08:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 10,
    banks: ['mahindra-finance', 'tata-capital'],
    schemes: ['nabard-tractor'],
    ogImage: '/images/articles/kisan-tractor-loan-2026.webp',
    relatedSlugs: ['kisan-rin-kaha-se-le-2026', 'kisan-credit-card-online-apply-2026'],
  },
  {
    slug: 'pm-kisan-21vi-installment-status-check',
    title: 'PM Kisan 21vi Kist Status Check — 2 Minute Mein Verify Karo',
    desc: '21vi kist aayi ya nahi — status verify karna simple hai. Aadhaar number dalo, OTP verify karo, 2 minute mein pata chal jaata hai.',
    ogTitle: 'PM Kisan 21vi Kist Status — 2 Minute Mein Jaano',
    keywords: ['pm kisan 21vi kist status', 'pm kisan 21st installment 2026', 'पीएम किसान 21वीं किस्त स्टेटस', '21vi kist kab aayegi', '21vi kist status online', 'pm kisan payment check'],
    component: 'PmKisan21viInstallmentStatusCheck',
    category: 'status-check',
    publishedTime: '2026-02-01T08:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 6,
    schemes: ['pm-kisan'],
    ogImage: '/images/articles/pm-kisan-21vi-installment-status-check.webp',
    relatedSlugs: ['pm-kisan-23vi-kist-2026-status-check', 'pm-kisan-installment-history-check-online'],
  },
  {
    slug: 'pm-kisan-beneficiary-list-2026',
    title: 'PM Kisan Beneficiary List 2026 — Apna Naam Kaise Check Karein?',
    desc: 'Beneficiary list mein naam hai ya nahi? Village-wise roster dekh sakte ho, PDF download kar sakte ho. Simple tarika hai.',
    ogTitle: 'PM Kisan Beneficiary List 2026 — Naam Check Karo',
    keywords: ['pm kisan beneficiary list 2026', 'pm kisan village wise roster', 'पीएम किसान लाभार्थी सूची 2026', 'beneficiary naam check', 'roster mein naam kaise dekhe', 'beneficiary roster PDF download'],
    component: 'PmKisanBeneficiaryList2026',
    category: 'status-check',
    publishedTime: '2026-02-10T08:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 7,
    schemes: ['pm-kisan'],
    ogImage: '/images/articles/pm-kisan-beneficiary-list-2026.webp',
    relatedSlugs: ['pm-kisan-beneficiary-list-village-wise-2026', 'pm-kisan-rejected-list-2026'],
  },
  {
    slug: 'pm-kisan-beneficiary-list-village-wise-2026',
    title: 'Apne Gaon Ki Beneficiary List Dekho — Village Wise Roster 2026',
    desc: 'Apne gaon mein kaun-kaun PM Kisan ka paisa le raha hai — State, District, Block select karo, phir apna gaon. Poori roster aa jayegi.',
    ogTitle: 'PM Kisan Gaon Wise Beneficiary List 2026 — Complete Guide',
    keywords: ['pm kisan beneficiary list village wise', 'pm kisan gaon wise roster', 'पीएम किसान ग्राम वार लाभार्थी सूची', 'district beneficiary roster', 'village wise beneficiary roster', 'gaon ki roster'],
    component: 'PmKisanBeneficiaryListVillageWise2026',
    category: 'status-check',
    publishedTime: '2026-02-15T08:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 6,
    schemes: ['pm-kisan'],
    ogImage: '/images/articles/pm-kisan-beneficiary-list-village-wise-2026.webp',
    relatedSlugs: ['pm-kisan-beneficiary-list-2026'],
  },
  {
    slug: 'pm-kisan-correction-deactivate-block-guide-2026',
    title: 'PM Kisan Account Block? Reactivate Kaise Karein?',
    desc: 'Account block ho gaya to tension hoti hai. Common reason — naam Aadhaar se match nahi ho raha. Correction ka process simple hai — 10 din mein sab theek.',
    ogTitle: 'PM Kisan Account Reactivate — Naam, Aadhaar, Bank Fix',
    keywords: ['pm kisan correction 2026', 'pm kisan naam correction', 'account deactivate fix', 'पीएम किसान नाम करेक्शन 2026', 'account block fix', 'account reactivate', 'deactivate account solution'],
    component: 'PmKisanCorrectionDeactivateBlockGuide2026',
    category: 'correction',
    publishedTime: '2026-02-20T08:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 9,
    schemes: ['pm-kisan'],
    ogImage: '/images/articles/pm-kisan-correction-deactivate-block-guide-2026.webp',
    relatedSlugs: ['pm-kisan-name-correction-online-2026', 'pm-kisan-payment-failed-status-2026'],
  },
  {
    slug: 'pm-kisan-ekyc-online-2026',
    title: 'PM Kisan eKYC Online Kaise Kare? OTP Ya CSC — Dono Tarike',
    desc: 'Ab ghar baithe OTP se eKYC ho jaata hai — 5 minute ka kaam hai. Phone se karo, simple hai. CSC biometric option bhi hai.',
    ogTitle: 'PM Kisan eKYC Online 2026 — Ghar Baithe Karo',
    keywords: ['pm kisan ekyc online 2026', 'pm kisan biometric verification', 'पीएम किसान डिजिटल सत्यापन 2026', 'ekyc OTP verification', 'CSC center ekyc', 'pm kisan ekyc ghar baithe'],
    component: 'PmKisanEkycOnline2026',
    category: 'ekyc',
    publishedTime: '2026-03-01T08:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 7,
    schemes: ['pm-kisan'],
    ogImage: '/images/articles/pm-kisan-ekyc-online-2026.webp',
    relatedSlugs: ['pm-kisan-23vi-kist-2026-status-check', 'pm-kisan-mobile-number-change'],
  },
  {
    slug: 'pm-kisan-installment-history-check-online',
    title: 'PM Kisan Purani Kiston Ka Hisaab — Transaction History Kaise Dekhein?',
    desc: 'Pichli kistein kab aayi thi? Enrollment ID se history check karo — poori list aa jaati hai. Kab aayi, kitni aayi, sab dikh jaata hai.',
    ogTitle: 'PM Kisan Transaction History — Purani Kistein Dekho',
    keywords: ['pm kisan transaction history', 'pm kisan payment history', 'पीएम किसान किस्त इतिहास ऑनलाइन', 'past payments check', 'transaction history online', 'purani kistein'],
    component: 'PmKisanInstallmentHistoryCheckOnline',
    category: 'status-check',
    publishedTime: '2026-03-05T08:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 6,
    schemes: ['pm-kisan'],
    ogImage: '/images/articles/pm-kisan-installment-history-check-online.webp',
    relatedSlugs: ['pm-kisan-23vi-kist-2026-status-check', 'pm-kisan-payment-failed-status-2026'],
  },
  {
    slug: 'pm-kisan-land-seeding-status-check',
    title: 'PM Kisan Land Seeding Pending? Kist Nahi Aayegi Agar...',
    desc: 'Land Seeding No hai to kist ruk jaati hai. Bahut se kisanon ko pata hi nahi hota. Patwari se milo, form bharo, 15 din mein sab theek.',
    ogTitle: 'PM Kisan Land Seeding Fix — Pending, Rejected Solution',
    keywords: ['pm kisan land seeding status', 'land seeding pending fix', 'पीएम किसान लैंड सीडिंग स्टेटस', 'land record verification', 'land linking status', 'zameen seeding', 'land seeding rejected fix'],
    component: 'PmKisanLandSeedingStatusCheck',
    category: 'status-check',
    publishedTime: '2026-03-10T08:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 8,
    schemes: ['pm-kisan'],
    ogImage: '/images/articles/pm-kisan-land-seeding-status-check.webp',
    relatedSlugs: ['pm-kisan-payment-failed-status-2026', 'pm-kisan-correction-deactivate-block-guide-2026'],
  },
  {
    slug: 'pm-kisan-name-correction-online-2026',
    title: 'Aadhaar Se Naam Match Nahi Ho Raha? PM Kisan Name Correction',
    desc: 'Aadhaar mein naam alag, bank mein alag, portal mein alag — payment fail ho jaati hai. Naam correction karo, 10 din mein sab theek. Online ya CSC se dono tarike.',
    ogTitle: 'PM Kisan Name Correction — Aadhaar Match Karo',
    keywords: ['pm kisan name correction', 'aadhaar name mismatch', 'पीएम किसान नाम सुधार 2026', 'naam theek karo', 'name update pm kisan', 'naam correction online', 'aadhaar naam match nahi ho raha'],
    component: 'PmKisanNameCorrectionOnline2026',
    category: 'correction',
    publishedTime: '2026-03-15T08:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 7,
    schemes: ['pm-kisan'],
    ogImage: '/images/articles/pm-kisan-name-correction-online-2026.webp',
    relatedSlugs: ['pm-kisan-correction-deactivate-block-guide-2026', 'pm-kisan-mobile-number-change'],
  },
  {
    slug: 'pm-kisan-payment-failed-status-2026',
    title: 'PM Kisan Paisa Nahi Aaya? Payment Failed — 5 Reasons Aur Fix',
    desc: 'Status check kiya to "Payment Failed" dikh raha hai? 5 main reasons hote hain — Aadhaar mismatch, NPCI error, bank issue. Har ek ka solution hai.',
    ogTitle: 'PM Kisan Payment Failed — 5 Reasons Aur Fix',
    keywords: ['pm kisan payment failed 2026', 'NPCI error fix', 'पीएम किसान पेमेंट फेल 2026', 'payment error solution', 'bank issue fix', 'paisa nahi aaya', 'payment failed solution'],
    component: 'PmKisanPaymentFailedStatus2026',
    category: 'payment',
    publishedTime: '2026-03-20T08:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 8,
    schemes: ['pm-kisan'],
    banks: ['sbi', 'pnb', 'bob'],
    ogImage: '/images/articles/pm-kisan-payment-failed-status-2026.webp',
    relatedSlugs: ['pm-kisan-land-seeding-status-check', 'pm-kisan-name-correction-online-2026', 'pm-kisan-ekyc-online-2026'],
  },
  {
    slug: 'pm-kisan-problems-solution-guide-2026',
    title: 'PM Kisan 10 Badi Problems Aur Unka Seedha Hal',
    desc: 'RFT Signed, PFMS Pending, Payment Fail — har problem ka solution hai. Real examples ke saath samjhaya hai.',
    ogTitle: 'PM Kisan 10 Problems — Sab Fix Karo',
    keywords: ['pm kisan problems solution', 'RFT signed meaning', 'PFMS pending fix', 'पीएम किसान समस्या समाधान 2026', 'RFT matlab', 'PFMS pending kya hai'],
    component: 'PmKisanProblemsSolutionGuide2026',
    category: 'payment',
    publishedTime: '2026-03-25T08:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 10,
    schemes: ['pm-kisan'],
    ogImage: '/images/articles/pm-kisan-problems-solution-guide-2026.webp',
    relatedSlugs: ['pm-kisan-payment-failed-status-2026', 'pm-kisan-fto-generated-ka-matlab-kya-hai'],
  },
  {
    slug: 'pm-kisan-registration-online-2026',
    title: 'PM Kisan Naya Registration Kaise Karein? Online Apply Guide',
    desc: 'PM Kisan mein naye ho? Online form bharo, documents upload karo, 15 minute mein ho jaata hai. Eligibility, documents, sab kuch yahan hai.',
    ogTitle: 'PM Kisan New Registration 2026 — Step by Step',
    keywords: ['pm kisan registration online 2026', 'new kisan enrollment', 'पीएम किसान रजिस्ट्रेशन ऑनलाइन 2026', 'pm kisan apply online', 'enrollment form', 'naya registration kaise kare', 'eligibility criteria', 'required documents'],
    component: 'PmKisanRegistrationOnline2026',
    category: 'registration',
    publishedTime: '2026-04-01T08:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 9,
    schemes: ['pm-kisan'],
    ogImage: '/images/articles/pm-kisan-registration-online-2026.webp',
    relatedSlugs: ['pm-kisan-ekyc-online-2026', 'pm-kisan-self-registered-status-check'],
  },
  {
    slug: 'pm-kisan-rejected-list-2026',
    title: 'PM Kisan Rejected List Mein Naam? Fix Kaise Karein?',
    desc: 'Naam rejected list mein hai? Common reason — land records galat. Patwari se milo, documents theek karo, 20 din mein clear.',
    ogTitle: 'PM Kisan Rejected List — Reason Aur Fix',
    keywords: ['pm kisan rejected list 2026', 'rejection reason fix', 'पीएम किसान रिजेक्टेड लिस्ट 2026', 'application rejected solution', 'rejected roster mein naam', 'rejection kaise fix kare'],
    component: 'PmKisanRejectedList2026',
    category: 'payment',
    publishedTime: '2026-04-10T08:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 7,
    schemes: ['pm-kisan'],
    ogImage: '/images/articles/pm-kisan-rejected-list-2026.webp',
    relatedSlugs: ['pm-kisan-beneficiary-list-2026', 'pm-kisan-correction-deactivate-block-guide-2026'],
  },
  {
    slug: 'pmfby-crop-insurance-2026',
    title: 'PMFBY Crop Insurance 2026 — Claim Kaise Karein? Complete Guide',
    desc: 'Fasal kharab ho gayi? PMFBY claim kar sakte ho. 45 din lagte hain lekin paisa aa jaata hai. Claim file, status check, payment timeline — sab yahan hai.',
    ogTitle: 'PMFBY Crop Insurance Claim — Complete Guide 2026',
    keywords: ['pmfby crop insurance claim', 'fasal bima claim status', 'प्रधानमंत्री फसल बीमा योजना क्लेम', 'crop insurance 2026', 'fasal bima yojana', 'crop insurance claim kaise kare'],
    component: 'PmfbyCropInsurance2026',
    category: 'farming',
    publishedTime: '2026-04-20T08:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 12,
    schemes: ['pmfby'],
    ogImage: '/images/articles/pmfby-crop-insurance-2026.webp',
    relatedSlugs: ['soil-health-card-complete-guide-2026', 'nano-dap-500ml-price-in-india-2026'],
  },
  {
    slug: 'pm-kisan-23vi-kist-2026-status-check',
    title: 'PM Kisan 23vi Kist Status Check 2026 — Abhi Verify Karo',
    desc: '23vi kist ka wait hai? Mobile se check karo — Aadhaar number dalo, OTP verify karo, 2 minute mein pata chal jaata hai.',
    ogTitle: 'PM Kisan 23vi Kist Status — Abhi Verify Karo',
    keywords: ['pm kisan 23vi kist status 2026', 'pm kisan verification', 'पीएम किसान 23वीं किस्त स्टेटस 2026', '23rd kist status', '23vi kist kab aayegi', 'kist status check'],
    component: 'PmKisan23viKistStatusCheck2026',
    category: 'status-check',
    publishedTime: '2026-04-01T00:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 7,
    schemes: ['pm-kisan'],
    ogImage: '/images/articles/pm-kisan-23vi-kist-2026-status-check.webp',
    relatedSlugs: ['pm-kisan-ekyc-online-2026', 'pm-kisan-payment-failed-status-2026', 'pm-kisan-24vi-kist'],
  },
  {
    slug: 'kisan-credit-card-online-apply-2026',
    title: 'Kisan Credit Card Online Apply 2026 — ₹5 Lakh Loan, 4% Interest',
    desc: 'KCC hai to ₹5 lakh tak loan mil sakta hai, interest rate sirf 4%. Online apply karo, bank jao, 10 din mein card aa jaata hai.',
    ogTitle: 'Kisan Credit Card Online Apply — ₹5 Lakh Loan 2026',
    keywords: ['kisan credit card online apply 2026', 'KCC apply online', 'kcc eligibility 2026', 'किसान क्रेडिट कार्ड ऑनलाइन अप्लाई 2026', 'credit limit', 'interest rate subsidized', 'kcc kaise banaye'],
    component: 'KisanCreditCardOnlineApply2026',
    category: 'loan',
    publishedTime: '2026-06-01T08:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 9,
    banks: ['sbi', 'pnb', 'bob', 'cooperative'],
    schemes: ['kcc'],
    ogImage: '/images/articles/kisan-credit-card-online-apply-2026.webp',
    relatedSlugs: ['kisan-rin-kaha-se-le-2026', 'kisan-tractor-loan-2026'],
  },
  {
    slug: 'pm-kisan-fto-generated-ka-matlab-kya-hai',
    title: 'FTO Generated Ka Matlab Kya Hai? PM Kisan Status Explained',
    desc: 'FTO Generated, FTO Pending — confused ho? FTO matlab Fund Transfer Order. Sarkar ne paisa bhejne ka order de diya. Ab bank process karega.',
    ogTitle: 'FTO Generated Matlab — PM Kisan Status Guide',
    keywords: ['FTO generated meaning', 'fund transfer order status', 'एफटीओ जेनरेटेड क्या होता है', 'FTO full form', 'FTO ka matlab', 'FTO pending fix', 'payment order status'],
    component: 'PmKisanFtoGeneratedKaMatlabKyaHai',
    category: 'status-check',
    publishedTime: '2026-06-23T08:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 6,
    schemes: ['pm-kisan'],
    ogImage: '/images/articles/pm-kisan-fto-generated-ka-matlab-kya-hai.webp',
    relatedSlugs: ['pm-kisan-problems-solution-guide-2026', 'pm-kisan-payment-failed-status-2026'],
  },
  {
    slug: 'nano-dap-500ml-price-in-india-2026',
    title: 'Nano DAP 500ml Price India 2026 — IFFCO Rate Aur Kahan Milega',
    desc: 'IFFCO Nano DAP 500ml bottle ₹280-320 ke beech hai. Use karna bhi seekho. Benefits — kam quantity, zyada asar.',
    ogTitle: 'Nano DAP 500ml Price 2026 — Kahan Se Khariden?',
    keywords: ['Nano DAP 500ml price India 2026', 'IFFCO Nano DAP price', 'नैनो डीएपी 500ml कीमत 2026', 'Nano DAP use kaise karein', 'Nano DAP benefits', 'Nano DAP kahan milega'],
    component: 'NanoDap500mlPriceInIndia2026',
    category: 'farming',
    publishedTime: '2026-06-24T08:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 7,
    schemes: ['nano-dap'],
    ogImage: '/images/articles/nano-dap-500ml-price-in-india-2026.webp',
    relatedSlugs: ['soil-health-card-complete-guide-2026', 'pmfby-crop-insurance-2026'],
  },
  {
    slug: 'pm-kisan-24vi-kist',
    title: 'PM Kisan 24vi Kist Kab Aayegi? Date Aur Status Guide 2026',
    desc: '23vi aa gayi, ab 24vi ka wait. October 2026 tak aane ki umeed. eKYC zaroori hai, land seeding bhi. Status dekh lo.',
    ogTitle: 'PM Kisan 24vi Kist — Kab Aayegi 2026?',
    keywords: ['pm kisan 24vi kist 2026', 'next kist date 2026', 'पीएम किसान 24वीं किस्त 2026', '24th kist date', 'upcoming payment', '24vi kist kab aayegi'],
    component: 'PmKisan24viKist2026',
    category: 'status-check',
    publishedTime: '2026-06-24T08:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 6,
    schemes: ['pm-kisan'],
    ogImage: '/images/articles/pm-kisan-24vi-kist-october-2026.webp',
    relatedSlugs: ['pm-kisan-23vi-kist-2026-status-check', 'pm-kisan-ekyc-online-2026'],
  },
  {
    slug: 'agristack-kya-hai',
    title: 'AgriStack Kya Hai? Digital Kisan ID Aur PM Kisan Connection',
    desc: 'AgriStack digital kisan ID hai. PM Kisan se connected hai. Har kisan ko unique ID milegi. Loan, insurance, schemes — sab ek jagah.',
    ogTitle: 'AgriStack Kya Hai — Digital Kisan ID Complete Guide',
    keywords: ['AgriStack kya hai', 'AgriStack 2026', 'digital kisan ID AgriStack', 'एग्रीस्टैक क्या है', 'digital kisan ID India', 'AgriStack enrollment', 'AgriStack benefits'],
    component: 'AgriStackKyaHai2026',
    category: 'farming',
    publishedTime: '2026-06-24T08:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 10,
    schemes: ['agristack', 'pm-kisan'],
    ogImage: '/images/articles/agristack-kya-hai-infographic.webp',
    relatedSlugs: ['pm-kisan-registration-online-2026', 'pm-kisan-complete-guide'],
  },
  {
    slug: 'pm-kisan-mobile-number-change',
    title: 'PM Kisan Mobile Number Change — Online Ya CSC Se Update Karo',
    desc: 'Purana number band? CSC jao, form bharo, 7 din mein naya number update. Online bhi kar sakte ho.',
    ogTitle: 'PM Kisan Mobile Number Change — Complete Guide',
    keywords: ['pm kisan mobile number change 2026', 'mobile number update pm kisan', 'पीएम किसान मोबाइल नंबर बदलें 2026', 'contact update', 'number change process', 'mobile number kaise badle'],
    component: 'PmKisanMobileNumberChange2026',
    category: 'correction',
    publishedTime: '2026-06-24T08:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 6,
    schemes: ['pm-kisan'],
    ogImage: '/images/articles/pm-kisan-mobile-number-change-2026.webp',
    relatedSlugs: ['pm-kisan-ekyc-online-2026', 'pm-kisan-name-correction-online-2026'],
  },
  {
    slug: 'pm-kisan-complete-guide',
    title: 'PM Kisan Complete Guide 2026 — Sab Problems Ka Ek Saath Hal',
    desc: 'Status verify, eKYC, payment fail — sab ek jagah. Master guide hai. Ek baar padh lo, phir kisi se puchne ki zaroorat nahi.',
    ogTitle: 'PM Kisan Complete Guide — Sab Problems Fix',
    keywords: ['pm kisan complete guide 2026', 'all problems solution', 'पीएम किसान पूर्ण गाइड', 'comprehensive guide', 'master guide', 'complete solution'],
    component: 'PmKisanCompleteGuide',
    category: 'status-check',
    publishedTime: '2026-06-27T08:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 15,
    schemes: ['pm-kisan'],
    ogImage: '/images/articles/pm-kisan-complete-guide-2026.webp',
    relatedSlugs: ['pm-kisan-23vi-kist-2026-status-check', 'pm-kisan-ekyc-online-2026', 'pm-kisan-payment-failed-status-2026'],
  },
  {
    slug: 'soil-health-card-complete-guide-2026',
    title: 'Soil Health Card 2026 — Mitti Test Karwane Ka Pura Process',
    desc: 'Mitti test karwao — CSC se form lo, sample do, 15 din mein report. Pata chalta hai mitti mein kya kami hai. Fertilizer change karo, fasal achhi hoti hai.',
    ogTitle: 'Soil Health Card Complete Guide 2026 — Sab Kuch Jaano',
    keywords: ['soil health card complete guide 2026', 'soil health card download', 'मिट्टी स्वास्थ्य कार्ड 2026', 'soil testing registration', 'soil health status check', 'mitti test kaise karaye', 'soil report PDF'],
    component: 'SoilHealthCardCompleteGuide2026',
    category: 'farming',
    publishedTime: '2026-06-27T08:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 8,
    schemes: ['soil-health-card'],
    ogImage: '/images/articles/soil-health-card-complete-guide-2026.webp',
    relatedSlugs: ['nano-dap-500ml-price-in-india-2026', 'pmfby-crop-insurance-2026'],
  },
  {
    slug: 'pm-kisan-self-registered-status-check',
    title: 'PM Kisan Self-Registered Status Check — Khud Apply Kiya?',
    desc: 'Khud se apply kiya lekin status nahi dikh raha? Portal par jao, enrollment ID dalo, status aa jaata hai.',
    ogTitle: 'PM Kisan Self-Registered Status — Verify Karo',
    keywords: ['pm kisan self registered status check', 'self enrollment status', 'पीएम किसान सेल्फ रजिस्टर्ड स्टेटस', 'self enrollment verification', 'self enrolled kaise check kare'],
    component: 'PmKisanSelfRegisteredStatusCheck',
    category: 'status-check',
    publishedTime: '2026-06-28T08:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 7,
    schemes: ['pm-kisan'],
    ogImage: '/images/articles/pm-kisan-self-registered-status-check.webp',
    relatedSlugs: ['pm-kisan-registration-online-2026', 'pm-kisan-23vi-kist-2026-status-check'],
  },
  {
    slug: 'pm-kisan-status-check-online-2026-complete-guide',
    title: 'PM Kisan Status Check Online 2026 — Real Guide With Screenshots',
    desc: 'Aadhaar se karo, mobile se karo, enrollment ID se bhi kar sakte ho. Screenshots bhi hain. Common errors aur fix bhi.',
    ogTitle: 'PM Kisan Status Verification — Real Guide 2026',
    keywords: ['pm kisan status check online 2026', 'online status check', 'biometric verification', 'पीएम किसान स्टेटस चेक', 'beneficiary status', 'status verify kaise kare'],
    component: 'PmKisanStatusCheckOnline2026CompleteGuide',
    category: 'status-check',
    publishedTime: '2026-06-29T08:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 10,
    schemes: ['pm-kisan'],
    ogImage: '/images/articles/pm-kisan-status-check-online-2026-complete-guide.webp',
    relatedSlugs: ['pm-kisan-23vi-kist-2026-status-check', 'pm-kisan-complete-guide'],
  },
  {
    slug: 'mandi-bhav-today',
    title: 'Aaj Ka Mandi Bhav — Sabzi Aur Fruit Rates (Daily Update)',
    desc: 'Aloo ₹20-24, pyaaz ₹26-30, tamatar ₹38-45. Daily updated rates. Bechne se pehle jaan lo.',
    ogTitle: 'Aaj Ka Mandi Bhav — Live Sabzi Aur Fruit Rates',
    keywords: ['aaj ka mandi bhav', 'mandi bhav today hindi', 'aaj ke sabzi bhav', 'aloo ka bhav', 'pyaaz ka rate aaj', 'tamatar ka bhav', 'fruit mandi bhav', 'wholesale mandi rates', 'mandi rates today'],
    component: 'MandiBhavToday',
    category: 'mandi',
    publishedTime: '2026-06-30T09:30:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 5,
    ogImage: '/images/articles/mandi-bhav-today.webp',
  },
] as const;

// ═══════════════════════════════════════════════════════════
// LOOKUP MAP & HELPERS (unchanged — already optimized)
// ═══════════════════════════════════════════════════════════

export const ARTICLES_MAP: Readonly<Record<string, ArticleMeta>> = Object.freeze(
  Object.fromEntries(ARTICLES.map((a) => [a.slug, a]))
);

export function getArticleBySlug(slug: string): ArticleMeta | undefined {
  return ARTICLES_MAP[slug];
}

export function getArticlesByCategory(category: CategorySlug): readonly ArticleMeta[] {
  return ARTICLES.filter((a) => a.category === category);
}

export function getLatestArticles(limit: number = 5): readonly ArticleMeta[] {
  return [...ARTICLES]
    .sort((a, b) => new Date(b.publishedTime).getTime() - new Date(a.publishedTime).getTime())
    .slice(0, limit);
}

export function getArticlesByKeyword(keyword: string): readonly ArticleMeta[] {
  const lower = keyword.toLowerCase();
  return ARTICLES.filter(
    (a) =>
      a.keywords.some((k) => k.toLowerCase().includes(lower)) ||
      a.title.toLowerCase().includes(lower) ||
      a.desc.toLowerCase().includes(lower)
  );
}

export function getCategoryInfo(category: CategorySlug) {
  return CATEGORIES[category];
}

export function getAllCategories(): readonly CategorySlug[] {
  return Object.keys(CATEGORIES) as CategorySlug[];
}

export function getArticleCount(): number {
  return ARTICLES.length;
}

export function getArticlesByDateRange(startDate: string, endDate: string): readonly ArticleMeta[] {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  return ARTICLES.filter((a) => {
    const t = new Date(a.publishedTime).getTime();
    return t >= start && t <= end;
  });
}

export function getPrimaryKeywords(slug: string, limit: number = 3): readonly string[] {
  return getArticleBySlug(slug)?.keywords.slice(0, limit) ?? [];
}

export function getHindiKeywords(slug: string): readonly string[] {
  return getArticleBySlug(slug)?.keywords.filter((k) => /[\u0900-\u097F]/.test(k)) ?? [];
}

export function getEnglishKeywords(slug: string): readonly string[] {
  return getArticleBySlug(slug)?.keywords.filter((k) => !/[\u0900-\u097F]/.test(k)) ?? [];
}

export function getRelatedArticles(slug: string, limit: number = 3): readonly ArticleMeta[] {
  const current = getArticleBySlug(slug);
  if (!current) return [];

  if (current.relatedSlugs && current.relatedSlugs.length > 0) {
    const explicit = current.relatedSlugs
      .map((s) => ARTICLES_MAP[s])
      .filter(Boolean) as ArticleMeta[];
    if (explicit.length >= limit) return explicit.slice(0, limit);

    const remaining = ARTICLES.filter(
      (a) => a.slug !== slug && a.category === current.category && !current.relatedSlugs?.includes(a.slug)
    );
    return [...explicit, ...remaining].slice(0, limit);
  }

  return ARTICLES.filter((a) => a.slug !== slug && a.category === current.category).slice(0, limit);
}

export function getReadingTime(slug: string): string {
  const mins = getArticleBySlug(slug)?.readingTime;
  return mins ? `${mins} min read` : '5 min read';
}

export function getArticlesByScheme(scheme: string): readonly ArticleMeta[] {
  return ARTICLES.filter((a) => a.schemes?.includes(scheme));
}

export function getArticlesByBank(bank: string): readonly ArticleMeta[] {
  return ARTICLES.filter((a) => a.banks?.includes(bank));
}

export function getArticlesByState(state: string): readonly ArticleMeta[] {
  return ARTICLES.filter((a) => a.states?.includes(state));
}

export function getAllSchemes(): readonly string[] {
  const set = new Set<string>();
  ARTICLES.forEach((a) => a.schemes?.forEach((s) => set.add(s)));
  return Array.from(set).sort();
}

export function getAllBanks(): readonly string[] {
  const set = new Set<string>();
  ARTICLES.forEach((a) => a.banks?.forEach((b) => set.add(b)));
  return Array.from(set).sort();
}

export function getAllStates(): readonly string[] {
  const set = new Set<string>();
  ARTICLES.forEach((a) => a.states?.forEach((s) => set.add(s)));
  return Array.from(set).sort();
}