import { SITE_URL } from '@/lib/site-config';

/**
 * Paths de-indexed during the 18-Aug-2026 spam-hit recovery.
 * hreflang must not pair an indexed page with a noindex counterpart:
 * doing so hands Google a canonical/alternate that it is told to drop.
 * Remove a path here once its page is rewritten and re-indexed.
 * Ref: docs/spam-hit/04-page-level-audit.md
 */
export const DEINDEXED_PATHS: ReadonlySet<string> = new Set([
  '/yojana/fasal-bima-claim-status-check',
  '/yojana/kisan-karj-mafi-list-all-states',
  '/yojana/pm-kisan-khad-yojana-11000-sach',
  '/yojana/pm-kisan-helpline-155261',
  '/yojana/mgnrega-pashu-shed-yojana',
  '/yojana/pashu-kisan-credit-card-apply',
  '/articles/hi/fasal-bima-claim-status',
  '/articles/hi/pm-kisan-khad-yojana-sach',
  '/articles/hi/pm-kisan-helpline-155261',
  '/articles/hi/mgnrega-pashu-shed-yojana',
  '/articles/hi/pashu-kisan-credit-card',
  '/articles/hi/rajasthan-kisan-samman-nidhi',
  '/articles/hi/annadata-sukhibhava-status',
  '/articles/hi/rythu-bharosa-status',
  '/articles/hi/odisha-cm-kisan-status',
  '/articles/hi/pati-patni-pm-kisan-rule',
  '/articles/hi/state-kisan-yojana-list',
  '/articles/hi/parihara-payment-status',
  '/articles/hi/namo-drone-didi-yojana',
]);

export const HINDI_TO_HINGLISH: Readonly<Record<string, string>> = {
  'pm-kisan-25vi-kist': '/articles/PmKisan25viKist2027',
  'ekyc-mobile-se': '/articles/PmKisanEkycOnline2026',
  'gau-mutra-kharid-yojana': '/articles/gau-mutra-kharid-yojana-up-2026',
  'farmer-id-kaise-banaye': '/articles/AgriStackKyaHai2026',
  'gehu-ka-rate-aaj': '/articles/gehu-ka-bhav-msp-vs-mandi',
  'mp-kisan-kalyan-yojana': '/rajya-yojana/mp-kisan-kalyan-yojana-kist-status',
  'namo-shetkari-yojana': '/rajya-yojana/namo-shetkari-yojana-status-check-2026',
  'namo-drone-didi-yojana': '/articles/namo-drone-didi-yojana-shg-selection',
  'rajasthan-kisan-samman-nidhi': '/rajya-yojana/rajasthan-kisan-samman-nidhi-9000',
  'annadata-sukhibhava-status': '/rajya-yojana/annadata-sukhibhava-status-check-2026',
  'rythu-bharosa-status': '/rajya-yojana/rythu-bharosa-status-check-2026',
  'odisha-cm-kisan-status': '/rajya-yojana/odisha-cm-kisan-status-check-2026',
  'pati-patni-pm-kisan-rule': '/rajya-yojana/pm-kisan-pati-patni-dono-ko-milega',
  'state-kisan-yojana-list': '/rajya-yojana/state-kisan-yojana-list-all-states-2026',
  'parihara-payment-status': '/rajya-yojana/parihara-payment-status-check-2026',
  'fasal-bima-claim-status': '/yojana/fasal-bima-claim-status-check',
  'kisan-karj-mafi-list': '/yojana/kisan-karj-mafi-list-all-states',
  'pm-kisan-khad-yojana-sach': '/yojana/pm-kisan-khad-yojana-11000-sach',
  'pm-kisan-helpline-155261': '/yojana/pm-kisan-helpline-155261',
  'mgnrega-pashu-shed-yojana': '/yojana/mgnrega-pashu-shed-yojana',
  'pashu-kisan-credit-card': '/yojana/pashu-kisan-credit-card-apply',
};

export const HINGLISH_TO_HINDI: Readonly<Record<string, string>> = Object.freeze(
  Object.fromEntries(Object.entries(HINDI_TO_HINGLISH).map(([hi, en]) => [en, hi])),
);

export type HreflangLanguages = Record<string, string>;

export function hindiAlternates(slug: string): HreflangLanguages {
  const hindiUrl = `${SITE_URL}/articles/hi/${slug}`;
  const hinglishPath = HINDI_TO_HINGLISH[slug];

  if (!hinglishPath || DEINDEXED_PATHS.has(hinglishPath)) {
    return { 'hi-IN': hindiUrl, 'x-default': hindiUrl };
  }

  const hinglishUrl = `${SITE_URL}${hinglishPath}`;
  return {
    'hi-IN': hindiUrl,
    'hi-Latn': hinglishUrl,
    'x-default': hinglishUrl,
  };
}

export function hinglishAlternates(
  path: string,
  fallback: HreflangLanguages,
): HreflangLanguages {
  const hindiSlug = HINGLISH_TO_HINDI[path];
  if (!hindiSlug || DEINDEXED_PATHS.has(`/articles/hi/${hindiSlug}`)) return fallback;

  const hinglishUrl = `${SITE_URL}${path}`;
  return {
    'hi-IN': `${SITE_URL}/articles/hi/${hindiSlug}`,
    'hi-Latn': hinglishUrl,
    'x-default': hinglishUrl,
  };
}
