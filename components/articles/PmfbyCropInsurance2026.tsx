'use client';
import Link from 'next/link';

export default function PmfbyCropInsurance2026() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="my-6 rounded-2xl overflow-hidden border border-green-100 shadow-md">
          <img 
            src="/images/articles/pmfby-crop-insurance-2026/hero-image.webp" 
            alt="Fasal Bima Yojana 2026 — Fasal Kharab Ho To Muawza Kaise Paayein" 
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            loading="eager" 
            width="1200" 
            height="630"
          />
          <p className="text-center text-xs text-gray-500 py-2 bg-green-50 border-t border-green-100">
            Crop Insurance 2026 — Nuksan Hone Par Sarkari Sahayata
          </p>
        </div>

        {/* ── H1 ── */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-800 leading-tight mb-3">
          Fasal Bima Yojana 2026 – Muawza Status Check Aur Application Process Complete Guide
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          Last Updated: July 2026 &nbsp;|&nbsp; Reading Time: ~10 min &nbsp;|&nbsp; Author: KisanStatus Team
        </p>

        {/* ── INTRO STORY ── */}
        <div className="bg-green-50 border-l-4 border-green-600 rounded-r-xl p-5 mb-8">
          <p className="text-gray-800 leading-relaxed mb-3">
            <strong>Ramlal Verma</strong> – Madhya Pradesh ke Vidisha district ke ek mehnati kisan – ne is baar kafi umeed ke saath apne khet mein soyabean aur gehun lagaya tha. Monsoon accha tha, khaad bhi sahi thi, aur unhe poori ummid thi ki is baar ki fasal se ghar ka saara hisaab theek ho jaayega.
          </p>
          <p className="text-gray-800 leading-relaxed mb-3">
            Lekin August ki ek raat mein aandhi aur ati-varsha ne sab palat diya. Khet mein paani bhar gaya. Soyabean ki khari fasal toot gayi. Kaafi hissa kharab ho gaya. Ramlal ke haath-paon phool gaye – itni mehnat, itna paisa – sab paani mein.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Tab unke padosi kisan Ramesh bhai ne kaha – <em>"Bhai, tumne crop insurance karwayi thi na? Jao seedha muawza maango. Insurance wale paise dete hain."</em> Unhe pata hi nahi tha ki application kaise hoti hai, kahan jaana hai, kya document chahiye. Is article mein wahi poori story aur process hai – jis se unhone apna <strong>fasal bima muawza</strong> successfully karwaya aur paisa bhi aaya.
          </p>
        </div>

        {/* ── IMAGE 1 ── */}
        <figure className="my-8 rounded-xl overflow-hidden shadow-lg">
          <img 
            src="/images/articles/pmfby-crop-insurance-2026/infographic.webp" 
            alt="Pradhan Mantri Fasal Bima Yojana – Key Features 2026" 
            className="w-full h-44 sm:h-60 object-cover" 
          />
          <figcaption className="bg-green-700 text-white text-xs sm:text-sm text-center py-2 px-4">
            Crop Insurance Key Features – Ek Nazar Mein
          </figcaption>
        </figure>

        {/* ── SECTION 1: PMFBY KYA HAI ── */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-green-700 border-b-2 border-green-200 pb-2 mb-4">
            Fasal Bima Yojana Kya Hai? – Pradhan Mantri Crop Insurance Ki Poori Jaankari
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            <strong>Pradhan Mantri Fasal Bima Yojana (PMFBY)</strong> bharat sarkar ki ek flagship crop insurance scheme hai jo 2016 mein shuru hui thi. Iska main maqsad hai – agar kisaan ki fasal kudrati aafat, keedo-makodo ya bimari ki wajah se kharab ho jaaye, toh use aarthik sahara mila sake.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Seedha samjhein – Ramlal ne bank se loan leke fasal lagayi. Agar yeh scheme nahi hoti toh barish se hua nuksan unhe khud bharna padta. Yeh yojana hone ki wajah se government ne unka zyaadatar nuksan cover kiya. Yahi hai is yojana ka fayda.
          </p>

          <h3 className="text-lg font-semibold text-green-600 mb-3">Key Features – Ek Nazar Mein:</h3>
          <div className="grid sm:grid-cols-2 gap-3 mb-5">
            {[
              { icon: "🌾", title: "Kharif Crops", desc: "Dhaan, maize, bajra, soyabean – Premium: 2% of sum insured" },
              { icon: "🌿", title: "Rabi Crops", desc: "Gehun, sarson, chana – Premium: 1.5% of sum insured" },
              { icon: "🍎", title: "Commercial / Horticulture", desc: "Fruits, vegetables – Premium: 5% of sum insured" },
              { icon: "💧", title: "Coverage", desc: "Baarish, sukhha, baadh, aandhi, keede, post-harvest losses" },
              { icon: "📱", title: "Online + Offline", desc: "Bank, CSC center ya pmfby.gov.in se registration" },
              { icon: "💰", title: "Direct Payment", desc: "Muawza seedha bank account mein DBT se" },
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

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-green-700 text-white">
                  <th className="border border-green-600 px-3 py-2 text-left">Fasal Type</th>
                  <th className="border border-green-600 px-3 py-2">Kisan Premium</th>
                  <th className="border border-green-600 px-3 py-2">Govt Share</th>
                  <th className="border border-green-600 px-3 py-2">Max Coverage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Kharif (Dhaan, Soyabean etc.)", "2%", "98%", "Fasal ki full value"],
                  ["Rabi (Gehun, Chana etc.)", "1.5%", "98.5%", "Fasal ki full value"],
                  ["Horticulture / Commercial", "5%", "95%", "Fasal ki full value"],
                  ["Pradhan Mantri Krishi Sinchayi", "2%", "98%", "Limited coverage"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-green-50"}>
                    <td className="border border-gray-200 px-3 py-2 font-medium">{row[0]}</td>
                    {row.slice(1).map((cell, j) => (
                      <td key={j} className="border border-gray-200 px-3 py-2 text-center">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">* Kisan premium bahut kam hota hai – baki sab government bharta hai.</p>
        </section>

        {/* ── SECTION 2: REGISTRATION ── */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-green-700 border-b-2 border-green-200 pb-2 mb-4">
            Crop Insurance Mein Registration Kaise Kare? – Eligibility Aur Process
          </h2>

          <h3 className="text-lg font-semibold text-green-600 mb-3">Eligibility Criteria:</h3>
          <ul className="space-y-2 mb-5">
            {[
              ["Kaun apply kar sakta hai?", "Sabhi farmers – owner, tenant, sharecropper – jo notified fasal ugaate hain"],
              ["Land requirement?", "Khasra/Khatauni ya lease agreement hona chahiye – apni ya kiraaye ki zameen"],
              ["KCC Wale Kisan", "Agar aapne bank se Kisan Credit Card ya crop loan liya hai, automatic enroll hoti hai"],
              ["Voluntary Enrollment", "Bina loan ke bhi koi bhi kisan voluntary basis par le sakta hai"],
              ["Registration Deadline", "Kharif ke liye July 31 tak, Rabi ke liye December 31 tak (state wise thoda alag)"],
            ].map(([label, desc], i) => (
              <li key={i} className="flex gap-3 items-start bg-gray-50 rounded-lg p-3">
                <span className="text-green-600 font-bold text-sm flex-shrink-0 min-w-[140px]">{label}</span>
                <span className="text-gray-700 text-sm">{desc}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold text-green-600 mb-3">Registration Ke 3 Tarike:</h3>
          <div className="grid sm:grid-cols-3 gap-4 mb-5">
            {[
              { method: "Bank Branch", icon: "🏦", desc: "Jo bank mein crop loan/KCC hai wahan jaayein. Woh khud enroll kar denge. Auto-debit se premium kat jaata hai.", tag: "Easiest" },
              { method: "CSC Center", icon: "🖥️", desc: "Nearest Jan Seva Kendra (CSC) par jaayein. Documents de dein, operator online registration kar dega.", tag: "Offline" },
              { method: "pmfby.gov.in", icon: "🌐", desc: "Portal par khud login karein. Aadhaar OTP se verify karein. Fasal aur land details fill karein.", tag: "Online" },
            ].map((item, i) => (
              <div key={i} className="border-2 border-green-200 rounded-xl p-4 bg-green-50 text-center">
                <span className="text-3xl">{item.icon}</span>
                <p className="font-bold text-green-800 mt-2 text-sm">{item.method}</p>
                <span className="inline-block mt-1 px-2 py-0.5 bg-green-600 text-white text-xs rounded-full">{item.tag}</span>
                <p className="text-gray-600 text-xs mt-2">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800 text-sm">
              <strong>💡 Real Experience:</strong> Ramlal ne 3 saal pehle KCC liya tha. Isliye unki crop insurance automatically enroll thi – unhe pata bhi nahi tha. Jab Ramesh bhai ne bataya tab unhe realize hua. Agar aapka bhi KCC ya crop loan hai toh check zaroor karein – aap already enrolled ho sakte hain!
            </p>
          </div>
        </section>

        {/* ── SECTION 3: CLAIM PROCESS ── */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-green-700 border-b-2 border-green-200 pb-2 mb-4">
            Fasal Bima Muawza Kaise File Kare? – Step-by-Step Guide
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ramlal ke khet mein August mein barish se fasal kharab hui. Unhone theek yahi process follow ki. Aap bhi isko exactly same tarike se karein:
          </p>

          <div className="space-y-3 mb-6">
            {[
              { step: "Step 1", title: "72 Ghante Mein Soochna Dein (CRITICAL)", desc: "Fasal nuksan hone ke 72 ghante ke andar insurance company ya bank ko soochna dena ZAROORI hai. Isse pehle nahi kiya toh application reject ho sakta hai. Ramlal ne 24 ghante mein hi inform kiya." },
              { step: "Step 2", title: "Crop Loss Helpline Pe Call Karein", desc: "PMFBY helpline: 1800-200-7710 (Toll Free). Apna policy number, Aadhaar, aur loss details batayein. Ek complaint/reference number milega – isse sambhal ke rakhein." },
              { step: "Step 3", title: "Bank Ya Insurance Company Mein Jaayein", desc: "Jo bank se yeh scheme li hai wahan jaayein. Ya seedha insurance company ki nearest branch mein. Application form lein aur fill karein." },
              { step: "Step 4", title: "Documents Submit Karein", desc: "Saare documents (neeche list di hai) bank/insurance office mein submit karein. Ek copy apne paas zaroor rakhein." },
              { step: "Step 5", title: "Survey / Inspection", desc: "Insurance company ka surveyor aayega – woh field mein jaake fasal ka nuksan assess karega. Ramlal unhe khud khet dikhaane gaye. Photos aur report banayi." },
              { step: "Step 6", title: "Assessment Report", desc: "Surveyor report ke baad insurance company assessment report taiyaar karti hai. Isme nuksan ka percentage aur muawza amount hota hai." },
              { step: "Step 7", title: "Approval Aur Payment", desc: "Approval hone ke baad muawza seedha aapke bank account mein DBT se aata hai. Ramlal ke account mein 45 din mein paisa aa gaya." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <div className={`flex-shrink-0 w-14 h-14 rounded-full flex flex-col items-center justify-center text-xs font-bold text-center leading-tight text-white ${i === 0 ? "bg-red-600" : "bg-green-600"}`}>
                  <span>{item.step.split(" ")[0]}</span>
                  <span>{item.step.split(" ")[1]}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1 text-sm">{item.title}</p>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
            <p className="font-bold text-red-800 mb-1">🚨 72 Ghante Ka Rule – Sabse Important!</p>
            <p className="text-red-700 text-sm">
              Ramlal ke padosi Shankar ne fasal kharab hone par kuch din baad inform kiya. Unki application reject ho gayi sirf isi ek wajah se. 72 ghante ki deadline miss mat karna – yeh ek unbreakable rule hai.
            </p>
          </div>
        </section>

        {/* ── IMAGE 2 ── */}
        <figure className="my-8 rounded-xl overflow-hidden shadow-lg">
          <img 
            src="/images/articles/pmfby-crop-insurance-2026/status-check.webp" 
            alt="Fasal Bima Muawza Status Check Online – pmfby.gov.in Portal" 
            className="w-full h-44 sm:h-60 object-cover" 
          />
          <figcaption className="bg-blue-800 text-white text-xs sm:text-sm text-center py-2 px-4">
            PMFBY Portal – Muawza Status Online Check Karein Ghar Baithe
          </figcaption>
        </figure>

        {/* ── SECTION 4: STATUS CHECK ── */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-green-700 border-b-2 border-green-200 pb-2 mb-4">
            Fasal Bima Muawza Status Online Check Kaise Karein?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ramlal roz apne bete se poochha karte the – "paisa aaya kya?" Portal par online status check karne se yeh tension khatam hoti hai. Neeche dono methods hain – portal aur app:
          </p>

          <h3 className="text-lg font-semibold text-green-600 mb-3">Method 1: pmfby.gov.in Portal Se Status Check</h3>
          <div className="space-y-2 mb-6">
            {[
              "Browser mein pmfby.gov.in open karein",
              "Homepage par 'Application Status' ya 'Muawza Status' tab dhundein",
              "Apna Application/Policy Number enter karein",
              "Aadhaar Number ya Mobile Number enter karein",
              "Captcha fill karein aur 'Check Status' click karein",
              "Aapka current status, payment status aur details dikhenge",
            ].map((s, i) => (
              <div key={i} className="flex gap-3 items-center">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-green-600 text-white text-xs font-bold flex items-center justify-center">{i + 1}</span>
                <p className="text-gray-700 text-sm">{s}</p>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-green-600 mb-3">Method 2: Mobile App Se Status Check</h3>
          <div className="bg-gray-50 rounded-lg p-4 mb-5">
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>→ Play Store ya App Store mein <strong>"PMFBY"</strong> ya <strong>"Fasal Bima"</strong> search karein</li>
              <li>→ Official GoI app download karein (Ministry of Agriculture)</li>
              <li>→ Login karein – Aadhaar ya registered mobile number se</li>
              <li>→ Dashboard mein <strong>'My Applications'</strong> section mein jaayein</li>
              <li>→ Sabhi applications aur unka current status dikhai dega</li>
            </ul>
          </div>

          <h3 className="text-lg font-semibold text-green-600 mb-3">Status Meanings – Kya Matlab Hai?</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-green-700 text-white">
                  <th className="border border-green-600 px-3 py-2">Status</th>
                  <th className="border border-green-600 px-3 py-2">Matlab</th>
                  <th className="border border-green-600 px-3 py-2">Aapko Kya Karna Hai</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Application Submitted", "Request receive ho gayi", "Wait karein – surveyor aayega"],
                  ["Under Survey", "Field inspection chal rahi hai", "Surveyor ka cooperative ban ke sahayata karein"],
                  ["Under Assessment", "Loss calculate ho raha hai", "Wait karein, 15-30 din lagte hain"],
                  ["Approved", "Muawza pass ho gaya", "Bank account check karein – 7-10 din mein aata hai"],
                  ["Payment Processed", "DBT se paisa bhej diya", "Bank statement check karein"],
                  ["Rejected", "Application reject hui", "Rejection reason padhein, appeal karein ya CSC jaayein"],
                  ["On Hold", "Koi document ya info chahiye", "Bank ya insurance company se contact karein"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-green-50"}>
                    <td className="border border-gray-200 px-3 py-2">
                      <span className={`px-2 py-0.5 rounded text-xs font-semibold ${row[0] === "Approved" || row[0] === "Payment Processed" ? "bg-green-100 text-green-700" : row[0] === "Rejected" ? "bg-red-100 text-red-700" : row[0] === "On Hold" ? "bg-yellow-100 text-yellow-700" : "bg-blue-100 text-blue-700"}`}>{row[0]}</span>
                    </td>
                    <td className="border border-gray-200 px-3 py-2 text-sm">{row[1]}</td>
                    <td className="border border-gray-200 px-3 py-2 text-sm text-gray-600">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── SECTION 5: INSURANCE AMOUNT ── */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-green-700 border-b-2 border-green-200 pb-2 mb-4">
            Fasal Bima Payment Kab Aur Kitna Milta Hai?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Ramlal ko muawza kitna milega – yeh jaanna tha. Aur aap bhi yahi sochte honge. Payment calculate hoti hai <strong>Sum Insured</strong> aur <strong>actual crop loss percentage</strong> ke basis par.
          </p>

          <h3 className="text-lg font-semibold text-green-600 mb-3">Payment Calculation Example (Real Case):</h3>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-5">
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              {[
                ["Fasal", "Soyabean"],
                ["Zameen", "5 bigha (approx 1.25 hectare)"],
                ["Sum Insured (per hectare)", "₹40,000"],
                ["Total Sum Insured", "₹50,000 (1.25 × 40,000)"],
                ["Kisan Premium (2%)", "₹1,000"],
                ["Surveyor Assessment – Loss %", "70% crop loss"],
                ["Muawza = 70% of ₹50,000", "₹35,000"],
                ["Final Amount Received", "₹35,000 (DBT se)"],
              ].map(([k, v], i) => (
                <div key={i} className="flex gap-2">
                  <span className="font-semibold text-amber-800 flex-shrink-0">{k}:</span>
                  <span className="text-gray-700">{v}</span>
                </div>
              ))}
            </div>
            <p className="text-green-700 font-semibold text-sm mt-3">✅ Sirf ₹1,000 premium deke ₹35,000 muawza mila!</p>
          </div>

          <h3 className="text-lg font-semibold text-green-600 mb-3">Payment Timeline:</h3>
          <div className="space-y-2">
            {[
              { phase: "Application Submission", time: "Nuksan ke 72 ghante mein" },
              { phase: "Survey / Inspection", time: "Application ke 5–10 din baad" },
              { phase: "Assessment Report", time: "Survey ke 15–30 din baad" },
              { phase: "Approval", time: "Assessment ke 7–15 din baad" },
              { phase: "Payment (DBT)", time: "Approval ke 7–10 din mein seedha bank mein" },
              { phase: "Total Time", time: "~45–60 din (state aur case ke hisaab se)" },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center border border-gray-200 rounded-lg px-4 py-2 text-sm">
                <span className="font-medium text-gray-800">{item.phase}</span>
                <span className="text-green-600 font-semibold">{item.time}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 6: DOCUMENTS ── */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-green-700 border-b-2 border-green-200 pb-2 mb-4">
            Fasal Bima Muawza Ke Liye Required Documents
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ramlal ne yehi galti ki – pehli baar kuch documents miss ho gaye. Doosri baar sab lekar gaye. Aap pehli baar mein hi sab le jaayein:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                cat: "Identity Documents",
                color: "blue",
                items: ["Aadhaar Card (original + copy)", "PAN Card", "Bank Passbook (account linked)", "Registered Mobile Number"],
              },
              {
                cat: "Land / Crop Documents",
                color: "green",
                items: ["Khasra / Khatauni (Jamabandi)", "Crop sowing certificate (buwai ka praman)", "Land ownership / lease agreement", "Policy document / receipt"],
              },
              {
                cat: "Loss Evidence",
                color: "red",
                items: ["Photos of damaged crop (date-stamped)", "Written complaint copy (72 hr intimation proof)", "Village Patwari / Sarpanch letter (optional but helpful)", "Meteorological/disaster report (if available)"],
              },
              {
                cat: "Bank Details",
                color: "amber",
                items: ["Bank account number (IFSC sahit)", "Cancelled cheque", "DBT-enabled account confirm karein", "Joint account hai toh dono ki ID"],
              },
            ].map((cat, i) => {
              const cm: Record<string,string> = { blue:"bg-blue-50 border-blue-200", green:"bg-green-50 border-green-200", red:"bg-red-50 border-red-200", amber:"bg-amber-50 border-amber-200" };
              const hm: Record<string,string> = { blue:"text-blue-800", green:"text-green-800", red:"text-red-800", amber:"text-amber-800" };
              return (
                <div key={i} className={`border rounded-lg p-4 ${cm[cat.color]}`}>
                  <h4 className={`font-bold mb-2 text-sm ${hm[cat.color]}`}>{cat.cat}</h4>
                  <ul className="space-y-1">
                    {cat.items.map((d, j) => (
                      <li key={j} className="text-gray-700 text-xs flex gap-1.5"><span className="text-green-600">✓</span>{d}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── SECTION 7: NATURAL DISASTER COVERAGE ── */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-green-700 border-b-2 border-green-200 pb-2 mb-4">
            Crop Insurance Mein Kya-Kya Cover Hota Hai? – Natural Disaster Coverage
          </h2>

          <div className="grid sm:grid-cols-2 gap-3 mb-5">
            {[
              { cat: "✅ Covered (Insured)", color: "green", items: ["Sukhha (Drought)", "Baadh / Ati-Varsha (Flood)", "Aandhi / Toofan (Cyclone)", "Olavrishti (Hailstorm)", "Bhumi Dhansaav (Landslide)", "Keede / Beemari (Pest/Disease)", "Post-Harvest Losses (14 din tak)", "Sowing Failure (pre-sown risk)"] },
              { cat: "❌ Not Covered (Excluded)", color: "red", items: ["Kisan ki apni galtiyaan (negligence)", "Chori / theft", "Yudh / nuclear risk", "Deliberately set fire", "Agar premium nahi bhara", "Deadline ke baad notification", "Non-notified crops", "Tampered / wrong information"] },
            ].map((sec, i) => (
              <div key={i} className={`border rounded-xl p-4 ${i === 0 ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
                <h4 className={`font-bold mb-3 text-sm ${i === 0 ? "text-green-800" : "text-red-800"}`}>{sec.cat}</h4>
                <ul className="space-y-1">
                  {sec.items.map((item, j) => (
                    <li key={j} className="text-xs text-gray-700 flex gap-1.5">
                      <span className={i === 0 ? "text-green-600" : "text-red-500"}>{i === 0 ? "✓" : "✗"}</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 8: REJECTION REASONS ── */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-green-700 border-b-2 border-green-200 pb-2 mb-4">
            Common Application Rejection Reasons Aur Unke Solutions
          </h2>

          <div className="space-y-3">
            {[
              { r: "72 Ghante Ke Baad Notification", s: "Hamesha fasal kharab hote hi turant helpline ya bank ko call karein. Screenshot/call record rakhein proof ke liye." },
              { r: "Wrong / Mismatched Documents", s: "Aadhaar mein naam aur bank mein naam same hona chahiye. Koi bhi mismatch = delay ya rejection." },
              { r: "Non-Notified Crop", s: "Yeh scheme sirf government-notified crops pe kaam karti hai. Pehle confirm karein ki aapki fasal notified hai ya nahi." },
              { r: "Premium Not Paid", s: "Auto-debit fail ho jaati hai agar account mein paisa nahi tha. Bank statement check karein ki premium actually kata ya nahi." },
              { r: "DBT Account Not Linked", s: "Bank account Aadhaar se link hona chahiye DBT ke liye. Yeh bank mein jaake confirm karein." },
              { r: "Surveyor Visit Mein Absent", s: "Jab surveyor aaye toh khet par mojood rahein. Unhe poora khet dikhayein. Unke saath cooperative rahein." },
              { r: "Fake / Exaggerated Loss Application", s: "Sirf actual loss report karein. Insurance company cross-verify karti hai. Jhooth pakaaya gaya toh application cancel + legal action." },
            ].map((item, i) => (
              <details key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                <summary className="bg-red-50 px-4 py-3 cursor-pointer font-medium text-red-800 text-sm flex items-center gap-2">
                  <span>❌</span> {item.r}
                </summary>
                <div className="px-4 py-3 bg-white">
                  <p className="text-green-700 text-sm"><strong>✅ Solution:</strong> {item.s}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ── IMAGE 3 ── */}
        <figure className="my-8 rounded-xl overflow-hidden shadow-lg">
          <img 
            src="/images/articles/pmfby-crop-insurance-2026/payment-received.webp" 
            alt="Fasal Bima Payment Received – Muawza Aaya" 
            className="w-full h-44 sm:h-60 object-cover" 
          />
          <figcaption className="bg-green-800 text-white text-xs sm:text-sm text-center py-2 px-4">
            Account Mein Muawza Aaya – Agle Season Ki Kheti Saved!
          </figcaption>
        </figure>

        {/* ── SECTION 9: 2026 UPDATES ── */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-green-700 border-b-2 border-green-200 pb-2 mb-4">
            Pradhan Mantri Fasal Bima Yojana 2026 – Latest Updates
          </h2>
          <div className="space-y-3">
            {[
              { tag: "Budget 2026", color: "green", title: "PMFBY Budget ₹15,000 Crore – Record High", desc: "Budget 2026-27 mein PMFBY ke liye ₹15,000 crore allocate kiye gaye hain – pichle saal se 18% zyada. Iska matlab zyada kisan coverage aur faster settlement." },
              { tag: "Digital Survey", color: "blue", title: "Drone Survey Ab Use Hoga", desc: "2026 se kuch states mein drone-based crop loss assessment shuru ho rahi hai. Iska fayda – surveyor ki manmani kam hogi aur accurate assessment hogi." },
              { tag: "AI Assessment", color: "purple", title: "AI-Based Loss Calculation Pilot", desc: "Ministry of Agriculture ne AI tools se satellite imagery ke base par crop loss calculate karne ka pilot project shuru kiya hai – faster aur transparent applications ke liye." },
              { tag: "Voluntary Enrollment", color: "amber", title: "Non-Loanee Farmers Ko Push", desc: "2026 mein government ne non-loanee (bina loan wale) kisano ko bhi enroll karne ka special drive chalaaya hai. Agar aapne abhi tak yeh scheme nahi li – agle season mein zaroor lein." },
            ].map((item, i) => {
              const cm: Record<string,string> = { green:"bg-green-50 border-green-200", blue:"bg-blue-50 border-blue-200", purple:"bg-purple-50 border-purple-200", amber:"bg-amber-50 border-amber-200" };
              const tm: Record<string,string> = { green:"bg-green-100 text-green-700", blue:"bg-blue-100 text-blue-700", purple:"bg-purple-100 text-purple-700", amber:"bg-amber-100 text-amber-700" };
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
          <h2 className="text-xl sm:text-2xl font-bold text-green-700 border-b-2 border-green-200 pb-2 mb-6">
            FAQ – Aksar Pooche Jaane Wale Sawaal
          </h2>
          <div className="space-y-3">
            {[
              { q: "PMFBY helpline number kya hai?", a: "PMFBY Toll-Free Helpline: 1800-200-7710. Yeh 24x7 available hai. Aap application notification, status inquiry aur koi bhi query ke liye call kar sakte hain. Apna policy number paas rakhein." },
              { q: "Agar bank ne enroll nahi ki aur fasal kharab ho gayi toh?", a: "Agar bank ki galti se enroll nahi hua aur premium aapke account se kaat liya gaya tha, toh bank zimmedaar hai. Banking Ombudsman ya agriculture department mein complaint karein." },
              { q: "Kya partial loss par bhi muawza milta hai?", a: "Haan – agar 25% ya zyada fasal ka nuksan hua ho toh proportional muawza milta hai. 70% loss hai toh 70% amount milega. Surveyor ki report decisive hoti hai." },
              { q: "Ek hi khet mein do fasal lagayi hai – dono cover hogi?", a: "Yeh scheme ek application mein ek fasal cover karti hai. Alag-alag faslon ke liye alag enrollment karna padega. Mixed cropping ke rules state-wise alag hain – apni state portal check karein." },
              { q: "Application reject ho gayi – ab kya karein?", a: "Rejection letter mein reason likha hota hai. Pehle woh reason theek karein. Phir appeal karein – insurance company ke grievance cell mein, phir state agriculture department mein. Portal par bhi grievance submit ki ja sakti hai." },
              { q: "Kya koi bhi crop cover hoti hai?", a: "Nahi – sirf government-notified crops cover hoti hain. Har state har season mein ek list jaari karta hai. Apne Block Agriculture Office ya state portal se list confirm karein." },
              { q: "Premium kat gaya lekin policy nahi mili – kya karna chahiye?", a: "Bank se written confirmation maangein. Agar bank ne premium kat liya hai toh woh automatically enrolled ho jaata hai. Policy document aur receipt bank se prapt karein – yeh aapka legal right hai." },
            ].map((item, i) => (
              <details key={i} className="border-2 border-green-100 rounded-xl overflow-hidden">
                <summary className="bg-green-50 px-5 py-3 cursor-pointer font-semibold text-green-900 text-sm flex justify-between items-center gap-2">
                  <span>Q{i + 1}: {item.q}</span>
                  <span className="text-green-500 flex-shrink-0">▼</span>
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
          <h2 className="text-xl sm:text-2xl font-bold text-green-700 border-b-2 border-green-200 pb-2 mb-4">
            Conclusion – Aap Bhi Fasal Bima Ka Fayda Lein
          </h2>
          <div className="bg-green-700 text-white rounded-xl p-6 mb-6">
            <p className="leading-relaxed mb-3">
              Ramlal ki story yeh sabit karti hai – crop insurance ek aisi scheme hai jo chhote kisan ke liye sach mein lifeline ban sakti hai. Unhone ₹1,000 premium deke ₹35,000 ka muawza paaya aur agle season ki fasal ke liye paisa jut gaya. Warna poora saal ka hisaab kharab ho jaata.
            </p>
            <p className="leading-relaxed mb-3">
              Sabse zaroori baat – <strong>72 ghante ka rule</strong> yaad rakhein. Fasal kharab hote hi turant helpline par call karein. Doosri zaroori baat – <strong>documents pehle se tayyar rakhein</strong>. Aur teesri – <strong>status portal par track karte rahein</strong>.
            </p>
            <p className="leading-relaxed">
              Aaj hi check karein – kya aap yeh scheme mein enrolled hain? Agar KCC ya crop loan hai toh almost certainly haan. Agar nahi hain toh agle season mein zaroor karwayein. Ek premium se itna bada safety net – koi reason nahi ki aap is yojana ka fayda na lein.
            </p>
          </div>

          {/* ✅ FIXED: Related Articles with proper Link components */}
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 mb-6">
            <h3 className="font-bold text-gray-800 mb-3">🔗 Related Articles (Aage Kya Padhein):</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-green-500">→</span>
                <Link href="/articles/kisan-credit-card-online-apply-2026" className="text-green-700 text-sm font-medium hover:underline">
                  KCC Kisan Credit Card – Kaise Banwayein Aur Kya Fayda Hai 2026
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">→</span>
                <Link href="/articles/pm-kisan-23vi-kist-2026-status-check" className="text-green-700 text-sm font-medium hover:underline">
                  PM Kisan Samman Nidhi 23vi Installment – Status Check Kaise Karein
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">→</span>
                <Link href="/articles/kisan-tractor-loan-2026" className="text-green-700 text-sm font-medium hover:underline">
                  Kisan Tractor Loan Bina Down Payment – Complete Guide 2026
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">→</span>
                <Link href="/articles/pm-kisan-mobile-number-change" className="text-green-700 text-sm font-medium hover:underline">
                  PM Kisan Mobile Number Update Kaise Karein – CSC Center Process
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* ── QUICK SUMMARY ── */}
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-yellow-900 text-lg mb-3">⚡ Quick Summary – Fasal Bima 2026</h3>
          <div className="grid sm:grid-cols-2 gap-2 text-sm">
            {[
              ["Portal", "pmfby.gov.in"],
              ["Helpline", "1800-200-7710 (Toll Free)"],
              ["Kharif Premium", "2% of sum insured"],
              ["Rabi Premium", "1.5% of sum insured"],
              ["Application Deadline", "72 ghante mein inform karein"],
              ["Payment Mode", "DBT – seedha bank account mein"],
              ["Total Timeline", "~45–60 din"],
              ["Govt Budget 2026", "₹15,000 crore"],
            ].map(([k, v], i) => (
              <div key={i} className="flex gap-2">
                <span className="font-semibold text-yellow-800 flex-shrink-0">{k}:</span>
                <span className="text-gray-700">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-400 text-center border-t pt-4">
          Yeh article sirf informational purposes ke liye hai. Rules state aur season ke hisaab se badal sakte hain. Latest update ke liye pmfby.gov.in visit karein. | © 2026 KisanStatus.com
        </p>

      </article>
    </main>
  );
}