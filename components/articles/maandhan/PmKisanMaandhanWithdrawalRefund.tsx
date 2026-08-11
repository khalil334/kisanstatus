import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, SH, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { MaandhanArticleMeta } from '@/lib/maandhan-data';

const PUBLISHED = '2024-01-21T10:11:00+05:30';
const MODIFIED = '2026-07-21T08:00:00+05:30';

const RELATED_CARDS = [
  {
    slug: 'pm-kisan-maandhan-registration-2026',
    title: 'Registration Kaise Karein',
    desc: 'CSC center ya online, dono tarike se apply karne ka poora tareeka.',
    emoji: '📝',
  },
  {
    slug: 'pm-kisan-maandhan-eligibility-documents',
    title: 'Kaun Apply Kar Sakta Hai',
    desc: 'Umar limit, zaroori documents aur kin farmers ko chhoot hai.',
    emoji: '📄',
  },
  {
    slug: 'pm-kisan-maandhan-pension-calculator',
    title: 'Contribution Calculator',
    desc: 'Apni umar daal kar dekhein har mahine kitna paisa jama karna hoga.',
    emoji: '🧮',
  },
];

const FAQS_DATA = [
  {
    q: 'Maine 3 saal scheme mein paisa dala, ab chhodna hai — kitna wapas aayega?',
    a: 'Aapne jitne mahine jitna paisa jama kiya, wo poora amount aapko milega, saath mein us par jo bhi savings-account jaisa byaj bana hai wo bhi. Lekin in 3 salon mein sarkar ne apni taraf se jo barabar hissa dala tha, wo account band hote hi wapas treasury mein chala jata hai — kisan ko nahi milta.',
  },
  {
    q: 'Kya beech mein emergency ke liye kuch paisa nikala ja sakta hai, poora account band kiye bina?',
    a: 'Nahi, ye option hi maujood nahi hai. LIC jo is scheme ko chalati hai, usme partial withdrawal ka koi provision nahi rakha gaya — na loan, na advance. Agar paise ki sakht zaroorat ho toh sirf poora account close karke jama rashi + interest nikalne ka rasta bachta hai, aur us surat mein sarkari hissa chhootta hai.',
  },
  {
    q: 'Pati ki mrityu ho gayi, main 40 saal ki hoon — mujhe kya karna chahiye?',
    a: 'Aapke paas do rasta hai. Pehla: aap khud is scheme mein naye subscriber ki tarah continue kar sakti hain, apni umar ke hisaab se contribution dete hue, aur 60 saal ki umar par ₹3,000 mahine ki pension paengi. Doosra: agar continue nahi karna chahtin, toh pati ne jo paisa jama kiya tha wo interest sahit nominee ke account mein aa jayega. Ye faisla aapko CSC center ya nazdiki LIC branch mein jaakar form bharke dena hota hai.',
  },
  {
    q: 'Family pension mein ₹1,500 hamesha ke liye milte rahenge ya kuch saal ke baad band ho jayenge?',
    a: 'Ye pension spouse ki poori zindagi tak chalti rahegi, koi fixed time-limit nahi hai. Agar spouse ki bhi mrityu ho jaye, tab ye pension aage kisi aur family member ko transfer nahi hoti — scheme wahin close ho jati hai.',
  },
  {
    q: 'Galti se do jagah registration ho gaya — dono account chalenge ya ek cancel hoga?',
    a: 'System mein Aadhaar se duplicate check hota hai, aur pakde jaane par ek account band kar diya jata hai. Us band hue account ka sirf farmer-wala hissa + interest wapas milta hai; dusra account normal chalta rehta hai. Isliye registration se pehle CSC operator se confirm kar lein ki pehle se koi entry to nahi hai.',
  },
  {
    q: 'Refund process mein kitna time lagta hai aur paisa kaise pata karein aaya ya nahi?',
    a: 'Aam taur par exit request ke 30 se 45 din ke andar amount NPCI-linked bank account mein credit ho jata hai. Status check karne ke liye pmkisanmaandhan.in par apna registration number daal kar dekha ja sakta hai, ya CSC center se poocha ja sakta hai.',
  },
];

