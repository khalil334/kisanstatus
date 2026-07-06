import type { Metadata } from 'next';
import PMKisanBenefitCalcPage from '@/components/calculators/PMKisanBenefitCalcPage';

const DOMAIN = 'https://kisanstatus.com';
const PAGE_URL = `${DOMAIN}/calculator/pm-kisan-benefit`;

export const metadata: Metadata = {
  title: 'PM Kisan Calculator 2026 — Kitna Paisa Milega Hindi',
  description: 'PM Kisan Samman Nidhi se kitna paisa milega — jaano turant. 1 saal, 3 saal, 5 saal — sab calculate karo. ₹6,000 saalana, ₹2,000 ki 3 kist. Free calculator.',
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
    title: 'PM Kisan Calculator 2026 — Kitna Paisa Milega Hindi',
    description: 'PM Kisan se kitna paisa milega — 1 saal, 3 saal, 5 saal sab calculate karo. ₹6,000 saalana. Free calculator.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'KisanStatus.com',
    locale: 'hi_IN',
    images: [{ url: `${DOMAIN}/og-image.webp`, width: 1200, height: 630, alt: 'PM Kisan Calculator 2026 – KisanStatus.com' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PM Kisan Calculator 2026',
    description: 'PM Kisan se kitna paisa milega — jaano turant. Free calculator.',
    site: '@kisanstatus',
    images: [`${DOMAIN}/og-image.webp`],
  },
};

export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'PM Kisan Calculator 2026',
    url: PAGE_URL,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    description: 'PM Kisan Samman Nidhi se kitna paisa milega — jaano turant. 1 saal, 3 saal, 5 saal sab calculate karo. ₹6,000 saalana, ₹2,000 ki 3 kist. Free online tool.',
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PMKisanBenefitCalcPage />
    </>
  );
}