import Link from 'next/link';
import { SI, StepList, IB, WB, DB, SH, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { Yojana2026ArticleMeta } from '@/lib/yojana-2026-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const RELATED = [
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Online Apply Ka Poora Process' },
  { slug: 'KisanRinKahaSeLe2026', title: 'Kisan Rin Kahan Se Lein' },
  { slug: 'PmKisanRejectedStatusReApplyGuide', title: 'Rejected Status Ke Baad Kya Karein' },
];

const UPDATE_LOG = [
  {
    d: '18 Aug 2026',
    t: 'Maharashtra ki nayi Punyashlok Ahilyadevi Holkar Karjmafi Yojana ke pehle charan ki jankari jodi. Telangana wale section me saaf kiya ki wo scheme 2024 me poori ho chuki hai.',
  },
  {
    d: 'Agli update',
    t: 'Har 2 mahine. Jis state ka official notification aayega, wahi table me judega, announcement bhar par kuch nahi likha jaata.',
  },
];

const FAQS_DATA = [
  {
    q: 'Kya 2026 me koi national kisan karj mafi scheme chal rahi hai?',
    a: 'Nahi. Karz maafi states ka kaam hai, kendra ka nahi. Aakhri national waiver 2008 ka tha (ADWDRS), usse pehle 1990. "PM Kisan Karj Mafi Yojana form" dikhane wali site ka naam hi galat hai. Aisi koi central scheme nahi.',
  },
  {
    q: 'Karj mafi list me apna naam kahan dekhein?',
    a: 'Sirf apne state ke official portal par, aur wo bhi tab jab us state ki scheme actually chal rahi ho. Maharashtra ke liye mjpsky.maharashtra.gov.in, UP ke liye upkisankarjrahat.upsdc.gov.in, Telangana ke liye clw.telangana.gov.in. In teeno ke alawa jo bhi "list check karo" wali site mile, .in, .com, .org kuch bhi. Wo sarkari nahi hai. List nikalne ka koi charge nahi hota, aur naam dekhne ke liye OTP kabhi nahi maanga jaata.',
  },
  {
    q: 'Meri state me scheme nahi hai, KCC default ho gaya hai. Ab kya raasta hai?',
    a: 'Waiver ka intezaar sabse kharab option hai, kyunki uska koi bharosa nahi. Bank se do cheezein poochho: One Time Settlement (OTS) aur restructuring. OTS me baaki bacha amount ek baar me kam karke settle hota hai; restructuring me kist ki avadhi lambi ho jaati hai ya moratorium milta hai, khaaskar jab fasal kharab hui ho aur district me annawari/girdawari declare hui ho. Dono ka faisla branch aur zonal level par hota hai, isliye application likhit me do aur receiving lo.',
  },
  {
    q: 'Karj maaf ho gaya to CIBIL theek ho jaata hai?',
    a: 'Turant nahi. Entry credit report par kuch saal rehti hai. "Settled" aur "closed" me farq hota hai; aage loan lene par bank yahi dekhta hai. Waiver ke baad No Dues Certificate zaroor lo, aur 60-90 din baad apni report khud check karo.',
  },
];

