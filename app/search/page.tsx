import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { SITE_URL, AUTHOR_NAME, AUTHOR_URL } from '@/lib/site-config';
import SearchBar from '@/components/SearchBar';
import SearchResults from './SearchResults';

export const metadata: Metadata = {
  title: `Search`,
  description: 'PM Kisan, KCC loan, subsidy aur mandi bhav guides search karein. 70+ verified Hinglish guides ek jagah.',
  robots: { index: false, follow: true },
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
  creator: AUTHOR_NAME,
  alternates: { canonical: SITE_URL },
};

const POPULAR_SEARCHES = [
  { label: 'PM Kisan Status', query: 'pm kisan status' },
  { label: 'eKYC', query: 'ekyc' },
  { label: 'KCC Loan', query: 'kcc loan' },
  { label: 'Beneficiary List', query: 'beneficiary list' },
  { label: 'Tractor Subsidy', query: 'tractor' },
  { label: 'Mandi Bhav', query: 'mandi bhav' },
];

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <div className="bg-[var(--color-primary)] py-12">
        <div className="container-site max-w-3xl text-center">
          <h1 className="text-2xl md:text-3xl font-black text-white mb-3">
             Guides Search Karein
          </h1>
          <p className="text-green-200 text-sm mb-8">
            PM Kisan, loans, subsidy aur mandi bhav — apna sawal search karein
          </p>
          <SearchBar />
        </div>
      </div>

      <div className="container-site max-w-3xl py-10">
        <Suspense fallback={null}>
          <SearchResults />
        </Suspense>

        <h2 className="text-sm font-bold text-[var(--color-text-muted)] uppercase tracking-wide mb-4">
          Popular Searches
        </h2>
        <div className="flex flex-wrap gap-2 mb-10">
          {POPULAR_SEARCHES.map((item) => (
            <Link
              key={item.query}
              href={`/articles?search=${encodeURIComponent(item.query)}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold bg-[var(--color-card)] text-[var(--color-text)] border border-[var(--color-border)] hover:border-green-400 dark:hover:border-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
            >
               {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/articles"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white font-bold rounded-xl hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
          >
             Sabhi Guides Dekhein
          </Link>
          <Link
            href="/calculator"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-text)] font-bold rounded-xl hover:border-green-400 dark:hover:border-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
          >
             Free Calculators
          </Link>
        </div>
      </div>
    </div>
  );
}
