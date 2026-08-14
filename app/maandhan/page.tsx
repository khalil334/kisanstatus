import type { Metadata } from 'next';
import Link from 'next/link';
import { MAANDHAN_ARTICLES } from '@/lib/maandhan-data';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, EXTERNAL_LINK_PROPS, AUTHOR_NAME, AUTHOR_URL } from '@/lib/site-config';
import { Disclaimer } from '@/components/ArticleShared';

export const metadata: Metadata = {
  title: 'PM Kisan Maandhan Yojana — Complete Guide',
  description:
    'PM Kisan Maandhan Yojana (PM-KMY) ki poori jaankari Hindi mein — ₹3000 pension ka hisaab, contribution chart, eligibility, registration aur sabhi guides.',
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
  creator: AUTHOR_NAME,
  alternates: {
    canonical: `${SITE_URL}/maandhan`,
  },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/maandhan`,
    siteName: SITE_NAME,
    locale: 'hi_IN',
    title: 'PM Kisan Maandhan Yojana — Complete Guide',
    description:
      'PM Kisan Maandhan Yojana (PM-KMY) ki poori jaankari Hindi mein — ₹3000 pension ka hisaab, contribution chart, eligibility, registration aur sabhi guides.',
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: 'PM Kisan Maandhan Yojana Complete Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PM Kisan Maandhan Yojana — Complete Guide',
    description:
      'PM Kisan Maandhan Yojana ki poori jaankari Hindi mein — pension scheme, contribution chart aur sabhi guides ek jagah.',
  },
};

const READING_PATH: { slug: string; why: string }[] = [
  { slug: 'pm-kisan-maandhan-eligibility-documents', why: 'Pehle confirm karein ki aap eligible hain — yahin se sab shuru hota hai.' },
  { slug: 'pm-kisan-maandhan-age-wise-contribution-chart-2026', why: 'Apni umar ka exact monthly contribution dekhein.' },
  { slug: 'pm-kisan-maandhan-pension-calculator', why: 'Total kitna jama hoga vs kitni pension milegi — pura hisaab.' },
  { slug: 'pm-kisan-maandhan-registration-2026', why: 'Eligibility clear hai to registration ka step-by-step process.' },
  { slug: 'pm-kisan-maandhan-auto-debit-poora-sach', why: 'PM Kisan ki kist se ₹55–₹200 kyun kat rahe hain — enroll hone se pehle ye zaroor padhein.' },
  { slug: 'pm-kisan-maandhan-status-check-online', why: 'Enroll ho gaye? Contribution history aur status yahan check hota hai.' },
  { slug: 'pm-kisan-maandhan-pension-card-download', why: 'Pension card / acknowledgement slip download karne ka tareeka.' },
  { slug: 'pm-kisan-maandhan-withdrawal-refund-rules', why: 'Beech me chhodna pade to kya milega — exit rules.' },
  { slug: 'family-pension-rules', why: 'Account holder ke baad spouse ko pension kaise milti hai.' },
];

function findArticle(slug: string) {
  return MAANDHAN_ARTICLES.find((a) => a.slug === slug);
}

export default function MaandhanListingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">PM Kisan Maandhan Yojana — Complete Guide</h1>

      <p className="text-gray-700 mb-4">
        PM Kisan Maandhan Yojana (PM-KMY) chhote aur seemant kisanon ke liye ek voluntary pension
        scheme hai — 60 saal ki umar ke baad har mahine <strong>₹3,000 ki assured pension</strong>.
        Scheme 12/09/2019 ko launch hui thi aur iska pension fund LIC manage karti hai.
        Enrollment ke liye entry age 18 se 40 saal hai, aur aapki umar ke hisaab se monthly
        contribution ₹55 se ₹200 ke beech banta hai — jitna aap jama karte hain, utna hi central
        government bhi aapke pension account me daalti hai. Ye saari conditions official portal{' '}
        <a href="https://maandhan.in" {...EXTERNAL_LINK_PROPS} className="text-green-700 underline">
          maandhan.in
        </a>{' '}
        par likhi hain.
      </p>

      <p className="text-gray-700 mb-6">
        Do baatein jo log aksar miss kar dete hain: pehli, ye scheme sirf un kisanon ke liye hai
        jinke paas <strong>2 hectare tak</strong> cultivable zameen hai (state land records ke
        hisaab se). Doosri, agar aap income tax bharte hain ya pehle se NPS / EPFO / ESIC jaise
        kisi statutory pension scheme me hain, to aap eligible nahi hain. Account holder ke dehant
        ke baad spouse ko pension ka 50% (₹1,500/month) family pension ke roop me milta hai — iski
        detail neeche linked guide me hai.
      </p>

      <h2 className="text-2xl font-bold mb-3">Contribution ek nazar mein</h2>
      <p className="text-gray-700 mb-3">
        Contribution entry age par depend karta hai. Kuch representative slabs (poora age-wise
        chart alag guide me hai):
      </p>
      <div className="overflow-x-auto mb-3">
        <table className="w-full text-sm border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="p-3 font-semibold">Entry age</th>
              <th className="p-3 font-semibold">Aapka monthly contribution</th>
              <th className="p-3 font-semibold">Govt. ka match</th>
              <th className="p-3 font-semibold">Pension (60 ke baad)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-200">
              <td className="p-3">18 saal</td><td className="p-3">₹55</td><td className="p-3">₹55</td><td className="p-3">₹3,000/month</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="p-3">29 saal</td><td className="p-3">₹100</td><td className="p-3">₹100</td><td className="p-3">₹3,000/month</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="p-3">40 saal</td><td className="p-3">₹200</td><td className="p-3">₹200</td><td className="p-3">₹3,000/month</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-gray-600 text-sm mb-6">
        Source: official contribution chart,{' '}
        <a href="https://maandhan.in" {...EXTERNAL_LINK_PROPS} className="text-green-700 underline">
          maandhan.in
        </a>
        . Pension amount har entry age par same rehta hai — farak sirf isme hai ki aap kitne saal
        aur kitna contribute karte hain.
      </p>

      <h2 className="text-2xl font-bold mb-3">Pehli baar aaye hain? Is order me padhein</h2>
      <p className="text-gray-700 mb-4">
        Neeche ka path decision ke natural order me hai — eligibility se shuru karke enrollment,
        phir account manage karna:
      </p>
      <ol className="list-decimal list-inside space-y-3 mb-8">
        {READING_PATH.map(({ slug, why }) => {
          const article = findArticle(slug);
          if (!article) return null;
          return (
            <li key={slug} className="text-gray-700">
              <Link href={`/maandhan/${slug}`} className="font-semibold text-green-700 underline">
                {article.title}
              </Link>
              <span className="block ml-5 text-sm text-gray-600">{why}</span>
            </li>
          );
        })}
      </ol>

      <h2 className="text-2xl font-bold mb-3">Sabhi Maandhan guides</h2>
      <div className="grid gap-6 mb-8">
        {MAANDHAN_ARTICLES.map((article) => (
          <Link
            key={article.slug}
            href={`/maandhan/${article.slug}`}
            className="block p-6 border rounded-lg hover:shadow-lg bg-white"
          >
            <h2 className="text-xl font-bold mb-2">{article.title}</h2>
            <p className="text-gray-600">{article.description}</p>
          </Link>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-3">Aksar pooche jaane wale sawal</h2>
      <div className="space-y-4 mb-8">
        <div>
          <h3 className="font-semibold text-gray-900">Kya PM Kisan aur Maandhan dono ek saath le sakte hain?</h3>
          <p className="text-gray-700">
            Haan. Dono alag schemes hain — PM Kisan income support hai (₹6,000/saal), Maandhan
            pension hai. PM Kisan beneficiary chahe to apni kist se Maandhan contribution auto-debit
            karwa sakta hai, lekin ye poori tarah optional hai.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Pati aur patni dono enroll ho sakte hain?</h3>
          <p className="text-gray-700">
            Haan — dono alag-alag enroll ho sakte hain aur dono ko apni-apni ₹3,000 pension milegi,
            bashart dono individually eligible hon (age 18–40, land records me naam, exclusion
            criteria clear).
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Enroll kahan se hota hai?</h3>
          <p className="text-gray-700">
            Do raaste: nazdeeki CSC (Common Service Centre) par Aadhaar + bank passbook le jaakar,
            ya khud{' '}
            <a href="https://maandhan.in" {...EXTERNAL_LINK_PROPS} className="text-green-700 underline">
              maandhan.in
            </a>{' '}
            par self-enrollment. Dono ka step-by-step process registration guide me hai.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">41 saal ke baad koi rasta hai?</h3>
          <p className="text-gray-700">
            PM-KMY me nahi — entry window 18–40 hi hai. 40 se upar walon ke liye Atal Pension
            Yojana ek option ho sakti hai; PMKMY vs APY comparison alag guide me hai.
          </p>
        </div>
      </div>

      <Disclaimer />
    </div>
  );
}