function LogBlock() {
  return (
    <div className="mb-6 border-2 border-[var(--color-border)] rounded-2xl overflow-hidden bg-[var(--color-card)]">
      <div className="bg-[var(--color-bg-alt)] px-4 py-2.5 border-b border-[var(--color-border)]">
        <span className="text-xs font-bold text-[var(--color-text)]">Is page ka update log</span>
      </div>
      <ul className="p-4 space-y-2">
        {UPDATE_LOG.map((u) => (
          <li key={u.d} className="text-xs text-[var(--color-text-muted)] leading-relaxed">
            <strong className="text-[var(--color-text)]">{u.d}</strong>, {u.t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function KisanKarjMafiAllStates({ article }: { article: Yojana2026ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/yojana" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Yojana</Link>
            <span>/</span>
            <span className="text-white font-bold">Kisan Karj Mafi</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Kisan Karj Mafi 2026 — Kis State Me Sach Me Chal Rahi Hai
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span><Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(article.published)}</span>
            <span>Last Updated: {fmtDate(article.modified)}</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">
        <LogBlock />

        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Pehle wo baat, jo aapko kahin aur mushkil se milegi. <strong>&ldquo;Kisan Karj Mafi Yojana&rdquo;
          naam ki koi ek national scheme nahi hai.</strong> Na koi central portal hai jahan sab states ke
          kisan apna naam dhoondh sakein, na koi form jo bharne se karz maaf ho jaaye. Kheti ka karz maaf
          karna state ka faisla hai. Apne budget se, apne rules se, apni timing se.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Isliye sahi sawaal ye nahi hai ki &ldquo;karj mafi 2026 ki list kab aayegi&rdquo;. Sahi sawaal hai:{' '}
          <em>mere state me abhi koi scheme chal rahi hai ya nahi?</em> Neeche ka table isi ka jawab hai, aur
          usme sirf wo states hain jinke liye official notification, GR ya portal mil gaya. Jahan sirf bayaan
          hai, wahan saaf likha hai ki bayaan hai. Baaki states ka naam is table me is liye nahi hai ki
          unke liye kuch confirm nahi mila. Aur andaze se list lamba karna is page ka kaam nahi.
        </p>

        <SH>State-Wise Sthiti. Kya Chalu, Kya Band, Kya Sirf Bayaan</SH>
        <div className="my-5 overflow-x-auto border-2 border-[var(--color-border)] rounded-2xl">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--color-primary)] text-white">
                <th className="p-3 text-left">State</th>
                <th className="p-3 text-left">Scheme</th>
                <th className="p-3 text-left">Sthiti</th>
                <th className="p-3 text-left">Official Portal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[var(--color-card)]">
                <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">Maharashtra</td>
                <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">Punyashlok Ahilyadevi Holkar Shetkari Karjmafi Yojana. ₹2 lakh tak</td>
                <td className="p-3 border-b border-[var(--color-border)] text-xs font-bold text-green-700 dark:text-green-400">Chal rahi, charanbadh</td>
                <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">mjpsky.maharashtra.gov.in</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">Telangana</td>
                <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">Rythu Runa Mafi. ₹2 lakh tak</td>
                <td className="p-3 border-b border-[var(--color-border)] text-xs font-bold text-[var(--color-text-muted)]">Poori ho chuki (2024)</td>
                <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">clw.telangana.gov.in</td>
              </tr>
              <tr className="bg-[var(--color-card)]">
                <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">Uttar Pradesh</td>
                <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">Kisan Rin Mochan Yojana (2017). ₹1 lakh tak</td>
                <td className="p-3 border-b border-[var(--color-border)] text-xs font-bold text-[var(--color-text-muted)]">Purani scheme, chhoote case</td>
                <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">upkisankarjrahat.upsdc.gov.in</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">Tamil Nadu</td>
                <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">Sahkari fasal rin waiver — ₹75,000 tak</td>
                <td className="p-3 border-b border-[var(--color-border)] text-xs font-bold text-amber-700 dark:text-amber-400">Ghoshna, amal ke niyam aane hain</td>
                <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">State cooperation dept</td>
              </tr>
              <tr className="bg-[var(--color-card)]">
                <td className="p-3 text-xs font-medium text-[var(--color-text)]">Baaki states</td>
                <td className="p-3 text-xs text-[var(--color-text-muted)]">—</td>
                <td className="p-3 text-xs font-bold text-[var(--color-text-muted)]">Koi official notification nahi mila</td>
                <td className="p-3 text-xs text-[var(--color-text-muted)]">—</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6">
          Chhattisgarh ka naam is table me jaan-boojh kar nahi hai. Wahan Krishak Unnati Yojana me Kharif
          2026 se dalhan, tilhan, makka, millets aur kapas par ₹15,000 prati acre input sahayta di ja rahi
          hai. Ye madad hai, karj mafi nahi. Do bilkul alag cheezein hain, aur kai blogs inko mila dete hain.
        </p>

        <SH>Maharashtra. Filhal Sabse Badi Scheme, Aur Uska Ek Ajeeb Sa Fayda</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          2026 me asli kaam Maharashtra me hua. Budget 2026-27 me{' '}
          <strong>Punyashlok Ahilyadevi Holkar Shetkari Karjmafi Yojana</strong> ki ghoshna hui aur June 2026
          me isko manzoori mili, lagbhag <strong>₹36,585 crore</strong> ka aakaar. Isme do hisse hain:{' '}
          <strong>₹2 lakh tak ka bakaya fasal rin maaf</strong>, aur jinhone samay par karz chukaya unke liye{' '}
          <strong>₹50,000 ka protsahan</strong>. Bakaya ki cut-off date <strong>30 September 2025</strong>{' '}
          rakhi gayi hai.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Ab wo nuance jo sabse zyada galat likha jaata hai. Maharashtra ke karjmafi portal par saaf likha
          hai. <strong>&ldquo;arj karnyachi aavashyakta nahi&rdquo;</strong>, yaani{' '}
          <strong>koi form bharne ki zaroorat nahi hai</strong>. Bank ke record aur sarkari data se list
          banti hai. Iska matlab do baatein: pehla, jo site aapse &ldquo;karjmafi application&rdquo; bharwa
          rahi hai wo fraud hai. Doosra, aapka kaam form dhoondhna nahi. Aapka kaam ye check karna hai ki
          bank ne aapka record theek bheja hai ya nahi. Naam ki spelling, Aadhaar, khata number, aur ek hi
          parivaar ke do khaate, galti in chaar me se kisi ek me hoti hai.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Pehle charan me lagbhag 31 lakh kisan liye gaye hain, aur pehle un logon ko liya gaya jinka bakaya
          ₹2 lakh tak hai. Jinka karz isse zyada hai, unke liye One Time Settlement ka raasta rakha gaya hai
          — yaani zyada karz wale kisan ko poora maaf hone ka intezaar nahi karna chahiye, OTS ki baat bank
          se shuru kar deni chahiye.
        </p>
        <WB>
          Karjmafi ka paisa loan account me jaata hai, aapke savings khaate me nahi. Passbook me balance
          badhta hua dikhna zaroori nahi hai. Dekhne wali cheez loan account ka outstanding hai. Isi
          galatfehmi me kai kisan branch me bewajah jhagda kar aate hain.
        </WB>

        <SH>Telangana. Ye Scheme Ho Chuki Hai, Chal Nahi Rahi</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Telangana ki Rythu Runa Mafi aaj bhi sabse zyada search hone wali karj mafi hai, jabki wo{' '}
          <strong>2024 me poori ho chuki</strong>. Teen charan the, 18 July, 30 July aur 15 August 2024.
          Kul <strong>₹17,934 crore</strong> se lagbhag <strong>22.37 lakh</strong> kisano ke fasal rin maaf
          hue: pehle charan me ₹1 lakh tak wale 11,50,193 kisan, doosre me ₹1–1.5 lakh wale 6,40,823, aur
          teesre me ₹1.5–2 lakh wale 4,46,832.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Do rules isme dilchasp the, aur inhi se sabse zyada shikayatein aayi. Ek, parivaar ki pehchaan{' '}
          <strong>ration card</strong> se hui, isliye ek ghar me do adult kisano ke alag-alag karz hone par
          bhi limit ek hi parivaar ki maani gayi. Do, ek parivaar me kai loan hone par{' '}
          <strong>mahila ka loan pehle</strong> maaf kiya gaya. Ye scheme 12 December 2018 se 13 December
          2023 ke beech ke short-term fasal rin par lagu thi. Agar aap Telangana se ho aur aapka naam chhoot
          gaya tha, to nayi list ka intezaar mat karo, clw.telangana.gov.in par apna record dekho aur
          district agriculture office me likhit shikayat karo. Nayi scheme ka koi notification nahi hai.
        </p>

        <SH>UP Ka Sach. Purani Scheme, Naye Naam Se Bechi Ja Rahi Hai</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          UP me &ldquo;Kisan Karj Mafi Yojana 2026&rdquo; naam se jo cheez ghoom rahi hai, wo asal me{' '}
          <strong>Kisan Rin Mochan Yojana</strong> hai — jo <strong>2017</strong> me shuru hui thi. Uska
          daayra bhi tay hai: chhote aur seemant kisan (2 hectare tak), <strong>₹1 lakh tak</strong> ka fasal
          rin, aur karz <strong>31 March 2016</strong> tak bakaya hona chahiye. Yaani 2026 me naya loan
          lekar is scheme me aane ka sawaal hi paida nahi hota. Jo kuch hota hai wo sirf chhoot gaye ya
          vivadit purane cases ka niptara hai.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Ek practical baat. UP ka portal (upkisankarjrahat.upsdc.gov.in) bahut baar khulta hi nahi. Ye page
          likhte waqt bhi wo response nahi de raha tha. Isse ghabrane ki zaroorat nahi, aur na hi isko koi
          &ldquo;server par load kyunki nayi list aa gayi&rdquo; wali afwah ka saboot maanna chahiye. Portal
          na khule to seedha apni bank branch ya tehsil me pata karo, record wahin hai. Vistar se UP ke case
          par{' '}
          <Link href="/rajya-yojana/state-kisan-yojana-list-all-states-2026" className="underline font-bold">state yojana list wale page ka UP section</Link>{' '}
          dekh lena, usme district-level process likha hai.
        </p>

        <SH>Ye Sab Hota Kyun Hai. Do Minute Ka Background</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Karj mafi ka silsila naya nahi hai. 1990 me ARDRS aayi thi, jisme prati kisan ₹10,000 tak ki raahat
          thi aur kul kharcha ₹10,000 crore. 2008 me ADWDRS aayi. ₹52,500 crore, mukhya roop se 5 acre tak
          wale kisano ke liye. 2014 ke baad ye kaam states ke haath me chala gaya, aur alag-alag states ne
          milakar lagbhag <strong>₹2.5 lakh crore</strong> ki ghoshnaayein ki, 2016-17 ki GDP ka karib 1.4%.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          RBI ke ek internal working group ne 2019 me jo baat likhi, wo kisan ke liye kaam ki hai: waiver ki
          ghoshnaon aur state chunavon ke beech gehra rishta dikhta hai. Iska matlab ye nahi ki scheme jhooti
          hoti hai. Telangana aur Maharashtra dono me paisa asli gaya hai. Matlab sirf itna hai ki{' '}
          <strong>timing rajneetik hoti hai, zaroorat ke hisaab se nahi.</strong> Isliye apni poori planning
          waiver par tikana risky hai. Jo kisan 2019 se &ldquo;agle saal maaf ho jaayega&rdquo; soch kar kist
          rokta raha, uska interest badhta gaya aur khata NPA me chala gaya.
        </p>

        <SH>Fake List Wali Sites. Pattern Pehchano</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Karj mafi ke naam par chalne wala thagi ka dhandha ab kaafi safai se hota hai. Site sarkari jaisi
          dikhti hai, ashok stambh laga hota hai, Hindi me &ldquo;नई सूची जारी&rdquo; likha hota hai. Kuch
          nishaniyan yaad rakh lo:
        </p>
        <StepList>
          <SI n={1}><strong>Domain gov.in nahi hai.</strong> Sarkari portal hamesha gov.in ya nic.in par hota hai. karjmafi-list.in jaisa kuch bhi sarkari nahi hai.</SI>
          <SI n={2}><strong>OTP maanga jaa raha hai.</strong> List dekhne ke liye OTP ki zaroorat kabhi nahi padti. OTP dene ka matlab hai kisi aur ka registration ya payment approve karna.</SI>
          <SI n={3}><strong>Koi fees, &ldquo;processing charge&rdquo; ya QR code.</strong> ₹99, ₹200, kuch bhi. Sarkari list muft hai.</SI>
          <SI n={4}><strong>&ldquo;Form bharo, karz maaf hoga&rdquo;.</strong> Maharashtra jaisi scheme me to form hi nahi hota. Form ka lalach hi pakadne ka tareeka hai.</SI>
          <SI n={5}><strong>WhatsApp par PDF.</strong> &ldquo;Aapke gaon ki list&rdquo; wali PDF me aksar link hota hai jo APK download karwata hai. Wahi APK phone se OTP padhta hai.</SI>
        </StepList>
        <DB>
          Kisi bhi agent ko karj mafi karwane ke naam par paisa mat do. Bank record se list banti hai — beech
          me koi &ldquo;setting&rdquo; nahi hoti. Aur bank me kabhi bhi apna Aadhaar OTP kisi third party se
          share na karo, chahe wo apne ko CSC operator hi bataye.
        </DB>

        <SH>Scheme Nahi Hai To Kya Karein. Chaar Asli Raaste</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Jyaadatar kisan is page par is umeed me aate hain ki unka karz maaf hoga. Imaandaari se? State list
          me nahi hai to sambhavna kam hai. Par karz ke saath jeene ke raaste hain. Aur wo waiver se
          zyada bharosemand hain.
        </p>
        <StepList>
          <SI n={1}><strong>One Time Settlement (OTS)</strong>, jab khata NPA ho gaya ho. Bank ek baar me settle karne par kuch hissa chhod deta hai. Branch me likhit application do, aur settlement ke baad No Dues Certificate lena mat bhoolo.</SI>
          <SI n={2}><strong>Restructuring / rescheduling</strong>, fasal kharab hui ho aur district me girdawari ya annawari declare hui ho to KCC ko term loan me badalne ya moratorium dene ka provision hota hai. Ye maafi nahi hai, saans lene ka waqt hai.</SI>
          <SI n={3}><strong>Interest subvention</strong>, samay par chukane wale kisan ko fasal rin 4% par padta hai. Jo pehle se default me hai uske liye ye kaam ka nahi, par jo abhi chal raha hai uske liye har saal ka farq bada hai. Poora hisaab{' '}
            <Link href="/articles/KisanCreditCardOnlineApply2026" className="underline">KCC wale guide</Link> me hai.</SI>
          <SI n={4}><strong>Limit enhance karwana</strong>, kai baar dikkat karz ki nahi, kam limit ki hoti hai. Jameen ke hisaab se limit badhwane par sahukaar se udhaar lene ki majboori khatam hoti hai. Kahan se kaunsa rin sahi rehta hai, uska tulnatmak jawab{' '}
            <Link href="/articles/KisanRinKahaSeLe2026" className="underline">kisan rin kahan se lein</Link> me diya hai.</SI>
        </StepList>
        <IB>
          Ek chhoti si aadat bahut kaam aati hai. Bank me jo bhi application do, uski ek copy par branch ki
          receiving muhar lagwa lo. Jab case zonal office ya grievance me jaata hai, to tareekh ka saboot
          aapke haath me hona chahiye.
        </IB>

        <SH>Bank Se Baat Karne Ka Sahi Tareeka — Chahe Scheme Ho Ya Na Ho</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Karj mafi ki khabar sun kar branch jaane wale zyada tar log ek hi galti karte hain. Counter
          par jaakar poochhte hain &ldquo;mera karj maaf hua ki nahi?&rdquo; Iska jawab hamesha gol-mol
          milta hai. Sahi tareeka ye hai: pehle apne <strong>loan account ka statement</strong> nikalwao
          aur teen cheezein likh kar lao, outstanding raqam, loan ki sanction date, aur loan ka type
          (crop loan hai ya kuch aur). In teen ke bina koi bhi scheme me aapki patrata bata hi nahi sakta.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Statement haath me ho to baat seedhi hoti hai: &ldquo;mera crop loan is tareekh ka hai, itna
          outstanding hai. Scheme ke criteria me aata hai ya nahi?&rdquo; Jawab likhit me lena best
          hai, par branch aksat likhit dene se katrati hai. Tab kam se kam adhikari ka naam aur
          tareekh apni diary me likh lo. Baad me shikayat karni padi to yahi kaam aayega.
        </p>

        <SH>Agar Aapke State Ki Scheme Ghoshit Ho Jaaye To Pehle Ye Karo</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Ghoshna aur amal ke beech aksar kai mahine hote hain. Us beech me teen kaam kar lo. Pehla, apni
          bank passbook aur loan statement ki copy nikal lo, kyunki cut-off date wale outstanding par hi sab
          tay hota hai. Doosra. Aadhaar, khata aur jameen ke record me naam ek jaisa hai ya nahi, ye milao;
          list se naam chhootne ki sabse aam wajah spelling aur mismatch hoti hai. Teesra. GR ya government
          order ka number note kar lo, kyunki branch me baat karte waqt scheme ka number bolna aur &ldquo;TV
          par dekha tha&rdquo; bolna, dono ka asar bilkul alag hota hai.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Aur haan — karj mafi ke intezaar me chal rahi kist rokna sabse mehnga faisla hai. Kist rukti hai to
          interest chadhta hai, khata NPA me jaata hai, aur agla loan milna band ho jaata hai. Agar aapke
          paas notice aa chuka hai to us par alag se{' '}
          <Link href="/articles/hi/recovery-notice" className="underline">recovery notice wala page</Link>{' '}
          padh lo, usme jawab dene ka tareeka likha hai.
        </p>

        <FAQBlock faqs={FAQS_DATA} />

        <SH>Official Links Aur Sources</SH>
        <ul className="text-sm text-[var(--color-text-muted)] space-y-2 mb-6 list-disc pl-5">
          <li>
            Mahatma Jotirao Phule Shetkari Karjmukti Yojana. Govt. of Maharashtra, Co-operation Dept.{' '}
            <a href="https://mjpsky.maharashtra.gov.in" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">mjpsky.maharashtra.gov.in</a>
          </li>
          <li>
            Telangana Crop Loan Waiver. Agriculture Dept., Govt. of Telangana.{' '}
            <a href="https://clw.telangana.gov.in" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">clw.telangana.gov.in</a>
          </li>
          <li>
            UP Kisan Rin Mochan Yojana. Govt. of Uttar Pradesh.{' '}
            <a href="https://upkisankarjrahat.upsdc.gov.in" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">upkisankarjrahat.upsdc.gov.in</a>
          </li>
          <li>RBI Internal Working Group on Agricultural Credit (2019), farm loan waivers aur credit discipline par observations.</li>
        </ul>

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={article.modified} bioKey="KisanKarjMafiAllStates" />
        <BottomNav extraLinks={[
          { href: '/articles', l: 'Aur Guides Padhein' },
          { href: '/yojana', l: 'Nayi Yojana Guides' },
        ]} />
        <Disclaimer k="KisanKarjMafiAllStates" />
      </div>
    </>
  );
}
