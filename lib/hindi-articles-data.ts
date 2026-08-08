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
  /** Article body — plain paragraphs separated by \n\n. STUB for now. */
  content: string;
}

export const HINDI_ARTICLES: readonly HindiArticle[] = [
  {
    slug: 'pm-kisan-25vi-kist-kab-aayegi',
    titleHi: 'पीएम किसान 25वीं किस्त कब आएगी? (Date, Status, Latest Update)',
    desc: 'पीएम किसान 25वीं किस्त की तारीख, स्टेटस चेक और लेटेस्ट अपडेट — पूरी जानकारी हिंदी में।',
    keywords: ['पीएम किसान 25वीं किस्त', 'pm kisan 25th installment date', 'पीएम किसान किस्त कब आएगी'],
    category: 'status-check',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2027-02-15T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    content: 'पीएम किसान 25वीं किस्त फरवरी-मार्च 2027 में आने की उम्मीद है।',
  },
  {
    slug: 'pm-kisan-status-check-mobile-number-se',
    titleHi: 'पीएम किसान स्टेटस चेक मोबाइल नंबर से 2027 — Step by Step',
    desc: 'मोबाइल नंबर से पीएम किसान स्टेटस कैसे चेक करें — आसान स्टेप-बाय-स्टेप गाइड।',
    keywords: ['पीएम किसान स्टेटस चेक मोबाइल नंबर से', 'pm kisan status mobile number'],
    category: 'status-check',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2027-02-15T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    content: 'मोबाइल नंबर से पीएम किसान स्टेटस चेक करने का पूरा तरीका यहाँ जानें।',
  },
  {
    slug: 'kisan-karj-mafi-list-2027',
    titleHi: 'किसान कर्ज माफी लिस्ट 2027 — किन राज्यों में कर्ज माफ हुआ?',
    desc: 'किसान कर्ज माफी 2027 — UP, MP, महाराष्ट्र, राजस्थान, झारखंड की राज्यवार लिस्ट।',
    keywords: ['किसान कर्ज माफी लिस्ट 2027', 'karj mafi list', 'kisan karj mafi 2027'],
    category: 'loan',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2027-02-15T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    content: 'किसान कर्ज माफी 2027 की राज्यवार लिस्ट और आवेदन प्रक्रिया यहाँ देखें।',
  },
  {
    slug: 'pm-kisan-helpline-number-complaint',
    titleHi: 'पीएम किसान हेल्पलाइन नंबर — शिकायत कैसे करें? (Complaint Guide)',
    desc: 'पीएम किसान हेल्पलाइन नंबर और शिकायत दर्ज करने की पूरी प्रक्रिया हिंदी में।',
    keywords: ['पीएम किसान हेल्पलाइन नंबर', 'pm kisan complaint kaise kare'],
    category: 'status-check',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2027-02-15T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    content: 'पीएम किसान हेल्पलाइन नंबर और शिकायत दर्ज करने का तरीका यहाँ जानें।',
  },
  {
    slug: 'mukhyamantri-kisan-kalyan-yojana-mp-12000',
    titleHi: 'मुख्यमंत्री किसान कल्याण योजना MP — ₹12000 कैसे मिलेंगे? (Status Check)',
    desc: 'MP मुख्यमंत्री किसान कल्याण योजना — ₹12000 सालाना, स्टेटस चेक और पात्रता।',
    keywords: ['मुख्यमंत्री किसान कल्याण योजना', 'mp kisan kalyan yojana status', '₹12000 किसान योजना MP'],
    category: 'farming',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2027-02-15T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    content: 'MP के किसानों को PM Kisan + राज्य योजना से ₹12000 सालाना मिलते हैं।',
  },
  {
    slug: 'pm-kisan-new-registration-2027',
    titleHi: 'पीएम किसान नई रजिस्ट्रेशन 2027 — नया आवेदन कैसे करें?',
    desc: 'पीएम किसान नई रजिस्ट्रेशन 2027 — Farmer ID के साथ नया आवेदन करने की प्रक्रिया।',
    keywords: ['पीएम किसान नई रजिस्ट्रेशन', 'pm kisan new registration 2027'],
    category: 'status-check',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2027-02-15T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    content: 'पीएम किसान में नया रजिस्ट्रेशन करने की पूरी प्रक्रिया स्टेप-बाय-स्टेप यहाँ है।',
  },
  {
    slug: 'farmer-id-card-kaise-banaye-2027',
    titleHi: 'फार्मर आईडी कार्ड कैसे बनाएं 2027 (AgriStack Farmer Registry)',
    desc: 'फार्मर आईडी कार्ड (AgriStack) कैसे बनाएं — राज्यवार पोर्टल लिंक और प्रक्रिया।',
    keywords: ['फार्मर आईडी कार्ड कैसे बनाएं', 'farmer id registration 2027', 'agristack farmer id'],
    category: 'farming',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2027-02-15T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    content: 'फार्मर आईडी अब PM Kisan के लिए जरूरी है — बनाने का तरीका जानें।',
  },
  {
    slug: 'tractor-subsidy-2027-state-wise-list',
    titleHi: 'ट्रैक्टर सब्सिडी 2027 — राज्यवार लिस्ट (50% तक सब्सिडी कैसे लें)',
    desc: 'ट्रैक्टर सब्सिडी 2027 — UP, बिहार, MP, राजस्थान, हरियाणा की राज्यवार जानकारी।',
    keywords: ['ट्रैक्टर सब्सिडी 2027', 'tractor subsidy state wise'],
    category: 'agri-business',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2027-02-15T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    content: 'ट्रैक्टर पर 50% तक सब्सिडी — हर राज्य की योजना की जानकारी यहाँ।',
  },
  {
    slug: 'gehu-ka-rate-aaj-msp-vs-mandi-bhav',
    titleHi: 'गेहूं का रेट आज 2027 — MSP vs मंडी भाव (राज्यवार)',
    desc: 'गेहूं का आज का रेट — MSP और मंडी भाव की राज्यवार तुलना, वीकली अपडेट।',
    keywords: ['गेहूं का रेट आज', 'gehu ka bhav today', 'गेहूं MSP 2027'],
    category: 'mandi',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2027-02-15T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    content: 'गेहूं का आज का मंडी भाव और MSP की राज्यवार तुलना यहाँ देखें।',
  },
  {
    slug: 'pm-kisan-ekyc-mobile-se-kaise-kare',
    titleHi: 'पीएम किसान eKYC मोबाइल से कैसे करें 2027 (OTP + Face App)',
    desc: 'पीएम किसान eKYC मोबाइल से — OTP और Face Auth App से स्टेप-बाय-स्टेप।',
    keywords: ['पीएम किसान eKYC मोबाइल से', 'pm kisan ekyc kaise kare', 'face auth ekyc'],
    category: 'status-check',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2027-02-15T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    content: 'मोबाइल से पीएम किसान eKYC करने के दोनों तरीके — OTP और Face App।',
  },
  {
    slug: 'npci-aadhaar-seeding-dbt-payment',
    titleHi: 'NPCI आधार सीडिंग कैसे करें — DBT पेमेंट के लिए (Step-by-Step)',
    desc: 'NPCI आधार सीडिंग — DBT पेमेंट के लिए बैंक में आधार लिंक करने की प्रक्रिया।',
    keywords: ['npci aadhaar seeding online', 'dbt enable kaise kare', 'आधार बैंक लिंक स्टेटस'],
    category: 'status-check',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2027-02-15T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    content: 'PM Kisan पेमेंट फेल होने का सबसे बड़ा कारण NPCI सीडिंग है।',
  },
  {
    slug: 'pm-kisan-payment-stopped-by-state-fix',
    titleHi: 'PM Kisan Status में "Payment Stopped by State" का मतलब + Fix',
    desc: '"Payment Stopped by State" एरर का मतलब क्या है और इसे कैसे ठीक करें।',
    keywords: ['payment stopped by state pm kisan', 'pm kisan payment stopped fix'],
    category: 'status-check',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2027-02-15T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    content: 'Payment Stopped by State एरर का मतलब और उसे ठीक करने का तरीका।',
  },
  {
    slug: 'pm-kisan-recovery-notice-paisa-wapas',
    titleHi: 'PM Kisan Recovery Notice आया है? पैसा वापस कैसे करें (Guide)',
    desc: 'PM Kisan रिकवरी नोटिस — अपात्र किसान पैसा वापस कैसे करें, पूरी गाइड।',
    keywords: ['pm kisan recovery notice', 'pm kisan paisa wapas kaise kare'],
    category: 'status-check',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2027-02-15T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    content: 'रिकवरी नोटिस मिलने पर घबराएं नहीं — पैसा वापस करने की प्रक्रिया जानें।',
  },
  {
    slug: 'kcc-limit-kaise-badhaye-3-se-5-lakh',
    titleHi: 'KCC लिमिट कैसे बढ़ाएं — ₹3 लाख से ₹5 लाख (Interest Subvention)',
    desc: 'KCC लिमिट ₹3 लाख से ₹5 लाख कैसे बढ़ाएं — रिन्यूअल और ब्याज सब्सिडी।',
    keywords: ['kcc limit kaise badhaye', 'kcc renewal process', 'kcc interest rate'],
    category: 'loan',
    publishedTime: '2027-02-15T09:00:00+05:30',
    modifiedTime: '2027-02-15T09:00:00+05:30',
    author: 'KisanStatus Editorial Team',
    content: 'KCC की लिमिट ₹3 लाख से ₹5 लाख तक बढ़ाने का पूरा तरीका।',
  },
] as const;

export const HINDI_ARTICLES_MAP: Record<string, HindiArticle> = Object.fromEntries(
  HINDI_ARTICLES.map((a) => [a.slug, a]),
);
