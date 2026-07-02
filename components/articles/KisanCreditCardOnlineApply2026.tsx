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
            KCC Loan Apply Online 2026 — 4% Interest Mein ₹5 Lakh Tak Kaise Le?
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

        {/* Honest Introduction — No Fake Story */}
        <section className="mb-8 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Kya Aap Bhi Mehenge Byaj Par Udhaar Le Rahe Hain?
          </h2>
          <p className="mb-3 leading-relaxed text-gray-700">
            Kai annadata kheti ke kharchon ke liye <em>sahukaar se 24-36% byaj</em> par paisa lete hain. Beej, khaad, dawai — sab kuch khareedna hota hai, aur jab tak fasal aati hai tab tak byaj ka bojh bahut badh jaata hai.
          </p>
          <p className="mb-3 leading-relaxed text-gray-700">
            <strong>Ek better option hai.</strong> Sarkar ki ek scheme ke tahat <strong>4% effective interest rate</strong> par krishi rin milta hai. Matlab ₹2 lakh par saal mein sirf ₹8,000 byaj — sahukaar ke ₹72,000 ke muqable.
          </p>
          <p className="leading-relaxed text-gray-700">
            Yeh guide aapko batayegi ki yeh credit facility kya hai, kaun eligible hai, aur apply kaise karna hai.
          </p>
        </section>

        {/* Intro */}
        <section className="mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            Agar aap Bharat mein kheti karte hain aur aapko <strong>sasta, asaan credit</strong> chahiye — toh aap bilkul sahi jagah aaye hain. Yeh article batayega ki <strong>KCC yojana</strong> kya hai, kaise apply karna hai, aur aapko kitna fayda mil sakta hai.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Beej, khaad, dawai khareedni ho ya kheti ka koi aur kharcha — paisa chahiye hi chahiye. Aise mein <strong>sahukaar se 24-60% byaj</strong> par udhaar lena bahut mehnga padta hai. Sarkar ki is scheme mein <strong>sirf 4% effective rate</strong> par credit milta hai.
          </p>
          <IB><strong>💡 Short Answer:</strong> Yeh ek government-backed agricultural credit facility hai jo khetiharon ko <strong>subsidized byaj</strong> par short-term rin deti hai. Bank ki website par form bharo, Aadhaar aur land records upload karo, verification ke baad <strong>₹5 lakh tak ka rin sirf 4% effective rate</strong> par mil sakta hai.</IB>
        </section>

        <section className="mb-8">
          <SH>Kisan Rin Card Kya Hai?</SH>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Is yojana</strong> ko Government of India ne <strong>RBI aur NABARD</strong> ke saath milkar shuru kiya tha. Idea bahut simple tha — kisanon ko <strong>reliable aur affordable credit</strong> ka source dena, taaki woh paise ki tension ke bina kheti par focus kar sakein.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Is card ko ek <strong>aam credit card ki tarah</strong> samjho — bas yeh <strong>sirf agricultural activities</strong> ke liye hai. Beej, khaad khareedne, labour hire karne, equipment lene — sab is credit se ho sakta hai. Aur sabse achhi baat? Har season nayi application nahi deni padti. Ek baar approve ho gaya toh <strong>5 saal tak</strong> use kar sakte ho.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-4">
            <p className="font-semibold text-blue-800">💰 Asli Farak Samjhein:</p>
            <p className="text-blue-700 text-sm mt-1">
              <strong>Sahukaar se:</strong> 24-60% interest = ₹3 lakh par saal mein ₹72,000-1,80,000 byaj<br/>
              <strong>KCC se:</strong> Sirf 4% effective rate = ₹3 lakh par saal mein sirf ₹12,000 byaj<br/>
              <strong>Bachat:</strong> ₹60,000-1,68,000 saalana
            </p>
          </div>
        </section>

        <section className="mb-8">
          <SH>Krishi Credit Ke 5 Bade Fayde</SH>
          <div className="space-y-3">
            {[
              {t:'⚡ Tezz Credit Access', d:'Approve hone ke baad, jab zaroorat ho paisa nikal sakte hain. Har season nayi application nahi deni padti — limit 5 saal tak active rehti hai.'},
              {t:'📉 Kam Byaj Dar — 4%', d:'Base rate 7% per annum hai, lekin time par repayment karne se effective rate sirf 4% reh jaata hai — government subvention aur Prompt Repayment Incentive milake.'},
              {t:'🌾 Flexible Repayment', d:'Repayment crop cycle ke hisaab se hota hai. Har mahine EMI nahi deni — harvest ke baad chukao. (waise yeh point kai log miss karte hain — par bahut important hai)'},
              {t:'🛡️ Crop Insurance Bundle', d:'Kai banks PMFBY (Pradhan Mantri Fasal Bima Yojana) ko rin ke saath bundle karte hain — natural calamity mein protection milta hai.'},
              {t:'🤝 Bina Security Udhaar', d:'₹2 lakh tak ke rin ke liye koi property ya gold pledge karne ki zaroorat nahi — chhote khetiharon ke liye bhi accessible hai.'},
            ].map(({t,d})=>(
              <div key={t} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <p className="font-black text-gray-900 text-sm mb-1">{t}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>

          {/* Practical Insight Box — No Fake Testimonial */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 mt-4">
            <p className="font-semibold text-gray-900 mb-2">👨‍🌾 Practical Insight:</p>
            <p className="text-gray-700 text-sm">
              Bahut se annadata jo pehle 36% byaj par udhaar lete the, KCC banwane ke baad unka byaj 4% par aa jaata hai. ₹2 lakh par saal mein ₹64,000 ki seedhi bachat hoti hai. Yeh paisa khet ki infrastructure ya family ki needs par laga sakte hain.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <SH>Eligibility — Kaun Aavedan Kar Sakta Hai?</SH>
          <img
            src="/images/kisan-credit-card-eligibility-criteria.webp"
            alt="KCC eligibility criteria 2026 — zameen, kheti, bank verification"
            className="w-full rounded-xl border border-gray-200 my-4"
            loading="lazy"
            width="1000"
            height="640"
          />
          <p className="text-gray-700 leading-relaxed mb-4">
            Acchi khabar. Apply karne ke liye aapko bahut strict criteria meet nahi karna padta.
          </p>
          <ul className="space-y-2 text-sm text-gray-700 mb-4">
            {[
              '✅ Individual farmers jinke paas zameen hai (khud ki ya lease par)',
              '✅ Tenant farmers ya sharecroppers (dusron ki zameen par kheti karne wale)',
              '✅ Self-Help Groups (SHGs) jo kheti se juda kaam karte hain',
              '✅ Dairy, poultry, fisheries jaisi allied activities karne wale khetihar',
              '✅ PM Kisan Yojana mein registered krishak (priority milti hai)',
            ].map(i=><li key={i} className="flex gap-2"><span className="text-primary-600 shrink-0">✓</span>{i}</li>)}
          </ul>
          <IB><strong>👉 Ek Tip:</strong> Agar aap <Link href="/articles/pm-kisan-ekyc-online-2026" className="underline font-semibold">PM Kisan beneficiary</Link> ho aur aapka eKYC already complete hai, toh approval process bahut fast ho jaata hai — kyunki aapka data already verified hai!</IB>
        </section>

        <section className="mb-8">
          <SH>Aavedan Ke Liye Zaroori Kagaz</SH>
          <SvgDocuments caption="Kisan Rin Card — Required Documents 2026"/>
          <p className="text-gray-700 leading-relaxed mb-4">
            Apply karne se pehle <strong>saare documents ready rakhein</strong>. Complete list neeche hai:
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
            <p className="font-semibold text-yellow-800">⚠️ Dhyan Dene Wali Baat:</p>
            <p className="text-yellow-700 text-sm mt-1">
              <strong>Saare documents clear aur valid hone chahiye.</strong> Aadhaar aur bank account mein naam match hona chahiye — warna application reject ho sakta hai!
            </p>
          </div>
        </section>

        <section className="mb-8">
          <SH>2026 Mein Kitna Rin Milega? Limits Aur Rates</SH>
          <img
            src="/images/kisan-credit-card-loan-limits-interest-rates.webp"
            alt="KCC loan limit 2026 — minimum 10000 maximum 5 lakh interest 4 percent"
            className="w-full rounded-xl border border-gray-200 my-4"
            loading="lazy"
            width="1000"
            height="560"
          />
          <p className="text-gray-700 leading-relaxed mb-4">
            Sarkar ne limits badha di hain. Ab pehle se zyada udhaar mil sakta hai.
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
                  ['Interest subvention limit', '₹5,00,000 (₹3 lakh se badhaya gaya)'],
                  ['Collateral-free loan limit', '₹2,00,000 (₹1.6 lakh se badhaya gaya)'],
                  ['Base interest rate', '7% per annum'],
                  ['Prompt Repayment Incentive', '3% subvention — effective rate 4%'],
                  ['Minimum loan amount', '₹10,000'],
                  ['Validity', '5 saal, har saal 10% limit increase'],
                ].map(([t,v],i)=>(
                  <tr key={t} className={i%2===0?'bg-white':'bg-green-50/50'}>
                    <td className="p-3 border-b font-medium text-xs">{t}</td>
                    <td className="p-3 border-b text-xs text-blue-700 font-semibold">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <IB><strong>📌 Yaad rakho:</strong> ₹2 lakh se zyada ke rin par bank collateral maang sakta hai. Aadhaar submission interest subvention ke liye mandatory hai — bina Aadhaar ke 4% byaj nahi milega!</IB>
        </section>

        <section className="mb-8">
          <div className="bg-green-50 border-2 border-primary-600 border-l-[6px] rounded-xl p-5">
            <h3 className="text-base font-black text-primary-800 mb-2">🧮 Apna Rin Amount Calculate Karein</h3>
            <p className="text-sm text-gray-700 mb-4">
              Apply karne se pehle eligible rin amount aur monthly EMI estimate karo — bank jaane se pehle fully prepared rahoge.
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
          <SH>Online Aavedan — Pura Process Samjho</SH>
          <img
            src="/images/kisan-credit-card-online-application-process.webp"
            alt="KCC online application process 2026 step by step"
            className="w-full rounded-xl border border-gray-200 my-4"
            loading="lazy"
            width="1000"
            height="500"
          />
          <p className="text-gray-700 leading-relaxed mb-4">
            Online apply karna bahut asaan hai. Ghar baithe mobile ya computer se aavedan kar sakte hain.
          </p>
          <StepList>
            <SI n={1}>Apne bank ki official website ya <strong>Kisan Rin Portal</strong> kholo, credit section dhundo.</SI>
            <SI n={2}>Personal details bharo — naam, Aadhaar number, PAN, mobile number, zameen ki details.</SI>
            <SI n={3}>Scanned documents upload karo — clear scan, 2MB se kam size.</SI>
            <SI n={4}>Saari information double-check karo — chhoti si galti bhi approval delay kar sakti hai.</SI>
            <SI n={5}>Application submit karo, reference number save kar lo tracking ke liye.</SI>
            <SI n={6}>Reference number se status online ya bank app par track karo.</SI>
          </StepList>
          <IB><strong>💡 Note:</strong> PM Kisan beneficiaries ke liye kuch banks ne <strong>pre-filled application forms</strong> diye hain — data entry error kam hota hai aur processing fast hoti hai!</IB>

          {/* Practical Insight — No Fake Name */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 mt-4">
            <p className="font-semibold text-gray-900 mb-2">👨‍🌾 Practical Insight:</p>
            <p className="text-gray-700 text-sm">
              Online application mein usually 15-20 minute lagte hain form bharne mein. Submission ke baad 7-10 working din mein bank se call aa jaati hai verification ke liye. 10-15 din mein credit approve ho jaata hai — pehle ke muqable kaafi fast hai yeh process.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <SH>Offline Aavedan Ka Tarika</SH>
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
            Offline process mein usually <strong>7-15 working din</strong> lagte hain. PM Kisan beneficiaries ke liye fast ho sakta hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Yeh Galtiyan Mat Karna — Application Reject Ho Sakti Hai</SH>
          <p className="text-gray-700 leading-relaxed mb-4">
            Aavedan karte waqt yeh mistakes avoid karna zaroori hai:
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

          {/* Practical Insight — Common Mistake */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 mt-4">
            <p className="font-semibold text-gray-900 mb-2">👨‍🌾 Common Mistake:</p>
            <p className="text-gray-700 text-sm">
              Sabse common rejection reason — naam mismatch. Aadhaar mein "Rajesh Kumar" ho aur bank mein "R. Kumar" — yeh chhoti si difference application delay kar deti hai. Apply karne se pehle dono jagah naam exactly match karwa lo.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <SH>Aapke Sawaal — Seedhe Jawab</SH>
          <div className="space-y-3">
            {[
              {q:'Rin online apply kaise karein 2026 mein?', a:'Apne bank ki website ya Kisan Rin Portal par jaakar credit section mein personal aur land details bharo, documents upload karo aur submit kar do. Reference number milega jisse status track ho sakta hai.'},
              {q:'2026 mein maximum limit kitna hai?', a:'Union Budget 2025-26 ke baad interest subvention limit ₹5 lakh tak hai. Collateral-free rin ₹2 lakh tak milta hai bina kisi security ke.'},
              {q:'PM Kisan beneficiary ko priority milti hai?', a:'Haan — PM Kisan beneficiaries ka Aadhaar aur land record already verified hota hai, isliye unka aavedan fast-track hota hai.'},
              {q:'Bina zameen ke udhaar mil sakta hai?', a:'Haan — tenant farmers aur sharecroppers bhi apply kar sakte hain. Lease agreement ya landowner se certificate dena hoga.'},
              {q:'Approval mein kitna time lagta hai?', a:'Online application 7-10 working din mein process hoti hai. Offline application mein 10-15 working din lag sakte hain.'},
              {q:'Collateral chahiye ya nahi?', a:'₹2 lakh tak ke rin ke liye koi collateral nahi chahiye. Usse zyada ke liye bank collateral ya guarantor maang sakta hai.'},
              {q:'4% byaj kaise milega?', a:'Base rate 7% hai, lekin time par repayment karne par 3% subvention milta hai. Isliye effective rate 4% ho jaata hai. Aadhaar link hona zaroori hai.'},
              {q:'Yeh card aur personal loan mein kya difference hai?', a:'Personal loan 12-24% byaj mein milta hai aur kisi bhi kaam ke liye use hota hai. Yeh scheme sirf 4% mein milti hai aur specifically agriculture ke liye hai.'},
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
          <SH>Ant Mein — Aaj Hi Shuru Karein</SH>
          <p className="text-gray-700 leading-relaxed mb-4">
            Yeh scheme sach mein ek <strong>farmer-friendly option</strong> hai. Chhota kisan ho ya medium-scale — har annadata ko affordable credit deta hai jo kheti aage badhane mein madad karta hai.
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
            Deri mat karo. 2026 mein application process pehle se bhi simple ho gaya hai — online apply, PM Kisan beneficiaries ke liye pre-filled forms, aur sarkar ki subsidy ke saath competitive rates. <strong>Aaj hi apply karo aur apni kheti ko next level par le jao.</strong>
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