import type { Metadata } from 'next';
import MSPIncomeCalcPage from '@/components/calculators/MSPIncomeCalcPage';

const DOMAIN = 'https://kisanstatus.com';
const PAGE_URL = `${DOMAIN}/calculator/msp-income`;

export const metadata: Metadata = {
  title: 'Crop Procurement Rate Analyzer 2026 — Government Price Guarantee Income',
  description: 'Government procurement rates se apni fasal ki income calculate karo — gehun, dhan, makka, cotton sab crops ke liye. Minimum support price par kitna paisa milega.',
  keywords: [
    'msp income calculator',
    'minimum support price calculator 2026',
    'msp calculator india',
    'wheat msp calculator',
    'rice msp calculator',
    'crop price guarantee tool',
    'agricultural procurement rate analyzer',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Crop Procurement Rate Analyzer 2026 — Government Price Guarantee Income',
    description: 'Government procurement rates se gehun, dhan, makka, cotton — kisi bhi fasal ki income calculate karo. Free tool.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'KisanStatus.com',
    locale: 'hi_IN',
    images: [{ url: `${DOMAIN}/og-image.webp`, width: 1200, height: 630, alt: 'Crop Procurement Rate Analyzer 2026 – KisanStatus.com' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crop Procurement Rate Analyzer 2026',
    description: 'Government procurement rates se apni fasal ki income calculate karo. Free tool.',
    site: '@kisanstatus',
    images: [`${DOMAIN}/og-image.webp`],
  },
};

export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Crop Procurement Rate Analyzer',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    description: 'Government procurement rates se gehun, dhan, makka, cotton — kisi bhi fasal ki income calculate karo. Free tool.',
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
      <MSPIncomeCalcPage />
    </>
  );
}