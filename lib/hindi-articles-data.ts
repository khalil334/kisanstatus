import { HINDI_RAJYA_YOJANA_ARTICLES } from '@/lib/hindi-rajya-yojana-data';
import { HINDI_YOJANA_ARTICLES } from '@/lib/hindi-yojana-data';
import { HINDI_KISANGUIDES_ARTICLES } from '@/lib/hindi-kisanguides-data';
import { HINDI_LOAN_MANDI_PASHUPALAN_ARTICLES } from '@/lib/hindi-loan-mandi-pashupalan-data';
import { HINDI_YOJANA_2026_ARTICLES } from '@/lib/hindi-yojana-2026-data';

export interface HindiArticle {
  slug: string;
  titleHi: string;
  seoTitleHi?: string;
  desc: string;
  keywords: readonly string[];
  category: 'status-check' | 'loan' | 'farming' | 'mandi' | 'pashupalan' | 'agri-business';
  publishedTime: string;
  modifiedTime: string;
  author: string;
  component: string;
  ogImage: string;
}

export const HINDI_CORE_ARTICLES: readonly HindiArticle[] = HINDI_YOJANA_ARTICLES;

export const HINDI_ARTICLES: readonly HindiArticle[] = [
  ...HINDI_YOJANA_ARTICLES,
  ...HINDI_KISANGUIDES_ARTICLES,
  ...HINDI_LOAN_MANDI_PASHUPALAN_ARTICLES,
  ...HINDI_RAJYA_YOJANA_ARTICLES,
  ...HINDI_YOJANA_2026_ARTICLES,
];

export const HINDI_ARTICLES_MAP: Record<string, HindiArticle> = Object.fromEntries(
  HINDI_ARTICLES.map((a) => [a.slug, a]),
);

function hindiFreshnessTime(a: HindiArticle): number {
  const published = new Date(a.publishedTime).getTime();
  const modified = a.modifiedTime ? new Date(a.modifiedTime).getTime() : 0;
  return Math.max(published, modified);
}

export function getHindiArticlesByFreshness(): readonly HindiArticle[] {
  return [...HINDI_ARTICLES].sort((a, b) => hindiFreshnessTime(b) - hindiFreshnessTime(a));
}

export function getHindiArticlesByCategory(category: HindiArticle['category']): readonly HindiArticle[] {
  return getHindiArticlesByFreshness().filter((a) => a.category === category);
}
