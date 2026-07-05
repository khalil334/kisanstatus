'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-07-06T08:00:00+05:30';
const MODIFIED = '2026-07-06T08:00:00+05:30';

const RELATED = [
  { slug: 'PmKisan24viKist2026', title: '24vi Kist Status', emoji: '📅' },
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Master Guide', emoji: '📚' },
  { slug: 'pm-kisan-fto-generated-ka-matlab-kya-hai', title: 'FTO Generated Meaning', emoji: '💳' },
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary List', emoji: '📋' },
  { slug: 'PmKisanEkycOnline2026', title: 'eKYC Guide', emoji: '🔐' },
  { slug: 'PmKisanPaymentFailedFix2026', title: 'Payment Failed Fix', emoji: '💸' },
];

const FAQS_DATA = [
  {
    q: '25vi kist kab aayegi?',
    a: 'Expected February-March 2027 mein. Pichhle saalon ka pattern dekhein toh Rabi season ke baad release hoti hai. Exact date government announce karegi December-January mein.',
  },
  {
    q: '25vi kist ka amount kitna hoga?',
    a: '₹2,000 — same as previous installments. Abhi tak koi increase announce nahi hua hai. Agar budget 2027 mein badhotri hoti hai toh shayad ₹2,500 ho sakta hai, par confirm nahi hai.',
  },
  {
    q: 'Kya 25vi kist ke liye dobara registration karna padega?',
    a: 'Nahi bhai. Registration permanent hai. Bas eKYC active honi chahiye aur bank details updated. Agar pehle se eligible ho toh automatically list mein aa jaoge.',
  },
  {
    q: '24vi miss ho gayi toh 25vi milegi?',
    a: 'Haan, agar eligibility maintain hai. 24vi ka arrears bhi milega jab problem fix hogi. Dono alag transactions mein aa sakte hain.',
  },
  {
    q: 'Naye kisan 25vi ke liye kab tak register kar sakte hain?',
    a: 'Registration kabhi bhi kar sakte ho. Lekin 25vi mein naam aane ke liye January 2027 tak enrollment + eKYC + land seeding complete hona chahiye. Late registration = next cycle mein milega.',
  },
  {
    q: 'Kya 25vi kist mein koi naya rule aayega?',
    a: 'Abhi tak koi official announcement nahi hai. Possible changes: stricter eKYC enforcement, direct Aadhaar-based payment without bank mapping, ya income ceiling revision. Updates ke liye portal check karte raho.',
  },
  {
    q: '25vi kist ka status kab check kar sakte hain?',
    a: 'Jab FTO generate hoga tab status dikhega. Usually release se 7-10 din pehle FTO banta hai. January-February 2027 mein regularly portal check karo.',
  },
];

