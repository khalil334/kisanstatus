'use client';

import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { SI, StepList, IB, WB, DB, SH, GovLink, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { MaandhanArticleMeta } from '@/lib/maandhan-data';

const PUBLISHED = '2024-01-15T08:00:00+05:30';
const MODIFIED = '2026-07-21T08:00:00+05:30';

const RELATED_CARDS = [
  { 
    slug: 'pm-kisan-maandhan-registration-2026', 
    title: 'Complete Registration Guide', 
    desc: 'Step-by-step process to apply online or at a CSC center.',
    emoji: '📝' 
  },
  { 
    slug: 'pm-kisan-maandhan-eligibility-documents', 
    title: 'Eligibility & Documents', 
    desc: 'Detailed checklist of documents and exact eligibility rules.',
    emoji: '📄' 
  },
  { 
    slug: 'pm-kisan-maandhan-pension-calculator', 
    title: 'Pension Calculator', 
    desc: 'Calculate exact monthly contribution based on your current age.',
    emoji: '🧮' 
  },
];

const FAQS_DATA = [
  {
    q: 'Agar main 60 saal se pehle scheme chhod doon, toh kya mera sara paisa wapas milega?',
    a: 'Nahi. Agar aap voluntarily scheme chhodte hain, toh sarkar ka contribution (hisssa) wapas nahi milega. Aapko sirf aapka khud ka jama kiya hua paisa aur uspar bana savings bank interest hi refund hoga.',
  },
  {
    q: 'Kisan ki mrityu 60 saal se pehle ho jaye toh pension kisko milegi?',
    a: 'Aise mein kisan ka spouse (patni/pati) scheme mein continue kar sakta hai aur apna hissa daal kar 60 saal ke baad pension le sakta hai. Agar spouse continue nahi karna chahta, toh kisan ka jama kiya hua paisa + interest nominee ko wapas kar diya jayega.',
  },
  {
    q: '60 saal ke baad kisan ki mrityu ho jaye toh family pension kitni milegi?',
    a: '60 saal ki umar ke baad pension shuru ho chuki hoti hai. Aisi sthiti mein, spouse ko kisan ki pension ka 50% hissa (yani ₹1,500 mahina) "Family Pension" ke roop mein milta hai.',
  },
  {
    q: 'Kya main beech mein thoda paisa nikalwa sakta hoon (Partial Withdrawal)?',
    a: 'Bilkul nahi. PM Kisan Maandhan ek pure pension scheme hai. Isme koi partial withdrawal, loan, ya advance paise nikalne ki suvidha nahi hai. Paisa sirf 60 saal ke baad ya mrityu ki sthiti mein hi nikala ja sakta hai.',
  },
  {
    q: 'Agar kisi ne galati se do baar registration kara liya ho toh?',
    a: 'Agar system mein duplicate entry pakdi jaati hai, toh sarkar ek account ko cancel kar deti hai aur us account ka sirf farmer ka contribution + interest refund kar deti hai. Government share forfeit ho jata hai.',
  },
  {
    q: 'Refund ka paisa kis account mein aayega?',
    a: 'Refund ka paisa seedha usi bank account mein aayega jo registration ke samay NPCI (Aadhaar seeding) ke liye link kiya gaya tha.',
  },
];

export default function PmKisanMaandhanWithdrawalRefund({ article }: { article: MaandhanArticleMeta }) {
  return (
    <>
      <Script id="maandhan-withdrawal-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "PM Kisan Maandhan Withdrawal & Refund Rules: Scheme Chhodne Par Paisa Wapas Milega?",
              "description": "PM Kisan Maandhan Yojana se exit karne ke rules, pension ka paisa family ko kaise milega, aur contribution refund hone ki puri sachai. 60 saal se pehle aur baad ke niyam jaanein.",
              "author": { 
                "@type": "Organization", 
                "name": "KisanStatus Team", 
                "url": "https://kisanstatus.com/about" 
              },
              "publisher": { 
                "@type": "Organization", 
                "name": "KisanStatus", 
                "logo": { "@type": "ImageObject", "url": "https://kisanstatus.com/logo.png" } 
              },
              "datePublished": PUBLISHED,
              "dateModified": MODIFIED,
              "mainEntityOfPage": { "@type": "WebPage", "@id": `https://kisanstatus.com/maandhan/${article.slug}` }
            },
            {
              "@type": "FAQPage",
              "mainEntity": FAQS_DATA.map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": { "@type": "Answer", "text": faq.a }
              }))
            }
          ]
        })}
      </Script>

      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/maandhan" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Maandhan Yojana</Link>
            <span>/</span>
            <span className="text-white font-bold">Withdrawal & Refund Rules</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Exit Rules Guide</span>
          
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Maandhan Withdrawal & Refund Rules: Scheme Chhodne Par Paisa Wapas Milega?
          </h1>
          
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span> {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>️ 11 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/maandhan/withdrawal-rules-hero.webp"
            alt="Farmer discussing pension withdrawal and refund rules with a bank official"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Janie Exit Rules, Family Pension Aur Refund Ki Puri Sachai
          </p>
        </div>

        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-xl">
          <p className="text-sm md:text-base text-blue-900 dark:text-blue-100 leading-relaxed font-medium">
            <strong>Seedha Jawab:</strong> PM Kisan Maandhan ek long-term pension scheme hai, isliye isme <strong>partial withdrawal (beech mein paisa nikalna) allowed nahi hai</strong>. Agar aap 60 saal se pehle scheme chhodte hain, toh aapko sirf aapka khud ka jama kiya hua paisa + savings bank interest wapas milega; sarkar ka hissa nahi milega. 60 saal ke baad kisan ki mrityu hone par, spouse ko ₹1,500 mahina family pension milti hai.
          </p>
        </div>

        <section className="mb-8">
          <SH>Kya Maandhan Yojana Se Paisa Kabhi Wapas Milta Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bahut se kisan dare rehte hain ki "Agar mujhe beech mein paise ki zaroorat pad gayi toh?" Ya "Agar kisan ki mrityu ho jaye toh paisa doob toh nahi jayega?"
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Sachai ye hai ki ye scheme aapke budhape (old age) ko secure karne ke liye bani hai, isliye iske rules thode strict hain. Lekin sarkar ne kisan ki family ko protect karne ke liye <strong>Family Pension</strong> aur <strong>Refund</strong> ke clear niyam banaye hain. Aaiye inhe detail mein samajhte hain.
          </p>
        </section>

        <section className="mb-8">
          <SH>Scenario 1: 60 Saal Se Pehle Voluntary Exit (Scheme Chhodna)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Agar koi kisan kisi bhi wajah se (jaise zameen bech di, ya business shuru kar liya) 60 saal ki umar se pehle scheme chhodna chahta hai, toh uske liye ye rules lagu honge:
          </p>
          <div className="space-y-3 mb-6">
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <p className="font-black text-sm text-green-600 dark:text-green-400 mb-1">✅ Kya Milega (Refund)</p>
              <p className="text-xs text-[var(--color-text-muted)]">Kisan ne jo bhi monthly contribution jama kiya hai, wo pura wapas milega. Iske alawa, us paise par jo savings bank interest bana hai, wo bhi milega.</p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-black text-sm text-red-600 dark:text-red-400 mb-1">❌ Kya Nahi Milega (Forfeited)</p>
              <p className="text-xs text-[var(--color-text-muted)]">Central aur State government ne jo aapke account mein apna hissa (contribution share) dala tha, wo paisa wapas <strong>nahi</strong> milega. Wo government ke paas hi reh jayega.</p>
            </div>
          </div>
          <WB>
            <strong>Meri Salah:</strong> 60 saal se pehle scheme bilkul mat chhodiye. Aapne jo thoda sa paisa diya hai, uske badle sarkar jo bada hissa daal rahi hai, wo aapke liye ek bohot badi security hai.
          </WB>
        </section>

        <section className="mb-8">
          <SH>Scenario 2: Kisan Ki Mrityu 60 Saal Se Pehle Ho Jaye</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ye ek bohot hi sensitive mamla hai, lekin sarkar ne kisan ki patni (spouse) ko pura haq diya hai. Aisi sthiti mein 2 options hote hain:
          </p>
          <StepList>
            <SI n={1}><strong>Option A (Spouse Continue Kare):</strong> Kisan ki patni (ya pati) scheme mein shamil ho sakti hai. Use bas kisan wala monthly contribution dena hoga. 60 saal ki umar puri hone par use bhi ₹3,000 mahina pension milegi.</SI>
            <SI n={2}><strong>Option B (Spouse Continue Na Kare):</strong> Agar spouse scheme mein aage nahi badhna chahti, toh kisan ne jo paisa jama kiya tha (apna hissa + interest), wo pura amount kisan ke nominee (jise usne form mein bataya tha) ke bank account mein refund kar diya jayega.</SI>
          </StepList>
        </section>

        <section className="mb-8">
          <SH>Scenario 3: 60 Saal Ke Baad Kisan Ki Mrityu (Family Pension)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Agar kisan ne 60 saal ki umar paar kar li hai aur use pension milna shuru ho gayi hai, lekin kisi karan uski mrityu ho jati hai, toh uski family khali nahi jayegi.
          </p>
          <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/maandhan/family-pension-rules.webp"
              alt="Visual guide showing 50% family pension rule for spouse after farmer death"
              width={800}
              height={450}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
              60 Saal Ke Baad Mrityu Par Spouse Ko 50% Pension Milti Hai
            </p>
          </div>
          <IB>
            <strong>Family Pension Rule:</strong> Kisan ki mrityu ke baad, uske spouse ko kisan ki monthly pension (₹3,000) ka exactly <strong>50% hissa (₹1,500 mahina)</strong> milega. Ye family pension spouse ki puri zindagi tak chalti rahegi.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Quick Summary Table: Har Sthiti Mein Kya Hoga?</SH>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Sthiti (Scenario)</th>
                  <th className="p-3 text-left">Farmer Ka Paisa</th>
                  <th className="p-3 text-left">Sarkar Ka Paisa</th>
                  <th className="p-3 text-left">Pension / Refund</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Exit Before 60 (Voluntary)', 'Refund + Interest', 'Forfeit (Nahi milega)', 'No Pension'],
                  ['Death Before 60 (Spouse Continues)', 'Scheme mein transfer', 'Scheme mein transfer', '₹3,000/mo (at 60)'],
                  ['Death Before 60 (Spouse Exits)', 'Refund to Nominee', 'Forfeit', 'No Pension'],
                  ['Death After 60', 'Pension band', 'Pension band', '₹1,500/mo (Spouse)'],
                ].map(([scenario, farmer, govt, result], i) => (
                  <tr key={scenario} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-green-50/40 dark:bg-green-900/10'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{scenario}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{farmer}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{govt}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-green-700 dark:text-green-400 font-bold">{result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <SH>Common Myths vs Reality</SH>
          <div className="space-y-3">
            {[
              { 
                myth: 'Main beech mein 1-2 lakh nikalwa lunga zaroorat padne par.', 
                reality: 'Galat. Isme koi partial withdrawal ya loan ki suvidha nahi hai. Ye pure pension fund ki tarah kaam karta hai.' 
              },
              { 
                myth: 'Kisan mar gaya toh sara paisa sarkar kha jayegi.', 
                reality: 'Galat. Spouse ko continue karne ka pura haq hai, ya nominee ko farmer ka paisa + interest wapas milta hai.' 
              },
              { 
                myth: '60 saal ke baad pension sirf kisan ko milegi, patni ko nahi.', 
                reality: 'Galat. 60 saal ke baad kisan ki mrityu hone par patni ko ₹1,500 mahina family pension milti hai.' 
              },
            ].map(({ myth, reality }, i) => (
              <div key={i} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
                <p className="font-black text-sm text-red-600 dark:text-red-400 mb-2"> Myth: {myth}</p>
                <p className="text-xs text-green-700 dark:text-green-400"><strong>✅ Reality:</strong> {reality}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Frequently Asked Questions (FAQs)
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kisan Maandhan Withdrawal & Refund FAQ" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Seedhi Baat (Bottom Line)</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Bhai, PM Kisan Maandhan koi aisi scheme nahi hai jisme aapka paisa doob jayega. Sarkar ne har situation (chahe voluntary exit ho ya mrityu) ke liye clear rules banaye hain taake kisan aur uski family ko nuksan na ho. Bas ek baat yaad rakhein: <strong>60 saal tak isse jude rahein</strong>, tabhi asli fayda milega.
          </p>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
            Agar aapne abhi tak apply nahi kiya, toh hamara <Link href="/maandhan/pm-kisan-maandhan-registration-2026" className="underline text-blue-600 dark:text-blue-400 font-medium">Registration Guide</Link> padhein aur aaj hi form bharein.
          </p>
        </div>

        <GovLink
          href="https://pmkisan.gov.in"
          label="PM Kisan Official Portal"
          guide="Check Status & Rules"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmkisan.gov.in"
        />

        <section className="my-10">
          <h3 className="text-lg font-black text-[var(--color-text)] mb-4">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {RELATED_CARDS.map((card) => (
              <Link 
                key={card.slug} 
                href={`/maandhan/${card.slug}`}
                className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg hover:border-green-500 transition-all duration-300"
              >
                <div className="text-2xl mb-2">{card.emoji}</div>
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
          { href: '/maandhan/pm-kisan-maandhan-registration-2026', l: ' Registration' },
          { href: '/maandhan/pm-kisan-maandhan-eligibility-documents', l: '📄 Eligibility' },
          { href: '/maandhan/pm-kisan-maandhan-pension-calculator', l: '🧮 Calculator' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
