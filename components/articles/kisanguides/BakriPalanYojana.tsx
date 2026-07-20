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
    headline: 'Bakri Palan Yojana 2026: 50% NLM Subsidy Lene Ka Sahi Tarika aur Complete Guide',
    description: 'Bakri Palan Yojana 2026 mein 50% NLM subsidy kaise lein? Janiye DPR banane ka sahi tarika, documents ki list, aur wo chhupi hui galtiyan jo application reject karwati hain.',
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
        name: 'Kya main bina zameen ke bakri palan subsidy le sakta hoon?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nahi. NLM subsidy ke liye apni zameen ya kam se kam 5 saal ka registered lease agreement dikhana anivarya hai. Bina land proof ke application turant reject ho jati hai.',
        },
      },
      {
        '@type': 'Question',
        name: 'Backyard mein 10-15 bakriyan hain, kya mujhe NLM subsidy milegi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nahi. National Livestock Mission (NLM) ka minimum threshold 100 female aur 5 male bakriyan hai. Chhote setup ke liye aapko apne district ke Pashu Palan vibhag ki micro-schemes dekhni hongi.',
        },
      },
      {
        '@type': 'Question',
        name: 'Subsidy ka paisa kitne din mein bank account mein aata hai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Raaton-raat nahi aata. Approval aur site visit mein 2-3 mahine lagte hain, aur paisa do hisson (tranches) mein aata hai. Total 4 se 6 mahine ka time frame rakh ke chalo.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kya main bank loan ke saath NLM subsidy le sakta hoon?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Haan, aur yahi sabse sahi tarika hai. 50% sarkar subsidy deti hai, baaki 50% aap KCC ya normal bank loan se arrange karte ho. Subsidy seedhe aapke account mein aati hai, bank ke paas nahi rukti.',
        },
      },
      {
        '@type': 'Question',
        name: 'Bihar ya UP se bahar ke state se bakriyan mangwa sakte hain kya?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Haan, lekin animal quarantine certificate aur vehicle fitness certificate dikhana padta hai. Bina iske inter-state transport illegal maana jata hai aur animals seize ho sakte hain.',
        },
      },
      {
        '@type': 'Question',
        name: 'Agar meri NLM application reject ho gayi, toh kya main dobara apply kar sakta hoon?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bilkul. Rejection ka specific reason portal par dikhta hai. Us galti ko sudharo, documents update karo aur dobara bhejo. Koi permanent ban nahi hota.',
        },
      },
    ],
  };

  const faqs = [
    {
      q: 'Kya main bina zameen ke bakri palan subsidy le sakta hoon?',
      a: 'Nahi. NLM subsidy ke liye apni zameen ya kam se kam 5 saal ka registered lease agreement dikhana anivarya hai. Bina land proof ke application turant reject ho jati hai.',
    },
    {
      q: 'Backyard mein 10-15 bakriyan hain, kya mujhe NLM subsidy milegi?',
      a: 'Nahi. NLM mein minimum 100 female + 5 male chahiye. Chhote setup ke liye state ki alag micro-schemes dekho.',
    },
    {
      q: 'Subsidy ka paisa kitne din mein account mein aata hai?',
      a: 'Approval mein 2-3 mahine. Paisa do hisson (tranches) mein aata hai. Total 4-6 mahine lag sakte hain.',
    },
    {
      q: 'Bank loan ke saath subsidy le sakte hain kya?',
      a: (
        <>
          Haan, aur yahi sabse sahi tarika hai. 50% sarkar deti hai, baaki 50% aap bank se loan le sakte ho.{' '}
          <Link href="/articles/KisanCreditCardOnlineApply2026" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">
            KCC Loan Guide
          </Link>{' '}
          mein process detail mein samjhaya gaya hai.
        </>
      ),
    },
    {
      q: 'Bahar ke state se bakriyan mangwane par kya documents chahiye?',
      a: 'Animal quarantine certificate aur vehicle fitness certificate dikhana padta hai. Bina iske transport illegal maana jata hai.',
    },
    {
      q: 'Application reject ho gayi, dobara apply kar sakte hain?',
      a: 'Bilkul. Rejection ka reason dekho, galti sudharo aur dobara bhejo. Koi permanent ban nahi hota.',
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-4xl mx-auto px-4 py-8 prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-blue-600 dark:prose-a:text-blue-400">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 leading-tight">
          Bakri Palan Yojana 2026: 50% NLM Subsidy Lene Ka Sahi Tarika aur Complete Guide
        </h1>

        <div className="mb-8 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-600 not-prose shadow-sm">
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-0">
            <strong>Sach kahoon toh:</strong> Pichle kuch saalon mein maine dekha hai ki NLM subsidy ke applications mein chhoti chhoti documentation galtiyan hi sabse bada rukawat banti hain. District level officers ke experience ke hisab se, ek realistic DPR aur proper vaccination record hi aapki application ko bheed se alag khada karta hai.
          </p>
        </div>

        <Image 
          src="/images/kisanguides/bakri-palan-nlm-subsidy.webp"
          alt="Bakri Palan Yojana NLM Subsidy - Goat Farming Scheme India 2026 with farmer"
          width={800}
          height={450}
          priority
          sizes="(max-width: 768px) 100vw, 800px"
          className="rounded-xl shadow-md mb-8 w-full object-cover not-prose"
        />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          NLM 2.0 Guidelines Ne Game Kaise Badla Hai?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          2021 ke baad se Department of Animal Husbandry & Dairying (DAHD) ne is pashupalan yojana ko ek naye avatar mein launch kiya. Pehle sirf bakriyan baantne par zor tha. Ab NLM 2.0 guidelines ka mukhya uddeshya goat farming ko ek proper, sustainable commercial business ke roop mein establish karna hai.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Iska sidha asar yeh hua hai ki ab sirf application daalne se kaam nahi chalta. Proper planning, detailed bakri palan business plan, aur strict vaccination schedule par pehle se kahin zyada zor diya jata hai. Sarkar approved project cost ka 50% subsidy deti hai. SC/ST aur mahila kisanon ke liye yeh limit state guidelines ke anusaar 60% tak bhi ja sakti hai.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Kitni Bakriyan Chahiye? (Yahan Sabse Zyada Confusion Hota Hai)
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Kai naye farmers mujhse puchte hain, "Kya main 20-30 bakriyon se shuruat karke subsidy le sakta hoon?" Jawab seedha hai: Nahi. 
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          NLM guidelines ke mutabik, minimum viable unit size 100 female aur 5 male bakriyan hai. Kyun? Kyunki ek commercial vet ya officer 10-15 bakriyon ke liye farm visit nahi karega. Yeh economics ke hisab se viable nahi hai. Isse kam unit size ke liye aapko apne state ki specific chhoti schemes dekhni chahiye, NLM nahi.
        </p>

        <div className="overflow-x-auto my-8 not-prose">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 rounded-xl overflow-hidden text-sm shadow-sm">
            <caption className="sr-only">NLM Goat Farming Unit Size and Subsidy Limits 2026</caption>
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left text-gray-900 dark:text-gray-100">Farm Category</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left text-gray-900 dark:text-gray-100">Bakriyan (Female + Male)</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left text-gray-900 dark:text-gray-100">Anumanit Subsidy Limit</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300 font-medium">Chhota (Minimum)</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">100 + 5</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300 font-semibold text-green-700 dark:text-green-400">₹10 Lakh tak</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300 font-medium">Madhyam</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">200-300 + 10-15</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300 font-semibold text-green-700 dark:text-green-400">₹20-30 Lakh tak</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300 font-medium">Bada (Commercial)</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">500 + 25</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300 font-semibold text-green-700 dark:text-green-400">₹50 Lakh tak</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">Note: Yeh limits approximate hain. State-wise variation ho sakta hai, isliye latest NLM guidelines apne district office se zaroor check karein.</p>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Nasl (Breed) Selection: Yahan Jaldbazi Mat Karna
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Kai commercial goat farmers ke practical experience ke mutabik, har breed ki apni khasiyat aur maintenance zarooratein hoti hain. Blindly kisi YouTube video dekh kar breed mat chuniye.
        </p>
        <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300 mb-6">
          <li><strong>Jamunapari:</strong> UP-Bihar side ke liye best hai. Ek bakri 3-4 litre doodh deti hai. Lekin dhyan rahe, garmiyon mein inhein heat stress ka khatra rehta hai. Achha management chahiye.</li>
          <li><strong>Sirohi:</strong> Rajasthan jaise dry aur kam paani wale areas mein yeh kam chara mein bhi achha perform karti hai. Beginners ke liye yeh sabse safe option maani jati hai.</li>
          <li><strong>Beetal:</strong> Punjab-Haryana mein iski maang zyada hai. Maans ka rate achha milta hai, par inka maintenance cost thoda costly hai kyunki yeh size mein badi hoti hain.</li>
          <li><strong>Black Bengal:</strong> Chhote area ke liye badhiya hai. Yeh ek baar mein 2-3 bachhe deti hai, jisse flock size tezi se badhta hai.</li>
        </ul>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-5 my-6 rounded-r-lg not-prose shadow-sm">
          <h3 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2 text-sm">⚠️ Breed Final Karne Se Pehle Ye 4 Cheezein Check Karein:</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
            <li>Aapke local area ki climate ke hisaab se breed suit karti hai ya nahi.</li>
            <li>Local mandī mein kis breed ka rate aur demand zyada stable hai.</li>
            <li>Hare chara ki local availability aur uski cost.</li>
            <li>Aas-paas experienced veterinary support uplabdh hai ya nahi.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Chara aur Khuraak: Asli Kharcha Yahan Chhupa Hai
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Bakri khareedna aasaan hai. Par unhe sahi khuraak dena sabse bada operational challenge hai. Ek adult bakri ko rozana uske body weight ka 3-4% dry matter chahiye hota hai. 
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Agar aap roz mandī se mehenga hara chara laayenge, toh goat farming loan ki EMI chukana mushkil ho jayega. Profit margin khatam ho jayega. Meri salah yehi rahegi: Apni zameen par Napier grass, Maize (Kharif season mein), ya Berseem (Rabi season mein) ugana shuru karein. Silage banana seekh lein. Yeh aapke feed cost ko 40% tak kam kar dega.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Documents: Yahan 80% Applications Aksar Fail Hoti Hain
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          District level officers ke experience ke hisab se, applications aksar documents ki chhoti galtiyon ki wajah se reject ho jati hain. Koi bada fraud nahi, bas chhuki hui details.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
          <li><strong>Zameen ka kagaz:</strong> Sirf khatauni kaafi nahi hai. 5 saal ka registered lease agreement ya ownership proof chahiye. Naam match hona chahiye.</li>
          <li><strong>Supplier quotations:</strong> Yeh dated aur officially signed hone chahiye. Handwritten kagaz accept nahi hote.</li>
          <li><strong>DPR:</strong> Apne district ke registered veterinarian se banwana behtar hota hai. Unka stamp weight rakhta hai.</li>
          <li><strong>Geotagged photos:</strong> GPS location aur date ke saath photos chahiye. Bina metadata wali photos reject ho sakti hain.</li>
        </ul>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-5 my-6 rounded-r-lg not-prose shadow-sm">
          <p className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-3">Zaroori Documents Checklist (Screenshot le lein):</p>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>Aadhaar Card aur PAN Card (Self-attested)</li>
            <li>Zameen ka Kagaz: Registry, Khatauni, ya 5 saal ka registered Kiraya agreement</li>
            <li>Bank Passbook ki copy aur ek Cancelled Cheque</li>
            <li>Supplier ke original, stamped Quotations</li>
            <li><strong>Detailed Project Report (DPR)</strong> vet ke signature ke saath</li>
            <li>Farm site ki clear, geotagged photos</li>
          </ol>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          DPR Kaise Banayein? (Sabse Critical Step)
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Detailed Project Report koi rocket science nahi hai, lekin isme accuracy honi chahiye. Ek achhe bakri palan business plan mein ye cheezein crystal clear honi chahiye:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
          <li><strong>Capital Cost:</strong> Shed construction, feeding troughs, water tanks, aur chaff cutter ka exact, realistic quotation.</li>
          <li><strong>Recurring Cost:</strong> Pehle 6 mahine ka hara chara, concentrate feed, mineral mixture, aur labor ka kharcha.</li>
          <li><strong>Income Projection:</strong> Conservative rates use karein. 15-20% mortality rate ko include karna zaroori hai, warna officer aapke plan ko unrealistic maan kar reject kar dega.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Vaccination Schedule: Isme Mazak Nahi Chalta
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Ek chhota sa bimari ka outbreak pure flock ko khatam kar sakta hai. Yeh koi darawani baat nahi, ground reality hai.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
          <li><strong>PPR (Peste des Petits Ruminants):</strong> Har 6 mahine mein. Sabse zaroori. Sarkari dispansary mein aksar free milti hai.</li>
          <li><strong>Enterotoxaemia (ET):</strong> Saal mein ek baar, lambing se pehle dena behtar hota hai.</li>
          <li><strong>FMD (Muh aur Khur bukhar):</strong> Saal mein do baar (6 mahine ke gap par).</li>
          <li><strong>Deworming:</strong> Har 3 mahine mein regular karna chahiye taaki weight gain achha ho.</li>
        </ul>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-5 my-6 not-prose">
          <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3 text-sm">Biosecurity aur Disease Prevention Basics:</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>Farm ki main entry par foot bath (disinfectant) zaroor rakhein.</li>
            <li>Naye khareede gaye animals ko seedhe flock mein na milayein. 15-30 din alag quarantine karein.</li>
            <li>Regular farm cleaning aur disinfection ka routine banayein.</li>
            <li>Dead animals ko khule mein phenkne ke bajaye proper deep burial tarike se dispose karein.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Ek Saal Ka Realistic Hisab Kitab (100+5 Unit)
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Ground reality kuch aisi hoti hai (state-wise variation aur market rates ke hisab se badal sakta hai):
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
          <li><strong>Initial Investment:</strong> ₹15-18 Lakh (Jisme 50% subsidy + 50% loan ya apna paisa shamil hai).</li>
          <li><strong>Recurring Cost (Pehle 6 mahine):</strong> ₹3-4 Lakh (Chara, dawai, labor).</li>
          <li><strong>Income (Year 1 End):</strong> 90 bachhe bechne par ₹6-7 Lakh. Doodh ki bikri alag se ₹1-1.5 Lakh.</li>
          <li><strong>Net Result:</strong> Pehla saal thoda tight jayega setup cost ki wajah se. Doosre saal se profit margin 25-30% tak stabilize ho jata hai.</li>
        </ul>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-5 my-6 rounded-r-lg not-prose shadow-sm">
          <h3 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2 text-sm">💰 Cash-Flow Planning Before Subsidy Release:</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
            <li>Subsidy aane mein 4-6 mahine aaram se lag sakte hain. Sabr rakhein.</li>
            <li>Pehli 6 mahine ka operating cost apni pocket se ya loan se pehle se plan karein.</li>
            <li>Ek chhota emergency fund rakhein (kam se kam 3 mahine ka kharcha).</li>
            <li>Loan EMI chukane ke liye koi alternate income source ghar mein rakhein.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Apply Kaise Karein? (Asli Step-by-Step Process)
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Official portal hai: <a href="https://nlm.udyamimitra.in" className="text-blue-600 hover:underline dark:text-blue-400 font-semibold" target="_blank" rel="noopener noreferrer" aria-label="Visit NLM Udyamimitra Portal for Goat Farming Subsidy">nlm.udyamimitra.in</a>
        </p>
        <ol className="list-decimal pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
          <li>Sabse pehle, apna DPR local registered vet se banwa lein.</li>
          <li>Portal par jaakar naya registration karein. OTP aane mein kabhi kabhi time lagta hai, ghabrayein nahi.</li>
          <li>Saare documents scan karke upload karein (PDF format, size 2MB se kam rakhein).</li>
          <li>Form submit karte hi acknowledgment number ka screenshot le kar save kar lein.</li>
          <li>Ab 3-4 mahine ka wait hoga. Is dauran district officer ka site visit hoga.</li>
          <li>Approval aane ke baad, aapko bills submit karne honge tabhi paisa release hoga.</li>
        </ol>

        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-5 my-6 rounded-r-lg not-prose shadow-sm">
          <h3 className="font-bold text-red-800 dark:text-red-300 mb-2 text-sm">🚫 Common Mistakes During Site Inspection:</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
            <li>Officer ke aane se pehle farm ya shed puri tarah ready nahi hota.</li>
            <li>Quotation mein jo equipment dikhaya tha, wo actually khareeda nahi gaya.</li>
            <li>Bakriyon ki actual count quoted number se kaafi kam hai.</li>
            <li>Documents ki original copies farm site par available nahi hain.</li>
          </ul>
        </div>

        <Image 
          src="/images/kisanguides/goat-farming-shed-construction.webp"
          alt="Proper Goat Farming Shed Construction under NLM Subsidy Guidelines 2026"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className="rounded-xl shadow-md mb-8 w-full object-cover not-prose"
        />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Aksar Puche Jane Wale Sawal (FAQs)
        </h2>
        <div className="space-y-3 my-8 not-prose">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.q} answer={faq.a} />
          ))}
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl my-8 not-prose border border-blue-200 dark:border-blue-800 shadow-sm">
          <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-4 text-sm uppercase tracking-wide">Official Sarkari Links & Resources</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <strong className="block mb-1">Online Apply karne ki official jagah:</strong>
              <ExternalLinkButton 
                url="https://nlm.udyamimitra.in"
                label="NLM Udyamimitra Portal"
              />
            </li>
            <li>
              <strong className="block mb-1">Latest Guidelines aur updates ke liye:</strong>
              <a href="https://dahd.gov.in" className="text-blue-600 hover:underline dark:text-blue-400 inline-flex items-center gap-1 font-medium" target="_blank" rel="noopener noreferrer" aria-label="Visit Department of Animal Husbandry and Dairying official website">
                dahd.gov.in (Department of Animal Husbandry) ↗
              </a>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Akhir Mein: Ek Successful Farm Ka Asli Raaz
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Dekhiye, bakri palan mein paisa tabhi hai jab aap isse ek serious business ki tarah treat karo. Emotion se zyada documentation par dhyan do. Vet ki salah ko ignore mat karo, aur shuruat mein thoda patience rakho. Raaton-raat ameer banne wali koi scheme nahi hai.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          Agar aap aage chalkar meat process karke apna brand banana chahte hain, toh <Link href="/articles/pm-fme-yojana-food-processing" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">PM FME Yojana</Link> zaroor dekhna. Aur haan, bakri ka gobar fekna mat. Use <Link href="/articles/vermi-compost-business-guide" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">Vermi Compost</Link> bana ke bech do, yeh ek alag se extra income source ban jayega.
        </p>

        <div className="mt-12 pt-8 border-t-2 border-gray-200 dark:border-gray-700 not-prose">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
            <span className="text-3xl" aria-hidden="true">📚</span>
            Aage Kya Padhein? (Related Guides)
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
            In verified guides se aapke overall farming business ko aur clarity milegi:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/articles/madhumakhi-palan-kvic-subsidy" className="group flex flex-col bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl group-hover:scale-110 transition-transform" aria-hidden="true">🐝</span>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">Madhumakhi Palan</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">KVIC subsidy ke saath shahad ka profitable business kaise shuru karein.</p>
            </Link>

            <Link href="/articles/pm-matsya-sampada-yojana-fish-farming" className="group flex flex-col bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl group-hover:scale-110 transition-transform" aria-hidden="true">🐟</span>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">PM Matsya Sampada</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">Machli palan par 60% tak subsidy aur complete loan process.</p>
            </Link>

            <Link href="/articles/drip-sprinkler-irrigation-subsidy" className="group flex flex-col bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl group-hover:scale-110 transition-transform" aria-hidden="true">💧</span>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Drip Irrigation</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">PMKSY ke tahat chara ugane ke liye 75% tak subsidy.</p>
            </Link>
          </div>
        </div>

        <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-xl border-l-4 border-orange-500 not-prose shadow-sm">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong className="text-orange-600 dark:text-orange-400 block mb-2">Disclaimer:</strong>
            Yeh article sirf jankari aur educational guidance ke liye hai. Eligibility, subsidy limits, aur rules state guidelines ke anusaar kabhi bhi badal sakte hain. Apply karne se pehle hamesha latest NLM/DAHD guidelines apne nearest animal husbandry office se check karein. Last updated: July 2026.
          </p>
        </div>
      </article>
    </>
  );
}