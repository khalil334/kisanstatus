// ── lib/articles-data.ts ───────────────────────────────────
// Centralized article metadata — single source of truth
// Auto-updates dates via: npm run update-dates (git history)

// ═══════════════════════════════════════════════════════════
// CATEGORIES
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
    description: 'New agrarian welfare enrollment and eligibility guides',
    descriptionHi: 'नए कृषि कल्याण नामांकन और पात्रता गाइड',
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
// ARTICLE INTERFACE
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

  // ── NEW: Programmatic SEO fields ──
  /** States this article is relevant to */
  states?: readonly string[];
  /** Districts this article mentions or targets */
  districts?: readonly string[];
  /** Banks referenced in this article */
  banks?: readonly string[];
  /** Government schemes covered */
  schemes?: readonly string[];
  /** OG image path relative to /images/ — centralized here */
  ogImage?: string;
  /** Explicit related article slugs (overrides category-based) */
  relatedSlugs?: readonly string[];
}

// ═══════════════════════════════════════════════════════════
// ARTICLES DATA
// ═══════════════════════════════════════════════════════════

export const ARTICLES: readonly ArticleMeta[] = [
  {
    slug: 'kisan-rin-kaha-se-le-2026',
    title: 'Agricultural Credit Kahan Se Milega 2026? KCC, Bank, CSC — Puri Jankari',
    desc: 'Loan chahiye to confusion hota hai — SBI, cooperative, CSC, har jagah process alag. Is guide mein sab kuch hai. Kaunse bank kitna dete hain, kya documents lagenge, interest rate kya hai. Ek baar padh lo, phir kisi se puchne ki zaroorat nahi.',
    ogTitle: 'Agricultural Credit Guide 2026 — Complete Jankari Hindi Mein',
    keywords: [
      'agricultural credit kahan se milega 2026',
      'credit facility card',
      'cultivator loan 2026',
      'SBI cultivator loan',
      'CSC center loan',
      'कृषि ऋण कहाँ से लें',
      'किसान लोन 2026',
      'cultivator loan apply online',
      'agricultural loan India',
      'credit facility kaise le',
      'farmer loan India 2026',
    ],
    component: 'KisanRinKahaSeLe2026',
    category: 'loan',
    publishedTime: '2026-01-10T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 8,
    banks: ['sbi', 'pnb', 'bob', 'cooperative'],
    schemes: ['kcc'],
    ogImage: '/images/kisan-rin-kaha-se-le-2026.webp',
    relatedSlugs: ['kisan-credit-card-online-apply-2026', 'kisan-tractor-loan-2026'],
  },
  {
    slug: 'kisan-tractor-loan-2026',
    title: 'Farm Equipment Loan Bina Down Payment — Kya Yeh Sach Mein Mil Sakta Hai?',
    desc: 'Bina down payment ke farm equipment loan? Sunne mein ajeeb lagta hai, lekin haan — milta hai. Mahindra Finance, TATA Capital, aur kuch state banks mein scheme hai. Is article mein poori details hai — eligibility se lekar documents tak.',
    ogTitle: 'Farm Equipment Loan Bina Down Payment 2026 — Puri Jankari',
    keywords: [
      'farm equipment loan 2026',
      'tractor finance 2026',
      'equipment loan eligibility',
      'ट्रैक्टर लोन बिना डाउन पेमेंट',
      'किसान ट्रैक्टर लोन 2026',
      'tractor finance India',
      'equipment loan interest rate',
      'tractor loan kaise le',
      'zero down payment tractor',
    ],
    component: 'KisanTractorLoan2026',
    category: 'loan',
    publishedTime: '2026-01-20T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 10,
    banks: ['mahindra-finance', 'tata-capital'],
    schemes: ['nabard-tractor'],
    ogImage: '/images/kisan-tractor-loan-2026.webp',
    relatedSlugs: ['kisan-rin-kaha-se-le-2026', 'kisan-credit-card-online-apply-2026'],
  },
  {
    slug: 'pm-kisan-21vi-installment-status-check',
    title: '21vi Tranche Kab Aayi? Status Verify Karo 2 Minute Mein',
    desc: '21vi tranche aayi ya nahi — yeh sawal har gaon mein ghoom raha tha. Status verify karna simple hai. Biometric credential number dalo, OTP verify karo, 2 minute mein pata chal jaata hai. Step-by-step guide yahan hai.',
    ogTitle: 'Agrarian Welfare 21vi Tranche Verification — 2 Minute Mein Jaano',
    keywords: [
      'agrarian welfare 21vi tranche',
      'cultivator benefit 21vi tranche 2026',
      'पीएम किसान 21वीं ट्रांche स्टेटस',
      'scheme 21st tranche status',
      'benefit payment check',
      '21vi tranche kab aayegi',
      '21vi tranche status online',
    ],
    component: 'PmKisan21viInstallmentStatusCheck',
    category: 'status-check',
    publishedTime: '2026-02-01T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 6,
    schemes: ['pm-kisan'],
    ogImage: '/images/pm-kisan-21vi-installment-status-check.webp',
    relatedSlugs: ['pm-kisan-23vi-kist-2026-status-check', 'pm-kisan-installment-history-check-online'],
  },
  {
    slug: 'pm-kisan-beneficiary-list-2026',
    title: 'Beneficiary Roster 2026 — Apna Naam Kaise Check Karein?',
    desc: 'Roster mein naam hai ya nahi? Yeh sawal har cultivator ke dimaag mein aata hai. Village-wise roster dekh sakte ho, PDF download kar sakte ho. Simple tarika hai — try karo, kaam aayega.',
    ogTitle: 'Agrarian Welfare Beneficiary Roster 2026 — Naam Check Karo',
    keywords: [
      'agrarian welfare beneficiary roster 2026',
      'cultivator village wise roster',
      'पीएम किसान लाभार्थी सूची 2026',
      'scheme roster download',
      'beneficiary naam check',
      'roster mein naam kaise dekhe',
      'beneficiary roster PDF download',
    ],
    component: 'PmKisanBeneficiaryList2026',
    category: 'status-check',
    publishedTime: '2026-02-10T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 7,
    schemes: ['pm-kisan'],
    ogImage: '/images/pm-kisan-beneficiary-list-2026.webp',
    relatedSlugs: ['pm-kisan-beneficiary-list-village-wise-2026', 'pm-kisan-rejected-list-2026'],
  },
  {
    slug: 'pm-kisan-beneficiary-list-village-wise-2026',
    title: 'Apne Gaon Ki Roster Dekho — Village Wise Beneficiary Roster 2026',
    desc: 'Apne gaon mein kaun-kaun agrarian welfare ka paisa le raha hai — yeh jaanna mushkil nahi. State, District, Block select karo, phir apna gaon. Poori roster aa jayegi. Kuch ke naam galat hote hain, kuch ke account band — yeh sab check kar sakte ho.',
    ogTitle: 'Agrarian Welfare Gaon Wise Roster 2026 — Complete Guide',
    keywords: [
      'agrarian welfare beneficiary roster village wise',
      'cultivator village wise roster',
      'पीएम किसान ग्राम वार लाभार्थी सूची',
      'scheme gaon wise roster',
      'district beneficiary roster',
      'village wise beneficiary roster',
      'gaon ki roster',
    ],
    component: 'PmKisanBeneficiaryListVillageWise2026',
    category: 'status-check',
    publishedTime: '2026-02-15T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 6,
    schemes: ['pm-kisan'],
    ogImage: '/images/pm-kisan-beneficiary-list-village-wise-2026.webp',
    relatedSlugs: ['pm-kisan-beneficiary-list-2026'],
  },
  {
    slug: 'pm-kisan-correction-deactivate-block-guide-2026',
    title: 'Account Block Ho Gaya? Reactivate Kaise Karein?',
    desc: 'Account block ho gaya to tension hoti hai. Common reason — naam biometric credential se match nahi ho raha. Correction ka process simple hai — online apply karo, 10 din mein sab theek ho jaata hai. Agar tumhara bhi aisa hai, to yeh padho.',
    ogTitle: 'Agrarian Welfare Account Reactivate — Naam, Biometric Credential, Bank Fix',
    keywords: [
      'agrarian welfare correction 2026',
      'scheme naam correction',
      'account deactivate fix',
      'पीएम किसान नाम करेक्शन 2026',
      'account block fix',
      'account reactivate',
      'account fix kaise kare',
      'deactivate account solution',
    ],
    component: 'PmKisanCorrectionDeactivateBlockGuide2026',
    category: 'correction',
    publishedTime: '2026-02-20T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 9,
    schemes: ['pm-kisan'],
    ogImage: '/images/pm-kisan-correction-deactivate-block-guide-2026.webp',
    relatedSlugs: ['pm-kisan-name-correction-online-2026', 'pm-kisan-payment-failed-status-2026'],
  },
  {
    slug: 'pm-kisan-ekyc-online-2026',
    title: 'Digital Verification Ghar Baithe Kaise Kare? OTP Ya CSC — Dono Tarike',
    desc: 'Pehle CSC center jaana padta tha, line mein khade hona padta tha. Ab ghar baithe OTP se ho jaata hai — 5 minute ka kaam hai. Phone se karo, simple hai. Tum bhi try karo.',
    ogTitle: 'Digital Verification Online 2026 — Ghar Baithe Karo',
    keywords: [
      'digital verification online 2026',
      'biometric credential verification kaise kare',
      'पीएम किसान डिजिटल सत्यापन 2026',
      'scheme biometric credential verification',
      'biometric authentication',
      'OTP verification method',
      'CSC center verification',
      'digital verification ghar baithe',
    ],
    component: 'PmKisanEkycOnline2026',
    category: 'ekyc',
    publishedTime: '2026-03-01T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 7,
    schemes: ['pm-kisan'],
    ogImage: '/images/pm-kisan-ekyc-online-2026.webp',
    relatedSlugs: ['pm-kisan-23vi-kist-2026-status-check', 'pm-kisan-mobile-number-change'],
  },
  {
    slug: 'pm-kisan-installment-history-check-online',
    title: 'Purani Tranches Ka Hisaab — Tranction History Kaise Dekhein?',
    desc: 'Kabhi-kabhi yaad nahi rehta ki pichli tranches kab aayi thi. Enrollment ID se history check kar sakte ho — poori list aa jaati hai. Kab aayi, kitni aayi, sab dikh jaata hai.',
    ogTitle: 'Agrarian Welfare Transaction History — Purani Tranches Dekho',
    keywords: [
      'agrarian welfare transaction history',
      'benefit payment history',
      'पीएम किसान ट्रांche इतिहास ऑनलाइन',
      'scheme past payments',
      'transaction history check',
      'purani tranches',
      'payment history check online',
    ],
    component: 'PmKisanInstallmentHistoryCheckOnline',
    category: 'status-check',
    publishedTime: '2026-03-05T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 6,
    schemes: ['pm-kisan'],
    ogImage: '/images/pm-kisan-installment-history-check-online.webp',
    relatedSlugs: ['pm-kisan-23vi-kist-2026-status-check', 'pm-kisan-payment-failed-status-2026'],
  },
  {
    slug: 'pm-kisan-land-seeding-status-check',
    title: 'Land Integration Pending Hai? Tranche Nahi Aayegi Agar...',
    desc: 'Ek baat yaad rakhna — Land Integration No hai to tranche ruk jaati hai. Bahut se cultivators ko pata hi nahi hota ki yeh check karna zaroori hai. Patwari se milo, form bharo, 15 din mein sab theek ho jaata hai. Tum bhi check kar lo.',
    ogTitle: 'Land Integration Fix — Pending, Rejected Solution',
    keywords: [
      'land integration status',
      'land integration pending fix',
      'पीएम किसान लैंड इंटीग्रेशन स्टेटस',
      'land record verification',
      'land linking status',
      'land integration kaise kare',
      'zameen integration',
      'land integration rejected fix',
    ],
    component: 'PmKisanLandSeedingStatusCheck',
    category: 'status-check',
    publishedTime: '2026-03-10T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 8,
    schemes: ['pm-kisan'],
    ogImage: '/images/pm-kisan-land-seeding-status-check.webp',
    relatedSlugs: ['pm-kisan-payment-failed-status-2026', 'pm-kisan-correction-deactivate-block-guide-2026'],
  },
  {
    slug: 'pm-kisan-name-correction-online-2026',
    title: 'Biometric Credential Se Naam Match Nahi Ho Raha? Yeh Karo',
    desc: 'Biometric credential mein naam alag hai, bank mein alag, portal mein alag — to payment fail ho jaati hai. Common problem hai. Naam correction karo, 10 din mein sab theek. Online ya CSC se — dono tarike hain.',
    ogTitle: 'Naam Correction — Biometric Credential Match Karo',
    keywords: [
      'name correction agrarian welfare',
      'biometric credential name mismatch',
      'पीएम किसान नाम सुधार 2026',
      'naam theek karo',
      'name update scheme',
      'naam correction online',
      'biometric credential naam match nahi ho raha',
    ],
    component: 'PmKisanNameCorrectionOnline2026',
    category: 'correction',
    publishedTime: '2026-03-15T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 7,
    schemes: ['pm-kisan'],
    ogImage: '/images/pm-kisan-name-correction-online-2026.webp',
    relatedSlugs: ['pm-kisan-correction-deactivate-block-guide-2026', 'pm-kisan-mobile-number-change'],
  },
  {
    slug: 'pm-kisan-payment-failed-status-2026',
    title: 'Paisa Nahi Aaya? Payment Fail Kyun Hua — 5 Reasons',
    desc: 'Status check kiya to "Payment Failed" dikh raha hai? Pareshan mat ho. 5 main reasons hote hain — biometric credential mismatch, NPCI error, bank issue, aur do aur. Har ek ka solution hai. Padho, fix karo.',
    ogTitle: 'Payment Failed — 5 Reasons Aur Fix',
    keywords: [
      'agrarian welfare payment failed 2026',
      'NPCI error fix',
      'पीएम किसान पेमेंट फेल 2026',
      'payment error solution',
      'bank issue fix',
      'payment fail kyun hua',
      'paisa nahi aaya',
      'payment failed solution',
    ],
    component: 'PmKisanPaymentFailedStatus2026',
    category: 'payment',
    publishedTime: '2026-03-20T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 8,
    schemes: ['pm-kisan'],
    banks: ['sbi', 'pnb', 'bob'],
    ogImage: '/images/pm-kisan-payment-failed-status-2026.webp',
    relatedSlugs: ['pm-kisan-land-seeding-status-check', 'pm-kisan-name-correction-online-2026', 'pm-kisan-ekyc-online-2026'],
  },
  {
    slug: 'pm-kisan-problems-solution-guide-2026',
    title: '10 Badi Problems Aur Unka Seedha Hal',
    desc: 'RFT Signed, PFMS Pending, Payment Fail — yeh sab sunke pareshan ho? Har problem ka solution hai. Real examples ke saath samjhaya hai. Ek baar padh lo, phir kisi se puchne ki zaroorat nahi.',
    ogTitle: 'Agrarian Welfare 10 Problems — Sab Fix Karo',
    keywords: [
      'agrarian welfare problems solution',
      'RFT signed meaning',
      'PFMS pending fix',
      'पीएम किसान समस्या समाधान 2026',
      'scheme issues fix',
      'RFT matlab',
      'PFMS pending kya hai',
      'sabse badi problems',
    ],
    component: 'PmKisanProblemsSolutionGuide2026',
    category: 'payment',
    publishedTime: '2026-03-25T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 10,
    schemes: ['pm-kisan'],
    ogImage: '/images/pm-kisan-problems-solution-guide-2026.webp',
    relatedSlugs: ['pm-kisan-payment-failed-status-2026', 'pm-kisan-fto-generated-ka-matlab-kya-hai'],
  },
  {
    slug: 'pm-kisan-registration-online-2026',
    title: 'Naye Cultivator Ho? Enrollment Kaise Karein?',
    desc: 'Agrarian welfare mein naye ho to confusion hota hai — "yeh sab complicated hai". Par actually simple hai. Online form bharo, documents upload karo, 15 minute mein ho jaata hai. Tum bhi kar sakte ho. Bas yeh padho pehle.',
    ogTitle: 'Agrarian Welfare New Enrollment 2026 — Step by Step',
    keywords: [
      'agrarian welfare enrollment online 2026',
      'new cultivator enrollment',
      'पीएम किसान रजिस्ट्रेशन ऑनलाइन 2026',
      'scheme apply online',
      'enrollment form fill',
      'naya enrollment kaise kare',
      'eligibility criteria',
      'required documents',
    ],
    component: 'PmKisanRegistrationOnline2026',
    category: 'registration',
    publishedTime: '2026-04-01T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 9,
    schemes: ['pm-kisan'],
    ogImage: '/images/pm-kisan-registration-online-2026.webp',
    relatedSlugs: ['pm-kisan-ekyc-online-2026', 'pm-kisan-self-registered-status-check'],
  },
  {
    slug: 'pm-kisan-rejected-list-2026',
    title: 'Rejected Roster Mein Naam Hai? Fix Kaise Karein?',
    desc: 'Naam rejected roster mein hai to tension hoti hai. Common reason — land records galat hote hain. Patwari se milo, documents theek karo, 20 din mein sab clear ho jaata hai. Tumhara bhi aisa hai to yeh padho.',
    ogTitle: 'Rejected Roster — Reason Aur Fix',
    keywords: [
      'rejected roster 2026',
      'rejection reason fix',
      'पीएम किसान रिजेक्टेड लिस्ट 2026',
      'application rejected solution',
      'fix rejection',
      'rejected roster mein naam',
      'rejection kaise fix kare',
      'rejected solution',
    ],
    component: 'PmKisanRejectedList2026',
    category: 'payment',
    publishedTime: '2026-04-10T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 7,
    schemes: ['pm-kisan'],
    ogImage: '/images/pm-kisan-rejected-list-2026.webp',
    relatedSlugs: ['pm-kisan-beneficiary-list-2026', 'pm-kisan-correction-deactivate-block-guide-2026'],
  },
  {
    slug: 'pmfby-crop-insurance-2026',
    title: 'Fasal Kharab Ho Gayi? Crop Protection Claim Kaise Karein?',
    desc: 'Fasal kharab ho gayi to crop protection claim kar sakte ho. Process thoda lamba hai — 45 din lagte hain — lekin paisa aa jaata hai. Claim kaise file karna hai, status kaise check karna hai, aur kab tak paisa milega — sab yahan hai.',
    ogTitle: 'Crop Protection Claim — Complete Guide',
    keywords: [
      'crop protection scheme claim',
      'fasal suraksha claim status',
      'प्रधानमंत्री फसल बीमा योजना क्लेम',
      'crop insurance 2026',
      'yield protection India',
      'fasal bima yojana',
      'crop protection claim kaise kare',
      'insurance claim status',
    ],
    component: 'PmfbyCropInsurance2026',
    category: 'farming',
    publishedTime: '2026-04-20T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 12,
    schemes: ['pmfby'],
    ogImage: '/images/pmfby-crop-insurance-2026.webp',
    relatedSlugs: ['soil-health-card-complete-guide-2026', 'nano-dap-500ml-price-in-india-2026'],
  },
  {
    slug: 'pm-kisan-23vi-kist-2026-status-check',
    title: '23vi Tranche Aayi Ya Nahi? Abhi Verify Karo',
    desc: '23vi tranche ka wait hai? Status verify karna simple hai. Mobile se check karo — biometric credential number dalo, OTP verify karo, 2 minute mein pata chal jaata hai. Mobile, biometric credential, ya enrollment ID — koi bhi use kar sakte ho.',
    ogTitle: '23vi Tranche Status — Abhi Verify Karo',
    keywords: [
      '23vi tranche status 2026',
      'agrarian welfare verification',
      'पीएम किसान 23वीं ट्रांche स्टेटस 2026',
      '23rd tranche status',
      'benefit payment 2026',
      '23vi tranche kab aayegi',
      'tranche status check',
    ],
    component: 'PmKisan23viKistStatusCheck2026',
    category: 'status-check',
    publishedTime: '2026-04-01T00:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 7,
    schemes: ['pm-kisan'],
    ogImage: '/images/pm-kisan-23vi-kist-status-check-2026.webp',
    relatedSlugs: ['pm-kisan-ekyc-online-2026', 'pm-kisan-payment-failed-status-2026', 'pm-kisan-24vi-kist'],
  },
  {
    slug: 'kisan-credit-card-online-apply-2026',
    title: 'Credit Facility Card Banwana Hai? Online Apply Kaise Karein?',
    desc: 'Credit facility card hai to ₹5 lakh tak loan mil sakta hai, interest rate sirf 4%. Online apply karo, bank jao, 10 din mein card aa jaata hai. Eligibility, documents, sab kuch yahan hai.',
    ogTitle: 'Credit Facility Card Online Apply — ₹5 Lakh Loan',
    keywords: [
      'credit facility card online apply 2026',
      'KCC apply online',
      'credit card eligibility 2026',
      'किसान क्रेडिट कार्ड ऑनलाइन अप्लाई 2026',
      'credit limit',
      'interest rate subsidized',
      'credit card kaise banaye',
      'required documents',
    ],
    component: 'KisanCreditCardOnlineApply2026',
    category: 'loan',
    publishedTime: '2026-06-01T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 9,
    banks: ['sbi', 'pnb', 'bob', 'cooperative'],
    schemes: ['kcc'],
    ogImage: '/images/kisan-credit-card-apply-2026.webp',
    relatedSlugs: ['kisan-rin-kaha-se-le-2026', 'kisan-tractor-loan-2026'],
  },
  {
    slug: 'pm-kisan-fto-generated-ka-matlab-kya-hai',
    title: 'FTO Generated — Iska Matlab Kya Hai? Aasan Bhasha Mein',
    desc: 'FTO Generated, FTO Pending, Payment Order — yeh sab sunke confused ho? FTO matlab Fund Transfer Order. Sarkar ne paisa bhejne ka order de diya hai. Ab bank process karega. Simple hai, padho samajh jaoge.',
    ogTitle: 'FTO Generated Matlab — Aasan Guide',
    keywords: [
      'FTO generated meaning',
      'fund transfer order status',
      'एफटीओ जेनरेटेड क्या होता है',
      'FTO status check',
      'FTO full form',
      'FTO ka matlab',
      'FTO pending fix',
      'payment order status',
    ],
    component: 'PmKisanFtoGeneratedKaMatlabKyaHai',
    category: 'status-check',
    publishedTime: '2026-06-23T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 6,
    schemes: ['pm-kisan'],
    ogImage: '/images/pm-kisan-fto-generated-featured-image-kisanstatus.webp',
    relatedSlugs: ['pm-kisan-problems-solution-guide-2026', 'pm-kisan-payment-failed-status-2026'],
  },
  {
    slug: 'nano-dap-500ml-price-in-india-2026',
    title: 'Nano DAP 500ml Ki Kimat Kitni Hai? Kahan Milega?',
    desc: 'Nano DAP ki baat suni thi par kimat nahi pata thi. IFFCO ki website check karo, local dealer se puchho — 500ml ki bottle ₹280-320 ke beech hai. Use karna bhi seekho. Benefits bhi hain — kam quantity, zyada asar.',
    ogTitle: 'Nano DAP 500ml Price — Kahan Se Khariden?',
    keywords: [
      'Nano DAP 500ml price India 2026',
      'IFFCO Nano DAP price',
      'नैनो डीएपी 500ml कीमत 2026',
      'Nano DAP use kaise karein',
      'Nano DAP benefits',
      'Nano DAP kahan milega',
      'IFFCO Nano DAP khariden',
      'Nano DAP price today',
    ],
    component: 'NanoDap500mlPriceInIndia2026',
    category: 'farming',
    publishedTime: '2026-06-24T08:00:00+05:30',
    modifiedTime: '2026-06-24T08:00:00+05:30',
    readingTime: 7,
    schemes: ['nano-dap'],
    ogImage: '/images/nano-dap-500ml-price-india-2026.webp',
    relatedSlugs: ['soil-health-card-complete-guide-2026', 'pmfby-crop-insurance-2026'],
  },
  {
    slug: 'pm-kisan-24vi-kist',
    title: '24vi Tranche Kab Aayegi? Date Aur Status Guide',
    desc: '23vi to aa gayi, ab 24vi ka wait hai. October 2026 tak aane ki umeed hai. Par digital verification zaroori hai, land integration bhi. Apna status dekh lo — agar kuch pending hai to abhi fix kar lo.',
    ogTitle: '24vi Tranche — Kab Aayegi?',
    keywords: [
      '24vi tranche 2026',
      'next tranche date 2026',
      'पीएम किसान 24वीं ट्रांche 2026',
      '24th tranche date',
      'upcoming payment',
      '24vi tranche kab aayegi',
      'tranche status check',
    ],
    component: 'PmKisan24viKist2026',
    category: 'status-check',
    publishedTime: '2026-06-24T08:00:00+05:30',
    modifiedTime: '2026-06-24T08:00:00+05:30',
    readingTime: 6,
    schemes: ['pm-kisan'],
    ogImage: '/images/pm-kisan-24vi-kist-october-2026.webp',
    relatedSlugs: ['pm-kisan-23vi-kist-2026-status-check', 'pm-kisan-ekyc-online-2026'],
  },
  {
    slug: 'agristack-kya-hai',
    title: 'AgriStack Kya Hai? Cultivator ID Aur Agrarian Welfare Connection',
    desc: 'AgriStack ka naam suna hai? Yeh digital cultivator ID hai. Agrarian welfare se connected hai. Har cultivator ko ek unique ID milegi. Benefits bahut hain — loan, insurance, schemes — sab ek jagah. Jaan lo, future mein kaam aayega.',
    ogTitle: 'AgriStack Kya Hai — Cultivator ID Complete Guide',
    keywords: [
      'AgriStack kya hai',
      'AgriStack 2026',
      'cultivator ID AgriStack',
      'एग्रीस्टैक क्या है',
      'digital cultivator ID India',
      'AgriStack enrollment',
      'AgriStack benefits',
      'agrarian welfare AgriStack connection',
    ],
    component: 'AgriStackKyaHai2026',
    category: 'farming',
    publishedTime: '2026-06-24T08:00:00+05:30',
    modifiedTime: '2026-06-24T08:00:00+05:30',
    readingTime: 10,
    schemes: ['agristack', 'pm-kisan'],
    ogImage: '/images/articles/agristack-kya-hai/infographic.webp',
    relatedSlugs: ['pm-kisan-registration-online-2026', 'pm-kisan-complete-guide'],
  },
  {
    slug: 'pm-kisan-mobile-number-change',
    title: 'Contact Number Badalna Hai? Online Ya CSC Se Update Karo',
    desc: 'Purana number band ho gaya to OTP nahi aa raha. CSC jao, form bharo, 7 din mein naya number update ho jaata hai. Online bhi kar sakte ho. Dono tarike hain. Tum bhi kar lo, mushkil nahi hai.',
    ogTitle: 'Contact Number Change — Complete Guide',
    keywords: [
      'contact number change 2026',
      'mobile number update scheme',
      'पीएम किसान मोबाइल नंबर बदलें 2026',
      'contact update',
      'number change process',
      'mobile number kaise badle',
      'contact update online',
    ],
    component: 'PmKisanMobileNumberChange2026',
    category: 'correction',
    publishedTime: '2026-06-24T08:00:00+05:30',
    modifiedTime: '2026-06-24T08:00:00+05:30',
    readingTime: 6,
    schemes: ['pm-kisan'],
    ogImage: '/images/pm-kisan-mobile-bank-aadhaar-update-banner-website.webp',
    relatedSlugs: ['pm-kisan-ekyc-online-2026', 'pm-kisan-name-correction-online-2026'],
  },
  {
    slug: 'pm-kisan-complete-guide',
    title: 'Agrarian Welfare — Sab Problems Ka Ek Saath Hal',
    desc: 'Kabhi status verify, kabhi digital verification, kabhi payment fail — har problem alag jagah dhundhni padti thi. Sab ek jagah ikattha kiya hai. Yeh master guide hai. Ek baar padh lo, phir kisi se puchne ki zaroorat nahi.',
    ogTitle: 'Agrarian Welfare Complete Guide — Sab Problems Fix',
    keywords: [
      'agrarian welfare complete guide 2026',
      'all problems solution',
      'पीएम किसान पूर्ण गाइड',
      'comprehensive guide',
      'master guide',
      'sab problems fix',
      'complete solution',
    ],
    component: 'PmKisanCompleteGuide',
    category: 'status-check',
    publishedTime: '2026-06-27T08:00:00+05:30',
    modifiedTime: '2026-06-27T08:00:00+05:30',
    readingTime: 15,
    schemes: ['pm-kisan'],
    ogImage: '/images/pm-kisan-status-check-hero.webp',
    relatedSlugs: ['pm-kisan-23vi-kist-2026-status-check', 'pm-kisan-ekyc-online-2026', 'pm-kisan-payment-failed-status-2026'],
  },
  {
    slug: 'soil-health-card-complete-guide-2026',
    title: 'Soil Analysis Card — Mitti Test Karwane Ka Pura Process',
    desc: 'Mitti test karwane ka soch rahe ho? CSC se form lo, sample do, 15 din mein report aa jaati hai. Pata chalta hai ki mitti mein kya kami hai. Fertilizer change karo, fasal achhi hoti hai. Tum bhi try karo.',
    ogTitle: 'Soil Analysis Card Complete Guide — Sab Kuch Jaano',
    keywords: [
      'soil analysis card complete guide 2026',
      'soil analysis card download',
      'मिट्टी स्वास्थ्य कार्ड 2026',
      'soil testing registration',
      'soil analysis status check',
      'mitti test kaise karaye',
      'soil analysis card kya hai',
      'soil report PDF',
    ],
    component: 'SoilHealthCardCompleteGuide2026',
    category: 'farming',
    publishedTime: '2026-06-27T08:00:00+05:30',
    modifiedTime: '2026-06-27T08:00:00+05:30',
    readingTime: 8,
    schemes: ['soil-health-card'],
    ogImage: '/images/soil-health-card-complete-guide-2026.webp',
    relatedSlugs: ['nano-dap-500ml-price-in-india-2026', 'pmfby-crop-insurance-2026'],
  },
  {
    slug: 'pm-kisan-self-registered-status-check',
    title: 'Khud Se Enrollment Kiya? Status Kaise Verify Karein?',
    desc: 'Khud se apply kiya hai lekin status nahi dikh raha? Portal par jao, enrollment ID dalo, status aa jaata hai. Tum bhi try karo. Simple hai.',
    ogTitle: 'Self-Enrolled Status — Verify Karo',
    keywords: [
      'self enrolled cultivator status check',
      'enrollment status verify',
      'self enrollment status',
      'portal status check',
      'पीएम किसान सेल्फ रजिस्टर्ड स्टेटस',
      'self enrollment verification',
      'self enrolled kaise check kare',
    ],
    component: 'PmKisanSelfRegisteredStatusCheck',
    category: 'status-check',
    publishedTime: '2026-06-28T08:00:00+05:30',
    modifiedTime: '2026-06-28T08:00:00+05:30',
    readingTime: 7,
    schemes: ['pm-kisan'],
    ogImage: '/images/pm-kisan-self-registered-status/pm-kisan-portal-homepage.webp',
    relatedSlugs: ['pm-kisan-registration-online-2026', 'pm-kisan-23vi-kist-2026-status-check'],
  },
  {
    slug: 'pm-kisan-status-check-online-2026-complete-guide',
    title: 'Status Verify Online — Real Cultivator Guide With Screenshots',
    desc: 'Status verify karna hai? Biometric credential se karo, mobile se karo, enrollment ID se bhi kar sakte ho. Screenshots bhi hain. Common errors aur unka fix bhi. Padho, try karo.',
    ogTitle: 'Status Verification — Real Cultivator Experience',
    keywords: [
      'status verification 2026',
      'online status check',
      'biometric credential verification',
      'mobile number check',
      'पीएम किसान स्टेटस चेक',
      'beneficiary status',
      'status verify kaise kare',
      'status online',
    ],
    component: 'PmKisanStatusCheckOnline2026CompleteGuide',
    category: 'status-check',
    publishedTime: '2026-06-29T08:00:00+05:30',
    modifiedTime: '2026-06-29T08:00:00+05:30',
    readingTime: 10,
    schemes: ['pm-kisan'],
    ogImage: '/images/pm-kisan-status-check-tool-interface.webp',
    relatedSlugs: ['pm-kisan-23vi-kist-2026-status-check', 'pm-kisan-complete-guide'],
  },
  {
    slug: 'mandi-bhav-today',
    title: 'Aaj Ka Mandi Bhav — Sabzi Aur Fruit Rates (Live Update)',
    desc: 'Aloo ₹20-24, pyaaz ₹26-30, tamatar ₹38-45. Daily updated rates. Roz update karta hoon. Tum bhi dekh lo, bechne se pehle jaan lo.',
    ogTitle: 'Aaj Ka Mandi Bhav — Live Sabzi Aur Fruit Rates',
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
    ogImage: '/images/article/mandi-bhav-today.webp',
  },
] as const;

