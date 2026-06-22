import type { Metadata } from 'next';
import PMFBYCalcPage from '@/components/calculators/PMFBYCalcPage';

export const metadata: Metadata = {
  title: 'PMFBY Fasal Bima Premium Calculator 2026 — Crop Insurance Premium',
  description: 'Pradhan Mantri Fasal Bima Yojana premium calculator — apni fasal ka insurance premium calculate karo. Kharif aur Rabi dono seasons ke liye free tool.',
  keywords: ['pmfby premium calculator','fasal bima calculator','pradhan mantri fasal bima yojana calculator','crop insurance premium calculator india'],
  alternates: { canonical: 'https://kisanstatus.com/calculator/pmfby-premium' },
};

export default function Page() { return <PMFBYCalcPage />; }
