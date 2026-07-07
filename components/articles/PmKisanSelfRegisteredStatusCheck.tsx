'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-03-20T08:00:00+05:30';
const MODIFIED = '2026-07-06T08:00:00+05:30';

const RELATED = [
  { slug: 'PmKisan24viKist2026', title: '24vi Kist Status', emoji: '📅' },
  { slug: 'PmKisanMasterGuide2026', title: 'Complete Guide', emoji: '📚' },
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary List', emoji: '📋' },
  { slug: 'PmKisanEkycOnline2026', title: 'eKYC Guide', emoji: '🔐' },
  { slug: 'pm-kisan-fto-generated-ka-matlab-kya-hai', title: 'FTO Status', emoji: '💳' },
  { slug: 'PmKisanPaymentFailedFix2026', title: 'Payment Failed Fix', emoji: '❌' },
];

const FAQS_DATA = [
  {
    q: 'Maine khud registration kiya tha — ab status kaise check karun?',
    a: 'Seedha pmkisan.gov.in par jao, Farmers Corner mein "Beneficiary Status" dhundo. Aadhaar number daalo, Get Data dabao. Agar aapne khud registration kiya hai toh bhi wahi dikhega — koi farak nahi padta. CSC se karwaya ho ya khud kiya ho, dono ka status same jagah check hota hai.',
  },
  {
    q: 'Self-registration mein kitna time lagta hai approval mein?',
    a: 'Normally 7-15 din lagte hain verification mein. Lekin kabhi-kabhi 30-45 din bhi ho jaate hain agar land records match nahi hote ya eKYC pending hai. Status check karte raho — "Pending" dikh raha hai toh wait karo, "Rejected" dikhe toh reason dekho aur fix karo.',
  },
  {
    q: 'Khud registration kiya lekin abhi tak koi payment nahi aayi — kyun?',
    a: 'Teen wajah ho sakti hain: (1) eKYC nahi hui — turant karo, (2) Bank account Aadhaar se link nahi — NPCI seeding karwao, (3) Land seeding pending hai — revenue office se contact karo. Sabse pehle status check karo portal par — wahan exact reason dikhega.',
  },
  {
    q: 'Reference number kho gaya hai — ab kya karun?',
    a: 'Koi baat nahi. Aadhaar number se hi sab check ho jaata hai. Beneficiary status mein Aadhaar daalo, puri history dikh jayegi. Reference number sirf tracking ke liye hota hai — zaroori nahi hai. Phir bhi chahiye toh CSC se print nikalwa sakte ho.',
  },
  {
    q: 'Online registration mein photo upload karni thi — kya size chahiye?',
    a: 'Passport size photo, 20-50 KB tak. White background preferred hai lekin zaroori nahi. Clear honi chahiye — chehra dikhna chahiye. Mobile se kheench ke bhi ho jaata hai, bas dhundhla nahi hona chahiye. Agar reject ho gayi toh dobara upload kar sakte ho.',
  },
  {
    q: 'Registration ke baad mobile number change kar sakte hain?',
    a: 'Haan bilkul. pmkisan.gov.in par "Edit Aadhaar Details" option hai. Wahan se mobile number update kar sakte ho. OTP verify karna padega purane number par. Agar purana number band ho gaya hai toh CSC jaake karwana padega — operator help kar dega.',
  },
  {
    q: 'Do baar registration ho gaya galti se — kya karein?',
    a: 'Ghabrao mat. Duplicate entries automatically filter ho jaati hain system mein. Lekin agar dono alag-alag dikha rahe hain toh helpline 155261 par call karo. Woh log ek entry merge kar denge ya duplicate hata denge. Paisa kisi ko nahi milega jab tak duplicate hai.',
  },
];

