/**
 * /calculator/pm-kisan-benefit — KisanStatus.com
 * PM Kisan Benefit Calculator — Dedicated SEO page
 */
import type { Metadata } from 'next';
import PMKisanBenefitCalcPage from '@/components/calculators/PMKisanBenefitCalcPage';

export const metadata: Metadata = {
  title: 'PM Kisan Benefit Calculator 2026 — ₹6000 Saalana Kitna Milega? | KisanStatus.com',
  description: 'PM Kisan Samman Nidhi benefit calculator — apni zameen aur enrollment ke hisaab se calculate karo kitni kist milegi. 2026 ke liye free online tool.',
  keywords: ['pm kisan benefit calculator','pm kisan 6000 calculator','pm kisan kist calculator 2026','pm kisan samman nidhi calculator'],
  alternates: { canonical: 'https://kisanstatus.com/calculator/pm-kisan-benefit' },
};

export default function Page() { return <PMKisanBenefitCalcPage />; }
