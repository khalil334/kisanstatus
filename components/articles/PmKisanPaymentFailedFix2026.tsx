'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-07-06T08:00:00+05:30';
const MODIFIED = '2026-07-06T08:00:00+05:30';

const RELATED = [
  { slug: 'pm-kisan-fto-generated-ka-matlab-kya-hai', title: 'FTO Generated Matlab Kya Hai', emoji: '💳' },
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Complete Guide', emoji: '📚' },
  { slug: 'PmKisan24viKist2026', title: '24vi Kist Status Check', emoji: '📅' },
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary List Mein Naam Dekho', emoji: '📋' },
  { slug: 'PmKisanEkycOnline2026', title: 'eKYC Kaise Karein', emoji: '🔐' },
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Loan Apply Online', emoji: '💰' },
];

const FAQS_DATA = [
  {
    q: 'Status mein approved dikh raha hai par paisa nahi aaya — kya hua?',
    a: 'Ye sabse common confusion hai. Approved ka matlab sirf itna hai ki government ne aapka naam clear kar diya aur paisa release kar diya. Aage ka kaam bank ka hai — aur wahi ruk jaata hai. Zyadatar case mein Aadhaar seeding missing hoti hai. Branch jao, seeding karwao, 3-7 din wait karo.',
  },
  {
    q: '"FTO Generated" likha hai status mein, iska matlab kya hai?',
    a: 'FTO matlab Fund Transfer Order — sarkar ne paisa bhejne ka order bank ko de diya hai. Ye stage payment aane se pehle wali hoti hai, abhi credit nahi hua. Detail mein samajhna ho to hamara alag article hai FTO Generated par, link neeche related articles mein mil jaayega.',
  },
  {
    q: 'Kitne din mein payment fix hoti hai bank jaane ke baad?',
    a: 'Depend karta hai problem par. Seeding jaisi choti cheez 3-7 din mein ho jaati hai. NPCI remapping thoda time leta hai, kabhi 10-15 din bhi lag jaate hain. 20 din se zyada ho jaye to helpline try karo.',
  },
  {
    q: 'Ruki hui kist ka paisa wapas milega ya gaya?',
    a: 'Milega. Installment kabhi expire nahi hoti is scheme mein.',
  },
  {
    q: 'IFSC code galat daal diya — ab kya karun?',
    a: 'Portal khol ke Farmers Corner mein Edit Bank Details wale option se sahi IFSC daal do. Nahi chal raha to CSC waale bhai se karwa lo, unke paas access hota hai. Ek baat dhyan rakhna — bank merger hua hai recent mein to purana IFSC ab invalid ho sakta hai, naya code cheque book pe check kar lena.',
  },
  {
    q: 'Account dormant ho gaya hai — paisa aayega?',
    a: 'Nahi, jab tak reactivate na karwao. Bank mein jaake bolo account active karna hai, chhota sa deposit karna padta hai kabhi kabhi, aur KYC bhi dobara verify karwani padti hai.',
  },
  {
    q: 'Joint account mein payment fail ho rahi hai — kyun?',
    a: 'Scheme ka rule hi ye hai — sirf individual savings account accept hota hai. Joint, current, business — inme se koi nahi chalega. Naya individual account khulwana padega, phir portal update karke seeding bhi karwani hogi.',
  },
  {
    q: 'Status mein "Rejected by Bank" likha hai, ab kya karein?',
    a: 'Bank ne transaction wapas bhej diya hai — matlab in teen mein se koi ek wajah zaroor hogi: seeding missing, account band/dormant, ya account type galat (joint/current). Branch jaake pooch lo exact wajah, wo apne system mein reject ki detail dekh sakte hain.',
  },
  {
    q: 'Kist na aane ki shikayat kaha aur kaise darj karayein?',
    a: 'Sabse pehle apni branch. Wahan se na bane to CSC center par jaake likhit application do, ya PM Kisan ke helpline 155261 pe call karo. Email ka option bhi hai — pmkisan-ict@gov.in. Written complaint sabse zyada kaam aati hai kyunki uska record ban jaata hai.',
  },
  {
    q: 'Helpline 155261 par baat nahi ho rahi — kya karun?',
    a: 'Line busy milna aam baat hai is number pe, kai baar try karna padta hai. Agar phone se kaam na bane to email bhi ek option hai — pmkisan-ict@gov.in. Sach kahu to CSC jaake likhit complaint darj karwana zyada kaam aata hai, wahan record ban jaata hai jo follow-up mein help karta hai.',
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
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">💸 Payment Troubleshooting</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Payment Failed 2026: Bank Mein Paisa Kyun Nahi Aaya? 7 Real Reasons + Turant Fix
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 9 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        {/* IMAGE 1: Hero */}
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
          <h2 className="text-base font-black text-red-800 dark:text-red-300 mb-2">Pehle Ye Samajh Lo</h2>
          <p className="text-sm text-red-900 dark:text-red-200 leading-relaxed mb-2">
            "Payment Failed" ya "Payment Not Credited" likha dekh ke ghabrane ki zaroorat nahi hai. Paisa gaya nahi hai kahin — government ne to release kar diya tha, bas bank tak pahunchne se pehle kahin atak gaya.
          </p>
          <p className="text-sm text-red-900 dark:text-red-200 leading-relaxed">
            Jis din bhi problem fix hogi, pending kistein ek saath account mein aa jaayengi. Neeche har wajah alag se samjhayi hai, apni waali dhundh lo.
          </p>
        </div>

        <section className="mb-8">
          <SH>PM Kisan Payment Not Credited Kyun Hoti Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Portal khola, "Approved" bhi likha hai, lekin bank khaali. Ye situation har kist mein hazaron kisano ke saath hoti hai. Wajah almost hamesha ek hi hoti hai — bank account DBT system se sahi tarike se juda nahi hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Sarkar PFMS ke zariye paisa bhejti hai, aur PFMS ko teen cheezein bilkul sahi chahiye — bank account, IFSC, aur Aadhaar link. Ek bhi galat hui nahi ki transaction wahin ruk jaata hai, aur status mein "failed" ya "rejected" jaisa message aa jaata hai.
          </p>
        </section>

        {/* IMAGE 2: Failure Reasons Infographic */}
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
                  <th className="text-left p-3 font-black text-[var(--color-text)]">Iska Matlab</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[var(--color-border)]">
                  <td className="p-3 text-[var(--color-text-muted)]">FTO Generated</td>
                  <td className="p-3 text-[var(--color-text-muted)]">Order bank ko chala gaya, paisa abhi credit nahi hua</td>
                </tr>
                <tr className="border-t border-[var(--color-border)]">
                  <td className="p-3 text-[var(--color-text-muted)]">Rejected by Bank / Payment Failure</td>
                  <td className="p-3 text-[var(--color-text-muted)]">Bank ne transaction wapas kar diya — seeding ya account problem</td>
                </tr>
                <tr className="border-t border-[var(--color-border)]">
                  <td className="p-3 text-[var(--color-text-muted)]">Account Does Not Exist</td>
                  <td className="p-3 text-[var(--color-text-muted)]">Account number galat hai ya band ho chuka hai</td>
                </tr>
                <tr className="border-t border-[var(--color-border)]">
                  <td className="p-3 text-[var(--color-text-muted)]">Invalid Aadhaar Mapping</td>
                  <td className="p-3 text-[var(--color-text-muted)]">Seeding nahi hui ya kisi aur account se already mapped hai</td>
                </tr>
                <tr className="border-t border-[var(--color-border)]">
                  <td className="p-3 text-[var(--color-text-muted)]">Name Mismatch</td>
                  <td className="p-3 text-[var(--color-text-muted)]">Aadhaar, bank aur portal ka naam match nahi kar raha</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[var(--color-text-muted)] text-xs">
            Exact wording thoda alag bhi ho sakta hai portal update ke hisaab se, par matlab yahi rehta hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Reason #1: Aadhaar Seeding Nahi Hui (Account Not Seeded)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Sabse zyada cases isi wajah se atakte hain. Yaad rakhna — Aadhaar link hona aur Aadhaar seed hona do alag cheezein hain. Bahut se kisan yehi confuse ho jaate hain.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Link ka matlab bas itna hai ki UIDAI ke database mein connection ban gaya. Lekin seeding — wo hoti hai NPCI ke mapper mein, jahan aapka Aadhaar us particular bank account se pakka jud jaata hai payment ke liye. Bank waale kabhi kabhi bol dete hain "ho gaya link" par asal mein seeding nahi karte. Isliye jab branch jao, saaf-saaf bolo — "DBT ke liye Aadhaar seeding karni hai."
          </p>
          <StepList>
            <SI n={1}>Passbook aur Aadhaar card lekar apni branch jao</SI>
            <SI n={2}>Counter par bolo: <strong>"DBT ke liye Aadhaar seeding karni hai"</strong></SI>
            <SI n={3}>Form milega, bharo aur submit kar do</SI>
            <SI n={4}>Receipt zaroor lena — proof ke kaam aayega</SI>
            <SI n={5}>3-7 din mein seeding ho jaati hai generally</SI>
          </StepList>
          <IB>
            SBI, PNB aur BOB jaise kuch banks net banking ya app se bhi seeding allow kar dete hain. Branch jaane se pehle app check kar lena, waqt bach jaayega. NPCI ki website par bhi ek option hota hai seeding status check karne ka, apna Aadhaar number daal ke dekh sakte ho kis bank se mapped hai.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Reason #2: Galat IFSC Code</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            IFSC mein ek digit bhi idhar-udhar ho jaaye to paisa wrong branch chala jaata hai ya bounce ho jaata hai. Registration ke time jaldi mein galat number daal diya jaana bahut common hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bank mergers ne is problem ko aur badha diya hai. Punjab National Bank, Oriental Bank aur United Bank jab merge hue, IFSC codes bhi change ho gaye. Agar aapka bank recent merger mein tha, purana code ab kaam nahi karega — ye check karna zaroor.
          </p>
          <StepList>
            <SI n={1}>Passbook ya cheque book se naya IFSC nikaal lo</SI>
            <SI n={2}>pmkisan.gov.in par jaao, Farmers Corner mein Edit Bank Details dhundo</SI>
            <SI n={3}>Sahi IFSC daalo, OTP se verify karo, save kar do</SI>
            <SI n={4}>Online mushkil lage to CSC jaake operator se karwa lo</SI>
          </StepList>
        </section>

        {/* IMAGE 3: Bank Visit Checklist */}
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
            Agar account mein pichhle 12 mahine se koi transaction nahi hui, bank use dormant kar deta hai. Aur dormant account mein DBT credit hota hi nahi — paisa waapas PFMS ke paas chala jaata hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Aisa un logon ke saath zyada hota hai jo ye account sirf PM Kisan ke liye rakhte hain aur baaki koi lena-dena nahi. Fix karna aasan hai bas.
          </p>
          <StepList>
            <SI n={1}>Branch mein KYC update form maango</SI>
            <SI n={2}>Aadhaar aur photo saath le jaana</SI>
            <SI n={3}>Chhota sa deposit (jaise ₹100) daal do, account usi din active ho jaata hai</SI>
            <SI n={4}>Yahi trip mein Aadhaar seeding bhi karwa lo</SI>
          </StepList>
        </section>

        <section className="mb-8">
          <SH>Reason #4: Joint, Current Ya Business Account</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Scheme ka niyam saaf hai — sirf individual savings account mein paisa jaata hai. Joint account, current account, business account — koi bhi is scheme mein accept nahi hota. Kai kisan anjaane mein joint account de dete hain registration ke waqt.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Fix karne ke liye naya individual account kholna padega — zero balance waala bhi chal jaayega. Fir portal par naye details daalo aur seeding karwao.
          </p>
          <DB>
            Naya account khulwane ke turant baad portal update mat karo. 24-48 ghante wait karo, tab tak NPCI mapper mein entry set ho jaati hai, warna phir se fail ho sakta hai.
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
            <SI n={1}>Teeno documents nikaal ke letter-by-letter compare karo</SI>
            <SI n={2}>Portal mein galti hai to Farmers Corner se Name Correction karo</SI>
            <SI n={3}>Bank mein galti hai to branch jaake correction form bharo</SI>
            <SI n={4}>Aadhaar mein galti ho to UIDAI centre jaana padega</SI>
          </StepList>
        </section>

        <section className="mb-8">
          <SH>Reason #6 Aur #7: Chhoti Cheezein Jo Nazarandaz Ho Jaati Hain</SH>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <p className="font-black text-amber-800 dark:text-amber-300 text-sm mb-2">❌ Account Number Galat Daala Gaya</p>
              <p className="text-xs text-[var(--color-text-muted)] mb-3">
                Registration ke waqt ek digit chhut gaya ya extra aa gayi. Passbook se number match kar lo, phir portal se edit kar do ya CSC ki madad le lo.
              </p>
              <p className="text-xs text-green-700 dark:text-green-400 font-bold">Fix: Edit Bank Details mein sahi number daalo</p>
            </div>
            <div className="p-5 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl">
              <p className="font-black text-purple-800 dark:text-purple-300 text-sm mb-2">❌ PFMS Server Ki Dikkat</p>
              <p className="text-xs text-[var(--color-text-muted)] mb-3">
                Kist release wale din server par load zyada ho jaata hai kabhi kabhi, transaction beech mein atak jaata hai. Ye khud hi 2-3 din mein theek ho jaata hai.
              </p>
              <p className="text-xs text-green-700 dark:text-green-400 font-bold">Fix: 3 din ruko, phir dobara status check karo</p>
            </div>
          </div>
        </section>

        {/* IMAGE 4: Success After Fix */}
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
          <SH>Ab Kya Karna Hai — Step-by-Step</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Samajh nahi aa raha kahan se shuru karein? Ye tarika follow karo. Zyadatar log pehle teen steps mein hi solve kar lete hain.
          </p>
          <StepList>
            <SI n={1}>Pehle status check karo — pmkisan.gov.in par Beneficiary Status mein exact error dekho</SI>
            <SI n={2}>Bank jaao — seeding, account active status, aur IFSC teeno ek hi visit mein check karwao</SI>
            <SI n={3}>Portal par bhi verify kar lo — naam, Aadhaar, bank details sab dobara padh lo</SI>
            <SI n={4}>3-7 din intezaar karo, seeding ko time lagta hai process hone mein</SI>
            <SI n={5}>Fir se status check karo — abhi bhi fail hai to 155261 par call ya email karo</SI>
            <SI n={6}>Kuch na bane to CSC jaake written grievance darj karwa do</SI>
          </StepList>
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
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kisan Payment Failed FAQ 2026 — Ground-Level Answers" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Seedhi Baat</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Payment failed dekh ke ghabrane ki koi baat nahi. Zyadatar cases bank visit aur Aadhaar seeding se hi solve ho jaate hain. Aaj hi shuru kar do, jitni jaldi fix hoga utni jaldi paisa aayega. Aur ek baat — is kaam ke liye kisi ko ek rupaya bhi mat do, sab kuch bilkul free hai.
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
