/**
 * /calculator/pmfby-premium — KisanStatus.com
 * Agricultural Crop Protection Fee Estimator — SEO optimized page
 */
import type { Metadata } from 'next';
import PMFBYCalcPage from '@/components/calculators/PMFBYCalcPage';

const DOMAIN = 'https://kisanstatus.com';
const PAGE_URL = `${DOMAIN}/calculator/pmfby-premium`;

export const metadata: Metadata = {
  title: 'Agricultural Yield Risk Coverage Analyzer 2026 — Crop Insurance Premium',
  description: 'Pradhan Mantri Fasal Bima Yojana coverage fee estimator — apni fasal ka insurance premium estimate karo. Kharif aur Rabi dono seasons ke liye free tool.',
  keywords: [
    'pmfby premium calculator',
    'fasal bima calculator',
    'pradhan mantri fasal bima yojana calculator',
    'crop insurance premium calculator india',
    'agrarian yield risk coverage tool',
    'farm protection fee estimator',
    'crop insurance cost analyzer',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Agricultural Yield Risk Coverage Analyzer 2026 — Crop Insurance Premium',
    description: 'Kharif aur Rabi dono seasons ka insurance premium estimate karo. Free tool.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'KisanStatus.com',
    locale: 'hi_IN',
    images: [{ url: `${DOMAIN}/og-image.webp`, width: 1200, height: 630, alt: 'Agricultural Yield Risk Coverage Analyzer 2026 – KisanStatus.com' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agricultural Yield Risk Coverage Analyzer 2026',
    description: 'Fasal bima premium estimate karo — Kharif + Rabi. Free tool.',
    site: '@kisanstatus',
    images: [`${DOMAIN}/og-image.webp`],
  },
};

export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Agricultural Yield Risk Coverage Analyzer',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    description: 'Pradhan Mantri Fasal Bima Yojana coverage fee estimator — apni fasal ka insurance premium estimate karo. Kharif aur Rabi dono seasons ke liye free tool.',
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
      <PMFBYCalcPage />
    </>
  );
}