'use client';
import Link from 'next/link';
import { SvgInstallmentHistory, SvgFAQ } from '@/components/ArticleSVGs';
import { SI, StepList, IB, WB, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, fmtDate } from '@/components/ArticleShared';

const PUBLISHED = '2026-06-04T08:00:00+05:30';
const MODIFIED  = '2026-06-10T08:00:00+05:30';
const DOMAIN = 'https://kisanstatus.com';
const URL    = `${DOMAIN}/articles/pm-kisan-installment-history-check-online`;

const schemas = [{
  '@context':'https://schema.org','@type':'Article',
  headline:'PM Kisan Kist History Check Online 2026 — Poori Installment List Ek Jagah',
  description:'PM Kisan installment history kaise check karein — kaunsi kist kab aayi, kitni miss hui, arrears kab milenge. Aadhaar ya mobile se complete history online.',
  image:`${DOMAIN}/og-image.jpg`, datePublished:PUBLISHED, dateModified:MODIFIED,
  author:{'@type':'Person',name:'Sidhu Singh',url:`${DOMAIN}/about`},
  publisher:{'@type':'Organization',name:'KisanStatus.com',url:DOMAIN},
  mainEntityOfPage:{'@type':'WebPage','@id':URL},
  inLanguage:'hi-IN', wordCount:3200,
}];

const RELATED = [
  {slug:'pm-kisan-21vi-installment-status-check',    title:'Latest Kist Status Check',    emoji:'📅'},
  {slug:'pm-kisan-payment-failed-status-2026',       title:'Payment Failed Fix',           emoji:'💸'},
  {slug:'pm-kisan-ekyc-online-2026',                 title:'eKYC Guide',                   emoji:'🔐'},
  {slug:'pm-kisan-rejected-list-2026',               title:'Rejected List Fix',            emoji:'❌'},
  {slug:'pm-kisan-beneficiary-list-2026',            title:'Beneficiary List Check',       emoji:'📋'},
  {slug:'pm-kisan-problems-solution-guide-2026',     title:'10 Problems Guide',            emoji:'🔧'},
];

// All kist history
const KIST_HISTORY = [
  {n:'22vi',date:'13 March 2026',   amount:'₹2,000',status:'✅ Released'},
  {n:'21vi',date:'Nov 2025',        amount:'₹2,000',status:'✅ Released'},
  {n:'20vi',date:'Jul 2025',        amount:'₹2,000',status:'✅ Released'},
  {n:'19vi',date:'Feb 2025',        amount:'₹2,000',status:'✅ Released'},
  {n:'18vi',date:'Oct 2024',        amount:'₹2,000',status:'✅ Released'},
  {n:'17vi',date:'Jun 2024',        amount:'₹2,000',status:'✅ Released'},
  {n:'16vi',date:'Feb 2024',        amount:'₹2,000',status:'✅ Released'},
  {n:'15vi',date:'Nov 2023',        amount:'₹2,000',status:'✅ Released'},
  {n:'14vi',date:'Jul 2023',        amount:'₹2,000',status:'✅ Released'},
  {n:'13vi',date:'Feb 2023',        amount:'₹2,000',status:'✅ Released'},
];

