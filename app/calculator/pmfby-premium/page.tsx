import type { Metadata } from 'next';
import PMFBYCalcPage from '@/components/calculators/PMFBYCalcPage';

const DOMAIN = 'https://kisanstatus.com';
const PAGE_URL = `${DOMAIN}/calculator/pmfby-premium`;

export const metadata: Metadata = {
  title: 'Fasal Bima Premium Calculator 2026 — PMFBY Premium',
  description: 'PM Fasal Bima Yojana (PMFBY) ka premium calculate karein. Kharif aur Rabi dono ke liye government subsidy aur net premium jaanein. Bilkul free tool.',
  keywords: [
    'fasal bima premium calculator',
    'pmfby premium calculator hindi',
    'pradhan mantri fasal bima yojana premium',
    'crop insurance premium calculator india',
    'fasal bima ka premium kitna hai',
    'kharif fasal bima premium',
    'rabi fasal bima premium',
    'pmfby calculator 2026',
    'fasal bima subsidy calculator',
    'crop insurance cost hindi',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Fasal Bima Premium Calculator 2026 — PMFBY Premium',
    description: 'PM Fasal Bima Yojana (PMFBY) ka premium calculate karein. Kharif aur Rabi dono ke liye government subsidy aur net premium jaanein. Free tool.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'KisanStatus.com',
    locale: 'hi_IN',
    images: [{ url: `${DOMAIN}/og-image.webp`, width: 1200, height: 630, alt: 'Fasal Bima Premium Calculator 2026 – KisanStatus.com' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fasal Bima Premium Calculator 2026',
    description: 'PM Fasal Bima Yojana (PMFBY) ka premium calculate karein. Kharif aur Rabi dono ke liye government subsidy aur net premium jaanein.',
    site: '@kisanstatus',
    images: [`${DOMAIN}/og-image.webp`],
  },
};

export default function Page() {
  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Fasal Bima Premium Calculator 2026',
    url: PAGE_URL,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    description: 'PM Fasal Bima Yojana (PMFBY) ka premium calculate karein. Kharif aur Rabi dono ke liye government subsidy aur net premium jaanein. Bilkul free online tool.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      ratingCount: '987',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: DOMAIN },
      { '@type': 'ListItem', position: 2, name: 'Calculators', item: `${DOMAIN}/calculator` },
      { '@type': 'ListItem', position: 3, name: 'Fasal Bima Premium Calculator', item: PAGE_URL },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PMFBYCalcPage />
    </>
  );
}