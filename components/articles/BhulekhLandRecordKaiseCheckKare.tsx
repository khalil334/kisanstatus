import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, DB, SH, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import CountdownRedirectButton from '@/components/CountdownRedirectButton';
import StatePortalFinder from '@/components/StatePortalFinder';
import type { ArticleMeta } from '@/lib/articles-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const PUBLISHED = '2026-11-13T09:00:00+05:30';
const MODIFIED = '2026-11-13T09:00:00+05:30';

const RELATED_CARDS = [
  {
    slug: 'PmKisanLandSeedingForm',
    title: 'Land Seeding Form Kahan Se Milega',
    desc: 'PM Kisan me land seeding No hai to form kahan se milta hai aur kaise bharein.',
  },
  {
    slug: 'PmKisanCorrectionForm2026',
    title: 'Naam Ya Details Galat Hain To Sudhaar',
    desc: 'Portal par naam ya bank details galat hain to correction form ka poora tareeka.',
  },
  {
    slug: 'KisanCreditCardOnlineApply2026',
    title: 'KCC Ke Liye Land Record Kyun Chahiye',
    desc: 'Kisan Credit Card ke liye bank sabse pehle khatauni hi maangta hai. Poora process yahan.',
  },
];

const FAQS_DATA = [
  {
    q: 'Bhulekh par apni zameen ka record dekhne ke liye koi fee lagti hai?',
    a: 'Aam khatauni ki nakal dekhna muft hota hai — aap apne rajya ke portal par district, tehsil aur gaon chun kar record dekh sakte hain. Pramanit (certified) nakal ke liye online payment ka option hota hai, jaise UP Bhulekh par hai. Koi bhi aadmi aapse record dikhane ke naam par paisa maange to samajh lijiye ki woh thag hai.',
  },
  {
    q: 'Record me mera naam galat likha hai. Online sudhar sakta hai?',
    a: 'Nahi, naam ka sudhaar online nahi hota. Ye kaam tehsil ya lekhpal se hota hai — mutation (dakhil-kharij) ya naam sudhaar ke liye kagaz lekar jana padta hai. Pehle portal par record dekh kar galti note kar lijiye, phir tehsil jaiye.',
  },
  {
    q: 'Mere gaon ka record portal par nahi dikh raha. Kya karun?',
    a: 'Pehle gaon ka naam sahi spelling se dhoondhiye — kabhi-kabhi gaon ka naam alag tarike se likha hota hai. Phir bhi na mile to apne lekhpal ya tehsil se poochiye; kuch gaon ka record abhi digitize nahi hua hai, ya portal par update pending hai.',
  },
  {
    q: 'Khatauni aur khasra me kya farq hai?',
    a: 'Khatauni (Record of Rights) woh kagaz hai jisme likha hota hai ki zameen kiske naam par hai, kitni hai aur kis kism ki hai. Khasra (gata) number zameen ke ek tukde ka number hota hai — ek khatauni me kai khasra number ho sakte hain. PM Kisan aur bank, dono ko khatauni hi chahiye hoti hai.',
  },
  {
    q: 'Zameen abhi bhi mere pita ke naam par hai. Kya PM Kisan milega?',
    a: 'Nahi, jab tak zameen aapke naam par transfer (mutation) nahi hoti. PM Kisan me wahi apply kar sakta hai jiske naam par zameen registered hai. Pehle tehsil se varasat ya naamantaran ka kaam karwaiye, phir apply kijiye.',
  },
  {
    q: '7/12 Utara aur khatauni ek hi cheez hai?',
    a: 'Haan, kaam ek hi hai — zameen ka record. Maharashtra me ise 7/12 Utara kehte hain, UP aur Uttarakhand me khatauni, Punjab-Haryana me jamabandi aur Karnataka me RTC. Tamil Nadu me ise Patta Chitta aur West Bengal me Banglar Bhumi (Khatian) kehte hain. Naam alag hai, kaam wahi: zameen kiske naam hai, ye batana.',
  },
];

