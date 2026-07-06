import type { Metadata } from 'next';
import QuickStatusChecker from '@/components/calculators/QuickStatusChecker';

const DOMAIN = 'https://kisanstatus.com';
const PAGE_URL = `${DOMAIN}/calculator/quick-status-check`;

export const metadata: Metadata = {
  title: 'PM Kisan Status Check 2026 — Aadhaar ya Mobile Se Turant Check Karo',
  description: 'Apna PM Kisan status abhi check karo — bas Aadhaar number, mobile number ya registration number daalo. Seedha official portal par redirect hoga. Free hai, koi login nahi chahiye.',
  keywords: [
    'pm kisan status check',
    'pm kisan aadhaar se check',
    'pm kisan mobile number se status',
    '24vi kist status check',
    'pm kisan status kaise check kare',
    'pmkisan.gov.in status check',
    'pm kisan payment status',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'PM Kisan Status Check 2026 — Aadhaar ya Mobile Se Turant Check Karo',
    description: 'Aadhaar ya mobile number daalo aur apna PM Kisan status turant check karo. Free tool — koi registration nahi.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'KisanStatus.com',
    locale: 'hi_IN',
    images: [{ url: `${DOMAIN}/og-image.webp`, width: 1200, height: 630, alt: 'PM Kisan Status Check Tool – KisanStatus.com' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PM Kisan Status Check 2026',
    description: 'Aadhaar ya mobile number se apna PM Kisan status turant check karo.',
    site: '@kisanstatus',
    images: [`${DOMAIN}/og-image.webp`],
  },
};

export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'PM Kisan Status Check Tool',
    url: PAGE_URL,
    description: 'PM Kisan ka apna status check karo — Aadhaar, mobile ya registration number se. Free online tool, koi login nahi chahiye.',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <QuickStatusChecker />
    </>
  );
}