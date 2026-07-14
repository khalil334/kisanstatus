import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, SITE_NAME } from '@/lib/site-config';

export const metadata: Metadata = {
  title: `Legal Disclaimer – ${SITE_NAME} | Unofficial Portal`,
  description: `${SITE_NAME} ek independent informational portal hai, sarkar se affiliated nahi. Official jankari ke liye hamesha pmkisan.gov.in par hi vishwas karein.`,
  authors: [{ name: 'KisanStatus Team', url: `${SITE_URL}/about` }],
  alternates: { canonical: `${SITE_URL}/disclaimer` },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Legal Disclaimer – ${SITE_NAME} | Unofficial Portal`,
    description: `${SITE_NAME} ek independent informational portal hai, sarkar se affiliated nahi. Official jankari ke liye hamesha pmkisan.gov.in par hi vishwas karein.`,
    type: 'website',
    url: `${SITE_URL}/disclaimer`,
    siteName: SITE_NAME,
    locale: 'hi_IN',
  },
  twitter: {
    card: 'summary',
    title: `Legal Disclaimer – ${SITE_NAME}`,
    description: `${SITE_NAME} ek independent informational portal hai, sarkar se affiliated nahi. Official jankari ke liye hamesha pmkisan.gov.in par hi vishwas karein.`,
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Legal Notice & Disclaimer', item: `${SITE_URL}/disclaimer` },
  ],
};

export default function DisclaimerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-amber-600 py-8">
        <div className="container-site">
          <nav className="text-amber-200 text-sm mb-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white font-bold">Legal Notice</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-bold text-white">Legal Notice & Disclaimer</h1>
          <p className="text-amber-100 text-sm mt-1">Is portal ke upyog se pehle yeh zaroor padhein</p>
        </div>
      </div>

      <div className="container-site py-10">
        <div className="max-w-3xl mx-auto space-y-6">

          <div className="rounded-xl border-2 border-red-400 bg-red-50 dark:bg-red-900/20 dark:border-red-800 p-6 text-center">
            <div className="text-4xl mb-3" aria-hidden="true">⚠️</div>
            <h2 className="text-xl font-bold text-red-800 dark:text-red-300 mb-3">
              YEH KOI OFFICIAL SARKARI PORTAL NAHI HAI
            </h2>
            <p className="text-red-900 dark:text-red-200 text-sm leading-relaxed max-w-xl mx-auto">
              <strong>Yeh website Bharat Sarkar, Krishi Mantralaya, ya kisi bhi kisan hit yojana se affiliated, endorsed ya connected nahi hai.</strong>
            </p>
            <div className="mt-4">
              <a
                href="https://pmkisan.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-700 hover:bg-red-800 text-white text-sm font-bold rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Official Portal Dekhein: pmkisan.gov.in ↗
              </a>
            </div>
          </div>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">Is Portal Ka Uddeshya (Purpose)</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
              Yeh ek <strong>independent, informational website</strong> hai, jise Indian kisanon ko unki yojanaon ka beneficiary status check karne mein madad karne ke liye banaya gaya hai. Hum pradaan karte hain:
            </p>
            <ul className="text-sm text-[var(--color-text-muted)] space-y-2">
              {[
                'Sarkari portal par status check karne ke aasaan aur saral guides',
                'Kist (tranche) ki dates aur payment amount ki jankari',
                'Digital verification (eKYC) ki step-by-step jankari',
                'Kisan hit yojanaon ki general eligibility jankari',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[var(--color-primary)] mt-0.5" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">Yeh Portal Kya Nahi Karta</h2>
            <ul className="text-sm text-[var(--color-text-muted)] space-y-2">
              {[
                'Hum aapka scheme status direct check nahi karte — sabhi verification sirf pmkisan.gov.in par hoti hai.',
                'Hum aapka Aadhaar, bank account, ya koi bhi personal/financial detail collect nahi karte.',
                'Hum kisi bhi sarkari application ko process, approve ya reject nahi karte.',
                'Hum kisi bhi sarkari payment ya fund ko transfer ya handle nahi karte.',
                'Hum kisi bhi tarah se Bharat Sarkar ka pratinidhitva (represent) nahi karte.',
                'Hum jankari ki 100% shuddhta ki guarantee nahi dete — hamesha pmkisan.gov.in par verify karein.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5" aria-hidden="true">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">Jankari Ki Shuddhta (Accuracy)</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Hum poori koshish karte hain ki yahan di gayi jankari sahi aur updated rahe, lekin hum is portal ki kisi bhi content ki completeness, accuracy, ya reliability ki koi warranty nahi dete. Sarkari yojanaein bina kisi suchna ke badal sakti hain. Hamesha current jankari ke liye official sarkari website <strong>pmkisan.gov.in</strong> ko hi pramanik maanein.
            </p>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">Bahari Links (External Links)</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Is portal par pmkisan.gov.in jaisi bahari sarkari websites ke links shamil ho sakte hain. Yeh links keval aapki suvidha aur jankari ke liye hain. Un sites ki content par hamara koi control nahi hai aur hum unke liye koi jimmedari nahi lete.
            </p>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">Jimmewari Se Mukti (Limitation of Liability)</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Is website aur iske operators ko is portal ke upyog ya yahan prakashit jankari par bharosa karne se hone wale kisi bhi nuksan, kshati, ya asuvidha ke liye jimmedar nahi thahraya ja sakta. Is site ki content ke aadhar par liya gaya koi bhi kadam puri tarah se aapke apne jokhim par hoga. Official sahayata ke liye kisan helpline <strong>155261</strong> par sampark karein.
            </p>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">Copyright Suchna</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Is portal ki original content, design, aur code ka copyright © 2026 hai. Sarvadhikar surakshit. Sarkari data, yojanaon ke naam, aur sambandhit jankari Bharat Sarkar ke svamitva mein hain.
            </p>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">Vigyaapan (Advertising)</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Is portal par Google AdSense ke madhyam se third-party vigyaapan (ads) pradarshit kiye ja sakte hain. Yeh vigyaapan is free informational service ko banaye rakhne mein madad karte hain. Vigyaapan kisi bhi product ya service ka samarthan nahi hain, aur hum in vigyaapanon ki content ke liye jimmedar nahi hain.
            </p>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">Sampark (Contact)</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-2">
              Is portal se juda koi bhi sawaal ya sujhav ke liye humse sampark karein:
            </p>
            <p className="text-sm mb-3">
              📧{' '}
              <a href="mailto:kisanstatus.support@gmail.com" className="text-[var(--color-primary)] underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">
                kisanstatus.support@gmail.com
              </a>
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-primary)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded"
            >
              Contact Page Par Jaayein →
            </Link>
          </section>

          <div className="news-box bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-6">
            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-3 text-lg">
              🔗 Official Sarkari Resources
            </h3>
            <ul className="text-sm text-green-900 dark:text-green-200 space-y-2">
              <li>
                <a href="https://pmkisan.gov.in/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline font-medium focus:outline-none focus:ring-2 focus:ring-green-500 rounded inline-flex items-center gap-1">
                  PM Kisan Official Portal — pmkisan.gov.in ↗
                </a>
              </li>
              <li>
                <a href="https://pmkisan.gov.in/BeneficiaryStatus.aspx" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline font-medium focus:outline-none focus:ring-2 focus:ring-green-500 rounded inline-flex items-center gap-1">
                  Beneficiary Status Check ↗
                </a>
              </li>
              <li>
                <a href="https://agriculture.gov.in/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline font-medium focus:outline-none focus:ring-2 focus:ring-green-500 rounded inline-flex items-center gap-1">
                  Ministry of Agriculture & Farmers Welfare ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}