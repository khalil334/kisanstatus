import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const PUBLISHED = '2026-02-09T08:58:39+05:30';
const MODIFIED = '2026-08-14T22:15:00+05:30';

const RELATED = [
  { slug: 'pm-kisan-fto-generated-ka-matlab-kya-hai', title: 'FTO Generated Ka Matlab' },
  { slug: 'pm-kisan-self-registered-status-check', title: 'Self-Registered Status Check' },
  { slug: 'PmKisanVillageWiseListPdfDownload', title: 'Gaon Ki List PDF Mein Dekhein' },
];

const FAQS_DATA = [
  {
    q: '25vi kist ki exact date kya hai?',
    a: 'Abhi kuch bhi official nahi hai — na sarkar ne bola, na kisi aur ko pata. Net par jo February ya March ghoom raha hai woh sab guesswork hai. Announcement hamesha release se thoda pehle hoti hai, mahino pehle kabhi nahi. Official khabar aate hi hum yahan update kar denge.',
  },
  {
    q: 'Kya 25vi kist mein paisa badhkar ₹2,500 ya ₹3,000 ho jayega?',
    a: 'Iska koi official confirmation nahi. 2019 se wahi amount mil raha hai aur har budget se pehle badhne ki afwah udti hai — aaj tak ek baar bhi sach nahi hui. Planning ₹2,000 ke hisab se karo. Agar sach mein badha toh yeh page turant update hoga.',
  },
  {
    q: 'Kist na aaye toh kahan shikayat karein?',
    a: 'Helpline 155261 hai — toll free. Landline se 011-24300606 bhi try kar sakte ho. Phone se pehle apna registration ya Aadhaar number haath mein rakhna, uske bina record dhoondhna mushkil ho jata hai. Subah 10 baje ke aas paas line kam busy rehti hai. Apne krishi vibhag ke office ya CSC centre par bhi baat ho sakti hai.',
  },
  {
    q: '24vi kist nahi mili — kya 25vi milegi?',
    a: 'Milni chahiye, lekin pehle yeh pata karo ki 24vi kyu ruki. Zyada tar mamlo mein wajah eKYC pending, bank mein Aadhaar seeding na hona ya land record verify na hona hoti hai. Yeh theek kiye bina agli wali bhi wahin atkegi. Ruki hui raqam baad mein alag se credit ho jati hai, agar aap eligible ho.',
  },
  {
    q: 'Naye registration ki koi last date hai kya?',
    a: 'Nahi, portal saal bhar khula rehta hai. Lekin verification mein hafto ka time lagta hai — document check, land seeding, eKYC sab hone ke baad hi naam list mein aata hai. Jitni jaldi karoge, utni jaldi benefit shuru hone ke chance banenge. Der karne ka bas itna nuksan hai ki ek-do cycle nikal sakti hai.',
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
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan 25vi Kist 2027: Kab Aayegi, Kitni Milegi — Sach Yeh Hai Ki Abhi Kisi Ko Pata Nahi
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span><Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(PUBLISHED)}</span>
            <span>Updated: {fmtDate(MODIFIED)}</span>
            <span>11 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/articles/pm-kisan-25vi-kist-2027/hero-25vi-kist.webp'}
            alt="Kisan mobile par PM Kisan 25vi kist ka status check karta hua"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Abhi sirf intezaar hai — pakki tareekh kisi ke paas nahi
          </p>
        </div>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          Google par search karo toh dus article milenge, aur dus alag jawab. Kisi ne February 2027 likha hai, kisi ne March. Ek-do ne toh din tak bata diya. Source? Kisi ke paas nahi. Bas ek dusre se copy karte hain aur padhne wala confuse hota rehta hai.
        </p>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          Hum seedhi baat karenge. Sach yeh hai ki 25vi wali abhi kisi ko nahi pata — na humein, na un YouTube channelo ko, na un websites ko. Sarkar mahino pehle kabhi kuch announce nahi karti. Zyada tar toh release se ek-do hafte pehle hi khabar aati hai, aur kai baar toh PM ke kisi event ke sath hi transfer ho jata hai.
        </p>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
          Aur ek jaruri baat — <Link href="/articles/PmKisan24viKist2026" className="text-[var(--color-primary)] underline font-medium">24vi kist</Link> khud abi tak nahi aayi. Jab usi ka intezaar chal raha hai, toh agli ki &quot;confirm tareekh&quot; batane wale khud soch lo kitne serious hain.
        </p>

        <WB>
          <strong>Pehle hi bata dein:</strong> Is article mein jo pakka hai woh pakka likha hai, aur jo andaza hai woh andaza. Dono ko mix karke aapko bewakoof nahi banayenge. Yahi is page ka wada hai.
        </WB>

        <section className="mb-8 mt-8">
          <SH>Ab tak ka record — kya pakka hai, kya nahi</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Sabse imandaar tarika yeh hai ki pichhla record dekha jaye. 21vi, 22vi aur 23vi — teeno aa chuki hain aur inki dates official record mein hain. 24vi ka intezaar hai, jiska live update hum <Link href="/articles/PmKisan24viKist2026" className="text-[var(--color-primary)] underline">alag article</Link> mein rakhte hain.
          </p>

          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Kist</th>
                  <th className="p-3 text-left">Kab aayi / kab expected</th>
                  <th className="p-3 text-left">Note</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['21vi', '19 November 2025', 'Aa chuki, ₹2,000 mila tha'],
                  ['22vi', '13 March 2026', 'Pichli wali ke kareeb 4 mahine baad aayi'],
                  ['23vi', '20 June 2026', 'Is baar gap sirf 3 mahine ka tha'],
                  ['24vi', 'Umeed: Oct–Nov 2026', 'Abhi tak nahi aayi, intezaar chalu hai'],
                  ['25vi', 'Uske 3-4 mahine baad', 'Door ki baat — pehle 24vi toh aa jaye'],
                ].map(([kist, date, note], i) => (
                  <tr key={kist} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{kist}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{date}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Table dhyan se dekho. November se March — chaar mahine. March se June — teen. Scheme ka official rule toh yehi hai ki saal mein teen baar ₹2,000 milte hain, har chaar mahine mein ek baar, total ₹6,000. Lekin zameen par timing kabhi teen mahine mein ho jati hai, kabhi paanch kha jati hai.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Isliye jo bhi confidently &quot;February pakka&quot; bol raha hai, woh bas pichla gap aage badha kar hisab laga raha hai. Hisab hum bhi laga sakte hain — agar 24vi October-November ke aas paas aati hai, toh agli uske teen-chaar mahine baad banti hai, matlab agle saal ki shuruat ke aas paas. Lekin yeh hisab hai, guarantee nahi. Farak samajhna jaruri hai.
          </p>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-25vi-kist-2027/installment-timeline-chart.webp"
            alt="PM Kisan kisto ke beech ka gap — 2025 se 2027 tak ki timeline"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Har baar ka gap alag raha hai — isi liye andaza pakka nahi ho sakta
          </p>
        </div>

        <section className="mb-8">
          <SH>Sarkar tareekh decide kaise karti hai — process samjho</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Yeh samajhna kaam aayega, kyuki isse pata chalta hai ki sab kuch pehle se fix kyu nahi hota. Amount seedha DBT (Direct Benefit Transfer) se aata hai — sarkar ke khaate se seedha aapke bank account mein. Lekin transfer se pehle ek lambi chain chalti hai.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Pehle states apne beneficiaries ka data verify karke bhejte hain. Phir Centre us data ko dekhta hai — kaun eligible hai, kiska eKYC hua, kiska account Aadhaar se juda hai. Uske baad FTO yani Fund Transfer Order generate hota hai. FTO ka matlab — aapka payment approve ho gaya, ab bas transfer hona baki hai. Iske bare mein detail se <Link href="/articles/pm-kisan-fto-generated-ka-matlab-kya-hai" className="text-[var(--color-primary)] underline">is article</Link> mein padh sakte ho.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Aur aakhri kadam — release event. Zyada tar yeh raqam PM ke haathon kisi program mein jaari hoti hai. Event ki timing politics aur schedule par depend karti hai, isliye payment ki timing bhi wahi tay karti hai. Yahi wajah hai ki koi bhi website mahino pehle exact din nahi bata sakti — kyuki woh din exist hi nahi karta abhi.
          </p>

          <IB>
            <strong>Ek line mein:</strong> Data verification + FTO + PM ka event = kab milega. In teeno mein se koi bhi cheez aage-peeche ho sakti hai, isliye timing bhi aage-peeche hoti hai.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Paisa badhega ya wahi ₹2,000 rahega?</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Scheme 2019 mein shuru hui thi — tab se har baar wahi ₹2,000, saal ke ₹6,000. Saat saal ho gaye, ek rupaya nahi badha.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Har budget season mein wahi purani afwah wapas aa jati hai — is baar ₹2,500 honge, nahi nahi ₹3,000, kisi ne toh ₹4,000 tak bol diya tha. News channelo ko masala chahiye aur YouTube walo ko views. Lekin record utha ke dekho — ek baar bhi amount nahi badha.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Kya kabhi badh sakta hai? Haan bilkul — sarkar chahe toh kal badha de. Lekin &quot;badh sakta hai&quot; aur &quot;badhne wala hai&quot; mein zameen aasman ka farak hai. Jab tak Finance Ministry ya portal se official announcement na aaye, tab tak ₹2,000 hi maan ke chalo.
          </p>

          <IB>
            <strong>Real baat:</strong> Apna budget isi amount ke hisab se banao. Agar badha toh woh bonus hoga — aur hum yahan sabse pehle update karenge.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Intezaar chhodo — yeh 5 kaam abhi karo</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ab asli kaam ki baat. Timing aap control nahi kar sakte, lekin yeh jarur kar sakte ho ki jab release ho, aapka hissa atke nahi. Har baar lakhs logo ka payment inhi wajaho se rukta hai — aur yeh sari cheezein pehle se theek ho sakti hain:
          </p>

          <StepList>
            <SI n={1}><strong>eKYC status dekho:</strong> pmkisan.gov.in par jaakar dekho — &quot;YES&quot; hona chahiye. Nahi hai toh OTP se do minute mein ho jata hai, agar Aadhaar se mobile linked hai. Pura tarika, teeno methods ke sath, <Link href="/articles/PmKisanEkycOnline2026" className="text-[var(--color-primary)] underline">eKYC guide</Link> mein likha hai.</SI>
            <SI n={2}><strong>Bank ki Aadhaar seeding dekho:</strong> Payment NPCI ke through Aadhaar-linked account mein hi aata hai. Bank badla hai ya account band hua toh naye wale mein yeh linking karwana jaruri hai — branch jaakar ek form bharna padta hai.</SI>
            <SI n={3}><strong>Zameen ka record dekho:</strong> Kharidi ya bechi hai toh patwari se Khatauni update karwa lo. Land record aur portal ka data match nahi hua toh payment ruk jata hai.</SI>
            <SI n={4}><strong>Aadhaar wala mobile number chalu rakho:</strong> SIM band ho gayi toh OTP nahi aayega, aur OTP ke bina na eKYC hogi na koi correction. Number badla hai toh Aadhaar centre jaakar update karwa lo — yeh kaam online nahi hota.</SI>
            <SI n={5}><strong>Naam ki spelling milao:</strong> Aadhaar mein &quot;Mohd&quot; aur bank mein &quot;Mohammad&quot; — bas itna sa farak bhi payment fail karwa deta hai. Correction form se theek ho jata hai, lekin time lagta hai isliye abhi kar lo.</SI>
          </StepList>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Aur haan — agar pichla koi payment ruka hua hai toh <Link href="/articles/PmKisanBeneficiaryList2026" className="text-[var(--color-primary)] underline">beneficiary list</Link> mein apna naam jarur dekho. List mein naam hi nahi hai toh 25vi kya, kuch bhi nahi aayega. Pehle woh problem solve karo.
          </p>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-25vi-kist-2027/ekyc-checklist.webp"
            alt="PM Kisan eKYC aur bank seeding checklist — kist se pehle yeh sab check karna zaroori hai"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Yeh checklist pehle nipta lo — inme se ek bhi cheez pending hai toh paisa atak sakta hai
          </p>
        </div>

        <section className="mb-8">
          <SH>Status dekhne ka sahi tarika</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Jab release ki khabar aane lage, tab aise dekho — koi app download karne ki jarurat nahi, koi paisa dene ki jarurat nahi:
          </p>

          <StepList>
            <SI n={1}>pmkisan.gov.in kholo aur &quot;Know Your Status&quot; par jao.</SI>
            <SI n={2}>Apna registration number daalo. Yaad nahi? &quot;Know your registration no.&quot; option se mobile ya Aadhaar number se nikal jayega.</SI>
            <SI n={3}>OTP verify karo — saamne sab aa jayega. Wahan eKYC, land seeding aur bank seeding teeno dikhte hain.</SI>
          </StepList>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4 mb-3">
            Ek practical salah — roz roz dekhne se kuch jaldi nahi aata. Jab news mein baat chalne lage, tab hafte mein ek baar dekh lena kafi hai. Pura step-by-step process screenshots ke sath <Link href="/articles/PmKisanMasterGuide2026" className="text-[var(--color-primary)] underline">master guide</Link> mein hai.
          </p>

          <DB>
            <strong>Dhoke se bacho:</strong> Status dekhne ke liye koi bhi website ya app fees maange toh samajh jao fraud hai. Sarkari portal bilkul free hai. Aur koi &quot;agent&quot; bole ki paise dekar jaldi aa jayega — aisa kuch nahi hota, seedha mana kar do.
          </DB>
        </section>

        <section className="mb-8">
          <SH>Naye kisano ke liye — registration kab aur kaise?</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Agar aap abhi tak scheme mein registered nahi ho, toh sabse pehli baat — iski koi last date nahi hoti. Portal saal bhar khula rehta hai, jab chaho apply kar sakte ho.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Lekin ek cheez samajh lo — apply karne aur pehla credit aane ke beech lamba process hai. Documents verify honge, zameen ka record match hoga, eKYC hogi, bank linking hogi. Is sab mein hafto ka time lagta hai, kabhi kabhi jyada bhi. Aaj form bhara aur agle mahine account mein aa gaya — aisa nahi chalta.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Isliye simple funda: jitni jaldi karoge, utni jaldi naam judega. Der karne ka bas yeh nuksan hai ki ek-do cycle nikal jayengi. Apply karne ke liye Aadhaar, bank passbook, khatauni aur mobile number chahiye — CSC centre se ya khud portal se ho jata hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Aage jaakar rules badal rahe hain kya?</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ek badlav sach mein ho raha hai — <strong>Farmer ID</strong>, jise AgriStack bhi kehte hain. Kai states mein naye registration ke liye yeh ID jaruri kar di gayi hai, aur dheere dheere baki jagah bhi ho sakti hai. Yeh ek digital ID hai jo aapki zameen aur fasal ke record se judi hoti hai.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Toh agar aapke state mein yeh ban rahi hai aur aapne abhi tak nahi banwayi — banwa lo. CSC centre ya krishi vibhag ke camp mein ban jati hai, free hai. Aage jaakar kaam aayegi, sirf is scheme mein nahi, dusri jagah bhi.
          </p>

          <DB>
            <strong>Hoshiyar raho:</strong> Iske alawa jo bhi suna hai — amount badhna, eligibility badalna, naye documents lagna — inka koi official confirmation nahi. Jab tak pmkisan.gov.in ya PIB se na aaye, aisi khabro par bharosa mat karo, aur na hi WhatsApp par aage bhejo.
          </DB>
        </section>

        <section className="mb-8">
          <SH>Fake news se kaise bachein — 30 second ka rule</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            &quot;Date confirm!&quot; wali thumbnail dekh kar click karne ka mann karta hai, pata hai. Lekin yeh channels views ke liye kuch bhi likh dete hain — aaj &quot;confirm&quot;, kal &quot;bada update&quot;, parso &quot;khushkhabri&quot;. Inka business hi yahi hai.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Isliye ek simple rule bana lo. Koi bhi aisi khabar mile — chahe YouTube se, WhatsApp se, kisi website se — toh 30 second nikaal kar do jagah dekho: <strong>pmkisan.gov.in</strong> aur <strong>PIB ki press release</strong>. In dono mein se kahin nahi hai, matlab khabar jhooti hai. Itna simple.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Hum bhi yahi rule follow karte hain. Isliye is article mein aapko &quot;confirm date&quot; nahi milegi — kyuki woh abhi kahin exist nahi karti. Jis din karegi, us din yeh page update ho jayega.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            25vi Kist Ke Common Doubts, Ek Jagah
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kisan 25vi Kist 2027 — FAQ" />
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-25vi-kist-2027/payment-credited-notification.webp"
            alt="Kist credit hone par bank se aisa SMS aata hai"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Paisa aane par bank ka SMS — yeh aaya matlab kaam ho gaya
          </p>
        </div>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Sahi Hisaab — Ek Nazar Mein</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            23vi aa chuki, 24vi ka intezaar hai — matlab 25vi tak kam se kam do release cycles baki hain. Pichle gaps ke hisab se agle saal ki shuruat se pehle umeed rakhna bekar hai, aur exact din ka toh sawal hi nahi kyuki woh abhi kisi ke paas nahi.
          </p>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
            Jo aapke haath mein hai — eKYC, NPCI seeding, land record, naam ki spelling — wahi ₹2,000 atakne se bachayega. Guesswork se jyada kaam ka yehi hai. Koi dikkat ho toh helpline <strong>155261</strong> par seedha baat karo, WhatsApp forward par nahi.
          </p>
        </div>

        <GovLink
          href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
          label="Apna Status Yahan Check Karo"
          guide="Status Check Complete Guide"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmkisan.gov.in"
        />

        <CalcBanner
          title="Ab Tak Ka Total Nikaalo"
          desc="21vi se ab tak kitna mila, kitna baki — sab calculate karo"
          primaryCta={{ href: '/calculator/installment-tracker', label: 'Tracker Kholo →' }}
          secondaryCta={{ href: '/calculator/pm-kisan-benefit', label: 'Benefit Calculator' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} bioKey="PmKisan25viKist2027" />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisan24viKist2026', l: '24vi Kist Status' },
          { href: '/articles/PmKisanMasterGuide2026', l: 'Master Guide' },
          { href: '/articles/PmKisanEkycOnline2026', l: 'eKYC Guide' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
