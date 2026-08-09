// ---------------------------------------------------------------------------
// hreflang pairing between the Devanagari Hindi articles (/articles/hi/<slug>)
// and their already-indexed Hinglish (Latin-script Hindi) counterparts.
//
// Why this file exists
// -------------------
// Some Hindi articles cover the same topic as an older Hinglish article that is
// already indexed. Without hreflang, Google can read the two as duplicate
// content and pick one arbitrarily. hreflang tells it they are language/script
// variants of the same page, so both can rank for their own audience.
//
// Rules followed here:
//  * hreflang must be RECIPROCAL — if A points at B, B must point back at A.
//    Both routes therefore read this same map (see app/articles/hi/[slug]/page.tsx
//    and app/articles/[slug]/page.tsx / app/rajya-yojana/[slug]/page.tsx).
//  * Script is expressed with BCP-47 subtags: `hi` = Hindi in Devanagari,
//    `hi-Latn` = Hindi in Latin script (Hinglish).
//  * `x-default` points at the Hinglish version — it is the older, indexed URL
//    and the safer landing page for unmatched locales.
//  * ONLY genuine same-topic pairs are listed. A Hindi article with no true
//    Hinglish equivalent is deliberately absent: it then emits only a
//    self-referencing hreflang, which is correct and avoids telling Google that
//    two different articles are translations of each other.
// ---------------------------------------------------------------------------

import { SITE_URL } from '@/lib/site-config';

/**
 * Hindi route slug (WITHOUT the `hi/` prefix) -> site-root-relative path of the
 * equivalent Hinglish article.
 *
 * Verified 1:1 topic pairs only. Deliberately NOT paired, because the Hinglish
 * article covers a different question rather than the same one:
 *   status-check-mobile-se, karj-mafi-list, helpline-shikayat, nayi-registration,
 *   farmer-id-kaise-banaye, tractor-subsidy, gehu-ka-rate-aaj,
 *   npci-aadhaar-seeding, payment-stopped-by-state, recovery-notice,
 *   kcc-limit-kaise-badhaye
 */
export const HINDI_TO_HINGLISH: Readonly<Record<string, string>> = {
  'pm-kisan-25vi-kist': '/articles/PmKisan25viKist2027',
  'ekyc-mobile-se': '/articles/PmKisanEkycOnline2026',
  'mp-kisan-kalyan-yojana': '/rajya-yojana/mp-kisan-kalyan-yojana-kist-status',
  'namo-shetkari-yojana': '/rajya-yojana/namo-shetkari-yojana-status-check-2026',
};

/** Reverse lookup: Hinglish path -> Hindi route slug (without `hi/`). */
export const HINGLISH_TO_HINDI: Readonly<Record<string, string>> = Object.freeze(
  Object.fromEntries(Object.entries(HINDI_TO_HINGLISH).map(([hi, en]) => [en, hi])),
);

export type HreflangLanguages = Record<string, string>;

/**
 * `alternates.languages` for a Devanagari Hindi article page.
 * @param slug route slug WITHOUT the `hi/` prefix (e.g. 'pm-kisan-25vi-kist')
 */
export function hindiAlternates(slug: string): HreflangLanguages {
  const hindiUrl = `${SITE_URL}/articles/hi/${slug}`;
  const hinglishPath = HINDI_TO_HINGLISH[slug];

  if (!hinglishPath) {
    // No counterpart — self-referencing only.
    return { hi: hindiUrl, 'x-default': hindiUrl };
  }

  const hinglishUrl = `${SITE_URL}${hinglishPath}`;
  return {
    hi: hindiUrl,
    'hi-Latn': hinglishUrl,
    'x-default': hinglishUrl,
  };
}

/**
 * `alternates.languages` for a Hinglish article page — the reciprocal side.
 * @param path site-root-relative path of the Hinglish page
 *             (e.g. '/articles/PmKisan25viKist2027')
 * @param fallback languages object to use when the page has no Hindi counterpart
 */
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
