import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LIVE_RAJYA_YOJANA_ARTICLES } from '@/lib/rajya-yojana-data';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, EXTERNAL_LINK_PROPS, AUTHOR_NAME, AUTHOR_URL } from '@/lib/site-config';
import { Disclaimer } from '@/components/ArticleShared';

const TITLE = 'Rajya Kisan Yojana — State Schemes Guide';
const DESCRIPTION =
  'Har rajya ki kisan yojana ek jagah — status check, eligibility aur official portal links. PM Kisan ke saath state ka paisa kaise milta hai.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
  creator: AUTHOR_NAME,
  alternates: {
    canonical: `${SITE_URL}/rajya-yojana`,
  },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/rajya-yojana`,
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
  url: `${SITE_URL}/rajya-yojana`,
  isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Rajya Kisan Yojana', item: `${SITE_URL}/rajya-yojana` },
    ],
  },
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: LIVE_RAJYA_YOJANA_ARTICLES.length,
    itemListElement: LIVE_RAJYA_YOJANA_ARTICLES.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: a.title,
      url: `${SITE_URL}/rajya-yojana/${a.slug}`,
    })),
  },
};

export default function RajyaYojanaListingPage() {
  if (LIVE_RAJYA_YOJANA_ARTICLES.length === 0) notFound();

  const statePortals = LIVE_RAJYA_YOJANA_ARTICLES.filter(
    (a) => a.state !== 'ALL' && a.officialPortal,
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(COLLECTION_JSON_LD) }}
      />
      <h1 className="text-3xl font-bold mb-4">Rajya Kisan Yojana — State Schemes</h1>

      <p className="text-gray-700 mb-4">
        PM Kisan ke ₹6,000/saal ke <em>upar</em> kai rajya apni alag kisan sahayata yojana chalate
        hain — Rajasthan me Mukhyamantri Kisan Samman Nidhi ka top-up, Maharashtra me Namo Shetkari
        Mahasanman Nidhi, MP me CM Kisan Kalyan Yojana, West Bengal me Krishak Bandhu, waghera.
        Ye paisa central scheme se <strong>alag</strong> hota hai: alag portal, alag eligibility,
        alag kist schedule. Isi wajah se aksar aisa hota hai ki PM Kisan ki kist aa gayi lekin
        state ka paisa nahi aaya — dono ko alag-alag check karna padta hai.
      </p>

      <h2 className="text-2xl font-bold mb-3">Centre vs state yojana — bunyadi farak</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
        <li>
          <strong>PM Kisan (centre):</strong> poore desh me ek hi scheme, ek hi portal
          (pmkisan.gov.in), ₹2,000 ki 3 kistein.
        </li>
        <li>
          <strong>State yojana:</strong> har rajya ki apni scheme aur apna portal. Amount, kist ki
          taareekh aur eligibility rajya tay karta hai — kai states me PM Kisan beneficiary hona
          pehli shart hai, kuch me alag registration lagta hai.
        </li>
        <li>
          <strong>Status check bhi alag:</strong> PM Kisan ka status pmkisan.gov.in par, state ka
          paisa us state ke portal par dikhta hai (neeche directory).
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-3">Apne state me kya chal raha hai — kaise pata karein</h2>
      <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
        <li>Neeche apne state ka guide kholiye — usme scheme ka naam, eligibility aur status-check ka exact process hai.</li>
        <li>State ka official portal (table me link) par apna registration/Aadhaar number daal kar status dekhiye.</li>
        <li>Agar aapka state list me nahi hai, to sabhi states wali list guide se shuru kijiye — usme har rajya ki active scheme ka overview hai.</li>
      </ol>

      {statePortals.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mb-3">State portal directory</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="p-3 font-semibold">State</th>
                  <th className="p-3 font-semibold">Scheme guide</th>
                  <th className="p-3 font-semibold">Official portal</th>
                </tr>
              </thead>
              <tbody>
                {statePortals.map((a) => (
                  <tr key={a.slug} className="border-t border-gray-200">
                    <td className="p-3">{a.state}</td>
                    <td className="p-3">
                      <Link href={`/rajya-yojana/${a.slug}`} className="text-green-700 underline">
                        {a.title}
                      </Link>
                    </td>
                    <td className="p-3">
                      <a href={a.officialPortal} {...EXTERNAL_LINK_PROPS} className="text-green-700 underline break-all">
                        {a.officialPortal.replace('https://', '')}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      <h2 className="text-2xl font-bold mb-3">Sabhi state yojana guides</h2>
      <div className="grid gap-6 mb-8">
        {LIVE_RAJYA_YOJANA_ARTICLES.map((article) => (
          <Link
            key={article.slug}
            href={`/rajya-yojana/${article.slug}`}
            className="block p-6 border rounded-lg hover:shadow-lg bg-white"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              {article.state === 'ALL' ? 'Sabhi rajya' : article.state}
            </span>
            <h2 className="text-xl font-bold mb-2">{article.title}</h2>
            <p className="text-gray-600">{article.description}</p>
          </Link>
        ))}
      </div>

      <Disclaimer k="page" />
    </div>
  );
}
