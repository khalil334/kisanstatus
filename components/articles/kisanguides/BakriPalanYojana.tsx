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
    headline: 'Bakri Palan Yojana NLM Subsidy 2026: 50% तक सब्सिडी, पूरी जानकारी और आवेदन प्रक्रिया',
    description: 'National Livestock Mission (NLM-EDP) के तहत Goat Farming के लिए 50% capital subsidy कैसे पाएं। पूरी eligibility, documents और step-by-step application process.',
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
    dateModified: '2026-01-01',
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
        name: 'क्या backyard goat farming के लिए भी subsidy मिलती है?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'NLM-EDP में minimum unit size 100 female + 5 male है। छोटे backyard units के लिए अपनी state की specific animal husbandry schemes check करें।',
        },
      },
      {
        '@type': 'Question',
        name: 'Subsidy मिलने में कितना time लगता है?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SLEC और CEC approval में 2-3 महीने लगते हैं। Fund release और bank transfer में additional time लगता है। Total 4-6 months realistic hai.',
        },
      },
      {
        '@type': 'Question',
        name: 'क्या loan भी ले सकते हैं subsidy के साथ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'हां, subsidy 50% है, बाकी 50% के लिए bank से term loan ले सकते हैं। Best options ke liye hamari Kisan Credit Card Online Apply Guide check karein.',
        },
      },
      {
        '@type': 'Question',
        name: 'क्या मैं पहले से existing farm expand कर सकता हूं?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'NLM-EDP primarily new units के लिए है। Existing farm expansion के लिए state Animal Husbandry Department से confirm करें।',
        },
      },
      {
        '@type': 'Question',
        name: 'Application reject होने पर दोबारा apply कर सकते हैं?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'हां, rejection का reason पता करें, corrections करें और दोबारा apply करें। इसमें कोई restriction नहीं है।',
        },
      },
    ],
  };

  const faqs = [
    {
      q: 'Q1. क्या backyard goat farming के लिए भी subsidy मिलती है?',
      a: 'NLM-EDP में minimum unit size 100 female + 5 male है। छोटे backyard units के लिए अपनी state ki specific animal husbandry schemes check karein.',
    },
    {
      q: 'Q2. Subsidy मिलने में कितना time लगता है?',
      a: 'SLEC aur CEC approval mein 2-3 mahine lagte hain. Fund release aur bank transfer mein additional time lagta hai. Total 4-6 months realistic hai.',
    },
    {
      q: 'Q3. क्या loan भी ले सकते हैं subsidy के साथ?',
      a: (
        <>
          Haan, subsidy 50% hai, baaki 50% ke liye bank se term loan le sakte hain. Best options ke liye hamari{' '}
          <Link href="/articles/KisanCreditCardOnlineApply2026" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">
            Kisan Credit Card Online Apply Guide
          </Link>{' '}
          check karein.
        </>
      ),
    },
    {
      q: 'Q4. क्या मैं पहले से existing farm expand कर सकता हूं?',
      a: 'NLM-EDP primarily new units ke liye hai. Existing farm expansion ke liye state Animal Husbandry Department se confirm karein.',
    },
    {
      q: 'Q5. Application reject होने पर दोबारा apply कर सकते हैं?',
      a: 'Haan, rejection ka reason pata karein, corrections karein aur dobara apply karein. Isme koi restriction nahi hai.',
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-4xl mx-auto px-4 py-8 prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-blue-600 dark:prose-a:text-blue-400">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 leading-tight">
          Bakri Palan Yojana NLM Subsidy 2026: 50% तक सब्सिडी, पूरी जानकारी और आवेदन प्रक्रिया
        </h1>

        <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-600 not-prose">
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
            <strong>जरूरी जानकारी:</strong> National Livestock Mission (NLM-EDP) के तहत Goat Farming शुरू करने वाले किसानों को 50% तक Capital Subsidy मिलती है, जिसकी अधिकतम सीमा ₹50 लाख है। सही पोर्टल और आवेदन प्रक्रिया की पूरी जानकारी इस गाइड में दी गई है।
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
          NLM बकरी पालन सब्सिडी - असलियत क्या है?
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Department of Animal Husbandry and Dairying, Government of India 2014-15 से National Livestock Mission चला रहा है, जिसे 2021-22 में revise करके 2025-26 तक extend कर दिया गया है। NLM-EDP (Entrepreneurship Development) के तहत आपको 50% capital subsidy मिलती है, जो दो installments में सीधे आपके bank account में आती है।
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Subsidy Amount और Unit Size - सही Calculation
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Unit size बड़ी होगी तो subsidy भी proportionally बढ़ेगी। यह एक proportional system है, जहाँ छोटे unit पर कम और बड़े unit पर ज्यादा subsidy मिलती है।
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
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left text-gray-900 dark:text-gray-100">Unit Size</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left text-gray-900 dark:text-gray-100">Female + Male</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left text-gray-900 dark:text-gray-100">Subsidy (50%)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">Minimum Unit</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">100 + 5</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300 font-semibold">₹10 Lakh</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">Medium Unit</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">200-300 + 10-15</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300 font-semibold">₹20-30 Lakh</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">Maximum Unit</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">500 + 25</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300 font-semibold">₹50 Lakh</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          आप 100 female goats + 5 male से start करके 500 female + 25 male तक का unit बना सकते हैं, और subsidy proportionally बढ़ती जाती है।
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          कौन Apply कर सकता है? Eligibility Criteria
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Individual farmers के अलावा, groups और companies भी इस scheme के लिए eligible हैं।
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
          <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
              <span>✅</span> Eligible Categories:
            </h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• Individual Farmers</li>
              <li>• Self-Help Groups (SHG)</li>
              <li>• Farmer Producer Companies (FPC)</li>
              <li>• Farmer Co-operative Societies</li>
              <li>• Joint Liability Groups (JLG)</li>
              <li>• Section 8 Companies</li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
              <span>📋</span> Basic Requirements:
            </h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• Indian Citizen</li>
              <li>• Valid land documents (owned or lease)</li>
              <li>• Active bank account</li>
              <li>• Detailed Project Report (DPR)</li>
              <li>• GIS location of project site</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Required Documents - क्या-क्या चाहिए?
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Documents की proper arrangement bahut zaroori hai. DPR banane se pehle apni zameen ki quality samajhne ke liye hamari{' '}
          <Link href="/articles/soil-health-card-complete-guide-2026" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">
            Soil Health Card Complete Guide
          </Link>{' '}
          zaroor padhein.
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
            <li><strong>Aadhaar Card:</strong> Identity verification के लिए</li>
            <li><strong>PAN Card:</strong> Financial transactions के लिए mandatory</li>
            <li><strong>Land Documents:</strong> Registry, खतौनी या lease agreement (clear और updated)</li>
            <li><strong>Bank Passbook:</strong> Active account की copy</li>
            <li><strong>Cancelled Cheque:</strong> Bank account verification के लिए</li>
            <li><strong>Bank Mandate Form:</strong> Direct Benefit Transfer (DBT) के लिए</li>
            <li><strong>Detailed Project Report (DPR):</strong> Complete business plan</li>
            <li><strong>GIS Location:</strong> Project site की geographic location</li>
            <li><strong>Passport Size Photos:</strong> Recent photographs</li>
          </ol>
        </div>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          DPR बनाने में help चाहिए तो nearest Animal Husbandry Department office से contact kar lein.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Online Application Process - Step by Step
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Puri tarah online process hai. Sahi portal use karna bahut important hai, galat jagah apply kiya toh samay barbad hoga.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6 not-prose border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-gray-800 dark:text-gray-200 font-semibold mb-1">
            Official Application Portal:{' '}
            <a href="https://nlm.udyamimitra.in" className="text-blue-600 hover:underline dark:text-blue-400" target="_blank" rel="noopener noreferrer">
              https://nlm.udyamimitra.in
            </a>
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            General Information:{' '}
            <a href="https://dahd.gov.in" className="text-blue-600 hover:underline dark:text-blue-400" target="_blank" rel="noopener noreferrer">dahd.gov.in</a>{' '}
            या{' '}
            <a href="https://www.dahd.nic.in" className="text-blue-600 hover:underline dark:text-blue-400" target="_blank" rel="noopener noreferrer">www.dahd.nic.in</a>
          </p>
        </div>

        <div className="space-y-4 my-8 not-prose">
          {[
            { no: 1, title: 'Portal पर Registration', desc: 'nlm.udyamimitra.in पर जाकर register करें। Mobile number और email verify karne ke baad OTP confirmation hoga.' },
            { no: 2, title: 'Application Form भरें', desc: 'Form kholein. Personal, land, aur project details carefully aur sahi information ke saath fill karein.' },
            { no: 3, title: 'Documents Upload', desc: 'Scanned copies upload karein. File size guidelines follow karein, PDF format preferred hai.' },
            { no: 4, title: 'Submit और Acknowledgment', desc: 'Submit karein. Acknowledgment number milega, use save kar lein - future tracking ke liye chahiye.' },
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
          Approval Process - कैसे मिलती है subsidy?
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Process thoda lengthy hai lekin transparent hai. State Level Executive Committee (SLEC) application review karti hai, aur Central Executive Committee (CEC) final approval deti hai.
        </p>

        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-8 border border-purple-200 dark:border-purple-800 not-prose">
          <div className="space-y-3">
            {[
              { label: 'SLEC Approval:', text: 'State Level Executive Committee aapki application review karti hai.' },
              { label: 'CEC Approval:', text: 'Central Executive Committee final approval deti hai.' },
              { label: 'SIDBI Fund Release:', text: 'SIDBI funds ko lender/bank ko release karta hai.' },
              { label: 'Bank Transfer:', text: 'Bank subsidy amount ko beneficiary ke account mein transfer karta hai.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="font-bold text-purple-700 dark:text-purple-300">{i + 1}.</span>
                <p className="text-gray-700 dark:text-gray-300 text-sm"><strong>{item.label}</strong> {item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Paisa do installments mein aata hai. Pehli installment project start par, aur doosri progress report submit karne ke baad.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          क्या Cover होता है और क्या नहीं?
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Subsidy mein kya cover hota hai aur kya nahi, ye pehle se samajhna bahut zaroori hai. Goat farming ke saath agar aap{' '}
          <Link href="/articles/SilageMaking" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">
            Silage Making Guide
          </Link>{' '}
          seekh lete hain, toh feed cost 30-40% tak kam ho jati hai.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
          <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">
              <span>✅</span> Covered Items:
            </h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• Goat/Sheep purchase (breeding stock)</li>
              <li>• Shed construction</li>
              <li>• Feeding equipment</li>
              <li>• Veterinary infrastructure</li>
              <li>• Breeding management setup</li>
              <li>• Basic infrastructure development</li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg border border-red-200 dark:border-red-800">
            <h3 className="font-semibold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">
              <span>❌</span> NOT Covered:
            </h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• Land cost ya rent</li>
              <li>• Vehicles purchase</li>
              <li>• Working capital</li>
              <li>• Operational expenses</li>
              <li>• Salary payments</li>
              <li>• Marketing expenses</li>
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
          Common Mistakes - Rejection के मुख्य कारण
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Applications aksar chhoti-chhoti galtiyan ki wajah se reject ho jaati hain, jinhe aasani se avoid kiya ja sakta hai.
        </p>

        <div className="space-y-3 my-6 not-prose">
          {[
            { title: 'Incomplete Documentation:', text: 'Ek bhi document missing hai toh application hold par chali jaati hai.' },
            { title: 'Wrong Portal:', text: 'nlm.gov.in par apply karna galat hai. Sahi portal nlm.udyamimitra.in hai, ye yaad rakhein.' },
            { title: 'Unrealistic DPR:', text: 'Project report mein unrealistic targets ya galat calculations hona.' },
            { title: 'Land Issues:', text: 'Land documents clear nahi hain ya lease agreement valid nahi hai.' },
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong className="text-red-600 dark:text-red-400 block mb-1">{item.title}</strong>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* ✅ EXPANDABLE FAQs */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="space-y-3 my-8 not-prose">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.q} answer={faq.a} />
          ))}
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Official Resources और Help
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Confusion ya doubt ho toh official sources se hi information lein. Galat jagah se puchoge toh galat jawab milenge.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8 not-prose border border-blue-200 dark:border-blue-800">
          <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-4">Verified Official Links:</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <strong>Application Portal:</strong><br />
              <ExternalLinkButton 
                url="https://nlm.udyamimitra.in"
                label="Apply Online - NLM Udyamimitra Portal"
              />
            </li>
            <li className="mt-4">
              <strong>General Information:</strong><br />
              <a href="https://dahd.gov.in" className="text-blue-600 hover:underline dark:text-blue-400 inline-flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                dahd.gov.in (Department of Animal Husbandry and Dairying) ↗
              </a>
            </li>
            <li className="mt-2">
              <a href="https://www.dahd.nic.in" className="text-blue-600 hover:underline dark:text-blue-400 inline-flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                www.dahd.nic.in (Alternative portal) ↗
              </a>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Helpline ke liye nearest Animal Husbandry and Veterinary Department office se contact karein. State-wise officers available hain.
        </p>

        <Image 
          src="/images/kisanguides/nlm-application-help.webp"
          alt="NLM Application Help and Support Resources for Farmers"
          width={800}
          height={450}
          className="rounded-lg shadow-md mb-6 w-full object-cover"
        />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Final Thoughts
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Goat farming ek viable business option hai, aur NLM subsidy ise aur feasible bana deti hai. Patience rakhna padega kyunki process mein time lagta hai. Agar aap goat meat processing ya value addition karna chahte hain, toh{' '}
          <Link href="/articles/PMFMEYojana" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">
            PMFME Yojana Guide
          </Link>{' '}
          se 35% tak subsidy mil sakti hai.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Sahi planning karein, documentation prepare karein, aur guidelines follow karein. Goat waste se aap{' '}
          <Link href="/articles/VerminCompost" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">
            Vermi Compost Guide
          </Link>{' '}
          bhi bana sakte hain, jo ek additional income source ban sakta hai.
        </p>

        {/* Related Articles Section */}
        <div className="mt-12 pt-8 border-t-2 border-gray-200 dark:border-gray-700 not-prose">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2">
            <span className="text-3xl">📚</span>
            Related Articles on KisanStatus
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Agar aap animal husbandry aur farming subsidies mein interested hain, toh ye articles bhi padhein:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl">🐃</div>
                <h4 className="text-lg font-bold text-green-800 dark:text-green-300">Animal Husbandry Guides</h4>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link href="/articles/MadhumakhiPalan" className="flex items-start gap-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors group">
                    <span className="text-green-600 group-hover:translate-x-1 transition-transform">→</span>
                    <div>
                      <div className="font-semibold">Madhumakhi Palan</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Beekeeping with KVIC subsidy</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/articles/MushroomKheti" className="flex items-start gap-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors group">
                    <span className="text-green-600 group-hover:translate-x-1 transition-transform">→</span>
                    <div>
                      <div className="font-semibold">Mushroom Kheti</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Complete mushroom farming guide</div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl">💰</div>
                <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300">Government Subsidy Schemes</h4>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link href="/articles/PMatsyaSampada" className="flex items-start gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
                    <span className="text-blue-600 group-hover:translate-x-1 transition-transform">→</span>
                    <div>
                      <div className="font-semibold">PM Matsya Sampada</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Fisheries subsidy scheme</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/articles/CHCPortal" className="flex items-start gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
                    <span className="text-blue-600 group-hover:translate-x-1 transition-transform">→</span>
                    <div>
                      <div className="font-semibold">Custom Hiring Centre (CHC)</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Machinery rental business</div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
            <h4 className="text-lg font-bold text-purple-800 dark:text-purple-300 mb-4 flex items-center gap-2">
              <span className="text-2xl">🌾</span>
              More Farming Resources
            </h4>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link href="/articles/DripSprinkler" className="flex items-center gap-2 bg-white dark:bg-gray-800 p-3 rounded-lg hover:shadow-md transition-shadow text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                <span className="text-purple-600">💧</span>
                <span className="font-medium">Drip & Sprinkler Irrigation</span>
              </Link>
              <Link href="/articles/PmKusumYojanaSolarSubsidy2026" className="flex items-center gap-2 bg-white dark:bg-gray-800 p-3 rounded-lg hover:shadow-md transition-shadow text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                <span className="text-purple-600">☀️</span>
                <span className="font-medium">PM-KUSUM Solar Pump</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-lg border-l-4 border-orange-500 not-prose">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong className="text-orange-600 dark:text-orange-400 block mb-2">Disclaimer:</strong>
            Yeh information educational purpose ke liye hai. Scheme details state-wise aur time-wise change ho sakti hain. Latest aur exact figures ke liye official NLM guidelines ya apne state Animal Husbandry Department se verify zaroor karein. Article last updated: 2026.
          </p>
        </div>
      </article>
    </>
  );
}