import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'State Wise Bhulekh Portal — Land Seeding Ke Liye Khasra-Khatauni',
  description:
    'Apne state ke official Bhulekh/revenue portal ka seedha link — khasra-khatauni nikaal kar PM Kisan land seeding form ke saath lagayein. UP, Bihar, MP, Rajasthan aur anya rajya.',
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