export default function BhulekhLandRecordKaiseCheckKare({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Bhulekh Guide</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Land Records Guide</span>

          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Bhulekh Se Apni Zameen Ka Record Kaise Nikalein: Khatauni, 7/12, ROR
          </h1>

          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span><Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(PUBLISHED)}</span>
            <span>Updated: {fmtDate(MODIFIED)}</span>
            <span>10 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-xl">
          <p className="text-sm md:text-base text-blue-900 dark:text-blue-100 leading-relaxed font-medium">
            <strong>Ek line me:</strong> Apni zameen ka record — khatauni, 7/12 ya jamabandi — apne rajya ke Bhulekh portal par muft dekha ja sakta hai. Naam, khata number aur zameen ka rakba wahi likha hota hai, aur PM Kisan, KCC loan ya fasal bima, har jagah yahi kagaz maanga jaata hai. Neeche UP ka poora tareeka hai, aur 18 rajyon ke portal ek jagah diye hain.
          </p>
        </div>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/articles/bhulekh-land-record-kaise-check-kare/kisan-khet-hero.webp'}
            alt="Bhulekh land record guide, kisan apne khet me khada hai"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Zameen Aapki Hai, To Record Me Naam Bhi Aapka Hona Chahiye. Photo: Wikimedia Commons, CC BY-SA 3.0.
          </p>
        </div>

        <div className="my-8 p-6 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 dark:border-blue-600 rounded-2xl">
          <h3 className="font-black text-blue-900 dark:text-blue-200 text-lg mb-2">Apni Khatauni Abhi Dekho — UP Bhulekh Portal</h3>
          <p className="text-sm text-blue-900 dark:text-blue-100 leading-relaxed mb-3">
            UP ke kisan apni khatauni <strong>upbhulekh.gov.in</strong> par dekh sakte hain — Board of Revenue, Uttar Pradesh ka official portal. Wahan &ldquo;खतौनी (अधिकार अभिलेख) की नक़ल देखें&rdquo; se aapka record khul jayega. Doosre rajya ke hain to neeche wali directory me apna portal dhoondhiye.
          </p>
          <CountdownRedirectButton
            href="https://upbhulekh.gov.in"
            label="UP Bhulekh Portal Kholo →"
            seconds={5}
            variant="primary"
          />
          <p className="text-xs text-blue-800 dark:text-blue-200 leading-relaxed mt-3">
            Button dabate hi aap Uttar Pradesh sarkar ki official website upbhulekh.gov.in par jaoge — 5 second ka intezaar, phir portal khul jayega. Yaad rakhiye: KisanStatus aapse kabhi Aadhaar ya bank number nahi maangega — number sirf sarkari portal par daala jaata hai, yahan kabhi nahi.
          </p>
        </div>

        <section className="mb-8">
          <SH>Bhulekh Matlab Kya — Aur Aapke State Me Iska Naam Kya Hai</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bhulekh ka matlab hai zameen ka hisaab-kitab, jo sarkar ke record me rakha hota hai. Isi record se pata chalta hai ki zameen kiske naam par hai, kitni hai, aur kis kism ki hai. Har state me iska naam alag hai, lekin kaam ek hi hai. Isiliye pehle ye jaan lijiye ki aapke state me ise kya kehte hain, taaki portal par sahi cheez dhoondh sakein.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-[var(--color-border)] rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[var(--color-bg-alt)]">
                  <th className="text-left p-3 font-black text-[var(--color-text)]">Rajya</th>
                  <th className="text-left p-3 font-black text-[var(--color-text)]">Record ka naam</th>
                  <th className="text-left p-3 font-black text-[var(--color-text)]">Portal</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Uttar Pradesh, Uttarakhand', 'Khatauni', 'upbhulekh.gov.in / bhulekh.uk.gov.in'],
                  ['Maharashtra', '7/12 Utara', 'bhulekh.mahabhumi.gov.in'],
                  ['Punjab, Haryana', 'Jamabandi', 'jamabandi.punjab.gov.in / jamabandi.nic.in'],
                  ['Karnataka', 'RTC (Record of Rights)', 'bhoomi.karnataka.gov.in'],
                  ['Rajasthan', 'Khatauni (Apna Khata)', 'apnakhata.raj.nic.in'],
                  ['Telangana', 'Dharani', 'dharani.telangana.gov.in'],
                  ['Bihar', 'Bhumi Jankari', 'biharbhumi.bihar.gov.in'],
                  ['West Bengal', 'Banglar Bhumi', 'banglarbhumi.gov.in'],
                  ['Odisha', 'Bhulekh / ROR', 'bhulekh.ori.nic.in'],
                  ['Tamil Nadu', 'Patta Chitta', 'eservices.tn.gov.in'],
                ].map(([state, name, portal], i) => (
                  <tr key={state} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{state}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{name}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{portal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[var(--color-text-muted)] text-xs">
            Poori list — 18 rajyon ke portal, search ke saath — neeche di gayi hai. Agar aapka rajya is table me nahi hai to directory dekhiye.
          </p>
        </section>

        <section className="mb-8">
          <SH>UP Me Khatauni Dekhne Ka Tareeka, Step-by-Step</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            UP ka portal sabse zyada use hota hai, isliye uska tareeka detail me diya hai. Baaki rajyon ka raasta bhi lagbhag wahi hai: portal kholo, apna zila-chuno, gaon chuno, khatauni nikalo.
          </p>
          <StepList>
            <SI n={1}>upbhulekh.gov.in kholo. Homepage par &ldquo;भूलेख सेवाएं&rdquo; (Bhulekh Sevayein) dikhegi.</SI>
            <SI n={2}>&ldquo;खतौनी (अधिकार अभिलेख) की नक़ल देखें&rdquo; par click karo.</SI>
            <SI n={3}>Apna district chuno, phir tehsil, phir gaon (pargana bhi dikhega).</SI>
            <SI n={4}>Gaon ki list me apna khata number ya naam dhoondho — khatauni khul jayegi.</SI>
            <SI n={5}>Record ko dhyan se padho: naam, khata number, gata/khasra number aur rakba mila lo.</SI>
            <SI n={6}>Zaroorat ho to use save ya print kar lo. Ye aam nakal hai — pramanit nakal ke liye portal par online payment ka option hai.</SI>
          </StepList>
          <IB>
            <strong>Ek kaam ki baat:</strong> Portal par gaon ka naam kabhi-kabhi alag spelling se likha hota hai. Naam na mile to aas-paas ke gaon ki spelling dekhiye, ya lekhpal se gaon ka sahi naam pooch lijiye. Record na milne ka matlab ye nahi hai ki zameen aapki nahi hai — aksar sirf spelling ya update ki dikkat hoti hai.
          </IB>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/bhulekh-land-record-kaise-check-kare/khet-me-mahila.webp"
            alt="Gujarat me khet me kaam karti mahila kisan"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Zameen Jiske Naam, Fayda Bhi Usi Ke Naam. Photo: Wikimedia Commons, CC BY-SA 3.0.
          </p>
        </div>

        <section className="mb-8">
          <SH>Record Me Kya-Kya Likha Hota Hai, Aur Kya Check Karein</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Khatauni khul jaye to usme ye cheezein dekhiye. Har ek ka apna kaam hai, aur koi ek bhi galat ho to aage kist ya loan atak sakta hai.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-2">Khatauni me kya hota hai</p>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Zameen ke malik ka naam, khata number, gata ya khasra number, zameen ka rakba (kitni hai) aur zameen ki kism. Yehi kagaz Record of Rights kehlata hai — matlab, zameen par aapka haq isse sabit hota hai.
              </p>
            </div>
            <div className="p-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <p className="font-black text-amber-800 dark:text-amber-300 text-sm mb-2">Kya check karna hai</p>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Naam ki spelling Aadhaar se milti hai ya nahi, rakba sahi hai ya nahi, aur zameen abhi bhi pita ya dada ke naam par to nahi hai. Naam me ek akshar ka farak bhi PM Kisan ya bank ke kaam me atak sakta hai.
              </p>
            </div>
          </div>
          <DB>
            <strong>Zameen bechne ya khareedne se pehle:</strong> UP Bhulekh par plot ya gate ki bikri ki sthiti aur kya woh zameen kisi mukadme me phansi hai, ye bhi dekha ja sakta hai. Zameen lene se pehle ye jaanch karna paise bachata hai — kagaz par saaf dikh jayega ki zameen par koi vivaad to nahi hai.
          </DB>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ek aam misaal se samjhiye. Maan lijiye khatauni me likha hai: naam — Ram Kumar, khata number 123, gata number 45 aur 46, rakba 1.5 hectare. Iska matlab: zameen Ram Kumar ke naam par hai, uska khata number 123 hai, aur uske do tukde hain — gata 45 aur 46 — kul 1.5 hectare. Ab teen cheezein milaiye. Pehli: naam ki spelling Aadhaar se milti hai ya nahi. Doosri: rakba utna hi hai jitna aap jaante hain. Teesri: gata number wahi hai jo aapke khet ka hai — galat gata number fasal bima ke claim ke waqt sabse badi dikkat banta hai, kyunki claim usi zameen par milta hai jo register hui hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Sajha khata (joint khata) wali ek aam dikkat: khatauni me pita aur teenon beton ke naam ek saath likhe hon, to PM Kisan ke liye har vyakti alag-alag apply nahi kar sakta — scheme me parivar ka niyam hai. Batwara (partition) karwana ho to tehsil se mutation ka kaam karwana padta hai, jiske baad har hissedar ke naam alag khata banta hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Pramanit Nakal, Mutation Aur Shikayat — Aage Ke Teen Kaam</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Record dekhna sirf pehla kadam hai. Aage teen kaam aate hain, aur teeno ka raasta alag hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            <strong>Pramanit nakal:</strong> Bank ya kisi official kaam ke liye aam nakal nahi, pramanit (certified) nakal chahiye hoti hai. UP Bhulekh par iske liye online payment ka option hai — portal ke menu me &ldquo;ऑनलाइन पेमेन्ट द्वारा खतौनी की प्रमाणित प्रति प्राप्त करें&rdquo; likha milega. Aam nakal dekhna muft hai, pramanit nakal ke liye payment hota hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            <strong>Mutation (dakhil-kharij / naamantaran):</strong> Zameen pita ke naam se aapke naam par karni ho, ya varasat ke baad naam badalna ho, to ye kaam online nahi hota. Tehsil ya lekhpal ke paas kagaz lekar jana padta hai. Mutation ke bina PM Kisan nahi milega, kyunki scheme me wahi apply kar sakta hai jiske naam par zameen registered hai. Karnataka me isse judi ek rahat August 2026 se hai: bahar rehne wale waris taluk office jaye bina, online family tree ya legal heir certificate se e-Pouthi ke liye apply kar sakte hain.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            <strong>Shikayat:</strong> Record me galti ho ya portal par kuch na khul raha ho, to UP Bhulekh par shikayat darj karne aur uski sthiti dekhne ka link bhi hai. Likhit shikayat ka record banta hai, isliye phone par baat karne se zyada kaam aati hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>PM Kisan Se Iska Kya Lena-Dena Hai</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            PM Kisan me sabse zyada kistein ek hi wajah se rukti hain: zameen ka record. Portal par land seeding &ldquo;No&rdquo; dikhe to matlab hai ki aapki zameen ka record scheme se juda nahi hai. Uske liye land seeding form bharna padta hai, jo tehsil ya CSC se milta hai — aur form ke saath khatauni ki nakal lagti hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Isiliye record ko pehle se theek rakhna sabse sasta kaam hai. Aadhaar, bank aur khatauni — teeno me naam ek jaisa ho, to eKYC, seeding aur payment, teeno bina rukawat ke hote hain. Naam me farak ho to pehle use sudharwaiye, phir kist ka intezaar kijiye.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Land seeding form kahan se milta hai aur kaise bharein, ye <Link href="/articles/PmKisanLandSeedingForm" className="underline font-bold">land seeding wali guide</Link> me detail me likha hai. KCC loan ke liye bhi bank sabse pehle khatauni hi maangta hai — <Link href="/articles/KisanCreditCardOnlineApply2026" className="underline font-bold">KCC guide</Link> me uska poora process hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Apne Rajya Ka Portal Yahan Dhoondhiye</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Neeche 18 rajyon ke Bhulekh portal ek jagah hain. Apna rajya search karke portal kholiye. Ek imaandaar baat: kabhi-kabhi kisi rajya ka portal khulta nahi hai ya bahut slow hota hai — 9 November ko check karne par Maharashtra aur Madhya Pradesh ke portal is browser me khule hi nahi. 13 November ko dobara check karne par Tamil Nadu aur West Bengal ke portal bhi is browser me time out ho gaye. Iska matlab ye nahi hai ki portal band hai; thodi der baad phir try kijiye, ya seedha tehsil chale jaiye.
          </p>
          <StatePortalFinder />
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Bhulekh Par Sabse Common Sawaal
          </h2>
          <FAQBlock faqs={FAQS_DATA} variant="inline" caption="Bhulekh Land Record FAQ 2026. Seedhe Jawab" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Yaad Rakhne Wali Teen Baatein</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            <strong>Pehli:</strong> Record dekhna muft hai aur online hai — iske liye kisi ko paisa mat dijiye. <strong>Doosri:</strong> Naam ki spelling teeno jagah ek jaisi rakhiye — Aadhaar, bank aur khatauni. <strong>Teesri:</strong> Zameen jiske naam hai, fayda bhi usi ko milega — mutation ka kaam pehle karwaiye, apply baad me.
          </p>
        </div>

        <section className="mb-8">
          <SH>Sources</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Is article ke portal aur tareeke inhi jagahon se verify kiye gaye hain:
          </p>
          <ul className="text-sm text-[var(--color-text-muted)] leading-relaxed space-y-2 list-disc pl-5">
            <li><a href="https://upbhulekh.gov.in" target="_blank" rel="noopener noreferrer" className="underline">upbhulekh.gov.in</a> — Board of Revenue, Uttar Pradesh: khatauni ki nakal, pramanit nakal (online payment), bikri aur mukadme ki sthiti, shikayat (9 November 2026 ko khud khola gaya)</li>
            <li><a href="https://bhulekh.mahabhumi.gov.in" target="_blank" rel="noopener noreferrer" className="underline">bhulekh.mahabhumi.gov.in</a> — Maharashtra 7/12 Utara portal (site ki StatePortalFinder list se; 9 November ko is browser me nahi khula, retry karein)</li>
            <li><a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="underline">pmkisan.gov.in</a> — land seeding aur PM Kisan eligibility</li>
            <li><a href="https://eservices.tn.gov.in" target="_blank" rel="noopener noreferrer" className="underline">eservices.tn.gov.in</a> — Commissioner of Land Administration, Tamil Nadu: Patta Chitta view</li>
            <li><a href="https://banglarbhumi.gov.in" target="_blank" rel="noopener noreferrer" className="underline">banglarbhumi.gov.in</a> — Banglar Bhumi, West Bengal: Know Your Property / Khatian</li>
            <li>The New Indian Express, 10 November 2026, aur thelandbankers.com — Karnataka e-Pouthi relaxation: bahar rehne wale waris ke liye online family tree / legal heir certificate, August 2026 se</li>
            <li><Link href="/articles/PmKisanLandSeedingForm" className="underline">KisanStatus: Land Seeding Form guide</Link> — rajya-wise Bhulekh portal links</li>
          </ul>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-3">
            Aakhri baar portals se milaan 13 November 2026 ko kiya gaya — UP Bhulekh us din khula aur verify hua; Tamil Nadu aur West Bengal ke portal us din is browser me time out ho gaye (dono ke official domain Google search se confirm hain).
          </p>
        </section>

        <section className="my-10">
          <h3 className="text-lg font-black text-[var(--color-text)] mb-4">Aage Kaam Aayenge Ye Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {RELATED_CARDS.map((card) => (
              <Link
                key={card.slug}
                href={`/articles/${card.slug}`}
                className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg hover:border-green-500 transition-all duration-300"
              >
                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-green-600 transition-colors">
                  {card.title}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">
                  {card.desc}
                </p>
                <span className="text-xs font-semibold text-green-600 flex items-center gap-1">
                  Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <AuthorBox modified={MODIFIED} bioKey="BhulekhLandRecordKaiseCheckKare" />

        <BottomNav extraLinks={[
          { href: '/articles/PmKisanLandSeedingForm', l: 'Land Seeding Form' },
          { href: '/articles/PmKisanMasterGuide2026', l: 'PM Kisan Master Guide' },
          { href: '/articles/KisanCreditCardOnlineApply2026', l: 'KCC Guide' },
        ]} />
        <Disclaimer k="BhulekhLandRecordKaiseCheckKare" />
      </div>
    </>
  );
}
