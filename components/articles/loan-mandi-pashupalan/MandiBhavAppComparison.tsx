'use client';

import Link from 'next/link';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const RELATED = [
  { slug: 'mandi-bhav-today', title: 'Aaj Ka Mandi Bhav', emoji: '📊' },
  { slug: 'enam-registration-kaise-kare', title: 'eNAM Registration Guide', emoji: '🖥️' },
  { slug: 'msp-list-2026-27', title: 'MSP List 2026-27', emoji: '📋' },
  { slug: 'gehu-ka-bhav-msp-vs-mandi', title: 'Gehu Ka Bhav: MSP vs Mandi', emoji: '🌾' },
  { slug: 'sabzi-bhav-guide-pyaz-aloo-tamatar', title: 'Sabzi Bhav Guide', emoji: '🥔' },
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Online Apply', emoji: '💳' },
];

const FAQS_DATA = [
  {
    q: 'Sabse accurate mandi bhav kaunsa app deta hai?',
    a: 'Sarkari sources (eNAM app aur AgMarknet) ka data mandi committee ke records se aata hai, isliye woh sabse bharosemand hai — bas usme thoda delay ho sakta hai. Private apps tez lagte hain lekin unka source hamesha saaf nahi hota. Best tareeka: sarkari data ko base banao aur bade sauda se pehle apni mandi ke aadhati se phone par cross-check karo.',
  },
  {
    q: 'Kya yeh sab apps free hain?',
    a: 'Sarkari apps (eNAM, Kisan Suvidha, mKisan/UMANG) bilkul free hain — na registration fee, na subscription. Private apps ka basic bhav dekhna aam taur par free hota hai; kuch apps trading, advisory ya premium features par paisa lete hain. Bhav dekhne ke liye kisi ko paisa dene ki zaroorat nahi.',
  },
  {
    q: 'App mein mera mandi ka rate hi nahi dikh raha, kyun?',
    a: 'Do wajah ho sakti hain — ya toh aapki mandi eNAM/AgMarknet se integrated nahi hai, ya us din mandi ne data report nahi kiya. Chhoti mandiyon ke saath yeh aam hai. Aise mein sabse nazdeeki badi mandi ka rate dekho — usi ke aas-paas aapka local rate banta hai.',
  },
  {
    q: 'Aaj ka bhav aur app ka bhav alag kyun hota hai?',
    a: 'App par zyada tar pichhle trading session ka reported data hota hai — modal price, min-max range. Aaj ki boli us din ki aavak (arrival), quality aur buyers par depend karti hai. Isliye app ka number ko "aas-paas ka anchor" samjho, exact guarantee nahi.',
  },
  {
    q: 'Modal price ka matlab kya hai?',
    a: 'Ek din mein mandi mein ek fasal ke kai sauda hote hain, alag-alag rate par. Modal price woh rate hai jis par sabse zyada sauda hue — yaani "aam rate". Min price sabse kamzor lot ka aur max price sabse achhi quality ka hota hai. Apni fasal ki quality ke hisaab se in teeno ke beech apna andaza lagao.',
  },
  {
    q: 'Kya app se hi fasal bech bhi sakte hain?',
    a: 'eNAM par registration ke baad online bidding mein fasal bik sakti hai (upaj mandi le jaani padti hai assaying ke liye). Kuch private platforms buyers se seedha connect karte hain. Sirf bhav dekhne wale apps par bikri nahi hoti. eNAM se bechne ka poora process humne alag guide mein likha hai.',
  },
  {
    q: 'Bina smartphone ke mandi bhav kaise pata karein?',
    a: 'Kisan Call Centre (1800-180-1551) par phone karke apni fasal aur mandi ka bhav puchh sakte ho — yeh free hai. mKisan ke SMS advisory se bhi rate milte hain. Aur sabse purana tareeka aaj bhi kaam karta hai: apni mandi ke aadhati ka number save rakho.',
  },
  {
    q: 'Ek hi app kaafi hai ya do-teen rakhne chahiye?',
    a: 'Do kaafi hain — ek sarkari (eNAM ya AgMarknet data ke liye) aur ek jo aapke ilaake ki mandiyon ko achha cover karta ho. Zyada apps rakhne se data nahi badhta, sirf notification ka shor badhta hai.',
  },
];

