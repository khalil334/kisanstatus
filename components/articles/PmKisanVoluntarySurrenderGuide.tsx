'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-07-10T08:00:00+05:30';
const MODIFIED = '2026-07-10T08:00:00+05:30';

const RELATED = [
  { slug: 'PmKisanMasterGuide2026', title: 'Master Guide', emoji: '' },
  { slug: 'PmKisanCorrectionForm2026', title: 'Correction Form', emoji: '📝' },
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary List', emoji: '📋' },
];

const FAQS_DATA = [
  {
    q: 'Kaun logon ko surrender karna chahiye?',
    a: 'Government employees, income tax filers, pensioners, aur wo log jo eligible nahi hain par galti se register ho gaye.',
  },
  {
    q: 'Surrender karne ke baad paisa wapas karna padega?',
    a: 'Nahi, jo paisa mil chuka hai wo wapas nahi karna padta. Bas future ki kist band ho jayegi.',
  },
  {
    q: 'Online surrender ho sakta hai?',
    a: 'Haan, PM Kisan portal ke "Farmers Corner" mein "Self Surrender" ka option hai.',
  },
  {
    q: 'Agar surrender kar liya toh wapas register kar sakte hain?',
    a: 'Nahi, ek baar surrender karne ke baad dobara register nahi kar sakte. Isliye soch samajh kar karo.',
  },
  {
    q: 'Surrender karne mein kitna time lagta hai?',
    a: '15-30 din. BAO verify karta hai, phir list se naam hat jata hai.',
  },
  {
    q: 'Kya koi fees lagti hai?',
    a: 'Nahi, bilkul free hai. CSC se karwana ho to ₹20-30 lag sakte hain.',
  },
];

