'use client';

import Link from 'next/link';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const RELATED = [
  { slug: 'msp-list-2026-27', title: 'MSP List 2026-27', emoji: '📋' },
  { slug: 'mandi-bhav-today', title: 'Aaj Ka Mandi Bhav', emoji: '📊' },
  { slug: 'enam-registration-kaise-kare', title: 'eNAM Registration Guide', emoji: '🖥️' },
  { slug: 'mandi-bhav-app-comparison', title: 'Best Mandi Bhav Apps', emoji: '📱' },
  { slug: 'sabzi-bhav-guide-pyaz-aloo-tamatar', title: 'Sabzi Bhav Guide', emoji: '🥔' },
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Online Apply', emoji: '💳' },
];

const FAQS_DATA = [
  {
    q: 'Gehu ka MSP 2026 mein kitna hai?',
    a: 'Rabi Marketing Season 2026-27 ke liye gehu ka MSP ₹2,585 per quintal hai — pichhle saal ke ₹2,425 se ₹160 zyada. Yeh rate sarkari kharid kendra par milta hai, mandi ki khuli boli mein nahi. Poori faslon ki list ke liye hamari MSP List 2026-27 guide dekho.',
  },
  {
    q: 'MSP par bechna hamesha behtar hota hai kya?',
    a: 'Nahi — MSP floor hai, ceiling nahi. Jab open market ka rate MSP se neeche chal raha ho, tab sarkari kharid aapko bachati hai. Lekin achhi quality ka gehu, sahi time par, open market mein MSP se upar bhi bik jata hai. Faisla har saal ke rate aur apni quality dekh kar karo, aadat se nahi.',
  },
  {
    q: 'MSP par bechne ke liye kya karna padta hai?',
    a: 'Apne state ke procurement portal par registration (zyada tar states mein online hota hai), phir slot/token lekar apne kharid kendra par gehu le jao. Aadhaar, bank details aur zameen ke record chahiye hote hain. Payment seedha bank account mein aati hai. Registration window season se pehle khulti hai — miss mat karo.',
  },
  {
    q: 'Mandi mein rate MSP se neeche kyun chala jata hai?',
    a: 'Harvest ke turant baad (April-May) sab kisan ek saath bechne aate hain — aavak ka pahad ban jata hai aur boli dab jaati hai. Buyers ko pata hai ki kisan ko paisa turant chahiye. Yahi woh waqt hai jab MSP ki sarkari kharid sabse zyada kaam aati hai.',
  },
  {
    q: 'Gehu rok kar bechne se kitna fayda ho sakta hai?',
    a: 'Aam pattern yeh hai ki harvest ke mahino mein rate sabse dabav mein hota hai aur baad ke mahino mein sudhrta hai. Lekin yeh guarantee nahi hai — kisi saal import/export policy ya bumper crop pattern tod deti hai. Rok kar bechne ka faisla storage ke kharche, paise ki zaroorat aur us saal ke trend ko jod kar karo.',
  },
  {
    q: 'Ghar par gehu store karne mein kya dhyan rakhein?',
    a: 'Nami (moisture) sabse bada dushman hai — gehu achhi tarah sukha kar (dry) store karo, zameen se upar lakdi/pallet par rakho, aur bori ko deewar se sata kar mat rakho. Ghun se bachne ke liye saaf-sutharaa bhandaran aur time par jaanch zaroori hai. Kharab storage mein 3 mahine mein hi weight loss aur quality cut ka nuksan rate ke fayde ko kha jata hai.',
  },
  {
    q: 'Kya main aadha MSP par aur aadha market mein bech sakta hoon?',
    a: 'Haan, aur samajhdaar kisan aksar yahi karte hain. Turant kharche ke liye ek hissa MSP/mandi mein bech do, baaki quality wala maal rok lo. Isse risk bant jata hai — na poora maal daba, na poora sasta bika.',
  },
  {
    q: 'MSP kharid mein quality cut kya hota hai?',
    a: 'Kharid kendra par gehu FAQ (Fair Average Quality) standards par jaancha jata hai — nami, tuta dana, mitti/kachra. Standards se bahar ka maal reject ho sakta hai ya sharton ke saath liya jata hai. Isliye bechne se pehle gehu saaf karo aur sukha lo — yeh mehnat seedha rate mein wapas milti hai.',
  },
  {
    q: 'Rate ka daily update kahan dekhein?',
    a: 'Apni mandi ka reported rate eNAM/AgMarknet data se dekho — hamari Aaj Ka Mandi Bhav page aur Best Mandi Bhav Apps guide isi ke liye hai. Bade sauda se pehle mandi mein phone karke us din ki boli confirm kar lo.',
  },
  {
    q: 'Kya state apna bonus bhi deta hai MSP ke upar?',
    a: 'Kuch states dete hain — jaise Madhya Pradesh ne 2026-27 season mein ₹40 per quintal ka state bonus diya, jisse kisan ko total ₹2,625 mila. Yeh har saal aur har state mein alag hota hai. Apne state ke procurement portal ya kharid kendra se current season ka bonus zaroor pucho — yeh seedha extra paisa hai.',
  },
  {
    q: 'Premium variety (sharbati/lokwan) ka kya karein — MSP mein dena to ghata hai?',
    a: 'Bilkul — sharbati, lokwan jaisi premium varieties open market mein MSP se kaafi upar bikti hain; unhe sarkari kendra par general rate mein dena apna hi nuksan hai. Premium maal ke liye buyers alag hote hain (flour mills, traders, seed companies) — wahan seedha ya eNAM ke through pahuncho. MSP wala rasta general/FAQ quality ke maal ke liye rakho.',
  },
];

