import { ARTICLES } from '@/lib/articles-data';
import { CATEGORIES } from '@/lib/categories';
import { HINDI_ARTICLES } from '@/lib/hindi-articles-data';
import { MAANDHAN_ARTICLES } from '@/lib/maandhan-data';
import { RAJYA_YOJANA_ARTICLES } from '@/lib/rajya-yojana-data';
import { HINGLISH_TO_HINDI, HINDI_TO_HINGLISH } from '@/lib/hindi-hreflang';

/**
 * Cross-section internal linking (SEO-INDEXING-FIX.md — Fix 0 / Part 11).
 *
 * Problem: 46 of 138 sitemap URLs are not indexed, and GSC URL Inspection returned
 * ZERO internal referring URLs for 8 of 9 pages inspected. Sections only link inside
 * themselves, so Hindi articles, calculators, /maandhan/*, /rajya-yojana/* and the
 * category pages get no inbound links and stay at the back of the crawl queue.
 *
 * Fix: every article page renders a block of links that deliberately point OUT of its
 * own section. Targets are chosen by a deterministic rotation over the source page's
 * position in a stable global ordering, so the inbound links spread evenly across all
 * target pages instead of piling onto the newest few. No randomness — the same page
 * always renders the same links, so static output stays stable between builds.
 */

export type CrossLink = {
  href: string;
  label: string;
  section: string;
};

/** Calculator/tool pages — paths + labels mirror app/calculator/page.tsx TOOLS. */
const CALCULATOR_LINKS: readonly CrossLink[] = [
  { href: '/calculator/quick-status-check', label: 'PM Kisan Status Check Tool', section: 'Tool' },
  { href: '/calculator/installment-tracker', label: 'Kist Status Tracker', section: 'Tool' },
  { href: '/calculator/pm-kisan-benefit', label: 'PM Kisan Benefit Calculator', section: 'Tool' },
  { href: '/calculator/kcc-loan-emi', label: 'KCC Loan EMI Calculator', section: 'Tool' },
  { href: '/calculator/pmfby-premium', label: 'Fasal Bima Premium Calculator', section: 'Tool' },
  { href: '/calculator/msp-income', label: 'MSP Income Calculator', section: 'Tool' },
  { href: '/calculator/crop-profit', label: 'Kheti Ka Munafa Calculator', section: 'Tool' },
];

const HINDI_LINKS: readonly CrossLink[] = HINDI_ARTICLES.map((a) => ({
  // Hindi slugs are stored with the `hi/` prefix, so the path is /articles/hi/<slug>.
  href: `/articles/${a.slug}`,
  label: a.titleHi,
  section: 'हिंदी गाइड',
}));

const HINGLISH_LINKS: readonly CrossLink[] = ARTICLES.map((a) => ({
  href: `/articles/${a.slug}`,
  label: a.title,
  section: 'Guide',
}));

const MAANDHAN_LINKS: readonly CrossLink[] = MAANDHAN_ARTICLES.map((a) => ({
  href: `/maandhan/${a.slug}`,
  label: a.title,
  section: 'Maandhan Pension',
}));

const RAJYA_LINKS: readonly CrossLink[] = RAJYA_YOJANA_ARTICLES.filter((a) => a.status === 'live').map((a) => ({
  href: `/rajya-yojana/${a.slug}`,
  label: a.title,
  section: 'Rajya Yojana',
}));

const CATEGORY_LINKS: readonly CrossLink[] = Object.entries(CATEGORIES).flatMap(([slug, cat]) => [
  { href: `/articles/category/${slug}`, label: `${cat.name} — sabhi guides`, section: 'Category' },
  { href: `/articles/hi/category/${slug}`, label: `${cat.nameHi} — सभी गाइड`, section: 'श्रेणी' },
]);

const HUB_LINKS: readonly CrossLink[] = [
  { href: '/articles/hi', label: 'सभी हिंदी योजना गाइड', section: 'Hub' },
  { href: '/calculator', label: 'Sabhi Free Kisan Tools', section: 'Hub' },
  { href: '/maandhan', label: 'PM Kisan Maandhan Yojana — poora section', section: 'Hub' },
  { href: '/rajya-yojana', label: 'Rajya Kisan Yojana — sabhi rajya', section: 'Hub' },
  { href: '/articles', label: 'Sabhi PM Kisan Guides', section: 'Hub' },
];

