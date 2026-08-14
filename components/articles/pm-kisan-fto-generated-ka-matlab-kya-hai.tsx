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
  { slug: 'PmKisanPaymentFailedFix2026', title: 'Payment Failed — 7 Fixes' },
  { slug: 'PmKisanBankAccountChangeProcess', title: 'Bank Account Change' },
];

const FAQS_DATA = [
  { q: 'FTO Generated ke baad paisa kitne din mein aata hai?', a: 'Bank par depend karta hai. SBI-PNB wale kisano ko aksar 8-10 din mein credit mil jata hai, private banks mein 10-14, aur Post Office account walon ko 25 din tak bhi lag sakte hain. 15 din tak intezaar karna bilkul normal hai.' },
  { q: 'FTO Processed aur FTO Generated mein kya fark hai?', a: 'Generated: sarkar ne bank ko order bhej diya. Processed: bank ne us par kaam shuru kar diya — ek step aage. Processed dikhne ke baad credit jaldi aane ki umeed rakh sakte ho.' },
  { q: '"FTO will be generated" ka kya matlab hua?', a: 'Order abhi bana nahi hai, banna baaki hai. Aap beneficiary list mein ho, bas aapki batch ka number nahi aaya. Kuch dino mein yahi status badal kar "FTO Generated" ho jata hai — koi action nahi lena.' },
  { q: 'FTO ka koi number hota hai kya jo main note kar sakoon?', a: 'Nahi. Ye sirf sarkar aur bank ke system ke beech ka internal reference hai — kisan ko alag se allot nahi hota. Credit aane ke baad passbook mein jo UTR dikhta hai, wahi aapka asli proof hai.' },
  { q: 'Bank statement mein "MB FTO" likha aaya — ye kya hai?', a: 'Wahi kist ka credit hai. Kai banks apne system mein PM Kisan payment ko is naam se dikhate hain. Alag transaction samajh kar pareshan mat ho.' },
  { q: 'Bina eKYC ke FTO banta hai kya?', a: '2026 mein nahi. Pehle eKYC complete karni padegi, uske baad hi agli kist ka order banega. OTP se ghar baithe ho jati hai, ya CSC par biometric se.' },
  { q: 'Status mein "Rejected" ya "Returned by Bank" dikhe toh?', a: 'Iska matlab bank ne paisa wapas bhej diya — galat IFSC, naam mismatch, ya band account ki wajah se. Ye apne aap theek nahi hota; Farmer Corner ke correction form se galti sudhaar kar dobara submit karna padta hai.' },
  { q: 'OTP nahi aa raha, status check nahi ho pa raha — kya karoon?', a: 'Registered mobile number purana ya band ho gaya hoga. Nazdeeki CSC par jaakar number update karwa lo, uske baad OTP usi naye number par aayega.' },
  { q: '24vi kist kab tak expect karein?', a: 'October 2026 ke aas-paas — official date abhi announce nahi hui. Jinki eKYC pehle se complete hai, unka order pehli batch mein banega.' },
  { q: 'Helpline par kya-kya ready rakhna chahiye?', a: '155261 ya 1800115526 par call karne se pehle Aadhaar number, enrollment/registration number aur bank account number saamne rakh lo — operator sabse pehle yahi teeno poochta hai. Timing: subah 9 se shaam 6.' },
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
            Relax — ye process ka bilkul normal hissa hai. Is guide mein hum ne sab kuch ek jagah rakh diya hai: ye status asal mein kya batata hai, paisa kab tak pahunchega, aur agar der ho jaye toh kis din kya karna hai.
          </p>
        </div>

        <section className="mb-8">
          <SH>FTO Ka Full Form Kya Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            FTO yaani <strong>Fund Transfer Order</strong> — sarkar ki taraf se bank ko diya gaya likhit aadesh ki kis kisan ke account mein kitni rakam daalni hai. Bas itna hi hai, isme koi complicated cheez nahi.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Portal par "FTO Generated" dikhne ka seedha arth: ye aadesh ban chuka hai aur bank ke paas pahunch gaya hai. Ab agli zimmedari bank ki hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>FTO Generated Ka Matlab Kya Hai? (FTO Meaning in Hindi)</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Cheque wala example lijiye. Aapne kisi ko cheque de diya — paisa dene ka pakka order ho gaya, ab use cash karna bank ka kaam hai. <strong>FTO theek wahi cheez hai, bas digital roop mein.</strong> Portal ke alag-alag status isi safar ke padaav hain:
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
            Sabse zyada ghabrahat <strong>&ldquo;FTO will be generated&rdquo;</strong> dekh kar hoti hai — future tense padh kar lagta hai kuch atak gaya. Asal mein iska seedha tarjuma hai &ldquo;order banaya jayega&rdquo;: aap list mein ho, bas aapki batch ki baari nahi aayi. Kuch dino mein yahi line badal kar &ldquo;Generated&rdquo; ho jati hai, bina aapke kuch kiye.
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
            "Generated" dikh raha hai? Aap step 1 aur 2 ke beech mein ho. "Processed" aa jaye toh bank kaam par lag chuka hai — credit ab door nahi.
          </p>
        </section>

        <section className="mb-8">
          <SH>FTO Number Aur Transaction Ka Matlab Kya Hota Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            "Mera FTO number kya hai, kahan dekhoon?" — seedha jawab: aisa koi number aapke liye hota hi nahi. Ye sirf sarkar ke system aur bank ke beech chalne wala internal reference hai; Aadhaar ya PAN ki tarah kisan ko individually allot nahi hota.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Sarkar ek batch mein lakhs kisano ke liye ek saath order bhejti hai. Aapke haath jo proof aata hai woh credit ke baad ka hai — passbook ya statement mein dikhne wala UTR/reference number. Wahi note karke rakhiye, kaam usi ka hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-3">
            Kuch statements mein <strong>&ldquo;MB FTO&rdquo;</strong> likha aata hai. Ghabraiye mat — kai banks apni entry mein kist ke credit ko isi naam se dikhate hain. Alag transaction nahi hai, wahi paisa hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>&ldquo;FTO is Generated and Payment Confirmation is Pending&rdquo; — Iska Matlab?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Lamba English message dekh kar lagta hai kuch reject ho gaya — <strong>&ldquo;FTO is generated and payment confirmation is pending&rdquo;</strong>. Asal mein ye achhi khabar hai. Line ke do hisse alag-alag baat keh rahe hain:
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-300 dark:border-blue-700 rounded-xl p-5 mb-4">
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-2">
              <li><strong>&ldquo;FTO is generated&rdquo;</strong> — accha hissa. Aapka order ban chuka hai, government ne apna kaam kar diya.</li>
              <li><strong>&ldquo;Payment confirmation is pending&rdquo;</strong> — bank ki taraf se credit hone ki confirmation abhi portal tak wapas nahi aayi.</li>
            </ul>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Short mein: paisa line mein lag chuka hai, sirf confirmation ka message atka hai. Kai baar toh credit aane ke hafton baad tak yahi status dikhta rehta hai. Ek baar Aadhaar seeding aur account active hone ki tasalli kar lein, phir aaram se wait karein.
          </p>
        </section>

        <section className="mb-8">
          <SH>Land Seeding Kya Hoti Hai Aur Iska Status Kaise Check Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Naye registration karne walon ko ye term sabse zyada uljhaati hai. <strong>Land seeding</strong> yaani aapki zameen ke revenue records — khasra number, khatauni — ko yojana ke account ke saath digitally jodna. Jab tak ye linking poori nahi hoti, application aage badhti hi nahi.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Status dekhne ke liye:
          </p>
          <StepList>
            <SI n={1}>pmkisan.gov.in par Farmers Corner mein jaayein</SI>
            <SI n={2}>Registration number ya Aadhaar number daalein</SI>
            <SI n={3}>Status page par land seeding wala row alag se dikhega — "Seeded" ya "Not Seeded"</SI>
          </StepList>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4 mb-3">
            "Not Seeded" dikhe toh Patwari, Lekhpal, ya taluk revenue office jaakar form jama karna hoga. Ye kaam adhiktar states mein offline hi hota hai, kyunki verification zameen ke asli record se milaan karke kiya jata hai — online self-service abhi har jagah available nahi.
          </p>
        </section>

        <section className="mb-8">
          <SH>FTO Ke Baad Kitne Din Mein Paisa Aata Hai?</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Iska koi ek fixed jawab nahi — har bank apni speed se kaam karta hai. Neeche kisano ke asal experience ke hisaab se andaaza diya hai:
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
            Order ban jaane ke baad bhi payment fail ho sakti hai. Aksar wajah in paanch mein se ek nikalti hai:
          </p>
          <ul className="list-disc list-inside text-sm text-[var(--color-text-muted)] space-y-2 mb-4">
            <li>Bank account band ya inactive ho gaya hai</li>
            <li>Aadhaar seeding bank ke saath nahi hui</li>
            <li>Naam mein spelling registration aur bank record mein alag hai</li>
            <li>IFSC code galat register ho gaya tha</li>
            <li>Account 6 mahine se dormant pada hai</li>
          </ul>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Bank jaakar seeding aur naam ki spelling — dono ek saath verify karwa lein; zyadatar cases wahin suljh jaate hain. Galti theek hote hi payment agli batch mein dobara try hoti hai, alag se apply nahi karna padta.
          </p>
        </section>

        <section className="mb-8">
          <SH>24vi Kist Kab Aayegi? (PM Kisan 24vi Kist FTO Date)</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            October 2026 ke aas-paas expected hai — exact date ka official elaan abhi baaki hai. September ke aakhri hafton mein orders banne shuru ho sakte hain. eKYC ka timing yahan sab kuch decide karta hai:
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
            eKYC abhi tak pending hai? Aaj hi karwa lein — OTP wali ghar baithe ho jati hai. Warna seedha Feb 2027 tak ka intezaar hai.
          </DB>
        </section>

        <section className="mb-8">
          <SH>Mobile Se FTO Status Check Kaise Karein?</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Paanch chhote steps, do minute ka kaam:
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
            CSC se nahi, khud portal se registration kiya tha? Toh aapke liye alag section hai — <strong>Status of Self Registered Farmer</strong>.
          </p>
          <StepList>
            <SI n={1}>pmkisan.gov.in par "Status of Self Registered Farmer" section dhoondein</SI>
            <SI n={2}>Registration number daalein jo aapko form bharte waqt mila tha</SI>
            <SI n={3}>Status dikhega — approved, pending verification, ya document ki kami</SI>
          </StepList>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-3">
            Document ki kami dikhe toh state ke agriculture department portal se upload kar dein. Approval mein 2-6 hafte lagte hain — state par depend karta hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>CSC Se Registration Karwane Ki Fees Kitni Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Sarkari guidelines mein Common Service Centre par is registration ki koi fee prescribed nahi hai — service <strong>free honi chahiye</strong>.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Zameeni sachchai thodi alag hai: kuch operators printing ya "seva shulk" ke naam par ₹20-50 le lete hain, jo unauthorized hai. Zyada maange toh mana kar dein, ya district agriculture office mein shikayat darj karayein.
          </p>
        </section>

        <section className="mb-8">
          <SH>15 Din Ho Gaye Par Paisa Nahi Aaya? (FTO Generated But Money Not Received)</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Pandrah din nikal gaye aur account khaali hai — ab haath par haath rakh kar baithne ke bajaye is order mein check karte jaayein:
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
            Upar ke saare steps ho gaye, helpline bhi call kar li, phir bhi mahina beet gaya? Ab ye aam delay nahi hai — kahin na kahin order reject ya return ho chuka hoga. Yahan se raasta formal ho jaata hai:
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
            Har raajya ki machinery apni raftaar se chalti hai — isi liye ek hi din release hui kist UP mein hafte bhar mein aa jati hai aur Bengal mein mahina lag jata hai:
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
            Ek line mein poori baat: order ban gaya = paisa sanction ho gaya, ab sirf bank transfer baaki hai. Din 1 se 15 tak sirf intezaar karein — kuch karne ki zaroorat nahi. Din 15 ke baad bank visit (seeding + NPCI check), aur din 30 ke baad grievance ya nodal officer. Bas yahi poora roadmap hai.
          </p>
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
        <AuthorBox modified={MODIFIED} bioKey="pm-kisan-fto-generated-ka-matlab-kya-hai" />
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
