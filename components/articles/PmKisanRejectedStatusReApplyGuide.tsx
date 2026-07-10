'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-07-10T08:00:00+05:30';
const MODIFIED = '2026-07-11T08:00:00+05:30';

const RELATED = [
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary List Check', emoji: '📋' },
  { slug: 'PmKisanMasterGuide2026', title: 'Master Guide', emoji: '📚' },
  { slug: 'PmKisanEkycOnline2026', title: 'eKYC Guide', emoji: '🔐' },
  { slug: 'PmKisanCorrectionForm2026', title: 'Correction Form', emoji: '' },
];

const FAQS_DATA = [
  {
    q: 'Rejected status ka matlab kya hota hai?',
    a: 'Iska matlab hai ki aapki application sarkar ne check ki hai aur kisi na kisi wajah se aap is scheme ke liye eligible nahi paaye gaye. Naam list se hat gaya hai.',
  },
  {
    q: 'Kya rejected hone ke baad dobara apply kar sakte hain?',
    a: 'Haan, bilkul. Agar aapne galti sudhaar li hai (jaise bank account fix kiya ya land record update karwaya), toh aap dobara apply kar sakte hain.',
  },
  {
    q: 'Ruke hue paise (arrears) milenge ya nahi?',
    a: 'Agar rejection ki galti aapki thi aur aapne use theek karke dobara apply kiya, toh pichle ruke hue paise nahi milte. Lekin agar galti sarkar ki taraf se thi, toh grievance cell se claim kar sakte ho.',
  },
  {
    q: 'Dobara apply karne mein kitna time lagta hai?',
    a: 'Form submit karne ke baad verification mein 15 se 30 din lagte hain. Uske baad status "Active" ho jata hai.',
  },
  {
    q: 'Agar dobara apply karne par bhi reject ho jaye toh?',
    a: 'Toh aapko apne district ke Agriculture Officer ya State Nodal Officer ko physical complaint deni padegi.',
  },
  {
    q: 'Income tax filer hoon, kya main dobara apply karun?',
    a: 'Nahi. Agar aap income tax return file karte hain, toh aap is scheme ke eligible hi nahi hain. Dobara apply karne ka koi fayda nahi.',
  },
  {
    q: 'CSC wala dobara apply karne ke kitne paise lega?',
    a: 'Sarkari rate ₹25-₹30 hai. Usse zyada mat dena. Aur haan, correction form ke liye alag se charge nahi banta.',
  },
  {
    q: 'Kya main ghar baithe online dobara apply kar sakta hoon?',
    a: 'Nahi bhai. Jab ek baar status reject ho jata hai, toh portal par "Edit" ka option band ho jata hai. Aapko CSC ya BAO office hi jana padega.',
  },
];

