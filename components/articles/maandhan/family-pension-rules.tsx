import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, WB, DB, SH, GovLink, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { MaandhanArticleMeta } from '@/lib/maandhan-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const PUBLISHED = '2026-04-22T17:52:14+05:30';
const MODIFIED = '2026-08-02T13:47:26+05:30';

const FAQS_DATA = [
  {
    q: 'Nomination mein patni ka naam nahi hai, to kya claim reject ho jayega?',
    a: 'Reject nahi hoga. Legally wedded spouse ka haq scheme rules mein sabse upar hai. Lekin process lamba ho jata hai: Tehsil se Legal Heir Certificate ya court se succession certificate lana padta hai. Nominee sahi hone par settlement 1-2 mahine mein ho jata hai, bina iske 6 mahine se zyada bhi lag sakte hain. Isliye nomination aaj hi check karo.',
  },
  {
    q: 'Pati ke guzarne ke baad kya jama paisa aur sarkar ka share dono wapas milte hain?',
    a: 'Nahi. Yeh sabse badi galatfehmi hai. Agar aap scheme continue nahi karna chahti, to sirf kisan ka apna jama contribution + us par interest wapas milta hai. Sarkar ka matching share LIC ke pension fund mein hi rehta hai, woh kisi ko refund nahi hota. Pura corpus (dono share) sirf tab kaam aata hai jab scheme continue karke 60 par pension li jaye.',
  },
  {
    q: 'Surviving spouse ko ₹1,500 mahina kab tak milega?',
    a: 'Jab tak woh jeevit hain. Iski koi time limit nahi hai. Yeh tab lagu hota hai jab subscriber 60 ke baad, pension lete hue guzre. Shart bas itni hai ki spouse khud pehle se is scheme ki beneficiary na ho. Kuch jagah LIC ko har saal life certificate dena padta hai, warna payment ruk sakti hai.',
  },
  {
    q: 'Kisan ka bank account band ho chuka hai, to paisa kahan aayega?',
    a: 'Claim form mein claimant apna khud ka active account deta hai. Paisa wahi aata hai, deceased ke purane account mein nahi. Bas account chalu hona chahiye aur IFSC/account number bilkul sahi bhara ho. Ek digit ki galti pura claim atka deti hai.',
  },
  {
    q: 'Sirf 2-3 saal contribution diya tha, phir bhi kuch milega?',
    a: 'Haan. Jitna bhi kisan ne jama kiya hai. Chahe 6 mahine ka ho, utna contribution interest ke saath spouse ya nominee ko milega. Amount chhota hoga kyunki jama kam hua, lekin haq pura banta hai. Aur spouse chahe to baki contributions bhar kar scheme aage bhi chala sakti hai.',
  },
];

