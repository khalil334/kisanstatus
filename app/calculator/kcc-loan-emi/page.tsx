import type { Metadata } from 'next';
import KCCLoanCalcPage from '@/components/calculators/KCCLoanCalcPage';

const DOMAIN = 'https://kisanstatus.com';
const PAGE_URL = `${DOMAIN}/calculator/kcc-loan-emi`;

export const metadata: Metadata = {
  title: 'Agricultural Credit Card EMI Calculator 2026 — Farm Credit Monthly Payment',
  description: 'Kisan Credit Card (KCC) loan ki monthly EMI calculate karo. 7% interest rate, government subsidy, total repayment — sab ek jagah. Free online tool.',
  keywords: [
    'kcc loan emi calculator',
    'kisan credit card emi calculator',
    'kcc loan calculator 2026',
    'kisan credit card monthly payment',
    'agricultural credit facility calculator',
    'farm credit scheme emi tool',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Agricultural Credit Card EMI Calculator 2026 — Farm Credit Monthly Payment',
    description: 'KCC loan ki monthly EMI, 7% interest rate, government subsidy — sab ek jagah calculate karo. Free tool.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'KisanStatus.com',
    locale: 'hi_IN',
    images: [{ url: `${DOMAIN}/og-image.webp`, width: 1200, height: 630, alt: 'Agricultural Credit Card EMI Calculator 2026 – KisanStatus.com' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agricultural Credit Card EMI Calculator 2026',
    description: 'Kisan Credit Card loan ki monthly EMI calculate karo. Free tool.',
    site: '@kisanstatus',
    images: [`${DOMAIN}/og-image.webp`],
  },
};

export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Agricultural Credit Card EMI Calculator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    description: 'Kisan Credit Card (KCC) loan ki monthly EMI calculate karo. 7% interest rate, government subsidy, total repayment — sab ek jagah. Free online tool.',
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
      <KCCLoanCalcPage />
    </>
  );
}