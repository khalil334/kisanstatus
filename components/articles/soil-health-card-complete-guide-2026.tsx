import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, SH, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import OfficialLinkButton from '@/components/OfficialLinkButton';
import type { ArticleMeta } from '@/lib/articles-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const PUBLISHED = '2026-06-27T01:43:26+05:30';
const MODIFIED = '2026-08-13T12:33:27+05:30';

const RELATED = [
  { slug: 'NanoDap500mlPriceInIndia2026', title: 'Nano DAP Price & Rate' },
  { slug: 'drip-sprinkler-irrigation-subsidy', title: 'Drip & Sprinkler Subsidy' },
  { slug: 'vermi-compost-business-guide', title: 'Vermi Compost Business' },
];

const FAQS_DATA = [
  {
    q: 'Card kitni bhasha mein milta hai? Hindi mein samajh aayega?',
    a: 'Haan. Soil Health Card ab 22 bhashaon aur 5 boliyon (dialects) mein milta hai. Hindi samet. Portal se download karte waqt apni bhasha chun sakte ho. Report ka format bhi ab pehle se saral hai, har nutrient ke aage Low/Medium/High aur sifarish likhi hoti hai.',
  },
  {
    q: 'Scheme abhi chal bhi rahi hai ya band ho gayi?',
    a: 'Poori tarah chal rahi hai. 2022-23 se yeh scheme Rashtriya Krishi Vikas Yojana (RKVY) ke "Soil Health & Fertility" component ke andar aa gayi hai. Naam ka technical badlav hai, kisan ke liye process wahi hai aur test ab bhi free hai. July 2026 tak desh mein 25.89 crore se zyada cards issue ho chuke hain. June 2026 mein sarkar ne "Khet Bachao Abhiyan" bhi chalaya tha jisme soil testing par hi zor tha.',
  },
  {
    q: 'Soil health card bilkul free hai ya kharcha aata hai?',
    a: 'Bilkul free hai bhai. Government poora test aur card banate hain. Sirf travel kharcha ho sakta hai agar aap lekar aaye to lab mein.',
  },
  {
    q: 'Soil test result mein kya likha hota hai. Samajh nahi aata?',
    a: 'Card mein 3 cheezon ka score hota. PH level (acidic/alkaline), organic matter, aur nutrients. Zyada tar cards mein simple likha hota "aapki zameen acha hai" ya "nitrogen kam hai". Detailed explanation neeche di hai.',
  },
  {
    q: 'Test result ke base par fertilizer konsa lagau?',
    a: 'Exact recommendations report mein likhe hote hain. Agar nitrogen kam likha ho to DAP/urea, phosphorus kam ho to SSP. Lekin ek baar sahi samajhne ke liye agriculture officer se mill lo. Wo free advice dete hain.',
  },
  {
    q: 'Ek baar test karab to kitne saal mein dobara test karwana padta hai?',
    a: 'Har 2-3 saal mein ek baar test karwana acha hota hai. Lekin agar aap new chemicals use kar rahe ho ya soil quality gir gayi likhe to dobara kar sakte ho.',
  },
  {
    q: 'Sample dene ke baad soil card kab tak mil jata hai?',
    a: 'Lab analysis mein 1-2 hafte lagta hai. Card print karte ho to 3-4 hafte total. Zyada tar states mein 1 mahina standard time limit hai.',
  },
  {
    q: 'Kya soil health card se PM Kisan mein koi benefit ata hai directly?',
    a: 'Direct benefit nahi hai, lekin agar aapka eKYC pending hai aur soil issues hain to ye proof de sakte ho. Plus, better crop yield = zyada income, jo indirectly sab kuch improve karta hai.',
  },
  {
    q: 'Sample galat le liya to report par kya asar padta hai?',
    a: 'Poori report bekaar ho jaati hai. Aur pata bhi nahi chalta. Sample khet ke 8-10 alag jagahon se lekar mila kar banta hai, isliye ek hi kone se ya khaad ke dher ke paas se uthai mitti aapke khet ka aausat nahi dikhati. Lab wahi test karegi jo aapne diya. Sample dete waqt khud maujood raho aur khet ka survey number label par likhwao.',
  },
  {
    q: 'Koi bhai paisa maang raha hai soil test ke liye, sahi hai?',
    a: 'Nahi. Government scheme me test aur card dono free hain, kharcha sirf aane-jaane ka hai. Private lab apni fees le sakti hai, par usko “sarkari card” bata kar paisa maangna galat hai. Aisi koi website jo soil card ke naam par registration fees ya OTP maange — usse door raho; official rasta soilhealth.dac.gov.in aur aapka block agriculture office hai.',
  },
  {
    q: 'Agronomy ki knowledge hi nahi hai. Soil report samjhu kaise?',
    a: 'Agriculture office ke officer ya CSC waale bhai ko dikha do. Wo 10 minute mein simplify kar dengi. Ya locally ke kisan groups mein poocho, mostly log same test karate hain aur same confusion hota hai.',
  },
];

