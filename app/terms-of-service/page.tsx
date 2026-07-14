/**
 * /terms-of-service — KisanStatus.com
 * Legal Service Conditions & User Agreement (Optimized for Hinglish & SEO)
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, SITE_NAME, AUTHOR_NAME, AUTHOR_URL } from '@/lib/site-config';

export const metadata: Metadata = {
  title: `Terms of Service – ${SITE_NAME} | Upyog Ki Shartein`,
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
            <strong>⚠️ Zaruri Suchna:</strong> {SITE_NAME} ek independent informational platform hai. 
            Yeh Bharat Sarkar ya kisi bhi krishi yojana se affiliated nahi hai. 
            Official kaam ke liye hamesha{' '}
            <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="underline font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 rounded">
              pmkisan.gov.in ↗
            </a>{' '}
            ka hi upyog karein.
          </div>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">1. Sharton Ki Swikriti (Acceptance of Terms)</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              <strong>{SITE_NAME}</strong> ("Platform", "hum", "hamara") ko access karke aur upyog karke, aap in Terms of Use ko 
              poore tarike se swikaar karte hain aur inse bandhne ke liye sahmat hote hain. Agar aap in sharton se sahmat nahi hain, 
              toh kripya hamare platform ka upyog na karein. Yeh shartein platform ke sabhi visitors aur users par lagu hoti hain.
            </p>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">2. Hamari Sevayein (Description of Service)</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
              {SITE_NAME} Indian kisanon ke liye krishi kalyan yojanaon ke baare mein <strong>muft aur informational content</strong> pradaan karta hai. 
              Hamari sevao mein shamil hain:
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
              Hum har sambhav prayas karte hain ki yahan di gayi jankari sahi aur updated rahe. Lekin:
            </p>
            <ul className="text-sm text-[var(--color-text-muted)] space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5" aria-hidden="true">•</span>
                "Expected" ya "Not Confirmed" ke roop mein chihnit kist dates keval pichle patterns par aadharit anuman hain — yeh koi official sarkari ghoshna nahi hain.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5" aria-hidden="true">•</span>
                Hum kisi bhi content ki shuddhta, poornata, ya samay-sarita ki koi guarantee nahi dete.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5" aria-hidden="true">•</span>
                Kisi bhi mahatvapooran nirnay se pehle hamesha official sarkari portal pmkisan.gov.in par jankari ki pushti karein.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5" aria-hidden="true">•</span>
                Hamare content par bharosa karne se hone wale kisi bhi nuksan ya samasya ke liye hum jimmedar nahi hain.
              </li>
            </ul>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">4. Yeh Koi Sarkari Website Nahi Hai</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              <strong>{SITE_NAME} koi official sarkari platform nahi hai.</strong> Hum Bharat Sarkar, Krishi aur Kisan Kalyan Mantralaya, 
              ya kisi bhi krishi yojana se kisi bhi sarkari kshamata mein affiliated, endorsed ya connected nahi hain. 
              Hum aapka Aadhaar number, bank account, ya koi bhi personal sarkari data collect nahi karte. 
              Official sevao ke liye hamesha{' '}
              <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">
                pmkisan.gov.in ↗
              </a>{' '}
              ka hi upyog karein.
            </p>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">5. User Ki Jimmedariyan (User Responsibilities)</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">Hamare platform ka upyog karke, aap sahmat hote hain ki:</p>
            <ul className="text-sm text-[var(--color-text-muted)] space-y-2">
              {[
                'Platform ka upyog keval kanooni (lawful) uddeshyon ke liye karenge',
                'Platform ya iski sevao ka durupyog nahi karenge ya nuksan pahunchane ki koshish nahi karenge',
                'Hamari anumati ke bina hamare content ko copy ya redistribute nahi karenge',
                'Sabhi mahatvapooran krishi jankari ki pushti official srot se karenge',
                'Kisi bhi official sarkari nirnay ke liye keval hamare platform par nirbhar nahi rahenge',
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
              {SITE_NAME} par maujood sabhi original content — jismein articles, guides, aur platform design shamil hain — 
              {SITE_NAME} ki sampatti hai aur copyright kanoon dwara surakshit hai. 
              Pichhlikhit anumati ke bina aap hamare content ko reproduce, distribute, ya republish nahi kar sakte. 
              Hamare platform ko link karna anumodit aur utsahit hai.
            </p>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">7. Vigyaapan (Advertising)</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              {SITE_NAME} Google AdSense aur anya advertising networks ke madhyam se vigyaapan (ads) pradarshit kar sakta hai. 
              Yeh ads humein is platform ko muft mein banaye rakhne aur behtar banane mein madad karte hain. 
              Vigyaapan editorial content se spasht roop se alag hote hain. Hum hamare platform par vigyapit kisi bhi 
              product ya service ka samarthan nahi karte. Ads aapke data ka kaise upyog karte hain, iski jankari ke liye 
              hamari{' '}
              <Link href="/privacy-policy" className="text-[var(--color-primary)] underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">
                Data Protection Notice (Privacy Policy)
              </Link>{' '}
              dekhein.
            </p>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">8. Bahari Links (Third-Party Links)</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Hamare platform par bahari websites ke links shamil ho sakte hain, jismein official sarkari portal 
              pmkisan.gov.in bhi shamil hai. Yeh links keval aapki suvidha ke liye hain. Hum kisi bhi third-party 
              website ki content, shuddhta, ya privacy practices ke liye jimmedar nahi hain. Bahari links par 
              jaana aapke apne jokhim par hoga.
            </p>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">9. Jimmedari Se Mukti (Limitation of Liability)</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              {SITE_NAME} aur iski team platform ke upyog, ya yahan pradan ki gayi kisi bhi jankari par bharosa 
              karne se utpann hone wale kisi bhi pratyaksh, apratyaksh, aakasmik, ya parinamik nuksan ke liye 
              jimmedar nahi hogi. Hamari sevayein muft mein pradan ki jaati hain, isliye kisi bhi daave ke liye 
              hamari kul jimmedari shunya (zero) tak simit hogi.
            </p>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">10. Sharton Mein Badlav (Changes to Terms)</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Hum in Terms of Use ko kabhi bhi update karne ka adhikar rakhte hain. Badlav ek updated date ke 
              saath is page par post kiye jayenge. Kisi bhi badlav ke baad platform ka lagatar upyog karna, 
              nayi sharton ko aapki swikriti mana jayega.
            </p>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">11. Lagu Hone Wala Kanoon (Governing Law)</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              In Terms of Use par Bharat ke kanoon lagu honge. Kisi bhi vivad par Bharat ke nyayalayon ka 
              adhikar kshetra (jurisdiction) hoga.
            </p>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">12. Sampark (Contact)</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
              In sharton ke baare mein koi sawal? Humse sampark karein:
            </p>
            <div className="text-sm text-[var(--color-text-muted)] space-y-2">
              <p>📧 Email: <a href="mailto:kisanstatus.support@gmail.com" className="text-[var(--color-primary)] underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">kisanstatus.support@gmail.com</a></p>
              <p>🌐 Platform: <a href={SITE_URL} className="text-[var(--color-primary)] underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">{SITE_URL}</a></p>
              <p>👤 Team: <Link href="/about" className="text-[var(--color-primary)] underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">KisanStatus Team</Link></p>
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
            Yeh Terms of Use aakhiri baar {lastUpdated} ko update kiye gaye the.
          </p>

        </div>
      </div>
    </>
  );
}