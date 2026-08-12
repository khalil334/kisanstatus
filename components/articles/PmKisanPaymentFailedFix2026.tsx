import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, DB, SH, GovLink, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const PUBLISHED = '2026-02-06T09:16:09+05:30';
const MODIFIED = '2026-02-20T21:22:12+05:30';

const RELATED_CARDS = [
  {
    slug: 'pm-kisan-fto-generated-ka-matlab-kya-hai',
    title: 'FTO Generated Matlab Kya Hai',
    desc: 'FTO aur PFMS ke beech ka farak aur payment kab tak aayegi, jaane.',
  },
  {
    slug: 'PmKisanEkycOnline2026',
    title: 'eKYC Karne Ka Poora Tarika',
    desc: 'Payment fail hone ka ek bada karan eKYC pending hona bhi ho sakta hai.',
  },
  {
    slug: 'PmKisan24viKist2026',
    title: '24vi Kist Status Check',
    desc: 'Apna latest installment status aur error codes abhi verify karein.',
  },
];

const FAQS_DATA = [
  {
    q: 'Status mein approved dikh raha hai par paisa nahi aaya — kya hua?',
    a: 'Approved ka matlab sirf itna hai ki government ne aapka naam clear kar diya aur paisa release kar diya. Aage ka kaam bank ka hai. Zyadatar cases mein Aadhaar NPCI seeding missing hoti hai. Branch jao, "DBT seeding" karwao, 3-7 din wait karo.',
  },
  {
    q: '"FTO Generated" likha hai status mein, iska matlab kya hai?',
    a: 'FTO matlab Fund Transfer Order. Sarkar ne paisa bhejne ka order PFMS ke through bank ko de diya hai. Ye payment aane se pehle wali stage hai, abhi paisa credit nahi hua. 2-3 din mein "Payment Credited" dikhne lagega.',
  },
  {
    q: 'Kitne din mein payment fix hoti hai bank jaane ke baad?',
    a: 'Seeding jaisi chhoti cheez 3-7 din mein ho jaati hai. NPCI remapping ya name correction mein 10-15 din lag sakte hain. 20 din se zyada ho jaye toh PM Kisan helpline 155261 par call karein.',
  },
  {
    q: 'Ruki hui kist ka paisa wapas milega ya gaya?',
    a: 'Bilkul milega. PM Kisan scheme mein installment kabhi expire nahi hoti. Jis din problem fix hogi, saari pending arrears ek saath ya alag-alag transactions mein aa jaayengi.',
  },
  {
    q: 'IFSC code galat daal diya — ab pm kisan bank account change online kaise karein?',
    a: 'Portal khol kar "Farmers Corner" mein "Edit Bank Details" wale option se sahi IFSC daal do. Agar OTP purane number par nahi aa raha, toh CSC waale bhai se correction karwa lo. Bank merger hua hai toh cheque book se naya IFSC zaroor check karein.',
  },
  {
    q: 'Account dormant ho gaya hai — kya paisa aayega?',
    a: 'Nahi, jab tak account reactivate nahi karwate. Bank mein jaakar "KYC Update" form bharein aur ₹100-₹500 ka chhota deposit karein. Account active hote hi DBT payments aana shuru ho jaayengi.',
  },
  {
    q: 'Joint account mein payment fail ho rahi hai — kyun?',
    a: 'Scheme ka rule saaf hai — sirf "Individual Savings Account" accept hota hai. Joint, Current, ya Business account mein paisa nahi jaata. Naya individual account khulwa kar portal update karein.',
  },
  {
    q: 'Status mein "Rejected by Bank" likha hai, ab kya karein?',
    a: 'Bank ne transaction wapas bhej diya hai. Iski 3 mukhya wajah ho sakti hain: seeding missing, account dormant, ya account type galat. Branch jaakar "Rejection Reason" zaroor puchein, unke system mein exact code dikhta hai.',
  },
  {
    q: 'Helpline 155261 par baat nahi ho rahi — kya karun?',
    a: 'Line busy milna aam baat hai. Agar phone se kaam na bane, toh email karein: pmkisan-ict@gov.in. Sabse zyada kaam likhit complaint (CSC ya CPGRAMS portal) se banta hai kyunki uska official trackable record ban jaata hai.',
  },
];