export default function PmKisanVoluntarySurrenderGuide({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Voluntary Surrender</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Important Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Voluntary Surrender: Galti Se Register Ho Gaye Toh Kaise Hatte?
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white">KisanStatus Team</Link></span>
            <span> {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>️ 12 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        {/* Hero Image */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-voluntary-surrender/surrender-hero.webp"
            alt="Farmer filling voluntary surrender form for PM Kisan"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px' }}
            priority
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)]">
            Voluntary Surrender — Galti Sudharne Ka Tarika
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-8">
          <SH>Galti Ho Gayi? Koi Baat Nahi</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Bhai, kabhi kabhi galti se log register ho jaate hain. Jaise koi government teacher ya pensioner. Baad mein pata chalta hai ki wo eligible nahi the.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Aise mein darrne ki baat nahi hai. Sarkar ne <strong>Voluntary Surrender</strong> ka option diya hai. Isse aap apne aap ko scheme se hata sakte ho.
          </p>
          
          <Image
            src="/images/articles/pm-kisan-voluntary-surrender/surrender-option-screen.webp"
            alt="Self surrender option on PM Kisan portal"
            width={800}
            height={450}
            className="w-full rounded-xl my-4"
          />

          <DB>
            <strong>Real Story:</strong>
            <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">
              Lucknow ke Suresh ji government school mein teacher hain. Unhone galti se PM Kisan ke liye apply kar diya. 3 kist mil gayi. Phir ek din news mein suna ki government employees eligible nahi hain. Wo ghabra gaye. Phir unhone voluntary surrender kiya. Jo paisa mil chuka tha wo wapas nahi karna pada. Bas aage se band ho gaya.
            </p>
          </DB>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Dhyan rahe, jo paisa pehle mil chuka hai wo wapas nahi karna padta. Bas aage se kist aana band ho jayegi. <Link href="/articles/PmKisanBeneficiaryList2026" className="underline text-green-700 dark:text-green-400">Beneficiary list</Link> se naam hat jayega.
          </p>
        </section>

        {/* SECTION 1: Who Should Surrender */}
        <section className="mb-8">
          <SH>Kaun Logon Ko Surrender Karna Chahiye?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bhai, ye logon ko turant surrender karna chahiye:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              { icon: '‍🏫', title: 'Government Employees', desc: 'Teachers, clerks, officers — sabhi government jobs wale' },
              { icon: '💰', title: 'Income Tax Filers', desc: 'Jo log income tax return file karte hain' },
              { icon: '👴', title: 'Pensioners', desc: 'Old age pension ya family pension lene wale' },
              { icon: '🏛️', title: 'MP/MLA/Officials', desc: 'Elected representatives aur unke family members' },
              { icon: '👨‍💼', title: 'Professionals', desc: 'CA, Doctor, Lawyer, Engineer — registered professionals' },
              { icon: '', title: 'Institutional Land', desc: 'Jinki zameen trust ya company ke naam par hai' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                <span className="text-2xl block mb-2">{icon}</span>
                <p className="font-black text-sm text-red-800 dark:text-red-300 mb-1">{title}</p>
                <p className="text-xs text-red-700 dark:text-red-400">{desc}</p>
              </div>
            ))}
          </div>
          <IB>
            <strong>Important:</strong> Agar aap inme se kisi category mein aate hain, toh turant surrender kar do. Baad mein problem ho sakti hai.
          </IB>
        </section>

        {/* SECTION 2: Online Process */}
        <section className="mb-8">
          <SH>Online Surrender Kaise Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ghar baithe, mobile ya computer se kar sakte ho. Process simple hai:
          </p>
          <StepList>
            <SI n={1}>
              <strong>Portal Par Jao:</strong> pmkisan.gov.in par jao. Home page par right side mein "Farmers Corner" dikhega.
            </SI>
            <SI n={2}>
              <strong>Self Surrender Option:</strong> "Farmers Corner" mein neeche scroll karo. <strong>"Self Surrender"</strong> ka option hoga. Us par click karo.
            </SI>
            <SI n={3}>
              <strong>Aadhaar Number:</strong> Apna 12 digit ka Aadhaar number daalo. Captcha code bharo. "Search" button dabao.
            </SI>
            <SI n={4}>
              <strong>Details Confirm:</strong> Screen par tumhara naam, mobile number aur state dikhegi. Check karo ki ye aap hi ho.
            </SI>
            <SI n={5}>
              <strong>Reason Select Karo:</strong> Dropdown menu se reason select karo:
              <ul className="list-disc list-inside text-xs text-[var(--color-text-muted)] mt-2 space-y-1">
                <li>Income Tax Filer</li>
                <li>Government Employee</li>
                <li>Pensioner</li>
                <li>MP/MLA/Official</li>
                <li>Other (khud likh sakte ho)</li>
              </ul>
            </SI>
            <SI n={6}>
              <strong>Submit:</strong> "Submit" button dabao. Confirmation message aayega. Screenshot le lo.
            </SI>
          </StepList>

          <Image
            src="/images/articles/pm-kisan-voluntary-surrender/online-surrender-form.webp"
            alt="Online self surrender form on PM Kisan portal"
            width={800}
            height={600}
            className="w-full rounded-xl my-6"
          />

          <WB>
            <strong>Zaroori Baatein:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1 text-xs">
              <li>Mobile number wahi hona chahiye jo registration time par diya tha</li>
              <li>OTP aayega, usko enter karna padega</li>
              <li>Ek baar submit karne ke baad undo nahi ho sakta</li>
              <li>15 din baad <a href="/articles/PmKisanBeneficiaryList2026" class="underline">beneficiary list</a> check karo</li>
            </ul>
          </WB>
        </section>

        {/* SECTION 3: Offline Process */}
        <section className="mb-8">
          <SH>Offline Process (Patwari/BAO)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Internet ka jhanjhat nahi chahiye? Toh seedha Block Agriculture Office (BAO) chale jao. Wahan ek simple form milta hai.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 dark:border-blue-700 rounded-xl p-5 mb-6">
            <p className="text-sm font-black text-blue-800 dark:text-blue-300 mb-3">
              Offline Process Steps:
            </p>
            <ol className="list-decimal list-inside text-xs text-blue-800 dark:text-blue-300 space-y-2">
              <li>BAO office jao aur bolo "PM Kisan surrender form chahiye"</li>
              <li>Form mein apni details bharein (naam, Aadhaar, mobile, address)</li>
              <li>Reason likhein ki kyun surrender kar rahe hain</li>
              <li>Aadhaar aur ration card ki copy lagayein</li>
              <li>Patwari se sign karwa kar BAO ko de dein</li>
              <li>Ek receipt milegi, usko sambhal kar rakhein</li>
            </ol>
          </div>
          <Image
            src="/images/articles/pm-kisan-voluntary-surrender/offline-surrender-form.webp"
            alt="Offline surrender form at BAO office"
            width={800}
            height={600}
            className="w-full rounded-xl my-4"
          />
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            15 din ke andar aapka naam list se hat jayega. <Link href="/articles/PmKisanBeneficiaryList2026" className="underline text-green-700 dark:text-green-400">Beneficiary list</Link> check karke confirm kar lena.
          </p>
        </section>

        {/* SECTION 4: CSC Option */}
        <section className="mb-8">
          <SH>CSC Center Se Bhi Karwa Sakte Ho</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Agar online nahi ho pa raha aur BAO jane ka time nahi hai, toh <Link href="/articles/PmKisanCscRegistrationCharges" className="underline text-green-700 dark:text-green-400">CSC center</Link> par chale jao.
          </p>
          <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 rounded-xl p-5">
            <p className="text-sm text-green-800 dark:text-green-300 mb-3">
              <strong>CSC Process:</strong>
            </p>
            <ul className="list-disc list-inside text-xs text-green-800 dark:text-green-300 space-y-1 mb-3">
              <li>Aadhaar card aur mobile le jao</li>
              <li>CSC wale ko bolo "PM Kisan surrender karna hai"</li>
              <li>Wo portal par login karke form bharega</li>
              <li>₹20-30 fees lag sakti hai</li>
              <li>10 minute mein ho jayega</li>
              <li>Receipt milegi</li>
            </ul>
          </div>
        </section>

        {/* SECTION 5: Documents Required */}
        <section className="mb-8">
          <SH>Documents Ki List</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Surrender karte time ye documents ready rakho:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { doc: 'Aadhaar Card', note: 'Original + Photocopy' },
              { doc: 'Mobile Number', note: 'Jo registration time par diya tha' },
              { doc: 'Ration Card', note: 'Photocopy (offline ke liye)' },
              { doc: 'Bank Passbook', note: 'Pehla page (offline ke liye)' },
              { doc: 'Photo', note: 'Passport size (offline ke liye)' },
              { doc: 'Registration Number', note: 'Agar yaad ho toh' },
            ].map(({ doc, note }) => (
              <div key={doc} className="p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
                <p className="font-black text-sm text-[var(--color-text)] mb-1">{doc}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: Timeline */}
        <section className="mb-8">
          <SH>Surrender Ke Baad Kya Hota Hai?</SH>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Stage</th>
                  <th className="p-3 text-left">Time</th>
                  <th className="p-3 text-left">Kya Hota Hai</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Form Submit', 'Day 1', 'Online/Offline form submit'],
                  ['BAO Verification', 'Day 2-7', 'Officer details check karta hai'],
                  ['Approval', 'Day 8-15', 'Surrender approve hota hai'],
                  ['List Se Hatna', 'Day 16-30', 'Beneficiary list se naam hat jata hai'],
                  ['Payment Band', 'Next Kist', 'Agli kist nahi aayegi'],
                ].map(([stage, time, desc], i) => (
                  <tr key={stage} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{stage}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{time}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 7: Important Points */}
        <section className="mb-8">
          <SH>Zaroori Baatein Jo Yaad Rakhein</SH>
          <div className="space-y-3">
            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-xl">
              <p className="text-sm text-amber-800 dark:text-amber-300">
                <strong>⚠️ Paisa Wapas Nahi:</strong> Jo paisa pehle mil chuka hai wo wapas nahi karna padta. Sirf future ki kist band hogi.
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-xl">
              <p className="text-sm text-red-800 dark:text-red-300">
                <strong>❌ Ek Baar Ka Decision:</strong> Ek baar surrender karne ke baad dobara register nahi kar sakte. Soch samajh kar karo.
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-xl">
              <p className="text-sm text-blue-800 dark:text-blue-300">
                <strong>✅ List Check Karo:</strong> 30 din baad <Link href="/articles/PmKisanBeneficiaryList2026" className="underline">beneficiary list</Link> mein apna naam check karo. Hat gaya hona chahiye.
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-xl">
              <p className="text-sm text-green-800 dark:text-green-300">
                <strong>📝 Receipt Rakhein:</strong> Online ho ya offline, receipt ka screenshot/photo zaroor lein. Future mein kaam aayega.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 8: What If Not Surrendered */}
        <section className="mb-8">
          <SH>Agar Surrender Nahi Kiya Toh?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Bhai, agar eligible nahi ho aur surrender bhi nahi kiya, toh ye problems ho sakti hain:
          </p>
          <div className="space-y-3">
            {[
              { problem: 'Legal Action', desc: 'Sarkar legal action le sakti hai. Fraud maana jayega.' },
              { problem: 'Paisa Wapas', desc: 'Jo paisa mila hai wo wapas mang sakte hain.' },
              { problem: 'Blacklist', desc: 'Future schemes se bahar kar sakte hain.' },
              { problem: 'Penalty', desc: 'Fine ya penalty lag sakti hai.' },
            ].map(({ problem, desc }, i) => (
              <div key={i} className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
                <p className="font-black text-sm text-red-800 dark:text-red-300 mb-1">❌ {problem}</p>
                <p className="text-xs text-red-700 dark:text-red-400">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Isliye agar eligible nahi ho toh turant surrender kar do. <Link href="/articles/PmKisanMasterGuide2026" className="underline text-green-700 dark:text-green-400">Master Guide</Link> mein eligibility criteria check karo.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Voluntary Surrender FAQ" />
        </section>

        <GovLink
          href="https://pmkisan.gov.in"
          label="PM Kisan Official Portal"
          guide="Self Surrender Karein"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmkisan.gov.in"
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisanMasterGuide2026', l: '📚 Master Guide' },
          { href: '/articles/PmKisanCorrectionForm2026', l: '📝 Correction Form' },
          { href: '/articles/PmKisanBeneficiaryList2026', l: '📋 Beneficiary List' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}