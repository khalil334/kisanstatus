import type { Metadata } from 'next';
import CropProfitCalcPage from '@/components/calculators/CropProfitCalcPage';

export const metadata: Metadata = {
  title: 'Crop Profit Loss Calculator 2026 — Kheti Mein Kitna Fayda Nuksan? | KisanStatus.com',
  description: 'Kheti ka poora hisaab — seed, fertilizer, labor cost minus revenue = net profit ya loss. Per hectare crop profit calculator. Free online tool.',
  keywords: ['crop profit calculator india','kheti profit calculator','farming profit loss calculator','crop profit per hectare india 2026'],
  alternates: { canonical: 'https://kisanstatus.com/calculator/crop-profit' },
};

export default function Page() { return <CropProfitCalcPage />; }
