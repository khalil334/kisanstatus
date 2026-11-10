import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_URL, SITE_NAME, AUTHOR_NAME, AUTHOR_IMAGE, AUTHOR_IMAGE_URL, AUTHOR_LINKEDIN, SOCIAL_LINKS, SUPPORT_EMAIL, DEFAULT_OG_IMAGE } from '@/lib/site-config';
import { AUTHOR_BIO } from '@/lib/author-bios';
import { getLatestArticles } from '@/lib/articles-data';

const AUTHOR_PAGE_URL = `${SITE_URL}/author/manish-kumar`;

export const metadata: Metadata = {
  title: 'Manish Kumar — KisanStatus ke Author',
  description: `Manish Kumar KisanStatus ke author hain — PM Kisan aur kisan yojanaon ki guides official sources se verify karke likhte hain. Jaankari kaise check hoti hai, galti kaise sudharti hai, aur sampark ka tareeka.`,
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_PAGE_URL }],
  alternates: { canonical: AUTHOR_PAGE_URL },
  openGraph: {
    title: `Manish Kumar — Author | ${SITE_NAME}`,
    description: 'KisanStatus ki guides likhne wale author — har fact pehle official portal par verify, phir seedhi bhasha me guide.',
    type: 'website',
    url: AUTHOR_PAGE_URL,
    siteName: SITE_NAME,
    locale: 'hi_IN',
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME} - Manish Kumar`, type: 'image/webp' }],
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: AUTHOR_NAME,
  url: AUTHOR_PAGE_URL,
  image: AUTHOR_IMAGE_URL,
  jobTitle: 'Agricultural Content Expert',
  worksFor: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  email: SUPPORT_EMAIL,
  knowsAbout: ['PM Kisan Samman Nidhi', 'Kisan Credit Card', 'PM Kisan Maandhan', 'Krishi Yojana', 'Fasal Bima'],
  description: AUTHOR_BIO,
  sameAs: [AUTHOR_LINKEDIN, SOCIAL_LINKS.facebook],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_URL,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: AUTHOR_NAME,
      item: AUTHOR_PAGE_URL,
    },
  ],
};

const COVERAGE = [
  { title: 'PM Kisan', desc: 'Kist ki tareekh, beneficiary status, beneficiary list aur payment history' },
  { title: 'eKYC aur Correction', desc: 'OTP, face authentication, naam/mobile/bank sudhaar ke steps' },
  { title: 'Payment Atke To', desc: 'FTO, failed transaction aur ruki kist ke karan aur unka hal' },
  { title: 'Rajya Yojanaen', desc: 'Rajyon ki kisan yojanaen — status, list aur apply ka tareeka' },
  { title: 'KCC aur Loan', desc: 'Kisan Credit Card, tractor aur dairy loan ki jaankari' },
  { title: 'Maandhan aur Fasal Bima', desc: 'Pension yojana aur PMFBY claim se judi guides' },
];

function fmtDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function AuthorPage() {
  const latest = getLatestArticles(8);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-[var(--color-primary)] py-10">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white font-bold">Author</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2">
            {AUTHOR_NAME}
          </h1>
          <p className="text-green-200 text-sm">KisanStatus ke author — PM Kisan aur kisan yojanaon ki guides likhte hain</p>
        </div>
      </div>

      <div className="container-site max-w-3xl py-10">

        <section className="mb-8 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="w-28 h-28 rounded-full overflow-hidden shrink-0 shadow-lg border-4 border-[var(--color-primary)]">
              <Image
                src={AUTHOR_IMAGE}
                alt={AUTHOR_NAME}
                width={112}
                height={112}
                priority
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-lg font-black text-[var(--color-text)]">{AUTHOR_NAME}</h2>
              <p className="text-sm text-green-700 dark:text-green-400 font-semibold mt-0.5">
                Founder &amp; Author, {SITE_NAME}
              </p>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mt-3">
                Namaste. {SITE_NAME} par jo guides aap padhte hain, wo main hi likhta hoon aur main hi
                unhe update rakhta hoon — research, likhna, sudhaar, teeno mera kaam hai. Mera kaam
                sarkari nahi hai aur is site ka sarkar se koi lena-dena nahi; main bas portals ki
                uljhi hui jaankari ko pehle khud samajhta hoon, phir seedhi bhasha mein likh deta hoon.
              </p>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mt-2">{AUTHOR_BIO}</p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-4">
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-bg-alt)] border border-[var(--color-border)] text-[var(--color-text)] text-xs font-bold rounded-xl hover:border-green-400 dark:hover:border-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Email Karein
                </a>
                <a
                  href={AUTHOR_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#0a66c2] text-white text-xs font-bold rounded-xl hover:bg-[#084d92] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0a66c2]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#1877f2] text-white text-xs font-bold rounded-xl hover:bg-[#1464cc] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1877f2]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook Page
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] text-white text-xs font-bold rounded-xl hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Contact Page
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Main Kya Likhta Hoon
          </h2>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
            Zyada tar sawal PM Kisan ke aas-paas hi ghoomte hain, isliye site ka bada hissa usi par hai.
            Uske saath rajyon ki yojanaen aur kheti se jude loan, pension aur bima bhi cover karta hoon —
            jo cheez kisan ko roz ke kaam mein chahiye, wahi pehle.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {COVERAGE.map((item) => (
              <div key={item.title} className="p-3 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                <p className="font-bold text-[var(--color-text)] text-sm">{item.title}</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Har Guide Kaise Banti Hai
          </h2>
          <div className="space-y-3 text-sm text-[var(--color-text-muted)] leading-relaxed">
            <p>
              Pehla usool simple hai — <strong>source sirf official</strong>. Kist ki khabar ho ya naya
              rule, main pehle pmkisan.gov.in, PIB ki release ya sambandhit rajya ke agriculture
              department ke portal par jaata hoon. WhatsApp par ghumti khabar aur doosri sites ki
              copy is site ke liye source nahi banti.
            </p>
            <p>
              Status check ya eKYC jaise process wale topic par sirf padh kar nahi likhta — steps
              portal par khud follow karke dekhta hoon, tabhi guide banti hai. Jahan rakam ya sankhya
              (jaise kitne kisanon ko kist mili) likhni ho, wahan koshish rehti hai ki baat do
              official jagahon se mil jaye. Agar do sources alag-alag kahen, to site par wahi aata
              hai jo pakka hai — ya saaf likh deta hoon ki yeh cheez abhi confirm nahi hai.
            </p>
            <p>
              Tareekh ke maamle mein site thodi sakht hai. Jab tak kist ya kisi badlav ki{' '}
              <strong>official ghoshna nahi hoti, site par date nahi chalti</strong> — &ldquo;is din aa
              sakti hai&rdquo; wala andaza main nahi lagata, kyunki galat ummeed kisan ka nuksaan
              karti hai. Har article ke neeche uske Sources diye hote hain, taaki aap chaaho to
              jaakar khud mila sako.
            </p>
            <p>
              Aur jab kuch badalta hai — naya niyam, nayi kist, portal par koi tabdeeli — to purani
              guide update hoti hai aur uspar Updated ki tareekh badal jaati hai. Purani jaankari
              bina sudhaar ke pade rehna is site par theek nahi mana jaata.
            </p>
          </div>
        </section>

        <section className="mb-8 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Galti Mile To Kya Karein
          </h2>
          <div className="space-y-3 text-sm text-[var(--color-text-muted)] leading-relaxed">
            <p>
              Portals badalte rehte hain, isliye galti ho sakti hai — chhupaane se behtar hai use
              theek karna. Kisi guide mein galat jaankari dikhe to{' '}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-[var(--color-primary)] font-bold underline hover:text-green-700 dark:hover:text-green-400">
                {SUPPORT_EMAIL}
              </a>{' '}
              par email kar dein ya{' '}
              <Link href="/contact" className="text-[var(--color-primary)] font-bold underline hover:text-green-700 dark:hover:text-green-400">
                contact page
              </Link>{' '}
              se likh dein. Main pehle official source par dobara check karta hoon; baat sahi nikli
              to guide theek karke uski Updated tareekh badal deta hoon.
            </p>
            <p>
              Ek baat pehle hi saaf kar doon — main aapse Aadhaar, bank account, OTP ya password
              kabhi nahi maangta, aur na hi aap bhejiyega. Kist, eKYC aur registration jaisa asli
              kaam hamesha{' '}
              <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-green-700 dark:hover:text-green-400">
                pmkisan.gov.in ↗
              </a>{' '}
              par hi karein.
            </p>
          </div>
        </section>

        <section className="mb-8 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Taza Guides
          </h2>
          <div className="space-y-2">
            {latest.map((a) => (
              <Link
                key={a.slug}
                href={`/articles/${a.slug}`}
                className="block p-3 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors no-underline group focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              >
                <span className="block text-sm font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                  {a.title}
                </span>
                <span className="block text-xs text-[var(--color-text-muted)] mt-0.5">
                  {fmtDate(a.modifiedTime || a.publishedTime)}
                </span>
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mt-5">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] text-white text-sm font-bold rounded-xl hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Sabhi Guides
            </Link>
            <Link
              href="/rajya-yojana"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-text)] text-sm font-bold rounded-xl hover:border-green-400 dark:hover:border-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Rajya Yojanaen
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-text)] text-sm font-bold rounded-xl hover:border-green-400 dark:hover:border-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Site Ke Baare Mein
            </Link>
          </div>
        </section>

        <div className="p-5 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-2xl text-xs text-[var(--color-text-muted)] leading-relaxed">
          <p className="font-bold text-[var(--color-text)] mb-2">Disclaimer</p>
          <p>
            {SITE_NAME} ek niji website hai. Main sarkar ya kisi sarkari vibhag se juda hua nahi hoon,
            aur yahan ki jaankari sirf samjhane ke liye hai. Kist, eKYC, registration ya payment se
            juda asal kaam hamesha official portal{' '}
            <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] underline font-bold">
              pmkisan.gov.in ↗
            </a>{' '}
            par ya nazdeeki CSC centre / Agriculture Office mein karein.
          </p>
        </div>
      </div>
    </>
  );
}
