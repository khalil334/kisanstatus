'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';
import CountdownModal from '@/components/CountdownModal';
import { AUTHOR_NAME } from '@/lib/site-config';

const PUBLISHED = '2026-02-22T13:03:46+05:30';
const MODIFIED = '2026-03-03T10:37:18+05:30';

const RELATED_CARDS = [
  {
    slug: 'PmKisanEkycOnline2026',
    title: 'PM Kisan eKYC Complete Guide',
    desc: 'Naya number link karne ke baad eKYC kaise karein, step-by-step jaane.',
  },
  {
    slug: 'PmKisanCscRegistrationCharges',
    title: 'CSC Registration & Charges',
    desc: 'CSC par kis service ka kitna sarkari rate hai, puri list dekhein.',
    emoji: '🏪'
  },
  {
    slug: 'PmKisanRejectedStatusReApplyGuide',
    title: 'Rejected Status Fix Guide',
    desc: 'Agar number change ke baad bhi status rejected dikhaye toh kya karein.',
  },
];

const FAQS_DATA = [
  {
    q: 'Purana SIM band ho gaya, ab pm kisan mobile number change kaise karein?',
    a: 'Bhai, agar purana SIM band hai toh aap ghar baithe online change nahi kar sakte. Aapko nazdiki CSC (Common Service Centre) ya Block Agriculture Office (BAO) jana padega, jahan wo biometric ya offline form ke through naya number update karenge.',
  },
  {
    q: 'Kya main PM Kisan portal par khud mobile number edit kar sakta hoon?',
    a: 'Haan, lekin sirf tab jab aapke paas purana SIM card active ho aur usme balance ho. System OTP purane number par hi bhejta hai. Agar SIM dead hai, toh ye "self-edit" option bilkul kaam nahi karega.',
  },
  {
    q: 'CSC wala pm kisan mobile update ke kitne paise lega?',
    a: 'Fixed rakam batana galat hoga kyunki charge service aur state ke hisaab se alag hota hai — sahi jawab center par laga rate card hai, jo display karna CSC rules me zaroori hai. Kaam se pehle rate card dekho, kaam ke baad receipt lo (amount us par likha hota hai). Operator rate card se zyada maange to CSC ID note karke digitalseva portal par grievance daal do.',
  },
  {
    q: 'Mobile number change karne ke baad OTP aane mein kitna time lagta hai?',
    a: 'Iska koi official fixed time publish nahi hai. Database sync mein kuch din lag sakte hain — turant check karne par purana number hi dikh sakta hai. Din-do-din ruk kar test karo; agar hafta nikal jaye aur naya number reflect na ho, to usi CSC par receipt leke wapas jao ya PM Kisan helpline par transaction ID ke saath baat karo.',
  },
  {
    q: 'Kya pm kisan registered mobile change karne se meri kist rukegi?',
    a: 'Bilkul nahi. Kist aapke linked bank account mein hi aayegi. Mobile number ka use sirf OTP receive karne aur SMS updates ke liye hota hai, paisa transfer karne ke liye nahi.',
  },
  {
    q: 'Bank account ka mobile number aur PM Kisan ka mobile number ek hi hona zaroori hai?',
    a: 'Nahi, dono alag-alag ho sakte hain. Lekin best practice yahi hai ki dono mein ek hi active number rakhein, taaki DBT (Direct Benefit Transfer) ya eKYC ke time koi confusion na ho.',
  },
  {
    q: 'Agar CSC wala galat number daal de toh kya hoga?',
    a: 'Submit hone se pehle screen par number khud padho — ye sabse sasta bachav hai. Receipt par bhi number check karo. Galti pakad mein aa jaye to usi visit mein correction karwao; baad mein pakdi to wahi correction process dobara karna padega aur tab tak OTP galat number par jaata rahega.',
  },
  {
    q: 'Kya main apne bhai, bete ya patni ka mobile number link kar sakta hoon?',
    a: 'Haan, koi zaroorat nahi ki number aapke hi naam par ho. Bas wo number active hona chahiye, aapke paas hona chahiye, aur OTP receive kar sake. Beneficiary ka naam aur Aadhaar match hona chahiye, number ka nahi.',
  },
];

