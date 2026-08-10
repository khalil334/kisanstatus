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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Kya main bina zameen ke bakri palan subsidy le sakta hoon?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nahi. Apni zameen ya kam se kam 5 saal ka registered lease agreement dikhana padta hai. Land proof ke bina application shuru mein hi ruk jaati hai.',
        },
      },
      {
        '@type': 'Question',
        name: 'Backyard mein 10-15 bakriyan hain, kya mujhe NLM subsidy milegi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nahi milegi. National Livestock Mission ka threshold 100 female aur 5 male bakriyan hai. Chhote setup ke liye apne district ke Pashu Palan vibhag ki alag schemes dekhni padegi.',
        },
      },
      {
        '@type': 'Question',
        name: 'Subsidy ka paisa kitne din mein bank account mein aata hai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Jaldi nahi aata. Approval aur site visit mein hi 2-3 mahine nikal jaate hain, aur paisa do tranches mein aata hai. Poore 4-6 mahine ka wait dhyan mein rakhein.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kya main bank loan ke saath NLM subsidy le sakta hoon?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Haan, aur zyadatar log yahi karte hain. 50% sarkar deti hai, baaki 50% KCC ya normal loan se. Subsidy seedhe account mein aati hai, bank beech mein nahi rukti.',
        },
      },
      {
        '@type': 'Question',
        name: 'Bihar ya UP se bahar ke state se bakriyan mangwa sakte hain kya?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mangwa sakte hain, par quarantine certificate aur vehicle fitness certificate saath rakhna padega. Warna transport illegal maana jata hai aur checkpoint par pakde jaate hain.',
        },
      },
      {
        '@type': 'Question',
        name: 'Agar meri NLM application reject ho gayi, toh kya main dobara apply kar sakta hoon?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Haan. Portal par reject hone ki wajah likhi milti hai. Wo galti thik karo, dobara documents lagao, submit kar do. Koi ban nahi lagta.',
        },
      },
      {
        '@type': 'Question',
        name: 'Bakri Palan Yojana 2026 ki last date kya hai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'NLM mein ek fixed last date nahi hoti — portal financial year ke hisab se saal bhar applications leta hai, jab tak us cycle ka budget khatam nahi ho jata. State ke Pashu Palan office se current status confirm kar lena sabse safe rahega.',
        },
      },
    ],
  };

  const faqs = [
    {
      q: 'Kya main bina zameen ke bakri palan subsidy le sakta hoon?',
      a: 'Nahi. Apni zameen ya kam se kam 5 saal ka registered lease agreement chahiye hi hoga. Bahut log ye samajh kar apply karte hain ki khatauni kaafi hai, aur wahi pe fas jaate hain.',
    },
    {
      q: 'Backyard mein 10-15 bakriyan hain, kya mujhe NLM subsidy milegi?',
      a: 'Nahi. Yahan 100 female + 5 male ka minimum hai. Aapke jaise chhote setup ke liye state-level micro-schemes zyada practical rahegi.',
    },
    {
      q: 'Subsidy ka paisa kitne din mein account mein aata hai?',
      a: 'Approval mein hi 2-3 mahine chale jaate hain. Fir paisa ek saath nahi, do hisson mein aata hai. Total mila ke 4-6 mahine — plan waisa hi rakhna.',
    },
    {
      q: 'Bank loan ke saath subsidy le sakte hain kya?',
      a: (
        <>
          Bilkul, aur ye common practice hai. 50% subsidy, 50% loan.{' '}
          <Link href="/articles/KisanCreditCardOnlineApply2026" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">
            KCC Loan Guide
          </Link>{' '}
          mein poora tarika likha hai.
        </>
      ),
    },
    {
      q: 'Bahar ke state se bakriyan mangwane par kya documents chahiye?',
      a: 'Quarantine certificate aur vehicle fitness certificate — dono zaroori. Bina inke transport illegal count hota hai.',
    },
    {
      q: 'Application reject ho gayi, dobara apply kar sakte hain?',
      a: 'Kar sakte hain, aksar log karte bhi hain. Portal reason bata deta hai, wo fix karo aur fir se bhej do.',
    },
    {
      q: 'Bakri Palan Yojana 2026 ki last date kya hai?',
      a: 'Fixed last date nahi hai. Portal saal bhar applications leta hai, financial year ke budget khatam hone tak. Apne state ke Pashu Palan office se current status zaroor confirm kar lena.',
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-4xl mx-auto px-4 py-8 prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-blue-600 dark:prose-a:text-blue-400">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 leading-tight">
          Bakri Palan Yojana 2026: 50% NLM Subsidy Lene Ka Sahi Tarika aur Complete Guide
        </h1>

        <div className="mb-8 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-600 not-prose shadow-sm">
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-0">
            Zyada applications fraud ki wajah se reject nahi hoti. Ek gayab document, ek galat naam, ek photo jisme date nahi thi — bas itna hi kaafi hota hai. Ye guide isi ko sudharne ke liye hai.
          </p>
        </div>

        <Image
          src="/images/kisanguides/bakri-palan-nlm-subsidy.webp"
          alt="NLM Bakri Palan Yojana 2026 - Farmer with goats receiving 50% subsidy under National Livestock Mission"
          width={800}
          height={450}
          priority
          sizes="(max-width: 768px) 100vw, 800px"
          className="rounded-xl shadow-md mb-8 w-full object-cover not-prose"
        />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          2021 Ke Baad Scheme Badal Gayi Hai
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Purani scheme mein sarkar seedhe bakriyan de deti thi. Koi business plan nahi, koi accountability nahi. Natija? Do-teen saal mein aadhe se zyada units band ho gaye — na shed sahi tha, na khuraak ka hisaab.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Ab NLM 2.0 mein Department of Animal Husbandry &amp; Dairying ye dekhna chahta hai ki farm ek business ki tarah chale, charity ki tarah nahi. Base subsidy 50% hai. Mahila kisan ya SC/ST category mein ho toh state guidelines ke hisab se ye 60% tak bhi jaa sakti hai.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Kitni Bakriyan Chahiye?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
          Ye sawal sabse zyada aata hai: "Mere paas 20-30 bakriyan hain, chalega?"
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Nahi chalega. Minimum 100 female aur 5 male. Wajah simple hai — koi bhi officer 10-15 bakriyon ke liye poora din site visit mein nahi lagayega, uska hisaab hi nahi banta. Setup chhota hai toh NLM chhod kar apne district ki Pashu Palan schemes dekho, wahan bar kaafi neeche hota hai.
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
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">Note: figures approximate hain, state ke hisab se badalte hain. Apply se pehle district office se confirm kar lena.</p>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Breed Chunte Waqt Jaldi Mat Karo
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          YouTube pe kisi ka video dekh kar breed final mat karo. Jo Punjab mein chal rahi hai wo Rajasthan ke sookhe ilake mein flop bhi ho sakti hai. Har breed ka apna mizaaj hota hai.
        </p>
        <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300 mb-6">
          <li><strong>Jamunapari:</strong> UP-Bihar ke liye badhiya, 3-4 litre doodh rozana. Garmi mein heat stress ka dar rehta hai, shed mein hawa ka rasta chhod dena.</li>
          <li><strong>Sirohi:</strong> Rajasthan jaisi sookhi jagah ke liye — kam chara mein bhi chal jaati hai. Naye farmers ke liye sabse safe.</li>
          <li><strong>Beetal:</strong> Punjab-Haryana mein demand achhi, rate bhi. Size badi hai toh khana bhi zyada khaati hai.</li>
          <li><strong>Black Bengal:</strong> Chhoti zameen wale ke liye theek. Ek baar mein 2-3 bachhe deti hai, flock jaldi badhta hai.</li>
        </ul>

        <Image
          src="/images/kisanguides/goat-farming-shed-construction.webp"
          alt="Goat farming shed and housing setup for different breeds under NLM subsidy"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className="rounded-xl shadow-md mb-8 w-full object-cover not-prose"
        />

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-5 my-6 rounded-r-lg not-prose shadow-sm">
          <h3 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2 text-sm">⚠️ Breed Final Karne Se Pehle:</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
            <li>Local climate suit karta hai ya nahi, dekh lo.</li>
            <li>Mandi mein us breed ka rate stable rehta hai ya upar-neeche hota rehta hai.</li>
            <li>Hara chara wahan kitna aasani se milta hai.</li>
            <li>Koi achha vet aas-paas hai ya sabse pehle Google karna padega.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Chara: Kharcha Yahin Chhupa Hota Hai
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Bakri khareedna toh aasaan hai. Roz khilaana asli kaam hai. Ek adult bakri ko body weight ka 3-4% dry matter rozana chahiye. 100 bakriyon pe jod ke dekho — figure chhota nahi rehta.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Roz mandi se hara chara khareedoge toh EMI aur profit dono pareshan honge. Behtar hai apni zameen ke ek tukde pe khud ugao — Kharif mein Maize, Rabi mein Berseem, saal bhar Napier grass. Silage banana bhi seekh lo, lean season mein wahi bachata hai.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Documents: Zyadatar Yahin Fasti Hai Baat
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Reject hui applications ka pattern uthao toh ek hi baat baar-baar dikhti hai — koi bada scam nahi, sirf adhoora ya bemel paperwork.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
          <li><strong>Zameen ka kagaz:</strong> khatauni akela kaafi nahi. 5 saal ka registered lease ya ownership proof, naam match hona chahiye.</li>
          <li><strong>Supplier quotations:</strong> dated, signed, official. Haath se likha kagaz chalta nahi.</li>
          <li><strong>DPR:</strong> district ke registered vet se banwana behtar — unka stamp weight rakhta hai.</li>
          <li><strong>Geotagged photos:</strong> GPS aur date ke saath. Plain photo reject ho sakti hai.</li>
        </ul>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-5 my-6 rounded-r-lg not-prose shadow-sm">
          <p className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-3">Documents Checklist (Screenshot le lo):</p>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>Aadhaar aur PAN Card (self-attested)</li>
            <li>Zameen ka kagaz — registry, khatauni, ya registered kiraya agreement</li>
            <li>Bank passbook copy + cancelled cheque</li>
            <li>Supplier ke original stamped quotations</li>
            <li>DPR, vet ke signature ke saath</li>
            <li>Farm site ki geotagged photos</li>
          </ol>
        </div>

        <Image
          src="/images/kisanguides/documents-checklist.webp"
          alt="NLM subsidy application documents checklist - Aadhaar, land papers, bank details, and DPR requirements"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className="rounded-xl shadow-md mb-8 w-full object-cover not-prose"
        />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          DPR — Sabse Important Kaam
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          DPR banana rocket science nahi hai. Bas numbers phule-phule nahi hone chahiye, warna officer ko shak ho jata hai. Teen cheez clear honi chahiye:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
          <li><strong>Capital Cost:</strong> shed, feeding trough, water tank, chaff cutter — actual quotation ke saath.</li>
          <li><strong>Recurring Cost:</strong> pehle 6 mahine ka chara, feed, mineral mixture, labor.</li>
          <li><strong>Income Projection:</strong> conservative rakho. 15-20% mortality dikhao, warna plan unrealistic lagega.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Vaccination — Isme Chhutti Nahi Chalti
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Ek outbreak pura flock saaf kar sakta hai. Darane wali baat nahi, seedhi si sachai hai. Inspection mein vaccination record bhi documents jitna hi dekha jata hai.
        </p>

        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
          <li><strong>PPR:</strong> har 6 mahine. Sabse zaroori, sarkari dispansary mein aksar free milti hai.</li>
          <li><strong>Enterotoxaemia:</strong> saal mein ek baar, lambing se pehle.</li>
          <li><strong>FMD:</strong> saal mein do baar, 6 mahine ke gap se.</li>
          <li><strong>Deworming:</strong> har 3 mahine, weight gain ke liye zaroori.</li>
        </ul>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-5 my-6 not-prose">
          <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3 text-sm">Biosecurity Basics:</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>Entry gate pe foot bath rakho.</li>
            <li>Naye animals seedhe flock mein mat milao — 15-30 din alag rakho.</li>
            <li>Farm regular saaf karo, disinfect karo.</li>
            <li>Mari hui bakri ko khule mein mat chhodo, deep burial karo.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Ek Saal Ka Hisaab (100+5 Unit)
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          State aur mandi rate se numbers thode upar-neeche honge, par rough picture kuch aisa hai:
        </p>

        <Image
          src="/images/kisanguides/nlm-subsidy-calculation.webp"
          alt="NLM bakri palan subsidy calculation - 50% subsidy on project cost, ROI and profit estimation breakdown"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className="rounded-xl shadow-md mb-8 w-full object-cover not-prose"
        />

        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
          <li><strong>Initial Investment:</strong> ₹15-18 Lakh (50% subsidy + baaki loan ya apna paisa)</li>
          <li><strong>Recurring Cost (pehle 6 mahine):</strong> ₹3-4 Lakh</li>
          <li><strong>Income (Year 1):</strong> 90 bachhe bech ke ₹6-7 Lakh, doodh se alag ₹1-1.5 Lakh</li>
          <li><strong>Net Result:</strong> pehla saal tight rehta hai setup cost ki wajah se. Doosre saal se margin 25-30% pe stabilize hota hai.</li>
        </ul>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-5 my-6 rounded-r-lg not-prose shadow-sm">
          <h3 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2 text-sm">💰 Cash-Flow Se Pehle Ye Soch Lo:</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
            <li>Subsidy aane mein 4-6 mahine lag sakte hain, sabr rakho.</li>
            <li>Pehle 6 mahine ka kharcha apni pocket ya loan se pehle hi plan kar lo.</li>
            <li>3 mahine ka emergency fund side mein rakho.</li>
            <li>EMI ke liye koi doosra income source ghar mein ho toh achha rahega.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Apply Kaise Karein — Online Registration Ka Process
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Portal: <a href="https://nlm.udyamimitra.in" className="text-blue-600 hover:underline dark:text-blue-400 font-semibold" target="_blank" rel="noopener noreferrer" aria-label="Visit NLM Udyamimitra Portal for Goat Farming Subsidy">nlm.udyamimitra.in</a>
        </p>
        <ol className="list-decimal pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
          <li>DPR pehle vet se banwa lo.</li>
          <li>Portal pe registration karo. OTP kabhi late aata hai, ghabrana nahi.</li>
          <li>Documents scan karke upload karo — PDF, 2MB se kam.</li>
          <li>Submit karte hi acknowledgment number ka screenshot le lo.</li>
          <li>3-4 mahine wait, isi beech officer site visit karega.</li>
          <li>Approval ke baad bills submit karo, tabhi paisa aayega.</li>
        </ol>

        <Image
          src="/images/kisanguides/nlm-application-help.webp"
          alt="NLM Udyamimitra portal application process - step by step online registration and form submission guide"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className="rounded-xl shadow-md mb-8 w-full object-cover not-prose"
        />

        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-5 my-6 rounded-r-lg not-prose shadow-sm">
          <h3 className="font-bold text-red-800 dark:text-red-300 mb-2 text-sm">⚠️ Site Inspection Mein Ye Galtiyan Baar-Baar Hoti Hain:</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
            <li>Officer aane tak shed poora ready nahi hota.</li>
            <li>Quotation mein dikhaya equipment asal mein khareeda nahi gaya.</li>
            <li>Bakriyon ki ginti quoted number se kam nikalti hai.</li>
            <li>Original documents farm pe nahi milte, ghar pe rakh diye hote hain.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          FAQs
        </h2>
        <div className="space-y-3 my-8 not-prose">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.q} answer={faq.a} />
          ))}
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl my-8 not-prose border border-blue-200 dark:border-blue-800 shadow-sm">
          <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-4 text-sm uppercase tracking-wide">Official Links</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <strong className="block mb-1">Apply karne ki jagah:</strong>
              <ExternalLinkButton
                url="https://nlm.udyamimitra.in"
                label="NLM Udyamimitra Portal"
              />
            </li>
            <li>
              <strong className="block mb-1">Latest guidelines:</strong>
              <a href="https://dahd.gov.in" className="text-blue-600 hover:underline dark:text-blue-400 inline-flex items-center gap-1 font-medium" target="_blank" rel="noopener noreferrer" aria-label="Visit Department of Animal Husbandry and Dairying official website">
                dahd.gov.in ↗
              </a>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Aakhri Baat
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Paisa tabhi banta hai jab bakri palan ko business ki tarah loge, shauk ki tarah nahi. Documentation pe dhyan do, vet ki baat suno, shuruat mein patience rakho. Raaton-raat kuch nahi hota. Jo 2-3 saal tik jaate hain, wahi profit dekhte hain.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          Aage meat processing ka brand banana ho toh <Link href="/articles/pm-fme-yojana-food-processing" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">PM FME Yojana</Link> dekh lena. Aur gobar fekna mat — <Link href="/articles/vermi-compost-business-guide" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">Vermi Compost</Link> bana ke bech do, extra income ban jayega.
        </p>

        <div className="mt-12 pt-8 border-t-2 border-gray-200 dark:border-gray-700 not-prose">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
            <span className="text-3xl" aria-hidden="true">📚</span>
            Aage Kya Padhein?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
            Related guides jo kaam aayengi:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/articles/madhumakhi-palan-kvic-subsidy" className="group flex flex-col bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl group-hover:scale-110 transition-transform" aria-hidden="true">🐝</span>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">Madhumakhi Palan</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">KVIC subsidy ke saath shahad ka business.</p>
            </Link>

            <Link href="/articles/pm-matsya-sampada-yojana-fish-farming" className="group flex flex-col bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl group-hover:scale-110 transition-transform" aria-hidden="true">🐟</span>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">PM Matsya Sampada</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">Machli palan par 60% tak subsidy.</p>
            </Link>

            <Link href="/articles/drip-sprinkler-irrigation-subsidy" className="group flex flex-col bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl group-hover:scale-110 transition-transform" aria-hidden="true">💧</span>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Drip Irrigation</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">Chara ugane ke liye 75% tak subsidy.</p>
            </Link>
          </div>
        </div>

        <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-xl border-l-4 border-orange-500 not-prose shadow-sm">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong className="text-orange-600 dark:text-orange-400 block mb-2">Disclaimer:</strong>
            Yeh article sirf jankari ke liye hai. Eligibility, subsidy limits, aur rules state ke hisab se badal sakte hain. Apply karne se pehle latest guidelines apne district animal husbandry office se check kar lena. Last updated: August 2026.
          </p>
        </div>
      </article>
    </>
  );
}
