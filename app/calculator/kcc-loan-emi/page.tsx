import type { Metadata } from 'next';
import KCCLoanCalcPage from '@/components/calculators/KCCLoanCalcPage';

export const metadata: Metadata = {
  title: 'KCC Loan EMI Calculator 2026 — Kisan Credit Card Monthly Payment | KisanStatus.com',
  description: 'Kisan Credit Card (KCC) loan ki monthly EMI calculate karo. 7% interest rate, government subsidy, total repayment — sab ek jagah. Free online tool.',
  keywords: ['kcc loan emi calculator','kisan credit card emi calculator','kcc loan calculator 2026','kisan credit card monthly payment'],
  alternates: { canonical: 'https://kisanstatus.com/calculator/kcc-loan-emi' },
};

export default function Page() { return <KCCLoanCalcPage />; }
