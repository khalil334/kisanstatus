import { LOAN_MANDI_PASHUPALAN_ARTICLES } from './loan-mandi-pashupalan-data';
import { CATEGORIES, type CategorySlug, type ArticleMeta } from './categories';
import { CORE_ARTICLES } from './core-articles-data';

// Re-export so existing imports elsewhere keep working unchanged.
export { CATEGORIES } from './categories';
export type { CategorySlug, ArticleMeta } from './categories';
export const ARTICLES: readonly ArticleMeta[] = [...CORE_ARTICLES, ...LOAN_MANDI_PASHUPALAN_ARTICLES];

export const ARTICLES_MAP: Readonly<Record<string, ArticleMeta>> = Object.freeze(
  Object.fromEntries(ARTICLES.map((a) => [a.slug, a]))
);

export function getArticleBySlug(slug: string): ArticleMeta | undefined {
  return ARTICLES_MAP[slug];
}

export function getArticlesByCategory(category: CategorySlug): readonly ArticleMeta[] {
  return ARTICLES.filter((a) => a.category === category);
}

function freshnessTime(a: ArticleMeta): number {
  const published = new Date(a.publishedTime).getTime();
  const modified = a.modifiedTime ? new Date(a.modifiedTime).getTime() : 0;
  return Math.max(published, modified);
}

export function getArticlesByFreshness(): readonly ArticleMeta[] {
  return [...ARTICLES].sort((a, b) => freshnessTime(b) - freshnessTime(a));
}

export function getLatestArticles(limit: number = 5): readonly ArticleMeta[] {
  return getArticlesByFreshness().slice(0, limit);
}

export function getArticlesByKeyword(keyword: string): readonly ArticleMeta[] {
  const lower = keyword.toLowerCase();
  return ARTICLES.filter(
    (a) =>
      a.keywords.some((k) => k.toLowerCase().includes(lower)) ||
      a.title.toLowerCase().includes(lower) ||
      a.desc.toLowerCase().includes(lower)
  );
}

export function getCategoryInfo(category: CategorySlug) {
  return CATEGORIES[category];
}

export function getAllCategories(): readonly CategorySlug[] {
  return Object.keys(CATEGORIES) as CategorySlug[];
}

export function getArticleCount(): number {
  return ARTICLES.length;
}

export function getRelatedArticles(slug: string, limit: number = 3): readonly ArticleMeta[] {
  const current = getArticleBySlug(slug);
  if (!current) return [];

  if (current.relatedSlugs && current.relatedSlugs.length > 0) {
    const explicit = current.relatedSlugs
      .map((s) => ARTICLES_MAP[s])
      .filter(Boolean) as ArticleMeta[];
    if (explicit.length >= limit) return explicit.slice(0, limit);

    const remaining = ARTICLES.filter(
      (a) => a.slug !== slug && a.category === current.category && !current.relatedSlugs?.includes(a.slug)
    );
    return [...explicit, ...remaining].slice(0, limit);
  }

  return ARTICLES.filter((a) => a.slug !== slug && a.category === current.category).slice(0, limit);
}

export function getReadingTime(slug: string): string {
  const mins = getArticleBySlug(slug)?.readingTime;
  return mins ? `${mins} min read` : '5 min read';
}

export function getArticlesByScheme(scheme: string): readonly ArticleMeta[] {
  return ARTICLES.filter((a) => a.schemes?.includes(scheme));
}

export function getArticlesByBank(bank: string): readonly ArticleMeta[] {
  return ARTICLES.filter((a) => a.banks?.includes(bank));
}

export function getArticlesByState(state: string): readonly ArticleMeta[] {
  return ARTICLES.filter((a) => a.states?.includes(state));
}

export function getAllSchemes(): readonly string[] {
  const set = new Set<string>();
  ARTICLES.forEach((a) => a.schemes?.forEach((s) => set.add(s)));
  return Array.from(set).sort();
}

export function getAllBanks(): readonly string[] {
  const set = new Set<string>();
  ARTICLES.forEach((a) => a.banks?.forEach((b) => set.add(b)));
  return Array.from(set).sort();
}

export function getAllStates(): readonly string[] {
  const set = new Set<string>();
  ARTICLES.forEach((a) => a.states?.forEach((s) => set.add(s)));
  return Array.from(set).sort();
}
