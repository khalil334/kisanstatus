export const CATEGORIES = {
  'status-check': {
    name: 'Verification & Status',
    nameHi: 'सत्यापन और स्थिति',
    description: 'Kist verification, beneficiary roster, FTO, eKYC, land seeding guides',
    descriptionHi: 'किस्त सत्यापन, लाभार्थी सूची, एफटीओ, ईकेवाईसी, भूमि सीडिंग गाइड',
    icon: '📊',
    color: 'blue',
  },
  'loan': {
    name: 'Credit & Loans',
    nameHi: 'ऋण और क्रेडिट',
    description: 'KCC loan, farm equipment loan, and bank credit guides',
    descriptionHi: 'केसीसी लोन, कृषि उपकरण ऋण, और बैंक क्रेडिट गाइड',
    icon: '💰',
    color: 'amber',
  },
  'farming': {
    name: 'Farming & Schemes',
    nameHi: 'खेती और योजनाएं',
    description: 'Soil analysis, crop insurance, AgriStack, Nano DAP and other schemes',
    descriptionHi: 'मृदा विश्लेषण, फसल बीमा, एग्रीस्टैक, नैनो डीएपी और अन्य योजनाएं',
    icon: '🌱',
    color: 'emerald',
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
  ogImage?: string;
  relatedSlugs?: readonly string[];
}

export const ARTICLES: readonly ArticleMeta[] = [
  // ── EXISTING ARTICLES (18) ───────────────────────────────────
  {
    slug: 'KisanRinKahaSeLe2026',
    title: 'Kisan Loan Kahan Se Milega 2026? KCC, Bank, CSC — Puri Jankari',
    desc: 'Loan chahiye to confusion hota hai — SBI, cooperative, CSC, har jagah process alag. Is guide mein sab kuch hai.',
    ogTitle: 'Kisan Loan Guide 2026 — Complete Jankari Hindi Mein',
    keywords: ['kisan loan kahan se milega 2026', 'kisan credit card', 'kisan loan 2026', 'SBI kisan loan', 'CSC center loan', 'कृषि ऋण कहाँ से लें', 'किसान लोन 2026'],
    component: 'KisanRinKahaSeLe2026',
    category: 'loan',
    publishedTime: '2026-01-10T08:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 8,
    banks: ['sbi', 'pnb', 'bob', 'cooperative'],
    schemes: ['kcc'],
    ogImage: '/images/kisan-rin-kaha-se-le-2026.webp',
    relatedSlugs: ['KisanCreditCardOnlineApply2026', 'KisanTractorLoan2026'],
  },
  {
    slug: 'KisanTractorLoan2026',
    title: 'Tractor Loan Bina Down Payment — Kya Yeh Sach Mein Mil Sakta Hai?',
    desc: 'Bina down payment ke tractor loan? Mahindra Finance, TATA Capital, aur state banks mein scheme hai.',
    ogTitle: 'Tractor Loan Bina Down Payment 2026 — Puri Jankari',
    keywords: ['tractor loan 2026', 'tractor finance 2026', 'ट्रैक्टर लोन बिना डाउन पेमेंट', 'किसान ट्रैक्टर लोन 2026'],
    component: 'KisanTractorLoan2026',
    category: 'loan',
    publishedTime: '2026-01-20T08:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 10,
    banks: ['mahindra-finance', 'tata-capital'],
    schemes: ['nabard-tractor'],
    ogImage: '/images/articles/kisan-tractor-loan-2026/hero-2.webp',
    relatedSlugs: ['KisanRinKahaSeLe2026', 'KisanCreditCardOnlineApply2026'],
  },
  {
    slug: 'PmKisanBeneficiaryList2026',
    title: 'PM Kisan Beneficiary List 2026: Naam Check Karo, Village Wise List Dekho, PDF Download',
    desc: 'Beneficiary list mein naam check karo, gaon ki poori village wise list dekho, PDF download karo. 7 rejection reasons + fix bhi.',
    ogTitle: 'PM Kisan Beneficiary List 2026 — Complete Guide with Village Wise List',
    keywords: ['pm kisan beneficiary list 2026', 'pm kisan village wise roster', 'pm kisan naam check karo', 'पीएम किसान लाभार्थी सूची 2026', 'pm kisan beneficiary list pdf download', 'pm kisan gaon wise list'],
    component: 'PmKisanBeneficiaryList2026',
    category: 'status-check',
    publishedTime: '2026-02-10T08:00:00+05:30',
    modifiedTime: '2026-07-09T08:00:00+05:30',
    readingTime: 15,
    schemes: ['pm-kisan'],
    ogImage: '/images/pm-kisan-beneficiary-status-kisanstatus.webp',
    relatedSlugs: ['PmKisan24viKist2026', 'PmKisanMasterGuide2026'],
  },
  {
    slug: 'PmKisanEkycOnline2026',
    title: 'PM Kisan eKYC Online 2026: Ghar Baithe 2 Minute Mein Complete Karo',
    desc: 'eKYC mandatory hai bina iske kist nahi milegi. OTP ya CSC biometric se free mein karo.',
    ogTitle: 'PM Kisan eKYC Online 2026 — Free Verification Guide',
    keywords: ['pm kisan ekyc online 2026', 'pm kisan ekyc kaise kare', 'ekyc otp verification', 'csc biometric ekyc', 'पीएम किसान ईकेवाईसी'],
    component: 'PmKisanEkycOnline2026',
    category: 'status-check',
    publishedTime: '2026-03-15T08:00:00+05:30',
    modifiedTime: '2026-07-06T08:00:00+05:30',
    readingTime: 8,
    schemes: ['pm-kisan'],
    ogImage: '/images/articles/pm-kisan-ekyc-online-2026/otp-vs-biometric.webp',
    relatedSlugs: ['PmKisanMasterGuide2026', 'PmKisan24viKist2026', 'PmKisanBeneficiaryList2026'],
  },
  {
    slug: 'PmfbyCropInsurance2026',
    title: 'PMFBY Crop Insurance 2026: Sirf 2% Premium Mein Fasal Suraksha',
    desc: 'Fasal kharab ho toh compensation milega. Kharif 2%, Rabi 1.5% premium. Enrollment deadline mat bhoolo.',
    ogTitle: 'PMFBY Crop Insurance 2026 — Complete Guide Hindi Mein',
    keywords: ['pmfby crop insurance 2026', 'fasal bima yojana', 'crop insurance claim', 'pmfby enrollment', 'प्रधानमंत्री फसल बीमा योजना'],
    component: 'PmfbyCropInsurance2026',
    category: 'farming',
    publishedTime: '2026-04-01T08:00:00+05:30',
    modifiedTime: '2026-07-06T08:00:00+05:30',
    readingTime: 10,
    schemes: ['pmfby'],
    ogImage: '/images/articles/pmfby-crop-insurance-2026/hero-image.webp',
    relatedSlugs: ['PmKisanMasterGuide2026', 'soil-health-card-complete-guide-2026', 'KisanCreditCardOnlineApply2026'],
  },
  {
    slug: 'KisanCreditCardOnlineApply2026',
    title: 'Kisan Credit Card Online Apply 2026 — ₹5 Lakh Loan, 4% Interest',
    desc: 'KCC hai to ₹5 lakh tak loan mil sakta hai, interest rate sirf 4%.',
    ogTitle: 'Kisan Credit Card Online Apply — ₹5 Lakh Loan 2026',
    keywords: ['kisan credit card online apply 2026', 'KCC apply online', 'किसान क्रेडिट कार्ड ऑनलाइन अप्लाई 2026'],
    component: 'KisanCreditCardOnlineApply2026',
    category: 'loan',
    publishedTime: '2026-06-01T08:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 9,
    banks: ['sbi', 'pnb', 'bob', 'cooperative'],
    schemes: ['kcc'],
    ogImage: '/images/kisan-credit-card-apply-online-hero.webp',
    relatedSlugs: ['KisanRinKahaSeLe2026', 'KisanTractorLoan2026'],
  },
  {
    slug: 'pm-kisan-fto-generated-ka-matlab-kya-hai',
    title: 'FTO Generated Ka Matlab Kya Hai? PM Kisan Status Explained',
    desc: 'FTO Generated, FTO Pending — confused ho? FTO matlab Fund Transfer Order.',
    ogTitle: 'FTO Generated Matlab — PM Kisan Status Guide',
    keywords: ['FTO generated meaning', 'fund transfer order status', 'एफटीओ जेनरेटेड क्या होता है'],
    component: 'pm-kisan-fto-generated-ka-matlab-kya-hai',
    category: 'status-check',
    publishedTime: '2026-06-23T08:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 6,
    schemes: ['pm-kisan'],
    ogImage: '/images/pm-kisan-fto-generated-featured-image-kisanstatus.webp',
    relatedSlugs: ['PmKisan24viKist2026', 'PmKisanBeneficiaryList2026'],
  },
  {
    slug: 'NanoDap500mlPriceInIndia2026',
    title: 'Nano DAP 500ml Price India 2026 — IFFCO Rate Aur Kahan Milega',
    desc: 'IFFCO Nano DAP 500ml bottle ₹280-320 ke beech hai.',
    ogTitle: 'Nano DAP 500ml Price 2026 — Kahan Se Khariden?',
    keywords: ['Nano DAP 500ml price India 2026', 'IFFCO Nano DAP price', 'नैनो डीएपी 500ml कीमत 2026'],
    component: 'NanoDap500mlPriceInIndia2026',
    category: 'farming',
    publishedTime: '2026-06-24T08:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 7,
    schemes: ['nano-dap'],
    ogImage: '/images/nano-dap-500ml-bottle-hero.webp',
    relatedSlugs: ['soil-health-card-complete-guide-2026', 'AgriStackKyaHai2026'],
  },
  {
    slug: 'PmKisan24viKist2026',
    title: 'PM Kisan 24vi Kist Kab Aayegi? Date Aur Status Guide 2026',
    desc: '23vi aa gayi, ab 24vi ka wait. October 2026 tak aane ki umeed.',
    ogTitle: 'PM Kisan 24vi Kist — Kab Aayegi 2026?',
    keywords: ['pm kisan 24vi kist 2026', 'next kist date 2026', 'पीएम किसान 24वीं किस्त 2026'],
    component: 'PmKisan24viKist2026',
    category: 'status-check',
    publishedTime: '2026-06-24T08:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 6,
    schemes: ['pm-kisan'],
    ogImage: '/images/pm-kisan-24vi-kist-october-2026.webp',
    relatedSlugs: ['PmKisanBeneficiaryList2026', 'pm-kisan-fto-generated-ka-matlab-kya-hai'],
  },
  {
    slug: 'AgriStackKyaHai2026',
    title: 'AgriStack Kya Hai? Digital Kisan ID Aur PM Kisan Connection',
    desc: 'AgriStack digital kisan ID hai. PM Kisan se connected hai.',
    ogTitle: 'AgriStack Kya Hai — Digital Kisan ID Complete Guide',
    keywords: ['AgriStack kya hai', 'AgriStack 2026', 'digital kisan ID AgriStack', 'एग्रीस्टैक क्या है'],
    component: 'AgriStackKyaHai2026',
    category: 'farming',
    publishedTime: '2026-06-24T08:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 10,
    schemes: ['agristack', 'pm-kisan'],
    ogImage: '/images/articles/agristack-kya-hai/infographic.webp',
    relatedSlugs: ['NanoDap500mlPriceInIndia2026', 'soil-health-card-complete-guide-2026'],
  },
  {
    slug: 'PmKisanMasterGuide2026',
    title: 'PM Kisan Complete Guide 2026 — Sab Problems Ka Ek Saath Hal',
    desc: 'Status verify, eKYC, payment fail — sab ek jagah.',
    ogTitle: 'PM Kisan Complete Guide — Sab Problems Fix',
    keywords: ['pm kisan complete guide 2026', 'all problems solution', 'पीएम किसान पूर्ण गाइड'],
    component: 'PmKisanMasterGuide2026',
    category: 'status-check',
    publishedTime: '2026-06-27T08:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 15,
    schemes: ['pm-kisan'],
    ogImage: '/images/articles/pm-kisan-complete-guide/hero.webp',
    relatedSlugs: ['PmKisan24viKist2026', 'PmKisanBeneficiaryList2026'],
  },
  {
    slug: 'soil-health-card-complete-guide-2026',
    title: 'Soil Health Card 2026 — Mitti Test Karwane Ka Pura Process',
    desc: 'Mitti test karwao — CSC se form lo, sample do, 15 din mein report.',
    ogTitle: 'Soil Health Card Complete Guide 2026 — Sab Kuch Jaano',
    keywords: ['soil health card complete guide 2026', 'soil health card download', 'मिट्टी स्वास्थ्य कार्ड 2026'],
    component: 'soil-health-card-complete-guide-2026',
    category: 'farming',
    publishedTime: '2026-06-27T08:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 8,
    schemes: ['soil-health-card'],
    ogImage: '/images/articles/soil-health-card-complete-guide-2026/hero.webp',
    relatedSlugs: ['NanoDap500mlPriceInIndia2026', 'AgriStackKyaHai2026'],
  },
  {
    slug: 'mandi-bhav-today',
    title: 'Aaj Ka Mandi Bhav — Sabzi Aur Fruit Rates (Daily Update)',
    desc: 'Aloo ₹20-24, pyaaz ₹26-30, tamatar ₹38-45. Daily updated rates.',
    ogTitle: 'Aaj Ka Mandi Bhav — Live Sabzi Aur Fruit Rates',
    keywords: ['aaj ka mandi bhav', 'mandi bhav today hindi', 'aaj ke sabzi bhav'],
    component: 'mandi-bhav-today',
    category: 'mandi',
    publishedTime: '2026-06-30T09:30:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 5,
    ogImage: '/images/articles/mandi-bhav-today/mandi-fresh-vegetables-mixed.webp',
  },
  {
    slug: 'PmKisanPaymentFailedFix2026',
    title: 'PM Kisan Payment Failed 2026: Bank Mein Paisa Kyun Nahi Aaya? 7 Real Reasons + Turant Fix',
    desc: 'Payment failed dikh raha hai? Aadhaar seeding, IFSC, dormant account — 7 wajah aur turant fix ka tarika. Arrears bhi milenge.',
    ogTitle: 'PM Kisan Payment Failed Fix 2026 — Complete Troubleshooting Guide',
    keywords: ['pm kisan payment failed', 'payment fail fix', 'aadhaar seeding dbt', 'pm kisan paisa nahi aaya', 'payment rejected fix', 'पीएम किसान पेमेंट फेल'],
    component: 'PmKisanPaymentFailedFix2026',
    category: 'status-check',
    publishedTime: '2026-07-06T08:00:00+05:30',
    modifiedTime: '2026-07-06T08:00:00+05:30',
    readingTime: 9,
    schemes: ['pm-kisan'],
    ogImage: '/images/articles/pm-kisan-payment-failed-fix-2026/payment-failed-hero.webp',
    relatedSlugs: ['pm-kisan-fto-generated-ka-matlab-kya-hai', 'PmKisanMasterGuide2026', 'PmKisan24viKist2026'],
  },
  {
    slug: 'PmKisan25viKist2027',
    title: 'PM Kisan 25vi Kist 2027: Kab Aayegi, Kitni Milegi, Aur Abhi Se Kya Tayyari Karein',
    desc: '25vi kist expected Feb-Mar 2027 mein. ₹2,000 confirmed, increase possible. Abhi se eKYC, bank seeding, land records perfect karo.',
    ogTitle: 'PM Kisan 25vi Kist 2027 — Release Date, Amount & Preparation Guide',
    keywords: ['pm kisan 25vi kist 2027', '25vi kist kab aayegi', 'pm kisan next installment', '25vi kist amount', 'pm kisan feb 2027', 'पीएम किसान 25वीं किस्त 2027'],
    component: 'PmKisan25viKist2027',
    category: 'status-check',
    publishedTime: '2026-07-06T08:00:00+05:30',
    modifiedTime: '2026-07-06T08:00:00+05:30',
    readingTime: 8,
    schemes: ['pm-kisan'],
    ogImage: '/images/articles/pm-kisan-25vi-kist-2027/hero-25vi-kist.webp',
    relatedSlugs: ['PmKisan24viKist2026', 'PmKisanMasterGuide2026', 'PmKisanEkycOnline2026'],
  },
  {
    slug: 'pm-kisan-self-registered-status-check',
    title: 'PM Kisan Self Registration Status Check 2026: Ghar Baithe Jaano — Approved Hua Ya Nahi',
    desc: 'Self-registration karke bhool gaye? 7-10 din baad status check karna zaroori hai. Step-by-step guide + common problems + fix.',
    ogTitle: 'PM Kisan Self Registration Status Check 2026 — Complete Guide',
    keywords: ['pm kisan self registration status check', 'pm kisan self registered status', 'pm kisan registration approval check', 'self registration pending', 'pm kisan status ghar baithe', 'पीएम किसान सेल्फ रजिस्ट्रेशन स्टेटस'],
    component: 'PmKisanSelfRegisteredStatusCheck',
    category: 'status-check',
    publishedTime: '2026-01-15T08:00:00+05:30',
    modifiedTime: '2026-07-07T08:00:00+05:30',
    readingTime: 10,
    schemes: ['pm-kisan'],
    ogImage: '/images/articles/pm-kisan-complete-guide/hero.webp',
    relatedSlugs: ['PmKisan24viKist2026', 'PmKisanMasterGuide2026', 'PmKisanBeneficiaryList2026', 'pm-kisan-fto-generated-ka-matlab-kya-hai'],
  },
  {
    slug: 'PmKisanCorrectionForm2026',
    title: 'PM Kisan Correction Form Kaise Bharein — Naam, Aadhaar, Bank Details Galat Hai To Kya Karein 2026',
    desc: 'Naam spelling galat, bank IFSC mismatch, Aadhaar seeding error? PM Kisan correction form bharne ka step-by-step tarika — portal se aur CSC dono. Ruki hui kist wapas milegi.',
    ogTitle: 'PM Kisan Correction Form 2026 — Naam, Bank, Aadhaar Fix Guide',
    keywords: [
      'pm kisan correction form kaise bhare', 'pm kisan naam correction online', 'pm kisan bank account update kaise kare',
      'pm kisan aadhaar seeding error fix', 'pm kisan self registered farmer correction', 'pm kisan farmer corner edit details',
      'pm kisan gender/DOB correction', 'pm kisan application rejected reason', 'pm kisan mobile number update',
      'pm kisan land record mismatch solution', 'pm kisan CSC se correction kaise kare', 'pm kisan name spelling mistake fix online',
      'pm kisan wrong ifsc code correction', 'pm kisan aadhaar link but payment failed', 'pm kisan edit bank details not working',
      'pm kisan correction form offline download', 'pm kisan self correction vs csc correction', 'pm kisan bank seeding pending meaning',
      'pm kisan correction ke baad kitne din mein paisa aayega', 'pm kisan mobile number change without old sim',
      'pm kisan beneficiary status inactive reason', 'pm kisan correction status check online', 'pm kisan name correction certificate format',
      'pm kisan edit aadhaar details otp not coming', 'pm kisan correction form pdf download', 'pm kisan bank account change without visiting branch',
    ],
    component: 'PmKisanCorrectionForm2026',
    category: 'status-check',
    publishedTime: '2026-07-08T08:00:00+05:30',
    modifiedTime: '2026-07-08T08:00:00+05:30',
    readingTime: 8,
    schemes: ['pm-kisan'],
    ogImage: '/images/articles/pm-kisan-correction-form-2026/pm-kisan-correction-hero.webp',
    relatedSlugs: ['PmKisanPaymentFailedFix2026', 'PmKisanMasterGuide2026', 'PmKisanEkycOnline2026', 'PmKisan24viKist2026'],
  },
  {
    slug: 'PmKusumYojanaSolarSubsidy2026',
    title: 'PM Kusum Yojana Solar Pump Subsidy Kaise Milegi — Kisano Ke Liye Complete Guide 2026',
    desc: 'Diesel pump band karo, solar pump lagao. 60% subsidy, zero bijli bill, 25 saal free paani. Eligibility, online apply, state-wise process, documents — sab kuch simple bhasha mein.',
    ogTitle: 'PM Kusum Solar Pump Subsidy 2026 — Complete Kisan Guide',
    keywords: [
      'pm kusum yojana solar pump subsidy', 'pm kusum yojana online apply kaise kare 2026', 'pm kusum yojana registration form kaise bhare',
      'solar pump subsidy apply kaise kare kisan', 'pm kusum yojana ka status kaise check kare', 'pm kusum yojana approval time kitna lagta hai',
      'pm kusum yojana eligibility criteria kya hai', 'solar pump subsidy ke liye kaunse document chahiye', 'pm kusum yojana ke liye kitni zameen chahiye',
      'pm kusum yojana land record requirement', 'pm kusum yojana mein kitni subsidy milti hai', '90 percent subsidy solar pump kaise milega',
      'pm kusum yojana subsidy amount state wise', 'solar pump ki price subsidy ke baad kitni hogi', 'pm kusum component a b c kya hai',
      'kusum yojana solar pump vs grid connected solar', '2kw 3kw 5kw solar pump subsidy price', 'pm kusum yojana rajasthan online apply',
      'pm kusum yojana up registration', 'pm kusum yojana mp online form', 'pm kusum yojana maharashtra apply kaise kare',
      'pm kusum yojana bihar solar pump', 'pm kusum yojana application reject kyu hota hai', 'solar pump subsidy paise kab tak milte hain',
      'pm kusum yojana bank loan kaise le', 'purana diesel pump se solar pump mein badlaw kaise kare', 'solar pump vs diesel pump kisan ke liye',
      'pm kusum yojana vs private solar company', 'kusum yojana component b standalone solar pump', 'pm kusum yojana land record verification',
      'solar pump subsidy scheme for farmers 2026', 'pm kusum yojana status check online', 'pm kusum yojana application rejected reasons',
      'solar pump vs diesel pump cost comparison', 'pm kusum yojana helpline number', 'bijli bill aayega kya solar pump pe',
      'vendor khud choose kar sakte hain kusum', 'application ke baad survey kab hota hai',
    ],
    component: 'PmKusumYojanaSolarSubsidy2026',
    category: 'farming',
    publishedTime: '2026-07-08T10:00:00+05:30',
    modifiedTime: '2026-07-08T10:00:00+05:30',
    readingTime: 12,
    schemes: ['pm-kusum'],
    ogImage: '/images/articles/pm-kusum-yojana-solar-subsidy-2026/solar-pump-hero.webp',
    relatedSlugs: ['KisanCreditCardOnlineApply2026', 'KisanTractorLoan2026', 'PmKisanMasterGuide2026', 'soil-health-card-complete-guide-2026'],
  },

  // ── NEW 10 PM KISAN RELATED ARTICLES ─────────────────────
  {
    slug: 'PmKisanLandSeedingForm',
    title: 'PM Kisan Land Seeding Form PDF Download: State Wise Process',
    desc: 'Land seeding form download karo — UP, Bihar, MP, Rajasthan ke state wise forms. Khasra-Khatauni details ke saath complete guide.',
    ogTitle: 'PM Kisan Land Seeding Form PDF Download — State Wise Complete Guide',
    keywords: [
      'pm kisan land seeding form pdf download', 'land seeding form state wise', 'pm kisan khasra khatauni form',
      'pm kisan land seeding form kaise bhare', 'land seeding no kaise fix kare', 'pm kisan khasra number kaise dale',
      'land seeding form patwari se kaise le', 'pm kisan land record mismatch solution', 'land seeding pending status fix',
      'pm kisan land seeding time limit', 'khasra khatauni details pm kisan', 'pm kisan land seeding online offline',
      'land seeding form rejection reason', 'pm kisan land seeding patwari contact', 'land seeding ke baad kitne din mein paisa aayega',
      'pm kisan land seeding document list', 'land seeding form fees csc', 'pm kisan land seeding state nodal officer',
    ],
    component: 'PmKisanLandSeedingForm',
    category: 'status-check',
    publishedTime: '2026-07-10T08:00:00+05:30',
    modifiedTime: '2026-07-10T08:00:00+05:30',
    readingTime: 12,
    schemes: ['pm-kisan'],
    ogImage: '/images/articles/pm-kisan-land-seeding-form/land-seeding-form-hero.webp',
    relatedSlugs: ['PmKisanBeneficiaryList2026', 'PmKisanEkycOnline2026', 'PmKisanMasterGuide2026'],
  },
  {
    slug: 'PmKisanFaceAuthenticationEkyc',
    title: 'PM Kisan Face Authentication eKYC: Bina OTP Ke Ghar Baithe Verification',
    desc: 'OTP nahi aa raha? PM Kisan app se face authentication karke bina OTP ke eKYC complete karo. Step-by-step guide + common errors fix.',
    ogTitle: 'PM Kisan Face Authentication eKYC — Bina OTP Ke Verification Guide',
    keywords: [
      'pm kisan face authentication kyc', 'pm kisan app bina otp kyc', 'pmkisan goi app download',
      'face recognition pm kisan', 'pm kisan mobile app ekyc', 'bina otp pm kisan verification',
      'pm kisan face scan kaise kare', 'pm kisan app ekyc process', 'face authentication error fix',
      'pm kisan app download android', 'pm kisan biometric kyc csc', 'pm kisan app login kaise kare',
      'face authentication not working', 'pm kisan app new update', 'pm kisan self ekyc app',
    ],
    component: 'PmKisanFaceAuthenticationEkyc',
    category: 'status-check',
    publishedTime: '2026-07-10T08:00:00+05:30',
    modifiedTime: '2026-07-10T08:00:00+05:30',
    readingTime: 10,
    schemes: ['pm-kisan'],
    ogImage: '/images/articles/pm-kisan-face-authentication-ekyc/face-auth-hero.webp',
    relatedSlugs: ['PmKisanEkycOnline2026', 'PmKisanMasterGuide2026', 'PmKisanPaymentFailedFix2026', 'PmKisanCscRegistrationCharges'],
  },
  {
    slug: 'PmKisanVoluntarySurrenderGuide',
    title: 'PM Kisan Voluntary Surrender: Galti Se Register Ho Gaye Toh Kaise Hatte?',
    desc: 'Government employee ya income tax filer ho? Galti se PM Kisan mein register ho gaye toh voluntary surrender kaise karein. Online + offline process.',
    ogTitle: 'PM Kisan Voluntary Surrender Guide — Galti Sudharne Ka Tarika',
    keywords: [
      'pm kisan voluntary surrender', 'pm kisan benefit surrender form', 'pm kisan se kaise haten',
      'income tax filer pm kisan surrender', 'pm kisan government employee surrender', 'pm kisan cancel registration',
      'pm kisan self surrender process', 'pm kisan benefit band kaise kare', 'pm kisan surrender form pdf',
      'pm kisan voluntary withdrawal',
    ],
    component: 'PmKisanVoluntarySurrenderGuide',
    category: 'status-check',
    publishedTime: '2026-07-10T08:00:00+05:30',
    modifiedTime: '2026-07-10T08:00:00+05:30',
    readingTime: 12,
    schemes: ['pm-kisan'],
    ogImage: '/images/articles/pm-kisan-voluntary-surrender/surrender-hero.webp',
    relatedSlugs: ['PmKisanMasterGuide2026', 'PmKisanCorrectionForm2026', 'PmKisanBeneficiaryList2026'],
  },
  {
    slug: 'PmKisanStateNodalOfficerList',
    title: 'PM Kisan State Nodal Officer Contact List: Shikayat Kahan Karein?',
    desc: '155261 se kaam nahi ban raha? Har state ke nodal officer ka email, phone number aur address. Email template + grievance portal guide.',
    ogTitle: 'PM Kisan State Nodal Officer Contact List — Direct Complaint Karein',
    keywords: [
      'pm kisan state nodal officer list', 'pm kisan district officer contact', 'pm kisan complaint officer',
      'pm kisan grievance officer number', 'pm kisan helpline state wise', 'pm kisan district agriculture officer',
      'pm kisan nodal officer email', 'pm kisan complaint kahan kare', 'pm kisan officer contact number',
    ],
    component: 'PmKisanStateNodalOfficerList',
    category: 'status-check',
    publishedTime: '2026-07-10T08:00:00+05:30',
    modifiedTime: '2026-07-10T08:00:00+05:30',
    readingTime: 18,
    schemes: ['pm-kisan'],
    ogImage: '/images/articles/pm-kisan-state-nodal-officer-list/officer-hero.webp',
    relatedSlugs: ['PmKisanPaymentFailedFix2026', 'PmKisanMasterGuide2026', 'PmKisanBeneficiaryList2026', 'PmKisanCorrectionForm2026'],
  },
  {
    slug: 'PmKisanBankAccountChangeProcess',
    title: 'PM Kisan Bank Account Change Process: Naya Account Kaise Jodein?',
    desc: 'Purana account band ho gaya? CSC ya BAO office jakar naya bank account kaise link karein. NPCI seeding + IFSC update ka pura tarika.',
    ogTitle: 'PM Kisan Bank Account Change — Naya Account Link Karne Ka Pura Tarika',
    keywords: [
      'pm kisan bank account change kaise kare', 'pm kisan new bank account link', 'pm kisan bank details update',
      'pm kisan bank change csc', 'pm kisan bank account update online', 'pm kisan bank change form',
      'pm kisan new bank account kaise jode', 'pm kisan bank account mismatch fix',
    ],
    component: 'PmKisanBankAccountChangeProcess',
    category: 'status-check',
    publishedTime: '2026-07-10T08:00:00+05:30',
    modifiedTime: '2026-07-10T08:00:00+05:30',
    readingTime: 16,
    schemes: ['pm-kisan'],
    ogImage: '/images/articles/pm-kisan-bank-account-change/bank-change-hero.webp',
    relatedSlugs: ['PmKisanPaymentFailedFix2026', 'pm-kisan-fto-generated-ka-matlab-kya-hai', 'PmKisanMasterGuide2026', 'PmKisanEkycOnline2026'],
  },
  {
    slug: 'PmKisanCscRegistrationCharges',
    title: 'PM Kisan CSC Registration Charges: Kitne Paise Lagte Hain, Kaise Karein?',
    desc: 'CSC wala ₹500 maang raha hai? Sarkari rate sirf ₹25-30 hai. Sahi fees, free online method, aur fraud se bachne ka tarika.',
    ogTitle: 'PM Kisan CSC Registration Charges — Sahi Fees, Sahi Tarika',
    keywords: [
      'pm kisan csc registration fees', 'pm kisan csc se kaise kare', 'csc pm kisan charges',
      'pm kisan csc center cost', 'pm kisan csc kitne paise leta hai', 'pm kisan csc registration process',
      'pm kisan csc center near me', 'pm kisan csc se ekyc charges',
    ],
    component: 'PmKisanCscRegistrationCharges',
    category: 'status-check',
    publishedTime: '2026-07-10T08:00:00+05:30',
    modifiedTime: '2026-07-10T08:00:00+05:30',
    readingTime: 14,
    schemes: ['pm-kisan'],
    ogImage: '/images/articles/pm-kisan-csc-registration-charges/csc-registration-hero.webp',
    relatedSlugs: ['PmKisanEkycOnline2026', 'PmKisanMasterGuide2026', 'PmKisanBankAccountChangeProcess', 'PmKisanStateNodalOfficerList'],
  },
  {
    slug: 'PmKisanMaandhanYojanaPension',
    title: 'PM Kisan Maandhan Yojana: 60 Saal Ke Baad ₹3000 Pension Ka Sahi Tarika',
    desc: 'Chhote kisanon ke liye pension scheme. 18-40 saal ki umar mein join karo, 60 ke baad ₹3000 har mahine pao. Contribution table + apply process.',
    ogTitle: 'PM Kisan Maandhan Yojana — Buzurgi Ki Suraksha Pension Guide',
    keywords: [
      'pm kisan maandhan yojana', 'kisan pension yojana eligibility', 'pm kmy pension apply',
      'pm kisan pension 3000', 'pm kisan maan dhan yojana form', 'pm kisan pension yojana apply online',
      'kisan pension yojana age limit', 'pm kisan pension amount',
    ],
    component: 'PmKisanMaandhanYojanaPension',
    category: 'farming',
    publishedTime: '2026-07-10T08:00:00+05:30',
    modifiedTime: '2026-07-10T08:00:00+05:30',
    readingTime: 16,
    schemes: ['pm-kisan', 'pm-kmy'],
    ogImage: '/images/articles/pm-kisan-maandhan-yojana-pension/maandhan-hero.webp',
    relatedSlugs: ['PmKisanMasterGuide2026', 'PmKisanBeneficiaryList2026', 'PmKisanEkycOnline2026', 'PmfbyCropInsurance2026'],
  },
  {
    slug: 'PmKisanRejectedStatusReApplyGuide',
    title: 'PM Kisan Rejected Status: Naam List Se Kyun Kata, Dobara Apply Kaise Karein?',
    desc: 'Status rejected dikh raha hai? 7 main reasons + step-by-step re-application guide. CSC correction form + arrears claim process.',
    ogTitle: 'PM Kisan Rejected Status Fix — Dobara Apply Karne Ka Pura Tarika',
    keywords: [
      'pm kisan rejected status fix', 'pm kisan reapply kaise kare', 'pm kisan rejection reason',
      'pm kisan rejected list solution', 'pm kisan application rejected kya kare', 'pm kisan rejected name list',
      'pm kisan reject hone ke baad kya kare', 'pm kisan rejected farmers list',
    ],
    component: 'PmKisanRejectedStatusReApplyGuide',
    category: 'status-check',
    publishedTime: '2026-07-10T08:00:00+05:30',
    modifiedTime: '2026-07-10T08:00:00+05:30',
    readingTime: 17,
    schemes: ['pm-kisan'],
    ogImage: '/images/articles/pm-kisan-rejected-status-re-apply-guide/rejected-status-hero.webp',
    relatedSlugs: ['PmKisanBeneficiaryList2026', 'PmKisanMasterGuide2026', 'PmKisanEkycOnline2026', 'PmKisanCorrectionForm2026'],
  },
  {
    slug: 'PmKisanVillageWiseListPdfDownload',
    title: 'PM Kisan Village Wise List PDF Download: Gaon Ki Puri List Kaise Nikalein?',
    desc: 'Apne gaon ki puri PM Kisan beneficiary list PDF mein download karo. Mobile + PC dono tarika. Excel convert trick + state portals.',
    ogTitle: 'PM Kisan Village Wise List PDF — Gaon Ka Pura Roster Ek Click Mein',
    keywords: [
      'pm kisan village wise list pdf', 'pm kisan gaon wise list download', 'pm kisan pdf roster',
      'pm kisan village list kaise dekhe', 'pm kisan gaon ki list', 'pm kisan village wise beneficiary list',
      'pm kisan district wise list pdf', 'pm kisan block wise list download',
    ],
    component: 'PmKisanVillageWiseListPdfDownload',
    category: 'status-check',
    publishedTime: '2026-07-10T08:00:00+05:30',
    modifiedTime: '2026-07-10T08:00:00+05:30',
    readingTime: 15,
    schemes: ['pm-kisan'],
    ogImage: '/images/articles/pm-kisan-village-wise-list-pdf-download/village-list-hero.webp',
    relatedSlugs: ['PmKisanBeneficiaryList2026', 'PmKisanRejectedStatusReApplyGuide', 'PmKisanMasterGuide2026', 'PmKisanStateNodalOfficerList'],
  },
  {
    slug: 'PmKisanMobileNumberChangeUpdate',
    title: 'PM Kisan Mobile Number Change: Purana SIM Band Ho Gaya Toh Naya Number Kaise Jodein?',
    desc: 'Purana SIM band hai aur OTP nahi aa raha? CSC ya BAO office jakar naya mobile number kaise link karein. Online vs offline complete guide.',
    ogTitle: 'PM Kisan Mobile Number Change — Bina Purane SIM Ke Naya Number Link Karein',
    keywords: [
      'pm kisan mobile number change', 'pm kisan mobile number update', 'pm kisan sim change kaise kare',
      'pm kisan bina purane sim mobile update', 'pm kisan mobile number update csc', 'pm kisan mobile number change online',
      'pm kisan new mobile number link', 'pm kisan mobile number update form',
    ],
    component: 'PmKisanMobileNumberChangeUpdate',
    category: 'status-check',
    publishedTime: '2026-07-10T08:00:00+05:30',
    modifiedTime: '2026-07-10T08:00:00+05:30',
    readingTime: 15,
    schemes: ['pm-kisan'],
    ogImage: '/images/articles/pm-kisan-mobile-number-change-update/mobile-change-hero.webp',
    relatedSlugs: ['PmKisanCscRegistrationCharges', 'PmKisanEkycOnline2026', 'PmKisanMasterGuide2026', 'PmKisanRejectedStatusReApplyGuide'],
  },

  // ── NEW 9 LOW-COMPETITION FARMING ARTICLES (kisanguides) ─────────────────────
  {
    slug: 'bakri-palan-yojana-nlm-subsidy',
    title: 'Bakri Palan Yojana 2026: NLM Subsidy, Loan Process, aur Real Profit Analysis',
    desc: 'National Livestock Mission se 50% subsidy, 20 bakri farm ka complete budget, 5-year profit projection, aur real risks jo koi nahi batata.',
    ogTitle: 'Bakri Palan Yojana 2026 — NLM Subsidy aur Real Profit Guide',
    keywords: [
      'bakri palan yojana 2026', 'nlm subsidy goat farming', 'bakri palan subsidy kaise milegi',
      'bakri palan profit kitna hota hai', 'goat farming loan process', 'bakri palan nasl kaunsi chunein',
      'bakri palan training kahan se lein', 'bakri palan risk aur challenges',
      'national livestock mission eligibility', 'bakri palan 20 unit cost', 'bakri palan 5 year projection',
      'bakri palan scheme 2026', 'goat farming business plan', 'bakri palan subsidy 50 percent',
      'bakri palan kaise shuru karein', 'bakri palan complete guide hindi',
    ],
    component: 'BakriPalanYojana',
    category: 'farming',
    publishedTime: '2026-07-11T08:00:00+05:30',
    modifiedTime: '2026-07-11T08:00:00+05:30',
    readingTime: 18,
    schemes: ['nlm', 'pm-kisan'],
    ogImage: '/images/kisanguides/bakri-palan-hero.webp',
    relatedSlugs: ['PmKusumYojanaSolarSubsidy2026', 'KisanCreditCardOnlineApply2026', 'PmKisanMaandhanYojanaPension', 'PmfbyCropInsurance2026'],
  },
  {
    slug: 'mushroom-kheti-nhb-subsidy',
    title: 'Mushroom (Khumbi) Ki Kheti 2026: Kamre Mein Shuru Karein, Subsidy aur Real Profit Guide',
    desc: 'Oyster mushroom farming se mahine ka ₹40,000+ kamayein. 100-bag unit ka complete budget, NHB subsidy, aur step-by-step cultivation process.',
    ogTitle: 'Mushroom Kheti 2026 — NHB Subsidy aur Real Profit Analysis',
    keywords: [
      'mushroom kheti 2026', 'oyster mushroom farming subsidy', 'mushroom kheti kaise shuru karein',
      'mushroom farming profit kitna hota hai', 'nhb subsidy mushroom', 'mushroom cultivation process',
      'mushroom kheti kamre mein', 'mushroom farming cost breakdown', 'mushroom training kahan se lein',
      'mushroom kheti risk aur challenges', 'mushroom farming business plan', 'mushroom kheti complete guide hindi',
      'mushroom spawn kahan se milega', 'mushroom kheti 100 bag unit', 'mushroom farming subsidy 35 percent',
    ],
    component: 'MushroomKheti',
    category: 'farming',
    publishedTime: '2026-07-11T08:00:00+05:30',
    modifiedTime: '2026-07-11T08:00:00+05:30',
    readingTime: 16,
    schemes: ['nhb', 'pm-fme'],
    ogImage: '/images/kisanguides/hero.webp',
    relatedSlugs: ['PmKusumYojanaSolarSubsidy2026', 'KisanCreditCardOnlineApply2026', 'PmKisanMaandhanYojanaPension'],
  },
  {
    slug: 'madhumakhi-palan-kvic-subsidy',
    title: 'Madhumakhi Palan 2026: Shahad Se Kamayein, Khet Ka Yield Badhayein - Complete Guide',
    desc: 'Beekeeping se dohri kamai - shahad + pollination. 50-box unit ka budget, KVIC subsidy 80% tak, aur real profit calculation.',
    ogTitle: 'Madhumakhi Palan 2026 — KVIC Subsidy aur Real Profit Guide',
    keywords: [
      'madhumakhi palan 2026', 'beekeeping subsidy kvic', 'madhumakhi palan kaise shuru karein',
      'madhumakhi palan profit kitna hota hai', 'honey bee farming subsidy', 'madhumakhi palan cost breakdown',
      'madhumakhi palan training kahan se lein', 'madhumakhi palan risk aur challenges',
      'national honey mission subsidy', 'madhumakhi palan 50 box unit', 'madhumakhi palan complete guide hindi',
      'madhumakhi palan shahad production', 'beekeeping business plan', 'madhumakhi palan subsidy 80 percent',
    ],
    component: 'MadhumakhiPalan',
    category: 'farming',
    publishedTime: '2026-07-11T08:00:00+05:30',
    modifiedTime: '2026-07-11T08:00:00+05:30',
    readingTime: 17,
    schemes: ['kvic', 'nhb', 'pm-fme'],
    ogImage: '/images/kisanguides/madhumakhi-palan-hero.webp',
    relatedSlugs: ['PmKusumYojanaSolarSubsidy2026', 'KisanCreditCardOnlineApply2026', 'PmKisanMaandhanYojanaPension'],
  },
  {
    slug: 'pm-matsya-sampada-yojana-fish-farming',
    title: 'PM Matsya Sampada Yojana 2026: Machli Palan par 60% Subsidy, Biofloc Technology, aur Real Profit',
    desc: 'Fish farming par 40-60% subsidy. 1 acre pond ka complete budget, Biofloc vs Traditional, aur 3-year profit projection.',
    ogTitle: 'PM Matsya Sampada Yojana 2026 — Fish Farming Subsidy Guide',
    keywords: [
      'pm matsya sampada yojana 2026', 'fish farming subsidy 60 percent', 'machli palan kaise shuru karein',
      'fish farming profit kitna hota hai', 'biofloc technology fish farming', 'pmmsy subsidy eligibility',
      'fish farming cost breakdown', 'fish farming training kahan se lein', 'fish farming risk aur challenges',
      'machli palan 1 acre pond', 'fish farming complete guide hindi', 'machli palan subsidy scheme',
      'fish farming business plan', 'pm matsya sampada yojana apply online',
    ],
    component: 'PMatsyaSampada',
    category: 'farming',
    publishedTime: '2026-07-11T08:00:00+05:30',
    modifiedTime: '2026-07-11T08:00:00+05:30',
    readingTime: 18,
    schemes: ['pmmsy', 'pm-kisan'],
    ogImage: '/images/kisanguides/fish-farming-hero.webp',
    relatedSlugs: ['PmKusumYojanaSolarSubsidy2026', 'KisanCreditCardOnlineApply2026', 'PmKisanMaandhanYojanaPension'],
  },
  {
    slug: 'silage-making-business-guide',
    title: 'Silage Making Business 2026: Makka ko Pack Karke Lakhon Kamayein - Real Numbers ke Saath',
    desc: 'Silage business se mahine ka ₹50,000+ kamayein. 100-bag unit ka complete budget, SMAM subsidy, aur real profit calculation.',
    ogTitle: 'Silage Making Business 2026 — Complete Guide with Real Numbers',
    keywords: [
      'silage making business 2026', 'silage business profit kitna hota hai', 'silage making kaise shuru karein',
      'silage business cost breakdown', 'smam subsidy silage making', 'silage business risk aur challenges',
      'silage making training kahan se lein', 'silage business customers kaise dhundhein',
      'silage making 100 bag unit', 'silage business complete guide hindi', 'silage business plan',
      'silage making machine subsidy', 'silage business marketing strategy',
    ],
    component: 'SilageMaking',
    category: 'farming',
    publishedTime: '2026-07-11T08:00:00+05:30',
    modifiedTime: '2026-07-11T08:00:00+05:30',
    readingTime: 16,
    schemes: ['smam', 'aif', 'pm-fme'],
    ogImage: '/images/kisanguides/silage-making-hero.webp',
    relatedSlugs: ['PmKusumYojanaSolarSubsidy2026', 'KisanCreditCardOnlineApply2026', 'PmKisanMaandhanYojanaPension'],
  },
  {
    slug: 'pm-fme-yojana-food-processing',
    title: 'PM FME Yojana 2026: Ghar Ka Chhota Food Business, 35% Subsidy, aur Real Success Stories',
    desc: 'PM FME se 35% subsidy (max ₹10 lakh). Achar, papad, bakery units ke liye. ODOP benefits, application process, aur documents checklist.',
    ogTitle: 'PM FME Yojana 2026 — 35% Subsidy for Food Processing Units',
    keywords: [
      'pm fme yojana 2026', 'pm fme subsidy 35 percent', 'pm fme kaise apply karein',
      'pm fme eligibility criteria', 'pm fme odop scheme', 'pm fme food processing subsidy',
      'pm fme documents required', 'pm fme application process', 'pm fme success stories',
      'pm fme complete guide hindi', 'pm fme business upgrade', 'pm fme branding support',
      'pm fme vs pmegp', 'pm fme training kahan se milegi',
    ],
    component: 'PMFMEYojana',
    category: 'farming',
    publishedTime: '2026-07-11T08:00:00+05:30',
    modifiedTime: '2026-07-11T08:00:00+05:30',
    readingTime: 15,
    schemes: ['pm-fme', 'pmegp'],
    ogImage: '/images/kisanguides/pmfme-hero.webp',
    relatedSlugs: ['PmKusumYojanaSolarSubsidy2026', 'KisanCreditCardOnlineApply2026', 'PmKisanMaandhanYojanaPension'],
  },
  {
    slug: 'custom-hiring-centre-chc-portal',
    title: 'Custom Hiring Centre (CHC) 2026: Apna Tractor Kiraye Par De Kar Mahine Ka ₹50,000+ Kamayein',
    desc: 'CHC khol kar machinery rent se kamayein. SMAM subsidy 40-50%, 8 implements ka complete budget, aur real profit calculation.',
    ogTitle: 'Custom Hiring Centre 2026 — SMAM Subsidy aur Real Profit Guide',
    keywords: [
      'custom hiring centre 2026', 'chc portal registration', 'chc business profit kitna hota hai',
      'smam subsidy farm machinery', 'chc kaise shuru karein', 'chc business cost breakdown',
      'chc risk aur challenges', 'chc training kahan se lein', 'chc customers kaise dhundhein',
      'chc complete guide hindi', 'chc business plan', 'chc machinery list',
      'chc subsidy 50 percent', 'chc portal state wise',
    ],
    component: 'CHCPortal',
    category: 'farming',
    publishedTime: '2026-07-11T08:00:00+05:30',
    modifiedTime: '2026-07-11T08:00:00+05:30',
    readingTime: 17,
    schemes: ['smam', 'pm-kisan'],
    ogImage: '/images/kisanguides/chc-portal-hero.webp',
    relatedSlugs: ['PmKusumYojanaSolarSubsidy2026', 'KisanTractorLoan2026', 'KisanCreditCardOnlineApply2026'],
  },
  {
    slug: 'vermi-compost-business-guide',
    title: 'Vermin Compost Business 2026: Gobar aur Kachre Se Organic Khaad Banakar Mahine Ka ₹40,000+ Kamayein',
    desc: 'Vermi compost business se organic fertilizer bechein. PKVY subsidy 50-75%, 10-pit unit ka budget, aur real profit calculation.',
    ogTitle: 'Vermin Compost Business 2026 — Organic Fertilizer Production Guide',
    keywords: [
      'vermi compost business 2026', 'vermi compost kaise banayein', 'vermi compost profit kitna hota hai',
      'vermi compost subsidy pkvy', 'vermi compost business cost breakdown', 'vermi compost risk aur challenges',
      'vermi compost training kahan se lein', 'vermi compost customers kaise dhundhein',
      'vermi compost 10 pit unit', 'vermi compost complete guide hindi', 'vermi compost business plan',
      'vermi compost earthworms kahan se milein', 'vermi compost organic certification',
    ],
    component: 'VerminCompost',
    category: 'farming',
    publishedTime: '2026-07-11T08:00:00+05:30',
    modifiedTime: '2026-07-11T08:00:00+05:30',
    readingTime: 16,
    schemes: ['pkvy', 'pm-fme'],
    ogImage: '/images/kisanguides/vermi-compost-hero.webp',
    relatedSlugs: ['PmKusumYojanaSolarSubsidy2026', 'KisanCreditCardOnlineApply2026', 'soil-health-card-complete-guide-2026'],
  },
  {
    slug: 'drip-sprinkler-irrigation-subsidy',
    title: 'Drip aur Sprinkler Irrigation Subsidy 2026: Paani Bachao, 75% Tak Subsidy Paao - Complete Guide',
    desc: 'Micro-irrigation par 55-75% subsidy. Drip vs Sprinkler comparison, PMKSY application process, aur real savings calculation.',
    ogTitle: 'Drip Sprinkler Irrigation Subsidy 2026 — PMKSY Complete Guide',
    keywords: [
      'drip irrigation subsidy 2026', 'sprinkler irrigation subsidy', 'pmksy per drop more crop',
      'drip vs sprinkler kaunsa behtar', 'micro irrigation subsidy 75 percent', 'drip irrigation kaise lagwayein',
      'drip irrigation cost per acre', 'drip irrigation profit calculation', 'drip irrigation maintenance',
      'drip irrigation complete guide hindi', 'sprinkler irrigation cost breakdown', 'pmksy application process',
      'drip irrigation state portal', 'drip irrigation fertigation benefits',
    ],
    component: 'DripSprinkler',
    category: 'farming',
    publishedTime: '2026-07-11T08:00:00+05:30',
    modifiedTime: '2026-07-11T08:00:00+05:30',
    readingTime: 15,
    schemes: ['pmksy', 'pm-kusum'],
    ogImage: '/images/kisanguides/drip-sprinkler-hero.webp',
    relatedSlugs: ['PmKusumYojanaSolarSubsidy2026', 'KisanCreditCardOnlineApply2026', 'soil-health-card-complete-guide-2026'],
  },
] as const;

// ── HELPER FUNCTIONS (Jo tumhare components mang rahe the) ─────────────────────

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