export default function PmKisan25viKist2027({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">25vi Kist Guide</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">📅 Upcoming Installment</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan 25vi Kist 2027: Kab Aayegi, Kitni Milegi, Aur Abhi Se Kya Tayyari Karein
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 8 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        {/* IMAGE 1: Hero */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/articles/pm-kisan-25vi-kist-2027/hero-25vi-kist.webp'}
            alt="PM Kisan 25vi kist 2027 release date prediction and preparation guide"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            25vi Kist — Expected February-March 2027 · Abhi Se Tayyar Ho
          </p>
        </div>

        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-400 dark:border-blue-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-blue-800 dark:text-blue-300 mb-2">⏳ Abhi Release Nahi Hui Hai</h2>
          <p className="text-sm text-blue-900 dark:text-blue-200 leading-relaxed mb-2">
            Clear kar doon bhai — 25vi kist abhi tak release nahi hui. Expected timeline <strong>February-March 2027</strong> hai. Pichhle 3 saal ka pattern yahi dikhata hai ki Rabi harvest ke baad yeh kist aati hai.
          </p>
          <p className="text-sm text-blue-900 dark:text-blue-200 leading-relaxed">
            Lekin wait mat karo. <strong>Abhi se tayyari karo</strong> taaki jab release ho toh aapka naam pehle batch mein ho. Is guide mein batata hun kya karna hai abhi, kya expect karna hai baad mein.
          </p>
        </div>

        <section className="mb-8">
          <SH>25vi Kist Kab Aayegi? Timeline Samjho</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Government fixed date announce nahi karti pehle se. Lekin pichhle installments ka data analyze karke hum accurate prediction kar sakte hain. Dekho pattern:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Kist</th>
                  <th className="p-3 text-left">Release Date</th>
                  <th className="p-3 text-left">Amount</th>
                  <th className="p-3 text-left">Season</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['21vi', 'Feb 2025', '₹2,000', 'Rabi'],
                  ['22vi', 'Jun 2025', '₹2,000', 'Kharif Pre'],
                  ['23vi', 'Oct 2025', '₹2,000', 'Kharif Post'],
                  ['24vi', 'Feb-Mar 2026', '₹2,000', 'Rabi'],
                  ['25vi', 'Feb-Mar 2027 (Expected)', '₹2,000', 'Rabi'],
                ].map(([kist, date, amount, season], i) => (
                  <tr key={kist} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{kist}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{date}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-green-700 dark:text-green-400 font-bold">{amount}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{season}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <IB>
            <strong>Pattern Clear Hai:</strong> Har saal 3 kistein aati hain — Feb/Mar, Jun/Jul, Oct/Nov. 25vi Rabi cycle mein aayegi, matlab February ya March 2027. Budget session ke baad usually announcement hoti hai.
          </IB>
        </section>

        {/* IMAGE 2: Timeline Infographic */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-25vi-kist-2027/timeline-infographic.webp"
            alt="PM Kisan installment timeline 2024-2027 — visual release schedule chart"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            PM Kisan Installment Timeline — Pichhle 3 Saal Ka Pattern
          </p>
        </div>

        <section className="mb-8">
          <SH>Kitna Paisa Milega 25vi Mein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Current rate <strong>₹2,000 per installment</strong> hai. Saalana ₹6,000. Yeh 2019 se same hai — koi badhotri nahi hui abhi tak.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Kya 25vi mein badhega? <strong>Possible hai, confirmed nahi.</strong> Union Budget 2027 (February 2027 mein present hoga) mein announcement ho sakti hai. Kuch experts ₹2,500 ya ₹3,000 ki umeed jata rahe hain inflation adjust karne ke liye. Par jab tak official notification na aaye, ₹2,000 hi maano.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center">
              <p className="font-black text-green-800 dark:text-green-300 text-2xl mb-1">₹2,000</p>
              <p className="text-xs text-[var(--color-text-muted)]">Current Confirmed Rate</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl text-center">
              <p className="font-black text-amber-800 dark:text-amber-300 text-2xl mb-1">₹2,500?</p>
              <p className="text-xs text-[var(--color-text-muted)]">Possible Increase (Budget 2027)</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>Abhi Se Kya Tayyari Karein? Checklist</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Sabse badi galti jo kisan karte hain — release ka wait karte hain, phir last minute mein bhag-daud. Smart wahi hai jo <strong>pehle se ready ho.</strong> Yeh checklist follow karo:
          </p>
          <StepList>
            <SI n={1}><strong>eKYC Check Karo:</strong> Portal par Beneficiary Status → "eKYC: YES" dikhna chahiye. Nahi dikha toh abhi karo. OTP ya CSC dono option hain.</SI>
            <SI n={2}><strong>Bank Details Verify Karo:</strong> Account number, IFSC, Aadhaar seeding — teeno sahi hone chahiye. Bank merger hua hai toh naya IFSC update karo.</SI>
            <SI n={3}><strong>Land Records Update Rakho:</strong> Zameen bechi ya khareedi hai toh Khatauni update karwao patwari se. Land seeding pending = payment fail.</SI>
            <SI n={4}><strong>Mobile Number Active Rakho:</strong> Registered SIM band ya port ho gaya toh OTP nahi aayega. Change hua toh CSC par update karwao.</SI>
            <SI n={5}><strong>Name Consistency Check:</strong> Aadhaar = Bank = Portal — teeno jagah exactly same spelling. Ek letter ka farak bhi reject karta hai.</SI>
            <SI n={6}><strong>Account Active Rakho:</strong> 6 mahine se transaction nahi hua toh dormant ho jayega. Beech-beech mein chhota deposit karte raho.</SI>
          </StepList>
          <DB>
            <strong>Critical Deadline:</strong> 25vi mein naam aane ke liye sab kuch <strong>January 2027 tak</strong> complete hona chahiye. Uske baad ki corrections next cycle mein reflect hongi.
          </DB>
        </section>

        {/* IMAGE 3: Preparation Checklist */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-25vi-kist-2027/preparation-checklist.webp"
            alt="PM Kisan 25vi kist preparation checklist — documents and verification steps visual"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            25vi Kist Tayyari — 6 Point Checklist Follow Karo
          </p>
        </div>

        <section className="mb-8">
          <SH>Naye Kisan — 25vi Ke Liye Kab Tak Register Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Agar abhi tak registered nahi ho toh suno bhai. Registration kabhi bhi kar sakte ho — koi deadline nahi hai. Lekin specific kist mein naam aane ke liye timing matter karti hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            25vi kist (Feb-Mar 2027) mein include hone ke liye aapko <strong>December 2026 - January 2027</strong> tak poora process complete karna hoga. Isme enrollment + state verification + eKYC + land seeding sab shamil hai. Verification mein 2-4 hafte lagte hain, isliye November-December mein register karna safe hai.
          </p>
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4">
            <p className="font-black text-green-800 dark:text-green-300 text-sm mb-2">Ideal Timeline for New Farmers:</p>
            <ul className="space-y-1 text-xs text-[var(--color-text-muted)]">
              <li>✓ <strong>Sep-Oct 2026:</strong> Enrollment + Documents submit</li>
              <li>✓ <strong>Nov-Dec 2026:</strong> State verification complete</li>
              <li>✓ <strong>Dec 2026-Jan 2027:</strong> eKYC + Land seeding done</li>
              <li>✓ <strong>Feb-Mar 2027:</strong> 25vi kist mein naam aayega ✅</li>
            </ul>
          </div>
          <WB>
            <strong>Note:</strong> Agar January 2027 ke baad register kiya toh 25vi miss hogi. Phir 26vi (Jun-Jul 2027) mein milegi. Jaldi karna behtar hai.
          </WB>
        </section>

        <section className="mb-8">
          <SH>Kya Naye Rules Aa Sakte Hain 25vi Mein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Official announcement abhi nahi hui, lekin policy trends aur expert discussions ke basis par kuch possible changes hain:
          </p>
          <div className="space-y-3">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <p className="font-black text-blue-800 dark:text-blue-300 text-sm mb-1">🔒 Stricter eKYC Enforcement</p>
              <p className="text-xs text-[var(--color-text-muted)]">Government fake beneficiaries hatane par zor de rahi hai. 25vi se pehle incomplete eKYC walon ko directly exclude kiya ja sakta hai — no grace period.</p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl">
              <p className="font-black text-purple-800 dark:text-purple-300 text-sm mb-1">🆔 Aadhaar-Based Direct Payment</p>
              <p className="text-xs text-[var(--color-text-muted)]">Bank mapping ki zaroorat khatam ho sakti hai. Seedha Aadhaar-linked account mein paisa jaaye — NPCI automatic routing karega. Payment failures kam honge.</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <p className="font-black text-amber-800 dark:text-amber-300 text-sm mb-1">📊 Income Ceiling Revision</p>
              <p className="text-xs text-[var(--color-text-muted)]">Currently institutional landholders excluded hain. Kuch states ne small/marginal farmer definition revise ki hai. Central level par bhi discussion chal rahi hai.</p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-1">💰 Amount Increase Possibility</p>
              <p className="text-xs text-[var(--color-text-muted)]">Inflation aur election cycle ko dekhte hue ₹2,500-3,000 possible hai. Budget 2027 mein clear hoga. Abhi assume mat karo.</p>
            </div>
          </div>
          <IB>
            <strong>Advice:</strong> Naye rules ka wait mat karo. Current requirements ke hisaab se abhi sab complete karo. Agar rules change hote hain toh automatically apply honge — aapko extra kuch nahi karna padega.
          </IB>
        </section>

        {/* IMAGE 4: Success Celebration */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-25vi-kist-2027/kist-success-celebration.webp"
            alt="Indian farmer celebrating PM Kisan installment credit on mobile phone in field"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Jab Kist Aaye — Prepared Rehoge Toh Tension Nahi Hogi
          </p>
        </div>

        <section className="mb-8">
          <SH>Status Kaise Track Karein Jab Release Kareeb Ho?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            January 2027 se regularly check karna shuru karo. Yeh sequence follow karo:
          </p>
          <StepList>
            <SI n={1}><strong>Jan 2027:</strong> Portal par Beneficiary Status check karo — "Active" dikhna chahiye</SI>
            <SI n={2}><strong>Feb 2027 Early:</strong> News/Budget announcements follow karo — exact date yahan milegi</SI>
            <SI n={3}><strong>Release Se 7-10 Din Pehle:</strong> "FTO Generated" status dikhega — iska matlab paisa process mein hai</SI>
            <SI n={4}><strong>Release Day:</strong> "Credited to Bank Account" — paisa aa gaya ✅</SI>
            <SI n={5}><strong>Agar Fail Dikha:</strong> Turant payment failed guide padho aur bank jao</SI>
          </StepList>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kisan 25vi Kist FAQ 2027 — Predictions & Preparations" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Bottom Line</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            25vi kist February-March 2027 mein expected hai. Amount ₹2,000 confirmed, increase possible but not guaranteed. Smart kisan woh hai jo release ka wait na kare — abhi se eKYC, bank seeding, land records sab perfect rakhe. Jab kist aaye toh tension free raho.
          </p>
          <ol className="space-y-2 text-sm text-green-800 dark:text-green-300 list-decimal list-inside">
            <li>Aaj hi eKYC status check karo</li>
            <li>Bank details verify karo</li>
            <li>Land records updated rakho</li>
            <li>January 2027 se status track karna shuru karo</li>
            <li>Budget 2027 announcements follow karo</li>
          </ol>
        </div>

        <GovLink
          href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
          label="PM Kisan Beneficiary Status — 25vi Kist Track"
          guide="Abhi Status Check Karo"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmkisan.gov.in"
        />

        <CalcBanner
          icon="📅"
          title="Total Benefit Calculate Karo"
          desc="21vi se 25vi tak kitna mila, kitna pending"
          primaryCta={{ href: '/calculator/installment-tracker', label: '📅 Tracker →' }}
          secondaryCta={{ href: '/calculator/pm-kisan-benefit', label: '💰 Benefit Calc' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisan24viKist2026', l: '📅 24vi Kist' },
          { href: '/articles/PmKisanMasterGuide2026', l: '📚 Master Guide' },
          { href: '/articles/PmKisanEkycOnline2026', l: '🔐 eKYC' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}