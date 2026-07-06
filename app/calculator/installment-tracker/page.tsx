import type { Metadata } from 'next';
import InstallmentTrackerCalcPage from '@/components/calculators/InstallmentTrackerCalcPage';

const DOMAIN = 'https://kisanstatus.com';
const PAGE_URL = `${DOMAIN}/calculator/installment-tracker`;

export const metadata: Metadata = {
  title: 'PM Kisan Kist Tracker 2026 — Kist Kyun Ruki Hai Jaano',
  description: 'PM Kisan ki kist kyun nahi aayi? 4 sawaal mein pata karo — eKYC, bank seeding, land seeding sab check karo. Free tool, koi registration nahi.',
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
    title: 'PM Kisan Kist Tracker 2026 — Kist Kyun Ruki Hai Jaano',
    description: '4 sawaal mein pata karo kist kyun ruki hai — eKYC, bank seeding, land seeding sab check karo. Free tool.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'KisanStatus.com',
    locale: 'hi_IN',
    images: [{ url: `${DOMAIN}/og-image.webp`, width: 1200, height: 630, alt: 'PM Kisan Kist Tracker 2026 – KisanStatus.com' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PM Kisan Kist Tracker 2026',
    description: 'Kist kyun ruki hai? 4 sawaal mein pata karo. Free tool.',
    site: '@kisanstatus',
    images: [`${DOMAIN}/og-image.webp`],
  },
};

export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'PM Kisan Kist Tracker 2026',
    url: PAGE_URL,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    description: 'PM Kisan ki kist kyun nahi aayi? 4 sawaal mein pata karo — eKYC, bank seeding, land seeding sab check karo. Free online tool.',
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <InstallmentTrackerCalcPage />
    </>
  );
}