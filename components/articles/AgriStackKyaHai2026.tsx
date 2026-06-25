import type { Metadata } from "next";
import Image from "next/image";

// ─── Slug ────────────────────────────────────────────────────────────────────
export const slug = "agristack-kya-hai";

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title:
    "AgriStack Kya Hai – Kisan Ke Liye Fayde, Registration Aur Farmer ID Guide | KisanStatus",
  description:
    "AgriStack kya hai, Farmer ID kya hoti hai, AgriStack registration kaise kare – puri jaankari Hindi mein. Kisan ko milne wale fayde, state-wise update aur step-by-step guide.",
  keywords: [
    "agristack kya hai farmers",
    "agristack kya hai",
    "agristack registration kaise kare",
    "farmer registry kya hai",
    "agristack benefits for farmers",
    "farmer id kya hai",
  ],
  authors: [{ name: "Sidhu Singh", url: "https://kisanstatus.com/author" }],
  alternates: { canonical: "https://kisanstatus.com/articles/agristack-kya-hai" },
  openGraph: {
    title: "AgriStack Kya Hai – Kisan Ke Liye Fayde, Registration Aur Farmer ID Guide",
    description:
      "AgriStack India ka national digital platform hai jo har kisan ko ek unique Farmer ID deta hai. Jaaniye registration process, fayde aur state-wise implementation.",
    url: "https://kisanstatus.com/articles/agristack-kya-hai",
    siteName: "KisanStatus",
    locale: "hi_IN",
    type: "article",
    publishedTime: "2025-01-15T08:00:00.000Z",
    modifiedTime: "2026-06-23T08:00:00.000Z",
    images: [
      {
        url: "https://kisanstatus.com/images/agristack-kya-hai-og.webp",
        width: 800,
        height: 420,
        alt: "AgriStack Kya Hai – Farmer ID Registration Guide India 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AgriStack Kya Hai – Kisan Ke Liye Fayde Aur Registration Guide",
    description:
      "India ka sabse bada digital farming platform – AgriStack. Har kisan ko milegi unique Farmer ID. Puri jaankari yahan padhein.",
    images: ["https://kisanstatus.com/images/agristack-kya-hai-og.webp"],
    site: "@kisanstatus",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};

// ─── JSON-LD Schemas ──────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AgriStack Kya Hai – Kisan Ke Liye Fayde, Registration Aur Farmer ID Guide",
  description:
    "AgriStack India ka national digital platform hai jo har kisan ko ek unique Farmer ID deta hai. Puri jaankari registration, fayde aur state-wise implementation ke baare mein.",
  image: {
    "@type": "ImageObject",
    url: "https://kisanstatus.com/images/agristack-kya-hai-og.webp",
    width: 800,
    height: 420,
  },
  author: {
    "@type": "Person",
    name: "Sidhu Singh",
    url: "https://kisanstatus.com/author",
  },
  publisher: {
    "@type": "Organization",
    name: "KisanStatus",
    url: "https://kisanstatus.com",
    logo: {
      "@type": "ImageObject",
      url: "https://kisanstatus.com/logo.webp",
      width: 200,
      height: 60,
    },
  },
  datePublished: "2025-01-15T08:00:00.000Z",
  dateModified: "2026-06-23T08:00:00.000Z",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://kisanstatus.com/articles/agristack-kya-hai",
  },
  keywords: "agristack kya hai, farmer id, agristack registration, agristack benefits",
  articleSection: "Agriculture",
  inLanguage: "hi",
  isPartOf: { "@type": "WebSite", name: "KisanStatus", url: "https://kisanstatus.com" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "AgriStack kya hai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AgriStack India sarkar ka ek digital agriculture platform hai jo har kisan ko ek unique Farmer ID deta hai. Iske zariye sarkar ke sare agriculture schemes ek jagah se manage ho sakte hain.",
      },
    },
    {
      "@type": "Question",
      name: "Farmer ID kaise milti hai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Farmer ID AgriStack portal ya apne Common Service Centre (CSC) par registration karne ke baad milti hai. Aadhaar se link hone ke baad ek 14-digit unique Farmer ID generate hoti hai.",
      },
    },
    {
      "@type": "Question",
      name: "AgriStack se kisan ko kya fayde hain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AgriStack se kisan ko seedha bank transfer, loan approval mein aasaani, crop insurance claims, subsidy benefits aur sarkari schemes ka direct benefit milta hai bina kisi middle-man ke.",
      },
    },
    {
      "@type": "Question",
      name: "AgriStack registration ke liye kya documents chahiye?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AgriStack registration ke liye Aadhaar card, mobile number jo Aadhaar se linked ho, zameen ke documents (khasra/khatauni), bank account details aur ek passport size photo chahiye.",
      },
    },
    {
      "@type": "Question",
      name: "Kya AgriStack registration free hai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Haan, AgriStack registration bilkul free hai. CSC ya online portal par koi bhi registration fee nahi li jaati.",
      },
    },
    {
      "@type": "Question",
      name: "AgriStack aur PM Kisan mein kya fark hai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PM Kisan ek scheme hai jo paise deti hai jabki AgriStack ek platform hai jo sare kisan data ko ek jagah store karta hai. AgriStack se PM Kisan, crop insurance aur baaki sab schemes easy ho jaati hain.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kisanstatus.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Articles",
      item: "https://kisanstatus.com/articles",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "AgriStack Kya Hai",
      item: "https://kisanstatus.com/articles/agristack-kya-hai",
    },
  ],
};

