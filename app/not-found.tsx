import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Nahi Mila',
  description: 'Ye page exist nahi karta. Homepage ya latest articles dekhein.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  const popularArticles = [
    { href: '/articles/PmKisan24viKist2026', label: '24vi Kist Status' },
    { href: '/articles/KisanCreditCardOnlineApply2026', label: 'KCC Loan Apply' },
    { href: '/articles/PmKisanBeneficiaryList2026', label: 'Beneficiary List' },
    { href: '/calculator/pm-kisan-benefit', label: 'PM Kisan Calculator' },
  ];

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 dark:bg-green-900/30 text-5xl mb-2" aria-hidden="true">
          🌾
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl font-black text-[var(--color-text)]">
            404 - Page Nahi Mila
          </h1>
          <p className="text-[var(--color-text-muted)] text-sm md:text-base leading-relaxed max-w-lg mx-auto">
            Kshama karein, aap jis page ko dhoondh rahe hain, woh shayad move ho gaya hai ya ab exist nahi karta.
            Neeche diye gaye popular articles dekhein ya search karein.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <form action="/search" method="GET" className="relative">
            <input
              type="text"
              name="q"
              placeholder="Kya dhoondh rahe hain? (e.g., PM Kisan Status)"
              className="w-full px-4 py-3 pr-12 border-2 border-[var(--color-border)] rounded-xl bg-[var(--color-card)] text-[var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-green-700 transition-colors"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-bold text-[var(--color-text)]">Popular Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {popularArticles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="flex items-center gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] hover:shadow-md transition-all hover:scale-105"
              >
                <span className="text-sm font-semibold text-[var(--color-text)]">{article.label}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white font-bold rounded-xl hover:bg-green-700 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            🏠 Homepage Par Jaayein
          </Link>
          <Link
            href="/articles"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-text)] font-bold rounded-xl hover:border-green-400 dark:hover:border-green-600 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
             Sabhi Guides Dekhein
          </Link>
        </div>
      </div>
    </div>
  );
}
