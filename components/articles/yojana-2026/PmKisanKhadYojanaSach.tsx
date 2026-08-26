import Link from 'next/link';
import { IB, WB, DB, SH, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { Yojana2026ArticleMeta } from '@/lib/yojana-2026-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const RELATED = [
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Poori Guide. ₹6000 Wali Asli Scheme' },
  { slug: 'PmfbyCropInsurance2026', title: 'PMFBY Fasal Bima. Policy Kaise Le' },
  { slug: 'PmKisanBeneficiaryList2026', title: 'PM Kisan Beneficiary List Me Naam Check Karo' },
];

const FAQS_DATA = [
  {
    q: 'PM Kisan Khad Yojana me ₹11,000 kab aayenge?',
    a: 'Kabhi nahi. Is naam ki koi official central scheme exist hi nahi karti, na pmkisan.gov.in par zikr, na fert.nic.in par. ₹11,000 ka figure blogs ne PM Kisan ke ₹6,000 aur ek kalpanik ₹5,000 ko jodkar banaya hai. Registration karwane wali site data ya paisa lena chahti hai.',
  },
  {
    q: 'To kya khad par sarkar koi paisa deti hi nahi?',
    a: 'Deti hai. Bahut bada. Par kisan ke khaate me nahi. Subsidy fertilizer company ko jaati hai: urea aapko ₹242 me milta hai (45 kg bag, neem-coating/tax alag) jabki asli laagat ₹2,200 se upar. Fayda sasti bori hai, cash nahi. Isi liye "khaate me ₹11,000" wala dawa hi galat hai.',
  },
  {
    q: 'Khad Yojana ka form kisi site par dikha to kya karoon?',
    a: 'Kuch mat bharo. Na Aadhaar, na bank details, na OTP. Asli central scheme ka portal hamesha gov.in ya nic.in par hota hai; "pmkisankhadyojana" jaisi site private blog ya fraud page hai.',
  },
  {
    q: 'Phir kisan ko seedha paisa kaunsi scheme se milta hai?',
    a: 'Do confirmed raaste: PM Kisan Samman Nidhi (saal ke ₹6,000, teen kist, seedhe khaate me) aur PMFBY (fasal kharab hone par bima claim). Agent ki zaroorat nahi.',
  },
];

