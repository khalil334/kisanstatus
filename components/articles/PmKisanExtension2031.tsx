import Link from 'next/link';
import {
  SI, StepList, IB, WB, SH, GovLink, RelatedArticles,
  AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate
} from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const PUBLISHED = '2026-11-06T13:13:00+05:30';
const MODIFIED = '2026-11-06T13:13:00+05:30';

const RELATED = [
  { slug: 'PmKisan24viKist2026', title: '24vi Kist: 30 October Ko Release' },
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Master Guide' },
  { slug: 'PmKisanPaymentFailedFix2026', title: 'Payment Failed, 7 Fixes' },
];

const FAQS_DATA = [
  {
    q: '2031 tak kya ₹2,000 ki kist hi milegi, ya amount badhega?',
    a: 'Is faisle se amount nahi badla. Saal ke ₹6,000, teen baar me ₹2,000 karke, wahi rahenge. Cabinet ne scheme ko aage badhaya hai, rakam ko nahi. Agar kabhi rakam badhi to woh alag faisla hoga, Budget ya Cabinet se aayega, aur uski khabar bhi wahin se milegi.',
  },
  {
    q: 'Extension ke baad dobara registration karwana padega?',
    a: 'Nahi. Jo pehle se beneficiary hai, uska kuch nahi badlega, na form, na dobara eKYC is faisle ki wajah se. Naye kisan ka registration wahi purana tarika hai, CSC ya portal se, aur uske baad wahi teen cheezein chahiye hongi: eKYC, land seeding aur bank seeding.',
  },
  {
    q: '25vi kist ab kab aayegi?',
    a: 'Iska koi official elaan abhi nahi hua hai. 4 November 2026 tak sarkar ki taraf se koi date nahi aayi. Kuch log pichhle rounds ke gap se agle mahine ka andaza lagate hain, lekin woh andaza hi hai, pakki date sirf sarkar ke elaan se milegi. Date aate hi 24vi kist wale article me update milega, wahan nazar rakhiye.',
  },
  {
    q: 'Mahila kisanon ko is extension se kuch khaas milega?',
    a: 'Alag se kuch nahi. Scheme ke niyam sab ke liye ek jaise hain. Cabinet ke faisle me ye aankda zaroor hai ki mahila kisanon ko ab tak ₹1.06 lakh crore se zyada mil chuka hai aur lagbhag har chaunthe beneficiary me se ek mahila hai. Matlab scheme mahilaon tak pahunch rahi hai, par is extension me unke liye koi alag rakam ya alag niyam nahi bana.',
  },
  {
    q: 'Galat tareeke se paisa lene walon se recovery ka kya matlab hai?',
    a: 'December 2025 tak aise logon se ₹416.75 crore wapas liye ja chuke hain jo scheme ke niyam tod kar fayda le rahe the, jaise income tax bharne wale ya sarkari naukri wale. Agar kisi ne galti se fayda liya hai to woh khud surrender kar sakta hai; uska tarika voluntary surrender wale guide me hai. Jaan-bujh kar galat fayda lena ab aur mushkil hoga, kyunki verification sakht ho rahi hai.',
  },
];

