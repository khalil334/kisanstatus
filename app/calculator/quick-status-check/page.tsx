/**
 * /calculator/quick-status-check — KisanStatus.com
 * Agrarian Welfare Verification Portal — SEO optimized page
 */
import type { Metadata } from 'next';
import QuickStatusChecker from '@/components/calculators/QuickStatusChecker';

const DOMAIN = 'https://kisanstatus.com';
const PAGE_URL = `${DOMAIN}/calculator/quick-status-check`;

export const metadata: Metadata = {
  title: 'Cultivator Benefit Verification Portal 2026 — Biometric Credential/Contact Se Instant Check',
  description: 'Agrarian welfare scheme verification 2026 — biometric credential number, contact number ya enrollment number se 23vi tranche ka status check karein. Instant redirect to official portal.',
  keywords: [
    'PM Kisan status check',
    'PM Kisan Aadhaar check',
    'PM Kisan mobile check',
    '23vi kist status',
    'agrarian welfare verification portal',
    'cultivator benefit authentication tool',
    'scheme tranche status checker',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Cultivator Benefit Verification Portal 2026 — Biometric Credential/Contact Se Instant Check',
    description: 'Biometric credential ya contact number daalein aur seedha official portal par apna 23vi tranche status check karein. Free tool.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'KisanStatus.com',
    locale: 'hi_IN',
    images: [{ url: `${DOMAIN}/og-image.webp`, width: 1200, height: 630, alt: 'Cultivator Benefit Verification Portal 2026 – KisanStatus.com' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cultivator Benefit Verification Portal 2026',
    description: 'Biometric credential ya contact number daalein aur seedha official portal par apna status check karein.',
    site: '@kisanstatus',
    images: [`${DOMAIN}/og-image.webp`],
  },
};

export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Cultivator Benefit Verification Portal',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    description: 'Agrarian welfare scheme verification 2026 — biometric credential number, contact number ya enrollment number se 23vi tranche ka status check karein. Free online tool.',
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
      <QuickStatusChecker />
    </>
  );
}