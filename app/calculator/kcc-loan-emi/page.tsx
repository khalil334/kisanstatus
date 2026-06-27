import type { Metadata } from 'next';
import KCCLoanCalcPage from '@/components/calculators/KCCLoanCalcPage';

const DOMAIN = 'https://kisanstatus.com';
const PAGE_URL = `${DOMAIN}/calculator/kcc-loan-emi`;

export const metadata: Metadata = {
  title: 'KCC Loan EMI Calculator 2026 — Kisan Credit Card Monthly Payment',
  description: 'Kisan Credit Card (KCC) loan ki monthly EMI calculate karo. 7% interest rate, government subsidy, total repayment — sab ek jagah. Free online tool.',
  keywords: ['kcc loan emi calculator', 'kisan credit card emi calculator', 'kcc loan calculator 2026', 'kisan credit card monthly payment'],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'KCC Loan EMI Calculator 2026 — Kisan Credit Card Monthly Payment',
    description: 'KCC loan ki monthly EMI, 7% interest rate, government subsidy — sab ek jagah calculate karo. Free tool.',
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
  return <KCCLoanCalcPage />;
}