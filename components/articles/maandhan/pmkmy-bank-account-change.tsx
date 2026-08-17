import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, SH, GovLink, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { MaandhanArticleMeta } from '@/lib/maandhan-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const PUBLISHED = '2026-04-30T07:56:05+05:30';
const MODIFIED = '2026-05-30T09:35:47+05:30';

const RELATED_CARDS = [
  {
    slug: 'pm-kisan-maandhan-pension-card-download',
    title: 'Pension Card Download',
    desc: 'PMKMY pension card/acknowledgement ghar baithe kaise download karein.',
    
  },
  {
    slug: 'pm-kisan-maandhan-status-check-online',
    title: 'Status Check Online',
    desc: 'PM Kisan Maandhan Yojana mein apna status kaise verify kijiye aur contribution history dekhein.',
    
  },
  {
    slug: 'pm-kisan-maandhan-eligibility-documents',
    title: 'Eligibility & Documents',
    desc: 'Kaun PM Kisan Maandhan Yojana ke liye eligible hai aur kaun se documents zaroori hain.',
    
  },
];

const FAQS_DATA = [
  {
    q: 'Ek se zyada bank account PMKMY me register hote hain?',
    a: 'Nahi, PM Kisan Maandhan Yojana me ek samay me sirf ek hi bank account register ho sakta hai. Agar aap account change karna chahte hain, to pehle purana account hatakar naya account add karna padega.',
  },
  {
    q: 'Account details update karne ka koi charge hai?',
    a: 'Government ki taraf se koi charge nahi hai. Lekin agar aap CSC se service le rahe hain, to wo ₹20-50 ki standard service charge le sakte hain. Bank branch me usually ye service free hoti hai.',
  },
  {
    q: 'Kya account badalne se meri pension amount kam/zyada ho jayegi?',
    a: 'Bilkul nahi. Isse aapki pension amount par koi asar nahi padta. Aapki monthly contribution aur future pension same rahegi — sirf paisa naye account me jayega.',
  },
  {
    q: 'Agar mera khata badal gaya, to kya mujhe phir se enrollment karni padegi?',
    a: 'Nahi, bilkul nahi. Aapko phir se enrollment karne ki zaroorat nahi hai. Sirf bank account details update karni hain. Aapka purana contribution record, age, aur sab kuch same rahega.',
  },
  {
    q: 'Kitne din me naya khata link ho jata hai?',
    a: 'Usually 15-20 working days lagte hain. Minimum 7 din aur maximum 30 din tak ka samay lag sakta hai. Confirmation SMS aapke registered mobile par aayega. Samay state aur bank ke hisab se thoda alag ho sakta hai.',
  },
  {
    q: 'Ye kaam online ghar baithe ho jayega?',
    a: 'Kuch states me online facility available hai, lekin zyadatar cases me physical verification zaroori hoti hai. Isliye CSC ya bank branch me jaakar application dena behtar hai.',
  },
  {
    q: 'Naya khata judne ke baad purane account se paisa katna kab band hoga?',
    a: 'Jab update confirm ho jayega, to usi mahine se naye account se paisa katna shuru ho jayega. Purane account se auto-debit automatically band ho jayega.',
  },
  {
    q: 'Kya joint account PMKMY me use kar sakta hoon?',
    a: 'Haan, joint account use kar sakte hain, lekin account holder ka naam PMKMY enrollment se match hona chahiye. Preferably individual account use karna behtar hai future complications se bachne ke liye.',
  },
];