export default function PmKisanSelfRegisteredStatusCheck({ article }: { article: ArticleMeta }) {
  return (
    <>
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Self Registration Status</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">📝 Self Registration Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Self Registration Status Check 2026: Khud Kiya Registration? Yahan Se Pata Karo
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 10 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        {/* IMAGE 1: Hero */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/articles/pm-kisan-self-registered-status-check.webp'}
            alt="PM Kisan self registration status check — online application tracking guide 2026"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Self Registration Status Check — Step by Step Guide
          </p>
        </div>

        {/* Real Hook */}
        <div className="my-6 p-5 bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-400 dark:border-amber-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-amber-800 dark:text-amber-300 mb-2">Seedhi Baat</h2>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed mb-2">
            CSC se karwaya ya khud online kiya — farak nahi padta. <strong>Status check karne ka tarika same hai.</strong>
          </p>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
            Lekin ek chhoti si baat hai jo bahut log confuse ho jaate hain — khud registration karne walon ko lagta hai alag portal par check karna padega. Nahi bhai, sab ek hi jagah check hota hai. Bas Aadhaar number chahiye.
          </p>
        </div>

        {/* Section 1: What Is Self Registration */}
        <section className="mb-8">
          <SH>Self Registration Kya Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Jab aap khud pmkisan.gov.in par jaake form bharte hain — bina CSC operator ki help ke — usse self-registration kehte hain.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Pehle sirf CSC se hota tha. Ab government ne online option de diya hai. Ghar baithe kar sakte ho — mobile ya computer se.
          </p>
          <IB>
            <strong>Fayda:</strong> ₹20-50 bach jaate hain jo CSC wala charge leta hai. <strong>Nuksan:</strong> Agar koi galti ho gayi toh khud correct karna padega — koi help nahi karega.
          </IB>
        </section>

        {/* Section 2: How to Check Status */}
        <section className="mb-8">
          <SH>Status Check Kaise Karein — Step by Step</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Chahe CSC se karwaya ho, chahe khud kiya ho — status check karne ka tarika same hai.
          </p>

          <StepList>
            <SI n={1}>pmkisan.gov.in kholo — mobile ya computer, jo bhi ho</SI>
            <SI n={2}>Farmers Corner dhundo — homepage par upar dikhega</SI>
            <SI n={3}>"Beneficiary Status" par click karo</SI>
            <SI n={4}>Do options milenge — Aadhaar ya Mobile number. Aadhaar select karo (zyada reliable hai)</SI>
            <SI n={5}>12-digit Aadhaar number type karo — bina space ya dash ke</SI>
            <SI n={6}>"Get Data" button dabao</SI>
            <SI n={7}>Agar aap registered ho toh puri details dikh jayengi:</SI>
          </StepList>

          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-5 border border-green-200 dark:border-green-800 my-4">
            <p className="font-bold text-green-800 dark:text-green-300 text-sm mb-3">Kya Dikhega Screen Par:</p>
            <ul className="text-xs text-[var(--color-text-muted)] space-y-2">
              <li>✓ Naam (jaise registration mein bhara tha)</li>
              <li>✓ Gaon ka naam, District, State</li>
              <li>✓ Mobile number (last 4 digits)</li>
              <li>✓ Bank account number (last 4 digits)</li>
              <li>✓ Registration date</li>
              <li>✓ Status: Active / Pending / Rejected</li>
              <li>✓ Kitni installments mili (agar Active hai toh)</li>
            </ul>
          </div>

          <WB>
            <strong>Tip:</strong> "Not Found" dikh raha hai? Do baar check karo — Aadhaar sahi type kiya? Agar phir bhi nahi mil raha toh registration hi nahi hua hoga. Dobara apply karo.
          </WB>
        </section>

        {/* IMAGE 2: Status Check Screenshot */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-beneficiary-status-screenshot.webp"
            alt="PM Kisan beneficiary status check result screen — showing active status with payment details"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Beneficiary Status Result — Active Dikh Raha Hai
          </p>
        </div>

        {/* Section 3: Understanding Status */}
        <section className="mb-8">
          <SH>Status Ka Matlab Kya Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Teen status ho sakte hain — har ek ka alag matlab hai.
          </p>

          <div className="space-y-3">
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-xl">
              <h3 className="font-black text-green-800 dark:text-green-300 text-sm mb-2">✅ Active</h3>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Matlab sab theek hai. Aap verified ho, payment eligible ho. Agli kist aayegi automatically. Bas bank account active rakho, eKYC complete rakho.
              </p>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-xl">
              <h3 className="font-black text-amber-800 dark:text-amber-300 text-sm mb-2">⏳ Pending / Under Verification</h3>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-2">
                Matlab application submit ho gayi hai lekin abhi verify nahi hui. Yeh normal hai — 7-15 din lagte hain normally.
              </p>
              <p className="text-xs text-[var(--color-text-muted)]">
                <strong>Kya karein:</strong> Wait karo. 15 din se zyada ho raha hai toh CSC jaao ya helpline 155261 par call karo.
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-xl">
              <h3 className="font-black text-red-800 dark:text-red-300 text-sm mb-2">❌ Rejected</h3>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-2">
                Matlab koi problem hai. Portal par reason dikhega — woh dekho.
              </p>
              <p className="text-xs text-[var(--color-text-muted)]">
                <strong>Common reasons:</strong> Naam mismatch, land record issue, eKYC pending, bank account inactive. Reason ke hisaab se fix karo aur dobara apply karo.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Self vs CSC Registration */}
        <section className="mb-8">
          <SH>Self Registration vs CSC — Kya Farak Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Log confuse ho jaate hain — kya farak padta hai?
          </p>

          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Point</th>
                  <th className="p-3 text-left">Self Registration</th>
                  <th className="p-3 text-left">CSC Registration</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Cost', 'Free', '₹20-50 charge'],
                  ['Convenience', 'Ghar baithe', 'CSC jaana padega'],
                  ['Help', 'Khud karni padegi', 'Operator help karega'],
                  ['Mistake Correction', 'Khud karni padegi', 'Operator karega'],
                  ['Status Check', 'Same portal', 'Same portal'],
                  ['Processing Time', 'Same (7-15 days)', 'Same (7-15 days)'],
                  ['Payment', 'Same (direct to bank)', 'Same (direct to bank)'],
                ].map(([point, self, csc], i) => (
                  <tr key={point} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-green-50/40 dark:bg-green-900/10'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-[var(--color-text)]">{point}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{self}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{csc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <IB>
            <strong>Bottom Line:</strong> Status check karne mein koi farak nahi padta. Dono ka same portal par same tarika se check hota hai. Sirf registration process alag hai.
          </IB>
        </section>

        {/* Section 5: Common Problems */}
        <section className="mb-8">
          <SH>5 Common Problems + Solutions</SH>
          <div className="space-y-3">
            {[
              {
                problem: 'Status check karne par "Not Found" dikh raha hai',
                solution: 'Aadhaar number dobara check karo. Agar sahi hai toh matlab registration hi nahi hua. Dobara apply karo pmkisan.gov.in par.',
              },
              {
                problem: 'Naam galat dikh raha hai',
                solution: 'Registration mein typing mistake ho gayi hogi. "Edit Aadhaar Details" mein jaake correct karo. Aadhaar card se exact match hona chahiye.',
              },
              {
                problem: 'Mobile number galat hai',
                solution: 'Edit option se change kar sakte ho. Purane number par OTP aayega. Agar purana number band hai toh CSC jaana padega.',
              },
              {
                problem: 'Bank account number wrong hai',
                solution: 'Yeh serious hai — payment galat account mein jaayegi. Turant correct karo. Branch se IFSC code bhi verify karo.',
              },
              {
                problem: 'Pending dikh raha hai 30 din se zyada',
                solution: 'Helpline 155261 par call karo. Ya nearest Block Agriculture Office jaao. Woh log manually check karke bata denge ki kahan atka hai.',
              },
            ].map(({ problem, solution }, i) => (
              <div key={i} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
                <p className="font-bold text-red-700 dark:text-red-400 text-sm mb-2">❌ {problem}</p>
                <p className="text-xs text-green-700 dark:text-green-400"><strong>Solution:</strong> {solution}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: After Registration */}
        <section className="mb-8">
          <SH>Registration Ke Baad Kya Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Sirf apply karne se kaam nahi hoga. Yeh karna padega:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <h3 className="font-black text-blue-800 dark:text-blue-300 text-sm mb-2">1. eKYC Complete Karo</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Bina eKYC ke payment nahi aayegi. OTP ya CSC se 2 minute ka kaam hai.</p>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <h3 className="font-black text-green-800 dark:text-green-300 text-sm mb-2">2. Bank Account Verify Karo</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Aadhaar se link hona chahiye. NPCI seeding confirm karo branch se.</p>
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <h3 className="font-black text-amber-800 dark:text-amber-300 text-sm mb-2">3. Land Seeding Check Karo</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Khasra number portal par dikhna chahiye. Nahi hai toh patwari se contact karo.</p>
            </div>

            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl">
              <h3 className="font-black text-purple-800 dark:text-purple-300 text-sm mb-2">4. Regular Status Check</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Har 7-10 din mein check karo. Koi problem hai toh turant pata chalega.</p>
            </div>
          </div>
        </section>

        {/* Section 7: Helpline */}
        <section className="mb-8">
          <SH>Help Kahan Se Le?</SH>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-2">📞 Helpline</p>
              <p className="text-xs text-[var(--color-text-muted)]">155261 (Toll Free)</p>
              <p className="text-xs text-[var(--color-text-muted)]">Mon-Sat, 9 AM - 6 PM</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <p className="font-black text-blue-800 dark:text-blue-300 text-sm mb-2">🏢 Block Office</p>
              <p className="text-xs text-[var(--color-text-muted)]">Agriculture Officer se milo</p>
              <p className="text-xs text-[var(--color-text-muted)]">Written complaint do</p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl">
              <p className="font-black text-purple-800 dark:text-purple-300 text-sm mb-2">💻 CSC Center</p>
              <p className="text-xs text-[var(--color-text-muted)]">Nazdeeki CSC jaao</p>
              <p className="text-xs text-[var(--color-text-muted)]">₹20-30 charge lag sakta hai</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <p className="font-black text-amber-800 dark:text-amber-300 text-sm mb-2">📧 Email</p>
              <p className="text-xs text-[var(--color-text-muted)]">pmkisan-ict@gov.in</p>
              <p className="text-xs text-[var(--color-text-muted)]">Screenshot attach karo</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kisan Self Registration Status FAQ 2026 — Real Answers" />
        </section>

        {/* Conclusion */}
        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Bottom Line</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Khud registration kiya ya CSC se — status check karne ka tarika same hai. Bas Aadhaar number chahiye.
          </p>
          <ol className="space-y-2 text-sm text-green-800 dark:text-green-300 list-decimal list-inside">
            <li>pmkisan.gov.in par jao</li>
            <li>Beneficiary Status mein Aadhaar daalo</li>
            <li>Status check karo — Active, Pending ya Rejected</li>
            <li>eKYC complete rakho</li>
            <li>Har 7-10 din mein check karte raho</li>
          </ol>
        </div>

        <GovLink
          href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
          label="PM Kisan Beneficiary Status — Official Portal"
          guide="Abhi Check Karo"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmkisan.gov.in"
        />

        <CalcBanner
          icon="📊"
          title="Apna Total Benefit Calculate Karo"
          desc="Kitni installments mili, kitni pending — sab jaano"
          primaryCta={{ href: '/calculator/pm-kisan-benefit', label: '💰 Benefit Calculator →' }}
          secondaryCta={{ href: '/calculator', label: '🧮 Sab Utilities' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisan24viKist2026', l: '📅 24vi Kist' },
          { href: '/articles/PmKisanMasterGuide2026', l: '📚 Master Guide' },
          { href: '/articles/PmKisanEkycOnline2026', l: '🔐 eKYC Guide' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}