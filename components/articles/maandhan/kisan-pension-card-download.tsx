import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { SI, StepList, IB, WB, SH, GovLink, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { MaandhanArticleMeta } from '@/lib/maandhan-data';

const PUBLISHED = '2026-07-25T08:00:00+05:30';
const MODIFIED = '2026-07-28T08:00:00+05:30';

const RELATED_CARDS = [
  {
    slug: 'pm-kisan-maandhan-status-check-online',
    title: 'Apna Status Check Karein',
    desc: 'Pension card download karne ke baad apna contribution history aur active status verify karein.',
    emoji: '🔍',
  },
  {
    slug: 'pmkmy-bank-account-change',
    title: 'Bank Account Change Karein',
    desc: 'Agar purana bank band ho gaya hai, to naye account me pension details kaise update karein.',
    emoji: '🏦',
  },
  {
    slug: 'pm-kisan-maandhan-eligibility-documents',
    title: 'Eligibility Aur Documents',
    desc: 'Pension scheme ke liye kaun eligible hai aur kaun se documents zaroori hain, jaanein.',
    emoji: '📄',
  },
];

const FAQS_DATA = [
  {
    q: 'Mera naam portal par nahi aa raha, kya main enroll hi nahi hua?',
    a: 'Ho sakta hai aapka form reject ho gaya ho (age ya documents ki wajah se), ya phir aapne jo details daali hain wo system se match nahi ho rahi. Pehle apne bank me jaakar puchiye ki aapke account se PMKMY ke naam se kabhi contribution kata hai ya nahi. Agar paisa kata hai, to aap enrolled hain — bas portal par search me kuch technical gadbad hai.',
  },
  {
    q: 'Kya main apne pita ya pati ka card download kar sakta hoon?',
    a: 'Haan, bilkul. Lekin sirf tab jab aapke paas unka Aadhaar number aur unka registered mobile number ho. OTP usi mobile par aayega. Agar wo uplabdh nahi hai, to bank branch se hi print karwana padega, kyunki bina OTP ke access allowed nahi hai.',
  },
  {
    q: 'Download kiye hue PDF me naam ki spelling galat hai — ab kya karun?',
    a: 'Chhoti spelling mistakes (jaise "Ram" ki jagah "Raam") aksar ignore ho jaati hain aur kaam chal jata hai. Lekin agar poora naam hi galat hai ya date of birth wrong hai, to aapko CSC ya bank me jaakar correction form bharna padega. Isme 30 se 45 din lag sakte hain, isliye deri na karein.',
  },
  {
    q: '60 saal ke baad pension lene ke liye alag se apply karna padega kya?',
    a: 'Haan, ye bahut zaroori baat hai jo log bhool jaate hain. 60 saal hone par pension automatic shuru nahi hoti. Aapko bank me jaakar claim karna padta hai, aur wahan ye pension card dikhana hota hai. Isliye card sambhaal ke rakhna — warna 60 saal ki umar me phir se bhaag-daud karni padegi.',
  },
  {
    q: 'Agar main 2-3 saal se contribution nahi de raha, to account band ho gaya kya?',
    a: 'Haan, lagatar contribution na dene par account inactive ho sakta hai. Lekin kuch cases me regularization ka option hota hai — aapko baki ki rakam aur chhota sa penalty bank me jama karna hota hai. Pehle apni status portal par check karein, phir bank se baat karein.',
  },
];

export default function PmKisanMaandhanPensionCardDownload({ article }: { article: MaandhanArticleMeta }) {
  return (
    <>
      <Script id="maandhan-pension-card-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Article',
              headline: 'PM Kisan Maandhan Pension Card Ghar Baithe Kaise Nikalein? (2026 Ka Complete Guide)',
              description: 'PM Kisan Maandhan Yojana ke under aapka pension account number (jise aam bhasha me KPAN card ya acknowledgement kehte hain) ghar baithe kaise nikalein? Agar website atak rahi hai, mobile number galat hai, ya CSC wala sahi madad nahi kar raha, to ye article aapki har pareshani ka practical hal hai.',
              image: 'https://kisanstatus.com/images/articles/maandhan/pension-card-download-hero.webp',
              inLanguage: 'hi-IN',
              keywords: 'PM Kisan Maandhan Pension Card Download, KPAN card online, PMKMY acknowledgement slip, pension card kaise nikale',
              articleSection: 'Agriculture & Pension Schemes',
              wordCount: 2200,
              author: {
                '@type': 'Organization',
                name: 'KisanStatus Team',
                url: 'https://kisanstatus.com/about',
              },
              publisher: {
                '@type': 'Organization',
                name: 'KisanStatus',
                logo: { '@type': 'ImageObject', url: 'https://kisanstatus.com/logo.png' },
              },
              datePublished: PUBLISHED,
              dateModified: MODIFIED,
              mainEntityOfPage: { '@type': 'WebPage', '@id': `https://kisanstatus.com/maandhan/${article.slug}` },
            },
            {
              '@type': 'FAQPage',
              mainEntity: FAQS_DATA.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: { '@type': 'Answer', text: faq.a },
              })),
            },
          ],
        })}
      </Script>

      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/maandhan" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Maandhan Yojana</Link>
            <span>/</span>
            <span className="text-white font-bold">Pension Card Download</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Kisan Pension Scheme</span>

          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Maandhan Pension Card Ghar Baithe Kaise Nikalein? (2026 Ka Complete Guide)
          </h1>

          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 10 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/maandhan/pension-card-download-hero.webp"
            alt="Farmer downloading PM Kisan Maandhan Pension Card online on mobile phone"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Pension card download karke laminated karwana aapke budhape ki suraksha hai
          </p>
        </div>

        <div className="my-6 p-5 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-r-xl">
          <p className="text-sm md:text-base text-red-900 dark:text-red-100 leading-relaxed font-medium">
            <strong>Seedhi baat:</strong> Maan lijiye ek kisan hain Bulandshahr ke paas ek chhote se gaon mein — unki umar 59 saal hai, 4 bigha zameen hai, aur pichle 5 saal se wo har mahine apne bank account se 100 rupaye auto-cut karwa rahe hain. Lekin jab unhone apne bete ko dikhane ke liye apna pension proof mangwaya, to pata chala ki unke paas koi printed document hi nahi tha. Bas ek purana SMS tha jo 2021 me aaya tha. Ab wo darre hue hain ki 60 saal ke baad unka paisa kaise milega. Aise hazaron kisan bhai-behen hain jinke paas koi solid, official document nahi hai.
          </p>
        </div>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          Yahi document — jise hum pension acknowledgement ya KPAN card kehte hain — aapka sabse bada hathiyar hai. Iske bina na aap apni current status track kar sakte hain, na kisi bank me jaakar koi sawal puch sakte hain, aur na hi agar kal ko koi technical gadbad ho to aap complaint darj karwa sakte hain. Kya aapko pata hai ki is ek kagaz ke bina, 60 saal ki umar me pension claim karna ek lambi, thaka dene wali bhaag-daud ban sakta hai? To chaliye, bina kisi ghuma-fira ke, seedha kaam ki aur practical baat karte hain.
        </p>

        <section className="mb-8">
          <SH>Pehle Ye Samjhiye — Ye Kagaz Kyun Itna Zaroori Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bahut se kisan sochte hain, "jab paisa har mahine mere bank account se auto-cut ho raha hai, to alag se card ka kya kaam?" Ye ek bahut badi galatfehmi hai. Auto-debit sirf itna batata hai ki paisa ja raha hai, lekin ye confirm nahi karta ki aapka account technically active hai, aapki date of birth sahi register hui hai, aur aap 60 saal ke baad 3000 rupaye mahina paayenge hi.
          </p>
          
          <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-xl">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">📊 Ek Aam Scenario: Bina Card Ke Kya Hota Hai</h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
              Udaharan ke taur par, maan lijiye Rajasthan ke Jhunjhunu me Savitri devi ke pati ka 2023 me dehant ho gaya. Scheme ke rules ke mutabiq, spouse ko 50% pension jari rakhne ka adhikar hota hai. Lekin jab wo bank gayi, to manager ne kaha, "pehle husband ka pension proof aur account details dikhao." Savitri devi ke paas kuch nahi tha. Sirf us ek kagaz ki kami ki wajah se unhe 6 mahine ki bhaag-daud karni padi, CSC ke chakkar kaatne pade, aur tab jaakar claim process shuru hua.
            </p>
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 p-3 rounded">
              <strong>Lesson:</strong> Agar unke paas pehle se pension card hota, to 6 mahine ki pareshani bach jaati aur unhe turant 1500 rupaye mahina milna shuru ho jaata.
            </p>
          </div>

          <div className="my-6 p-5 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-r-xl">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">✅ Doosra Scenario: Card Pehle Se Ready Ho To Kya Hota Hai</h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Ek kalpanik sthiti lein — maan lijiye Ramesh Chand ne 2020 me pension card download karke laminated karwa liya tha. Jab 2024 me unki tabiyat kharab hui aur wo 60 saal ke ho gaye, to unhone turant bank me card dikhaya aur 15 din ke andar unka pension shuru ho gaya. Is tarah ek kagaz unke budhaape ko surakshit kar sakta tha.
            </p>
          </div>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Isliye main hamesha kehta hoon — ye document download karke ek surakshit jagah sambhaal ke rakhiye. Ek digital copy apne phone me, aur ek physical printout ghar ke zaroori kagzaat wali file me.
          </p>
        </section>

        <section className="mb-8">
          <SH>Kya Aap PM Kisan Maandhan Yojana Ke Liye Eligible Hain?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Pension card download karne se pehle ye confirm kar lein ki aap scheme ke liye eligible hain ya nahi. Neeche di gayi conditions check karein:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-xs border border-[var(--color-border)] rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-[var(--color-bg-alt)] text-left">
                  <th className="p-2 font-black">Condition</th>
                  <th className="p-2 font-black">Requirement</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[var(--color-border)]"><td className="p-2 font-bold">Age</td><td className="p-2">18 se 40 saal ke beech (enrollment ke samay)</td></tr>
                <tr className="border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]"><td className="p-2 font-bold">Land Holding</td><td className="p-2">2 hectare (5 acre) se kam jameen</td></tr>
                <tr className="border-t border-[var(--color-border)]"><td className="p-2 font-bold">Occupation</td><td className="p-2">Kheti karna zaroori hai</td></tr>
                <tr className="border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]"><td className="p-2 font-bold">Bank Account</td><td className="p-2">Active bank account with Aadhaar linking</td></tr>
                <tr className="border-t border-[var(--color-border)]"><td className="p-2 font-bold">Not Beneficiary Of</td><td className="p-2">EPFO, ESIC, NPS (government schemes)</td></tr>
                <tr className="border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]"><td className="p-2 font-bold">Income Tax</td><td className="p-2">Income tax return file nahi karna chahiye</td></tr>
              </tbody>
            </table>
          </div>
          <IB>
            Note: Agar aap inme se kisi bhi condition ko fulfill nahi karte, to aapka pension card toh ban jayega lekin 60 saal ke baad pension reject ho sakta hai.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Shuru Karne Se Pehle — Ye 4 Cheezein Haath Me Rakhiye</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Website kholne se pehle ye cheezein apne paas ready rakhein. Warna beech me process atak jayega aur phir wahi purani pareshani — "bhaiya aap hi kar do" kehkar phir se CSC wale ke darwaze par jaana padega.
          </p>
          
          <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/articles/maandhan/documents-ready.webp"
              alt="Pension Card Download Ke Liye Zaroori Documents like Aadhaar and Passbook"
              width={1000}
              height={560}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
              Documents pehle se ready rakhein taaki process beech me na atke
            </p>
          </div>

          <StepList>
            <SI n={1}><strong>Aadhaar Card (Original):</strong> Wahi jo scheme me register hua tha. Kai baar kisan ne purana Aadhaar diya hota hai, baad me naya banwa liya hai ya biometric update karwaya hai — to system me mismatch aa jata hai.</SI>
            <SI n={2}><strong>Wahi Registered Mobile Number:</strong> Jo form bharte waqt diya tha. OTP sirf usi par aayega. Agar number badal gaya hai, to pehle use update karwana padega (iska tarika niche bataya gaya hai).</SI>
            <SI n={3}><strong>Bank Passbook:</strong> Jis account se har mahine paisa kata jata hai. Uska account number aur IFSC code pata hona chahiye, kyunki kabhi-kabhi verification ke liye ye maanga jata hai.</SI>
            <SI n={4}><strong>Enrollment ka Approximate Saal:</strong> Agar yaad nahi hai, to koi baat nahi, Aadhaar se search ho jayega. Lekin agar saal yaad ho, to galat record nikalne ke chances kam ho jate hain.</SI>
          </StepList>
        </section>

        <section className="mb-8">
          <SH>Online Ghar Baithe Kaise Nikalein — Pura Step-by-Step Process</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Sarkari portal ka link aapko PM Kisan Maandhan Yojana ki official website par milega. Wahan "View Your Pension Details" ya "Print Pension Card" jaisa option hota hai. Ek chhoti si baat ka dhyan rakhein — kai baar website subah ke waqt bahut slow chalti hai ya server down rehta hai. Isliye koshish karein ki shaam 5 baje ke baad ya dopahar 1 se 3 baje ke beech try karein, jab traffic kam hota hai.
          </p>

          <StepList>
            <SI n={1}><strong>Sahi Portal Kholiye:</strong> Browser me official scheme website type karein. Google par search karte waqt pehla result chunein, lekin dhyan rahe ki URL ke end me <code className="bg-gray-100 px-1 rounded text-red-600 font-mono text-xs">.gov.in</code> zaroor ho. Internet par kai fake websites hain jo aapki details chura sakti hain, isliye URL check karna sabse pehla kadam hai.</SI>
            <SI n={2}><strong>Self-Service Section Me Jaayein:</strong> Homepage par aapko "Self Service", "Subscriber Login", ya "Farmer Corner" jaisa tab dikhega. Us par click karein. Yahan kuch log confuse ho jaate hain kyunki do-teen options milte hain. Aapko wo chahiye jisme "View / Print Pensioner Details" ya "Acknowledgement Slip" likha ho.</SI>
            <SI n={3}><strong>Apni Details Dhyan Se Bhariye:</strong> Ab aapse pucha jayega — Aadhaar number, ya pension account number (agar yaad ho), ya registered mobile number. Yahan sabse common galti ye hoti hai ki log apna naya mobile number daal dete hain jo unhone baad me banwaya. OTP purane number par jayega, aur aap atak jaoge. Isliye wahi number daalein jo enrollment time par diya tha.</SI>
            <SI n={4}><strong>OTP Verify Kijiye (Sabr Se Kaam Lein):</strong> OTP aane me kabhi-kabhi 2 se 3 minute lag jaate hain. Jaldi me "Resend OTP" baar baar mat dabaiye — system aapko 15 minute ke liye temporarily lock kar deta hai. Ek baar OTP aane ka wait karein. Agar 5 minute me na aaye, to apna network check karein, ya DND service band karke dekhein.</SI>
            <SI n={5}><strong>Details Verify Karke PDF Download Kijiye:</strong> OTP sahi hone par aapke saamne aapki poori details aa jayengi — naam, date of birth, monthly contribution, pension account number, aur bank details. Yahan ek "Download" ya "Print" ka button hoga. Us par click karte hi PDF file aapke phone ya computer me save ho jayegi.</SI>
          </StepList>

          <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/articles/maandhan/online-portal-step.webp"
              alt="Online Portal Par Details Bharne Ka Tarika for PM Kisan Maandhan"
              width={1000}
              height={560}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
              Portal par details bharte waqt spelling aur number double-check karein
            </p>
          </div>

          <WB>
            <strong>Pro Tip:</strong> PDF download hone ke baad turant uska naam badal dijiye — jaise "Brijesh-Pension-Card-2026.pdf" — aur ek alag folder me daal dijiye. Bahut se log download to kar lete hain lekin "Downloads" folder me chhod dete hain, phir baad me wo file milti hi nahi.
          </WB>
        </section>

        <section className="mb-8">
          <SH>Agar Online Na Ho — CSC Ya Bank Se Kaise Nikalein</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Har kisan ke paas smartphone ya stable internet nahi hota, aur ye bilkul theek hai. Aap apne nazdeeki Common Service Centre (CSC) par jaakar bhi ye document print karwa sakte hain. Bas apna Aadhaar le jaaiye, aur VLE (CSC operator) ko saaf shabdon me boliye ki "PM Kisan Maandhan ka pension acknowledgement print karwana hai."
          </p>
          
          <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/articles/maandhan/csc-bank-visit.webp"
              alt="CSC Ya Bank Me Jakar Pension Card Nikalwana by farmer"
              width={1000}
              height={560}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
              CSC ya bank me jaakar bhi aap aasani se apna pension card print karwa sakte hain
            </p>
          </div>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ek baat ka poora dhyan rakhein — CSC wala aapse ₹20 se ₹50 tak charge kar sakta hai, jo ki printing aur internet ka normal charge hai. Lekin agar wo aapse ₹200 ya ₹300 maange "processing fee" ya "urgent charge" ke naam par, to samajh jaaiye kuch gadbad hai. Sarkar ne ye service free ya nominal charge par rakhne ka spasht nirdesh diya hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Dusri jagah — aap apni bank branch par bhi ja sakte hain jahan se aapka auto-debit hota hai. Bank wale aapki pension details apne core banking system me dekh sakte hain aur ek printout nikaal ke de sakte hain. Lekin har chhoti branch me ye facility nahi hoti, isliye jaane se pehle phone par manager se puch lein.
          </p>
        </section>

        <section className="mb-8">
          <SH>Yahan Log Aksar Galti Karte Hain — Aap Mat Kijiye</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Pichle 8 saal me maine saikdon kisano ko ye process karte dekha hai. Kuch galtiyan baar-baar hoti hain jo process ko mahino ke liye rok deti hain. Ye rahi wo specific list:
          </p>

          <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/articles/maandhan/common-mistakes.webp"
              alt="Pension Card Download Me Hone Wali Common Galtiyan to avoid"
              width={1000}
              height={560}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
              In common galtiyon se bachkar aap apna time aur paisa bacha sakte hain
            </p>
          </div>

          <div className="space-y-3 mb-4">
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <p className="font-black text-sm text-[var(--color-text)] mb-1">❌ Galt Aadhaar Daalna (Family Confusion)</p>
              <p className="text-xs text-[var(--color-text-muted)]">Kai parivaar me sabke Aadhaar number milte-julte hain ya yaad nahi rehte. Galti se bête ya patni ka number daal diya, to "No record found" aa jayega. Hamesha physical card dekh kar 12 digit type karein.</p>
            </div>
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <p className="font-black text-sm text-[var(--color-text)] mb-1">❌ Browser Cache Ka Ghost</p>
              <p className="text-xs text-[var(--color-text-muted)]">Kabhi-kabhi aap sahi details dalte hain, lekin purana data load ho jata hai kyunki browser me purani files saved hain. Agar error aaye, to "Incognito Mode" ya "Private Window" me try karein.</p>
            </div>
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <p className="font-black text-sm text-[var(--color-text)] mb-1">❌ PDF Download Karke Bhool Jaana</p>
              <p className="text-xs text-[var(--color-text-muted)]">File "Downloads" me gayi, phir phone clean karte waqt ya gallery saaf karte waqt delete ho gayi. Hamesha download karte hi uska screenshot le lein, ya WhatsApp par apne hi number par forward kar dein.</p>
            </div>
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <p className="font-black text-sm text-[var(--color-text)] mb-1">❌ Naam ki Spelling Ka Mismatch</p>
              <p className="text-xs text-[var(--color-text-muted)]">Aadhaar me "Rameshwar" hai, lekin scheme me "Rameshwar Kumar" register ho gaya. Aisi chhoti si cheez bhi kabhi-kabhi automated verification rok deti hai. Is case me ghabrayein nahi, CSC wale ki madad se manual check karwayein.</p>
            </div>
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <p className="font-black text-sm text-[var(--color-text)] mb-1">❌ Screenshot Ko Official Document Samajhna</p>
              <p className="text-xs text-[var(--color-text-muted)]">Bahut se log screen ka photo le lete hain, lekin screenshot official document nahi maana jaata. Hamesha PDF hi rakhiye jisme scheme ka official logo, watermark, aur aapka account number clearly dikh raha ho.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>Agar Registered Mobile Number Hi Galat Ho — To Kya Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ye sabse common aur frustrating problem hai. 2019-20 me jab scheme shuru hui, to kai CSC walon ne jaldi-baazi me form bhare, aur galti se apna khud ka number ya kisi aur ka number daal diya. Ab kisan ko OTP hi nahi mil raha, aur wo bechaara hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Iska ek hi solid solution hai — aapko apni nazdeeki bank branch jaana hoga jahan aapka pension account linked hai. Wahan ek chhoti si application likhni hoti hai ki "mera registered mobile number update kiya jaye." Sath me Aadhaar ki copy aur naye number ka proof lagana hota hai. Bank wale verify karke update kar dete hain — isme 7 se 15 din lag sakte hain.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ek aur rasta — aap scheme ke toll-free number par call karke bhi guidance le sakte hain. Lekin dhyan rahe, call par wo aapka mobile number update nahi karenge (security reasons ki wajah se), sirf bataenge ki aapko kis form ke sath kahan jaana hai. Physical verification zaroori hoti hai fraud rokne ke liye.
          </p>
        </section>

        <section className="mb-8">
          <SH>Card Mil Gaya — Ab Aage Kya Karna Chahiye?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Sirf card download kar lena kaafi nahi hai. Kuch aur chhoti-chhoti cheezein hain jo aapko karni chahiye taaki aane wale waqt me koi dikkat na aaye:
          </p>
          <StepList>
            <SI n={1}>Ek print nikalke halka sa lamination karwa lijiye — ₹20 lagenge, lekin ye saalon tak chalega aur phatne se bach jayega.</SI>
            <SI n={2}>Har saal ek baar apni status check karein — ki contribution sahi se kat raha hai ya nahi, aur account active hai ya nahi.</SI>
            <SI n={3}>Apne parivaar ke kisi bharosemand sadasya ko bata dijiye ki ye card kahan rakha hai, taaki zaroorat padne par wo turant dhoondh sakein.</SI>
            <SI n={4}>Agar aapki income badh gayi hai ya aap income tax return file karte hain, to scheme ke rules ke mutabiq aapka naam hat sakta hai — isliye apni eligibility check karte rahein.</SI>
          </StepList>
          <IB>
            Yaad rakhiye, ye card sirf ek aam kagaz nahi hai — ye aapke budhaape ki financial suraksha ka saboot hai. Ise sambhaal ke rakhna utna hi zaroori hai jitna apni zameen ke kagzaat ya Aadhaar card.
          </IB>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Poochhe Jaane Wale Sawal (FAQs)
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM-KMY Pension Card Download — Sawal Jawab" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Ek Baat Yaad Rakhein</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Dekhiye, sarkari schemeon me kagaz sambhaalna thoda thaka dene wala kaam zaroor hai. Lekin jab 60 saal ki umar me har mahine 3000 rupaye aapke account me aayenge bina kisi bheek ya bhaag-daud ke — tab aapko ye chhoti si mehnat yaad aayegi aur achha lagega. Agar aapke koi aur sawal hain jo yahan cover nahi hue, to apne nazdeeki CSC ya bank branch me jaakar zaroor puchiye.
          </p>
        </div>

        <GovLink
          href="https://pmkmy.gov.in"
          label="PM Kisan Maandhan Official Portal"
          guide="Check Eligibility &amp; Status"
          guideHref="/maandhan/pm-kisan-maandhan-eligibility-documents"
          portalName="pmkmy.gov.in"
        />

        <section className="my-10">
          <h3 className="text-lg font-black text-[var(--color-text)] mb-4">Ye Bhi Padhein</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {RELATED_CARDS.map((card) => (
              <Link
                key={card.slug}
                href={`/maandhan/${card.slug}`}
                className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg hover:border-green-500 transition-all duration-300"
              >
                <div className="text-2xl mb-2">{card.emoji}</div>
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

        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/maandhan/pm-kisan-maandhan-status-check-online', l: '🔍 Status Check' },
          { href: '/maandhan/pmkmy-bank-account-change', l: ' Bank Change' },
          { href: '/maandhan/pm-kisan-maandhan-eligibility-documents', l: '📄 Eligibility' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}