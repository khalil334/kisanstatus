import type { Metadata } from 'next';
import PMFBYCalcPage from '@/components/calculators/PMFBYCalcPage';

const DOMAIN = 'https://kisanstatus.com';
const PAGE_URL = `${DOMAIN}/calculator/pmfby-premium`;

export const metadata: Metadata = {
  title: 'PMFBY Fasal Bima Premium Calculator 2026 — Crop Insurance Premium',
  description: 'Pradhan Mantri Fasal Bima Yojana premium calculator — apni fasal ka insurance premium calculate karo. Kharif aur Rabi dono seasons ke liye free tool.',
  keywords: ['pmfby premium calculator', 'fasal bima calculator', 'pradhan mantri fasal bima yojana calculator', 'crop insurance premium calculator india'],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'PMFBY Fasal Bima Premium Calculator 2026 — Crop Insurance Premium',
    description: 'Kharif aur Rabi dono seasons ka insurance premium calculate karo. Free tool.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'KisanStatus.com',
    locale: 'hi_IN',
    images: [{ url: `${DOMAIN}/og-image.webp`, width: 1200, height: 630, alt: 'PMFBY Premium Calculator 2026 – KisanStatus.com' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PMFBY Premium Calculator 2026',
    description: 'Fasal bima premium calculate karo — Kharif + Rabi. Free tool.',
    site: '@kisanstatus',
    images: [`${DOMAIN}/og-image.webp`],
  },
};

export default function Page() {
  return <PMFBYCalcPage />;
}