export default function BankAccountChange({ article }: { article: MaandhanArticleMeta }) {
  return (
    <>

      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/maandhan" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Maandhan Yojana</Link>
            <span>/</span>
            <span className="text-white font-bold">Bank Account Change</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Kisan Pension Scheme</span>

          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Maandhan Yojana Me Bank Account Kaise Badlein? (Complete Guide 2026)
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

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/maandhan/bank-account-change/hero.webp"
            alt="PM Kisan Maandhan Yojana me bank account change karne ka process"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Bank account update karna aapki pension ki continuity ke liye bahut zaroori hai
          </p>
        </div>

        <div className="my-6 p-5 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 rounded-r-xl">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            Short Answer: PMKMY Me Bank Account Change Kaise Hota Hai?
          </h2>
          <p className="text-sm md:text-base text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
            Official PMKMY guidelines ke mutabik, khata badalne ke liye sabse recommended tarika hai apne nazdeeki CSC center me jaakar application dena (PMKMY number aur Aadhaar ke saath). Alternative ke roop me aap bank branch me bhi ja sakte hain. Process complete hone me 15-30 din lagte hain — aur is beech aapki pension ke saath kya hota hai, wahi is page ka asli topic hai.
          </p>
        </div>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          Pehle ek zaroori baat: ye page sirf <strong>PM Kisan Maandhan (pension wali scheme)</strong> ke liye hai. Agar aapko ₹2000 wali PM-Kisan kist ka khata badalna hai, to wo bilkul alag process hai — uske liye <Link href="/articles/PmKisanBankAccountChangeProcess" className="underline text-green-700 dark:text-green-400">PM-Kisan bank account change guide</Link> padhein.
        </p>
        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          Ab asli sawal jo sabko pareshan karta hai — "is beech mera auto-debit ka kya hoga?" Seedha jawab: application dene ke baad bhi 15-30 din tak paisa <strong>purane account se hi</strong> katega. Naya khata judne ke baad hi debit shift hota hai. Isliye sabse badi galti hai application dete hi purana account khali kar dena ya band kar dena — aisa kiya to contribution miss hogi, aur miss hui contribution ko regularize karana alag jhanjhat hai (uska poora process <Link href="/maandhan/auto-debit-fail-hone-par-regularization-kaise-karein" className="underline text-green-700 dark:text-green-400">auto-debit fail regularization guide</Link> mein diya hai). Auto-debit system asal mein kaise kaam karta hai — NACH mandate, payment cycles (har mahine 1, 11 aur 21 tarikh), default rules — ye sab <Link href="/maandhan/pm-kisan-maandhan-yojana-auto-debit-poora-sach" className="underline text-green-700 dark:text-green-400">auto-debit ke poore sach</Link> mein detail se samjhaya gaya hai.
        </p>
        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          Achhi baat ye hai ki khata badalne par aapko phir se enrollment nahi karni padti. Purana contribution record, age calculation, aur pension amount — sab kuch same rehta hai. Bas account details update hoti hain.
        </p>

        <IB>
          <strong>Zaroori Baat:</strong> Poora process 15-30 din ka hota hai. Is dauran purane account se auto-debit chalu rahega, isliye purane account me sufficient balance rakhein jab tak confirmation SMS na aa jaye.
        </IB>

        <section className="mb-8">
          <SH>Auto-Debit Naye Account Se Kab Shuru Hoga? — Din-Ba-Din Timeline</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ye timeline application dene ke din se count hoti hai. State aur bank ke hisab se thoda aage-peeche ho sakta hai, lekin pattern yahi rehta hai:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Din</th>
                  <th className="p-3 text-left">Kya Hota Hai</th>
                  <th className="p-3 text-left">Paisa Kahan Se Katega</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Din 0', 'CSC/bank me application + biometric verification, acknowledgement slip milti hai', 'Purana account'],
                  ['Din 1-15', 'Request portal par process hoti hai, naye account ka Aadhaar-link verify hota hai', 'Purana account — balance rakhein'],
                  ['Din 15-30', 'Update complete hone par registered mobile par confirmation SMS aata hai', 'Confirmation ke baad wale cycle se naya account'],
                  ['Agla debit cycle', 'Pehla auto-debit naye account se katta hai — passbook/SMS se khud verify karein', 'Naya account'],
                ].map(([day, what, from], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs font-medium text-[var(--color-text)]">{day}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{what}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-green-700 dark:text-green-400">{from}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Do cheezein is table se yaad rakhni hain. Ek — confirmation SMS aane tak purana account zinda aur balance-wala rehna chahiye. Do — SMS aane ke baad bhi pehla naya debit khud check karo; agar agle cycle me kisi bhi account se paisa nahi kata, to bina rukey CSC par acknowledgement slip lekar jao.
          </p>
        </section>

        <section className="mb-8">
          <SH>Kin Situations Me Khata Badalna Padta Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Pichle kuch saalon me maine dekha hai ki kisan bhai-behen in wajahon se account update karwana chahte hain:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border border-blue-100 dark:border-blue-800">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Bank Branch Band Hona</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Chhoti branches ka merger ya permanent closure — gaon me ye ab common ho gaya hai.</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border border-green-100 dark:border-green-800">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Location Shift</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Dusra sheher ya gaon me shift hone par purani branch accessible nahi rehti.</p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg border border-yellow-100 dark:border-yellow-800">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Passbook Lost/Theft</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Passbook kho jaane ya chori hone par bank naya account number issue kar deta hai.</p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg border border-red-100 dark:border-red-800">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">IFSC Code Change</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Bank merger ya technology upgrade se IFSC code badal jata hai.</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg border border-purple-100 dark:border-purple-800">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Joint Account Issue</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Joint account se individual account me shift karna — especially widow/divorce cases me.</p>
            </div>
            <div className="bg-pink-50 dark:bg-pink-900/20 p-5 rounded-lg border border-pink-100 dark:border-pink-800">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Better Services</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Nearby branch, lower charges, ya better customer service ke liye bank change.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>Zaroori Documents — Ye 6 Cheezein Pehle Ready Karo</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Application submit karne se pehle ye documents ready rakhein. Inme se koi bhi missing ho to process delay ho sakta hai:
          </p>
          <StepList>
            <SI n={1}><strong>Naye Bank Ki Passbook:</strong> Clear copy jisme account number, IFSC code, account holder ka naam aur bank ka stamp ho.</SI>
            <SI n={2}><strong>Aadhaar Card:</strong> Self-attested copy jo naye bank account se linked ho.</SI>
            <SI n={3}><strong>PMKMY Pension Card/Acknowledgement:</strong> Purana pension card jisme purana account number likha hai.</SI>
            <SI n={4}><strong>Application:</strong> Prescribed format me likhi hui application (sample niche diya gaya hai).</SI>
            <SI n={5}><strong>Passport Size Photograph:</strong> 2 recent photographs.</SI>
            <SI n={6}><strong>Mobile Number:</strong> Wahi mobile number jo PMKMY me registered hai (OTP verification ke liye).</SI>
          </StepList>

          <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/articles/maandhan/bank-account-change/documents-checklist.webp"
              alt="PMKMY bank account change ke liye zaroori documents checklist"
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
        </section>

        <section className="mb-8">
          <SH>Bank Account Change Kaise Hota Hai</SH>

          <StepList>
            <SI n={1}><strong>Naye Bank Me Active Account Ensure Karein:</strong> Sabse pehle confirm karein ki aapke naye bank account me ye sab hai: Aadhaar linking (mandatory hai), Mobile number linking, Active status aur transactions allow karta ho, aur Valid IFSC code.</SI>
            <SI n={2}><strong>Application Form Likhein:</strong> Ek simple application likhein. Neeche ek sample format diya gaya hai jo aap use kar sakte hain:
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-xs text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 mt-3">
                <p className="mb-2"><strong>To,</strong><br/>The Branch Manager,<br/>[Naye Bank Ka Naam],<br/>[Branch Address]</p>
                <p className="mb-2"><strong>Subject:</strong> PM Kisan Maandhan Yojana me bank account change karne hetu</p>
                <p className="mb-2"><strong>Respected Sir/Madam,</strong></p>
                <p className="mb-2">Mera naam [Aapka Naam] hai aur main PM Kisan Maandhan Yojana (PMKMY) ka registered beneficiary hoon. Mera purana pension account number [Purana Account Number] hai.</p>
                <p className="mb-2">Main aapse nivedan karta/karti hoon ki mera PMKMY se linked bank account purane [Purane Bank Ka Naam] se aapke bank me change kiya jaye. Meri naye bank account ki details niche di gayi hain:</p>
                <ul className="list-disc pl-6 mb-2">
                  <li>Account Holder: [Naam]</li>
                  <li>Account Number: [Naya Account Number]</li>
                  <li>IFSC Code: [IFSC Code]</li>
                  <li>Bank Name: [Bank Ka Naam]</li>
                  <li>Branch: [Branch Naam]</li>
                  <li>Mobile Number: [Registered Mobile]</li>
                  <li>Aadhaar Number: [Aadhaar Number]</li>
                </ul>
                <p className="mb-2">Maine apni naye bank ki passbook ki self-attested copy is application ke sath attach ki hai. Kripya mera bank account update karne ka kashth karein.</p>
                <p className="mb-2"><strong>Thanking You,</strong></p>
                <p><strong>[Aapka Naam]<br/>[Signature]<br/>[Date]<br/>[Mobile Number]</strong></p>
              </div>
            </SI>
            <SI n={3}><strong>CSC Center Ya Bank Branch Me Visit Karein:</strong> Official PMKMY guidelines ke mutabik, bank details update karne ke liye sabse standard aur recommended tarika hai apne nazdeeki Common Service Centre (CSC) ya VLE (Village Level Entrepreneur) ke paas jaana. <strong>Option A (Recommended - Official Channel):</strong> Nazdeeki CSC center par jaayein. Apna PMKMY pension account number, Aadhaar card, aur naye bank ki passbook ki copy le jaayein. VLE operator aapki biometric verification karke seedha PMKMY portal par request raise karega. (Note: CSC par standard nominal service charge ₹20-₹50 lag sakta hai, jo ki official hai). <strong>Option B (Alternative):</strong> Agar CSC accessible nahi hai, to aap apne naye bank branch me bhi ja sakte hain, lekin wahan se bhi request ultimately CSC/portal ke through hi process hoti hai, isliye pehle bank manager se confirm karein ki wo PMKMY update directly kar sakte hain ya nahi.</SI>
            <SI n={4}><strong>Verification Process:</strong> CSC ya Bank wale ye verification karenge: Aadhaar se biometric verification (fingerprint/iris), Mobile number par OTP bhejkar confirm karenge, Naye bank account ki details cross-check karenge, aur Purana PMKMY account verify karenge.</SI>
            <SI n={5}><strong>Acknowledgement Slip Lein:</strong> Application submit karne ke baad ek acknowledgement slip le lein jisme ye details hon: Application reference number, Submission date, aur CSC/Bank ka stamp aur signature. Is slip ko safe rakhein — status check karne me kaam aayegi.</SI>
            <SI n={6}><strong>Confirmation Ka Wait Karein:</strong> Update complete hone me time lagta hai: Minimum 7-10 working days, Maximum 30 working days, Average 15-20 din. Confirmation SMS aapke registered mobile par aayega jab account change ho jayega. Samay state aur bank ke hisab se thoda alag ho sakta hai.</SI>
          </StepList>

          <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/articles/maandhan/bank-account-change/csc-visit-process.webp"
              alt="CSC center par bank account change karne ka process"
              width={1000}
              height={560}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
              CSC center official recommended channel hai bank details update karne ke liye
            </p>
          </div>
        </section>

        <section className="mb-8 bg-gray-50 dark:bg-gray-900/50 p-6 rounded-xl">
          <SH>Online Ya Offline — Kaunsa Tarika Behtar Hai?</SH>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-bold text-green-600 dark:text-green-400 mb-3">Offline via CSC (Official & Recommended)</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>PMKMY guidelines ka primary official channel hai</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>VLE seedha portal par biometric verification karke update karta hai</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>Instant acknowledgement slip mil jati hai</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>Standard nominal charge (₹20-₹50) hi lagta hai</span></li>
                <li className="flex items-start"><span className="text-red-600 mr-2">✗</span><span>CSC center tak physical travel karna padta hai</span></li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-bold text-orange-600 dark:text-orange-400 mb-3">Bank Branch Visit (Alternative)</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>Agar CSC door ho, to nearby branch useful ho sakti hai</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>Bank staff aapki passbook aur Aadhaar cross-check kar sakte hain</span></li>
                <li className="flex items-start"><span className="text-red-600 mr-2">✗</span><span>Kabhi-kabhi bank staff ke paas PMKMY portal ka direct access nahi hota</span></li>
                <li className="flex items-start"><span className="text-red-600 mr-2">✗</span><span>Request phir bhi CSC/portal ke through hi forward karni padti hai</span></li>
                <li className="flex items-start"><span className="text-red-600 mr-2">✗</span><span>Process thoda lamba ya confusing ho sakta hai</span></li>
              </ul>
            </div>
          </div>
          <WB>
            <strong>Hamari Salah:</strong> Official PMKMY process ke mutabik, CSC/VLE ke through hi bank details update karna sabse reliable aur recommended tarika hai. Bank branch sirf tab visit karein jab CSC accessible na ho, aur pehle manager se confirm karein ki wo PMKMY update support karte hain.
          </WB>
        </section>

        <section className="mb-8">
          <SH>Common Problems Aur Unka Hal</SH>

          <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/articles/maandhan/bank-account-change/common-problems.webp"
              alt="PMKMY bank account change me aane wali common problems"
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

          <div className="space-y-4">
            <div className="border border-red-200 dark:border-red-800 rounded-lg p-5 bg-red-50 dark:bg-red-900/20">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Problem 1: Purane Bank Me Paisa Atak Gaya</h3>
              <p className="text-sm text-[var(--color-text-muted)] mb-2"><strong>Scenario:</strong> Aapne bank change kar diya, lekin purane account se last contribution kat gaya.</p>
              <p className="text-sm text-[var(--color-text-muted)]"><strong>Solution:</strong> Ghabraiye mat — ye paisa waste nahi hoga. Jab account change complete hoga, to system automatically naye account se link ho jayega. Purane account ka balance aur contributions transfer ho jayenge. Bas confirmation ka wait karein.</p>
            </div>

            <div className="border border-orange-200 dark:border-orange-800 rounded-lg p-5 bg-orange-50 dark:bg-orange-900/20">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Problem 2: OTP Nahi Aa Raha</h3>
              <p className="text-sm text-[var(--color-text-muted)] mb-2"><strong>Scenario:</strong> Aapka registered mobile number badal gaya hai, aur naye number par OTP nahi aa raha.</p>
              <p className="text-sm text-[var(--color-text-muted)]"><strong>Solution:</strong> Pehle mobile number update karwana padega PMKMY portal par. Iske liye CSC ya bank branch me jaakar mobile number change application dein. Number update hone ke baad hi khata badal payenge.</p>
            </div>

            <div className="border border-yellow-200 dark:border-yellow-800 rounded-lg p-5 bg-yellow-50 dark:bg-yellow-900/20">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Problem 3: Aadhaar Linking Issue</h3>
              <p className="text-sm text-[var(--color-text-muted)] mb-2"><strong>Scenario:</strong> Naye bank account me Aadhaar link nahi hai.</p>
              <p className="text-sm text-[var(--color-text-muted)]"><strong>Solution:</strong> Khata badalne se pehle Aadhaar linking zaroori hai. Apne bank branch me jaakar Aadhaar seeding form bharein. 24-48 ghante me linking ho jayegi, uske baad hi PMKMY me account change karein.</p>
            </div>

            <div className="border border-blue-200 dark:border-blue-800 rounded-lg p-5 bg-blue-50 dark:bg-blue-900/20">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Problem 4: Naam Me Spelling Difference</h3>
              <p className="text-sm text-[var(--color-text-muted)] mb-2"><strong>Scenario:</strong> PMKMY me "Ramesh Kumar" hai, lekin naye bank account me "Ramesh K." likha hai.</p>
              <p className="text-sm text-[var(--color-text-muted)]"><strong>Solution:</strong> Chhoti differences (initials, spelling variations) usually accept ho jati hain. Lekin agar naam bilkul alag hai, to pehle bank me jaakar naam correction karwayein, phir PMKMY update karein.</p>
            </div>

            <div className="border border-green-200 dark:border-green-800 rounded-lg p-5 bg-green-50 dark:bg-green-900/20">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Problem 5: Process Bahut Lamba Chal Raha Hai</h3>
              <p className="text-sm text-[var(--color-text-muted)] mb-2"><strong>Scenario:</strong> 30 din se zyada ho gaye, lekin abhi tak confirmation nahi aaya.</p>
              <p className="text-sm text-[var(--color-text-muted)]"><strong>Solution:</strong> PMKMY helpline number par call karein, apni application reference number ready rakhein, bank branch me complaint darj karein, CSC par jaakar status check karein, ya official PMKMY portal par grievance register karein. Kaunsa number kab use karein, email complaint ka ready format, aur escalation ka sahi order — ye sab <Link href="/maandhan/pmkmy-grievance-complaint-helpline" className="underline text-green-700 dark:text-green-400">PMKMY helpline & grievance guide</Link> mein step-by-step diya hai.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>Kuch Special Situations Ka Hal</SH>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-[var(--color-border)]">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Case 1: Joint Account Se Individual Account Me Change</h3>
              <p className="text-sm text-[var(--color-text-muted)] mb-2">Joint account (patni/pati ke sath) se individual account me shift karne ke liye:</p>
              <ul className="list-disc pl-6 text-sm text-[var(--color-text-muted)] space-y-1">
                <li>Dono account holders ka NOC (No Objection Certificate) chahiye</li>
                <li>Individual account ki passbook</li>
                <li>Joint account closure proof (agar close kar rahe hain)</li>
                <li>CSC ya bank manager ko written application</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-[var(--color-border)]">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Case 2: Bank Merger Ho Gaya</h3>
              <p className="text-sm text-[var(--color-text-muted)] mb-2">Agar aapka bank merger ho gaya hai (jaise Oriental Bank of Commerce ka PNB me merger), aur account number ya IFSC change ho gaya hai:</p>
              <ul className="list-disc pl-6 text-sm text-[var(--color-text-muted)] space-y-1">
                <li>Naye IFSC code aur account number ki updated passbook lein</li>
                <li>Bank se merger certificate lein (agar available ho)</li>
                <li>PMKMY portal par update karne ke liye CSC me jaayein ya bank branch me application dein</li>
                <li>Kuch cases me automatic update bhi ho jata hai — status check karein</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-[var(--color-border)]">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Case 3: Account Holder Ka Dehant</h3>
              <p className="text-sm text-[var(--color-text-muted)] mb-2">PMKMY account holder ka dehant ho gaya, aur ab nominee/spouse apne account me pension lena chahta hai:</p>
              <ul className="list-disc pl-6 text-sm text-[var(--color-text-muted)] space-y-1">
                <li>Death certificate chahiye</li>
                <li>Nominee/spouse ka Aadhaar</li>
                <li>Nominee ka bank account details</li>
                <li>Legal heir certificate (agar required ho)</li>
                <li>Bank branch me succession certificate process</li>
              </ul>
            </div>
          </div>

          <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/articles/maandhan/bank-account-change/success-confirmation.webp"
              alt="Bank account change successful confirmation SMS aur updated passbook"
              width={1000}
              height={560}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
              Confirmation SMS aane ke baad hi purana account band karein
            </p>
          </div>
        </section>

        <section className="mb-8">
          <SH>Application Ka Status Kaise Check Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Application submit karne ke baad aap ye tareeke try kar sakte hain:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2"> SMS Se</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Registered mobile par SMS aayega jab account change complete hoga. "PMKMY BANK UPDATED" jaisa message milega.</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-100 dark:border-green-800">
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2"> Bank/CSC Visit</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Apne nazdeeki CSC ya naye bank branch me jaakar puchhein ki PMKMY account update ho gaya hai ya nahi.</p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-100 dark:border-yellow-800">
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Online Portal</h3>
              <p className="text-xs text-[var(--color-text-muted)]">PMKMY official portal par login karke apni updated details check karein.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>Application Se Pehle Aur Baad Ki 7 Checks</SH>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-red-600 mr-3 font-bold text-xl">!</span>
              <p className="text-sm text-[var(--color-text-muted)]"><strong>Tip 1:</strong> Application dene se pehle purane account me kam se kam 3 mahine ka contribution balance rakhein.</p>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 mr-3 font-bold text-xl">!</span>
              <p className="text-sm text-[var(--color-text-muted)]"><strong>Tip 2:</strong> Naye bank account ko Aadhaar se link karna mandatory hai — bina iske change nahi hoga.</p>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 mr-3 font-bold text-xl">!</span>
              <p className="text-sm text-[var(--color-text-muted)]"><strong>Tip 3:</strong> Hamesha acknowledgement slip lein aur safe rakhein — future me proof ka kaam degi.</p>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 mr-3 font-bold text-xl">!</span>
              <p className="text-sm text-[var(--color-text-muted)]"><strong>Tip 4:</strong> Bank change ke dauran purane account ko band mat karein — confirmation ka wait karein.</p>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 mr-3 font-bold text-xl">!</span>
              <p className="text-sm text-[var(--color-text-muted)]"><strong>Tip 5:</strong> IFSC code double-check karein — galat IFSC se transaction fail ho jayega.</p>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 mr-3 font-bold text-xl">!</span>
              <p className="text-sm text-[var(--color-text-muted)]"><strong>Tip 6:</strong> Mobile number active rakhein — har update SMS par aayega.</p>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 mr-3 font-bold text-xl">!</span>
              <p className="text-sm text-[var(--color-text-muted)]"><strong>Tip 7:</strong> Bank change ke baad pehla contribution manually check karein ki naye account se kata hai ya nahi.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Bank Account Change Se Jude Sawal-Jawab
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM-KMY Khata Update — Sawal Jawab" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Purana Account Kab Band Karein — Iska Jawab Pehla Debit Hai</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Is process ki ek hi galti mehengi padti hai: confirmation aane se pehle purana account band kar dena. Sahi sequence yeh hai — change application ke waqt purane account mein 3 mahine ka contribution balance rakhein, naye account ka Aadhaar-link aur IFSC do baar milaayein, aur jab tak pehla contribution naye account se kat-ta hua na dikhe, purana account chalu rakhein. Wahi pehla debit is transfer ka asli "completion certificate" hai; acknowledgement slip uske record ke saath sambhaal kar rakh lein.
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
          <h3 className="text-lg font-black text-[var(--color-text)] mb-4">Aapke Liye Aur Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {RELATED_CARDS.map((card) => (
              <Link
                key={card.slug}
                href={`/maandhan/${card.slug}`}
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

        <AuthorBox modified={MODIFIED} bioKey="pmkmy-bank-account-change" />
        <BottomNav extraLinks={[
          { href: '/maandhan/pm-kisan-maandhan-pension-card-download', l: 'Pension Card' },
          { href: '/maandhan/pm-kisan-maandhan-status-check-online', l: 'Status Check' },
          { href: '/maandhan/pm-kisan-maandhan-eligibility-documents', l: 'Eligibility' },
        ]} />
        <Disclaimer k="pmkmy-bank-account-change" />
      </div>
    </>
  );
}
