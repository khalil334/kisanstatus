'use client';

import { useState, useEffect, useMemo, useRef, lazy } from 'react';
import Link from 'next/link';

const ARTICLES = lazy(() => import('@/lib/articles-data').then(mod => ({ default: mod.ARTICLES })));

const CATEGORY_EMOJIS: Record<string, string> = {
  'status-check': '📆',
  'ekyc': '🔐',
  'payment': '💸',
  'loan': '💳',
  'registration': '📝',
  'farming': '🌱',
  'correction': '✏️',
  'mandi': '🏪',
};

function fuzzySearch(query: string, articles: any[]) {
  if (!query.trim()) return [];
  const q = query.toLowerCase().trim();
  return articles
    .filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.keywords.some((kw: string) => kw.toLowerCase().includes(q)) ||
        item.category.toLowerCase().includes(q)
    )
    .sort((a, b) => {
      const aExact = a.title.toLowerCase().includes(q) ? 0 : 1;
      const bExact = b.title.toLowerCase().includes(q) ? 0 : 1;
      if (aExact !== bExact) return aExact - bExact;
      const dateA = new Date(a.publishedTime || 0).getTime();
      const dateB = new Date(b.publishedTime || 0).getTime();
      return dateB - dateA;
    })
    .slice(0, 6)
    .map((a) => ({
      slug: a.slug,
      title: a.title,
      emoji: CATEGORY_EMOJIS[a.category] || '📄',
      category: a.category,
    }));
}

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState<any[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    import('@/lib/articles-data').then(mod => setArticles(mod.ARTICLES));
  }, []);

  const results = useMemo(() => fuzzySearch(query, articles), [query, articles]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Search articles">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative max-w-lg mx-auto mt-20 md:mt-32 px-4">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-green-200">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 bg-green-50">
            <svg className="w-5 h-5 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search karo... e.g. eKYC, payment, loan"
              className="flex-1 bg-transparent text-sm font-medium text-gray-900 placeholder-gray-400 outline-none"
            />
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xs font-bold px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 transition-colors">
              ESC
            </button>
          </div>

          <div className="max-h-[60vh] overflow-y-auto">
            {!query.trim() && (
              <div className="p-6 text-center">
                <span className="text-3xl block mb-2">🔍</span>
                <p className="text-sm text-gray-500">Type karke search karo — articles, guides, calculators</p>
              </div>
            )}

            {query.trim() && results.length === 0 && (
              <div className="p-6 text-center">
                <span className="text-3xl block mb-2">😕</span>
                <p className="text-sm text-gray-500">"<strong>{query}</strong>" ke liye kuch nahi mila</p>
                <Link href="/articles" onClick={onClose} className="text-green-700 text-xs font-bold mt-2 inline-block hover:underline">
                  Saare Articles Dekho →
                </Link>
              </div>
            )}

            {results.map((item) => (
              <Link
                key={item.slug}
                href={`/articles/${item.slug}`}
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 transition-colors border-b border-gray-50 last:border-0 group"
              >
                <span className="text-xl shrink-0">{item.emoji}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-gray-900 group-hover:text-green-700 transition-colors truncate">
                    {item.title}
                  </p>
                  <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">{item.category}</p>
                </div>
                <span className="text-green-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 text-xs font-bold">→</span>
              </Link>
            ))}
          </div>

          <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
            <span className="text-[10px] text-gray-400">
              {query.trim() ? `${results.length} results` : `${articles.length} articles available`}
            </span>
            <Link href="/articles" onClick={onClose} className="text-[10px] text-green-700 font-bold hover:underline">
              View All Articles →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}