'use client';

import Link from 'next/link';
import { CATEGORIES } from '@/lib/articles-data';

export default function CategoryFilter({ activeCategory }: { activeCategory: string }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {/* All Button */}
      <Link
        href="/articles"
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          activeCategory === 'all'
            ? 'bg-[#14532d] text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        All
      </Link>
      
      {/* Category Buttons */}
      {Object.entries(CATEGORIES).map(([slug, cat]) => (
        <Link
          key={slug}
          href={`/articles?category=${slug}`}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === slug
              ? 'bg-[#14532d] text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {cat.name}
        </Link>
      ))}
    </div>
  );
}