export default function PmKisanInstallmentHistoryCheckOnline() {
  return (
    <>
      {schemas.map((s,i)=><script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(s)}}/>)}

      <div className="bg-primary-600 py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/articles/pm-kisan-21vi-installment-status-check" className="hover:text-white">PM Kisan Guide</Link><span>/</span>
            <span className="text-white">Installment History</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">📊 Kist History</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Kist History Check Online 2026 — Kaunsi Kist Kab Aayi, Kaunsi Miss Hui
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white">Sidhu Singh</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 12 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">
        <div className="my-6 rounded-2xl overflow-hidden border border-green-100 shadow-md">
          <img
            src="/images/installment-history.png"
            alt="PM Kisan kist history mobile par check karo 2026"
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            loading="lazy"
            width="1200"
            height="630"
          />
          <p className="text-center text-xs text-gray-500 py-2 bg-green-50 border-t border-green-100">PM Kisan Kist History — Poori List Online Check Karo 2026</p>
        </div>

        <div className="my-6 p-5 bg-blue-50 border-2 border-blue-400 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-blue-800 mb-2">📊 History Check Kyun Zaroori Hai?</h2>
          <p className="text-sm text-blue-900 leading-relaxed">
            Rajasthan ke ek farmer ne bataya — unhe laga sirf 1-2 kist miss hui. Jab history check ki to pata chala <strong>7 kistein miss thi — ₹14,000 arrears pending</strong>. Problem fix karne ke baad sab ek saath credit. History check karo — pata karo exactly kitna paisa banega.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Poori History Kaise Dekhen — Step by Step
          </h2>
          <StepList>
            <SI n={1}><strong>pmkisan.gov.in</strong> kholo — mobile ya computer</SI>
            <SI n={2}>Farmers Corner → <strong>Beneficiary Status</strong></SI>
            <SI n={3}>Aadhaar, Mobile, ya Registration Number daalo</SI>
            <SI n={4}>Get Data click karo</SI>
            <SI n={5}><strong>Payment Details</strong> section scroll karo — har kist ki entry hogi</SI>
            <SI n={6}>Har row mein: Kist number, Date, Amount, Status — note karo ya screenshot lo</SI>
            <SI n={7}>Miss hui kistein "Not Released" ya "Failed" dikhegi — count karo</SI>
          </StepList>
          <IB><strong>💡 Tip:</strong> Screenshot lo puri history ka — baad mein helpline par call karte waqt ya Bank mein kaam aata hai. Gallery mein save karo.</IB>
        </section>

        {/* Complete kist history table */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            PM Kisan — Poori Kist History 2019-2026
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="p-3 text-left">Kist</th>
                  <th className="p-3 text-left">Release Date</th>
                  <th className="p-3 text-right">Amount</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-amber-50">
                  <td className="p-3 border-b font-black text-amber-800">23vi</td>
                  <td className="p-3 border-b text-amber-700">Jun-Jul 2026 (Expected)</td>
                  <td className="p-3 border-b text-right font-bold text-amber-700">₹2,000</td>
                  <td className="p-3 border-b"><span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-bold">⏳ Expected</span></td>
                </tr>
                {KIST_HISTORY.map(({n,date,amount,status},i)=>(
                  <tr key={n} className={i%2===0?'bg-white':'bg-green-50/40'}>
                    <td className="p-3 border-b font-bold text-gray-900">{n}</td>
                    <td className="p-3 border-b text-gray-600 text-xs">{date}</td>
                    <td className="p-3 border-b text-right font-semibold text-green-700">{amount}</td>
                    <td className="p-3 border-b"><span className="text-xs text-green-700 font-medium">{status}</span></td>
                  </tr>
                ))}
                <tr className="bg-gray-50">
                  <td className="p-3 border-b text-xs text-gray-500" colSpan={2}>Kist 1 (Feb 2019) se Kist 12 (Oct 2022) tak</td>
                  <td className="p-3 border-b text-right text-xs font-bold text-gray-600">₹24,000</td>
                  <td className="p-3 border-b"><span className="text-xs text-green-600">✅ All Released</span></td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="bg-green-700 text-white">
                  <td className="p-3 font-black" colSpan={2}>Total (22 kist released)</td>
                  <td className="p-3 text-right font-black text-lg">₹44,000</td>
                  <td className="p-3 text-xs">Per eligible farmer</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Miss Hui Kistein — Arrears Calculator
          </h2>
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-gray-700 mb-4">Miss hui kiston ka hisaab simple hai:</p>
            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 text-left">Miss Hui Kistein</th>
                    <th className="p-3 text-right">Arrears Amount</th>
                    <th className="p-3 text-left">Fix Karne Ke Baad Milega</th>
                  </tr>
                </thead>
                <tbody>
                  {[1,2,3,4,5,6,7,8,10].map((n,i)=>(
                    <tr key={n} className={i%2===0?'bg-white':'bg-green-50/40'}>
                      <td className="p-3 border-b font-medium">{n} kist</td>
                      <td className="p-3 border-b text-right font-black text-green-700">₹{(n*2000).toLocaleString('en-IN')}</td>
                      <td className="p-3 border-b text-xs text-gray-600">₹{(n*2000).toLocaleString('en-IN')} arrears + ₹2,000 current = ₹{((n+1)*2000).toLocaleString('en-IN')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <IB><strong>🎯 Example:</strong> 5 kistein miss huin → ₹10,000 arrears. Problem fix karo → ₹10,000 + ₹2,000 (next kist) = <strong>₹12,000 ek baar mein credit.</strong></IB>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">FAQ</h2>
          <SvgFAQ caption="PM Kisan History FAQ 2026"/>
          <div className="space-y-3 mt-4">
            {[
              {q:'History mein purani kist "Not Released" dikh rahi hai — paisa milega?',a:'Haan — agar aap eligible hain aur current problem fix ho jaati hai to sab purani missed kisten arrears mein milti hain. Sirf tab nahi milegi agar kist ke waqt genuinely ineligible the (like family member government employee tha).'},
              {q:'Bank statement mein PM KISAN entry check karna chahiye?',a:'Haan — Beneficiary Status ke saath bank statement bhi compare karo. Kabhi kabhi portal par "Success" dikhta hai lekin bank mein nahi aayi — yeh NPCI seeding issue hai. Dono jagah verify karo.'},
              {q:'Pehle se registered hoon lekin koi history nahi dikh rahi?',a:'Registration number ya Aadhaar se check karo — mobile number change hua to old number se nahi dikhega. Agar genuinely koi history nahi — state ne abhi verify nahi kiya hoga. Helpline 155261 se puchho.'},
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

        <GovLink href="https://pmkisan.gov.in/BeneficiaryStatus.aspx" label="PM Kisan Installment History — Official Check" guide="History Dekho"/>
        <CalcBanner/>
        <RelatedArticles articles={RELATED}/>
        <AuthorBox modified={MODIFIED}/>
        <BottomNav/>
        <Disclaimer/>
      </div>
    </>
  );
}
