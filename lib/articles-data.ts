// ── lib/articles-data.ts ───────────────────────────────────
// Centralized article metadata — single source of truth
// ⚠️ OgImage paths match actual folder structure on GitHub

export const CATEGORIES = {
  'status-check': {
    name: 'Verification & Status',
    nameHi: 'सत्यापन और स्थिति',
    description: 'Tranche verification, beneficiary roster, FTO, land integration guides',
    descriptionHi: 'किस्त सत्यापन, लाभार्थी सूची, एफटीओ, भूमि एकीकरण गाइड',
    icon: '📊',
    color: 'blue',
  },
  'loan': {
    name: 'Credit & Loans',
    nameHi: 'ऋण और क्रेडिट',
    description: 'Credit facility, farm equipment loan, and bank credit guides',
    descriptionHi: 'क्रेडिट सुविधा, कृषि उपकरण ऋण, और बैंक क्रेडिट गाइड',
    icon: '🏦',
    color: 'amber',
  },
  'farming': {
    name: 'Farming & Schemes',
    nameHi: 'खेती और योजनाएं',
    description: 'Soil analysis, crop protection, AgriStack, Nano DAP and other schemes',
    descriptionHi: 'मृदा विश्लेषण, फसल सुरक्षा, एग्रीस्टैक, नैनो डीएपी और अन्य योजनाएं',
    icon: '🌾',
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
  {
    slug: 'kisan-rin-kaha-se-le-2026',
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
    relatedSlugs: ['kisan-credit-card-online-apply-2026', 'kisan-tractor-loan-2026'],
  },
  {
    slug: 'kisan-tractor-loan-2026',
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
    ogImage: '/images/kisan-tractor-loan-2026/hero-banner.webp',
    relatedSlugs: ['kisan-rin-kaha-se-le-2026', 'kisan-credit-card-online-apply-2026'],
  },
  {
    slug: 'pm-kisan-beneficiary-list-2026',
    title: 'PM Kisan Beneficiary List 2026 — Apna Naam Kaise Check Karein?',
    desc: 'Beneficiary list mein naam hai ya nahi? Village-wise roster dekh sakte ho, PDF download kar sakte ho.',
    ogTitle: 'PM Kisan Beneficiary List 2026 — Naam Check Karo',
    keywords: ['pm kisan beneficiary list 2026', 'pm kisan village wise roster', 'पीएम किसान लाभार्थी सूची 2026'],
    component: 'PmKisanBeneficiaryList2026',
    category: 'status-check',
    publishedTime: '2026-02-10T08:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 7,
    schemes: ['pm-kisan'],
    ogImage: '/images/pm-kisan-beneficiary-list-village-wise-2026.webp',
    relatedSlugs: ['pm-kisan-beneficiary-list-village-wise-2026', 'pm-kisan-24vi-kist'],
  },
  {
    slug: 'pm-kisan-beneficiary-list-village-wise-2026',
    title: 'Apne Gaon Ki Beneficiary List Dekho — Village Wise Roster 2026',
    desc: 'Apne gaon mein kaun-kaun PM Kisan ka paisa le raha hai — State, District, Block select karo.',
    ogTitle: 'PM Kisan Gaon Wise Beneficiary List 2026 — Complete Guide',
    keywords: ['pm kisan beneficiary list village wise', 'pm kisan gaon wise roster', 'पीएम किसान ग्राम वार लाभार्थी सूची'],
    component: 'PmKisanBeneficiaryListVillageWise2026',
    category: 'status-check',
    publishedTime: '2026-02-15T08:00:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 6,
    schemes: ['pm-kisan'],
    ogImage: '/images/pm-kisan-beneficiary-list-village-wise-2026.webp',
    relatedSlugs: ['pm-kisan-beneficiary-list-2026', 'pm-kisan-24vi-kist'],
  },
  {
    slug: 'kisan-credit-card-online-apply-2026',
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
    ogImage: '/images/kisan-credit-card-online-apply-2026/hero-image.webp',
    relatedSlugs: ['kisan-rin-kaha-se-le-2026', 'kisan-tractor-loan-2026'],
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
    ogImage: '/images/pm-kisan-fto-generated-ka-matlab-kya-hai.webp',
    relatedSlugs: ['pm-kisan-24vi-kist', 'pm-kisan-beneficiary-list-2026'],
  },
  {
    slug: 'nano-dap-500ml-price-in-india-2026',
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
    ogImage: '/images/nano-dap-500ml-price-in-india-2026.webp',
    relatedSlugs: ['soil-health-card-complete-guide-2026', 'agristack-kya-hai'],
  },
  {
    slug: 'pm-kisan-24vi-kist',
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
    relatedSlugs: ['pm-kisan-beneficiary-list-2026', 'pm-kisan-fto-generated-ka-matlab-kya-hai'],
  },
  {
    slug: 'agristack-kya-hai',
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
    ogImage: '/images/agristack-kya-hai/infographic.webp',
    relatedSlugs: ['nano-dap-500ml-price-in-india-2026', 'soil-health-card-complete-guide-2026'],
  },
  {
    slug: 'pm-kisan-complete-guide',
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
    ogImage: '/images/pm-kisan-complete-guide/hero.webp',
    relatedSlugs: ['pm-kisan-24vi-kist', 'pm-kisan-beneficiary-list-2026'],
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
    ogImage: '/images/soil-health-card-complete-guide-2026/hero.webp',
    relatedSlugs: ['nano-dap-500ml-price-in-india-2026', 'agristack-kya-hai'],
  },
  {
    slug: 'mandi-bhav-today',
    title: 'Aaj Ka Mandi Bhav — Sabzi Aur Fruit Rates (Daily Update)',
    desc: 'Aloo ₹20-24, pyaaz ₹26-30, tamatar ₹38-45. Daily updated rates.',
    ogTitle: 'Aaj Ka Mandi Bhav — Live Sabzi Aur Fruit Rates',
    keywords: ['aaj ka mandi bhav', 'mandi bhav today hindi', 'aaj ke sabzi bhav'],
    component: 'MandiBhavContent',
    category: 'mandi',
    publishedTime: '2026-06-30T09:30:00+05:30',
    modifiedTime: '2026-07-04T08:00:00+05:30',
    readingTime: 5,
    ogImage: '/images/articles/mandi-bhav-today/mandi-fresh-vegetables-mixed.webp',
  },
] as const;

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