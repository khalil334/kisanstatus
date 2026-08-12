'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import { AUTHOR_NAME } from '@/lib/site-config';

const PUBLISHED = '2026-01-28T12:49:15+05:30';
const MODIFIED = '2026-03-11T06:46:19+05:30';

const FALLBACK_IMG = '/images/articles/pm-kisan-bank-account-change/bank-change-hero.webp';

function SafeImage({ src, alt, ...rest }: React.ComponentProps<typeof Image>) {
  const [currentSrc, setCurrentSrc] = useState(src);
  return (
    <Image
      {...rest}
      src={currentSrc}
      alt={alt}
      onError={() => setCurrentSrc(FALLBACK_IMG)}
    />
  );
}

const RELATED = [
  { slug: 'PmKisanPaymentFailedFix2026', title: 'Payment Failed Fix' },
  { slug: 'pm-kisan-fto-generated-ka-matlab-kya-hai', title: 'FTO Status Guide' },
  { slug: 'PmKisanMasterGuide2026', title: 'Master Guide' },
  { slug: 'PmKisanEkycOnline2026', title: 'eKYC Guide' },
  { slug: 'PmKisanBankAccountChangeProcess', title: 'Bank Change', emoji: '' },
];

const FAQS_DATA = [
  {
    q: 'Kya main khud online bank account change kar sakta hoon?',
    a: 'PM Kisan ki website par khud se "Edit Bank Account" ka koi button nahi milta. Aapko ya toh CSC center jana padega ya phir BAO office. Ghar baithe ye kaam nahi hota, kisi na kisi ka verification zaroori hai.',
  },
  {
    q: 'Bank account change karne mein kitna time lagta hai?',
    a: 'CSC wale se karwane par lagbhag 15 din lagte hain. BAO office ke chakkar kaat rahe ho toh 30 se 45 din bhi nikal sakte hain. Jab tak portal update nahi hota, paisa purane account mein hi jaayega aur wapas fail ho jaayega.',
  },
  {
    q: 'Agar purana account band ho gaya toh?',
    a: 'Naya account khulwa kar bina der link karwao. Beech ki kist fail hogi, lekin correction form ya CSC se update karwane ke baad agle cycle mein naye account mein aa jaayegi. Koshish karo account dormant hone se pehle hi ye kaam nipta lo.',
  },
  {
    q: 'Naya bank account kis naam par hona chahiye?',
    a: 'Bilkul usi naam par jo Aadhaar card aur PM Kisan registration mein hai. Naam mein ek letter bhi idhar-udhar hua toh payment seedha reject ho jaayegi. "Ram Kumar" aur "Ram Kumar Singh" ko system alag maanta hai.',
  },
  {
    q: 'CSC wala kitne paise lega?',
    a: 'Sarkari rate ₹15 se ₹30 ke beech hai. Kuch operators ₹50 ya ₹100 bhi maang lete hain — mol-bhav karo, zyada mat dena.',
  },
  {
    q: 'Kya main kisi aur ke bank account mein paisa mangwa sakta hoon?',
    a: 'Bilkul nahi. PM Kisan ka paisa sirf usi kisan ke account mein aayega jiska naam registration mein hai. Patni ya bhai ka account use karne ki galti mat karna, payment fail ho jaayegi.',
  },
  {
    q: 'IFSC code galat daal diya toh?',
    a: 'Payment fail ho jaayegi. CSC jaakar IFSC update karwao. Aajkal branch merger ki wajah se purana IFSC bhi badal jaata hai, isliye nayi passbook dekh kar hi code daalna.',
  },
  {
    q: 'Bank account change ke baad status kaise check karein?',
    a: '15 din baad pmkisan.gov.in par jaakar "Beneficiary Status" mein check karo. Wahan naya account number dikhna chahiye. Purana hi dikh raha ho toh matlab abhi update nahi hua.',
  },
];

