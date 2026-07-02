import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";

// ─── Slug ────────────────────────────────────────────────────────────────────
export const slug = "pm-kisan-mobile-number-change";

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title:
    "PM Kisan Contact Number, Bank Account Aur Aadhaar Update Kaise Kare 2025 | KisanStatus",
  description:
    "PM Kisan contact number change kaise kare, bank account update kaise kare aur Aadhaar link kaise kare – step-by-step complete guide Hindi mein. Common errors aur solutions bhi jaanein.",
  keywords: [
    "pm kisan mobile number change kaise kare",
    "pm kisan bank account kaise badle",
    "pm kisan aadhaar link kaise kare",
    "pm kisan details update online",
    "pm kisan profile update",
    "pm kisan correction",
  ],
  authors: [{ name: "KisanStatus Team", url: "https://kisanstatus.com/about" }],
  alternates: { canonical: "https://kisanstatus.com/pm-kisan-mobile-number-change" },
  openGraph: {
    title: "PM Kisan Contact Number, Bank Account Aur Aadhaar Update Kaise Kare",
    description:
      "PM Kisan mein apni details update karna sikhein – contact number, bank account aur Aadhaar link karne ki puri jaankari step-by-step.",
    url: "https://kisanstatus.com/pm-kisan-mobile-number-change",
    siteName: "KisanStatus",
    locale: "hi_IN",
    type: "article",
    publishedTime: "2025-01-20T08:00:00.000Z",
    modifiedTime: "2026-06-23T08:00:00.000Z",
    images: [
      {
        url: "https://kisanstatus.com/images/pm-kisan-details-update-og.webp",
        width: 800,
        height: 420,
        alt: "PM Kisan Contact Number Bank Account Aadhaar Update Guide 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PM Kisan Contact Number, Bank Account Aur Aadhaar Update Guide",
    description:
      "PM Kisan details update karna ab aasan hai. Contact number, bank account aur Aadhaar link karne ki complete guide yahan padhein.",
    images: ["https://kisanstatus.com/images/pm-kisan-details-update-og.webp"],
    site: "@KisanStatus",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};

// ─── JSON-LD Schemas ──────────────────────────────────────────────────────────
export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "PM Kisan Contact Number, Bank Account Aur Aadhaar Update Kaise Kare",
  description:
    "Step-by-step guide for updating contact number, bank account and linking Aadhaar in PM Kisan portal – in Hinglish.",
  image: {
    "@type": "ImageObject",
    url: "https://kisanstatus.com/images/pm-kisan-details-update-og.webp",
    width: 800,
    height: 420,
  },
  author: {
    "@type": "Organization",
    name: "KisanStatus",
    url: "https://kisanstatus.com",
    sameAs: ["https://kisanstatus.com/about"],
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
  datePublished: "2025-01-20T08:00:00.000Z",
  dateModified: "2026-06-23T08:00:00.000Z",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://kisanstatus.com/pm-kisan-mobile-number-change",
  },
  keywords: "pm kisan contact number change, pm kisan bank account update, pm kisan aadhaar link",
  articleSection: "Agriculture",
  inLanguage: "hi",
  isPartOf: { "@type": "WebSite", name: "KisanStatus", url: "https://kisanstatus.com" },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "PM Kisan mein contact number kaise change kare?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PM Kisan mein contact number change karne ke liye pmkisan.gov.in par jaao, 'Farmers Corner' mein 'Edit Aadhaar Details' select karo, apna Aadhaar number aur registered mobile OTP se verify karo, phir naya mobile number enter karke save karo.",
      },
    },
    {
      "@type": "Question",
      name: "PM Kisan bank account change karne ke baad kitne din mein update hota hai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PM Kisan bank account change karne ke baad generally 3-7 working days mein update ho jaata hai. Next installment naye account mein aayegi. Agar zyada time lag raha hai toh apne local agriculture office se check karein.",
      },
    },
    {
      "@type": "Question",
      name: "PM Kisan aur Aadhaar link nahi hai toh kya kare?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Agar PM Kisan aur Aadhaar link nahi hai toh pmkisan.gov.in par 'Aadhaar Linking' option use karein ya nearest CSC centre par jaake biometric se verify karwayein. Bina Aadhaar link ke kist band ho sakti hai.",
      },
    },
    {
      "@type": "Question",
      name: "PM Kisan mein naam galat hai toh kaise theek karein?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Naam correction ke liye apne Block Agriculture Officer (BAO) ya District Agriculture Office se contact karein. Online naam change portal par seedha nahi hota – iske liye aapko application deni padti hai.",
      },
    },
    {
      "@type": "Question",
      name: "PM Kisan status mein 'Aadhaar Authentication Failed' kyu aata hai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yeh error tab aata hai jab PM Kisan mein diya gaya naam Aadhaar par likhe naam se exactly match nahi karta. Aadhaar mein jo naam hai wahi PM Kisan mein hona chahiye. Correction ke liye local agriculture office se milein.",
      },
    },
    {
      "@type": "Question",
      name: "Kya PM Kisan update ke liye CSC zaruri hai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kuch updates jaise simple contact number ya bank change aap online portal par khud kar sakte hain. Lekin Aadhaar biometric verification ya naam correction ke liye CSC ya agriculture office jaana padta hai.",
      },
    },
  ],
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kisanstatus.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "PM Kisan",
      item: "https://kisanstatus.com/pm-kisan",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "PM Kisan Details Update",
      item: "https://kisanstatus.com/pm-kisan-mobile-number-change",
    },
  ],
};

