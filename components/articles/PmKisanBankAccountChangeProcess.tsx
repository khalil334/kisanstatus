'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-07-10T08:00:00+05:30';
const MODIFIED = '2026-07-10T08:00:00+05:30';

const RELATED = [
  { slug: 'PmKisanPaymentFailedFix2026', title: 'Payment Failed Fix', emoji: '💸' },
  { slug: 'pm-kisan-fto-generated-ka-matlab-kya-hai', title: 'FTO Status Guide', emoji: '' },
  { slug: 'PmKisanMasterGuide2026', title: 'Master Guide', emoji: '📚' },
  { slug: 'PmKisanEkycOnline2026', title: 'eKYC Guide', emoji: '🔐' },
];

const FAQS_DATA = [
  {
    q: 'Kya main khud online bank account change kar sakta hoon?',
    a: 'Nahi bhai, PM Kisan portal par direct "Edit Bank Account" ka option nahi hai. Aapko CSC center ya BAO office jana padega.',
  },
  {
    q: 'Bank account change karne mein kitna time lagta hai?',
    a: 'CSC se karwane par 15 din, aur BAO office se karwane par 30-45 din lag sakte hain. Jab tak update nahi hota, paisa purane account mein hi jayega.',
  },
  {
    q: 'Agar purana account band ho gaya toh?',
    a: 'Turant naya account link karo. Paisa fail ho jayega, phir correction form se fix hoga. Account band hone se pehle hi change kar lena chahiye.',
  },
  {
    q: 'Naya bank account kis naam par hona chahiye?',
    a: 'Bilkul usi naam par jo Aadhaar card aur PM Kisan registration mein hai. Naam mein ek letter bhi alag hua toh payment fail ho jayegi.',
  },
  {
    q: 'CSC wala kitne paise lega?',
    a: 'Sarkari rate ₹15 se ₹30. Lekin kuch log ₹50-100 bhi maang lete hain. Aap negotiate kar sakte ho.',
  },
  {
    q: 'Kya main kisi aur ke bank account mein paisa mangwa sakta hoon?',
    a: 'Bilkul nahi. PM Kisan ka paisa sirf usi ke account mein aayega jiska naam registration mein hai. Wife ya bhai ka account use nahi kar sakte.',
  },
  {
    q: 'IFSC code galat daal diya toh?',
    a: 'Agar IFSC galat hai toh payment fail ho jayegi. CSC jakar IFSC update karwao. Branch merger ki wajah se bhi IFSC change ho jata hai.',
  },
  {
    q: 'Bank account change ke baad status kaise check karein?',
    a: '15 din baad pmkisan.gov.in par jakar "Beneficiary Status" mein check karo. Naya account number dikhai dena chahiye.',
  },
];

