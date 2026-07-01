import type { Metadata } from 'next';
import CropProfitCalcPage from '@/components/calculators/CropProfitCalcPage';

const DOMAIN = 'https://kisanstatus.com';
const PAGE_URL = `${DOMAIN}/calculator/crop-profit`;

export const metadata: Metadata = {
  title: 'Crop Profit Loss Calculator 2026 — Kheti Mein Kitna Fayda Nuksan?',
  description: 'Kheti ka poora hisaab — seed, fertilizer, labor cost minus revenue = net profit ya loss. Per hectare crop profit calculator. Free online tool.',
  keywords: ['crop profit calculator india', 'kheti profit calculator', 'farming profit loss calculator', 'crop profit per hectare india 2026'],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Crop Profit Loss Calculator 2026 — Kheti Mein Kitna Fayda Nuksan?',
    description: 'Seed, fertilizer, labor cost minus revenue = net profit ya loss. Per hectare crop profit calculator. Free online tool.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'KisanStatus.com',
    locale: 'hi_IN',
    images: [{ url: `${DOMAIN}/og-image.webp`, width: 1200, height: 630, alt: 'Crop Profit Loss Calculator 2026 – KisanStatus.com' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crop Profit Loss Calculator 2026 — Kheti Mein Kitna Fayda Nuksan?',
    description: 'Kheti ka poora hisaab — net profit ya loss instantly pata karo. Free tool.',
    site: '@kisanstatus',
    images: [`${DOMAIN}/og-image.webp`],
  },
};

export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Crop Profit Loss Calculator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    description: 'Kheti ka poora hisaab — seed, fertilizer, labor cost minus revenue = net profit ya loss. Free online tool.',
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
      <CropProfitCalcPage />
    </>
  );
}