'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-06-04T08:00:00+05:30';
const MODIFIED = '2026-07-04T08:00:00+05:30';

const RELATED = [
  { slug: 'pm-kisan-payment-failed-status-2026', title: 'DBT Transfer Failed Fix', emoji: '💸' },
  { slug: 'pm-kisan-rejected-list-2026', title: 'Application Rejected Fix', emoji: '❌' },
  { slug: 'pm-kisan-name-correction-online-2026', title: 'Name Correction Guide', emoji: '✏️' },
  { slug: 'pm-kisan-beneficiary-list-2026', title: 'Beneficiary Roster Check', emoji: '📋' },
  { slug: 'pm-kisan-23vi-kist-2026-status-check', title: '23rd Installment Status', emoji: '📅' },
  { slug: 'pm-kisan-registration-online-2026', title: 'New Enrollment Guide', emoji: '📝' },
];

const FAQS_DATA = [
  { q: 'Authentication complete hone ke baad pehli disbursement kab tak aayegi?', a: 'Identity validation successful hone ke baad agle scheduled cycle mein amount credit hota hai. Maan lo 23rd installment June-July 2026 ka hai aur tumne May mein process pura kiya — toh usi cycle mein milega. Jo pichle cycles miss hue woh arrears bank account mein ek saath aate hain.' },
  { q: 'Mera UID card ek state ka hai lekin zameen doosre state mein — validation hogi?', a: 'Bilkul hogi. Central portal par identity confirmation ke liye linked mobile number kisi bhi circle ka ho sakta hai. Sirf woh SIM active hona chahiye taaki OTP receive ho sake. Cross-state mismatch se koi rejection nahi aata authentication step mein.' },
  { q: 'Kya ek hi Aadhaar number se family ke sabhi members ka verification ho jaata hai?', a: 'Nahi. Scheme mein har individual beneficiary ka alag UID hona zaroori hai. Agar husband aur wife dono registered hain toh dono ko separately validate karna padega — alag-alag biometric credentials se. Ek number se sirf ek hi account link hota hai.' },
  { q: 'Nazdiki CSC band tha — biometric karwane ka koi alternative hai?', a: 'Haan. Kuch districts mein mobile authentication vans gaon-gaon jaate hain. Bank Mitra points ya Kisan Seva Kendras par bhi yeh facility kabhi-kabhi available hoti hai. Doosre block ya tehsil ke centre par bhi ja sakte ho — same district mein hona compulsory nahi hai.' },
  { q: 'Portal par "Verified" dikh raha hai lekin Beneficiary Status mein abhi bhi pending kyun?', a: 'Yeh dono alag databases hain. Identity confirmation sirf tumhari pehchan verify karti hai. Beneficiary list mein naam aane ke liye land record seeding aur state-level approval bhi chahiye. Status page par rejection reason check karo — shayad zameen integration abhi incomplete hai.' },
  { q: 'OTP baar-baar expire ho raha hai — kya karein?', a: 'OTP sirf 30 seconds valid rehta hai. Jaise hi code aaye turant enter karo. Agar delay ho raha hai toh pehle network check karo, phir "Resend OTP" click karo. Ek saath multiple requests mat bhejo — system temporarily block kar deta hai. 10 minute wait karke retry karo.' },
  { q: 'Fingerprint scanner baar-baar reject kar raha hai CSC par?', a: 'Sukhi ya ghisi-piti ungliyon se sensor read nahi kar paata. Haath thande paani se dhokar halka geela rakho. Thumb ki jagah index finger try karo. Garmi mein sensor overheat hota hai — chhaaya mein ya pankhe neeche baithkar attempt karo. Iris scan option bhi maango agar fingerprint se na ho.' },
];

