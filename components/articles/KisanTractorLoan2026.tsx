'use client';
import Link from 'next/link';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, fmtDate } from '@/components/ArticleShared';
import Image from 'next/image';
import { SvgBeneficiaryList, SvgCorrection, SvgCropInsurance, SvgEkycStatus, SvgFAQ, SvgInstallmentHistory, SvgInstallmentStatus, SvgKisanLoan, SvgLandSeeding, SvgMobileUpdate, SvgNameCorrection, SvgPaymentFailed, SvgProblemsSolution, SvgRegistration, SvgRejectedList, SvgTractorLoan } from '@/components/ArticleSVGs';

const DOMAIN = 'https://kisanstatus.com';
const SLUG   = 'kisan-tractor-loan-2026';
const URL    = `${DOMAIN}/articles/${SLUG}`;







export default function KisanTractorLoan2026() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="my-6 rounded-2xl overflow-hidden border border-green-100 shadow-md">
          <img src="/images/tractor-loan.png" alt="Kisan Tractor Loan 2026 — Subsidized Rate Par Tractor Kaise Khariden" className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            loading="lazy" width="1200" height="630"/>
          <p className="text-center text-xs text-gray-500 py-2 bg-green-50 border-t border-green-100">Kisan Tractor Loan 2026 — Subsidized Rate Par Tractor Kaise Khariden</p>
        </div>

        {/* H1 */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-800 leading-tight mb-3">
          Kisan Tractor Loan Kaise Le Bina Down Payment – 2026 Complete Guide
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          Last Updated: June 2026 &nbsp;|&nbsp; Reading Time: ~9 min &nbsp;|&nbsp; Language: Hinglish
        </p>

        {/* Intro Story */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-5 mb-8">
          <p className="text-gray-800 leading-relaxed mb-3">
            <strong>Sukhdev</strong> – Haryana ke ek chhote gaon ka kisan – kai saalon se ek sapna dekh raha tha: apna tractor. Unke paas 15 bigha zameen thi, lekin kheti ka zyada kaam bullock cart aur hire pe liye tractor se hota tha. Hired tractor ka rent itna zyada tha ki fayda hi kam ho jaata tha. Sukhdev jaanta tha ki agar apna tractor ho jaaye toh lागत ghate aur amdani badhe.
          </p>
          <p className="text-gray-800 leading-relaxed mb-3">
            Lekin problem yeh thi – ek decent tractor ki kimat kam se kam 5-7 lakh rupaye thi, aur down payment ke liye bhi 1-2 lakh chahiye the. Itni raqam ek baar mein nahi thi Sukhdev ke paas. Tab usne socha – kya bina down payment ke tractor loan mil sakta hai?
          </p>
          <p className="text-gray-800 leading-relaxed">
            Is sawaal ka jawab dhundhte dhundhte Sukhdev ne bank, NBFC aur sarkari schemes ka pura research kiya. Aur ant mein loan bhi mila aur tractor bhi. Is article mein hum wahi poori jaankari aapke saath share kar rahe hain – step by step.
          </p>
        </div>

        {/* Image 1 */}
        <figure className="my-8 rounded-xl overflow-hidden shadow-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image src="/images/pm-kisan-guide.png" alt="Kisan Tractor Loan – Kheti aur Tractor Finance Guide 2026" className="w-full h-44 sm:h-60 object-cover" width={800} height={300} />
          <figcaption className="bg-amber-700 text-white text-xs sm:text-sm text-center py-2 px-4">
            Apna Tractor, Apni Kheti – Sukhdev Jaise Lakhs Kisan Loan Se Tractor Le Rahe Hain
          </figcaption>
        </figure>

        {/* ── SECTION 1 ── */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-amber-700 border-b-2 border-amber-200 pb-2 mb-4">
            Kya Bina Down Payment Tractor Loan Mil Sakta Hai?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Seedha jawab: <strong>haan, kuch cases mein mil sakta hai</strong> – lekin "zero down payment" ek marketing term hai, poori sachai thodi alag hai. Zyaadatar banks aur finance companies 85–100% tak loan deti hain tractor ki on-road price par. Matlab aapko sirf 0–15% hi apni jeb se dena pad sakta hai.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Sukhdev ke case mein SBI ke Kisan Credit Card (KCC) holder hone ki wajah se unhe 90% financing mil gayi. Sirf 10% – yani lagbhag ₹55,000 – khud dena pada ek ₹5.5 lakh ke tractor par. Yeh ek baar mein mushkil nahi tha.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
            <p className="font-semibold text-green-800 mb-2">✅ Kab Milta Hai Zero / Low Down Payment?</p>
            <ul className="space-y-1 text-green-700 text-sm">
              <li>→ Jab aap KCC (Kisan Credit Card) holder hain</li>
              <li>→ Jab aapka CIBIL score 700+ hai</li>
              <li>→ Jab aap government subsidy scheme ke under apply karte hain</li>
              <li>→ Jab tractor company khud festive offers deti hai (0% down payment)</li>
              <li>→ Jab NBFC special rural loan scheme offer karti hai</li>
            </ul>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-amber-700 text-white">
                  <th className="border border-amber-600 px-3 py-2 text-left">Lender Type</th>
                  <th className="border border-amber-600 px-3 py-2 text-left">Max Loan %</th>
                  <th className="border border-amber-600 px-3 py-2 text-left">Min Down Payment</th>
                  <th className="border border-amber-600 px-3 py-2 text-left">Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["SBI / Nationalized Banks", "85–90%", "10–15%", "KCC holders, existing customers"],
                  ["HDFC / ICICI / Axis", "80–85%", "15–20%", "Good CIBIL score wale"],
                  ["Mahindra Finance / TAFE", "90–100%", "0–10%", "Tractor brand ke through"],
                  ["John Deere Financial", "90–95%", "5–10%", "John Deere tractor buyers"],
                  ["NBFC (Muthoot, Shriram)", "85–90%", "10–15%", "Document kam hone par"],
                  ["Government Subsidy Scheme", "Upto 100%", "0% (subsidy se)", "SC/ST, chhote kisaan"],
                ].map(([l, p, d, b], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-amber-50"}>
                    <td className="border border-gray-200 px-3 py-2 font-medium">{l}</td>
                    <td className="border border-gray-200 px-3 py-2 text-green-700 font-semibold">{p}</td>
                    <td className="border border-gray-200 px-3 py-2">{d}</td>
                    <td className="border border-gray-200 px-3 py-2 text-gray-600">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── SECTION 2 ── */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-amber-700 border-b-2 border-amber-200 pb-2 mb-4">
            Tractor Loan Kaise Kaam Karta Hai?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Tractor loan ek secured loan hota hai – matlab tractor khud collateral hota hai. Bank ya finance company tractor ki RC apne naam par ya hypothecation ke saath register karti hai. Jab tak loan poora nahi bhara, technically tractor lender ki property hai.
          </p>

          <h3 className="text-lg font-semibold text-amber-600 mb-3">Tractor Loan Ki Basic Structure:</h3>
          <div className="grid sm:grid-cols-3 gap-4 mb-5">
            {[
              { label: "Loan Amount", value: "₹3 lakh – ₹20 lakh", desc: "Tractor price ke 80–100% tak" },
              { label: "Tenure", value: "3 – 7 saal", desc: "Monthly EMI mein chunkaana" },
              { label: "Interest Rate", value: "8.5% – 14% p.a.", desc: "Bank aur scheme ke hisaab se" },
            ].map((item, i) => (
              <div key={i} className="bg-amber-50 border-2 border-amber-200 rounded-xl p-4 text-center">
                <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                <p className="text-lg font-bold text-amber-800">{item.value}</p>
                <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-700 leading-relaxed mb-3">
            Sukhdev ne ₹5,00,000 ka tractor loan liya – 5 saal ke liye, 9.5% annual interest par. Unki monthly EMI bani approximately <strong>₹10,500</strong>. Fasal aane par ek do EMI zyada bhar ke woh tenure bhi kam kar sakte hain.
          </p>

          <h3 className="text-lg font-semibold text-amber-600 mb-3">EMI Calculation Example:</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-amber-700 text-white">
                  <th className="border border-amber-600 px-3 py-2">Loan Amount</th>
                  <th className="border border-amber-600 px-3 py-2">Interest Rate</th>
                  <th className="border border-amber-600 px-3 py-2">3 Saal EMI</th>
                  <th className="border border-amber-600 px-3 py-2">5 Saal EMI</th>
                  <th className="border border-amber-600 px-3 py-2">7 Saal EMI</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["₹3,00,000", "9%", "₹9,540", "₹6,228", "₹4,797"],
                  ["₹5,00,000", "9.5%", "₹16,040", "₹10,516", "₹8,134"],
                  ["₹8,00,000", "10%", "₹25,820", "₹17,003", "₹13,208"],
                  ["₹12,00,000", "11%", "₹39,280", "₹26,100", "₹20,436"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-amber-50"}>
                    {row.map((cell, j) => (
                      <td key={j} className={`border border-gray-200 px-3 py-2 text-center ${j === 0 ? "font-semibold" : ""}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">* Approximate values. Actual EMI bank ke rate aur processing fees par depend karti hai.</p>
        </section>

        {/* Image 2 */}
        <figure className="my-8 rounded-xl overflow-hidden shadow-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image src="/images/pm-kisan-guide.png" alt="Bank Se Tractor Loan Kaise Le – Process aur Documents" className="w-full h-44 sm:h-60 object-cover" width={800} height={300} />
          <figcaption className="bg-blue-800 text-white text-xs sm:text-sm text-center py-2 px-4">
            Bank Aur Finance Company – Tractor Loan Ka Sabse Bada Source
          </figcaption>
        </figure>

        {/* ── SECTION 3 ── */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-amber-700 border-b-2 border-amber-200 pb-2 mb-4">
            Bank Se Tractor Loan Kaise Le? Step-by-Step Process
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sukhdev ne SBI se loan liya. Unhone jo process follow ki, woh hum neeche detail mein bata rahe hain. Yeh process zyaadatar nationalized banks mein almost same hoti hai.
          </p>

          <div className="space-y-3 mb-6">
            {[
              {
                step: "Step 1",
                title: "Tractor Choose Karein",
                desc: "Pehle decide karein – konsa tractor chahiye, HP kya chahiye, brand kya prefer karte hain. Authorized dealer se quotation lein. On-road price confirm karein.",
              },
              {
                step: "Step 2",
                title: "Bank Branch Jaayein Ya Online Apply Karein",
                desc: "Apne naye SBI/PNB/Bank of Baroda branch mein jaayein ya online portal par Kisan Tractor Loan section mein apply karein.",
              },
              {
                step: "Step 3",
                title: "Loan Application Form Bharein",
                desc: "Tractor loan application form milega. Usme personal details, land details, income details aur tractor details fill karein.",
              },
              {
                step: "Step 4",
                title: "Documents Submit Karein",
                desc: "Saare required documents bank officer ko dein. Checklist neeche di gayi hai. Documents complete hone chahiye – koi bhi missing nahi.",
              },
              {
                step: "Step 5",
                title: "Field Verification",
                desc: "Bank officer aapki zameen verify karne aa sakta hai. Khasra/Khatauni check hogi. Land ki value assess hogi collateral ke roop mein.",
              },
              {
                step: "Step 6",
                title: "Loan Sanction",
                desc: "Agar sab theek raha toh 7–15 din mein loan sanction ho jaata hai. Sanction letter milega jisme amount, rate, tenure sab hoga.",
              },
              {
                step: "Step 7",
                title: "Tractor Dealer Ko Payment",
                desc: "Bank seedha dealer ke account mein payment karti hai. Aap dealer se tractor receive karte hain aur RC process hoti hai.",
              },
              {
                step: "Step 8",
                title: "EMI Shuru",
                desc: "Ek mahine baad pehli EMI auto-debit hogi. Kisan account ya KCC account se kati hai. Time par bharein – CIBIL score maintain rahega.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <div className="flex-shrink-0 w-14 h-14 bg-amber-600 text-white rounded-full flex flex-col items-center justify-center text-xs font-bold text-center leading-tight">
                  <span>{item.step.split(" ")[0]}</span>
                  <span>{item.step.split(" ")[1]}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">{item.title}</p>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 4 – KCC ── */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-amber-700 border-b-2 border-amber-200 pb-2 mb-4">
            KCC Holder Ko Kya Fayda Milta Hai Tractor Loan Mein?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sukhdev ke paas KCC (Kisan Credit Card) tha – aur yahi unka sabse bada advantage raha. Agar aapke paas bhi KCC hai, toh tractor loan mein aapko kuch special benefits milte hain jo normal customer ko nahi milte.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-5">
            {[
              { icon: "💰", title: "Interest Rate Mein Choot", desc: "KCC holders ko often 0.5–1% kam interest rate milti hai. ₹5 lakh loan par 5 saal mein ₹15,000–₹25,000 ki bachat." },
              { icon: "📋", title: "Kam Documents", desc: "KCC already existing hai toh income proof, land proof sab already bank ke paas hai. Process tezi se hoti hai." },
              { icon: "⬆️", title: "Higher Loan Eligibility", desc: "KCC ki credit limit ke saath combine karke higher amount approve ho sakta hai." },
              { icon: "⏱️", title: "Faster Processing", desc: "Known customer hone ki wajah se field verification bhi fast hoti hai. 5–7 din mein sanction possible." },
              { icon: "🤝", title: "Collateral Flexibility", desc: "KCC ke against loan hone se kuch cases mein additional collateral ki zaroorat nahi padti." },
              { icon: "📅", title: "Repayment Flexibility", desc: "Fasal ke season ke hisaab se EMI schedule adjust karne ka option milta hai kuch banks mein." },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 bg-green-50 border border-green-200 rounded-lg p-3">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{item.title}</p>
                  <p className="text-gray-600 text-xs mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800 text-sm">
              <strong>💡 Sukhdev Ki Tip:</strong> Agar aapke paas KCC nahi hai, toh pehle KCC banwao – woh alag se kisi bank se free mein ban jaata hai. Phir tractor loan apply karo. Isse interest rate aur processing dono better honge.
            </p>
          </div>
        </section>

        {/* ── SECTION 5 – ELIGIBILITY ── */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-amber-700 border-b-2 border-amber-200 pb-2 mb-4">
            Tractor Loan Eligibility Criteria – Kya Chahiye?
          </h2>

          <h3 className="text-lg font-semibold text-amber-600 mb-3">Basic Eligibility:</h3>
          <ul className="space-y-2 mb-5">
            {[
              ["Umar", "18 se 65 saal ke beech (loan tenure end tak 70 se kam)"],
              ["Zameen", "Khud ki ya parivaar ki agricultural land honi chahiye (minimum 2–5 bigha, bank ke hisaab se)"],
              ["Income", "Farming income ya koi secondary income source hona chahiye"],
              ["CIBIL Score", "650+ recommended, 700+ se chances bahut zyada better hote hain"],
              ["Citizenship", "Indian citizen aur local resident hona zaroori hai"],
              ["Bank Account", "Active savings/current ya KCC account hona chahiye"],
            ].map(([label, desc], i) => (
              <li key={i} className="flex gap-3 items-start bg-gray-50 rounded-lg p-3">
                <span className="text-amber-600 font-bold text-sm flex-shrink-0 min-w-[90px]">{label}:</span>
                <span className="text-gray-700 text-sm">{desc}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold text-amber-600 mb-3">SC/ST Aur Chhote Kisano Ke Liye Special Rules:</h3>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
            <ul className="space-y-1 text-purple-800 text-sm">
              <li>→ SC/ST kisano ke liye minimum land requirement kam ho sakti hai</li>
              <li>→ Government subsidy schemes mein 25–50% subsidy direct tractor price par milti hai</li>
              <li>→ Mahila kisan hone par kuch banks extra 0.25–0.5% interest concession deti hain</li>
              <li>→ PM Kisan ya PM Fasal Bima Yojana beneficiary hone par processing fast hoti hai</li>
            </ul>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-amber-700 text-white">
                  <th className="border border-amber-600 px-3 py-2">Category</th>
                  <th className="border border-amber-600 px-3 py-2">Min Land</th>
                  <th className="border border-amber-600 px-3 py-2">Max Loan</th>
                  <th className="border border-amber-600 px-3 py-2">Subsidy Available?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Small Farmer (2–5 ha)", "2 bigha", "₹7 lakh", "Haan – state scheme se"],
                  ["Marginal Farmer (<2 ha)", "1 bigha", "₹5 lakh", "Haan – PM scheme se"],
                  ["SC/ST Farmer", "0.5 bigha", "₹6 lakh", "Haan – 50% tak"],
                  ["Large Farmer (>5 ha)", "5 bigha", "₹20 lakh", "Limited"],
                  ["Farmer Producer Org (FPO)", "Group basis", "₹50 lakh+", "Haan – NABARD se"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-amber-50"}>
                    {row.map((cell, j) => (
                      <td key={j} className={`border border-gray-200 px-3 py-2 ${j === 0 ? "font-medium" : ""}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── SECTION 6 – DOCUMENTS ── */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-amber-700 border-b-2 border-amber-200 pb-2 mb-4">
            Tractor Loan Documents Required – Puri Checklist
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sukhdev ne bataya ki document incomplete hona ek common reason hai loan delay ya rejection ka. Pehle se sab tayyar rakhein:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-5">
            {[
              {
                category: "Identity & Address Proof",
                color: "blue",
                docs: ["Aadhaar Card (original + copy)", "PAN Card", "Voter ID / Passport / Driving Licence", "Ration Card (address proof ke liye)"],
              },
              {
                category: "Land & Agriculture Documents",
                color: "green",
                docs: ["Khasra / Khatauni (Jamabandi)", "Land ownership certificate", "Crop loan passbook (if any)", "Rent/Lease agreement (agar leased land hai)"],
              },
              {
                category: "Financial Documents",
                color: "amber",
                docs: ["Bank statements (6 months)", "KCC passbook (agar hai)", "Income certificate / ITR (if applicable)", "Existing loan details (if any)"],
              },
              {
                category: "Tractor Related",
                color: "purple",
                docs: ["Dealer quotation / Pro-forma invoice", "Tractor model details & price", "Insurance quote (pre-approval)", "Dealer authorization letter"],
              },
            ].map((cat, i) => {
              const colorMap: Record<string, string> = {
                blue: "bg-blue-50 border-blue-200",
                green: "bg-green-50 border-green-200",
                amber: "bg-amber-50 border-amber-200",
                purple: "bg-purple-50 border-purple-200",
              };
              const headMap: Record<string, string> = {
                blue: "text-blue-800",
                green: "text-green-800",
                amber: "text-amber-800",
                purple: "text-purple-800",
              };
              return (
                <div key={i} className={`border rounded-lg p-4 ${colorMap[cat.color]}`}>
                  <h4 className={`font-bold mb-2 text-sm ${headMap[cat.color]}`}>{cat.category}</h4>
                  <ul className="space-y-1">
                    {cat.docs.map((d, j) => (
                      <li key={j} className="text-gray-700 text-xs flex gap-1.5">
                        <span className="text-green-600">✓</span>{d}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── SECTION 7 – GOVT SUBSIDY ── */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-amber-700 border-b-2 border-amber-200 pb-2 mb-4">
            Government Subsidy Options – Tractor Par Kitni Milti Hai?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Yeh section bahut kaam ka hai – aur zyaadatar kisan yahan galti karte hain. Woh pehle loan le lete hain, baad mein pata chalta hai ki subsidy bhi milti thi. Sukhdev ne pehle subsidy check ki, phir loan liya – isse unhe kaafi faida hua.
          </p>

          <div className="space-y-4 mb-5">
            {[
              {
                scheme: "PM Kisan Tractor Scheme / Sub-Mission on Agricultural Mechanization (SMAM)",
                benefit: "25–50% subsidy on tractor purchase",
                who: "Small aur marginal farmers, SC/ST",
                how: "State agriculture department se apply karein. DBT (Direct Benefit Transfer) se seedha account mein.",
                note: "State-wise amount alag hota hai. Haryana mein SC/ST ko 50%, others ko 25%.",
              },
              {
                scheme: "NABARD Tractor Finance Scheme",
                benefit: "Low interest refinancing – banks ko saste rate pe paisa milta hai jo woh kisan ko dete hain",
                who: "Sabhi kisaan jo bank se loan lete hain",
                how: "Automatic – jab aap bank se tractor loan lete hain toh bank NABARD refinancing use kar sakta hai",
                note: "Direct apply nahi hota. Bank ke through benefit milta hai.",
              },
              {
                scheme: "State Government Tractor Schemes",
                benefit: "State ke hisaab se – ₹50,000 to ₹1,50,000 tak subsidy",
                who: "State resident farmers",
                how: "State agriculture portal ya nearest Krishi Vigyan Kendra se contact karein",
                note: "UP, MP, Rajasthan, Punjab – sabki alag schemes hain. Check karein.",
              },
            ].map((item, i) => (
              <details key={i} className="border-2 border-amber-100 rounded-xl overflow-hidden">
                <summary className="bg-amber-50 px-4 py-3 cursor-pointer font-semibold text-amber-900 text-sm flex justify-between items-center">
                  <span>🌾 {item.scheme}</span>
                  <span className="text-green-600 font-bold text-xs ml-2 flex-shrink-0">{item.benefit}</span>
                </summary>
                <div className="px-4 py-3 bg-white space-y-1 text-sm">
                  <p><strong className="text-gray-700">Eligibility:</strong> <span className="text-gray-600">{item.who}</span></p>
                  <p><strong className="text-gray-700">Kaise Apply Karein:</strong> <span className="text-gray-600">{item.how}</span></p>
                  <p className="text-orange-600 text-xs">⚠️ {item.note}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4">
            <p className="text-yellow-800 text-sm">
              <strong>💡 Pro Tip (Sukhdev Se Seekha):</strong> Pehle state agriculture department ki website par jaayein aur check karein ki koi tractor subsidy scheme chal rahi hai. Agar hai toh pehle wahan register karein. Subsidy approve hone ke baad bank se loan lena aur bhi aasaan ho jaata hai – bank bhi zyada confident rehta hai.
            </p>
          </div>
        </section>

        {/* ── SECTION 8 – FINANCE COMPANIES ── */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-amber-700 border-b-2 border-amber-200 pb-2 mb-4">
            Tractor Finance Companies vs Banks – Kaun Behtar Hai?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Sukhdev ne dono options explore kiye. Ultimately bank se loan liya kyunki interest rate kam thi. Lekin finance companies ke apne fayde hain. Neeche comparison hai:
          </p>

          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-amber-700 text-white">
                  <th className="border border-amber-600 px-3 py-2">Factor</th>
                  <th className="border border-amber-600 px-3 py-2">Bank (SBI/PNB etc.)</th>
                  <th className="border border-amber-600 px-3 py-2">Finance Company (Mahindra, TAFE)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Interest Rate", "8.5–11% p.a.", "10–14% p.a."],
                  ["Processing Time", "7–15 din", "3–7 din"],
                  ["Down Payment", "10–15%", "0–10% (brand offers)"],
                  ["Documents", "Zyada thorough", "Thoda flexible"],
                  ["CIBIL Requirement", "650+", "600+ (flexible)"],
                  ["Subsidy Integration", "Easy (DBT link)", "Limited"],
                  ["After-sales Service", "Not provided", "Brand se deal"],
                  ["Best For", "Low interest chahiye", "Quick approval / low down payment"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-amber-50"}>
                    <td className="border border-gray-200 px-3 py-2 font-medium">{row[0]}</td>
                    <td className="border border-gray-200 px-3 py-2 text-blue-700">{row[1]}</td>
                    <td className="border border-gray-200 px-3 py-2 text-green-700">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Image 3 */}
        <figure className="my-8 rounded-xl overflow-hidden shadow-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image src="/images/pm-kisan-guide.png" alt="Tractor Loan Approved – Sukhdev Ko Tractor Mil Gaya" className="w-full h-44 sm:h-60 object-cover" width={800} height={300} />
          <figcaption className="bg-green-800 text-white text-xs sm:text-sm text-center py-2 px-4">
            Loan Approve – Sukhdev Ka Tractor Aaya, Kheti Ka Kaam Aasaan Ho Gaya
          </figcaption>
        </figure>

        {/* ── SECTION 9 – REJECTION REASONS ── */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-amber-700 border-b-2 border-amber-200 pb-2 mb-4">
            Common Rejection Reasons Aur Loan Approval Tips
          </h2>

          <h3 className="text-lg font-semibold text-amber-600 mb-3">Loan Reject Kyon Hota Hai – 7 Main Reasons:</h3>
          <div className="space-y-2 mb-5">
            {[
              { r: "Low CIBIL Score (below 600)", s: "Loan lene se 6 mahine pehle existing loans samay par bharein. Credit card bills clear karein." },
              { r: "Incomplete Documents", s: "Upar di gayi checklist ke saath saare documents pehle se photocopy karein. Koi bhi missing mat rakhein." },
              { r: "Land Dispute / Undocumented Land", s: "Zameen ka naam aapke ya family ke naam par clear hona chahiye. Dispute wali zameen pe loan nahi milta." },
              { r: "Too Many Existing Loans", s: "Ek saath zyada loans hone par FOIR (Fixed Obligation to Income Ratio) bad ho jaata hai. Kuch loans close karein pehle." },
              { r: "Incorrect / Mismatched Information", s: "Form mein naam, Aadhaar, aur land records sab ek jaisi spelling mein honi chahiye. Mismatch = instant problem." },
              { r: "Land Too Small", s: "Kuch banks minimum 2–5 bigha maangti hain. Agar itni zameen nahi hai, NBFC ya government scheme try karein." },
              { r: "Previous Loan Default", s: "Purana koi bhi loan ya KCC default hone se bank seedha reject kar sakti hai. Pehle settlement karein." },
            ].map((item, i) => (
              <div key={i} className="border border-red-100 rounded-lg overflow-hidden">
                <div className="flex items-center gap-2 bg-red-50 px-4 py-2">
                  <span className="text-red-500 font-bold text-sm">❌</span>
                  <p className="font-semibold text-red-800 text-sm">{item.r}</p>
                </div>
                <div className="px-4 py-2 bg-white">
                  <p className="text-green-700 text-sm"><strong>✅ Solution:</strong> {item.s}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-amber-600 mb-3">Loan Approval Ke Liye 5 Smart Tips:</h3>
          <ul className="space-y-2 mb-2">
            {[
              "Pehle apna CIBIL score check karein (free mein – cibil.com ya Paytm app se). 700+ target rakho.",
              "Jo bank mein already account hai (salary/KCC/FD), wahan pehle apply karein – known customer ko preference milti hai.",
              "Tractor ka model wisely choose karein – bank ke approved tractor models ki list hoti hai. Usse bahar ka model reject ho sakta hai.",
              "Loan amount reasonable rakhein – 60–70% income se zyada EMI approve nahi hoti.",
              "Ek baar mein multiple banks mein apply mat karein – har application CIBIL mein inquiry hoti hai jo score girata hai.",
            ].map((tip, i) => (
              <li key={i} className="flex gap-2 text-gray-700 text-sm items-start">
                <span className="text-amber-600 font-bold flex-shrink-0">#{i + 1}</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── SECTION 10 – 2026 UPDATES ── */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-amber-700 border-b-2 border-amber-200 pb-2 mb-4">
            Kisan Tractor Finance 2026 – Latest Updates
          </h2>
          <div className="space-y-3">
            {[
              { tag: "Interest Rate", color: "green", title: "RBI Ke Rate Cut Se Tractor Loan Sasta Hua", desc: "2026 mein RBI ne repo rate 0.25% cut ki hai. Iska matlab nationalized banks ke tractor loan interest rates thode kam hue hain. Current effective rate 8.5–9.5% tak aa gayi hai kuch banks mein." },
              { tag: "SMAM Scheme", color: "blue", title: "SMAM Scheme Budget 2026 Mein Extend Hua", desc: "Government ne Sub-Mission on Agricultural Mechanization ka budget ₹3,200 crore se badhake ₹4,500 crore kar diya hai. Iska fayda – zyada kisano ko tractor subsidy milegi 2026-27 mein." },
              { tag: "Digital Process", color: "purple", title: "Online Application Ab Zyada Aasaan", desc: "SBI, PNB aur Bank of Baroda ne 2026 mein apne agricultural loan portals update kiye hain. Ab document upload, status track sab mobile se ho sakta hai." },
              { tag: "Electric Tractor", color: "amber", title: "Electric Tractor Loan Schemes Shuru", desc: "2026 mein kuch banks ne electric tractor ke liye special low-interest loan schemes shuru ki hain. Mahindra, Sonalika ke electric models pe 7.5% rate pe loan available hai kuch banks mein." },
            ].map((item, i) => {
              const cm: Record<string, string> = { green: "bg-green-50 border-green-200", blue: "bg-blue-50 border-blue-200", purple: "bg-purple-50 border-purple-200", amber: "bg-amber-50 border-amber-200" };
              const tm: Record<string, string> = { green: "bg-green-100 text-green-700", blue: "bg-blue-100 text-blue-700", purple: "bg-purple-100 text-purple-700", amber: "bg-amber-100 text-amber-700" };
              return (
                <div key={i} className={`border rounded-lg p-4 ${cm[item.color]}`}>
                  <div className="flex items-start gap-3">
                    <span className={`px-2 py-0.5 rounded text-xs font-bold flex-shrink-0 ${tm[item.color]}`}>{item.tag}</span>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm mb-1">{item.title}</p>
                      <p className="text-gray-600 text-xs">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-amber-700 border-b-2 border-amber-200 pb-2 mb-6">
            FAQ – Aksar Pooche Jaane Wale Sawaal
          </h2>
          <div className="space-y-3">
            {[
              { q: "Kya bina zameen ke tractor loan mil sakta hai?", a: "Zyaadatar banks ke liye zameen zaroori hai. Lekin kuch NBFCs income proof aur guarantor ke basis par loan de deti hain. Agar aap contract farming karte hain ya FPO member hain, toh bhi options hain." },
              { q: "Purana/second-hand tractor ke liye loan milta hai?", a: "Haan, kuch banks aur finance companies second-hand tractors ke liye bhi loan deti hain – lekin amount thodi kam hogi (tractor ki current market value ka 70–80%) aur interest slightly zyada." },
              { q: "EMI nahi bhar paye toh kya hoga?", a: "Ek do EMI miss hone par bank notice bhejta hai. Regularly miss karne par tractor seize ho sakta hai. Agar problem ho toh turant bank se baat karein – restructuring ya moratorium ka option maangein." },
              { q: "Tractor loan ke liye kitni zameen chahiye?", a: "Bank ke hisaab se alag hota hai. SBI mein generally 2 hectare (5 bigha), chhote banks ya NBFCs mein 1 bigha bhi kaafi ho sakti hai. Government subsidy schemes mein requirements kam hoti hain." },
              { q: "Kya joint application possible hai tractor loan mein?", a: "Haan – husband-wife ya family member saath mein co-applicant ho sakte hain. Isse combined income consider hoti hai aur loan amount zyada milta hai." },
              { q: "Tractor loan par koi insurance hota hai?", a: "Haan – bank usually tractor insurance aur borrower ka life insurance compulsory karta hai. Insurance premium loan amount mein add ho jaata hai ya alag se dena padta hai." },
              { q: "Processing fee kitni hoti hai?", a: "Generally loan amount ka 0.5–1% processing fee hoti hai. SBI mein usually ₹500–₹2,000 flat charge hota hai. NBFC mein zyada ho sakta hai – apply se pehle poochhein." },
            ].map((item, i) => (
              <details key={i} className="border-2 border-amber-100 rounded-xl overflow-hidden">
                <summary className="bg-amber-50 px-5 py-3 cursor-pointer font-semibold text-amber-900 text-sm flex justify-between items-center gap-2">
                  <span>Q{i + 1}: {item.q}</span>
                  <span className="text-amber-500 flex-shrink-0">▼</span>
                </summary>
                <div className="px-5 py-3 bg-white">
                  <p className="text-gray-700 text-sm leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ── CONCLUSION ── */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-amber-700 border-b-2 border-amber-200 pb-2 mb-4">
            Conclusion – Sukhdev Ki Tarah Aap Bhi Tractor Le Sakte Hain
          </h2>
          <div className="bg-amber-700 text-white rounded-xl p-6 mb-6">
            <p className="leading-relaxed mb-3">
              Sukhdev ki story yeh prove karti hai – agar sahi planning ho, documents tayyar hon aur sahi bank/scheme chunin, toh tractor loan lena utna mushkil nahi jitna lagta hai. Down payment ki bhi poori zaroorat nahi – 10–15% se bhi kaam chala sakte hain, aur agar government subsidy mile toh aur bhi better.
            </p>
            <p className="leading-relaxed mb-3">
              Sabse zaroori baat – pehle research karein. Apne state ki agriculture scheme check karein. CIBIL score theek karein. KCC banwayein. Phir bank se baat karein. Ek systematic approach se Sukhdev ne tractor liya – aur aap bhi le sakte hain.
            </p>
            <p className="leading-relaxed">
              Aaj Sukhdev ke tractor se unki kheti ki lागत 40% kam ho gayi hai. Neighbouring farms mein bhi woh apna tractor bheja dete hain aur extra income kamate hain. Ek loan ne unki puri farming economy badal di.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 mb-6">
            <h3 className="font-bold text-gray-800 mb-3">🔗 Related Articles (Aage Kya Padhein):</h3>
            <ul className="space-y-2">
              {[
                "KCC (Kisan Credit Card) Kaise Banwayein – Complete Guide 2026",
                "PM Kisan Samman Nidhi Yojana – 19th Installment Status Kaise Check Karein",
                "Fasal Bima Yojana – Claim Kaise Karein Step By Step",
                "NABARD Agricultural Loan Kya Hai – Kaise Apply Karein",
                "Kisan Vikas Patra – FD Se Behtar Kyon Hai Kisano Ke Liye",
              ].map((link, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-amber-500">→</span>
                  <span className="text-amber-700 text-sm font-medium hover:underline cursor-pointer">{link}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Quick Summary */}
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-yellow-900 text-lg mb-3">⚡ Quick Summary – Kisan Tractor Loan 2026</h3>
          <div className="grid sm:grid-cols-2 gap-2 text-sm">
            {[
              ["Loan Amount", "₹3 lakh – ₹20 lakh"],
              ["Interest Rate", "8.5% – 14% p.a."],
              ["Down Payment", "0% – 15% (scheme wise)"],
              ["Tenure", "3 – 7 saal"],
              ["KCC Benefit", "Extra 0.5–1% rate cut"],
              ["Govt Subsidy", "25–50% (SMAM scheme)"],
              ["Processing Time", "7–15 din (bank)"],
              ["CIBIL Required", "650+ (700+ best)"],
            ].map(([k, v], i) => (
              <div key={i} className="flex gap-2">
                <span className="font-semibold text-yellow-800 flex-shrink-0">{k}:</span>
                <span className="text-gray-700">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-400 text-center border-t pt-4">
          Yeh article sirf informational hai. Actual loan terms bank aur scheme ke hisaab se alag ho sakte hain. Apply karne se pehle apni bank ya financial advisor se confirm zaroor karein. | © 2026 KisanStatus.com
        </p>

      </article>
    </main>
  );
}

