import { ARTICLES } from '@/lib/articles-data';
import { CATEGORIES } from '@/lib/categories';
import { HINDI_ARTICLES } from '@/lib/hindi-articles-data';
import { MAANDHAN_ARTICLES } from '@/lib/maandhan-data';
import { RAJYA_YOJANA_ARTICLES } from '@/lib/rajya-yojana-data';
import { HINGLISH_TO_HINDI, HINDI_TO_HINGLISH } from '@/lib/hindi-hreflang';
import { LIVE_YOJANA_2026_ARTICLES } from '@/lib/yojana-2026-data';

export type CrossLink = {
  href: string;
  label: string;
  section: string;
  freshness?: number;
};

function freshnessOf(published?: string, modified?: string): number {
  const p = published ? new Date(published).getTime() : 0;
  const m = modified ? new Date(modified).getTime() : 0;
  const t = Math.max(Number.isNaN(p) ? 0 : p, Number.isNaN(m) ? 0 : m);
  return t > 0 ? t : 0;
}

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
  href: `/articles/${a.slug}`,
  label: a.titleHi,
  section: 'हिंदी गाइड',
  freshness: freshnessOf(a.publishedTime, a.modifiedTime),
}));

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
  { href: `/articles/category/${slug}`, label: `${cat.name}, sabhi guides`, section: 'Category' },
  { href: `/articles/hi/category/${slug}`, label: `${cat.nameHi}. सभी गाइड`, section: 'श्रेणी' },
]);

const HUB_LINKS: readonly CrossLink[] = [
  { href: '/articles/hi', label: 'सभी हिंदी योजना गाइड', section: 'Hub' },
  { href: '/calculator', label: 'Sabhi Free Kisan Tools', section: 'Hub' },
  { href: '/maandhan', label: 'PM Kisan Maandhan Yojana, poora section', section: 'Hub' },
  { href: '/rajya-yojana', label: 'Rajya Kisan Yojana, sabhi rajya', section: 'Hub' },
  { href: '/articles', label: 'Sabhi PM Kisan Guides', section: 'Hub' },
];

function pathSeed(path: string): number {
  let h = 2166136261;
  for (let i = 0; i < path.length; i += 1) {
    h ^= path.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

const RECENT_DAYS = 45;
const RECENT_WEIGHT = 3;
const MID_DAYS = 120;
const MID_WEIGHT = 2;

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

  const seen = new Set<string>();
  return links.filter((l) => (seen.has(l.href) ? false : (seen.add(l.href), true)));
}

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