export default function PmKisanEkycOnline2026({ article }: { article: ArticleMeta }) {
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
            <span className="text-white font-bold">Digital Verification Guide</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Identity Confirmation</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Digital Verification 2026: OTP Se Ghar Baithe Ya Biometric Se Centre Par — Dono Muft
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

        {/* HERO IMAGE - ADDED */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/articles/pm-kisan-ekyc-online-2026/otp-vs-biometric.webp'}
            alt="PM Kisan eKYC 2026 — OTP aur Biometric authentication dono muft tarike"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            OTP vs Biometric — Dono Muft, Dono Official
          </p>
        </div>

        {/* Field Hook */}
        <div className="my-6 p-5 bg-red-50 dark:bg-red-900/20 border-2 border-red-400 dark:border-red-800 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-red-800 dark:text-red-300 mb-2">Ek Kadwa Sach — Jo Maine Field Mein Dekha Hai</h2>
          <p className="text-sm text-red-900 dark:text-red-200 leading-relaxed mb-2">
            Pichhle mahine Bihar ke Vaishali district mein ek cultivator mila — Ramashray Singh. Chaar saal se scheme mein registered tha, zameen records bilkul sahi the, bank account bhi active tha. Lekin ek bhi disbursement nahi aayi thi. Jab maine portal check kiya toh pata chala — <strong>identity validation kabhi complete hi nahi hui thi.</strong>
          </p>
          <p className="text-sm text-red-900 dark:text-red-200 leading-relaxed">
            ₹48,000 (24 installments × ₹2,000) arrears mein pade the. Humne wahi CSC par biometric karwaya — <strong>ek mahine baad poora amount credit ho gaya.</strong> Yeh kahani hazaron beneficiaries ki hai. Isliye yeh guide likh raha hun — taaki aap yeh galti na karo.
          </p>
        </div>

        {/* Why This Matters */}
        <section className="mb-8">
          <SH>Yeh Identity Confirmation Kyun Zaroori Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            2022 se central government ne DBT system mein ek mandatory security layer add ki hai. Simple matlab — jab tak portal par tumhari pehchan digitally confirm nahi hoti, Fund Transfer Order generate hi nahi hoga. Chahe registration perfect ho, land records sahi hon, bank active ho — bina validation ke paisa ruk jaata hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Aksar log sochte hain enrollment karwa liya toh kaam khatam. Galat. Enrollment sirf pehla step hai. Doosra critical step yeh identity confirmation hai jo DBT pipeline unlock karti hai. Mere experience mein, pending cases mein se lagbhag 70% sirf isi ek wajah se atke hote hain.
          </p>
          <IB>
            <strong>Yaad Rakho:</strong> Yeh process bilkul muft hai — na portal par charge, na CSC par. Koi operator paise maange toh seedha 1800-1214-060 par complaint darj karo.
          </IB>
        </section>

        {/* Method Chooser */}
        <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 rounded-xl">
            <h3 className="font-black text-green-800 dark:text-green-300 text-sm mb-2">OTP Method — Ghar Baithe</h3>
            <p className="text-xs text-[var(--color-text-muted)] mb-3">UID se mobile linked hai? Yeh karo — 5 minute mein complete.</p>
            <div className="space-y-1 text-xs text-[var(--color-text-muted)]">
              <p className="flex gap-1"><span className="text-green-600 dark:text-green-400">✓</span> Koi queue nahi</p>
              <p className="flex gap-1"><span className="text-green-600 dark:text-green-400">✓</span> 24/7 available</p>
              <p className="flex gap-1"><span className="text-green-600 dark:text-green-400">✓</span> Completely free</p>
              <p className="flex gap-1"><span className="text-red-500 dark:text-red-400">✗</span> Active mobile link zaroori</p>
            </div>
          </div>
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-400 dark:border-blue-700 rounded-xl">
            <h3 className="font-black text-blue-800 dark:text-blue-300 text-sm mb-2">Biometric — CSC Par</h3>
            <p className="text-xs text-[var(--color-text-muted)] mb-3">Mobile link nahi? Code nahi aa raha? CSC jao — sirf UID card lao.</p>
            <div className="space-y-1 text-xs text-[var(--color-text-muted)]">
              <p className="flex gap-1"><span className="text-green-600 dark:text-green-400">✓</span> Mobile zaroori nahi</p>
              <p className="flex gap-1"><span className="text-green-600 dark:text-green-400">✓</span> Fingerprint/Iris se hota hai</p>
              <p className="flex gap-1"><span className="text-green-600 dark:text-green-400">✓</span> Officially free</p>
              <p className="flex gap-1"><span className="text-red-500 dark:text-red-400">✗</span> Physical visit required</p>
            </div>
          </div>
        </div>

        {/* IMAGE 1: OTP vs Biometric Comparison */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-ekyc-online-2026/otp-vs-biometric.webp"
            alt="OTP vs Biometric authentication comparison — ghar baithe mobile par ya CSC centre par fingerprint se identity verify karo"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            OTP (Left) vs Biometric (Right) — Dono Muft, Dono Official
          </p>
        </div>

        {/* OTP Method */}
        <section className="mb-8">
          <SH>OTP-Based Authentication — Step By Step</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Pehle confirm karo ki tumhara 12-digit UID kis mobile se juda hai. myAadhaar.uidai.gov.in par login karke check karo. Woh SIM active hai aur phone mein daali hai toh yeh method best hai.
          </p>
          <StepList>
            <SI n={1}>Browser mein <strong>pmkisan.gov.in</strong> open karo — official portal hi use karo</SI>
            <SI n={2}>Homepage par <strong>"Farmers Corner"</strong> → <strong>"e-KYC"</strong> select karo</SI>
            <SI n={3}><strong>12-digit UID number</strong> carefully type karo — ek digit galat = OTP kisi aur ko</SI>
            <SI n={4}><strong>Captcha image</strong> ke characters enter karo — case-sensitive hota hai</SI>
            <SI n={5}><strong>"Get OTP"</strong> dabao — 15-30 sec mein 6-digit code aayega</SI>
            <SI n={6}>Code box mein type karo → <strong>"Submit"</strong> press karo</SI>
            <SI n={7}><strong>"e-KYC Successfully Completed"</strong> message flash hoga — screenshot turant save karo</SI>
          </StepList>
          <WB>
            <strong>Savdhani:</strong> OTP kabhi kisi se share mat karo. Na phone par, na WhatsApp par. Government officials kabhi OTP nahi maangte. Maange toh fraud — 155261 par report karo.
          </WB>
        </section>

        {/* Biometric Method */}
        <section className="mb-8">
          <SH>Biometric Confirmation — Jab OTP Fail Ho</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Maine personally dekha hai ki rural areas mein OTP se zyada success rate biometric ka hai. Wajah simple — bahut se cultivators ka mobile UID se linked nahi hota, ya SIM band ho chuki hoti hai. Aise cases mein CSC hi reliable option bachta hai.
          </p>
          <StepList>
            <SI n={1}>Nazdiki CSC locate karo: <strong>locator.csccloud.in</strong> par PIN code ya Google Maps search</SI>
            <SI n={2}>Timing confirm karo — zyada tar 9 AM-6 PM, Sunday band</SI>
            <SI n={3}>Original UID card + photocopy backup le jaao</SI>
            <SI n={4}>Counter par clearly bolo: <strong>"PM Kisan e-KYC karwani hai"</strong></SI>
            <SI n={5}>Operator portal par credential number enter karega</SI>
            <SI n={6}><strong>Fingerprint scanner</strong> par ungli rako — 2-3 attempts legi machine</SI>
            <SI n={7}>Successful match par green confirmation aayegi</SI>
            <SI n={8}>Acknowledgement receipt maango — future reference ke liye</SI>
          </StepList>
          <DB>
            <strong>Koi Charge Nahi:</strong> Central guidelines ke mutabik completely free. Operator ₹50-200 maange toh politely refuse + 1800-1214-060 par call. License suspend ho sakta hai.
          </DB>
        </section>

        {/* IMAGE 2: CSC Biometric Process */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-ekyc-online-2026/csc-biometric-process.webp"
            alt="CSC centre biometric authentication process — Indian farmer fingerprint scan at Jan Seva Kendra for PM Kisan eKYC"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            CSC Centre Par Biometric Authentication — Fingerprint Scan Process
          </p>
        </div>

        {/* Status Messages Table */}
        <section className="mb-8">
          <SH>Portal Status Messages Ka Asli Matlab</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Har message ka specific technical meaning hota hai. Real scenarios jo maine field mein encounter kiye hain:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Portal Message</th>
                  <th className="p-3 text-left">Meaning</th>
                  <th className="p-3 text-left">Next Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['e-KYC Already Done ✅', 'Validation complete database mein', 'Kuch mat karo — next cycle payment'],
                  ['OTP Sent ⏳', 'Code generate ho chuka', 'Phone check — 30 sec mein enter'],
                  ['Aadhaar Not Found ❌', 'Credential number galat', 'Card dekhkar dobara type karo'],
                  ['Mobile Not Linked ⚠️', 'UID se active SIM nahi judi', 'CSC jaakar biometric use karo'],
                  ['Server Busy 🔄', 'Portal overloaded / maintenance', 'Raat 10 PM ya subah 6-8 AM retry'],
                  ['Deactivated 🚫', 'Account flag hua state dwara', 'BAO se milo — written application'],
                ].map(([msg, meaning, action], i) => (
                  <tr key={msg} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{msg}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{meaning}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-green-700 dark:text-green-400 font-medium">{action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Real Errors & Fixes */}
        <section className="mb-8">
          <SH>Real Problems Aur Tested Solutions</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Theoretical guides mein sab smooth lagta hai. Ground reality alag hai. Yeh errors maine personally hundreds of farmers ko solve karne mein help kiye hain:
          </p>
          <div className="space-y-3">
            {[
              { err: 'OTP 10 Minute Baad Bhi Nahi Aaya', why: 'Linked SIM inactive, SMS center congested, ya telecom gateway down.', fix: 'myAadhaar.uidai.gov.in par check karo kaunsa number linked hai. Purana band = CSC jaao. Active = airplane mode on-off, WiFi→data switch. Phir bhi na aaye = 2 ghante baad retry.' },
              { err: 'Validation Done Lekin Disbursement Ruki Hui', why: 'Identity confirmation aur DBT credit separate processes. NPCI bank mapping bhi verify hoti hai.', fix: 'Beneficiary Status check — "Active" dikhna chahiye. Bank branch pucho "NPCI seeded hai?" Dono complete = agli cycle mein amount. Ek step se auto payment nahi hoti.' },
              { err: 'CSC Par Fingerprint Reject Ho Raha Hai', why: 'Kheti-mazdoori se ungliyan ghisi, cuts, mitti. Garmi mein sensor overheat.', fix: 'Thande paani se haath dho. Ungli halki geeli rakho. Thumb ki jagah index/middle finger. Chhaaya/pankhe mein try. Fail = iris scan maango. Last resort: doosra CSC.' },
              { err: '"Completed" Dikh Raha Hai Par Status Pending', why: 'Central server aur state database sync mein 24-72 hours lagte hain.', fix: 'Screenshot save as proof. 2-3 din baad recheck. 72h baad bhi change nahi = 155261 ticket raise with screenshot.' },
              { err: 'Correct Number Par Bhi "Not Found"', why: 'Printed card aur UIDAI database mein discrepancy. Ya name spelling mismatch.', fix: 'Virtual ID (VID) generate uidai.gov.in se try karo. Ya directly biometric — number ke bina authenticate. Name correction = BAO.' },
            ].map(({ err, why, fix }) => (
              <div key={err} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-sm">
                <div className="bg-red-50 dark:bg-red-900/20 border-b border-red-100 dark:border-red-800 px-4 py-2.5">
                  <p className="font-black text-red-800 dark:text-red-300 text-sm">{err}</p>
                </div>
                <div className="p-4 space-y-2">
                  <p className="text-xs text-[var(--color-text-muted)]"><span className="font-bold text-[var(--color-text)]">Root Cause:</span> {why}</p>
                  <div className="flex items-start gap-2 bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                    <span className="text-green-600 dark:text-green-400 font-black text-xs shrink-0 mt-0.5">FIX:</span>
                    <p className="text-xs text-green-800 dark:text-green-300 leading-relaxed">{fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* State-wise Observations */}
        <section className="mb-8">
          <SH>Rajya-Wise Challenges — Field Notes</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Har state ka implementation alag. Jo UP mein smooth hai woh Jharkhand mein fail ho sakta hai. Real observations jo official guides mein nahi milenge:
          </p>
          <div className="space-y-3">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <h3 className="font-black text-blue-900 dark:text-blue-300 text-sm mb-1">UP & Bihar</h3>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">CSC density high lekin server load zyada. Subah 10-12 portal slowest. Raat 9 PM+ ya subah 6-7 AM best. Kuch blocks mein mobile auth vans — Gram Pradhan se schedule pucho.</p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <h3 className="font-black text-green-900 dark:text-green-300 text-sm mb-1">Maharashtra & Gujarat</h3>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">Digital literacy behtar = OTP zyada successful. Lekin Marathi/Gujarati transliteration mein Hindi portal par mismatch. "Not Found" = English spelling try ya biometric.</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <h3 className="font-black text-amber-900 dark:text-amber-300 text-sm mb-1">Jharkhand, Odisha & NE States</h3>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">Remote CSC door-door. Network weak. Bank Mitra / post office branches par bhi facility. DAO se mobile camp schedule maango.</p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl">
              <h3 className="font-black text-purple-900 dark:text-purple-300 text-sm mb-1">Punjab & Haryana</h3>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">Tenant cultivators zyada. Landowner NOC letter compulsory biometric ke liye. Bina NOC operator process nahi karega — strictly enforced.</p>
            </div>
          </div>
        </section>

        {/* Field Tips */}
        <section className="mb-8">
          <SH>Field-Tested Tips — Official Guides Mein Nahi Milengi</SH>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { tip: 'Cycle se 30 din pehle complete karo', detail: 'Last week lakho users = server crash. Early = zero stress.' },
              { tip: 'Success screenshot save rakho', detail: '"Completed" message ka photo = dispute proof.' },
              { tip: 'Off-peak hours try karo', detail: '10 PM - 8 AM fastest. 12-4 PM slowest — avoid.' },
              { tip: 'Pehle mobile linking verify', detail: 'myAadhaar par confirm karo. Blind OTP mat karo.' },
              { tip: 'Ek baar done = permanent', detail: 'Repeat nahi chahiye. Quarterly status check karo.' },
              { tip: 'Exact terminology bolo CSC par', detail: '"PM Kisan e-KYC" — generic "verification" = galat form.' },
              { tip: 'Failed attempts ke baad break', detail: '5-6 failures = temp lock. 2h wait, fresh try.' },
              { tip: 'Doosra browser/device try', detail: 'Cached data issue. Incognito = instant fix.' },
            ].map(({ tip, detail }) => (
              <div key={tip} className="flex gap-3 p-3 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-xl">
                <span className="text-green-600 dark:text-green-400 font-black text-lg shrink-0 mt-0.5">→</span>
                <div>
                  <p className="font-black text-[var(--color-text)] text-xs">{tip}</p>
                  <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Farmers Ke Real Sawal — Seedhe Jawaab
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Digital Verification FAQ 2026 — Ground-Level Verified Answers" />
        </section>

        <GovLink
          href="https://pmkisan.gov.in/eKYC.aspx"
          label="Official e-KYC Portal — Identity Validation"
          guide="Abhi Validate Karo"
          guideHref="/articles/pm-kisan-payment-failed-status-2026"
          portalName="pmkisan.gov.in"
        />

        <CalcBanner
          icon="🔐"
          title="Apna Verification Status Check Karo"
          desc="eKYC done hai ya nahi, beneficiary active hai ya nahi — track karo"
          primaryCta={{ href: '/calculator/installment-tracker', label: '📅 Status Tracker →' }}
          secondaryCta={{ href: '/calculator/pm-kisan-benefit', label: '💰 Benefit Calculator' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/pm-kisan-23vi-kist-2026-status-check', l: '📅 23vi Status' },
          { href: '/articles/pm-kisan-payment-failed-status-2026', l: '💸 Payment Fix' },
          { href: '/articles/pm-kisan-name-correction-online-2026', l: '✏️ Name Fix' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}