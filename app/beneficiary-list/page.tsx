import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, SITE_NAME } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'PM Kisan Beneficiary List 2026 — State Wise Village Roster Check',
  description: 'PM Kisan beneficiary list state wise check karo. Apne gaon ki village roster dekho, naam verify karo, PDF download karo. 36 states & UTs.',
  keywords: ['pm kisan beneficiary list', 'pm kisan state wise list', 'pm kisan village roster', 'pm kisan list 2026'],
  alternates: { canonical: `${SITE_URL}/beneficiary-list` },
  openGraph: {
    title: 'PM Kisan Beneficiary List 2026 — State Wise Check',
    description: 'State wise beneficiary list check karo. Apne gaon ki village roster dekho.',
    url: `${SITE_URL}/beneficiary-list`,
    siteName: SITE_NAME,
    type: 'website',
    locale: 'hi_IN',
  },
};

const STATES = [
  { name: 'Uttar Pradesh', icon: '🏔️', beneficiaries: '2.5 Crore+', slug: 'uttar-pradesh' },
  { name: 'Bihar', icon: '🌊', beneficiaries: '80 Lakh+', slug: 'bihar' },
  { name: 'Madhya Pradesh', icon: '🌿', beneficiaries: '70 Lakh+', slug: 'madhya-pradesh' },
  { name: 'Rajasthan', icon: '☀️', beneficiaries: '65 Lakh+', slug: 'rajasthan' },
  { name: 'Maharashtra', icon: '🌾', beneficiaries: '1 Crore+', slug: 'maharashtra' },
  { name: 'West Bengal', icon: '🐟', beneficiaries: '70 Lakh+', slug: 'west-bengal' },
  { name: 'Karnataka', icon: '🌴', beneficiaries: '50 Lakh+', slug: 'karnataka' },
  { name: 'Odisha', icon: '🌊', beneficiaries: '40 Lakh+', slug: 'odisha' },
  { name: 'Tamil Nadu', icon: '', beneficiaries: '40 Lakh+', slug: 'tamil-nadu' },
  { name: 'Punjab', icon: '', beneficiaries: '30 Lakh+', slug: 'punjab' },
  { name: 'Haryana', icon: '🚜', beneficiaries: '25 Lakh+', slug: 'haryana' },
  { name: 'Andhra Pradesh', icon: '🌶️', beneficiaries: '50 Lakh+', slug: 'andhra-pradesh' },
  { name: 'Kerala', icon: '', beneficiaries: '20 Lakh+', slug: 'kerala' },
  { name: 'Telangana', icon: '🌴', beneficiaries: '35 Lakh+', slug: 'telangana' },
  { name: 'Gujarat', icon: '🌿', beneficiaries: '50 Lakh+', slug: 'gujarat' },
  { name: 'Assam', icon: '', beneficiaries: '30 Lakh+', slug: 'assam' },
  { name: 'Jharkhand', icon: '🌊', beneficiaries: '30 Lakh+', slug: 'jharkhand' },
  { name: 'Uttarakhand', icon: '🏔️', beneficiaries: '15 Lakh+', slug: 'uttarakhand' },
  { name: 'Chhattisgarh', icon: '🌾', beneficiaries: '40 Lakh+', slug: 'chhattisgarh' },
  { name: 'Himachal Pradesh', icon: '🌊', beneficiaries: '10 Lakh+', slug: 'himachal-pradesh' },
  { name: 'Jammu & Kashmir', icon: '🏔️', beneficiaries: '12 Lakh+', slug: 'jammu-kashmir' },
  { name: 'Goa', icon: '🌿', beneficiaries: '1 Lakh+', slug: 'goa' },
  { name: 'Sikkim', icon: '🏔️', beneficiaries: '50,000+', slug: 'sikkim' },
  { name: 'Tripura', icon: '🌊', beneficiaries: '4 Lakh+', slug: 'tripura' },
  { name: 'Meghalaya', icon: '🌾', beneficiaries: '3 Lakh+', slug: 'meghalaya' },
  { name: 'Manipur', icon: '🌿', beneficiaries: '3 Lakh+', slug: 'manipur' },
  { name: 'Nagaland', icon: '🌊', beneficiaries: '2 Lakh+', slug: 'nagaland' },
  { name: 'Arunachal Pradesh', icon: '🏔️', beneficiaries: '2 Lakh+', slug: 'arunachal-pradesh' },
  { name: 'Mizoram', icon: '🌾', beneficiaries: '1 Lakh+', slug: 'mizoram' },
  { name: 'Delhi', icon: '🏛️', beneficiaries: '50,000+', slug: 'delhi' },
  { name: 'Puducherry', icon: '🌊', beneficiaries: '30,000+', slug: 'puducherry' },
  { name: 'Andaman & Nicobar', icon: '🏝️', beneficiaries: '10,000+', slug: 'andaman-nicobar' },
  { name: 'Ladakh', icon: '🏔️', beneficiaries: '20,000+', slug: 'ladakh' },
  { name: 'Lakshadweep', icon: '🌊', beneficiaries: '5,000+', slug: 'lakshadweep' },
  { name: 'Chandigarh', icon: '🏛️', beneficiaries: '20,000+', slug: 'chandigarh' },
  { name: 'Dadra & Nagar Haveli', icon: '', beneficiaries: '30,000+', slug: 'dadra-nagar-haveli' },
  { name: 'Daman & Diu', icon: '🏝️', beneficiaries: '10,000+', slug: 'daman-diu' },
] as const;

