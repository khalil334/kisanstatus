import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'PM Kisan Land Seeding Form PDF Download',
  description:
    'PM Kisan Land Seeding Form PDF apne state ke official portal se free download karne ka seedha link — UP, Bihar, MP, Rajasthan aur anya rajya.',
  alternates: {
    canonical: `${SITE_URL}/articles/pm-kisan-land-seeding-form/download`,
  },
};

export default function LandSeedingDownloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
