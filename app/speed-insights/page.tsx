'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/lib/site-config';

export const metadata: Metadata = {
  title: `Redirecting — ${SITE_NAME}`,
  description: 'Yeh page ab update ho raha hai. Aapko automatically homepage par redirect kiya ja raha hai.',
  robots: { index: false, follow: false },
  alternates: { canonical: SITE_URL },
};

export default function SpeedInsightsPage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      router.push('/');
    }
  }, [countdown, router]);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full text-center space-y-6">
        
        {/* Icon */}
        <div 
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/30 text-4xl mb-2"
          aria-hidden="true"
        >
          ⚡
        </div>
        
        {/* Message */}
        <div className="space-y-3">
          <h1 className="text-2xl md:text-3xl font-black text-[var(--color-text)]">
            Homepage Par Redirect Ho Raha Hai
          </h1>
          <p className="text-[var(--color-text-muted)] text-sm md:text-base leading-relaxed">
            Yeh page ab update ho raha hai. Aapko <strong aria-live="polite">{countdown}</strong> second mein 
            automatically Homepage par le jaya jayega.
          </p>
        </div>

        {/* Action Buttons */}
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

        {/* Fallback Text */}
        <p className="text-xs text-[var(--color-text-muted)] pt-4">
          Agar automatic redirect nahi hota, toh kripya upar diye gaye buttons ka upyog karein.
        </p>
      </div>
    </div>
  );
}