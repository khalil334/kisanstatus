import type { Metadata } from 'next';
import InstallmentTracker from '@/components/calculator/Installment-tracker';

export const metadata: Metadata = {
  title: 'PM Kisan Installment Status Tracker 2026 — 23vi Kist Kyun Ruki?',
  description: 'PM Kisan 23vi kist status tracker — eKYC, bank Aadhaar seeding, land seeding aur beneficiary status check karke 4 sawaal mein pata karo kist kyun nahi aayi. Free tool.',
  keywords: [
    'pm kisan installment tracker',
    'pm kisan 23vi kist status check tool',
    'pm kisan kist kyun nahi aayi',
    'pm kisan status checker 2026',
    'pm kisan ekyc status tracker',
  ],
  alternates: {
    canonical: 'https://kisanstatus.com/calculator/installment-tracker',
  },
  openGraph: {
    title: 'PM Kisan Installment Status Tracker 2026',
    description: '4 sawaal mein pata karo — 23vi kist kyun ruki hai. Free tracker.',
    url: 'https://kisanstatus.com/calculator/installment-tracker',
    siteName: 'KisanStatus.com',
    type: 'website',
    locale: 'hi_IN',
  },
};

export default function InstallmentTrackerPage() {
  return <InstallmentTracker />;
}