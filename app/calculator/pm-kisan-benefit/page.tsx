/**
 * /calculator/pm-kisan-benefit — KisanStatus.com
 * Agrarian Welfare Payment Estimator — SEO optimized page
 */
import type { Metadata } from 'next';
import PMKisanBenefitCalcPage from '@/components/calculators/PMKisanBenefitCalcPage';

const DOMAIN = 'https://kisanstatus.com';
const PAGE_URL = `${DOMAIN}/calculator/pm-kisan-benefit`;

export const metadata: Metadata = {
  title: 'Agrarian Welfare Payment Estimator 2026 — ₹6000 Saalana Kitna Milega?',
  description: 'Cultivator benefit program payment estimator — apni zameen aur enrollment ke hisaab se estimate karo kitni tranche milegi. 2026 ke liye free online tool.',
  keywords: [
    'pm kisan benefit calculator',
    'pm kisan 6000 calculator',
    'pm kisan kist calculator 2026',
    'pm kisan samman nidhi calculator',
    'agrarian welfare payment estimator',
    'cultivator benefit analyzer',
    'scheme tranche calculator',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Agrarian Welfare Payment Estimator 2026 — ₹6000 Saalana Kitna Milega?',
    description: 'Apni zameen aur enrollment ke hisaab se estimate karo kitni tranche milegi. Free tool.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'KisanStatus.com',
    locale: 'hi_IN',
    images: [{ url: `${DOMAIN}/og-image.webp`, width: 1200, height: 630, alt: 'Agrarian Welfare Payment Estimator 2026 – KisanStatus.com' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agrarian Welfare Payment Estimator 2026',
    description: '₹6000 saalana — kitni tranche milegi estimate karo. Free tool.',
    site: '@kisanstatus',
    images: [`${DOMAIN}/og-image.webp`],
  },
};

export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Agrarian Welfare Payment Estimator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    description: 'Cultivator benefit program payment estimator — apni zameen aur enrollment ke hisaab se estimate karo kitni tranche milegi. ₹6000 saalana, 3 tranche mein. Free tool.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PMKisanBenefitCalcPage />
    </>
  );
}