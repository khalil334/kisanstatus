// ── lib/site-config.ts ─────────────────────────────────────
// Global site constants — single source of truth for domain, branding, contacts, and SEO
// ⚠️ NEXT_PUBLIC_SITE_URL env var set karo .env.local mein (e.g., http://localhost:3000 or https://kisanstatus.com)

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://kisanstatus.com';
export const SITE_NAME = 'KisanStatus';
export const SITE_TAGLINE = 'PM Kisan, Krishi Yojana & Farming Guides in Hindi';
export const SITE_DESCRIPTION = 'KisanStatus provides verified, step-by-step guides for PM Kisan Samman Nidhi, crop insurance, farming subsidies, and agricultural schemes in simple Hinglish.';

export const AUTHOR_NAME = 'KisanStatus Team';
export const AUTHOR_URL = `${SITE_URL}/about`;
export const AUTHOR_BIO = 'Indian kisanon ko government schemes navigate karne mein help karne wala independent expert team.';

export const TWITTER_HANDLE = '@kisanstatus';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.webp`; // Ensure this file exists in public/ folder (1200x630px recommended)
export const LOGO_URL = `${SITE_URL}/logo.webp`;

export const SUPPORT_EMAIL = 'kisanstatus.support@gmail.com';
export const HELPLINE = '155261';
export const HELPLINE_ALT = '011-24300606';
export const OFFICIAL_EMAIL = 'pmkisan-ict@gov.in';

// Global SEO Keywords (Root layout mein use honge)
export const GLOBAL_KEYWORDS = [
  'pm kisan status',
  'pm kisan yojana',
  'kisan credit card',
  'krishi yojana hindi',
  'farming subsidy india',
  'kisan status check',
  'organic farming guide',
  'kisan loan'
];

export const DISCLAIMER_TEXT =
  'KisanStatus.com ek independent information portal hai — Government of India ya kisi official portal ka affiliated platform nahi hai. Yahan di gayi jankari educational purpose ke liye hai. Kisi bhi sarkari kaam ke liye official portal pmkisan.gov.in ya helpline 155261 use karein.';

export const OFFICIAL_PORTALS = {
  pmkisan: 'https://pmkisan.gov.in',
  pmkisanStatus: 'https://pmkisan.gov.in/BeneficiaryStatus.aspx',
  pmkisanEkyc: 'https://pmkisan.gov.in/eKYC.aspx',
  soilHealth: 'https://soilhealth.dac.gov.in',
  pmfby: 'https://pmfby.gov.in',
  nmsa: 'https://nmsa.dac.gov.in', // Added for soil/organic farming references
} as const;

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/profile.php?id=61590430994270',
  twitter: 'https://twitter.com/kisanstatus',
} as const;