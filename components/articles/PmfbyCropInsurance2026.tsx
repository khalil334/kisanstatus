'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-04-20T08:00:00+05:30';
const MODIFIED = '2026-07-04T08:00:00+05:30';

const RELATED = [
  { slug: 'kisan-credit-card-online-apply-2026', title: 'KCC Credit Card Guide', emoji: '💳' },
  { slug: 'pm-kisan-23vi-kist-2026-status-check', title: '23vi Installment Status', emoji: '📅' },
  { slug: 'kisan-tractor-loan-2026', title: 'Tractor Loan Guide', emoji: '🚜' },
  { slug: 'pm-kisan-mobile-number-change', title: 'Mobile/Bank Update', emoji: '📱' },
  { slug: 'nano-dap-500ml-price-in-india-2026', title: 'Nano DAP Price Guide', emoji: '🌱' },
  { slug: 'soil-health-card-complete-guide-2026', title: 'Soil Health Card', emoji: '🧪' },
];

const FAQS_DATA = [
  { q: 'PMFBY helpline number kya hai?', a: 'Toll-Free: 1800-200-7710 (24×7). Application notification, status inquiry, koi bhi query ke liye call karo. Policy number paas rakho.' },
  { q: 'Bank ne enroll nahi ki aur fasal kharab ho gayi?', a: 'Agar premium account se kata tha lekin bank ne enroll nahi kiya toh bank zimmedaar hai. Banking Ombudsman ya agriculture department mein complaint karo.' },
  { q: 'Partial loss par bhi indemnity milta hai?', a: 'Haan. 25%+ loss par proportional indemnity. 70% loss = 70% amount. Surveyor report decisive hoti hai.' },
  { q: 'Ek khet mein do fasal — dono cover hogi?', a: 'Ek application = ek fasal. Alag faslon ke liye alag enrollment. Mixed cropping rules state-wise alag — state portal check karo.' },
  { q: 'Application reject ho gayi — ab kya?', a: 'Rejection letter mein reason padho. Fix karo. Appeal karo — insurance grievance cell → state agriculture dept → portal grievance.' },
  { q: 'Kya koi bhi crop cover hoti hai?', a: 'Nahi. Sirf government-notified crops. Har state har season mein list jaari karta hai. Block Agriculture Office se confirm karo.' },
  { q: 'Premium kat gaya lekin policy nahi mili?', a: 'Bank se written confirmation maango. Premium kata = auto-enrolled. Policy document + receipt bank se lo — legal right hai.' },
];

