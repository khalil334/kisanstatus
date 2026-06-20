/**
 * Homepage — KisanStatus.com
 * Server component: exports metadata, renders HomeContent client component
 */
import type { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';

export const metadata: Metadata = {
  title: 'PM Kisan Status Check 2026 – 23vi Kist Date & Payment | KisanStatus.com',
  description: 'PM Kisan Samman Nidhi Yojana 23vi kist status check 2026. pmkisan.gov.in direct link, installment dates, ₹6000 annual benefit, eKYC guide aur beneficiary list — free.',
  keywords: [
    'PM Kisan status check 2026',
    'PM Kisan 23vi kist', 'PM Kisan 22vi kist',
    'PM Kisan 23rd installment', 'PM Kisan 22nd installment',
    'pm kisan samman nidhi 2026',
    'pmkisan gov in status',
    'PM Kisan beneficiary list 2026',
    'PM Kisan eKYC 2026',
    'pm kisan payment status',
  ],
  authors: [{ name: 'Sidhu Singh', url: 'https://kisanstatus.com/about' }],
  alternates: { canonical: 'https://kisanstatus.com' },
};

export const revalidate = 3600; // ISR: revalidate every 1 hour (homepage is time-sensitive)

export default function HomePage() {
  return <HomeContent />;
}