export default function FamilyPensionRules({ article }: { article: MaandhanArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/maandhan" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Maandhan Yojana</Link>
            <span>/</span>
            <span className="text-white font-bold">Family Pension Rules</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Kisan Pension Scheme</span>

          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PMKMY Family Pension Rules: Pati Ke Baad Kya Hoga? (2026)
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

        <p className="text-base text-[var(--color-text)] leading-relaxed mb-4 font-medium">
          Seedha jawab pehle: agar PM Kisan Maandhan (PMKMY) ka member <strong>60 saal ke baad</strong>, pension
          lete hue guzar jaye, to patni/pati ko zindagi bhar <strong>₹1,500 mahina</strong> (pension ka 50%)
          milta hai. Agar dehant <strong>60 se pehle</strong> hua, to spouse ke paas do raaste hain. Scheme
          khud aage chalana, ya kisan ka jama paisa interest ke saath wapas lena. Ab inhi dono raston ka
          poora hisaab-kitab dekhte hain.
        </p>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/maandhan/family-pension-rules/hero.webp"
            alt="Bank mein PM Kisan Maandhan family pension ke kagaz dekhti mahila"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Claim ka process samajh kar jaana adha kaam pehle hi kar deta hai
          </p>
        </div>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          Thoda background jinhe scheme nayi hai unke liye: PMKMY September 2019 mein shuru hui thi. Chhote
          aur seemant kisan (2 hectare tak zameen) 18 se 40 ki umar mein join karte hain, har mahine ₹55 se
          ₹200 tak jama karte hain, sarkar utna hi apna hissa milati hai, aur fund LIC sambhalti hai. 60 ke
          baad ₹3,000 mahina pension milti hai. Poori scheme ka intro alag article mein hai —{' '}
          <Link href="/articles/PmKisanMaandhanYojanaPension" className="underline font-bold">PM Kisan Maandhan ki puri guide yahan padho</Link>.
          Is page par sirf ek sawal ka jawab hai: member ke jaane ke baad parivar ka kya haq banta hai.
        </p>

        <SH>60 Ka Number Sab Kuch Tay Karta Hai</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Scheme ke rules mein death ke baad ka har faisla is ek baat par tikta hai — dehant pension shuru
          hone se pehle hua ya baad mein. Dono ke niyam bilkul alag hain, aur zyada tar confusion isi liye
          hota hai ki log dono ko mila dete hain.
        </p>

        <div className="my-6 rounded-xl overflow-hidden border border-[var(--color-border)] shadow-sm">
          <Image
            src="/images/articles/maandhan/family-pension-rules/process-flowchart.webp"
            alt="PMKMY mein 60 se pehle aur 60 ke baad death par kya milta hai - flowchart"
            width={800}
            height={400}
            className="w-full"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)]">
            Figure: dono scenarios ka process ek nazar mein
          </p>
        </div>

        <SH>Dehant 60 Ke Baad Hua (Pension Chal Rahi Thi)</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Yeh seedha case hai. Jo ₹3,000 mahina member ko mil raha tha, uska aadha. ₹1,500, legally wedded
          spouse ko unki puri zindagi milta rahega. Isi ko scheme ki bhasha mein family pension kehte hain.
          Do shartein yaad rakhna:
        </p>
        <ul className="list-disc pl-5 text-sm text-[var(--color-text)] space-y-2 mb-4">
          <li>Family pension <strong>sirf spouse</strong> ke liye hai. Bachhon ya kisi aur ko yeh monthly amount nahi milta.</li>
          <li>Agar spouse khud pehle se PMKMY member hain aur apni pension le rahi hain, to unhe family pension alag se nahi milegi, scheme guidelines mein yeh saaf likha hai.</li>
        </ul>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Log ye bhi puchte hain. Dono (member aur spouse) ke guzar jaane ke baad kya bacha hua
          paisa bachhon ko milega? Nahi. Rules ke hisaab se us case mein corpus wapas LIC ke pension fund
          mein chala jata hai. Yeh pension scheme hai, virasat wali FD nahi. Is farq ko samajhna zaroori hai.
        </p>

        <SH>Dehant 60 Se Pehle Hua. Do Raaste</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Yahan spouse ke paas choice hai, aur dono options ke apne fayde hain:
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          <strong>Rasta 1 — scheme aage chalao.</strong> Spouse baki bachi contributions bharti rahengi
          (jitne saal member ke 60 hone mein bache the, us hisaab se), aur due date par ₹3,000 mahina pension
          unke naam shuru ho jayegi. Jinke ghar mein regular thodi bhi aamdani hai, unke liye lambi race mein
          yahi rasta zyada paisa deta hai. Kyunki isi mein sarkar ka matching share bhi kaam aata hai.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          <strong>Rasta 2, exit karke paisa wapas lo.</strong> Spouse ko kisan ka <strong>apna jama
          contribution + us par interest</strong> ek saath mil jata hai. Dhyan se padho. Sirf kisan ka apna
          hissa. Sarkar ne jo barabar ka paisa milaya tha, woh refund nahi hota, woh pension fund mein hi
          rehta hai. Kai website is par galat likhti hain ki &ldquo;sarkar ka share bhi wapas milega&rdquo; —
          official rules mein aisa nahi hai. Interest ka hisaab fund ki kamai ya savings bank rate ke hisaab
          se hota hai, exact figure LIC settlement ke waqt batati hai.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Agar spouse hi nahi hain, to yahi jama-paisa-plus-interest wala refund enrolment ke waqt likhe gaye
          nominee ko milta hai. Refund aur withdrawal ke saare scenarios ka detail hisaab humne alag article
          mein kiya hai —{' '}
          <Link href="/maandhan/pm-kisan-maandhan-withdrawal-refund-rules" className="underline font-bold">withdrawal aur refund rules yahan dekho</Link>.
        </p>

        <DB>
          <strong>Ek line mein poora rule:</strong> 60 ke baad = spouse ko ₹1,500 mahina zindagi bhar.
          60 se pehle = scheme chalao aur puri pension lo, ya kisan ka jama paisa interest samet wapas lo.
          Sarkar ka share kabhi cash refund nahi hota.
        </DB>

        <SH>Kaun Kya Claim Kar Sakta Hai. Table Se Samjho</SH>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-xs border border-[var(--color-border)] rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-[var(--color-bg-alt)] text-left">
                <th className="p-2 font-black">Situation</th>
                <th className="p-2 font-black">Kya Milega</th>
                <th className="p-2 font-black">Kise Milega</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[var(--color-border)]">
                <td className="p-2 font-bold">Death 60 ke baad, pension chalu thi</td>
                <td className="p-2">₹1,500/mahina lifetime</td>
                <td className="p-2">Legally wedded spouse</td>
              </tr>
              <tr className="border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]">
                <td className="p-2 font-bold">Death 60 se pehle, spouse continue kare</td>
                <td className="p-2">₹3,000/mahina (baki contributions bharne ke baad)</td>
                <td className="p-2">Spouse, apne naam par</td>
              </tr>
              <tr className="border-t border-[var(--color-border)]">
                <td className="p-2 font-bold">Death 60 se pehle, spouse exit kare</td>
                <td className="p-2">Kisan ka jama contribution + interest</td>
                <td className="p-2">Spouse</td>
              </tr>
              <tr className="border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]">
                <td className="p-2 font-bold">Death 60 se pehle, spouse nahi hai</td>
                <td className="p-2">Jama contribution + interest</td>
                <td className="p-2">Registered nominee</td>
              </tr>
              <tr className="border-t border-[var(--color-border)]">
                <td className="p-2 font-bold">Member aur spouse dono nahi rahe</td>
                <td className="p-2">Corpus pension fund mein wapas</td>
                <td className="p-2">Koi nahi. Fund LIC ke paas</td>
              </tr>
            </tbody>
          </table>
        </div>

        <SH>Claim Kaise Karein. Kadam Dar Kadam</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Rules seedhe hain, lekin zameen par kaam kagaz ke sahi order par tikta hai. Maine dekha hai ki log
          pehle bank daudte hain aur wahan se nomination record dikhane wapas bheje jaate hain. Order ulta
          ho jata hai aur mahine kharab hote hain. Sahi tarika yeh hai:
        </p>

        <StepList>
          <SI n={1}><strong>Death certificate banwao:</strong> gram panchayat ya nagar nigam se. Yeh pehla aur mandatory kagaz hai — iske bina koi khidki nahi khulti. 2-3 copies rakho.</SI>
          <SI n={2}><strong>Maandhan record check karo:</strong> CSC par jaakar member ke Kisan Pension Account ki details nikalwao, nominee kaun hai, kitna contribution jama hai. Yahi ke record se aage ka rasta tay hoga.</SI>
          <SI n={3}><strong>Usi jagah jao jahan enrolment hua tha:</strong> claim usi CSC ya bank branch se process hota hai jahan se member ne join kiya tha. Koi bhi random branch file aage nahi badhayegi.</SI>
          <SI n={4}><strong>Survivor claim form bharo:</strong> deceased ki details, apni details, aur apna khud ka active bank account. Continue karna hai ya exit, form mein yahi choice bhi deni hoti hai, isliye pehle ghar mein soch kar jao.</SI>
          <SI n={5}><strong>Documents lagao:</strong> death certificate, apna Aadhaar, marriage proof (certificate ya joint ration card/voter list), member ka pension card ya enrolment receipt, aur cancelled cheque/passbook copy. Kuch states mein Tehsil se Legal Heir Certificate bhi manga jata hai. Apne district ka niyam CSC se puchh lo.</SI>
          <SI n={6}><strong>Receipt lo aur follow-up karo:</strong> file LIC ko jaati hai. Documents poore hon to settlement 1-2 mahine mein ho jata hai; kami ho to 6 mahine bhi lag jaate hain. Har visit ki receipt aur form ki photo phone mein save rakho.</SI>
        </StepList>

        <div className="my-6 rounded-xl overflow-hidden border border-[var(--color-border)] shadow-sm">
          <Image
            src="/images/articles/maandhan/family-pension-rules/claim-form.webp"
            alt="PMKMY survivor claim form ka bhara hua sample"
            width={800}
            height={600}
            className="w-full"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)]">
            Figure: survivor claim form, account number do baar check karke bharo
          </p>
        </div>

        <WB>
          <strong>Yeh kaam aaj karo, claim ke waqt nahi:</strong> member ke jeete-jee nomination check karwa
          lo. Shaadi ke baad bhi kai logon ke record mein pita ya bhai nominee bane rehte hain. Aur unke na
          rehne par patni ko succession certificate ke chakkar mein court-tehsil ghumna padta hai. CSC par
          nomination update 15 minute ka kaam hai. Bank account bhi active rakho, 2 saal bina transaction
          wala account dormant ho jata hai aur transfer fail hota hai.
        </WB>

        <SH>Kitna Paisa Banta Hai. Ek Misaal Se Samjho</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Exit wale raste mein amount ka andaza lagana ho to ganit seedha hai. Maan lo ek kisan ne 30 ki
          umar mein join kiya — us age par monthly contribution ₹105 hai. 12 saal tak bhara, yaani 42 ki
          umar mein dehant hua. Unka apna jama: ₹105 × 144 mahine = ₹15,120. Is par interest jud kar jo
          banta hai, wahi spouse ya nominee ko milta hai. Mota-mota ₹20,000-22,000 ke aas-paas baithta
          hai, exact figure LIC ke settlement letter mein aata hai. Sarkar ka ₹15,120 wala matching share
          isme nahi judta.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Ab wahi case continue karne par dekho: spouse agle 18 saal (member ke 60 hone tak) ₹105 mahina
          bharti rahein, kul ₹22,680 aur. To unhe zindagi bhar ₹3,000 mahina milega. Sirf ek saal ki
          pension (₹36,000) hi puri bhari hui raqam se zyada hai. Isi liye jahan ghar mein itni gunjaish
          ho, wahan continue karna aksar behtar sauda hai. Apni age ke hisaab se contribution kitna banta
          hai, woh chart{' '}
          <Link href="/maandhan/pm-kisan-maandhan-age-wise-contribution-chart-2026" className="underline font-bold">age-wise contribution chart</Link>{' '}
          mein hai.
        </p>

        <SH>Disability Ka Rule. Death Jaisa Hi, Ek Farq Ke Saath</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Kam log jaante hain ki scheme mein permanent disability ka bhi provision hai. Agar member 60 se
          pehle aisi sthiti mein aa jayein ki contribution jaari na rakh sakein, to wahi do options milte
          hain jo death par spouse ko milte hain. Spouse scheme continue kare, ya jama contribution
          interest ke saath wapas le liya jaye. Farq itna hai ki yahan faisla member ke jeete-jee, parivar
          milkar le sakta hai. Disability ka medical record sambhal kar rakhna claim ke waqt kaam aata hai.
        </p>

        <SH>Kist Pehle Se Ruki Hui Thi. Tab Bhi Haq Banta Hai?</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Kai gharon mein aisa hota hai: kisan ne 2-3 saal contribution diya, phir tangi mein kist bharna
          band ho gaya, aur account default mein pada raha. Ab dehant ke baad parivar sochta hai ki account
          to kabka band tha, shayad kuch nahi milega. Aisa nahi hai. Jo paisa jama hua tha woh account
          mein hi hai, aur wahi contribution-plus-interest wala refund rule us par bhi lagta hai. Claim
          usi tarike se hoga jaise upar likha hai; bas CSC ke record se account ki asli sthiti (kitna jama,
          kab tak bhara) pehle nikalwa lo, taaki bank mein baithe-baithe surprise na mile. Ruki hui kiston
          ko regular karne ka process bhi hai — agar continue karna ho, uska tarika{' '}
          <Link href="/maandhan/auto-debit-fail-hone-par-regularization-kaise-karein" className="underline font-bold">regularization guide</Link>{' '}
          mein hai.
        </p>

        <SH>Patni Apna Alag Account Bhi Khol Sakti Hai</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Ek baat jo is poore topic ka sabse achha bachav hai: agar patni khud 18-40 ki umar mein hai aur
          eligibility puri karti hai, to woh apna alag PMKMY account khol sakti hai. Tab dono ko 60 ke baad
          apni-apni ₹3,000 pension milegi, ghar mein ₹6,000 mahina. Aur kisi ek ke jaane par doosre ke
          paas apni pension to rahegi hi. Family pension wala ₹1,500 sirf tab relevant hota hai jab spouse
          khud member na ho, do alag account is puri uljhan ko pehle hi kaat dete hain. Eligibility aur
          documents ki puri list{' '}
          <Link href="/maandhan/pm-kisan-maandhan-eligibility-documents" className="underline font-bold">yahan di hui hai</Link>.
        </p>

        <SH>Jahan Claims Atakte Hain. Char Asli Wajahein</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Guidelines mein sab saaf hai, phir bhi files atakti hain. Wajahein har baar wahi chaar:
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          <strong>Purani nomination.</strong> Upar keh chuke, sabse common problem. <strong>Shaadi ka legal
          proof nahi.</strong> Gaon ki traditional shaadi register nahi hui to marital relationship saabit
          karna mushkil hota hai; ration card ya voter list mein dono ke naam ek saath hon to kaam ban jata
          hai. <strong>Enrolment receipt gum.</strong> Us receipt mein account number aur contribution
          history hoti hai. Na ho to CSC se duplicate record nikalwana padta hai, time lagta hai.
          <strong> Der se file karna.</strong> Dukh ke waqt deri samajh aati hai, lekin mahino tak rukne se
          bank staff badal jaate hain aur kagaz kho jaate hain. Koshish karo ki 30 din ke andar process
          shuru ho jaye.
        </p>

        <SH>Auto-Debit Band Karwana Mat Bhoolna</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Ek practical baat jo kisi guideline mein bold letters mein nahi likhi, lekin parivar ko sabse
          pehle karni chahiye: agar member ka contribution bank account se auto-debit se ja raha tha (ya
          PM-KISAN ki kist se kat raha tha), to death ke baad bhi mandate chalta rehta hai jab tak use band
          na karwaya jaye. Account mein balance hai to paisa katata rahega. Aur baad mein us kate hue
          paise ka hisaab milane mein alag maghajmaari hoti hai.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Isliye death certificate banwane ke turant baad bank jaakar do kaam karo: mandate cancel karwao,
          aur claim ki suchna wahin de do. Agar decision continue karne ka hai, to mandate cancel nahi —
          balki spouse ke account par shift karwana hota hai, taaki aage ki contributions unke naam se jayein.
          Auto-debit se judi common problems aur unke solutions par alag detail guide hai —{' '}
          <Link href="/maandhan/pm-kisan-maandhan-auto-debit-poora-sach" className="underline font-bold">auto-debit ka poora sach yahan padho</Link>.
        </p>

        <SH>File Atak Jaye To Kahan Shikayat Karein</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Normal processing 30-60 din ki hai. Isse zyada ho jaye bina kisi likhit jawab ke, ya koi
          &ldquo;speed money&rdquo; maange (jo poori tarah illegal hai), to chup mat baitho. Pehle branch
          manager ko likhit complaint do. 7 din mein hal na nikle to teen darwaze hain — District Collector
          ki jan sunwai, LIC ka grievance portal, aur PMKMY helpline <strong>1800-3000-3468</strong>. Likhit
          shikayat par system jaldi hilta hai, zubani request par nahi. Helpline aur complaint ka poora
          tarika alag guide mein hai —{' '}
          <Link href="/maandhan/pmkmy-grievance-complaint-helpline" className="underline font-bold">PMKMY complaint aur helpline guide</Link>.
        </p>

        <div className="my-6 rounded-xl overflow-hidden border border-[var(--color-border)] shadow-sm">
          <Image
            src="/images/articles/maandhan/family-pension-rules/nomination-update.webp"
            alt="CSC par PMKMY nomination update karwane ka process"
            width={800}
            height={500}
            className="w-full"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)]">
            Figure: nomination update CSC par hota hai. Pension card saath le jao
          </p>
        </div>

        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Aakhri baat, agar aap khud spouse hain aur scheme continue karne ka soch rahi hain, to pehle apna
          contribution status aur account ki halat dekh lena samajhdari hai. Woh ghar baithe ho jata hai —{' '}
          <Link href="/maandhan/pm-kisan-maandhan-status-check-online" className="underline font-bold">Maandhan status online check karne ka tarika</Link>{' '}
          alag se likha hai. Aur agar linked bank account badalna ho to{' '}
          <Link href="/maandhan/pmkmy-bank-account-change" className="underline font-bold">bank account change ka process</Link>{' '}
          bhi dekh lo.
        </p>

        <FAQBlock faqs={FAQS_DATA} caption="PM-KMY Family Pension. Sawal Jawab" />

        <GovLink
          href="https://pmkmy.gov.in"
          label="PM Kisan Maandhan Official Portal"
          guide="Check Eligibility &amp; Status"
          guideHref="/maandhan/pm-kisan-maandhan-eligibility-documents"
          portalName="pmkmy.gov.in"
        />

        <SH>Sources</SH>
        <ul className="text-sm text-[var(--color-text-muted)] space-y-2 mb-6 list-disc pl-5">
          <li>
            PM-KMY official portal, scheme details, exit &amp; death provisions.{' '}
            <a href="https://pmkmy.gov.in" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">pmkmy.gov.in</a>
          </li>
          <li>
            Maandhan portal (LIC/Government of India), enrolment records aur claim process.{' '}
            <a href="https://maandhan.in" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">maandhan.in</a>
          </li>
          <li>
            Vikaspedia (Government of India). PM-KMY benefits: family pension, spouse continuation, exclusion rules.{' '}
            <a href="https://schemes.vikaspedia.in/viewcontent/schemesall/schemes-for-farmers/pm-kisan-maan-dhan-yojana?lgn=en" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">vikaspedia.in</a>
          </li>
          <li>
            PIB. PM-KMY launch aur 5-year completion releases, Department of Agriculture &amp; Farmers Welfare.{' '}
            <a href="https://pib.gov.in" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">pib.gov.in</a>
          </li>
        </ul>

        <AuthorBox modified={MODIFIED} bioKey="family-pension-rules" />
        <BottomNav extraLinks={[
          { href: '/maandhan/pm-kisan-maandhan-withdrawal-refund-rules', l: 'Withdrawal Rules' },
          { href: '/maandhan/pm-kisan-maandhan-status-check-online', l: 'Status Check' },
          { href: '/maandhan/pmkmy-bank-account-change', l: 'Bank Change' },
        ]} />
        <Disclaimer k="family-pension-rules" />
      </div>
    </>
  );
}
