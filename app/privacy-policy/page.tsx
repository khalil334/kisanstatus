import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, SITE_NAME, AUTHOR_NAME, AUTHOR_URL, DEFAULT_OG_IMAGE } from '@/lib/site-config';

export const metadata: Metadata = {
  title: `Privacy Policy – Data Protection Notice`,
  description: `${SITE_NAME} ki Privacy Policy — seedhi bhasha mein. Kaunsa data collect hota hai, kaunsa nahi, aur ads/analytics kaise kaam karte hain — sab kuch saaf-saaf.`,
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Privacy Policy – ${SITE_NAME} | Data Protection Notice`,
    description: `Kaunsa data collect hota hai, kaunsa nahi — seedhi bhasha mein poori baat.`,
    type: 'website',
    url: `${SITE_URL}/privacy-policy`,
    siteName: SITE_NAME,
    locale: 'hi_IN',
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME} - Privacy Policy`, type: 'image/webp' }],
  },
  twitter: {
    card: 'summary',
    title: `Privacy Policy – ${SITE_NAME}`,
    description: `Kaunsa data collect hota hai, kaunsa nahi — seedhi bhasha mein poori baat.`,
  },
};

const lastUpdated = '15/07/2026';

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
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">1. Pehli Baat</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Main Manish, <strong>{SITE_NAME}</strong> chalata hoon. Is page par main seedhi bhasha mein bata raha
              hoon ki jab aap <strong>{SITE_URL}</strong> par aate hain to kaunsi jaankari ikatthi hoti hai aur uska
              kya hota hai. Koi ghuma-phira kar likhi legal bhasha nahi — jitna main samjha sakta hoon, utna saaf
              likha hai. Site use karne ka matlab hai ki aap in baaton se sehmat hain.
            </p>
            <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl text-sm text-yellow-900 dark:text-yellow-300">
              <strong>Zaruri Suchna:</strong> Yaad rahe — {SITE_NAME} sarkar ki site nahi hai. Yeh meri khud ki banayi
              jaankari wali site hai, kisi bhi yojana ke daftar se iska koi naata nahi.
            </div>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">2. Kaunsi Jaankari Ikatthi Hoti Hai</h2>
            <div className="text-sm text-[var(--color-text-muted)] space-y-4">
              <div>
                <h3 className="font-semibold text-[var(--color-text)] mb-1">2.1 Jo Apne Aap Record Hota Hai</h3>
                <p className="leading-relaxed">
                  Har website ki tarah yahan bhi kuch cheezein apne aap record ho jaati hain — main inhe alag se
                  nahi maangta, yeh technical taur par khud aati hain:
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
                  Cookies chhoti si files hoti hain jo browser mein save hoti hain — inse site yaad rakh paati hai
                  ki aap pehle aa chuke hain. Kuch cookies is site ki apni hain, aur kuch Google Analytics aur
                  Google AdSense jaisi services lagati hain. Aap chahein to apne browser ki settings mein jaakar
                  cookies band kar sakte hain — site phir bhi chalegi.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-text)] mb-1">2.3 Jo Main Kabhi Nahi Maangta</h3>
                <p className="leading-relaxed">
                  Yeh sabse zaroori baat hai — Aadhaar number, bank account, OTP, password — aisi koi bhi cheez
                  main <strong>kabhi nahi maangta</strong>. Is site par aisa koi form hi nahi hai. Agar kahin aapko
                  is site ke naam par aisi jaankari maangi jaye, to woh dhokha hai — mujhe email karke bata dein.
                </p>
              </div>
            </div>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">3. Is Jaankari Ka Hota Kya Hai</h2>
            <ul className="text-sm text-[var(--color-text-muted)] space-y-2">
              {[
                'Main dekhta hoon kaun se articles log zyada padhte hain, taaki wahi topics aur behtar likhoon',
                'Google Analytics se pata chalta hai ki log site kaise use karte hain — kahan atakte hain, kya dhoondhte hain',
                'Google AdSense aapko aapke matlab ke ads dikhata hai — isi se site ka kharcha chalta hai',
                'Site theek se chal rahi hai ya kahin error aa raha hai — yeh dekhne ke liye',
                'Agar kabhi kanoon ke hisaab se kuch batana pade, to uske liye',
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
              Site par Google Analytics 4 (GA4) laga hai. Isse mujhe bas itna pata chalta hai ki kitne log aaye,
              kaun sa page kitni der padha gaya — kisi ka naam ya pehchan nahi dikhti, sab anonymous hota hai.
              Isi se main samajhta hoon ki kisanon ko sabse zyada kis cheez mein dikkat aa rahi hai.
            </p>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Yeh data Google process karta hai, main nahi. Poori jaankari ke liye{' '}
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
              laga kar Google Analytics se poori tarah bahar nikal sakte hain — mujhe koi aitraaz nahi.
            </p>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">5. Google AdSense aur Vigyaapan (Ads)</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
              Sach kahoon to site chalane mein kharcha lagta hai — hosting, domain, sab. Isliye yahan Google
              AdSense ke ads dikh sakte hain. AdSense cookies ke zariye dekhta hai ki aapne pehle kaun si sites
              dekhi hain, aur usi hisaab se ads dikhata hai. Kaun sa ad aapko dikhega, yeh Google tay karta hai —
              mera ispar koi haath nahi.
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
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">6. Doosri Websites Ke Links</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Articles mein main <strong>pmkisan.gov.in</strong> jaise sarkari portals ke links deta hoon. Un
              websites par jaane ke baad wahan ke niyam lagoo hote hain, mere nahi — wahan kya data liya jaata
              hai, yeh unki privacy policy batayegi. Kahin bhi apni personal jaankari daalne se pehle ek baar
              soch lein ki site asli hai ya nahi.
            </p>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">7. Data Kitna Surakshit Hai</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Site HTTPS par chalti hai aur jo thoda-bahut technical data aata hai, woh surakshit rehta hai. Waise
              bhi internet par 100% guarantee koi nahi de sakta — lekin kyunki main aapse Aadhaar, bank jaisi koi
              cheez leta hi nahi, isliye yahan khone ko kuch hai bhi nahi. Yahi sabse badi suraksha hai.
            </p>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">8. Bachon Ke Liye</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Yeh site kisanon ke kaam ki hai, 13 saal se chhote bachon ke liye nahi. Main jaan-boojhkar bachon
              se koi jaankari nahi leta. Agar aapko lage ki kisi bachche ne yahan kuch personal jaankari de di
              hai, to mujhe email kar dein — main turant hata dunga.
            </p>
          </section>

          <section className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">9. Aapke Adhikar (GDPR Rights)</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
              Zyada tar padhne wale India se hain, lekin agar aap Europe (EEA) se yeh site dekh rahe hain to wahan
              ke kanoon ke hisaab se aapke paas yeh adhikar hain:
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
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">10. Mujhse Sampark Karein</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
              Is policy ke baare mein koi sawal ho, ya kuch samajh na aaya ho, to bina jhijhak email kar dein —
              main khud padhta hoon aur jawab deta hoon:
            </p>
            <div className="text-sm text-[var(--color-text-muted)] space-y-2">
              <p>Email: <a href="mailto:kisanstatus.support@gmail.com" className="text-[var(--color-primary)] underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">kisanstatus.support@gmail.com</a></p>
              <p>Website: <a href={SITE_URL} className="text-[var(--color-primary)] underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">{SITE_URL}</a></p>
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
            Maine yeh policy aakhiri baar {lastUpdated} ko update ki thi. Aage kabhi kuch badla to isi page par
            likh dunga — alag se koi suchna nahi aayegi, isliye kabhi-kabhi dekh liya karein.
          </p>
        </div>
      </div>
    </>
  );
}
