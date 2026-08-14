import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const PUBLISHED = '2026-02-09T08:58:39+05:30';
const MODIFIED = '2026-08-15T00:20:00+05:30';

const RELATED = [
  { slug: 'pm-kisan-fto-generated-ka-matlab-kya-hai', title: 'FTO Generated Ka Matlab' },
  { slug: 'pm-kisan-self-registered-status-check', title: 'Self-Registered Status Check' },
  { slug: 'PmKisanVillageWiseListPdfDownload', title: 'Gaon Ki List PDF Mein Dekhein' },
];

const FAQS_DATA = [
  {
    q: '25vi kist ki exact date kya hai?',
    a: 'Abhi kuch bhi official nahi hai — na sarkar ne bola, na kisi aur ko pata. Net pe jo February ya March ghum raha hai wo sab guesswork hai. Announcement hamesha release se thoda pehle hoti hai, mahino pehle kabhi nahi. Official khabar aate hi hum yahan update kar denge.',
  },
  {
    q: 'Kya is baar amount badhkar ₹2,500 ya ₹3,000 ho jayega?',
    a: 'Iska koi official confirmation nahi. 2019 se wahi amount mil raha hai aur har budget se pehle badhne ki afwah udti hai — aaj tak ek bar bhi sach nahi hui. Planning ₹2,000 ke hisab se karo. Agar sach me badha to ye page turant update hoga.',
  },
  {
    q: 'Payment na aaye toh kahan shikayat karein?',
    a: 'Helpline 155261 hai — toll free. Landline se 011-24300606 bhi try kar sakte ho. Phone se pehle apna registration ya Aadhaar number hath me rakhna, uske bina record dhundna mushkil ho jata hai. Subah 10 baje ke aas pass line kam busy rehti hai. Apne krishi vibhag ke office ya CSC centre pe bhi baat ho sakti hai.',
  },
  {
    q: '24vi nahi mili — kya 25vi milegi?',
    a: 'Milni chahiye, lekin pehle ye pata karo ki 24vi kyun ruki. Zyadatar mamlo me wajah eKYC pending, bank me Aadhaar seeding na hona ya land record verify na hona hoti hai. Ye thik kiye bina agli wali bhi wahin atkegi. Ruki hui raqam baad me alag se credit ho jati hai, agar aap eligible ho.',
  },
  {
    q: 'Naye registration ki koi last date hai kya?',
    a: 'Nahi, portal saal bhar khula rehta hai. Lekin verification me hafto ka time lagta hai — document check, land seeding, eKYC sab hone ke baad hi naam list me aata hai. Jitni jaldi karoge, utni jaldi benefit shuru hone ke chance banenge. Der karne ka bas itna nuksan hai ki ek-do cycle nikal sakti hai.',
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
          Google pe search karo to dus article milenge, aur dus alag jawab. Kisi ne February 2027 likha hai, kisi ne March. Ek-do ne to din tak bata diya. Source? Kisi ke pass nahi. Bas ek dusre se copy karte hain aur padhne wala confuse hota rehta hai.
        </p>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          Hum seedhi baat karenge. Sach ye hai ki 25vi wali abhi kisi ko nahi pata — na humein, na un YouTube channelo ko, na un websites ko. Sarkar mahino pehle kabhi kuch announce nahi karti. Zyadatar to release se ek-do hafte pehle hi khabar aati hai, aur kai bar to PM ke kisi event ke sath hi transfer ho jata hai.
        </p>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
          Aur ek zaruri baat — <Link href="/articles/PmKisan24viKist2026" className="text-[var(--color-primary)] underline font-medium">24vi kist</Link> khud abi tak nahi aayi. Jab usi ka intezaar chal raha hai, toh agli ki &quot;confirm tareekh&quot; batane wale khud soch lo kitne serious hain.
        </p>

        <WB>
          <strong>Pehle hi bata dein:</strong> Is article me jo pakka hai wo pakka likha hai, aur jo andaza hai wo andaza. Dono ko mix karke aapko bewkoof nahi banayenge. Yahi is page ka wada hai.
        </WB>

        <section className="mb-8 mt-8">
          <SH>Ab tak ka record — kya pakka hai, kya nahi</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Sabse imandaar tarika ye hai ki pichla record dekha jaye. 21vi, 22vi aur 23vi — tino aa chuki hain aur inki dates official record me hain. 24vi ka intzaar hai, jiska live update hum <Link href="/articles/PmKisan24viKist2026" className="text-[var(--color-primary)] underline">alag article</Link> mein rakhte hain.
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
            Table dhyan se dekho. November se March — char mahine. March se June — teen. Scheme ka official rule to yahi hai ki saal me 3 baar ₹2,000 milte hain, har char mahine me ek bar, total ₹6,000. Lekin zameen pe timing kabhi teen mahine me ho jati hai, kabhi paanch kha jati hai.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Isliye jo bhi confidently &quot;February pakka&quot; bol raha hai, wo bas pichla gap aage badha ke hisab laga raha hai. Hisab hum bhi laga sakte hain — agar 24vi October-November ke aas pass aati hai, to agli uske teen-char mahine baad banti hai, matlab agle saal ki shuruaat ke aas pass. Lekin ye hisab hai, guarantee nahi. Farq samajhna zaruri hai.
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
            Ye samajhna kaam ayega, kyunki isse pata chalta hai ki sab kuch pehle se fix kyun nahi hota. Amount sidha DBT (Direct Benefit Transfer) se aata hai — sarkar ke khate se sidha aapke bank account me. Lekin transfer se pehle ek lambi chain chalti hai.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Pehle states apne beneficiaries ka data verify karke bhejte hain. Fir Centre us data ko dekhta hai — kon eligible hai, kiska eKYC hua, kiska account Aadhaar se juda hai. Uske baad FTO yani Fund Transfer Order generate hota hai. FTO ka matlab — aapka payment approve ho gya, ab bas transfer hona baki hai. Iske bare mein detail se <Link href="/articles/pm-kisan-fto-generated-ka-matlab-kya-hai" className="text-[var(--color-primary)] underline">is article</Link> mein padh sakte ho.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Aur aakhri kadam — release event. Zyadatar ye raqam PM ke hathon kisi program me jari hoti hai. Event ki timing politics aur schedule pe depend karti hai, isliye payment ki timing bhi wahi tay karti hai. Yahi wajah hai ki koi bhi website mahino pehle exact din nahi bata sakti — kyunki wo din exist hi nahi karta abhi.
          </p>

          <IB>
            <strong>Ek line mein:</strong> Data verification + FTO + PM ka event = kab milega. In teeno mein se koi bhi cheez aage-peeche ho sakti hai, isliye timing bhi aage-peeche hoti hai.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Paisa badhega ya wahi ₹2,000 rahega?</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Scheme 2019 me shuru hui thi — tab se har bar wahi ₹2,000, saal ke ₹6,000. Saat saal ho gye, ek rupya nahi badha.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Har budget season me wahi purani afwah wapis aa jati hai — is bar ₹2,500 honge, nahi nahi ₹3,000, kisi ne to ₹4,000 tak bol diya tha. News channelo ko masala chahiye aur YouTube walo ko views. Lekin record utha ke dekho — ek bar bhi amount nahi badha.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Kya kabhi badh sakta hai? Haan bilkul — sarkar chahe to kal badha de. Lekin &quot;badh sakta hai&quot; aur &quot;badhne wala hai&quot; me zameen aasman ka farq hai. Jab tak Finance Ministry ya portal se official announcement na aye, tab tak ₹2,000 hi maan ke chalo.
          </p>

          <IB>
            <strong>Real baat:</strong> Apna budget isi amount ke hisab se banao. Agar badha toh woh bonus hoga — aur hum yahan sabse pehle update karenge.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Intezaar chhodo — yeh 5 kaam abhi karo</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ab asli kaam ki baat. Timing aap control nahi kar sakte, lekin ye zarur kar sakte ho ki jab release ho, aapka hissa atke nahi. Har bar lakho logo ka payment inhi wajaho se rukta hai — aur ye sari chize pehle se thik ho sakti hain:
          </p>

          <StepList>
            <SI n={1}><strong>eKYC status dekho:</strong> pmkisan.gov.in pe jake dekho — &quot;YES&quot; hona chahiye. Nahi hai to OTP se do minute me ho jata hai, agar Aadhaar se mobile linked hai. Pura tarika, tino methods ke sath, <Link href="/articles/PmKisanEkycOnline2026" className="text-[var(--color-primary)] underline">is guide</Link> mein likha hai.</SI>
            <SI n={2}><strong>Bank ki Aadhaar seeding dekho:</strong> Payment NPCI ke through Aadhaar-linked account me hi aata hai. Bank badla hai ya account band hua to naye wale me ye linking karwana zaruri hai — branch jake ek form bharna padta hai.</SI>
            <SI n={3}><strong>Zameen ka record dekho:</strong> Kharidi ya bechi hai to patwari se Khatauni update karwa lo. Land record aur portal ka data match nahi hua to payment ruk jata hai.</SI>
            <SI n={4}><strong>Aadhaar wala mobile number chalu rakho:</strong> SIM band ho gyi to OTP nahi ayega, aur OTP ke bina na eKYC hogi na koi correction. Number badla hai to Aadhaar centre jake update karwa lo — ye kaam online nahi hota.</SI>
            <SI n={5}><strong>Naam ki spelling milao:</strong> Aadhaar me &quot;Mohd&quot; aur bank me &quot;Mohammad&quot; — bas itna sa farq bhi payment fail karwa deta hai. Correction form se thik ho jata hai, lekin time lagta hai isliye abi kar lo.</SI>
          </StepList>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Aur haan — agar pichla koi payment ruka hua hai to <Link href="/articles/PmKisanBeneficiaryList2026" className="text-[var(--color-primary)] underline">beneficiary list</Link> me apna naam zarur dekho. List me naam hi nahi hai to 25vi kya, kuch bhi nahi ayega. Pehle wo problem solve karo.
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
          <SH>Apna record dekhne ka sahi tarika</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Jab release ki khabar aane lage, tab aise dekho — koi app download karne ki zarurat nahi, koi paisa dene ki zarurat nahi:
          </p>

          <StepList>
            <SI n={1}>pmkisan.gov.in kholo aur &quot;Know Your Status&quot; par jao.</SI>
            <SI n={2}>Apna registration number dalo. Yaad nahi? &quot;Know your registration no.&quot; option se mobile ya Aadhaar number se nikal jayega.</SI>
            <SI n={3}>OTP verify karo — samne sab aa jayega. Wahan verification, land seeding aur bank linking tino ka status dikhta hai.</SI>
          </StepList>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4 mb-3">
            Ek practical salah — roz roz dekhne se kuch jaldi nahi aata. Jab news me baat chalne lage, tab hafte me ek bar dekh lena kafi hai. Pura step-by-step process screenshots ke sath <Link href="/articles/PmKisanMasterGuide2026" className="text-[var(--color-primary)] underline">master guide</Link> mein hai.
          </p>

          <DB>
            <strong>Dhoke se bacho:</strong> Status dekhne ke liye koi bhi website ya app fees mange to samajh jao fraud hai. Sarkari portal bilkul free hai. Aur koi &quot;agent&quot; bole ki paise dekar jaldi aa jayega — aisa kuch nahi hota, sidha mana kar do.
          </DB>
        </section>

        <section className="mb-8">
          <SH>Helpline par call karne se pehle — 2 minute ki taiyari</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Bohot log 155261 pe call karte hain aur khali hath lautte hain — kyunki jo chiz agent puchta hai, wo hath me nahi hoti. Call se pehle ye teen chize samne rakh lo: apna <strong>registration number</strong> (ya Aadhaar number), apne <strong>gaon aur block ka naam</strong>, aur agar koi purana complaint number hai to wo bhi. Itna hone pe baat do minute me ho jati hai.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ek aur kaam ki chiz — portal pe jo message dikhta hai, usko note kar lo, kyunki har message ka apna matlab hai. &quot;FTO is Generated&quot; ka matlab payment approve ho chuka, bas transfer hona baki hai. &quot;Payment Stopped&quot; matlab kahin verification atka hai — zyada tar land record ya bank linking par. &quot;Rft Signed by State&quot; matlab aapka data state se Centre pahunch gaya hai. Agent ko exact message batane par woh seedha problem par pahunch jata hai.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Aur agar phone pe baat na bane, to apne block ke <strong>krishi vibhag office</strong> me jake likhit application do aur uski receiving le lo. Likhit shikayat ka record banta hai, aur follow-up me kaam aata hai. CSC centre wale bhi portal pe grievance daal sakte hain — ye option bhi free hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Naye kisano ke liye — registration kab aur kaise?</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Agar aap abi tak scheme me registered nahi ho, to sabse pehli baat — iski koi last date nahi hoti. Portal saal bhar khula rehta hai, jab chaho apply kar sakte ho.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Lekin ek chiz samajh lo — apply karne aur pehla credit aane ke beech lamba process hai. Documents verify honge, zameen ka record match hoga, eKYC hogi, bank linking hogi. Is sab me hafto ka time lagta hai, kabhi kabhi zyada bhi. Aaj form bhara aur agle mahine account me aa gya — aisa nahi chalta.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Isliye simple funda: jitni jaldi karoge, utni jaldi naam judega. Der karne ka bas ye nuksan hai ki ek-do cycle nikal jayengi. Apply karne ke liye Aadhaar, bank passbook, khatauni aur mobile number chahiye — CSC centre se ya khud portal se ho jata hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Aage jaakar rules badal rahe hain kya?</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ek badlav sach me ho raha hai — <strong>Farmer ID</strong>, jise AgriStack bhi kehte hain. Kai states me naye registration ke liye ye ID zaruri kar di gyi hai, aur dhire dhire baki jagah bhi ho sakti hai. Ye ek digital ID hai jo aapki zameen aur fasal ke record se judi hoti hai.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            To agar aapke state me ye ban rahi hai aur aapne abi tak nahi banwai — banwa lo. CSC centre ya krishi vibhag ke camp me ban jati hai, free hai. Aage jake kaam ayegi, sirf is scheme me nahi, dusri jagah bhi.
          </p>

          <DB>
            <strong>Hoshiyar raho:</strong> Iske alawa jo bhi suna hai — amount badhna, eligibility badalna, naye documents lagna — inka koi official confirmation nahi. Jab tak pmkisan.gov.in ya PIB se na aye, aisi khabro pe bharosa mat karo, aur na hi WhatsApp pe aage bhejo.
          </DB>
        </section>

        <section className="mb-8">
          <SH>Fake news se kaise bachein — 30 second ka rule</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            &quot;Date confirm!&quot; wali thumbnail dekh ke click karne ka mann karta hai, pata hai. Lekin ye channels views ke liye kuch bhi likh dete hain — aaj &quot;confirm&quot;, kal &quot;bada update&quot;, parso &quot;khushkhabri&quot;. Inka business hi yahi hai.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Isliye ek simple rule bana lo. Koi bhi aisi khabar mile — chahe YouTube se, WhatsApp se, kisi website se — to 30 second nikal ke do jagah dekho: <strong>pmkisan.gov.in</strong> aur <strong>PIB ki press release</strong>. In dono me se kahin nahi hai, matlab khabar jhuti hai. Itna simple.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Hum bhi yahi rule follow karte hain. Isliye is article me aapko &quot;confirm date&quot; nahi milegi — kyunki wo abi kahin exist nahi karti. Jis din karegi, us din ye page update ho jayega.
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
            23vi aa chuki, 24vi ka intzaar hai — matlab 25vi tak kam se kam do release cycles baki hain. Pichle gaps ke hisab se agle saal ki shuruaat se pehle umeed rakhna bekar hai, aur exact din ka to sawal hi nahi kyunki wo abi kisi ke pass nahi.
          </p>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
            Jo aapke hath me hai — eKYC, NPCI seeding, land record, naam ki spelling — wahi ₹2,000 atakne se bachayega. Guesswork se zyada kaam ka yahi hai. Koi dikkat ho to helpline <strong>155261</strong> pe sidha baat karo, WhatsApp forward pe nahi.
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
