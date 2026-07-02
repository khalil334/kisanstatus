import Image from "next/image";
import Link from "next/link";

// ─── ⚙️  UPDATE THIS SECTION WHEN DATE IS CONFIRMED ─────────────────────────
// 23vi tranche confirmed = 20 June 2026 (source: live site banner)
// 24vi expected = October 2026 (4-month gap from 23vi)
export const KIST_INFO = {
  kistNumber:        "24",
  kistNumberText:    "24vi",
  expectedDate:      "October 2026 (Expected)",
  confirmedDate:     null as string | null, // Set to "15 October 2026" once confirmed
  amount:            "₹2,000",
  status:            "Expected" as "Expected" | "Confirmed" | "Released",
  verificationDeadline: "Portal check karein – deadline update hogi",
  totalRecipients:   "~9 Crore+",
};
// ─────────────────────────────────────────────────────────────────────────────

const LAST_UPDATED = "2026-06-24T08:00:00+05:30";

// ─── Article Component ────────────────────────────────────────────────────────
export default function PmKisan24viKist2026() {
  const lastUpdated = new Date(LAST_UPDATED).toLocaleDateString("hi-IN", {
    year:  "numeric",
    month: "long",
    day:   "numeric",
  });

  const isConfirmed = KIST_INFO.status === "Confirmed" || KIST_INFO.status === "Released";
  const isReleased  = KIST_INFO.status === "Released";

  return (
    <main className="max-w-4xl mx-auto px-3 sm:px-4 py-6 sm:py-8 text-[var(--color-text)]">

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="text-xs sm:text-sm text-[var(--color-text-muted)] mb-4">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link href="/" className="text-[var(--color-primary)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-[var(--color-text)]">24vi Tranche Guide</li>
        </ol>
      </nav>

      {/* Status Notice Box */}
      <div
        className={`border-2 rounded-lg p-3 sm:p-4 mb-5 ${
          isReleased  ? "bg-green-50 dark:bg-green-900/20 border-green-400 dark:border-green-700"
          : isConfirmed ? "bg-blue-50 dark:bg-blue-900/20 border-blue-400 dark:border-blue-700"
          : "bg-orange-50 dark:bg-orange-900/20 border-orange-400 dark:border-orange-700"
        }`}
      >
        <div className="flex items-start gap-2 sm:gap-3">
          <span className="text-xl sm:text-2xl flex-shrink-0">
            {isReleased ? "✅" : isConfirmed ? "📅" : "🔔"}
          </span>
          <div>
            <p className={`font-bold text-base sm:text-lg leading-snug ${
              isReleased  ? "text-green-800 dark:text-green-300"
              : isConfirmed ? "text-blue-800 dark:text-blue-300"
              : "text-orange-800 dark:text-orange-300"
            }`}>
              {isReleased && KIST_INFO.confirmedDate
                ? `24vi Tranche Released! – ${KIST_INFO.confirmedDate}`
                : isConfirmed && KIST_INFO.confirmedDate
                ? `24vi Tranche Confirmed: ${KIST_INFO.confirmedDate}`
                : `24vi Tranche – Expected: ${KIST_INFO.expectedDate}`}
            </p>
            <p className={`text-xs sm:text-sm mt-1 ${
              isReleased  ? "text-green-700 dark:text-green-400"
              : isConfirmed ? "text-blue-700 dark:text-blue-400"
              : "text-orange-700 dark:text-orange-400"
            }`}>
              {isReleased
                ? "Agar aapki tranche nahi aayi toh neeche verification guide padhein."
                : isConfirmed
                ? "Official date confirm ho gayi hai. Paise release hote hi update hoga."
                : "Abhi official date announce nahi hui. Hum yahan update karte rahenge."}
            </p>
            <p className="text-xs text-[var(--color-text-muted)] mt-1.5">
              🗓️ Last Updated:{" "}
              <time dateTime={LAST_UPDATED}>{lastUpdated}</time>
            </p>
          </div>
        </div>
      </div>

      {/* Title */}
      <header className="mb-5">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-text)] leading-tight mb-3">
          Farmer Welfare 24vi Tranche Kab Aayegi? Date, Status Check Aur Latest Updates 2026
        </h1>
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-[var(--color-text-muted)]">
          <span>✍️ <Link href="/about" className="underline hover:text-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">KisanStatus Team</Link></span>
          <span>🗓️ <time dateTime={LAST_UPDATED}>{lastUpdated}</time></span>
          <span>⏱️ ~12 min read</span>
        </div>
        <p className="mt-3 text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
          Har cultivator ka intezaar rehta hai agrarian welfare scheme ki agli tranche ka. Agar aap bhi jaanna chahte hain
          ki 24vi installment kab aayegi, kitni aayegi, aur verification kaise karein – toh yeh
          article aapke sare sawaalon ka jawab dega.
        </p>
      </header>

      {/* Tranche Summary Box */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-7">
        {[
          { label: "Tranche Number",   value: KIST_INFO.kistNumberText },
          { label: "Amount",        value: KIST_INFO.amount },
          { label: "Expected Date", value: "October 2026" },
          { label: "Recipients", value: KIST_INFO.totalRecipients },
        ].map(({ label, value }) => (
          <div key={label} className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-2.5 sm:p-3 text-center">
            <p className="text-xs text-[var(--color-text-muted)] mb-0.5">{label}</p>
            <p className="font-bold text-green-800 dark:text-green-300 text-sm leading-tight">{value}</p>
          </div>
        ))}
      </div>

      {/* Hero Image */}
      <figure className="my-5">
        <Image
          src="/images/pm-kisan-24vi-kist-october-2026.webp"
          alt="Farmer welfare 24vi tranche October 2026 – Rs 2000 installment date aur verification guide"
          width={720}
          height={1080}
          className="rounded-xl shadow-md w-full h-auto"
          priority
        />
        <figcaption className="text-center text-xs sm:text-sm text-[var(--color-text-muted)] mt-2">
          24vi Tranche – Expected October 2026, ₹2000 seedha bank account mein
        </figcaption>
      </figure>

      {/* Table of Contents */}
      <nav aria-label="Table of Contents" className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-7">
        <h2 className="text-base sm:text-lg font-semibold text-green-800 dark:text-green-300 mb-2">📋 Is Article Mein Kya Hai</h2>
        <ol className="space-y-1 text-green-700 dark:text-green-400 list-decimal list-inside text-sm">
          <li><a href="#tranche-date" className="hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">24vi Tranche Date – Kab Aayegi?</a></li>
          <li><a href="#payment-history" className="hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">Payment History Timeline</a></li>
          <li><a href="#eligibility" className="hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">24vi Tranche Ke Liye Eligibility</a></li>
          <li><a href="#verification-check" className="hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">Verification Check Kaise Karein</a></li>
          <li><a href="#digital-auth" className="hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">Digital Authentication – Mandatory Hai Ya Nahi</a></li>
          <li><a href="#troubleshooting" className="hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">Common Issues Aur Solutions</a></li>
          <li><a href="#faq" className="hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">Frequently Asked Questions</a></li>
          <li><a href="#conclusion" className="hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">Conclusion</a></li>
        </ol>
      </nav>

      {/* Section 1 – Date */}
      <section id="tranche-date" className="mb-9">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-text)] mb-3 border-b-2 border-[var(--color-border)] pb-2">
          1. 24vi Tranche Date – Kab Aayegi?
        </h2>
        <p className="mb-4 leading-relaxed text-sm sm:text-base text-[var(--color-text-muted)]">
          Agrarian welfare scheme ki 24vi tranche ki abhi official date announce nahi hui hai. Lekin historical pattern
          ke hisaab se yeh <strong>October 2026</strong> mein aa sakti hai. Administration har 4 mahine mein
          ek installment release karti hai.
        </p>

        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-3 sm:p-4 mb-4">
          <p className="font-semibold text-orange-800 dark:text-orange-300 mb-2 text-sm sm:text-base">📊 Recent Tranche Release Pattern:</p>
          <ul className="text-orange-700 dark:text-orange-400 text-sm space-y-1">
            <li>• 21vi Tranche → November 2025 ✅ (Released)</li>
            <li>• 22vi Tranche → 13 March 2026 ✅ (Released)</li>
            <li>• 23vi Tranche → 20 June 2026 ✅ (Released)</li>
            <li>• 24vi Tranche → <strong>October 2026 (Expected)</strong></li>
          </ul>
        </div>

        <p className="mb-4 leading-relaxed text-sm sm:text-base text-[var(--color-text-muted)]">
          23vi tranche 20 June 2026 ko release hui thi. Iske 4 mahine baad yani October 2026 mein
          24vi tranche aane ki poori sambhavna hai. Is page ko bookmark karein – hum official
          announcement aate hi turant update karenge.
        </p>
        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
          Verification jaldi check karna ho toh hamari{" "}
          <Link href="/articles/pm-kisan-23vi-kist-2026-status-check" className="text-[var(--color-primary)] underline hover:text-[var(--color-primary-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">
            Beneficiary Verification Guide
          </Link>{" "}
          padhein.
        </p>
      </section>

      {/* Section 2 – History */}
      <section id="payment-history" className="mb-9">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-text)] mb-3 border-b-2 border-[var(--color-border)] pb-2">
          2. Payment History Timeline – Pichhli Tranches Ki Dates
        </h2>
        <p className="mb-4 leading-relaxed text-sm sm:text-base text-[var(--color-text-muted)]">
          Neeche recent installments ki dates aur status diye gaye hain:
        </p>
        <div className="overflow-x-auto mb-4 -mx-3 sm:mx-0">
          <table className="w-full border-collapse border border-[var(--color-border)] text-xs sm:text-sm">
            <thead>
              <tr className="bg-green-100 dark:bg-green-900/30">
                <th className="border border-[var(--color-border)] px-2 sm:px-4 py-2 text-left font-semibold text-[var(--color-text)]">Tranche</th>
                <th className="border border-[var(--color-border)] px-2 sm:px-4 py-2 text-left font-semibold text-[var(--color-text)]">Release Date</th>
                <th className="border border-[var(--color-border)] px-2 sm:px-4 py-2 text-left font-semibold text-[var(--color-text)]">Amount</th>
                <th className="border border-[var(--color-border)] px-2 sm:px-4 py-2 text-left font-semibold text-[var(--color-text)]">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["24vi Tranche", "October 2026",    "₹2,000", "Expected"],
                ["23vi Tranche", "20 June 2026",    "₹2,000", "Released"],
                ["22vi Tranche", "13 March 2026",   "₹2,000", "Released"],
                ["21vi Tranche", "November 2025",   "₹2,000", "Released"],
                ["20vi Tranche", "July 2025",       "₹2,000", "Released"],
                ["19vi Tranche", "February 2025",   "₹2,000", "Released"],
              ].map(([tranche, date, amount, status]) => (
                <tr key={tranche} className="odd:bg-[var(--color-card)] even:bg-[var(--color-bg-alt)]">
                  <td className="border border-[var(--color-border)] px-2 sm:px-4 py-2 font-medium text-[var(--color-text)]">{tranche}</td>
                  <td className="border border-[var(--color-border)] px-2 sm:px-4 py-2 text-[var(--color-text-muted)]">{date}</td>
                  <td className="border border-[var(--color-border)] px-2 sm:px-4 py-2 text-[var(--color-text-muted)]">{amount}</td>
                  <td className="border border-[var(--color-border)] px-2 sm:px-4 py-2">
                    <span className={`px-1.5 py-0.5 rounded text-xs font-medium ${
                      status === "Released"
                        ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                        : "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300"
                    }`}>
                      {status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <figure className="my-5">
          <Image
            src="/images/pm-kisan-installment-history-20vi-to-23vi.webp"
            alt="Payment history timeline – 19vi se 23vi tranche tak 2025 se 2026"
            width={800}
            height={505}
            className="rounded-xl shadow-md w-full h-auto"
            loading="lazy"
          />
          <figcaption className="text-center text-xs sm:text-sm text-[var(--color-text-muted)] mt-2">
            19vi se 23vi tranche tak – Har baar ₹2000 ka seedha bank transfer
          </figcaption>
        </figure>
      </section>

      {/* Section 3 – Eligibility */}
      <section id="eligibility" className="mb-9">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-text)] mb-3 border-b-2 border-[var(--color-border)] pb-2">
          3. 24vi Tranche Ke Liye Eligibility – Kaun Eligible Hai?
        </h2>
        <p className="mb-4 leading-relaxed text-sm sm:text-base text-[var(--color-text-muted)]">
          24vi tranche paane ke liye aapko neeche diye criteria poore karne honge:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3 sm:p-4">
            <p className="font-semibold text-green-800 dark:text-green-300 mb-2 text-sm sm:text-base">✅ Eligible Hain Agar:</p>
            <ul className="text-green-700 dark:text-green-400 text-sm space-y-1">
              <li>• Aap ek small/marginal cultivator hain</li>
              <li>• Aapke naam par agricultural land hai</li>
              <li>• UID beneficiary portal se linked hai</li>
              <li>• Digital authentication complete hai</li>
              <li>• Bank account UID se NPCI linked hai</li>
              <li>• Portal par details correct hain</li>
            </ul>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3 sm:p-4">
            <p className="font-semibold text-red-800 dark:text-red-300 mb-2 text-sm sm:text-base">❌ Eligible Nahi Hain Agar:</p>
            <ul className="text-red-700 dark:text-red-400 text-sm space-y-1">
              <li>• Aap income tax payer hain</li>
              <li>• Aap government employee hain</li>
              <li>• Aap professional (doctor, CA, lawyer) hain</li>
              <li>• Aap constitutional post holder hain</li>
              <li>• Zameen aapke naam par nahi hai</li>
              <li>• Digital verification pending hai</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
          Apna naam approved recipients roster mein confirm karna ho toh{" "}
          <Link href="/articles/pm-kisan-beneficiary-list-2026" className="text-[var(--color-primary)] underline hover:text-[var(--color-primary-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">
            Approved Recipients Roster Check
          </Link>{" "}
          karein.
        </p>
      </section>

      {/* Section 4 – Verification Check */}
      <section id="verification-check" className="mb-9">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-text)] mb-3 border-b-2 border-[var(--color-border)] pb-2">
          4. Beneficiary Verification Check Kaise Karein
        </h2>
        <p className="mb-4 leading-relaxed text-sm sm:text-base text-[var(--color-text-muted)]">
          Verification check karne ke liye neeche diye steps follow karein:
        </p>
        <ol className="space-y-3 mb-5 text-[var(--color-text-muted)] text-sm sm:text-base">
          {[
            "pmkisan.gov.in par jaayein",
            "Farmers Corner mein 'Beneficiary Status' par click karein",
            "UID number ya registered mobile number enter karein",
            "Verification code verify karein",
            "Aapka complete payment history aur current status dikhega",
          ].map((step, i) => (
            <li key={i} className="flex gap-2 leading-relaxed">
              <span className="flex-shrink-0 w-6 h-6 bg-[var(--color-primary)] text-white rounded-full text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 sm:p-4 mb-4">
          <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2 text-sm sm:text-base">📱 Status Ka Matlab:</p>
          <ul className="text-blue-700 dark:text-blue-400 text-sm space-y-2">
            <li><strong>FTO Generated:</strong> Paise administration ne release kiye, bank process mein hai</li>
            <li><strong>Payment Success:</strong> Paise aapke account mein aa gaye hain ✅</li>
            <li><strong>DBT Transfer Failed:</strong> Bank ya NPCI issue – neeche guide padhein</li>
            <li><strong>Digital Verification Pending:</strong> Turant authentication complete karein warna tranche rukegi</li>
          </ul>
        </div>

        <figure className="my-5">
          <Image
            src="/images/pm-kisan-status-check-steps.webp"
            alt="Beneficiary verification steps – pmkisan.gov.in par UID se payment status kaise dekhe"
            width={496}
            height={331}
            className="rounded-xl shadow-md w-full h-auto"
            loading="lazy"
          />
          <figcaption className="text-center text-xs sm:text-sm text-[var(--color-text-muted)] mt-2">
            pmkisan.gov.in par UID ya Mobile Number aur verification code se payment status dekho
          </figcaption>
        </figure>
      </section>

      {/* Section 5 – Digital Authentication */}
      <section id="digital-auth" className="mb-9">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-text)] mb-3 border-b-2 border-[var(--color-border)] pb-2">
          5. Digital Authentication – 24vi Tranche Ke Liye Zaruri Hai?
        </h2>
        <p className="mb-4 leading-relaxed text-sm sm:text-base text-[var(--color-text-muted)]">
          Haan, digital authentication <strong>mandatory</strong> hai. Bina verification ke agrarian welfare scheme ki koi bhi tranche nahi
          milegi. Agar aapne abhi tak authentication nahi ki hai toh turant karein.
        </p>

        <h3 className="text-lg sm:text-xl font-semibold text-[var(--color-text)] mb-3">
          Authentication Karne Ke 3 Tarike
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
          {[
            {
              title: "1. OTP Based",
              desc:  "pmkisan.gov.in par verification option mein UID number daalo, code verify karo. Sabse aasaan tarika.",
              icon:  "📱",
            },
            {
              title: "2. Biometric (CSC)",
              desc:  "Nearest service centre par jaao, fingerprint se verify karwao. Agar code nahi aa raha toh yeh best option hai.",
              icon:  "🖐️",
            },
            {
              title: "3. Face Auth",
              desc:  "Mobile application ya face authentication app se face scan se bhi verification ho sakti hai.",
              icon:  "🤳",
            },
          ].map(({ title, desc, icon }) => (
            <div key={title} className="border border-green-200 dark:border-green-800 rounded-lg p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 flex sm:block gap-3 items-start">
              <span className="text-2xl flex-shrink-0">{icon}</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-300 mb-1 text-sm sm:text-base">{title}</p>
                <p className="text-xs sm:text-sm text-[var(--color-text-muted)]">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <figure className="my-5">
          <Image
            src="/images/pm-kisan-ekyc-3-methods.webp"
            alt="Digital authentication kaise kare – OTP, biometric CSC aur face authentication ke 3 tarike"
            width={496}
            height={331}
            className="rounded-xl shadow-md w-full h-auto"
            loading="lazy"
          />
          <figcaption className="text-center text-xs sm:text-sm text-[var(--color-text-muted)] mt-2">
            Digital authentication – OTP, biometric (CSC) ya face authentication se karein
          </figcaption>
        </figure>

        <p className="leading-relaxed text-sm sm:text-base text-[var(--color-text-muted)]">
          Step-by-step madad chahiye toh hamari{" "}
          <Link href="/articles/pm-kisan-ekyc-online-2026" className="text-[var(--color-primary)] underline hover:text-[var(--color-primary-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">
            Digital Verification Complete Guide
          </Link>{" "}
          padhein.
        </p>
      </section>

      {/* Section 6 – Troubleshooting */}
      <section id="troubleshooting" className="mb-9">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-text)] mb-3 border-b-2 border-[var(--color-border)] pb-2">
          6. Common Issues Aur Solutions
        </h2>
        <div className="space-y-3">
          {[
            {
              issue:  "Tranche nahi aayi, status 'Payment Success' dikh raha hai",
              solution: "PFMS portal (pfms.nic.in) par bank account se check karein. Credit hone mein 24-48 ghante lag sakte hain. Bank se mini-statement lein.",
            },
            {
              issue:  "Portal par 'UID Authentication Failed' aa raha hai",
              solution: "Portal mein naam aur UID par naam exactly same hona chahiye. Agriculture office mein naam correction karwayein.",
            },
            {
              issue:  "Verification portal par error aa raha hai",
              solution: "Browser refresh karein ya alag browser try karein. Phir bhi error aaye toh service centre par biometric authentication karwayein.",
            },
            {
              issue:  "Bank account se paise wapas aa gaye",
              solution: "Bank account inactive hai ya naam match nahi karta. Bank mein jaao, account activate karwao aur portal par updated details daalo.",
            },
            {
              issue:  "Pehli baar enrollment karna chahte hain",
              solution: "Service centre ya pmkisan.gov.in par naya enrollment karo. Pehli tranche aane mein 1-3 mahine lag sakte hain.",
            },
          ].map(({ issue, solution }) => (
            <div key={issue} className="border border-[var(--color-border)] rounded-lg overflow-hidden">
              <div className="bg-red-50 dark:bg-red-900/20 px-3 py-2 border-b border-red-100 dark:border-red-800">
                <p className="font-semibold text-red-700 dark:text-red-300 text-xs sm:text-sm">🔴 Issue: {issue}</p>
              </div>
              <div className="px-3 py-2.5 bg-green-50 dark:bg-green-900/20">
                <p className="text-green-800 dark:text-green-300 text-xs sm:text-sm">
                  <span className="font-semibold">✅ Solution:</span> {solution}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-sm text-[var(--color-text-muted)] leading-relaxed">
          DBT transfer fail ke baare mein aur detail mein padhein:{" "}
          <Link href="/articles/pm-kisan-payment-failed-status-2026" className="text-[var(--color-primary)] underline hover:text-[var(--color-primary-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">
            DBT Transfer Failed Guide
          </Link>
        </p>

        <div className="bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-lg p-3 sm:p-4 mt-4">
          <p className="font-semibold text-[var(--color-text)] mb-2 text-sm sm:text-base">📞 Official Helpline:</p>
          <ul className="text-[var(--color-text-muted)] text-sm space-y-1">
            <li>• Helpline:  <strong>155261</strong></li>
            <li>• Toll Free: <strong>1800-115-526</strong></li>
            <li>• Email:     <strong>pmkisan-ict@gov.in</strong></li>
          </ul>
        </div>
      </section>

      {/* FAQ accordion */}
      <section id="faq" className="mb-9">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-text)] mb-5 border-b-2 border-[var(--color-border)] pb-2">
          7. Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {[
            {
              q: "24vi tranche kab aayegi?",
              a: "24vi tranche ki expected date October 2026 hai. 23vi tranche 20 June 2026 ko aayi thi, isliye 4 mahine baad yani October mein 24vi tranche aane ki sambhavna hai. Jaise hi official date confirm hogi, hum update kar denge.",
            },
            {
              q: "24vi tranche kitni hogi?",
              a: "Har installment ₹2,000 hoti hai. Saal mein 3 baar milti hai matlab kul ₹6,000 per year. 24vi tranche bhi ₹2,000 hogi.",
            },
            {
              q: "Beneficiary verification kaise karein?",
              a: "pmkisan.gov.in par jaayein → Farmers Corner → Beneficiary Status → UID ya mobile number enter karein → Verification code verify karein. Poori payment history dikhegi.",
            },
            {
              q: "24vi tranche ke liye digital authentication zaruri hai?",
              a: "Haan, digital authentication mandatory hai. Bina verification ke tranche nahi milegi. pmkisan.gov.in par OTP-based ya CSC biometric se turant complete karein.",
            },
            {
              q: "24vi tranche nahi aayi toh kya karein?",
              a: "Pehle verification check karein. FTO Generated ho toh bank se mini-statement lein. NPCI se UID link verify karein. Phir bhi nahi aayi toh helpline 155261 par call karein.",
            },
            {
              q: "Kaise pata chalega ki tranche meri account mein aayi?",
              a: 'pmkisan.gov.in par "Payment Success" status dikhega. Bank SMS ya PFMS portal (pfms.nic.in) se bhi confirm kar sakte hain.',
            },
          ].map(({ q, a }, i) => (
            <details
              key={i}
              className="group border border-[var(--color-border)] rounded-lg overflow-hidden"
            >
              <summary className="
                cursor-pointer
                bg-[var(--color-bg-alt)] px-3 sm:px-4 py-3
                font-semibold text-[var(--color-text)] text-sm sm:text-base
                hover:bg-green-50 dark:hover:bg-green-900/20
                list-none [appearance:none] [-webkit-appearance:none]
                flex items-center justify-between gap-2
                focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]
              ">
                <span>{q}</span>
                <span className="text-green-600 dark:text-green-400 text-lg flex-shrink-0 group-open:hidden">+</span>
                <span className="text-green-600 dark:text-green-400 text-lg flex-shrink-0 hidden group-open:block">−</span>
              </summary>
              <div className="px-3 sm:px-4 py-3 text-[var(--color-text-muted)] text-sm sm:text-base leading-relaxed border-t border-[var(--color-border)]">
                {a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Related Articles */}
      <section aria-label="Related Articles" className="mb-9">
        <h2 className="text-lg sm:text-xl font-bold text-[var(--color-text)] mb-3 border-b-2 border-[var(--color-border)] pb-2">
          📌 Yeh Bhi Padhein
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              href:  "/articles/pm-kisan-fto-generated-ka-matlab-kya-hai",
              title: "FTO Generated Ka Matlab",
              desc:  "FTO Generated, FTO Pending aur Payment Order ka poora explanation.",
              icon:  "💳",
            },
            {
              href:  "/articles/agristack-kya-hai",
              title: "AgriStack Kya Hai – Farmer ID Guide",
              desc:  "AgriStack kya hai, Farmer ID kaise banegi aur cultivator ko kya fayde milenge.",
              icon:  "🌾",
            },
            {
              href:  "/articles/pm-kisan-registration-online-2026",
              title: "Naya Enrollment Guide",
              desc:  "Pehli baar enrollment kaise karein – step by step guide.",
              icon:  "📝",
            },
          ].map(({ href, title, desc, icon }) => (
            <Link
              key={href}
              href={href}
              className="flex gap-3 p-3 sm:p-4 border border-green-200 dark:border-green-800 rounded-lg bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            >
              <span className="text-2xl flex-shrink-0">{icon}</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-300 text-sm">{title}</p>
                <p className="text-[var(--color-text-muted)] text-xs mt-0.5">{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section id="conclusion" className="mb-9">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-text)] mb-3 border-b-2 border-[var(--color-border)] pb-2">
          8. Conclusion
        </h2>
        <p className="mb-3 leading-relaxed text-sm sm:text-base text-[var(--color-text-muted)]">
          24vi tranche ka intezaar bahut saare cultivators ko hai. 23vi tranche 20 June 2026 ko aayi
          thi, isliye 24vi tranche October 2026 mein aane ki poori sambhavna hai. Abhi official date
          announce nahi hui – is page ko bookmark karein aur regular check karte rahein.
        </p>
        <p className="mb-3 leading-relaxed text-sm sm:text-base text-[var(--color-text-muted)]">
          Tranche milne ke liye teen cheezein zaroori hain: digital authentication complete honi chahiye, UID bank
          se NPCI ke zariye linked hona chahiye, aur portal par details sahi honi chahiye.
        </p>
        <p className="mb-4 leading-relaxed text-sm sm:text-base text-[var(--color-text-muted)]">
          Koi bhi problem ho toh helpline <strong>155261</strong> par call karein ya{" "}
          <Link href="/" className="text-[var(--color-primary)] underline hover:text-[var(--color-primary-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">
            kisanstatus.com
          </Link>{" "}
          par visit karein.
        </p>
        <div className="bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg p-3 sm:p-4 text-center">
          <p className="font-semibold text-green-800 dark:text-green-300 text-sm sm:text-base">
            🌾 Apne gaon ke cultivators ko bhi yeh guide share karein!
          </p>
          <p className="text-green-700 dark:text-green-400 text-xs sm:text-sm mt-1">Unki tranche bhi aaye – yahi hamari koshish hai.</p>
        </div>
      </section>

      {/* Author Box */}
      <aside
        aria-label="About the Author"
        className="mb-8 border border-[var(--color-border)] rounded-xl p-4 sm:p-5 bg-[var(--color-bg-alt)] flex gap-3 sm:gap-4 items-start"
      >
        <div
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white text-lg sm:text-xl font-bold flex-shrink-0"
          aria-hidden="true"
        >
          KT
        </div>
        <div>
          <p className="font-bold text-[var(--color-text)] text-sm sm:text-base">KisanStatus Team</p>
          <p className="text-xs text-green-700 dark:text-green-400 mb-1.5 font-medium">Agricultural Experts &amp; Farmer Advocates</p>
          <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
            Pichhle 5 saal se Indian cultivators ko government schemes navigate karne mein help kar
            rahe hain. Yeh article official pmkisan.gov.in portal aur government press releases
            par based hai aur regularly update hota hai.
          </p>
          <p className="text-xs text-[var(--color-text-muted)] mt-2">
            🔄 Last Updated: <time dateTime={LAST_UPDATED}>{lastUpdated}</time>
          </p>
        </div>
      </aside>

    </main>
  );
}