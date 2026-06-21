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
      name: "PM Kisan 23vi kist kab aayegi?",
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
            Khushkhabri hai — <strong>PM Kisan 23vi kist release ho chuki
            hai!</strong> Agar aapko abhi tak apne account mein paisa aaya
            ya nahi yeh confirm karna hai, toh yeh article aapke liye hi
            likha gaya hai.
          </p>
          <p>
            Pradhan Mantri Kisan Samman Nidhi Yojana (PM Kisan Yojana 2026)
            ke under, sarkar har eligible farmer family ko saal mein ₹6,000
            deti hai — 3 kist mein, har ek ₹2,000 ki. Yeh paisa seedha bank
            account mein DBT (Direct Benefit Transfer) ke through aata hai.
          </p>
          <p>
            Is article mein hum cover karenge: <strong>PM Kisan status
            check</strong> ka aasan tarika, 23vi kist ki poori details,
            kaun eligible hai, aur agar paisa abhi tak na aaya ho toh kya
            karna chahiye.
          </p>
          <p>
            Tension lene ki zaroorat nahi hai. Chaliye step by step
            samajhte hain — bas thoda waqt do, sab clear ho jayega.
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
            PM Kisan Yojana 2026 mein har saal sarkar <strong>3 kist</strong>{" "}
            bhejti hai. Har kist <strong>₹2,000</strong> ki hoti hai, aur
            yeh har 4 mahine ke gap mein aapke Aadhaar-linked bank account
            mein seedha credit hoti hai.
          </p>
          <p>
            <strong>23vi kist 20 June 2026</strong> ko release hui.
            Prime Minister Narendra Modi ne <strong>Hooghly, West
            Bengal</strong> se yeh kist digitally release ki, jisse{" "}
            <strong>9.44 crore se zyada kisanon</strong> ko fayda hua aur
            total <strong>₹18,880 crore se zyada</strong> seedha bank
            accounts mein DBT ke through transfer hue.
          </p>
          <p>
            Agar aapne abhi tak apna status check nahi kiya, toh neeche di
            gayi step-by-step guide follow karke 2 minute mein check kar
            lo ki paisa aaya ya nahi.
          </p>
          <p>
            Pichle kuch installments ka pattern dekhein toh kist generally
            financial year ke har 4-mahine ke cycle mein release hoti hai —
            yani April-July, August-November, aur December-March. Is
            hisaab se <strong>24vi kist August-November 2026</strong> ke
            beech expected hai.
          </p>
          <p className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-stone-800">
            <strong>Yaad rakho:</strong> Paisa seedha aapke Aadhaar-linked
            bank account mein aata hai. Kisi bichauliye ya agent ki
            zaroorat nahi hoti.
          </p>

          <h3 className="text-lg font-semibold text-stone-900">
            Pichli Kist Ka Record (Quick Look)
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
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                <tr>
                  <td className="px-4 py-2">21vi Kist</td>
                  <td className="px-4 py-2">November 2025</td>
                  <td className="px-4 py-2">₹2,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">22vi Kist</td>
                  <td className="px-4 py-2">13 March 2026</td>
                  <td className="px-4 py-2">₹2,000</td>
                </tr>
                <tr className="bg-emerald-50">
                  <td className="px-4 py-2 font-semibold">23vi Kist</td>
                  <td className="px-4 py-2 font-semibold">
                    20 June 2026 — ✅ Released
                  </td>
                  <td className="px-4 py-2 font-semibold">₹2,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">24vi Kist</td>
                  <td className="px-4 py-2">Expected: Aug-Nov 2026</td>
                  <td className="px-4 py-2">₹2,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-stone-500">
            Note: 24vi kist ki exact date abhi officially announce nahi
            hui hai. Yeh table sirf pattern samajhne ke liye hai.
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
            Website ke alawa, sarkar ne <strong>PM Kisan Mobile App</strong>{" "}
            bhi launch ki hai, jo Google Play Store par free available hai.
          </p>
          <p>App mein yeh sab kar sakte ho:</p>
          <ul className="ml-5 list-disc space-y-2">
            <li>Apna beneficiary status check karna.</li>
            <li>e-KYC complete karna (face authentication se).</li>
            <li>Apni personal details update karna.</li>
            <li>Helpline aur grievance section access karna.</li>
          </ul>
          <p>
            Agar internet slow hai ya website load nahi ho rahi, app
            zyada smooth chal jata hai. Ek baar try kar ke dekho.
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
            <strong>PM Kisan status check</strong> kiya ja sakta hai. Bas
            yeh steps follow karo:
          </p>

          <ol className="ml-5 list-decimal space-y-3">
            <li>
              Official website <strong>pmkisan.gov.in</strong> par jayein.
            </li>
            <li>
              Home page par <strong>&lsquo;Farmers Corner&rsquo;</strong>{" "}
              section mein <strong>&lsquo;Know Your Status&rsquo;</strong>{" "}
              wale option par click karein.
            </li>
            <li>
              Apna <strong>Registration Number</strong> daalein.
              <br />
              <span className="text-stone-500">
                Tip: Agar registration number yaad nahi hai, toh{" "}
                <strong>&lsquo;Know your registration no.&rsquo;</strong>{" "}
                par click karke apna mobile number ya Aadhaar number daalke
                nikaal lein.
              </span>
            </li>
            <li>
              Captcha daalein aur <strong>&lsquo;Get Data&rsquo;</strong>{" "}
              par click karein.
            </li>
          </ol>

          <p>
            Bas! Aapka poora status screen par aa jayega.{" "}
            <strong>
              23vi kist aa gayi ya nahi, sab kuch dikh jayega.
            </strong>
          </p>
          <p>
            Agar status mein <strong>&ldquo;FTO Processed&rdquo;</strong>{" "}
            likha dikhe, iska matlab hai Fund Transfer Order successful ho
            gaya hai aur paisa 24-48 ghante mein account mein aa jayega.
          </p>
          <p>
            Mobile number nahi hai? Koi baat nahi — apne najdiki CSC
            (Common Service Centre) par jaakar bhi free mein status check
            karwaya ja sakta hai. Apne raajya ki gaon-wise list dekhne ke
            liye hamari{" "}
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
        <h2 id="eligibility" className="mt-12 text-2xl font-bold text-stone-900">
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
              Cultivable zameen rakhne wale small aur marginal farmer
              families (husband, wife, aur minor children).
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
            Kuch categories ko is yojana se <strong>exclude</strong> kiya
            gaya hai, zameen hone ke bawajood bhi:
          </p>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Income tax payers</strong> — jin parivaron ne pichle
              assessment year mein income tax bhara hai.
            </li>
            <li>
              <strong>Sarkari employees</strong> — central ya state
              government, PSU, ya autonomous body ke serving/retired
              officers (Group D aur Class IV staff ko chhodkar).
            </li>
            <li>
              <strong>High pension wale pensioners</strong> — jinki monthly
              pension ₹10,000 ya usse zyada hai.
            </li>
            <li>
              <strong>Practicing professionals</strong> — doctors,
              engineers, lawyers, architects, aur chartered accountants.
            </li>
            <li>
              <strong>Institutional landholders</strong> — trust, society
              ya company ke naam par zameen.
            </li>
            <li>
              Constitutional post holders, MPs, MLAs, mayors aur
              panchayat chairpersons.
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
        <h2 id="problems" className="mt-12 text-2xl font-bold text-stone-900">
          Common Problems &amp; Solutions
        </h2>
        <div className="mt-4 space-y-4 text-[17px] leading-relaxed text-stone-700">
          <p className="rounded-xl border border-amber-200 bg-amber-50 p-4 font-semibold text-amber-900">
            ⚠️ Dhyan se padho ye section. Bahut zaroori hai.
          </p>
          <p>
            Status check karne par 3 cheezon ke aage{" "}
            <strong>&ldquo;YES&rdquo;</strong> likha hona chahiye. Agar kahi{" "}
            <strong>&ldquo;NO&rdquo;</strong> dikh raha hai toh samjho paisa
            ruk sakta hai.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-stone-900">
                Problem 1: e-KYC Pending
              </h3>
              <p className="mt-1">
                Agar e-KYC &lsquo;NO&rsquo; hai toh turant karwa lo. Do
                tareeke hain:
              </p>
              <ol className="ml-5 mt-2 list-decimal space-y-1">
                <li>Najdiki CSC center par jakar biometric se karwayein.</li>
                <li>
                  pmkisan.gov.in par face authentication ya mobile OTP se
                  bhi ho jata hai kisi-kisi case mein.
                </li>
              </ol>
              <p className="mt-2">
                Poora step-by-step process janne ke liye hamari{" "}
                <a
                  href="/articles/pm-kisan-ekyc-online-2026"
                  className="font-semibold text-emerald-700 underline"
                >
                  eKYC guide
                </a>{" "}
                padho.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-stone-900">
                Problem 2: Land Seeding NO
              </h3>
              <p className="mt-1">
                Agar &lsquo;NO&rsquo; dikha raha hai matlab aapki zameen ka
                record portal mein update nahi hua hai.
              </p>
              <p className="mt-1">
                <strong>Kya karein:</strong> Apne patwari ya tehsildar se
                milo. Zameen ke papers lekar jao. Wo record update kar
                denge.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-stone-900">
                Problem 3: DBT Link NO
              </h3>
              <p className="mt-1">Ye sabse important hai.</p>
              <p className="mt-1">
                Agar DBT link nahi hai toh paisa bank mein ghussega hi
                nahi.
              </p>
              <p className="mt-1">
                <strong>Suggestion:</strong> Post office account wale
                bhaiyon ko alag se dhyan dena chahiye. Kai baar post
                office ka DBT link proper nahi hota. Bank account mein
                shift kar lo ya bank mein jakar DBT active karwa lo.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-stone-900">
                Problem 4: Payment Aane Mein Delay
              </h3>
              <p className="mt-1">
                23vi kist release ho chuki hai, lekin agar baaki sabko mil
                gaya aur aapka nahi aaya, toh turant action lo:
              </p>
              <ul className="ml-5 mt-2 list-disc space-y-2">
                <li>
                  <strong>PM Kisan Helpline</strong> numbers par call karo:
                  <div className="mt-2 space-y-1 text-stone-800">
                    <p>
                      📞{" "}
                      <a
                        href="tel:155261"
                        className="underline hover:text-emerald-700"
                      >
                        155261
                      </a>
                    </p>
                    <p>
                      📞{" "}
                      <a
                        href="tel:18001155526"
                        className="underline hover:text-emerald-700"
                      >
                        1800-11-5526
                      </a>
                    </p>
                    <p>
                      📞{" "}
                      <a
                        href="tel:01123381092"
                        className="underline hover:text-emerald-700"
                      >
                        011-23381092
                      </a>
                    </p>
                  </div>
                </li>
                <li>
                  Apne <strong>jila krishi adhikari (Agriculture Officer)</strong>{" "}
                  se milo. Unko apna registration number aur Aadhaar batao.
                </li>
                <li>
                  Bank mein jaakar <strong>account statement</strong> check
                  karo. Kabhi-kabhi paisa aaya hota hai lekin SMS nahi
                  aata.
                </li>
                <li>
                  CSC center ya PM Kisan portal par status dobara check
                  karo. Shayad koi technical error ho.
                </li>
              </ul>
              <p className="mt-2">
                Payment fail hone ke har reason aur uska fix detail mein
                janne ke liye{" "}
                <a
                  href="/articles/pm-kisan-payment-failed-status-2026"
                  className="font-semibold text-emerald-700 underline"
                >
                  Payment Failed guide
                </a>{" "}
                padho.
              </p>
            </div>
          </div>

          <p className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 font-medium text-stone-800">
            Jab tak e-KYC, Land Seeding aur DBT link teen &lsquo;YES&rsquo;
            nahi hoti, tab tak paisa aane ka rasta band hai. Isliye pehle hi
            check kar lo.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl">
          <Image
            src="/images/csc-center.webp"
            alt="CSC Digital Seva center par kisan PM Kisan e-KYC ke liye biometric verification karwate hue"
            width={1680}
            height={946}
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl">
          <Image
            src="/images/verification-success.webp"
            alt="PM Kisan e-KYC, Land Seeding aur DBT verification successful dashboard"
            width={1680}
            height={1120}
            className="h-auto w-full object-cover"
          />
        </div>

        {/* FAQs */}
        <h2 id="faqs" className="mt-12 text-2xl font-bold text-stone-900">
          FAQs — PM Kisan 23vi Kist 2026
        </h2>
        <div className="mt-4 space-y-6 text-[17px] leading-relaxed text-stone-700">
          <div>
            <h3 className="text-lg font-semibold text-stone-900">
              1. PM Kisan 23vi kist kab aayegi?
            </h3>
            <p className="mt-1">
              23vi kist 20 June 2026 ko release ho chuki hai — 9.44 crore
              se zyada kisanon ko ₹2,000 mila hai. Apna status abhi check
              karo.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-stone-900">
              2. PM Kisan status kaise check karein?
            </h3>
            <p className="mt-1">
              pmkisan.gov.in par jaakar &lsquo;Know Your Status&rsquo; par
              click karein, Registration Number daalein, Captcha bharein
              aur &lsquo;Get Data&rsquo; par click karein.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-stone-900">
              3. PM Kisan ke liye eligibility kya hai?
            </h3>
            <p className="mt-1">
              Cultivable zameen rakhne wale farmer families eligible hain.
              Income tax payers, sarkari naukri wale, high-pension
              pensioners, aur practicing professionals exclude hain.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-stone-900">
              4. PM Kisan ka paisa nahi aaya toh kya karein?
            </h3>
            <p className="mt-1">
              Pehle e-KYC, Land Seeding aur DBT bank link status check
              karein. Sab &lsquo;YES&rsquo; hone ke baad bhi paisa na aaye
              toh helpline 155261 ya 1800-11-5526 par call karein.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-stone-900">
              5. PM Kisan mein naya registration kaise karein?
            </h3>
            <p className="mt-1">
              pmkisan.gov.in par &lsquo;New Farmer Registration&rsquo;
              option se ya apne najdiki CSC center jaakar Aadhaar, zameen
              ke documents aur bank details ke saath registration kar
              sakte hain.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-stone-900">
              6. PM Kisan ki agli (24vi) kist kab aayegi?
            </h3>
            <p className="mt-1">
              23vi kist June 2026 mein release ho chuki hai, isliye 24vi
              kist August-November 2026 ke beech expected hai. Exact date
              official announcement ke baad confirm hogi.
            </p>
          </div>
        </div>

        <h2 className="mt-12 text-2xl font-bold text-stone-900">
          Agli Kist Turant Aaye, Iske Liye Yeh Checklist Abhi Poori Kar Lein
        </h2>
        <div className="mt-4 space-y-4 text-[17px] leading-relaxed text-stone-700">
          <p>
            23vi kist toh aa gayi, lekin agli (24vi) kist bina kisi
            dikkat ke aane ke liye abhi se yeh checklist follow kar lein:
          </p>
          <ul className="ml-5 list-disc space-y-2">
            <li>✅ e-KYC status &lsquo;YES&rsquo; hai ya nahi, check karein.</li>
            <li>✅ Land Seeding portal par update hai ya nahi, confirm karein.</li>
            <li>✅ Bank account Aadhaar se DBT-linked hai ya nahi.</li>
            <li>
              ✅ Mobile number registration ke time wala hi active hai ya
              nahi.
            </li>
            <li>
              ✅ Naam, spelling aur bank details Aadhaar se match karti
              hain ya nahi.
            </li>
          </ul>
          <p>
            Yeh paanch points agar sahi hain, toh agli kist ka paisa bina
            kisi dikkat ke aapke account mein time par aa jayega.
          </p>
        </div>

        <div className="my-10 rounded-2xl bg-gradient-to-r from-green-800 to-green-600 p-6 text-center text-white">
          <p className="mb-2 text-2xl">📆</p>
          <p className="mb-1 text-lg font-black">23vi Kist Ruki Hai? Pata Karo Kyun</p>
          <p className="mb-4 text-sm text-green-100">
            eKYC, bank seeding, land seeding check karo — 4 sawaal mein exact reason pata chal jayega
          </p>
          <a
            href="/calculator/installment-tracker"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-black text-green-800 transition-colors hover:bg-green-50"
          >
            📆 Installment Tracker Kholo →
          </a>
        </div>

        {/* Conclusion / CTA */}
        <h2 className="mt-12 text-2xl font-bold text-stone-900">
          Conclusion: Aapka Bhai Hamesha Aapke Saath!
        </h2>
        <div className="mt-4 space-y-4 text-[17px] leading-relaxed text-stone-700">
          <p>
            Toh bhaiyon aur behno, ab aapko{" "}
            <strong>PM Kisan 23vi kist</strong>, status check ka tarika,
            eligibility, aur common problems ke solutions sab samajh aa
            gaye honge.
          </p>
          <p>
            Sabse important baat — apna <strong>e-KYC, Land Seeding aur
            DBT link</strong> abhi check kar lo, taaki agli kist bhi bina
            kisi rukawat ke aapke account mein aa jaye.
          </p>
          <p className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 font-medium text-stone-800">
            👉 Abhi apna status check karo:{" "}
            <a
              href="https://pmkisan.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-700 underline"
            >
              pmkisan.gov.in
            </a>{" "}
            par jaakar. Aur <strong>KisanStatus.com</strong> ko bookmark kar
            lo — yahan aapko har <strong>PM Kisan payment update</strong>{" "}
            sabse pehle milegi.
          </p>
          <p>Aap sab ko achhi fasal ho, achha mausam ho, aur achha paisa ho!</p>
          <p className="text-lg font-bold text-emerald-700">
            Jai Jawan, Jai Kisan!
          </p>
        </div>

        <hr className="mt-12 border-stone-200" />
        <p className="mt-6 text-sm text-stone-500">
          © 2026 KisanStatus.com | Har Kisan Ki Awaaz
        </p>
      </article>
    </>
  );
}