export default function BeneficiaryListPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'PM Kisan Beneficiary List 2026 — State Wise',
    description: 'PM Kisan beneficiary list state wise check karo. 36 states & UTs.',
    url: `${SITE_URL}/beneficiary-list`,
    numberOfItems: STATES.length,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <div className="bg-[var(--color-primary)] py-10">
        <div className="container-site text-center max-w-3xl">
          <span className="inline-block bg-white/15 text-green-200 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
            📋 PM Kisan Beneficiary List
          </span>
          <h1 className="text-2xl md:text-4xl font-black text-white mb-3">
            PM Kisan Beneficiary List 2026 — State Wise
          </h1>
          <p className="text-green-200 text-sm md:text-base max-w-2xl mx-auto">
            Apna state select karo aur gaon ki poori village-wise list dekho. Naam check karo, PDF download karo.
          </p>
        </div>
      </div>

      <div className="container-site py-8 max-w-3xl">

        {/* Official Portal CTA */}
        <div className="my-6 p-5 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-green-800 dark:text-green-300 mb-2">
            🎯 Apna Naam 2 Minute Mein Check Karo
          </h2>
          <p className="text-sm text-green-800 dark:text-green-300 mb-3">
            Official portal par apna beneficiary status check karo — free hai, turant result milega.
          </p>
          <a
            href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[var(--color-primary)] hover:opacity-90 text-white font-black px-5 py-3 rounded-xl text-sm transition-all"
          >
            ✅ Official Portal Kholo → pmkisan.gov.in
          </a>
        </div>

        {/* Intro */}
        <section className="mb-8">
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            PM Kisan beneficiary list mein naam hona matlab aap ₹2,000 ki kist ke eligible ho. Har state ki list alag hoti hai — neeche apna state select karo.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            <strong>24vi Kist</strong> October 2026 mein expected hai. List mein naam hona zaroori hai.
          </p>
        </section>

        {/* State Grid */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-[var(--color-text)] mb-4">
            ️ Apna State Select Karo (36 States & UTs)
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {STATES.map((state) => (
              <a
                key={state.slug}
                href={`https://pmkisan.gov.in/BeneficiaryList.aspx`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col p-3 bg-[var(--color-card)] border border-green-200 dark:border-green-800 rounded-xl hover:border-[var(--color-primary)] hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{state.icon}</span>
                  <span className="font-bold text-xs text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                    {state.name}
                  </span>
                </div>
                <span className="text-[10px] text-green-700 dark:text-green-400 font-bold">
                  {state.beneficiaries} beneficiaries
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* How to Check */}
        <section className="mb-8">
          <h2 className="text-lg font-black text-[var(--color-text)] mb-4">
            📋 Village Wise List Kaise Dekhen?
          </h2>
          <ol className="space-y-2">
            {[
              'pmkisan.gov.in par jao → "Farmers Corner" section mein jao',
              '"Beneficiary List" option click karo',
              'Apna State select karo',
              'District → Block → Village select karo',
              '"Get Report" click karo — poori list aayegi',
              'Ctrl+F se apna naam search karo',
              'PDF save: Print → Save as PDF',
            ].map((step, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="shrink-0 w-7 h-7 rounded-full bg-[var(--color-primary)] text-white text-xs font-black flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-sm text-[var(--color-text-muted)] pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Related Articles */}
        <section className="mb-8">
          <h2 className="text-lg font-black text-[var(--color-text)] mb-4">
            📖 Related PM Kisan Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/articles/PmKisanBeneficiaryList2026', title: '📋 Beneficiary List Complete Guide', desc: 'Naam check karo, 7 rejection reasons + fix' },
              { href: '/articles/PmKisan24viKist2026', title: ' 24vi Kist Status', desc: 'October 2026 mein kab aayegi' },
              { href: '/articles/PmKisanEkycOnline2026', title: '🔐 eKYC Guide', desc: 'Bina eKYC ke list mein naam nahi aayega' },
              { href: '/articles/PmKisanMasterGuide2026', title: '📚 Master Guide', desc: 'Sab problems ka ek jagah hal' },
              { href: '/articles/PmKisanPaymentFailedFix2026', title: '💸 Payment Failed Fix', desc: 'Naam hai par paisa nahi aaya?' },
              { href: '/articles/pm-kisan-fto-generated-ka-matlab-kya-hai', title: '💳 FTO Generated', desc: 'FTO status ka matlab samjho' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-all"
              >
                <p className="font-black text-sm text-[var(--color-text)] mb-1">{link.title}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{link.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl text-xs text-amber-800 dark:text-amber-300">
          <strong>⚠️ Note:</strong> Ye page sirf information ke liye hai. Official beneficiary list sirf pmkisan.gov.in par available hai. Kisi bhi third-party site par apna Aadhaar number share mat karo.
        </div>

      </div>
    </>
  );
}