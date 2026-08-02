import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'PM Kisan Beneficiary List Download',
  description:
    'PM Kisan beneficiary list official portal se dekhne aur download karne ka seedha link — state, district aur village ke hisaab se apna naam check karein.',
  alternates: {
    canonical: `${SITE_URL}/beneficiary-list/download`,
  },
};

export default function BeneficiaryListDownloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
