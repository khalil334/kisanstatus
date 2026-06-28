/**
 * PM Kisan Status Calculator Tool
 * ✅ SEO OPTIMIZED
 * ✅ Schema Markup Ready
 */
import type { Metadata } from 'next';
import StatusCalculator from '@/components/tools/StatusCalculator';

export const metadata: Metadata = {
  title: 'PM Kisan Status Calculator 2026 — Kitni Kist Milni Chahiye? | KisanStatus.com',
  description: 'PM Kisan Status Calculator 2026 — Jaaniye kitni kist aapko milni chahiye, total amount, pending kist. Free tool with step-by-step guide.',
  keywords: [
    'PM Kisan Status Calculator',
    'PM Kisan kitne paise milenge',
    'PM Kisan kist calculator',
    'PM Kisan eligibility calculator',
    'PM Kisan total amount',
    'PM Kisan pending kist',
    'पीएम किसान कैलकुलेटर',
    'PM Kisan calculator 2026',
  ],
  alternates: { canonical: 'https://kisanstatus.com/tools/status-calculator' },
  openGraph: {
    title: 'PM Kisan Status Calculator 2026 — Free Tool',
    description: 'Calculate your PM Kisan eligibility, total expected amount, and pending installments.',
    type: 'website',
    url: 'https://kisanstatus.com/tools/status-calculator',
    siteName: 'KisanStatus.com',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function StatusCalculatorPage() {
  return <StatusCalculator />;
}