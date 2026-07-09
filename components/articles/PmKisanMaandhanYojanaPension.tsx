'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

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
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 16 min read</span>
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
            Bhai, ek baat sach batao — jab kisan budha ho jata hai, toh kheti kaun karta hai? Bete shehar chale jaate hain. Zameen banjar pad jaati hai. Aur buzurg kisan ke paas koi income nahi bachti.
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
            <strong>Real Story:</strong>
            <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">
              Bulandshahr ke 62 saal ke Ram Singh ji ab kheti nahi kar paate. Unke dono bete Delhi mein kaam karte hain. Pehle unhe har mahine bete paise bhejte the, lekin ab unki apni family ho gayi hai. Tab unhe yaad aaya ki unhone 35 saal ki umar mein Maandhan Yojana join ki thi. Aaj unhe har mahine ₹3000 pension mil rahi hai. Wo kehte hain — "Ye ₹3000 sirf paisa nahi, izzat hai. Ab bete par depend nahi karna padta."
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
            Dekho bhai, seedhi bhasha mein samjhata hoon. Ye ek <strong>pension scheme</strong> hai jo chhote aur seemant (marginal) kisanon ke liye banayi gayi hai.
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
          <SH>Kaun Join Kar Sakta Hai? (Eligibility)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bhai, har kisan is scheme mein nahi aa sakta. Sarkar ne kuch conditions rakhi hain. Ye sab conditions puri honi chahiye:
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
            Bhai, ye sabse important sawal hai. Contribution aapki umra par depend karta hai. Jitni jaldi join karoge, utna kam paisa lagega aur utni zyada pension milegi.
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
                  ['25 saal', '100', '₹100', '₹200'],
                  ['30 saal', '₹130', '₹130', '₹260'],
                  ['35 saal', '₹165', '₹165', '₹330'],
                  ['40 saal', '₹200', '₹200', '₹400'],
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
              Agar aapne 25 saal ki umar mein join kiya, toh aapko har mahine ₹100 dena hai. Sarkar bhi ₹100 dalegi. 35 saal tak (60 saal ki umar tak) aap total ₹42,000 jama karoge. Lekin 60 ke baad aapko har mahine ₹3000 milenge. 5 saal mein hi aapka jama kiya hua paisa wapas aa jayega. Uske baad jo bhi milega wo pure profit hai.
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
            Bhai, apply karne ke 3 tareeke hain. Jo aapko aasan lage wo chuno:
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

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6"> Method 3: Online (Self Service)</h3>
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
            Bhai, ab main tumhe pura hisaab dikha raha hoon. Dekho kitna fayda hai:
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
                  ['35 saal', '₹165', '₹49,500', '₹3,000', '17 mahine'],
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
            Matlab bhai, jitna paisa tumne daala, wo 1-1.5 saal mein wapas aa jata hai. Uske baad jo bhi milega wo pure bonus hai. Aur pension maut tak milti rehti hai.
          </p>
        </section>

        {/* SECTION 7: What If Death */}
        <section className="mb-8">
          <SH>Agar 60 Saal Se Pehle Maut Ho Jaye Toh?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Bhai, ye sawal bahut logon ke mann mein aata hai. Aur iska jawab bhi clear hai:
          </p>
          <div className="space-y-3">
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-xl">
              <p className="text-sm text-blue-800 dark:text-blue-300">
                <strong>👤 Kisan Ki Maut:</strong> Agar kisan ki maut 60 saal se pehle ho jaye, toh uski <strong>patni ko 50% pension</strong> (₹1500 har mahine) milti hai. Ye pension bhi umar bhar milti rehti hai.
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-xl">
              <p className="text-sm text-purple-800 dark:text-purple-300">
                <strong>👤 Dono Ki Maut:</strong> Agar kisan aur patni dono ki maut ho jaye, toh <strong>nominee ko pura paisa wapas</strong> milta hai jo jama hua tha — with interest.
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-xl">
              <p className="text-sm text-green-800 dark:text-green-300">
                <strong>👤 60 Ke Baad Maut:</strong> Agar pension shuru hone ke baad maut ho, toh family ko <strong>₹17 lakh</strong> ka lump sum milta hai.
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
                <p className="font-black text-sm text-red-600 dark:text-red-400 mb-2">❌ {problem}</p>
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
                  ['Amount', '6000 saal ka', '₹3000 har mahine (60 ke baad)'],
                  ['Kisko Milega', 'Sabhi chhote kisan', 'Jo join karein'],
                  ['Age Limit', 'Koi nahi', '18-40 saal join karne ke liye'],
                  ['Contribution', 'Koi nahi (free)', '55-₹200 har mahine'],
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
            Bhai, ye scheme pure India mein lagu hai. Lekin kuch states mein iski popularity zyada hai:
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

        {/* SECTION 11: Myths */}
        <section className="mb-8">
          <SH>Jhoothi Baatein Jo Log Failate Hain (Myths vs Facts)</SH>
          <div className="space-y-3">
            {[
              { 
                myth: '"Ye scheme fraud hai, paisa doob jayega"', 
                fact: 'Bilkul nahi. Ye LIC aur government manage karti hai. 100% safe hai.' 
              },
              { 
                myth: '"Pension kabhi nahi milegi"', 
                fact: 'Ab tak lakhon kisanon ko pension mil rahi hai. Koi case nahi hai jahan pension na mili ho.' 
              },
              { 
                myth: '"Sarkar baad mein rules badal degi"', 
                fact: 'Ye ek contractual scheme hai. Ek baar join kiya toh rules lock ho jaate hain.' 
              },
              { 
                myth: '"₹3000 mein kya hoga?"', 
                fact: 'Gaon mein ₹3000 bahut hai. Bijli, paani, dawai — sab chal jata hai. Aur ye har mahine milega.' 
              },
            ].map(({ myth, fact }, i) => (
              <div key={i} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
                <p className="font-black text-sm text-red-600 dark:text-red-400 mb-2">❌ Myth: {myth}</p>
                <p className="text-xs text-green-700 dark:text-green-400"><strong>✅ Fact:</strong> {fact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kisan Maandhan Yojana FAQ" />
        </section>

        <GovLink
          href="https://maandhan.in"
          label="PM Kisan Maandhan Official Portal"
          guide="Apply Karein"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="maandhan.in"
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisanMasterGuide2026', l: '📚 Master Guide' },
          { href: '/articles/PmKisanBeneficiaryList2026', l: '📋 Beneficiary List' },
          { href: '/articles/PmfbyCropInsurance2026', l: '🌾 PMFBY Insurance' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}