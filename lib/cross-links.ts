import { ARTICLES } from '@/lib/articles-data';
import { CATEGORIES } from '@/lib/categories';
import { HINDI_ARTICLES } from '@/lib/hindi-articles-data';
import { MAANDHAN_ARTICLES } from '@/lib/maandhan-data';
import { RAJYA_YOJANA_ARTICLES } from '@/lib/rajya-yojana-data';
import { HINGLISH_TO_HINDI, HINDI_TO_HINGLISH } from '@/lib/hindi-hreflang';
import { LIVE_YOJANA_2026_ARTICLES } from '@/lib/yojana-2026-data';

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
  /**
   * Epoch ms of the target's last publish/update, when known. Drives the
   * freshness weighting in `weight()` — see GSC-DISCOVERED-NOT-INDEXED-FIX.md
   * Fix 2: new pages are the ones Google has "discovered" but not crawled, so
   * they need inbound links the most. Undated pools (tools, hubs, categories)
   * are stable evergreen targets and stay unweighted.
   */
  freshness?: number;
};

/** Latest of published/modified, as epoch ms. 0 when neither parses. */
function freshnessOf(published?: string, modified?: string): number {
  const p = published ? new Date(published).getTime() : 0;
  const m = modified ? new Date(modified).getTime() : 0;
  const t = Math.max(Number.isNaN(p) ? 0 : p, Number.isNaN(m) ? 0 : m);
  return t > 0 ? t : 0;
}

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
  freshness: freshnessOf(a.publishedTime, a.modifiedTime),
}));

// noindex articles are deliberately out of Google's index (see core-articles-data.ts) —
// linking to them wastes crawl budget and sends a mixed signal, so filter them here.
const HINGLISH_LINKS: readonly CrossLink[] = ARTICLES.filter((a) => !a.noindex).map((a) => ({
  href: `/articles/${a.slug}`,
  label: a.title,
  section: 'Guide',
  freshness: freshnessOf(a.publishedTime, a.modifiedTime),
}));

const MAANDHAN_LINKS: readonly CrossLink[] = MAANDHAN_ARTICLES.map((a) => ({
  href: `/maandhan/${a.slug}`,
  label: a.title,
  section: 'Maandhan Pension',
  freshness: freshnessOf(a.published, a.modified),
}));

const RAJYA_LINKS: readonly CrossLink[] = [
  ...RAJYA_YOJANA_ARTICLES.filter((a) => a.status === 'live').map((a) => ({
    href: `/rajya-yojana/${a.slug}`,
    label: a.title,
    section: 'Rajya Yojana',
  })),
  ...LIVE_YOJANA_2026_ARTICLES.map((a) => ({
    href: `/yojana/${a.slug}`,
    label: a.title,
    section: 'Yojana',
    freshness: freshnessOf(a.published, a.modified),
  })),
];

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

// Freshness weighting (Fix 2). A page newer than RECENT_DAYS gets RECENT_WEIGHT
// slots in the rotation pool instead of one, so it receives proportionally more
// inbound links until it ages out — at which point the weighting decays to 1 on
// its own and the spread returns to even. Deliberately mild: a big multiplier
// would starve the older pages that currently carry the section's rankings.
const RECENT_DAYS = 45;
const RECENT_WEIGHT = 3;
const MID_DAYS = 120;
const MID_WEIGHT = 2;

/**
 * Expand a pool so recent entries occupy more slots. Order is preserved, and
 * an entry's copies stay adjacent, so the walk in `rotate` still spreads links
 * across distinct targets rather than repeating one.
 *
 * `now` is passed in rather than read from the clock so a single render pass is
 * internally consistent (and so builds stay reproducible within a day).
 */
function weight(pool: readonly CrossLink[], now: number): readonly CrossLink[] {
  if (!pool.some((l) => l.freshness)) return pool;
  const day = 86_400_000;
  const out: CrossLink[] = [];
  for (const l of pool) {
    const age = l.freshness ? (now - l.freshness) / day : Infinity;
    const copies = age <= RECENT_DAYS ? RECENT_WEIGHT : age <= MID_DAYS ? MID_WEIGHT : 1;
    for (let i = 0; i < copies; i += 1) out.push(l);
  }
  return out;
}

/**
 * Pick `count` links from `pool`, walking forward from a path-derived offset.
 * Skips repeats so a weighted pool never yields the same href twice on one page.
 */
function rotate(pool: readonly CrossLink[], seed: number, count: number, currentPath: string): CrossLink[] {
  const usable = pool.filter((l) => l.href !== currentPath);
  if (usable.length === 0) return [];
  const start = seed % usable.length;
  const out: CrossLink[] = [];
  const taken = new Set<string>();
  for (let i = 0; i < usable.length && out.length < count; i += 1) {
    const link = usable[(start + i) % usable.length];
    if (taken.has(link.href)) continue;
    taken.add(link.href);
    out.push(link);
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
  const now = Date.now();

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

  const links = pools.flatMap(({ pool, count }, i) =>
    rotate(weight(pool, now), seed + i * 7, count, currentPath)
  );
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
