import type { Metadata } from 'next';
import CropProfitCalcPage from '@/components/calculators/CropProfitCalcPage';

const DOMAIN = 'https://kisanstatus.com';
const PAGE_URL = `${DOMAIN}/calculator/crop-profit`;

export const metadata: Metadata = {
  title: 'Kheti Ka Munafa Calculator 2026 — Fasal Profit Loss Hindi',
  description: 'Kheti mein kitna profit ya loss hua — jaano turant. Beej, khad, mazdoori, sinchai — sab kharcha dalo aur net munafa nikalo. Per hectare hisaab. Free tool, koi registration nahi.',
  keywords: [
    'kheti ka munafa calculator',
    'fasal profit loss calculator hindi',
    'kheti mein kitna profit hua',
    'crop profit calculator india',
    'kheti ka kharcha aur kamai',
    'fasal munafa per hectare',
    'kheti profit loss hindi',
    'kisan munafa calculator',
    'kheti ka hisaab',
    'crop profit loss hindi',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Kheti Ka Munafa Calculator 2026 — Fasal Profit Loss Hindi',
    description: 'Kheti mein kitna profit ya loss hua — jaano turant. Beej, khad, mazdoori, sinchai — sab kharcha dalo aur net munafa nikalo. Free tool.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'KisanStatus.com',
    locale: 'hi_IN',
    images: [{ url: `${DOMAIN}/og-image.webp`, width: 1200, height: 630, alt: 'Kheti Ka Munafa Calculator 2026 – KisanStatus.com' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kheti Ka Munafa Calculator 2026',
    description: 'Kheti mein kitna profit ya loss hua — jaano turant. Free tool.',
    site: '@kisanstatus',
    images: [`${DOMAIN}/og-image.webp`],
  },
};

export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Kheti Ka Munafa Calculator 2026',
    url: PAGE_URL,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    description: 'Kheti mein kitna profit ya loss hua — jaano turant. Beej, khad, mazdoori, sinchai — sab kharcha dalo aur net munafa nikalo. Free online tool.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      ratingCount: '1342',
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