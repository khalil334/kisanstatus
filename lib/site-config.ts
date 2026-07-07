// ── lib/site-config.ts ─────────────────────────────────────
// Global site constants — single source of truth for domain, branding, contacts
// ⚠️ SITE_URL env var set karo .env.local mein development ke liye

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://kisanstatus.com';
export const SITE_NAME = 'KisanStatus';
export const AUTHOR_NAME = 'KisanStatus Team';  // ✅ REVERTED: Team name
export const AUTHOR_URL = `${SITE_URL}/about`;
export const AUTHOR_BIO = 'Indian kisanon ko government schemes navigate karne mein help karne wala independent expert team.';  // ✅ REVERTED
export const TWITTER_HANDLE = '@kisanstatus';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.webp`;
export const LOGO_URL = `${SITE_URL}/logo.webp`;
export const SUPPORT_EMAIL = 'kisanstatus.support@gmail.com';
export const HELPLINE = '155261';
export const HELPLINE_ALT = '011-24300606';
export const OFFICIAL_EMAIL = 'pmkisan-ict@gov.in';
export const GSC_TOKEN = process.env.NEXT_PUBLIC_GSC_TOKEN;

export const DISCLAIMER_TEXT =
  'KisanStatus.com ek independent information portal hai — Government of India ya kisi official portal ka platform nahi hai. Yahan di gayi jankari educational purpose ke liye hai. Kisi bhi sarkari kaam ke liye official portal pmkisan.gov.in ya helpline 155261 use karein.';

export const PMKISAN_PORTAL = 'https://pmkisan.gov.in';
export const PMKISAN_STATUS_URL = 'https://pmkisan.gov.in/BeneficiaryStatus.aspx';
export const PMKISAN_EKYC_URL = 'https://pmkisan.gov.in/eKYC.aspx';
export const SOIL_HEALTH_PORTAL = 'https://soilhealth.dac.gov.in';
export const PMFBY_PORTAL = 'https://pmfby.gov.in';

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/profile.php?id=61590430994270',
  twitter: 'https://twitter.com/kisanstatus',
} as const;