// ─── Reusable sub-components ──────────────────────────────────────────────────
function WarningBox({ children }: { children: ReactNode }) {
  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg my-4">
      <p className="font-semibold text-red-800 flex items-center gap-2">⚠️ Savdhaan Rahein:</p>
      <div className="text-red-700 text-sm mt-1">{children}</div>
    </div>
  );
}

function TipBox({ children }: { children: ReactNode }) {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg my-4">
      <p className="font-semibold text-blue-800 flex items-center gap-2">💡 Helpful Tip:</p>
      <div className="text-blue-700 text-sm mt-1">{children}</div>
    </div>
  );
}

function ImportantBox({ children }: { children: ReactNode }) {
  return (
    <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 my-4">
      <p className="font-semibold text-yellow-800 flex items-center gap-2">📌 Zaroori Baat:</p>
      <div className="text-yellow-700 text-sm mt-1">{children}</div>
    </div>
  );
}

// ─── Article Component ────────────────────────────────────────────────────────
export default function PMKisanUpdateArticle() {
  const lastUpdated = new Date("2026-06-23T08:00:00.000Z").toLocaleDateString("hi-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
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
            <a href="https://kisanstatus.com/pm-kisan" className="text-green-700 hover:underline">
              PM Kisan
            </a>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-gray-700">
            Beneficiary Profile Modification
          </li>
        </ol>
      </nav>

      {/* Title */}
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 leading-tight mb-3">
          PM Kisan Contact Number, Bank Account Aur Aadhaar Update Kaise Kare – Poori Guide 2025
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <span>
            ✍️ <strong>KisanStatus Team</strong>
          </span>
          <span>
            🗓️ Last Updated: <time dateTime="2026-06-23T08:00:00.000Z">{lastUpdated}</time>
          </span>
          <span>⏱️ Reading Time: ~14 min</span>
        </div>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          PM Kisan Samman Nidhi mein apni details galat hai ya update karni hai? Contact number
          change karna hai, bank account badhalna hai ya Aadhaar link karwana hai? Yeh article
          aapke in sare sawalon ka jawab dega – step-by-step, simple bhasha mein.
        </p>
        <p className="text-gray-700 leading-relaxed">Puri guide padhein.</p>
      </header>

      {/* Hero Image */}
      <figure className="my-6">
        <Image
          src="/images/pm-kisan-mobile-bank-aadhaar-update-banner.webp"
          alt="PM Kisan Details Update – Contact Number Bank Account aur Aadhaar Update kaise kare 2025"
          width={720}
          height={1080}
          className="rounded-xl shadow-md w-full h-auto"
          priority
        />
        <figcaption className="text-center text-sm text-gray-500 mt-2">
          PM Kisan mein Contact, Bank aur Aadhaar – teeno update karna zaroori hai kist ke liye
        </figcaption>
      </figure>

      {/* Table of Contents */}
      <nav
        aria-label="Table of Contents"
        className="bg-green-50 border border-green-200 rounded-lg p-5 mb-8"
      >
        <h2 className="text-lg font-semibold text-green-800 mb-3">📋 Is Article Mein Kya Hai</h2>
        <ol className="space-y-1 text-green-700 list-decimal list-inside text-sm md:text-base">
          <li><a href="#mobile-number-change" className="hover:underline">1. Contact Number Modification</a></li>
          <li><a href="#bank-account-change" className="hover:underline">2. Banking Details Update</a></li>
          <li><a href="#aadhaar-linking" className="hover:underline">3. Aadhaar Integration Process</a></li>
          <li><a href="#common-errors" className="hover:underline">4. Common Errors Aur Solutions</a></li>
          <li><a href="#required-documents" className="hover:underline">5. Required Documentation</a></li>
          <li><a href="#faq" className="hover:underline">6. Frequently Asked Questions</a></li>
          <li><a href="#conclusion" className="hover:underline">7. Conclusion</a></li>
        </ol>
      </nav>

      {/* Section 1 – Mobile Number */}
      <section id="mobile-number-change" className="mb-10">
        <h2 className="text-2xl font-bold text-green-800 mb-4 border-b-2 border-green-200 pb-2">
          1. Contact Number Modification — Portal Se Ya CSC Se
        </h2>
        <p className="mb-4 leading-relaxed">
          PM Kisan mein contact number ek bahut zaroori cheez hai kyunki OTP aur notifications usi
          number par aate hain. Agar aapka purana number band ho gaya hai ya aapne number badla hai
          toh turant update karwana chahiye.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">Warna kist ke bare mein information nahi milegi.</p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">
          Online Method — Portal Se Contact Number Change
        </h3>
        <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-700">
          {[
            "pmkisan.gov.in par jaayein aur 'Farmers Corner' section dhundhein",
            "'Edit Aadhaar Failure Records' ya 'Update Mobile Number' option select karein",
            "Apna Aadhaar number enter karein",
            "Purane registered number par OTP aayega – verify karein",
            "Naya mobile number enter karein aur confirm karein",
            "Submit karein – 24-48 ghante mein update ho jaayega",
          ].map((step, i) => (
            <li key={i} className="leading-relaxed">
              <span className="font-medium text-green-700">Step {i + 1}:</span> {step}
            </li>
          ))}
        </ol>

        <WarningBox>
          <p>
            Agar purana number completely band ho gaya hai aur OTP nahi aa raha toh online method
            se contact number change possible nahi hai. Is case mein CSC centre par jaana padega.
          </p>
        </WarningBox>

        <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
          CSC Method — Biometric Se Contact Number Change
        </h3>
        <ol className="list-decimal list-inside space-y-3 mb-4 text-gray-700">
          {[
            "Nearest CSC (Common Service Centre) par jaayein",
            "Apna Aadhaar card aur naya mobile number ready rakhein",
            "CSC operator Aadhaar biometric (fingerprint) se verify karega",
            "Naya mobile number register kar diya jaayega",
            "Confirmation SMS naye number par aayega",
          ].map((step, i) => (
            <li key={i} className="leading-relaxed">
              <span className="font-medium text-green-700">Step {i + 1}:</span> {step}
            </li>
          ))}
        </ol>

        <TipBox>
          <p>
            CSC locator ke liye locator.csccloud.in par jaayein ya Google Maps mein "CSC Centre
            near me" search karein.
          </p>
        </TipBox>
        <figure className="my-6">
          <Image
            src="/images/pm-kisan-details-update-portal-guide.webp"
            alt="PM Kisan Details Update Portal Guide – Contact Number Bank Account Aadhaar Update Steps"
            width={800}
            height={1200}
            className="rounded-xl shadow-md w-full h-auto"
            loading="lazy"
          />
          <figcaption className="text-center text-sm text-gray-500 mt-2">
            pmkisan.gov.in portal par Contact, Bank aur Aadhaar update karne ki step-by-step guide
          </figcaption>
        </figure>
      </section>

      {/* Section 2 – Bank Account */}
      <section id="bank-account-change" className="mb-10">
        <h2 className="text-2xl font-bold text-green-800 mb-4 border-b-2 border-green-200 pb-2">
          2. Banking Details Update — Galat Account Fix Karo
        </h2>
        <p className="mb-4 leading-relaxed">
          Agar aapka purana bank account band ho gaya hai, aapne bank badla hai ya IFSC code change
          hua hai toh PM Kisan mein bank account update karna bahut zaroori hai.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">Galt account hone par kist wapas chali jaati hai.</p>

        <ImportantBox>
          <p>
            PM Kisan mein bank account change karne ke liye aapka naya account Aadhaar se NPCI ke
            zariye linked hona chahiye. Agar link nahi hai toh pehle apni bank mein jaake Aadhaar
            seeding karwayein.
          </p>
        </ImportantBox>

        <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">
          Banking Details Update Steps
        </h3>
        <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-700">
          {[
            "pmkisan.gov.in par jaayein",
            "Farmers Corner mein 'Edit Aadhaar Details' ya 'Update Bank Account' option select karein",
            "Aadhaar number aur registered mobile OTP se verify karein",
            "Naya bank account number enter karein",
            "IFSC code carefully enter karein (bank passbook se copy karein)",
            "Account holder name exactly wahi daalein jo bank mein registered hai",
            "Submit karein – 3-7 working days mein update ho jaayega",
          ].map((step, i) => (
            <li key={i} className="leading-relaxed">
              <span className="font-medium text-green-700">Step {i + 1}:</span> {step}
            </li>
          ))}
        </ol>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
          <p className="font-semibold text-green-800 mb-2">✅ Banking Details Update Ke Liye Documents:</p>
          <ul className="text-green-700 text-sm space-y-1">
            <li>• Bank passbook (front page with account details)</li>
            <li>• Cancelled cheque (optional but helpful)</li>
            <li>• Aadhaar card</li>
            <li>• Registered mobile number</li>
          </ul>
        </div>
      </section>

      {/* Section 3 – Aadhaar Linking */}
      <section id="aadhaar-linking" className="mb-10">
        <h2 className="text-2xl font-bold text-green-800 mb-4 border-b-2 border-green-200 pb-2">
          3. Aadhaar Integration Process — OTP Ya Biometric
        </h2>
        <p className="mb-4 leading-relaxed">
          PM Kisan ki kist lene ke liye Aadhaar linking mandatory hai. Agar aapka Aadhaar PM Kisan
          se linked nahi hai toh aapki kist rok di jaayegi.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">Saath hi PM Kisan eKYC bhi complete honi chahiye.</p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">
          Method 1: Online OTP-Based Aadhaar Integration
        </h3>
        <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-700">
          {[
            "pmkisan.gov.in par jaayein",
            "Farmers Corner mein 'Aadhaar Linking' option select karein",
            "Apna Aadhaar number enter karein",
            "Aadhaar-linked mobile par OTP aayega – verify karein",
            "Linking complete – status portal par update hoga",
          ].map((step, i) => (
            <li key={i} className="leading-relaxed">
              <span className="font-medium text-green-700">Step {i + 1}:</span> {step}
            </li>
          ))}
        </ol>

        <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
          Method 2: CSC Biometric Verification
        </h3>
        <p className="mb-4 leading-relaxed">
          Agar mobile number Aadhaar se linked nahi hai ya OTP nahi aa raha toh CSC centre par
          jaayein. Wahan fingerprint se Aadhaar verify karke PM Kisan se link ho jaayega.
        </p>

        <WarningBox>
          <p>
            Bina Aadhaar linking ke aur bina eKYC ke PM Kisan ki kist rok di jaati hai. Agar
            aapki 23vi ya 24vi kist nahi aayi toh pehle portal par Aadhaar linking status check
            karein.
          </p>
        </WarningBox>
      </section>

      {/* Section 4 – Common Errors */}
      <section id="common-errors" className="mb-10">
        <h2 className="text-2xl font-bold text-green-800 mb-4 border-b-2 border-green-200 pb-2">
          4. Common Errors Aur Solutions — Quick Reference
        </h2>
        <figure className="my-4">
          <Image
            src="/images/pm-kisan-common-errors-solutions-table.webp"
            alt="PM Kisan Common Errors aur Samadhan – Rejected eKYC OTP Aadhaar Mismatch Bank Error Solutions"
            width={496}
            height={331}
            className="rounded-xl shadow-md w-full h-auto"
            loading="lazy"
          />
          <figcaption className="text-center text-sm text-gray-500 mt-2">
            PM Kisan ki common galtiyan aur unka samadhan – quick reference table
          </figcaption>
        </figure>
        <p className="mb-4 leading-relaxed">
          PM Kisan portal par update karte waqt kai common errors aate hain. Neeche in errors,
          unke karanon aur solutions ki list hai:
        </p>
        <div className="space-y-4">
          {[
            {
              error: "Aadhaar Authentication Failed",
              cause: "PM Kisan mein naam aur Aadhaar par naam exactly match nahi karta.",
              solution:
                "Agriculture office mein naam correction application dein. Aadhaar ki copy saath le jaayein.",
            },
            {
              error: "Payment Failed / Amount Reversed",
              cause: "Bank account inactive hai ya naam mismatch hai.",
              solution:
                "Bank mein account activate karwayein. PM Kisan mein updated bank details daalein.",
            },
            {
              error: "eKYC Pending",
              cause: "eKYC complete nahi hui hai ya expire ho gayi.",
              solution:
                "pmkisan.gov.in par eKYC option se OTP ya CSC biometric se turant complete karein.",
            },
            {
              error: "Invalid Land Details",
              cause: "State land records database se mismatch ya zameen ka survey number galat.",
              solution:
                "Apne patwari se zameen ki updated nakal (khasra/khatauni) lein aur agriculture office mein submit karein.",
            },
            {
              error: "Kist Nahi Aayi – Status Mein 'FTO Generated' Dikh Raha Hai",
              cause: "FTO generate hua hai matlab paise release ho chuke hain lekin bank se process mein time lag raha hai.",
              solution:
                "5-7 working days wait karein. Agar phir bhi nahi aaye toh bank se contact karein.",
            },
          ].map(({ error, cause, solution }) => (
            <div key={error} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-red-50 px-4 py-2 border-b border-red-100">
                <p className="font-semibold text-red-800 text-sm">🔴 {error}</p>
              </div>
              <div className="px-4 py-3 grid md:grid-cols-2 gap-3">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Karan (Cause)</p>
                  <p className="text-gray-700 text-sm">{cause}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-green-600 uppercase mb-1">Samadhan (Solution)</p>
                  <p className="text-gray-700 text-sm">{solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5 – Documents */}
      <section id="required-documents" className="mb-10">
        <h2 className="text-2xl font-bold text-green-800 mb-4 border-b-2 border-green-200 pb-2">
          5. Required Documentation — Update Ke Liye Kya Chahiye
        </h2>
        <p className="mb-4 leading-relaxed">
          PM Kisan mein koi bhi update karne se pehle neeche diye documents ready rakhein:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-green-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Update Type</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Required Documents</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Where to Do</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Contact Number Change", "Aadhaar card, active mobile numbers (old & new)", "Online portal / CSC"],
                ["Banking Details Update", "Aadhaar, bank passbook, cancelled cheque", "Online portal / CSC"],
                ["Aadhaar Integration", "Aadhaar card, registered mobile", "Online portal / CSC"],
                ["Name Correction", "Aadhaar, written application, land records", "Agriculture Office"],
                ["Land Records Update", "Khasra/khatauni, Aadhaar, application", "Agriculture Office / Patwari"],
                ["New Registration", "Aadhaar, land records, bank passbook, photo", "CSC / Online portal"],
              ].map(([type, docs, where]) => (
                <tr key={type} className="odd:bg-white even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">{type}</td>
                  <td className="border border-gray-300 px-4 py-2">{docs}</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">{where}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <TipBox>
          <p>
            Kisi bhi office jaane se pehle documents ki 2-3 photocopies zaroor banwa lein. Original
            saath rakhein verification ke liye lekin photocopies hi submit karein.
          </p>
        </TipBox>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold text-green-800 mb-6 border-b-2 border-green-200 pb-2">
          6. Frequently Asked Questions — Real Answers
        </h2>
        <div className="space-y-4">
          {[
            {
              q: "PM Kisan mein contact number kaise change kare?",
              a: "pmkisan.gov.in par jaao, Farmers Corner mein Edit Aadhaar Details ya Update Mobile option select karo, Aadhaar OTP se verify karo, phir naya mobile number enter karke save karo. Ya CSC centre par biometric se change karwao.",
            },
            {
              q: "PM Kisan bank account change karne ke baad kitne din mein update hota hai?",
              a: "PM Kisan bank account change karne ke baad generally 3-7 working days mein update ho jaata hai. Next installment naye account mein aayegi. Agar zyada time lag raha hai toh helpline 155261 par call karein.",
            },
            {
              q: "PM Kisan aur Aadhaar link nahi hai toh kya kare?",
              a: "pmkisan.gov.in par Aadhaar Linking option use karein ya nearest CSC centre par jaake biometric se verify karwayein. Bina Aadhaar link ke aapki kist band ho sakti hai.",
            },
            {
              q: "PM Kisan mein naam galat hai toh kaise theek karein?",
              a: "Naam correction ke liye apne Block Agriculture Officer (BAO) ya District Agriculture Office se contact karein. Aadhaar ki copy aur written application saath le jaayein.",
            },
            {
              q: "PM Kisan status mein 'Aadhaar Authentication Failed' kyu aata hai?",
              a: "Yeh error tab aata hai jab PM Kisan mein naam Aadhaar par likhe naam se exactly match nahi karta. Correction ke liye local agriculture office se milein.",
            },
            {
              q: "Kya PM Kisan update ke liye CSC zaruri hai?",
              a: "Kuch updates jaise contact number ya bank change aap online kar sakte hain. Lekin Aadhaar biometric verification ya naam correction ke liye CSC ya agriculture office jaana padta hai.",
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
          📌 Related Articles — Yeh Bhi Jaante Hain
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              href: "https://kisanstatus.com/pm-kisan-24vi-kist",
              title: "PM Kisan 24vi Kist Date 2026",
              desc: "24vi installment kab aayegi, expected date aur status check ka tarika.",
              icon: "📅",
            },
            {
              href: "https://kisanstatus.com/agristack-kya-hai",
              title: "AgriStack Kya Hai – Farmer ID Guide",
              desc: "AgriStack kya hai, Farmer ID kaise banegi aur kisan ko kya fayde milenge.",
              icon: "🌾",
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
          7. Conclusion — Final Thoughts
        </h2>
        <p className="mb-4 leading-relaxed">
          PM Kisan mein details update karna mushkil nahi hai – bas sahi process pata honi chahiye.
          Contact number, bank account aur Aadhaar linking – in teeno updates ke liye is guide mein
          step-by-step information di gayi hai.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">Yaad rakhein:</p>
        <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
          <li>Koi bhi update free hai – kisi ko paise mat do.</li>
          <li>Online nahi hua toh CSC centre jaayein.</li>
          <li>Naam mismatch ki problem agriculture office se solve hoti hai.</li>
          <li>Har update ke baad 3-7 working days mein reflect hota hai.</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          Agar aapko koi specific problem hai toh hamari website{" "}
          <a
            href="https://kisanstatus.com"
            className="text-green-700 underline hover:text-green-900"
          >
            kisanstatus.com
          </a>{" "}
          par visit karein.
        </p>
        <div className="bg-green-100 border border-green-300 rounded-lg p-4 text-center">
          <p className="font-semibold text-green-800">
            🌾 Is article ko apne ghar ke kisano ke saath share zaroor karein!
          </p>
        </div>
      </section>

      {/* Author Box – E-E-A-T */}
      <aside
        aria-label="About the Author"
        className="mb-10 border border-gray-200 rounded-xl p-5 bg-gray-50 flex gap-4 items-start"
      >
        <div
          className="w-14 h-14 rounded-full bg-green-700 flex items-center justify-center text-white text-xl font-bold flex-shrink-0"
          aria-hidden="true"
        >
          KS
        </div>
        <div>
          <p className="font-bold text-gray-800 text-base">KisanStatus Editorial Team</p>
          <p className="text-xs text-green-700 mb-2 font-medium">
            PM Kisan &amp; Government Portal Specialist
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Hamare writers aur researchers PM Kisan scheme, portal updates aur kisan-related
            government policies ko daily track karte hain. Is article mein di gayi jaankari official
            PM Kisan portal aur government circulars par based hai.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Last Updated:{" "}
            <time dateTime="2026-06-23T08:00:00.000Z">
              {new Date("2026-06-23T08:00:00.000Z").toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>{" "}
            · Published: 20 January 2025
          </p>
        </div>
      </aside>
    </main>
  );
}