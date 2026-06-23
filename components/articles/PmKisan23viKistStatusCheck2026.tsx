import Image from "next/image";

const SITE_URL = "https://kisanstatus.com";
const PAGE_PATH = "/articles/pm-kisan-23vi-kist-2026-status-check";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "PM Kisan 23vi Kist 2026: Released — Status Check, Date & Eligibility | Full Guide",
  description:
    "PM Kisan 23vi kist 20 June 2026 ko release ho chuki hai — 9.44 crore kisanon ko ₹2,000 mila. Status check tarika, eligibility, e-KYC aur agar paisa na aaya ho toh solution.",
  image: [`${SITE_URL}/images/payment-success.webp`],
  datePublished: "2026-06-20T00:00:00+05:30",
  dateModified: "2026-06-21T00:00:00+05:30",
  author: {
    "@type": "Organization",
    name: "KisanStatus.com",
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "KisanStatus.com",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/logo.webp`,
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}${PAGE_PATH}`,
  },
  inLanguage: "hi-IN",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "PM Kisan 23vi kist kab aayi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PM Kisan ki 23vi kist 20 June 2026 ko release ho chuki hai. Prime Minister Narendra Modi ne Hooghly, West Bengal se yeh kist digitally release ki, jisse 9.44 crore se zyada kisanon ko ₹2,000 prati kisan mila — total ₹18,880 crore se zyada DBT ke through transfer hue.",
      },
    },
    {
      "@type": "Question",
      name: "PM Kisan status kaise check karein?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "pmkisan.gov.in par jaakar 'Know Your Status' par click karein, Registration Number daalein, Captcha bharein aur 'Get Data' par click karein.",
      },
    },
    {
      "@type": "Question",
      name: "PM Kisan ke liye eligibility kya hai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cultivable zameen rakhne wale farmer families eligible hain. Income tax payers, sarkari naukri wale, pension 10,000 se zyada lene wale pensioners, aur doctor/engineer/CA jaise practicing professionals is yojana se exclude hain.",
      },
    },
    {
      "@type": "Question",
      name: "PM Kisan ka paisa nahi aaya toh kya karein?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pehle e-KYC, Land Seeding aur DBT bank link status check karein. Sab 'YES' hone ke baad bhi paisa na aaye toh PM Kisan helpline 155261 ya 1800-11-5526 par call karein.",
      },
    },
    {
      "@type": "Question",
      name: "PM Kisan mein naya registration kaise karein?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "pmkisan.gov.in par 'New Farmer Registration' option par click karke Aadhaar number, zameen ke documents aur bank details ke saath form bhar sakte hain. CSC center se bhi registration ho sakta hai.",
      },
    },
    {
      "@type": "Question",
      name: "PM Kisan ki agli (24vi) kist kab aayegi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "23vi kist June 2026 mein release ho chuki hai, isliye 24vi kist agle cycle yani August-November 2026 ke beech expected hai. Exact date sarkar ki official announcement ke baad confirm hogi.",
      },
    },
  ],
};

