import type { Metadata } from 'next';
import PMKisanBenefitCalcPage from '@/components/calculators/PMKisanBenefitCalcPage';

const DOMAIN = 'https://kisanstatus.com';
const PAGE_URL = `${DOMAIN}/calculator/pm-kisan-benefit`;

export const metadata: Metadata = {
  title: 'PM Kisan Benefit Calculator 2026 — Kitna Paisa Milega',
  description: 'PM Kisan Samman Nidhi se kitna paisa milega, jaano turant. 1, 3 ya 5 saal ka total benefit calculate karein. ₹6,000 saalana. Bilkul free tool.',
  keywords: [
    'pm kisan calculator',
    'pm kisan kitna paisa milega',
    'pm kisan 6000 calculator',
    'pm kisan kist calculator 2026',
    'pm kisan samman nidhi calculator',
    'pm kisan total benefit calculator',
    'pm kisan arrears calculator',
    'pm kisan kitne saal mein kitna milega',
    'pm kisan payment estimator hindi',
    'pm kisan benefit calculator 2026',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'PM Kisan Benefit Calculator 2026 — Kitna Paisa Milega',
    description: 'PM Kisan Samman Nidhi se kitna paisa milega, jaano turant. 1, 3 ya 5 saal ka total benefit calculate karein. Bilkul free tool.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'KisanStatus.com',
    locale: 'hi_IN',
    images: [{ url: `${DOMAIN}/og-image.webp`, width: 1200, height: 630, alt: 'PM Kisan Benefit Calculator 2026 – KisanStatus.com' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PM Kisan Benefit Calculator 2026',
    description: 'PM Kisan Samman Nidhi se kitna paisa milega, jaano turant. 1, 3 ya 5 saal ka total benefit calculate karein. Free tool.',
    site: '@kisanstatus',
    images: [`${DOMAIN}/og-image.webp`],
  },
};

export default function Page() {
  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'PM Kisan Benefit Calculator 2026',
    url: PAGE_URL,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    description: 'PM Kisan Samman Nidhi se kitna paisa milega, jaano turant. 1, 3 ya 5 saal ka total benefit calculate karein. Bilkul free online tool.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '2156',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: DOMAIN },
      { '@type': 'ListItem', position: 2, name: 'Calculators', item: `${DOMAIN}/calculator` },
      { '@type': 'ListItem', position: 3, name: 'PM Kisan Benefit Calculator', item: PAGE_URL },
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
      <PMKisanBenefitCalcPage />
    </>
  );
}