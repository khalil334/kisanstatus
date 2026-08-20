import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import { AUTHOR_NAME } from '@/lib/site-config';

const PUBLISHED = '2026-01-20T17:46:17+05:30';
const MODIFIED = '2026-08-20T18:30:00+05:30';

const RELATED = [
  { slug: 'PmKisanCorrectionForm2026', title: 'Correction Form Guide' },
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary List' },
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Master Guide' },
];

const FAQS_DATA = [
  {
    q: 'Sarkar sach mein pakadti hai kya? Ya bas dar dikhaya jata hai?',
    a: 'Sach mein pakadti hai. Ab tak ineligible logon se ₹416 crore se zyada ki recovery ho chuki hai. Bihar jaise state me 13 lakh se zyada log ineligible mile — zyadatar Aadhaar-ration card matching se pakde gaye, jisme ek hi parivar ke kai log paisa le rahe the. System ab data se cross-check karta hai, toh chupne ka scope pehle jaisa nahi raha.',
  },
  {
    q: 'Zameen dada/pita ke naam hai, kheti main karta hoon — mujhe surrender karna padega?',
    a: 'Surrender ka nahi, mutation (dakhil-kharij) ka case hai. March 2026 se niyam sakht hue hain — benefit sirf usko milega jiske apne naam zameen ke kagaz aur lagaan rasid ho. Agar zameen abhi bhi purkhon ke naam hai, toh pehle mutation karwao. Jab tak kagaz aapke naam nahi, aap technically eligible nahi ho, aur payment ruk sakti hai.',
  },
  {
    q: 'Kaun logon ko surrender karna chahiye?',
    a: 'Government employees, income tax filers, pensioners, aur wo log jo scheme ke liye eligible nahi hain par galti se register ho gaye hain.',
  },
  {
    q: 'Surrender karne ke baad paisa wapas karna padega?',
    a: 'Agar aap scheme ke liye eligible nahi the, toh sarkar pehle se mile hue paiso ki recovery (vasooli) kar sakti hai. Voluntary surrender karne se future ki kist band ho jati hai aur legal action se bacha ja sakta hai.',
  },
  {
    q: 'Online surrender ho sakta hai?',
    a: 'Haan, PM Kisan portal ke "Farmers Corner" mein "Self Surrender" ka official option available hai.',
  },
  {
    q: 'Agar surrender kar liya toh wapas register kar sakte hain?',
    a: 'Surrender karne ke baad usi Aadhaar ya zameen par dobara register karna mushkil ho sakta hai aur portal par restriction lag sakti hai. Isliye soch samajh kar decision lein.',
  },
  {
    q: 'Surrender aur refund me kya fark hai?',
    a: 'Surrender aage ki kistein rokta hai, refund pichli li hui kistein wapas karta hai. Agar aap ineligible the aur pehle paisa le chuke ho, toh sirf surrender kaafi nahi — recovery ka sawaal phir bhi khada rahega. Aise case me refund ka rasta bhi portal se hi hai, aur jitni kistein chunoge utni hi lautti hain.',
  },
  {
    q: 'Surrender ke baad list se naam kab hatta hai?',
    a: 'Lagbhag 15-30 din. BAO details verify karta hai, uske baad list se naam hat jata hai.',
  },
  {
    q: 'Kya koi fees lagti hai?',
    a: 'Official portal par iska koi charge nahi lagta. Agar CSC se karwana ho toh nominal ₹20-30 service charge lag sakte hain.',
  },
];

