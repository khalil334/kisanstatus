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

export default function RajasthanKisanSammanNidhi9000() {
  const faqs = [
    {
      q: 'Kya ₹12,000 ki badhotri confirm ho chuki hai?',
      a: '⚠️ Ye abhi sirf ghoshna hai, official notification nahi aaya. Jab tak Finance ya Agriculture Department ka gazette notification na aaye, paisa ₹9,000 wale hisaab se hi maano.',
    },
    {
      q: '6vi kist kab tak aa jaani chahiye?',
      a: 'Officially koi date announce nahi hui hai. Kisi bhi tareekh ka andaaza lagana bekaar hai — WhatsApp par ghoom rahi dates par bharosa na karein. Sahi jaankari ek hi jagah milegi: apna Aadhaar number Jan Soochna portal par daal kar khud status dekh lein.',
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
      a: 'Pehle Aadhaar mein number update karwao, uske baad PM Kisan portal par. State wali list mein khud-ba-khud reflect ho jaayega — bas thoda time lagta hai, ek din mein umeed mat rakhna.',
    },
    {
      q: 'Dusre state mein reh kar Rajasthan wala fayda le sakte hain?',
      a: 'Nahi. Permanent resident hona zaroori shart hai. Shift ho gaye ho to us din se eligibility khatam samjho.',
    },
  ];

  return (
    <>
      <article className="max-w-4xl mx-auto px-4 py-8 prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-blue-600 dark:prose-a:text-blue-400">

        <div className="mb-8 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-600 not-prose shadow-sm">
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-0">
            <strong>Status (4 August 2026):</strong> 6vi kist abhi pending hai. ⚠️ Next kist date officially announce nahi hua. Jan Soochna portal check karte rahein — kisi bhi WhatsApp forward wali tareekh par bharosa na karein.
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
          Confusion wahan shuru hoti hai jahan log ₹12,000 wale number ke peeche bhaagte
          hain. Wo abhi tak sirf ek ghoshna hai — khaate mein aane wali raashi nahi.
          Umeed rakhna galat nahi, par usi par budget banana galat hai. Neeche dono
          baatein saaf-saaf alag karke rakhi hain: kya pakka hai, aur kya sirf umeed.
        </p>

        <h2>Scheme Kaam Kaise Karti Hai</h2>

        <p>
          Alag se apply karne ki zaroorat nahi. Jo PM Kisan mein hai, wo yahan bhi hai.
          Bas. Itna simple.
        </p>

        <p>
          Lekin &ldquo;automatic&rdquo; ka matlab &ldquo;bina shart&rdquo; nahi hai. Rajasthan mein ek extra layer hai jo dusre
          rajyon mein nahi milti — Jan Aadhaar. State ka har DBT payment Jan Aadhaar-linked bank
          account se hokar jaata hai, aur yahi baat is scheme ko PM Kisan se alag banati hai. PM Kisan
          ka paisa seedha Aadhaar-NPCI raste se aata hai; state ka ₹1,000 Jan Aadhaar family record se
          match hone ke baad hi release hota hai. Isi ek farak se sabse zyada payment atakte hain, aur
          isi wajah se aapko PM Kisan mil sakta hai jabki state wala na mile.
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

        <h2>Scheme Ka Safar — ₹2,000 Se ₹3,000 Tak</h2>

        <p>
          Aaj jo ₹3,000 milte hain, wo shuru se ₹3,000 nahi the. Baat yeh hai ki ye jaan lena kaam aata hai, kyunki
          purane articles aur purane YouTube videos aaj bhi purani raqam bata rahe hain — aur wahi
          confusion ka ek bada source hai.
        </p>

        <p>
          Budget 2024-25 mein Rajasthan sarkar ne pehli baar ailaan kiya ki PM Kisan ke ₹6,000 ke
          upar state apni taraf se <strong>₹2,000 saalana</strong> dega. Scheme zameen par 30 June 2024
          ko Tonk se launch hui. Uske agle saal, Budget 2025-26 mein, ye state hissa
          <strong>₹2,000 se badhakar ₹3,000</strong> kar diya gaya — aur tabhi se total ₹9,000 ka aankda
          bana. Matlab ₹9,000 wala figure khud ek badhotri ka nateeja hai, shuruaati raqam nahi.
        </p>

        <div className="overflow-x-auto my-8 not-prose">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 rounded-xl overflow-hidden text-sm shadow-sm">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Kab</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Kya hua</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">State ka hissa</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">Budget 2024-25</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">Scheme ka ailaan</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">₹2,000 saalana</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <td className="border border-gray-300 dark:border-gray-600 p-3">30 June 2024</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">Tonk se launch</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">₹2,000 saalana</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">Budget 2025-26</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">Badhotri — total ₹9,000 bana</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">₹3,000 saalana</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <td className="border border-gray-300 dark:border-gray-600 p-3">18 October 2025</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">Nadbai, Bharatpur se kist — 71.8 lakh kisan, ₹718 crore</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">₹1,000 per kisan</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Ye aakhri line dhyan se padhein: ek kist mein 71.8 lakh kisan aur ₹718 crore. Isse do baatein
          pata chalti hain — ek, scheme ka scale bahut bada hai; do, itne bade beneficiary base ko verify
          karne mein waqt lagta hai, aur yahi wajah hai ki kist ki tareekh aage-peeche hoti rehti hai.
          Ye kisi ek kisan ki file ka issue nahi, poore system ka size hai.
        </p>

        <h2>₹12,000 Ka Sach — Announcement Aur Notification Mein Fark Hai</h2>

        <p>
          CM Bhajanlal Sharma ne prastaav rakha hai ki state apna ₹3,000 wala hissa badhakar ₹6,000 kar de — jisse total ₹12,000 tak pahunch jaaye. ⚠️ Ye abhi sirf ghoshna hai, official notification nahi aaya.
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
          Pehli paanch kiste time par aa chuki hain — koi issue nahi hua. 6vi kist
          verification aur data-matching mein atki hai. Kab aayegi? Next kist ki date
          officially announce nahi hui. Intezaar khalta hai, par afwaahon se date nahi
          banti — Jan Soochna portal check karte rahein.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-5 my-6 not-prose">
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
            <strong>Yaad rakho:</strong> Rajasthan wali kist PM Kisan ki kist se bilkul alag time par aati hai — dono ka koi connection nahi. PM Kisan aa gaya aur state wala nahi, to chinta chhodo, ye normal hi hai.
          </p>
        </div>

        <h2>Jan Aadhaar — Rajasthan Ka Asli Gatekeeper</h2>

        <p>
          Dusre rajyon ke kisan sirf Aadhaar aur bank ki chinta karte hain. Rajasthan mein
          ek teesri cheez hai. Utni hi zaroori. Aur zyadatar log ise halke mein lete hain —
          jab tak kist atak na jaaye.
        </p>

        <p>
          Jan Aadhaar Rajasthan ka family identity system hai — 10-ank ka family ID aur har sadasya ka
          11-ank ka member ID. Ye Bhamashah card ki jagah April 2020 mein aaya, aur aaj state ki
          lagbhag poori aabaadi isme cover hai. Iske bina state ki koi bhi badi scheme nahi chalti —
          ration, pension, scholarship, health cover, aur haan, ye kisan wali kist bhi.
        </p>

        <p>
          Ek baat jo kaagaz par likhi hai lekin log kam jaante hain: Jan Aadhaar mein ghar ka
          <strong>mukhiya aurat hoti hai</strong> — 18 saal se upar ki mahila. Agar ghar mein aisi koi
          mahila nahi hai, tab 21 saal se upar ka purush mukhiya banta hai. Iska seedha asar aap par ye
          padta hai: kist us bank account mein jaa sakti hai jo mukhiya ke naam par mapped hai, jabki
          zameen kisi aur sadasya ke naam par ho. Ghar mein ye baat pehle se saaf kar lena behtar hai,
          warna &ldquo;paisa aaya hi nahi&rdquo; wali shikayat asal mein &ldquo;paisa kisi aur ke khaate mein gaya&rdquo;
          nikalti hai.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-5 my-6 not-prose">
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
            <strong>Teen jagah, ek naam:</strong> aapka naam Aadhaar mein, Jan Aadhaar mein, aur
            jamabandi mein — teeno mein ek jaisa hona chahiye. Ek jagah &ldquo;Rameshwar&rdquo; aur dusri jagah
            &ldquo;Rameshwar Lal&rdquo; likha ho, to system ise do alag aadmi maan leta hai. Ye Rajasthan mein
            rejection ki sabse aam technical wajah hai, aur sabse aasani se pehle se theek ki ja sakti hai.
          </p>
        </div>

        <p>
          Naya sadasya jodna ho — shaadi, janm, ya koi chhoot gaya ho — to
          <code>janaadhaar.rajasthan.gov.in</code> par family ID se login karke OTP verify karein, phir
          &ldquo;Add Member&rdquo; se naya Aadhaar number jodein. Navjaat bachche ka Aadhaar na ho to birth
          certificate lekar nazdeeki e-Mitra kiosk jaana padta hai.
        </p>

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
          Ghabraane se pehle ek kaam karo: bank statement khud check karo. SMS kabhi-kabhi
          miss ho jaata hai lekin paisa phir bhi aa chuka hota hai. "NEFT", "DBT" ya
          "Rajasthan Govt" naam ki entry dhundo — mil gayi to shikayat ki zaroorat hi nahi.
        </p>

        <p>
          Kuch nahi mila to PFMS portal par dispatch status dekho. Wahan "Successful" dikhe aur bank mein na aaya ho, to branch jaakar NPCI mapping check karwao — zyadatar yahi wajah nikalti hai.
        </p>

        <Fig
          src="bank-visit.webp"
          alt="Kisan bank branch mein passbook lekar DBT payment aur NPCI mapping check karwa raha hai"
          caption={'Portal par "Successful" dikhe par paisa na aaya ho — bank branch mein NPCI mapping check karwao'}
        />

        <p>
          Fir bhi kuch samajh na aaye to Jan Soochna portal ki helpline <strong>1800-180-6127</strong> par call karein (ye number portal ke homepage par hi likha hai). Ya apne District Agriculture Office ya e-Mitra kiosk par jaakar case dikhaayein — status ka screenshot aur passbook saath rakhein.
        </p>

        <p>
          Aur agar online sab sahi dikh raha hai fir bhi paisa nahi aa raha — seedhe Patwari ya Tehsildar ke paas chale jao. Kai baar land record ka koi purana jhanjhat hota hai jo sirf ground level par hi sulajhta hai.
        </p>

        <h3>Patwari Ke Paas Jaane Se Pehle Ye Kaam Ghar Baithe Ho Jaata Hai</h3>

        <p>
          Tehsil ke chakkar lagane se pehle apna land record khud padh lena samajhdari hai — Rajasthan
          mein ye bilkul free hai. <code>apnakhata.rajasthan.gov.in</code> (jise e-Dharti bhi kehte hain)
          kholein, apna zila chunein, phir tehsil aur gaon, aur khata number, khasra number ya malik ke
          naam se apni jamabandi nikaal lein.
        </p>

        <p>
          Isse aap khud dekh sakte hain ki dikkat kahan hai: naam ki spelling galat hai, area kam-zyada
          dikh raha hai, ya virasat ke baad naam abhi tak purane malik ka hi chal raha hai. Yahi teen
          cheezein zyadatar rejection ke peeche hoti hain. Jab aap Patwari ke paas jaate hain to seedha
          bata sakte hain ki kya theek karana hai — ye poori baat ek chakkar mein khatam kara deta hai.
        </p>

        <p>
          Online dekhna free hai, lekin agar kisi kaam ke liye <strong>certified copy</strong> chahiye to
          wo e-Mitra se milti hai — lagbhag ₹10 per page. Portal se print nikaal kar reference ke liye
          rakh sakte hain, magar office mein certified copy hi chalti hai. Mutation (naam badalne) ki
          arzi bhi isi portal se lagti hai; Rajasthan ka apna record batata hai ki mutation case average
          taur par lagbhag 24 din mein nipat jaate hain — matlab kist ka intezaar karne se behtar hai ki
          season se pehle hi arzi laga dein.
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

        <p>
          <strong>&quot;Ghar mein do logon ke naam zameen hai, kist ek ko hi aayi&quot;</strong> &mdash; ye galti
          nahi hai. Ek parivaar se ek hi benefit banta hai, aur Jan Aadhaar family record hi tay karta
          hai ki &ldquo;parivaar&rdquo; kaun hai. Zameen batwaare ke baad bhi agar Jan Aadhaar mein sab ek hi
          family ID mein hain, to system ek hi ghar ginta hai. Alag benefit chahiye to pehle Jan Aadhaar
          mein parivaar alag hona chahiye — aur wo tabhi hota hai jab waqai alag ghar ho, kaagaz par
          dikhawe se nahi.
        </p>

        <p>
          <strong>&quot;OTP us mobile par aa raha hai jo ab mera nahi hai&quot;</strong> &mdash; Rajasthan mein ye
          do jagah theek karna padta hai, ek jagah nahi. Pehle Aadhaar mein number update karayein, phir
          Jan Aadhaar ke record mein. Sirf ek jagah badalne se status page khulta rahega magar state ka
          verification purane number par hi atka rahega.
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
            <strong>Fraud se bachein:</strong> ye scheme poori tarah free aur automatic hai. Koi agent "registration karwane" ke naam par paisa maange, to wo fraud hai. Paisa mat do — Rajasthan Anti-Corruption Bureau ki helpline <strong>1064</strong> par shikayat darj karwaayein.
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

        <h2>Aksar Poochhe Jaane Wale Sawaal</h2>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            }),
          }}
        />
        <section className="mb-8 not-prose">
          <p className="text-xs text-[var(--color-text-muted)] mb-3 italic">Rajasthan Kisan Samman Nidhi FAQ 2026</p>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details
                key={q}
                className="border border-[var(--color-border)] rounded-xl overflow-hidden group"
              >
                <summary className="p-4 font-semibold text-[var(--color-text)] cursor-pointer bg-[var(--color-bg-alt)] hover:bg-green-50 dark:hover:bg-green-900/20 text-sm flex justify-between items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                  <span>{q}</span>
                  <span className="text-green-600 dark:text-green-400 text-xl group-open:rotate-45 transition-transform shrink-0">
                    +
                  </span>
                </summary>
                <div className="p-4 text-sm text-[var(--color-text-muted)] leading-relaxed border-t border-[var(--color-border)]">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </section>

        <h2>Kist Ko Lekar Realistic Kaise Rahein</h2>

        <p>
          ₹9,000 saal bhar mein koi bahut badi raashi nahi lagti, lekin beej-khaad-diesel ke badhte kharche mein har kist kaam aati hai. Iska zyada faayda tabhi hoga jab aap timeline ko lekar realistic raho — jo confirm hai usi par plan karo, jo announcement hai usko bonus samjho.
        </p>

        <p>
          ₹12,000 ka notification aa gaya to hum yahan sabse pehle update karenge. Tab tak Jan Soochna portal apna dost hai — WhatsApp forwards nahi.
        </p>

        <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-xl border-l-4 border-orange-500 not-prose shadow-sm">
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
            <strong className="text-orange-600 dark:text-orange-400 block mb-2">Disclaimer:</strong>
            Ye article sirf madad ke liye hai. Final decision ke liye official portal ya krishi office se sampark karein.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t-2 border-gray-200 dark:border-gray-700 not-prose">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Isse Judi Zaroori Jaankari</h3>
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
