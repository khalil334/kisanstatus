import type { Metadata } from 'next';
import Link from 'next/link';
import { LIVE_YOJANA_2026_ARTICLES } from '@/lib/yojana-2026-data';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, AUTHOR_NAME, AUTHOR_URL } from '@/lib/site-config';
import { Disclaimer } from '@/components/ArticleShared';

const TITLE = 'Kisan Yojana Guides. Claim, Subsidy, Loan';
const DESCRIPTION =
  'Fasal bima claim se lekar pashu shed, tractor subsidy aur karj mafi tak — har yojana ka sach, asli process aur official portal links ek jagah.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
  creator: AUTHOR_NAME,
  alternates: {
    canonical: `${SITE_URL}/yojana`,
  },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/yojana`,
    siteName: SITE_NAME,
    locale: 'hi_IN',
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

const COLLECTION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: TITLE,
  description: DESCRIPTION,
  url: `${SITE_URL}/yojana`,
  isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Kisan Yojana Guides', item: `${SITE_URL}/yojana` },
    ],
  },
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: LIVE_YOJANA_2026_ARTICLES.length,
    itemListElement: LIVE_YOJANA_2026_ARTICLES.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: a.title,
      url: `${SITE_URL}/yojana/${a.slug}`,
    })),
  },
};

export default function YojanaHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(COLLECTION_JSON_LD) }}
      />
      <div className="bg-[var(--color-primary)] py-10">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors rounded">Home</Link>
            <span>/</span>
            <span className="text-white font-bold">Yojana</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Kisan Yojana Guides. Claim, Subsidy Aur Loan Ka Sach
          </h1>
          <p className="text-green-100 text-sm max-w-2xl">
            Har guide official portal se verify karke likhi gayi hai — kya milta hai, kya nahi milta,
            aur application ka asli process. Rumor aur clickbait yahan nahi milega.
          </p>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">
        <section className="mb-10">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-3">
            Yojana ka naam suna hai, par sach kitna hai?
          </h2>
          <p className="text-[var(--color-text)] text-sm leading-relaxed mb-3">
            WhatsApp par har hafte koi nayi “yojana” ghoomti hai. Kuch asli hoti hain, kuch
            aadhi-asli (rakam badha-chadha kar), aur kuch poori tarah fake. Is section ka kaam
            teeno ko alag karna hai. Misal ke taur par: “PM Kisan ke saath ₹11,000 ki khad
            yojana” wala message lakhon logon tak pahuncha — uska poora sach{' '}
            <Link href="/yojana/pm-kisan-khad-yojana-11000-sach" className="text-green-700 underline font-semibold">
              khad yojana guide
            </Link>{' '}
            me hai. Waise hi karj mafi ki khabrein har chunaav ke aas-paas ugti hain, kis
            state me scheme sach me chal rahi hai, ye{' '}
            <Link href="/yojana/kisan-karj-mafi-list-all-states" className="text-green-700 underline font-semibold">
              karj mafi list
            </Link>{' '}
            me state-wise verify kiya gaya hai.
          </p>
          <p className="text-[var(--color-text)] text-sm leading-relaxed mb-3">
            Jo yojanayein asli hain, unme guides application ke asli process par focus karti
            hain — kaunsa form, kaunsa office, kitna paisa. Pashu rakhne walon ke liye do
            bade raaste covered hain:{' '}
            <Link href="/yojana/mgnrega-pashu-shed-yojana" className="text-green-700 underline">
              MGNREGA pashu shed
            </Link>{' '}
            (shed banane ka paisa, ₹1.6 lakh tak ki upper range) aur{' '}
            <Link href="/yojana/pashu-kisan-credit-card-apply" className="text-green-700 underline">
              pashu KCC
            </Link>{' '}
            (chalu kharch ke liye ₹3 lakh tak working capital). Fasal kharab hui ho to{' '}
            <Link href="/yojana/fasal-bima-claim-status-check" className="text-green-700 underline">
              bima claim status
            </Link>{' '}
            track karne ka tareeqa alag guide me hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Kahin phans jayein to PM Kisan ki sarkari helpline <strong>155261</strong> hai —
            complaint darj karne ka process{' '}
            <Link href="/yojana/pm-kisan-helpline-155261" className="text-green-700 underline">
              helpline guide
            </Link>{' '}
            me step-by-step diya hai. Aur har guide ke andar official portal ka link hai —
            paisa ya document dene se pehle wahi ek jagah hai jahan bharosa karna chahiye.
          </p>
        </section>

        <ul className="grid gap-4">
          {LIVE_YOJANA_2026_ARTICLES.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/yojana/${a.slug}`}
                className="block rounded-2xl border border-[var(--color-border)] p-5 bg-[var(--color-bg-alt)] hover:border-green-600 transition-colors"
              >
                <h2 className="font-black text-[var(--color-text)] mb-1">{a.ogTitle || a.title}</h2>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{a.description}</p>
                <span className="text-xs text-[var(--color-text-muted)] mt-2 inline-block">{a.readTime}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Disclaimer k="yojana-hub" />
        </div>
      </div>
    </>
  );
}
