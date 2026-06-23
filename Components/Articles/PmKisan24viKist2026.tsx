import type { Metadata } from "next";
import Image from "next/image";

// ─── Slug ────────────────────────────────────────────────────────────────────
export const slug = "pm-kisan-24vi-kist";

// ─── ⚙️  UPDATE THIS SECTION WHEN DATE IS CONFIRMED ─────────────────────────
export const KIST_INFO = {
  kistNumber: "24",
  kistNumberText: "24vi",
  expectedDate: "October 2026 (Expected)",
  confirmedDate: null as string | null, // Set to "15 October 2026" once confirmed
  amount: "₹2,000",
  status: "Expected" as "Expected" | "Confirmed" | "Released",
  eKYCDeadline: "Update hogi – portal check karein",
  totalBeneficiaries: "~9 Crore+",
};
// ─────────────────────────────────────────────────────────────────────────────

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: `PM Kisan ${KIST_INFO.kistNumberText} Kist Kab Aayegi? Date, Status Check Aur Latest Updates 2026 | KisanStatus`,
  description: `PM Kisan ${KIST_INFO.kistNumberText} kist kab aayegi, expected date ${KIST_INFO.expectedDate}, status check kaise kare, eKYC zaruri hai ya nahi – sabki complete jaankari yahan padhein.`,
  keywords: [
    "pm kisan 24vi kist date 2026",
    "pm kisan 24vi kist kab aayegi",
    "pm kisan next installment date",
    "pm kisan next payment date",
    "pm kisan status check",
    "pm kisan 24th installment",
    "pm kisan 24 kist",
  ],
  authors: [{ name: "KisanStatus Team", url: "https://kisanstatus.com/about" }],
  alternates: { canonical: "https://kisanstatus.com/pm-kisan-24vi-kist" },
  openGraph: {
    title: `PM Kisan 24vi Kist Kab Aayegi? Date, Status Check Aur Latest Updates 2026`,
    description: `PM Kisan 24vi installment ki expected date ${KIST_INFO.expectedDate} hai. Status check karne ka tarika, eligibility aur eKYC details yahan padhein.`,
    url: "https://kisanstatus.com/pm-kisan-24vi-kist",
    siteName: "KisanStatus",
    locale: "hi_IN",
    type: "article",
    publishedTime: "2026-01-01T08:00:00.000Z",
    modifiedTime: "2026-06-23T08:00:00.000Z",
    images: [
      {
        url: "https://kisanstatus.com/images/pm-kisan-24vi-kist-og.webp",
        width: 800,
        height: 420,
        alt: "PM Kisan 24vi Kist Date 2026 – Status Check Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PM Kisan 24vi Kist Kab Aayegi – Date 2026 & Status Check",
    description: `PM Kisan ki 24vi kist ki expected date ${KIST_INFO.expectedDate} hai. Status check, eKYC aur latest updates yahan padhein.`,
    images: ["https://kisanstatus.com/images/pm-kisan-24vi-kist-og.webp"],
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
  headline: "PM Kisan 24vi Kist Kab Aayegi? Date, Status Check Aur Latest Updates 2026",
  description:
    "PM Kisan 24th installment ki expected date, eligibility, status check process aur eKYC requirements – sabki complete guide.",
  image: {
    "@type": "ImageObject",
    url: "https://kisanstatus.com/images/pm-kisan-24vi-kist-og.webp",
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
  datePublished: "2026-01-01T08:00:00.000Z",
  dateModified: "2026-06-23T08:00:00.000Z",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://kisanstatus.com/pm-kisan-24vi-kist",
  },
  keywords: "pm kisan 24vi kist, pm kisan next installment 2026, pm kisan 24th payment date",
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
      name: "PM Kisan 24vi kist kab aayegi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `PM Kisan 24vi kist ki expected date ${KIST_INFO.expectedDate} hai. Sarkar generally har 4 mahine mein ek kist release karti hai. Jaise hi official date confirm hogi, hum update kar denge.`,
      },
    },
    {
      "@type": "Question",
      name: "PM Kisan 24vi kist kitni hogi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `PM Kisan ki har installment ${KIST_INFO.amount} hoti hai. Saal mein 3 baar milti hai matlab total ₹6,000 per year. 24vi kist bhi ${KIST_INFO.amount} hogi.`,
      },
    },
    {
      "@type": "Question",
      name: "PM Kisan status check kaise karein?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PM Kisan status check karne ke liye pmkisan.gov.in par jaayein, Farmers Corner mein Beneficiary Status select karein, apna Aadhaar number ya registered mobile number enter karein aur OTP verify karein.",
      },
    },
    {
      "@type": "Question",
      name: "24vi kist ke liye eKYC zaruri hai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Haan, PM Kisan ki kist lene ke liye eKYC mandatory hai. Agar aapne abhi tak eKYC nahi ki hai toh pmkisan.gov.in par 'eKYC' option se OTP-based ya CSC biometric se verify karwayein.",
      },
    },
    {
      "@type": "Question",
      name: "PM Kisan 24vi kist nahi aayi toh kya karein?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Agar kist release date ke 7-10 din baad bhi paise nahi aaye toh pehle status check karein. FTO Generated ho toh bank se check karein. NPCI se Aadhaar link verify karein. Phir bhi nahi aayi toh helpline 155261 par call karein.",
      },
    },
    {
      "@type": "Question",
      name: "Kaise pata chalega ki 24vi kist meri account mein aayi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "pmkisan.gov.in par Beneficiary Status check karne par 'Payment Success' status dikhega. Saath hi aapke bank account mein credit message ya bank statement se confirm ho sakta hai.",
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
      name: "PM Kisan 24vi Kist",
      item: "https://kisanstatus.com/pm-kisan-24vi-kist",
    },
  ],
};

