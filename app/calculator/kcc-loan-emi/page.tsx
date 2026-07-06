import type { Metadata } from 'next';
import KCCLoanCalcPage from '@/components/calculators/KCCLoanCalcPage';

const DOMAIN = 'https://kisanstatus.com';
const PAGE_URL = `${DOMAIN}/calculator/kcc-loan-emi`;

export const metadata: Metadata = {
  title: 'KCC Loan EMI Calculator 2026 — Kisan Credit Card Loan EMI Hindi',
  description: 'Kisan Credit Card loan ki monthly EMI calculate karo. Interest rate, total repayment, government subsidy sab jaano. Free tool, koi registration nahi.',
  keywords: [
    'kcc loan emi calculator',
    'kisan credit card loan emi',
    'kcc loan monthly payment',
    'kisan loan emi calculator hindi',
    'kcc loan interest rate',
    'kisan credit card emi kitni hogi',
    'kcc loan subsidy calculator',
    'kcc loan 7% interest',
    'kisan loan calculator 2026',
    'kcc loan repayment calculator',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'KCC Loan EMI Calculator 2026 — Kisan Credit Card Loan EMI Hindi',
    description: 'Kisan Credit Card loan ki monthly EMI calculate karo. Interest rate, total repayment, government subsidy sab jaano. Free tool.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'KisanStatus.com',
    locale: 'hi_IN',
    images: [{ url: `${DOMAIN}/og-image.webp`, width: 1200, height: 630, alt: 'KCC Loan EMI Calculator 2026 – KisanStatus.com' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KCC Loan EMI Calculator 2026',
    description: 'Kisan Credit Card loan ki monthly EMI calculate karo. Free tool.',
    site: '@kisanstatus',
    images: [`${DOMAIN}/og-image.webp`],
  },
};

export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'KCC Loan EMI Calculator 2026',
    url: PAGE_URL,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    description: 'Kisan Credit Card loan ki monthly EMI calculate karo. Interest rate, total repayment, government subsidy sab jaano. Free online tool.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1156',
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