/** Stable, deterministic 32-bit hash of the source path — drives the rotation offset. */
function pathSeed(path: string): number {
  let h = 2166136261;
  for (let i = 0; i < path.length; i += 1) {
    h ^= path.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

/** Pick `count` links from `pool`, walking forward from a path-derived offset. */
function rotate(pool: readonly CrossLink[], seed: number, count: number, currentPath: string): CrossLink[] {
  const usable = pool.filter((l) => l.href !== currentPath);
  if (usable.length === 0) return [];
  const start = seed % usable.length;
  const out: CrossLink[] = [];
  for (let i = 0; i < Math.min(count, usable.length); i += 1) {
    out.push(usable[(start + i) % usable.length]);
  }
  return out;
}

export type SectionKind = 'articles' | 'hindi' | 'maandhan' | 'rajya-yojana';

/**
 * Build the cross-section link set for one page.
 *
 * Always returns links from at least three *other* sections plus one hub page, so no
 * page is a dead end and every orphan section receives inbound links from across the site.
 */
export function getCrossSectionLinks(currentPath: string, section: SectionKind): CrossLink[] {
  const seed = pathSeed(currentPath);

  const pools: readonly { pool: readonly CrossLink[]; count: number }[] =
    section === 'hindi'
      ? [
          { pool: HINGLISH_LINKS, count: 2 },
          { pool: CALCULATOR_LINKS, count: 1 },
          { pool: MAANDHAN_LINKS, count: 1 },
          { pool: RAJYA_LINKS, count: 1 },
          { pool: CATEGORY_LINKS, count: 1 },
        ]
      : section === 'articles'
        ? [
            { pool: HINDI_LINKS, count: 2 },
            { pool: CALCULATOR_LINKS, count: 1 },
            { pool: MAANDHAN_LINKS, count: 1 },
            { pool: RAJYA_LINKS, count: 1 },
            { pool: CATEGORY_LINKS, count: 1 },
          ]
        : section === 'maandhan'
          ? [
              { pool: HINDI_LINKS, count: 2 },
              { pool: CALCULATOR_LINKS, count: 1 },
              { pool: RAJYA_LINKS, count: 1 },
              { pool: CATEGORY_LINKS, count: 1 },
              { pool: HINGLISH_LINKS, count: 1 },
            ]
          : [
              { pool: HINDI_LINKS, count: 2 },
              { pool: CALCULATOR_LINKS, count: 1 },
              { pool: MAANDHAN_LINKS, count: 1 },
              { pool: CATEGORY_LINKS, count: 1 },
              { pool: HINGLISH_LINKS, count: 1 },
            ];

  const links = pools.flatMap(({ pool, count }, i) => rotate(pool, seed + i * 7, count, currentPath));
  links.push(...rotate(HUB_LINKS, seed, 1, currentPath));

  // De-duplicate while preserving order.
  const seen = new Set<string>();
  return links.filter((l) => (seen.has(l.href) ? false : (seen.add(l.href), true)));
}

/**
 * The same-topic page in the other language, if one exists (hreflang pairs already
 * mapped in lib/hindi-hreflang.ts). Rendered as a visible link, not just a <link> tag.
 */
export function getLanguagePairLink(currentPath: string): CrossLink | null {
  if (currentPath.startsWith('/articles/hi/')) {
    const slug = currentPath.replace('/articles/hi/', '');
    const hinglishPath = HINDI_TO_HINGLISH[slug];
    if (!hinglishPath) return null;
    const target = [...HINGLISH_LINKS, ...MAANDHAN_LINKS, ...RAJYA_LINKS].find((l) => l.href === hinglishPath);
    return target
      ? { href: target.href, label: target.label, section: 'Read in Hinglish' }
      : null;
  }

  const hindiSlug = HINGLISH_TO_HINDI[currentPath];
  if (!hindiSlug) return null;
  const target = HINDI_LINKS.find((l) => l.href === `/articles/hi/${hindiSlug}`);
  return target ? { href: target.href, label: target.label, section: 'हिंदी में पढ़ें' } : null;
}
