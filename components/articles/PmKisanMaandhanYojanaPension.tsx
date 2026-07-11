'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';
import { useState, useEffect } from 'react';

const PUBLISHED = '2026-07-10T08:00:00+05:30';
const MODIFIED = '2026-07-10T08:00:00+05:30';

const RELATED = [
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Master Guide', emoji: '📚' },
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary List', emoji: '📋' },
  { slug: 'PmKisanEkycOnline2026', title: 'eKYC Guide', emoji: '🔐' },
  { slug: 'PmfbyCropInsurance2026', title: 'PMFBY Insurance', emoji: '🌾' },
];

const FAQS_DATA = [
  {
    q: 'PM Kisan Maandhan Yojana kya hai?',
    a: 'Ye ek pension scheme hai jisme chhote kisan har mahine thoda-thoda paisa jama karte hain. 60 saal ki umar ke baad unhe ₹3000 har mahine pension milti hai.',
  },
  {
    q: 'Kaun iske liye eligible hai?',
    a: 'Wo kisan jinke paas 2 hectare (5 acre) se kam zameen hai aur unki umar 18 se 40 saal ke beech hai.',
  },
  {
    q: 'Har mahine kitna paisa dena padta hai?',
    a: 'Umra par depend karta hai. 18 saal walon ko ₹55 aur 40 saal walon ko ₹200 har mahine dena padta hai.',
  },
  {
    q: 'Agar beech mein paisa dena band kar dein toh?',
    a: 'Pension cancel nahi hoti. Aap jab chahein dobara shuru kar sakte hain. Jo paisa jama hua wo safe rehta hai.',
  },
  {
    q: 'Kya PM Kisan Samman Nidhi ke sath ye scheme le sakte hain?',
    a: 'Haan bilkul. Dono alag schemes hain. PM Kisan se ₹6000 saal ka milta hai, aur Maandhan se 60 saal ke baad ₹3000 har mahine.',
  },
  {
    q: '60 saal se pehle maut ho gayi toh?',
    a: 'Patni ko 50% pension milti hai. Agar patni bhi nahi hai, toh jama kiya hua paisa nominee ko wapas mil jata hai with interest.',
  },
  {
    q: 'Kaise apply karein?',
    a: 'Nazdiki CSC center, Common Service Center, ya bank branch mein jakar apply kar sakte ho. Online bhi option hai.',
  },
  {
    q: 'Kya government bhi paisa deti hai?',
    a: 'Haan, jitna paisa aap dalte ho utna hi sarkar bhi dal ti hai. Matlab aap ₹100 dalo, sarkar ₹100 dalegi — total ₹200 jama hoga.',
  },
];

// Countdown Button Component
function CountdownButton({ 
  href, 
  label, 
  seconds = 5,
  variant = 'primary' 
}: { 
  href: string;
  label: string;
  seconds?: number;
  variant?: 'primary' | 'secondary' | 'success';
}) {
  const [countdown, setCountdown] = useState<number | null>(null);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleClick = () => {
    if (countdown === null) {
      setCountdown(seconds);
      setIsRedirecting(true);
    }
  };

  useEffect(() => {
    if (countdown !== null && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      window.open(href, '_blank', 'noopener,noreferrer');
      setCountdown(null);
      setIsRedirecting(false);
    }
  }, [countdown, href]);

  const buttonColors = {
    primary: 'bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600',
    secondary: 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600',
    success: 'bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600',
  };

  return (
    <button
      onClick={handleClick}
      disabled={isRedirecting && countdown !== null}
      className={`
        w-full py-4 px-6 rounded-xl font-bold text-white text-base
        transition-all duration-200 shadow-md
        ${buttonColors[variant]}
        ${isRedirecting && countdown !== null ? 'cursor-wait opacity-90' : 'cursor-pointer hover:shadow-lg'}
        flex items-center justify-center gap-2
      `}
    >
      {isRedirecting && countdown !== null ? (
        <>
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Redirecting in {countdown}s...</span>
        </>
      ) : (
        <>
          <span>🔗</span>
          <span>{label}</span>
        </>
      )}
    </button>
  );
}

