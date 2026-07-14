import type { Metadata } from 'next';
import MSPIncomeCalcPage from '@/components/calculators/MSPIncomeCalcPage';

const DOMAIN = 'https://kisanstatus.com';
const PAGE_URL = `${DOMAIN}/calculator/msp-income`;

export const metadata: Metadata = {
  title: 'MSP Income Calculator 2026 — Fasal Ka MSP Rate Hindi',
  description: 'MSP rate par fasal bechne par kitna paisa milega, jaano turant. Gehun, dhaan, sarson, kapas ka MSP 2025-26 check karein. Bilkul free calculator.',
  keywords: [
    'msp income calculator',
    'fasal ka msp rate',
    'gehu ka msp 2026',
    'dhaan ka msp rate',
    'sarson ka msp',
    'kapas ka msp',
    'msp calculator hindi',
    'fasal bechne par kitna paisa milega',
    'minimum support price calculator india',
    'msp rate 2025-26',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'MSP Income Calculator 2026 — Fasal Ka MSP Rate Hindi',
    description: 'MSP rate par fasal bechne par kitna paisa milega, jaano turant. Gehun, dhaan, sarson, kapas ka MSP 2025-26 check karein. Free calculator.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'KisanStatus.com',
    locale: 'hi_IN',
    images: [{ url: `${DOMAIN}/og-image.webp`, width: 1200, height: 630, alt: 'MSP Income Calculator 2026 – KisanStatus.com' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MSP Income Calculator 2026',
    description: 'MSP rate par fasal bechne par kitna paisa milega, jaano turant. Gehun, dhaan, sarson, kapas ka MSP 2025-26 check karein.',
    site: '@kisanstatus',
    images: [`${DOMAIN}/og-image.webp`],
  },
};

export default function Page() {
  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'MSP Income Calculator 2026',
    url: PAGE_URL,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    description: 'MSP rate par fasal bechne par kitna paisa milega, jaano turant. Gehun, dhaan, sarson, kapas ka MSP 2025-26 check karein. Free calculator.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '1423',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: DOMAIN },
      { '@type': 'ListItem', position: 2, name: 'Calculators', item: `${DOMAIN}/calculator` },
      { '@type': 'ListItem', position: 3, name: 'MSP Income Calculator', item: PAGE_URL },
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
      <MSPIncomeCalcPage />
    </>
  );
}