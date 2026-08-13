import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const RELATED = [
  { slug: 'mandi-bhav-today', title: 'Aaj Ka Mandi Bhav' },
  { slug: 'msp-list-2026-27', title: 'MSP List 2026-27' },
  { slug: 'gehu-ka-bhav-msp-vs-mandi', title: 'Gehu Bhav: MSP vs Mandi' },
];

const FAQS_DATA = [
  {
    q: 'eNAM registration free hai ya paisa lagta hai?',
    a: 'Farmer registration ka ek rupaya nahi lagta. enam.gov.in par ya mandi ke eNAM help desk par — kahin bhi paisa nahi lagta. Agar koi CSC ya agent charge maange toh woh sirf apni service fee hai, portal ki koi fee nahi.',
  },
  {
    q: 'eNAM par fasal bechne ke liye kya documents chahiye?',
    a: 'Aadhaar card, bank passbook (ya cancelled cheque) aur active mobile number — bas. Kuch states mein zameen ke kagaz bhi mange ja sakte hain, lekin basic registration in teen se ho jata hai.',
  },
  {
    q: 'Payment kitne din mein aati hai?',
    a: 'Trade complete hone ke baad payment seedha aapke bank account mein aati hai — zyada tar cases mein usi din ya 1-2 working days mein. Isliye bank details bilkul sahi bharna zaroori hai.',
  },
  {
    q: 'Kya main ghar baithe fasal bech sakta hoon?',
    a: 'Registration ghar se ho jata hai, lekin fasal ki quality check (assaying) ke liye upaj mandi le jani padti hai. Bidding online hoti hai — aapki fasal par door ke buyers bhi bid kar sakte hain, isse rate behtar milta hai.',
  },
  {
    q: 'Mera gaon ki mandi eNAM se judi hai ya nahi, kaise pata karoon?',
    a: 'enam.gov.in par "Mandi" ya "Stakeholders" section mein state-wise integrated mandi list di hui hai. Wahan apna state aur district select karke check kar lo. App mein bhi yahi list milti hai.',
  },
  {
    q: 'Registration ke baad login nahi ho raha, kya karoon?',
    a: 'Pehle registered mobile par aaya OTP/temporary password check karo. Password bhool gaye toh "Forgot Password" se reset karo. Phir bhi issue ho toh apni mandi ke eNAM help desk par jao ya helpline 1800 270 0224 par call karo.',
  },
  {
    q: 'eNAM aur normal mandi mein kya fark hai?',
    a: 'Normal mandi mein sirf wahan maujood vyapari bid karte hain. eNAM par online bidding hoti hai — dusre district, dusre state ke buyers bhi bid kar sakte hain. Zyada buyers = behtar rate. Payment bhi seedha bank mein, cash ka jhanjhat nahi.',
  },
  {
    q: 'Kya FPO bhi eNAM par bech sakta hai?',
    a: 'Haan — eNAM par FPO/FPC ka alag registration module hai. FPO apne members ki upaj aggregate karke collection centre se hi trade kar sakta hai, har kisan ko mandi jaane ki zaroorat nahi. Chhote kisano ke liye FPO ke through bechna aksar behtar deal hota hai — volume zyada, bargaining power zyada.',
  },
  {
    q: 'Bid pasand na aaye toh kya fasal wapas la sakte hain?',
    a: 'Haan. Sabse oonchi bid aapko dikhai jaati hai — accept karna aapki marzi hai. Rate pasand nahi toh mana kar do; fasal aapki hai, aap wapas le ja sakte ho ya agle din phir lot lagwa sakte ho. Koi penalty nahi hai. Bas yeh dekho ki roz ke transport ka kharcha na badh jaye.',
  },
  {
    q: 'eNAM helpline number kya hai?',
    a: 'Toll-free helpline 1800 270 0224 hai. Iske alawa har integrated mandi mein eNAM help desk / Mandi Analyst hota hai jo registration se lekar trade tak har step mein free madad karta hai. Email support enam.helpdesk@gmail.com par bhi hai.',
  },
];

