import type { Metadata } from 'next';
// ✅ FIXED: calculators (plural)
import InstallmentTrackerCalcPage from '@/components/calculators/InstallmentTrackerCalcPage';

const DOMAIN = 'https://kisanstatus.com';
const PAGE_URL = `${DOMAIN}/calculator/installment-tracker`;

export const metadata: Metadata = {
  title: 'PM Kisan Installment Status Tracker 2026 — 23vi Kist Kyun Ruki?',
  description: 'PM Kisan 23vi kist status tracker — eKYC, bank Aadhaar seeding, land seeding aur beneficiary status check karke 4 sawaal mein pata karo kist kyun nahi aayi. Free tool.',
  keywords: ['pm kisan installment tracker', 'pm kisan 23vi kist status', 'pm kisan kist kyun nahi aayi', 'installment tracker 2026'],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'PM Kisan Installment Status Tracker 2026 — 23vi Kist Kyun Ruki?',
    description: 'eKYC, bank seeding, land seeding check karke 4 sawaal mein pata karo kist kyun nahi aayi. Free tool.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'KisanStatus.com',
    locale: 'hi_IN',
    images: [{ url: `${DOMAIN}/og-image.webp`, width: 1200, height: 630, alt: 'PM Kisan Installment Tracker 2026 – KisanStatus.com' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PM Kisan Installment Status Tracker 2026',
    description: '4 sawaal mein pata karo kist kyun nahi aayi. Free tool.',
    site: '@kisanstatus',
    images: [`${DOMAIN}/og-image.webp`],
  },
};

export default function Page() {
  return <InstallmentTrackerCalcPage />;
}