// ═══════════════════════════════════════════════════════════
// LOOKUP MAP (memoized & frozen)
// ═══════════════════════════════════════════════════════════

export const ARTICLES_MAP: Readonly<Record<string, ArticleMeta>> = Object.freeze(
  Object.fromEntries(ARTICLES.map((a) => [a.slug, a]))
);

// ═══════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════

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

/** Related articles: explicit relatedSlugs first, then fallback to same category */
export function getRelatedArticles(slug: string, limit: number = 3): readonly ArticleMeta[] {
  const current = getArticleBySlug(slug);
  if (!current) return [];

  // Prefer explicit related slugs
  if (current.relatedSlugs && current.relatedSlugs.length > 0) {
    const explicit = current.relatedSlugs
      .map((s) => ARTICLES_MAP[s])
      .filter(Boolean) as ArticleMeta[];
    if (explicit.length >= limit) return explicit.slice(0, limit);

    // Fill remaining from same category
    const remaining = ARTICLES.filter(
      (a) => a.slug !== slug && a.category === current.category && !current.relatedSlugs?.includes(a.slug)
    );
    return [...explicit, ...remaining].slice(0, limit);
  }

  // Fallback: same category
  return ARTICLES.filter((a) => a.slug !== slug && a.category === current.category).slice(0, limit);
}