export default function EnamRegistrationKaiseKare({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">eNAM Registration</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            eNAM Registration 2026: Online Mandi Mein Fasal Kaise Bechein — Step-by-Step Guide
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span><Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(article.publishedTime)}</span>
            <span>Last Updated: 5 August 2026</span>
            <span>9 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">
        <div className="my-2 mb-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/loan-mandi-pashupalan/enam-registration-kaise-kare/anaj-dheri.webp"
            alt="Mandi mein anaj ki dheri aur vyapari — eNAM se yahi boli online ho jaati hai"
            width={1200}
            height={670}
            className="w-full h-auto object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        <DB>
          <strong>Ek line mein poori kahani:</strong>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>eNAM registration <strong>bilkul free</strong> — enam.gov.in par ya mandi ke help desk par; documents sirf 3 (Aadhaar, bank passbook, mobile).</li>
            <li>Fasal apni hi mandi le jaani hai — sirf <strong>boli online</strong> hoti hai; zyada buyers, behtar rate, payment seedha bank mein.</li>
            <li>1,400+ mandiyan judi hain; 11 Feb 2024 tak <strong>1.77 crore+ kisan</strong> registered (Ministry of Agriculture ke figures).</li>
            <li>Sabse zyada fayda anaaj-dalein-tilhan-masale walon ko — grading standardised hai. <strong>Abhi enam.gov.in par check karo</strong> ki aapki mandi judi hai ya nahi.</li>
          </ul>
        </DB>

        <p className="text-sm text-[var(--color-text)] mb-6">
          <strong>Last Updated: 6 August 2026</strong>
        </p>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          Mandi ka purana scene sabko pata hai — fasal utaari, aur wahi chaar-paanch vyapari aapas mein dekh kar
          rate tay. Na competition, na chaara. eNAM isi ganth ko kholta hai: aapki fasal wahi mandi mein padi
          rehti hai, par boli online hoti hai, aur usme doosre zile-doosre state ke buyers bhi utarte hain.
        </p>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
          Registration ka kharcha zero, kagaz sirf teen. Neeche registration se le kar gate entry, boli
          aur payment tak ka poora rasta hai — aur woh atakne wali jagahein bhi jo pehli baar walon ko pareshan
          karti hain.
        </p>

        <SH>eNAM Hai Kya Cheez</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Ek sarkari online trading portal — PM Modi ne 14 April 2016 ko pilot launch kiya tha — jisse ab 1,400 se
          zyada APMC mandiyan judi hain. 11 February 2024 tak 1.77 crore se zyada kisan aur 2.53 lakh se zyada
          trader register ho chuke the, aur December 2023 tak platform par ₹31.9 lakh crore ka trade ho chuka tha
          (Ministry of Agriculture ke aankde, MyNation ki report ke according). Kaam karne ka tareeqa simple hai — fasal aap apni hi mandi le jaate ho, bas boli kagaz-kalam ki
          jagah online lagti hai, aur bid karne wala Jaipur mein bhi baitha ho sakta hai, Indore mein bhi.
        </p>

        <IB>
          <strong>Fayda seedha:</strong> Zyada buyers → competition → behtar rate. Aur payment seedha bank
          account mein — cash ka, udhaar ka koi chakkar nahi.
        </IB>

        <Image
          src="/images/articles/loan-mandi-pashupalan/enam-registration-kaise-kare/documents.webp"
          alt="eNAM registration ke teen documents — Aadhaar, bank passbook aur zameen ke kagaz"
          width={1200}
          height={670}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        <SH>Teen Kagaz — Bas</SH>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--color-bg-alt)]">
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Document</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Kyun Chahiye</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Aadhaar Card</td>
                <td className="border border-[var(--color-border)] p-3">Identity verification ke liye</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">Bank Passbook / Cancelled Cheque</td>
                <td className="border border-[var(--color-border)] p-3">Payment seedha isi account mein aayegi</td>
              </tr>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Active Mobile Number</td>
                <td className="border border-[var(--color-border)] p-3">OTP, login aur trade alerts ke liye</td>
              </tr>
            </tbody>
          </table>
        </div>

        <WB>
          Kuch states mein zameen ke records (khasra/khatauni) bhi mange ja sakte hain. Apni mandi ke eNAM
          help desk se confirm kar lena — state ke hisaab se thoda fark hota hai.
        </WB>

        <Image
          src="/images/articles/loan-mandi-pashupalan/enam-registration-kaise-kare/csc-registration.webp"
          alt="CSC par eNAM registration form bharta hua kisan"
          width={1200}
          height={670}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        <SH>Registration Aise Hoga</SH>
        <StepList>
          <SI n={1}>
            <strong>enam.gov.in kholo</strong> aur homepage par <strong>"Registration"</strong> link par click karo.
          </SI>
          <SI n={2}>
            Registration type mein <strong>"Farmer"</strong> select karo.
          </SI>
          <SI n={3}>
            Apni details bharo — naam, state, district, apni <strong>APMC mandi</strong> (jahan fasal le jaoge),
            mobile number aur email (optional).
          </SI>
          <SI n={4}>
            <strong>Bank details</strong> bharo — account number, IFSC. Yahan galti mat karna, payment isi account mein aayegi.
          </SI>
          <SI n={5}>
            Aadhaar aur bank passbook ki <strong>photo/scan upload</strong> karo aur form submit kar do.
          </SI>
          <SI n={6}>
            Registered mobile/email par <strong>login ID aur temporary password</strong> aayega. Login karke password change kar lo.
          </SI>
          <SI n={7}>
            Aapki select ki hui mandi aapka record <strong>verify</strong> karegi — uske baad aap trade ke liye ready ho.
          </SI>
        </StepList>

        <GovLink
          href="https://enam.gov.in/web/"
          label="eNAM Portal Par Registration Karo"
          guide="Mandi Bhav Bhi Dekh Lo"
          guideHref="/articles/mandi-bhav-today"
          portalName="enam.gov.in"
        />

        <IB>
          <strong>Online nahi kar pa rahe?</strong> Seedha apni mandi jao — har integrated mandi mein eNAM
          help desk hota hai jahan staff free mein registration kar deta hai. eNAM mobile app se bhi
          registration ho jata hai.
        </IB>

        <Image
          src="/images/articles/loan-mandi-pashupalan/enam-registration-kaise-kare/gate-tulai.webp"
          alt="Mandi gate entry par fasal ki tulai — yahin se eNAM lot banta hai"
          width={1200}
          height={670}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        <SH>Bechne Ka Din — Gate Se Payment Tak</SH>
        <StepList>
          <SI n={1}>
            <strong>Gate Entry:</strong> Fasal mandi le jao. Gate par entry hoti hai aur aapko lot number milta hai.
          </SI>
          <SI n={2}>
            <strong>Quality Check (Assaying):</strong> Fasal ke samples ki quality jaanchi jati hai — moisture,
            grade waghera. Quality report online buyers ko dikhti hai.
          </SI>
          <SI n={3}>
            <strong>Online Bidding:</strong> Buyers (local + doosre districts/states ke) aapke lot par online bid karte hain.
          </SI>
          <SI n={4}>
            <strong>Bid Accept Karo:</strong> Sabse achhi bid aapko dikhai jati hai — accept karna ya nahi, aapki marzi.
            Rate pasand nahi toh mana kar sakte ho.
          </SI>
          <SI n={5}>
            <strong>Weighment + Payment:</strong> Bid accept hui toh tulai hoti hai aur payment seedha aapke
            bank account mein aa jati hai — zyada tar 1-2 working days mein.
          </SI>
        </StepList>

        <SH>Kaun Si Fasal Par Kitna Fayda</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          eNAM par 200+ commodities notified hain — anaaj (gehu, dhaan, makka, bajra), dalein (chana, arhar,
          moong, masoor), tilhan (sarson, soyabean, moongfali), masale (jeera, dhania, haldi, mirch), aur kai
          fal-sabziyan bhi. Aapki mandi mein kaun si commodities trade hoti hain, yeh mandi ke hisaab se alag
          hai — help desk se list mil jaati hai.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Ek practical pattern samajh lo — <strong>jitni standardised fasal, utna zyada eNAM ka fayda</strong>.
          Gehu, chana, sarson, jeera jaisi fasal ki grading saaf-saaf ho jaati hai, isliye door ke buyers
          report dekh kar bharose se bid karte hain aur competition asli hota hai. Tamatar jaisi jaldi kharab
          hone wali sabzi mein door ka buyer kam interest leta hai — wahan local hi khareedta hai. Matlab:
          anaaj-dalein-tilhan-masale walo ke liye eNAM registration lagbhag zaroori hai; sabzi walo ke liye
          bhi useful hai, par expectations realistic rakho. MSP wali fasalon ka hisaab{' '}
          <Link href="/articles/msp-list-2026-27" className="underline font-bold">MSP List 2026-27</Link> aur{' '}
          <Link href="/articles/gehu-ka-bhav-msp-vs-mandi" className="underline font-bold">Gehu: MSP vs Mandi</Link>{' '}
          guides mein detail se hai.
        </p>

        <Image
          src="/images/articles/loan-mandi-pashupalan/enam-registration-kaise-kare/enam-app.webp"
          alt="Khet ke kinare mobile par bhav check karta kisan — eNAM app se mandi jeb mein"
          width={1200}
          height={670}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        <SH>App Wala Rasta — Zyada Tar Logon Ke Liye Yahi Sahi</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Portal ke alawa eNAM ka official mobile app (Play Store par “eNAM” — publisher: Small Farmers
          Agribusiness Consortium) bhi hai, aur sach kahein toh zyada tar kisano ke liye app hi asaan rasta hai.
          App se registration ho jaata hai, apne lot ka status dikhta hai, bidding ki progress live milti hai,
          aur payment ka update bhi. Hindi samet kai bhashayein support hoti hain.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          App ka ek aur kaam ka feature — <strong>nearby mandiyon ke rates</strong>. Fasal le jaane se pehle
          2-3 mandiyon ka bhav compare karna 5 minute ka kaam hai, aur kai baar 40-50 km door wali mandi ka
          rate transport nikaal kar bhi behtar baithta hai. Rates check karne ke aur bhi tareeqe humne{' '}
          <Link href="/articles/mandi-bhav-app-comparison" className="underline font-bold">Mandi Bhav Apps
          Comparison</Link> mein detail se likhe hain.
        </p>

        <Image
          src="/images/articles/loan-mandi-pashupalan/enam-registration-kaise-kare/trade-loading.webp"
          alt="Mandi se doosre state ke buyer ke liye truck loading — inter-state trade ka asli fayda"
          width={1200}
          height={670}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        <IB>
          <strong>Asli misaal, record ke saath:</strong> Andhra Pradesh ke Kurnool district ki <strong>Adoni mandi</strong>
          — March 2017 se eNAM par — desh ki pehli mandi bani jisko platform par <strong>1 crore bids</strong> mile
          (11.34 lakh lots par, 20 Jan 2023 tak; average 9 bids per lot). Wahan assaying lab, price display boards
          aur eNAM-integrated weighing machines lagi hain — tulai ka data seedha portal par jaata hai, haath ki
          gadbad ka chance khatam. Poori kahani eNAM ke official blog par hai:{' '}
          <a href="https://enam.gov.in/web/blog" target="_blank" rel="noopener noreferrer" className="underline font-bold">enam.gov.in/web/blog</a>.
          Matlab: jahan mandi ne system theek lagaya, wahan competition sach mein hota hai.
        </IB>

        <SH>Asli Fayda Kahan Hai — Inter-Mandi Aur Inter-State</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          eNAM ke teen level hote hain, aur yeh samajhna zaroori hai kyunki fayda level ke saath badhta hai.
          Pehla — <strong>intra-mandi</strong>: aapki apni mandi ke vyapari online bid karte hain; transparency
          badhti hai par buyers wahi purane. Doosra — <strong>inter-mandi</strong>: aapke state ki doosri
          mandiyon ke licensed buyers bhi bid kar sakte hain. Teesra — <strong>inter-state</strong>: doosre
          states ke buyers bhi. Jitna bada pool, utna behtar rate milne ka chance.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Ab woh baat, jo koi brochure nahi batayega — inter-state trade abhi bhi bahut chhota hai. Financial
          Express ki April 2025 report ke according FY25 mein inter-state eNAM trade sirf ₹21 crore ka tha (FY24 ke
          ₹42 crore se aadha), jabki state ke andar inter-mandi trade ₹1,769 crore aur total turnover ₹80,262 crore
          raha (<a href="https://www.financialexpress.com/policy/economy-enam-remains-local-inter-state-trade-minimal-halves-in-fy25-3817271/" target="_blank" rel="noopener noreferrer" className="underline font-bold">source: Financial Express</a>).
          Matlab door ke state ka buyer milna abhi exception hai, rule nahi — asli fayda apni mandi mein transparent
          bidding aur seedha bank payment ka hai. Expectations wahi rakho.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Practical baat: har mandi mein teeno levels active nahi hote — yeh state government ke integration
          par depend karta hai. Apni mandi ke help desk se seedha pucho: <em>“yahan inter-mandi/inter-state
          trade chalu hai ya nahi?”</em> Agar chalu hai, toh assaying (quality report) ka role aur bada ho
          jaata hai — door ka buyer aapki fasal aankh se nahi dekh sakta, woh report dekh kar hi bid karta
          hai. Isliye saaf-suthri, achhi grade ki upaj ka seedha matlab hai zyada door tak ke buyers aur
          behtar bids.
        </p>
        <WB>
          Logistics ka dhyan raho — inter-state deal mein fasal ki delivery ka intezam buyer aur mandi ke
          system se hota hai, lekin tulai aur handover aapki mandi mein hi hota hai. Aapko apni fasal kahin
          aur nahi le jaani — bas mandi tak. Yeh galatfehmi kai kisano ko rokti hai ki “doosre state ka
          buyer mila toh maal wahan pahunchana padega” — nahi padta.
        </WB>

        <SH>Jahan Log Atakte Hain — Aur Nikalne Ka Rasta</SH>
        <StepList>
          <SI n={1}><strong>OTP nahi aa raha:</strong> network check karo, 2-3 minute ruko, phir resend. Number Aadhaar se linked ho toh process smooth rehta hai. Baar-baar fail ho toh mandi help desk se registration karwa lo — wahi sabse tez rasta hai.</SI>
          <SI n={2}><strong>Bank detail galat bhar gayi:</strong> login karke profile mein bank details update karo ya help desk par passbook le jao. Payment atakne ki sabse badi wajah galat IFSC/account number hi hai — do baar check karke bharo.</SI>
          <SI n={3}><strong>Mandi verify nahi kar rahi:</strong> registration ke baad record aapki chuni hui APMC ke paas jaata hai. 2-3 din se zyada latke toh mandi office mein Mandi Analyst se milo — aam taur par usi din verify ho jaata hai.</SI>
          <SI n={4}><strong>Assaying report se sehmat nahi:</strong> sample ke saamne dobara jaanch ki request kar sakte ho. Moisture zyada nikle toh fasal ko aur sukha kar agle din lot lagana behtar hai — gili upaj par bid hamesha kam aati hai.</SI>
          <SI n={5}><strong>Payment nahi aayi:</strong> trade ID le kar mandi help desk ya helpline 1800 270 0224 par baat karo. Zyada tar cases mein wajah bank detail ki galti ya account inactive hona hota hai.</SI>
        </StepList>

        <SH>Purani Mandi Banaam eNAM</SH>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--color-bg-alt)]">
                <th className="border border-[var(--color-border)] p-3 text-left font-black"></th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Normal Mandi</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">eNAM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Buyers</td>
                <td className="border border-[var(--color-border)] p-3">Sirf local vyapari</td>
                <td className="border border-[var(--color-border)] p-3">Pura desh — online bidding</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">Rate</td>
                <td className="border border-[var(--color-border)] p-3">Kam competition, dabav mein bikri</td>
                <td className="border border-[var(--color-border)] p-3">Zyada competition, transparent bids</td>
              </tr>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Payment</td>
                <td className="border border-[var(--color-border)] p-3">Cash/udhaar, kabhi kabhi late</td>
                <td className="border border-[var(--color-border)] p-3">Seedha bank account mein</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">Quality ka record</td>
                <td className="border border-[var(--color-border)] p-3">Aankh se andaza</td>
                <td className="border border-[var(--color-border)] p-3">Assaying report online</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Pehla Kaam: Apni Mandi Ka Naam List Mein Dhoondho</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            eNAM registration ka faayda poora aapki mandi par tika hai, aapke form par nahi. Agar aapki local
            mandi 1,400+ integrated mandis wali list mein nahi hai, toh ID ban jayegi par online bidding
            aapke lot par nahi khulegi — kaagaz sahi, nateeja zero.
          </p>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
            Isliye order ulta rakho: pehle <strong>enam.gov.in ki mandi list</strong> mein apna APMC dhoondho,
            phir 3 documents lekar 10-15 minute ka registration karo. Mandi list mein hai toh ID us din se
            kaam ki hai; nahi hai toh nazdeeki integrated mandi ka rate compare karke tay karo ki maal wahan
            le jaana transport kharch ke baad bhi bachta hai ya nahi.
          </p>
        </div>

        <SH>Aapke Sawaal</SH>
        <FAQBlock faqs={FAQS_DATA} />

        <SH>Sources</SH>
        <ul className="text-sm text-[var(--color-text-muted)] space-y-2 mb-6 list-disc pl-5">
          <li>
            eNAM — National Agriculture Market official portal & blog (Adoni mandi case).{' '}
            <a href="https://enam.gov.in/web/" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">enam.gov.in</a>
          </li>
          <li>
            Financial Express — eNAM inter-state trade reality, FY25 analysis.{' '}
            <a href="https://www.financialexpress.com/policy/economy-enam-remains-local-inter-state-trade-minimal-halves-in-fy25-3817271/" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">financialexpress.com</a>
          </li>
        </ul>

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={article.modifiedTime} bioKey="EnamRegistrationKaiseKare" />
        <BottomNav extraLinks={[
          { href: '/articles/mandi-bhav-today', l: 'Aaj Ka Mandi Bhav' },
          { href: '/articles/msp-list-2026-27', l: 'MSP List 2026-27' },
          { href: '/articles/category/mandi', l: 'Market Rates' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
