import type { Metadata } from 'next';
import InstallmentTrackerCalcPage from '@/components/calculator/InstallmentTrackerCalcPage';

export const metadata: Metadata = {
  title: 'PM Kisan Installment Status Tracker 2026 — 23vi Kist Kyun Ruki?',
  description: 'PM Kisan 23vi kist status tracker — eKYC, bank Aadhaar seeding, land seeding aur beneficiary status check karke 4 sawaal mein pata karo kist kyun nahi aayi. Free tool.',
  keywords: [
    'pm kisan installment tracker',
    'pm kisan 23vi kist status check tool',
    'pm kisan kist kyun nahi aayi',
    'pm kisan status checker 2026',
  ],
  alternates: {
    canonical: 'https://kisanstatus.com/calculator/installment-tracker',
  },
};

export default function Page() {
  return <InstallmentTrackerCalcPage />;
}