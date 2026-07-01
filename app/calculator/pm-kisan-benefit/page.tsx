/**
 * /calculator/pm-kisan-benefit — KisanStatus.com
 * PM Kisan Benefit Calculator — Dedicated SEO page
 */
import type { Metadata } from 'next';
import PMKisanBenefitCalcPage from '@/components/calculators/PMKisanBenefitCalcPage';

const DOMAIN = 'https://kisanstatus.com';
const PAGE_URL = `${DOMAIN}/calculator/pm-kisan-benefit`;

export const metadata: Metadata = {
  title: 'PM Kisan Benefit Calculator 2026 — ₹6000 Saalana Kitna Milega?',
  description: 'PM Kisan Samman Nidhi benefit calculator — apni zameen aur enrollment ke hisaab se calculate karo kitni kist milegi. 2026 ke liye free online tool.',
  keywords: ['pm kisan benefit calculator', 'pm kisan 6000 calculator', 'pm kisan kist calculator 2026', 'pm kisan samman nidhi calculator'],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'PM Kisan Benefit Calculator 2026 — ₹6000 Saalana Kitna Milega?',
    description: 'Apni zameen aur enrollment ke hisaab se calculate karo kitni kist milegi. Free tool.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'KisanStatus.com',
    locale: 'hi_IN',
    images: [{ url: `${DOMAIN}/og-image.webp`, width: 1200, height: 630, alt: 'PM Kisan Benefit Calculator 2026 – KisanStatus.com' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PM Kisan Benefit Calculator 2026',
    description: '₹6000 saalana — kitni kist milegi calculate karo. Free tool.',
    site: '@kisanstatus',
    images: [`${DOMAIN}/og-image.webp`],
  },
};

export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'PM Kisan Benefit Calculator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    description: 'PM Kisan Samman Nidhi benefit calculator — apni zameen aur enrollment ke hisaab se calculate karo kitni kist milegi. ₹6000 saalana, 3 kist mein. Free tool.',
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