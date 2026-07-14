'use client';

import Link from 'next/link';
import { CATEGORIES, type CategorySlug } from '@/lib/articles-data';

export default function CategoryFilter({ activeCategory }: { activeCategory: CategorySlug | 'all' }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8" role="navigation" aria-label="Article categories filter">
      <Link
        href="/articles"
        className={`px-4 py-2 rounded-full text-sm font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 ${
          activeCategory === 'all'
            ? 'bg-[#14532d] text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        aria-current={activeCategory === 'all' ? 'page' : undefined}
      >
        Sabhi Guides
      </Link>
      
      {Object.entries(CATEGORIES).map(([slug, cat]) => {
        // Safe type casting to access nameHi and icon if they exist in your data
        const catInfo = cat as { name: string; nameHi?: string; icon?: string };
        const displayName = catInfo.nameHi || catInfo.name;
        const icon = catInfo.icon || '📄';
        
        return (
          <Link
            key={slug}
            href={`/articles?category=${slug}`}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 ${
              activeCategory === slug
                ? 'bg-[#14532d] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-current={activeCategory === slug ? 'page' : undefined}
          >
            {icon} {displayName}
          </Link>
        );
      })}
    </div>
  );
}