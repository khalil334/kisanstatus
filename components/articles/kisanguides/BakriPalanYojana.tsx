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
    headline: 'Bakri Palan Yojana 2026: 50% NLM Subsidy Guide',
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
    dateModified: '2026-08-02',
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
          text: 'Nahi. Apni zameen ya kam se kam 5 saal ka registered lease agreement dikhana anivarya hai. Sirf khatauni dikhane par application shuru mein hi reject ho jaati hai.',
        },
      },
      {
        '@type': 'Question',
        name: 'Backyard mein 10-15 bakriyan hain, kya mujhe NLM subsidy milegi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nahi. National Livestock Mission ka minimum threshold 100 female aur 5 male bakriyan hai. Chhote setup ke liye apne district ke Pashu Palan vibhag ki micro-schemes zyada practical rahengi.',
        },
      },
      {
        '@type': 'Question',
        name: 'Subsidy ka paisa kitne din mein bank account mein aata hai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Isme thoda sabr rakhna padta hai. Approval aur site visit mein hi 2-3 mahine nikal jaate hain. Paisa do tranches (kiston) mein aata hai, isliye poore 4-6 mahine ka wait dhyan mein rakhein.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kya main bank loan ke saath NLM subsidy le sakta hoon?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Haan, aur zyadatar successful farmers yahi karte hain. 50% cost sarkar subsidy ke roop mein deti hai, baaki 50% Kisan Credit Card (KCC) ya normal loan se manage hota hai. Subsidy seedhe aapke account mein aati hai.',
        },
      },
      {
        '@type': 'Question',
        name: 'Bihar ya UP se bahar ke state se bakriyan mangwa sakte hain kya?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Haan, mangwa sakte hain. Lekin saath mein valid quarantine certificate aur vehicle fitness certificate rakhna anivarya hai. Inke bina transport illegal maana jata hai aur checkpoints par pareshani ho sakti hai.',
        },
      },
      {
        '@type': 'Question',
        name: 'Agar meri NLM application reject ho gayi, toh kya main dobara apply kar sakta hoon?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bilkul. Portal par reject hone ki specific wajah likhi milti hai. Wo kami thik karein, documents dobara lagayein aur submit kar dein. Is par koi permanent ban nahi lagta.',
        },
      },
      {
        '@type': 'Question',
        name: 'Bakri Palan Yojana 2026 ki last date kya hai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'NLM mein koi fixed last date nahi hoti. Portal financial year ke hisab se saal bhar applications leta hai, jab tak us cycle ka budget khatam nahi ho jata. Apne state ke Pashu Palan office se current fund status confirm karna sabse safe option hai.',
        },
      },
    ],
  };

  const faqs = [
    {
      q: 'Kya main bina zameen ke bakri palan subsidy le sakta hoon?',
      a: 'Nahi. Apni zameen ya kam se kam 5 saal ka registered lease agreement chahiye hi hoga. Bahut log ye samajh kar apply karte hain ki sirf khatauni kaafi hai, aur wahi pe file atak jaati hai.',
    },
    {
      q: 'Backyard mein 10-15 bakriyan hain, kya mujhe NLM subsidy milegi?',
      a: 'Nahi. Yahan minimum limit 100 female + 5 male hai. Aapke jaise chhote setup ke liye state-level micro-schemes ya district schemes zyada practical aur beneficial rahengi.',
    },
    {
      q: 'Subsidy ka paisa kitne din mein account mein aata hai?',
      a: 'Approval process mein hi 2-3 mahine chale jaate hain. Fir paisa ek saath nahi, balki do hisson (tranches) mein aata hai. Total mila ke 4-6 mahine ka wait dhyan mein rakh kar hi plan banayein.',
    },
    {
      q: 'Bank loan ke saath subsidy le sakte hain kya?',
      a: (
        <>
          Bilkul, aur ye sabse common aur safe practice hai. 50% subsidy, 50% loan.{' '}
          <Link href="/articles/KisanCreditCardOnlineApply2026" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">
            KCC Loan Guide
          </Link>{' '}
          mein poora process detail mein likha hai.
        </>
      ),
    },
    {
      q: 'Bahar ke state se bakriyan mangwane par kya documents chahiye?',
      a: 'Valid quarantine certificate aur vehicle fitness certificate — dono anivarya hain. Bina inke animal transport illegal count hota hai aur checkpoints par heavy fine lag sakta hai.',
    },
    {
      q: 'Application reject ho gayi, dobara apply kar sakte hain?',
      a: 'Haan, aksar log doosri baar mein pass bhi ho jaate hain. Portal aapko specific reason bata deta hai. Wo kami thik karein aur fir se bhej dein.',
    },
    {
      q: 'Bakri Palan Yojana 2026 ki last date kya hai?',
      a: 'Koi fixed last date nahi hai. Portal saal bhar applications leta hai, jab tak financial year ka budget khatam nahi ho jata. Apne state ke Pashu Palan office se current fund status zaroor confirm kar lein.',
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-4xl mx-auto px-4 py-8 prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-blue-600 dark:prose-a:text-blue-400">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 leading-tight">
          Bakri Palan Yojana 2026: 50% NLM Subsidy Guide
        </h1>

        <div className="mb-8 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-600 not-prose shadow-sm">
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-0">
            Sach baat ye hai ki zyadatar NLM applications fraud ki wajah se nahi, balki chhoti chukon ki wajah se reject hoti hain. Ek missing document, mismatched naam, ya bina date wali photo — aur file wahiin atak jaati hai. Is guide mein hum inhi practical galtiyan ko sudharne par focus karenge.
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
          2021 Ke Baad Scheme Ka Focus Badal Gaya Hai
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Pehle sarkar seedhe bakriyan baant deti thi, jiska natija hum sab jaante hain. Bina business plan ke aadhe se zyada units do-teen saal mein band ho gaye. Ab NLM 2.0 ka focus 'business' par hai, charity par nahi. Department of Animal Husbandry ab ye dekhna chahta hai ki aapka farm sustain ho sake. Base subsidy 50% milti hai, aur agar aap Mahila Kisan ya SC/ST category se hain, toh state guidelines ke mutabik ye 60% tak bhi ja sakti hai.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Kitni Bakriyan Chahiye?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
          Sabse common sawal: "Mere paas 20-30 bakriyan hain, kya subsidy milegi?"
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Seedha jawab hai: Nahi. NLM ka minimum threshold 100 female aur 5 male bakriyan hai. Koi bhi veterinary officer 15-20 bakriyon ke liye poora din site visit mein nahi laga sakta. Agar aapka setup chhota hai, toh is scheme ke chakkar mein padne ke bajaye apne district ke Pashu Palan vibhag ki micro-schemes check karein, wahan criteria kaafi relaxed hota hai.
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
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">Note: Ye figures approximate hain aur state ke hisab se badal sakte hain. Apply karne se pehle district office se confirm zaroor kar lein.</p>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Breed Chunte Waqt Jaldi Mat Karo
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          YouTube videos dekh kar breed final karna sabse badi galti hai. Jo breed Punjab mein profitable hai, wo Rajasthan ke sookhe ilake mein ghatiye performance de sakti hai. Har breed ka apna ek 'mizaaj' aur climate requirement hota hai.
        </p>
        <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300 mb-6">
          <li><strong>Jamunapari:</strong> UP-Bihar ke liye behtareen, lekin garmi mein heat stress ka khatra rehta hai. Shed mein cross-ventilation zaroori hai.</li>
          <li><strong>Sirohi:</strong> Rajasthan aur sookhe ilakon ke liye perfect. Kam chara mein bhi adjust ho jaati hai, isliye beginners ke liye sabse safe option hai.</li>
          <li><strong>Beetal:</strong> Punjab-Haryana belt mein iski demand aur rate dono achhe hain, lekin size badi hone ke karan iska feed cost bhi zyada hai.</li>
          <li><strong>Black Bengal:</strong> Kam zameen wale farmers ke liye ideal. Ek baar mein 2-3 bachhe deti hai, jisse flock tezi se badhta hai.</li>
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
          <h3 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2 text-sm">⚠️ Breed Final Karne Se Pehle Ye Check Karein:</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
            <li>Local climate us breed ke liye suit karta hai ya nahi.</li>
            <li>Mandi mein us breed ka rate stable rehta hai ya upar-neeche hota rehta hai.</li>
            <li>Hara chara wahan kitna aasani se aur saste mein milta hai.</li>
            <li>Koi achha vet aas-paas hai ya sabse pehle Google karna padega.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Chara Management: Kharcha Yahin Chhupa Hota Hai
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Bakri khareedna aasaan hai. Asli imtihaan roz unhe khilaana hai. Ek adult bakri ko apne body weight ka 3-4% dry matter roz chahiye hota hai. 100 bakriyon ka hisaab lagayein, toh figure bilkul bhi chhota nahi rehta.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Roz mandi se hara chara khareedenge toh EMI aur profit dono dabav mein aa jayenge. Behtar yahi hai ki apni zameen ke ek chhote hisse par khud chara ugayein — Kharif mein Maize, Rabi mein Berseem, aur saal bhar Napier grass. Silage banana seekh lena, kyunki lean season mein yahi aapko bachata hai.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Documents: Zyadatar Yahin Fasti Hai Baat
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Reject hone wali applications ka pattern gaur se dekhein toh ek hi baat baar-baar saamne aati hai — koi bada scam nahi, bas adhoora ya mismatched paperwork. In documents ka intezaar pehle se kar lein, kyunki last minute par yahi sabse zyada pareshan karte hain:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
          <li><strong>Zameen ka kagaz:</strong> Sirf khatauni kaafi nahi hai. 5 saal ka registered lease agreement ya ownership proof chahiye, jisme applicant ka naam match kare.</li>
          <li><strong>Supplier Quotations:</strong> Dated, signed, aur official letterhead par. Haath se likha kagaz accept nahi hota.</li>
          <li><strong>DPR (Detailed Project Report):</strong> Ise district ke registered vet se banwana behtar hai, kyunki unka stamp aur signature file mein weight rakhta hai.</li>
          <li><strong>Geotagged Photos:</strong> GPS coordinates aur date ke saath. Plain mobile photos aksar reject ho jaati hain.</li>
        </ul>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-5 my-6 rounded-r-lg not-prose shadow-sm">
          <p className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-3">Documents Checklist (Screenshot le lein):</p>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>Aadhaar aur PAN Card (self-attested)</li>
            <li>Zameen ka kagaz — registry, khatauni, ya registered kiraya agreement</li>
            <li>Bank passbook copy + cancelled cheque</li>
            <li>Supplier ke original stamped quotations</li>
            <li>DPR, registered vet ke signature ke saath</li>
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
          DPR banana koi rocket science nahi hai, lekin isme numbers 'phule-phule' nahi hone chahiye, warna inspecting officer ko shak ho jata hai. Teen cheezein crystal clear honi chahiye:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
          <li><strong>Capital Cost:</strong> Shed, feeding trough, water tank, chaff cutter — sab actual quotation ke saath.</li>
          <li><strong>Recurring Cost:</strong> Pehle 6 mahine ka chara, feed, mineral mixture, aur labor cost.</li>
          <li><strong>Income Projection:</strong> Conservative rakhein. 15-20% mortality rate dikhayein, warna plan unrealistic lagega.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Vaccination — Isme Chhutti Nahi Chalti
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Ek chhota sa outbreak poore flock ko saaf kar sakta hai. Ye darane ke liye nahi, seedhi sachai hai. Inspection ke dauran vaccination record utna hi dhyan se check kiya jata hai jitna ki financial documents.
        </p>

        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
          <li><strong>PPR:</strong> Har 6 mahine mein (sabse zaroori, sarkari dispensary mein aksar free milti hai).</li>
          <li><strong>Enterotoxaemia:</strong> Saal mein ek baar, lambing se pehle.</li>
          <li><strong>FMD:</strong> Saal mein do baar, 6 mahine ke gap se.</li>
          <li><strong>Deworming:</strong> Har 3 mahine mein, healthy weight gain ke liye anivarya hai.</li>
        </ul>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-5 my-6 not-prose">
          <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3 text-sm">Biosecurity Basics:</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>Entry gate pe foot bath rakho.</li>
            <li>Naye animals seedhe flock mein mat milao — 15-30 din alag rakho (quarantine).</li>
            <li>Farm regular saaf karo aur disinfect karo.</li>
            <li>Mari hui bakri ko khule mein mat chhodo, deep burial karo.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Ek Saal Ka Hisaab (100+5 Unit)
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          State aur local mandi rates ke hisaab se numbers thode upar-neeche ho sakte hain, lekin ek rough picture kuch aisi dikhti hai:
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
          <li><strong>Initial Investment:</strong> ₹15-18 Lakh (50% subsidy + baaki loan ya apna capital)</li>
          <li><strong>Recurring Cost (Pehle 6 mahine):</strong> ₹3-4 Lakh</li>
          <li><strong>Income (Year 1):</strong> 90 bachhe bech kar ₹6-7 Lakh, doodh se alag ₹1-1.5 Lakh</li>
          <li><strong>Net Result:</strong> Pehla saal setup cost ki wajah se thoda tight rehta hai. Doosre saal se margin 25-30% par stabilize hone lagta hai.</li>
        </ul>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-5 my-6 rounded-r-lg not-prose shadow-sm">
          <h3 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2 text-sm">💰 Cash-Flow Se Pehle Ye Soch Lein:</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
            <li>Subsidy aane mein 4-6 mahine lag sakte hain, isliye sabr rakhein.</li>
            <li>Pehle 6 mahine ka kharcha apni pocket ya loan se pehle hi plan kar lein.</li>
            <li>3 mahine ka emergency fund side mein rakhein.</li>
            <li>EMI ke liye ghar mein koi doosra income source ho toh achha rahega.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
          Apply Kaise Karein — Online Registration Process
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Official Portal: <a href="https://nlm.udyamimitra.in" className="text-blue-600 hover:underline dark:text-blue-400 font-semibold" target="_blank" rel="noopener noreferrer" aria-label="Visit NLM Udyamimitra Portal for Goat Farming Subsidy">nlm.udyamimitra.in</a>
        </p>
        <ol className="list-decimal pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
          <li>Sabse pehle apna DPR kisi registered vet se banwa lein.</li>
          <li>Portal par registration karein. (OTP kabhi-kabhi late aata hai, isliye ghabrayein nahi, bas refresh karke retry karein).</li>
          <li>Documents ko scan karke PDF format mein upload karein (size 2MB se kam rakhein).</li>
          <li>Submit karte hi acknowledgment number ka screenshot le kar save kar lein.</li>
          <li>Ab 3-4 mahine ka wait hai, isi dauran veterinary officer site visit karega.</li>
          <li>Approval ke baad hi bills submit karein, tabhi subsidy release hogi.</li>
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
          Aksar Pooche Jaane Wale Sawal (FAQs)
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
          Paisa tabhi banta hai jab bakri palan ko business ki tarah loge, shauk ki tarah nahi. Documentation pe dhyan do, vet ki baat suno, aur shuruat mein patience rakho. Raaton-raat kuch nahi hota. Jo 2-3 saal tik jaate hain, wahi asli profit dekhte hain.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          Aage meat processing ka brand banana ho toh <Link href="/articles/pm-fme-yojana-food-processing" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">PM FME Yojana</Link> dekh lein. Aur gobar fekna mat — <Link href="/articles/vermi-compost-business-guide" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">Vermi Compost</Link> bana ke bech dein, ek achhi extra income ban jayegi.
        </p>

        <div className="mt-12 pt-8 border-t-2 border-gray-200 dark:border-gray-700 not-prose">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
            <span className="text-3xl" aria-hidden="true">📚</span>
            Aage Kya Padhein?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
            Ye related guides aapke agle kadam mein kaam aayengi:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/articles/madhumakhi-palan-kvic-subsidy" className="group flex flex-col bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl group-hover:scale-110 transition-transform" aria-hidden="true">🐝</span>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">Madhumakhi Palan</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">KVIC subsidy ke saath shahad ka sustainable business shuru karein.</p>
            </Link>

            <Link href="/articles/pm-matsya-sampada-yojana-fish-farming" className="group flex flex-col bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl group-hover:scale-110 transition-transform" aria-hidden="true">🐟</span>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">PM Matsya Sampada</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">Machli palan par 60% tak subsidy aur modern farming techniques.</p>
            </Link>

            <Link href="/articles/drip-sprinkler-irrigation-subsidy" className="group flex flex-col bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl group-hover:scale-110 transition-transform" aria-hidden="true">💧</span>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Drip Irrigation</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">Apne chara ke khet ke liye 75% tak sarkari sahayata prapt karein.</p>
            </Link>
          </div>
        </div>

        <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-xl border-l-4 border-orange-500 not-prose shadow-sm">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong className="text-orange-600 dark:text-orange-400 block mb-2">Disclaimer:</strong>
            Yeh article sirf jankari aur guidance ke liye hai. Eligibility, subsidy limits, aur rules state ke hisab se badal sakte hain. Apply karne se pehle latest guidelines apne district animal husbandry office se check kar lein. Last updated: August 2026.
          </p>
        </div>
      </article>
    </>
  );
}