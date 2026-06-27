/**
 * Homepage — KisanStatus.com
 * Server component: exports metadata, renders HomeContent client component
 * ✅ SEO OPTIMIZED v2.0
 */
import type { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';

export const metadata: Metadata = {
  title: 'PM Kisan Status Check 2026 – 23vi Kist Date, eKYC & Payment Guide | KisanStatus.com',
  description: 'PM Kisan 23vi kist status check 2026 — ₹2000 seedha bank mein. pmkisan.gov.in direct link, installment dates, eKYC guide, beneficiary list, Soil Health Card, KCC loan — sab free.',
  keywords: [
    'PM Kisan status check 2026',
    'PM Kisan 23vi kist',
    'PM Kisan 24vi kist',
    'pm kisan samman nidhi 2026',
    'pmkisan gov in status',
    'PM Kisan 23rd installment',
    'PM Kisan 22nd installment',
    'PM Kisan 24th installment date',
    'PM Kisan next kist date',
    'PM Kisan payment status',
    'PM Kisan eKYC 2026',
    'PM Kisan registration online',
    'PM Kisan beneficiary list 2026',
    'PM Kisan name correction',
    'PM Kisan mobile number change',
    'Kisan Credit Card 2026',
    'KCC loan apply online',
    'Kisan loan kaise le',
    'PM Kisan ₹6000 benefit',
    'Soil Health Card 2026',
    'Mitti swasthya card download',
    'Nano DAP price 2026',
    'IFFCO Nano DAP',
    'PMFBY crop insurance 2026',
    'Fasal bima yojana',
    'AgriStack farmer ID',
    'पीएम किसान स्टेटस चेक 2026',
    'पीएम किसान 23वीं किस्त',
    'पीएम किसान 24वीं किस्त',
    'पीएम किसान सम्मान निधि',
    'पीएम किसान ईकेवाईसी',
    'पीएम किसान लाभार्थी सूची',
    'किसान क्रेडिट कार्ड',
    'मिट्टी स्वास्थ्य कार्ड',
    'फसल बीमा योजना',
    'PM Kisan payment failed',
    'PM Kisan rejected list',
    'PM Kisan land seeding',
    'PM Kisan FTO generated',
    'PM Kisan problems solution',
  ],
  authors: [{ name: 'Sidhu Singh', url: 'https://kisanstatus.com/about' }],
  alternates: { canonical: 'https://kisanstatus.com' },

  openGraph: {
    title: 'PM Kisan Status Check 2026 – 23vi Kist Released | KisanStatus.com',
    description: 'PM Kisan 23vi kist 20 June 2026 ko release ho chuki hai — ₹2000 seedha bank mein. Status check karo, eKYC karo, paisa aaya ya nahi dekho. 100% free guide.',
    type: 'website',
    url: 'https://kisanstatus.com',
    siteName: 'KisanStatus.com',
    locale: 'hi_IN',
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
    title: 'PM Kisan 23vi Kist Released — Status Check 2026',
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

  category: 'government schemes, agriculture, farming',
};

export const revalidate = 3600;

export default function HomePage() {
  return <HomeContent />;
}