// ─── Article Component ────────────────────────────────────────────────────────
export default function PMKisan24viKistArticle() {
  const lastUpdated = new Date("2026-06-23T08:00:00.000Z").toLocaleDateString("hi-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const isConfirmed = KIST_INFO.status === "Confirmed" || KIST_INFO.status === "Released";
  const isReleased = KIST_INFO.status === "Released";

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
            PM Kisan 24vi Kist
          </li>
        </ol>
      </nav>

      {/* Status Notice Box */}
      <div
        className={`border-2 rounded-lg p-4 mb-6 ${
          isReleased
            ? "bg-green-50 border-green-400"
            : isConfirmed
            ? "bg-blue-50 border-blue-400"
            : "bg-orange-50 border-orange-400"
        }`}
      >
        <div className="flex items-start gap-3">
          <span className="text-2xl">{isReleased ? "✅" : isConfirmed ? "📅" : "🔔"}</span>
          <div>
            <p
              className={`font-bold text-lg ${
                isReleased ? "text-green-800" : isConfirmed ? "text-blue-800" : "text-orange-800"
              }`}
            >
              {isReleased
                ? `PM Kisan 24vi Kist Aa Gayi! – ${KIST_INFO.confirmedDate ?? "Date TBA"}`
                : isConfirmed
                ? `PM Kisan 24vi Kist Confirmed Date: ${KIST_INFO.confirmedDate ?? "Date TBA"}`
                : `PM Kisan 24vi Kist – Expected Date: ${KIST_INFO.expectedDate}`}
            </p>
            <p
              className={`text-sm mt-1 ${
                isReleased ? "text-green-700" : isConfirmed ? "text-blue-700" : "text-orange-700"
              }`}
            >
              {isReleased
                ? "Agar aapki kist nahi aayi toh neeche status check guide padhein."
                : isConfirmed
                ? "Official date confirm ho gayi hai. Paise release hote hi status update hoga."
                : "Abhi official date announce nahi hui hai. Hum yahan update karte rahenge."}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              🗓️ Last Updated: <time dateTime="2026-06-23T08:00:00.000Z">{lastUpdated}</time>
            </p>
          </div>
        </div>
      </div>

      {/* Title */}
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 leading-tight mb-3">
          PM Kisan 24vi Kist Kab Aayegi? Date, Status Check Aur Latest Updates 2026
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <span>
            ✍️ <strong>KisanStatus Team</strong>
          </span>
          <span>
            🗓️ Last Updated: <time dateTime="2026-06-23T08:00:00.000Z">{lastUpdated}</time>
          </span>
          <span>⏱️ Reading Time: ~12 min</span>
        </div>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Har kisan ka intezaar rehta hai PM Kisan ki agli kist ka. Agar aap bhi yeh jaanna chahte
          hain ki PM Kisan 24vi kist kab aayegi, kitni aayegi, aur status kaise check karein – toh
          yeh article aapke sare sawaalon ka jawab dega.
        </p>
      </header>

      {/* Kist Summary Box */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { label: "Kist Number", value: KIST_INFO.kistNumberText },
          { label: "Amount", value: KIST_INFO.amount },
          { label: "Expected Date", value: KIST_INFO.expectedDate },
          { label: "Total Beneficiaries", value: KIST_INFO.totalBeneficiaries },
        ].map(({ label, value }) => (
          <div key={label} className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
            <p className="text-xs text-gray-500 mb-1">{label}</p>
            <p className="font-bold text-green-800 text-sm">{value}</p>
          </div>
        ))}
      </div>

      {/* Hero Image */}
      <figure className="my-6">
        <Image
          src="/images/pm-kisan-24vi-kist-october-2026.webp"
          alt="PM Kisan 24vi Kist October 2026 – Rs 2000 ki Installment ki Expected Date"
          width={720}
          height={1080}
          className="rounded-xl shadow-md w-full h-auto"
          priority
        />
        <figcaption className="text-center text-sm text-gray-500 mt-2">
          PM Kisan 24vi Kist – Expected date October 2026, ₹2000 seedha bank account mein
        </figcaption>
      </figure>

      {/* Table of Contents */}
      <nav
        aria-label="Table of Contents"
        className="bg-green-50 border border-green-200 rounded-lg p-5 mb-8"
      >
        <h2 className="text-lg font-semibold text-green-800 mb-3">📋 Is Article Mein Kya Hai</h2>
        <ol className="space-y-1 text-green-700 list-decimal list-inside text-sm md:text-base">
          <li><a href="#kist-date" className="hover:underline">24vi Kist Date – Kab Aayegi?</a></li>
          <li><a href="#installment-history" className="hover:underline">PM Kisan Installment History</a></li>
          <li><a href="#eligibility" className="hover:underline">24vi Kist Ke Liye Eligibility</a></li>
          <li><a href="#status-check" className="hover:underline">Status Check Kaise Karein</a></li>
          <li><a href="#ekyc" className="hover:underline">eKYC – Mandatory Hai Ya Nahi</a></li>
          <li><a href="#problems-solutions" className="hover:underline">Common Problems Aur Solutions</a></li>
          <li><a href="#faq" className="hover:underline">Frequently Asked Questions</a></li>
          <li><a href="#conclusion" className="hover:underline">Conclusion</a></li>
        </ol>
      </nav>

      {/* Section 1 – Date */}
      <section id="kist-date" className="mb-10">
        <h2 className="text-2xl font-bold text-green-800 mb-4 border-b-2 border-green-200 pb-2">
          1. PM Kisan 24vi Kist Date – Kab Aayegi?
        </h2>
        <p className="mb-4 leading-relaxed">
          PM Kisan ki 24vi kist ki abhi official date announce nahi hui hai. Historical pattern ke
          hisaab se yeh{" "}
          <strong>{KIST_INFO.expectedDate}</strong> aa sakti hai. Sarkar generally har 4 mahine
          mein ek installment release karti hai.
        </p>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
          <p className="font-semibold text-orange-800 mb-2">📊 Kist Release Pattern:</p>
          <ul className="text-orange-700 text-sm space-y-1">
            <li>• April–July: Pehli kist (saal ki pehli)</li>
            <li>• August–November: Doosri kist</li>
            <li>• December–March: Teesri kist</li>
          </ul>
        </div>
        <p className="mb-4 leading-relaxed">
          23vi kist February 2026 mein release hui thi, isliye 24vi kist ka wait karna padega. Is
          page ko bookmark karein – hum official announcement hone par turant update karenge.
        </p>
      </section>

      {/* Section 2 – History */}
      <section id="installment-history" className="mb-10">
        <h2 className="text-2xl font-bold text-green-800 mb-4 border-b-2 border-green-200 pb-2">
          2. PM Kisan Installment History – Pichhli Kiston Ki Dates
        </h2>
        <p className="mb-4 leading-relaxed">
          Neeche PM Kisan ki recent installments ki dates aur status diye gaye hain:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-green-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Kist</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Release Date</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Amount</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["24vi Kist", KIST_INFO.expectedDate, "₹2,000", "Expected"],
                ["23vi Kist", "February 2026", "₹2,000", "Released"],
                ["22vi Kist", "October 2025", "₹2,000", "Released"],
                ["21vi Kist", "June 2025", "₹2,000", "Released"],
                ["20vi Kist", "February 2025", "₹2,000", "Released"],
                ["19vi Kist", "October 2024", "₹2,000", "Released"],
              ].map(([kist, date, amount, status]) => (
                <tr key={kist} className="odd:bg-white even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">{kist}</td>
                  <td className="border border-gray-300 px-4 py-2">{date}</td>
                  <td className="border border-gray-300 px-4 py-2">{amount}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-medium ${
                        status === "Released"
                          ? "bg-green-100 text-green-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <figure className="my-6">
          <Image
            src="/images/pm-kisan-installment-history-20vi-to-23vi.webp"
            alt="PM Kisan Kiston Ka Itihas – 20vi se 23vi Kist tak Timeline 2024-2025"
            width={800}
            height={505}
            className="rounded-xl shadow-md w-full h-auto"
            loading="lazy"
          />
          <figcaption className="text-center text-sm text-gray-500 mt-2">
            PM Kisan 20vi se 23vi Kist tak – Har baar ₹2000 ka seedha bank transfer
          </figcaption>
        </figure>
      </section>

      {/* Section 3 – Eligibility */}
      <section id="eligibility" className="mb-10">
        <h2 className="text-2xl font-bold text-green-800 mb-4 border-b-2 border-green-200 pb-2">
          3. 24vi Kist Ke Liye Eligibility – Kaun Eligible Hai?
        </h2>
        <p className="mb-4 leading-relaxed">
          PM Kisan 24vi kist paane ke liye aapko neeche diye criteria poore karne honge:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="font-semibold text-green-800 mb-2">✅ Eligible Hain Agar:</p>
            <ul className="text-green-700 text-sm space-y-1">
              <li>• Aap ek small/marginal farmer hain</li>
              <li>• Aapke naam par agricultural land hai</li>
              <li>• Aadhaar PM Kisan se linked hai</li>
              <li>• eKYC complete hai</li>
              <li>• Bank account Aadhaar se NPCI linked hai</li>
              <li>• PM Kisan mein details correct hain</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="font-semibold text-red-800 mb-2">❌ Eligible Nahi Hain Agar:</p>
            <ul className="text-red-700 text-sm space-y-1">
              <li>• Aap income tax payer hain</li>
              <li>• Aap government employee hain</li>
              <li>• Aap professional (doctor, CA, lawyer) hain</li>
              <li>• Aap constitutional post holder hain</li>
              <li>• Zameen aapke naam par nahi hai</li>
              <li>• eKYC pending hai</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4 – Status Check */}
      <section id="status-check" className="mb-10">
        <h2 className="text-2xl font-bold text-green-800 mb-4 border-b-2 border-green-200 pb-2">
          4. PM Kisan Status Check Kaise Karein
        </h2>
        <p className="mb-4 leading-relaxed">
          PM Kisan status check karne ke liye neeche diye steps follow karein:
        </p>
        <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-700">
          {[
            "pmkisan.gov.in par jaayein",
            "Farmers Corner section mein 'Beneficiary Status' par click karein",
            "Aadhaar number ya registered mobile number enter karein",
            "OTP verify karein",
            "Aapka complete payment history aur current status dikhega",
          ].map((step, i) => (
            <li key={i} className="leading-relaxed">
              <span className="font-medium text-green-700">Step {i + 1}:</span> {step}
            </li>
          ))}
        </ol>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <p className="font-semibold text-blue-800 mb-2">📱 Status Meanings:</p>
          <ul className="text-blue-700 text-sm space-y-1">
            <li>
              <strong>FTO Generated:</strong> Paise sarkar ki taraf se release ho gaye, bank process
              mein hai
            </li>
            <li>
              <strong>Payment Success:</strong> Paise aapke account mein aa gaye hain
            </li>
            <li>
              <strong>Payment Failed:</strong> Bank issue hai – account ya NPCI check karein
            </li>
            <li>
              <strong>eKYC Pending:</strong> Abhi eKYC complete karein warna kist nahi aayegi
            </li>
          </ul>
        </div>

        <p className="mb-4 leading-relaxed">
          Agar aapka naam beneficiary list mein nahi dikh raha toh PM Kisan portal par jaake apna registration number se status check karein.
        </p>
        <figure className="my-6">
          <Image
            src="/images/pm-kisan-status-check-steps.webp"
            alt="PM Kisan Status Check Kaise Kare – Registration Number OTP aur Payment Successful Steps"
            width={496}
            height={331}
            className="rounded-xl shadow-md w-full h-auto"
            loading="lazy"
          />
          <figcaption className="text-center text-sm text-gray-500 mt-2">
            PM Kisan status check – pmkisan.gov.in par Registration Number aur OTP se Payment status dekho
          </figcaption>
        </figure>
      </section>

      {/* Section 5 – eKYC */}
      <section id="ekyc" className="mb-10">
        <h2 className="text-2xl font-bold text-green-800 mb-4 border-b-2 border-green-200 pb-2">
          5. eKYC – 24vi Kist Ke Liye Zaruri Hai?
        </h2>
        <p className="mb-4 leading-relaxed">
          Haan, eKYC <strong>mandatory</strong> hai. Bina eKYC ke PM Kisan ki koi bhi kist nahi
          milegi. Agar aapne abhi tak eKYC nahi ki hai toh turant karein.{" "}
          <strong>eKYC Deadline: {KIST_INFO.eKYCDeadline}</strong>
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
          eKYC Karne Ke 3 Tarike
        </h3>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {[
            {
              title: "1. OTP Based",
              desc: "pmkisan.gov.in par eKYC option mein Aadhaar number daalo, OTP verify karo. Sabse aasaan tarika.",
              icon: "📱",
            },
            {
              title: "2. Biometric (CSC)",
              desc: "Nearest CSC centre par jaao, fingerprint se verify karwao. Agar OTP available nahi toh yeh sahi option hai.",
              icon: "🖐️",
            },
            {
              title: "3. Face Authentication",
              desc: "PM Kisan app ya Aadhaar Face RD app se face scan se bhi eKYC ho sakti hai.",
              icon: "🤳",
            },
          ].map(({ title, desc, icon }) => (
            <div key={title} className="border border-green-200 rounded-lg p-4 bg-green-50">
              <p className="text-2xl mb-2">{icon}</p>
              <p className="font-semibold text-green-800 mb-1">{title}</p>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
        <figure className="my-6">
          <Image
            src="/images/pm-kisan-ekyc-3-methods.webp"
            alt="PM Kisan eKYC Ke 3 Tarike – OTP Biometric CSC aur Face Authentication"
            width={496}
            height={331}
            className="rounded-xl shadow-md w-full h-auto"
            loading="lazy"
          />
          <figcaption className="text-center text-sm text-gray-500 mt-2">
            PM Kisan eKYC ke 3 tarike – OTP, Biometric (CSC) ya Face Authentication se karo
          </figcaption>
        </figure>
        <p className="mb-4 leading-relaxed">
          eKYC ke liye pmkisan.gov.in portal par jaayein aur apna Aadhaar number se OTP verify karein.
        </p>
      </section>

      {/* Section 6 – Problems */}
      <section id="problems-solutions" className="mb-10">
        <h2 className="text-2xl font-bold text-green-800 mb-4 border-b-2 border-green-200 pb-2">
          6. Common Problems Aur Solutions
        </h2>
        <div className="space-y-4">
          {[
            {
              problem: "Kist nahi aayi jabki status 'Payment Success' dikh raha hai",
              solution:
                "PFMS portal (pfms.nic.in) par bank account se check karein. Kabhikabhi credit hone mein 24-48 ghante lagte hain. Bank se mini-statement lein.",
            },
            {
              problem: "Status mein 'Aadhaar Authentication Failed' aa raha hai",
              solution:
                "PM Kisan mein naam aur Aadhaar par naam exactly same hona chahiye. Agriculture office mein naam correction karo.",
            },
            {
              problem: "eKYC portal par error aa raha hai",
              solution:
                "Internet connection check karein, browser refresh karein ya different browser try karein. Agar phir bhi error hai toh CSC centre par biometric eKYC karwayein.",
            },
            {
              problem: "Bank account se paise wapas aa gaye",
              solution:
                "Bank account inactive hai ya naam match nahi karta. Bank mein jaao, account activate karwao aur PM Kisan mein updated bank details daalo.",
            },
            {
              problem: "24vi kist ke liye pehli baar registration karna chahte hain",
              solution:
                "CSC centre ya pmkisan.gov.in par naya registration karo. Pehli kist aane mein 1-3 mahine lag sakte hain.",
            },
          ].map(({ problem, solution }) => (
            <div key={problem} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-red-50 px-4 py-2 border-b border-red-100">
                <p className="font-semibold text-red-700 text-sm">🔴 Problem: {problem}</p>
              </div>
              <div className="px-4 py-3 bg-green-50">
                <p className="text-green-800 text-sm">
                  <span className="font-semibold">✅ Solution:</span> {solution}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4">
          <p className="font-semibold text-gray-700 mb-2">📞 PM Kisan Helpline:</p>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>• Helpline Number: <strong>155261</strong></li>
            <li>• Toll Free: <strong>1800-115-526</strong></li>
            <li>• Email: <strong>pmkisan-ict@gov.in</strong></li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold text-green-800 mb-6 border-b-2 border-green-200 pb-2">
          7. Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            {
              q: "PM Kisan 24vi kist kab aayegi?",
              a: `PM Kisan 24vi kist ki expected date ${KIST_INFO.expectedDate} hai. Sarkar generally har 4 mahine mein ek kist release karti hai. Jaise hi official date confirm hogi, hum update kar denge. Naye updates ke liye yeh page bookmark karein.`,
            },
            {
              q: "PM Kisan 24vi kist kitni hogi?",
              a: `PM Kisan ki har installment ${KIST_INFO.amount} hoti hai. Saal mein 3 baar milti hai matlab total ₹6,000 per year. 24vi kist bhi ${KIST_INFO.amount} hogi.`,
            },
            {
              q: "PM Kisan status check kaise karein?",
              a: "pmkisan.gov.in par jaayein, Farmers Corner mein Beneficiary Status select karein, Aadhaar number ya registered mobile number enter karein aur OTP verify karein.",
            },
            {
              q: "24vi kist ke liye eKYC zaruri hai?",
              a: "Haan, PM Kisan ki kist lene ke liye eKYC mandatory hai. Agar abhi tak nahi ki toh pmkisan.gov.in par OTP-based ya CSC biometric se turant complete karein.",
            },
            {
              q: "PM Kisan 24vi kist nahi aayi toh kya karein?",
              a: "Pehle status check karein. FTO Generated ho toh bank se check karein. NPCI se Aadhaar link verify karein. Phir bhi nahi aayi toh helpline 155261 par call karein.",
            },
            {
              q: "Kaise pata chalega ki kist meri account mein aayi?",
              a: 'pmkisan.gov.in par Beneficiary Status check karne par "Payment Success" status dikhega. Saath hi bank SMS ya PFMS portal se bhi confirm kar sakte hain.',
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
          📌 Related Articles – Yeh Bhi Padhein
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              href: "https://kisanstatus.com/pm-kisan-mobile-number-change",
              title: "PM Kisan Details Update Guide",
              desc: "Mobile number, bank account aur Aadhaar update karne ki poori jaankari.",
              icon: "✏️",
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
          8. Conclusion
        </h2>
        <p className="mb-4 leading-relaxed">
          PM Kisan 24vi kist ka intezaar bahut saare kisano ko hai. Abhi official date announce
          nahi hui hai lekin hum yahan regular updates laate rehte hain. Is page ko bookmark karein.
        </p>
        <p className="mb-4 leading-relaxed">
          Kist milne ke liye sabse zaroori cheezein hain – eKYC complete honi chahiye, Aadhaar bank
          se NPCI ke zariye linked hona chahiye, aur PM Kisan mein details correct honi chahiye.
        </p>
        <p className="mb-4 leading-relaxed">
          Agar koi bhi problem ho toh helpline 155261 par call karein ya{" "}
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
            🌾 Apne gaon ke kisano ko bhi yeh guide share karein!
          </p>
          <p className="text-green-700 text-sm mt-1">Unki kist bhi aaye – yahi hamari koshish hai.</p>
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
            PM Kisan Installment &amp; Scheme Tracker
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Hamare researchers PM Kisan ki har nai kist, eKYC deadlines aur portal changes ko
            real-time track karte hain. Yeh article official pmkisan.gov.in portal aur government
            press releases par based hai aur regular basis par update hota hai.
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
            · Published: 1 January 2026
          </p>
        </div>
      </aside>
    </main>
  );
}
