'use client';
import Link from 'next/link';
import { SvgDocuments } from '@/components/ArticleSVGs';
import { SI, StepList, IB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const DOMAIN = 'https://kisanstatus.com';

const RELATED = [
  {slug:'pm-kisan-23vi-kist-2026-status-check',   title:'23vi Kist Status Check',      emoji:'💰'},
  {slug:'pm-kisan-ekyc-online-2026',              title:'eKYC Karo — Free Guide',      emoji:'🔐'},
  {slug:'pm-kisan-payment-failed-status-2026',    title:'Payment Failed Fix',          emoji:'💸'},
  {slug:'kisan-rin-kaha-se-le-2026',              title:'Kisan Rin Kaha Se Le',        emoji:'🏦'},
];

export default function KisanCreditCardOnlineApply2026({ article }: { article: ArticleMeta }) {
  const PUBLISHED = article.publishedTime ?? '2026-06-01T08:00:00+05:30';
  const MODIFIED  = article.modifiedTime  ?? PUBLISHED;

  return (
    <>
      <div className="bg-primary-600 py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/articles" className="hover:text-white">Articles</Link><span>/</span>
            <span className="text-white">Kisan Credit Card 2026</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">💳 Kisan Credit Card</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Kisan Credit Card (KCC) Online Apply 2026 — Eligibility, Documents Aur Loan Limit
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white">Sidhu Singh</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 15 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">
        <div className="my-6 rounded-2xl overflow-hidden border border-green-100 shadow-md">
          <img
            src="/images/kisan-credit-card-apply-online-hero.webp"
            alt="Kisan Credit Card online apply 2026 guide kisan ke liye"
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            loading="lazy"
            width="1200"
            height="630"
          />
          <p className="text-center text-xs text-gray-500 py-2 bg-green-50 border-t border-green-100">Kisan Credit Card 2026 — Asaan Credit, Kam Interest, Bina Collateral</p>
        </div>

        {/* Intro */}
        <section className="mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            Agar aap Bharat mein kisan hain aur sasta, asaan credit dhoond rahe hain, toh{' '}
            <strong>Kisan Credit Card (KCC)</strong> yojana sarkar ke sabse achhe financial tools mein se ek hai.
            Beej, khaad, dawai khareedne ho ya roz-marra ke kharche manage karne hon — KCC lakhon kisanon ke liye
            ek lifeline ki tarah kaam karta hai.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            2026 mein sarkar ne <strong>KCC application process</strong> ko aur aasan bana diya hai — ghar baithe
            online apply kar sakte hain, bina lambi line mein khade hue, bina confusing paperwork ke.
          </p>
          <IB><strong>💡 Quick Answer:</strong> KCC ek government-backed agricultural loan scheme hai jo kisanon ko subsidized interest rate par short-term credit deti hai. Apne bank ki website par jaakar KCC form bharo, Aadhaar aur land records upload karo, aur bank verification ke baad ₹5 lakh tak ka loan 4% interest rate se mil sakta hai (prompt repayment ke saath).</IB>
        </section>

        <section className="mb-8">
          <SH>Kisan Credit Card Kya Hai?</SH>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kisan Credit Card ko Government of India ne RBI aur NABARD ke saath milkar shuru kiya tha. Idea simple
            tha — kisanon ko reliable aur affordable credit ka source dena, taaki woh paise ki tension ke bina
            kheti par focus kar sakein.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            KCC ko ek aam credit card ki tarah samjho — bas yeh sirf agricultural activities ke liye hai. Beej,
            khaad khareedne, labour hire karne, equipment lene — sab is loan se ho sakta hai.
          </p>
          <IB><strong>💰 Asli farak:</strong> Moneylender se 24-60% interest vs KCC se sirf 4% effective rate — ₹3 lakh ke loan par yeh saalana ₹50,000+ ki bachat ban sakta hai.</IB>
        </section>

        <section className="mb-8">
          <SH>Kisan Credit Card Ke Fayde</SH>
          <div className="space-y-3">
            {[
              {t:'Asaan Aur Tezz Credit Access', d:'KCC approve hone ke baad, jab zaroorat ho paisa nikal sakte hain. Har season nayi application nahi deni padti — limit 5 saal tak active rehti hai.', emoji:'⚡'},
              {t:'Kam Interest Rate',            d:'Base rate 7% per annum hai, lekin time par repayment karne se effective rate sirf 4% reh jaata hai — government subvention aur Prompt Repayment Incentive milake.', emoji:'📉'},
              {t:'Flexible Repayment',           d:'Repayment crop cycle ke hisaab se hota hai. Har mahine EMI nahi deni — harvest ke baad chukao.', emoji:'🌾'},
              {t:'Crop Insurance Coverage',      d:'Kai banks PMFBY (Pradhan Mantri Fasal Bima Yojana) ko KCC loan ke saath bundle karte hain — natural calamity mein protection milta hai.', emoji:'🛡️'},
              {t:'Collateral-Free Loans',        d:'₹2 lakh tak ke loan ke liye koi property ya gold pledge karne ki zaroorat nahi — chhote kisanon ke liye bhi accessible hai.', emoji:'🤝'},
            ].map(({t,d,emoji})=>(
              <div key={t} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                <p className="font-black text-gray-900 text-sm mb-1">{emoji} {t}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <SH>KCC Eligibility — Kaun Apply Kar Sakta Hai?</SH>
          <img
            src="/images/kisan-credit-card-eligibility-criteria.webp"
            alt="Kisan Credit Card eligibility criteria 2026 — zameen, kheti, bank verification"
            className="w-full rounded-xl border border-gray-200 my-4"
            loading="lazy"
            width="1000"
            height="640"
          />
          <ul className="space-y-2 text-sm text-gray-700 mb-4">
            {[
              'Individual farmers jinke paas zameen hai',
              'Tenant farmers ya sharecroppers (dusron ki zameen par kheti karne wale)',
              'Self-Help Groups (SHGs) jo kheti se juda kaam karte hain',
              'Dairy, poultry, fisheries jaisi allied activities karne wale farmers',
              'PM Kisan Yojana mein registered farmers (priority milti hai)',
            ].map(i=><li key={i} className="flex gap-2"><span className="text-primary-600 shrink-0">✓</span>{i}</li>)}
          </ul>
          <IB><strong>👉 Tip:</strong> Agar aap PM Kisan beneficiary ho aur aapka <Link href="/articles/pm-kisan-ekyc-online-2026" className="underline font-semibold">eKYC</Link> already complete hai, toh KCC approval process bahut fast ho jaata hai.</IB>
        </section>

        <section className="mb-8">
          <SH>Documents Required For KCC Application</SH>
          <SvgDocuments caption="Kisan Credit Card — Required Documents 2026"/>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {[
              {doc:'Aadhaar Card', detail:'Bank account se linked hona zaroori', always:true},
              {doc:'PAN Card', detail:'Identity verification ke liye', always:true},
              {doc:'Bank Passbook', detail:'Pichle 6-12 mahine ka statement', always:true},
              {doc:'Land Records', detail:'Khata-Khatauni ya tenant ke liye lease agreement', always:true},
              {doc:'Passport Photo', detail:'2-3 recent copies', always:false},
              {doc:'Mobile Number', detail:'Aadhaar-linked, OTP verification ke liye', always:false},
            ].map(({doc,detail,always})=>(
              <div key={doc} className="flex gap-3 p-3 bg-white border border-gray-200 rounded-xl">
                <span className={`text-lg shrink-0 ${always?'text-green-600':'text-blue-500'}`}>{always?'✅':'📎'}</span>
                <div>
                  <p className="font-bold text-gray-900 text-xs">{doc} {always&&<span className="text-red-500">*</span>}</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">{detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-red-600 mt-2">* = Har case mein zaroori hai</p>
        </section>

        <section className="mb-8">
          <SH>KCC Loan Limit 2026</SH>
          <img
            src="/images/kisan-credit-card-loan-limits-interest-rates.webp"
            alt="Kisan Credit Card loan limit 2026 — minimum 10000 maximum 5 lakh interest 4 percent"
            className="w-full rounded-xl border border-gray-200 my-4"
            loading="lazy"
            width="1000"
            height="560"
          />
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
          <IB><strong>📌 Yaad rakho:</strong> ₹2 lakh se zyada ke loan par bank collateral maang sakta hai. Aadhaar submission interest subvention ke liye mandatory hai.</IB>
        </section>

        <section className="mb-8">
          <div className="bg-green-50 border-2 border-primary-600 border-l-[6px] rounded-xl p-5">
            <h3 className="text-base font-black text-primary-800 mb-2">🧮 Calculate Your KCC Loan Amount</h3>
            <p className="text-sm text-gray-700 mb-4">
              Apply karne se pehle apna eligible loan amount aur monthly EMI estimate karo — bank jaane se pehle fully prepared rahoge.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={`${DOMAIN}/calculator/kcc-loan-emi`} className="inline-block bg-primary-600 text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">KCC Loan EMI Calculator</a>
              <a href={`${DOMAIN}/calculator/msp-income`} className="inline-block bg-white border-2 border-primary-600 text-primary-700 text-sm font-bold px-4 py-2 rounded-lg hover:bg-green-100 transition-colors">MSP Income Calculator</a>
              <a href={`${DOMAIN}/calculator`} className="inline-block bg-white border-2 border-gray-300 text-gray-700 text-sm font-bold px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">All Calculators</a>
            </div>
          </div>
        </section>

        <CalcBanner/>

        <section className="mb-8">
          <SH>KCC Ke Liye Online Apply Kaise Karein?</SH>
          <img
            src="/images/kisan-credit-card-online-application-process.webp"
            alt="Kisan Credit Card online application process 2026 step by step"
            className="w-full rounded-xl border border-gray-200 my-4"
            loading="lazy"
            width="1000"
            height="500"
          />
          <StepList>
            <SI n={1}>Apne bank ki official website ya <strong>Kisan Rin Portal</strong> kholo, KCC section dhundo.</SI>
            <SI n={2}>Personal details bharo — naam, Aadhaar number, PAN, mobile number, zameen ki details.</SI>
            <SI n={3}>Scanned documents upload karo — clear scan, 2MB se kam size.</SI>
            <SI n={4}>Saari information double-check karo — chhoti si galti bhi approval delay kar sakti hai.</SI>
            <SI n={5}>Application submit karo, reference number save kar lo tracking ke liye.</SI>
            <SI n={6}>Reference number se status online ya bank app par track karo.</SI>
          </StepList>
          <IB><strong>💡 Tip:</strong> PM Kisan beneficiaries ke liye kuch banks ne pre-filled application forms diye hain — data entry error kam hota hai aur processing fast hoti hai.</IB>
        </section>

        <section className="mb-8">
          <SH>Offline Apply Karna Hai? Yeh Karo</SH>
          <StepList>
            <SI n={1}>Apni nearest bank branch jao — jahan already savings account hai.</SI>
            <SI n={2}>KCC application form maango, bank officer process samjha dega.</SI>
            <SI n={3}>Form carefully bharo, documents ke saath match karo.</SI>
            <SI n={4}>Photocopies attach karo, originals verification ke liye saath rakho.</SI>
            <SI n={5}>Form submit karo counter par, verification ka wait karo.</SI>
          </StepList>
          <p className="text-gray-700 leading-relaxed mb-4">
            Offline process mein usually <strong>7-15 working din</strong> lagte hain. PM Kisan beneficiaries ke liye fast ho sakta hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Common Mistakes Jo Avoid Karni Chahiye</SH>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              'Aadhaar aur bank account mein naam match nahi karta',
              'Land record details galat ya Khata number mismatch',
              'Eligibility check kiye bina apply karna',
              'Mobile number Aadhaar/bank se link nahi hai',
              'Form mein mandatory fields blank chhodna',
              'Repayment schedule samjhe bina sign karna',
            ].map(i=><li key={i} className="flex gap-2"><span className="text-red-500 shrink-0">⚠️</span>{i}</li>)}
          </ul>
        </section>

        <section className="mb-8">
          <SH>FAQ — Kisan Credit Card Ke Baare Mein</SH>
          <div className="space-y-3">
            {[
              {q:'Kisan Credit Card online apply kaise karein?', a:'Apne bank ki website ya Kisan Rin Portal par jaakar KCC section mein personal aur land details bharo, documents upload karo aur submit kar do. Reference number milega jisse status track ho sakta hai.'},
              {q:'2026 mein KCC ka maximum loan limit kitna hai?', a:'Union Budget 2025-26 ke baad interest subvention limit ₹5 lakh tak hai. Collateral-free loan ₹2 lakh tak milta hai bina kisi security ke.'},
              {q:'PM Kisan beneficiary ko KCC mein priority milti hai?', a:'Haan — PM Kisan beneficiaries ka Aadhaar aur land record already verified hota hai, isliye unka KCC application fast-track hota hai.'},
              {q:'KCC ke liye collateral chahiye?', a:'₹2 lakh tak ke loan ke liye koi collateral nahi chahiye. Usse zyada ke liye bank collateral ya guarantor maang sakta hai.'},
              {q:'KCC approval mein kitna time lagta hai?', a:'Online application 7-10 working din mein process hoti hai. Offline application mein 10-15 working din lag sakte hain.'},
              {q:'Bina zameen ke KCC mil sakta hai?', a:'Haan — tenant farmers aur sharecroppers bhi apply kar sakte hain. Lease agreement ya landowner se certificate dena hoga.'},
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
            alt="Kisan Credit Card loan approved 2026 kisan family financial support"
            className="w-full object-cover"
            style={{ maxHeight: '380px', objectPosition: 'center' }}
            loading="lazy"
            width="1200"
            height="630"
          />
        </div>

        <section className="mb-8">
          <SH>Conclusion</SH>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kisan Credit Card sach mein ek farmer-friendly scheme hai. Chhota kisan ho ya medium-scale — KCC har
            kisan ko affordable credit deta hai jo kheti aage badhane mein madad karta hai.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            2026 mein application process pehle se bhi simple ho gaya hai — online apply, PM Kisan beneficiaries
            ke liye pre-filled forms, aur sarkar ki subsidy ke saath competitive interest rates.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Documents ready rakho, details double-check karo, aur planting season shuru hone se pehle apply kar
            do — taaki paisa sahi waqt par mil sake.
          </p>
        </section>

        <GovLink
          href="https://www.kisanrin.com"
          label="Kisan Rin Portal — KCC Apply Karo"
          guide="Apply Karo"
          guideHref="/articles/pm-kisan-ekyc-online-2026"
        />

        <RelatedArticles articles={RELATED}/>
        <AuthorBox modified={MODIFIED}/>
        <BottomNav/>
        <Disclaimer/>
      </div>
    </>
  );
}
