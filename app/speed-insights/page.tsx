// app/search/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, SITE_NAME } from '@/lib/site-config';

export const metadata: Metadata = {
  title: `Search — ${SITE_NAME}`,
  description: 'Search feature abhi update ho raha hai. Aapko homepage par redirect kiya ja raha hai.',
  robots: { index: false, follow: false },
  alternates: { canonical: SITE_URL },
};

export default function SearchPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="3;url=/" />
      <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 text-4xl mb-2" aria-hidden="true">
            🔍
          </div>
          <div className="space-y-3">
            <h1 className="text-2xl md:text-3xl font-black text-[var(--color-text)]">
              Search Feature Update Ho Raha Hai
            </h1>
            <p className="text-[var(--color-text-muted)] text-sm md:text-base leading-relaxed">
              Behtar search experience ke liye hum is feature ko upgrade kar rahe hain. 
              Aapko 3 second mein Homepage par redirect kar diya jayega.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white font-bold rounded-xl hover:bg-green-700 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              🏠 Abhi Home Page Par Jaayein
            </Link>
            <Link
              href="/articles"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-text)] font-bold rounded-xl hover:border-green-400 dark:hover:border-green-600 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              📚 Sabhi Guides Dekhein
            </Link>
          </div>
          <p className="text-xs text-[var(--color-text-muted)] pt-4">
            Agar automatic redirect nahi hota, toh kripya upar diye gaye buttons ka upyog karein.
          </p>
        </div>
      </div>
    </>
  );
}