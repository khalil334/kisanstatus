'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-07-10T08:00:00+05:30';
const MODIFIED = '2026-07-10T08:00:00+05:30';

const RELATED = [
  { slug: 'PmKisanCscRegistrationCharges', title: 'CSC Registration Charges', emoji: '🏪' },
  { slug: 'PmKisanEkycOnline2026', title: 'eKYC Guide', emoji: '' },
  { slug: 'PmKisanMasterGuide2026', title: 'Master Guide', emoji: '📚' },
  { slug: 'PmKisanRejectedStatusReApplyGuide', title: 'Rejected Status Fix', emoji: '❌' },
];

const FAQS_DATA = [
  {
    q: 'Purana SIM band ho gaya, ab naya number kaise link karein?',
    a: 'Bhai, agar purana SIM band hai toh aap ghar baithe online change nahi kar sakte. Aapko nazdiki CSC center ya Block Agriculture Office (BAO) jana padega.',
  },
  {
    q: 'Kya main PM Kisan portal par khud mobile number edit kar sakta hoon?',
    a: 'Haan, lekin sirf tab jab aapke paas purana SIM card active ho. OTP purane number par hi aayega. Agar SIM dead hai, toh ye option kaam nahi karega.',
  },
  {
    q: 'CSC wala mobile number change karne ke kitne paise lega?',
    a: 'Sarkari rate ₹20 se ₹30 ke beech hai. Agar wo ₹100 ya ₹200 maange, toh mana kar do aur dusre center par jao. Complaint bhi kar sakte ho.',
  },
  {
    q: 'Mobile number change karne ke baad OTP aane mein kitna time lagta hai?',
    a: 'Server update hone mein 24 se 48 ghante lagte hain. Uske baad naye number par OTP aana shuru ho jayega.',
  },
  {
    q: 'Kya mobile number change karne se meri kist rukegi?',
    a: 'Nahi, kist nahi rukegi. Paisa aapke bank account mein hi aayega. Mobile number sirf OTP aur updates ke liye use hota hai.',
  },
  {
    q: 'Agar CSC wala galat number daal de toh?',
    a: 'Turant usi waqt screen par check karo. Receipt par number verify karo. Agar galti ho gayi, toh dobara CSC jakar correction karwao.',
  },
  {
    q: 'Kya main apne bhai ya bete ka mobile number link kar sakta hoon?',
    a: 'Haan, koi zaroorat nahi ki number aapke naam par hi ho. Bas wo number active hona chahiye aur OTP receive kar sake.',
  },
  {
    q: 'Mobile update ke baad eKYC dobara karni padegi?',
    a: 'Nahi, eKYC ko dobara karne ki zaroorat nahi hoti. Bas naye number par OTP aane lagega.',
  },
];

