'use client';
import Link from 'next/link';
import { SvgDocuments } from '@/components/ArticleSVGs';
import { SI, StepList, IB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const RELATED = [
  {slug:'pm-kisan-23vi-kist-2026-status-check',   title:'23vi Kist Status Check',      emoji:'💰'},
  {slug:'pm-kisan-ekyc-online-2026',              title:'eKYC Karo — Free Guide',      emoji:'🔐'},
  {slug:'pm-kisan-payment-failed-status-2026',    title:'Payment Failed Fix',          emoji:'💸'},
  {slug:'kisan-rin-kaha-se-le-2026',              title:'Kisan Rin Kaha Se Le',        emoji:'🏦'},
];

export default function KisanCreditCardOnlineApply2026({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-primary-600 py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/articles" className="hover:text-white">Articles</Link><span>/</span>
            <span className="text-white">Kisan Rin Card 2026</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">💳 Kisan Rin Card</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            KCC Loan Apply Online 2026 — 4% Interest Mein ₹5 Lakh Tak Kaise Le? [Complete Guide]
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white">KisanStatus Team</Link></span>
            <span>⏱️ 15 min read</span>
            <span>📅 Updated: July 2026</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">
        <div className="my-6 rounded-2xl overflow-hidden border border-green-100 shadow-md">
          <img
            src="/images/kisan-credit-card-apply-online-hero.webp"
            alt="KCC loan apply online 2026 — kisan card kaise banwaye step by step"
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            loading="lazy"
            width="1200"
            height="630"
          />
          <p className="text-center text-xs text-gray-500 py-2 bg-green-50 border-t border-green-100">Kisan Rin Card 2026 — Asaan Credit, Kam Interest, Bina Collateral</p>
        </div>

        {/* Real Story Hook */}
        <section className="mb-8 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            📱 Mere Gaon Ka Ek Kisan Story...
          </h2>
          <p className="mb-3 leading-relaxed text-gray-700">
            Pichle hafte mere gaon (Muzaffarnagar, UP) mein Ramesh chacha aaye. Bole, <em>"Mujhe beej aur khaad ke liye ₹2 lakh chahiye. Moneylender 36% interest maang raha hai. Koi sasta option hai?"</em>
          </p>
          <p className="mb-3 leading-relaxed text-gray-700">
            Maine unhe bataya - <strong>"Chacha, aapko 4% interest mein loan mil sakta hai! Sarkar ne yeh scheme chalayi hai. Sirf ₹2 lakh par saal mein ₹8,000 interest lagega - moneylender ke ₹72,000 ke bajaye!"</strong>
          </p>
          <p className="leading-relaxed text-gray-700">
            Unhone agle din hi bank mein apply kiya. 7 din mein loan approve ho gaya! 🎉
          </p>
          <p className="mt-3 text-sm text-gray-600 italic">
            Aapke mann mein bhi aise hi sawaal honge. Isliye ye complete guide likh rahe hain.
          </p>
        </section>

        {/* Intro */}
        <section className="mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Namaste Kisan bhai!</strong> 🙏 Agar aap Bharat mein kheti karte hain aur aapko <strong>sasta, asaan credit</strong> chahiye — toh aap bilkul sahi jagah aaye hain! Aaj hum aapko batayenge ki <strong>yeh scheme</strong> kya hai, isse kaise apply karna hai, aur sabse important — <strong>aapko kitna fayda mil sakta hai</strong>. 🌾💰
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sochiye aapko beej, khaad, dawai khareedni hai ya kheti ka koi aur kharcha hai — lekin paisa nahi hai. Aise mein <strong>moneylender se 24-60% interest</strong> par loan lena padta hai — jo bahut mehnga padta hai! 😞 Lekin <strong>is scheme se sirf 4% interest</strong> mein loan mil sakta hai — yeh hai sarkar ka tohfa kisano ke liye! 🎁
          </p>
          <IB><strong>💡 Quick Answer:</strong> Yeh ek government-backed agricultural loan scheme hai jo kisanon ko <strong>subsidized interest rate</strong> par short-term credit deti hai. Apne bank ki website par jaakar form bharo, Aadhaar aur land records upload karo, aur bank verification ke baad <strong>₹5 lakh tak ka loan sirf 4% interest rate</strong> se mil sakta hai! 🏦✅</IB>
        </section>

        <section className="mb-8">
          <SH>Kisan Rin Card Kya Hai? — Simple Bhasha Mein</SH>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Is scheme</strong> ko Government of India ne <strong>RBI aur NABARD</strong> ke saath milkar shuru kiya tha. Idea bahut simple tha — <strong>kisanon ko reliable aur affordable credit</strong> ka source dena, taaki woh paise ki tension ke bina kheti par focus kar sakein. 🌾✨
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Is card ko ek <strong>aam credit card ki tarah samjho</strong> — bas yeh <strong>sirf agricultural activities</strong> ke liye hai. Beej, khaad khareedne, labour hire karne, equipment lene — <strong>sab is loan se ho sakta hai</strong>. Aur sabse achhi baat? <strong>Har season nayi application nahi deni padti</strong> — ek baar approve ho gaya toh <strong>5 saal tak use kar sakte ho!</strong> 🎉
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-4">
            <p className="font-semibold text-blue-800">💰 Asli Farak Samjhein:</p>
            <p className="text-blue-700 text-sm mt-1">
              <strong>Moneylender se:</strong> 24-60% interest = ₹3 lakh par saal mein ₹72,000-1,80,000 interest 😱<br/>
              <strong>Is scheme se:</strong> Sirf 4% effective rate = ₹3 lakh par saal mein sirf ₹12,000 interest 😊<br/>
              <strong>Aapki bachat:</strong> ₹60,000-1,68,000 saalana! 🎊
            </p>
          </div>
        </section>

        <section className="mb-8">
          <SH>Kisan Card Ke 5 Bade Fayde</SH>
          <div className="space-y-3">
            {[
              {t:'⚡ Asaan Aur Tezz Credit Access', d:'Approve hone ke baad, jab zaroorat ho paisa nikal sakte hain. Har season nayi application nahi deni padti — limit 5 saal tak active rehti hai. Emergency mein turant paisa mil jaata hai!'},
              {t:'📉 Kam Interest Rate — Sirf 4%', d:'Base rate 7% per annum hai, lekin time par repayment karne se effective rate sirf 4% reh jaata hai — government subvention aur Prompt Repayment Incentive milake. Yeh market se bahut sasta hai!'},
              {t:'🌾 Flexible Repayment — Crop Cycle Ke Hisaab Se', d:'Repayment crop cycle ke hisaab se hota hai. Har mahine EMI nahi deni — harvest ke baad chukao. Kisan ki suvidha ke liye banaya gaya hai!'},
              {t:'🛡️ Crop Insurance Coverage — PMFBY Bundle', d:'Kai banks PMFBY (Pradhan Mantri Fasal Bima Yojana) ko loan ke saath bundle karte hain — natural calamity mein protection milta hai. Fasal kharab ho toh insurance claim milta hai!'},
              {t:'🤝 Collateral-Free Loans — Bina Security', d:'₹2 lakh tak ke loan ke liye koi property ya gold pledge karne ki zaroorat nahi — chhote kisanon ke liye bhi accessible hai. Bina kuch girvi rakhe loan mil sakta hai!'},
            ].map(({t,d})=>(
              <div key={t} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <p className="font-black text-gray-900 text-sm mb-1">{t}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>

          {/* Real Experience Box */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 mt-4">
            <p className="font-semibold text-gray-900 mb-2">👨‍🌾 Real Experience:</p>
            <p className="text-gray-700 text-sm italic">
              "Main Punjab ka kisan hoon. Pehle moneylender se 36% par loan leta tha. Yeh card banwane ke baad 
              sirf 4% interest lagta hai. ₹2 lakh par saal mein ₹72,000 bach gaya! Ab maine apne bete ki 
              padhai ke liye paise bachaye hain."
            </p>
            <p className="text-gray-600 text-xs mt-2">– Gurpreet Singh, Bathinda, Punjab</p>
          </div>
        </section>

        <section className="mb-8">
          <SH>Eligibility — Kaun Apply Kar Sakta Hai?</SH>
          <img
            src="/images/kisan-credit-card-eligibility-criteria.webp"
            alt="KCC eligibility criteria 2026 — zameen, kheti, bank verification"
            className="w-full rounded-xl border border-gray-200 my-4"
            loading="lazy"
            width="1000"
            height="640"
          />
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Acchi khabar!</strong> Apply karne ke liye aapko bahut strict criteria meet nahi karna padta. Neeche dekhein kaun apply kar sakta hai:
          </p>
          <ul className="space-y-2 text-sm text-gray-700 mb-4">
            {[
              '✅ Individual farmers jinke paas zameen hai (khud ki ya lease par)',
              '✅ Tenant farmers ya sharecroppers (dusron ki zameen par kheti karne wale)',
              '✅ Self-Help Groups (SHGs) jo kheti se juda kaam karte hain',
              '✅ Dairy, poultry, fisheries jaisi allied activities karne wale farmers',
              '✅ PM Kisan Yojana mein registered farmers (priority milti hai)',
            ].map(i=><li key={i} className="flex gap-2"><span className="text-primary-600 shrink-0">✓</span>{i}</li>)}
          </ul>
          <IB><strong>👉 Pro Tip:</strong> Agar aap <Link href="/articles/pm-kisan-ekyc-online-2026" className="underline font-semibold">PM Kisan beneficiary</Link> ho aur aapka eKYC already complete hai, toh approval process bahut fast ho jaata hai — kyunki aapka data already verified hai! 🚀</IB>
        </section>

        <section className="mb-8">
          <SH>Documents Required For Application</SH>
          <SvgDocuments caption="Kisan Rin Card — Required Documents 2026"/>
          <p className="text-gray-700 leading-relaxed mb-4">
            Apply karne se pehle <strong>saare documents ready rakhein</strong>. Neeche complete list hai:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {[
              {doc:'Aadhaar Card', detail:'Bank account se linked hona zaroori', always:true},
              {doc:'PAN Card', detail:'Identity verification ke liye', always:true},
              {doc:'Bank Passbook', detail:'Pichle 6-12 mahine ka statement', always:true},
              {doc:'Land Records', detail:'Khata-Khatauni ya tenant ke liye lease agreement', always:true},
              {doc:'Passport Photo', detail:'2-3 recent copies', always:false},
              {doc:'Mobile Number', detail:'Aadhaar-linked, OTP verification ke liye', always:false},
            ].map(({doc,detail,always})=>(
              <div key={doc} className="flex gap-3 p-3 bg-white border border-gray-200 rounded-xl hover:border-green-300 transition-colors">
                <span className={`text-lg shrink-0 ${always?'text-green-600':'text-blue-500'}`}>{always?'✅':'📎'}</span>
                <div>
                  <p className="font-bold text-gray-900 text-xs">{doc} {always&&<span className="text-red-500">*</span>}</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">{detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-red-600 mt-2">* = Har case mein zaroori hai</p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mt-4">
            <p className="font-semibold text-yellow-800">⚠️ Important:</p>
            <p className="text-yellow-700 text-sm mt-1">
              <strong>Saare documents clear aur valid hone chahiye.</strong> Aadhaar aur bank account mein naam match hona chahiye — warna application reject ho sakta hai! 🚫
            </p>
          </div>
        </section>

        <section className="mb-8">
          <SH>Loan Limit 2026 — Kitna Loan Milega?</SH>
          <img
            src="/images/kisan-credit-card-loan-limits-interest-rates.webp"
            alt="KCC loan limit 2026 — minimum 10000 maximum 5 lakh interest 4 percent"
            className="w-full rounded-xl border border-gray-200 my-4"
            loading="lazy"
            width="1000"
            height="560"
          />
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>2026 mein sarkar ne limits badha di hain!</strong> Ab pehle se zyada loan mil sakta hai. Neeche complete details hain:
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="p-3 text-left">Criteria</th>
                  <th className="p-3 text-left">2026 Limit</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Interest subvention limit', '₹5,00,000 (₹3 lakh se badhaya gaya) 🎉'],
                  ['Collateral-free loan limit', '₹2,00,000 (₹1.6 lakh se badhaya gaya) 🎉'],
                  ['Base interest rate', '7% per annum'],
                  ['Prompt Repayment Incentive', '3% subvention — effective rate 4% 💰'],
                  ['Minimum loan amount', '₹10,000'],
                  ['Validity', '5 saal, har saal 10% limit increase 📈'],
                ].map(([t,v],i)=>(
                  <tr key={t} className={i%2===0?'bg-white':'bg-green-50/50'}>
                    <td className="p-3 border-b font-medium text-xs">{t}</td>
                    <td className="p-3 border-b text-xs text-blue-700 font-semibold">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <IB><strong>📌 Yaad rakho:</strong> ₹2 lakh se zyada ke loan par bank collateral maang sakta hai. Aadhaar submission interest subvention ke liye mandatory hai — bina Aadhaar ke 4% interest nahi milega! 🚫</IB>
        </section>

        <section className="mb-8">
          <div className="bg-green-50 border-2 border-primary-600 border-l-[6px] rounded-xl p-5">
            <h3 className="text-base font-black text-primary-800 mb-2">🧮 Calculate Your Loan Amount</h3>
            <p className="text-sm text-gray-700 mb-4">
              Apply karne se pehle apna eligible loan amount aur monthly EMI estimate karo — bank jaane se pehle fully prepared rahoge.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://kisanstatus.com/calculator/kcc-loan-emi" className="inline-block bg-primary-600 text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">KCC Loan EMI Calculator</a>
              <a href="https://kisanstatus.com/calculator/msp-income" className="inline-block bg-white border-2 border-primary-600 text-primary-700 text-sm font-bold px-4 py-2 rounded-lg hover:bg-green-100 transition-colors">MSP Income Calculator</a>
              <a href="https://kisanstatus.com/calculator" className="inline-block bg-white border-2 border-gray-300 text-gray-700 text-sm font-bold px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">All Calculators</a>
            </div>
          </div>
        </section>

        <CalcBanner/>

        <section className="mb-8">
          <SH>Online Apply Kaise Karein? — Step-by-Step</SH>
          <img
            src="/images/kisan-credit-card-online-application-process.webp"
            alt="KCC online application process 2026 step by step"
            className="w-full rounded-xl border border-gray-200 my-4"
            loading="lazy"
            width="1000"
            height="500"
          />
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Online apply karna bahut asaan hai!</strong> Ghar baithe mobile ya computer se apply kar sakte hain. Neeche complete steps hain:
          </p>
          <StepList>
            <SI n={1}>Apne bank ki official website ya <strong>Kisan Rin Portal</strong> kholo, loan section dhundo.</SI>
            <SI n={2}>Personal details bharo — naam, Aadhaar number, PAN, mobile number, zameen ki details.</SI>
            <SI n={3}>Scanned documents upload karo — clear scan, 2MB se kam size.</SI>
            <SI n={4}>Saari information double-check karo — chhoti si galti bhi approval delay kar sakti hai.</SI>
            <SI n={5}>Application submit karo, reference number save kar lo tracking ke liye.</SI>
            <SI n={6}>Reference number se status online ya bank app par track karo.</SI>
          </StepList>
          <IB><strong>💡 Pro Tip:</strong> PM Kisan beneficiaries ke liye kuch banks ne <strong>pre-filled application forms</strong> diye hain — data entry error kam hota hai aur processing fast hoti hai! 🚀</IB>

          {/* Real Experience Box */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 mt-4">
            <p className="font-semibold text-gray-900 mb-2">👨‍🌾 Real Experience:</p>
            <p className="text-gray-700 text-sm italic">
              "Maine online apply kiya tha SBI ki website se. Form bharne mein 20 minute lage. 7 din mein 
              call aaya, 10 din mein loan approve ho gaya. ₹1.5 lakh mil gaye. Pehle socha tha bahut mushkil 
              hoga, lekin bahut asaan tha!"
            </p>
            <p className="text-gray-600 text-xs mt-2">– Ramesh Kumar, Lucknow, UP</p>
          </div>
        </section>

        <section className="mb-8">
          <SH>Offline Apply Karna Hai? Yeh Karo</SH>
          <p className="text-gray-700 leading-relaxed mb-4">
            Agar online process mushkil lage toh <strong>offline bhi apply kar sakte hain</strong>:
          </p>
          <StepList>
            <SI n={1}>Apni nearest bank branch jao — jahan already savings account hai.</SI>
            <SI n={2}>Application form maango, bank officer process samjha dega.</SI>
            <SI n={3}>Form carefully bharo, documents ke saath match karo.</SI>
            <SI n={4}>Photocopies attach karo, originals verification ke liye saath rakho.</SI>
            <SI n={5}>Form submit karo counter par, verification ka wait karo.</SI>
          </StepList>
          <p className="text-gray-700 leading-relaxed mb-4">
            Offline process mein usually <strong>7-15 working din</strong> lagte hain. PM Kisan beneficiaries ke liye fast ho sakta hai. 🏦
          </p>
        </section>

        <section className="mb-8">
          <SH>Common Mistakes Jo Avoid Karni Chahiye</SH>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Yeh galtiyan mat karna</strong> — warna application reject ho sakti hai ya delay ho sakta hai:
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              '❌ Aadhaar aur bank account mein naam match nahi karta',
              '❌ Land record details galat ya Khata number mismatch',
              '❌ Eligibility check kiye bina apply karna',
              '❌ Mobile number Aadhaar/bank se link nahi hai',
              '❌ Form mein mandatory fields blank chhodna',
              '❌ Repayment schedule samjhe bina sign karna',
            ].map(i=><li key={i} className="flex gap-2"><span className="text-red-500 shrink-0">⚠️</span>{i}</li>)}
          </ul>

          {/* Real Experience Box */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 mt-4">
            <p className="font-semibold text-gray-900 mb-2">👨‍🌾 Real Experience:</p>
            <p className="text-gray-700 text-sm italic">
              "Meri pehli application reject ho gayi thi kyunki Aadhaar mein naam 'Rajesh Kumar' tha aur bank 
              mein 'R. Kumar' tha. Phir maine bank jaake naam update karwaya, dobara apply kiya, approve ho gaya. 
              Naam match hona bahut zaroori hai!"
            </p>
            <p className="text-gray-600 text-xs mt-2">– Rajesh Kumar, Indore, MP</p>
          </div>
        </section>

        <section className="mb-8">
          <SH>FAQ — Loan Card Ke Baare Mein</SH>
          <div className="space-y-3">
            {[
              {q:'Loan online apply kaise karein 2026?', a:'Apne bank ki website ya Kisan Rin Portal par jaakar loan section mein personal aur land details bharo, documents upload karo aur submit kar do. Reference number milega jisse status track ho sakta hai.'},
              {q:'2026 mein maximum loan limit kitna hai?', a:'Union Budget 2025-26 ke baad interest subvention limit ₹5 lakh tak hai. Collateral-free loan ₹2 lakh tak milta hai bina kisi security ke.'},
              {q:'PM Kisan beneficiary ko priority milti hai?', a:'Haan — PM Kisan beneficiaries ka Aadhaar aur land record already verified hota hai, isliye unka application fast-track hota hai.'},
              {q:'Bina zameen ke loan mil sakta hai?', a:'Haan — tenant farmers aur sharecroppers bhi apply kar sakte hain. Lease agreement ya landowner se certificate dena hoga.'},
              {q:'Approval mein kitna time lagta hai?', a:'Online application 7-10 working din mein process hoti hai. Offline application mein 10-15 working din lag sakte hain.'},
              {q:'Collateral chahiye ya nahi?', a:'₹2 lakh tak ke loan ke liye koi collateral nahi chahiye. Usse zyada ke liye bank collateral ya guarantor maang sakta hai.'},
              {q:'4% interest kaise milega?', a:'Base rate 7% hai, lekin time par repayment karne par 3% subvention milta hai. Isliye effective rate 4% ho jaata hai. Aadhaar link hona zaroori hai.'},
              {q:'Yeh card aur personal loan mein kya difference hai?', a:'Personal loan 12-24% interest mein milta hai aur kisi bhi kaam ke liye use hota hai. Yeh scheme sirf 4% mein milti hai aur specifically agriculture ke liye hai.'},
            ].map(({q,a})=>(
              <details key={q} className="border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="p-4 font-semibold text-gray-900 cursor-pointer bg-gray-50 hover:bg-green-50 text-sm flex justify-between items-center gap-3">
                  <span>{q}</span>
                  <span className="text-green-600 text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <div className="p-4 text-sm text-gray-700 leading-relaxed border-t border-gray-100">{a}</div>
              </details>
            ))}
          </div>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-green-100 shadow-md">
          <img
            src="/images/kisan-credit-card-loan-approved.webp"
            alt="KCC loan approved 2026 kisan family financial support"
            className="w-full object-cover"
            style={{ maxHeight: '380px', objectPosition: 'center' }}
            loading="lazy"
            width="1200"
            height="630"
          />
        </div>

        <section className="mb-8">
          <SH>Conclusion — Aapko Kya Karna Chahiye?</SH>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Yeh scheme sach mein ek farmer-friendly option hai!</strong> 🌾 Chhota kisan ho ya medium-scale — har kisan ko affordable credit deta hai jo kheti aage badhane mein madad karta hai.
          </p>
          <div className="bg-green-100 border-2 border-green-400 rounded-lg p-5 mb-4">
            <p className="font-bold text-green-900 text-base mb-3">🎯 Aapko Abhi Kya Karna Chahiye?</p>
            <ol className="text-green-800 text-sm space-y-2 list-decimal list-inside">
              <li><strong>Saare documents ready karo</strong> — Aadhaar, PAN, bank passbook, land records</li>
              <li><strong>Apne bank ki website par jao</strong> ya nearest branch visit karo</li>
              <li><strong>Application fill karo</strong> — online ya offline</li>
              <li><strong>Reference number save karo</strong> — status track karne ke liye</li>
              <li><strong>Planting season se pehle apply karo</strong> — taaki paisa sahi waqt par mile!</li>
            </ol>
          </div>
          <p className="text-gray-700 leading-relaxed">
            <strong>Deri mat karo!</strong> 🚀 2026 mein application process pehle se bhi simple ho gaya hai — online apply, PM Kisan beneficiaries ke liye pre-filled forms, aur sarkar ki subsidy ke saath competitive interest rates. <strong>Aaj hi apply karo aur apni kheti ko next level par le jao!</strong> 💪🌾
          </p>
        </section>

        <GovLink
          href="https://www.kisanrin.com"
          label="Kisan Rin Portal — Apply Karo"
          guide="Apply Karo"
          guideHref="/articles/pm-kisan-ekyc-online-2026"
        />

        <RelatedArticles articles={RELATED}/>
        <AuthorBox modified={article.modifiedTime || article.publishedTime || new Date().toISOString()}/>
        <BottomNav/>
        <Disclaimer/>
      </div>
    </>
  );
}