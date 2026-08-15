export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://kisanstatus.com';
export const SITE_NAME = 'KisanStatus';
export const SITE_TAGLINE = 'PM Kisan, Krishi Yojana & Farming Guides in Hindi';
export const SITE_DESCRIPTION = 'PM Kisan guides, farming subsidies, loans & crop insurance in Hindi. Verified step-by-step guides for government schemes & agricultural business.';

export const COPYRIGHT_START_YEAR = 2024;
export const CURRENT_YEAR = new Date().getFullYear();

export const AUTHOR_NAME = 'Manish Kumar';
export const AUTHOR_URL = `${SITE_URL}/about`;
export const AUTHOR_LINKEDIN = 'https://www.linkedin.com/in/manish-kumar-65ab33419';
export const AUTHOR_IMAGE = '/images/author-manish-kumar.webp';
export const AUTHOR_IMAGE_URL = `${SITE_URL}${AUTHOR_IMAGE}`;
export const AUTHOR_BIO = 'Sach kahoon to ye site ek personal pareshani se shuru hui thi — ghar me PM Kisan ki kist atki thi aur portal se kuch samajh nahi aa raha tha. Wahin se yojanaon ko khud track karna shuru kiya. Ab kai saal ho gaye; PM Kisan, KCC, Maandhan, subsidy — jo bhi likhta hoon, pehle official portal par khud check karta hoon. Galti ho jaye to log email par bata dete hain, aur main theek kar deta hoon. Bas yahi tareeqa hai mera.';

export const TWITTER_HANDLE = '@kisanstatus';

export const WHATSAPP_CHANNEL_URL =
  'https://whatsapp.com/channel/0029VbDvYxx8kyyS2jexHM0k';

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/profile.php?id=61590430994270',
  twitter: 'https://twitter.com/kisanstatus',
  whatsapp: WHATSAPP_CHANNEL_URL,
  linkedin: AUTHOR_LINKEDIN,
} as const;