export default function PmKisanMobileNumberChangeUpdate({ article }: { article: ArticleMeta }) {
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
          countdownNote="seconds mein redirect hoga..."
          infoNote="Kripya dhairya rakhein. Aapko official sarkari portal par le jaaya ja raha hai."
          cancelLabel="Cancel / Raho Yahi"
        />
      )}

      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Mobile Number Change</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Complete Update Guide</span>

          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Mobile Number Change 2026: Naya Number Kaise Jodein
          </h1>

          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span><Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(PUBLISHED)}</span>
            <span>Updated: {fmtDate(MODIFIED)}</span>
            <span>15 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-xl">
          <p className="text-sm md:text-base text-blue-900 dark:text-blue-100 leading-relaxed font-medium">
            <strong>Do Took Jawab:</strong> Agar aapka purana SIM band ho gaya hai, toh <strong>PM Kisan mobile number change</strong> online nahi ho sakta — OTP purane number par hi jaata hai. Aapko nazdiki CSC (Common Service Centre) jaakar Aadhaar biometric verification ke through naya number link karwana hoga. Database update hone mein kuch din lag sakte hain, isliye receipt sambhal kar rakhein.
          </p>
        </div>

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

        <section className="mb-8">
          <SH>Purana SIM Band, OTP Nahi Aa Raha — Ab Kya Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Bhai, ye kahani aaj kal har dusre kisan ki zubaan par hai. Pichle saal jo SIM card PM Kisan mein register kiya tha, wo ab band ho chuka hai, balance khatam ho gaya hai, ya phir SIM kho gaya. Ab naya number le liya hai, lekin PM Kisan portal par login karte hi OTP purane number par ja raha hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Bina OTP ke na <Link href="/articles/PmKisanEkycOnline2026" className="underline text-green-700 dark:text-green-400">eKYC</Link> ho rahi hai, na status check ho raha hai, aur na hi koi update. Aisa lagta hai jaise sarkari daftar ke chakkar lagane padenge. Lekin ruko, bade chakkar nahi lagane padenge.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Neeche pura tarika likha hai ki <strong>pm kisan registered mobile number update</strong> kaise hota hai — online trap se kaise bachein, CSC par charge kaise confirm karein, aur update ke baad khud kaise check karein ki naya number sach mein system me chadh gaya.
          </p>

          <Image
            src="/images/articles/pm-kisan-mobile-number-change-update/otp-issue-screen.webp"
            alt="PM Kisan portal showing OTP sent to old registered mobile number"
            width={800}
            height={450}
            className="w-full rounded-xl my-4"
          />

          <DB>
            <strong>Ye Problem Itni Common Kyun Hai?</strong>
            <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">
              Process-level wajah simple hai: PM Kisan registration ke waqt jo number diya gaya tha, system hamesha usi par OTP bhejta hai — chahe wo SIM saalon pehle band ho chuka ho. Telecom rules ke tahat band SIM ka number kuch time baad kisi aur ko recycle bhi ho jata hai, matlab aapka OTP kisi anjaan ke phone par ja sakta hai. Isliye number update sirf convenience ka nahi, security ka bhi mamla hai — aur iska ek hi verified rasta hai: Aadhaar biometric ke through CSC/BAO par re-verification.
            </p>
          </DB>
        </section>

        <section className="mb-8">
          <SH>Online Edit Option Kyun Kaam Nahi Kar Raha? (The Trap)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Bhai, sabse pehle ye baat dimaag mein baitha lo ki PM Kisan portal par "Edit Mobile Number" ka option toh hai. Lekin wo option ek hi shart par kaam karta hai — aapke paas wo <strong>purana SIM card physically aapke haath mein hona chahiye</strong> aur usme network aana chahiye.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Jab aap portal par <strong>pm kisan mobile number change without old sim</strong> karne ki koshish karte ho, toh system OTP bhejta hai. Wo OTP kahan jata hai? Aapke purane registered number par. Agar wo SIM dead hai, toh OTP aayega kahan? Kahin nahi. Isliye online method fail ho jata hai aur aap time waste kar lete ho.
          </p>
          <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-500 dark:border-amber-700 rounded-xl p-5 mb-6">
            <p className="text-sm font-black text-amber-800 dark:text-amber-300 mb-2">
               Self Service Portal Trap:
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
               Yahan Click Karo → Agar Purana SIM Active Hai To Mobile Update Hoga
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

        <section className="mb-8">
          <SH>Method 1: CSC Center Se Karo (Sabse Fast Aur Aasan)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bhai, 90% logon ka kaam CSC (Common Service Center) se hi ban jata hai. Ye sabse fast aur reliable tarika hai. Nazdiki <Link href="/articles/PmKisanCscRegistrationCharges" className="underline text-green-700 dark:text-green-400">Common Service Center (CSC)</Link> par chale jao.
          </p>
          <StepList>
            <SI n={1}>
              <strong>Documents Le Jao:</strong> Apna Aadhaar card (original), naya mobile phone (jisme naya SIM dala ho aur network aa raha ho), aur purana PM Kisan registration number (agar yaad ho ya purani slip ho).
            </SI>
            <SI n={2}>
              <strong>CSC Operator Ko Batao:</strong> Unhe saaf bolo, "Bhaiya, PM Kisan mein mobile number update karna hai. Purana SIM band ho gaya hai, naya number link karna hai."
            </SI>
            <SI n={3}>
              <strong>Portal Par Login:</strong> CSC wala apne official VLE portal par login karega aur "PM Kisan Correction" ya "Mobile Update" service select karega.
            </SI>
            <SI n={4}>
              <strong>Aadhaar Biometric:</strong> Wo aapka Aadhaar number dalega aur fingerprint (ungli ka nishan) scanner par verify karega.
            </SI>
            <SI n={5}>
              <strong>Naya Number Daalna:</strong> Portal par naya mobile number enter kiya jayega. Naye number par ek OTP aayega. Wo OTP CSC wala aapse puchega, aap apne phone mein dekh kar bata dena.
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
              Kitne paise lagenge? Har CSC center ko apna rate card display karna hota hai — kaam se pehle usi se charge confirm karo aur kaam ke baad <strong>receipt zaroor lo</strong> (us par amount aur transaction ID dono hote hain). Operator rate card se alag ya bahut zyada maang raha hai to behes karne ki zaroorat nahi — uski CSC ID note karo, digitalseva portal par complaint daalo, aur kaam kisi doosre center se karwa lo.
            </p>
          </WB>

          <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 rounded-xl">
            <p className="text-sm font-bold text-green-800 dark:text-green-300 mb-2">
               Nazdiki CSC Center Kaise Dhundhein?
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

        <section className="mb-8">
          <SH>Method 2: Block Agriculture Office (BAO) Se Offline Form</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Agar CSC center door hai, gaon mein nahi hai, ya wahan server down hai, toh ghabrao mat. Sarkari daftar ka rasta bhi hamesha khula hai. Apne Block ke Agriculture Office (BAO) chale jao.
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
              <li>Form ke sath Aadhaar ki self-attested (khud se sign ki hui) copy lagao.</li>
              <li>Agar office wale bole, toh patwari ya Lekhpal se sign karwa kar lao (kabhi kabhi wo mangte hain).</li>
              <li>Form counter par jama karo aur ek receiving (acknowledgement) zaroor lo.</li>
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
            <strong>Dhyan Rahe:</strong> BAO ka offline form manually process hota hai, isliye ye rasta CSC se dheema padta hai — kitna time lagega ye block office ke workload par depend karta hai, iska koi fixed SLA publish nahi hai. Receiving slip isiliye zaroori hai: baad mein follow-up usi ke number se hota hai. Agar CSC available hai to pehle wahi try karna behtar hai.
          </IB>

          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 dark:border-blue-700 rounded-xl">
            <p className="text-sm font-bold text-blue-800 dark:text-blue-300 mb-2">
               State Nodal Officer Se Sampark Karein
            </p>
            <p className="text-xs text-blue-700 dark:text-blue-400 mb-3">
              Agar BAO office se bhi kaam na bane ya wo form lene se mana karein, toh apne state ke Nodal Officer se direct contact kar sakte hain.
            </p>
            <button
              onClick={() => handleOfficialLink(
                'State Nodal Officers List',
                'PM Kisan state nodal officers ki official list par redirect ho raha hai. 10 second baad khulega...',
                'https://pmkisan.gov.in/NodalOfficers.aspx'
              )}
              className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-105"
            >
               Yahan Click Karo → Apne State Ke Nodal Officer Ka Number Milega
            </button>
          </div>
        </section>

        <section className="mb-8">
          <SH>Zaroori Sub-Flow: Aadhaar Mein Bhi Number Update Karna Pad Sakta Hai</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ek cheez jo zyadatar guides chhupa jaati hain: PM Kisan ke kai OTP flows (khaas kar <Link href="/articles/PmKisanEkycOnline2026" className="underline text-green-700 dark:text-green-400">eKYC</Link> ka OTP method) <strong>Aadhaar-linked number</strong> par OTP bhejte hain, PM Kisan portal wale number par nahi. Matlab agar aapka Aadhaar mein bhi purana number pada hai, to sirf PM Kisan portal ka number badalne se OTP problem poori solve nahi hogi.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Aadhaar ka mobile number <strong>online update nahi hota</strong> — UIDAI ne ye facility band kar rakhi hai kyunki biometric verification zaroori hai. Process ye hai: <a href="https://uidai.gov.in" target="_blank" rel="noopener noreferrer nofollow" className="underline text-green-700 dark:text-green-400">uidai.gov.in</a> par My Aadhaar → Book an Appointment se nazdiki Aadhaar Seva Kendra ka slot lo (ya bina appointment ke bhi Aadhaar-enabled center ja sakte ho), wahan biometric verification hoga, aur mobile number update ka UIDAI-notified charge <strong>₹50</strong> hai (agar sirf mobile update ho; biometric update ke saath ho to alag se charge nahi). Aapko 14-digit URN (Update Request Number) slip milegi jisse status track hota hai — UIDAI ke mutabik update reflect hone mein kuch hafte lag sakte hain.
          </p>
          <IB>
            <strong>Kab kya karna hai:</strong> Agar sirf PM Kisan portal ke SMS/status ke liye number badalna hai → CSC/BAO wala process kaafi hai. Agar eKYC ka OTP nahi aa raha → pehle check karo ki Aadhaar mein kaunsa number linked hai; purana hai to Aadhaar update pehle karna padega, ya phir CSC par biometric eKYC karwa lo jisme OTP ki zaroorat hi nahi padti.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Kaunsa Number Kahan Update Hota Hai? (Ye Table Save Kar Lo)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Kisan ke case mein mobile number chaar alag-alag jagah register hota hai, aur chaaron ke database alag hain. Ek jagah badalne se doosri jagah apne aap nahi badalta — saari confusion yahi se aati hai.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Kahan</th>
                  <th className="p-3 text-left">Kis kaam ke liye</th>
                  <th className="p-3 text-left">Kaise update hota hai</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['PM Kisan portal', 'Scheme ke SMS, portal login/status OTP', 'CSC biometric ya BAO correction form (is guide ka main process)'],
                  ['Aadhaar (UIDAI)', 'Aadhaar OTP — eKYC samet kai verifications yahi number use karti hain', 'Sirf offline: Aadhaar Seva Kendra, biometric + ₹50 fee'],
                  ['Bank account', 'Paise ke transaction alerts, net/mobile banking OTP', 'Apni branch mein form/KYC update — bank ka apna process'],
                  ['NPCI/DBT mapping', 'Ye number nahi, Aadhaar-account link hai — kist isi mapping se aati hai', 'Bank ke through Aadhaar seeding; mobile se iska lena-dena nahi'],
                ].map(([kahan, kaam, kaise], i) => (
                  <tr key={kahan} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{kahan}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{kaam}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{kaise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Rule of thumb: <strong>jis system ka OTP chahiye, usi system mein number update karo.</strong> Portal ka OTP → portal update. Aadhaar OTP → UIDAI update. Bank alert → bank update. Teeno ek hi active number par rakhoge to aage kabhi ye guide dobara nahi padhni padegi.
          </p>
        </section>

        <section className="mb-8">
          <SH>Helpline Se Kya Expect Karein (Aur Kya Nahi)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            PM Kisan ke official contact channels portal ke <a href="https://pmkisan.gov.in/ContactUs.aspx" target="_blank" rel="noopener noreferrer nofollow" className="underline text-green-700 dark:text-green-400">Contact Us page</a> par listed hain — helpline number aur email (pmkisan-ict[at]gov[dot]in) wahi se lo, kyunki ye time ke saath badalte rehte hain.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Realistic expectation rakhna zaroori hai: helpline aapka mobile number <strong>phone par update nahi karegi</strong> — na karni chahiye, kyunki bina biometric/OTP verification ke number badalna hi fraud ka rasta hai. Helpline ka asli kaam hai: aapka registration record dekh kar batana ki number update hua ya pending hai, complaint register karna, aur ye batana ki aapke case mein CSC jana hai ya BAO. Call karne se pehle apna Aadhaar number aur (agar hai) CSC receipt ki transaction ID saamne rakho — bina record ke baat aage nahi badhti.
          </p>
        </section>

        <section className="mb-8">
          <SH>Ek Bahut Badi Confusion: Bank Number vs PM Kisan Number</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bahut se kisan bhai ek badi galti karte hain. Wo sochte hain ki agar unhone bank mein jaakar apne account ka mobile number badal diya, toh PM Kisan ka number bhi apne aap badal jayega. <strong>Ye bilkul galat hai.</strong>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-black text-red-800 dark:text-red-300 text-sm mb-2">Galat Fahmi</p>
              <p className="text-xs text-[var(--color-text-muted)]">"Bank mein number badal diya, ab PM Kisan ka OTP naye number par aayega."</p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-2">Sachai</p>
              <p className="text-xs text-[var(--color-text-muted)]">Bank ka mobile number aur PM Kisan portal ka mobile number dono alag-alag databases mein hote hain. Dono ko alag-alag update karna padta hai.</p>
            </div>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            <strong>Meri Taraf Se Rai:</strong> Dono jagah ek hi active number rakho. Pehle bank jaakar account ka number update karo, phir CSC jaakar PM Kisan ka number update karo. Isse DBT (Direct Benefit Transfer) mein kabhi dikkat nahi aayegi.
          </p>
        </section>

        <section className="mb-8">
          <SH>Documents Ki List (Jo Hamesha Sath Rakhein)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            CSC ho ya BAO, bina kagazat ke kaam nahi banta. Ye sab apne bag mein daal kar jao, taake chakkar na kaatna pade:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { doc: 'Aadhaar Card', note: 'Original lao. Ek photocopy bhi sath rakh lo.' },
              { doc: 'Naya Mobile Phone', note: 'Jisme naya SIM dala ho. OTP aapke phone par hi aayega.' },
              { doc: 'PM Kisan Registration Slip', note: 'Agar purani slip mili ho toh le jao. Us par Registration ID hoti hai.' },
              { doc: 'Bank Passbook', note: 'Kabhi kabhi verification ke liye mang lete hain taaki naam match ho.' },
              { doc: 'Ek Passport Size Photo', note: 'Offline form par lagane ke liye kaam aa jati hai.' },
            ].map(({ doc, note }) => (
              <div key={doc} className="p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
                <p className="font-black text-sm text-[var(--color-text)] mb-1">{doc}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <SH>Ye Galtiyan Mat Karna (Warna Phir Chakkar Katne Padenge)</SH>
          <div className="space-y-3">
            {[
              {
                mistake: 'Galat Number Bata Dena',
                fix: 'CSC wale se form bharwate time screen par number khud dekho. Ek digit galat hua toh OTP dusre kisi anjaan ke phone par jayega.'
              },
              {
                mistake: 'OTP Kisi Anjaan Ko Bata Dena',
                fix: 'OTP sirf CSC wale ko batao jo aapke samne kaam kar raha hai. Phone par koi kahe ki "OTP batao, hum update kar denge", toh wo 100% fraud hai.'
              },
              {
                mistake: 'Receipt Na Lena',
                fix: 'Bina receipt ke kaam hua hi nahi maana jata. Receipt par Transaction ID hoti hai, jisse aap baad mein track kar sakte ho ki kaam hua ya nahi.'
              },
              {
                mistake: 'Turant Status Check Karne Chale Jana',
                fix: 'Mobile update turant reflect nahi hota — database sync mein kuch din lag sakte hain. Turant check karne par purana number hi dikh sakta hai; ek-do din ruk kar test karo, aur receipt tab tak sambhal kar rakho.'
              },
            ].map(({ mistake, fix }, i) => (
              <div key={i} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
                <p className="font-black text-sm text-red-600 dark:text-red-400 mb-2">{mistake}</p>
                <p className="text-xs text-green-700 dark:text-green-400"><strong>Aise Karo Sahi Se:</strong> {fix}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <SH>Update Hui Ya Nahi? Aise Check Karo</SH>
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
                  ['CSC Submission', 'Usi din', 'Receipt lo aur uski photo kheench lo — transaction ID isi par hoti hai'],
                  ['Database Sync', 'Kuch din (fixed SLA publish nahi hai)', 'PM Kisan database mein naya number update hota hai'],
                  ['Pehla Signal', 'Sync ke baad', 'Naye number par portal/scheme ka SMS aana shuru ho sakta hai'],
                  ['Pakka Test', 'Sync ke baad', 'Farmer Corner mein OTP wala koi bhi step try karo — OTP naye number par aaye to update confirm'],
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
            Jab naye number par OTP aane lage, toh samajh jao kaam ho gaya. Ab aap eKYC bhi kar sakte ho aur status bhi check kar sakte ho.
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
               Yahan Click Karo → Apna Naam List Mein Check Kar Sakte Hain
            </button>
          </div>
        </section>

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

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Mobile Number Update Se Jude Sawal-Jawab
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kisan Mobile Number Change — Aksar Puchhe Jaane Wale Sawal" />
        </section>

        <GovLink
          href="https://pmkisan.gov.in"
          label="PM Kisan Official Portal"
          guide="Status Check Karein"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmkisan.gov.in"
        />

        <section className="my-10">
          <h3 className="text-lg font-black text-[var(--color-text)] mb-4">Related Articles — Yeh Bhi Padho</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {RELATED_CARDS.map((card) => (
              <Link
                key={card.slug}
                href={`/articles/${card.slug}`}
                className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg hover:border-green-500 transition-all duration-300"
              >
                <div className="text-2xl mb-2">{card.emoji}</div>
                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-green-600 transition-colors">
                  {card.title}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">
                  {card.desc}
                </p>
                <span className="text-xs font-semibold text-green-600 flex items-center gap-1">
                  Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisanCscRegistrationCharges', l: '🏪 CSC Charges' },
          { href: '/articles/PmKisanEkycOnline2026', l: 'eKYC Guide' },
          { href: '/articles/PmKisanMasterGuide2026', l: 'Master Guide' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
