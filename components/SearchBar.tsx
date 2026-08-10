'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/articles?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-8" role="search">
      <div className="flex-1 relative">
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search: PM Kisan Status, KCC Loan, Tractor Subsidy..."
          className="w-full px-5 py-4 pl-12 rounded-xl border-0 text-gray-900 placeholder-gray-400 text-sm bg-white shadow-xl focus:outline-none focus:ring-2 focus:ring-green-300"
          aria-label="Search PM Kisan articles and guides"
        />
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" aria-hidden="true">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </span>
      </div>
      <button
        type="submit"
        className="px-8 py-4 bg-yellow-300 hover:bg-yellow-200 text-green-900 font-bold rounded-xl text-sm transition-colors shadow-xl whitespace-nowrap"
      >
        Search
      </button>
    </form>
  );
}
