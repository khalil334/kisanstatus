// New 2026 yojana articles section (SEO-KEYWORDS-RANK1-PLAN.md).
// Components live in components/articles/yojana-2026/.
// Route: app/yojana/[slug]/page.tsx → /yojana/<slug>
// Existing data files are NOT touched — this file is the only source for this section.

export type Yojana2026ArticleMeta = {
  slug: string;
  mainKeyword: string;
  readonly secondaryKeywords: readonly string[];
  title: string; // ≤46 chars — root layout appends " - KisanStatus" (14 chars, 60 budget)
  description: string;
  ogTitle: string;
  component: string;
  officialPortal: string;
  published: string;
  modified: string;
  readTime: string;
  ogImage?: string;
  readonly relatedPaths: readonly string[];
};

export const YOJANA_2026_ARTICLES: readonly Yojana2026ArticleMeta[] = [
  {
    slug: 'fasal-bima-claim-status-check',
    mainKeyword: 'fasal bima claim status check',
    secondaryKeywords: [
      'pmfby claim status',
      'fasal bima ka paisa kab aayega',
      'pmfby application status check',
      'fasal bima claim reject kyu hota hai',
      'crop insurance claim status online',
      'pmfby 72 hours rule',
      'fasal bima complaint number 14447',
      'fasal bima claim kitne din me aata hai',
    ],
    title: 'Fasal Bima Claim Status — Paisa Kab Milega',
    description:
      'PMFBY claim atka hai? pmfby.gov.in pe status check ke exact clicks, 72 ghante ka rule, reject hone ke 5 asli karan aur complaint ka poora rasta — 14447 se DGRO tak.',
    ogTitle: 'Fasal Bima Claim Status — Paisa Kab Aur Kaise Milega',
    component: 'FasalBimaClaimStatusCheck',
    officialPortal: 'https://pmfby.gov.in',
    published: '2026-08-18T07:49:14+05:30',
    modified: '2026-08-21T22:15:00+05:30',
    readTime: '12 min read',
    relatedPaths: ['/articles/PmfbyCropInsurance2026', '/calculator/pmfby-premium'],
  },
  {
    slug: 'kisan-karj-mafi-list-all-states',
    mainKeyword: 'kisan karj mafi 2026',
    secondaryKeywords: [
      'karj mafi 2026 all state list',
      'kisan karj mafi list kaise dekhe',
      'maharashtra karjmafi yojana 2026',
      'up kisan rin mochan yojana',
      'telangana rythu runa mafi status',
      'karj mafi yojana sach ya jhooth',
      'kcc loan maaf kaise hota hai',
      'karj mafi fake list website',
    ],
    title: 'Kisan Karj Mafi 2026 — Kis State Me Chalu',
    description:
      'Koi national karj mafi scheme nahi hai. Maharashtra, Telangana, UP aur Tamil Nadu ki asli sthiti, official portal, fake list wali sites ka pattern, aur scheme na hone par OTS jaise 4 asli raaste.',
    ogTitle: 'Kisan Karj Mafi 2026 — Kis State Me Sach Me Chal Rahi Hai',
    component: 'KisanKarjMafiAllStates',
    officialPortal: 'https://mjpsky.maharashtra.gov.in',
    published: '2026-08-18T07:42:14+05:30',
    modified: '2026-08-21T22:15:00+05:30',
    readTime: '13 min read',
    relatedPaths: [
      '/rajya-yojana/up-kisan-karj-rahat-list-2026',
      '/articles/KisanCreditCardOnlineApply2026',
      '/articles/KisanRinKahaSeLe2026',
    ],
  },
  {
    slug: 'pm-kisan-khad-yojana-11000-sach',
    mainKeyword: 'pm kisan khad yojana',
    secondaryKeywords: [
      'pm kisan khad yojana 11000',
      'khad yojana registration sach ya jhooth',
      'fertilizer subsidy kaise milti hai',
      'urea subsidy per bag',
      'pm kisan khad yojana apply online fake',
      'khad yojana form fraud',
      'fertilizer dbt kya hai',
    ],
    title: 'PM Kisan Khad Yojana ₹11,000 — Sach Kya Hai',
    description:
      '₹11,000 wali koi alag Khad Yojana officially exist nahi karti. Rumor kahan se aaya, khad par sarkar asal me kya deti hai (urea ₹242 vs asli laagat ₹2,200+), aur fake registration forms se kaise bacho.',
    ogTitle: 'PM Kisan Khad Yojana ₹11,000 — Sach Kya Hai',
    component: 'PmKisanKhadYojanaSach',
    officialPortal: 'https://pmkisan.gov.in',
    published: '2026-08-18T11:30:00+05:30',
    modified: '2026-08-21T23:30:00+05:30',
    readTime: '11 min read',
    relatedPaths: [
      '/articles/PmKisanMasterGuide2026',
      '/articles/PmfbyCropInsurance2026',
      '/articles/PmKisanBeneficiaryList2026',
    ],
  },
  {
    slug: 'pm-kisan-helpline-155261',
    mainKeyword: 'pm kisan helpline number',
    secondaryKeywords: [
      'pm kisan helpline 155261',
      'pm kisan complaint number',
      'pm kisan toll free number',
      'pm kisan kist nahi aayi complaint',
      'pmkisan-ict@gov.in email',
      'pm kisan grievance kaise kare',
      'pm kisan helpdesk query form',
    ],
    title: 'PM Kisan Helpline 155261 — Complaint Guide',
    description:
      'Kist atki hai? 155261 aur 011-24300606 par kab call karein, kaunsi problem kahan hal hogi — eKYC CSC par, land seeding tehsil me, NPCI bank me — aur complaint escalate karne ka poora rasta.',
    ogTitle: 'PM Kisan Helpline 155261 — Complaint Kaise Aur Kahan Karein',
    component: 'PmKisanHelpline155261',
    officialPortal: 'https://pmkisan.gov.in',
    published: '2026-08-18T11:45:00+05:30',
    modified: '2026-08-21T23:30:00+05:30',
    readTime: '10 min read',
    relatedPaths: [
      '/articles/PmKisanPaymentFailedFix2026',
      '/articles/PmKisanEkycOnline2026',
      '/articles/PmKisanStateNodalOfficerList',
    ],
  },
  {
    slug: 'mgnrega-pashu-shed-yojana',
    mainKeyword: 'mgnrega pashu shed yojana',
    secondaryKeywords: [
      'pashu shed yojana online apply',
      'pashu shed yojana 1.60 lakh',
      'mgnrega cattle shed scheme',
      'pashu shed yojana gram panchayat',
      'nrega pashu shed kaise banwaye',
      'pashu shed yojana job card',
      'gaay bhains shed subsidy',
    ],
    title: 'MGNREGA Pashu Shed Yojana — ₹1.6L Tak',
    description:
      'Pashu shed ka koi online form nahi hota — kaam gram panchayat ke through hota hai. Job card, 2-3 pashu ka rule, asli amount ka sach, application ka poora rasta aur file atke to BDO tak complaint.',
    ogTitle: 'MGNREGA Pashu Shed Yojana — ₹1.6 Lakh Tak, Asli Process',
    component: 'MgnregaPashuShedYojana',
    officialPortal: 'https://nrega.nic.in',
    published: '2026-08-18T19:30:00+05:30',
    modified: '2026-08-22T00:10:00+05:30',
    readTime: '11 min read',
    relatedPaths: [
      '/articles/bakri-palan-yojana-nlm-subsidy',
      '/articles/murgi-palan-loan-nlm-subsidy',
      '/articles/dairy-farm-loan-without-collateral',
    ],
  },
  {
    slug: 'pashu-kisan-credit-card-apply',
    mainKeyword: 'pashu kisan credit card',
    secondaryKeywords: [
      'pashu kisan credit card apply',
      'pashu kcc loan kitna milta hai',
      'pashu kisan credit card haryana',
      'kcc for animal husbandry',
      'bhains par loan kitna milta hai',
      'pashu loan bina zameen ke',
      'pashu kcc interest rate 4 percent',
      'pashu kisan credit card documents',
    ],
    title: 'Pashu Kisan Credit Card — ₹3 Lakh Tak',
    description:
      'Pashu KCC alag scheme nahi — KCC ka hi animal husbandry roop hai. Bhains ₹60,249, gaay ₹40,783 per pashu, ₹2 lakh tak bina guarantee, 4% interest ka poora math.',
    ogTitle: 'Pashu Kisan Credit Card — ₹3 Lakh Tak Loan, Bina Zameen Ke Bhi',
    component: 'PashuKisanCreditCard',
    officialPortal: 'https://pashudhanharyana.gov.in',
    published: '2026-08-18T21:00:00+05:30',
    modified: '2026-08-22T00:10:00+05:30',
    readTime: '12 min read',
    relatedPaths: [
      '/articles/KisanCreditCardOnlineApply2026',
      '/articles/dairy-farm-loan-without-collateral',
      '/articles/sbi-dairy-loan-interest-rate',
    ],
  },
];

export const LIVE_YOJANA_2026_ARTICLES = YOJANA_2026_ARTICLES;

export const YOJANA_2026_MAP: Readonly<Record<string, Yojana2026ArticleMeta>> = Object.freeze(
  Object.fromEntries(YOJANA_2026_ARTICLES.map((a) => [a.slug, a])),
);

export function getYojana2026Article(slug: string): Yojana2026ArticleMeta | undefined {
  return YOJANA_2026_MAP[slug];
}