// External Link Card with Countdown
function ExternalLinkCard({
  title,
  description,
  href,
  buttonText,
  icon,
  variant = 'primary'
}: {
  title: string;
  description: string;
  href: string;
  buttonText: string;
  icon: string;
  variant?: 'primary' | 'secondary' | 'success';
}) {
  return (
    <div className="bg-white dark:bg-gray-800 border-2 border-[var(--color-border)] rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3 mb-3">
        <span className="text-3xl">{icon}</span>
        <div>
          <h3 className="font-black text-base text-[var(--color-text)] mb-1">{title}</h3>
          <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{description}</p>
        </div>
      </div>
      <CountdownButton 
        href={href} 
        label={buttonText} 
        seconds={5}
        variant={variant}
      />
    </div>
  );
}

export default function PmKisanMaandhanYojanaPension({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Maandhan Yojana</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Pension Scheme Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Maandhan Yojana: 60 Saal Ke Baad ₹3000 Pension Ka Sahi Tarika
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white">KisanStatus Team</Link></span>
            <span> {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>️ 16 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        {/* Hero Image */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-maandhan-yojana-pension/maandhan-hero.webp"
            alt="Elderly farmer receiving pension happily under PM Kisan Maandhan Yojana"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px' }}
            priority
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)]">
            Maandhan Yojana — Buzurgi Ki Suraksha
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-8">
          <SH>60 Saal Ke Baad Kheti Kaun Karega?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ek baat sach batao — jab kisan budha ho jata hai, toh kheti kaun karta hai? Bete shehar chale jaate hain. Zameen banjar pad jaati hai. Aur buzurg kisan ke paas koi income nahi bachti.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Isi problem ko dekh kar sarkar ne <strong>PM Kisan Maandhan Yojana (PM-KMY)</strong> banayi. Iska seedha matlab hai — "kisan ki buzurgi ka sahara".
          </p>
          
          <Image
            src="/images/articles/pm-kisan-maandhan-yojana-pension/elderly-farmer-field.webp"
            alt="Old farmer working in field worrying about future"
            width={800}
            height={450}
            className="w-full rounded-xl my-4"
          />

          <DB>
            <strong>Field Observation:</strong>
            <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">
              CSC operators aksar batate hain ki kai aise kisan hain jo 35-40 saal ki umar mein join karte hain, aur 60 ke baad unhe ye pension family par depend na karne ka confidence deti hai. Ek common feedback hai ki ₹3000 gaon ke basic expenses — bijli, paani, dawai — ke liye kaafi helpful hota hai.
            </p>
          </DB>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Is article mein hum puri detail mein samjhenge ki ye scheme kya hai, kaun join kar sakta hai, kitna paisa lagta hai, aur kaise apply karna hai. <Link href="/articles/PmKisanMasterGuide2026" className="underline text-green-700 dark:text-green-400">PM Kisan Samman Nidhi</Link> se ye alag scheme hai, isliye dhyan se padho.
          </p>
        </section>

        {/* SECTION 1: What is PM-KMY */}
        <section className="mb-8">
          <SH>PM Kisan Maandhan Yojana Aakhir Hai Kya?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Seedhi bhasha mein samjhata hoon. Ye ek <strong>pension scheme</strong> hai jo chhote aur seemant (marginal) kisanon ke liye banayi gayi hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Iska concept simple hai:
          </p>
          <ul className="list-disc list-inside text-sm text-[var(--color-text-muted)] space-y-2 mb-4">
            <li>Kisan jawani mein har mahine thoda paisa jama karta hai (₹55 se ₹200 tak)</li>
            <li>Sarkar utna hi paisa apni taraf se jama karti hai</li>
            <li>Ye paisa LIC aur pension fund managers manage karte hain</li>
            <li>Jab kisan 60 saal ka ho jata hai, use har mahine ₹3000 pension milti hai</li>
            <li>Ye pension umar bhar milti rehti hai</li>
          </ul>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Matlab aapne jawani mein jo thoda sa paisa daala, buzurgi mein wo aapko har mahine wapas mil raha hai — aur sarkar ka hissa bhi. Ye koi choti baat nahi hai.
          </p>
        </section>

        {/* SECTION 2: Eligibility */}
        <section className="mb-8">
          <SH>Kaun Join Kar Sakta Hai? (Eligibility Criteria)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Har kisan is scheme mein nahi aa sakta. Sarkar ne kuch conditions rakhi hain. Ye sab conditions puri honi chahiye:
          </p>
          <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 rounded-xl p-5 mb-6">
            <p className="text-sm font-black text-green-800 dark:text-green-300 mb-3">
              ✅ Eligible Kaun Hai:
            </p>
            <ul className="list-disc list-inside text-xs text-green-800 dark:text-green-300 space-y-2">
              <li>Umra <strong>18 se 40 saal</strong> ke beech honi chahiye</li>
              <li>Zameen <strong>2 hectare (5 acre) se kam</strong> honi chahiye</li>
              <li>Aap <strong>chhote ya seemant kisan</strong> hone chahiye</li>
              <li>Aadhaar card aur bank account hona zaroori hai</li>
              <li>Mobile number Aadhaar se link hona chahiye</li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-500 dark:border-red-700 rounded-xl p-5">
            <p className="text-sm font-black text-red-800 dark:text-red-300 mb-3">
              ❌ Kaun Join Nahi Kar Sakta:
            </p>
            <ul className="list-disc list-inside text-xs text-red-800 dark:text-red-300 space-y-2">
              <li>Jo log <strong>income tax</strong> dete hain</li>
              <li>Jo <strong>NPS (National Pension System)</strong> ya <strong>EPS (Employees Pension Scheme)</strong> ke member hain</li>
              <li>Jo <strong>ESIC</strong> ke under aate hain</li>
              <li>Jinke paas <strong>2 hectare se zyada</strong> zameen hai</li>
              <li>Jo <strong>government employee</strong> hain</li>
              <li>Jinki umra <strong>40 saal se zyada</strong> hai</li>
            </ul>
          </div>

          <Image
            src="/images/articles/pm-kisan-maandhan-yojana-pension/eligibility-check.webp"
            alt="Farmer checking eligibility for Maandhan Yojana"
            width={800}
            height={450}
            className="w-full rounded-xl my-4"
          />

          <IB>
            <strong>Important:</strong> Agar aap <Link href="/articles/PmKisanBeneficiaryList2026" className="underline text-green-700 dark:text-green-400">PM Kisan Samman Nidhi</Link> ke beneficiary hain, toh aap automatically Maandhan Yojana ke liye bhi eligible hain. Dono schemes ek saath chal sakti hain.
          </IB>
        </section>

        {/* SECTION 3: Contribution Table */}
        <section className="mb-8">
          <SH>Har Mahine Kitna Paisa Dena Padta Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ye sabse important sawal hai. Contribution aapki umra par depend karta hai. Jitni jaldi join karoge, utna kam paisa lagega aur utni zyada pension milegi.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Entry Age</th>
                  <th className="p-3 text-left">Kisan Ka Contribution</th>
                  <th className="p-3 text-left">Sarkar Ka Contribution</th>
                  <th className="p-3 text-left">Total Monthly</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['18 saal', '₹55', '₹55', '₹110'],
                  ['25 saal', '₹100', '₹100', '₹200'],
                  ['30 saal', '₹130', '₹130', '₹260'],
                  ['35 saal', '₹165', '₹165', '₹330'],
                  ['40 saal', '200', '₹200', '₹400'],
                ].map(([age, farmer, govt, total], i) => (
                  <tr key={age} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{age}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{farmer}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-green-600 dark:text-green-400 font-bold">{govt}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text)] font-bold">{total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <WB>
            <strong>Example Se Samjho:</strong>
            <p className="text-xs text-[var(--color-text-muted)] mt-2">
              Agar aapne 25 saal ki umar mein join kiya, toh aapko har mahine ₹100 dena hai. Sarkar bhi ₹100 dalegi. 35 saal tak (60 saal ki umar tak) aap total ₹42,000 jama karoge. Lekin 60 ke baad aapko har mahine ₹3000 milenge. 14 mahine mein hi aapka jama kiya hua paisa wapas aa jayega. Uske baad jo bhi milega wo pure profit hai.
            </p>
          </WB>

          <Image
            src="/images/articles/pm-kisan-maandhan-yojana-pension/contribution-chart.webp"
            alt="Chart showing monthly contribution based on age"
            width={800}
            height={600}
            className="w-full rounded-xl my-6"
          />
        </section>

        {/* SECTION 4: How to Apply */}
        <section className="mb-8">
          <SH>Apply Kaise Karein? (3 Tareeke)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Apply karne ke 3 tareeke hain. Jo aapko aasan lage wo chuno:
          </p>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">🏪 Method 1: CSC Center Se (Sabse Aasan)</h3>
          <StepList>
            <SI n={1}>Nazdiki <Link href="/articles/PmKisanCscRegistrationCharges" className="underline text-green-700 dark:text-green-400">CSC center</Link> par jao.</SI>
            <SI n={2}>Aadhaar card, bank passbook, aur passport size photo le jao.</SI>
            <SI n={3}>CSC operator ko bolo "PM Kisan Maandhan Yojana mein enroll karna hai".</SI>
            <SI n={4}>Wo aapki details portal par dalega.</SI>
            <SI n={5}>Aapka contribution auto-debit ke liye bank account link hoga.</SI>
            <SI n={6}>Ek acknowledgement slip milegi. Sambhal kar rakho.</SI>
          </StepList>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">🏦 Method 2: Bank Branch Se</h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Agar CSC door hai, toh apne bank branch chale jao. Wahan bhi ye facility available hai. Form milega, bharo, submit karo.
          </p>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">🌐 Method 3: Online (Self Service)</h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Agar aap tech-savvy ho, toh <strong>maandhan.in</strong> website par jakar khud apply kar sakte ho. Lekin ismein thodi technical knowledge chahiye.
          </p>

          <Image
            src="/images/articles/pm-kisan-maandhan-yojana-pension/csc-enrollment.webp"
            alt="Farmer enrolling in Maandhan Yojana at CSC center"
            width={800}
            height={450}
            className="w-full rounded-xl my-4"
          />
        </section>

        {/* SECTION 5: Documents */}
        <section className="mb-8">
          <SH>Documents Ki List</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Apply karne se pehle ye documents ready rakho:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { doc: 'Aadhaar Card', note: 'Original + photocopy. Mobile number link hona chahiye.' },
              { doc: 'Bank Passbook', note: 'Jis account se monthly contribution katega.' },
              { doc: 'Passport Size Photo', note: '2-3 photos le jao, kaam aa jaati hain.' },
              { doc: 'Mobile Phone', note: 'OTP ke liye. Aadhaar wala number.' },
              { doc: 'Land Record (Khatauni)', note: 'Ye prove karta hai ki aap chhote kisan ho.' },
              { doc: 'Age Proof', note: 'Aadhaar mein DOB likha hai, wahi kaafi hai.' },
            ].map(({ doc, note }) => (
              <div key={doc} className="p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
                <p className="font-black text-sm text-[var(--color-text)] mb-1">📄 {doc}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: Benefits Breakdown */}
        <section className="mb-8">
          <SH>60 Saal Ke Baad Kya Milega? (Full Calculation)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ab pura hisaab dekhte hain:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Joining Age</th>
                  <th className="p-3 text-left">Monthly Payment</th>
                  <th className="p-3 text-left">Total Investment (60 tak)</th>
                  <th className="p-3 text-left">Pension (Monthly)</th>
                  <th className="p-3 text-left">Break-Even</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['18 saal', '₹55', '₹27,720', '₹3,000', '9 mahine'],
                  ['25 saal', '₹100', '₹42,000', '₹3,000', '14 mahine'],
                  ['30 saal', '₹130', '₹46,800', '₹3,000', '16 mahine'],
                  ['35 saal', '₹165', '₹49,500', '3,000', '17 mahine'],
                  ['40 saal', '₹200', '₹48,000', '₹3,000', '16 mahine'],
                ].map(([age, monthly, total, pension, breakeven], i) => (
                  <tr key={age} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{age}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{monthly}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{total}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-green-600 dark:text-green-400 font-bold">{pension}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-amber-600 dark:text-amber-400">{breakeven}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Jitna paisa tumne daala, wo 1-1.5 saal mein wapas aa jata hai. Uske baad jo bhi milega wo pure bonus hai. Aur pension maut tak milti rehti hai.
          </p>
        </section>

        {/* SECTION 7: What If Death */}
        <section className="mb-8">
          <SH>Agar 60 Saal Se Pehle Maut Ho Jaye Toh?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ye sawal bahut logon ke mann mein aata hai. Aur iska jawab bhi clear hai:
          </p>
          <div className="space-y-3">
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-xl">
              <p className="text-sm text-blue-800 dark:text-blue-300">
                <strong>👤 Kisan Ki Maut:</strong> Agar kisan ki maut 60 saal se pehle ho jaye, toh uski <strong>patni ko 50% pension</strong> (₹1500 har mahine) milti hai. Ye pension bhi umar bhar milti rehti hai.
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-xl">
              <p className="text-sm text-purple-800 dark:text-purple-300">
                <strong> Dono Ki Maut:</strong> Agar kisan aur patni dono ki maut ho jaye, toh <strong>nominee ko pura paisa wapas</strong> milta hai jo jama hua tha — with interest.
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-xl">
              <p className="text-sm text-green-800 dark:text-green-300">
                <strong>👤 60 Ke Baad Maut:</strong> Agar pension shuru hone ke baad kisan ki maut ho jaye, toh <strong>patni ko 50% pension</strong> (₹1500 har mahine) umar bhar milti rehti hai. Official documents ke mutabik, pension corpus spouse ko family pension ke roop mein jaari rehta hai.
              </p>
            </div>
          </div>
          <Image
            src="/images/articles/pm-kisan-maandhan-yojana-pension/family-protection.webp"
            alt="Family protected under Maandhan Yojana even after farmer death"
            width={800}
            height={450}
            className="w-full rounded-xl my-4"
          />
        </section>

        {/* SECTION 8: Common Problems */}
        <section className="mb-8">
          <SH>Common Problems Aur Solutions</SH>
          <div className="space-y-3">
            {[
              { 
                problem: 'Monthly contribution auto-debit nahi ho raha', 
                solution: 'Bank account mein sufficient balance rakho. Agar account band ho gaya toh naya account link karo.' 
              },
              { 
                problem: 'Pension nahi aa rahi 60 ke baad', 
                solution: 'LIC pension office mein contact karo. Apna enrollment number aur Aadhaar le jao.' 
              },
              { 
                problem: 'Naam ya details galat daal diye', 
                solution: 'CSC center par jakar correction form bharein. ₹20-30 lagenge.' 
              },
              { 
                problem: '2-3 mahine contribution miss ho gaya', 
                solution: 'Koi baat nahi. Jab bhi ho sake, missed amount jama kar do. Pension cancel nahi hoti.' 
              },
              { 
                problem: 'State change ho gaya (ek state se dusre)', 
                solution: 'Naye state ke CSC center par jakar transfer karwa lo. Process free hai.' 
              },
            ].map(({ problem, solution }, i) => (
              <div key={i} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
                <p className="font-black text-sm text-red-600 dark:text-red-400 mb-2"> {problem}</p>
                <p className="text-xs text-green-700 dark:text-green-400"><strong>✅ Fix:</strong> {solution}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 9: Comparison */}
        <section className="mb-8">
          <SH>PM Kisan Samman Nidhi Se Kya Farq Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bahut log confuse ho jaate hain. Dono schemes alag hain. Dekho farq:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Feature</th>
                  <th className="p-3 text-left">PM Kisan Samman Nidhi</th>
                  <th className="p-3 text-left">PM Kisan Maandhan</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Type', 'Direct Benefit Transfer', 'Pension Scheme'],
                  ['Amount', '₹6000 saal ka', '₹3000 har mahine (60 ke baad)'],
                  ['Kisko Milega', 'Sabhi chhote kisan', 'Jo join karein'],
                  ['Age Limit', 'Koi nahi', '18-40 saal join karne ke liye'],
                  ['Contribution', 'Koi nahi (free)', '₹55-₹200 har mahine'],
                  ['Duration', 'Jab tak eligible', 'Umar bhar pension'],
                ].map(([feature, pmkisan, maandhan], i) => (
                  <tr key={feature} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{feature}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{pmkisan}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-green-600 dark:text-green-400 font-bold">{maandhan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <IB>
            <strong>Best Strategy:</strong> Dono schemes ek saath join karo. PM Kisan se abhi ₹6000 saal ka milega, aur Maandhan se 60 ke baad ₹3000 har mahine. Dono milakar ek strong financial safety net banega.
          </IB>
        </section>

        {/* SECTION 10: State Wise */}
        <section className="mb-8">
          <SH>State Wise Implementation</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ye scheme pure India mein lagu hai. Lekin kuch states mein iski popularity zyada hai:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { state: 'Uttar Pradesh', note: 'Sabse zyada enrollments. Har block mein CSC hai.' },
              { state: 'Bihar', note: 'Bahut popular hai. Free camps lagte hain.' },
              { state: 'Madhya Pradesh', note: 'Mukhyamantri Kisan Kalyan ke saath combine benefit.' },
              { state: 'Rajasthan', note: 'Desert areas mein bahut kaam aa raha hai.' },
              { state: 'Maharashtra', note: 'Vidarbha ke cotton farmers join kar rahe hain.' },
              { state: 'Punjab/Haryana', note: 'Chhote farmers ke liye best option.' },
            ].map(({ state, note }) => (
              <div key={state} className="p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
                <p className="font-black text-sm text-[var(--color-text)] mb-1">📍 {state}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{note}</p>
              </div>
            ))}
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Apne state ke baare mein aur janne ke liye <Link href="/beneficiary-list" className="underline text-green-700 dark:text-green-400">state-wise page</Link> par jao. Wahan local CSC centers ki list milti hai.
          </p>
        </section>

        {/* SECTION 11: Practical Limitations */}
        <section className="mb-8">
          <SH>Real Challenges Jo Samajhna Zaroori Hain</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Scheme achhi hai, lekin kuch practical challenges bhi hain:
          </p>
          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-xl mb-3">
            <p className="text-sm text-amber-800 dark:text-amber-300">
              <strong>⚠️ CSC Availability:</strong> Kuch remote areas mein CSC centers door hain. Travel karna padta hai, jo chhote farmers ke liye extra kharcha hai.
            </p>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-xl mb-3">
            <p className="text-sm text-amber-800 dark:text-amber-300">
              <strong>⚠️ Processing Time:</strong> 60 saal hone ke baad pension start hone mein 2-3 mahine lag sakte hain. Documentation complete hona zaroori hai.
            </p>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-xl mb-3">
            <p className="text-sm text-amber-800 dark:text-amber-300">
              <strong>️ Missed Contributions:</strong> Agar monthly paisa nahi diya toh baad mein penalty ke saath bharna padta hai. Consistent payment zaroori hai.
            </p>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-xl">
            <p className="text-sm text-amber-800 dark:text-amber-300">
              <strong>⚠️ Correction Charges:</strong> Naam, DOB, ya bank details mein correction karne par ₹20-50 lagte hain. Isliye enrollment ke waqt details sahi check karo.
            </p>
          </div>
        </section>

        {/* SECTION 12: Common Confusions */}
        <section className="mb-8">
          <SH>Kuch Galat Fahmiyan Jo Door Karni Zaroori Hain</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Kuch log sochte hain ki ye scheme fraud hai ya pension kabhi nahi milegi. Sach ye hai ki ye LIC aur government jointly manage karti hain, aur ab tak lakhon kisanon ko regular pension mil rahi hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ek aur common confusion hai ki ₹3000 bahut kam hai. Lekin gaon ke expenses ke hisaab se ye amount bijli, paani, aur dawai ke liye kaafi helpful hota hai — aur ye har mahine guaranteed milega.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Kuch log sochte hain ki sarkar baad mein rules badal degi. Lekin ye ek contractual scheme hai. Ek baar join kiya toh terms lock ho jaate hain.
          </p>
        </section>

        {/* External Links Section with Countdown Buttons */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Official Links aur Resources
          </h2>
          <div className="space-y-4">
            <ExternalLinkCard
              title="Official Maandhan Portal"
              description="Yahan se online apply karein, apna status check karein, aur scheme ki puri jaankari lein."
              href="https://maandhan.in"
              buttonText="Official Portal Par Jayein"
              icon="🌐"
              variant="primary"
            />
            <ExternalLinkCard
              title="PM Kisan Samman Nidhi"
              description="PM Kisan ki beneficiary list check karein aur eKYC complete karein."
              href="https://pmkisan.gov.in"
              buttonText="PM Kisan Portal"
              icon="💰"
              variant="secondary"
            />
            <ExternalLinkCard
              title="CSC Center Locator"
              description="Nazdiki CSC center dhoondhein jahan jakar aap Maandhan Yojana mein enroll kar sakte hain."
              href="https://find.csc.gov.in"
              buttonText="CSC Dhoondhein"
              icon="🏪"
              variant="success"
            />
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kisan Maandhan Yojana FAQ" />
        </section>

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisanMasterGuide2026', l: ' Master Guide' },
          { href: '/articles/PmKisanBeneficiaryList2026', l: '📋 Beneficiary List' },
          { href: '/articles/PmfbyCropInsurance2026', l: '🌾 PMFBY Insurance' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}