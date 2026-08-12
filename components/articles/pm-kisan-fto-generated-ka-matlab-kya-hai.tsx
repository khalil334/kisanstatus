'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import CountdownModal from '@/components/CountdownModal';
import type { ArticleMeta } from '@/lib/articles-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const PUBLISHED = '2025-12-26T11:27:11+05:30';
const MODIFIED = '2026-01-04T13:42:17+05:30';

const RELATED = [
  { slug: 'PmKisan24viKist2026', title: '24vi Kist Status' },
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary Roster Check' },
  { slug: 'PmKisanMasterGuide2026', title: 'Master Guide' },
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Credit Card Guide' },
  { slug: 'NanoDap500mlPriceInIndia2026', title: 'Nano DAP Price Guide', emoji: '' },
  { slug: 'mandi-bhav-today', title: 'Aaj Ka Mandi Bhav' },
];

const FAQS_DATA = [
  { q: 'FTO ka full form kya hai?', a: 'Fund Transfer Order. Simple si baat hai — government ki taraf se bank ko diya gaya ek order ki "is kisan ko itna paisa transfer karo". Isse zyada kuch nahi.' },
  { q: 'FTO Generated ka matlab kya hai?', a: 'Order de diya gaya hai. Paisa confirm ho chuka hai, bank abhi process kar raha hai. Aam taur par 7 se 15 din lagte hain account tak pahunchne mein.' },
  { q: 'FTO processed ka status generated se alag kaise hai?', a: 'Generated matlab order bana. Processed matlab bank ne us order par kaam shuru kar diya hai — yeh ek step aage ka stage hai. Processed dikhne ke baad paisa aana aur bhi jaldi expect kar sakte ho.' },
  { q: 'FTO means in PM Kisan — asal mein kya hota hai?', a: 'FTO ka matlab Fund Transfer Order hai. PM Kisan mein yeh government ki taraf se bank ko bheja gaya digital aadesh hai ki is kisan ke account mein kist ka paisa daal do. Yeh koi document nahi jo aapko download karna pade — sirf ek internal status hai jo portal par dikhta hai.' },
  { q: 'FTO will be generated meaning in Hindi kya hai?', a: 'Iska seedha matlab hai "order banaya jayega" — yaani abhi bana nahi hai. Yeh future tense ka status hai, to samajh lo aap list mein ho lekin aapki kist ka order abhi queue mein hai. Kuch din baad yahi status "FTO Generated" ban jata hai.' },
  { q: '"FTO is generated and payment confirmation is pending" dikh raha hai, kya karein?', a: 'Kuch karne ki zaroorat nahi. Iska matlab order ban gaya hai aur bank se credit hone ki confirmation portal tak wapas aane ka intezaar hai. Paisa process mein hai. Bas Aadhaar seeding aur bank account active hone ki ek baar tasalli kar lein, phir wait karein.' },
  { q: 'FTO ke baad kitne din mein paisa aata hai?', a: 'Depend karta hai bank par. SBI aur PNB mein 8-10 din, HDFC-ICICI jaise private banks mein 10-14, Bank of Baroda 12-15, aur Post Office sabse zyada time leta hai — 15 se 25 din tak.' },
  { q: 'Land seeding kya hota hai PM Kisan mein?', a: 'Iska matlab hai aapki zameen ka record — khasra/khatauni number — aapke PM Kisan account se digitally link karna. Bina land seeding ke naya registration approve nahi hota.' },
  { q: 'Land seeding status kaise check karein?', a: 'pmkisan.gov.in par Farmers Corner mein jao, apna registration number ya Aadhaar daalo, aur wahan land seeding ka status alag se dikh jayega — verified ya pending.' },
  { q: 'CSC registration ki fees kitni hai?', a: 'CSC operator PM Kisan registration ke liye sarkari taur par koi fixed fee nahi charge kar sakta, service free honi chahiye. Kuch centers ₹20-50 tak "seva shulk" mangte hain — yeh unauthorized hai, resist karo agar zyada maange.' },
  { q: 'PM Kisan transaction failed kyun hota hai?', a: 'Sabse common wajah — bank account inactive ho gaya, Aadhaar seeding missing hai, ya naam mein spelling mismatch hai registration aur bank record ke beech. Bank jaakar in teenon ko verify karwao.' },
  { q: 'Self registered farmer ka status kaise dekhein?', a: 'Portal par "Status of Self Registered Farmer" option se apna registration number daal kar dekh sakte ho ki application approved hui, pending hai, ya kisi document ki kami hai.' },
  { q: '24vi kist kab release hogi?', a: 'October 2026 ke aas-paas expect ki ja rahi hai. Jinki eKYC pehle complete hui hai unhe pehle milegi.' },
  { q: '15 din baad bhi paisa nahi aaya — kya karein?', a: 'Bank jaakar Aadhaar seeding check karo, NPCI mapping verify karo, account active hai ya nahi dekho. Uske baad bhi kuch na ho toh 155261 par call karo, last resort CSC visit.' },
  { q: 'Bina eKYC ke FTO generate hota hai?', a: '2026 mein nahi. Digital verification zaroori kar di gayi hai — pehle eKYC complete karo, tabhi agli kist ka FTO banega.' },
  { q: 'FTO ka koi number hota hai kya jo main note kar sakoon?', a: 'Aapko dene ke liye koi alag "FTO number" nahi milta — ye ek backend reference hai jo bank aur government ke system ke beech chalta hai. Jab paisa aa jata hai, tab aapke passbook ya statement mein jo UTR/reference number dikhta hai, wahi asli proof hai ki transaction ho chuka.' },
  { q: 'Bank statement mein "MB FTO" transaction ka matlab kya hai?', a: 'MB FTO ka matlab bhi Fund Transfer Order wala credit hi hai — bank apne system mein PM Kisan ki kist ko is naam se dikhata hai. Ye aapki kist ka hi paisa hai, koi alag transaction nahi.' },
  { q: 'Reason for failed transaction in FTO kya hota hai?', a: 'FTO banne ke baad bhi transaction fail ho sakta hai — sabse common reasons: bank account band/inactive, Aadhaar-NPCI seeding missing, ya naam ka mismatch. Bank jaakar ye teeno cheezein verify karwao, agli batch mein payment dobara try hota hai.' },
];

