'use client';

import { useState } from 'react';
import ExternalLinkButton from '@/components/ExternalLinkButton';
import Image from 'next/image';
import Link from 'next/link';

function FaqItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800 mb-3">
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

export default function BakriPalanYojanaNLMS() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Bakri Palan Yojana 2026: 50% Subsidy Kaise Lein, Ground Reality aur Process',
    description: 'NLM goat farming subsidy ka sach: 50% funding, DPR kaise banaye, documents ki list, aur wo galtiyan jo 90% applications reject karwati hain.',
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
    dateModified: '2026-07-21',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://kisanstatus.com/articles/farming/bakri-palan-yojana-nlm-subsidy',
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
      {
        '@type': 'Question',
        name: 'Mere paas pehle se chhota farm hai, kya main usse bada karke subsidy le sakta hoon?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'NLM zyada tar naye commercial setups ko target karta hai. Purane farm ko expand karne ke liye apne District Animal Husbandry Officer (DAHO) se baat karo, shayad koi state-specific expansion scheme ho.',
        },
      },
      {
        '@type': 'Question',
        name: 'Agar meri application reject ho gayi, toh kya main dobara apply kar sakta hoon?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ghabrao mat. Rejection ka reason dekho (usually document ki kami ya DPR mein galti), usse fix karo aur dobara apply karo. Isme koi permanent rok-tok nahi hai.',
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
          <Link href="/articles/loan/KisanCreditCardOnlineApply2026" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">
            KCC Loan Guide
          </Link>{' '}
          mein process detail mein hai.
        </>
      ),
    },
    {
      q: 'Pehle se farm hai, usse bada kar sakte hain?',
      a: 'NLM naye farm ke liye hai. Purane farm ko bada karne ke liye apne District Animal Husbandry Officer se baat karo.',
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

        <div className="mb-8 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-600 not-prose">
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-0">
            <strong>Agar aapne socha hai ki bas application bhar di aur sarkar ne turant paisa de diya, toh thoda ruk jao.</strong> NLM (National Livestock Mission) ki 50% subsidy bilkul asli hai (SC/ST aur mahilaon ke liye kuch states mein 60% tak), lekin iska paperwork aur ground reality thodi strict hoti hai. Yahan wo sab hai jo aapko actually karna hai.
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
          NLM 2.0 Asal Mein Kya Hai?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          National Livestock Mission ko 2021 mein NLM 2.0 ke roop mein extend kiya gaya tha. Iska seedha matlab hai: sarkar chahti hai ki bakri palan ek chhota backyard shauk nahi, balki ek proper commercial business bane. 
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Is scheme ke tahat, sarkar total approved project cost ka 50% subsidy deti hai. Baaki 50% aapko apni jeb se ya bank loan ke through lagana hota hai. Yeh paisa Direct Benefit Transfer (DBT) ke through seedhe aapke bank account mein aata hai, beech mein koi nahi rokta.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Kitni Bakriyan Chahiye? (Minimum Threshold)
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Field mein sabse bada confusion yahi hota hai ki "bhai, 10 bakriyon par subsidy milegi?" Jawab hai: Nahi. NLM ka minimum threshold <strong>100 female (madayein) aur 5 male (narr)</strong> bakriyan hai. Usse kam ke liye aapko apni state ki specific Pashu Palan vibhag ki chhoti schemes dekhni hongi. Aap maximum 500 female aur 25 male tak ja sakte hain.
        </p>

        <div className="overflow-x-auto my-8 not-prose">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden text-sm">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left text-gray-900 dark:text-gray-100">Unit Size</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left text-gray-900 dark:text-gray-100">Bakriyan (Female + Male)</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left text-gray-900 dark:text-gray-100">Anumanit Subsidy Limit</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">Chhota</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">100 + 5</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300 font-semibold">₹10 Lakh tak</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">Madhyam</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">200-300 + 10-15</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300 font-semibold">₹20-30 Lakh tak</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">Bada</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">500 + 25</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300 font-semibold">₹50 Lakh tak</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Nasl (Breed) Chunne Mein Galti Mat Karna
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Nasl chunna sirf kitabon ki baat nahi hai, ye aapki geography par depend karta hai. Agar aap UP/Bihar side mein hain, toh <strong>Jamunapari</strong> doodh aur maans dono ke liye solid hai (ek bakri aaram se 3-4 litre doodh deti hai). Rajasthan aur dry areas mein <strong>Sirohi</strong> hi bachati hai, kyunki ye kam chara mein bhi bimari se lad leti hai aur beginners ke liye sabse safe bet hai. <strong>Beetal</strong> ('Black Gold') Punjab/Haryana mein achha rate deti hai, par iska maintenance thoda sensitive hota hai.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Eligibility aur Documents: Yahan Sabse Zyada Rejection Hota Hai
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Sirf traditional kisan hi nahi, balki SHG, FPO, ya Section 8 company bhi apply kar sakti hai. Lekin sabse zaroori cheez: <strong>Zameen ka kagaz</strong>. Chahe apni ho ya 5 saal ka registered lease agreement. Bina iske application wahin reject ho jayegi. 
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Ek practical tip: Chara ugane ke liye zameen ki quality pata honi chahiye. Isliye pehle se hi apna <Link href="/articles/farming/soil-health-card-complete-guide-2026" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">Soil Health Card</Link> banwa ke rakho, ye aapke DPR (Project Report) ko strong banata hai.
        </p>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-5 my-6 rounded-r-lg not-prose">
          <p className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-3">Zaroori Documents Checklist:</p>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>Aadhaar Card aur PAN Card (DBT aur compliance ke liye)</li>
            <li>Zameen ka Kagaz: Registry, Khatauni, ya 5 saal ka registered Kiraya agreement</li>
            <li>Bank Passbook ki copy (IFSC clear hona chahiye) aur ek Cancelled Cheque</li>
            <li>Supplier ke original Quotations (bakri aur shed ke liye)</li>
            <li><strong>Detailed Project Report (DPR):</strong> Kisi registered local vet ya approved consultant dwara banaya hua poora plan</li>
            <li>Farm ki geotagged photos (GPS location ke saath)</li>
          </ol>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Apply Kaise Karein? (Asli Process)
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Poora process online hai, lekin dhyan rahe: galat website par jaakar OTP share mat karna. Asli portal sirf <a href="https://nlm.udyamimitra.in" className="text-blue-600 hover:underline dark:text-blue-400 font-semibold" target="_blank" rel="noopener noreferrer">nlm.udyamimitra.in</a> hai.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Sabse pehle ek achha DPR kisi local registered vet se banwa lo. Bina solid DPR ke application aage nahi badhti. Uske baad portal par register karo, documents scan karke upload karo (PDF, 2MB se kam), aur form submit kar do. Ek acknowledgment number milega, uska screenshot le lo. Wo aapka sabse bada proof hai jab bhi office mein follow-up karna ho.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Paisa Aata Kaise Hai? (Thoda Patience Chahiye)
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Yahan thoda patience chahiye. Paisa ek saath nahi aata. Pehle state level ke adhikari site visit karte hain aur report bhejte hain. Unki report ke baad central approval aati hai. 
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Paisa do kiston (tranches) mein aata hai: pehli kist (60-70%) setup shuru hone par, aur baaki ki kist tab jab vet verify karta hai ki farm actually chal raha hai aur bakriyan zinda hain. Total 4 se 6 mahine ka time frame rakh ke chalo.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Subsidy Kis Cheez Par Milti Hai?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Subsidy bakri kharidne, shed banane, feeding troughs, aur basic veterinary setup par milti hai. Lekin ek baat clear hai: zameen kharidne, gaadi lene, ya daily chara aur bijli ke bill par sarkar ek rupya bhi nahi degi. Isliye apna working capital alag se arrange karna padta hai. 
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Ek practical tip: Chara ka kharcha bachane ke liye <Link href="/articles/farming/silage-making-business-guide" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">Silage Making</Link> seekh lo. Isse aapka chara ka kharcha 30-40% tak bach jata hai, jo profit margin ko seedha badhata hai.
        </p>

        <Image 
          src="/images/kisanguides/goat-farming-shed-construction.webp"
          alt="Goat Farming Shed Construction under NLM Subsidy Guidelines"
          width={800}
          height={450}
          className="rounded-lg shadow-md mb-6 w-full object-cover"
        />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Field Mein 90% Applications In Galtiyon Se Reject Hoti Hain
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Ground level par aksar dekha jata hai ki in chhoti si chook ki wajah se applicants ki mahino ki mehnat barbad ho jaati hai aur applications seedha reject list mein chali jaati hain:
        </p>
        <ul className="list-none space-y-3 my-6 not-prose">
          <li className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
            <strong className="text-red-600 dark:text-red-400 block mb-1">Adhure ya galat kagaz:</strong>
            <span className="text-sm text-gray-700 dark:text-gray-300">Ek signature miss hua, ya lease agreement registered nahi tha. Officer ek bhi chook par seedha reject kar deta hai.</span>
          </li>
          <li className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
            <strong className="text-red-600 dark:text-red-400 block mb-1">Fake Quotations:</strong>
            <span className="text-sm text-gray-700 dark:text-gray-300">Supplier se nakli bill banwa ke DPR mein daal diya. Vet officer site visit mein market rate cross-check karke pakad leta hai.</span>
          </li>
          <li className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
            <strong className="text-red-600 dark:text-red-400 block mb-1">Zameen ka dispute:</strong>
            <span className="text-sm text-gray-700 dark:text-gray-300">Kiraye ki zameen hai toh agreement mein 'No Objection' clause clear hona chahiye, warna application atak jayegi.</span>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Aksar Puche Jane Wale Sawal
        </h2>
        <div className="space-y-3 my-8 not-prose">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.q} answer={faq.a} />
          ))}
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Madad Ke Liye Kahan Jayein?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Koi confusion ho toh seedha sarkari office se pucho. Galat jagah se puchoge toh galat jawab milega aur scam mein fans sakte ho. Phone pe puchna ho toh apne jile ke District Animal Husbandry Officer (DAHO) office ka number nikalo. Har state mein alag-alag nodal adhikari hain.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8 not-prose border border-blue-200 dark:border-blue-800">
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
              <a href="https://dahd.gov.in" className="text-blue-600 hover:underline dark:text-blue-400 inline-flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                dahd.gov.in (Department of Animal Husbandry) ↗
              </a>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Akhir Mein: Ek Successful Farm Ka Raaz
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Bakri palan mein paisa tabhi hai jab aap isse ek proper business ki tarah treat karo, na ki sirf ek sarkari subsidy lene ka zariya. Documentation strong rakho aur vet ki salah hamesha lo.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Agar aap bakri ka meat process karke apna brand banana chahte ho, toh <Link href="/articles/farming/pm-fme-yojana-food-processing" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">PM FME Yojana</Link> dekh sakte ho, jo food processing units par 35% subsidy deti hai. Aur haan, bakri ka gobar fekna mat, usse <Link href="/articles/farming/vermi-compost-business-guide" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">Vermi Compost</Link> bana ke bech do. Ye aapke monthly chara aur maintenance ke kharche ko aaram se cover kar deta hai.
        </p>

        <div className="mt-12 pt-8 border-t-2 border-gray-200 dark:border-gray-700 not-prose">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Aage Kya Padhein?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
            In guides se aapke farming business ko aur clarity milegi:
          </p>

          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/articles/farming/madhumakhi-palan-kvic-subsidy" className="flex items-start gap-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                <span className="text-green-600 mt-1">→</span>
                <div>
                  <span className="font-semibold block">Madhumakhi Palan (Beekeeping)</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">KVIC subsidy ke saath shahad ka business kaise shuru karein.</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/articles/farming/pm-matsya-sampada-yojana-fish-farming" className="flex items-start gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <span className="text-blue-600 mt-1">→</span>
                <div>
                  <span className="font-semibold block">PM Matsya Sampada Yojana</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Machli palan par 60% tak subsidy aur biofloc technology ki jankari.</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/articles/farming/drip-sprinkler-irrigation-subsidy" className="flex items-start gap-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <span className="text-purple-600 mt-1">→</span>
                <div>
                  <span className="font-semibold block">Drip aur Sprinkler Irrigation</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">PMKSY ke tahat 75% tak subsidy lein aur paani bachayein.</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-lg border-l-4 border-orange-500 not-prose">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong className="text-orange-600 dark:text-orange-400 block mb-2">Disclaimer:</strong>
            Yeh article sirf jankari aur guidance ke liye hai. Sarkari scheme ke rules aur subsidy rates samay-samay par badal sakte hain. Apply karne se pehle hamesha latest guidelines ke liye official website check karein. Last updated: July 2026.
          </p>
        </div>
      </article>
    </>
  );
}