export default function PmKisanKhadYojanaSach({ article }: { article: Yojana2026ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/yojana" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Yojana</Link>
            <span>/</span>
            <span className="text-white font-bold">PM Kisan Khad Yojana Ka Sach</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Khad Yojana ₹11,000. Sach Kya Hai
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
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Seedha jawab: <strong>&ldquo;PM Kisan Khad Yojana&rdquo; naam ki koi alag central scheme
          officially exist nahi karti.</strong> Na pmkisan.gov.in par aisi kisi yojana ka zikr hai, na
          Department of Fertilizers (fert.nic.in) ki kisi list me. Aur khaate me ₹11,000 aane wali baat?
          Poori tarah banayi hui hai.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Ye article isliye likha kyunki har hafte koi na koi kisan ye poochta hai. Kisi ne WhatsApp par
          message dekha, kisi ne YouTube thumbnail par &ldquo;khaate me aa gaye ₹11,000&rdquo; padha. Search
          karne par upar wahi blogs milte hain jo is yojana ko asli batakar registration ka tareeka bhi
          samjha dete hain. Jis cheez ka koi portal hi nahi hai, uska tareeka. Chalo poori kahani samajhte
          hain: rumor aaya kahan se, khad par sarkar asal me kya deti hai, aur asli paisa kis scheme se
          milta hai.
        </p>

        <SH>₹11,000 Ka Hisaab Kisne Banaya?</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Formula bada simple hai, aur bilkul galat. PM Kisan Samman Nidhi se saal ke ₹6,000 milte hain — ye
          asli hai, sabko pata hai. Kuch blogs ne uske upar ₹5,000 ka ek kalpanik &ldquo;fertilizer
          subsidy&rdquo; amount joda aur total ₹11,000 bana diya. Kisi ne likha pehli kist ₹6,000 aur doosri
          ₹5,000. Kisi ne kharif-rabi me baant diya. Har blog ka hisaab alag hai. Kyunki source koi hai hi
          nahi.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Ek baat khud sochkar dekho. Agar sarkar sach me har kisan ko khad ke liye ₹5,000 cash deti, to iska
          budget lakho crore me jaata aur announcement pradhan mantri khud karte. TV par, akhbaar me,
          pmindia.gov.in par. Aisi koi announcement kabhi hui nahi. Jo scheme sirf blogs par ho aur kisi
          sarkari site par na ho, wo scheme nahi, content hai. Clicks ke liye likha gaya.
        </p>

        <SH>Khad Par Sarkar Asal Me Kya Deti Hai</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Ab asli baat, jo rumor se zyada kaam ki hai. Fertilizer subsidy India ke sabse bade sarkari
          kharchon me se hai. Farq itna hai ki ye paisa <strong>kisan ke khaate me nahi, fertilizer company
          ko</strong> jaata hai. Aap dukaan par jaate ho, Aadhaar se PoS machine par angootha lagate ho, aur
          bori subsidized rate par mil jaati hai. Company baad me sarkar se apna subsidy claim karti hai.
          Isko hi fertilizer DBT kehte hain. DBT naam hai, par transfer company ko hota hai.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Number dekhoge to samajh aayega subsidy kitni badi hai. Urea ki 45 kg bori aapko{' '}
          <strong>₹242</strong> ki milti hai (neem-coating aur tax alag se). Usi bori ki asli laagat —
          banane aur aap tak pahunchane ki, <strong>₹2,200 se ₹2,600</strong> ke beech baithti hai. Matlab
          har bori par sarkar ₹2,000 ke aas-paas de rahi hai. Ye raha wo &ldquo;khad ka paisa&rdquo; jo
          aapko milta hai. Cash me nahi, sasti bori me.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-[var(--color-border)] rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-[var(--color-bg-alt)] text-left">
                <th className="p-3 font-bold text-[var(--color-text)]">Urea (45 kg bori)</th>
                <th className="p-3 font-bold text-[var(--color-text)]">Rakam</th>
              </tr>
            </thead>
            <tbody className="text-[var(--color-text)]">
              <tr className="border-t border-[var(--color-border)]">
                <td className="p-3">Aap dukaan par dete ho (MRP)</td>
                <td className="p-3 font-bold">₹242</td>
              </tr>
              <tr className="border-t border-[var(--color-border)]">
                <td className="p-3">Asli laagat (production + transport)</td>
                <td className="p-3">₹2,200–2,600</td>
              </tr>
              <tr className="border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]">
                <td className="p-3 font-bold">Sarkar ka hissa (company ko subsidy)</td>
                <td className="p-3 font-bold">~₹2,000+ per bori</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          MRP se zyada koi dealer nahi le sakta. Ye kanoon hai. ₹242 wali bori ₹300 me? District agriculture
          officer se shikayat karo. Kharidte waqt PoS machine ki parchi lo; usme subsidy ka amount bhi
          chhapa hota hai — khud dikh jaayega ki sarkar aapki har bori par kitna de rahi hai.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          DAP aur potash ka system thoda alag hai. Wahan Nutrient Based Subsidy (NBS) chalti hai, jisme
          har nutrient (nitrogen, phosphorus, potash, sulphur) ke hisaab se subsidy tay hoti hai aur sarkar
          season-wise rates revise karti hai. Kisan ke liye matlab wahi: bori sasti milti hai, cash nahi
          milta. DAP ki 50 kg bori ka daam pichhle kai saal se ₹1,350 ke aas-paas stable rakha gaya hai —
          jabki international market me daam kai baar isse kaafi upar gaye. Wo antar bhi sarkar hi bhar
          rahi hai.
        </p>

        <SH>Dukaan Par Asal Me Kya Hota Hai. Angootha, Parchi, SMS</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Jo kisan pehli baar sun raha hai ki subsidy PoS machine se judi hai, uske liye poora scene: aap
          licensed dealer ke paas jaate ho, Aadhaar number batate ho ya card dete ho, machine par angootha
          lagate ho. Sale Aadhaar se verify hoti hai, tabhi subsidized rate lagta hai. Machine se parchi
          nikalti hai jisme bori ki quantity, aapka diya hua daam aur sarkar ki taraf se lagi subsidy —
          teeno likhe hote hain.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Department of Fertilizers ne iske upar SMS system bhi laga rakha hai. Kharid ke baad registered
          mobile par message aata hai jisme invoice number, dealer ka naam, quantity, aapka amount aur
          sarkar ka subsidy amount hota hai. Message aana matlab sale sarkari record me gayi. Message na
          aaye aur dealer parchi bhi na de, to samajh lo kuch gadbad hai. Wahi shikayat wala rasta pakdo.
          Fertilizer se judi shikayat ke liye Kisan Call Centre ka number 1800-180-1551 bhi kaam karta hai.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Iska ek matlab aur nikalta hai, jo rumor ko poori tarah kaat deta hai: subsidy ka poora system
          bori ki <em>sale</em> se juda hai, kisan ke bank khaate se nahi. Jab system me khaate me paisa
          bhejne ka intezaam hi nahi hai, to &ldquo;₹11,000 khaate me aayenge&rdquo; wali baat kahan se
          aayegi? Kahin se nahi. Isliye kisi bhi mahine, kisi bhi saal. Ye paisa aana hi nahi hai, kyunki
          aisa koi pipeline exist nahi karta.
        </p>

        <SH>Ye Rumor Har Saal Naya Kyun Ho Jaata Hai</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          &ldquo;Khad Yojana&rdquo; wale articles 2021 se chale aa rahe hain. Har saal wahi content, bas
          heading me saal badal diya jaata hai. 2024, 2025, ab 2026. Kuch blogs ne to &ldquo;Khad Yojana
          2.0&rdquo; tak bana diya. Pattern har fake scheme ka yahi hota hai: purana rumor, naya saal, nayi
          &ldquo;update&rdquo;. Kist ka season aate hi (jab PM Kisan ki asli kist aati hai) in articles ki
          traffic badh jaati hai, kyunki kisan waise hi paisa search kar raha hota hai.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          YouTube par ye aur tez chalta hai. Thumbnail par bada sa &ldquo;₹11,000 aa gaye, list me naam
          dekho&rdquo; aur video ke andar wahi PM Kisan beneficiary status check karne ka process, jo
          ₹6,000 wali asli scheme ka hai. Dekhne wale ko lagta hai scheme confirm ho gayi, kyunki video me
          sarkari portal dikh raha hai. Portal asli, scheme ka naam nakli — yahi trick hai. Isliye video ya
          article me portal dikhna kaafi nahi; ye dekho ki us portal par <em>us naam ki scheme</em> likhi
          hai ya nahi.
        </p>

        <SH>&ldquo;Khad Yojana Registration&rdquo; Wala Form Dikhe To?</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Yahan dhyan se. Jo cheez exist nahi karti, uska registration form kisi ke paas kaise ho sakta hai?
          Phir bhi kai sites &ldquo;PM Kisan Khad Yojana Apply Online&rdquo; ke naam se form chala rahi
          hain. Inka khel do tarah ka hai. Pehla: aapka Aadhaar, mobile, bank detail jama karke data bechna.
          Doosra, zyada khatarnaak: registration &ldquo;confirm&rdquo; karne ke naam par OTP maangna. Aur
          OTP diya to khaate se paisa gaya.
        </p>
        <WB>
          Koi bhi site jo &ldquo;Khad Yojana&rdquo; ke naam par form bharwa rahi hai, fees maang rahi hai,
          ya OTP poochh rahi hai. Wahan se turant nikal jao. Central scheme ka har asli portal{' '}
          <strong>gov.in</strong> ya <strong>nic.in</strong> par khatam hota hai. Blogspot, .com, .in wali
          &ldquo;yojana&rdquo; sites sarkari nahi hoti.
        </WB>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Ek pehchan aur. Asli scheme ki jankari me hamesha ek official portal, ek helpline aur ek
          notification number hota hai. Fake scheme ke articles me sirf &ldquo;jald aavedan karein&rdquo;
          type ki jaldi machayi hoti hai, aur source ke naam par doosre blogs ke links. Jab bhi shak ho, PIB
          Fact Check (X/Twitter par @PIBFactCheck) par scheme ka naam search kar lo, sarkari fact-check
          wahi karta hai.
        </p>

        <SH>Asli Paisa Kahan Hai. Ye Do Schemes Pakki Hain</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Rumor ke peeche bhaagne se accha, jo confirmed hai uska poora fayda lo.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          <strong>PM Kisan Samman Nidhi</strong>, saal ke ₹6,000, teen barabar kist, seedhe khaate me. Ye
          wahi scheme hai jiske naam ka sahara lekar khad wala rumor banaya gaya. Agar abhi tak registered
          nahi ho, ya kist atki hui hai, to{' '}
          <Link href="/articles/PmKisanMasterGuide2026" className="underline font-bold">PM Kisan ki poori
          guide</Link> se shuru karo, registration se lekar eKYC tak sab wahan hai. Naam list me hai ya
          nahi, ye{' '}
          <Link href="/articles/PmKisanBeneficiaryList2026" className="underline">beneficiary list guide</Link>{' '}
          se 2 minute me check ho jaata hai.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-6">
          <strong>PMFBY (fasal bima)</strong>, fasal kharab hui to claim ka paisa. Premium kisan ke hisse
          ka bahut kam hai, baaki sarkar bharti hai. Policy lene ka process{' '}
          <Link href="/articles/PmfbyCropInsurance2026" className="underline font-bold">PMFBY guide</Link>{' '}
          me hai, aur claim atka ho to{' '}
          <Link href="/yojana/fasal-bima-claim-status-check" className="underline">claim status wala
          article</Link> padho. In dono ke alawa aapke state ki apni schemes bhi hongi — par unhe hamesha
          state krishi vibhag ke portal se verify karke hi maano.
        </p>

        <IB>
          Chhota sa test yaad rakho: scheme asli hai ya nahi, ye jaanne ke liye uska naam +
          &ldquo;site:gov.in&rdquo; likhkar search karo. Sarkari portal par mila to asli. Sirf blogs par
          mila to samjho content hai, scheme nahi.
        </IB>

        <SH>Detail Fake Site Par Chali Gayi? Ab Ye Karo</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Bahut se log ye article tab padhte hain jab form bhar chuke hote hain. Ghabrao mat, par
          seedha dekho kya-kya diya tha. Sirf naam-gaon-mobile diya hai to bada nuksan nahi. Haan,
          ab aapke number par &ldquo;yojana ka paisa release karne&rdquo; wali fraud calls aa sakti
          hain. Aisi har call par ek hi niyam: OTP, ATM PIN, ya khaate ki detail kisi ko nahi. Call
          karne wala khud ko krishi vibhag ka adhikari bataye, tab bhi nahi.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Agar OTP de diya ya khaate se paisa kat gaya, ab minute ginti ke hain. Sabse pehle apne
          bank ke customer care ko call karke card/UPI block karwao. Uske turant baad{' '}
          <strong>1930</strong> par call karo. Ye cyber fraud ki national helpline hai. Ya{' '}
          <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">cybercrime.gov.in</a>{' '}
          par shikayat darj karo. Jitni jaldi report hogi, paisa freeze hone ke chances utne zyada.
          Transaction ka SMS, site ka naam, jo bhi yaad hai. Sab complaint me likho. Aur us din ke
          baad wo site kisi rishtedaar ko bhi forward mat karna; chain wahin todo.
        </p>

        <FAQBlock faqs={FAQS_DATA} variant="cards" />

        <SH>Ye Jaankari Kahan Se Aayi</SH>
        <ul className="text-sm text-[var(--color-text-muted)] space-y-2 mb-6 list-disc pl-5">
          <li>
            PM Kisan Samman Nidhi, official portal.{' '}
            <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">pmkisan.gov.in</a>
          </li>
          <li>
            Department of Fertilizers, Govt. of India, subsidy policy.{' '}
            <a href="https://www.fert.nic.in" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">fert.nic.in</a>
          </li>
          <li>
            PIB Fact Check — sarkari yojana rumors ki jaanch.{' '}
            <a href="https://pib.gov.in/factcheck.aspx" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">pib.gov.in/factcheck</a>
          </li>
        </ul>

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={article.modified} bioKey="PmKisanKhadYojanaSach" />
        <BottomNav extraLinks={[
          { href: '/articles', l: 'Aur Guides Padhein' },
          { href: '/articles/category/farming', l: 'Kheti Aur Yojana Articles' },
        ]} />
        <Disclaimer k="PmKisanKhadYojanaSach" />
      </div>
    </>
  );
}