export const LOGO_URL = `${SITE_URL}/logo.png`;
export const LOGO_SVG = `${SITE_URL}/logo.svg`;
export const LOGO_WIDTH = 512;
export const LOGO_HEIGHT = 512;

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.webp`;
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;
export const OG_IMAGE_TYPE = 'image/webp';

export const TWITTER_IMAGE = DEFAULT_OG_IMAGE;

export const FAVICON_SVG = '/favicon.svg';
export const FAVICON_PNG = '/favicon-32x32.png';
export const APPLE_TOUCH_ICON = '/apple-touch-icon.png';

export const SUPPORT_EMAIL = 'kisanstatus.support@gmail.com';
export const HELPLINE = '155261';
export const HELPLINE_ALT = '011-24300606';
export const HELPLINE_CLEAN = '155261';
export const HELPLINE_ALT_CLEAN = '1124300606';
export const OFFICIAL_EMAIL = 'pmkisan-ict@gov.in';

export const SUPPORT_HOURS = {
  timezone: 'Asia/Kolkata',
  days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  open: '09:30',
  close: '18:00',
} as const;

export const GLOBAL_KEYWORDS = [
  'pm kisan status',
  'pm kisan yojana',
  'pm kisan samman nidhi',
  'kisan credit card',
  'krishi yojana hindi',
  'farming subsidy india',
  'kisan status check',
  'organic farming guide',
  'kisan loan',
  'pm kisan ekyc',
  'pm kisan registration',
  'pm kisan beneficiary status',
  'pm kisan 15th installment',
  'pm kisan kist status',
  'krishi input subsidy',
  'kisan samman nidhi yojana',
  'agriculture schemes india',
  'farmer welfare schemes',
  'soil health card',
  'crop insurance pmfby',
];

export const SITE_KEYWORDS = [
  'KisanStatus',
  'Kisan Status',
  'KisanStatus.com',
  'PM Kisan Guide',
  'Krishi Yojana Guide',
];

export const OFFICIAL_PORTALS = {
  pmkisan: 'https://pmkisan.gov.in',
  pmkisanStatus: 'https://pmkisan.gov.in/BeneficiaryStatus.aspx',
  pmkisanEkyc: 'https://pmkisan.gov.in/eKYC.aspx',
  pmkisanRegistration: 'https://pmkisan.gov.in/NewFarmerRegistration.aspx',
  soilHealth: 'https://soilhealth.dac.gov.in',
  pmfby: 'https://pmfby.gov.in',
  nmsa: 'https://nmsa.dac.gov.in',
} as const;

export const EXTERNAL_LINK_PROPS = {
  target: '_blank',
  rel: 'noopener noreferrer nofollow',
} as const;

export const DISCLAIMER_TEXT =
  'Seedhi baat bata doon — KisanStatus.com meri apni banayi site hai, sarkar ya kisi bhi sarkari portal se iska koi lena-dena nahi. Jo bhi likhta hoon, bas samjhane ke liye likhta hoon taaki aapka kaam aasaan ho. Kist, eKYC, registration — koi bhi asli kaam ho to seedha pmkisan.gov.in jaise official portal par hi karein, wahi aakhri sach hai.';

export const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;
export const RSS_URL = `${SITE_URL}/rss.xml`;
export const ROBOTS_URL = `${SITE_URL}/robots.txt`;

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';
export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || '';

export const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GSC_TOKEN || '';
export const BING_VERIFICATION = process.env.NEXT_PUBLIC_BING_TOKEN || 'DC38C7F16BC9DE56A90C04F8EE75B97C';
export const YANDEX_VERIFICATION = process.env.NEXT_PUBLIC_YANDEX_TOKEN || '';

export const APP_NAME = 'KisanStatus';
export const APP_SHORT_NAME = 'KisanStatus';
export const APP_DESCRIPTION = 'PM Kisan & Farming Guides';
export const APP_THEME_COLOR = '#B85C1A';
export const APP_BACKGROUND_COLOR = '#ffffff';

export const MAIN_NAVIGATION = [
  { name: 'Home', href: '/', priority: 1.0 },
  { name: 'PM Kisan Status', href: '/calculator/quick-status-check', priority: 0.9 },
  { name: 'eKYC Guide', href: '/articles/PmKisanEkycOnline2026', priority: 0.9 },
  { name: 'Registration', href: '/articles/PmKisanMasterGuide2026', priority: 0.9 },
  { name: 'Calculators', href: '/calculator', priority: 0.8 },
  { name: 'Articles', href: '/articles', priority: 0.8 },
  { name: 'About Us', href: '/about', priority: 0.6 },
  { name: 'Contact', href: '/contact', priority: 0.6 },
] as const;

export const FOOTER_LINKS = {
  quickLinks: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Disclaimer', href: '/disclaimer' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'All Articles', href: '/articles' },
    { name: 'Calculators', href: '/calculator' },
  ],
  governmentLinks: [
    { name: 'PM Kisan Portal', href: OFFICIAL_PORTALS.pmkisan },
    { name: 'Beneficiary Status', href: OFFICIAL_PORTALS.pmkisanStatus },
    { name: 'New Registration', href: OFFICIAL_PORTALS.pmkisanRegistration },
    { name: 'eKYC Portal', href: OFFICIAL_PORTALS.pmkisanEkyc },
    { name: 'Soil Health Card', href: OFFICIAL_PORTALS.soilHealth },
    { name: 'PMFBY Insurance', href: OFFICIAL_PORTALS.pmfby },
  ],
} as const;

export const getCopyrightYears = (): string => {
  if (CURRENT_YEAR === COPYRIGHT_START_YEAR) {
    return String(COPYRIGHT_START_YEAR);
  }
  return `${COPYRIGHT_START_YEAR}-${CURRENT_YEAR}`;
};

export const cleanPhoneNumber = (phone: string): string => {
  return phone.replace(/\D/g, '').replace(/^0/, '');
};

export const getSchemaPhone = (phone: string): string => {
  const clean = cleanPhoneNumber(phone);
  return clean.length === 10 ? `+91-${clean}` : `+91-${clean}`;
};

export const getExternalLinkProps = () => EXTERNAL_LINK_PROPS;

export const isExternalUrl = (url: string): boolean => {
  return url.startsWith('http') && !url.includes(SITE_URL);
};
