import type { Metadata } from 'next';
import QuickStatusChecker from '@/components/calculator/QuickStatusChecker';

const DOMAIN = 'https://kisanstatus.com';
const PAGE_URL = `${DOMAIN}/calculator/quick-status-check`;

export const metadata: Metadata = {
  title: 'PM Kisan Status Check 2026 — Aadhaar/Mobile Se Instant Check',
  description: 'PM Kisan status check 2026 — Aadhaar number, mobile number ya registration number se 23vi kist ka status check karein. Instant redirect to official portal.',
  keywords: ['PM Kisan status check', 'PM Kisan Aadhaar check', 'PM Kisan mobile check', '23vi kist status'],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'PM Kisan Status Check 2026 — Aadhaar/Mobile Se Instant Check',
    description: 'Aadhaar ya Mobile number daalein aur seedha official portal par apna 23vi Kist status check karein. Free tool.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'KisanStatus.com',
    locale: 'hi_IN',
    images: [{ url: `${DOMAIN}/og-image.webp`, width: 1200, height: 630, alt: 'PM Kisan Status Check 2026 – KisanStatus.com' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PM Kisan Status Check 2026',
    description: 'Aadhaar ya Mobile number daalein aur seedha official portal par apna status check karein.',
    site: '@kisanstatus',
    images: [`${DOMAIN}/og-image.webp`],
  },
};

export default function Page() {
  return <QuickStatusChecker />;
}