'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import CountdownModal from '@/components/CountdownModal';
import type { ArticleMeta } from '@/lib/articles-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const PUBLISHED = '2025-12-26T11:27:11+05:30';
const MODIFIED = '2026-08-14T10:00:00+05:30';

const RELATED = [
  { slug: 'PmKisan24viKist2026', title: '24vi Kist Status' },
  { slug: 'PmKisanPaymentFailedFix2026', title: 'Payment Failed — 7 Fixes' },
  { slug: 'PmKisanBankAccountChangeProcess', title: 'Bank Account Change' },
];

const FAQS_DATA = [
  { q: 'Status me Generated dikhne ke baad paisa kitne din me aata hai?', a: 'Iska koi official fixed timeline nahi hai, sarkar ne kabhi announce nahi kiya ki kitne din lagenge. Aam taur par order banne ke baad DBT se paisa kuch hi dino me aa jata hai. Haan, 15 din se upar ho jayein to phir wait karne ke bajay Aadhaar seeding aur account ki jaanch karwani chahiye.' },
  { q: 'Processed aur Generated me kya fark hai?', a: 'Generated: sarkar ne bank ko payment ka order bhej diya. Processed: bank ne us order par kaam shuru kar diya, yaani ek step aage. Processed dikhne ke baad credit ki umeed jaldi rakh sakte ho.' },
  { q: '"Will be generated" ka kya matlab hua?', a: 'Order abhi bana nahi, banna baki hai. Aap beneficiary list me ho, bas aapki batch ki bari nahi aayi. Kuch dino me ye khud hi "Generated" ho jata hai, aapko kuch nahi karna.' },
  { q: 'Iska koi number hota hai kya jo main note kar sakoon?', a: 'Kisan ke liye alag se nahi hota. Ye sarkar aur bank ke system ke beech ka internal reference hai. Credit aane ke baad passbook ya statement me jo UTR number dikhta hai, wahi aapka asli proof hai. Usi ko sambhal kar rakho.' },
  { q: 'Bank statement me "MB FTO" jaisa kuch likha aaya, ye kya hai?', a: 'Wahi kist ka credit hai. Kuch banks apne system me PM Kisan ki DBT entry ko is tarah ke naam se dikhate hain. Alag transaction samajh kar pareshan mat ho. Amount ₹2,000 hai to wahi kist hai.' },
  { q: 'Bina eKYC ke order banta hai kya?', a: 'Nahi. Sarkar ne eKYC mandatory kar rakhi hai, bina iske kist rok di jati hai. OTP wali eKYC portal ya app se ghar baithe ho jati hai; mobile number Aadhaar se link nahi hai to CSC par biometric se hoti hai.' },
  { q: 'Status me "Rejected" ya "Returned by Bank" dikhe toh?', a: 'Iska matlab bank ne paisa wapas bhej diya, aksar galat IFSC, naam mismatch, ya band account ki wajah se. Ye apne aap theek nahi hota; portal ke correction option se galti sudhaar kar dobara process karwana padta hai.' },
  { q: 'OTP nahi aa raha, kya karoon?', a: 'Registered mobile number purana ya band ho gaya hoga. Nazdeeki CSC par jaakar number update karwa lo. Uske baad OTP naye number par aayega.' },
  { q: '24vi kist kab tak expect karein?', a: '23vi kist 20 June 2026 ko release hui thi. Scheme har 4 mahine me kist deti hai, is hisaab se agli kist October–November 2026 ke aas-paas aa sakti hai. Official date sirf pmkisan.gov.in ya PIB ke elaan se hi pakki hoti hai.' },
  { q: 'Helpline par kya-kya ready rakhna chahiye?', a: 'Official helpline 155261 ya 011-24300606 par call karne se pehle Aadhaar number, registration number aur bank account details saamne rakh lo. Operator sabse pehle yahi poochta hai.' },
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
            <span>8 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/pm-kisan-fto-generated-featured-image-kisanstatus.webp'}
            alt="Fund Transfer Order status samjhane wali guide — PM Kisan payment 2026"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Status Generated = Paisa Sanction Ho Chuka Hai
          </p>
        </div>

        <div className="my-6 p-5 bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-500 dark:border-amber-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-amber-800 dark:text-amber-300 mb-2">Status Dekh Ke Ghabra Gaye?</h2>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed mb-2">
            <em>"FTO dikh raha hai par paisa nahi aaya. Ye kya scene hai?"</em>
          </p>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
            Relax bhai, ye process ka normal hissa hai. Is guide me sab ek jagah likha hai: ye status kya batata hai, aage kya hota hai, aur agar der ho jaye to kis din kya karna hai. Jahan bhi koi number ya date likhi hai, wahan official source bhi diya hai. Andaze se kuch nahi likha. Aaram se padhiye.
          </p>
        </div>

        <section className="mb-8">
          <SH>Pehle Full Form Samajh Lo</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            FTO yaani <strong>Fund Transfer Order</strong>. Sarkar ki taraf se bank ko diya gaya aadesh ki kis kisan ke account me kitni rakam dalni hai. Bas itna hi, complicated kuch bhi nahi.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Portal pe "Generated" dikhne ka arth: ye aadesh ban chuka hai aur bank ke pas pahunch gaya hai. Ab agli zimmedari bank ki hai, aapki nahi.
          </p>
        </section>

        <section className="mb-8">
          <SH>FTO Generated Ka Matlab Kya Hai?</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Cheque wala example lijiye. Aapne kisi ko cheque de diya, paisa dene ka pakka order ho gya. Ab use cash karna bank ka kaam hai. <strong>Ye bhi theek wahi cheez hai, bas digital roop me.</strong> Portal ke alag-alag status isi safar ke padav hain:
          </p>

          <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-700 rounded-xl p-5 mb-6">
            <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
              <li><strong>FTO will be generated</strong> — order abhi bana hi nahi, list mein naam chadhne ka intezaar hai</li>
              <li><strong>FTO Generated</strong> — government ne order bhej diya</li>
              <li><strong>FTO Processed</strong> — bank ne order par kaam shuru kar diya</li>
              <li><strong>Credit Release Pending</strong> — paisa nikalne ki final stage chal rahi hai</li>
              <li><strong>Payment Success / Credited</strong> — paisa account me aa gaya</li>
            </ul>
          </div>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Sabse zyada ghabrahat <strong>&ldquo;will be generated&rdquo;</strong> wali line dekh ke hoti hai. Future tense padh ke lagta hai kuch atak gya, jabki iska tarjuma itna sa hai: &ldquo;order banaya jayega&rdquo;. Aap list me ho, bas aapki batch ki bari nahi aayi. Sarkar ek saath crores kisano ke orders batch-wise banati hai, isliye sabke status ek din me nahi badalte. Kuch dino me yahi line khud badal jati hai, aapke bina kuch kiye.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Poora safar teen padaav ka hai:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl text-center">
              <p className="font-black text-blue-800 dark:text-blue-300 text-sm">Step 1</p>
              <p className="text-xs text-blue-700 dark:text-blue-400 mt-1">Order ban gaya (Generated)</p>
            </div>
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl text-center">
              <p className="font-black text-yellow-800 dark:text-yellow-300 text-sm">Step 2</p>
              <p className="text-xs text-yellow-700 dark:text-yellow-400 mt-1">Bank process kar raha (Processed)</p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center">
              <p className="font-black text-green-800 dark:text-green-300 text-sm">Step 3</p>
              <p className="text-xs text-green-700 dark:text-green-400 mt-1">Paisa account mein aa gaya</p>
            </div>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Abhi "Generated" pe atke ho? To aap step 1 aur 2 ke beech me ho. "Processed" aa jaye to samjho bank kaam pe lag chuka hai, paisa ab door nahi.
          </p>
        </section>

        <section className="mb-8">
          <SH>Iska Koi Number Bhi Hota Hai Kya?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            "Mera FTO number kya hai, kahan dekhu?" Jawab thoda ajeeb lagega: aisa koi number aapke liye hota hi nahi. Ye sirf sarkar ke system aur bank ke beech chalne wala internal reference hai. Aadhaar ya PAN ki tarah kisan ko alag se allot nahi hota.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Sarkar ek batch me lakhon kisano ke liye ek sath order bhejti hai. Aapke hath jo proof aata hai wo credit ke baad ka hai: passbook ya statement me dikhne wala UTR number. Wahi note karke rakhiye, kaam usi ka hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-3">
            Kuch statements me <strong>&ldquo;MB FTO&rdquo;</strong> jaisi entry dikh jati hai. Ghabraiye mat, kuch banks kist ke credit ko apne system me isi naam se dikhate hain. Alag transaction nahi, wahi paisa hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>&ldquo;Payment Confirmation is Pending&rdquo; Wali Line Ka Matlab?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Lamba English message dekh ke lagta hai kuch reject ho gya: <strong>&ldquo;FTO is generated and payment confirmation is pending&rdquo;</strong>. Jabki ye achi khabar hai. Line ke do hisse alag-alag baat keh rahe hain:
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-300 dark:border-blue-700 rounded-xl p-5 mb-4">
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-2">
              <li><strong>&ldquo;FTO is generated&rdquo;</strong> — accha hissa. Aapka order ban chuka hai, government ne apna kaam kar diya.</li>
              <li><strong>&ldquo;Payment confirmation is pending&rdquo;</strong> — bank ki taraf se credit hone ki confirmation abhi portal tak wapas nahi aayi.</li>
            </ul>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Short me: paisa line me lag chuka hai, sirf confirmation ka message atka hai. Kai baar paisa account me aa jane ke baad bhi portal par yahi purana status dikhta rehta hai. Isliye pehle apni passbook ya bank app dekho. Ek baar Aadhaar seeding aur account active hone ki tasalli kar lo, phir aaram se wait karo.
          </p>
        </section>

        <section className="mb-8">
          <SH>Kist Kab-Kab Aati Hai? (Verified Record)</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Scheme ka niyam saaf hai: har eligible kisan parivar ko saal ke ₹6,000, teen barabar kisto me. Yaani ₹2,000 har 4 mahine me, DBT se account me. Pichli kisten kab release hui, ye raha official record:
          </p>

          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Kist</th>
                  <th className="p-3 text-left">Release Date</th>
                  <th className="p-3 text-left">Kitna Paisa, Kitne Kisan</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['21vi', '19 November 2025', '₹18,000 crore+ · 9 crore+ kisan (Coimbatore se release)'],
                  ['22vi', '13 March 2026', '₹18,640 crore · ~9.32 crore kisan (Guwahati se release)'],
                  ['23vi', '20 June 2026', '₹18,880 crore · 9.44 crore+ kisan (Hooghly, WB se release)'],
                ].map(([kist, date, detail], i) => (
                  <tr key={kist} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{kist}</td>
                    <td className="p-3 border-b border-[var(--color-border)] font-bold text-xs text-green-700 dark:text-green-400">{date}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[var(--color-text-muted)] mb-4">
            Source: PIB (Press Information Bureau) press releases aur Ministry of Agriculture &amp; Farmers Welfare ke official announcements —{' '}
            <a href="https://www.ndtv.com/india-news/pm-modi-releases-pm-kisan-instalment-worth-rs-18-880-crore-in-bengal-11664698" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--color-primary)]">23vi kist ki PIB-based report yahan padhein</a>.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            <strong>24vi kist kab?</strong> Official date abhi announce nahi hui. 4-mahine ke pattern ke hisaab se October–November 2026 ke aas-paas expect ki ja sakti hai. Lekin pakki date sirf pmkisan.gov.in ya PIB ke elaan se aati hai, kisi YouTube video ya WhatsApp forward se nahi. Detail ke liye padhein:{' '}
            <Link href="/articles/PmKisan24viKist2026" className="underline font-semibold text-[var(--color-primary)] hover:opacity-80">24vi Kist — Latest Update</Link>.
          </p>
          <DB>
            eKYC abhi tak pending hai? Aaj hi karwa lo, bina iske kist rok di jati hai. OTP wali to ghar baithe ho jati hai. Poora process:{' '}
            <Link href="/articles/PmKisanEkycOnline2026" className="underline font-bold">eKYC Online Guide</Link>.
          </DB>
        </section>

        <section className="mb-8">
          <SH>Order Banne Ke Baad Kitne Din Mein Paisa Aata Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Seedhi baat: <strong>iska koi official timeline sarkar ne announce nahi kiya hai.</strong> Internet par jo "SBI me 8 din, Post Office me 25 din" type ke pakke numbers milte hain, unka koi sarkari source nahi hota. Isliye hum aise numbers likhenge hi nahi.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Jo pakka hai wo ye: payment DBT (Direct Benefit Transfer) se hoti hai, jo Aadhaar-linked account me seedha credit karta hai. Order banne ke baad zyada tar kisano ko paisa kuch hi dino me mil jata hai. Alag-alag banks apni internal processing apni raftar se karte hain, isliye ek hi gaon me kisi ko pehle aur kisi ko baad me credit aana bilkul normal hai.
          </p>
          <IB>
            Practical rule: order banne ke baad 15 din tak intzaar karo, kuch karne ki zarurat nahi. Uske baad bhi credit na aaye, to neeche wala checklist follow karo.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Payment Fail Kyun Hoti Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Order ban jane ke baad bhi payment fail ho sakti hai. Aksar wajah in panch me se koi ek nikalti hai:
          </p>
          <ul className="list-disc list-inside text-sm text-[var(--color-text-muted)] space-y-2 mb-4">
            <li>Bank account band ya inactive ho gaya hai</li>
            <li>Aadhaar seeding bank ke saath nahi hui (DBT ke liye NPCI mapping zaroori hai)</li>
            <li>Naam ki spelling registration aur bank record me alag hai</li>
            <li>IFSC code galat register ho gaya tha</li>
            <li>Account lambe samay se istemaal nahi hua aur inoperative ho gaya</li>
          </ul>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Bank jakar seeding aur naam ki spelling, dono ek sath verify karwa lo. Zyadatar cases wahi sulajh jate hain. Har failure reason ka step-by-step ilaaj alag article me likha hai:{' '}
            <Link href="/articles/PmKisanPaymentFailedFix2026" className="underline font-semibold text-[var(--color-primary)] hover:opacity-80">Payment Failed — 7 Fixes</Link>.
          </p>
        </section>

        <section className="mb-8">
          <SH>Account "Dormant" Ho Gaya — Asli Niyam Kya Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Is par bahut galat jaankari failai jati hai, isliye RBI ka asli niyam jaan lo: <strong>savings ya current account tab inoperative (dormant) hota hai jab usme 2 saal tak aapki taraf se koi transaction na ho.</strong> 6 mahine me nahi, jaisa kai jagah likha milta hai. 12 mahine bina transaction ke bank aapko warning notice bhejta hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Reactivate karne ke liye sirf paisa daalna kaafi nahi. Branch jakar <strong>KYC update + reactivation request</strong> deni hoti hai (Aadhaar/ID ke saath). RBI ke updated niyam ke mutabik ye kaam ab kisi bhi branch se ho sakta hai, home branch zaroori nahi. Reactivation free hai, bank iske paise nahi le sakta.
          </p>
          <p className="text-xs text-[var(--color-text-muted)]">
            Source: RBI ke inoperative accounts guidelines —{' '}
            <a href="https://www.livemint.com/money/personal-finance/bank-account-dormant-rbi-savings-transactions-debit-freeze-shift-jobs-unclaimed-deposits-kyc-11757999824792.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--color-primary)]">detail report yahan padhein</a>.
          </p>
        </section>

        <section className="mb-8">
          <SH>Status Page Par Kya-Kya Dikhta Hai — Har Row Ka Matlab</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Portal ka status page pehli baar kholne par thoda bhara-bhara lagta hai. Bahut saari rows, English labels, aur pata nahi chalta kaun si line important hai. Kaam ki sirf 4-5 rows hain:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Row</th>
                  <th className="p-3 text-left">Kya Batata Hai</th>
                  <th className="p-3 text-left">Kya Hona Chahiye</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['eKYC Status', 'Aadhaar verification hui ya nahi', '"Yes" / Completed'],
                  ['Land Seeding', 'Zameen ke record account se jude ya nahi', '"Yes" / Seeded'],
                  ['Aadhaar-Bank Seeding', 'DBT ke liye account taiyar hai ya nahi', '"Yes"'],
                  ['Latest Installment', 'Aakhri kist ka payment status', 'Success / Credited'],
                  ['Eligibility Status', 'Scheme me aap active ho ya nahi', 'Eligible'],
                ].map(([row, kya, hona], i) => (
                  <tr key={row} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{row}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{kya}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs font-bold text-green-700 dark:text-green-400">{hona}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Simple formula: in teen seeding wali rows me se koi bhi "No" hai, to payment wahi atkegi, chahe order ban bhi jaye. Pehle "No" ko "Yes" karwao, phir kist apne aap agli batch me aa jati hai. Teeno "Yes" hain aur phir bhi paisa nahi aaya? Tab neeche wala 15-din checklist kaam aayega.
          </p>
        </section>

        <section className="mb-8">
          <SH>Savdhaan: Status Ke Naam Par Fraud Bhi Chalta Hai</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Jab kist ka time nazdeek aata hai, fraud calls aur fake messages bhi badh jate hain. Kisi ne call karke kaha "aapka payment atka hua hai, OTP batao to release kar denge"? <strong>Ye 100% fraud hai.</strong> Ye chaar batein yaad rakho:
          </p>
          <ul className="list-disc list-inside text-sm text-[var(--color-text-muted)] space-y-2 mb-4">
            <li>Sarkar ya bank kabhi phone karke <strong>OTP, PIN, ya password nahi maangte.</strong> Kabhi nahi.</li>
            <li>Kist release karwane ke liye <strong>koi fees nahi lagti.</strong> Jo paise maange, wo thug hai.</li>
            <li>WhatsApp par aaye "status dekhne ka link" par click mat karo. Sahi jagah sirf <strong>pmkisan.gov.in</strong> hai.</li>
            <li>APK file download karwa ke "PM Kisan app" bolne wale messages fake hote hain. App sirf Google Play Store se lo.</li>
          </ul>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Aisi call ya message aaye to cyber crime helpline <strong>1930</strong> par report karo ya cybercrime.gov.in par shikayat darj karo. Aur ghar me jo bade-buzurg scheme ke beneficiary hain, unhe ye baat zaroor samjha do. Fraud ka sabse zyada shikaar wahi hote hain.
          </p>
        </section>

        <section className="mb-8">
          <SH>Mobile Se Status Check Kaise Karein?</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Panch chote steps hain, mushkil se do minute ka kaam:
          </p>

          <StepList>
            <SI n={1}><strong>pmkisan.gov.in</strong> kholein</SI>
            <SI n={2}>Farmers Corner mein jaayein → <strong>Know Your Status</strong> par click karein</SI>
            <SI n={3}>Registration number ya Aadhaar number daalein (ek digit bhi galat nahi hona chahiye)</SI>
            <SI n={4}>Registered mobile par aaya OTP daalein → <strong>Get Data</strong> dabayein</SI>
            <SI n={5}>Table me payment status ke saath eKYC aur land seeding ka status bhi dikhega</SI>
          </StepList>

          <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 rounded-xl">
            <p className="text-sm font-bold text-green-800 dark:text-green-300 mb-2">
              Abhi Apna Status Check Karein
            </p>
            <p className="text-xs text-green-700 dark:text-green-400 mb-3">
              Official portal par jaakar apna payment status check karein. Neeche ke button se 10 second mein portal khulta hai.
            </p>
            <button
              onClick={() => handleOfficialLink(
                'PM Kisan Beneficiary Status',
                'pmkisan.gov.in khul raha hai, ruk jao thoda...',
                'https://pmkisan.gov.in/BeneficiaryStatus.aspx'
              )}
              className="w-full px-4 py-3 bg-green-600 hover:bg-green-700 text-white text-sm font-bold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Status Dekhne Ke Liye Yahan Dabayein
            </button>
          </div>

          <WB>
            Kuch common dikkatein: OTP na aaye toh mobile number CSC se update karwayein (<Link href="/articles/PmKisanMobileNumberChangeUpdate" className="underline font-bold">number change guide</Link>). "Record Not Found" aane ka matlab number galat daala gaya ya enrollment hi nahi hui. Server dheera chale toh thodi der baad try karein.
          </WB>
        </section>

        <section className="mb-8">
          <SH>Ye Topics Alag Guides Me Detail Se Cover Hain</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Kuch sawal is topic se jude hote hain par unki apni poori kahani hai. Unke liye alag detailed guides likhi hain, wahan step-by-step sab milega:
          </p>
          <ul className="list-disc list-inside text-sm text-[var(--color-text-muted)] space-y-2">
            <li><strong>Land seeding "Not Seeded" dikha raha hai?</strong> — Form, documents aur process:{' '}
              <Link href="/articles/PmKisanLandSeedingForm" className="underline font-semibold text-[var(--color-primary)] hover:opacity-80">Land Seeding Form Guide</Link></li>
            <li><strong>Khud portal se registration kiya tha?</strong> — Status check ka alag tareeka:{' '}
              <Link href="/articles/pm-kisan-self-registered-status-check" className="underline font-semibold text-[var(--color-primary)] hover:opacity-80">Self Registered Status Check</Link></li>
            <li><strong>CSC wale ne registration ke paise mange?</strong> — Kya official charge hai aur kya nahi:{' '}
              <Link href="/articles/PmKisanCscRegistrationCharges" className="underline font-semibold text-[var(--color-primary)] hover:opacity-80">CSC Registration Charges</Link></li>
            <li><strong>Naam ya IFSC galat hai?</strong> — Sudhaarne ka process:{' '}
              <Link href="/articles/PmKisanCorrectionForm2026" className="underline font-semibold text-[var(--color-primary)] hover:opacity-80">Correction Form Guide</Link></li>
          </ul>
        </section>

        <section className="mb-8">
          <SH>15 Din Ho Gaye Par Paisa Nahi Aaya?</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Pandrah din nikal gaye aur account khali hai? Ab hath pe hath rakh ke baithne ke bajay is order me aage badho:
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-red-500 dark:border-red-700 pl-4 py-1">
              <h3 className="font-black text-[var(--color-text)] text-sm mb-1">Aadhaar Seeding Check Karein</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Sabse pehle bank jaakar counter par Aadhaar seeding ki jaankari poochein. Yahi sabse common reason hai jab paisa atak jata hai. "Not Seeded" nikle toh usi din karwa lein.</p>
            </div>
            <div className="border-l-4 border-orange-500 dark:border-orange-700 pl-4 py-1">
              <h3 className="font-black text-[var(--color-text)] text-sm mb-1">NPCI Mapping</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Bank manager se poochein ki DBT ke liye NPCI mapping active hai ya nahi. Aadhaar bank se linked hone ke bawajood NPCI mapping alag cheez hai, dono verify karwayein.</p>
            </div>
            <div className="border-l-4 border-yellow-500 dark:border-yellow-700 pl-4 py-1">
              <h3 className="font-black text-[var(--color-text)] text-sm mb-1">Account Inoperative Toh Nahi Ho Gaya?</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Agar account me 2 saal se koi transaction nahi hua tha, to wo RBI niyam ke tahat inoperative ho sakta hai aur credit ruk jata hai. Branch jakar KYC update ke saath reactivation request dein. Upar wale section me poora niyam likha hai.</p>
            </div>
            <div className="border-l-4 border-blue-500 dark:border-blue-700 pl-4 py-1">
              <h3 className="font-black text-[var(--color-text)] text-sm mb-1">Helpline Try Karein</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Official helpline: <strong>155261</strong> ya <strong>011-24300606</strong>. Call karte waqt Aadhaar number, registration number aur bank account details saath rakhein, sawal karte hi maangenge.</p>
            </div>
            <div className="border-l-4 border-green-500 dark:border-green-700 pl-4 py-1">
              <h3 className="font-black text-[var(--color-text)] text-sm mb-1">Kuch Na Ho Toh CSC Jaayein</h3>
              <p className="text-xs text-[var(--color-text-muted)]">CSC operator poora case dekh kar portal par complaint register kar sakta hai. Aapke saamne, aapke documents ke saath.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>30 Din Ho Gaye Aur Ab Bhi Kuch Nahi Hua? Yahan Se Ab Escalate Karo</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Upar ke sare steps ho gaye, helpline bhi call kar li, phir bhi mahina beet gya? Ab ye aam delay nahi. Ho sakta hai order reject ya return ho chuka ho. Yahan se rasta formal ho jata hai:
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-red-600 dark:border-red-700 pl-4 py-1">
              <h3 className="font-black text-[var(--color-text)] text-sm mb-1">Sabse Pehle: Order Reject Toh Nahi Hua?</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Status page par dhyan se padhein, kahin "Rejected" ya "Returned by Bank" toh nahi likha. Ye do alfaaz asaani se miss ho jaate hain. Agar likha hai, toh bank ne kisi galti ki wajah se paisa wapas bhej diya, aur ye apne aap theek nahi hota. Aage kya karna hai:{' '}
                <Link href="/articles/PmKisanRejectedStatusReApplyGuide" className="underline font-semibold text-[var(--color-primary)] hover:opacity-80">Rejected Status Guide</Link></p>
            </div>
            <div className="border-l-4 border-orange-600 dark:border-orange-700 pl-4 py-1">
              <h3 className="font-black text-[var(--color-text)] text-sm mb-1">Correction Karwayein</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Reject ki wajah galat naam ya IFSC hai toh correction karwana padega. Process{' '}
                <Link href="/articles/PmKisanCorrectionForm2026" className="underline font-semibold text-[var(--color-primary)] hover:opacity-80">is guide me</Link> step-by-step likha hai.</p>
            </div>
            <div className="border-l-4 border-yellow-600 dark:border-yellow-700 pl-4 py-1">
              <h3 className="font-black text-[var(--color-text)] text-sm mb-1">Likhit Grievance Darj Karein</h3>
              <p className="text-xs text-[var(--color-text-muted)]">pmkisan.gov.in par Help Desk / Grievance section hai. Registration number aur problem likh kar submit karein. Badle me ek ticket number milega jise baad mein track kar sakte hain.</p>
            </div>
            <div className="border-l-4 border-green-600 dark:border-green-700 pl-4 py-1">
              <h3 className="font-black text-[var(--color-text)] text-sm mb-1">District/State Nodal Officer Se Milein</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Ye sabse effective step hai 30 din ke baad. Apne state ke nodal officer ka contact yahan milega:{' '}
                <Link href="/articles/PmKisanStateNodalOfficerList" className="underline font-semibold text-[var(--color-primary)] hover:opacity-80">State Nodal Officer List</Link></p>
            </div>
          </div>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/pm-kisan-fto-faq-kisanstatus.webp"
            alt="PM Kisan payment status se jude aam sawal aur unke jawab"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aam Confusions — Saaf Jawab
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kisan Payment FAQ 2026" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Order Banne Ke Baad Ki Timeline</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Ek line me puri baat: order ban gya = paisa sanction ho gya, ab bank transfer baki hai. Din 1 se 15 tak intzaar, kuch karne ki zarurat nahi. Din 15 ke baad bank visit (seeding + NPCI), aur din 30 ke baad grievance ya nodal officer. Bas yahi pura roadmap hai.
          </p>
        </div>

        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 dark:border-blue-700 border-l-[6px] rounded-xl">
          <h3 className="text-base font-black text-blue-800 dark:text-blue-300 mb-2">
            PM Kisan Official Portal
          </h3>
          <p className="text-xs text-blue-700 dark:text-blue-400 mb-3">
            Payment status, land seeding, ya beneficiary list — teeno ki jaankari isi ek portal par mil jayegi. 10 second baad khulega.
          </p>
          <button
            onClick={() => handleOfficialLink(
              'PM Kisan Official Portal',
              'pmkisan.gov.in khul raha hai, ruk jao thoda...',
              'https://pmkisan.gov.in/BeneficiaryStatus.aspx'
            )}
            className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-105"
          >
            PM Kisan Portal Kholein →
          </button>
        </div>

        <CalcBanner
          title="Apni Kist Track Karein"
          desc="Kitni kist aayi, payment kahan tak pahuncha, arrears kitne — sab jaanein"
          primaryCta={{ href: '/calculator/installment-tracker', label: 'Tracker Kholein →' }}
          secondaryCta={{ href: '/calculator/pm-kisan-benefit', label: 'Benefit Calculator' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} bioKey="pm-kisan-fto-generated-ka-matlab-kya-hai" />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisan24viKist2026', l: '24vi Kist' },
          { href: '/articles/PmKisanMasterGuide2026', l: 'Master Guide' },
          { href: '/articles/PmKisanBeneficiaryList2026', l: 'Beneficiary List' },
        ]} />
        <Disclaimer k="pm-kisan-fto-generated-ka-matlab-kya-hai" />
      </div>
    </>
  );
}
