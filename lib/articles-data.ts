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
  readingTime?: number;
}

export const ARTICLES: readonly ArticleMeta[] = [
  {
    slug: 'kisan-rin-kaha-se-le-2026',
    title: 'Kisan Rin Kaha Se Le 2026? KCC, Bank Loan, CSC Center — Puri Jankari',
    desc: 'Loan chahiye to confusion hota hai — SBI, cooperative, CSC, har jagah process alag. Is guide mein sab kuch hai. Kaunse bank kitna dete hain, kya documents lagenge, interest rate kya hai. Ek baar padh lo, phir kisi se puchne ki zaroorat nahi.',
    ogTitle: 'Kisan Rin Kaha Se Le 2026 — Complete Guide Hindi Mein',
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
      'kisan loan kaise le',
      'farmer loan India 2026',
    ],
    component: 'KisanRinKahaSeLe2026',
    category: 'loan',
    publishedTime: '2026-01-10T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 8,
  },
  {
    slug: 'kisan-tractor-loan-2026',
    title: 'Tractor Loan Bina Down Payment — Kya Yeh Sach Mein Mil Sakta Hai?',
    desc: 'Bina down payment ke tractor loan? Sunne mein ajeeb lagta hai, lekin haan — milta hai. Mahindra Finance, TATA Capital, aur kuch state banks mein scheme hai. Is article mein poori details hai — eligibility se lekar documents tak.',
    ogTitle: 'Kisan Tractor Loan Bina Down Payment 2026 — Puri Jankari',
    keywords: [
      'Kisan Tractor Loan',
      'Tractor Loan 2026',
      'Tractor Loan Eligibility',
      'ट्रैक्टर लोन बिना डाउन पेमेंट',
      'किसान ट्रैक्टर लोन 2026',
      'tractor finance India',
      'tractor loan interest rate',
      'tractor loan kaise le',
      'zero down payment tractor',
    ],
    component: 'KisanTractorLoan2026',
    category: 'loan',
    publishedTime: '2026-01-20T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 10,
  },
  {
    slug: 'pm-kisan-21vi-installment-status-check',
    title: '21vi Kist Kab Aayi? Status Check Karo 2 Minute Mein',
    desc: '21vi kist aayi ya nahi — yeh sawal har gaon mein ghoom raha tha. Status check karna simple hai. Aadhaar number dalo, OTP verify karo, 2 minute mein pata chal jaata hai. Step-by-step guide yahan hai.',
    ogTitle: 'PM Kisan 21vi Kist Status Check — 2 Minute Mein Jaano',
    keywords: [
      'PM Kisan 21vi installment',
      'PM Kisan 21vi kist 2026',
      'पीएम किसान 21वीं किस्त स्टेटस',
      'PM Kisan 21st installment status',
      'PM Kisan payment check',
      'PM Kisan 21vi kist kab aayegi',
      '21vi kist status online',
    ],
    component: 'PmKisan21viInstallmentStatusCheck',
    category: 'status-check',
    publishedTime: '2026-02-01T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 6,
  },
  {
    slug: 'pm-kisan-beneficiary-list-2026',
    title: 'Beneficiary List 2026 — Apna Naam Kaise Check Karein?',
    desc: 'List mein naam hai ya nahi? Yeh sawal har kisan ke dimaag mein aata hai. Village-wise list dekh sakte ho, PDF download kar sakte ho. Simple tarika hai — try karo, kaam aayega.',
    ogTitle: 'PM Kisan Beneficiary List 2026 — Naam Check Karo',
    keywords: [
      'PM Kisan beneficiary list 2026',
      'PM Kisan village wise list',
      'पीएम किसान लाभार्थी सूची 2026',
      'PM Kisan list download',
      'PM Kisan naam check',
      'PM Kisan list mein naam kaise dekhe',
      'beneficiary list PDF download',
    ],
    component: 'PmKisanBeneficiaryList2026',
    category: 'status-check',
    publishedTime: '2026-02-10T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 7,
  },
  {
    slug: 'pm-kisan-beneficiary-list-village-wise-2026',
    title: 'Apne Gaon Ki List Dekho — Village Wise Beneficiary List 2026',
    desc: 'Apne gaon mein kaun-kaun PM Kisan ka paisa le raha hai — yeh jaanna mushkil nahi. State, District, Block select karo, phir apna gaon. Poori list aa jayegi. Kuch ke naam galat hote hain, kuch ke account band — yeh sab check kar sakte ho.',
    ogTitle: 'PM Kisan Gaon Wise List 2026 — Complete Guide',
    keywords: [
      'PM Kisan Beneficiary List Village Wise',
      'PM Kisan Village Wise List',
      'पीएम किसान ग्राम वार लाभार्थी सूची',
      'PM Kisan gaon wise list',
      'PM Kisan district list',
      'village wise beneficiary list',
      'PM Kisan gaon ki list',
    ],
    component: 'PmKisanBeneficiaryListVillageWise2026',
    category: 'status-check',
    publishedTime: '2026-02-15T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 6,
  },
  {
    slug: 'pm-kisan-correction-deactivate-block-guide-2026',
    title: 'Account Block Ho Gaya? Reactivate Kaise Karein?',
    desc: 'Account block ho gaya to tension hoti hai. Common reason — naam Aadhaar se match nahi ho raha. Correction ka process simple hai — online apply karo, 10 din mein sab theek ho jaata hai. Agar tumhara bhi aisa hai, to yeh padho.',
    ogTitle: 'PM Kisan Account Reactivate — Naam, Aadhaar, Bank Fix',
    keywords: [
      'PM Kisan correction 2026',
      'PM Kisan naam correction',
      'PM Kisan account deactivate',
      'पीएम किसान नाम करेक्शन 2026',
      'PM Kisan block fix',
      'PM Kisan reactivate',
      'PM Kisan account fix kaise kare',
      'deactivate account solution',
    ],
    component: 'PmKisanCorrectionDeactivateBlockGuide2026',
    category: 'correction',
    publishedTime: '2026-02-20T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 9,
  },
  {
    slug: 'pm-kisan-ekyc-online-2026',
    title: 'eKYC Ghar Baithe Kaise Kare? OTP Ya CSC — Dono Tarike',
    desc: 'Pehle CSC center jaana padta tha, line mein khade hona padta tha. Ab ghar baithe OTP se ho jaata hai — 5 minute ka kaam hai. Phone se karo, simple hai. Tum bhi try karo.',
    ogTitle: 'PM Kisan eKYC Online 2026 — Ghar Baithe Karo',
    keywords: [
      'PM Kisan eKYC online 2026',
      'PM Kisan eKYC kaise kare',
      'पीएम किसान ईकेवाईसी 2026',
      'PM Kisan Aadhaar verification',
      'PM Kisan biometric eKYC',
      'eKYC OTP method',
      'CSC center eKYC',
      'PM Kisan eKYC ghar baithe',
    ],
    component: 'PmKisanEkycOnline2026',
    category: 'ekyc',
    publishedTime: '2026-03-01T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 7,
  },
  {
    slug: 'pm-kisan-installment-history-check-online',
    title: 'Purani Kiston Ka Hisaab — Installment History Kaise Dekhein?',
    desc: 'Kabhi-kabhi yaad nahi rehta ki pichli kistein kab aayi thi. Registration number se history check kar sakte ho — poori list aa jaati hai. Kab aayi, kitni aayi, sab dikh jaata hai.',
    ogTitle: 'PM Kisan Installment History — Purani Kistein Dekho',
    keywords: [
      'PM Kisan Installment History',
      'PM Kisan Payment History',
      'पीएम किसान किस्त इतिहास ऑनलाइन',
      'PM Kisan past payments',
      'PM Kisan transaction history',
      'PM Kisan purani kistein',
      'installment history check online',
    ],
    component: 'PmKisanInstallmentHistoryCheckOnline',
    category: 'status-check',
    publishedTime: '2026-03-05T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 6,
  },
  {
    slug: 'pm-kisan-land-seeding-status-check',
    title: 'Land Seeding Pending Hai? Kist Nahi Aayegi Agar...',
    desc: 'Ek baat yaad rakhna — Land Seeding No hai to kist ruk jaati hai. Bahut se farmers ko pata hi nahi hota ki yeh check karna zaroori hai. Patwari se milo, form bharo, 15 din mein sab theek ho jaata hai. Tum bhi check kar lo.',
    ogTitle: 'PM Kisan Land Seeding Fix — Pending, Rejected Solution',
    keywords: [
      'PM Kisan Land Seeding',
      'Land Seeding Pending Fix',
      'पीएम किसान लैंड सीडिंग स्टेटस',
      'PM Kisan land verification',
      'PM Kisan land linking',
      'land seeding kaise kare',
      'PM Kisan zameen seeding',
      'land seeding rejected fix',
    ],
    component: 'PmKisanLandSeedingStatusCheck',
    category: 'status-check',
    publishedTime: '2026-03-10T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 8,
  },
  {
    slug: 'pm-kisan-name-correction-online-2026',
    title: 'Aadhaar Se Naam Match Nahi Ho Raha? Yeh Karo',
    desc: 'Aadhaar mein naam alag hai, bank mein alag, portal mein alag — to payment fail ho jaati hai. Common problem hai. Naam correction karo, 10 din mein sab theek. Online ya CSC se — dono tarike hain.',
    ogTitle: 'PM Kisan Naam Correction — Aadhaar Match Karo',
    keywords: [
      'PM Kisan name correction',
      'PM Kisan Aadhaar name mismatch',
      'पीएम किसान नाम सुधार 2026',
      'PM Kisan naam theek karo',
      'PM Kisan name update',
      'naam correction online',
      'Aadhaar naam match nahi ho raha',
    ],
    component: 'PmKisanNameCorrectionOnline2026',
    category: 'correction',
    publishedTime: '2026-03-15T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 7,
  },
  {
    slug: 'pm-kisan-payment-failed-status-2026',
    title: 'Paisa Nahi Aaya? Payment Fail Kyun Hua — 5 Reasons',
    desc: 'Status check kiya to "Payment Failed" dikh raha hai? Pareshan mat ho. 5 main reasons hote hain — Aadhaar mismatch, NPCI error, bank issue, aur do aur. Har ek ka solution hai. Padho, fix karo.',
    ogTitle: 'PM Kisan Payment Failed — 5 Reasons Aur Fix',
    keywords: [
      'PM Kisan payment failed 2026',
      'PM Kisan NPCI error',
      'पीएम किसान पेमेंट फेल 2026',
      'PM Kisan payment error',
      'PM Kisan bank issue',
      'payment fail kyun hua',
      'PM Kisan paisa nahi aaya',
      'payment failed solution',
    ],
    component: 'PmKisanPaymentFailedStatus2026',
    category: 'payment',
    publishedTime: '2026-03-20T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 8,
  },
  {
    slug: 'pm-kisan-problems-solution-guide-2026',
    title: '10 Badi Problems Aur Unka Seedha Hal',
    desc: 'RFT Signed, PFMS Pending, Payment Fail — yeh sab sunke pareshan ho? Har problem ka solution hai. Real examples ke saath samjhaya hai. Ek baar padh lo, phir kisi se puchne ki zaroorat nahi.',
    ogTitle: 'PM Kisan 10 Problems — Sab Fix Karo',
    keywords: [
      'PM Kisan problems solution',
      'PM Kisan RFT signed',
      'PM Kisan PFMS pending',
      'पीएम किसान समस्या समाधान 2026',
      'PM Kisan issues fix',
      'PM Kisan RFT matlab',
      'PFMS pending kya hai',
      'PM Kisan sabse badi problems',
    ],
    component: 'PmKisanProblemsSolutionGuide2026',
    category: 'payment',
    publishedTime: '2026-03-25T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 10,
  },
  {
    slug: 'pm-kisan-registration-online-2026',
    title: 'Naye Farmer Ho? Registration Kaise Karein?',
    desc: 'PM Kisan mein naye ho to confusion hota hai — "yeh sab complicated hai". Par actually simple hai. Online form bharo, documents upload karo, 15 minute mein ho jaata hai. Tum bhi kar sakte ho. Bas yeh padho pehle.',
    ogTitle: 'PM Kisan New Registration 2026 — Step by Step',
    keywords: [
      'PM Kisan registration online 2026',
      'PM Kisan new farmer registration',
      'पीएम किसान रजिस्ट्रेशन ऑनलाइन 2026',
      'PM Kisan apply online',
      'PM Kisan form fill',
      'naya registration kaise kare',
      'PM Kisan eligibility',
      'PM Kisan documents',
    ],
    component: 'PmKisanRegistrationOnline2026',
    category: 'registration',
    publishedTime: '2026-04-01T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 9,
  },
  {
    slug: 'pm-kisan-rejected-list-2026',
    title: 'Rejected List Mein Naam Hai? Fix Kaise Karein?',
    desc: 'Naam rejected list mein hai to tension hoti hai. Common reason — land records galat hote hain. Patwari se milo, documents theek karo, 20 din mein sab clear ho jaata hai. Tumhara bhi aisa hai to yeh padho.',
    ogTitle: 'PM Kisan Rejected List — Reason Aur Fix',
    keywords: [
      'PM Kisan rejected list 2026',
      'PM Kisan rejection reason',
      'पीएम किसान रिजेक्टेड लिस्ट 2026',
      'PM Kisan application rejected',
      'PM Kisan fix rejection',
      'rejected list mein naam',
      'rejection kaise fix kare',
      'PM Kisan rejected solution',
    ],
    component: 'PmKisanRejectedList2026',
    category: 'payment',
    publishedTime: '2026-04-10T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 7,
  },
  {
    slug: 'pmfby-crop-insurance-2026',
    title: 'Fasal Kharab Ho Gayi? PMFBY Claim Kaise Karein?',
    desc: 'Fasal kharab ho gayi to PMFBY claim kar sakte ho. Process thoda lamba hai — 45 din lagte hain — lekin paisa aa jaata hai. Claim kaise file karna hai, status kaise check karna hai, aur kab tak paisa milega — sab yahan hai.',
    ogTitle: 'PMFBY Crop Insurance Claim — Complete Guide',
    keywords: [
      'PMFBY Crop Insurance',
      'PMFBY Claim Status',
      'प्रधानमंत्री फसल बीमा योजना क्लेम',
      'PMFBY 2026',
      'crop insurance India',
      'fasal bima yojana',
      'PMFBY claim kaise kare',
      'crop insurance claim status',
    ],
    component: 'PmfbyCropInsurance2026',
    category: 'farming',
    publishedTime: '2026-04-20T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 12,
  },
  {
    slug: 'pm-kisan-23vi-kist-2026-status-check',
    title: '23vi Kist Aayi Ya Nahi? Abhi Check Karo',
    desc: '23vi kist ka wait hai? Status check karna simple hai. Mobile se check karo — Aadhaar number dalo, OTP verify karo, 2 minute mein pata chal jaata hai. Mobile, Aadhaar, ya registration number — koi bhi use kar sakte ho.',
    ogTitle: 'PM Kisan 23vi Kist Status — Abhi Check Karo',
    keywords: [
      'PM Kisan 23vi Kist',
      'PM Kisan Status Check',
      'पीएम किसान 23वीं किस्त स्टेटस 2026',
      'PM Kisan 23rd installment',
      'PM Kisan payment 2026',
      '23vi kist kab aayegi',
      'PM Kisan 23vi kist status',
    ],
    component: 'PmKisan23viKistStatusCheck2026',
    category: 'status-check',
    publishedTime: '2026-04-01T00:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 7,
  },
  {
    slug: 'kisan-credit-card-online-apply-2026',
    title: 'KCC Card Banwana Hai? Online Apply Kaise Karein?',
    desc: 'KCC card hai to ₹5 lakh tak loan mil sakta hai, interest rate sirf 4%. Online apply karo, bank jao, 10 din mein card aa jaata hai. Eligibility, documents, sab kuch yahan hai.',
    ogTitle: 'Kisan Credit Card Online Apply — ₹5 Lakh Loan',
    keywords: [
      'Kisan Credit Card Online Apply 2026',
      'KCC Apply Online',
      'KCC Eligibility 2026',
      'किसान क्रेडिट कार्ड ऑनलाइन अप्लाई 2026',
      'KCC loan limit',
      'KCC interest rate',
      'KCC kaise banaye',
      'KCC documents',
    ],
    component: 'KisanCreditCardOnlineApply2026',
    category: 'loan',
    publishedTime: '2026-06-01T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 9,
  },
  {
    slug: 'pm-kisan-fto-generated-ka-matlab-kya-hai',
    title: 'FTO Generated — Iska Matlab Kya Hai? Aasan Bhasha Mein',
    desc: 'FTO Generated, FTO Pending, Payment Order — yeh sab sunke confused ho? FTO matlab Fund Transfer Order. Sarkar ne paisa bhejne ka order de diya hai. Ab bank process karega. Simple hai, padho samajh jaoge.',
    ogTitle: 'PM Kisan FTO Generated Matlab — Aasan Guide',
    keywords: [
      'PM Kisan FTO Generated',
      'FTO Generated matlab',
      'एफटीओ जेनरेटेड क्या होता है',
      'PM Kisan FTO status',
      'FTO full form PM Kisan',
      'FTO ka matlab',
      'PM Kisan FTO Pending',
      'FTO Payment Order',
    ],
    component: 'PmKisanFtoGeneratedKaMatlabKyaHai',
    category: 'status-check',
    publishedTime: '2026-06-23T08:00:00+05:30',
    modifiedTime: '2026-06-23T08:00:00+05:30',
    readingTime: 6,
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
  },
  {
    slug: 'pm-kisan-24vi-kist',
    title: '24vi Kist Kab Aayegi? Date Aur Status Guide',
    desc: '23vi to aa gayi, ab 24vi ka wait hai. October 2026 tak aane ki umeed hai. Par eKYC zaroori hai, land seeding bhi. Apna status dekh lo — agar kuch pending hai to abhi fix kar lo.',
    ogTitle: 'PM Kisan 24vi Kist — Kab Aayegi?',
    keywords: [
      'PM Kisan 24vi Kist 2026',
      'PM Kisan next installment 2026',
      'पीएम किसान 24वीं किस्त 2026',
      'PM Kisan 24th installment date',
      'PM Kisan upcoming payment',
      '24vi kist kab aayegi',
      'PM Kisan 24vi kist status',
    ],
    component: 'PmKisan24viKist2026',
    category: 'status-check',
    publishedTime: '2026-06-24T08:00:00+05:30',
    modifiedTime: '2026-06-24T08:00:00+05:30',
    readingTime: 6,
  },
  {
    slug: 'agristack-kya-hai',
    title: 'AgriStack Kya Hai? Farmer ID Aur PM Kisan Connection',
    desc: 'AgriStack ka naam suna hai? Yeh digital farmer ID hai. PM Kisan se connected hai. Har kisan ko ek unique ID milegi. Benefits bahut hain — loan, insurance, schemes — sab ek jagah. Jaan lo, future mein kaam aayega.',
    ogTitle: 'AgriStack Kya Hai — Farmer ID Complete Guide',
    keywords: [
      'AgriStack kya hai',
      'AgriStack 2026',
      'Farmer ID AgriStack',
      'एग्रीस्टैक क्या है',
      'digital farmer ID India',
      'AgriStack registration',
      'AgriStack benefits',
      'PM Kisan AgriStack connection',
    ],
    component: 'AgriStackKyaHai2026',
    category: 'farming',
    publishedTime: '2026-06-24T08:00:00+05:30',
    modifiedTime: '2026-06-24T08:00:00+05:30',
    readingTime: 10,
  },
  {
    slug: 'pm-kisan-mobile-number-change',
    title: 'Mobile Number Badalna Hai? Online Ya CSC Se Update Karo',
    desc: 'Purana number band ho gaya to OTP nahi aa raha. CSC jao, form bharo, 7 din mein naya number update ho jaata hai. Online bhi kar sakte ho. Dono tarike hain. Tum bhi kar lo, mushkil nahi hai.',
    ogTitle: 'PM Kisan Mobile Number Change — Complete Guide',
    keywords: [
      'PM Kisan mobile number change 2026',
      'PM Kisan number update',
      'पीएम किसान मोबाइल नंबर बदलें 2026',
      'PM Kisan mobile update',
      'PM Kisan contact change',
      'mobile number kaise badle',
      'PM Kisan number update online',
    ],
    component: 'PmKisanMobileNumberChange2026',
    category: 'correction',
    publishedTime: '2026-06-24T08:00:00+05:30',
    modifiedTime: '2026-06-24T08:00:00+05:30',
    readingTime: 6,
  },
  {
    slug: 'pm-kisan-complete-guide',
    title: 'PM Kisan — Sab Problems Ka Ek Saath Hal',
    desc: 'Kabhi status check, kabhi eKYC, kabhi payment fail — har problem alag jagah dhundhni padti thi. Sab ek jagah ikattha kiya hai. Yeh master guide hai. Ek baar padh lo, phir kisi se puchne ki zaroorat nahi.',
    ogTitle: 'PM Kisan Complete Guide — Sab Problems Fix',
    keywords: [
      'PM Kisan complete guide 2026',
      'PM Kisan all problems solution',
      'पीएम किसान पूर्ण गाइड',
      'PM Kisan comprehensive guide',
      'PM Kisan master guide',
      'PM Kisan sab problems',
      'PM Kisan complete solution',
    ],
    component: 'PmKisanCompleteGuide',
    category: 'status-check',
    publishedTime: '2026-06-27T08:00:00+05:30',
    modifiedTime: '2026-06-27T08:00:00+05:30',
    readingTime: 15,
  },
  {
    slug: 'soil-health-card-complete-guide-2026',
    title: 'Soil Health Card — Mitti Test Karwane Ka Pura Process',
    desc: 'Mitti test karwane ka soch rahe ho? CSC se form lo, sample do, 15 din mein report aa jaati hai. Pata chalta hai ki mitti mein kya kami hai. Fertilizer change karo, fasal achhi hoti hai. Tum bhi try karo.',
    ogTitle: 'Soil Health Card Complete Guide — Sab Kuch Jaano',
    keywords: [
      'Soil Health Card Complete Guide 2026',
      'Soil Health Card Download',
      'मिट्टी स्वास्थ्य कार्ड 2026',
      'Soil Health Card registration',
      'Soil Health Card status check',
      'mitti test kaise karaye',
      'Soil Health Card kya hai',
      'Soil Health Card PDF',
    ],
    component: 'SoilHealthCardCompleteGuide2026',
    category: 'farming',
    publishedTime: '2026-06-27T08:00:00+05:30',
    modifiedTime: '2026-06-27T08:00:00+05:30',
    readingTime: 8,
  },
  {
    slug: 'pm-kisan-self-registered-status-check',
    title: 'Khud Se Registration Kiya? Status Kaise Check Karein?',
    desc: 'Khud se apply kiya hai lekin status nahi dikh raha? Portal par jao, registration number dalo, status aa jaata hai. Tum bhi try karo. Simple hai.',
    ogTitle: 'PM Kisan Self Registered Status — Check Karo',
    keywords: [
      'pm kisan self registered farmer status check',
      'pm kisan status check',
      'self registration status',
      'pmkisan status',
      'पीएम किसान सेल्फ रजिस्टर्ड स्टेटस',
      'PM Kisan self registration',
      'self registered kaise check kare',
    ],
    component: 'PmKisanSelfRegisteredStatusCheck',
    category: 'status-check',
    publishedTime: '2026-06-28T08:00:00+05:30',
    modifiedTime: '2026-06-28T08:00:00+05:30',
    readingTime: 7,
  },
  {
    slug: 'pm-kisan-status-check-online-2026-complete-guide',
    title: 'Status Check Online — Real Farmer Guide With Screenshots',
    desc: 'Status check karna hai? Aadhaar se karo, mobile se karo, registration number se bhi kar sakte ho. Screenshots bhi hain. Common errors aur unka fix bhi. Padho, try karo.',
    ogTitle: 'PM Kisan Status Check — Real Farmer Experience',
    keywords: [
      'PM Kisan status check 2026',
      'PM Kisan online status',
      'PM Kisan Aadhaar check',
      'PM Kisan mobile check',
      'पीएम किसान स्टेटस चेक',
      'PM Kisan beneficiary status',
      'status check kaise kare',
      'PM Kisan status online',
    ],
    component: 'PmKisanStatusCheckOnline2026CompleteGuide',
    category: 'status-check',
    publishedTime: '2026-06-29T08:00:00+05:30',
    modifiedTime: '2026-06-29T08:00:00+05:30',
    readingTime: 10,
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