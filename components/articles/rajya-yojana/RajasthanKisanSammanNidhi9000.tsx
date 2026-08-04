'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ExternalLinkButton from '@/components/ExternalLinkButton';

const IMG_BASE = '/images/articles/rajya-yojna/rajasthan-kisan-samman-nidhi-9000';

function Fig({
  src,
  alt,
  caption,
  width = 1200,
  height = 800,
  priority = false,
}: {
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
  priority?: boolean;
}) {
  return (
    <figure className="my-8 not-prose rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
      <Image
        src={`${IMG_BASE}/${src}`}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto object-cover"
        sizes="(max-width: 768px) 100vw, 768px"
        priority={priority}
      />
      <figcaption className="text-center text-xs text-gray-600 dark:text-gray-400 py-2 px-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        {caption}
      </figcaption>
    </figure>
  );
}

function FaqItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800 mb-3 shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900 dark:text-gray-100 pr-4 text-sm md:text-base">{question}</span>
        <span
          className={`text-xl text-green-600 dark:text-green-400 transition-transform duration-300 shrink-0 ${
            isOpen ? 'rotate-45' : ''
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 pt-0 text-sm text-gray-700 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-700">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function RajasthanKisanSammanNidhi9000() {
  const canonicalUrl = 'https://kisanstatus.com/rajya-yojana/rajasthan-kisan-samman-nidhi-9000';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Rajasthan Kisan Samman Nidhi: ₹9,000 Kaise Milte Hain aur ₹12,000 Wale Prastaav Ka Sach',
    description: 'Rajasthan Mukhyamantri Kisan Samman Nidhi ki eligibility, 6vi kist ka status, aur ₹12,000 ki badhotri abhi tak confirm hui hai ya nahi — sab detail mein.',
    image: `https://kisanstatus.com${IMG_BASE}/hero.webp`,
    author: { '@type': 'Organization', name: 'KisanStatus Team', url: 'https://kisanstatus.com/about' },
    publisher: {
      '@type': 'Organization',
      name: 'KisanStatus.com',
      url: 'https://kisanstatus.com',
      logo: { '@type': 'ImageObject', url: 'https://kisanstatus.com/logo.png', width: 250, height: 60 },
    },
    datePublished: '2024-06-01',
    dateModified: '2026-08-03',
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
  };

  const faqs = [
    {
      q: 'Kya ₹12,000 ki badhotri confirm ho chuki hai?',
      a: 'Nahi. CM Bhajanlal Sharma ne prastaav rakha hai ki state apna hissa double kar de, lekin gazette notification abhi nahi aaya. Jab tak wo nahi aata, kagaz par ye sirf ek idea hai — paisa ₹9,000 wale hisaab se hi maano.',
    },
    {
      q: '6vi kist kab tak aa jaani chahiye?',
      a: 'Koi fix date nahi hai abhi. April mein release honi thi, verification mein atak gayi. August tak aane ki baat chal rahi hai lekin ye estimate hai, promise nahi. Sabse accurate cheez apna Aadhaar number Jan Soochna portal par daal ke dekh lena hai.',
    },
    {
      q: 'Registration alag se karna padega kya?',
      a: 'Nahi. Ye scheme ka sabse acha part hai — PM Kisan mein naam hai to yahan bhi automatically aa jaate ho. Kuch extra bharne ki zaroorat nahi.',
    },
    {
      q: 'PM Kisan band ho jaaye to ye chalti rahegi?',
      a: 'Nahi chalegi. State wali scheme central wali ke upar khadi hai — jad kaat do to poora paudha hi sookh jaata hai.',
    },
    {
      q: 'Mobile number badal gaya, OTP nahi aa raha, ab kya?',
      a: (
        <>
          Pehle Aadhaar mein number update karwao, uske baad PM Kisan portal par. State wali list mein khud-ba-khud reflect ho jaayega — bas thoda time lagta hai, ek din mein umeed mat rakhna.
        </>
      ),
    },
    {
      q: 'Dusre state mein reh kar Rajasthan wala fayda le sakte hain?',
      a: 'Nahi. Permanent resident hona zaroori shart hai. Shift ho gaye ho to us din se eligibility khatam samjho.',
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article className="max-w-4xl mx-auto px-4 py-8 prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-blue-600 dark:prose-a:text-blue-400">

        <div className="mb-8 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-600 not-prose shadow-sm">
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-0">
            <strong>Status (4 August 2026):</strong> 6vi kist abhi bhi pending hai. April mein aani thi, verification mein phas gayi. Neeche jitni bhi dates likhi hain, wo estimate hain — koi bhi WhatsApp forward maankar mat chaliye.
          </p>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          Rajasthan Kisan Samman Nidhi: ₹9,000 Kaise Milte Hain aur ₹12,000 Wale Prastaav Ka Sach
        </h1>

        <Fig
          src="hero.webp"
          alt="Rajasthan ka kisan apne khet mein mobile par Kisan Samman Nidhi ka status dekh raha hai"
          caption="Rajasthan Kisan Samman Nidhi — PM Kisan ke ₹6,000 ke saath state ka ₹3,000, total ₹9,000 saalana"
          width={1200}
          height={675}
          priority
        />

        <p>
          PM Kisan ke upar Rajasthan sarkar apna alag se ₹3,000 saalana deti hai. Jod ke ₹9,000 banta hai. Itna toh clear hai.
        </p>

        <p>
          Confusion wahan shuru hoti hai jahan log ₹12,000 wale number ke peeche bhaagte hain — jo abhi tak sirf ek ghoshna hai, khaate mein aane wali raashi nahi. Neeche dono baatein saaf-saaf alag karke rakhi hain: kya pakka hai, aur kya sirf umeed.
        </p>

        <h2>Scheme Kaam Kaise Karti Hai</h2>

        <p>
          Alag se apply karne ki zaroorat nahi. Jo PM Kisan mein hai, wo yahan bhi hai — bas itna simple hai.
        </p>

        <p>
          Center se ₹6,000 aate hain (₹2,000 ki teen kiste). Rajasthan apni taraf se ₹3,000 aur jodta hai (₹1,000 ki teen kiste). Total mila ke saal bhar mein ₹9,000, chhah alag payments mein.
        </p>

        <div className="overflow-x-auto my-8 not-prose">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 rounded-xl overflow-hidden text-sm shadow-sm">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Yojana</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Annual Amount</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Kiste</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">PM Kisan Samman Nidhi</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">₹6,000</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">3 × ₹2,000</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <td className="border border-gray-300 dark:border-gray-600 p-3">Mukhyamantri Kisan Samman Nidhi</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">₹3,000</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">3 × ₹1,000</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800 font-semibold">
                <td className="border border-gray-300 dark:border-gray-600 p-3">Total</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-700 dark:text-green-400">₹9,000</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">6</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ExternalLinkButton
          url="https://jansoochna.rajasthan.gov.in"
          label="Official Portal — Jan Soochna Rajasthan"
        />

        <h2>₹12,000 Ka Sach — Announcement Aur Notification Mein Fark Hai</h2>

        <p>
          CM Bhajanlal Sharma ne prastaav rakha hai ki state apna ₹3,000 wala hissa badhakar ₹6,000 kar de — jisse total ₹12,000 tak pahunch jaaye. News mein khoob chal raha hai, isme koi shak nahi.
        </p>

        <p>
          Par ghoshna aur notification do alag cheezein hain. Jab tak Finance ya Agriculture Department ka gazette notification nahi aata, ye sirf ek plan hai, benefit nahi. Kisi bhi kagaz par ye ₹12,000 nazar nahi aayega abhi.
        </p>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-5 my-6 rounded-r-lg not-prose shadow-sm">
          <h3 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2 text-sm">⚠️ Savdhaan</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
            WhatsApp aur YouTube par "₹12,000 aa gaye" jaisi khabrein ghoom rahi hain — ye sach nahi hain. Apna budget ₹9,000 ke hisaab se hi rakho. Badhotri aayi to bonus samjho, plan mat karo.
          </p>
        </div>

        <h2>Eligible Kaun Hai, Kaun Nahi</h2>

        <p>
          Yahan koi alag test nahi hai — jo PM Kisan pass karta hai, wahi yahan bhi eligible hota hai. Bas kuch bunyaadi sharten:
        </p>

        <ul>
          <li><strong>PM Kisan mein registered ho, e-KYC bhi complete ho.</strong> Wahan koi gadbad hai to yahan bhi wahi gadbad chalegi.</li>
          <li><strong>Rajasthan ka permanent resident ho.</strong> Bahar se aakar yahan kheti karne wale is scheme mein nahi aate.</li>
          <li><strong>Zameen apni ho.</strong> Landless mazdoor aur bataidar (tenant farmers) is scheme se bahar hain.</li>
          <li><strong>Bank account DBT-enabled ho</strong> — yahin paisa aata hai, kahin aur nahi.</li>
        </ul>

        <p>
          Bahar rehne wale bhi hain: sarkari-mandir-trust zameen, wo family jisme koi MP-MLA-Mayor jaisa post raha ho, ₹10,000 se zyada pension paane wale retired officers, income tax bharne wale, aur registered doctors-engineers-CAs-lawyers. Inme se kisi bhi category mein aate ho to yahan naam nahi aayega.
        </p>

        <p>
          Naye kisan ho aur abhi shuruaat ki hai? Pehle PM Kisan mein register karo (CSC centre ya online), e-KYC karwao, Patwari se land record verify karwao. Approval milte hi state wali list mein khud aa jaoge. Poora process district ke hisaab se 1-3 mahine le sakta hai — jaldi mat karna, ye normal speed hai.
        </p>

        <h3>Pati-Patni Dono Le Sakte Hain?</h3>
        <p>
          Nahi. Ek family — pati, patni, aur unmarried bachche — mein sirf ek hi vyakti eligible hota hai. Dono ne register karwa liya to ek registration cancel hoga, aur jitna extra le liya wo wapas bhi karna pad sakta hai. Detail mein <Link href="/rajya-yojana/pm-kisan-pati-patni-dono-ko-milega">is article</Link> mein padho.
        </p>

        <h2>6vi Kist — Ruki Kyun Hai</h2>

        <p>
          Pehli paanch kiste time par aa chuki hain, koi issue nahi hua. 6vi wali April 2026 mein aani thi — verification aur data-matching mein atak gayi. Officially koi naya date announce nahi hua hai.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-5 my-6 not-prose">
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
            <strong>Yaad rakho:</strong> Rajasthan wali kist PM Kisan ki kist se bilkul alag time par aati hai — dono ka koi connection nahi. PM Kisan aa gaya aur state wala nahi, to ghabrane ki baat nahi, ye normal hi hai.
          </p>
        </div>

        <h2>Status Kaise Check Karein</h2>

        <p>Do tareeke hain, dono free hain, dono online hote hain.</p>

        <Fig
          src="status-check-phone.webp"
          alt="Kisan mobile par Jan Soochna portal kholkar Kisan Samman Nidhi ka payment status check kar raha hai"
          caption="Status check bilkul free hai — Jan Soochna portal mobile par bhi khul jaata hai"
        />

        <h3>Jan Soochna Portal</h3>

        <ol>
          <li><code>jansoochna.rajasthan.gov.in</code> kholo</li>
          <li>"Mukhyamantri Kisan Samman Nidhi" search karke scheme select karo</li>
          <li>Aadhaar ya Jan Aadhaar number daalo</li>
          <li>Registered mobile par aaya OTP verify karo</li>
          <li>Status saamne aa jaayega — Payment Successful, Pending, ya Rejected</li>
        </ol>

        <ExternalLinkButton url="https://jansoochna.rajasthan.gov.in" label="Jan Soochna Portal — Status Check" />

        <h3>Rajasthan Cooperative Portal</h3>

        <ol>
          <li><code>rajsahakar.rajasthan.gov.in</code> par jao</li>
          <li>"Know Your Status" mein "CM Kisan Status" chuno</li>
          <li>Details bharkar status dekh lo</li>
        </ol>

        <ExternalLinkButton url="https://rajsahakar.rajasthan.gov.in/citizen/cmkisanstatus" label="Cooperative Portal — CM Kisan Status" />

        <h2>Paisa Nahi Aaya — Ab Kya</h2>

        <p>
          Sabse pehle bank statement khud check karo — SMS kabhi-kabhi miss ho jaata hai lekin paisa phir bhi aa chuka hota hai. "NEFT", "DBT" ya "Rajasthan Govt" naam ki entry dhundo.
        </p>

        <p>
          Kuch nahi mila to PFMS portal par dispatch status dekho. Wahan "Successful" dikhe aur bank mein na aaya ho, to branch jaakar NPCI mapping check karwao — zyadatar yahi wajah nikalti hai.
        </p>

        <Fig
          src="bank-visit.webp"
          alt="Kisan bank branch mein passbook lekar DBT payment aur NPCI mapping check karwa raha hai"
          caption="Portal par \"Successful\" dikhe par paisa na aaya ho — bank branch mein NPCI mapping check karwao"
        />

        <p>
          Fir bhi kuch samajh na aaye to helpline try karo — Toll Free <strong>1064</strong>, WhatsApp <strong>9413502834</strong>. (Ye numbers publicly listed hain; call se pehle ek baar portal par bhi confirm kar lo, kyunki helpline numbers samay samay par badalte rehte hain.)
        </p>

        <p>
          Aur agar online sab sahi dikh raha hai fir bhi paisa nahi aa raha — seedhe Patwari ya Tehsildar ke paas chale jao. Kai baar land record ka koi purana jhanjhat hota hai jo sirf ground level par hi sulajhta hai.
        </p>

        <Fig
          src="patwari-office.webp"
          alt="Do kisan gaon ke patwari office mein land record aur jamabandi ki entry verify karwa rahe hain"
          caption="Land record ka jhanjhat sirf Patwari ya Tehsil office mein hi theek hota hai"
        />

        <h2>PM Kisan vs Rajasthan Wali Scheme — Kya Fark Hai</h2>

        <div className="overflow-x-auto my-8 not-prose">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 rounded-xl overflow-hidden text-sm shadow-sm">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Parameter</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">PM Kisan</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Rajasthan Scheme</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">Source</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">Central Government</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">State Government</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <td className="border border-gray-300 dark:border-gray-600 p-3">Annual Amount</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">₹6,000</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">₹3,000</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">Registration</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">Separate karna padta hai</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">Auto (PM Kisan-linked)</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <td className="border border-gray-300 dark:border-gray-600 p-3">Portal</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">pmkisan.gov.in</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">jansoochna.rajasthan.gov.in</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Yaad rakhne wali baat sirf ek hai: PM Kisan mein eligible ho to state wali mein bhi ho. Wahan koi issue (e-KYC pending, Aadhaar mismatch) hai to wahi issue yahan bhi chalega — dono ek doosre se juda hua hai.
        </p>

        <h2>Aksar Aane Wale Problems</h2>

        <p>
          <strong>"PM Kisan aa gaya, Rajasthan wala nahi aaya"</strong> — normal hai, dono alag time par release hote hain. 15-20 din ka gap chalta hai. Ek mahine se zyada ho jaaye tab portal check karo.
        </p>

        <p>
          <strong>"Status mein Rejected dikha raha hai"</strong> — usually Aadhaar aur land record ka naam match nahi karta, ya bank DBT-enabled nahi, ya family mein koi income tax payer hai, ya duplicate entry ban gayi hai. Patwari ke paas jaakar records theek karwao.
        </p>

        <p>
          <strong>"Amount kam ya zyada aaya"</strong> — kabhi purani kist ka arrear naye payment ke saath jud jaata hai. Jan Soochna portal ki transaction history mein poora hisaab mil jaayega.
        </p>

        <h2>Documents Jo Kaam Aa Sakte Hain</h2>

        <ul>
          <li>Aadhaar Card (PM Kisan se linked)</li>
          <li>Jan Aadhaar (Rajasthan-specific ID)</li>
          <li>Bank Passbook, DBT-enabled account ka</li>
          <li>Land Records — Jamabandi ya Khatauni</li>
          <li>Mobile Number, Aadhaar se linked (OTP ke liye)</li>
        </ul>

        <Fig
          src="documents-checklist.webp"
          alt="Rajasthan Kisan Samman Nidhi ke liye zaroori documents — bank passbook, Aadhaar, Jan Aadhaar aur land record"
          caption="Status check ya correction ke waqt yeh kagaz saath rakho — passbook, Aadhaar, Jan Aadhaar aur jamabandi"
        />

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-5 my-6 rounded-r-lg not-prose shadow-sm">
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
            <strong>Ek baat saaf sun lo:</strong> ye scheme poori tarah free aur automatic hai. Koi agent "registration karwane" ke naam par paisa maange, to samajh jao wo fraud hai. Report karo, paisa mat do.
          </p>
        </div>

        <h2>Dusre States Mein Kya Chal Raha Hai</h2>

        <p>Rajasthan akela nahi hai — kai states apni kisan schemes chala rahe hain:</p>

        <ul>
          <li><Link href="/rajya-yojana/annadata-sukhibhava-status-check-2026">Annadata Sukhibhava (Andhra Pradesh)</Link></li>
          <li><Link href="/rajya-yojana/namo-shetkari-yojana-status-check-2026">Namo Shetkari Mahasanman Nidhi (Maharashtra)</Link></li>
          <li><Link href="/rajya-yojana/mp-kisan-kalyan-yojana-kist-status">MP CM Kisan Kalyan Yojana</Link></li>
          <li><Link href="/rajya-yojana/state-kisan-yojana-list-all-states-2026">Sab States Ki List — Ek Table Mein</Link></li>
        </ul>

        <h2>FAQs</h2>
        <div className="space-y-3 my-8 not-prose">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.q} answer={faq.a} />
          ))}
        </div>

        <h2>Aakhri Baat</h2>

        <p>
          ₹9,000 saal bhar mein koi bahut badi raashi nahi lagti, lekin beej-khaad-diesel ke badhte kharche mein har kist kaam aati hai. Iska zyada faayda tabhi hoga jab aap timeline ko lekar realistic raho — jo confirm hai usi par plan karo, jo announcement hai usko bonus samjho.
        </p>

        <p>
          ₹12,000 ka notification aa gaya to hum yahan sabse pehle update karenge. Tab tak Jan Soochna portal apna dost hai — WhatsApp forwards nahi.
        </p>

        <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-xl border-l-4 border-orange-500 not-prose shadow-sm">
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
            <strong className="text-orange-600 dark:text-orange-400 block mb-2">Disclaimer:</strong>
            Ye article sirf jankari ke liye hai. Kist dates, badhotri, aur eligibility rules samay samay par badal sakte hain. Apply ya status check se pehle Jan Soochna portal ya apne District Agriculture office se current status zaroor confirm kar lein. Last updated: August 2026.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t-2 border-gray-200 dark:border-gray-700 not-prose">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Aage Kya Padhein?</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/articles/PmKisan24viKist2026" className="group flex flex-col bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-green-500 hover:shadow-lg transition-all">
              <h4 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-green-600 transition-colors mb-1">PM Kisan 24vi Kist</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Next installment kab aayegi.</p>
            </Link>
            <Link href="/rajya-yojana/state-kisan-yojana-list-all-states-2026" className="group flex flex-col bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:shadow-lg transition-all">
              <h4 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors mb-1">State Kisan Yojana List</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Sab states ka comparison ek jagah.</p>
            </Link>
            <Link href="/rajya-yojana/pm-kisan-pati-patni-dono-ko-milega" className="group flex flex-col bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 hover:shadow-lg transition-all">
              <h4 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 transition-colors mb-1">Pati-Patni Dono Ko Milega?</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">PM Kisan ka family rule samjho.</p>
            </Link>
          </div>
        </div>

      </article>
    </>
  );
}
