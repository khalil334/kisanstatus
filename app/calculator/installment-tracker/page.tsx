import type { Metadata } from 'next';
import InstallmentTrackerCalcPage from '@/components/calculators/InstallmentTrackerCalcPage';

const DOMAIN = 'https://kisanstatus.com';
const PAGE_URL = `${DOMAIN}/calculator/installment-tracker`;

export const metadata: Metadata = {
  title: 'PM Kisan Kist Tracker 2026 — Kist Kyun Ruki Hai?',
  description: 'PM Kisan ki kist kyun nahi aayi? 4 steps mein jaanein — eKYC, bank seeding, land seeding check karein. Bilkul free tool, bina registration ke.',
  keywords: [
    'pm kisan kist tracker',
    'kist kyun nahi aayi',
    'pm kisan kist kab aayegi',
    'pm kisan status check tool',
    'kist ruki hai kyun',
    'pm kisan kist status hindi',
    'pm kisan payment status check',
    'kist tracker 2026',
    'pm kisan ekyc status',
    'pm kisan bank seeding',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'PM Kisan Kist Tracker 2026 — Kist Kyun Ruki Hai?',
    description: 'PM Kisan ki kist kyun nahi aayi? 4 steps mein jaanein — eKYC, bank seeding, land seeding check karein. Bilkul free tool.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'KisanStatus.com',
    locale: 'hi_IN',
    images: [{ url: `${DOMAIN}/og-image.webp`, width: 1200, height: 630, alt: 'PM Kisan Kist Tracker 2026 – KisanStatus.com' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PM Kisan Kist Tracker 2026',
    description: 'PM Kisan ki kist kyun nahi aayi? 4 steps mein jaanein — eKYC, bank seeding, land seeding check karein. Free tool.',
    site: '@kisanstatus',
    images: [`${DOMAIN}/og-image.webp`],
  },
};

export default function Page() {
  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'PM Kisan Kist Tracker 2026',
    url: PAGE_URL,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    description: 'PM Kisan ki kist kyun nahi aayi? 4 steps mein jaanein — eKYC, bank seeding, land seeding check karein. Bilkul free online tool.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1847',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: DOMAIN },
      { '@type': 'ListItem', position: 2, name: 'Calculators', item: `${DOMAIN}/calculator` },
      { '@type': 'ListItem', position: 3, name: 'PM Kisan Kist Tracker', item: PAGE_URL },
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
      <InstallmentTrackerCalcPage />
    </>
  );
}