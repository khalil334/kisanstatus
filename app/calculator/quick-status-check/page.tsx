import type { Metadata } from 'next';
import QuickStatusChecker from '@/components/calculators/QuickStatusChecker';

const DOMAIN = 'https://kisanstatus.com';
const PAGE_URL = `${DOMAIN}/calculator/quick-status-check`;

export const metadata: Metadata = {
  title: 'PM Kisan Status Check 2026 — Aadhaar ya Mobile Number',
  description: 'PM Kisan status check karein Aadhaar, mobile ya registration number se. Seedha official portal par redirect. Bilkul free, bina login ke.',
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
    title: 'PM Kisan Status Check 2026 — Aadhaar ya Mobile Number',
    description: 'PM Kisan status check karein Aadhaar, mobile ya registration number se. Seedha official portal par redirect. Bilkul free tool.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'KisanStatus.com',
    locale: 'hi_IN',
    images: [{ url: `${DOMAIN}/og-image.webp`, width: 1200, height: 630, alt: 'PM Kisan Status Check Tool – KisanStatus.com' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PM Kisan Status Check 2026',
    description: 'PM Kisan status check karein Aadhaar, mobile ya registration number se. Bilkul free tool.',
    site: '@kisanstatus',
    images: [`${DOMAIN}/og-image.webp`],
  },
};

export default function Page() {
  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'PM Kisan Status Check Tool',
    url: PAGE_URL,
    description: 'PM Kisan ka apna status check karein — Aadhaar, mobile ya registration number se. Free online tool, bina login ke.',
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

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: DOMAIN },
      { '@type': 'ListItem', position: 2, name: 'Calculators', item: `${DOMAIN}/calculator` },
      { '@type': 'ListItem', position: 3, name: 'PM Kisan Status Check', item: PAGE_URL },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <QuickStatusChecker />
    </>
  );
}