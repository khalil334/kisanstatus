'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ARTICLES } from '@/lib/articles-data';
import { LIVE_RAJYA_YOJANA_ARTICLES } from '@/lib/rajya-yojana-data';
import { MAANDHAN_ARTICLES } from '@/lib/maandhan-data';

const CATEGORY_EMOJIS: Record<string, string> = {
  'status-check': '',
  'loan': '',
  'farming': '',
  'mandi': '',
  'rajya-yojana': '',
  'pension-scheme': '',
};

type SearchEntry = {
  slug: string;
  href: string;
  title: string;
  desc: string;
  keywords: readonly string[];
  category: string;
  date: string;
};

const SEARCH_INDEX: readonly SearchEntry[] = [
  ...ARTICLES.map((a) => ({
    slug: a.slug,
    href: `/articles/${a.slug}`,
    title: a.title,
    desc: a.desc,
    keywords: a.keywords,
    category: a.category,
    date: a.publishedTime || '',
  })),
  ...LIVE_RAJYA_YOJANA_ARTICLES.map((a) => ({
    slug: a.slug,
    href: `/rajya-yojana/${a.slug}`,
    title: a.title,
    desc: a.description,
    keywords: [a.mainKeyword, ...a.secondaryKeywords],
    category: 'rajya-yojana',
    date: a.published || '',
  })),
  ...MAANDHAN_ARTICLES.map((a) => ({
    slug: a.slug,
    href: `/maandhan/${a.slug}`,
    title: a.title,
    desc: a.description,
    keywords: ['maandhan', 'pension'] as readonly string[],
    category: a.category,
    date: a.published || '',
  })),
];

function fuzzySearch(query: string) {
  if (!query.trim()) return [];
  const q = query.toLowerCase().trim();
  return SEARCH_INDEX.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.keywords.some((kw) => kw.toLowerCase().includes(q)) ||
      item.category.toLowerCase().includes(q)
  )
    .sort((a, b) => {
      const aExact = a.title.toLowerCase().includes(q) ? 0 : 1;
      const bExact = b.title.toLowerCase().includes(q) ? 0 : 1;
      if (aExact !== bExact) return aExact - bExact;
      const dateA = new Date(a.date || 0).getTime();
      const dateB = new Date(b.date || 0).getTime();
      return dateB - dateA;
    })
    .slice(0, 6)
    .map((a) => ({
      slug: a.slug,
      href: a.href,
      title: a.title,
      emoji: CATEGORY_EMOJIS[a.category] || '',
      category: a.category,
    }));
}

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const results = fuzzySearch(query);

  useEffect(() => {
    if (!isOpen) return;
    const focusTimer = setTimeout(() => inputRef.current?.focus(), 100);
    document.body.style.overflow = 'hidden';
    return () => {
      clearTimeout(focusTimer);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Search articles">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative max-w-lg mx-auto mt-20 md:mt-32 px-4">
        <div className="bg-[var(--color-card)] rounded-2xl shadow-2xl overflow-hidden border border-[var(--color-border)]">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-bg-alt)]">
            <svg className="w-5 h-5 text-[var(--color-primary)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search karo... e.g. FTO, loan, mandi"
              className="flex-1 bg-transparent text-sm font-medium text-[var(--color-text)] placeholder-[var(--color-text-muted)] outline-none"
            />
            <button onClick={onClose} className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] text-xs font-bold px-2 py-1 rounded bg-[var(--color-bg-alt)] hover:bg-[var(--color-border)] transition-colors">
              ESC
            </button>
          </div>

          <div className="max-h-[60vh] overflow-y-auto">
            {!query.trim() && (
              <div className="p-6 text-center">
                <p className="text-sm text-[var(--color-text-muted)]">Type karke search karo — articles, guides, calculators</p>
              </div>
            )}

            {query.trim() && results.length === 0 && (
              <div className="p-6 text-center">
                <span className="text-3xl block mb-2"></span>
                <p className="text-sm text-[var(--color-text-muted)]">"<strong>{query}</strong>" ke liye kuch nahi mila</p>
                <Link href="/articles" onClick={onClose} className="text-[var(--color-primary)] text-xs font-bold mt-2 inline-block hover:underline">
                  Saare Articles Dekho →
                </Link>
              </div>
            )}

            {results.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--color-bg-alt)] transition-colors border-b border-[var(--color-border)] last:border-0 group"
              >
                <span className="text-xl shrink-0">{item.emoji}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors truncate">
                    {item.title}
                  </p>
                  <p className="text-[10px] text-[var(--color-text-muted)] font-medium uppercase tracking-wide">{item.category}</p>
                </div>
                <span className="text-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 text-xs font-bold">→</span>
              </Link>
            ))}
          </div>

          <div className="px-4 py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)] flex items-center justify-between">
            <span className="text-[10px] text-[var(--color-text-muted)]">
              {query.trim() ? `${results.length} results` : `${SEARCH_INDEX.length} articles available`}
            </span>
            <Link href="/articles" onClick={onClose} className="text-[10px] text-[var(--color-primary)] font-bold hover:underline">
              View All Articles →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