function CountdownModal({ 
  title, 
  message, 
  redirectUrl, 
  onClose 
}: { 
  title: string; 
  message: string; 
  redirectUrl: string; 
  onClose: () => void;
}) {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count === 0) {
      window.open(redirectUrl, '_blank', 'noopener,noreferrer');
      onClose();
      return;
    }
    const timer = setTimeout(() => setCount(count - 1), 1000);
    return () => clearTimeout(timer);
  }, [count, redirectUrl, onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4" onClick={onClose}>
      <div
        className="w-full max-w-sm rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-2xl border-2 border-green-500"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          <div className="text-5xl mb-3">⏳</div>
          <h3 className="text-lg font-black text-gray-800 dark:text-white mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            {message}
          </p>
          
          <div className="mb-4">
            <div className="text-6xl font-black text-green-600 dark:text-green-400">
              {count}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              seconds mein official portal khulega...
            </p>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3 mb-4">
            <p className="text-xs text-blue-800 dark:text-blue-300">
              📌 Thoda wait karo. Official PM Kisan portal khulne wala hai.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white text-sm font-bold rounded-lg transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PmKisanRejectedStatusReApplyGuide({ article }: { article: ArticleMeta }) {
  const [modal, setModal] = useState<{ 
    title: string; 
    message: string; 
    url: string; 
  } | null>(null);

  const handleOfficialLink = (title: string, message: string, url: string) => {
    setModal({ title, message, url });
  };

  return (
    <>
      {modal && (
        <CountdownModal
          title={modal.title}
          message={modal.message}
          redirectUrl={modal.url}
          onClose={() => setModal(null)}
        />
      )}

      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Rejected Status Fix</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">PM Kisan Rejected Status Fix 2026</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Rejected Status: Naam List Se Kyun Kata, Dobara Apply Kaise Karein?
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 17 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-rejected-status-re-apply-guide/rejected-status-hero.webp"
            alt="Farmer looking worried at PM Kisan rejected status on mobile screen"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px' }}
            priority
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)]">
            Rejected Status — Galti Dhundo, Dobara Apply Karo
          </p>
        </div>

        <section className="mb-8">
          <SH>Naam Kat Gaya? Ghabrao Mat, Ye Hota Hai</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Bhai, subah utha, mobile nikala, PM Kisan ka status check kiya. Likha aa raha hai — <strong>"Rejected"</strong>. Dil dhak se ho gaya. 3-4 mahine ki kist ka paisa atak gaya. Dimag mein sawal aane lagte hain: "Meri galti kahan thi? Ab kya hoga? Paisa doob gaya kya?"
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Sabse pehle toh saans lo. <strong>PM Kisan rejected status</strong> hona koi badi baat nahi hai. Har mahine lakhon kisanon ka status reject hota hai aur agle mahine fix ho kar wapas active ho jata hai. Bas aapko ye pata hona chahiye ki galti kahan thi aur use kaise theek karna hai.
          </p>
          
          <Image
            src="/images/articles/pm-kisan-rejected-status-re-apply-guide/reason-check.webp"
            alt="Checking reason for PM Kisan rejection on portal"
            width={800}
            height={450}
            className="w-full rounded-xl my-4"
          />

          <DB>
            <strong>Real Story:</strong>
            <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">
              Jaipur ke Bhanwar Lal ji ka status achanak reject ho gaya. Wo pareshan ho gaye. Patwari ke paas gaye, BAO ke paas gaye. Pata chala ki unki zameen ka record digital nahi tha aur bank account mein IFSC code purana tha. Dono cheezein theek karke CSC se dobara form bhara. 25 din baad status active ho gaya aur pichli ruki hui kist bhi mil gayi.
            </p>
          </DB>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Is article mein hum ek ek karke sabhi rejection reasons ko kholenge aur batayenge ki <strong>pm kisan dobara apply kaise karein</strong> ka sahi tarika kya hai. <Link href="/articles/PmKisanBeneficiaryList2026" className="underline text-green-700 dark:text-green-400">Beneficiary list</Link> check karne se pehle ye guide zaroor padh lena.
          </p>
        </section>

        <section className="mb-8">
          <SH>PM Kisan Rejected Status Ka Asli Matlab Kya Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Dekho bhai, jab aap pehli baar PM Kisan ke liye apply karte ho, toh aapka form state ke agriculture department ke paas jata hai. Wahan ke officers (ya automated system) aapki details ko verify karte hain.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Agar unhe lagta hai ki aap eligible nahi ho, ya aapki details mein kuch gadbad hai, toh wo status ko "Rejected" kar dete hain. Iska seedha matlab hai — <strong>Abhi ke liye aap is list se bahar ho.</strong>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <span className="text-2xl block mb-2">❌</span>
              <p className="font-black text-sm text-red-800 dark:text-red-300">Permanent Rejection</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">Aap eligible hi nahi ho (Jaise Income Tax Filer).</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <span className="text-2xl block mb-2">️</span>
              <p className="font-black text-sm text-amber-800 dark:text-amber-300">Temporary Rejection</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">Details galat hain. Theek karo, dobara apply karo.</p>
            </div>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Zyada tar cases "Temporary Rejection" ke hote hain. Yani galti sudhaarne se kaam ban jata hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>7 Main Reasons: PM Kisan Naam Kyun Kata?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bhai, bina wajah koi reject nahi karta. Portal par aksar reason likha aata hai, lekin wo technical bhasha mein hota hai. Yahan main aam bhasha mein bata raha hoon ki asli masla kya hota hai:
          </p>
          <div className="space-y-3">
            {[
              { 
                reason: 'Land Record Mismatch (Sabse Common)', 
                desc: 'Aapke Aadhaar card par jo naam hai, aur Khatauni (land record) par jo naam hai, dono mein farq hai. "Ram Kumar" aur "Ram Kumar Singh" ko system alag maanta hai.' 
              },
              { 
                reason: 'Bank Account ya IFSC Galat', 
                desc: 'Account number galat daal diya, ya branch merge hone ki wajah se IFSC code badal gaya aur aapne purana code use kiya.' 
              },
              { 
                reason: 'Aadhaar Seeding Missing', 
                desc: 'Aapka bank account Aadhaar se link nahi hai. DBT (Direct Benefit Transfer) ke liye ye link hona 100% zaroori hai.' 
              },
              { 
                reason: 'Duplicate Entry', 
                desc: 'Aapne galti se do baar form bhar diya, ya aapke parivar ke do logon ne ek hi zameen par apply kar diya.' 
              },
              { 
                reason: 'Ineligible Category', 
                desc: 'Aap income tax filer nikle, ya aapke parivar mein koi government servant nikal gaya. Ya zameen 2 hectare se zyada nikal aayi.' 
              },
              { 
                reason: 'eKYC Pending/Failed', 
                desc: 'Aapne eKYC hi nahi kiya, ya OTP time par verify nahi kiya. Bina eKYC ke paisa ruk jata hai aur status reject ho sakta hai.' 
              },
              { 
                reason: 'State Verification Delay', 
                desc: 'Kabhi kabhi galti kisi ki nahi hoti. Bas state ke server par load zyada hota hai aur verification time par nahi ho paati.' 
              },
            ].map(({ reason, desc }, i) => (
              <div key={i} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4 hover:border-red-300 dark:hover:border-red-700 transition-all">
                <p className="font-black text-sm text-red-600 dark:text-red-400 mb-2">❌ Reason {i + 1}: {reason}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <SH>PM Kisan Dobara Apply Kaise Karein? (Step-by-Step)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ab aate hain main mudde par. Galti pakad li, ab use theek karke <strong>pm kisan re-apply</strong> kaise karein? Dhyan se follow karna:
          </p>
          <StepList>
            <SI n={1}>
              <strong>Galti Pehchano:</strong> Upar diye gaye 7 reasons mein se apni problem dhundo. Agar samajh na aaye toh <Link href="/articles/PmKisanMasterGuide2026" className="underline text-green-700 dark:text-green-400">Master Guide</Link> padho ya nazdiki CSC wale se pucho.
            </SI>
            <SI n={2}>
              <strong>Documents Theek Karo:</strong> Agar naam galat hai toh patwari se Khatauni theek karwao. Agar bank account mein dikkat hai toh bank branch jakar NPCI seeding aur IFSC update karwao.
            </SI>
            <SI n={3}>
              <strong>CSC Center Par Jao:</strong> Apne nazdiki <Link href="/articles/PmKisanCscRegistrationCharges" className="underline text-green-700 dark:text-green-400">CSC center</Link> par jao. Unhe bolo "PM Kisan Correction aur Re-Application" karna hai.
            </SI>
            <SI n={4}>
              <strong>Correction Form Bharo:</strong> CSC wala portal par <strong>PM Kisan correction form</strong> open karega. Usme aapki purani details hongi. Galat details ko mita kar sahi details daalo.
            </SI>
            <SI n={5}>
              <strong>OTP Verification:</strong> Mobile par OTP aayega. Verify karo. Form submit ho jayega.
            </SI>
            <SI n={6}>
              <strong>Receipt Lo:</strong> Ek nayi acknowledgement slip milegi. Us par "Correction Request Submitted" likha hoga. Usko sambhal kar rakho.
            </SI>
          </StepList>

          <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 rounded-xl">
            <p className="text-sm font-bold text-green-800 dark:text-green-300 mb-2">
              🔍 PM Kisan Status Check Karo
            </p>
            <p className="text-xs text-green-700 dark:text-green-400 mb-3">
              Official PM Kisan portal par jakar apna <strong>pm kisan status check</strong> karo. 10 second baad portal khulega.
            </p>
            <button
              onClick={() => handleOfficialLink(
                'PM Kisan Official Portal',
                'PM Kisan portal khulne wala hai. Thoda wait karo...',
                'https://pmkisan.gov.in/BeneficiaryStatus.aspx'
              )}
              className="w-full px-4 py-3 bg-green-600 hover:bg-green-700 text-white text-sm font-bold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-105"
            >
              📥 Yahan Click Karo → PM Kisan Portal Khulega
            </button>
          </div>

          <Image
            src="/images/articles/pm-kisan-rejected-status-re-apply-guide/csc-correction-form.webp"
            alt="Filling PM Kisan correction form at CSC center"
            width={800}
            height={600}
            className="w-full rounded-xl my-6"
          />

          <WB>
            <strong>Zaroori Baat:</strong>
            <p className="text-xs text-[var(--color-text-muted)] mt-2">
              Portal par "Edit" ka option band kyun hota hai? Kyunki ek baar data state ko chala jata hai, usko lock kar diya jata hai. Isliye aap khud ghar baithe edit nahi kar sakte. CSC ya BAO office hi ekmatra rasta hai.
            </p>
          </WB>
        </section>

        <section className="mb-8">
          <SH>Dobara Apply Karne Ke Liye Documents</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            CSC jane se pehle ye sab apne bag mein daal lo, warna chakkar katne padenge:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { doc: 'Aadhaar Card', note: 'Original lao. Copy se kaam nahi chalega.' },
              { doc: 'Updated Khatauni', note: 'Agar naam ya zameen ka record theek karwaya hai toh uski copy.' },
              { doc: 'Bank Passbook', note: 'Naya passbook jisme sahi IFSC aur account number ho.' },
              { doc: 'Mobile Phone', note: 'Aadhaar se link wala SIM. OTP ke liye.' },
              { doc: 'Purani Receipt', note: 'Jab pehli baar apply kiya tha uski slip (agar hai toh).' },
              { doc: 'Rejection Screenshot', note: 'Mobile mein jo reject dikha raha hai uska screenshot.' },
            ].map(({ doc, note }) => (
              <div key={doc} className="p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
                <p className="font-black text-sm text-[var(--color-text)] mb-1">📄 {doc}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <SH>PM Kisan Arrears Payment: Ruke Hue Paise Ka Kya Hoga?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Bhai, ye sawal sabse zyada pucha jata hai. "Mere 2-3 mahine ke paise atke hain, wo milenge ya nahi?"
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 dark:border-blue-700 rounded-xl p-5 mb-6">
            <p className="text-sm font-black text-blue-800 dark:text-blue-300 mb-3">
              Sarkar Ka Niyam Kya Kehta Hai:
            </p>
            <ul className="list-disc list-inside text-xs text-blue-800 dark:text-blue-300 space-y-2">
              <li>Agar rejection <strong>aapki galti</strong> se hui thi (jaise galat bank account, naam mismatch), toh pichle ruke hue paise <strong>NAHI milte</strong>. Jab se status active hoga, uske baad ka paisa aayega.</li>
              <li>Lekin, agar rejection <strong>sarkar ki galti</strong> se hui thi (jaise server error, ya officer ne galat reject kar diya), toh aap <strong>PM Kisan grievance cell</strong> mein complaint karke pichle saare paise claim kar sakte ho.</li>
            </ul>
          </div>
          <Image
            src="/images/articles/pm-kisan-rejected-status-re-apply-guide/arrears-payment.webp"
            alt="Farmer receiving pending arrears payment in bank account"
            width={800}
            height={450}
            className="w-full rounded-xl my-4"
          />
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Isliye jab bhi status reject dikhe, turant action lo. Jitna time waste karoge, utne hi mahine ke paise doob sakte hain.
          </p>
        </section>

        <section className="mb-8">
          <SH>State Wise Common Rejection Problems</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Har state ka land record system alag hai. Isliye rejection ke reasons bhi thode alag hote hain:
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <p className="font-black text-sm text-green-800 dark:text-green-300 mb-2">🏔️ Uttar Pradesh & Bihar</p>
              <p className="text-xs text-[var(--color-text-muted)]">Yahan sabse badi problem "Bhulekh/Khatauni" mein naam ka spelling galat hona hai. Patwari se spelling theek karwao, phir CSC jao.</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <p className="font-black text-sm text-blue-800 dark:text-blue-300 mb-2">🌿 Madhya Pradesh & Rajasthan</p>
              <p className="text-xs text-[var(--color-text-muted)]">Yahan "Bhu-Abhilekh" aur "Apna Khata" portal par zameen ka record digital nahi hota. Pehle patwari se record digitize karwao.</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <p className="font-black text-sm text-amber-800 dark:text-amber-300 mb-2">🌾 Maharashtra & Gujarat</p>
              <p className="text-xs text-[var(--color-text-muted)]">Yahan "7/12 Utara" aur "AnyROR" mein joint ownership ka masla aata hai. Agar zameen bhaiyon ke naam par hai, toh sirf ek bhai ka naam form mein hona chahiye.</p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl">
              <p className="font-black text-sm text-purple-800 dark:text-purple-300 mb-2">🌊 South States (TN, Kerala, AP)</p>
              <p className="text-xs text-[var(--color-text-muted)]">Yahan "Patta" aur "Chitta" records mein family head ka naam update nahi hota. Revenue office jakar patta transfer karwana padta hai.</p>
            </div>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Apne state ki specific jankari ke liye <Link href="/beneficiary-list" className="underline text-green-700 dark:text-green-400">state-wise page</Link> par jao.
          </p>
        </section>

        <section className="mb-8">
          <SH>Dobara Apply Karte Time Ye Galtiyan Mat Karna</SH>
          <div className="space-y-3">
            {[
              { 
                mistake: 'Purani Galti Dobara Karna', 
                fix: 'Agar bank account galat tha, toh naya daalne se pehle bank jakar confirm karo ki wo active hai aur NPCI seeded hai.' 
              },
              { 
                mistake: 'Jhoothi Information Dena', 
                fix: 'Agar aap income tax filer ho, toh chhupane ki koshish mat karo. Pakde jaoge aur penalty lag sakti hai.' 
              },
              { 
                mistake: 'Bina Receipt Ke Wapas Aana', 
                fix: 'CSC wale se acknowledgement slip zaroor lo. Usi par aapka case track hoga.' 
              },
              { 
                mistake: 'Roz Roz Status Check Karna', 
                fix: 'Form submit karne ke baad kam se kam 15 din wait karo. Roz check karne se kuch nahi hoga, bas tension badhegi.' 
              },
            ].map(({ mistake, fix }, i) => (
              <div key={i} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
                <p className="font-black text-sm text-red-600 dark:text-red-400 mb-2">❌ {mistake}</p>
                <p className="text-xs text-green-700 dark:text-green-400"><strong>✅ Sahi Tarika:</strong> {fix}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <SH>PM Kisan Status Active Kaise Karein? Tracking Guide</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Correction form submit karne ke baad aapka status "Pending" ya "Under Verification" dikhne lagega. Use track karne ke liye:
          </p>
          <StepList>
            <SI n={1}>pmkisan.gov.in par jao.</SI>
            <SI n={2}>"Farmers Corner" mein "Beneficiary Status" par click karo.</SI>
            <SI n={3}>Apna Aadhaar number daalo.</SI>
            <SI n={4}>Agar sab sahi hai, toh status "Active" dikhne lagega.</SI>
          </StepList>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Agar 30 din baad bhi status active na ho, toh samajh jao file kahin atki hai. Ab time aa gaya hai ki aap <Link href="/articles/PmKisanStateNodalOfficerList" className="underline text-green-700 dark:text-green-400">State Nodal Officer</Link> ko email karo ya physical complaint do.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kisan Rejected Status Re-Apply FAQ 2026" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Seedhi Baat</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Bhai, PM Kisan rejected status fix karna mushkil nahi hai. Bas teen cheezein yaad rakho:
          </p>
          <ol className="space-y-2 text-sm text-green-800 dark:text-green-300 list-decimal list-inside">
            <li>Pehle reason dhundo — kyun reject hua</li>
            <li>Us galti ko theek karo — bank, land, ya eKYC</li>
            <li>CSC se correction form bharke dobara apply karo</li>
          </ol>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mt-3">
            15-30 din mein status active ho jayega. Simple hai!
          </p>
        </div>

        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 dark:border-blue-700 border-l-[6px] rounded-xl">
          <h3 className="text-base font-black text-blue-800 dark:text-blue-300 mb-2">
            🔗 PM Kisan Official Portal
          </h3>
          <p className="text-xs text-blue-700 dark:text-blue-400 mb-3">
            <strong>PM Kisan status check</strong>, <strong>PM Kisan grievance</strong>, ya koi bhi kaam ke liye official portal par jaayein. 10 second baad portal khulega.
          </p>
          <button
            onClick={() => handleOfficialLink(
              'PM Kisan Official Portal',
              'PM Kisan portal khulne wala hai. Thoda wait karo...',
              'https://pmkisan.gov.in'
            )}
            className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-105"
          >
            📥 Yahan Click Karo → PM Kisan Portal Khulega
          </button>
        </div>

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisanBeneficiaryList2026', l: '📋 Beneficiary List' },
          { href: '/articles/PmKisanMasterGuide2026', l: '📚 Master Guide' },
          { href: '/articles/PmKisanCorrectionForm2026', l: '📝 Correction Form' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}