export default function PmKisanBankAccountChangeProcess() {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors">Articles</Link>
            <span>/</span>
            <Link href="/articles/category/status-check" className="hover:text-white transition-colors">Status Check</Link>
            <span>/</span>
            <span className="text-white font-bold">Bank Account Change</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Complete Process Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Bank Change 2026: Naya Account
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span><Link href="/about" className="underline hover:text-white">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(PUBLISHED)}</span>
            <span> Updated: {fmtDate(MODIFIED)}</span>
            <span>16 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <SafeImage
            src="/images/articles/pm-kisan-bank-account-change/bank-change-hero.webp"
            alt="Farmer at bank counter updating passbook for PM Kisan"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px' }}
            priority
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)]">
            Bank Account Change — Naya Account Link Karne Ka Pura Tarika
          </p>
        </div>

        <section className="mb-8">
          <SH>Purana Account Band Ho Gaya? Paisa Kahan Aayega?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Kist aane ka din nazdeek aata hai toh har kisan phone baar-baar check karta hai. Par jo account link hai wahi band pada ho, ya branch merge hone se IFSC hi badal gaya ho — toh paisa atkega hi.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Portal par <Link href="/articles/pm-kisan-fto-generated-ka-matlab-kya-hai" className="underline text-green-700 dark:text-green-400">FTO Generated</Link> dikha diya jaata hai, par bank mein "Transaction Rejected" bol dete hain. Yahi se pareshani shuru hoti hai. Ek kaam ki baat: jab bhi CSC ya bank jao, ek chhoti diary mein tareekh, kisse mile aur kya bataya gaya — ye teen cheezein likh lo. Baad mein kisi bhi vivaad mein ye kaafi kaam aata hai.
          </p>

          <SafeImage
            src="/images/articles/pm-kisan-bank-account-change/bank-passbook-update.webp"
            alt="Updated bank passbook with new IFSC code"
            width={800}
            height={450}
            className="w-full rounded-xl my-4"
          />

          <DB>
            <strong>Real Story:</strong>
            <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">
              Aligarh ke Vinod ji ka account do saal se nishkriya (dormant) pada tha, kisi len-den ke bina. Natijan teen kist lagatar fail ho gayi. Naya account khulwaya gaya, CSC se portal update hua, aur bank mein NPCI seeding karwayi gayi — agli kist seedhe naye account mein aa gayi.
            </p>
          </DB>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Hal ek hi hai — naya bank account link karna. Neeche har tarika detail mein diya hai. <Link href="/articles/PmKisanPaymentFailedFix2026" className="underline text-green-700 dark:text-green-400">Payment failed</Link> ki dikkat bhi isi se theek ho jaati hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Bank Account Kyun Change Karna Padta Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Har kisan ko ye kaam nahi karna padta — par kuch halaton mein koi chaara nahi bachta:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: '', title: 'Account Dormant/Band', desc: 'Do saal tak koi len-den na ho toh bank account ko dormant ya freeze kar deta hai. Jan Dhan account bhi istemal na hone par freeze ho jaata hai.' },
              { title: 'IFSC Code Change', desc: 'Branches merge hone se IFSC badal jaata hai, aur purana code portal par kaam karna band kar deta hai.' },
              { title: 'Galat Account Link', desc: 'Registration ke waqt kabhi galat account number ya IFSC daal diya jaata hai, ya Current account de diya jaata hai jabki PM Kisan sirf Savings account mein aata hai.' },
              { title: 'Naam Mismatch', desc: 'Passbook aur Aadhaar mein naam thoda alag ho toh payment reject ho jaati hai — isko system "Name Mismatch" kehta hai.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl hover:border-green-300 dark:hover:border-green-700 transition-all">
                {icon ? <span className="text-2xl block mb-2">{icon}</span> : null}
                <p className="font-black text-sm text-[var(--color-text)] mb-1">{title}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <SH>Method 1: CSC Center Se Bank Change Karo (Sabse Aasan)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ye tarika sabse tez hai. Nazdiki <Link href="/articles/PmKisanCscRegistrationCharges" className="underline text-green-700 dark:text-green-400">CSC center</Link> par jaao — operator apne login se seedha update kar dega.
          </p>
          <StepList>
            <SI n={1}>
              <strong>Documents Le Jaiye:</strong> Aadhaar card (original), naya bank passbook (jisme IFSC aur Account No. saaf dikhe), aur mobile phone (OTP ke liye).
            </SI>
            <SI n={2}>
              <strong>CSC Operator Ko Boliye:</strong> Saaf-saaf boliye "PM Kisan Bank Account Update karna hai". Jab operator details daal raha ho, screen ki ek photo le lo — kisi gadbad mein ye proof kaam aayega.
            </SI>
            <SI n={3}>
              <strong>Details Enter:</strong> Naya account number aur IFSC daala jaayega, purana apne aap hat jaayega. Transaction ID likh kar rakh lo.
            </SI>
            <SI n={4}>
              <strong>OTP Verification:</strong> Mobile par OTP aayega, wo daalne ke baad hi process poora hoga.
            </SI>
            <SI n={5}>
              <strong>Receipt Li jiye:</strong> Naya account number likhi hui receipt milegi — sambhal kar rakho, aage kaam aayegi.
            </SI>
          </StepList>

          <SafeImage
            src="/images/articles/pm-kisan-bank-account-change/csc-bank-update.webp"
            alt="CSC operator updating bank details on PM Kisan portal"
            width={800}
            height={600}
            className="w-full rounded-xl my-6"
          />

          <WB>
            <strong>CSC Wale Se Pehle Puch Li jiye:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1 text-xs">
              <li>"Bhaiya, iske kitne charge lagenge?" (Sarkari rate ₹15 se ₹30 ke beech hai. ₹50 se zyada kisi haalat mein mat dena).</li>
              <li>"Kya aap NPCI seeding bhi kar doge?" (Ye step bahut zaroori hai, iske baare mein niche detail mein bataya hai).</li>
              <li>"Receipt mein naya account number saaf likh kar dena."</li>
            </ul>
          </WB>
        </section>

        <section className="mb-8">
          <SH>Method 2: Bank Branch Mein NPCI Seeding (Bahut Zaroori)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Sirf portal par account badalne se kaam poora nahi hota — bank ko bhi batana padta hai ki is account par DBT (Direct Benefit Transfer) aana hai. Ye step chhoot jaaye toh paisa aata hi nahi.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Isko <strong>NPCI Seeding</strong> ya <strong>Aadhaar Seeding</strong> kehte hain.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 dark:border-blue-700 rounded-xl p-5 mb-6">
            <p className="text-sm font-black text-blue-800 dark:text-blue-300 mb-3">
              Bank Branch Process:
            </p>
            <ol className="list-decimal list-inside text-xs text-blue-800 dark:text-blue-300 space-y-2">
              <li>Apne bank branch chale jaiye, wahi jahan aapne account khola hai.</li>
              <li>Bank counter par jakar boliye ki "Aadhaar seeding for DBT/PM Kisan karna hai".</li>
              <li>Wo aapko ek form denge. Usme apna Aadhaar number aur account number likhiye.</li>
              <li>Bank wala aapki ungli ka nishan (biometric) lega ya mobile OTP verify karega.</li>
              <li>Lagbhag 7 din ke andar aapka account NPCI se link ho jayega.</li>
            </ol>
          </div>
          <SafeImage
            src="/images/articles/pm-kisan-bank-account-change/bank-passbook-update.webp"
            alt="Farmer filling NPCI seeding form at bank branch"
            width={800}
            height={450}
            className="w-full rounded-xl my-4"
          />
          <IB>
            <strong>Andar Ki Baat:</strong> Bank branch wale aksar bolte hain "server down hai, kal aana". Aise mein gussa mat hone ka. Unse pre-printed Aadhaar seeding form maang lijiye, ghar par fill karke agle din jama kar aaiye. Form par receipt lekar hi wapas aaiye. Bank se bahar aane ke baad *99# dial karke check kar lijiye ki seeding successful hui ya nahi.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Method 3: BAO Office Se Offline Form (Agar CSC Na Ho)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Gaon mein CSC door ho ya kaam na kar raha ho, toh Block Agriculture Office (BAO) mein correction form milta hai. Ek kaam ki baat: Monday ko wahan mat jaana, hafte bhar ka rush ikattha ho jaata hai. Tuesday-Wednesday jaao, kaam jaldi ho jaata hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Form mein purana aur naya dono account number bharne hain. Patwari ya Lekhpal ka sign sabse zaroori hai, unse pehle hi mil lo. Uske baad hi BAO officer approve karta hai.
          </p>
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
            <p className="text-xs text-amber-800 dark:text-amber-300">
              <strong>Dhyan Rahe:</strong> BAO office ke process mein 30 se 45 din lag sakte hain, CSC se 15 din mein ho jaata hai. Pehle CSC try karo — wahan se kaam na bane tabhi BAO ke chakkar kaato.
            </p>
          </div>
          <SafeImage
            src="/images/articles/pm-kisan-bank-account-change/bao-form.webp"
            alt="PM Kisan bank correction form at BAO office"
            width={800}
            height={600}
            className="w-full rounded-xl my-6"
          />
        </section>

        <section className="mb-8">
          <SH>Documents Ki Complete List</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Kahin bhi jaao — CSC, bank, ya BAO — ye documents saath rakho:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Document</th>
                  <th className="p-3 text-left">Kyun Zaroori Hai?</th>
                  <th className="p-3 text-left">Original/Copy</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Aadhaar Card', 'Pehchan ki tasdeek ke liye', 'Original + Photocopy'],
                  ['Naya Bank Passbook', 'Account No. aur IFSC code dekhne ke liye', 'Original'],
                  ['Mobile Phone', 'OTP receive karne ke liye', 'Original (SIM ke saath)'],
                  ['PM Kisan Registration Slip', 'Purana record dekhne ke liye', 'Photocopy (Agar paas ho toh)'],
                  ['Ration Card', 'Address proof ke liye (BAO ke liye)', 'Photocopy'],
                ].map(([doc, reason, type], i) => (
                  <tr key={doc} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{doc}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{reason}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-green-600 dark:text-green-400">{type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <SH>Ye Galtiyan Mat Karna (Warna Phir Fail Hoga)</SH>
          <div className="space-y-3">
            {[
              {
                mistake: 'IFSC Code Galat Daal Diya',
                fix: 'Passbook ke pehle page par jo IFSC likha hai, bas wahi daliye. Internet se search karke mat daliye, kyunki branch ka IFSC alag ho sakta hai.',
              },
              {
                mistake: 'Naam Match Nahi Kar Raha',
                fix: 'Bank account mein naam bilkul Aadhaar jaisa hona chahiye. "Ram Kumar" aur "Ram Kumar Singh" system mein alag maane jayenge.',
              },
              {
                mistake: 'Joint Account Use Kar Liya',
                fix: 'PM Kisan ka paisa sirf single account mein aata hai. Joint account mein payment fail ho sakti hai.',
              },
              {
                mistake: 'NPCI Seeding Bhool Gaye',
                fix: 'Portal par account update karne ke baad bank jakar NPCI seeding bhi karwani chahiye. Warna paisa aayega nahi.',
              },
              {
                mistake: 'Jan Dhan Account Bina Active Kiye Link Kar Diya',
                fix: 'Jan Dhan account zero balance par bhi chalta hai, lekin agar wo dormant ho gaya toh paisa fail. Pehle bank jakar usme ₹100 deposit kariye aur account "Active" karwaiye, phir PM Kisan mein link kariye.',
              },
            ].map(({ mistake, fix }, i) => (
              <div key={i} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
                <p className="font-black text-sm text-red-600 dark:text-red-400 mb-2">{mistake}</p>
                <p className="text-xs text-green-700 dark:text-green-400"><strong>Sahi Tarika:</strong> {fix}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <SH>Kitne Din Mein Kaam Hoga?</SH>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Step</th>
                  <th className="p-3 text-left">Time</th>
                  <th className="p-3 text-left">Kya Hoga</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['CSC/BAO Update', 'Day 1', 'Portal par naya account submit ho jata hai'],
                  ['Server Sync', 'Day 2-5', 'PM Kisan database update hota hai'],
                  ['NPCI Seeding', 'Day 5-10', 'Bank se Aadhaar link hota hai'],
                  ['Verification', 'Day 10-15', 'System dono check karta hai'],
                  ['Next Kist', 'Day 15-30', 'Naye account mein paisa aa jata hai'],
                ].map(([step, time, desc], i) => (
                  <tr key={step} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{step}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{time}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            15 din baad <Link href="/articles/PmKisanBeneficiaryList2026" className="underline text-green-700 dark:text-green-400">beneficiary status</Link> check kar lijiye. Wahan naya account number dikhna chahiye.
          </p>
        </section>

        <section className="mb-8">
          <SH>Update Hui Ya Nahi? Kaise Check Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Andhere mein teer mat chalaiye. Pehle ye confirm kar lijiye ki account update hua hai ya nahi:
          </p>
          <StepList>
            <SI n={1}>Sabse pehle pmkisan.gov.in par jaiye.</SI>
            <SI n={2}>"Farmers Corner" mein "Beneficiary Status" par click kariye.</SI>
            <SI n={3}>Apna Aadhaar number daliye aur "Get Data" dabaiye.</SI>
            <SI n={4}>Niche scroll kariye. Wahan "Bank Account" ka column hoga.</SI>
            <SI n={5}>Agar naya account number dikh raha hai, toh samajh lijiye kaam ho gaya!</SI>
          </StepList>
          <SafeImage
            src="/images/articles/pm-kisan-bank-account-change/fto-status-check.webp"
            alt="PM Kisan beneficiary status showing updated bank account"
            width={800}
            height={450}
            className="w-full rounded-xl my-4"
          />
          <WB>
            <strong>Agar Purana Hi Account Dikh Raha Hai?</strong>
            <p className="text-xs text-[var(--color-text-muted)] mt-2">
              Matlab CSC wale ne update nahi kiya ya server par record chadha hi nahi. Dobara CSC jaao aur receipt dikhao. Ya <Link href="/articles/PmKisanStateNodalOfficerList" className="underline text-green-700 dark:text-green-400">nodal officer</Link> ko email kar do.
            </p>
          </WB>
        </section>

        <section className="mb-8">
          <SH>Purani Ruki Hui Kist Ka Kya Hoga?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Sabse zyada ye sawal poocha jaata hai — jo paisa pehle fail hua tha, wo ab kahan jaayega?
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Chinta ki baat nahi. Naya account link hote hi ruki hui kist bhi usi account mein aa jaati hai, alag se koi application nahi deni padti.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Bas agar lagatar 3-4 kist fail ho chuki ho, tab ek application District Agriculture Officer (DAO) ko de dena — usme registration number aur naya account number saaf likh dena. <Link href="/articles/PmKisanPaymentFailedFix2026" className="underline text-green-700 dark:text-green-400">Payment failed guide</Link> mein iski poori detail hai.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Bank Account Change Ke Sawaal — Jawab Yahin
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Bank Account Change FAQ" />
        </section>

        <GovLink
          href="https://pmkisan.gov.in"
          label="PM Kisan Official Portal"
          guide="Status Check Karo"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmkisan.gov.in"
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisanPaymentFailedFix2026', l: 'Payment Fix' },
          { href: '/articles/pm-kisan-fto-generated-ka-matlab-kya-hai', l: 'FTO Status' },
          { href: '/articles/PmKisanMasterGuide2026', l: 'Master Guide' },
          { href: '/articles/PmKisanEkycOnline2026', l: 'eKYC' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
