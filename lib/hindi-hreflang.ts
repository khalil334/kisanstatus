import { SITE_URL } from '@/lib/site-config';

export const HINDI_TO_HINGLISH: Readonly<Record<string, string>> = {
  'pm-kisan-25vi-kist': '/articles/PmKisan25viKist2027',
  'ekyc-mobile-se': '/articles/PmKisanEkycOnline2026',
  'gau-mutra-kharid-yojana': '/articles/gau-mutra-kharid-yojana-up-2026',
  'farmer-id-kaise-banaye': '/articles/AgriStackKyaHai2026',
  'gehu-ka-rate-aaj': '/articles/gehu-ka-bhav-msp-vs-mandi',
  'mp-kisan-kalyan-yojana': '/rajya-yojana/mp-kisan-kalyan-yojana-kist-status',
  'namo-shetkari-yojana': '/rajya-yojana/namo-shetkari-yojana-status-check-2026',
  'namo-drone-didi-yojana': '/articles/namo-drone-didi-yojana-shg-selection',
};

export const HINGLISH_TO_HINDI: Readonly<Record<string, string>> = Object.freeze(
  Object.fromEntries(Object.entries(HINDI_TO_HINGLISH).map(([hi, en]) => [en, hi])),
);

export type HreflangLanguages = Record<string, string>;

export function hindiAlternates(slug: string): HreflangLanguages {
  const hindiUrl = `${SITE_URL}/articles/hi/${slug}`;
  const hinglishPath = HINDI_TO_HINGLISH[slug];

  if (!hinglishPath) {
    return { hi: hindiUrl, 'x-default': hindiUrl };
  }

  const hinglishUrl = `${SITE_URL}${hinglishPath}`;
  return {
    hi: hindiUrl,
    'hi-Latn': hinglishUrl,
    'x-default': hinglishUrl,
  };
}

export function hinglishAlternates(
  path: string,
  fallback: HreflangLanguages,
): HreflangLanguages {
  const hindiSlug = HINGLISH_TO_HINDI[path];
  if (!hindiSlug) return fallback;

  const hinglishUrl = `${SITE_URL}${path}`;
  return {
    hi: `${SITE_URL}/articles/hi/${hindiSlug}`,
    'hi-Latn': hinglishUrl,
    'x-default': hinglishUrl,
  };
}
