import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, SITE_NAME, AUTHOR_NAME, AUTHOR_URL, DEFAULT_OG_IMAGE } from '@/lib/site-config';

export const metadata: Metadata = {
  title: `Terms of Use – Upyog Ki Shartein`,
  description: `KisanStatus.com ki Terms of Service. Hamari website use karne se pehle yeh shartein, privacy policy aur legal notice zaroor padhein.`,
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
  alternates: { canonical: `${SITE_URL}/terms-of-service` },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Terms of Service – ${SITE_NAME} | Upyog Ki Shartein`,
    description: `Hamari website use karne se pehle yeh shartein, privacy policy aur legal notice zaroor padhein.`,
    type: 'website',
    url: `${SITE_URL}/terms-of-service`,
    siteName: SITE_NAME,
    locale: 'hi_IN',
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME} - Terms of Service`, type: 'image/webp' }],
  },
  twitter: {
    card: 'summary',
    title: `Terms of Service – ${SITE_NAME}`,
    description: `KisanStatus.com ki Terms of Service. Hamari website use karne se pehle yeh shartein zaroor padhein.`,
  },
};

const lastUpdated = '15 July 2026';

export default function TermsPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Terms of Service', item: `${SITE_URL}/terms-of-service` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site">
          <nav className="text-green-200 text-sm mb-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white font-bold">Terms of Use</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-bold text-white">Terms of Use (Upyog Ki Shartein)</h1>
          <p className="text-green-200 text-sm mt-1">Last updated: {lastUpdated}</p>
        </div>
      </div>

      <div className="container-site py-10">
        <div className="max-w-3xl mx-auto space-y-6">

          <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-300 dark:border-amber-800 rounded-xl text-sm text-amber-900 dark:text-amber-200">
            <strong>Zaruri Suchna:</strong> Yeh site maine apne dum par banayi hai —
            Bharat Sarkar ya kisi krishi yojana se iska koi sambandh nahi hai.
            Asli sarkari kaam ke liye hamesha{' '}
            <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="underline font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 rounded">
              pmkisan.gov.in ↗
            </a>{' '}
            ka hi upyog karein.
          </div>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">1. Sharton Ki Swikriti (Acceptance of Terms)</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Main Manish, <strong>{SITE_NAME}</strong> chalata hoon. Yeh page bas itna batata hai ki is site ko
              use karne ke kya niyam hain — jaise gaon mein koi cheez udhaar dete waqt do baatein tay kar li jaati
              hain, waise hi. Site kholne aur padhne ka matlab hai ki aap in baaton se sehmat hain. Sehmat na hon
              to koi baat nahi, bas site use na karein.
            </p>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">2. Hamari Sevayein (Description of Service)</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
              Yahan sab kuch <strong>bilkul muft</strong> hai — na koi fees, na koi membership. Main kisanon ke
              kaam ki yeh cheezein likhta hoon:
            </p>
            <ul className="text-sm text-[var(--color-text-muted)] space-y-2">
              {[
                'Official sarkari portal par status check karne ke step-by-step guides',
                'Kist (tranche) ki dates aur payment amount ki jankari (anumanit/expected)',
                'Digital verification (eKYC) aur naye registration ki puri jankari',
                'State-wise beneficiary list dekhne ka tarika',
                'Kisanon ki aam samasyaon aur unke hal se judi jankari',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[var(--color-primary)] mt-0.5" aria-hidden="true">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">3. Jankari Ki Shuddhta (Accuracy of Content)</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
              Jo likhta hoon, pehle khud official portal par check karta hoon. Phir bhi kuch baatein saaf
              samajh lein:
            </p>
            <ul className="text-sm text-[var(--color-text-muted)] space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5" aria-hidden="true">•</span>
                Jahan maine "Expected" ya "Not Confirmed" likha hai, woh mera pichle saalon ke hisaab se lagaya andaaza hai — sarkari elaan nahi. Kist ki asli date sarkar hi batati hai.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5" aria-hidden="true">•</span>
                Yojanaon ke niyam raaton-raat badal jaate hain — isliye main kisi baat ki 100% guarantee nahi le sakta.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5" aria-hidden="true">•</span>
                Koi bhi bada faisla lene se pehle pmkisan.gov.in par ek baar zaroor milaa lein — wahi aakhri sach hai.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5" aria-hidden="true">•</span>
                Yahan padh kar aap jo kadam uthate hain, woh aapka apna faisla hoga — nuksan ho jaye to uski jimmedari main nahi le sakta.
              </li>
            </ul>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">4. Yeh Koi Sarkari Website Nahi Hai</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              <strong>Phir se keh doon — {SITE_NAME} sarkari website nahi hai.</strong> Na main sarkari mulazim hoon,
              na Krishi Mantralaya ya kisi yojana se mera koi lena-dena hai. Aapka Aadhaar, bank account — aisi koi
              cheez main kabhi nahi maangta. Asli sarkari kaam ke liye hamesha{' '}
              <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">
                pmkisan.gov.in ↗
              </a>{' '}
              ka hi upyog karein.
            </p>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">5. User Ki Jimmedariyan (User Responsibilities)</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">Aapse bas itni ummeed hai:</p>
            <ul className="text-sm text-[var(--color-text-muted)] space-y-2">
              {[
                'Site ka istemaal seedhe-sacche kaam ke liye karein — koi galat kaam nahi',
                'Site ko todne-phodne ya nuksan pahunchane ki koshish na karein',
                'Mere likhe articles bina pooche copy karke apni site par na daalein — mehnat lagti hai likhne mein',
                'Koi bhi zaroori baat official portal par ek baar verify kar lein',
                'Sarkari faisle ke liye sirf is site ke bharose na baithein — yeh madad hai, pramaan nahi',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[var(--color-primary)] mt-0.5" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">6. Copyright aur Intellectual Property</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Yahan ke sabhi articles, guides aur design maine khud banaye hain — inka copyright mera hai aur
              kanoon se surakshit hai. Bina pooche inhe copy karke kahin aur na chhapein. Haan, mere articles ka
              link share karna ho to bilkul karein — isi liye to likhta hoon, jitne kisanon tak pahunche utna accha.
            </p>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">7. Vigyaapan (Advertising)</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Site chalane ka kharcha nikalne ke liye yahan Google AdSense ke ads dikh sakte hain — isi wajah se
              yeh site aapke liye muft hai. Ads content se alag dikhte hain, aur ad mein jo bhi dikhe woh meri
              sifarish nahi hai — kaun sa ad kisko dikhana hai, yeh Google tay karta hai. Ads aapke data ka kya
              karte hain, iske liye meri{' '}
              <Link href="/privacy-policy" className="text-[var(--color-primary)] underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">
                Data Protection Notice (Privacy Policy)
              </Link>{' '}
              dekhein.
            </p>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">8. Bahari Links (Third-Party Links)</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Articles mein main pmkisan.gov.in jaise sarkari portals ke links deta hoon taaki aap seedha sahi
              jagah pahunchein. Lekin un websites par kya hai, kya badla — yeh mere haath mein nahi. Wahan jaakar
              jo hota hai uski jimmedari main nahi le sakta.
            </p>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">9. Jimmedari Se Mukti (Limitation of Liability)</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Seedhi baat — yeh site muft ki madad hai, koi paid service nahi. Ispar padh kar liye gaye faisle se
              koi nuksan ho jaye — kist ruk jaye, arji reject ho jaye, kuch bhi — to uski jimmedari meri nahi
              hogi, kyunki asli record aur faisla sarkar ke paas hai. Isliye kanooni taur par meri jimmedari
              shunya (zero) tak simit hai.
            </p>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">10. Sharton Mein Badlav (Changes to Terms)</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Waqt ke saath in niyamon mein badlav ho sakta hai — jo bhi badlega, isi page par nayi date ke saath
              likh dunga. Badlav ke baad bhi site use karte rahe, to maana jayega ki aap naye niyamon se sehmat hain.
            </p>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">11. Lagu Hone Wala Kanoon (Governing Law)</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Yeh site Bharat se chalti hai, isliye in niyamon par Bharat ka kanoon lagu hoga aur koi vivad hua
              to Bharat ki adalaton mein hi suljhega.
            </p>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">12. Sampark (Contact)</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
              In niyamon mein kuch samajh na aaye ya koi sawal ho, to seedha email kar dein — main khud jawab deta hoon:
            </p>
            <div className="text-sm text-[var(--color-text-muted)] space-y-2">
              <p>Email: <a href="mailto:kisanstatus.support@gmail.com" className="text-[var(--color-primary)] underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">kisanstatus.support@gmail.com</a></p>
              <p>Platform: <a href={SITE_URL} className="text-[var(--color-primary)] underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">{SITE_URL}</a></p>
              <p>Author: <Link href="/about" className="text-[var(--color-primary)] underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">{AUTHOR_NAME}</Link></p>
            </div>
          </section>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/privacy-policy"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-text)] text-sm font-bold rounded-xl hover:border-green-400 dark:hover:border-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Data Protection Notice →
            </Link>
            <Link
              href="/disclaimer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-text)] text-sm font-bold rounded-xl hover:border-green-400 dark:hover:border-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Legal Notice →
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-text)] text-sm font-bold rounded-xl hover:border-green-400 dark:hover:border-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Contact Us →
            </Link>
          </div>

          <p className="text-xs text-[var(--color-text-muted)] text-center pt-4">
            Maine yeh niyam aakhiri baar {lastUpdated} ko update kiye the.
          </p>

        </div>
      </div>
    </>
  );
}
