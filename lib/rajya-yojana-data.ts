export type RajyaArticleStatus = 'planned' | 'live';

export type RajyaYojanaArticleMeta = {
  slug: string;
  mainKeyword: string;
  readonly secondaryKeywords: readonly string[];
  title: string;
  description: string;
  ogTitle: string;
  component: string;
  state: string;
  officialPortal: string;
  status: RajyaArticleStatus;
  published: string;
  modified: string;
  readTime: string;
  ogImage?: string;
  readonly relatedPaths: readonly string[];
};

export const RAJYA_YOJANA_ARTICLES: readonly RajyaYojanaArticleMeta[] = [
  {
    slug: 'rajasthan-kisan-samman-nidhi-9000',
    mainKeyword: 'rajasthan kisan samman nidhi 9000',
    secondaryKeywords: [
      'cm kisan samman nidhi rajasthan 7 kist kab aayegi 2026',
      'rajasthan kisan samman nidhi status check',
      'rajasthan kisan samman nidhi kist kab aayegi',
      'rajasthan kisan nidhi badhi',
      'rajasthan kisan samman nidhi kist',
      'mukhyamantri kisan samman nidhi rajasthan',
    ],
    title: 'Rajasthan Kisan Samman Nidhi — Kist Kab Aayegi',
    description:
      'Rajasthan me 6vi kist pending hai, 7vi uske baad — official date nahi aayi. Jan Soochna se status, Farmer ID ka naya pech aur ₹12,000 wali khabar ka sach.',
    ogTitle: 'Rajasthan Kisan Samman Nidhi — Nayi Raqam Aur Status',
    component: 'RajasthanKisanSammanNidhi9000',
    state: 'Rajasthan',
    officialPortal: '',
    status: 'live',
    published: '2026-06-09T14:52:57+05:30',
    modified: '2026-07-22T09:45:30+05:30',
    readTime: '10 min read',
    ogImage: '/images/articles/rajya-yojna/rajasthan-kisan-samman-nidhi-9000/hero.webp',
    relatedPaths: ['/articles/PmKisanMasterGuide2026', '/articles/PmKisan24viKist2026'],
  },
  {
    slug: 'annadata-sukhibhava-status-check-2026',
    mainKeyword: 'annadata sukhibhava status check',
    secondaryKeywords: [
      'annadata sukhibhava payment status',
      'annadata sukhibhava eligibility',
      'annadata sukhibhava beneficiary list',
      'ysr rythu bharosa new name',
      'annadata sukhibhava installment date',
      'ccrc ap gov in',
      'ccrc cards ap gov in login',
      'ccrc card status check',
    ],
    title: 'Annadata Sukhibhava Status Aise Dekho',
    description:
      'AP me kist aayi ya nahi: Annadata Sukhibhava status check, beneficiary list me naam dhoondhna, CCRC wale bataidar ke rules aur paisa na aane ki wajah.',
    ogTitle: 'Annadata Sukhibhava Status Check — AP Kisan Yojana',
    component: 'AnnadataSukhibhavaStatusCheck',
    state: 'Andhra Pradesh',
    officialPortal: 'https://annadathasukhibhava.ap.gov.in',
    status: 'live',
    published: '2026-06-11T10:16:36+05:30',
    modified: '2026-08-11T12:53:37+05:30',
    readTime: '11 min read',
    ogImage: '/images/articles/rajya-yojna/annadata-sukhibhava-status-check-2026/hero.webp',
    relatedPaths: ['/articles/PmKisanMasterGuide2026', '/articles/PmKisanBeneficiaryList2026'],
  },
  {
    slug: 'mp-kisan-kalyan-yojana-kist-status',
    mainKeyword: 'cm kisan kalyan yojana kist kab aayegi',
    secondaryKeywords: [
      'mp kisan kalyan yojana status',
      'kisan kalyan yojana mp status',
      'mp saara payment status',
      'cm kisan beneficiary status mp saara',
      'cm saara',
      'mp kisan kalyan yojana status check',
      'saara portal kisan kalyan status',
      'kisan kalyan yojana beneficiary list mp',
      'mp kisan kalyan yojana amount',
    ],
    title: 'MP Kisan Kalyan Kist Status — SAARA Portal',
    description:
      'Saal ke ₹12,000 mein se aapki kist kahan atki hai — SAARA portal par payment status kholne ka step, list mein naam dhoondhna aur late hone par kya karein.',
    ogTitle: 'MP Kisan Kalyan Yojana — Kist Aur Status Check',
    component: 'MpKisanKalyanYojanaKist',
    state: 'Madhya Pradesh',
    officialPortal: 'https://saara.mp.gov.in',
    status: 'live',
    published: '2026-06-13T15:46:30+05:30',
    modified: '2026-07-20T16:12:49+05:30',
    readTime: '10 min read',
    ogImage: '/images/articles/rajya-yojna/mp-kisan-kalyan-yojana-kist-status/hero.webp',
    relatedPaths: ['/articles/PmKisan24viKist2026', '/articles/PmKisanPaymentFailedFix2026'],
  },
  {
    slug: 'namo-shetkari-yojana-status-check-2026',
    mainKeyword: 'namo shetkari yojana status check',
    secondaryKeywords: [
      'namo shetkari hapta kadhi milel',
      'namo shetkari status',
      'namo kisan status check',
      'namo shetkari yojana beneficiary list 2026 pdf',
      'namo shetkari 9 instalment',
      'namo shetkari beneficiary list',
      'namo shetkari yojana registration',
      'pm kisan aaya namo shetkari nahi aaya',
      'नमो शेतकरी महासन्मान निधी',
    ],
    title: 'Namo Shetkari List PDF — Apna Naam Aise Nikalo',
    description:
      'PM Kisan aa gaya par Namo Shetkari ka hapta nahi? Maharashtra ki beneficiary list PDF mein naam check karein aur dono ke alag aane ki wajah samjhein.',
    ogTitle: 'Namo Shetkari Yojana — Status Aur Hapta Check',
    component: 'NamoShetkariYojanaStatus',
    state: 'Maharashtra',
    officialPortal: 'https://nsmny.mahait.org',
    status: 'live',
    published: '2026-06-15T18:27:56+05:30',
    modified: '2026-08-11T19:59:24+05:30',
    readTime: '11 min read',
    ogImage: '/images/articles/rajya-yojna/namo-shetkari-yojana-status-check-2026/hero.webp',
    relatedPaths: ['/articles/PmKisanPaymentFailedFix2026', '/articles/PmKisanBeneficiaryList2026'],
  },
  {
    slug: 'rythu-bharosa-status-check-2026',
    mainKeyword: 'rythu bharosa status check',
    secondaryKeywords: [
      'rythu bharosa',
      'rythu bharosa status check',
      'rythu bandhu list',
      'rythu bharosa payment status',
      'rythu bharosa per acre amount',
      'rythu bharosa phase wise payment',
      'rythu bandhu vs rythu bharosa',
    ],
    title: 'Rythu Bharosa Ka Paisa Aaya Ya Nahi',
    description:
      'Rythu Bharosa status Aadhaar se check karein: ₹12,000 per acre ka hisaab, phase-wise payment (pehle phase mein sirf ek acre) aur paisa na aane par sahi fix.',
    ogTitle: 'Rythu Bharosa Status Check — Telangana Kisan Yojana',
    component: 'RythuBharosaStatusCheck',
    state: 'Telangana',
    officialPortal: '',
    status: 'live',
    published: '2026-06-17T19:59:40+05:30',
    modified: '2026-08-06T09:51:39+05:30',
    readTime: '12 min read',
    ogImage: '/images/articles/rajya-yojna/rythu-bharosa-status-check-2026/hero.webp',
    relatedPaths: ['/articles/PmKisanMasterGuide2026', '/articles/PmKisanBeneficiaryList2026'],
  },
  {
    slug: 'odisha-cm-kisan-status-check-2026',
    mainKeyword: 'cm kisan odisha status check',
    secondaryKeywords: [
      'kalia list',
      'odisha cm kisan status check',
      'cm kisan portal odisha status check 2026 list village wise',
      'cm kisan beneficiary list odisha',
      'kalia yojana new name',
      'cm kisan odisha landless farmer benefit',
      'cmkisan odisha gov in status',
    ],
    title: 'Odisha CM Kisan — Kist Ka Status Aise Dekho',
    description:
      'Naam list mein hai par paisa nahi aaya? CM Kisan portal par status dekhne ka tareeka, cultivator aur landless ki alag list, aur e-KYC ka pech.',
    ogTitle: 'Odisha CM Kisan Status Check — KALIA Ka Naya Naam',
    component: 'OdishaCmKisanStatusCheck',
    state: 'Odisha',
    officialPortal: 'https://cmkisan.odisha.gov.in',
    status: 'live',
    published: '2026-06-23T11:42:30+05:30',
    modified: '2026-08-16T07:14:50+05:30',
    readTime: '10 min read',
    ogImage: '/images/articles/rajya-yojna/odisha-cm-kisan-status-check-2026/hero.webp',
    relatedPaths: ['/articles/PmKisanMasterGuide2026', '/articles/PmKisanBeneficiaryList2026'],
  },
  {
    slug: 'pm-kisan-pati-patni-dono-ko-milega',
    mainKeyword: 'pati patni dono ko pm kisan milega ya nahi',
    secondaryKeywords: [
      'pm kisan family rules',
      'ek parivar mein kitne logo ko pm kisan',
      'pm kisan exclusion list',
      'pm kisan kaun eligible nahi hai',
      'pm kisan galat paisa wapas kaise karein',
    ],
    title: 'Pati Patni Dono Ko PM Kisan Milega Ya Nahi',
    description:
      'Pati-patni dono ko PM Kisan milega ya nahi — ek parivaar ka rule, exclusion list, aur galat aaya paisa surrender karne ka poora tarika.',
    ogTitle: 'Pati Patni Dono Ko PM Kisan? — Family Rule',
    component: 'PmKisanPatiPatniRule',
    state: 'ALL',
    officialPortal: 'https://pmkisan.gov.in',
    status: 'live',
    published: '2026-06-25T11:03:57+05:30',
    modified: '2026-08-08T13:50:55+05:30',
    readTime: '9 min read',
    ogImage: '/images/articles/rajya-yojna/pm-kisan-pati-patni-dono-ko-milega/hero.webp',
    relatedPaths: [
      '/articles/PmKisanVoluntarySurrenderGuide',
      '/articles/PmKisanRejectedStatusReApplyGuide',
    ],
  },
  {
    slug: 'state-kisan-yojana-list-all-states-2026',
    mainKeyword: 'state kisan yojana list',
    secondaryKeywords: [
      'kis state mein kitna paisa milta hai kisan ko',
      'pm kisan plus state scheme',
      'rajya kisan samman nidhi list',
      'state wise farmer scheme amount',
    ],
    title: 'Har Rajya Ki Kisan Yojana — Ek Jagah Puri List',
    description:
      'Har state ki kisan income-support yojana ek jagah — scheme ka naam, raqam, official portal aur status check link ke saath.',
    ogTitle: 'State Kisan Yojana List — Kis Rajya Mein Kitna',
    component: 'StateKisanYojanaHub',
    state: 'ALL',
    officialPortal: '',
    status: 'live',
    published: '2026-06-27T21:55:32+05:30',
    modified: '2026-07-27T17:47:56+05:30',
    readTime: '12 min read',
    ogImage: '/images/articles/rajya-yojna/state-kisan-yojana-list-all-states-2026/hero.webp',
    relatedPaths: ['/articles/PmKisanMasterGuide2026'],
  },
  {
    slug: 'parihara-payment-status-check-2026',
    mainKeyword: 'parihara payment status check',
    secondaryKeywords: [
      'parihara payment status village wise',
      'bele parihara list 2026',
      'parihara karnataka gov in',
      'parihara status check aadhaar number',
      'bele hani parihara payment',
      'fruits id parihara status',
    ],
    title: 'Parihara Payment Status — Aadhaar Se Check',
    description:
      'Parihara payment status Aadhaar card se ya village wise list se dekhein, kitna paisa milta hai jaanein, aur pending ya bank me na aane par sahi fix karein.',
    ogTitle: 'Parihara Payment Status — Aadhaar Aur Village List',
    component: 'PariharaPaymentStatusCheck2026',
    state: 'Karnataka',
    officialPortal: 'https://parihara.karnataka.gov.in',
    status: 'live',
    published: '2026-08-06T08:23:14+05:30',
    modified: '2026-08-18T11:31:42+05:30',
    readTime: '13 min read',
    ogImage: '/images/articles/rajya-yojna/parihara-payment-status-check-2026/hero.webp',
    relatedPaths: ['/articles/PmKisanMasterGuide2026', '/articles/PmKisanPaymentFailedFix2026'],
  },
];

export const LIVE_RAJYA_YOJANA_ARTICLES: readonly RajyaYojanaArticleMeta[] =
  RAJYA_YOJANA_ARTICLES.filter((a) => a.status === 'live');

export function getRajyaYojanaArticle(slug: string): RajyaYojanaArticleMeta | undefined {
  return RAJYA_YOJANA_ARTICLES.find((a) => a.slug === slug);
}

export const INSTALMENT_TRACKER_PAGE = {
  path: '/articles/PmKisan24viKist2026',
  mainKeyword: 'pm kisan 24vi kist kab aayegi',
  secondaryKeywords: [
    'pm kisan 24vi kist status check',
    'pm kisan kist list 2026',
    'pm kisan next installment date',
  ],
  note:
    'Naya article na banayein. Kist release hone ke din hi "Latest Update" box update karein, ' +
    'release se pehle sirf "expected" likhein, aur us din is cluster ke state articles ko link karein.',
} as const;
