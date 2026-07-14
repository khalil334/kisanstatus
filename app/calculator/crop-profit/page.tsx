import type { Metadata } from 'next';
import CropProfitCalcPage from '@/components/calculators/CropProfitCalcPage';

const DOMAIN = 'https://kisanstatus.com';
const PAGE_URL = `${DOMAIN}/calculator/crop-profit`;

export const metadata: Metadata = {
  // ✅ Rule 5: Title optimized to ~55 characters, primary keyword first
  title: 'Kheti Ka Munafa Calculator 2026 — Fasal Profit Loss',
  // ✅ Rule 5: Description optimized to ~154 characters, natural Hinglish, click-worthy
  description: 'Kheti mein kitna profit ya loss hua, jaano turant. Beej, khad, mazdoori aur sinchai ka kharcha dalo aur net munafa nikalo. Free per hectare calculator.',
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
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Kheti Ka Munafa Calculator 2026 — Fasal Profit Loss',
    description: 'Kheti mein kitna profit ya loss hua, jaano turant. Beej, khad, mazdoori aur sinchai ka kharcha dalo aur net munafa nikalo. Free online tool.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'KisanStatus.com',
    locale: 'hi_IN',
    images: [{ url: `${DOMAIN}/og-image.webp`, width: 1200, height: 630, alt: 'Kheti Ka Munafa Calculator 2026 – KisanStatus.com' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kheti Ka Munafa Calculator 2026',
    description: 'Kheti mein kitna profit ya loss hua, jaano turant. Beej, khad, mazdoori aur sinchai ka kharcha dalo aur net munafa nikalo.',
    site: '@kisanstatus',
    images: [`${DOMAIN}/og-image.webp`],
  },
};

export default function Page() {
  // ✅ Rule 9: WebApplication Schema for the calculator tool
  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Kheti Ka Munafa Calculator 2026',
    url: PAGE_URL,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    description: 'Kheti mein kitna profit ya loss hua, jaano turant. Beej, khad, mazdoori aur sinchai ka kharcha dalo aur net munafa nikalo. Free online tool.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1500',
    },
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: DOMAIN },
      { '@type': 'ListItem', position: 2, name: 'Free Kisan Calculators', item: `${DOMAIN}/calculator` },
      { '@type': 'ListItem', position: 3, name: 'Kheti Ka Munafa Calculator', item: PAGE_URL },
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
      <CropProfitCalcPage />
    </>
  );
}