export default function PmKisanBankAccountChangeProcess({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Bank Account Change</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Complete Process Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Bank Account Change Process: Naya Account Kaise Jodein?
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span> Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 16 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        {/* Hero Image */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
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

        {/* Introduction */}
        <section className="mb-8">
          <SH>Purana Account Band Ho Gaya? Paisa Kahan Aayega?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Bhai, sabse badi dikkat tab hoti hai jab PM Kisan ka paisa us account mein ja raha hai jo band ho chuka hai. Ya phir branch merge ho gayi aur IFSC code change ho gaya. Aise mein payment fail ho jaati hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Status mein <Link href="/articles/pm-kisan-fto-generated-ka-matlab-kya-hai" className="underline text-green-700 dark:text-green-400">FTO Generated</Link> dikhega lekin paisa account mein nahi aayega. Bank wale bolenge "Transaction Rejected".
          </p>
          
          <Image
            src="/images/articles/pm-kisan-bank-account-change/bank-passbook-update.webp"
            alt="Updated bank passbook with new IFSC code"
            width={800}
            height={450}
            className="w-full rounded-xl my-4"
          />

          <DB>
            <strong>Real Story:</strong>
            <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">
              Aligarh ke Vinod ji ka purana account dormant ho gaya tha kyunki 2 saal se koi transaction nahi hua tha. PM Kisan ki 3 kist fail ho gayi. Wo pareshan ho gaye. Phir unhone naya account khola, CSC se PM Kisan mein update karwaya, aur bank mein NPCI seeding karwayi. Agli kist seedhe naye account mein aa gayi.
            </p>
          </DB>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Iska ek hi hal hai — naya bank account link karna. Chalo dekhte hain step-by-step kaise karna hai. <Link href="/articles/PmKisanPaymentFailedFix2026" className="underline text-green-700 dark:text-green-400">Payment failed</Link> ki problem bhi isi se solve hogi.
          </p>
        </section>

        {/* SECTION 1: Why Change Needed */}
        <section className="mb-8">
          <SH>Bank Account Kyun Change Karna Padta Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bhai, har kisi ko account change nahi karna padta. Lekin in situations mein zaroori hai:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: '🏦', title: 'Account Dormant/Band', desc: '2 saal tak koi transaction nahi hua toh bank account freeze kar deta hai.' },
              { icon: '🔄', title: 'IFSC Code Change', desc: 'Branch merge hone par IFSC code badal jata hai. Purana code kaam nahi karega.' },
              { icon: '', title: 'Galat Account Link', desc: 'Registration time par galti se dusre ka account number daal diya.' },
              { icon: '📛', title: 'Naam Mismatch', desc: 'Bank account mein naam alag hai, Aadhaar mein alag. Payment reject ho jayegi.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl hover:border-green-300 dark:hover:border-green-700 transition-all">
                <span className="text-2xl block mb-2">{icon}</span>
                <p className="font-black text-sm text-[var(--color-text)] mb-1">{title}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: CSC Process */}
        <section className="mb-8">
          <SH>Method 1: CSC Center Se Bank Change Karo (Sabse Aasan)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bhai, sabse fast tarika ye hai. Nazdiki <Link href="/articles/PmKisanCscRegistrationCharges" className="underline text-green-700 dark:text-green-400">CSC center</Link> par chale jao. Wo log portal par login karke account update kar dete hain.
          </p>
          <StepList>
            <SI n={1}>
              <strong>Documents Le Jao:</strong> Aadhaar card (original), naya bank passbook (jisme IFSC aur Account No. likha ho), aur mobile phone (OTP ke liye).
            </SI>
            <SI n={2}>
              <strong>CSC Operator Ko Bolo:</strong> Unhe bolo "PM Kisan Bank Account Update" karna hai. Wo PM Kisan portal par login karenge.
            </SI>
            <SI n={3}>
              <strong>Details Enter:</strong> Wo naya account number aur IFSC code dalenge. Purana account hat jayega.
            </SI>
            <SI n={4}>
              <strong>OTP Verification:</strong> Aapke mobile par OTP aayega. Wo OTP dal kar process complete karenge.
            </SI>
            <SI n={5}>
              <strong>Receipt Lo:</strong> Ek receipt ya acknowledgement slip milegi. Usme naya account number likha hoga. Usko sambhal kar rakho.
            </SI>
          </StepList>

          <Image
            src="/images/articles/pm-kisan-bank-account-change/csc-bank-update.webp"
            alt="CSC operator updating bank details on PM Kisan portal"
            width={800}
            height={600}
            className="w-full rounded-xl my-6"
          />

          <WB>
            <strong>CSC Wale Se Pehle Puch Lo:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1 text-xs">
              <li>"Bhaiya, kitne paise loge?" (Sarkari rate ₹15-30 hai, ₹50 se zyada mat dena).</li>
              <li>"Kya aap NPCI seeding bhi kar doge?" (Ye bahut zaroori hai, niche bataya hai).</li>
              <li>"Receipt mein naya account number likh kar dena."</li>
            </ul>
          </WB>
        </section>

        {/* SECTION 3: Bank Branch NPCI */}
        <section className="mb-8">
          <SH>Method 2: Bank Branch Mein NPCI Seeding (Bahut Zaroori)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Bhai, ye step log bhool jaate hain aur phir paisa nahi aata. Sirf PM Kisan portal par account change karne se kaam nahi chalega. Bank ko bhi batana padta hai ki is account par DBT (Direct Benefit Transfer) aana hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Isko <strong>NPCI Seeding</strong> ya <strong>Aadhaar Seeding</strong> kehte hain.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 dark:border-blue-700 rounded-xl p-5 mb-6">
            <p className="text-sm font-black text-blue-800 dark:text-blue-300 mb-3">
              Bank Branch Process:
            </p>
            <ol className="list-decimal list-inside text-xs text-blue-800 dark:text-blue-300 space-y-2">
              <li>Apne bank branch chale jao (jahan account khola hai).</li>
              <li>Counter par bolo "Aadhaar seeding for DBT/PM Kisan karna hai".</li>
              <li>Wo ek form denge. Usme Aadhaar number aur account number likho.</li>
              <li>Bank wala aapki ungli ka nishan (biometric) lega ya OTP verify karega.</li>
              <li>7 din ke andar aapka account NPCI se link ho jayega.</li>
            </ol>
          </div>
          <Image
            src="/images/articles/pm-kisan-bank-account-change/bank-branch-npci.webp"
            alt="Farmer filling NPCI seeding form at bank branch"
            width={800}
            height={450}
            className="w-full rounded-xl my-4"
          />
          <IB>
            <strong>Pro Tip:</strong> Bank se bahar aane ke baad *99# dial karke ya bank ki app se check kar lo ki Aadhaar seeding successful hui ya nahi.
          </IB>
        </section>

        {/* SECTION 4: BAO Offline Process */}
        <section className="mb-8">
          <SH>Method 3: BAO Office Se Offline Form (Agar CSC Na Ho)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Agar CSC center door hai ya wo kaam nahi kar rahe, toh seedha Block Agriculture Office (BAO) chale jao. Wahan ek correction form milta hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Form mein purana aur naya account number likhna hai. Patwari ka sign lagwana hai. Phir BAO officer approve karega.
          </p>
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
            <p className="text-xs text-amber-800 dark:text-amber-300">
              <strong>⚠️ Dhyan Rahe:</strong> Is process mein 30-45 din lag sakte hain. CSC wala kaam 15 din mein ho jata hai. Isliye pehle CSC try karo. Agar na ho toh BAO jao.
            </p>
          </div>
          <Image
            src="/images/articles/pm-kisan-bank-account-change/bao-form.webp"
            alt="PM Kisan bank correction form at BAO office"
            width={800}
            height={600}
            className="w-full rounded-xl my-6"
          />
        </section>

        {/* SECTION 5: Documents Checklist */}
        <section className="mb-8">
          <SH>Documents Ki Complete List</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Kahin bhi jao (CSC, Bank, ya BAO), ye documents hamesha apne paas rakho:
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
                  ['Aadhaar Card', 'Identity verification ke liye', 'Original + Photocopy'],
                  ['Naya Bank Passbook', 'Account No. aur IFSC ke liye', 'Original'],
                  ['Mobile Phone', 'OTP receive karne ke liye', 'Original (SIM ke saath)'],
                  ['PM Kisan Registration Slip', 'Purana record dekhne ke liye', 'Photocopy (Agar hai toh)'],
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

        {/* SECTION 6: Common Mistakes */}
        <section className="mb-8">
          <SH>Ye Galtiyan Mat Karna (Warna Phir Fail Hoga)</SH>
          <div className="space-y-3">
            {[
              { 
                mistake: 'IFSC Code Galat Daal Diya', 
                fix: 'Passbook ke pehle page par jo IFSC likha hai, wahi dalna. Google se mat dhundo, branch ka IFSC alag ho sakta hai.',
              },
              { 
                mistake: 'Naam Match Nahi Kar Raha', 
                fix: 'Bank account mein naam bilkul Aadhaar jaisa hona chahiye. "Ram Kumar" aur "Ram Kumar Singh" alag maane jayenge.',
              },
              { 
                mistake: 'Joint Account Use Kar Liya', 
                fix: 'PM Kisan ka paisa sirf single account mein aata hai. Joint account mein payment fail ho sakti hai.',
              },
              { 
                mistake: 'NPCI Seeding Bhool Gaye', 
                fix: 'Portal par account update karne ke baad bank jakar NPCI seeding zaroor karwana. Warna paisa aayega nahi.',
              },
              { 
                mistake: 'Dormant Account Link Kar Diya', 
                fix: 'Pehle bank jakar account "Active" karwao, phir PM Kisan mein link karo. Dormant account mein paisa nahi aata.',
              },
            ].map(({ mistake, fix }, i) => (
              <div key={i} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
                <p className="font-black text-sm text-red-600 dark:text-red-400 mb-2">❌ {mistake}</p>
                <p className="text-xs text-green-700 dark:text-green-400"><strong>✅ Sahi Tarika:</strong> {fix}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7: Timeline */}
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
                  ['CSC/BAO Update', 'Day 1', 'Portal par naya account submit'],
                  ['Server Sync', 'Day 2-5', 'PM Kisan database update'],
                  ['NPCI Seeding', 'Day 5-10', 'Bank se Aadhaar link'],
                  ['Verification', 'Day 10-15', 'System dono check karta hai'],
                  ['Next Kist', 'Day 15-30', 'Naye account mein paisa'],
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
            15 din baad <Link href="/articles/PmKisanBeneficiaryList2026" className="underline text-green-700 dark:text-green-400">beneficiary status</Link> check karna. Wahan naya account number dikhna chahiye.
          </p>
        </section>

        {/* SECTION 8: How to Check Status */}
        <section className="mb-8">
          <SH>Update Hui Ya Nahi? Kaise Check Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Bhai, andhere mein teer mat chalao. Check karo ki account update hua ya nahi:
          </p>
          <StepList>
            <SI n={1}>pmkisan.gov.in par jao.</SI>
            <SI n={2}>"Farmers Corner" mein "Beneficiary Status" par click karo.</SI>
            <SI n={3}>Apna Aadhaar number daalo aur "Get Data" dabao.</SI>
            <SI n={4}>Niche scroll karo. Wahan "Bank Account" ka column hoga.</SI>
            <SI n={5}>Agar naya account number dikh raha hai, toh kaam ho gaya!</SI>
          </StepList>
          <Image
            src="/images/articles/pm-kisan-bank-account-change/fto-status-check.webp"
            alt="PM Kisan beneficiary status showing updated bank account"
            width={800}
            height={450}
            className="w-full rounded-xl my-4"
          />
          <WB>
            <strong>Agar Purana Hi Account Dikh Raha Hai?</strong>
            <p className="text-xs text-[var(--color-text-muted)] mt-2">
              Iska matlab CSC wale ne update nahi kiya ya server par nahi chadha. Dobara CSC jao aur receipt dikhao. Ya phir <Link href="/articles/PmKisanStateNodalOfficerList" className="underline text-green-700 dark:text-green-400">nodal officer</Link> ko email karo.
            </p>
          </WB>
        </section>

        {/* SECTION 9: What About Pending Kist */}
        <section className="mb-8">
          <SH>Purani Ruki Hui Kist Ka Kya Hoga?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Bhai, sabse bada sawal — jo paisa pehle fail hua tha, wo kaise milega?
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Chinta mat karo. Jab aap naya account link kar dete ho, toh purani ruki hui kist bhi usi naye account mein aa jati hai. Aapko alag se application nahi deni padti.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Bas ek baar account update ho jaye, system automatically pending payments naye account mein bhej deta hai. <Link href="/articles/PmKisanPaymentFailedFix2026" className="underline text-green-700 dark:text-green-400">Payment failed guide</Link> mein iski puri detail hai.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
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
          { href: '/articles/PmKisanPaymentFailedFix2026', l: '💸 Payment Fix' },
          { href: '/articles/pm-kisan-fto-generated-ka-matlab-kya-hai', l: '💳 FTO Status' },
          { href: '/articles/PmKisanMasterGuide2026', l: ' Master Guide' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}