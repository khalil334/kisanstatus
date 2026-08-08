// ---------------------------------------------------------------------------
// Hindi (Devanagari) articles — SEPARATE from lib/articles-data.ts.
// Source plan: docs/traffic-analysis-and-10x-plan.md (14 articles).
// Content is a SHORT STUB (10–14 words) — replace `content` with the full
// article text later. Rendered by app/articles/hindi/[slug]/page.tsx.
// ---------------------------------------------------------------------------

export interface HindiArticle {
  /** URL slug (Roman, lowercase, hyphens) */
  slug: string;
  /** Devanagari title — used as <title>, H1, og:title */
  titleHi: string;
  /** Meta description (Devanagari) */
  desc: string;
  keywords: readonly string[];
  category: 'status-check' | 'loan' | 'farming' | 'mandi' | 'pashupalan' | 'agri-business';
  publishedTime: string;
  modifiedTime: string;
  author: string;
  /** Component file name in components/articles/hindi-yojana/ */
  component: string;
}

export const HINDI_ARTICLES: readonly HindiArticle[] = [
  {
    slug: 'pm-kisan-25vi-kist',
    titleHi: 'पीएम किसान 25वीं किस्त कब आएगी?',
    desc: 'पीएम किसान 25वीं किस्त की तारीख, स्टेटस चेक और लेटेस्ट अपडेट — पूरी जानकारी हिंदी में।',
    keywords: ['पीएम किसान 25वीं किस्त', 'pm kisan 25th installment date', 'पीएम किसान किस्त कब आएगी'],
    category: 'status-check',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2027-02-15T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    component: 'PmKisan25viKistKabAayegi',
  },
  {
    slug: 'status-check-mobile-se',
    titleHi: 'मोबाइल नंबर से स्टेटस कैसे चेक करें?',
    desc: 'मोबाइल नंबर से पीएम किसान स्टेटस कैसे चेक करें — आसान स्टेप-बाय-स्टेप गाइड।',
    keywords: ['पीएम किसान स्टेटस चेक मोबाइल नंबर से', 'pm kisan status mobile number'],
    category: 'status-check',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2027-02-15T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    component: 'PmKisanStatusCheckMobileNumberSe',
  },
  {
    slug: 'karj-mafi-list',
    titleHi: 'किसान कर्ज माफी लिस्ट 2027',
    desc: 'किसान कर्ज माफी 2027 — UP, MP, महाराष्ट्र, राजस्थान, झारखंड की राज्यवार लिस्ट।',
    keywords: ['किसान कर्ज माफी लिस्ट 2027', 'karj mafi list', 'kisan karj mafi 2027'],
    category: 'loan',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2027-02-15T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    component: 'KisanKarjMafiList2027',
  },
  {
    slug: 'helpline-shikayat',
    titleHi: 'पीएम किसान हेल्पलाइन और शिकायत',
    desc: 'पीएम किसान हेल्पलाइन नंबर और शिकायत दर्ज करने की पूरी प्रक्रिया हिंदी में।',
    keywords: ['पीएम किसान हेल्पलाइन नंबर', 'pm kisan complaint kaise kare'],
    category: 'status-check',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2027-02-15T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    component: 'PmKisanHelplineNumberComplaint',
  },
  {
    slug: 'mp-kisan-kalyan-yojana',
    titleHi: 'MP किसान कल्याण योजना — ₹12000 कैसे मिलेंगे?',
    desc: 'MP मुख्यमंत्री किसान कल्याण योजना — ₹12000 सालाना, स्टेटस चेक और पात्रता।',
    keywords: ['मुख्यमंत्री किसान कल्याण योजना', 'mp kisan kalyan yojana status', '₹12000 किसान योजना MP'],
    category: 'farming',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2027-02-15T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    component: 'MukhyamantriKisanKalyanYojanaMp',
  },
  {
    slug: 'nayi-registration',
    titleHi: 'पीएम किसान नई रजिस्ट्रेशन कैसे करें?',
    desc: 'पीएम किसान नई रजिस्ट्रेशन 2027 — Farmer ID के साथ नया आवेदन करने की प्रक्रिया।',
    keywords: ['पीएम किसान नई रजिस्ट्रेशन', 'pm kisan new registration 2027'],
    category: 'status-check',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2027-02-15T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    component: 'PmKisanNewRegistration2027',
  },
  {
    slug: 'farmer-id-kaise-banaye',
    titleHi: 'फार्मर आईडी कैसे बनाएं?',
    desc: 'फार्मर आईडी कार्ड (AgriStack) कैसे बनाएं — राज्यवार पोर्टल लिंक और प्रक्रिया।',
    keywords: ['फार्मर आईडी कार्ड कैसे बनाएं', 'farmer id registration 2027', 'agristack farmer id'],
    category: 'farming',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2027-02-15T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    component: 'FarmerIdCardKaiseBanaye2027',
  },
  {
    slug: 'tractor-subsidy',
    titleHi: 'ट्रैक्टर सब्सिडी 2027 — राज्यवार लिस्ट',
    desc: 'ट्रैक्टर सब्सिडी 2027 — UP, बिहार, MP, राजस्थान, हरियाणा की राज्यवार जानकारी।',
    keywords: ['ट्रैक्टर सब्सिडी 2027', 'tractor subsidy state wise'],
    category: 'agri-business',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2027-02-15T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    component: 'TractorSubsidy2027StateWiseList',
  },
  {
    slug: 'gehu-ka-rate-aaj',
    titleHi: 'गेहूं का रेट आज — MSP vs मंडी भाव',
    desc: 'गेहूं का आज का रेट — MSP और मंडी भाव की राज्यवार तुलना, वीकली अपडेट।',
    keywords: ['गेहूं का रेट आज', 'gehu ka bhav today', 'गेहूं MSP 2027'],
    category: 'mandi',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2027-02-15T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    component: 'GehuKaRateAajMspVsMandiBhav',
  },
  {
    slug: 'ekyc-mobile-se',
    titleHi: 'eKYC मोबाइल से कैसे करें?',
    desc: 'पीएम किसान eKYC मोबाइल से — OTP और Face Auth App से स्टेप-बाय-स्टेप।',
    keywords: ['पीएम किसान eKYC मोबाइल से', 'pm kisan ekyc kaise kare', 'face auth ekyc'],
    category: 'status-check',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2027-02-15T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    component: 'PmKisanEkycMobileSeKaiseKare',
  },
  {
    slug: 'npci-aadhaar-seeding',
    titleHi: 'NPCI आधार सीडिंग कैसे करें?',
    desc: 'NPCI आधार सीडिंग — DBT पेमेंट के लिए बैंक में आधार लिंक करने की प्रक्रिया।',
    keywords: ['npci aadhaar seeding online', 'dbt enable kaise kare', 'आधार बैंक लिंक स्टेटस'],
    category: 'status-check',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2027-02-15T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    component: 'NpciAadhaarSeedingDbtPayment',
  },
  {
    slug: 'payment-stopped-by-state',
    titleHi: '"Payment Stopped by State" का मतलब और Fix',
    desc: '"Payment Stopped by State" एरर का मतलब क्या है और इसे कैसे ठीक करें।',
    keywords: ['payment stopped by state pm kisan', 'pm kisan payment stopped fix'],
    category: 'status-check',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2027-02-15T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    component: 'PmKisanPaymentStoppedByStateFix',
  },
  {
    slug: 'recovery-notice',
    titleHi: 'PM Kisan Recovery Notice — पैसा वापस कैसे करें?',
    desc: 'PM Kisan रिकवरी नोटिस — अपात्र किसान पैसा वापस कैसे करें, पूरी गाइड।',
    keywords: ['pm kisan recovery notice', 'pm kisan paisa wapas kaise kare'],
    category: 'status-check',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2027-02-15T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    component: 'PmKisanRecoveryNoticePaisaWapas',
  },
  {
    slug: 'kcc-limit-kaise-badhaye',
    titleHi: 'KCC लिमिट कैसे बढ़ाएं — ₹3 से ₹5 लाख',
    desc: 'KCC लिमिट ₹3 लाख से ₹5 लाख कैसे बढ़ाएं — रिन्यूअल और ब्याज सब्सिडी।',
    keywords: ['kcc limit kaise badhaye', 'kcc renewal process', 'kcc interest rate'],
    category: 'loan',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2027-02-15T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    component: 'KccLimitKaiseBadhaye3Se5Lakh',
  },
  {
    slug: 'namo-shetkari-yojana',
    titleHi: 'नमो शेतकरी योजना — ₹12000 कैसे मिलेंगे?',
    desc: 'नमो शेतकरी महासन्मान निधि Maharashtra — पात्रता, किस्त status चेक और किस्त न आए तो क्या करें।',
    keywords: ['नमो शेतकरी योजना', 'namo shetkari yojana status', 'namo shetkari mahasanman nidhi', 'नमो शेतकरी महासन्मान निधी'],
    category: 'farming',
    publishedTime: '2027-02-20T09:00:00+05:30',
    modifiedTime: '2027-02-20T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    component: 'NamoShetkariYojanaMaharashtra',
  },
] as const;

export const HINDI_ARTICLES_MAP: Record<string, HindiArticle> = Object.fromEntries(
  HINDI_ARTICLES.map((a) => [a.slug, a]),
);