export default function PmfbyCropInsurance2026({ article }: { article: ArticleMeta }) {
  return (
    <>
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Crop Insurance Guide</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Fasal Bima Yojana</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PMFBY Crop Insurance 2026: Enrollment, Claim Process, Status Check + ₹1,000 Premium Se ₹35,000 Kaise Mile
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 12 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        {/* Hero Image #1 — PRESERVED */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/articles/pmfby-crop-insurance-2026/hero-image.webp'}
            alt="PMFBY crop insurance 2026 — fasal kharab hone par financial relief claim process"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Fasal Kharab Ho Toh Sarkari Sahayata Kaise Paayein
          </p>
        </div>

        {/* Emotional Hook */}
        <div className="my-6 p-5 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 border-l-[6px] rounded-xl">
          <p className="text-sm text-green-900 dark:text-green-200 leading-relaxed mb-2">
            Badi umeed se fasal lagayi. Monsoon accha, khaad sahi. Phir aandhi ya ati-varsha ne sab palat diya. Mehnat, paisa — sab paani mein.
          </p>
          <p className="text-sm text-green-900 dark:text-green-200 leading-relaxed">
            Aise waqt mein <strong>PMFBY (Pradhan Mantri Fasal Bima Yojana)</strong> kaam aati hai. Kai kisan ko pata hi nahi hota ki claim kaise hota hai. Is guide mein wahi poori process hai — jis se kai farmers ne successfully indemnity paaya hai.
          </p>
        </div>

        {/* Infographic Image #2 — PRESERVED */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pmfby-crop-insurance-2026/infographic.webp"
            alt="PMFBY key features infographic 2026 — premium rates, coverage, enrollment methods"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            PMFBY Key Features — Ek Nazar Mein
          </p>
        </div>

        {/* What Is PMFBY */}
        <section className="mb-8">
          <SH>PMFBY Kya Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            2016 mein shuru hua flagship yield protection program. Agar fasal kudrati aafat, keedo ya bimari se kharab ho jaaye toh aarthik sahara milta hai. Simple baat — yeh na hota toh nuksan kisan khud bharta.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {[
              { icon: '🌾', title: 'Kharif Crops', desc: 'Dhaan, maize, bajra, soyabean — Premium: 2%' },
              { icon: '🌿', title: 'Rabi Crops', desc: 'Gehun, sarson, chana — Premium: 1.5%' },
              { icon: '🍎', title: 'Horticulture', desc: 'Fruits, vegetables — Premium: 5%' },
              { icon: '💧', title: 'Coverage', desc: 'Baarish, sukhha, baadh, aandhi, keede, post-harvest' },
              { icon: '📱', title: 'Online + Offline', desc: 'Bank, CSC ya pmfby.gov.in se registration' },
              { icon: '💰', title: 'Direct Payment', desc: 'Indemnity seedha bank account mein DBT se' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
                <span className="text-2xl shrink-0">{icon}</span>
                <div>
                  <p className="font-semibold text-[var(--color-text)] text-sm">{title}</p>
                  <p className="text-[var(--color-text-muted)] text-xs mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Fasal Type</th>
                  <th className="p-3 text-center">Kisan Premium</th>
                  <th className="p-3 text-center">Govt Share</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Kharif (Dhaan, Soyabean)', '2%', '98%'],
                  ['Rabi (Gehun, Chana)', '1.5%', '98.5%'],
                  ['Horticulture / Commercial', '5%', '95%'],
                ].map(([type, prem, govt], i) => (
                  <tr key={type} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-green-50/40 dark:bg-green-900/10'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-[var(--color-text)]">{type}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-center text-green-700 dark:text-green-400 font-bold">{prem}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-center text-[var(--color-text-muted)]">{govt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[var(--color-text-muted)]">* Premium bahut kam — baaki sab government bharta hai.</p>
        </section>

        {/* Enrollment */}
        <section className="mb-8">
          <SH>Enrollment Process — 3 Tarike</SH>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-700 rounded-xl text-center">
              <span className="text-3xl block mb-2">🏦</span>
              <p className="font-black text-green-800 dark:text-green-300 text-sm">Bank Branch</p>
              <span className="inline-block mt-1 px-2 py-0.5 bg-green-600 text-white text-[10px] rounded-full font-bold">Easiest</span>
              <p className="text-xs text-[var(--color-text-muted)] mt-2">KCC/crop loan hai toh auto-enroll. Premium auto-debit.</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-300 dark:border-blue-700 rounded-xl text-center">
              <span className="text-3xl block mb-2">🖥️</span>
              <p className="font-black text-blue-800 dark:text-blue-300 text-sm">CSC Center</p>
              <span className="inline-block mt-1 px-2 py-0.5 bg-blue-600 text-white text-[10px] rounded-full font-bold">Offline</span>
              <p className="text-xs text-[var(--color-text-muted)] mt-2">Documents de do, operator online registration karega.</p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-300 dark:border-purple-700 rounded-xl text-center">
              <span className="text-3xl block mb-2">🌐</span>
              <p className="font-black text-purple-800 dark:text-purple-300 text-sm">pmfby.gov.in</p>
              <span className="inline-block mt-1 px-2 py-0.5 bg-purple-600 text-white text-[10px] rounded-full font-bold">Online</span>
              <p className="text-xs text-[var(--color-text-muted)] mt-2">Aadhaar OTP verify → fasal + land details fill karo.</p>
            </div>
          </div>
          <IB>
            <strong>Important:</strong> KCC ya crop loan hai toh almost certainly already enrolled ho. Bank se confirm karo — kai farmers ko pata hi nahi hota. Deadline: Kharif July 31, Rabi Dec 31 (state-wise vary).
          </IB>
        </section>

        {/* Claim Process */}
        <section className="mb-8">
          <SH>Claim Kaise File Karein — 7 Steps</SH>
          <StepList>
            <SI n={1}><strong>72 Ghante Mein Soochna (CRITICAL):</strong> Nuksan ke 72h andar insurance company/bank ko inform karo. Miss kiya = reject</SI>
            <SI n={2}><strong>Helpline Call:</strong> 1800-200-7710 → Policy number + Aadhaar + loss details batao → Reference number milega</SI>
            <SI n={3}><strong>Bank/Insurance Office Jaao:</strong> Application form lo, fill karo</SI>
            <SI n={4}><strong>Documents Submit:</strong> Saare documents jama karo. Ek copy apne paas rakho</SI>
            <SI n={5}><strong>Survey/Inspection:</strong> Surveyor field mein aayega, photos lega, report banayega</SI>
            <SI n={6}><strong>Assessment Report:</strong> Loss percentage + indemnity amount calculate hoga</SI>
            <SI n={7}><strong>Payment:</strong> Approval ke baad DBT se seedha bank account mein</SI>
          </StepList>
          <DB>
            <strong>72 Ghante Ka Rule = Unbreakable.</strong> Kai farmers kuch din baad inform karte hain — application reject. Fasal kharab hote hi TURANT call karo.
          </DB>
        </section>

        {/* Status Check Image #3 — PRESERVED */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pmfby-crop-insurance-2026/status-check.webp"
            alt="PMFBY indemnity status check online portal — pmfby.gov.in application tracking"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            PMFBY Portal Par Indemnity Status Online Check Karo
          </p>
        </div>

        {/* Status Check */}
        <section className="mb-8">
          <SH>Status Online Kaise Check Karein</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            pmfby.gov.in → Application Status tab → Policy/Application Number + Aadhaar → Captcha → Check Status. Ya PMFBY mobile app download karo Play Store se.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Matlab</th>
                  <th className="p-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Submitted', 'Request receive ho gayi', 'Wait — surveyor aayega'],
                  ['Under Survey', 'Field inspection chal rahi', 'Cooperative raho'],
                  ['Under Assessment', 'Loss calculate ho raha', '15-30 din wait'],
                  ['Approved', 'Indemnity pass', '7-10 din mein bank mein'],
                  ['Payment Processed', 'DBT se bhej diya', 'Statement check karo'],
                  ['Rejected', 'Application fail', 'Reason padho, appeal karo'],
                  ['On Hold', 'Document/info chahiye', 'Bank/insurance contact'],
                ].map(([status, meaning, action], i) => (
                  <tr key={status} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-semibold text-xs text-[var(--color-text)]">{status}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{meaning}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-green-700 dark:text-green-400 font-medium">{action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Payment Calculation */}
        <section className="mb-8">
          <SH>Kitna Milta Hai? Real Example</SH>
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5 mb-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {[
                ['Fasal', 'Soyabean'],
                ['Zameen', '5 bigha (~1.25 hectare)'],
                ['Sum Insured/hectare', '₹40,000'],
                ['Total Sum Insured', '₹50,000'],
                ['Kisan Premium (2%)', '₹1,000'],
                ['Loss Assessment', '70% crop loss'],
                ['Indemnity (70% of ₹50K)', '₹35,000'],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-2">
                  <span className="font-semibold text-amber-800 dark:text-amber-300 shrink-0">{k}:</span>
                  <span className="text-[var(--color-text-muted)]">{v}</span>
                </div>
              ))}
            </div>
            <p className="text-green-700 dark:text-green-400 font-black text-sm mt-3">✅ Sirf ₹1,000 premium → ₹35,000 indemnity!</p>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Total timeline: ~45-60 din (application → survey → assessment → approval → DBT payment).
          </p>
        </section>

        {/* Documents */}
        <section className="mb-8">
          <SH>Claim Ke Liye Documents</SH>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <p className="font-black text-blue-800 dark:text-blue-300 text-sm mb-2">Identity</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>✓ Aadhaar Card (original + copy)</li>
                <li>✓ PAN Card</li>
                <li>✓ Bank Passbook (linked)</li>
                <li>✓ Registered Mobile</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-2">Land / Crop</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>✓ Khasra / Khatauni</li>
                <li>✓ Crop sowing certificate</li>
                <li>✓ Ownership / lease agreement</li>
                <li>✓ Policy document / receipt</li>
              </ul>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-black text-red-800 dark:text-red-300 text-sm mb-2">Loss Evidence</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>✓ Damaged crop photos (date-stamped)</li>
                <li>✓ 72hr intimation proof</li>
                <li>✓ Patwari/Sarpanch letter (helpful)</li>
                <li>✓ Disaster report (if available)</li>
              </ul>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <p className="font-black text-amber-800 dark:text-amber-300 text-sm mb-2">Bank Details</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>✓ Account number + IFSC</li>
                <li>✓ Cancelled cheque</li>
                <li>✓ DBT-enabled confirm</li>
                <li>✓ Joint account = dono ki ID</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Coverage */}
        <section className="mb-8">
          <SH>Kya Cover Hota Hai, Kya Nahi</SH>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-2">✅ Covered</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>✓ Sukhha, Baadh, Ati-Varsha</li>
                <li>✓ Aandhi, Toofan, Olavrishti</li>
                <li>✓ Bhumi Dhansaav (Landslide)</li>
                <li>✓ Keede / Beemari (Pest/Disease)</li>
                <li>✓ Post-Harvest Losses (14 din)</li>
                <li>✓ Sowing Failure (pre-sown risk)</li>
              </ul>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-black text-red-800 dark:text-red-300 text-sm mb-2">❌ Not Covered</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>✗ Kisan ki negligence</li>
                <li>✗ Chori / theft</li>
                <li>✗ Yudh / nuclear risk</li>
                <li>✗ Deliberately set fire</li>
                <li>✗ Premium nahi bhara</li>
                <li>✗ Deadline ke baad notification</li>
                <li>✗ Non-notified crops</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Rejection Reasons */}
        <section className="mb-8">
          <SH>Common Rejection Reasons + Fix</SH>
          <div className="space-y-3">
            {[
              { r: '72 Ghante Baad Notification', fix: 'Turant helpline/bank call karo. Call record/screenshot proof rakho.' },
              { r: 'Document Mismatch', fix: 'Aadhaar-bank naam same hona chahiye. Koi mismatch = delay/reject.' },
              { r: 'Non-Notified Crop', fix: 'Pehle confirm karo fasal notified hai. Block Agri Office se pucho.' },
              { r: 'Premium Not Paid', fix: 'Auto-debit fail? Bank statement check karo. Account mein balance rakho.' },
              { r: 'DBT Account Not Linked', fix: 'Bank jaake Aadhaar DBT linking confirm karo.' },
              { r: 'Surveyor Visit Mein Absent', fix: 'Jab surveyor aaye toh khet par raho. Poora khet dikhao.' },
            ].map(({ r, fix }) => (
              <div key={r} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl overflow-hidden">
                <div className="bg-red-50 dark:bg-red-900/20 border-b border-red-100 dark:border-red-800 px-4 py-2.5">
                  <p className="font-black text-red-800 dark:text-red-300 text-sm">❌ {r}</p>
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-2 bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                    <span className="text-green-600 dark:text-green-400 font-black text-xs shrink-0 mt-0.5">FIX:</span>
                    <p className="text-xs text-green-800 dark:text-green-300 leading-relaxed">{fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Payment Received Image #4 — PRESERVED */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pmfby-crop-insurance-2026/payment-received.webp"
            alt="PMFBY indemnity payment received in bank account — financial relief for next season"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Indemnity Aaya — Agle Season Ki Kheti Saved
          </p>
        </div>

        {/* 2026 Updates */}
        <section className="mb-8">
          <SH>2026 Updates — Latest Changes</SH>
          <div className="space-y-3">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <span className="inline-block px-2 py-0.5 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 text-[10px] font-bold rounded-full mb-2">Budget 2026</span>
              <p className="font-black text-[var(--color-text)] text-sm mb-1">₹15,000 Crore — Record High</p>
              <p className="text-xs text-[var(--color-text-muted)]">Pichle saal se 18% zyada. Zyada coverage + faster settlement.</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <span className="inline-block px-2 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-[10px] font-bold rounded-full mb-2">Digital Survey</span>
              <p className="font-black text-[var(--color-text)] text-sm mb-1">Drone-Based Assessment Shuru</p>
              <p className="text-xs text-[var(--color-text-muted)]">Surveyor manmani kam, accurate assessment zyada.</p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl">
              <span className="inline-block px-2 py-0.5 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 text-[10px] font-bold rounded-full mb-2">AI Pilot</span>
              <p className="font-black text-[var(--color-text)] text-sm mb-1">Satellite Imagery Se Loss Calculation</p>
              <p className="text-xs text-[var(--color-text-muted)]">Faster + transparent applications ke liye Ministry pilot.</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <span className="inline-block px-2 py-0.5 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 text-[10px] font-bold rounded-full mb-2">Voluntary Push</span>
              <p className="font-black text-[var(--color-text)] text-sm mb-1">Non-Loanee Farmers Special Drive</p>
              <p className="text-xs text-[var(--color-text-muted)]">Bina loan wale kisan bhi enroll karo. Agle season mein zaroor lo.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PMFBY Crop Insurance FAQ 2026 — Verified Answers" />
        </section>

        {/* Quick Summary */}
        <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-300 dark:border-amber-700 rounded-xl p-5 mb-8">
          <h3 className="font-black text-amber-900 dark:text-amber-300 text-base mb-3">Quick Summary</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            {[
              ['Portal', 'pmfby.gov.in'],
              ['Helpline', '1800-200-7710 (24×7)'],
              ['Kharif Premium', '2%'],
              ['Rabi Premium', '1.5%'],
              ['Critical Rule', '72 ghante mein inform'],
              ['Payment', 'DBT seedha bank'],
              ['Timeline', '~45-60 din'],
              ['Budget 2026', '₹15,000 crore'],
            ].map(([k, v]) => (
              <div key={k} className="flex gap-2">
                <span className="font-semibold text-amber-800 dark:text-amber-300 shrink-0">{k}:</span>
                <span className="text-[var(--color-text-muted)]">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <GovLink
          href="https://pmfby.gov.in"
          label="PMFBY Official Portal — Enrollment & Status"
          guide="Abhi Check Karo"
          guideHref="/articles/kisan-credit-card-online-apply-2026"
          portalName="pmfby.gov.in"
        />

        <CalcBanner
          icon="🌾"
          title="Apni Fasal Ki Income Calculate Karo"
          desc="MSP income, crop profit, insurance premium — sab free calculators se"
          primaryCta={{ href: '/calculator/msp-income', label: '📊 MSP Calculator →' }}
          secondaryCta={{ href: '/calculator/crop-profit', label: '🌾 Crop Profit' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/kisan-credit-card-online-apply-2026', l: '💳 KCC Guide' },
          { href: '/articles/kisan-tractor-loan-2026', l: '🚜 Tractor Loan' },
          { href: '/calculator/msp-income', l: '📊 MSP Calculator' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}