export default function PmKisanExtension2031({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white font-bold">Scheme Extension 2031</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Cabinet Decision · 31 July 2026</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan 2031 Tak Chalegi: Cabinet Ka Faisla, ₹3.15 Lakh Crore Aur Aage Kya
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span><Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(PUBLISHED)}</span>
            <span>Updated: {fmtDate(MODIFIED)}</span>
            <span>{article.readingTime} min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className="mb-6 border-2 rounded-xl p-4 bg-blue-50 dark:bg-blue-900/20 border-blue-400 dark:border-blue-700">
          <p className="font-black text-base sm:text-lg leading-snug text-blue-800 dark:text-blue-300">
            31 July 2026: Cabinet Ne PM Kisan Ko 2030-31 Tak Badha Diya
          </p>
          <p className="text-xs sm:text-sm mt-1 text-blue-700 dark:text-blue-400">
            Scheme 2026-27 se 2030-31 tak chalegi. Kul outlay ₹3.15 lakh crore. Kist ki rakam, eligibility aur teen kiston ka schedule — kuch nahi badla.
          </p>
          <p className="text-xs text-[var(--color-text-muted)] mt-1.5">
            Last Updated: {fmtDate(MODIFIED)}
          </p>
        </div>

        <section className="mb-8">
          <SH>Faisla Asal Me Kya Kehta Hai</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            31 July 2026 ko Union Cabinet ne PM Kisan Samman Nidhi ko aage badhane ka faisla liya. Scheme ab 2026-27 se 2030-31 tak chalegi, matlab paanch saal aur. Ye koi nayi scheme nahi hai, na isme koi naya naam juda hai. Wahi scheme, wahi ₹6,000 saalana, bas uski umar badh gayi.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Aise faisle ka asar seedha kisan ke budget par padta hai. Jab tak scheme ki aakhri tareekh saaf nahi hoti, har saal ye sawal latka rehta hai ki agle saal kist aayegi ya nahi. Ab woh sawal paanch saal ke liye band ho gaya. Beej, khaad aur karz ki planning me ye nishchitata hi sabse badi baat hai, kyunki ₹2,000 ki kist chhoti lagti hai, par uska time par aana hi uski keemat hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Cabinet note me kul outlay ₹3,15,614 crore bataya gaya hai, jise aam taur par ₹3.15 lakh crore kaha ja raha hai. Ye paanch saal ke liye manzoor ki gayi kul rakam hai. Iska matlab ye nahi ki ye paisa aaj hi kisi ke khaate me gaya. Ye woh limit hai jiske andar paanch saal tak kistein niklengi, har saal Budget se hissa milta rahega.
          </p>
        </section>

        <section className="mb-8">
          <SH>Ab Tak Kitna Baanta Ja Chuka Hai</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Extension ka scale samajhne ke liye pehle ye dekhna hoga ki scheme ab tak kya kar chuki hai. Cabinet ke faisle ke hisaab se pehli 23 kiston me ₹4.47 lakh crore se zyada baante ja chuke the. Uske baad 30 October 2026 ko 24vi kist bhi release ho gayi, 9.34 crore se zyada parivaron ko ₹18,690 crore se zyada. Sarkari release ke mutabiq 24 kiston ke baad kul rakam ₹4.64 lakh crore se zyada ho gayi hai.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Hissa</th>
                  <th className="p-3 text-left">Rakam</th>
                  <th className="p-3 text-left">Kab / Kahan Se</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { part: 'Pehli 23 kistein', amt: '₹4.47 lakh crore se zyada', when: 'Cabinet release, 31 July 2026' },
                  { part: '24vi kist', amt: '₹18,690 crore se zyada', when: '30 October 2026, Banaskantha (Gujarat)' },
                  { part: 'Kul, 24 kiston tak', amt: '₹4.64 lakh crore se zyada', when: '30 October 2026 ke baad' },
                  { part: 'Aage ke 5 saal ka outlay', amt: '₹3.15 lakh crore', when: '2026-27 se 2030-31 tak' },
                ].map((row) => (
                  <tr key={row.part} className="bg-[var(--color-card)]">
                    <td className="p-3 border-b border-[var(--color-border)] font-semibold text-xs text-[var(--color-text)]">{row.part}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{row.amt}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{row.when}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ek cheez yahan saaf kar dena zaroori hai. Upar wali table me 24vi kist ke parivaron ki sankhya 9.34 crore hai, jabki portal par period-wise ginati thodi zyada dikhti hai. Dono me fark isliye hai kyunki release wale din ka aankda aur uske baad credit hote rehne ka aankda alag hota hai. Release wale din jo sarkar ne elaan kiya, wahi is article me istemal hua hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Paisa Kis Tak Pahuncha</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Cabinet ke faisle me do aankde aise hain jo aksar peeche reh jate hain, lekin wohi batate hain ki scheme kahan tak pahunchi hai. Pehla, mahila kisanon ko ab tak ₹1.06 lakh crore se zyada mil chuka hai, aur lagbhag har chaunthe beneficiary me se ek mahila hai. Matlab har chaar me se ek kist kisi mahila kisan ke naam par gayi. Gaon me jahan zameen aksar purush ke naam par hoti hai, wahan ye hissa chhota nahi hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Doosra aankda COVID ke time ka hai. Us daur me scheme ke zariye ₹1.71 lakh crore se zyada baante gaye. Jab mandiyan band thi aur mazdoori ruki hui thi, tab yehi ₹2,000 ki kist bahut se gharon me ekmatra pakki aamdani thi. Yehi wajah hai ki extension ka faisla sirf kheti ka faisla nahi, gaon ki aarthik suraksha ka faisla bhi hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            In aankdon ko padhte waqt ek sawal dimaag me aana chahiye: kya paisa sahi logon tak pahuncha? Iska jawab agle hisse me hai, jahan scheme ki jaanch aur safai ki baat aayi hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Scheme Kaam Kar Rahi Hai Ya Nahi</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Har badi scheme par ye sawal uthta hai ki paisa kharch ho raha hai ya kaam bhi aa raha hai. Cabinet release me NITI Aayog ke DMEO dwara ki gayi evaluation ke nateeje diye gaye hain. Unke mutabiq 92% se zyada kisanon ne rakam kheti ke kaam me lagayi, aur lagbhag 85% ne bataya ki unki aamdani badhi aur mahajan se udhar lene par nirbharta kam hui.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ye ek survey ka nateeja hai, koi vaada nahi. Iska matlab ye nahi ki har kisan ki aamdani badh gayi. Iska matlab ye hai ki bade sample me zyada logon ne kist ko kheti me lagaya aur usse fayda mehsoos kiya. Kist ka size chhota hai, isliye iska asar bhi waisa hi hota hai: beej aur khaad ke waqt haath khaali nahi rehta.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Usi release me anaaj ki paidawar ke aankde bhi hain. 2020-21 se 2025-26 ke beech khaadyaan ka rakba 9.65% badha, paidawar prati hectare 10.53% badhi aur kul utpadan 21.18% badha. Ye poori tarah PM Kisan ki wajah se hua, aisa kehna galat hoga. Mausam, sinchai aur dusri yojanaon ka bhi hissa hai. Lekin ye aankde usi samay ke hain jab scheme apne sabse bade scale par chal rahi thi, aur Cabinet ne extension ke samarthan me inhe hi aage rakha hai.
          </p>
          <IB>
            <strong>Seedhi baat:</strong> ₹2,000 ki kist se koi ameer nahi banta. Iska kaam waqt par thoda sahara dena hai — buwai ke time beej, katai ke time mazdoori. Evaluation kehti hai ki zyada tar log use wahi karte hain. Isi liye scheme ko paanch saal aur chalane ka faisla hua.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Doosri Taraf: Galat Haathon Se Wapsi</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Extension ke saath hi sarkar ne safai ka hisaab bhi diya hai. December 2025 tak aise logon se ₹416.75 crore wapas liye ja chuke hain jo niyam tod kar fayda le rahe the. Inme income tax bharne wale, sarkari karmchari, PSU ke log aur samvaidhanik padon par rahe log shaamil hain. Ye wohi categories hain jo scheme ki shuruaat se bahar rakhi gayi thi.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Recovery ka matlab sirf paisa wapas lena nahi hai. Iske peeche verification ka poora system kaam karta hai: land record, income tax ka data, sarkari naukri ka record. Isi liye portal par ab kuch cases me benefit physical verification tak roka ja raha hai. Agar aapka paisa is wajah se ruka hai to uska alag se hal hai,{' '}
            <Link href="/articles/PmKisanPaymentFailedFix2026" className="underline font-bold text-[var(--color-primary)]">payment failed wale guide</Link>{' '}
            me us par naya section joda gaya hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Aur agar kisi ne jaan-bujh kar nahi, galti se fayda liya hai, to uske liye khud surrender karne ka rasta hai. Uska tarika{' '}
            <Link href="/articles/PmKisanVoluntarySurrenderGuide" className="underline font-bold text-[var(--color-primary)]">voluntary surrender guide</Link>{' '}
            me step by step diya hai. Khud surrender karne par baat wahin khatm hoti hai, pakde jaane par recovery ke saath pareshani bhi badh jaati hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Aapke Liye Kya Nahi Badla</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Faisle ki khabar sun kar aksar ye galatfahmi phailti hai ki sab kuch badal gaya. Yahan chaar cheezein saaf likh rahe hain, jo jaisi thi waisi hi rahengi.
          </p>
          <div className="space-y-3">
            {[
              { t: 'Rakam wahi hai', d: 'Saal ke ₹6,000, teen baar me ₹2,000 karke. Na ek rupya badha, na koi nayi kist judi. Extension sirf scheme ki umar badhata hai, jeb nahi.' },
              { t: 'Eligibility wahi hai', d: 'Zameen wale kisan parivar, eKYC complete, land aur bank seeding poori. Jo pehle bahar the — income tax payer, sarkari naukri, registered professional — woh ab bhi bahar hain.' },
              { t: 'Dobara registration nahi', d: 'Pehle se beneficiary hain to kuch karne ki zaroorat nahi. Koi naya form nahi bharna, koi nayi fee nahi. Naye kisan ka process bhi wahi purana hai.' },
              { t: 'Kiston ka rhythm wahi hai', d: 'Saal me teen baar, lagbhag chaar mahine ke antar par. 24vi kist 30 October 2026 ko aayi, 23vi 20 June 2026 ko aayi thi. Agli ka elaan hote hi update milega.' },
            ].map(({ t, d }) => (
              <div key={t} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
                <p className="font-black text-[var(--color-text)] text-sm mb-1">{t}</p>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <SH>Rajyon Ki Yojanaon Par Bhi Asar Padega</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Extension ka ek fayda woh hai jo seedha dikhta nahi: rajyon ki top-up yojanaen PM Kisan par khadi hain. Rajasthan apne kisanon ko PM Kisan ke ₹6,000 par ₹3,000 aur deta hai, aur West Bengal ne bhi abhi-abhi Mukhyamantri Krishak Samman Nidhi me PM Kisan walon ke liye ₹3,000 ka extra hissa joda hai. Dono ka niyam ek hai: pehle PM Kisan me eligible hona, phir state ka hissa.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Jab tak kendra ki scheme ki aakhri tareekh saaf nahi hoti, rajya bhi apni yojana ko lekar aage ka plan nahi bana pate. Ab 2030-31 tak ki nishchitata mil gayi hai, to rajyon ko bhi apne hisse ko aage badhane, uski rakam tay karne aur verification ka system sudharne ka waqt milega. Kisan ke liye iska matlab ye hai ki ₹9,000 wala kul hisaab, kendra ke ₹6,000 aur rajya ke ₹3,000, ab sirf is saal ki baat nahi raha.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Lekin ek baat yahan bhi saaf rahe: rajya ka hissa rajya ke faisle par chalega, kendra ke extension se woh apne aap nahi badhega. Rajasthan ya West Bengal ki rakam ya niyam badle to woh unke apne elaan se hoga. Isliye apne state ki yojana ki khabar bhi alag se dekhte rahiye, sirf PM Kisan ki khabar se kaam nahi chalega.
          </p>
        </section>

        <section className="mb-8">
          <SH>Aage Kya Dekhna Hai</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Extension ka matlab ye nahi ki ab har kist ki date pehle se pata hogi. 25vi kist ki koi official date 4 November 2026 tak nahi aayi hai. Jab aayegi, elaan pmkisan.gov.in ya PIB par hoga, aur usi din{' '}
            <Link href="/articles/PmKisan24viKist2026" className="underline font-bold text-[var(--color-primary)]">24vi kist wale article</Link>{' '}
            me update milega. Tab tak kisi bhi video ya forward wali date par bharosa mat kijiye.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ek aur baat jo extension ke baad aksar sunne ko milegi: ki ab rakam badh jayegi ya ek saath do kistein milengi. Aisa koi faisla nahi hua hai. Rakam badhane ki koi ghoshna Budget ya Cabinet se aayegi, aur woh khabar bhi wahin se aayegi. Extension ka fayda nishchitata hai, rakam nahi.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Aakhir me ek kaam jo aaj hi kar lena chahiye: apna status khol kar dekh lijiye. eKYC, land seeding aur bank seeding — teeno &quot;Yes&quot; hone chahiye. Extension ka matlab ye bhi hai ki verification sakht hogi, aur jo record adhoora hai uski kist rukegi. Status check ka tarika{' '}
            <Link href="/articles/PmKisanMasterGuide2026" className="underline font-bold text-[var(--color-primary)]">master guide</Link>{' '}
            me hai.
          </p>
          <WB>
            Date sirf tab maaniye jab woh pmkisan.gov.in ya PIB par dikhe. Extension ka elaan bhi wahin se aaya tha, aur agli kist ki date bhi wahin se aayegi.
          </WB>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Extension Par Aksar Poochhe Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kisan 2031 tak — jo sab poochhte hain" />
        </section>

        <section className="mb-8">
          <SH>Sources</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Is article ki har date aur figure inhi jagahon se milaayi gayi hai. Aap khud bhi check kar sakte hain:
          </p>
          <ul className="text-sm text-[var(--color-text-muted)] space-y-2 mb-2 list-disc pl-5">
            <li>
              Cabinet ne PM-KISAN ko 2026-27 se 2030-31 tak badhaya, outlay ₹3.15 lakh crore. PIB press release, 31 July 2026.{' '}
              <a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2292437&reg=48&lang=2" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">pib.gov.in (PRID 2292437)</a>
            </li>
            <li>
              24vi kist — ₹18,690 crore se zyada, 9.34 crore se zyada parivar, 30 October 2026, Banaskantha. PIB press release, Ministry of Agriculture &amp; Farmers Welfare.{' '}
              <a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2330171" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">pib.gov.in (PRID 2330171)</a>
            </li>
            <li>
              December 2025 tak ayogya labharthiyon se ₹416.75 crore ki recovery; kul ₹4.64 lakh crore se zyada ka aankda. PIB 30 October 2026 backgrounder.{' '}
              <a href="https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/oct/doc_10319_20261030_15562701.pdf" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">static.pib.gov.in (PDF)</a>
            </li>
            <li>
              PM-KISAN official portal (status, eKYC, beneficiary list, notices).{' '}
              <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">pmkisan.gov.in</a>
            </li>
          </ul>
          <p className="text-xs text-[var(--color-text-muted)] italic">
            Aakhri baar in sab se milaan {fmtDate(MODIFIED)} ko kiya gaya.
          </p>
        </section>

        <GovLink
          href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
          label="PM Kisan Beneficiary Status. Official Portal"
          guide="Abhi Status Check Karo"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmkisan.gov.in"
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} bioKey="PmKisanExtension2031" />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisanMasterGuide2026', l: 'Master Guide' },
          { href: '/articles/PmKisan24viKist2026', l: '24vi Kist Status' },
          { href: '/articles/PmKisanPaymentFailedFix2026', l: 'Payment Failed Fix' },
        ]} />
        <Disclaimer k="PmKisanExtension2031" />
      </div>
    </>
  );
}
