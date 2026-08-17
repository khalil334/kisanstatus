import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, AUTHOR_NAME, AUTHOR_URL } from '@/lib/site-config';

export const metadata: Metadata = {
  title: `Legal Notice & Disclaimer`,
  description: `${SITE_NAME} meri apni banayi hui site hai — sarkar se iska koi rishta nahi. Asli kaam ke liye hamesha pmkisan.gov.in par hi jaayein.`,
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
  alternates: { canonical: `${SITE_URL}/disclaimer` },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Legal Disclaimer – ${SITE_NAME} | Unofficial Portal`,
    description: `${SITE_NAME} meri apni banayi hui site hai — sarkar se iska koi rishta nahi. Asli kaam ke liye hamesha pmkisan.gov.in par hi jaayein.`,
    type: 'website',
    url: `${SITE_URL}/disclaimer`,
    siteName: SITE_NAME,
    locale: 'hi_IN',
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME} - Legal Disclaimer`, type: 'image/webp' }],
  },
  twitter: {
    card: 'summary',
    title: `Legal Disclaimer – ${SITE_NAME}`,
    description: `${SITE_NAME} meri apni banayi hui site hai — sarkar se iska koi rishta nahi. Asli kaam ke liye hamesha pmkisan.gov.in par hi jaayein.`,
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
          <p className="text-amber-100 text-sm mt-1">Do minute nikaal kar ise padh lein — kaam ki baat hai</p>
        </div>
      </div>

      <div className="container-site py-10">
        <div className="max-w-3xl mx-auto space-y-6">

          <div className="rounded-xl border-2 border-red-400 bg-red-50 dark:bg-red-900/20 dark:border-red-800 p-6 text-center">
            <h2 className="text-xl font-bold text-red-800 dark:text-red-300 mb-3">
              YEH SARKARI WEBSITE NAHI HAI
            </h2>
            <p className="text-red-900 dark:text-red-200 text-sm leading-relaxed max-w-xl mx-auto">
              <strong>Sabse pehle yeh samajh lein — na main sarkari aadmi hoon, na yeh site sarkar ki hai. Krishi Mantralaya ya kisi yojana ke daftar se mera koi naata nahi. Yeh bas ek kisan ki banayi hui jaankari wali site hai.</strong>
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
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">Yeh Site Kyun Banayi</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
              Sach bataun to yeh site meri apni pareshani se nikli hai — ghar mein PM Kisan ki kist atki thi aur sarkari portal se kuch samajh nahi aa raha tha. Tab laga ki jo main seekh raha hoon, wahi baaki kisan bhaiyon ke bhi kaam aayega. Yahan aapko yeh milega:
            </p>
            <ul className="text-sm text-[var(--color-text-muted)] space-y-2">
              {[
                'Sarkari portal par status check karne ka aasaan tareeqa, step-by-step',
                'Kist kab aayegi, kitna paisa aayega — iski jaankari',
                'eKYC kaise karein, kahan atakta hai — poora rasta',
                'Kaun si yojana mein kaun aadmi aata hai — seedhi bhasha mein',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[var(--color-primary)] mt-0.5" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">Jo Kaam Yahan Nahi Hota</h2>
            <ul className="text-sm text-[var(--color-text-muted)] space-y-2">
              {[
                'Aapka status main check nahi kar sakta — woh sirf pmkisan.gov.in par hi hota hai. Main bas rasta dikhata hoon.',
                'Aadhaar number, bank account, OTP — aisi koi cheez yahan na daalein, main maangta bhi nahi.',
                'Form bharna, arji manzoor ya namanzoor karna — yeh sab sarkari daftar ka kaam hai, mera nahi.',
                'Paisa na main bhejta hoon, na rok sakta hoon. Kist seedha sarkar se aapke khaate mein aati hai.',
                'Main sarkar ki taraf se nahi bolta — jo samjha hai, wahi apni bhasha mein likhta hoon.',
                'Galti mujhse bhi ho sakti hai — isliye koi bhi badi baat pmkisan.gov.in par ek baar zaroor milaa lein.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5" aria-hidden="true">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">Jaankari Kitni Pakki Hai?</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Jo bhi likhta hoon, pehle official portal par khud check karta hoon — yeh mera niyam hai. Phir bhi yojanaon ke niyam raaton-raat badal jaate hain, kabhi koi suchna bhi nahi aati. Isliye main kisi baat ki 100% guarantee nahi le sakta. Aakhri sach hamesha <strong>pmkisan.gov.in</strong> par hi hai — wahan jo likha hai, wahi maanein. Agar aapko yahan koi galti dikhe to mujhe email kar dein, main theek kar dunga.
            </p>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">Bahari Links Ke Baare Mein</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Articles mein main pmkisan.gov.in jaise sarkari portals ke links deta rehta hoon, taaki aap seedha sahi jagah pahunch jaayein. Lekin un websites par kya chal raha hai, yeh mere haath mein nahi — kabhi portal band milta hai, kabhi page badal jaata hai. Uski jimmedari main nahi le sakta.
            </p>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">Jimmedari Ki Baat</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Seedhi baat — yeh site aapki madad ke liye hai, lekin ispar padh kar aap jo bhi kadam uthaate hain, woh aapka apna faisla hoga. Kist, patrata ya kisi bhi sarkari kaam mein nuksan ho jaye to uski jimmedari main nahi le sakta, kyunki asli record sarkar ke paas hai, mere paas nahi. Koi bhi pakka kaam karne se pehle kisan helpline <strong>155261</strong> par baat kar lein ya apne krishi karyalay chale jaayein.
            </p>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">Copyright</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Yahan ke articles, design aur code maine khud banaye hain — inka copyright © 2026 mera hai, bina pooche na uthayein. Haan, yojanaon ke naam, sarkari data aur unse judi jaankari sarkar ki hai — uspar mera koi dawa nahi.
            </p>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">Ads Ke Baare Mein</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Site chalane ka kharcha nikalne ke liye yahan Google AdSense ke ads dikh sakte hain. Yeh site free hai aur free hi rahegi — ads se hi iska kharcha chalta hai. Lekin ek baat yaad rakhein: ad mein jo dikhe, woh meri salah nahi hai. Kaun sa ad kisko dikhega, yeh Google tay karta hai, main nahi.
            </p>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">Mujhse Baat Karni Ho To</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-2">
              Koi sawaal ho, koi galti dikhe, ya bas kuch kehna ho — email kar dein, main padhta hoon aur jawab bhi deta hoon:
            </p>
            <p className="text-sm mb-3">
              {' '}
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
               Official Sarkari Resources
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