export default function SoilHealthCardCompleteGuide2026({ article }: { article: ArticleMeta }) {

  return (
    <>

      <div className="bg-amber-700 py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-amber-100 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Soil Health Card</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Soil Testing Guide 2026</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Soil Health Card 2026: Mitti Test Free Kaise Karwayein, State Wise Online Apply
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-amber-100">
            <span><Link href="/about" className="underline hover:text-white">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(PUBLISHED)}</span>
            <span>Updated: {fmtDate(MODIFIED)}</span>
            <span>15 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className="my-6 rounded-2xl overflow-hidden border border-gray-300 shadow-md">
          <Image
            src={article.ogImage || '/images/articles/soil-health-card-complete-guide-2026/hero.webp'}
            alt="Soil health card test, state wise free soil testing guide 2026"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <div className="my-6 p-5 bg-amber-50 border-2 border-amber-400 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-amber-900 mb-2">Jaldi Padho</h2>
          <p className="text-sm text-amber-950 leading-relaxed mb-2">
            Soil health card ek government report hota jo batata hai. Aapki zameen mein nutrients kaun se hain, kaun se kam hain. Test ka ek rupaya nahi lagta. Har state ka apna process hai, lekin sabme ek jaise steps follow hote hain. Report ke base par sahi fertilizer lagao to khaad ka kharcha ghat-ta hai aur paidawar badhti hai. Sarkari studies mein fertilizer use 8-10% tak kam aur yield 5-6% tak zyada dekhi gayi hai.
          </p>
          <p className="text-sm text-amber-950 leading-relaxed">
            Ye guide mein har state ka seedha tareeka likha hai. Link, offline process, sab kuch.
          </p>
        </div>

        <section className="mb-8">
          <SH>Soil Health Card Kya Hota Hai? (Mitti Test Ka Matlab)</SH>

          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Bhai suno, <strong>ye card kya hota hai</strong> ye samajhna zaroori hai. Ek simple report card hota jo batata hai aapki zameen kaunsa rich ya poor hai. Jaise school report mein grades hote hain. English A, Math B — usi tarah yahan pH score hota, nitrogen level, phosphorus, potassium.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Government har kisan ko ye card banate hain taaki wo sahi khad daal sake. Zyada tar farmers jo khad dalte hain wo andaze se daaltey hain. Kabhi excess, kabhi kam. <strong>Mitti test kaise kare</strong> ye seekh lo to exact malum chale ki kitna kya chahiye.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed">
            Best part, is poore process ka koi charge nahi. Kharcha bas travel ka aata hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Soil Health Card Kaise Banwate Hain. General Process</SH>

          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            <strong>Soil test free kaise karaye</strong> ye bahut log puchte hain. Process simple hai:
          </p>

          <StepList>
            <SI n={1}>Apne block ke agriculture office jaao (ya agriculture college)</SI>
            <SI n={2}>Ek form fill karo, zameen ka size, location, kaunsi fasal lagati ho</SI>
            <SI n={3}>Soil sample collect hota hai. Zameen se 8-10 jagah se thoda thoda mitti nikaal te hain</SI>
            <SI n={4}>Lab mein test hota hai. 1-2 hafte lagta hai</SI>
            <SI n={5}>Card print ho jaata hai. Recommendations ke saath</SI>
          </StepList>

          <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 rounded-xl">
            <p className="text-sm font-bold text-green-800 dark:text-green-300 mb-2">
               Abhi Mitti Test Ke Liye Apply Karo
            </p>
            <p className="text-xs text-green-700 dark:text-green-400 mb-3">
              Official portal par jakar <strong>online apply</strong> karo — 10 second ruko, portal khud khulega.
            </p>
            <OfficialLinkButton
              title="Soil Health Card Portal"
              message="Official portal khulne wala hai. Thoda wait karo..."
              url="https://soilhealth.dac.gov.in/"
              infoNote="Thoda wait karo. Official portal khulne wala hai."
              className="w-full px-4 py-3 bg-green-600 hover:bg-green-700 text-white text-sm font-bold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-105"
            >
               Yahan Click Karo → Official Portal Khulega
            </OfficialLinkButton>
          </div>
        </section>

        <section className="mb-8">
          <SH>Har State Mein Kaise Apply Karte Hain. State Wise Guide</SH>

          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Har state ka apna process hai. Maine niche kuch important states ka detail likha hai:
          </p>

          <div className="mb-8">
            <div className="bg-blue-50 rounded-xl p-5 border-2 border-blue-300 mb-4">
              <h3 className="font-black text-blue-900 text-lg mb-3">Maharashtra</h3>
              <p className="text-sm text-gray-700 mb-3">
                Maharashtra mein Jain Irrigation aur local krishi vibhag handle karte hain. Farmers directly agriculture office mein application de sakte hain ya CSC center se bhi kar sakte ho.
              </p>
              <p className="text-sm font-bold text-blue-900 mb-2">Contact:</p>
              <p className="text-sm text-gray-700 mb-3">
                District agriculture office ya official portal: <strong>maitreekrushak.gov.in</strong>
              </p>
              <p className="text-xs text-gray-600 italic">
                Typical time: 4-6 hafte. Test ke time farmer ko bulaya jaata hai taaki woh khud sample dekh sake.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-5 border-2 border-green-300 mb-4">
              <h3 className="font-black text-green-900 text-lg mb-3">Uttar Pradesh</h3>
              <p className="text-sm text-gray-700 mb-3">
                UP mein State Agriculture Department sab sambhalta hai. Har district mein separate soil testing lab hote hain. Online registration available hai.
              </p>
              <p className="text-sm font-bold text-green-900 mb-2">Contact:</p>
              <p className="text-sm text-gray-700 mb-3">
                Official portal: <strong>upagriculture.com</strong>, mitti test section mein seedha registration
              </p>
              <p className="text-xs text-gray-600 italic">
                Offline: Local block agriculture office mein jaao. Form free milega. Processing time 3-4 hafte.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-5 border-2 border-purple-300 mb-4">
              <h3 className="font-black text-purple-900 text-lg mb-3">Rajasthan</h3>
              <p className="text-sm text-gray-700 mb-3">
                Rajasthan mein khad ki shortage hoti thi, isliye is scheme ko bahut serious lia gaya. Lab testing bilkul free + reliable hai.
              </p>
              <p className="text-sm font-bold text-purple-900 mb-2">Contact:</p>
              <p className="text-sm text-gray-700 mb-3">
                Agriculture Department office ya <strong>agriculture.rajasthan.gov.in</strong>
              </p>
              <p className="text-xs text-gray-600 italic">
                Aajkal mobile lab bhi aati hain villages mein, news dekho ya agriculture office se pooch lo.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-xl p-5 border-2 border-yellow-400 mb-4">
              <h3 className="font-black text-yellow-900 text-lg mb-3">Punjab</h3>
              <p className="text-sm text-gray-700 mb-3">
                Punjab mein soil problem jada hai kyunki zyada chemical use hota hai. State ne mass scale par soil testing shuru ki hui. Government colleges bhi test karte hain.
              </p>
              <p className="text-sm font-bold text-yellow-900 mb-2">Contact:</p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>punjabkrishivikas.gov.in</strong> ya nearest Block Development Office
              </p>
              <p className="text-xs text-gray-600 italic">
                Kharif/Rabi season se pehle time badh jaata hai. Jaldi apply kar do.
              </p>
            </div>

            <div className="bg-red-50 rounded-xl p-5 border-2 border-red-300 mb-4">
              <h3 className="font-black text-red-900 text-lg mb-3">Karnataka</h3>
              <p className="text-sm text-gray-700 mb-3">
                South India mein Karnataka ka program achha chal raha hai. Coffee aur sugarcane walon ko priority milti hai, lekin general farmers ko bhi service milti hai.
              </p>
              <p className="text-sm font-bold text-red-900 mb-2">Contact:</p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>ahlds.karnataka.gov.in</strong>. Online status tracking available
              </p>
              <p className="text-xs text-gray-600 italic">
                English aur Kannada dono mein portal available hai.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>Soil Test Report Padna Aur Samajhna</SH>

          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Report mein likha hota "Your soil pH is 6.8, Nitrogen 180 kg/hectare, Phosphorus 25." Ye sab numbers confuse karte hain. Par actually simple hai.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Card ke peeche recommendations likhi hoti. "Use 100kg DAP aur 50kg Urea per hectare." Seedha follow kar do. Zyada socha-sochi ki zaroorat nahi.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed">
            Agar recommendation samajh nahi aaye to agriculture officer ko call kar do. Wo 5 minute mein samjha dega. Government officers ko ye kaam karna padta hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Sample Hi Galat Chala Gaya To Report Bhi Galat Aayegi</SH>

          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Ye wo hissa hai jise sab jaldi me nipta dete hain. Aur yahi poore test ka sabse zaroori hissa hai.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Sample khet ke <strong>8-10 alag-alag jagahon</strong> se thoda-thoda mitti lekar, sab mila kar banta hai. Wajah
            seedhi hai — ek hi kone ki mitti aapke poore khet ka aausat nahi hoti. Dhaal wali jagah, paani rukne wali jagah,
            aur oonchi jagah, teeno ka nutrient level alag hota hai. Ek hi jagah se uthai mitti par bani report aapko poore khet
            ke liye galat sifarish de degi, aur ye galti report me kahin dikhegi bhi nahi.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Do jagahon se sample bilkul nahi. Khaad ya gobar ke dher ke aas-paas se, aur us hisse se jahan abhi kuch din pehle
            khaad daali gayi ho. Wahan ki reading poore khet se kaafi upar aayegi, aur report kah degi ki nutrient theek hai
            jabki asal me kami hai. Isi tarah med (khet ki boundary), raste ke kinare aur ped ke neeche ki mitti bhi chhod do.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Sample dene ka sahi waqt bhi hai. <strong>fasal katne ke baad aur agli khaad daalne se pehle</strong>. Beech season
            me, khaad daal kar sample dene ka matlab hai ki aap apni daali hui khaad ko naap rahe ho, apni mitti ko nahi.
          </p>

          <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-xl">
            <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
              Sample collection ke waqt khet par khud maujood raho, aur label par apni zameen ka <strong>survey/khasra number</strong>
              likhwao. Kai baar card aata hai par usme kisi doosre khet ka data hota hai. Phir dobara process shuru se chalti hai.
              Do minute ka kaam, mahine ki bachat.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <SH>Soil Health Card Status Check Kaise Karein?</SH>

          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Apply karne ke baad <strong>status check</strong> karna zaroori hai. Ye steps follow karo:
          </p>

          <StepList>
            <SI n={1}>Official portal par jao (state wise link upar diya hai)</SI>
            <SI n={2}>"Track Application" ya "Status Check" option dhundho</SI>
            <SI n={3}>Apna registration number ya Aadhaar number daalo</SI>
            <SI n={4}>Status dikhega, "Under Process", "Ready", ya "Dispatched"</SI>
            <SI n={5}>Ready ho gaya to download kar lo ya agriculture office se collect karo</SI>
          </StepList>

          <div className="my-5 rounded-xl overflow-hidden border border-[var(--color-border)]">
            <Image
              src="/images/articles/soil-health-card-complete-guide-2026/dashboard-2.webp"
              alt="Soil health card portal ka dashboard, application status yahan track hota hai"
              width={1200}
              height={630}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 dark:border-blue-700 rounded-xl">
            <p className="text-sm font-bold text-blue-800 dark:text-blue-300 mb-2">
               Status Check Karo
            </p>
            <p className="text-xs text-blue-700 dark:text-blue-400 mb-3">
              Official portal par jakar apna <strong>status</strong> dekho (redirect timer 10 second ka hai).
            </p>
            <OfficialLinkButton
              title="Soil Health Status Check"
              message="Official portal khulne wala hai. Thoda wait karo..."
              url="https://soilhealth.dac.gov.in/"
              infoNote="Thoda wait karo. Official portal khulne wala hai."
              className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-105"
            >
               Yahan Click Karo → Status Check Hoga
            </OfficialLinkButton>
          </div>
        </section>

        <section className="mb-8">
          <SH>2026 Mein Scheme Ka Haal. Kya Naya Hai</SH>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Yeh scheme 2015 se chal rahi hai aur abhi bhi puri raftaar mein hai. 2026 ke verified aankde
            aur badlav yeh hain:
          </p>
          <div className="space-y-3 mb-6">
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <p className="font-black text-sm mb-1 text-[var(--color-text)]">25.89 crore se zyada cards issue (July 2026 tak)</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Matlab yeh koi kagzi scheme nahi hai. Desh ke zyadatar kisano tak card pahunch chuka hai. Agar aapke paas nahi hai, toh aap piche reh gaye ho, scheme nahi.</p>
            </div>
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <p className="font-black text-sm mb-1 text-[var(--color-text)]">Ab 12 parameters test hote hain</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">N, P, K (macro) + Sulphur + Zinc, Iron, Copper, Manganese, Boron (micro) + pH, EC, Organic Carbon. Har parameter ke aage Low/Medium/High aur uski sifarish.</p>
            </div>
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <p className="font-black text-sm mb-1 text-[var(--color-text)]">Card har 2 saal mein naya banta hai</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Biennial cycle hai — matlab 2024 ka card ab purana ho raha hai. 2026 mein naya sample dene ka time aa gaya hai. Khaad ka hisaab purani report se mat chalao.</p>
            </div>
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <p className="font-black text-sm mb-1 text-[var(--color-text)]">June 2026: Khet Bachao Abhiyan</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Krishi mantri ne nationwide abhiyan chalaya, soil testing, santulit khaad aur natural farming par. KVK aur agriculture department ke through gaon-gaon training ho rahi hai; apne block ke KVK se free training ka pata karo.</p>
            </div>
          </div>

          <SH>Soil Health Card Ka Fayda. Actual Numbers</SH>

          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Soil test ke baad sahi khaad daalne se production par asar padta hai. Ye numbers dekhein:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 rounded-xl p-4 border border-green-300">
              <p className="font-black text-green-800 text-sm mb-2">Production Badha</p>
              <p className="text-xs text-gray-700">Sahi fertilizer se paidawar badhti hai. Sarkari study mein 5-6% tak yield gain</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-300">
              <p className="font-black text-blue-800 text-sm mb-2">Cost Kam Hota</p>
              <p className="text-xs text-gray-700">Waste fertilizer use nahi hota, cost 15-20% tak kam</p>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-300">
              <p className="font-black text-amber-800 text-sm mb-2">Soil Health</p>
              <p className="text-xs text-gray-700">Zameen ki quality improve hoti hai. Long term benefit</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 border border-purple-300">
              <p className="font-black text-purple-800 text-sm mb-2">Record</p>
              <p className="text-xs text-gray-700">Card future mein proof ke kaam aata hai. Loan application mein</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>Card Ki Sifarish Ka Paisa Kahan Bachta Hai. Ginti Karke Dekho</SH>

          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Report ke peeche likhi sifarish sirf salaah nahi hai, wo aapki khaad ki parchi hai. Rate jaante ho to bachat khud
            dikh jaati hai.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Subsidized rate par urea ki 45 kg bori lagbhag <strong>₹242</strong> (neem-coating aur tax alag) me milti hai, aur DAP
            ki 50 kg bori ka subsidized rate lagbhag <strong>₹1,350</strong> chal raha hai. Bina subsidy inki asli laagat kai guna
            hai. DAP ₹3,000 se upar. Yaani jo bori aap le rahe ho, uska bada hissa sarkar bhar rahi hai. Isiliye khaad andaze se
            daalne ka nuksan dohra hai: aapka paisa bhi jaata hai, aur us subsidy ka bhi.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Do cheezein har kharidari par pakki karo. Ek — <strong>POS machine se hi kharido</strong>, tabhi subsidized rate milta
            hai. Do, <strong>receipt lo</strong>. Dealer likhe rate se zyada maange to wo overcharging hai, aur uski shikayat zila
            krishi adhikari ke paas karni chahiye; receipt ke bina shikayat ka koi weight nahi banta.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Agar report me phosphorus kam nikla hai to ek aur option dekh sakte ho. IFFCO ki liquid/nano DAP, jiski 500ml bottle
            ₹250-350 ke beech milti hai aur ek acre ke liye kaafi hoti hai. Ye granular DAP ka <em>replacement nahi, saathi</em> hai;
            IFFCO khud combination hi recommend karti hai. Poora rate breakup, state-wise range aur spray ka tareeka{' '}
            <Link href="/articles/NanoDap500mlPriceInIndia2026" className="underline font-bold">Nano DAP price wali guide</Link> me hai.
          </p>

          <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-r-xl">
            <p className="text-sm text-red-900 dark:text-red-200 leading-relaxed mb-2">
              <strong>Khaad ke naam par fraud bahut chalta hai, isliye ye bhi samajh lo.</strong> Sarkar khaad ki subsidy kisan ke khaate
              me cash nahi bhejti. Wo fertilizer company ko jaati hai, aur aapko fayda sasti bori ke roop me milta hai. Isliye
              &ldquo;khad yojana ke ₹11,000 khaate me aayenge&rdquo; type ka koi message ya thumbnail dikhe to samajh jao ki wo
              registration ke naam par data ya paisa maangne wala jaal hai.
            </p>
            <p className="text-sm text-red-900 dark:text-red-200 leading-relaxed">
              Poora sach{' '}
              <Link href="/yojana/pm-kisan-khad-yojana-11000-sach" className="underline font-bold">khad yojana ₹11,000 wale page</Link>{' '}
              par likha hai. Padh lo, aur gaon me kisi ko is jhanse me phansta dekho to link bhej do.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">
            Soil Health Card. Aam Sawalon Ke Jawab
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Soil Health Card FAQ 2026" />
        </section>

        <div className="my-8 p-6 bg-green-50 border-2 border-green-400 rounded-2xl">
          <h3 className="font-black text-green-800 text-lg mb-3">Card Aane Ke Baad Ka Kaam Hi Asli Kaam Hai</h3>
          <p className="text-sm text-green-900 leading-relaxed mb-3">
            Sample dena 30 minute ka kaam hai, aur card 3 saal chalta hai. Par zyadatar kisano ke ghar mein yeh
            card padha hi nahi jaata, isliye kharch ghatta nahi. Card ki value uski recommendation sheet mein hai,
            jahan aapke khet ke liye NPK ki matra likhi hoti hai.
          </p>
          <p className="text-sm text-green-900 leading-relaxed">
            Card haath mein aate hi ek kaam karein: dukaan par jo urea-DAP aap har season lete hain, uski matra
            card wali sifarish se milaayein. Farak dikhega. Aur wahi farak aapki fertilizer lagat ka faisla karta
            hai, kisi general advice se zyada.
          </p>
        </div>

        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 dark:border-blue-700 border-l-[6px] rounded-xl">
          <h3 className="text-base font-black text-blue-800 dark:text-blue-300 mb-2">
             National Soil Health Dashboard
          </h3>
          <p className="text-xs text-blue-700 dark:text-blue-400 mb-3">
            Card <strong>download</strong> karne ke liye, <strong>status check</strong> karne ke liye, ya state wise information ke liye official portal par jaayein. Countdown khatam hote hi soilhealth site khul jaayegi.
          </p>
          <OfficialLinkButton
            title="National Soil Health Dashboard"
            message="Official portal khulne wala hai. Thoda wait karo..."
            url="https://soilhealth.dac.gov.in/"
            infoNote="Thoda wait karo. Official portal khulne wala hai."
            className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-105"
          >
             Yahan Click Karo → Official Portal Khulega
          </OfficialLinkButton>
        </div>

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} bioKey="soil-health-card-complete-guide-2026" />
        <BottomNav />
        <Disclaimer k="soil-health-card-complete-guide-2026" />
      </div>
    </>
  );
}