export default function PmKisanMaandhanWithdrawalRefund({ article }: { article: MaandhanArticleMeta }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Article',
              headline: 'PM Kisan Maandhan Chhodne Ka Faisla Lene Se Pehle Ye Zaroor Padhein: Refund, Family Pension Aur Exit Ke Sach',
              description:
                'Scheme beech mein chhodne par kitna paisa wapas milta hai, kisan ki mrityu par family ko kya milta hai, aur refund process mein kitna time lagta hai — sab kuch practical udaharan ke saath.',
              author: { '@type': 'Organization', name: 'KisanStatus Team', url: 'https://kisanstatus.com/about' },
              publisher: {
                '@type': 'Organization',
                name: 'KisanStatus',
                logo: { '@type': 'ImageObject', url: 'https://kisanstatus.com/logo.png' },
              },
              datePublished: PUBLISHED,
              dateModified: MODIFIED,
              mainEntityOfPage: { '@type': 'WebPage', '@id': `https://kisanstatus.com/maandhan/${article.slug}` },
            },
            {
              '@type': 'FAQPage',
              mainEntity: FAQS_DATA.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: { '@type': 'Answer', text: faq.a },
              })),
            },
          ],
        }) }}
      />

      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">
              Home
            </Link>
            <span>/</span>
            <Link href="/maandhan" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">
              Maandhan Yojana
            </Link>
            <span>/</span>
            <span className="text-white font-bold">Exit Aur Refund Ke Niyam</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
            Practical Guide
          </span>

          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Scheme Chhodne Se Pehle Ruko: Refund, Family Pension Aur Exit Ka Poora Sach
          </h1>

          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️{' '}
              <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">
                KisanStatus Team
              </Link>
            </span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Update: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 9 min padhne mein</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/maandhan/withdrawal-decision-hero.webp"
            alt="Ek kisan apni pension passbook check karte hue CSC center par"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Exit se pehle apni passbook aur contribution history zaroor check karein
          </p>
        </div>

        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-xl">
          <p className="text-sm md:text-base text-blue-900 dark:text-blue-100 leading-relaxed font-medium">
            Agar aap ye padh rahe hain kyunki paise ki tangi hai aur soch rahe hain ki Maandhan account band kar doon —
            ruko, pehle poori tasveer samajh lo. Beech mein exit karne par sirf apna jama paisa aur uska interest hi
            wapas aata hai; jo hissa sarkar ne dala tha wo chala jata hai. Doosri taraf, agar kisan ki mrityu ho jaye
            toh family khaali haath nahi rehti — spouse ke paas continue karne ya paisa wapas lene, dono option hote
            hain.
          </p>
        </div>

        <section className="mb-8">
          <SH>Sabse Pehle Ye Samjho: Ye Scheme Bani Kis Liye Hai</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            PM Kisan Maandhan koi savings account nahi hai jahan jab chaho paisa daalo aur jab chaho nikaal lo. Ye ek
            pension fund hai, jise LIC manage karti hai, aur iska poora design isi soch par bana hai ki kisan 60 saal
            ki umar tak isse juda rahe. Isi wajah se beech mein bahar nikalna &quot;mehenga&quot; pad jata hai — na
            ki kisi galat niyat se, balki isliye ki pension funds duniya bhar mein isi tarah kaam karte hain.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Neeche teen alag halaat diye gaye hain jo asal mein kisano ke saath ho sakte hain — apna wala dhoondh kar
            padhein.
          </p>
        </section>

        <section className="mb-8">
          <SH>Halaat 1 — Aapne Khud Scheme Chhodne Ka Faisla Kiya</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Zameen bik gayi, koi naya business shuru kiya, ya bas ab is contribution ka bhar nahi utha pa rahe — wajah
            koi bhi ho, 60 saal se pehle voluntarily bahar nikalne par ye hota hai:
          </p>
          <div className="space-y-3 mb-6">
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <p className="font-black text-sm text-green-600 dark:text-green-400 mb-1">Aapko Milega</p>
              <p className="text-xs text-[var(--color-text-muted)]">
                Har mahine jo aapne apni jeb se jama kiya, wo poora amount, plus us rashi par jitna savings-bank-rate se
                byaj bana hai — dono ek saath ek hi transaction mein aayenge.
              </p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-black text-sm text-red-600 dark:text-red-400 mb-1">Aapko Nahi Milega</p>
              <p className="text-xs text-[var(--color-text-muted)]">
                Sarkar ne har mahine aapke barabar jo hissa dala tha, uska koi ansh wapas nahi aata — ye rashi
                consolidated pension fund mein hi rehti hai. Isse ek tarah ka lock-in ban jata hai jo aapko 60 saal
                tak rokta hai.
              </p>
            </div>
          </div>
          <WB>
            Ek chhota sa udaharan lein: agar kisi ne 30 saal ki umar mein join kiya toh uska monthly contribution
            ₹55 hai — aur sarkar bhi utna hi ₹55 daalti hai. 10 saal baad exit karein toh sirf apne ₹6,600 (plus
            interest) milenge, jabki account mein sarkar ke bhi utne hi paise ja chuke the. Yehi wo hissa hai jo
            chhoot jata hai.
          </WB>
          <p className="text-[var(--color-text-muted)] text-xs leading-relaxed mt-3">
            Ye exit rule sirf humari baat nahi hai — official scheme documentation mein bhi saaf likha hai ki
            10 saal se pehle bahar nikalne par sirf farmer ka contribution hi savings-bank interest ke saath
            wapas hota hai (
            <a
              href="https://schemes.vikaspedia.in/viewcontent/schemesall/schemes-for-farmers/pm-kisan-maan-dhan-yojana?lgn=en"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="underline text-blue-600 dark:text-blue-400"
            >
              Vikaspedia par PM-KMY ke official scheme rules dekhein
            </a>
            ). Iske exact contribution slabs samajhne ke liye humari{' '}
            <Link href="/maandhan/pm-kisan-maandhan-pension-calculator" className="underline text-blue-600 dark:text-blue-400 font-medium">
              contribution calculator guide
            </Link>{' '}
            bhi kaam aayegi.
          </p>
        </section>

        <section className="mb-8">
          <SH>Halaat 2 — 60 Saal Se Pehle Kisan Ki Mrityu Ho Jaye</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ye sabse mushkil waqt hota hai, aur yahin scheme ka spouse-protection wala hissa kaam aata hai. Marne wale
            kisan ki patni ya pati ke paas do raste khulte hain:
          </p>
          <StepList>
            <SI n={1}>
              <strong>Khud Scheme Mein Aage Badhna:</strong> Spouse chahe toh apni jagah subscriber ban sakta hai.
              Yahan se aage contribution spouse ki apni umar ke hisaab se calculate hoga, aur 60 saal poore hone par
              usse bhi ₹3,000 mahine ki pension shuru ho jayegi — bilkul waise hi jaise kisan ko milti.
            </SI>
            <SI n={2}>
              <strong>Paisa Wapas Le Lena:</strong> Agar spouse ko lagta hai ki wo continue nahi karna chahte, toh
              marhoom kisan ne jo bhi apna hissa jama kiya tha, wo interest ke saath us nominee ke account mein bhej
              diya jata hai jiska naam registration form mein diya gaya tha. Nominee update karna hai toh CSC center
              par jaakar naya form bharna padta hai.
            </SI>
          </StepList>
        </section>

        <section className="mb-8">
          <SH>Halaat 3 — Pension Shuru Ho Chuki Thi Aur Uske Baad Mrityu Hui</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Agar kisan 60 paar kar chuka tha aur ₹3,000 mahine pa raha tha, uski mrityu ke baad scheme achanak band
            nahi ho jati.
          </p>
          <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/articles/maandhan/family-pension-explained.webp"
              alt="Ek buzurg mahila apne pati ki family pension ki jaankari le rahi hai"
              width={800}
              height={450}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
              Spouse ko jeevan bhar aadhi pension milti rehti hai
            </p>
          </div>
          <IB>
            Kisan ki jitni pension thi, uski adhi rashi spouse ko har mahine milna shuru ho jati hai — bina kisi
            naye application ke, sirf mrityu praman patra jama karke bank/LIC branch mein ye process shuru karwaya
            ja sakta hai. Ye rashi spouse ke jeete-ji chalti rehti hai; agla koi transfer nahi hota.
          </IB>
          <p className="text-[var(--color-text-muted)] text-xs leading-relaxed mt-3">
            Ye 50% family pension wala niyam Ministry of Agriculture ke tehat aane wale MANAGE institute ke
            official scheme note mein bhi confirm kiya gaya hai (
            <a
              href="https://www.manage.gov.in/fpoacademy/CGSchemes/PM%20Kisan%20Man%20dhan%20Yojana.pdf"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="underline text-blue-600 dark:text-blue-400"
            >
              official PDF note yahan dekhein
            </a>
            ). Agar aap abhi eligibility hi confirm kar rahe hain, toh pehle humari{' '}
            <Link href="/maandhan/pm-kisan-maandhan-eligibility-documents" className="underline text-blue-600 dark:text-blue-400 font-medium">
              eligibility aur documents wali guide
            </Link>{' '}
            check kar lein.
          </p>
        </section>

        <section className="mb-8">
          <SH>Kai Kisan Jo Baatein Nahi Jaante — Ye Bhi Padh Lein</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Upar wale teen halaat ke alawa kuch aur situations hain jo kam charcha mein aati hain lekin kaafi kisano
            ke saath hoti hain:
          </p>
          <div className="space-y-3">
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <p className="font-black text-sm text-[var(--color-text)] mb-1">Do Jagah Registration Ho Jaana</p>
              <p className="text-xs text-[var(--color-text-muted)]">
                Kabhi-kabhi ek hi Aadhaar par galti se do CSC centron se apply ho jata hai. System duplicate pakad
                leta hai aur ek entry band kar deta hai — us band wale account ka sirf farmer-hissa hi lauta jata
                hai, dusra account bina rukawat chalta rehta hai.
              </p>
            </div>
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <p className="font-black text-sm text-[var(--color-text)] mb-1">Refund Kis Account Mein Aata Hai</p>
              <p className="text-xs text-[var(--color-text-muted)]">
                Wahi bank account jo registration ke waqt Aadhaar/NPCI se link kiya gaya tha. Agar wo account band ho
                chuka hai ya number change ho gaya hai, toh pehle CSC center jaakar bank details update karwana zaroori
                hai, warna refund atak sakta hai.
              </p>
            </div>
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <p className="font-black text-sm text-[var(--color-text)] mb-1">Atal Pension Yojana (APY) Se Farq</p>
              <p className="text-xs text-[var(--color-text-muted)]">
                Jo log dono scheme compare karte hain unke liye — APY mein exit ke niyam thode alag hain aur wahan
                accumulated corpus ka calculation bhi different tareeke se hota hai. Maandhan purely ek defined
                monthly-pension model hai, APY ki tarah lump-sum corpus wapas dene wali scheme nahi hai.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>Ek Nazar Mein: Kaunsi Sthiti Mein Kya Milega</SH>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Sthiti</th>
                  <th className="p-3 text-left">Farmer Ka Contribution</th>
                  <th className="p-3 text-left">Government Ka Hissa</th>
                  <th className="p-3 text-left">Final Outcome</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Khud exit (60 se pehle)', 'Interest sahit wapas', 'Chala jata hai', 'Pension nahi milegi'],
                  ['Mrityu (60 se pehle), spouse continue kare', 'Scheme mein hi rehta hai', 'Scheme mein hi rehta hai', '60 par ₹3,000/mahina'],
                  ['Mrityu (60 se pehle), spouse exit kare', 'Nominee ko wapas', 'Chala jata hai', 'Pension nahi milegi'],
                  ['Mrityu (60 ke baad)', 'Pension ban chuki thi', 'Pension ban chuki thi', 'Spouse ko ₹1,500/mahina'],
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
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Withdrawal Aur Refund — Uthne Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Withdrawal aur Refund se judi FAQs" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Nichod Ye Hai</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Jab tak koi bahut majboori na ho, is scheme ko beech mein mat todiye — jo sarkari hissa aap chhod denge
            wo asal mein aapki hi retirement security tha. Aur agar ghar mein koi hadsa ho jaye, toh ghabrane ki
            zaroorat nahi: spouse ke paas hamesha koi na koi rasta khula rehta hai.
          </p>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
            Abhi tak registration nahi karwaya? Hamari{' '}
            <Link href="/maandhan/pm-kisan-maandhan-registration-2026" className="underline text-blue-600 dark:text-blue-400 font-medium">
              step-by-step registration guide
            </Link>{' '}
            padh kar aaj hi shuru karein.
          </p>
        </div>

        <div className="my-6 grid gap-3 sm:grid-cols-2">
          <a
            href="https://pmkisan.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-2 p-4 bg-[var(--color-primary)] text-white rounded-xl font-bold text-sm hover:brightness-110 transition-all"
          >
            PM Kisan Portal Par Jayein <span aria-hidden>↗</span>
          </a>
          <a
            href="https://pmkisanmaandhan.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-2 p-4 bg-white dark:bg-gray-800 border-2 border-[var(--color-primary)] text-[var(--color-primary)] dark:text-white rounded-xl font-bold text-sm hover:bg-green-50 dark:hover:bg-gray-700 transition-all"
          >
            Apna Exit/Refund Status Dekhein <span aria-hidden>↗</span>
          </a>
          <a
            href="https://licindia.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-2 p-4 bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-text)] rounded-xl font-bold text-sm hover:shadow-md transition-all"
          >
            LIC (Scheme Manager) Se Sampark Karein <span aria-hidden>↗</span>
          </a>
          <a
            href="https://pgportal.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-800 text-red-700 dark:text-red-300 rounded-xl font-bold text-sm hover:bg-red-100 dark:hover:bg-red-900/30 transition-all"
          >
            Refund Atka Hai? Shikayat Darj Karein <span aria-hidden>↗</span>
          </a>
        </div>

        <section className="my-10">
          <h3 className="text-lg font-black text-[var(--color-text)] mb-4">Milte-Julte Topics</h3>
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
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">{card.desc}</p>
                <span className="text-xs font-semibold text-green-600 flex items-center gap-1">
                  Padhein <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <AuthorBox modified={MODIFIED} />
        <BottomNav
          extraLinks={[
            { href: '/maandhan/pm-kisan-maandhan-registration-2026', l: '📝 Registration' },
            { href: '/maandhan/pm-kisan-maandhan-eligibility-documents', l: '📄 Eligibility' },
            { href: '/maandhan/pm-kisan-maandhan-pension-calculator', l: '🧮 Calculator' },
          ]}
        />
        <Disclaimer />
      </div>
    </>
  );
}
