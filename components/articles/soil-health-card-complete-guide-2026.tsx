'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-07-15T08:00:00+05:30';
const MODIFIED = '2026-07-15T08:00:00+05:30';

const RELATED = [
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Complete Guide', emoji: '📚' },
  { slug: 'PmKisan24viKist2026', title: '24vi Kist Status', emoji: '📅' },
  { slug: 'NanoDap500mlPriceInIndia2026', title: 'Nano DAP Price', emoji: '🧪' },
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Loan Apply', emoji: '💳' },
];

const FAQS_DATA = [
  {
    q: 'Soil health card bilkul free hai ya kharcha aata hai?',
    a: 'Bilkul free hai bhai. Government poora test aur card banate hain. Sirf travel kharcha ho sakta hai agar aap lekar aaye to lab mein.',
  },
  {
    q: 'Soil test result mein kya likha hota hai — samajh nahi aata?',
    a: 'Card mein 3 cheezon ka score hota — pH level (acidic/alkaline), organic matter, aur nutrients. Zyada tar cards mein simple likha hota "aapki zameen acha hai" ya "nitrogen kam hai". Detailed explanation neeche di hai.',
  },
  {
    q: 'Test result ke base par fertilizer konsa lagau?',
    a: 'Exact recommendations report mein likhe hote hain. Agar nitrogen kam likha ho to DAP/urea, phosphorus kam ho to SSP. Lekin ek baar sahi samajhne ke liye agriculture officer se mill lo — wo free advice dete hain.',
  },
  {
    q: 'Ek baar test karab to kitne saal mein dobara test karwana padta hai?',
    a: 'Har 2-3 saal mein ek baar test karwana acha hota hai. Lekin agar aap new chemicals use kar rahe ho ya soil quality gir gayi likhe to dobara kar sakte ho.',
  },
  {
    q: 'Soil card banane mein kitna time lagta hai?',
    a: 'Lab analysis mein 1-2 hafte lagta hai. Card print karte ho to 3-4 hafte total. Zyada tar states mein 1 mahina standard time limit hai.',
  },
  {
    q: 'Kya soil health card se PM Kisan mein koi benefit ata hai directly?',
    a: 'Direct benefit nahi hai, lekin agar aapka eKYC pending hai aur soil issues hain to ye proof de sakte ho. Plus, better crop yield = zyada income, jo indirectly sab kuch improve karta hai.',
  },
  {
    q: 'Agronomy ki knowledge hi nahi hai — soil report samjhu kaise?',
    a: 'Agriculture office ke officer ya CSC waale bhai ko dikha do. Wo 10 minute mein simplify kar dengi. Ya locally ke kisan groups mein poocho — mostly log same test karate hain aur same confusion hota hai.',
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
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">🌱 Soil Testing Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            State-Wise Soil Health Card — Free Soil Test Kaise Karwayein, Result Samajhiye 2026
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-amber-100">
            <span>✍️ <Link href="/about" className="underline hover:text-white">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 12 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className="my-6 rounded-2xl overflow-hidden border border-gray-300 shadow-md">
          <Image
            src={article.ogImage || '/images/articles/soil-health-card-complete-guide-2026/soil-test-farmer-field.webp'}
            alt="Soil health card test — state wise free soil testing guide"
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
            Soil health card ek government report hota jo batata hai — aapki zameen mein nutrients kaun se hain, kaun se kam hain. Test bilkul free hai. Har state ka apna process hai, lekin sabme ek jaise steps follow hote hain. Report ke base par sahi fertilizer lagao to production 30-40% tak badh jaata hai.
          </p>
          <p className="text-sm text-amber-950 leading-relaxed">
            Ye guide mein har state ka seedha tareeka likha hai — link, offline process, sab kuch.
          </p>
        </div>

        <section className="mb-8">
          <SH>Soil Health Card Matlab Kya Hota Hai?</SH>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Ek simple report card hota jo batata hai aapki zameen kaunsa rich ya poor hai. Jaise school report mein grades hote hain — English A, Math B — usi tarah yahan pH score hota, nitrogen level, phosphorus, potassium.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Government har kisan ko ye card banate hain taaki wo sahi khad daal sake. Zyada tar farmers jo khad dalte hain wo andaze se daaltey hain — kabhi excess, kabhi kam. Soil test kar lo to exact malum chale ki kitna kya chahiye.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Best part — ye sab bilkul free hai. Kharcha bas travel ka aata hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Soil Health Card Kaise Banwate Hain — General Process</SH>
          <StepList>
            <SI n={1}>Apne block ke agriculture office jaao (ya agriculture college)</SI>
            <SI n={2}>Ek form fill karo — zameen ka size, location, kaunsi fasal lagati ho</SI>
            <SI n={3}>Soil sample collect hota hai — zameen se 8-10 jagah se thoda thoda mitti nikaal te hain</SI>
            <SI n={4}>Lab mein test hota hai — 1-2 hafte lagta hai</SI>
            <SI n={5}>Card print ho jaata hai — recommendations ke saath</SI>
          </StepList>
        </section>

        <section className="mb-8">
          <SH>Har State Mein Kaise Apply Karte Hain — State-Wise Guide</SH>
          
          <div className="mb-8">
            <div className="bg-blue-50 rounded-xl p-5 border-2 border-blue-300 mb-4">
              <h3 className="font-black text-blue-900 text-lg mb-3">🌾 Maharashtra</h3>
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
              <h3 className="font-black text-green-900 text-lg mb-3">🌾 Uttar Pradesh</h3>
              <p className="text-sm text-gray-700 mb-3">
                UP mein State Agriculture Department sab sambhalta hai. Har district mein separate soil testing lab hote hain. Online registration available hai.
              </p>
              <p className="text-sm font-bold text-green-900 mb-2">Contact:</p>
              <p className="text-sm text-gray-700 mb-3">
                Official portal: <strong>upagriculture.com</strong> — "Soil Health Card" section mein seedha registration
              </p>
              <p className="text-xs text-gray-600 italic">
                Offline: Local block agriculture office mein jaao. Form free milega. Processing time 3-4 hafte.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-5 border-2 border-purple-300 mb-4">
              <h3 className="font-black text-purple-900 text-lg mb-3">🌾 Rajasthan</h3>
              <p className="text-sm text-gray-700 mb-3">
                Rajasthan mein khad ki shortage hoti thi, isliye Soil Health Card ko bahut serious lia gaya. Lab testing bilkul free + reliable hai.
              </p>
              <p className="text-sm font-bold text-purple-900 mb-2">Contact:</p>
              <p className="text-sm text-gray-700 mb-3">
                Agriculture Department office ya <strong>agriculture.rajasthan.gov.in</strong>
              </p>
              <p className="text-xs text-gray-600 italic">
                Aajkal mobile lab bhi aati hain villages mein — news dekho ya agriculture office se pooch lo.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-xl p-5 border-2 border-yellow-400 mb-4">
              <h3 className="font-black text-yellow-900 text-lg mb-3">🌾 Punjab</h3>
              <p className="text-sm text-gray-700 mb-3">
                Punjab mein soil problem jada hai kyunki zyada chemical use hota hai. State ne mass scale par soil testing shuru ki hui. Government colleges bhi test karte hain.
              </p>
              <p className="text-sm font-bold text-yellow-900 mb-2">Contact:</p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>punjabkrishivikas.gov.in</strong> ya nearest Block Development Office
              </p>
              <p className="text-xs text-gray-600 italic">
                Kharif/Rabi season se pehle time badh jaata hai — jaldi apply kar do.
              </p>
            </div>

            <div className="bg-red-50 rounded-xl p-5 border-2 border-red-300 mb-4">
              <h3 className="font-black text-red-900 text-lg mb-3">🌾 Karnataka</h3>
              <p className="text-sm text-gray-700 mb-3">
                South India mein Karnataka ka program achha chal raha hai. Coffee aur sugarcane walon ko priority milti hai, lekin general farmers ko bhi service milti hai.
              </p>
              <p className="text-sm font-bold text-red-900 mb-2">Contact:</p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>ahlds.karnataka.gov.in</strong> — Online status tracking available
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
            Card ke peeche recommendations likhi hoti — "Use 100kg DAP aur 50kg Urea per hectare." Seedha follow kar do. Zyada socha-sochi ki zaroorat nahi.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Agar recommendation samajh nahi aaye to agriculture officer ko call kar do — wo 5 minute mein samjha dega. Government officers ko ye kaam karna padta hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Soil Health Card Ka Fayda — Actual Numbers</SH>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 rounded-xl p-4 border border-green-300">
              <p className="font-black text-green-800 text-sm mb-2">📈 Production Badha</p>
              <p className="text-xs text-gray-700">Sahi fertilizer se 25-40% tak production badh jaata hai</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-300">
              <p className="font-black text-blue-800 text-sm mb-2">💰 Cost Kam Hota</p>
              <p className="text-xs text-gray-700">Waste fertilizer use nahi hota, cost 15-20% tak kam</p>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-300">
              <p className="font-black text-amber-800 text-sm mb-2">🌱 Soil Health</p>
              <p className="text-xs text-gray-700">Zameen ki quality improve hoti hai — long term benefit</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 border border-purple-300">
              <p className="font-black text-purple-800 text-sm mb-2">📋 Record</p>
              <p className="text-xs text-gray-700">Card future mein proof ke kaam aata hai — loan application mein</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">
            Log Ye Poochte Hain
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Soil Health Card FAQ — Real Farmer Questions" />
        </section>

        <div className="my-8 p-6 bg-green-50 border-2 border-green-400 rounded-2xl">
          <h3 className="font-black text-green-800 text-lg mb-3">Real Talk</h3>
          <p className="text-sm text-green-900 leading-relaxed mb-3">
            Soil health card chhoti cheez lag sakti hai lekin pura farming setup improve kar deta hai. Government ye free diye hain to use kar lo. 30 minute ka kaam hai, lekin 3 saal ke liye benefit milega.
          </p>
          <p className="text-sm text-green-900 leading-relaxed">
            Aur ek baat — jo farmers soil test karate hain, unka production aur quality dono badhta hai. Buyer bhi premium price deta hai agar quality acha ho.
          </p>
        </div>

        <GovLink
          href="https://soilhealth.dac.gov.in/"
          label="National Soil Health Dashboard"
          guide="Check Portal"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="soilhealth.dac.gov.in"
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav />
        <Disclaimer />
      </div>
    </>
  );
}