export default function PmKisanPaymentFailedFix2026({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Payment Fix Guide</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Payment Troubleshooting</span>

          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Payment Failed 2026: 7 Reasons & Quick Fix
          </h1>

          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span><Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(PUBLISHED)}</span>
            <span>Updated: {fmtDate(MODIFIED)}</span>
            <span>14 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-xl">
          <p className="text-sm md:text-base text-blue-900 dark:text-blue-100 leading-relaxed font-medium">
            <strong>Bina Ghuma Phira Ke:</strong> PM Kisan payment failed hone ka sabse bada karan <strong>Aadhaar NPCI seeding</strong> ka na hona, galat IFSC code, ya dormant bank account hai. Paisa gaya nahi hai, bas bank tak pahunchne se pehle atak gaya hai. Apni branch jaakar "DBT Seeding" karwayein ya portal par bank details correct karein. Pending kistein problem fix hone ke baad mil jaayengi.
          </p>
        </div>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/articles/pm-kisan-payment-failed-fix-2026/payment-failed-hero.webp'}
            alt="PM Kisan payment failed fix guide 2026 — bank rejection reasons and solutions"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Payment Failed ≠ Paisa Gaya. Problem Fix Karo, Arrears Milenge.
          </p>
        </div>

        <div className="my-6 p-5 bg-red-50 dark:bg-red-900/20 border-2 border-red-400 dark:border-red-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-red-800 dark:text-red-300 mb-2">Pehle Ye Baat Dimag Mein Baitha Lo</h2>
          <p className="text-sm text-red-900 dark:text-red-200 leading-relaxed mb-2">
            "Payment Failed" ya "Payment Not Credited" likha dekh ke ghabrane ki bilkul zaroorat nahi hai. Paisa gaya nahi hai kahin — government ne toh release kar diya tha, bas bank tak pahunchne se pehle kahin technical ya procedural wajah se atak gaya.
          </p>
          <p className="text-sm text-red-900 dark:text-red-200 leading-relaxed">
            Jis din bhi problem fix hogi, pending kistein (arrears) ek saath ya alag-alag transactions mein aapke account mein aa jaayengi. Neeche har wajah alag se samjhayi hai, apni waali dhundh lo aur turant fix karo.
          </p>
        </div>

        <section className="mb-8">
          <SH>PM Kisan Payment Not Credited Kyun Hoti Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Portal khola, "Approved" bhi likha hai, lekin bank khaali. Ye situation har kist mein hazaron kisano ke saath hoti hai. Wajah almost hamesha ek hi hoti hai — bank account DBT (Direct Benefit Transfer) system se sahi tarike se juda nahi hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Sarkar PFMS (Public Financial Management System) ke zariye paisa bhejti hai. PFMS ko teen cheezein bilkul 100% sahi chahiye — valid bank account number, sahi IFSC code, aur Aadhaar link (NPCI seeding). Ek bhi cheez galat hui nahi ki transaction wahin ruk jaata hai, aur status mein "failed" ya "rejected" jaisa message aa jaata hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            <strong>Low-Competition Tip:</strong> Bahut se log sirf "pm kisan payment failed" search karte hain, lekin asli solution <strong>"pfms kisan payment status check"</strong> karne mein chhupa hai. Hum aage iska tarika bhi batayenge.
          </p>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-payment-failed-fix-2026/failure-reasons-infographic.webp"
            alt="PM Kisan payment failure 7 reasons infographic — visual diagnosis chart"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            7 Common Reasons — Apni Problem Identify Karo
          </p>
        </div>

        <section className="mb-8">
          <SH>Status Message Padh Kar Wajah Kaise Pehchane</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Beneficiary Status page par jo exact wording likhi hoti hai, usi se aadha kaam ho jaata hai pata karne mein ki galti kahan hai. Neeche common messages aur unka seedha matlab diya hai.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-[var(--color-border)] rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[var(--color-bg-alt)]">
                  <th className="text-left p-3 font-black text-[var(--color-text)]">Status Par Likha Message</th>
                  <th className="text-left p-3 font-black text-[var(--color-text)]">Iska Seedha Matlab</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['FTO Generated', 'Order bank ko chala gaya, paisa abhi credit nahi hua (2-3 din lagenge)'],
                  ['Rejected by Bank / Payment Failure', 'Bank ne transaction wapas kar diya — seeding ya account problem'],
                  ['Account Does Not Exist', 'Account number galat hai ya account band ho chuka hai'],
                  ['Invalid Aadhaar Mapping', 'NPCI seeding nahi hui ya kisi aur account se pehle se mapped hai'],
                  ['Name Mismatch', 'Aadhaar, bank aur portal ka naam exact match nahi kar raha'],
                ].map(([msg, meaning], i) => (
                  <tr key={msg} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{msg}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[var(--color-text-muted)] text-xs">
            Exact wording thoda alag bhi ho sakta hai portal update ke hisaab se, par matlab yahi rehta hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Reason #1: Aadhaar Seeding Nahi Hui (Sabse Bada KARAN)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Sabse zyada cases isi wajah se atakte hain. Yaad rakhna — Aadhaar link hona aur Aadhaar seed hona do alag cheezein hain. Bahut se kisan yehi confuse ho jaate hain.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            "Link" ka matlab bas itna hai ki UIDAI ke database mein connection ban gaya. Lekin "Seeding" — wo hoti hai NPCI (National Payments Corporation of India) ke mapper mein, jahan aapka Aadhaar us particular bank account se pakka jud jaata hai payment ke liye. Bank waale kabhi kabhi bol dete hain "ho gaya link" par asal mein DBT seeding nahi karte. Isliye jab branch jao, saaf-saaf bolo — <strong>"DBT ke liye Aadhaar NPCI seeding karni hai."</strong>
          </p>
          <StepList>
            <SI n={1}>Passbook aur Aadhaar card (original) lekar apni branch jao.</SI>
            <SI n={2}>Counter par bolo: <strong>"DBT ke liye Aadhaar seeding karni hai."</strong></SI>
            <SI n={3}>Form milega, bharo aur submit kar do.</SI>
            <SI n={4}>Acknowledgement receipt zaroor lena — proof ke kaam aayega.</SI>
            <SI n={5}>3-7 din mein seeding ho jaati hai generally.</SI>
          </StepList>
          <IB>
            <strong>Experience Se Sikha:</strong> SBI, PNB aur BOB jaise kuch banks net banking ya mobile app se bhi seeding allow kar dete hain. Branch jaane se pehle app check kar lena, waqt bach jaayega. NPCI ki website (<strong>npci.org.in</strong>) par bhi "Aadhaar Seeding Status" check karne ka option hota hai.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Reason #2: Galat IFSC Code (Bank Merger Ka Chakkar)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            IFSC mein ek digit bhi idhar-udhar ho jaaye to paisa wrong branch chala jaata hai ya bounce ho jaata hai. Registration ke time jaldi mein galat number daal diya jaana bahut common hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            <strong>Bank mergers</strong> ne is problem ko aur badha diya hai. Jab Punjab National Bank, Oriental Bank aur United Bank merge hue, ya SBI ne associate banks ko milaya, toh purane IFSC codes invalid ho gaye. Agar aapka bank recent merger mein tha, purana code ab kaam nahi karega.
          </p>
          <StepList>
            <SI n={1}>Apni passbook ya cheque book se bilkul naya IFSC nikaal lo.</SI>
            <SI n={2}>pmkisan.gov.in par jaao, "Farmers Corner" mein "Edit Bank Details" dhundo.</SI>
            <SI n={3}>Sahi IFSC daalo, OTP se verify karo, aur save kar do.</SI>
            <SI n={4}>Agar online mushkil lage (OTP nahi aa raha), toh CSC jaake operator se correction karwa lo.</SI>
          </StepList>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-payment-failed-fix-2026/bank-visit-checklist.webp"
            alt="Bank visit checklist for PM Kisan payment fix — documents and steps visual guide"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Bank Jaane Se Pehle Yeh Documents Ready Rakho
          </p>
        </div>

        <section className="mb-8">
          <SH>Reason #3: Dormant Ho Chuka Account</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            RBI ke rules ke mutabik, agar kisi savings account mein pichhle 12 mahine se koi customer-induced transaction (jama ya nikasi) nahi hui, bank use "Dormant" (Nishkriya) kar deta hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Dormant account mein DBT credit hota hi nahi — paisa turant waapas PFMS ke paas chala jaata hai aur status "Rejected" dikhata hai. Aisa un logon ke saath zyada hota hai jo ye account sirf PM Kisan ke liye rakhte hain aur baaki koi lena-dena nahi karte.
          </p>
          <StepList>
            <SI n={1}>Branch mein "KYC Update / Account Reactivation" form maango.</SI>
            <SI n={2}>Aadhaar card ki copy aur ek passport size photo saath le jaana.</SI>
            <SI n={3}>Counter par chhota sa deposit (jaise ₹100 ya ₹500) daal do. Account usi din active ho jaata hai.</SI>
            <SI n={4}>Yahi trip mein Aadhaar DBT seeding bhi karwa lo, taake dobara na aana pade.</SI>
          </StepList>
        </section>

        <section className="mb-8">
          <SH>Reason #4: Joint, Current Ya Business Account</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Scheme ka niyam saaf hai — sirf <strong>Individual Savings Account</strong> mein paisa jaata hai. Joint account (chahe "Former or Survivor" hi kyun na ho), Current account, ya Business account — koi bhi is scheme mein accept nahi hota.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Kai kisan anjaane mein joint account de dete hain registration ke waqt. Fix karne ke liye naya individual account kholna padega — zero balance waala Jan Dhan account bhi chal jaayega. Fir portal par naye details daalo aur seeding karwao.
          </p>
          <DB>
            <strong>Zaroori Note:</strong> Naya account khulwane ke turant baad portal update mat karo. 24-48 ghante wait karo, tab tak NPCI mapper mein entry set ho jaati hai, warna phir se fail ho sakta hai.
          </DB>
        </section>

        <section className="mb-8">
          <SH>Reason #5: Naam Mein Farak (Name Mismatch)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Portal par likha "RAMESH KUMAR", bank record mein "RAMESH KUAMR" — bas itni si spelling ki galti aur payment reject ho jaati hai. PFMS ka name-matching system bahut strict hai, kabhi kabhi father ke naam mein farak bhi problem kar deta hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Teeno jagah — Aadhaar, bank, aur portal — naam bilkul same hona chahiye, ek letter bhi idhar-udhar nahi.
          </p>
          <StepList>
            <SI n={1}>Teeno documents nikaal ke letter-by-letter compare karo.</SI>
            <SI n={2}>Portal mein galti hai to "Farmers Corner" se Name Correction karo.</SI>
            <SI n={3}>Bank mein galti hai to branch jaake correction form bharo (Aadhaar copy lagakar).</SI>
            <SI n={4}>Agar bank wala mana kare, toh ek chhota sa "Name Correction Affidavit" ₹100 ke stamp paper par banwa kar le jao, wo maan jaayenge.</SI>
          </StepList>
        </section>

        <section className="mb-8">
          <SH>Reason #6 Aur #7: Chhoti Cheezein Jo Nazarandaz Ho Jaati Hain</SH>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <p className="font-black text-amber-800 dark:text-amber-300 text-sm mb-2">Account Number Galat Daala Gaya</p>
              <p className="text-xs text-[var(--color-text-muted)] mb-3">
                Registration ke waqt ek digit chhut gaya ya extra aa gayi. Passbook se number match kar lo, phir portal se edit kar do ya CSC ki madad le lo.
              </p>
              <p className="text-xs text-green-700 dark:text-green-400 font-bold">Fix: Edit Bank Details mein sahi number daalo</p>
            </div>
            <div className="p-5 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl">
              <p className="font-black text-purple-800 dark:text-purple-300 text-sm mb-2">PFMS Server Ki Dikkat</p>
              <p className="text-xs text-[var(--color-text-muted)] mb-3">
                Kist release wale din server par load zyada ho jaata hai kabhi kabhi, transaction beech mein atak jaata hai. Ye khud hi 2-3 din mein theek ho jaata hai.
              </p>
              <p className="text-xs text-green-700 dark:text-green-400 font-bold">Fix: 3 din ruko, phir dobara status check karo</p>
            </div>
          </div>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-payment-failed-fix-2026/payment-success-after-fix.webp"
            alt="PM Kisan payment success after bank fix — credited amount in bank account"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Problem Fix Ke Baad — Paisa Aur Arrears Dono Milte Hain
          </p>
        </div>

        <section className="mb-8">
          <SH>Ab Kya Karna Hai — Step-by-Step Action Plan</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Samajh nahi aa raha kahan se shuru karein? Ye tarika follow karo. Zyadatar log pehle teen steps mein hi solve kar lete hain.
          </p>
          <StepList>
            <SI n={1}>Pehle status check karo — pmkisan.gov.in par Beneficiary Status mein exact error dekho.</SI>
            <SI n={2}>Bank jaao — seeding, account active status, aur IFSC teeno ek hi visit mein check karwao.</SI>
            <SI n={3}>Portal par bhi verify kar lo — naam, Aadhaar, bank details sab dobara padh lo.</SI>
            <SI n={4}>3-7 din intezaar karo, seeding ko time lagta hai process hone mein.</SI>
            <SI n={5}>Fir se status check karo — abhi bhi fail hai to 155261 par call ya email karo.</SI>
            <SI n={6}>Kuch na bane to CSC jaake written grievance darj karwa do.</SI>
          </StepList>
        </section>

        <section className="mb-8">
          <SH>Advanced Tip: PFMS Par Direct Payment Status Kaise Check Karein</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Agar PM Kisan portal par status clear nahi dikh raha, toh aap seedha <strong>PFMS (Public Financial Management System)</strong> ki website par check kar sakte hain. Yeh sabse reliable tarika hai ye jaanne ka ki paisa bank tak pahuncha ya nahi.
          </p>
          <StepList>
            <SI n={1}>pfms.nic.in website par jao aur "Know Your Payments" par click karo.</SI>
            <SI n={2}>Apna Bank Name select karo aur apna Bank Account Number dalo.</SI>
            <SI n={3}>Captcha code dalo aur "Search" karo.</SI>
            <SI n={4}>Yahan aapko dikhega ki kya koi transaction aapke account ke liye pending hai ya fail hua hai.</SI>
          </StepList>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-3">
            <strong>Side Note:</strong> PFMS par sirf wo transactions dikhte hain jo government ne already bhej diye hain. Agar yahan bhi kuch nahi dikhta, matlab government ne abhi FTO generate hi nahi kiya hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Ruki Hui Kistein — Milengi Ya Nahi?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Milengi. Is scheme mein installment kabhi expire nahi hoti, ye baat pakki samajh lo. Jis din problem theek hogi, system apne aap pending kistein process kar dega.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Maan lo teen kistein fail hui thi — toh fix hone ke baad teeno ka paisa ek saath aa sakta hai, ya kabhi kabhi alag-alag transaction mein bhi aata hai. Agar ek kist aayi aur baaki nahi aayi, ghabrao mat, kuch din aur ruk jaao.
          </p>
        </section>

        <section className="mb-8">
          <SH>Grievance Darj Karne Ka Sahi Tarika (Jab Kuch Na Bane)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Agar bank aur CSC dono se kaam nahi ban raha, toh likhit shikayat (written complaint) sabse zyada kaam aati hai. Phone par baat karne se record nahi banta.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-[var(--color-border)] mb-4">
            <p className="text-xs font-mono text-[var(--color-text-muted)] mb-2">
              <strong>Email Format:</strong><br/>
              To: pmkisan-ict@gov.in<br/>
              Subject: Payment Failed Complaint - Registration No: [Aapka Number]<br/><br/>
              Respected Sir/Madam,<br/>
              Mera naam [Aapka Naam] hai. Mera PM Kisan Registration Number [Number] hai. Meri pichli kist "Rejected by Bank" dikh rahi hai. Maine apni branch mein jaakar Aadhaar seeding aur account activation karwa liya hai. Kripya meri pending kist release karne ki kripa karein.<br/>
              Mobile: [Aapka Number]<br/>
              Aadhaar: [Aapka Aadhaar]
            </p>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Iske alawa, aap <strong>CPGRAMS portal</strong> (pgportal.gov.in) par jaakar bhi "Ministry of Agriculture & Farmers Welfare" ke against grievance file kar sakte hain. Iska response 30 din ke andar aana mandatory hota hai.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Payment Fail Hone Par Sabse Common Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kisan Payment Failed FAQ 2026 — Ground-Level Answers" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Seedhi Baat (Bottom Line)</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Payment failed dekh ke ghabrane ki koi baat nahi. Zyadatar cases bank visit aur Aadhaar seeding se hi solve ho jaate hain. Aaj hi shuru kar do, jitni jaldi fix hoga utni jaldi paisa aayega. Aur ek baat — is kaam ke liye kisi middleman ko ek rupaya bhi mat do, sab kuch bilkul free hai.
          </p>
        </div>

        <GovLink
          href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
          label="PM Kisan Beneficiary Status — Check Payment"
          guide="Abhi Status Dekho"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmkisan.gov.in"
        />

        <CalcBanner
          title="Kist Ka Poora Hisaab Nikaalo"
          desc="Ab tak kitna mila, kitna baaki — sab ek jagah calculate karo"
          primaryCta={{ href: '/calculator/installment-tracker', label: 'Tracker Kholo →' }}
          secondaryCta={{ href: '/calculator/pm-kisan-benefit', label: 'Benefit Calculator' }}
        />

        <section className="my-10">
          <h3 className="text-lg font-black text-[var(--color-text)] mb-4">Aage Kaam Aayenge Ye Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {RELATED_CARDS.map((card) => (
              <Link
                key={card.slug}
                href={`/articles/${card.slug}`}
                className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg hover:border-green-500 transition-all duration-300"
              >
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
          { href: '/articles/PmKisanEkycOnline2026', l: 'eKYC Guide' },
          { href: '/articles/PmKisanBeneficiaryList2026', l: 'Beneficiary List' },
          { href: '/articles/PmKisan24viKist2026', l: '24vi Kist Status' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
