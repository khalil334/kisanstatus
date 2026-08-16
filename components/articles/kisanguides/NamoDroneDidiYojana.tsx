import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const RELATED = [
  { slug: 'custom-hiring-centre-chc-portal', title: 'CHC Portal — Machine Kiraye Par' },
  { slug: 'drip-sprinkler-irrigation-subsidy', title: 'Drip & Sprinkler Subsidy' },
  { slug: 'NanoDap500mlPriceInIndia2026', title: 'Nano DAP 500ml Price — IFFCO Rate' },
];

const FAQS_DATA = [
  {
    q: 'Namo Drone Didi mein kitni subsidy milti hai?',
    a: 'Selected mahila SHG ko drone package ki cost ka 80% — maximum ₹8 lakh tak — Central Financial Assistance ke roop mein milta hai. Package mein sirf drone nahi, uske saath spray tank, extra battery set, charging ka saman aur zaroori accessories bhi aate hain. Baaki 20% ke liye SHG apne fund ya Agriculture Infrastructure Fund (AIF) se loan le sakti hai jisme 3% interest subvention hai.',
  },
  {
    q: 'Kya koi bhi mahila iske liye online form bhar sakti hai?',
    a: 'Nahi — aur yahi baat zyada tar websites galat batati hain. Isme individual online application ka koi form nahi hai. Selection DAY-NRLM ke under registered women SHG clusters mein se hota hai, jo State Rural Livelihood Mission, agriculture department aur Lead Fertilizer Companies milkar karte hain. Aapka pehla kadam hai apne block ke NRLM/JEEViKA-type mission office ya CSC se apne SHG ke through baat karna.',
  },
  {
    q: 'Drone udane ki training kaun deta hai aur kitne din ki hoti hai?',
    a: 'Kul 15 din ka programme hai — 5 din DGCA-approved Remote Pilot Training Organisation mein pilot training (jisme Remote Pilot Certificate milta hai) aur 10 din agriculture application ki training, jaise nutrient spray, pesticide ki sahi matra, flight planning. SHG ki ek aur member ya uske parivar ke kisi sadasya ko drone assistant/technician ke roop mein alag training milti hai.',
  },
  {
    q: 'Drone Didi ki kamai kitni ho sakti hai?',
    a: 'Sarkar ka target hai ki har participating SHG ko kam se kam ₹1 lakh saalana extra income ho. Zameen par kamai spray ke rate aur kaam ke din par depend karti hai — kai jagah ₹300-500 per acre ka service rate chal raha hai. Ek drone 7-8 minute mein ek acre cover kar leta hai, toh season mein din ke 20-25 acre tak ka kaam possible hai. Lekin yeh seasonal kaam hai — kharif-rabi ke spray windows mein hi demand peak hoti hai.',
  },
  {
    q: 'Kya iske liye zameen ya khud kisan hona zaroori hai?',
    a: 'Nahi. Yeh scheme service provider banane ki hai, kheti karne ki nahi. Aapke SHG ke paas zameen ho ya na ho, farq nahi padta — drone kiraye par doosre kisano ke kheton mein spray ke liye jayega. Haan, SHG aise cluster mein honi chahiye jahan aas-paas kheti ka rakba bada ho, warna kaam hi nahi milega.',
  },
  {
    q: 'Ab tak kitne drones baante gaye hain?',
    a: 'March 2026 mein Lok Sabha mein diye gaye jawab ke mutabik ab tak 1,094 drones distribute ho chuke hain. Trained pilots ke maamle mein Karnataka sabse aage hai. Target 14,500-15,000 SHGs ka hai, matlab abhi bahut jagah baaki hai — isliye apne block mein pata karna banta hai.',
  },
  {
    q: 'Remote Pilot Certificate ke liye kya padhai-likhai chahiye?',
    a: 'DGCA ke niyam ke mutabik remote pilot certificate ke liye 10th pass hona aur age 18 se upar (65 tak) honi chahiye. Training ke waqt medical fitness ka self-declaration bhi hota hai. Yaani graduate hona zaroori nahi — 10vi pass mahila bhi drone pilot ban sakti hai.',
  },
  {
    q: 'Drone kharab ho jaye toh kaun theek karega?',
    a: 'Isi liye package mein ek drone assistant ki training bhi hai — chhoti-moti repair aur maintenance wahi sambhalti hai. Bade issue ke liye drone company ki warranty aur service network kaam aata hai. Lead Fertilizer Companies bhi implementation mein saath hain, toh field support ka ek structure bana hua hai.',
  },
  {
    q: 'Kya yeh scheme sirf spray ke liye hai?',
    a: 'Filhaal main kaam nano urea, nano DAP aur pesticide ka spray hai — kyunki Department of Fertilizers aur fertilizer companies isme partner hain. Lekin trained pilot ke liye aage ke raste khulte hain: crop monitoring, survey ka kaam, private agri-companies ke contracts. Budget 2026-27 mein sarkar ne ise service provider se "enterprise owner" model ki taraf badhane ki baat bhi ki hai.',
  },
  {
    q: 'SHG mein nahi hoon, phir bhi drone pilot ban sakti hoon kya?',
    a: 'Is scheme ka paisa sirf DAY-NRLM wale women SHG ko milta hai, individual ko nahi. Do raste hain — apne gaon ke existing SHG se judna (ya naya SHG banwana, block mission office madad karta hai), ya phir apne kharche par DGCA-approved RPTO se training lekar private drone operator ke yahan kaam karna. Pehla rasta sasta aur subsidy wala hai, bas time lagta hai.',
  },
  {
    q: 'Kisan ko drone spray karwane ke liye kya taiyari karni chahiye?',
    a: 'Teen cheezein: pehla, khet ke upar ya bagal mein bijli ke taar aur ped ka dhyan rakho — operator ko pehle bata do, warna woh mauke pe mana kar dega. Doosra, dawai apni pasand ki le lo lekin dilution operator ke bataye tareeke se banega, zid mat karo. Teesra, spray ke din khet mein jaanwar aur bachhe na hon. Bas itna hi — baaki flight ka kaam operator ka hai.',
  },
  {
    q: 'Barish ke season mein drone spray ho sakta hai kya?',
    a: 'Halki boond mein bhi spray nahi hota — dawai dhul jati hai aur drone ke electronics ke liye bhi theek nahi. Tez hawa (lagbhag 10-12 km/ghanta se upar) mein bhi operator mana karega kyunki spray bagal ke khet mein udd jata hai, jise drift kehte hain. Isliye monsoon mein spray ki window chhoti hoti hai — operator se 2-3 din pehle baat karke mausam dekh kar slot rakho.',
  },
];

