// ---------------------------------------------------------------------------
// Hindi (Devanagari) articles — SEPARATE from lib/articles-data.ts.
// Source plan: docs/traffic-analysis-and-10x-plan.md (14 articles).
// Content is a SHORT STUB (10–14 words) — replace `content` with the full
// article text later. Rendered by app/articles/hi/[slug]/page.tsx.
// ---------------------------------------------------------------------------

export interface HindiArticle {
  /** URL slug with `hi/` prefix (Roman, lowercase, hyphens) — keeps Hindi
   *  URLs distinct from Hinglish ones (no duplicate-content risk). */
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
  /** Card image for homepage + /articles listing (og:image) */
  ogImage: string;
}

export const HINDI_ARTICLES: readonly HindiArticle[] = [
  {
    slug: 'hi/pm-kisan-25vi-kist',
    titleHi: 'पीएम किसान 25वीं किस्त कब आएगी? Date और Latest Update',
    desc: 'पीएम किसान 25वीं किस्त कब आएगी 2027? Beneficiary status, eKYC और payment date की latest update यहां चेक करें — किस्त न आए तो क्या करें, पूरी जानकारी यहां।',
    keywords: [
      'पीएम किसान 25वीं किस्त',
      'pm kisan 25th installment date',
      'पीएम किसान किस्त कब आएगी',
      'pm kisan kist kab aayegi 2027',
      'पीएम किसान किस्त नहीं आई क्या करें',
      'pm kisan beneficiary list me naam nahi hai',
      'pm kisan kist ka sms nahi aaya',
      'पीएम किसान किस्त ₹2000 कब बढ़ेगी',
      'pm kisan ekyc bank seeding land seeding check',
    ],
    category: 'status-check',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2026-08-10T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    component: 'PmKisan25viKistKabAayegi',
    ogImage: '/images/articles/hindi-yojna/pm-kisan-25vi-kist/kisan-mobile-check.webp',
  },
  {
    slug: 'hi/status-check-mobile-se',
    titleHi: 'मोबाइल नंबर से पीएम किसान स्टेटस कैसे चेक करें? आसान तरीका',
    desc: 'पीएम किसान स्टेटस मोबाइल नंबर से 2 मिनट में चेक करें — रजिस्ट्रेशन नंबर भूल गए या OTP नहीं आ रहा? हर problem का आसान step-by-step solution यहां जानिए।',
    keywords: [
      'पीएम किसान स्टेटस चेक मोबाइल नंबर से',
      'pm kisan status mobile number',
      'pm kisan registration number kaise nikale',
      'पीएम किसान रजिस्ट्रेशन नंबर भूल गया',
      'pm kisan status otp nahi aa raha',
      'know your status pm kisan',
      'pm kisan ekyc status no',
      'पीएम किसान लैंड सीडिंग no',
      'aadhaar bank seeding no pm kisan',
    ],
    category: 'status-check',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2026-08-09T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    component: 'PmKisanStatusCheckMobileNumberSe',
    ogImage: '/images/articles/hindi-yojna/status-check-mobile-se/phone-status-check.webp',
  },
  {
    slug: 'hi/karj-mafi-list',
    titleHi: 'किसान कर्ज माफी लिस्ट 2027 — राज्यवार List में नाम देखें',
    desc: 'किसान कर्ज माफी लिस्ट 2027 में अपना नाम ऐसे चेक करें — UP, MP, महाराष्ट्र, राजस्थान और झारखंड की राज्यवार नई list, पात्रता और आवेदन की पूरी जानकारी यहां।',
    keywords: ['किसान कर्ज माफी लिस्ट 2027', 'karj mafi list', 'kisan karj mafi 2027'],
    category: 'loan',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2026-08-10T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    component: 'KisanKarjMafiList2027',
    ogImage: '/images/articles/hindi-yojna/karj-mafi-list/karj-mafi-hero.webp',
  },
  {
    slug: 'hi/helpline-shikayat',
    titleHi: 'किस्त नहीं आई? पीएम किसान हेल्पलाइन नंबर और शिकायत का तरीका',
    desc: 'पीएम किसान की किस्त नहीं आई तो घबराएं नहीं — helpline number 155261 पर call करें या online complaint दर्ज करें। शिकायत का पूरा process यहां step-by-step जानिए।',
    keywords: ['पीएम किसान हेल्पलाइन नंबर', 'pm kisan complaint kaise kare'],
    category: 'status-check',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2026-08-09T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    component: 'PmKisanHelplineNumberComplaint',
    ogImage: '/images/articles/hindi-yojna/helpline-shikayat/farmer-on-call.webp',
  },
  {
    slug: 'hi/mp-kisan-kalyan-yojana',
    titleHi: 'MP किसान कल्याण योजना — ₹12000 सालाना कैसे मिलेंगे? जानिए',
    desc: 'MP मुख्यमंत्री किसान कल्याण योजना से हर साल ₹12000 पाएं — kisan kalyan yojana status check, पात्रता और अगली किस्त की date की पूरी जानकारी हिंदी में देखें।',
    keywords: ['मुख्यमंत्री किसान कल्याण योजना', 'mp kisan kalyan yojana status', '₹12000 किसान योजना MP'],
    category: 'farming',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2026-08-10T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    component: 'MukhyamantriKisanKalyanYojanaMp',
    ogImage: '/images/articles/hindi-yojna/mp-kisan-kalyan/mp-farmer-field.webp',
  },
  {
    slug: 'hi/nayi-registration',
    titleHi: 'पीएम किसान नई रजिस्ट्रेशन 2027 — Farmer ID से ऐसे करें Apply',
    desc: 'पीएम किसान नई रजिस्ट्रेशन 2027 अब Farmer ID से होगी — online apply का step-by-step तरीका, जरूरी documents और आवेदन के बाद status चेक करना भी यहां सीखें।',
    keywords: ['पीएम किसान नई रजिस्ट्रेशन', 'pm kisan new registration 2027'],
    category: 'status-check',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2026-08-09T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    component: 'PmKisanNewRegistration2027',
    ogImage: '/images/articles/hindi-yojna/new-registration/docs-ready.webp',
  },
  {
    slug: 'hi/farmer-id-kaise-banaye',
    titleHi: 'फार्मर आईडी कैसे बनाएं? AgriStack की पूरी जानकारी यहां',
    desc: 'फार्मर आईडी कार्ड (AgriStack) घर बैठे मोबाइल से बनाएं — राज्यवार portal link, जरूरी documents और registration का आसान step-by-step process यहां देखें।',
    keywords: ['फार्मर आईडी कार्ड कैसे बनाएं', 'farmer id registration 2027', 'agristack farmer id'],
    category: 'farming',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2026-08-10T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    component: 'FarmerIdCardKaiseBanaye2027',
    ogImage: '/images/articles/hindi-yojna/farmer-id-card/id-card-sample.webp',
  },
  {
    slug: 'hi/tractor-subsidy',
    titleHi: 'ट्रैक्टर सब्सिडी 2027 — किस राज्य में कितनी छूट? पूरी लिस्ट',
    desc: 'ट्रैक्टर सब्सिडी 2027 में 50% तक छूट पाएं — UP, बिहार, MP, राजस्थान और हरियाणा की राज्यवार subsidy list, पात्रता शर्तें और online आवेदन का पूरा तरीका जानिए।',
    keywords: ['ट्रैक्टर सब्सिडी 2027', 'tractor subsidy state wise'],
    category: 'agri-business',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2026-08-09T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    component: 'TractorSubsidy2027StateWiseList',
    ogImage: '/images/articles/hindi-yojna/tractor-subsidy/tractor-kisan-khet.webp',
  },
  {
    slug: 'hi/gehu-ka-rate-aaj',
    titleHi: 'गेहूं का रेट आज क्या है? MSP vs मंडी भाव की तुलना देखें',
    desc: 'गेहूं का आज का रेट और MSP 2027 की राज्यवार तुलना यहां देखें — आपकी मंडी में भाव MSP से ऊपर है या नीचे? Weekly update के साथ बेचने का सही समय भी जानिए।',
    keywords: ['गेहूं का रेट आज', 'gehu ka bhav today', 'गेहूं MSP 2027'],
    category: 'mandi',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2026-08-10T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    component: 'GehuKaRateAajMspVsMandiBhav',
    ogImage: '/images/articles/hindi-yojna/gehu-ka-rate/mandi-wheat.webp',
  },
  {
    slug: 'hi/ekyc-mobile-se',
    titleHi: 'PM Kisan eKYC मोबाइल से कैसे करें? OTP और Face Auth तरीका',
    desc: 'PM Kisan eKYC मोबाइल से free में करें — OTP और Face Auth App दोनों के आसान steps यहां। OTP नहीं आ रहा या record not found error? हर problem का fix भी।',
    keywords: [
      'पीएम किसान eKYC मोबाइल से',
      'pm kisan ekyc kaise kare',
      'face auth ekyc',
      'pm kisan ekyc otp nahi aa raha',
      'आधार में मोबाइल नंबर लिंक नहीं है ekyc',
      'pm kisan ekyc csc charges',
      'record not found with given aadhaar pm kisan',
      'ekyc already done matlab',
      'बुजुर्ग की ekyc face auth से कैसे करें',
    ],
    category: 'status-check',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2026-08-09T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    component: 'PmKisanEkycMobileSeKaiseKare',
    ogImage: '/images/articles/hindi-yojna/ekyc-mobile-se/otp-screen.webp',
  },
  {
    slug: 'hi/npci-aadhaar-seeding',
    titleHi: 'DBT पेमेंट रुका है? NPCI आधार सीडिंग Online ऐसे करें',
    desc: 'NPCI आधार सीडिंग के बिना पीएम किसान की किस्त अटक सकती है — बैंक में aadhaar link status चेक करें और DBT enable करने का पूरा online process यहां जानिए।',
    keywords: ['npci aadhaar seeding online', 'dbt enable kaise kare', 'आधार बैंक लिंक स्टेटस'],
    category: 'status-check',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2026-08-10T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    component: 'NpciAadhaarSeedingDbtPayment',
    ogImage: '/images/articles/hindi-yojna/npci-seeding/seeding-diagram.webp',
  },
  {
    slug: 'hi/payment-stopped-by-state',
    titleHi: '"Payment Stopped by State" का मतलब क्या है? जानिए आसान Fix',
    desc: 'PM Kisan status में "Payment Stopped by State" दिख रहा है? जानिए यह error क्यों आता है, कौन से documents check होते हैं और इसे ठीक करने का पूरा तरीका।',
    keywords: ['payment stopped by state pm kisan', 'pm kisan payment stopped fix'],
    category: 'status-check',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2026-08-09T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    component: 'PmKisanPaymentStoppedByStateFix',
    ogImage: '/images/articles/hindi-yojna/payment-stopped/stopped-status.webp',
  },
  {
    slug: 'hi/recovery-notice',
    titleHi: 'PM Kisan Recovery Notice आया? पैसा वापस करने का पूरा तरीका',
    desc: 'PM Kisan recovery notice आया है तो घबराएं नहीं — जानिए किन किसानों को पैसा वापस करना होगा, online refund का पूरा process और notice गलत हो तो क्या करें।',
    keywords: ['pm kisan recovery notice', 'pm kisan paisa wapas kaise kare'],
    category: 'status-check',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2026-08-10T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    component: 'PmKisanRecoveryNoticePaisaWapas',
    ogImage: '/images/articles/hindi-yojna/recovery-notice/notice-letter.webp',
  },
  {
    slug: 'hi/kcc-limit-kaise-badhaye',
    titleHi: 'KCC लिमिट ₹3 से ₹5 लाख कैसे बढ़ाएं? Renewal का पूरा तरीका',
    desc: 'KCC लिमिट अब ₹3 लाख से बढ़कर ₹5 लाख हुई — Kisan Credit Card limit बढ़ाने का आसान तरीका, renewal process और ब्याज सब्सिडी का पूरा फायदा उठाना यहां सीखें।',
    keywords: ['kcc limit kaise badhaye', 'kcc renewal process', 'kcc interest rate'],
    category: 'loan',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2026-08-09T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    component: 'KccLimitKaiseBadhaye3Se5Lakh',
    ogImage: '/images/articles/hindi-yojna/kcc-limit/kcc-card.webp',
  },
  {
    slug: 'hi/namo-shetkari-yojana',
    titleHi: 'नमो शेतकरी योजना — ₹12000 की किस्त कब और कैसे मिलेगी? जानिए',
    desc: 'नमो शेतकरी महासन्मान निधि से Maharashtra के किसानों को ₹12000 सालाना — namo shetkari yojana status check, पात्रता और किस्त न आए तो solution यहां देखें।',
    keywords: ['नमो शेतकरी योजना', 'namo shetkari yojana status', 'namo shetkari mahasanman nidhi', 'नमो शेतकरी महासन्मान निधी'],
    category: 'farming',
    publishedTime: '2027-02-20T09:00:00+05:30',
    modifiedTime: '2026-08-10T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    component: 'NamoShetkariYojanaMaharashtra',
    ogImage: '/images/articles/hindi-yojna/namo-shetkari/shetkari-field.webp',
  },
] as const;

export const HINDI_ARTICLES_MAP: Record<string, HindiArticle> = Object.fromEntries(
  HINDI_ARTICLES.map((a) => [a.slug, a]),
);

function hindiFreshnessTime(a: HindiArticle): number {
  const published = new Date(a.publishedTime).getTime();
  const modified = a.modifiedTime ? new Date(a.modifiedTime).getTime() : 0;
  return Math.max(published, modified);
}

/** Newest-first (by published/modified), for the homepage teaser. */
export function getHindiArticlesByFreshness(): readonly HindiArticle[] {
  return [...HINDI_ARTICLES].sort((a, b) => hindiFreshnessTime(b) - hindiFreshnessTime(a));
}
