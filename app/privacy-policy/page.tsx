/**
 * /privacy-policy — KisanStatus.com
 * Data Protection & Privacy Notice — Legal compliance page
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, SITE_NAME, AUTHOR_NAME, AUTHOR_URL } from '@/lib/site-config';

export const metadata: Metadata = {
  title: `Privacy Policy – ${SITE_NAME} | Data Protection Notice`,
  description: `${SITE_NAME} ki Privacy Policy. Hum aapka data kaise collect, use aur secure karte hain, iski puri jankari yahan padhein. Bilkul safe aur transparent.`,
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Privacy Policy – ${SITE_NAME} | Data Protection Notice`,
    description: `Hum aapka data kaise collect, use aur secure karte hain, iski puri jankari yahan padhein.`,
    type: 'website',
    url: `${SITE_URL}/privacy-policy`,
    siteName: SITE_NAME,
    locale: 'hi_IN',
  },
  twitter: {
    card: 'summary',
    title: `Privacy Policy – ${SITE_NAME}`,
    description: `Hum aapka data kaise collect, use aur secure karte hain, iski puri jankari yahan padhein.`,
  },
};

const lastUpdated = '15 July 2026';

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: `${SITE_URL}/privacy-policy` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-primary-600 py-8">
        <div className="container-site">
          <nav className="text-green-200 text-sm mb-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white font-bold">Privacy Policy</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-bold text-white">Data Protection aur Privacy Policy</h1>
          <p className="text-green-200 text-sm mt-1">Last updated: {lastUpdated}</p>
        </div>
      </div>

      <div className="container-site py-10">
        <div className="max-w-3xl mx-auto space-y-8">

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">1. Parichay (Introduction)</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              <strong>{SITE_NAME}</strong> ("hum", "hamara", ya "humein") par aapka swagat hai. Yeh privacy policy 
              batati hai ki jab aap hamari website <strong>{SITE_URL}</strong> ("Site") par aate hain, toh hum aapki 
              jankari ko kaise collect, use, disclose aur secure karte hain. Kripya is policy ko dhyan se padhein. 
              Hamari Site ka upyog karke, aap is policy ke anusaar jankari ke collection aur upyog se sahmat hote hain.
            </p>
            <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl text-sm text-yellow-900 dark:text-yellow-300">
              <strong>⚠️ Zaruri Suchna:</strong> {SITE_NAME} Bharat Sarkar ya kisi bhi krishi yojana se affiliated nahi hai. 
              Hum ek independent informational platform hain.
            </div>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">2. Hum Kaunsa Data Collect Karte Hain</h2>
            <div className="text-sm text-[var(--color-text-muted)] space-y-4">
              <div>
                <h3 className="font-semibold text-[var(--color-text)] mb-1">2.1 Automatically Collect Kiya Jane Wala Data</h3>
                <p className="leading-relaxed">
                  Jab aap hamari website par aate hain, toh hum aapke device aur usage ke baare mein kuch jankari 
                  automatically collect kar sakte hain, jaise ki:
                </p>
                <ul className="mt-2 space-y-1 pl-4">
                  {[
                    'IP address (anonymized/gupt rakha hua)',
                    'Browser ka type aur version',
                    'Operating system',
                    'Kaunse pages visit kiye aur kitna samay bitaya',
                    'Referring URL (aap kahan se aaye)',
                    'Device type (mobile ya desktop)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[var(--color-primary)] mt-0.5" aria-hidden="true">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-text)] mb-1">2.2 Cookies</h3>
                <p className="leading-relaxed">
                  Hum aapke experience ko behtar banane ke liye cookies aur similar tracking technologies ka upyog karte hain. 
                  Cookies hamare dwara (first-party) ya third-party services jaise Google Analytics aur Google AdSense 
                  dwara set kiye ja sakte hain. Aap apne browser settings ke through cookies ko control kar sakte hain.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-text)] mb-1">2.3 Aapke Dwara Di Gayi Jankari</h3>
                <p className="leading-relaxed">
                  Hum aapka naam, Aadhaar number, bank account details, ya koi bhi sensitive personal data 
                  <strong> collect nahi karte</strong>. Hamari website par aisi koi bhi form nahi hai jo aapse 
                  directly aisi jankari mange.
                </p>
              </div>
            </div>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">3. Hum Aapki Jankari Ka Upyog Kaise Karte Hain</h2>
            <ul className="text-sm text-[var(--color-text-muted)] space-y-2">
              {[
                'Website traffic ko analyze karne aur hamare content ko behtar banane ke liye',
                'Yeh samajhne ke liye ki visitors hamari Site ka upyog kaise karte hain (Google Analytics ke through)',
                'Aapke liye relevant vigyaapan (ads) dikhane ke liye (Google AdSense ke through)',
                'Yeh ensure karne ke liye ki Site sahi se kaam kar rahi hai',
                'Kanooni (legal) zimmedariyon ko pura karne ke liye',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[var(--color-primary)] font-bold mt-0.5" aria-hidden="true">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">4. Google Analytics</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
              Hum Google Analytics 4 (GA4) ka upyog isliye karte hain taaki yeh samajh sakein ki visitors hamari 
              Site ke saath kaise interact karte hain. Google Analytics cookies ka upyog karke anonymous data 
              jaise page views, session duration, aur user behavior patterns collect karta hai.
            </p>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Google Analytics data Google Inc. dwara process kiya jata hai. Adhik jankari ke liye, kripya{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded"
              >
                Google ki Privacy Policy ↗
              </a>{' '}
              dekhein. Aap{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded"
              >
                Google Analytics Opt-out Browser Add-on ↗
              </a>{' '}
              install karke Google Analytics se opt-out kar sakte hain.
            </p>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">5. Google AdSense aur Vigyaapan (Ads)</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
              Hum apni Site par vigyaapan dikhane ke liye Google AdSense ka upyog kar sakte hain. Google AdSense 
              cookies ka upyog karke aapki hamari platform aur internet ki doosri sites par pichli visits ke 
              aadhar par ads serve karta hai.
            </p>
            <ul className="text-sm text-[var(--color-text-muted)] space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-primary)] mt-0.5" aria-hidden="true">•</span>
                Google DART cookie ka upyog karke aapki hamari Site aur doosri sites par visits ke aadhar par ads serve karta hai.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-primary)] mt-0.5" aria-hidden="true">•</span>
                Aap{' '}
                <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] underline hover:no-underline">
                  Google Ads Settings ↗
                </a>{' '}
                par jaakar personalized advertising se opt-out kar sakte hain.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-primary)] mt-0.5" aria-hidden="true">•</span>
                Third-party vendors bhi ads serve karne ke liye cookies ka upyog kar sakte hain. Opt-out karne ke liye{' '}
                <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] underline hover:no-underline">
                  AboutAds.info ↗
                </a>{' '}
                dekhein.
              </li>
            </ul>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">6. Teesre Paksh ke Links (Third-Party Links)</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Hamari Site par external platforms ke links shamil ho sakte hain, jismein official sarkari portal{' '}
              <strong>pmkisan.gov.in</strong> bhi shamil hai. Hum in third-party sites ki privacy practices ke 
              liye jimmedar nahi hain. Hum aapse anurodh karte hain ki koi bhi personal jankari dene se pehle 
              unki privacy policies ko zaroor padhein.
            </p>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">7. Data Suraksha (Data Security)</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Hum aapke dwara di gayi jankari ko surakshit karne ke liye uchit technical aur organizational 
              security measures lagu karte hain. Halanki, internet par koi bhi transmission 100% secure nahi hoti. 
              Kyunki hum koi bhi sensitive personal data collect nahi karte, isliye aapka risk minimal hai.
            </p>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">8. Bachon ki Privacy (Children's Privacy)</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Hamari Site 13 saal se kam umar ke bachon ke liye nahi hai. Hum jaan-boojhkar bachon se koi bhi 
              identifiable jankari collect nahi karte. Agar aapko lagta hai ki kisi bachche ne humein aisi 
              jankari di hai, toh kripya turant humse sampark karein.
            </p>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">9. Aapke Adhikar (GDPR Rights)</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
              Agar aap European Economic Area (EEA) ke nivaasi hain, toh aapke paas nimnlikhit adhikar hain:
            </p>
            <ul className="text-sm text-[var(--color-text-muted)] space-y-1">
              {[
                'Apne personal data tak pahunchne ka adhikar (Right to access)',
                'Galat data ko theek karwane ka adhikar (Right to rectification)',
                'Data ko delete karwane ka adhikar ("Right to be forgotten")',
                'Data portability ka adhikar',
                'Processing ka virodh karne ka adhikar (Right to object)',
                'Sahmati wapas lene ka adhikar (Right to withdraw consent)',
              ].map((right) => (
                <li key={right} className="flex items-start gap-2">
                  <span className="text-[var(--color-primary)] mt-0.5" aria-hidden="true">✓</span>
                  {right}
                </li>
              ))}
            </ul>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">10. Sampark Karein (Contact Us)</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
              Agar aapke paas is privacy policy ke baare mein koi sawal ya chinta hai, toh kripya humse sampark karein:
            </p>
            <div className="text-sm text-[var(--color-text-muted)] space-y-2">
              <p>📧 Email: <a href="mailto:kisanstatus.support@gmail.com" className="text-[var(--color-primary)] underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">kisanstatus.support@gmail.com</a></p>
              <p>🌐 Website: <a href={SITE_URL} className="text-[var(--color-primary)] underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">{SITE_URL}</a></p>
              <p className="mt-3">
                Ya adhik jankari ke liye hamara{' '}
                <Link href="/contact" className="text-[var(--color-primary)] font-bold underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">
                  Contact Page
                </Link>{' '}
                dekhein.
              </p>
            </div>
          </section>

          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            Yeh privacy policy aakhiri baar {lastUpdated} ko update ki gayi thi. Hum is policy ko kabhi bhi update 
            karne ka adhikar rakhte hain. Koi bhi badlav is page par post kiya jayega.
          </p>
        </div>
      </div>
    </>
  );
}