export default function NamoDroneDidiYojana({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Namo Drone Didi Yojana</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Namo Drone Didi Yojana 2026: SHG Se Selection, 15 Din Ki Training Aur ₹8 Lakh Tak Ki Madad — Zameeni Sach
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span><Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(article.publishedTime)}</span>
            <span>Last Updated: 16/08/2026</span>
            <span>15 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">
        <DB>
          <strong>Ek Nazar Mein — kaam ki baatein:</strong>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Mahila SHG ko drone package par <strong>80% madad, ₹8 lakh tak</strong> — baaki 20% ke liye AIF loan (3% interest subvention).</li>
            <li><strong>Koi online form nahi hai.</strong> Selection DAY-NRLM ke SHG network se hota hai — block mission office pehla stop hai.</li>
            <li>Training <strong>15 din</strong>: 5 din DGCA pilot training + 10 din kheti mein spray ka practical. 10th pass, 18+ age chahiye.</li>
            <li>Target income <strong>₹1 lakh+ saalana</strong> per SHG — spray service ₹300-500 per acre ke aas-paas chalti hai.</li>
            <li>March 2026 tak <strong>1,094 drones</strong> baant diye gaye; target 14,500-15,000 SHG ka hai — jagah abhi bhi hai.</li>
          </ul>
        </DB>

        <p className="text-sm text-[var(--color-text)] mb-6">
          <strong>Last Updated: 16/08/2026</strong>
        </p>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          Gaon ki mahila drone uda rahi hai aur kisan usko paisa de raha hai spray ke liye — do saal pehle yeh
          baat kisi ko sunao toh hansta. Aaj yeh ho raha hai, aur sarkari record mein ho raha hai. Is saal ke
          Republic Day parade mein isi programme ka tableau pehla inaam jeeta, aur Budget 2026-27 mein iske
          parent mission ka paisa 20% badha kar ₹17,280 crore kar diya gaya. Matlab saaf hai — yeh scheme kahin
          jaa nahi rahi, aur iska agla vistaar aa raha hai.
        </p>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          Lekin internet par iske baare mein aadhi-adhoori aur kai jagah sarasar galat jankari bhari padi hai —
          sabse badi galti yeh ki &ldquo;portal par form bharo aur drone le lo.&rdquo; Aisa koi form exist hi
          nahi karta. Humare paas bhi WhatsApp pe yahi sawaal baar-baar aata hai — didi form kahan bharein? Toh
          saaf jawab: form nahi, rasta alag hai. Is guide mein wohi asli rasta hai: selection kaise hota hai,
          training ka structure, paise ka poora lekha-jokha, kamai ka realistic andaza, aur woh baatein jo koi nahi
          batata.
        </p>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
          Aur haan — agar aap kisan ho aur sirf yeh jaanna chahte ho ki apne khet mein drone se spray kaise
          karwayein, kitna kharcha aayega — toh neeche uska bhi alag section hai. Yeh scheme dono taraf ke
          logon ke liye hai: jo service dena chahti hain, aur jo service lena chahte hain.
        </p>

        <Image
          src="/images/articles/namo-drone-didi-yojana-shg-selection/drone-didi-spray-hero.webp"
          alt="Namo Drone Didi Yojana 2026 - Agriculture drone khet mein spray karta hua, SHG mahila drone pilot service"
          width={800}
          height={450}
          priority
          sizes="(max-width: 768px) 100vw, 800px"
          className="rounded-xl shadow-md mb-8 w-full object-cover not-prose"
        />

        <SH>Yeh Scheme Hai Kya — Aasan Bhasha Mein</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Union Cabinet ne 28 November 2023 ko ise approve kiya aur PM ne 30 November 2023 ko launch kiya.
          Idea simple hai: Deendayal Antyodaya Yojana – National Rural Livelihoods Mission (DAY-NRLM) ke under
          jo lakhs mahila self-help groups pehle se registered hain, unme se chune hue groups ko agriculture
          drone ka poora package do — machine, training, support — aur woh apne ilaake ke kisano ko kiraye par
          spray service dein. Kisan ka fayda: haath se spray karne ke mukable tez, kam paani, kam dawai ki
          barbadi. Mahila ka fayda: ek naya, izzat wala aur technical rozgar.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Yeh Lakhpati Didi initiative ka hissa hai — wahi mission jiska maqsad 2 crore gramin mahilaon ki
          saalana ghar ki aamdani ₹1 lakh ke paar le jaana hai. Nodal ministry agriculture ki hai, lekin Rural
          Development, Fertilizers, Civil Aviation aur Women &amp; Child Development — paanch departments milkar
          ise chalate hain. Fertilizer companies (jinhe Lead Fertilizer Companies ya LFC kehte hain) zameen par
          implementation mein lagi hain kyunki nano urea aur nano DAP ka spray hi iska sabse bada use-case hai.
        </p>

        <Image
          src="/images/articles/namo-drone-didi-yojana-shg-selection/drone-package-cost.webp"
          alt="Agriculture sprayer drone package - Namo Drone Didi Yojana mein SHG ko milne wala kisan drone"
          width={800}
          height={450}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 800px"
          className="rounded-xl shadow-md mb-8 w-full object-cover not-prose"
        />

        <SH>Paise Ka Poora Hisaab — Table Mein</SH>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--color-bg-alt)]">
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Baat</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Kya Milta Hai</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Central madad</td>
                <td className="border border-[var(--color-border)] p-3">Package cost ka 80% — maximum ₹8 lakh</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">Package mein kya-kya</td>
                <td className="border border-[var(--color-border)] p-3">Drone, spray assembly, extra batteries, charging setup, accessories aur ek saal ka support</td>
              </tr>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Baaki 20%</td>
                <td className="border border-[var(--color-border)] p-3">SHG ka apna fund ya AIF se loan — 3% interest subvention ke saath</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">Training</td>
                <td className="border border-[var(--color-border)] p-3">15 din free — 5 din DGCA pilot course + 10 din agriculture spray practical</td>
              </tr>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Total outlay</td>
                <td className="border border-[var(--color-border)] p-3">₹1,261 crore (2023-24 se 2025-26), target 14,500-15,000 SHGs</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">Income target</td>
                <td className="border border-[var(--color-border)] p-3">Har SHG ko kam se kam ₹1 lakh saalana extra</td>
              </tr>
            </tbody>
          </table>
        </div>

        <DB>
          <strong>Yeh line yaad rakho:</strong> paisa SHG ko milta hai, individual mahila ko nahi. Drone SHG ki
          asset hoti hai. Pilot banne wali member ko usme se mehnatana milta hai — kai jagah ₹15,000 mahina
          fixed + incentive ka model chal raha hai. Agar koi agent bole ki &ldquo;₹8 lakh aapke khaate mein
          aayenge, bas itni fees do&rdquo; — woh fraud hai. Isme aavedan ki koi fees hai hi nahi.
        </DB>

        <Image
          src="/images/articles/namo-drone-didi-yojana-shg-selection/shg-mahila-group.webp"
          alt="Gramin mahila SHG members Krishi Mantri ke saath - Namo Drone Didi Yojana selection DAY-NRLM SHG network se hota hai"
          width={800}
          height={450}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 800px"
          className="rounded-xl shadow-md mb-8 w-full object-cover not-prose"
        />

        <SH>Selection Kaise Hota Hai — Asli Process</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Yahi woh hissa hai jahan sab confuse hote hain. Koi bhi sarkari portal aisa nahi hai jahan aap
          &ldquo;Drone Didi form&rdquo; bhar sako. Selection upar se neeche aata hai:
        </p>
        <StepList>
          <SI n={1}><strong>Cluster identify hote hain:</strong> state agriculture department aur LFC milkar aise ilaake chunte hain jahan drone spray ka kaam economically chal sakta hai — yaani zyada kheti wale blocks.</SI>
          <SI n={2}><strong>SHG shortlist hoti hai:</strong> un clusters mein DAY-NRLM ke under registered, achha track record wali women SHGs ki list State Rural Livelihood Mission banata hai. Bihar mein yeh JEEViKA ke through hota hai, har state mein uska apna mission hai.</SI>
          <SI n={3}><strong>Member ka chunav:</strong> selected SHG apne mein se ek member chunti hai pilot training ke liye — 18-65 age, 10th pass, aur kaam karne ka jazba. Ek aur member (ya uske parivar se koi) assistant/technician training ke liye.</SI>
          <SI n={4}><strong>Training + RPC:</strong> 15 din ka programme hota hai, jiske baad Remote Pilot Certificate milta hai — yeh DGCA ka official certificate hai, sirf is scheme ka kagaz nahi.</SI>
          <SI n={5}><strong>Drone handover:</strong> package SHG ko milta hai aur service ka kaam shuru — apne cluster ke kisano ke saath rate tay karke.</SI>
        </StepList>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Toh aapke haath mein kya hai? Yeh: agar aap SHG member ho, apne block ke NRLM/livelihood mission
          office mein jaakar bolo ki hamara group interested hai — list banti rehti hai aur naye phase mein
          naam aa sakta hai. SHG mein nahi ho toh pehle judna padega. Gaon ke Common Service Centre ya block
          agriculture office se bhi apne district ka status pata chal jata hai. Waise apne state ki baaki
          yojanaon ka poora byora is list mein hai —{' '}
          <Link href="/rajya-yojana/state-kisan-yojana-list-all-states-2026" className="underline font-bold">har state ki kisan yojana list</Link>.
        </p>

        <GovLink
          href="https://www.myscheme.gov.in/schemes/nddy"
          label="Namo Drone Didi — Official Scheme Details (myScheme)"
          guide="Details Dekho"
          portalName="myscheme.gov.in"
        />

        <Image
          src="/images/articles/namo-drone-didi-yojana-shg-selection/drone-spray-training-demo.webp"
          alt="Drone Didi training - agriculture drone se khet mein spray ka practical demo, 15 din ki DGCA training"
          width={800}
          height={450}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 800px"
          className="rounded-xl shadow-md mb-8 w-full object-cover not-prose"
        />

        <SH>Training Mein Hota Kya Hai — 15 Din Ka Breakdown</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Pehle 5 din DGCA-approved Remote Pilot Training Organisation (RPTO) mein katate hain — udaan ke
          niyam, safety, no-fly zones, simulator practice aur phir asli udaan. Pass hone par Remote Pilot
          Certificate milta hai jo poore desh mein valid hai. Agle 10 din kheti ka practical: kitni height se
          spray, kaunsi dawai ka kitna dilution, hawa ka rukh dekh kar flight plan, nano urea aur pesticide ke
          alag-alag protocols, aur battery management — jo field mein sabse zyada kaam aata hai.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Ek baat jo training se pehle sochni chahiye: drone chalana mushkil nahi hai, lekin dawai ki matra
          galat hui toh kisan ki fasal ko nuksan aur aapki reputation dono jayegi. Isliye 10 din wala
          agriculture hissa hi sabse bada imtihaan hai. Jo didiyan spray chemistry ko seriously leti hain, unka kaam
          repeat customers se hi chal padta hai.
        </p>

        <Image
          src="/images/articles/namo-drone-didi-yojana-shg-selection/drone-spray-paddy-field.webp"
          alt="Dhaan ke khet mein agriculture drone se spray - kisan ke liye drone spray service ka kharcha"
          width={800}
          height={450}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 800px"
          className="rounded-xl shadow-md mb-8 w-full object-cover not-prose"
        />

        <SH>Kisan Ke Liye: Drone Se Spray Karwana Sasta Padta Hai Ya Mehnga?</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Ab doosri taraf se dekho — aap kisan ho, aapke gaon mein Drone Didi aa gayi hai. Kya uski service
          leni chahiye? Chalo ganit lagate hain, ek acre dhaan ke spray ka:
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--color-bg-alt)]">
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Baat</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Haath Se / Knapsack Pump</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Drone Se</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Time (1 acre)</td>
                <td className="border border-[var(--color-border)] p-3">2-4 ghante (mazdoor par nirbhar)</td>
                <td className="border border-[var(--color-border)] p-3">7-8 minute</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">Kharcha (approx.)</td>
                <td className="border border-[var(--color-border)] p-3">₹300-500 mazdoori + apna time</td>
                <td className="border border-[var(--color-border)] p-3">₹300-500 service charge</td>
              </tr>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Paani</td>
                <td className="border border-[var(--color-border)] p-3">150-200 litre per acre</td>
                <td className="border border-[var(--color-border)] p-3">10-20 litre — 90% tak kam</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">Dawai ki barbadi</td>
                <td className="border border-[var(--color-border)] p-3">Zyada — asamaan chhidkav, patton ke neeche nahi pahunchta</td>
                <td className="border border-[var(--color-border)] p-3">30-40% tak kam dawai lagti hai, spray uniform</td>
              </tr>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Sehat ka risk</td>
                <td className="border border-[var(--color-border)] p-3">Spray karne wale ke upar dawai girti hai — andekha lekin sach-much ka kharcha</td>
                <td className="border border-[var(--color-border)] p-3">Aadmi khet se door khada rehta hai</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Yaani per-acre rate lagbhag barabar hai, lekin paani, dawai aur waqt teeno bachte hain — aur sabse
          badi cheez, pesticide se seedha contact khatam. Jo kisan lagatar spray khud karte hain, unke liye yeh
          sehat wali baat mazdoori se badi hai, bas koi ise ginta nahi.
        </p>
        <StepList>
          <SI n={1}><strong>Booking kaise karein:</strong> apne block ke agriculture office, KVK ya gaon ke CSC se pucho ki nazdeeki Drone Didi ya drone service provider kaun hai. Kai jagah fertilizer dealer (IFFCO/kisan seva kendra) bhi booking karwa dete hain kyunki nano urea spray unka hi kaam hai.</SI>
          <SI n={2}><strong>Rate pehle tay karo:</strong> per acre rate + aane-jaane ka kharcha alag hai ya nahi — yeh pehle poochh lo. Padosi kisano ke saath milkar 5-10 acre ka slot book karo toh rate aur girta hai, operator ka bhi time bachta hai.</SI>
          <SI n={3}><strong>Dawai ka dilution operator se milke tay karo:</strong> drone spray mein paani kam hota hai isliye concentration alag banta hai. Apni marzi se ghol banake mat do — label dose per acre wahi rehta hai, bas paani kam hota hai.</SI>
          <SI n={4}><strong>Mausam dekho:</strong> tez hawa ya dhoop ke peak time pe spray bekar jata hai. Subah ya shaam ka slot lo — achha operator khud yahi bolega, aur jo na bole usse savdhan raho.</SI>
        </StepList>

        <SH>Kamai Ka Ganit — Bina Hawa-Hawai Numbers Ke</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Service rate ilaake ke mutabik ₹300 se ₹500 per acre ke beech ghoomta hai. Drone ek acre 7-8 minute
          mein nipta deta hai, lekin din ka final output batteries, khet ke beech ki doori aur mausam par depend
          karta hai — practically 20-25 acre ek achha din hai. Ab ganit dekho: ₹400 average rate par 20 acre
          ka din matlab ₹8,000 gross. Isme se diesel/transport, battery charging, assistant ka hissa aur
          maintenance nikalo toh bhi season ke mahino mein theek-thaak kamai banti hai.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Lekin poora saal aisa nahi chalta — spray ki demand kharif aur rabi ke khaas windows mein hi hoti
          hai. Isliye samajhdar groups off-season ke liye bhi sochte hain: fertilizer companies ke demo
          contracts, survey ka kaam, ya aas-paas ke districts tak service badhana. Yeh bilkul waisa hi model
          hai jaise machine rental ka —{' '}
          <Link href="/articles/custom-hiring-centre-chc-portal" className="underline font-bold">CHC portal se tractor-machine kiraye par</Link>{' '}
          dene wala dhandha, bas yahan machine hawa mein udti hai.
        </p>

        <SH>Apne State Mein Kahan Puchein — Mission Ka Naam Har Jagah Alag Hai</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Yeh chhoti si baat bahut logon ko atka deti hai — block office mein jaake &ldquo;NRLM&rdquo; bolo toh
          kai baar samne wala bhi confuse ho jata hai, kyunki har state ne apne livelihood mission ka apna naam
          rakha hua hai. Kaam sabka wahi hai. Kuch bade states ke naam yeh rahe:
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--color-bg-alt)]">
                <th className="border border-[var(--color-border)] p-3 text-left font-black">State</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Mission Ka Local Naam</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Bihar</td>
                <td className="border border-[var(--color-border)] p-3">JEEViKA (Bihar Rural Livelihoods Promotion Society)</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">Uttar Pradesh</td>
                <td className="border border-[var(--color-border)] p-3">UPSRLM — Prerna canvas ke naam se SHG network</td>
              </tr>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Maharashtra</td>
                <td className="border border-[var(--color-border)] p-3">UMED (Maharashtra State Rural Livelihoods Mission)</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">Madhya Pradesh</td>
                <td className="border border-[var(--color-border)] p-3">MP DAY-SRLM (Aajeevika Mission)</td>
              </tr>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Rajasthan</td>
                <td className="border border-[var(--color-border)] p-3">Rajeevika (Rajasthan Grameen Aajeevika Vikas Parishad)</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">Jharkhand</td>
                <td className="border border-[var(--color-border)] p-3">JSLPS (Jharkhand State Livelihood Promotion Society)</td>
              </tr>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Odisha</td>
                <td className="border border-[var(--color-border)] p-3">Mission Shakti / OLM</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Block level par ise dhoondhna ho toh Block Programme Manager (BPM) ya Community Coordinator se milo —
          yeh log SHG network ko roz handle karte hain aur inhe pata hota hai ki drone wale phase mein aapke
          block ka number aaya hai ya nahi. Panchayat bhavan ya block office mein inka baithna aam hai.
        </p>

        <SH>Ab Tak Ka Report Card</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          March 2026 mein sarkar ne Lok Sabha mein bataya ki ab tak <strong>1,094 drones</strong> distribute ho
          chuke hain aur trained pilots mein Karnataka sabse aage hai. Target ke mukable yeh number abhi chhota
          hai — aur yahi aapke liye mauka hai. Jab scheme ka agla phase clusters badhayega, toh wohi SHGs aage
          rahengi jinhone pehle se apne block mission office mein interest dikhaya hoga. Budget 2026-27 ne
          DAY-NRLM ka allocation 20% badha kar iske vistaar ka ishara de bhi diya hai.
        </p>

        <WB>
          Scheme ke numbers — subsidy cap, target SHGs, training structure — operational guidelines ke updates
          ke saath badal sakte hain. Koi bhi bada faisla lene se pehle apne block ke NRLM office ya
          myscheme.gov.in par current details zaroor check karo. Aur ek baar phir: isme koi application fees
          nahi hai, koi agent nahi hai. Paisa maangne wala har aadmi fraud hai.
        </WB>

        <SH>Kis SHG Ke Liye Yeh Sahi Hai — Aur Kiske Liye Nahi</SH>
        <StepList>
          <SI n={1}><strong>Sahi hai agar:</strong> aapka group active hai, records saaf hain, ilaake mein kheti ka rakba achha hai, aur ek member aisi hai jo technical cheez seekhne mein sach mein interested hai — sirf naam ke liye nahi.</SI>
          <SI n={2}><strong>Sahi hai agar:</strong> group 20% wale hisse ka intezam soch sakta hai — chahe apne savings se, chahe AIF loan se. Yeh koi bahut bada amount nahi hota, lekin plan chahiye.</SI>
          <SI n={3}><strong>Mat socho agar:</strong> ilaake mein kheti kam hai ya pehle se 2-3 drone operators kaam kar rahe hain. Demand ke bina machine sirf dhool khayegi.</SI>
          <SI n={4}><strong>Mat socho agar:</strong> group ke andar jhagda hai ki drone kiske paas rahega. Yeh SHG ki asset hai — clear samjhauta pehle karo, machine baad mein lo.</SI>
        </StepList>

        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Aur agar aapka interest drone se zyada paani-sinchai ke kharche bachane mein hai, toh micro-irrigation
          wali subsidy bhi dekh lo —{' '}
          <Link href="/articles/drip-sprinkler-irrigation-subsidy" className="underline font-bold">drip aur sprinkler par 45-55% ki madad</Link>{' '}
          milti hai aur wahan individual kisan bhi apply kar sakta hai.
        </p>

        <FAQBlock faqs={FAQS_DATA} />

        <SH>Sources</SH>
        <ul className="text-sm text-[var(--color-text-muted)] space-y-2 mb-6 list-disc pl-5">
          <li>
            PIB — Union Cabinet approval aur operational guidelines, Namo Drone Didi (28-30 November 2023).{' '}
            <a href="https://pib.gov.in/PressReleaseIframePage.aspx?PRID=1980577" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">pib.gov.in</a>
          </li>
          <li>
            myScheme (Government of India) — Namo Drone Didi scheme page: eligibility, benefits, financing.{' '}
            <a href="https://www.myscheme.gov.in/schemes/nddy" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">myscheme.gov.in</a>
          </li>
          <li>
            DAY-NRLM — Ministry of Rural Development ka livelihood mission jiske SHG network se selection hota hai.{' '}
            <a href="https://nrlm.gov.in" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">nrlm.gov.in</a>
          </li>
          <li>
            DGCA — Digital Sky platform: remote pilot certificate aur drone rules ki official jankari.{' '}
            <a href="https://digitalsky.dgca.gov.in" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">digitalsky.dgca.gov.in</a>
          </li>
          <li>
            Photo credits — Wikimedia Commons: drone spray photos by Christopher Hedreyd / PIA 4A CALABARZON (public domain);{' '}
            <a href="https://commons.wikimedia.org/wiki/File:Agricultural_drone_spraying_on_paddy_field.jpg" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">paddy field spray</a>{' '}
            by Shreesha Sharma (CC BY-SA 4.0);{' '}
            <a href="https://commons.wikimedia.org/wiki/File:An_Agriculture_Sprayer_UAV_displayed_at_Amaravati_Drone_Summit_by_Aries_Agro_Ltd._(01).jpg" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">sprayer UAV</a>{' '}
            by iMahesh (CC BY-SA 4.0). Images resized aur watermarked.
          </li>
        </ul>

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={article.modifiedTime} bioKey="NamoDroneDidiYojana" />
        <BottomNav extraLinks={[
          { href: '/articles', l: 'Baaki Articles Dekhein' },
          { href: '/articles/category/agri-business', l: 'Agri Business Ke Sab Articles' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
