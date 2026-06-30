import type { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';

export const metadata: Metadata = {
  title: 'PM Kisan Status Check 2026 — 23vi Kist Guide | KisanStatus.com',
  description: 'PM Kisan 23vi kist status check karein, eKYC complete karein aur payment issues fix karein. Free step-by-step guide for Indian farmers.',
  authors: [{ name: 'Sidhu Singh', url: 'https://kisanstatus.com/about' }],
  alternates: { canonical: 'https://kisanstatus.com' },
  openGraph: {
    title: 'PM Kisan Status Check 2026 — 23vi Kist Guide | KisanStatus.com',
    description: 'PM Kisan 23vi kist status check karein, eKYC complete karein aur payment issues fix karein. Free step-by-step guide.',
    type: 'website',
    url: 'https://kisanstatus.com',
    siteName: 'KisanStatus.com',
    locale: 'en_IN',
    images: [
      {
        url: 'https://kisanstatus.com/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'PM Kisan Status Check 2026 - KisanStatus.com',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PM Kisan Status Check 2026 — 23vi Kist Guide',
    description: '₹2000 seedha bank mein — 9.44 Crore+ kisanon ko mil chuki hai. Apna status abhi check karo!',
    site: '@kisanstatus',
    creator: '@kisanstatus',
    images: ['https://kisanstatus.com/og-image.webp'],
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
    google: 'oGrO0aRNLLhCgHq0Bn-sh3FdgKye7TlbAn2pAk8YdMQ',
  },
};

export const revalidate = 3600;

export default function HomePage() {
  return <HomeContent />;
}