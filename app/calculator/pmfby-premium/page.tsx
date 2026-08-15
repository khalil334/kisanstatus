import type { Metadata } from 'next';
import PMFBYCalcPage from '@/components/calculators/PMFBYCalcPage';
import { AUTHOR_NAME, AUTHOR_URL } from '@/lib/site-config';

const DOMAIN = 'https://kisanstatus.com';
const PAGE_URL = `${DOMAIN}/calculator/pmfby-premium`;

export const metadata: Metadata = {
  title: 'Fasal Bima Premium Calculator 2026',
  description: 'PM Fasal Bima Yojana (PMFBY) ka premium calculate karein. Kharif aur Rabi dono ke liye government subsidy aur net premium jaanein. Bilkul free tool.',
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
  creator: AUTHOR_NAME,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Fasal Bima Premium Calculator 2026',
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