export default function PmKisanVoluntarySurrenderGuide() {
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
            <span><Link href="/about" className="underline hover:text-white">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(PUBLISHED)}</span>
            <span>Updated: {fmtDate(MODIFIED)}</span>
            <span>12 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

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

        <section className="mb-8">
          <SH>Galti Ho Gayi? Koi Baat Nahi</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Kabhi kabhi aisa hota hai ki log galti se register ho jaate hain. Jaise koi government teacher ya pensioner. Baad mein pata chalta hai ki wo eligible nahi the.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Aise mein ghabrane ki zaroorat nahi hai. Sarkar ne <strong>Voluntary Surrender</strong> ka option diya hai. Isse aap apne aap ko scheme se hata sakte hain.
          </p>

          <Image
            src="/images/articles/pm-kisan-voluntary-surrender/surrender-option-screen.webp"
            alt="Self surrender option on PM Kisan portal"
            width={800}
            height={450}
            className="w-full rounded-xl my-4"
            loading="lazy"
          />

          <DB>
            <strong>Maidan Se Dekha Hua:</strong>
            <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">
              Kai baar government employees, pensioners ya income tax filers galti se register ho jate hain. Voluntary surrender karne se unki future kist agle cycle se band ho jati hai aur sarkari rules ke tahat unpar hone wali karrawai ya penalty se bacha ja sakta hai.
            </p>
          </DB>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Dhyan rahe, agar aap eligible nahi the toh sarkar pehle se mile hue paiso ki recovery kar sakti hai. Surrender karne se future ki kist aana band ho jayegi aur <Link href="/articles/PmKisanBeneficiaryList2026" className="underline text-green-700 dark:text-green-400">labharthi list</Link> se naam hat jayega.
          </p>
        </section>

        <section className="mb-8">
          <SH>Kaun Logon Ko Surrender Karna Chahiye?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            In logon ko der kiye bina surrender karna chahiye:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              { icon: '', title: 'Government Employees', desc: 'Teachers, clerks, officers — sabhi government jobs wale' },
              { title: 'Income Tax Filers', desc: 'Jo log income tax return file karte hain' },
              { icon: '', title: 'Pensioners', desc: 'Old age pension ya family pension lene wale' },
              { icon: '', title: 'MP/MLA/Officials', desc: 'Elected representatives aur unke family members' },
              { icon: '', title: 'Professionals', desc: 'CA, Doctor, Lawyer, Engineer — registered professionals' },
              { icon: '', title: 'Institutional Land', desc: 'Jinki zameen trust ya company ke naam par hai' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                {icon ? <span className="text-2xl block mb-2">{icon}</span> : null}
                <p className="font-black text-sm text-red-800 dark:text-red-300 mb-1">{title}</p>
                <p className="text-xs text-red-700 dark:text-red-400">{desc}</p>
              </div>
            ))}
          </div>
          <IB>
            <strong>Sabse Zaroori:</strong> Agar aap inme se kisi category mein aate hain, toh khud aage badh kar surrender kar do. Baad mein problem ho sakti hai.
          </IB>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Ek aur case jo bahut aam hai: <strong>pati aur patni dono</strong> registered hain. Scheme me beneficiary "family" hai — pati, patni aur naabaalig bachche milkar ek unit, aur ek unit ko saal me ek hi grant milta hai. Zameen alag-alag khaton me ho tab bhi. Aise me ek ko surrender karna hoga, warna verification me duplicate pakda jata hai aur extra paisa recover hota hai. Poora niyam{' '}
            <Link href="/rajya-yojana/pm-kisan-pati-patni-dono-ko-milega" className="underline text-green-700 dark:text-green-400">pati-patni rule article</Link> me hai.
          </p>
        </section>

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
            loading="lazy"
          />

          <WB>
            <strong>Zaroori Baatein:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1 text-xs">
              <li>Mobile number wahi hona chahiye jo registration time par diya tha</li>
              <li>OTP aayega, usko enter karna padega</li>
              <li>Ek baar submit karne ke baad undo nahi ho sakta</li>
              <li>15 din baad <Link href="/articles/PmKisanBeneficiaryList2026" className="underline text-green-700 dark:text-green-400">official list</Link> check karo</li>
            </ul>
          </WB>
        </section>

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
              <li>Patwari/Lekhpal se sign karwa kar BAO ko de dein</li>
              <li>Ek receipt milegi, usko sambhal kar rakhein</li>
            </ol>
          </div>
          <Image
            src="/images/articles/pm-kisan-voluntary-surrender/offline-surrender-form.webp"
            alt="Offline surrender form at BAO office"
            width={800}
            height={600}
            className="w-full rounded-xl my-4"
            loading="lazy"
          />
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            15 din ke andar aapka naam list se hat jayega. <Link href="/articles/PmKisanBeneficiaryList2026" className="underline text-green-700 dark:text-green-400">sarkari beneficiary record</Link> check karke confirm kar lena.
          </p>
        </section>

        <section className="mb-8">
          <SH>CSC Center Se Bhi Karwa Sakte Ho</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Agar online nahi ho pa raha aur BAO jane ka time nahi hai, toh <Link href="/articles/PmKisanCscRegistrationCharges" className="underline text-green-700 dark:text-green-400">paas ke CSC outlet</Link> par chale jao.
          </p>
          <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 rounded-xl p-5">
            <p className="text-sm text-green-800 dark:text-green-300 mb-3">
              <strong>CSC Process:</strong>
            </p>
            <ul className="list-disc list-inside text-xs text-green-800 dark:text-green-300 space-y-1 mb-3">
              <li>Aadhaar card aur mobile le jao</li>
              <li>CSC wale ko bolo "PM Kisan surrender karna hai"</li>
              <li>Wo portal par login karke form bharega</li>
              <li>₹20-30 nominal fees lag sakti hai</li>
              <li>10 minute mein ho jayega</li>
              <li>Receipt milegi</li>
            </ul>
          </div>
        </section>

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

        <section className="mb-8">
          <SH>Surrender Se Pehle Ke Chaar Checkpoints</SH>
          <div className="space-y-3">
            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-xl">
              <p className="text-sm text-amber-800 dark:text-amber-300">
                <strong>Recovery Ka Niyam:</strong> Agar aap eligible nahi the, toh sarkar pehle se disbursed kiye gaye paiso ki recovery kar sakti hai. Surrender karne se sirf future ki kist rukti hai aur legal penalty se bacha ja sakta hai.
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-xl">
              <p className="text-sm text-red-800 dark:text-red-300">
                <strong>Ek Baar Ka Decision:</strong> Surrender karne ke baad usi Aadhaar/zameen par dobara register karna mushkil ho sakta hai aur portal par restriction lag sakti hai. Soch samajh kar karo.
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-xl">
              <p className="text-sm text-blue-800 dark:text-blue-300">
                <strong>List Check Karo:</strong> 30 din baad <Link href="/articles/PmKisanBeneficiaryList2026" className="underline">updated list</Link> mein apna naam check karo. Hat gaya hona chahiye.
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-xl">
              <p className="text-sm text-green-800 dark:text-green-300">
                <strong>Receipt Rakhein:</strong> Online ho ya offline, receipt ka screenshot/photo apne phone mein rakh lein. Future mein kaam aayega.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>2026 Mein Sakhti Kitni Badh Gayi Hai — Asli Numbers</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            "Koi nahi dekh raha, chalne do" waali soch ab 2026 me kaam nahi karegi. Verified aankde dekho:
          </p>
          <ul className="space-y-2 mb-4 text-sm text-[var(--color-text-muted)]">
            <li className="flex gap-2"><span className="text-red-600 shrink-0 font-bold" aria-hidden="true">→</span> <strong>₹416 crore+ ki recovery</strong> ho chuki hai ineligible beneficiaries se — yeh dhamki nahi, ho chuka kaam hai.</li>
            <li className="flex gap-2"><span className="text-red-600 shrink-0 font-bold" aria-hidden="true">→</span> <strong>Bihar me 13 lakh+ log ineligible</strong> paye gaye (~₹780 crore galat haath me gaya) — Aadhaar-ration card matching se pakde gaye, jisme ek parivar ke kai members paisa le rahe the.</li>
            <li className="flex gap-2"><span className="text-red-600 shrink-0 font-bold" aria-hidden="true">→</span> <strong>2026 ke audit me 1.13 crore+ naam</strong> beneficiary list se hataye gaye — eKYC, land record aur taxpayer cross-check se.</li>
            <li className="flex gap-2"><span className="text-red-600 shrink-0 font-bold" aria-hidden="true">→</span> <strong>March 2026 se land-ownership rule:</strong> zameen ke kagaz apne naam hone zaroori hain. Purkhon ke naam waali zameen pe bina mutation ke benefit band ho sakta hai.</li>
          </ul>
          <IB>
            <strong>Seedha matlab:</strong> agar aap jaante ho ki eligible nahi ho (taxpayer ho, pension ₹10,000+ hai,
            parivar me pehle se koi le raha hai), toh khud surrender karna sabse sasta rasta hai — recovery notice aane
            ke baad wahi kaam byaj samet mehnga padta hai. Notice aa chuka hai toh{' '}
            <Link href="/articles/hi/recovery-notice" className="underline font-semibold">recovery notice waala guide</Link> padho.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Agar Surrender Nahi Kiya Toh?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Agar eligible nahi ho aur surrender bhi nahi kiya, toh ye problems ho sakti hain:
          </p>
          <div className="space-y-3">
            {[
              { problem: 'Legal Action', desc: 'Sarkar legal action le sakti hai. Fraud maana jayega.' },
              { problem: 'Recovery Action', desc: 'Sarkar pehle se mile hue paiso ki vasooli (recovery) kar sakti hai.' },
              { problem: 'Blacklist', desc: 'Future government schemes se bahar kar sakte hain.' },
              { problem: 'Penalty', desc: 'Fine ya penalty lag sakti hai.' },
            ].map(({ problem, desc }, i) => (
              <div key={i} className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
                <p className="font-black text-sm text-red-800 dark:text-red-300 mb-1">{problem}</p>
                <p className="text-xs text-red-700 dark:text-red-400">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Isliye agar eligible nahi ho toh apni marzi se surrender kar do. <Link href="/articles/PmKisanMasterGuide2026" className="underline text-green-700 dark:text-green-400">Master Guide 2026 wala article</Link> mein eligibility criteria check karo.
          </p>
        </section>

        <section className="mb-8">
          <SH>Surrender, Refund Ya Aapatti — Teeno Alag Raaste Hain</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Log in teeno ko mila dete hain, aur wahi sabse badi galti hai. Teeno ka kaam alag hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            <strong>Surrender</strong> aage ki kistein rokta hai. Bas. Jo paisa pehle aa chuka hai, us par surrender ka koi asar nahi. <strong>Refund</strong> ulta kaam karta hai — pichli li hui kistein sarkar ko wapas karta hai. Aur <strong>aapatti (objection)</strong> tab hai jab aapko lagta hai ki aap eligible ho hi, aur notice ya entry galat hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ineligible aadmi ke liye poora safai ka rasta dono se milkar banta hai: surrender + refund. Sirf surrender karke baithe rahe toh pichle paise ka hisaab khula rehta hai, aur recovery notice baad me bhi aa sakta hai. Refund bhi portal se hi hota hai — jitni kistein chunoge utni hi lautti hain, yaani hisson me lautana technically possible hai. District recovery wale mamlon me shartein local prashasan tay karta hai; unse likhit me pooch lena sahi rehta hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ek aur baat jo kam log jaante hain: zyadatar mamle — galat entry ki aapatti, refund, record sudhaar — krishi vibhag ya tehsil ke level par hi nipat jaate hain, aur inki koi fees nahi lagti. Vakil ki zaroorat tabhi padti hai jab mamla bhu-rajasva vasooli ki kanooni karrawai tak pahunch jaye. Wahan tak jaane hi kyon dena?
          </p>
          <IB>
            <strong>Dobara judne ka rasta band nahi hota:</strong> agar ineligibility ki wajah baad me khatam ho jaye — naukri chhoot gayi, ya record ki galti sudhar gayi — toh naye sire se aavedan ka rasta khula hai. Purana refund isme baadha nahi banta; saaf record ulta madad karta hai. Poori detail{' '}
            <Link href="/articles/hi/recovery-notice" className="underline font-semibold">recovery notice guide</Link> me hai.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Surrender Me Dikkat Aaye Toh Kahan Poochein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Portal par Self Surrender ka page nahi khul raha? Aadhaar daalne par record nahi mil raha? Ya submit ke 30 din baad bhi list se naam nahi hata? Teen raaste hain, teeno official:
          </p>
          <ul className="space-y-2 mb-4 text-sm text-[var(--color-text-muted)]">
            <li className="flex gap-2"><span className="text-green-700 shrink-0 font-bold" aria-hidden="true">1.</span> <span><strong>Helpline 155261</strong> — busy ho toh landline <strong>011-24300606</strong>. Timing aam taur par subah 9 se shaam 6, somvar se shanivar. Kist release wale hafte lines sabse zyada busy hoti hain — subah 9-10 baje ke beech lagao, load kam hota hai.</span></li>
            <li className="flex gap-2"><span className="text-green-700 shrink-0 font-bold" aria-hidden="true">2.</span> <span><strong>Email</strong> — <strong>pmkisan-ict@gov.in</strong> par apna Aadhaar-linked registration number aur problem ek line me likh kar bhejo.</span></li>
            <li className="flex gap-2"><span className="text-green-700 shrink-0 font-bold" aria-hidden="true">3.</span> <span><strong>Help Desk Query Form</strong> — pmkisan.gov.in ke Help Desk me online complaint daalo. Iska ticket number milta hai, jo phone call se zyada kaam ka hai — follow-up me yahi number kaam aata hai. Poori guide{' '}<Link href="/yojana/pm-kisan-helpline-155261" className="underline text-green-700 dark:text-green-400">helpline 155261 article</Link> me hai.</span></li>
          </ul>
          <WB>
            <strong>Ek warning saaf-saaf:</strong> 155261 ya kisi bhi sarkari number se call karke koi OTP nahi poochta, bank detail confirm nahi karwata. "Surrender cancel karna hai toh OTP batao" type ka call aaye toh wo fraud hai — kaat do. Surrender ke naam par bhi thagi chalti hai.
          </WB>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Surrender Se Pehle Ke Sawal, Yahan Jawab
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
        <AuthorBox modified={MODIFIED} bioKey="PmKisanVoluntarySurrenderGuide" />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisanMasterGuide2026', l: 'Master Guide' },
          { href: '/articles/PmKisanCorrectionForm2026', l: 'Correction Form' },
          { href: '/articles/PmKisanBeneficiaryList2026', l: 'Beneficiary List' },
        ]} />
        <Disclaimer k="PmKisanVoluntarySurrenderGuide" />
      </div>
    </>
  );
}
