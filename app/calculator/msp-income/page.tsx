import type { Metadata } from 'next';
import MSPIncomeCalcPage from '@/components/calculators/MSPIncomeCalcPage';

export const metadata: Metadata = {
  title: 'MSP Income Calculator 2026 — Minimum Support Price Fasal Income',
  description: 'MSP 2026 rates se apni fasal ki income calculate karo — gehun, dhan, makka, cotton sab crops ke liye. Government MSP par kitna paisa milega.',
  keywords: ['msp income calculator','minimum support price calculator 2026','msp calculator india','wheat msp calculator','rice msp calculator'],
  alternates: { canonical: 'https://kisanstatus.com/calculator/msp-income' },
};

export default function Page() { return <MSPIncomeCalcPage />; }
