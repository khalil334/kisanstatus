import type { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';

const SITE_URL = 'https://kisanstatus.com';

export const metadata: Metadata = {
  title: 'PM Kisan Status Check 2026 — 23vi Kist Guide',
  description: 'PM Kisan 23vi kist status check karein, eKYC complete karein aur payment issues fix karein. Free step-by-step guide for Indian farmers.',
  authors: [{ name: 'KisanStatus Team', url: `${SITE_URL}/about` }],
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    title: 'PM Kisan Status Check 2026 — 23vi Kist Guide',
    description: 'PM Kisan 23vi kist status check karein, eKYC complete karein aur payment issues fix karein. Free step-by-step guide.',
    type: 'website',
    url: `${SITE_URL}/`,
    siteName: 'KisanStatus',
    locale: 'hi_IN',
    images: [
      {
        url: `${SITE_URL}/og-image.webp`,
        width: 1200,
        height: 630,
        alt: 'PM Kisan Status Check 2026 - KisanStatus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PM Kisan Status Check 2026 — 23vi Kist Guide',
    description: '₹2000 seedha bank mein — 9.44 Crore+ kisanon ko mil chuki hai. Apna status abhi check karo!',
    site: '@kisanstatus',
    creator: '@kisanstatus',
    images: [`${SITE_URL}/og-image.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_TOKEN ?? 'oGrO0aRNLLhCgHq0Bn-sh3FdgKye7TlbAn2pAk8YdMQ',
  },
};

export const revalidate = 3600;

export default function HomePage() {
  return <HomeContent />;
}