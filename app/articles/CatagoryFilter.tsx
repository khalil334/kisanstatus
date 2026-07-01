'use client';

import Link from 'next/link';
import { CATEGORIES, type CategorySlug } from '@/lib/articles-data';

export default function CategoryFilter({ activeCategory }: { activeCategory: CategorySlug | 'all' }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      <Link
        href="/articles"
        className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
          activeCategory === 'all'
            ? 'bg-[#14532d] text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        aria-current={activeCategory === 'all' ? 'page' : undefined}
      >
        All
      </Link>
      
      {Object.entries(CATEGORIES).map(([slug, cat]) => (
        <Link
          key={slug}
          href={`/articles?category=${slug}`}
          className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
            activeCategory === slug
              ? 'bg-[#14532d] text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          aria-current={activeCategory === slug ? 'page' : undefined}
        >
          {cat.name}
        </Link>
      ))}
    </div>
  );
}