'use client';

import { useState } from 'react';
import ExternalLinkButton from '@/components/ExternalLinkButton';
import Image from 'next/image';
import Link from 'next/link';

function FaqItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900 dark:text-gray-100 pr-4">{question}</span>
        <span
          className={`text-xl text-green-600 dark:text-green-400 transition-transform duration-300 shrink-0 ${
            isOpen ? 'rotate-45' : ''
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 pt-0 text-sm text-gray-700 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-700 mt-0">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function BakriPalanYojanaNLMS() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Bakri Palan Yojana 2026: 50% Subsidy Kaise Lein, Poori Jaankari',
    description: 'Goat farming shuru karne ke liye sarkar 50% tak paisa deti hai. NLM scheme mein apply kaise karein, documents kya chahiye, aur subsidy kab tak milti hai — sab kuch yahan hai.',
    image: 'https://kisanstatus.com/images/kisanguides/bakri-palan-nlm-subsidy.webp',
    author: {
      '@type': 'Organization',
      name: 'KisanStatus Team',
      url: 'https://kisanstatus.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'KisanStatus.com',
      url: 'https://kisanstatus.com',
    },
    datePublished: '2024-01-01',
    dateModified: '2026-07-20',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://kisanstatus.com/articles/BakriPalanYojana',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Backyard mein 2-4 bakriyan rakhne par subsidy milti hai kya?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nahi. NLM mein minimum 100 female + 5 male bakriyan chahiye. Chhote setup ke liye state ki alag scheme dekho.',
        },
      },
      {
        '@type': 'Question',
        name: 'Subsidy kitne din mein account mein aati hai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Approval mein 2-3 mahine lagte hain. Paisa do hisson mein aata hai. Total 4-6 mahine lag sakte hain.',
        },
      },
      {
        '@type': 'Question',
        name: 'Loan ke saath subsidy le sakte hain kya?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Haan. Sarkar 50% deti hai. Baaki 50% bank se loan le sakte ho. KCC guide padho details ke liye.',
        },
      },
      {
        '@type': 'Question',
        name: 'Pehle se farm hai, usse bada kar sakte hain?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'NLM naye farm ke liye hai. Purane farm ko bada karne ke liye state office se pucho.',
        },
      },
      {
        '@type': 'Question',
        name: 'Application reject ho gayi, dobara apply kar sakte hain?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Haan. Galati sudharo aur dobara bhejo. Koi rok-tok nahi hai.',
        },
      },
    ],
  };

  const faqs = [
    {
      q: 'Backyard mein 2-4 bakriyan rakhne par subsidy milti hai kya?',
      a: 'Nahi. NLM mein minimum 100 female + 5 male chahiye. Chhote setup ke liye state ki alag scheme dekho.',
    },
    {
      q: 'Subsidy kitne din mein account mein aati hai?',
      a: 'Approval mein 2-3 mahine. Paisa do hisson mein aata hai. Total 4-6 mahine lag sakte hain.',
    },
    {
      q: 'Loan ke saath subsidy le sakte hain kya?',
      a: (
        <>
          Haan. Sarkar 50% deti hai. Baaki 50% bank se loan le sakte ho.{' '}
          <Link href="/articles/KisanCreditCardOnlineApply2026" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">
            KCC Loan Guide
          </Link>{' '}
          padho.
        </>
      ),
    },
    {
      q: 'Pehle se farm hai, usse bada kar sakte hain?',
      a: 'NLM naye farm ke liye hai. Purane farm ko bada karne ke liye state office se pucho.',
    },
    {
      q: 'Application reject ho gayi, dobara apply kar sakte hain?',
      a: 'Haan. Galati sudharo aur dobara bhejo. Koi rok-tok nahi hai.',
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-4xl mx-auto px-4 py-8 prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-blue-600 dark:prose-a:text-blue-400">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 leading-tight">
          Bakri Palan Yojana 2026: 50% Subsidy Kaise Lein
        </h1>

        <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-600 not-prose">
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
            <strong>Sarkar bakri palan shuru karne wale kisan ko 50% tak paisa deti hai.</strong> Maximum ₹50 lakh tak mil sakta hai. Sahi tarika, documents aur apply karne ka process — sab yahan hai.
          </p>
        </div>

        <Image 
          src="/images/kisanguides/bakri-palan-nlm-subsidy.webp"
          alt="Bakri Palan Yojana NLM Subsidy - Goat Farming Scheme India 2026"
          width={800}
          height={450}
          className="rounded-lg shadow-md mb-8 w-full object-cover"
        />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Yeh scheme hai kya?
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          2014 se sarkar ne National Livestock Mission shuru ki hai. 2021 mein isse badal ke 2026 tak badha diya gaya hai.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Isme goat farming ke liye 50% paisa sarkar deti hai. Baaki aapko ya toh apni jeb se lagana hai ya bank se loan lena hai.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Kitni bakriyan chahiye? Kitna paisa milega?
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Jitni badi unit, utni zyada madad. Minimum 100 female + 5 male se shuru karo. Maximum 500 female + 25 male tak ja sakte ho.
        </p>

        <Image 
          src="/images/kisanguides/nlm-subsidy-calculation.webp"
          alt="NLM Subsidy Calculation for Goat Farming Unit Size Chart"
          width={800}
          height={450}
          className="rounded-lg shadow-md mb-6 w-full object-cover"
        />

        <div className="overflow-x-auto my-8 not-prose">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left text-gray-900 dark:text-gray-100">Unit</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left text-gray-900 dark:text-gray-100">Bakriyan</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left text-gray-900 dark:text-gray-100">Sarkari Madad</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">Chhota</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">100 + 5</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300 font-semibold">₹10 Lakh</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">Medium</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">200-300 + 10-15</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300 font-semibold">₹20-30 Lakh</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">Bada</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">500 + 25</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300 font-semibold">₹50 Lakh</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Kaun apply kar sakta hai?
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Sirf kisan hi nahi, aur bhi log isme aate hain.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
          <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
              <span>✅</span> Kaun ban sakta hai:
            </h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• Individual kisan</li>
              <li>• Self-Help Group (SHG)</li>
              <li>• Farmer Producer Company</li>
              <li>• Sahkari samiti</li>
              <li>• Joint Liability Group</li>
              <li>• Section 8 Company</li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
              <span>📋</span> Zaroori cheezein:
            </h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• Bharat ka nagrik hona</li>
              <li>• Zameen ka kagaz (apni ya kiraye ki)</li>
              <li>• Bank account active hona</li>
              <li>• Project report (DPR)</li>
              <li>• Farm ki location (GPS)</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Documents kya-kya chahiye?
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Kagaz ki safai bahut zaroori hai. Ek bhi document galat hua toh application ruk jayegi.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Zameen ki quality check karne ke liye{' '}
          <Link href="/articles/soil-health-card-complete-guide-2026" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">
            Soil Health Card Guide
          </Link>{' '}
          padho.
        </p>

        <Image 
          src="/images/kisanguides/nlm-required-documents.webp"
          alt="Documents Required for NLM Goat Farming Subsidy Application India"
          width={800}
          height={450}
          className="rounded-lg shadow-md mb-6 w-full object-cover"
        />

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-5 my-6 rounded-r-lg not-prose">
          <ol className="list-decimal pl-5 space-y-2 text-gray-700 dark:text-gray-300 text-sm">
            <li><strong>Aadhaar Card:</strong> Pehchan ke liye</li>
            <li><strong>PAN Card:</strong> Bank kaam ke liye</li>
            <li><strong>Zameen ka kagaz:</strong> Registry, khatauni ya kiraye ka agreement</li>
            <li><strong>Bank passbook:</strong> Active account ki copy</li>
            <li><strong>Cancelled cheque:</strong> Account verify karne ke liye</li>
            <li><strong>Bank form:</strong> Paisa seedhe account mein aane ke liye</li>
            <li><strong>Project report:</strong> Poora plan kya-kya karoge</li>
            <li><strong>GPS location:</strong> Farm kahan hai</li>
            <li><strong>Photo:</strong> Recent passport size</li>
          </ol>
        </div>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Project report banane mein dikkat ho toh nearest Animal Husbandry office jao. Wahan madad mil jayegi.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Online apply kaise karein?
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Poora kaam online hai. Galat website par gaye toh time barbad hoga.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6 not-prose border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-gray-800 dark:text-gray-200 font-semibold mb-1">
            Asli website:{' '}
            <a href="https://nlm.udyamimitra.in" className="text-blue-600 hover:underline dark:text-blue-400" target="_blank" rel="noopener noreferrer">
              nlm.udyamimitra.in
            </a>
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Aur jankari:{' '}
            <a href="https://dahd.gov.in" className="text-blue-600 hover:underline dark:text-blue-400" target="_blank" rel="noopener noreferrer">dahd.gov.in</a>
          </p>
        </div>

        <div className="space-y-4 my-8 not-prose">
          {[
            { no: 1, title: 'Website par register karo', desc: 'nlm.udyamimitra.in par jao. Mobile number aur email se account banao. OTP aayega, verify karo.' },
            { no: 2, title: 'Form bharo', desc: 'Apni details, zameen ka hisab aur project ki poori jankari sahi-sahi daldo.' },
            { no: 3, title: 'Documents upload karo', desc: 'Sab kagaz scan karke daal do. PDF format mein rakho. Size guidelines dekh lo.' },
            { no: 4, title: 'Submit karo', desc: 'Form bhej do. Acknowledgment number milega, usse screenshot le lo. Baad mein kaam aayega.' },
          ].map((step) => (
            <div key={step.no} className="flex gap-4 items-start bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">{step.no}</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{step.title}</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Paisa kaise milta hai?
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Process thoda lamba hai lekin saf hai. Pehle state wale check karte hain, phir centre wale.
        </p>

        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-8 border border-purple-200 dark:border-purple-800 not-prose">
          <div className="space-y-3">
            {[
              { label: 'State check:', text: 'Aapke state ke adhikari application dekhte hain.' },
              { label: 'Centre check:', text: 'Central government final haan karti hai.' },
              { label: 'Paisa release:', text: 'SIDBI bank ko paisa bhejta hai.' },
              { label: 'Account mein:', text: 'Bank aapke account mein paisa daal deta hai.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="font-bold text-purple-700 dark:text-purple-300">{i + 1}.</span>
                <p className="text-gray-700 dark:text-gray-300 text-sm"><strong>{item.label}</strong> {item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Paisa do baar mein aata hai. Pehli baar project shuru hone par. Doosri baar kaam dikhane ke baad.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Isme kya-kya cover hota hai?
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Paisa kahan-kahan lag sakta hai, ye pehle se jaan lo. Baad mein problem nahi hogi.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Bakriyon ka kharcha kam karne ke liye{' '}
          <Link href="/articles/SilageMaking" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">
            Silage Making
          </Link>{' '}
          seekh lo. 30-40% tak bachat hogi.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
          <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">
              <span>✅</span> Isme paisa milega:
            </h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• Bakriyan kharidne par</li>
              <li>• Shed banane par</li>
              <li>• Khana-dabba ke samaan par</li>
              <li>• Doctor ke asbab par</li>
              <li>• Breeding setup par</li>
              <li>• Basic building par</li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg border border-red-200 dark:border-red-800">
            <h3 className="font-semibold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">
              <span>❌</span> Isme nahi milega:
            </h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• Zameen kharidne par</li>
              <li>• Gaadi kharidne par</li>
              <li>• Roz ka kharcha</li>
              <li>• Bijli-paani ka bill</li>
              <li>• Staff ki tankhwa</li>
              <li>• Marketing ka paisa</li>
            </ul>
          </div>
        </div>

        <Image 
          src="/images/kisanguides/goat-farming-shed-construction.webp"
          alt="Goat Farming Shed Construction under NLM Subsidy Guidelines"
          width={800}
          height={450}
          className="rounded-lg shadow-md mb-6 w-full object-cover"
        />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Log kya galati karte hain?
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Chhoti-chhoti galtiyan application reject karwa deti hain. Inse bach ke raho.
        </p>

        <div className="space-y-3 my-6 not-prose">
          {[
            { title: 'Kagaz adhure:', text: 'Ek bhi document missing hua toh ruk jayegi. Pehle se list bana lo.' },
            { title: 'Galat website:', text: 'nlm.gov.in par mat jao. Asli site nlm.udyamimitra.in hai.' },
            { title: 'Jhootha plan:', text: 'Project report mein jyada se jyada mat likho. Sach likho.' },
            { title: 'Zameen ka jhagda:', text: 'Kiraye ki zameen ho toh agreement valid hona chahiye.' },
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong className="text-red-600 dark:text-red-400 block mb-1">{item.title}</strong>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Aksar puche jane wale sawal
        </h2>

        <div className="space-y-3 my-8 not-prose">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.q} answer={faq.a} />
          ))}
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Madad ke liye kahan jayein?
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Koi confusion ho toh seedha sarkari office se pucho. Galat jagah se puchoge toh galat jawab milega.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8 not-prose border border-blue-200 dark:border-blue-800">
          <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-4">Sarkari links:</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <strong>Apply karne ki jagah:</strong><br />
              <ExternalLinkButton 
                url="https://nlm.udyamimitra.in"
                label="NLM Udyamimitra Portal"
              />
            </li>
            <li className="mt-4">
              <strong>Aur jankari:</strong><br />
              <a href="https://dahd.gov.in" className="text-blue-600 hover:underline dark:text-blue-400 inline-flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                dahd.gov.in ↗
              </a>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Phone pe puchna ho toh apne jile ke Animal Husbandry office ka number nikalo. Har state mein alag-alag adhikari hain.
        </p>

        <Image 
          src="/images/kisanguides/nlm-application-help.webp"
          alt="NLM Application Help and Support Resources for Farmers"
          width={800}
          height={450}
          className="rounded-lg shadow-md mb-6 w-full object-cover"
        />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Akhir mein
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Bakri palan achha dhandha hai. Sarkar madad bhi karti hai. Bas thoda time lagta hai process mein.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Agar bakri ka meat bechna hai toh{' '}
          <Link href="/articles/PMFMEYojana" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">
            PMFME Yojana
          </Link>{' '}
          se 35% aur mil sakta hai.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Bakriyon ka gobar bhi bech sakte ho.{' '}
          <Link href="/articles/VerminCompost" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">
            Vermi Compost
          </Link>{' '}
          bana ke alag paisa kamao.
        </p>

        <div className="mt-12 pt-8 border-t-2 border-gray-200 dark:border-gray-700 not-prose">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2">
            <span className="text-3xl">📚</span>
            Aur bhi padho
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            In articles se aur fayda hoga:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl">🐃</div>
                <h4 className="text-lg font-bold text-green-800 dark:text-green-300">Pashu Palan</h4>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link href="/articles/MadhumakhiPalan" className="flex items-start gap-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors group">
                    <span className="text-green-600 group-hover:translate-x-1 transition-transform">→</span>
                    <div>
                      <div className="font-semibold">Madhumakhi Palan</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Shahad ka dhandha</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/articles/MushroomKheti" className="flex items-start gap-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors group">
                    <span className="text-green-600 group-hover:translate-x-1 transition-transform">→</span>
                    <div>
                      <div className="font-semibold">Mushroom Kheti</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Kam jagah mein zyada paisa</div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl">💰</div>
                <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300">Sarkari Yojana</h4>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link href="/articles/PMatsyaSampada" className="flex items-start gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
                    <span className="text-blue-600 group-hover:translate-x-1 transition-transform">→</span>
                    <div>
                      <div className="font-semibold">PM Matsya Sampada</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Machli palan ki madad</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/articles/CHCPortal" className="flex items-start gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
                    <span className="text-blue-600 group-hover:translate-x-1 transition-transform">→</span>
                    <div>
                      <div className="font-semibold">Custom Hiring Centre</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Machine kiraye par dene ka dhandha</div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
            <h4 className="text-lg font-bold text-purple-800 dark:text-purple-300 mb-4 flex items-center gap-2">
              <span className="text-2xl">🌾</span>
              Kheti ke aur tareeke
            </h4>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link href="/articles/DripSprinkler" className="flex items-center gap-2 bg-white dark:bg-gray-800 p-3 rounded-lg hover:shadow-md transition-shadow text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                <span className="text-purple-600">💧</span>
                <span className="font-medium">Drip aur Sprinkler</span>
              </Link>
              <Link href="/articles/PmKusumYojanaSolarSubsidy2026" className="flex items-center gap-2 bg-white dark:bg-gray-800 p-3 rounded-lg hover:shadow-md transition-shadow text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                <span className="text-purple-600">☀️</span>
                <span className="font-medium">Solar Pump Yojana</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-lg border-l-4 border-orange-500 not-prose">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong className="text-orange-600 dark:text-orange-400 block mb-2">Note:</strong>
            Yeh sirf jankari hai. Scheme ke rules badal sakte hain. Latest update ke liye official site check karo. Last updated: July 2026.
          </p>
        </div>
      </article>
    </>
  );
}
