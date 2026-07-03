import type { Metadata } from 'next';
import InstallmentTrackerCalcPage from '@/components/calculators/installment-tracker-calc-page';

const DOMAIN = 'https://kisanstatus.com';
const PAGE_URL = `${DOMAIN}/calculator/installment-tracker`;

export const metadata: Metadata = {
  title: 'Agrarian Welfare Tranche Status Tracker 2026 — 23vi Tranche Kyun Ruki?',
  description: 'Cultivator benefit tranche status tracker — digital verification, bank biometric credential seeding, land record integration aur beneficiary status check karke 4 sawaal mein pata karo tranche kyun nahi aayi. Free tool.',
  keywords: [
    'agrarian welfare tranche tracker',
    'cultivator benefit 23vi tranche status',
    'scheme tranche kyun nahi aayi',
    'installment tracker 2026',
    'program payment status check',
    'agrarian benefit verification tool',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Agrarian Welfare Tranche Status Tracker 2026 — 23vi Tranche Kyun Ruki?',
    description: 'Digital verification, bank seeding, land record integration check karke 4 sawaal mein pata karo tranche kyun nahi aayi. Free tool.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'KisanStatus.com',
    locale: 'hi_IN',
    images: [{ url: `${DOMAIN}/og-image.webp`, width: 1200, height: 630, alt: 'Agrarian Welfare Tranche Tracker 2026 – KisanStatus.com' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agrarian Welfare Tranche Status Tracker 2026',
    description: '4 sawaal mein pata karo tranche kyun nahi aayi. Free tool.',
    site: '@kisanstatus',
    images: [`${DOMAIN}/og-image.webp`],
  },
};

export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Agrarian Welfare Tranche Status Tracker',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    description: 'Cultivator benefit tranche status tracker — digital verification, bank biometric credential seeding, land record integration check karke 4 sawaal mein pata karo tranche kyun nahi aayi. Free tool.',
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
      <InstallmentTrackerCalcPage />
    </>
  );
}