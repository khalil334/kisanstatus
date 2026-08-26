
export type Yojana2026ArticleMeta = {
  slug: string;
  mainKeyword: string;
  readonly secondaryKeywords: readonly string[];
  title: string;
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
      'PMFBY claim atka hai? pmfby.gov.in pe status check ke exact clicks, 72 ghante ka rule, reject hone ke 5 karan aur complaint ka rasta — 14447 se DGRO tak.',
    ogTitle: 'Fasal Bima Claim Status — Paisa Kab Aur Kaise Milega',
    component: 'FasalBimaClaimStatusCheck',
    officialPortal: 'https://pmfby.gov.in',
    published: '2026-08-18T07:33:52+05:30',
    modified: '2026-08-20T19:02:04+05:30',
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
      'Koi national karj mafi scheme nahi hai. Maharashtra, Telangana, UP aur Tamil Nadu ki asli sthiti, official portals, fake list sites aur OTS jaise asli raaste.',
    ogTitle: 'Kisan Karj Mafi 2026 — Kis State Me Sach Me Chal Rahi Hai',
    component: 'KisanKarjMafiAllStates',
    officialPortal: 'https://mjpsky.maharashtra.gov.in',
    published: '2026-08-18T15:43:47+05:30',
    modified: '2026-08-21T22:35:18+05:30',
    readTime: '13 min read',
    relatedPaths: [
      '/rajya-yojana/state-kisan-yojana-list-all-states-2026',
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
      '₹11,000 wali alag Khad Yojana officially exist nahi karti. Rumor kahan se aaya, khad par sarkar asal me kya deti hai, aur fake forms se kaise bacho.',
    ogTitle: 'PM Kisan Khad Yojana ₹11,000 — Sach Kya Hai',
    component: 'PmKisanKhadYojanaSach',
    officialPortal: 'https://pmkisan.gov.in',
    published: '2026-08-18T18:47:43+05:30',
    modified: '2026-08-19T13:49:36+05:30',
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
      'Kist atki hai? 155261 aur 011-24300606 par kab call karein — eKYC CSC par, land seeding tehsil me, NPCI bank me — aur complaint escalate karne ka rasta.',
    ogTitle: 'PM Kisan Helpline 155261 — Complaint Kaise Aur Kahan Karein',
    component: 'PmKisanHelpline155261',
    officialPortal: 'https://pmkisan.gov.in',
    published: '2026-08-18T10:23:28+05:30',
    modified: '2026-08-21T22:59:24+05:30',
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
      'Pashu shed ka koi online form nahi hota — kaam gram panchayat se hota hai. Job card, 2-3 pashu ka rule, asli amount, aur file atke to BDO tak complaint.',
    ogTitle: 'MGNREGA Pashu Shed Yojana — ₹1.6 Lakh Tak, Asli Process',
    component: 'MgnregaPashuShedYojana',
    officialPortal: 'https://nrega.nic.in',
    published: '2026-08-18T08:42:59+05:30',
    modified: '2026-08-19T14:29:34+05:30',
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
    published: '2026-08-18T12:39:21+05:30',
    modified: '2026-08-21T08:07:18+05:30',
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