// ─── Article Component ────────────────────────────────────────────────────────
export default function AgriStackArticle() {
  const lastUpdated = new Date("2026-06-23T08:00:00.000Z").toLocaleDateString("hi-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="max-w-4xl mx-auto px-4 py-8 text-gray-800">

      {/* ── JSON-LD Schemas (FIXED: now actually rendered) ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="text-sm text-gray-500 mb-4">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <a href="https://kisanstatus.com" className="text-green-700 hover:underline">
              Home
            </a>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <a
              href="https://kisanstatus.com/articles"
              className="text-green-700 hover:underline"
            >
              Articles
            </a>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-gray-700">
            AgriStack Kya Hai
          </li>
        </ol>
      </nav>

      {/* Title & Meta */}
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 leading-tight mb-3">
          AgriStack Kya Hai – Kisan Ke Liye Fayde, Registration Aur Farmer ID Ki Poori Guide
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <span>
            ✍️ <strong>Sidhu Singh</strong>
          </span>
          <span>
            🗓️ Last Updated: <time dateTime="2026-06-23T08:00:00.000Z">{lastUpdated}</time>
          </span>
          <span>⏱️ Reading Time: ~12 min</span>
        </div>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Agar aap ek kisan hain aur aapne "AgriStack" ka naam suna hai lekin samajh nahi aaya ki
          yeh kya cheez hai – toh yeh article aapke liye hi likha gaya hai. Aaj hum aapko bilkul
          simple bhasha mein samjhayenge ki AgriStack kya hai, Farmer ID kya hoti hai, registration
          kaise karte hain, aur isse aapko kya-kya fayde milenge.
        </p>
      </header>

      {/* Table of Contents */}
      <nav
        aria-label="Table of Contents"
        className="bg-green-50 border border-green-200 rounded-lg p-5 mb-8"
      >
        <h2 className="text-lg font-semibold text-green-800 mb-3">📋 Is Article Mein Kya Hai</h2>
        <ol className="space-y-1 text-green-700 list-decimal list-inside text-sm md:text-base">
          <li><a href="#agristack-kya-hai" className="hover:underline">AgriStack Kya Hai</a></li>
          <li><a href="#agristack-ka-uddeshya" className="hover:underline">AgriStack Ka Uddeshya</a></li>
          <li><a href="#farmer-id-kya-hai" className="hover:underline">Farmer ID Kya Hai</a></li>
          <li><a href="#agristack-registration" className="hover:underline">AgriStack Registration Kaise Kare</a></li>
          <li><a href="#kisan-ke-fayde" className="hover:underline">Kisan Ko Kya Fayde Milenge</a></li>
          <li><a href="#rajyawise-implementation" className="hover:underline">Rajya-wise Implementation</a></li>
          <li><a href="#faq" className="hover:underline">Frequently Asked Questions</a></li>
          <li><a href="#conclusion" className="hover:underline">Conclusion</a></li>
        </ol>
      </nav>

      {/* Section 1 */}
      <section id="agristack-kya-hai" className="mb-10">
        <h2 className="text-2xl font-bold text-green-800 mb-4 border-b-2 border-green-200 pb-2">
          1. AgriStack Kya Hai?
        </h2>
        <p className="mb-4 leading-relaxed">
          AgriStack ek national digital agriculture platform hai jo India sarkar ne launch kiya hai.
          Iska poora naam hai <strong>"Agriculture Stack"</strong> – matlab kisan aur agriculture se
          related sare data ko ek digital stack (layered system) mein store karna.
        </p>
        <p className="mb-4 leading-relaxed">
          Sochiye ek aisa system jahan ek kisan ki sari jaankari – unki zameen, unki crop, bank
          account, Aadhaar – sab kuch ek jagah digital format mein hogi. Jab bhi koi government
          scheme aaye, PM Kisan ki kist aaye, ya crop insurance milni ho – sab kuch seedha
          automatically usi kisan ke account mein pahunche bina kisi third party ke. Yahi hai
          AgriStack ka concept.
        </p>
        <p className="mb-4 leading-relaxed">
          Yeh platform Ministry of Agriculture and Farmers' Welfare ne develop kiya hai. Iska core
          component hai <strong>Farmers' Registry</strong> – matlab ek national database jisme desh
          ke sare registered kisano ki information hogi.
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-4">
          <p className="font-semibold text-yellow-800">💡 Jaanne Wali Baat:</p>
          <p className="text-yellow-700 text-sm mt-1">
            AgriStack teen layers par kaam karta hai – Farmer Registry (kisan ka data), Crop Sown
            Registry (kaunsi fasal boi), aur Geo-referenced Village Maps. Teen layers milkar ek
            complete digital agriculture ecosystem banate hain.
          </p>
        </div>
        <p className="mb-4 leading-relaxed">
          Ab tak India mein kisano ka data scattered tha – kuch state ke paas tha, kuch PM Kisan ke
          paas tha, kuch bank ke paas. AgriStack in sab data points ko ek central registry mein
          laata hai.
        </p>
        <figure className="my-6">
          <Image
            src="/images/agristack-kya-hai-infographic.webp"
            alt="AgriStack Kya Hai – India ka Digital Agriculture Platform aur Farmer ID ka poora system"
            width={800}
            height={1200}
            className="rounded-xl shadow-md w-full h-auto"
            loading="lazy"
          />
          <figcaption className="text-center text-sm text-gray-500 mt-2">
            AgriStack India ka national digital agriculture platform hai – ek Farmer ID se sari schemes connected
          </figcaption>
        </figure>
      </section>

      {/* Section 2 */}
      <section id="agristack-ka-uddeshya" className="mb-10">
        <h2 className="text-2xl font-bold text-green-800 mb-4 border-b-2 border-green-200 pb-2">
          2. AgriStack Ka Uddeshya – Kyun Banaya Gaya Yeh Platform?
        </h2>
        <p className="mb-4 leading-relaxed">
          India mein 14 crore se zyada kisan parivar hain. Inke liye hazaron sarkari schemes hain
          lekin problem yeh hai ki bahut se kisano tak yeh schemes pahunch hi nahi pati kyunki:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
          <li>Data verification mein time lagta tha</li>
          <li>Fake beneficiaries scheme ka paisa le jaate the</li>
          <li>Baar baar same documents submit karne padte the</li>
          <li>State aur central databases align nahi the</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          AgriStack in sab problems solve karta hai ek unified digital identity banake. Jab kisi
          kisan ki Farmer ID ban jaaye toh uski poori verified information – zameen, crop, bank,
          identity – ek click par available hogi sabhi government departments ko.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <p className="font-semibold text-blue-800 mb-2">🎯 AgriStack Ke 4 Main Objectives:</p>
          <ol className="list-decimal list-inside space-y-1 text-blue-700 text-sm">
            <li>Har kisan ko ek unique verifiable Farmer ID dena</li>
            <li>Agriculture schemes ki Direct Benefit Transfer (DBT) improve karna</li>
            <li>Crop data aur land records ko digitize karna</li>
            <li>Private sector aur fintech companies ke liye API access dena</li>
          </ol>
        </div>
      </section>

      {/* Section 3 */}
      <section id="farmer-id-kya-hai" className="mb-10">
        <h2 className="text-2xl font-bold text-green-800 mb-4 border-b-2 border-green-200 pb-2">
          3. Farmer ID Kya Hai – Yeh Kaise Kaam Karta Hai?
        </h2>
        <p className="mb-4 leading-relaxed">
          Farmer ID ek <strong>14-digit unique identification number</strong> hai jo har registered
          kisan ko milta hai. Yeh Aadhaar ki tarah kaam karta hai lekin specifically agriculture ke
          liye.
        </p>
        <p className="mb-4 leading-relaxed">
          Jaise Aadhaar number se aap apni identity prove karte ho, waisi hi Farmer ID se aap prove
          karte ho ki aap ek verified kisan ho – aapke paas zameen hai, aap ek active farmer ho.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-green-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Feature</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Aadhaar</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Farmer ID</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Purpose", "General citizen identity", "Farmer-specific identity"],
                ["Linked to", "Demographic data", "Land records + crop data"],
                ["Issued by", "UIDAI", "AgriStack / State Govt"],
                ["Benefits", "All government services", "Agriculture schemes only"],
                ["Format", "12-digit number", "14-digit number"],
              ].map(([feature, aadhaar, farmerId]) => (
                <tr key={feature} className="odd:bg-white even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">{feature}</td>
                  <td className="border border-gray-300 px-4 py-2">{aadhaar}</td>
                  <td className="border border-gray-300 px-4 py-2">{farmerId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-4 leading-relaxed">
          Farmer ID banwane ke liye aapka Aadhaar number required hai. Ek baar Farmer ID ban gayi
          toh aap PM Kisan, PM Kisan eKYC, PMFBY crop insurance aur baaki sab schemes seedha isi ID se access kar sakte ho.
        </p>
        <figure className="my-6">
          <Image
            src="/images/agristack-farmer-id-card-sample.webp"
            alt="AgriStack Farmer ID Card Sample – Kisan Pahchan Patra with Name Village District State"
            width={800}
            height={533}
            className="rounded-xl shadow-md w-full h-auto"
            loading="lazy"
          />
          <figcaption className="text-center text-sm text-gray-500 mt-2">
            AgriStack Farmer ID Card – Kisan Pahchan Patra ka ek sample
          </figcaption>
        </figure>
      </section>

      {/* Section 4 */}
      <section id="agristack-registration" className="mb-10">
        <h2 className="text-2xl font-bold text-green-800 mb-4 border-b-2 border-green-200 pb-2">
          4. AgriStack Registration Kaise Kare – Step-by-Step Guide
        </h2>
        <p className="mb-4 leading-relaxed">
          AgriStack registration abhi dono tarike se ho sakti hai – online aur offline (CSC ke
          zariye). Neeche dono methods ke steps diye gaye hain:
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
          Method 1: Online Registration (agristack.gov.in)
        </h3>
        <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-700">
          {[
            "agristack.gov.in ya farmers.gov.in portal par jaayein",
            "'New Farmer Registration' ya 'Farmer ID' option dhundhein",
            "Aadhaar number enter karein aur OTP verify karein",
            "Personal details fill karein – naam, date of birth, address",
            "Land details bharen – khasra number, state, district, village",
            "Bank account details daalein (IFSC code, account number)",
            "Passport size photo upload karein",
            "Submit karein – Farmer ID generate ho jaayegi",
          ].map((step, i) => (
            <li key={i} className="leading-relaxed">
              <span className="font-medium text-green-700">Step {i + 1}:</span> {step}
            </li>
          ))}
        </ol>
        <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
          Method 2: CSC Centre Se Registration
        </h3>
        <p className="mb-4 leading-relaxed">
          Agar online process mushkil lage toh apne nearest Common Service Centre (CSC) par jaayein.
          Wahan ka VLE (Village Level Entrepreneur) aapka registration kar dega.
        </p>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
          <p className="font-semibold text-green-800 mb-2">📋 CSC Ke Liye Required Documents:</p>
          <ul className="text-green-700 text-sm space-y-1">
            <li>✅ Aadhaar card (original + photocopy)</li>
            <li>✅ Aadhaar-linked mobile number</li>
            <li>✅ Zameen ke documents – Khasra / Khatauni</li>
            <li>✅ Bank passbook (account number + IFSC)</li>
            <li>✅ Passport size photo (1-2 copies)</li>
          </ul>
        </div>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-4">
          <p className="font-semibold text-yellow-800">⚠️ Important:</p>
          <p className="text-yellow-700 text-sm mt-1">
            AgriStack registration bilkul FREE hai. Koi bhi CSC operator ya agent aapse paisa nahi
            maang sakta. Agar koi fee maange toh woh fraud hai – turant complain karein.
          </p>
        </div>
        <figure className="my-6">
          <Image
            src="/images/agristack-registration-6-steps-guide.webp"
            alt="AgriStack Registration 6 Steps – Aadhaar se Farmer ID banane ki step-by-step guide"
            width={800}
            height={1200}
            className="rounded-xl shadow-md w-full h-auto"
            loading="lazy"
          />
          <figcaption className="text-center text-sm text-gray-500 mt-2">
            AgriStack Registration ke 6 aasan steps – Aadhaar number se Farmer ID tak ka poora process
          </figcaption>
        </figure>
      </section>

      {/* Section 5 */}
      <section id="kisan-ke-fayde" className="mb-10">
        <h2 className="text-2xl font-bold text-green-800 mb-4 border-b-2 border-green-200 pb-2">
          5. AgriStack Se Kisan Ko Kya Fayde Milenge?
        </h2>
        <p className="mb-4 leading-relaxed">
          AgriStack sirf ek registration process nahi hai – yeh ek complete ecosystem hai jo kisan
          ki zindagi badal sakta hai. Neeche key benefits diye gaye hain:
        </p>
        <figure className="my-6">
          <Image
            src="/images/agristack-ecosystem-farmer-id-benefits.webp"
            alt="AgriStack Ecosystem – Ek Farmer ID se PM Kisan DBT Fasal Bima KCC eNAM Urvarak sab connected"
            width={800}
            height={800}
            className="rounded-xl shadow-md w-full h-auto"
            loading="lazy"
          />
          <figcaption className="text-center text-sm text-gray-500 mt-2">
            AgriStack Ecosystem – Ek Farmer ID se PM Kisan DBT, Fasal Bima, Kisan Credit Card, eNAM aur Urvarak sab connected hain
          </figcaption>
        </figure>
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">1️⃣ Seedha Bank Transfer – Bina Delay</h3>
        <p className="mb-4 leading-relaxed">
          PM Kisan, PMFBY insurance claim ya koi bhi subsidy – Farmer ID verified hone par seedha
          aapke bank account mein aayegi. No middlemen, no corruption.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">2️⃣ Crop Loan Aasaan Hoga</h3>
        <p className="mb-4 leading-relaxed">
          Banks aur Kisan Credit Card (KCC) ke liye Farmer ID ek verified proof hai. Loan
          approval process faster hogi kyunki aapki land records already verified hain.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">3️⃣ Crop Insurance – Automatic Claims</h3>
        <p className="mb-4 leading-relaxed">
          PMFBY ke claims ab Farmer ID aur Crop Registry data se automatically process ho sakte
          hain. Aapko baar baar documents submit nahi karne padenge.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">4️⃣ Digital Market Access – eNAM</h3>
        <p className="mb-4 leading-relaxed">
          AgriStack data ko eNAM (National Agriculture Market) se bhi link kiya ja raha hai. Iska
          matlab kisan apni crop online bech sakenge aur best price pa sakte hain apne ghar baithe.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">5️⃣ Ek Identity – Sari Schemes</h3>
        <p className="mb-4 leading-relaxed">
          PM Kisan, PMFBY, Kisan Credit Card, Soil Health Card, Kisan Maandhan – in sab schemes ke
          liye baar baar naye forms bharne ki zaroorat nahi hogi. Ek Farmer ID se sab linked ho jayega.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">6️⃣ Private Sector Benefits</h3>
        <p className="mb-4 leading-relaxed">
          Agri-tech companies aur input suppliers (seeds, fertilizers, machinery) bhi Farmer ID ke
          zariye verified kisano ko special offers, credit facilities aur personalized services de sakti hain.
        </p>
      </section>

      {/* Section 6 */}
      <section id="rajyawise-implementation" className="mb-10">
        <h2 className="text-2xl font-bold text-green-800 mb-4 border-b-2 border-green-200 pb-2">
          6. Rajya-wise AgriStack Implementation
        </h2>
        <p className="mb-4 leading-relaxed">
          AgriStack ek central government initiative hai lekin iska implementation state governments
          ke saath milkar ho raha hai.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-green-100">
                <th className="border border-gray-300 px-4 py-2 text-left">State</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Maharashtra", "Active", "Pilot project successfully running"],
                ["Uttar Pradesh", "Active", "Large-scale rollout underway"],
                ["Madhya Pradesh", "Active", "MP Kisan App se integration"],
                ["Rajasthan", "Active", "Rajkisan portal linked"],
                ["Karnataka", "Pilot Phase", "Implementation ongoing"],
                ["Gujarat", "Pilot Phase", "i-Khedut integration"],
                ["Bihar", "In Progress", "Phase-wise rollout"],
                ["Punjab", "In Progress", "PAMS se integration"],
                ["Haryana", "In Progress", "Meri Fasal Mera Byora link"],
                ["Other States", "Coming Soon", "Central guidance awaited"],
              ].map(([state, status, notes]) => (
                <tr key={state} className="odd:bg-white even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">{state}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                      status === "Active"
                        ? "bg-green-100 text-green-700"
                        : status === "Pilot Phase"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}>
                      {status}
                    </span>
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-4 leading-relaxed">
          Agar aap Uttar Pradesh ke kisan hain toh{" "}
          <a href="https://kisanstatus.com/beneficiary-list/uttar-pradesh" className="text-green-700 underline hover:text-green-900">
            PM Kisan beneficiary list UP
          </a>{" "}
          par apna naam check kar sakte hain.
        </p>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold text-green-800 mb-6 border-b-2 border-green-200 pb-2">
          7. Frequently Asked Questions (FAQ)
        </h2>
        <div className="space-y-4">
          {[
            {
              q: "AgriStack kya hai?",
              a: "AgriStack India sarkar ka ek digital agriculture platform hai jo har kisan ko ek unique Farmer ID deta hai. Iske zariye sarkar ke sare agriculture schemes ek jagah se manage ho sakte hain. Yeh national farmers' registry hai jahan kisan ka poora data – zameen, crop, bank – stored hota hai.",
            },
            {
              q: "Farmer ID kaise milti hai?",
              a: "Farmer ID AgriStack portal par ya apne Common Service Centre (CSC) par registration karne ke baad milti hai. Aadhaar se link hone ke baad ek 14-digit unique Farmer ID generate hoti hai. Process mein Aadhaar OTP verification aur land records submission hota hai.",
            },
            {
              q: "AgriStack se kisan ko kya fayde hain?",
              a: "AgriStack se kisan ko seedha bank transfer, loan approval mein aasaani, crop insurance claims, subsidy benefits aur sarkari schemes ka direct benefit milta hai bina kisi middle-man ke. Ek Farmer ID se sari schemes ka access milti hai.",
            },
            {
              q: "AgriStack registration ke liye kya documents chahiye?",
              a: "AgriStack registration ke liye Aadhaar card, Aadhaar-linked mobile number, zameen ke documents (khasra/khatauni), bank account details aur passport size photo chahiye.",
            },
            {
              q: "Kya AgriStack registration free hai?",
              a: "Haan, AgriStack registration bilkul free hai. CSC ya online portal par koi bhi registration fee nahi li jaati. Agar koi paisa maange toh woh fraud ho sakta hai.",
            },
            {
              q: "AgriStack aur PM Kisan mein kya fark hai?",
              a: "PM Kisan ek scheme hai jo paise deti hai jabki AgriStack ek platform hai jo sare kisan data ko ek jagah store karta hai. AgriStack se PM Kisan, crop insurance aur baaki sab schemes easy ho jaati hain. Dono ek doosre se connected hain.",
            },
          ].map(({ q, a }, i) => (
            <details key={i} className="border border-gray-200 rounded-lg overflow-hidden">
              <summary className="cursor-pointer bg-gray-50 px-4 py-3 font-semibold text-gray-800 hover:bg-green-50 list-none flex items-center justify-between">
                <span>{q}</span>
                <span className="text-green-600 text-lg">+</span>
              </summary>
              <div className="px-4 py-3 text-gray-700 leading-relaxed border-t border-gray-200">
                {a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Related Articles */}
      <section aria-label="Related Articles" className="mb-10">
        <h2 className="text-xl font-bold text-green-800 mb-4 border-b-2 border-green-200 pb-2">
          📌 Yeh Bhi Padhein – Related Articles
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              href: "https://kisanstatus.com/articles/pm-kisan-24vi-kist",
              title: "PM Kisan 24vi Kist Date 2026",
              desc: "24vi installment kab aayegi, expected date aur status check karne ka tarika.",
              icon: "📅",
            },
            {
              href: "https://kisanstatus.com/articles/pm-kisan-mobile-number-change",
              title: "PM Kisan Mobile Number Change 2026",
              desc: "Mobile number, bank account aur Aadhaar update karne ki poori jaankari.",
              icon: "✏️",
            },
          ].map(({ href, title, desc, icon }) => (
            <a
              key={href}
              href={href}
              className="flex gap-3 p-4 border border-green-200 rounded-lg bg-green-50 hover:bg-green-100 transition-colors"
            >
              <span className="text-2xl flex-shrink-0">{icon}</span>
              <div>
                <p className="font-semibold text-green-800 text-sm">{title}</p>
                <p className="text-gray-600 text-xs mt-0.5">{desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section id="conclusion" className="mb-10">
        <h2 className="text-2xl font-bold text-green-800 mb-4 border-b-2 border-green-200 pb-2">
          8. Conclusion – AgriStack Kisan Ki Digital Pehchaan Hai
        </h2>
        <p className="mb-4 leading-relaxed">
          AgriStack India ke agriculture sector ka future hai. Yeh sirf ek registration process nahi
          hai – yeh ek complete digital transformation hai jo har kisan ko ek verified identity deta
          hai aur unhe sari sarkari aur private services directly access karne deta hai.
        </p>
        <p className="mb-4 leading-relaxed">
          Agar aapne abhi tak AgriStack par registration nahi karwai hai toh deri mat karo. Apne CSC
          centre par jao, documents le jao aur apni Farmer ID banwa lo. Yeh aapka haq hai aur iska
          direct fayda aapko milega – PM Kisan ki kist ho, crop insurance ho ya agricultural loan –
          sab kuch ek ID se connect ho jayega.
        </p>
        <p className="mb-4 leading-relaxed">
          Agar aapke koi aur sawaal hain toh hamari website{" "}
          <a href="https://kisanstatus.com" className="text-green-700 underline hover:text-green-900">
            kisanstatus.com
          </a>{" "}
          par visit karein. Hum regularly kisan-related latest updates post karte rehte hain.
        </p>
        <div className="bg-green-100 border border-green-300 rounded-lg p-4 text-center">
          <p className="font-semibold text-green-800">
            🌾 Apne doston aur parivaar ke kisano ko bhi yeh information share karein!
          </p>
          <p className="text-green-700 text-sm mt-1">
            Social media par share karke unke fayde ke liye kaam karein.
          </p>
        </div>
      </section>

      {/* Author Box – E-E-A-T (FIXED: Sidhu Singh) */}
      <aside
        aria-label="About the Author"
        className="mb-10 border border-gray-200 rounded-xl p-5 bg-gray-50 flex gap-4 items-start"
      >
        <div
          className="w-14 h-14 rounded-full bg-green-700 flex items-center justify-center text-white text-xl font-bold flex-shrink-0"
          aria-hidden="true"
        >
          SS
        </div>
        <div>
          <p className="font-bold text-gray-800 text-base">Sidhu Singh</p>
          <p className="text-xs text-green-700 mb-2 font-medium">
            Agricultural Content Expert – KisanStatus.com
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Sidhu Singh pichhle 5 saal se Indian farmers ko government schemes navigate karne mein
            help kar rahe hain. PM Kisan, AgriStack, eKYC aur kisan-related policies par inki
            gehri pakad hai. Unka maksad hai government ke complex processes ko simple Hinglish
            mein samjhana.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Last Updated:{" "}
            <time dateTime="2026-06-25T08:00:00.000Z">
              {new Date("2026-06-25T08:00:00.000Z").toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>{" "}
            · Published: June 2026
          </p>
        </div>
      </aside>

    </main>
  );
}
