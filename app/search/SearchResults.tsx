'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ARTICLES } from '@/lib/articles-data';
import { MAANDHAN_ARTICLES } from '@/lib/maandhan-data';
import { LIVE_RAJYA_YOJANA_ARTICLES } from '@/lib/rajya-yojana-data';

type Entry = {
  slug: string;
  href: string;
  title: string;
  desc: string;
  keywords: readonly string[];
  category: string;
};

const SEARCH_INDEX: readonly Entry[] = [
  ...ARTICLES.map((a) => ({
    slug: a.slug,
    href: `/articles/${a.slug}`,
    title: a.title,
    desc: a.desc,
    keywords: a.keywords,
    category: a.category,
  })),
  ...MAANDHAN_ARTICLES.map((a) => ({
    slug: a.slug,
    href: `/maandhan/${a.slug}`,
    title: a.title,
    desc: a.description,
    keywords: ['maandhan', 'pension'] as readonly string[],
    category: a.category,
  })),
  ...LIVE_RAJYA_YOJANA_ARTICLES.map((a) => ({
    slug: a.slug,
    href: `/rajya-yojana/${a.slug}`,
    title: a.title,
    desc: a.description,
    keywords: [a.mainKeyword, ...a.secondaryKeywords] as readonly string[],
    category: 'rajya-yojana',
  })),
];

const CATEGORY_EMOJIS: Record<string, string> = {
  'status-check': '',
  loan: '',
  farming: '🌱',
  mandi: '🏪',
  'rajya-yojana': '🏛️',
  'pension-scheme': '👴',
};

function search(query: string): readonly Entry[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return SEARCH_INDEX.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.keywords.some((kw) => kw.toLowerCase().includes(q)) ||
      item.category.toLowerCase().includes(q),
  ).sort((a, b) => {
    const aExact = a.title.toLowerCase().includes(q) ? 0 : 1;
    const bExact = b.title.toLowerCase().includes(q) ? 0 : 1;
    return aExact - bExact;
  });
}

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q')?.trim() || '';
  const results = useMemo(() => search(query), [query]);

  if (!query) return null;

  return (
    <div className="mb-10">
      <h2 className="text-sm font-bold text-[var(--color-text-muted)] uppercase tracking-wide mb-4">
        &ldquo;{query}&rdquo; ke liye {results.length} result{results.length === 1 ? '' : 's'}
      </h2>

      {results.length === 0 ? (
        <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 text-center">
          <p className="text-[var(--color-text)] font-bold mb-1">Koi result nahi mila</p>
          <p className="text-sm text-[var(--color-text-muted)]">
            Spelling check karein ya neeche popular searches try karein.
          </p>
        </div>
      ) : (
        <ul className="space-y-3">
          {results.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4 hover:border-green-400 dark:hover:border-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <span className="font-bold text-[var(--color-text)]">
                  {CATEGORY_EMOJIS[item.category] || ''} {item.title}
                </span>
                <p className="mt-1 text-sm text-[var(--color-text-muted)] line-clamp-2">{item.desc}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