export default function MandiBhavAppComparison({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Mandi Bhav Apps</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Best Mandi Bhav Apps 2026: Kaunsa App Sahi Rate Batata Hai — Sarkari vs Private, Poora Comparison
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
          Play Store par &ldquo;mandi bhav&rdquo; likho toh sau apps nikal aate hain — har ek ka dawa &ldquo;sabse accurate rate.&rdquo;
          Sach yeh hai ki inme se zyada tar apps ka data ek hi jagah se aata hai: sarkari mandi records. Fark sirf is
          baat ka hai ki kaun woh data kitni jaldi, kitna saaf, aur kitne kam ads ke saath dikhata hai.
        </p>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
          Is guide mein hum categories mein baant kar dekhenge — sarkari apps, private apps aur bina-app wale raaste —
          taaki aap do minute mein tay kar sako ki aapke phone mein kaunsa app rehna chahiye aur kaunsa sirf jagah
          gher raha hai.
        </p>

        <SH>🧠 Pehle Yeh Samjho — Rate Aata Kahan Se Hai</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Har mandi (APMC) mein din bhar ke sauda ka record banta hai — kaunsi fasal, kitni aavak, kis rate par biki.
          Yeh data sarkari system (AgMarknet aur eNAM network) mein report hota hai. Wahan se teen number nikalte
          hain: <strong>min price</strong> (sabse kamzor lot), <strong>max price</strong> (sabse achhi quality), aur{' '}
          <strong>modal price</strong> (jis rate par sabse zyada sauda hue).
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Zyada tar private apps yahi public data utha kar dikhate hain — apna koi alag source nahi hota. Isliye
          &ldquo;kaunsa app sabse accurate&rdquo; ka jawab seedha hai: jo sarkari data ko bina tod-marod ke, apni mandi ke
          hisaab se, time par dikha de. Baaki sab packaging hai.
        </p>

        <IB>
          <strong>Ek line ka rule:</strong> rate ka bharosa source par karo, app par nahi. App sirf khidki hai —
          data wahi sarkari record hai. Bada sauda karne se pehle apni mandi mein phone karke confirm karna aaj bhi
          sabse smart move hai.
        </IB>

        <SH>🏛️ Sarkari Apps — Base Yahi Rakho</SH>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--color-bg-alt)]">
                <th className="border border-[var(--color-border)] p-3 text-left font-black">App / Portal</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Kya Milta Hai</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Kiske Liye Best</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">eNAM</td>
                <td className="border border-[var(--color-border)] p-3">Integrated mandiyon ke live trade data, online bidding, bechne ki suvidha</td>
                <td className="border border-[var(--color-border)] p-3">Jo kisan eNAM mandi ke paas hai aur bechna bhi chahta hai</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">AgMarknet (portal)</td>
                <td className="border border-[var(--color-border)] p-3">Desh bhar ki mandiyon ka reported data — fasal, aavak, min/max/modal price</td>
                <td className="border border-[var(--color-border)] p-3">Rate ka record aur trend dekhne ke liye sabse bada database</td>
              </tr>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Kisan Suvidha</td>
                <td className="border border-[var(--color-border)] p-3">Mandi bhav + mausam + advisory + dealers, sab ek app mein</td>
                <td className="border border-[var(--color-border)] p-3">Jo ek hi sarkari app mein sab kuch chahta hai</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">UMANG / mKisan</td>
                <td className="border border-[var(--color-border)] p-3">Sarkari services ek jagah, SMS advisory bhi</td>
                <td className="border border-[var(--color-border)] p-3">Basic phone / kam data wale kisan</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Sarkari apps ki taakat data ka bharosa hai, kamzori interface aur speed. Kabhi-kabhi app dheema chalega,
          design purana lagega — lekin number wahi hai jo mandi ke record mein hai. Aur inme na ads ka shor hai, na
          aapka data bechne ka dhandha.
        </p>

        <SH>📱 Private Apps — Sahulat Zyada, Parakh Ke Saath Use Karo</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Private mandi bhav apps (Bijak, Krishi Network, IFFCO Kisan jaise agri apps, aur dher saare chhote
          &ldquo;Mandi Bhav&rdquo; apps) ki asli value teen cheezon mein hai — behtar design, apne ilaake ki mandiyon ke
          shortcuts, aur price alerts/notifications. Kuch platforms buyers se seedha connect bhi karte hain, jo
          vyapar ke liye kaam ka hai.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Lekin private app chunte waqt teen sawaal pucho:
        </p>
        <StepList>
          <SI n={1}><strong>Data ka source kya hai?</strong> Agar app nahi batata ki rate kahan se aa raha hai, toh us number par bada faisla mat lo.</SI>
          <SI n={2}><strong>Aapki mandi cover hai?</strong> Bade apps bhi har mandi cover nahi karte. Install karke pehle apni 2-3 nazdeeki mandiyan dhundho — nahi mili toh app aapke kaam ka nahi.</SI>
          <SI n={3}><strong>Ads aur permissions kitne hain?</strong> Jo app contacts aur location bewajah maange, ya har screen par ad dikhaye, woh aapka data hi uska product hai.</SI>
        </StepList>

        <WB>
          WhatsApp par ghoomne wale &ldquo;aaj ka bhav&rdquo; forwards aur unverified APK download se saavdhan. Rate purane ya
          manghadant ho sakte hain, aur bahar se download kiya app phone ke liye khatra hai. App sirf Play Store se
          lo, rate sirf bharosemand source se.
        </WB>

        <SH>📵 Bina App Ke — Yeh Raaste Bhi Kaam Karte Hain</SH>
        <StepList>
          <SI n={1}><strong>Kisan Call Centre — 1800-180-1551:</strong> free call, apni bhasha mein fasal aur mandi ka bhav pucho.</SI>
          <SI n={2}><strong>Aadhati ka phone number:</strong> sabse fresh rate aaj bhi mandi ke andar se hi milta hai. Do-teen aadhatiyon se baat karo taaki ek ki batayi price par nirbhar na raho.</SI>
          <SI n={3}><strong>SMS advisory (mKisan):</strong> registered kisano ko fasal aur ilaake ke hisaab se SMS aate hain — data kharch zero.</SI>
        </StepList>

        <SH>🎯 Toh Karna Kya Hai — Seedha Jawab</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Phone mein do cheezein rakho: <strong>ek sarkari source</strong> (eNAM app ya AgMarknet — bharose ke liye)
          aur <strong>ek app jo aapki local mandiyan sabse achhe se cover kare</strong> (sahulat ke liye). Bas.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Aur bhav dekhne ka tareeka bhi seekho — sirf aaj ka number mat dekho. Hafte bhar ka trend dekho (rate chadh
          raha hai ya gir raha hai), aavak dekho (aavak badhegi toh rate dabega), aur apne kharche ka ganit saath
          rakho. Kab bechna hai iska faisla in teeno se milkar hota hai — is par humne alag guides likhi hain:{' '}
          <Link href="/articles/gehu-ka-bhav-msp-vs-mandi" className="underline font-bold">Gehu: MSP vs Mandi</Link>{' '}
          aur <Link href="/articles/sabzi-bhav-guide-pyaz-aloo-tamatar" className="underline font-bold">Pyaz-Aloo-Tamatar
          Bhav Guide</Link>.
        </p>

        <DB>
          <strong>Ek aadat jo paisa banati hai:</strong> apni fasal ke season mein roz 2 minute nikal kar apni mandi
          ka modal price ek copy mein likho. Do hafte mein aapko woh pattern dikhne lagega jo kisi app ka
          notification nahi dikhata — aur bechne ka time aap khud pakad loge.
        </DB>

        <GovLink
          href="https://enam.gov.in"
          label="eNAM — National Agriculture Market"
          guide="Portal Kholo"
          portalName="enam.gov.in"
        />

        <SH>🖥️ eNAM Se Bechna Bhi Hai?</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Agar aapki mandi eNAM se judi hai toh sirf bhav dekhne se aage badho — registration karke online bidding
          ka fayda lo, jahan doosre district ke buyers bhi aapki fasal par boli lagate hain. Registration free hai
          aur process aasan — poora tareeka yahan hai:{' '}
          <Link href="/articles/enam-registration-kaise-kare" className="underline font-bold">eNAM Registration Kaise
          Kare</Link>.
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
