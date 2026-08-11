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
      'rajasthan kisan samman nidhi status check',
      'rajasthan kisan nidhi badhi',
      'rajasthan kisan samman nidhi kist',
      'mukhyamantri kisan samman nidhi rajasthan',
    ],
    title: 'Rajasthan Kisan Samman Nidhi 2026',
    description:
      'Rajasthan Kisan Samman Nidhi ki badhi hui raqam, eligibility, status check ka process aur kist ki jaankari — official notification ke saath.',
    ogTitle: 'Rajasthan Kisan Samman Nidhi — Nayi Raqam Aur Status',
    component: 'RajasthanKisanSammanNidhi9000',
    state: 'Rajasthan',
    officialPortal: '',
    status: 'live',
    published: '2026-08-03T09:00:00+05:30',
    modified: '2026-08-03T09:00:00+05:30',
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
    title: 'Annadata Sukhibhava Status Check 2026',
    description:
      'Andhra Pradesh Annadata Sukhibhava scheme ka status check, eligibility, tenant farmer CCRC rules aur payment ki poori jaankari.',
    ogTitle: 'Annadata Sukhibhava Status Check — AP Kisan Yojana',
    component: 'AnnadataSukhibhavaStatusCheck',
    state: 'Andhra Pradesh',
    officialPortal: 'https://annadathasukhibhava.ap.gov.in',
    status: 'live',
    published: '2026-08-03T09:00:00+05:30',
    modified: '2026-08-05T21:00:00+05:30',
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
    title: 'MP Kisan Kalyan Yojana Kist Status',
    description:
      'Madhya Pradesh CM Kisan Kalyan Yojana ki kist kab aayegi, SAARA portal se status check aur beneficiary list dekhne ka process.',
    ogTitle: 'MP Kisan Kalyan Yojana — Kist Aur Status Check',
    component: 'MpKisanKalyanYojanaKist',
    state: 'Madhya Pradesh',
    officialPortal: 'https://saara.mp.gov.in',
    status: 'live',
    published: '2026-08-03T09:00:00+05:30',
    modified: '2026-08-04T18:30:00+05:30',
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
    title: 'Namo Shetkari Yojana Status Check 2026',
    description:
      'Maharashtra Namo Shetkari Mahasanman Nidhi ka status check, hapta ki jaankari, aur PM Kisan aane ke baad bhi paisa na aane ki wajah.',
    ogTitle: 'Namo Shetkari Yojana — Status Aur Hapta Check',
    component: 'NamoShetkariYojanaStatus',
    state: 'Maharashtra',
    officialPortal: 'https://nsmny.mahait.org',
    status: 'live',
    published: '2026-08-03T09:00:00+05:30',
    modified: '2026-08-05T21:00:00+05:30',
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
    title: 'Rythu Bharosa Status Check 2026',
    description:
      'Telangana Rythu Bharosa ka status check, per-acre raqam, phase-wise payment ka system aur Rythu Bandhu se farak.',
    ogTitle: 'Rythu Bharosa Status Check — Telangana Kisan Yojana',
    component: 'RythuBharosaStatusCheck',
    state: 'Telangana',
    officialPortal: '',
    status: 'live',
    published: '2026-08-03T09:00:00+05:30',
    modified: '2026-08-05T21:00:00+05:30',
    readTime: '11 min read',
    ogImage: '/images/articles/rajya-yojna/rythu-bharosa-status-check-2026/hero.webp',
    relatedPaths: ['/articles/PmKisanMasterGuide2026', '/articles/PmKisanBeneficiaryList2026'],
  },
  {
    slug: 'krishak-bandhu-status-check-2026',
    mainKeyword: 'krishak bandhu status check',
    secondaryKeywords: [
      'krishak bandhu status check voter id',
      'krishak bandhu verification list',
      'krishak bandhu voter id se status',
      'krishak bandhu death benefit',
      'krishak bandhu payment date',
      'কৃষক বন্ধু status',
    ],
    title: 'Krishak Bandhu Status Check 2026',
    description:
      'West Bengal Krishak Bandhu ka status Voter ID se kaise check karein, verification list, death benefit aur payment ki jaankari.',
    ogTitle: 'Krishak Bandhu Status Check — Voter ID Se',
    component: 'KrishakBandhuStatusCheck',
    state: 'West Bengal',
    officialPortal: 'https://krishakbandhu.wb.gov.in',
    status: 'live',
    published: '2026-08-03T09:00:00+05:30',
    modified: '2026-08-05T21:00:00+05:30',
    readTime: '10 min read',
    ogImage: '/images/articles/rajya-yojna/krishak-bandhu-status-check-2026/hero.webp',
    relatedPaths: ['/articles/PmKisanMasterGuide2026', '/articles/PmKisanCorrectionForm2026'],
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
    title: 'Odisha CM Kisan Status Check 2026',
    description:
      'Odisha CM Kisan (purani KALIA) ka status check, beneficiary list, aur landless kisan mazdooron ke liye milne wale benefit ki jaankari.',
    ogTitle: 'Odisha CM Kisan Status Check — KALIA Ka Naya Naam',
    component: 'OdishaCmKisanStatusCheck',
    state: 'Odisha',
    officialPortal: 'https://cmkisan.odisha.gov.in',
    status: 'live',
    published: '2026-08-03T09:00:00+05:30',
    modified: '2026-08-05T09:00:00+05:30',
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
    title: 'Pati Patni Dono Ko PM Kisan Milega?',
    description:
      'PM Kisan mein ek parivar ka rule, pati-patni dono ko paisa milta hai ya nahi, poori exclusion list aur galat mila paisa wapas karne ka process.',
    ogTitle: 'Pati Patni Dono Ko PM Kisan? — Family Rule',
    component: 'PmKisanPatiPatniRule',
    state: 'ALL',
    officialPortal: 'https://pmkisan.gov.in',
    status: 'live',
    published: '2026-08-03T09:00:00+05:30',
    modified: '2026-08-03T09:00:00+05:30',
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
    title: 'State Kisan Yojana List 2026 — Sabhi Rajya',
    description:
      'Har state ki kisan income-support yojana ek jagah — scheme ka naam, raqam, official portal aur status check link ke saath.',
    ogTitle: 'State Kisan Yojana List — Kis Rajya Mein Kitna',
    component: 'StateKisanYojanaHub',
    state: 'ALL',
    officialPortal: '',
    status: 'live',
    published: '2026-08-03T09:00:00+05:30',
    modified: '2026-08-04T18:30:00+05:30',
    readTime: '12 min read',
    ogImage: '/images/articles/rajya-yojna/state-kisan-yojana-list-all-states-2026/hero.webp',
    relatedPaths: ['/articles/PmKisanMasterGuide2026'],
  },
  {
    slug: 'krishak-unnati-yojana-status-check-2026',
    mainKeyword: 'krishak unnati yojana status check',
    secondaryKeywords: [
      'krishak unnati yojana payment status',
      'krishak unnati yojana antar rashi',
      'cg dhan bonus 3100 status',
      'krishak unnati yojana 15000 per acre',
    ],
    title: 'Krishak Unnati Yojana Status Check 2026',
    description:
      'Chhattisgarh Krishak Unnati Yojana antar rashi ka status, ₹3,100 prati quintal ka hisaab, ekmusht payment aur Kharif 2026 se naya ₹15,000 prati acre component.',
    ogTitle: 'Krishak Unnati Yojana — Antar Rashi Aur Naya ₹15,000 Component',
    component: 'KrishakUnnatiYojanaStatusCheck',
    state: 'Chhattisgarh',
    officialPortal: 'https://khadya.cg.nic.in',
    status: 'live',
    published: '2026-08-04T21:30:00+05:30',
    modified: '2026-08-04T21:30:00+05:30',
    readTime: '11 min read',
    ogImage: '/images/articles/rajya-yojna/krishak-unnati-yojana-status-check-2026/hero.webp',
    relatedPaths: ['/articles/PmKisanMasterGuide2026', '/articles/PmKisan24viKist2026'],
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