export default function GehuKaBhavMspVsMandi({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Gehu Ka Bhav: MSP vs Mandi</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Gehu Ka Bhav 2026: MSP Par Bechein Ya Mandi Mein — Faisla Kaise Karein, Kab Bechein, Kab Rokein
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(article.publishedTime)}</span>
            <span>🔄 Updated: {fmtDate(article.modifiedTime)}</span>
            <span>⏱️ 10 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">
        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          Har saal April mein wahi sawaal: gehu MSP par sarkari kendra mein dein, ya mandi ki khuli boli mein bechein,
          ya rok kar rakhein? Galat jawab ka matlab seedha nuksan hai — aur sahi jawab har saal, har kisan ke liye
          alag hota hai.
        </p>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
          Is guide mein hum faisle ka framework denge — MSP ka asli matlab, mandi rate ka seasonal pattern, storage
          ka ganit, aur woh 4 sawaal jo bechne se pehle khud se poochne chahiye. Number wahi use karenge jo official
          hain; boli ka rate roz badalta hai, isliye usse aap apni mandi se confirm karoge.
        </p>

        <SH>🌾 MSP Ka Asli Matlab — Floor, Ceiling Nahi</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Rabi Marketing Season 2026-27 ke liye gehu ka MSP <strong>₹2,585 per quintal</strong> hai — pichhle saal ke
          ₹2,425 se ₹160 zyada. Yeh woh rate hai jis par sarkar apne kharid kendra par aapka gehu (FAQ quality ka)
          kharidne ko taiyar hai.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          MSP ko aise samjho: yeh aapke rate ka <strong>neeche ka jaal</strong> hai. Market girta hai toh MSP aapko
          us jaal ke neeche girne se rokta hai. Lekin market chadhta hai toh MSP aapka haath nahi pakadta — achhi
          quality ka gehu open market mein MSP se upar bikta hai, khaas kar sharbati/lokwan jaisi premium varieties.
          Isliye &ldquo;MSP hi best hai&rdquo; aur &ldquo;mandi hi best hai&rdquo; — dono andhe niyam hain.
        </p>

        <IB>
          MSP ka poora table (dhan, chana, sarson samet) aur kharid ka process humne alag guide mein diya hai:{' '}
          <Link href="/articles/msp-list-2026-27" className="underline font-bold">MSP List 2026-27</Link>. Yahan hum
          sirf gehu ke faisle par focus karenge.
        </IB>

        <SH>📅 Mandi Rate Ka Seasonal Pattern — Samajh Lo, Ratna Nahi</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Gehu ke bhav ka saal aam taur par is tarah chalta hai:
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--color-bg-alt)]">
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Samay</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Kya Hota Hai</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Rate Par Asar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">April–May (harvest)</td>
                <td className="border border-[var(--color-border)] p-3">Sab ek saath bechne aate hain, aavak peak par</td>
                <td className="border border-[var(--color-border)] p-3">Sabse zyada dabav — rate aksar MSP ke aas-paas ya neeche</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">June–September</td>
                <td className="border border-[var(--color-border)] p-3">Aavak ghat jaati hai, stock walon ka maal bikta hai</td>
                <td className="border border-[var(--color-border)] p-3">Dheere-dheere sudhaar shuru</td>
              </tr>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">October–February</td>
                <td className="border border-[var(--color-border)] p-3">Purana stock kam, nayi fasal door</td>
                <td className="border border-[var(--color-border)] p-3">Aam taur par saal ka behtar rate isi daur mein</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">March</td>
                <td className="border border-[var(--color-border)] p-3">Nayi fasal ki aahat, buyers ruk jaate hain</td>
                <td className="border border-[var(--color-border)] p-3">Rate phir narm padne lagta hai</td>
              </tr>
            </tbody>
          </table>
        </div>

        <WB>
          Yeh pattern <strong>aam saal</strong> ka hai — pattharr ki lakeer nahi. Sarkari stock release, import/export
          policy ka badlav, ya bumper/kamzor fasal kisi bhi saal is cycle ko tod sakti hai. Isliye pattern ko
          starting point banao, aur us saal ka asli trend apni mandi ke daily rate se pakdo.
        </WB>

        <SH>🧮 Rok Kar Bechne Ka Ganit — Kagaz Par Karo</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          &ldquo;Rok lo, baad mein rate badhega&rdquo; — yeh salah aadhi hai. Poora ganit yeh hai: baad ka rate sirf tab fayda
          hai jab woh <strong>storage ke kharche + nuksan + paise ki lagat</strong> se zyada badhe. Kagaz par yeh
          columns banao:
        </p>
        <StepList>
          <SI n={1}><strong>Storage ka kharcha:</strong> ghar par rakha toh bori, dawai, dekh-rekh; warehouse mein rakha toh kiraya. Jo bhi hai, per quintal per mahina likho.</SI>
          <SI n={2}><strong>Weight aur quality loss:</strong> nami sookhne se weight girta hai, ghun/choohe ka nuksan alag. Kharab storage mein yeh loss rate ke fayde ko kha jata hai.</SI>
          <SI n={3}><strong>Paise ki lagat:</strong> agar aapko abhi paisa chahiye aur udhaar lena padega, toh us byaj ko bhi ganit mein joro. KCC ka sasta paisa ho toh rok pana aasan hota hai.</SI>
          <SI n={4}><strong>Risk:</strong> rate na badha toh? Apne aap se pucho ki kitne mahine intezar kar sakte ho bina majboori ke.</SI>
        </StepList>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Ek seedha example (numbers apne bharo): agar 6 mahine rokne ka total kharcha + loss ₹150 per quintal baith
          raha hai, toh rok kar bechna tabhi jeet hai jab rate ₹150 se zyada badhe. Isse kam ki badhat par aap mehnat
          karke bhi wahi ke wahi ho.
        </p>

        <SH>🤔 Bechne Se Pehle 4 Sawaal</SH>
        <StepList>
          <SI n={1}><strong>Aaj mandi ka rate MSP se upar hai ya neeche?</strong> Neeche hai → MSP registration karke sarkari kendra ka rasta pakdo. Upar hai → agla sawaal.</SI>
          <SI n={2}><strong>Meri quality kaisi hai?</strong> Saaf, sookha, premium variety → open market mein behtar boli milegi. Nami/kachra wala maal → pehle saaf-sukha karo, warna dono jagah cut lagega.</SI>
          <SI n={3}><strong>Paise ki zaroorat kitni urgent hai?</strong> Turant chahiye → jo rate aaj sahi mile, bech do; majboori mein rokna sabse mehenga sauda hai. Ruk sakte ho → hissa rok lo.</SI>
          <SI n={4}><strong>Storage ka intezam pukhta hai?</strong> Nahi hai → rokne ka khayal chhodo ya warehouse dekho. Kharab storage mein rokna nuksan ko time dena hai.</SI>
        </StepList>

        <DB>
          <strong>Sabse practical strategy — teen hisse:</strong> ek hissa harvest par bech do (kharche ke liye),
          ek hissa MSP par do (agar rate daba hai), aur sabse achhi quality wala hissa rok lo (behtar season ke
          liye). Isse aap na poore girte rate mein fanste ho, na poora fayda chhodte ho.
        </DB>

        <SH>🌾 Premium Variety Ka Alag Hisaab — Sharbati Wale Dhyan Dein</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          MSP vs mandi ka faisla variety ke hisaab se bilkul palat jaata hai. General/dara gehu — jiski quality
          FAQ standard ke aas-paas hai — uske liye MSP ka jaal sabse zyada matter karta hai. Lekin{' '}
          <strong>sharbati, lokwan, bansi jaisi premium varieties</strong> ka open market rate aam taur par MSP
          se kaafi upar chalta hai — sharbati toh kai baar MSP se ₹1,000-2,000 upar bikta hai. Aisi variety
          sarkari kendra par dena apne premium ko muft mein chhodna hai, kyunki wahan variety ka koi extra
          nahi milta — sab ek hi rate par taula jaata hai.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Premium maal ke liye buyers bhi alag hote hain — flour mills, branded atta companies, seed producers
          aur bade traders. Inke saath seedha sauda ya eNAM ki online bidding behtar rate nikalti hai, kyunki
          door ke buyers assaying report mein variety aur quality dekh kar bid karte hain. Aur ek baat —
          premium variety saaf-suthri, graded halat mein hi apna premium paati hai; mila-jula maal general
          rate par hi girta hai. Grading ki thodi mehnat yahan sabse zyada return deti hai.
        </p>

        <SH>🏛️ MSP Par Bechna Ho Toh — Process</SH>
        <StepList>
          <SI n={1}><strong>Registration:</strong> apne state ke procurement portal par (UP, MP, Rajasthan, Bihar — sab ke apne portal hain) season se pehle registration karo. Aadhaar, bank details, zameen ke record lagenge.</SI>
          <SI n={2}><strong>Slot/token:</strong> registration ke baad kharid kendra aur date ka slot milta hai. Bina slot ke maal le jaakar khada rehna padta hai.</SI>
          <SI n={3}><strong>Quality prep:</strong> gehu saaf karo, sukha lo — FAQ standards (nami, tuta dana, kachra) par jaanch hoti hai.</SI>
          <SI n={4}><strong>Taul aur payment:</strong> electronic taul ke baad payment seedha bank account mein aati hai. Receipt sambhaal kar rakho.</SI>
          <SI n={5}><strong>State bonus check karo:</strong> kuch states MSP ke upar apna bonus dete hain (jaise MP ka ₹40 per quintal — total ₹2,625). Yeh automatic milta hai, par pata hona chahiye taaki payment short aaye toh pakad sako.</SI>
        </StepList>
        <WB>
          Registration window season se pehle khulti hai aur deadline sakht hoti hai — jaise Gujarat mein
          registration February mein hota hai aur kharid March-May mein. Window nikal gayi toh us season MSP
          ka rasta band. Apne state ke portal par January-February se nazar rakhna shuru kar do.
        </WB>

        <GovLink
          href="https://agmarknet.gov.in"
          label="AgMarknet — Mandi-wise Daily Rates"
          guide="Portal Kholo"
          portalName="agmarknet.gov.in"
        />

        <SH>📊 Daily Rate Kahan Dekhein</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Faisla trend se hota hai, ek din ke rate se nahi. Apni mandi ka modal price roz dekho — hamari{' '}
          <Link href="/articles/mandi-bhav-today" className="underline font-bold">Aaj Ka Mandi Bhav</Link> page se ya{' '}
          <Link href="/articles/mandi-bhav-app-comparison" className="underline font-bold">in apps</Link> se. Aur agar
          aapki mandi eNAM se judi hai, toh online bidding ka fayda lena bhi seekho:{' '}
          <Link href="/articles/enam-registration-kaise-kare" className="underline font-bold">eNAM Registration
          Guide</Link>.
        </p>

        <FAQBlock faqs={FAQS_DATA} />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={article.modifiedTime} />
        <BottomNav extraLinks={[
          { href: '/articles', l: '📚 Sabhi Articles' },
          { href: '/articles/category/mandi', l: '📂 Mandi Guides' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
