import type { Metadata } from 'next';
// Import hata do!

export const metadata: Metadata = {
  title: 'PM Kisan Installment Status Tracker 2026 — 23vi Kist Kyun Ruki?',
  description: 'PM Kisan 23vi kist status tracker — eKYC, bank Aadhaar seeding, land seeding aur beneficiary status check karke 4 sawaal mein pata karo kist kyun nahi aayi. Free tool.',
  keywords: ['pm kisan installment tracker','pm kisan 23vi kist status check tool','pm kisan kist kyun nahi aayi','pm kisan status checker 2026','pm kisan ekyc status tracker'],
  alternates: { canonical: 'https://kisanstatus.com/calculator/installment-tracker' },
};

// ✅ Directly yahan component likho
export default function Page() {
  const [ekyc, setEkyc] = useState('unknown');
  // ... baaki code
  
  return (
    // ... JSX
  );
}