export default function PmKisan23viKistStatusCheck2026() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <article className="mx-auto max-w-3xl px-5 py-10 sm:px-6 sm:py-14">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-stone-500">
          <a href="/" className="hover:text-emerald-700">
            Home
          </a>{" "}
          <span className="text-stone-400">/</span>{" "}
          <a href="/articles" className="hover:text-emerald-700">
            Articles
          </a>{" "}
          <span className="text-stone-400">/</span>{" "}
          <span className="text-stone-700">PM Kisan 23vi Kist 2026</span>
        </nav>

        {/* Meta */}
        <p className="mt-4 text-sm font-medium tracking-wide text-emerald-700">
          KisanStatus.com <span className="text-stone-400">|</span>{" "}
          <time dateTime="2026-06-20">20 June 2026</time>{" "}
          <span className="text-stone-400">|</span>{" "}
          <span className="text-emerald-800">
            Updated <time dateTime="2026-06-21">21 June 2026</time>
          </span>{" "}
          <span className="text-stone-400">|</span> 8 min read
        </p>

        {/* Title */}
        <h1 className="mt-3 text-3xl font-extrabold leading-tight text-stone-900 sm:text-4xl">
          PM Kisan 23vi Kist 2026: Release Ho Gayi! Status Check, Date,
          Eligibility aur Payment Update — Poori Jaankari
        </h1>

        {/* Released banner */}
        <p className="mt-4 inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-800">
          ✅ 23vi Kist Released — 20 June 2026 — ₹2,000 per kisan
        </p>

        {/* Hero image */}
        <div className="mt-8 overflow-hidden rounded-2xl">
          <Image
            src="/images/payment-success.webp"
            alt="PM Kisan 23vi kist payment successful — kisan ke bank account mein paisa transfer ka confirmation screen"
            width={1680}
            height={946}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        {/* Table of Contents */}
        <nav
          aria-label="Table of contents"
          className="mt-8 rounded-2xl border border-stone-200 bg-stone-50 p-5"
        >
          <p className="font-semibold text-stone-900">Is Article Mein:</p>
          <ol className="mt-3 ml-5 list-decimal space-y-1 text-[15px] text-emerald-700">
            <li><a href="#kist-details" className="hover:underline">PM Kisan 23vi Kist Details</a></li>
            <li><a href="#status-check" className="hover:underline">Step-by-Step Status Check Guide</a></li>
            <li><a href="#eligibility" className="hover:underline">Eligibility Criteria</a></li>
            <li><a href="#problems" className="hover:underline">Common Problems &amp; Solutions</a></li>
            <li><a href="#faqs" className="hover:underline">FAQs</a></li>
          </ol>
        </nav>

        {/* Introduction */}
        <div className="mt-8 space-y-4 text-[17px] leading-relaxed text-stone-700">
          <p>Namaskar Kisan Bhaiyo aur Behno!</p>
          <p>
            Khushkhabri hai —{" "}
            <strong>PM Kisan 23vi kist release ho chuki hai!</strong> Agar
            aapko abhi tak apne account mein paisa aaya ya nahi yeh confirm
            karna hai, toh yeh article aapke liye hi likha gaya hai.
          </p>
          <p>
            Pradhan Mantri Kisan Samman Nidhi Yojana (PM Kisan Yojana 2026)
            ke under, sarkar har eligible farmer family ko saal mein ₹6,000
            deti hai — 3 kist mein, har ek ₹2,000 ki. Yeh paisa seedha bank
            account mein DBT (Direct Benefit Transfer) ke through aata hai.
          </p>
          <p>
            Is article mein hum cover karenge:{" "}
            <strong>PM Kisan status check</strong> ka aasan tarika, 23vi kist
            ki poori details, kaun eligible hai, aur agar paisa abhi tak na
            aaya ho toh kya karna chahiye.
          </p>
          <p>
            Tension lene ki zaroorat nahi hai. Chaliye step by step samajhte
            hain — bas thoda waqt do, sab clear ho jayega.
          </p>
        </div>

        {/* Section 1: Kist Details */}
        <h2
          id="kist-details"
          className="mt-12 text-2xl font-bold text-stone-900"
        >
          PM Kisan 23vi Kist Details — Release Ho Gayi
        </h2>
        <div className="mt-4 space-y-4 text-[17px] leading-relaxed text-stone-700">
          <p>
            PM Kisan Yojana 2026 mein har saal sarkar{" "}
            <strong>3 kist</strong> bhejti hai. Har kist{" "}
            <strong>₹2,000</strong> ki hoti hai, aur yeh har 4 mahine ke gap
            mein aapke Aadhaar-linked bank account mein seedha credit hoti
            hai.
          </p>
          <p>
            <strong>23vi kist 20 June 2026</strong> ko release hui. Prime
            Minister Narendra Modi ne{" "}
            <strong>Hooghly, West Bengal</strong> se yeh kist digitally
            release ki, jisse{" "}
            <strong>9.44 crore se zyada kisanon</strong> ko fayda hua aur
            total <strong>₹18,880 crore se zyada</strong> seedha bank
            accounts mein DBT ke through transfer hue.
          </p>
          <p>
            Agar aapne abhi tak apna status check nahi kiya, toh neeche di
            gayi step-by-step guide follow karke 2 minute mein check kar lo
            ki paisa aaya ya nahi.
          </p>
          <p>
            Pichle kuch installments ka pattern dekhein toh kist generally
            financial year ke har 4-mahine ke cycle mein release hoti hai —
            yani April-July, August-November, aur December-March. Is hisaab
            se <strong>24vi kist August-November 2026</strong> ke beech
            expected hai.
          </p>
          <p className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-stone-800">
            <strong>Yaad rakho:</strong> Paisa seedha aapke Aadhaar-linked
            bank account mein aata hai. Kisi bichauliye ya agent ki zaroorat
            nahi hoti.
          </p>

          <h3 className="text-lg font-semibold text-stone-900">
            Pichli Kiston Ka Record (Quick Look)
          </h3>
          <div className="overflow-hidden rounded-xl border border-stone-200">
            <table className="w-full text-left text-[15px]">
              <thead className="bg-stone-100">
                <tr>
                  <th className="px-4 py-2 font-semibold text-stone-900">
                    Installment
                  </th>
                  <th className="px-4 py-2 font-semibold text-stone-900">
                    Release Date
                  </th>
                  <th className="px-4 py-2 font-semibold text-stone-900">
                    Amount
                  </th>
                  <th className="px-4 py-2 font-semibold text-stone-900">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                <tr className="bg-emerald-50">
                  <td className="px-4 py-2 font-semibold">23vi Kist</td>
                  <td className="px-4 py-2 font-semibold">20 June 2026</td>
                  <td className="px-4 py-2 font-semibold">₹2,000</td>
                  <td className="px-4 py-2">
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-800">
                      ✅ Released
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">22vi Kist</td>
                  <td className="px-4 py-2">13 March 2026</td>
                  <td className="px-4 py-2">₹2,000</td>
                  <td className="px-4 py-2">
                    <span className="rounded-full bg-stone-100 px-2 py-0.5 text-xs font-semibold text-stone-600">
                      Released
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">21vi Kist</td>
                  <td className="px-4 py-2">November 2025</td>
                  <td className="px-4 py-2">₹2,000</td>
                  <td className="px-4 py-2">
                    <span className="rounded-full bg-stone-100 px-2 py-0.5 text-xs font-semibold text-stone-600">
                      Released
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">24vi Kist</td>
                  <td className="px-4 py-2">Expected: Aug–Nov 2026</td>
                  <td className="px-4 py-2">₹2,000</td>
                  <td className="px-4 py-2">
                    <span className="rounded-full bg-orange-100 px-2 py-0.5 text-xs font-semibold text-orange-700">
                      Expected
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-stone-500">
            Note: 24vi kist ki exact date abhi officially announce nahi hui
            hai. Yeh table sirf pattern samajhne ke liye hai.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl">
          <Image
            src="/images/farmer-rupee.webp"
            alt="PM Kisan Yojana 2026 kist ka payment update check karta kisan apne smartphone par"
            width={1680}
            height={946}
            className="h-auto w-full object-cover"
          />
        </div>

        <h2 className="mt-12 text-2xl font-bold text-stone-900">
          PM Kisan Mobile App Se Bhi Status Check Ho Sakta Hai
        </h2>
        <div className="mt-4 space-y-4 text-[17px] leading-relaxed text-stone-700">
          <p>
            Website ke alawa, sarkar ne{" "}
            <strong>PM Kisan Mobile App</strong> bhi launch ki hai, jo Google
            Play Store par free available hai.
          </p>
          <p>App mein yeh sab kar sakte ho:</p>
          <ul className="ml-5 list-disc space-y-2">
            <li>Apna beneficiary status check karna.</li>
            <li>e-KYC complete karna (face authentication se).</li>
            <li>Apni personal details update karna.</li>
            <li>Helpline aur grievance section access karna.</li>
          </ul>
          <p>
            Agar internet slow hai ya website load nahi ho rahi, app zyada
            smooth chal jata hai. Ek baar try kar ke dekho.
          </p>
          <p>
            Apna saalana ₹6,000 ka labh, kist-wise breakdown aur agli kist
            ka estimate ek jagah dekhna hai? Hamara{" "}
            <a
              href="/calculator"
              className="font-semibold text-emerald-700 underline"
            >
              free PM Kisan Calculator
            </a>{" "}
            try karo — koi login nahi chahiye.
          </p>
        </div>

        {/* Section 2: Status Check */}
        <h2
          id="status-check"
          className="mt-12 text-2xl font-bold text-stone-900"
        >
          Step-by-Step PM Kisan Status Check Guide
        </h2>
        <div className="mt-4 space-y-4 text-[17px] leading-relaxed text-stone-700">
          <p>
            Ghabrao mat. Mobile se ghar baithe hi{" "}
            <strong>PM Kisan status check</strong> kiya ja sakta hai. Bas yeh
            steps follow karo:
          </p>
          <ol className="ml-5 list-decimal space-y-3">
            <li>
              Official website <strong>pmkisan.gov.in</strong> par jayein.
            </li>
            <li>
              Home page par{" "}
              <strong>&lsquo;Farmers Corner&rsquo;</strong> section mein{" "}
              <strong>&lsquo;Know Your Status&rsquo;</strong> wale option par
              click karein.
            </li>
            <li>
              Apna <strong>Registration Number</strong> daalein.
              <br />
              <span className="text-stone-500">
                Tip: Agar registration number yaad nahi hai, toh{" "}
                <strong>&lsquo;Know your registration no.&rsquo;</strong> par
                click karke apna mobile number ya Aadhaar number daalke
                nikaal lein.
              </span>
            </li>
            <li>
              Captcha daalein aur{" "}
              <strong>&lsquo;Get Data&rsquo;</strong> par click karein.
            </li>
          </ol>
          <p>
            Bas! Aapka poora status screen par aa jayega.{" "}
            <strong>23vi kist aa gayi ya nahi, sab kuch dikh jayega.</strong>
          </p>
          <p>
            Agar status mein{" "}
            <strong>&ldquo;FTO Processed&rdquo;</strong> likha dikhe, iska
            matlab hai Fund Transfer Order successful ho gaya hai aur paisa
            24–48 ghante mein account mein aa jayega.
          </p>
          <p>
            Mobile number nahi hai? Koi baat nahi — apne najdiki CSC (Common
            Service Centre) par jaakar bhi free mein status check karwaya ja
            sakta hai. Apne raajya ki gaon-wise list dekhne ke liye hamari{" "}
            <a
              href="/articles/pm-kisan-beneficiary-list-2026"
              className="font-semibold text-emerald-700 underline"
            >
              Beneficiary List guide
            </a>{" "}
            bhi padh sakte ho.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl">
          <Image
            src="/images/get-data-app.webp"
            alt="pmkisan.gov.in par PM Kisan status check karne ke liye Get Data button wali screen"
            width={1680}
            height={1120}
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Section 3: Eligibility */}
        <h2
          id="eligibility"
          className="mt-12 text-2xl font-bold text-stone-900"
        >
          PM Kisan Eligibility Criteria
        </h2>
        <div className="mt-4 space-y-4 text-[17px] leading-relaxed text-stone-700">
          <p>
            Har kisan automatically eligible nahi hota. PM Kisan Yojana 2026
            ke kuch clear criteria hain — chaliye samajhte hain kaun apply
            kar sakta hai aur kaun nahi.
          </p>
          <h3 className="text-lg font-semibold text-stone-900">
            Kaun Eligible Hai?
          </h3>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              Cultivable zameen rakhne wale small aur marginal farmer families
              (husband, wife, aur minor children).
            </li>
            <li>Zameen ka record official state land records mein ho.</li>
            <li>Aadhaar card hona mandatory hai.</li>
            <li>Bank account Aadhaar se linked hona chahiye.</li>
            <li>
              Women farmers jo apne naam par zameen rakhti hain, wo bhi
              individual beneficiary ke roop mein eligible hain.
            </li>
          </ul>
          <h3 className="text-lg font-semibold text-stone-900">
            Kaun Eligible Nahi Hai?
          </h3>
          <p>
            Kuch categories ko is yojana se{" "}
            <strong>exclude</strong> kiya gaya hai, zameen hone ke bawajood
            bhi:
          </p>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Income tax payers</strong> — jin parivaron ne pichle
              assessment year mein income tax bhara hai.
            </li>
            <li>
              <strong>Sarkari employees</strong> — central ya state
              government, PSU, ya autonomous body ke serving/retired officers
              (Group D aur Class IV staff ko chhodkar).
            </li>
            <li>
              <strong>High pension wale pensioners</strong> — jinki monthly
              pension ₹10,000 ya usse zyada hai.
            </li>
            <li>
              <strong>Practicing professionals</strong> — doctors, engineers,
              lawyers, architects, aur chartered accountants.
            </li>
            <li>
              <strong>Institutional landholders</strong> — trust, society ya
              company ke naam par zameen.
            </li>
            <li>
              Constitutional post holders, MPs, MLAs, mayors aur panchayat
              chairpersons.
            </li>
          </ul>
          <p>
            Agar family ke ek bhi member is list mein aata hai, toh poora
            parivar ineligible ho jata hai. Isliye apply karne se pehle yeh
            criteria zaroor check kar lein.
          </p>
          <h3 className="text-lg font-semibold text-stone-900">
            Registration Ke Liye Zaroori Documents
          </h3>
          <p>
            Agar aap naye registration karna chahte hain, toh yeh documents
            saath rakhein:
          </p>
          <ul className="ml-5 list-disc space-y-2">
            <li>Aadhaar Card (mandatory hai).</li>
            <li>Zameen ke ownership papers / land records.</li>
            <li>Bank Passbook (Aadhaar-linked account ki).</li>
            <li>Mobile number (OTP verification ke liye).</li>
            <li>Citizenship proof, agar zaroorat ho.</li>
          </ul>
        </div>

        {/* Section 4: Common Problems */}
        <h2
          id="problems"
          className="mt-12 text-2xl font-bold text-stone-900"
        >
          Common Problems &amp; Solutions
        </h2>
        <div className="mt-4 space-y-6 text-[17px] leading-relaxed text-stone-700">
          <p>
            Kai kisanon ko PM Kisan mein paisa aane mein problem aati hai.
            Neeche sabse common issues aur unke solutions diye gaye hain:
          </p>

          {/* Problem 1 */}
          <div className="rounded-xl border border-red-100 bg-red-50 p-4">
            <p className="font-semibold text-red-800">
              🔴 Problem: Paisa Nahi Aaya
            </p>
            <p className="mt-2 text-stone-700">
              <strong>Check karo:</strong> pmkisan.gov.in par &lsquo;Know Your
              Status&rsquo; mein dekhein ki kist ka status kya hai.
            </p>
            <ul className="mt-2 ml-5 list-disc space-y-1 text-stone-700">
              <li>
                <strong>e-KYC pending?</strong> — Turant complete karein OTP
                ya CSC biometric se.
              </li>
              <li>
                <strong>Land Seeding nahi hui?</strong> — Apne patwari ya
                agriculture office se zameen verify karwayein.
              </li>
              <li>
                <strong>Bank NPCI se link nahi?</strong> — Apni bank mein
                jaake Aadhaar seeding karwayein.
              </li>
              <li>
                <strong>FTO Processed dikha raha hai?</strong> — 24–48 ghante
                wait karein, paisa aa jayega.
              </li>
            </ul>
          </div>

          {/* Problem 2 */}
          <div className="rounded-xl border border-yellow-100 bg-yellow-50 p-4">
            <p className="font-semibold text-yellow-800">
              🟡 Problem: e-KYC Pending
            </p>
            <p className="mt-2 text-stone-700">
              pmkisan.gov.in par &lsquo;e-KYC&rsquo; option se Aadhaar OTP se
              verify karein. Ya nearest CSC centre par fingerprint se complete
              karwayein. Bina e-KYC ke kist nahi milegi.
            </p>
          </div>

          {/* Problem 3 */}
          <div className="rounded-xl border border-yellow-100 bg-yellow-50 p-4">
            <p className="font-semibold text-yellow-800">
              🟡 Problem: Aadhaar Authentication Failed
            </p>
            <p className="mt-2 text-stone-700">
              PM Kisan mein naam aur Aadhaar par naam exactly match karna
              chahiye. Naam correction ke liye apne Block Agriculture Officer
              (BAO) se milein aur written application dein.
            </p>
          </div>

          {/* Problem 4 */}
          <div className="rounded-xl border border-yellow-100 bg-yellow-50 p-4">
            <p className="font-semibold text-yellow-800">
              🟡 Problem: Payment Reversed / Wapas Aa Gayi
            </p>
            <p className="mt-2 text-stone-700">
              Bank account inactive hai ya naam mismatch hai. Bank mein
              jaakar account activate karwayein aur PM Kisan mein updated bank
              details update karein.
            </p>
          </div>

          <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
            <p className="font-semibold text-stone-800">
              📞 PM Kisan Helpline
            </p>
            <ul className="mt-2 space-y-1 text-stone-700">
              <li>
                Helpline:{" "}
                <strong>
                  <a href="tel:155261" className="text-emerald-700">
                    155261
                  </a>
                </strong>
              </li>
              <li>
                Toll Free:{" "}
                <strong>
                  <a href="tel:18001155526" className="text-emerald-700">
                    1800-11-5526
                  </a>
                </strong>
              </li>
              <li>
                Email:{" "}
                <strong>
                  <a
                    href="mailto:pmkisan-ict@gov.in"
                    className="text-emerald-700"
                  >
                    pmkisan-ict@gov.in
                  </a>
                </strong>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 5: FAQs */}
        <h2 id="faqs" className="mt-12 text-2xl font-bold text-stone-900">
          Frequently Asked Questions (FAQs)
        </h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "PM Kisan 23vi kist kab aayi?",
              a: "20 June 2026 ko PM Modi ne Hooghly, West Bengal se 23vi kist release ki. 9.44 crore kisanon ko ₹2,000 prati kisan — total ₹18,880 crore DBT se transfer hue.",
            },
            {
              q: "PM Kisan 24vi kist kab aayegi?",
              a: "23vi kist June 2026 mein release hui hai. Pattern ke hisaab se 24vi kist August–November 2026 ke beech expected hai. Exact date official announcement par confirm hogi.",
            },
            {
              q: "Status check karne par kuch nahi dikh raha?",
              a: "Registration number sahi daalein. Agar registered nahi ho toh 'Know your registration no.' option se mobile ya Aadhaar se pehle number dhundho, phir status check karo.",
            },
            {
              q: "e-KYC zaruri hai kya?",
              a: "Haan, e-KYC mandatory hai. Bina e-KYC ke kist band ho jaati hai. pmkisan.gov.in par OTP se ya CSC biometric se turant complete karein.",
            },
            {
              q: "Paisa kisi aur ke account mein gaya toh kya karein?",
              a: "PM Kisan helpline 155261 par turant call karein. Apna registration number aur bank details ready rakhein.",
            },
            {
              q: "Naya registration kaise karein?",
              a: "pmkisan.gov.in par 'New Farmer Registration' par click karein ya nearest CSC centre par jaakar Aadhaar, zameen documents aur bank details ke saath apply karein.",
            },
          ].map(({ q, a }) => (
            <details
              key={q}
              className="rounded-xl border border-stone-200 overflow-hidden"
            >
              <summary className="cursor-pointer bg-stone-50 px-4 py-3 font-semibold text-stone-800 hover:bg-emerald-50 list-none flex items-center justify-between">
                <span>{q}</span>
                <span className="text-emerald-600 text-lg flex-shrink-0 ml-2">+</span>
              </summary>
              <div className="px-4 py-3 text-stone-700 leading-relaxed border-t border-stone-200 text-[15px]">
                {a}
              </div>
            </details>
          ))}
        </div>

        {/* Related Articles */}
        <section aria-label="Related Articles" className="mt-12">
          <h2 className="text-xl font-bold text-stone-900 mb-4">
            📌 Yeh Bhi Padhein
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                href: "/articles/pm-kisan-mobile-number-change",
                title: "PM Kisan Details Update Guide",
                desc: "Mobile number, bank account aur Aadhaar update karne ki poori jaankari.",
                icon: "✏️",
              },
              {
                href: "/articles/agristack-kya-hai",
                title: "AgriStack Kya Hai – Farmer ID Guide",
                desc: "AgriStack kya hai, Farmer ID kaise banegi aur kisan ko kya fayde milenge.",
                icon: "🌾",
              },
            ].map(({ href, title, desc, icon }) => (
              <a
                key={href}
                href={href}
                className="flex gap-3 p-4 border border-emerald-200 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-colors"
              >
                <span className="text-2xl flex-shrink-0">{icon}</span>
                <div>
                  <p className="font-semibold text-emerald-800 text-sm">
                    {title}
                  </p>
                  <p className="text-stone-600 text-xs mt-0.5">{desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Author Box */}
        <aside
          aria-label="About the Author"
          className="mt-12 border border-stone-200 rounded-xl p-5 bg-stone-50 flex gap-4 items-start"
        >
          <div
            className="w-14 h-14 rounded-full bg-emerald-700 flex items-center justify-center text-white text-xl font-bold flex-shrink-0"
            aria-hidden="true"
          >
            KS
          </div>
          <div>
            <p className="font-bold text-stone-800 text-base">
              KisanStatus Editorial Team
            </p>
            <p className="text-xs text-emerald-700 mb-2 font-medium">
              PM Kisan Installment &amp; Scheme Tracker
            </p>
            <p className="text-sm text-stone-600 leading-relaxed">
              Hamare researchers PM Kisan ki har nai kist, e-KYC deadlines
              aur portal changes ko real-time track karte hain. Yeh article
              official pmkisan.gov.in portal aur government press releases
              par based hai aur regular basis par update hota hai.
            </p>
            <p className="text-xs text-stone-400 mt-2">
              Published:{" "}
              <time dateTime="2026-06-20">20 June 2026</time> · Updated:{" "}
              <time dateTime="2026-06-21">21 June 2026</time>
            </p>
          </div>
        </aside>
      </article>
    </>
  );
}