export function getReadingTime(slug: string): string {
  const mins = getArticleBySlug(slug)?.readingTime;
  return mins ? `${mins} min read` : '5 min read';
}

// ── NEW: Programmatic SEO helpers ──

/** Get all articles tagged with a specific scheme */
export function getArticlesByScheme(scheme: string): readonly ArticleMeta[] {
  return ARTICLES.filter((a) => a.schemes?.includes(scheme));
}

/** Get all articles tagged with a specific bank */
export function getArticlesByBank(bank: string): readonly ArticleMeta[] {
  return ARTICLES.filter((a) => a.banks?.includes(bank));
}

/** Get all articles tagged with a specific state */
export function getArticlesByState(state: string): readonly ArticleMeta[] {
  return ARTICLES.filter((a) => a.states?.includes(state));
}

/** Get all unique scheme slugs across all articles */
export function getAllSchemes(): readonly string[] {
  const set = new Set<string>();
  ARTICLES.forEach((a) => a.schemes?.forEach((s) => set.add(s)));
  return Array.from(set).sort();
}

/** Get all unique bank slugs across all articles */
export function getAllBanks(): readonly string[] {
  const set = new Set<string>();
  ARTICLES.forEach((a) => a.banks?.forEach((b) => set.add(b)));
  return Array.from(set).sort();
}

/** Get all unique state slugs across all articles */
export function getAllStates(): readonly string[] {
  const set = new Set<string>();
  ARTICLES.forEach((a) => a.states?.forEach((s) => set.add(s)));
  return Array.from(set).sort();
}