export default function PmKisanFtoGeneratedKaMatlabKyaHai({ article }: { article: ArticleMeta }) {
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
          infoNote="Seedha pmkisan.gov.in par ja rahe ho, thoda sabr."
        />
      )}

      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">FTO Status</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Payment Status Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            FTO Full Form Aur FTO Generated Ka Matlab — PM Kisan Guide
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span><Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(PUBLISHED)}</span>
            <span>Updated: {fmtDate(MODIFIED)}</span>
            <span>13 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/pm-kisan-fto-generated-featured-image-kisanstatus.webp'}
            alt="FTO Generated meaning in Hindi — PM Kisan Fund Transfer Order status check 2026"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            FTO Generated = Paisa Confirm Hai
          </p>
        </div>

        <div className="my-6 p-5 bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-500 dark:border-amber-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-amber-800 dark:text-amber-300 mb-2">Status Dekh Ke Ghabra Gaye?</h2>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed mb-2">
            <em>"FTO dikh raha hai par paisa nahi aaya. Ye kya scene hai?"</em>
          </p>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
            Relax — yahi normal process hai. Neeche pura samjha diya hai: FTO ka full form kya hai, iska matlab, land seeding kaise check karein, aur paisa kab tak aayega. Sab ek jagah mil jayega.
          </p>
        </div>

        <section className="mb-8">
          <SH>FTO Ka Full Form Kya Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Chaliye pehle basic se shuru karte hain. FTO ka <strong>full form hai Fund Transfer Order</strong>. Yeh koi complicated cheez nahi — government ki taraf se bank ko diya gaya ek instruction hai, jismein likha hota hai ki kis kisan ko kitna paisa uske account mein daalna hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Jab aap portal par "FTO Generated" dekhte ho, matlab ye order ban chuka hai aur bank ke paas pahunch gaya hai. Ab agla kaam bank ka hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>FTO Generated Ka Matlab Kya Hai? (FTO Meaning in Hindi)</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ek example se samajhte hain. Maan lijiye aapne kisi ko cheque diya. Cheque dena matlab paise ka wada kar diya, order de diya. Ab bank ka kaam hai us cheque ko cash karna. <strong>FTO bhi bilkul yahi hai</strong> — sirf digital form mein.
          </p>

          <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-700 rounded-xl p-5 mb-6">
            <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
              <li><strong>FTO will be generated</strong> — order abhi bana hi nahi, list mein naam chadhne ka intezaar hai</li>
              <li><strong>FTO Generated</strong> — government ne order bhej diya</li>
              <li><strong>FTO Processed</strong> — bank ne order par kaam shuru kar diya</li>
              <li><strong>Credit Release Pending</strong> — paisa nikalne ki final stage chal rahi hai</li>
              <li><strong>Paisa aayega</strong> — usually 7-15 din mein</li>
            </ul>
          </div>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ek baat clear kar deta hoon kyunki isi par sabse zyada confusion hoti hai. Log poochte hain <strong>FTO means in PM Kisan</strong> kya hota hai — matlab wahi Fund Transfer Order, government se bank ko bheja gaya paisa transfer karne ka aadesh. Aur <strong>FTO will be generated meaning in Hindi</strong> samjhein toh iska seedha tarjuma hai &ldquo;order banaya jayega&rdquo; — yaani abhi bana nahi hai. Ye future tense wala status hai, koi problem wali baat nahi, bas aapka number aane ka wait hai.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Process teen hisson mein baant sakte hain:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl text-center">
              <p className="font-black text-blue-800 dark:text-blue-300 text-sm">Step 1</p>
              <p className="text-xs text-blue-700 dark:text-blue-400 mt-1">Order ban gaya (Generated)</p>
            </div>
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl text-center">
              <span className="text-2xl block mb-2"></span>
              <p className="font-black text-yellow-800 dark:text-yellow-300 text-sm">Step 2</p>
              <p className="text-xs text-yellow-700 dark:text-yellow-400 mt-1">Bank process kar raha (Processed)</p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center">
              <p className="font-black text-green-800 dark:text-green-300 text-sm">Step 3</p>
              <p className="text-xs text-green-700 dark:text-green-400 mt-1">Paisa account mein aa gaya</p>
            </div>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Agar aapka status abhi "Generated" hai, toh aap step 1 se 2 ke beech hain. "Processed" dikhe toh samajh lo bank ne kaam shuru kar diya hai — ab zyada wait nahi karna padega.
          </p>
        </section>

        <section className="mb-8">
          <SH>FTO Number Aur Transaction Ka Matlab Kya Hota Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ek confusion aur bahut logon ko hoti hai — "mera FTO number kya hai, kahan dekhoon?" Seedha jawab: aapke liye alag se dene layak koi FTO number nahi hota. Ye ek internal reference hai jo sirf government ke system aur bank ke beech chalta hai, kisan ko individually allot nahi hota jaise Aadhaar ya PAN number hota hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Jab bhi log <strong>FTO transaction</strong> ka matlab poochte hain, unka ishara asal mein us poore process se hota hai jismein government ek batch mein sabhi eligible kisano ke liye ek saath order bhejti hai. Aapke liye asli proof tab milta hai jab paisa account mein aa jaata hai — passbook ya bank statement mein jo UTR ya reference number dikhta hai, wahi aapki transaction ka number hai, FTO ka nahi.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-3">
            Kuch kisano ke bank statement mein <strong>&ldquo;MB FTO&rdquo; transaction</strong> likha dikhta hai — iska matlab bhi wahi Fund Transfer Order wala credit hai. Bank apne system mein PM Kisan ki kist ko is naam se dikhate hain, ghabrane ki koi baat nahi; ye aapki kist ka hi paisa hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>&ldquo;FTO is Generated and Payment Confirmation is Pending&rdquo; — Iska Matlab?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Portal par jab poora message aata hai — <strong>&ldquo;FTO is generated and payment confirmation is pending&rdquo;</strong> — toh log sabse zyada isi par ghabrate hain. Lamba English message dekhkar lagta hai kuch reject ho gaya. Aisa kuch nahi hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Is line ke do hisse hain, dono alag baat keh rahe hain:
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-300 dark:border-blue-700 rounded-xl p-5 mb-4">
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-2">
              <li><strong>&ldquo;FTO is generated&rdquo;</strong> — accha hissa. Aapka order ban chuka hai, government ne apna kaam kar diya.</li>
              <li><strong>&ldquo;Payment confirmation is pending&rdquo;</strong> — bank ki taraf se credit hone ki confirmation abhi portal tak wapas nahi aayi.</li>
            </ul>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Toh short mein — paisa line mein lag chuka hai, sirf confirmation ka message atka hai. Yahi status kai kisano ko kist release hone ke baad hafton dikhta rehta hai aur phir chup-chaap paisa aa jata hai. Bas apni Aadhaar seeding aur bank account active hai ya nahi, ek baar check kar lein.
          </p>
        </section>

        <section className="mb-8">
          <SH>Land Seeding Kya Hoti Hai Aur Iska Status Kaise Check Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ye ek aisa term hai jo naye registration karne walon ko sabse zyada confuse karta hai. <strong>Land seeding</strong> ka matlab hai aapki zameen ke revenue records — khasra number, khatauni — ko aapke PM Kisan account ke saath digitally link karna. Jab tak ye linking nahi hoti, application aage nahi badhti.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            <strong>Land seeding status</strong> check karna ho toh ye steps follow karein:
          </p>
          <StepList>
            <SI n={1}>pmkisan.gov.in par Farmers Corner mein jaayein</SI>
            <SI n={2}>Registration number ya Aadhaar number daalein</SI>
            <SI n={3}>Status page par land seeding wala row alag se dikhega — "Seeded" ya "Not Seeded"</SI>
          </StepList>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4 mb-3">
            Agar "Not Seeded" dikh raha ho, toh apne raajya ke Patwari, Lekhpal, ya taluk revenue office se sampark karke <strong>land seeding form</strong> jama karna hoga. Ye form usually offline bharna padta hai, kyunki verification zameen ke actual record se karna zaroori hota hai.
          </p>
          <IB>
            Kai kisan bhaiyon ne poocha hai ki <strong>PM Kisan land seeding form</strong> online kahan milega. Abhi tak ye adhiktar states mein tehsil/patwari office se hi process hota hai — online self-service sabhi jagah available nahi hai.
          </IB>
        </section>

        <section className="mb-8">
          <SH>FTO Ke Baad Kitne Din Mein Paisa Aata Hai?</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ye sabse zyada poocha jaane wala sawal hai. Sach batayein toh iska ek fixed jawab nahi hai — bank alag alag speed se kaam karte hain.
          </p>

          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Bank</th>
                  <th className="p-3 text-center">Kitne Din</th>
                  <th className="p-3 text-left">Speed</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['SBI', '8-10', 'Sabse fast'],
                  ['PNB', '10-12', 'Theek hai'],
                  ['HDFC / ICICI', '10-14', 'Private banks'],
                  ['Bank of Baroda', '12-15', 'Thoda slow'],
                  ['Regional Rural Banks', '15-20', 'Slow'],
                  ['Post Office', '15-25', 'Sabse slow'],
                ].map(([bank, days, speed], i) => (
                  <tr key={bank} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{bank}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-center font-bold text-xs text-green-700 dark:text-green-400">{days}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{speed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <IB>
            SBI ya PNB account hai toh 10 din baad follow-up karna theek rahega. Chhote ya regional banks mein 15-20 din tak wait karna normal hai.
          </IB>
        </section>

        <section className="mb-8">
          <SH>PM Kisan Transaction Failed Kyun Hota Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Kabhi kabhi FTO ban jaane ke baad bhi transaction fail ho jaata hai. Iske peeche aksar in wajahon mein se koi ek hoti hai:
          </p>
          <ul className="list-disc list-inside text-sm text-[var(--color-text-muted)] space-y-2 mb-4">
            <li>Bank account band ya inactive ho gaya hai</li>
            <li>Aadhaar seeding bank ke saath nahi hui</li>
            <li>Naam mein spelling registration aur bank record mein alag hai</li>
            <li>IFSC code galat register ho gaya tha</li>
            <li>Account 6 mahine se dormant pada hai</li>
          </ul>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Sabse pehle bank jaakar Aadhaar seeding aur naam match verify karwayein — zyadatar cases yahin resolve ho jaate hain. Fix hone ke baad paisa agli cycle mein aa jaata hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>24vi Kist Kab Aayegi? (PM Kisan 24vi Kist FTO Date)</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            October 2026 ke aas-paas expected hai, lekin exact date abhi tak official taur par announce nahi hui. September ke end tak FTO generation shuru hone ki sambhavna hai.
          </p>

          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Kab eKYC Ki</th>
                  <th className="p-3 text-left">Kab Aayegi</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['September se pehle', 'October ke pehle hafte', 'Pehle Aayega'],
                  ['September mein', 'October ke end tak', 'Thoda baad mein'],
                  ['Abhi tak nahi ki', '25vi kist (Feb 2027)', '24vi nahi milegi'],
                ].map(([cat, timing, status], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{cat}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{timing}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs font-bold text-green-700 dark:text-green-400">{status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <DB>
            eKYC abhi tak nahi karwayi hai toh 24vi kist mil paana mushkil hai. Jitni jaldi ho sake authentication complete kar lein, warna agli kist tak wait karna padega.
          </DB>
        </section>

        <section className="mb-8">
          <SH>Mobile Se FTO Status Check Kaise Karein?</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Process kaafi seedha hai. Ye steps follow karein:
          </p>

          <StepList>
            <SI n={1}><strong>pmkisan.gov.in</strong> kholein</SI>
            <SI n={2}>Farmers Corner mein jaayein → <strong>Beneficiary Status</strong> par click karein</SI>
            <SI n={3}>Aadhaar number daalein (ek digit bhi galat nahi hona chahiye)</SI>
            <SI n={4}>OTP verify karein → phir <strong>Get Data</strong> button dabayein</SI>
            <SI n={5}>Table mein FTO status ke saath credit release status bhi dikhega</SI>
          </StepList>

          <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 rounded-xl">
            <p className="text-sm font-bold text-green-800 dark:text-green-300 mb-2">
               Abhi FTO Status Check Karein
            </p>
            <p className="text-xs text-green-700 dark:text-green-400 mb-3">
              Official PM Kisan portal par jaakar apna payment status check karein. Neeche ke button se 10 second mein portal khulta hai.
            </p>
            <button
              onClick={() => handleOfficialLink(
                'PM Kisan Beneficiary Status',
                'pmkisan.gov.in khul raha hai, ruk jao thoda...',
                'https://pmkisan.gov.in/BeneficiaryStatus.aspx'
              )}
              className="w-full px-4 py-3 bg-green-600 hover:bg-green-700 text-white text-sm font-bold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-105"
            >
               Yahan Click Karein → FTO Status Check Hoga
            </button>
          </div>

          <WB>
            Kuch common dikkatein: OTP na aaye toh mobile number CSC se update karwayein. "Record Not Found" ka matlab Aadhaar galat daala gaya ya enrollment hi nahi hui. Server dheera chale toh subah 10-11 baje try karein, tab traffic kam hota hai.
          </WB>
        </section>

        <section className="mb-8">
          <SH>Self Registered Farmer Ka Status Kaise Check Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Agar aapne khud portal par jaakar apna registration kiya tha (CSC se nahi), toh uska alag se status check kar sakte hain — <strong>Status of Self Registered Farmer</strong> option se.
          </p>
          <StepList>
            <SI n={1}>pmkisan.gov.in par "Status of Self Registered Farmer" section dhoondein</SI>
            <SI n={2}>Registration number daalein jo aapko form bharte waqt mila tha</SI>
            <SI n={3}>Status dikhega — approved, pending verification, ya document ki kami</SI>
          </StepList>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-3">
            Kisi document ki kami dikhe toh state ke agriculture department portal se woh upload karna hoga. Approval mein state ke hisaab se 2-6 hafte lag jaate hain.
          </p>
        </section>

        <section className="mb-8">
          <SH>CSC Se Registration Karwane Ki Fees Kitni Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Officially, PM Kisan registration ki service CSC (Common Service Centre) par <strong>free honi chahiye</strong> — sarkari guidelines mein koi fixed fee prescribed nahi hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Practically, kuch CSC operators printing ya "seva shulk" ke naam par ₹20 se ₹50 tak charge kar lete hain, jo unauthorized hai. Agar koi isse zyada maange, toh mana kar sakte hain ya district agriculture office mein complaint darj kara sakte hain.
          </p>
        </section>

        <section className="mb-8">
          <SH>15 Din Ho Gaye Par Paisa Nahi Aaya? (FTO Generated But Money Not Received)</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ye situation bahut se kisanon ke saath hoti hai. Ghabraane ki zaroorat nahi — in steps se check karte jaayein:
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-red-500 dark:border-red-700 pl-4 py-1">
              <h3 className="font-black text-[var(--color-text)] text-sm mb-1">Aadhaar Seeding Check Karein</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Sabse pehle bank jaakar counter par Aadhaar seeding status poochein. Yahi sabse common reason hai jab paisa atak jata hai — "Not Seeded" dikhe toh usi din karwa lein.</p>
            </div>
            <div className="border-l-4 border-orange-500 dark:border-orange-700 pl-4 py-1">
              <h3 className="font-black text-[var(--color-text)] text-sm mb-1">NPCI Mapping</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Bank manager se poochein ki DBT ke liye NPCI mapping active hai ya nahi.</p>
            </div>
            <div className="border-l-4 border-yellow-500 dark:border-yellow-700 pl-4 py-1">
              <h3 className="font-black text-[var(--color-text)] text-sm mb-1">Account Dormant Toh Nahi Ho Gaya?</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Agar 6 mahine se koi transaction nahi hua, toh bank account apne aap dormant ho jata hai aur credit rukk jaata hai. Isko fix karna aasan hai — sirf ₹100 deposit karo, account usi din wapas active ho jayega.</p>
            </div>
            <div className="border-l-4 border-blue-500 dark:border-blue-700 pl-4 py-1">
              <h3 className="font-black text-[var(--color-text)] text-sm mb-1">Helpline Try Karein</h3>
              <p className="text-xs text-[var(--color-text-muted)]">155261 ya 1800115526 — subah 9 se shaam 6 baje tak available hai. Call karte waqt Aadhaar number, enrollment number aur bank account number saath rakhein, sawal karte hi maangenge.</p>
            </div>
            <div className="border-l-4 border-green-500 dark:border-green-700 pl-4 py-1">
              <h3 className="font-black text-[var(--color-text)] text-sm mb-1">Kuch Na Ho Toh CSC Jaayein</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Ye last option hai. CSC operator poora case dekh kar complaint register kar dega, aur 3-5 din mein kaam ban jata hai.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>30 Din Ho Gaye Aur Ab Bhi Kuch Nahi Hua? Yahan Se Ab Escalate Karo</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            15 din wale steps try kar liye, helpline bhi call kar liya, phir bhi 30 din nikal gaye aur paisa nahi aaya? Ab ye normal delay nahi hai — kahin na kahin FTO reject ya return ho chuka hoga. Yahan se approach thoda formal ho jaana chahiye:
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-red-600 dark:border-red-700 pl-4 py-1">
              <h3 className="font-black text-[var(--color-text)] text-sm mb-1">Sabse Pehle: FTO Reject Toh Nahi Hua?</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Status page par dhyan se padhein — kahin "Rejected" ya "Returned by Bank" toh nahi likha hai. Ye do alfaaz asaani se miss ho jaate hain kyunki baaki text almost same lagta hai. Agar likha hai, toh samajh lijiye bank ne kisi galti ki wajah se paisa wapas bhej diya — aur ye apne aap dobara nahi jayega, koi na koi action lena hi padega.</p>
            </div>
            <div className="border-l-4 border-orange-600 dark:border-orange-700 pl-4 py-1">
              <h3 className="font-black text-[var(--color-text)] text-sm mb-1">Correction Form Bharein</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Reject wajah galat naam ya IFSC hai toh Farmer Corner mein correction form milega — theek karke dobara submit karein.</p>
            </div>
            <div className="border-l-4 border-yellow-600 dark:border-yellow-700 pl-4 py-1">
              <h3 className="font-black text-[var(--color-text)] text-sm mb-1">Likhit Grievance Darj Karein</h3>
              <p className="text-xs text-[var(--color-text-muted)]">pmkisan.gov.in par "Grievance" section hai. Registration number aur problem likh kar submit karein — ek ticket number milega jise baad mein track kar sakte hain.</p>
            </div>
            <div className="border-l-4 border-green-600 dark:border-green-700 pl-4 py-1">
              <h3 className="font-black text-[var(--color-text)] text-sm mb-1">District Nodal Officer Se Milein</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Ye sabse effective step hai 30 din ke baad. Har district mein PM Kisan ke liye ek nodal officer hota hai — Block Agriculture Office se unka contact number le kar seedhe unse baat karein.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>State Ke Hisaab Se Time</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Har raajya ka processing system alag hai, isliye time bhi different lagta hai:
          </p>

          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">State</th>
                  <th className="p-3 text-center">Kitna Time</th>
                  <th className="p-3 text-left">Kyun</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['UP', '7-10 din', 'Fast processing'],
                  ['Punjab / Haryana', '8-12 din', 'Achha system'],
                  ['MP', '12-15 din', 'Medium speed'],
                  ['Bihar / Jharkhand', '15-20 din', 'Verification slow'],
                  ['Rajasthan', '15-20 din', 'Bank coordination'],
                  ['West Bengal', '20-30 din', 'Sabse slow'],
                ].map(([state, delay, reason], i) => (
                  <tr key={state} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{state}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-center font-bold text-xs text-[var(--color-text)]">{delay}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/pm-kisan-fto-faq-kisanstatus.webp"
            alt="PM Kisan FTO frequently asked questions — common doubts about fund transfer order"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            FTO Se Jude Aksar Puche Jane Wale Sawal
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            FTO Status Ke Confusions — Saaf Jawab
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="FTO Status FAQ 2026" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">FTO Ke Baad Ki Timeline</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            “FTO is Generated” ka matlab hai payment order ban chuka hai — paisa sanction ho gaya, ab sirf bank transfer baaki hai. Normal case mein 7-15 din lagte hain. Din 15 ke baad bhi credit na aaye, tab yeh order follow karein:
          </p>
          <ol className="space-y-2 text-sm text-green-800 dark:text-green-300 list-decimal list-inside">
            <li>Bank jaakar <strong>Aadhaar seeding</strong> aur <strong>land seeding</strong> dono check karein</li>
            <li><strong>NPCI mapping</strong> verify karein</li>
            <li>Helpline <strong>155261</strong> par call karein</li>
            <li>30 din se zyada ho jaaye toh <strong>grievance darj</strong> karein ya district nodal officer se milein</li>
          </ol>
        </div>

        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 dark:border-blue-700 border-l-[6px] rounded-xl">
          <h3 className="text-base font-black text-blue-800 dark:text-blue-300 mb-2">
             PM Kisan Official Portal
          </h3>
          <p className="text-xs text-blue-700 dark:text-blue-400 mb-3">
            FTO status, land seeding status, ya beneficiary list — teeno ki jaankari isi ek portal par mil jaayegi. 10 second baad khulega.
          </p>
          <button
            onClick={() => handleOfficialLink(
              'PM Kisan Official Portal',
              'pmkisan.gov.in khul raha hai, ruk jao thoda...',
              'https://pmkisan.gov.in/BeneficiaryStatus.aspx'
            )}
            className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-105"
          >
             Yahan Click Karein → PM Kisan Portal Khulega
          </button>
        </div>

        <CalcBanner
          title="Apni Kist Track Karein"
          desc="Kitni kist aayi, FTO status kya hai, arrears kitne — sab jaanein"
          primaryCta={{ href: '/calculator/installment-tracker', label: 'Tracker Kholein →' }}
          secondaryCta={{ href: '/calculator/pm-kisan-benefit', label: 'Benefit Calculator' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisan24viKist2026', l: '24vi Kist' },
          { href: '/articles/PmKisanMasterGuide2026', l: 'Master Guide' },
          { href: '/articles/PmKisanBeneficiaryList2026', l: 'Beneficiary List' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