// Countdown Modal Component
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
  const router = useRouter();

  useEffect(() => {
    if (count === 0) {
      if (redirectUrl.startsWith('http')) {
        window.open(redirectUrl, '_blank', 'noopener,noreferrer');
      } else {
        router.push(redirectUrl);
      }
      onClose();
      return;
    }
    const timer = setTimeout(() => setCount(count - 1), 1000);
    return () => clearTimeout(timer);
  }, [count, redirectUrl, onClose, router]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4" onClick={onClose}>
      <div
        className="w-full max-w-md rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-2xl border-2 border-green-500"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          <div className="text-5xl mb-3"></div>
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
              seconds mein redirect hoga...
            </p>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3 mb-4">
            <p className="text-xs text-blue-800 dark:text-blue-300">
              📌 Kripya dhairya rakhein. Aapko official portal par le jaaya ja raha hai.
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

export default function PmKisanMobileNumberChangeUpdate({ article }: { article: ArticleMeta }) {
  const router = useRouter();
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
            <span className="text-white font-bold">Mobile Number Change</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Complete Update Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Mobile Number Change 2026: Purana SIM Band Ho Gaya Toh Naya Number Kaise Jodein?
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white">KisanStatus Team</Link></span>
            <span> {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 15 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        {/* Hero Image */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-mobile-number-change-update/mobile-change-hero.webp"
            alt="Farmer looking at mobile phone confused about PM Kisan OTP not coming"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px' }}
            priority
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)]">
            PM Kisan Mobile Number Update — Bina Purane SIM Ke Naya Number Kaise Link Karein
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-8">
          <SH>Purana SIM Band, OTP Nahi Aa Raha — Ab Kya Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Bhai, ye kahani har kisan ki zubaan par hai. Pichle saal jo SIM card PM Kisan mein register kiya tha, wo ab band ho chuka hai. Ya phir SIM kho gaya. Ab naya number le liya hai, lekin PM Kisan portal par login karte hi OTP purane number par ja raha hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Bina OTP ke na eKYC ho rahi hai, na status check ho raha hai, aur na hi koi update. Aisa lagta hai jaise sarkari daftar ka chakkar lagana padega. Lekin ruko, chakkar nahi lagane padenge. Is article mein humne pura tarika bataya hai ki <strong>pm kisan mobile number change</strong> kaise karein, wo bhi bina kisi badi pareshani ke.
          </p>
          
          <Image
            src="/images/articles/pm-kisan-mobile-number-change-update/otp-issue-screen.webp"
            alt="PM Kisan portal showing OTP sent to old registered mobile number"
            width={800}
            height={450}
            className="w-full rounded-xl my-4"
          />

          <DB>
            <strong>Real Story:</strong>
            <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">
              Gorakhpur ke Suresh ji ka purana Vodafone ka SIM 2 saal pehle band ho gaya tha. Unhone naya Jio ka number le liya. Jab unki 18vi kist aane wali thi, toh unhe status check karna tha. OTP purane number par ja raha tha. Wo pareshan ho gaye. Phir unhone nazdiki CSC center par jakar 20 rupaye mein naya number link karwaya. 2 din baad naye number par OTP aane laga aur unhone status check kar liya.
            </p>
          </DB>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Chaliye, step-by-step samajhte hain ki ye kaam kaise hota hai. Online tarika, offline tarika, aur CSC wala tarika — teeno cover karenge.
          </p>
        </section>

        {/* SECTION 1: The Core Problem */}
        <section className="mb-8">
          <SH>Online Edit Option Kyun Kaam Nahi Kar Raha?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Bhai, sabse pehle ye samajh lo ki PM Kisan portal par "Edit Mobile Number" ka option toh hai. Lekin wo option ek shart par kaam karta hai — aapke paas wo purana SIM card hona chahiye.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Jab aap portal par <strong>pm kisan registered mobile change</strong> karne jate ho, toh system OTP bhejta hai. Wo OTP kahan jata hai? Aapke <strong>purane registered number</strong> par. Agar wo SIM band hai, toh OTP aayega kahan? Kahin nahi. Isliye online method fail ho jata hai.
          </p>
          <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-500 dark:border-amber-700 rounded-xl p-5 mb-6">
            <p className="text-sm font-black text-amber-800 dark:text-amber-300 mb-2">
              ⚠️ Self Service Portal Trap:
            </p>
            <p className="text-xs text-amber-800 dark:text-amber-300 mb-3">
              Bahut sare YouTube videos mein bataya jata hai ki "Ghar baithe mobile number change karo". Bhai, wo videos tab kaam karti hain jab purana SIM aapke hath mein ho. Agar SIM dead hai, toh wo videos dekh kar time waste mat karo. Seedha CSC ya BAO jao.
            </p>
            <button
              onClick={() => handleOfficialLink(
                'PM Kisan Self Edit Portal',
                'Agar aapke paas purana SIM active hai toh yahan se mobile number update kar sakte hain. 10 second baad official portal khulega...',
                'https://pmkisan.gov.in/EditAadhaarDetails.aspx'
              )}
              className="w-full px-4 py-3 bg-amber-600 hover:bg-amber-700 text-white text-sm font-bold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-105"
            >
              🔗 Yahan Click Karo → Agar Purana SIM Active Hai To Mobile Number Update Hoga
            </button>
          </div>
          <Image
            src="/images/articles/pm-kisan-mobile-number-change-update/self-service-portal-trap.webp"
            alt="PM Kisan self service portal asking for OTP from old mobile number"
            width={800}
            height={600}
            className="w-full rounded-xl my-4"
          />
        </section>

        {/* SECTION 2: CSC Method */}
        <section className="mb-8">
          <SH>Method 1: CSC Center Se Karo (Sabse Fast Aur Aasan)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bhai, 90% logon ka kaam CSC (Common Service Center) se hi ban jata hai. Ye sabse fast tarika hai. Nazdiki <Link href="/articles/PmKisanCscRegistrationCharges" className="underline text-green-700 dark:text-green-400">CSC center</Link> par chale jao.
          </p>
          <StepList>
            <SI n={1}>
              <strong>Documents Le Jao:</strong> Apna Aadhaar card (original), naya mobile phone (jisme naya SIM dala ho), aur purana PM Kisan registration number (agar yaad ho toh).
            </SI>
            <SI n={2}>
              <strong>CSC Operator Ko Batao:</strong> Unhe bolo, "Bhaiya, PM Kisan mein mobile number update karna hai. Purana SIM band ho gaya hai."
            </SI>
            <SI n={3}>
              <strong>Portal Par Login:</strong> CSC wala apne official portal par login karega. Wo "PM Kisan Correction" ya "Mobile Update" service select karega.
            </SI>
            <SI n={4}>
              <strong>Aadhaar Scan:</strong> Wo aapka Aadhaar number dalega aur biometric (ungli ka nishan) ya OTP se verify karega.
            </SI>
            <SI n={5}>
              <strong>Naya Number Daalna:</strong> Portal par naya mobile number enter kiya jayega. Naye number par ek OTP aayega. Wo OTP CSC wala aapse puchega, aap bata dena.
            </SI>
            <SI n={6}>
              <strong>Receipt Lo:</strong> Kaam hone ke baad ek acknowledgement slip print hogi. Us par naya mobile number likha hoga. Usko ghar jakar sambhal kar rakho.
            </SI>
          </StepList>

          <Image
            src="/images/articles/pm-kisan-mobile-number-change-update/csc-mobile-update.webp"
            alt="CSC operator updating mobile number for farmer on PM Kisan portal"
            width={800}
            height={450}
            className="w-full rounded-xl my-4"
          />

          <WB>
            <strong>Paise Ki Baat:</strong>
            <p className="text-xs text-[var(--color-text-muted)] mt-2">
              Sarkar ne CSC services ke rates fix kiye hain. Mobile number update ke liye wo ₹20 se ₹30 se zyada nahi le sakta. Agar koi ₹100 ya ₹200 maang raha hai, toh usse behes mat karo, bas utho aur dusre CSC center par chale jao. Ya phir uska CSC ID note karke online complaint kar do.
            </p>
          </WB>

          <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 rounded-xl">
            <p className="text-sm font-bold text-green-800 dark:text-green-300 mb-2">
              🔍 Nazdiki CSC Center Kaise Dhundhein?
            </p>
            <p className="text-xs text-green-700 dark:text-green-400 mb-3">
              Official CSC portal par jakar apne area ka nearest center dhundh sakte hain.
            </p>
            <button
              onClick={() => handleOfficialLink(
                'CSC Center Locator',
                'Aapke area ka nazdiki CSC center dhundhne ke liye official portal par redirect ho raha hai. 10 second baad khulega...',
                'https://www.csc.gov.in/register'
              )}
              className="w-full px-4 py-3 bg-green-600 hover:bg-green-700 text-white text-sm font-bold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-105"
            >
              🏪 Yahan Click Karo → Nazdiki CSC Center Ka Address Milega
            </button>
          </div>
        </section>

        {/* SECTION 3: BAO Offline Method */}
        <section className="mb-8">
          <SH>Method 2: Block Agriculture Office (BAO) Se Offline Form</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Agar CSC center door hai, ya wahan server down hai, toh ghabrao mat. Sarkari daftar ka rasta bhi khula hai. Apne Block ke Agriculture Office (BAO) chale jao.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Wahan ek <strong>"PM Kisan Correction Form"</strong> milta hai. Is form mein aapko apni puri details bharni hoti hain — naam, Aadhaar, purana number, aur naya number.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 dark:border-blue-700 rounded-xl p-5 mb-6">
            <p className="text-sm font-black text-blue-800 dark:text-blue-300 mb-3">
              BAO Process Ke Steps:
            </p>
            <ol className="list-decimal list-inside text-xs text-blue-800 dark:text-blue-300 space-y-2">
              <li>BAO office se correction form lo.</li>
              <li>Form mein naya mobile number clearly likho.</li>
              <li>Form ke sath Aadhaar ki self-attested copy lagao.</li>
              <li>Agar office wale bole, toh patwari se sign karwa kar lao (kabhi kabhi wo mangte hain).</li>
              <li>Form counter par jama karo aur ek receiving zaroor lo.</li>
            </ol>
          </div>
          <Image
            src="/images/articles/pm-kisan-mobile-number-change-update/bao-office-form.webp"
            alt="Farmer filling PM Kisan correction form at Block Agriculture Office"
            width={800}
            height={600}
            className="w-full rounded-xl my-4"
          />
          <IB>
            <strong>Dhyan Rahe:</strong> BAO office mein kaam thoda slow hota hai. CSC se 15 din lagte hain, toh BAO se 30 se 45 din lag sakte hain. Isliye pehle CSC try karna.
          </IB>

          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 dark:border-blue-700 rounded-xl">
            <p className="text-sm font-bold text-blue-800 dark:text-blue-300 mb-2">
              📞 State Nodal Officer Se Sampark Karein
            </p>
            <p className="text-xs text-blue-700 dark:text-blue-400 mb-3">
              Agar BAO office se bhi kaam na bane, toh apne state ke Nodal Officer se direct contact kar sakte hain.
            </p>
            <button
              onClick={() => handleOfficialLink(
                'State Nodal Officers List',
                'PM Kisan state nodal officers ki official list par redirect ho raha hai. 10 second baad khulega...',
                'https://pmkisan.gov.in/NodalOfficers.aspx'
              )}
              className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-105"
            >
              📋 Yahan Click Karo → Apne State Ke Nodal Officer Ka Number Milega
            </button>
          </div>
        </section>

        {/* SECTION 4: Documents Checklist */}
        <section className="mb-8">
          <SH>Documents Ki List (Jo Hamesha Sath Rakhein)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            CSC ho ya BAO, bina kagazat ke kaam nahi banta. Ye sab apne bag mein daal kar jao:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { doc: 'Aadhaar Card', note: 'Original lao. Photocopy bhi sath rakh lo.' },
              { doc: 'Naya Mobile Phone', note: 'Jisme naya SIM dala ho. OTP aapke phone par hi aayega.' },
              { doc: 'PM Kisan Registration Slip', note: 'Agar purani slip mili ho toh le jao. Us par Registration ID hoti hai.' },
              { doc: 'Bank Passbook', note: 'Kabhi kabhi verification ke liye mang lete hain.' },
              { doc: 'Ek Passport Size Photo', note: 'Form par lagane ke liye kaam aa jati hai.' },
            ].map(({ doc, note }) => (
              <div key={doc} className="p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
                <p className="font-black text-sm text-[var(--color-text)] mb-1">📄 {doc}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: Common Mistakes */}
        <section className="mb-8">
          <SH>Ye Galtiyan Mat Karna (Warna Phir Chakkar Katne Padenge)</SH>
          <div className="space-y-3">
            {[
              { 
                mistake: 'Galat Number Bata Dena', 
                fix: 'CSC wale se form bharwate time screen par number khud dekho. Ek digit galat hua toh OTP dusre kisi ke phone par jayega.' 
              },
              { 
                mistake: 'OTP Kisi Anjaan Ko Bata Dena', 
                fix: 'OTP sirf CSC wale ko batao jo aapke samne kaam kar raha hai. Phone par koi kahe ki "OTP batao, hum update kar denge", toh wo fraud hai.' 
              },
              { 
                mistake: 'Receipt Na Lena', 
                fix: 'Bina receipt ke kaam hua hi nahi maana jata. Receipt par transaction ID hoti hai, jisse aap baad mein track kar sakte ho.' 
              },
              { 
                mistake: 'Turant Status Check Karne Chale Jana', 
                fix: 'Mobile update turant nahi hota. Server ko sync hone mein 24-48 ghante lagte hain. Agle din subah check karna.' 
              },
            ].map(({ mistake, fix }, i) => (
              <div key={i} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
                <p className="font-black text-sm text-red-600 dark:text-red-400 mb-2">❌ {mistake}</p>
                <p className="text-xs text-green-700 dark:text-green-400"><strong>✅ Sahi Tarika:</strong> {fix}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: Timeline & Verification */}
        <section className="mb-8">
          <SH>Update Hui Ya Nahi? Kaise Check Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Bhai, CSC se kaam karwane ke baad andhere mein teer mat chalao. Check karo ki number update hua ya nahi.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Stage</th>
                  <th className="p-3 text-left">Time</th>
                  <th className="p-3 text-left">Kya Karna Hai</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['CSC Submission', 'Day 1', 'Receipt lo aur photo lo'],
                  ['Server Sync', 'Day 2-3', 'PM Kisan database update hota hai'],
                  ['SMS Confirmation', 'Day 3-4', 'Naye number par SMS aayega'],
                  ['OTP Test', 'Day 4-5', 'Portal par login karke OTP check karo'],
                ].map(([stage, time, desc], i) => (
                  <tr key={stage} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{stage}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{time}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Jab naye number par OTP aane lage, toh samajh jao kaam ho gaya. Ab aap <Link href="/articles/PmKisanEkycOnline2026" className="underline text-green-700 dark:text-green-400">eKYC</Link> bhi kar sakte ho aur status bhi check kar sakte ho.
          </p>

          <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 rounded-xl">
            <p className="text-sm font-bold text-green-800 dark:text-green-300 mb-2">
               Beneficiary Status Check Karein
            </p>
            <p className="text-xs text-green-700 dark:text-green-400 mb-3">
              Official portal par apna status check karne ke liye niche button par click karein.
            </p>
            <button
              onClick={() => handleOfficialLink(
                'PM Kisan Beneficiary Status',
                'PM Kisan beneficiary status check portal par redirect ho raha hai. 10 second baad khulega...',
                'https://pmkisan.gov.in/BeneficiaryStatus.aspx'
              )}
              className="w-full px-4 py-3 bg-green-600 hover:bg-green-700 text-white text-sm font-bold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-105"
            >
              ✅ Yahan Click Karo → Apna Naam List Mein Check Kar Sakte Hain
            </button>
          </div>
        </section>

        {/* SECTION 7: Does it affect Kist? */}
        <section className="mb-8">
          <SH>Kya Mobile Number Change Karne Se Kist Rukegi?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ye sawal bahut logon ke mann mein aata hai. Bhai, ek baat clear kar lo — PM Kisan ka paisa mobile number par nahi aata. Paisa seedha aapke <strong>bank account</strong> mein aata hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Mobile number sirf 2 kaam ke liye use hota hai:
          </p>
          <ul className="list-disc list-inside text-sm text-[var(--color-text-muted)] space-y-2 mb-4">
            <li>OTP receive karne ke liye (eKYC ya login ke time).</li>
            <li>Sarkar ki taraf se SMS updates aane ke liye (jaise "Aapki kist bhej di gayi hai").</li>
          </ul>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Isliye, mobile number change karne se aapki kist par koi asar nahi padta. Paisa aata rahega, bas aapko OTP naye number par milega.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kisan Mobile Number Change FAQ 2026" />
        </section>

        <GovLink
          href="https://pmkisan.gov.in"
          label="PM Kisan Official Portal"
          guide="Status Check Karein"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmkisan.gov.in"
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisanCscRegistrationCharges', l: '🏪 CSC Charges' },
          { href: '/articles/PmKisanEkycOnline2026', l: '🔐 eKYC Guide' },
          { href: '/articles/PmKisanMasterGuide2026', l: '📚 Master Guide' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}