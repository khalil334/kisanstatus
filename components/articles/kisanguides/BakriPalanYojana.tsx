'use client';

import { useState } from 'react';
import ExternalLinkButton from '@/components/ExternalLinkButton';
import Image from 'next/image';
import Link from 'next/link';

function FaqItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800 mb-3 shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900 dark:text-gray-100 pr-4 text-sm md:text-base">{question}</span>
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
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 pt-0 text-sm text-gray-700 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-700">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function BakriPalanYojana() {
  const canonicalUrl = 'https://kisanstatus.com/articles/bakri-palan-yojana-nlm-subsidy';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Bakri Palan Yojana 2026: 50% Subsidy Kaise Lein, Ground Reality aur Process',
    description: 'NLM goat farming subsidy ka sach: 50% funding, DPR kaise banaye, vaccination schedule, documents ki list, aur wo galtiyan jo applications reject karwati hain.',
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
      logo: {
        '@type': 'ImageObject',
        url: 'https://kisanstatus.com/logo.webp',
        width: 250,
        height: 60,
      },
    },
    datePublished: '2024-01-01',
    dateModified: '2026-07-21',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Backyard mein 2-4 bakriyan rakhne par NLM subsidy milti hai kya?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nahi. National Livestock Mission (NLM) ka minimum threshold 100 female aur 5 male bakriyan hai. Chhote setup ke liye aapko apne district ke Pashu Palan vibhag ki chhoti schemes dekhni hongi.',
        },
      },
      {
        '@type': 'Question',
        name: 'Subsidy kitne din mein bank account mein aati hai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Raaton-raat nahi aata. Approval aur site visit mein 2-3 mahine lagte hain, aur paisa do hisson (tranches) mein aata hai. Total 4 se 6 mahine ka time frame rakh ke chalo.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kya main loan ke saath subsidy le sakta hoon?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Haan, aur yahi sahi tarika hai. 50% sarkar deti hai, baaki 50% aap KCC ya normal bank loan se arrange karte ho. Subsidy seedhe aapke account mein aati hai, bank ke paas nahi rukti.',
        },
      },
    ],
  };

  const faqs = [
    {
      q: 'Backyard mein 2-4 bakriyan rakhne par NLM subsidy milti hai kya?',
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
          Haan, aur yahi sahi tarika hai. 50% sarkar deti hai, baaki 50% aap bank se loan le sakte ho.{' '}
          <Link href="/articles/KisanCreditCardOnlineApply2026" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">
            KCC Loan Guide
          </Link>{' '}
          mein process detail mein hai.
        </>
      ),
    },
    {
      q: 'Kya main bahar ke state se bakriyan mangwa sakta hoon?',
      a: 'Haan, lekin animal quarantine certificate aur vehicle fitness certificate dikhana padta hai. Bina iske transport illegal maana jata hai.',
    },
    {
      q: 'Application reject ho gayi, dobara apply kar sakte hain?',
      a: 'Haan. Rejection ka reason dekho, galti sudharo aur dobara bhejo. Koi permanent ban nahi hota.',
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-4xl mx-auto px-4 py-8 prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-blue-600 dark:prose-a:text-blue-400">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 leading-tight">
          Bakri Palan Yojana 2026: 50% Subsidy Lene Ka Sahi Tarika aur Ground Reality
        </h1>

        <div className="mb-8 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-600 not-prose shadow-sm">
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-0">
            <strong>Ground Reality:</strong> Field reports aur goat farmers ke practical experience ke mutabik, NLM subsidy ke applications mein chhoti chhoti galtiyan hoti hain jinki wajah se delay ya rejection ho jata hai. District level officers ke experience ke hisab se, proper documentation aur realistic DPR approval ke liye sabse zaroori hain.
          </p>
        </div>

        <Image 
          src="/images/kisanguides/bakri-palan-nlm-subsidy.webp"
          alt="Bakri Palan Yojana NLM Subsidy - Goat Farming Scheme India 2026"
          width={800}
          height={450}
          priority
          sizes="(max-width: 768px) 100vw, 800px"
          className="rounded-xl shadow-md mb-8 w-full object-cover not-prose"
        />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          NLM 2.0 Asal Mein Kya Hai?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          2021 mein Department of Animal Husbandry & Dairying (DAHD) ne NLM ko 2.0 version mein upgrade kiya, jiska mukhya uddeshya goat farming ko ek proper commercial business ke roop mein establish karna hai. Latest NLM guidelines ke mutabik, ab proper planning aur documentation par zyada zor diya jata hai.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Ground level par aksar dekha gaya hai ki bina proper planning aur vaccination schedule ke shuru kiye gaye farms mein mortality rate badhne ka khatra rehta hai. Sarkar approved project cost ka 50% subsidy deti hai (SC/ST aur mahila kisanon ke liye yeh 60% tak ho sakta hai, state guidelines ke anusaar).
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Kitni Bakriyan Chahiye? (Yahan Sab Confuse Hote Hain)
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Kai farmers yeh puchte hain ki kam bakriyon se shuruat ki ja sakti hai ya nahi. NLM guidelines ke mutabik, minimum threshold 100 female aur 5 male bakriyan hai. Isse kam unit size ke liye state ki alag schemes dekhni chahiye.
        </p>

        <div className="overflow-x-auto my-8 not-prose">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 rounded-xl overflow-hidden text-sm shadow-sm">
            <caption className="sr-only">NLM Goat Farming Unit Size and Subsidy Limits</caption>
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left text-gray-900 dark:text-gray-100">Unit Size</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left text-gray-900 dark:text-gray-100">Bakriyan (Female + Male)</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left text-gray-900 dark:text-gray-100">Anumanit Subsidy Limit</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300 font-medium">Chhota</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">100 + 5</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300 font-semibold text-green-700 dark:text-green-400">₹10 Lakh tak</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300 font-medium">Madhyam</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">200-300 + 10-15</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300 font-semibold text-green-700 dark:text-green-400">₹20-30 Lakh tak</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300 font-medium">Bada</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">500 + 25</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300 font-semibold text-green-700 dark:text-green-400">₹50 Lakh tak</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">Note: State-wise variation ho sakta hai. Latest NLM guidelines check karein.</p>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Nasl (Breed) - Yahan Galti Mat Karna
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Kai commercial goat farmers ke practical experience ke mutabik, alag-alag breeds ki apni khasiyat aur zarooratein hoti hain:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
          <li><strong>Jamunapari:</strong> UP-Bihar side ke liye best hai. Ek bakri 3-4 litre doodh deti hai. Garmiyon mein inhein heat stress ka khatra rehta hai.</li>
          <li><strong>Sirohi:</strong> Rajasthan jaise dry areas mein yeh kam chara aur paani mein bhi achha perform karti hai. Beginners ke liye safe option.</li>
          <li><strong>Beetal:</strong> Punjab-Haryana mein iski maang zyada hai. Maans ka rate achha milta hai, par maintenance costly hai.</li>
          <li><strong>Black Bengal:</strong> Chhote area ke liye badhiya hai aur ek baar mein 2-3 bachhe deti hai.</li>
        </ul>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-5 my-6 rounded-r-lg not-prose shadow-sm">
          <h3 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2 text-sm">⚠️ Breed Selection se Pehle Ye Check Karein:</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
            <li>Aapke area ki climate ke hisaab se breed chunein</li>
            <li>Local market mein kis breed ki demand zyada hai</li>
            <li>Feed availability aur cost</li>
            <li>Veterinary support availability</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Chara aur Khuraak - Asli Kharcha Yahan Hai
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Bakri khareedna aasaan hai, par unhe sahi khuraak dena sabse bada operational challenge hai. Ek adult bakri ko rozana uske body weight ka 3-4% dry matter chahiye hota hai.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Agar roz market se mehenga chara khareeda jaye, toh profit margin kam ho sakta hai. Apni zameen par Napier grass, Maize, ya Berseem ugana shuru karein.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Documents - Yahan Applications Aksar Fail Hoti Hain
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          District level officers ke experience ke hisab se, applications aksar documents ki chhoti galtiyon ki wajah se reject ho jati hain:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
          <li><strong>Zameen ka kagaz:</strong> 5 saal ka registered lease agreement chahiye.</li>
          <li><strong>Supplier quotations:</strong> Dated aur signed hone chahiye.</li>
          <li><strong>DPR:</strong> Apne district ke registered veterinarian se banwana behtar hota hai.</li>
          <li><strong>Geotagged photos:</strong> GPS location ke saath photos chahiye.</li>
        </ul>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-5 my-6 rounded-r-lg not-prose shadow-sm">
          <p className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-3">Zaroori Documents Checklist:</p>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>Aadhaar Card aur PAN Card</li>
            <li>Zameen ka Kagaz: Registry, Khatauni, ya 5 saal ka registered Kiraya agreement</li>
            <li>Bank Passbook ki copy aur Cancelled Cheque</li>
            <li>Supplier ke original Quotations</li>
            <li><strong>Detailed Project Report (DPR)</strong></li>
            <li>Farm ki geotagged photos</li>
          </ol>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          DPR Kaise Banayein? (Sabse Critical Step)
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Ek achhe DPR mein ye cheezein clear honi chahiye:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
          <li><strong>Capital Cost:</strong> Shed construction, feeding troughs, water tanks ka exact quotation.</li>
          <li><strong>Recurring Cost:</strong> Pehle 6 mahine ka chara, concentrate, mineral mixture, aur labor.</li>
          <li><strong>Income Projection:</strong> Conservative rates. 15-20% mortality rate ko include karna zaroori hai.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Vaccination - Isme Mazak Nahi
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Ek bimari ka outbreak pure flock ko khatam kar sakta hai:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
          <li><strong>PPR:</strong> Har 6 mahine mein. Sabse zaroori.</li>
          <li><strong>Enterotoxaemia (ET):</strong> Saal mein ek baar.</li>
          <li><strong>FMD:</strong> Saal mein do baar.</li>
          <li><strong>Deworming:</strong> Har 3 mahine mein.</li>
        </ul>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-5 my-6 not-prose">
          <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3 text-sm">Biosecurity aur Disease Prevention Basics:</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>Farm mein entry par foot bath zaroor rakhein</li>
            <li>Naye animals ko 15-30 din alag quarantine karein</li>
            <li>Regular farm cleaning aur disinfection karein</li>
            <li>Dead animals ko proper tarike se dispose karein</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Ek Saal Ka Realistic Hisab (100+5 Unit)
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Ground reality kuch aisi hoti hai (state-wise variation ho sakta hai):
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
          <li><strong>Initial Investment:</strong> ₹15-18 Lakh (50% subsidy + 50% loan/apna paisa).</li>
          <li><strong>Recurring Cost (6 mahine):</strong> ₹3-4 Lakh.</li>
          <li><strong>Income:</strong> 90 bachhe bechne par ₹6-7 Lakh. Doodh alag se ₹1-1.5 Lakh.</li>
          <li><strong>Net Result:</strong> Pehle saal tight, doosre saal se profit 25-30%.</li>
        </ul>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-5 my-6 rounded-r-lg not-prose shadow-sm">
          <h3 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2 text-sm">💰 Cash-Flow Planning Before Subsidy Release:</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
            <li>Subsidy aane mein 4-6 mahine lag sakte hain</li>
            <li>Pehli 6 mahine ka operating cost pehle se plan karein</li>
            <li>Emergency fund rakhein (kam se kam 3 mahine ka)</li>
            <li>Loan EMI ke liye alternate income source rakhein</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Apply Kaise Karein? (Asli Process)
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Official portal: <a href="https://nlm.udyamimitra.in" className="text-blue-600 hover:underline dark:text-blue-400 font-semibold" target="_blank" rel="noopener noreferrer" aria-label="Visit NLM Udyamimitra Portal">nlm.udyamimitra.in</a>
        </p>
        <ol className="list-decimal pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
          <li>DPR banwao local registered vet se.</li>
          <li>Portal par register karo.</li>
          <li>Documents upload karo (PDF, 2MB se kam).</li>
          <li>Form submit karo aur acknowledgment number ka screenshot lo.</li>
          <li>3-4 mahine wait karo, site visit hoga.</li>
          <li>Approval aane par bills submit karo.</li>
        </ol>

        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-5 my-6 rounded-r-lg not-prose shadow-sm">
          <h3 className="font-bold text-red-800 dark:text-red-300 mb-2 text-sm">️ Common Mistakes During Site Inspection:</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
            <li>Farm ready nahi hai jab officer aata hai</li>
            <li>Quoted equipment khareeda nahi gaya</li>
            <li>Bakriyon ki actual count quoted se kam hai</li>
            <li>Documents original nahi hain</li>
          </ul>
        </div>

        <Image 
          src="/images/kisanguides/goat-farming-shed-construction.webp"
          alt="Goat Farming Shed Construction under NLM Subsidy Guidelines"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className="rounded-xl shadow-md mb-8 w-full object-cover not-prose"
        />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Aksar Puche Jane Wale Sawal
        </h2>
        <div className="space-y-3 my-8 not-prose">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.q} answer={faq.a} />
          ))}
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl my-8 not-prose border border-blue-200 dark:border-blue-800 shadow-sm">
          <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-4 text-sm uppercase tracking-wide">Official Sarkari Links</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <strong className="block mb-1">Apply karne ki jagah:</strong>
              <ExternalLinkButton 
                url="https://nlm.udyamimitra.in"
                label="NLM Udyamimitra Portal"
              />
            </li>
            <li>
              <strong className="block mb-1">Guidelines aur updates:</strong>
              <a href="https://dahd.gov.in" className="text-blue-600 hover:underline dark:text-blue-400 inline-flex items-center gap-1 font-medium" target="_blank" rel="noopener noreferrer" aria-label="Visit Department of Animal Husbandry and Dairying">
                dahd.gov.in (Department of Animal Husbandry) ↗
              </a>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Akhir Mein: Ek Successful Farm Ka Raaz
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Bakri palan mein paisa tabhi hai jab aap isse business ki tarah treat karo. Documentation strong rakho, vet ki salah lo, aur patience rakho.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          Agar meat process karke brand banana hai toh <Link href="/articles/pm-fme-yojana-food-processing" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">PM FME Yojana</Link> dekho. Aur haan, bakri ka gobar fekna mat - <Link href="/articles/vermi-compost-business-guide" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">Vermi Compost</Link> bana ke bech do.
        </p>

        <div className="mt-12 pt-8 border-t-2 border-gray-200 dark:border-gray-700 not-prose">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
            <span className="text-3xl" aria-hidden="true">📚</span>
            Aage Kya Padhein?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
            In verified guides se aapke farming business ko aur clarity milegi:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/articles/madhumakhi-palan-kvic-subsidy" className="group flex flex-col bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl group-hover:scale-110 transition-transform" aria-hidden="true">🐝</span>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">Madhumakhi Palan</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">KVIC subsidy ke saath shahad ka business kaise shuru karein.</p>
            </Link>

            <Link href="/articles/pm-matsya-sampada-yojana-fish-farming" className="group flex flex-col bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl group-hover:scale-110 transition-transform" aria-hidden="true"></span>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">PM Matsya Sampada</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">Machli palan par 60% tak subsidy.</p>
            </Link>

            <Link href="/articles/drip-sprinkler-irrigation-subsidy" className="group flex flex-col bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl group-hover:scale-110 transition-transform" aria-hidden="true">💧</span>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Drip Irrigation</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">PMKSY ke tahat 75% tak subsidy.</p>
            </Link>
          </div>
        </div>

        <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-xl border-l-4 border-orange-500 not-prose shadow-sm">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong className="text-orange-600 dark:text-orange-400 block mb-2">Disclaimer:</strong>
            Yeh article sirf jankari aur guidance ke liye hai. Eligibility, subsidy limits, aur rules state guidelines ke anusaar badal sakte hain. Apply karne se pehle hamesha latest NLM/DAHD guidelines check karein. Last updated: July 2026.
          </p>
        </div>
      </article>
    </>
  );
}