import Link from 'next/link';
import Image from 'next/image';
import ExternalLinkButton from '@/components/ui/ExternalLinkButton';
import InfoBox from '@/components/ui/InfoBox';
import SchemeTable from '@/components/ui/SchemeTable';

const IMG_BASE = '/images/articles/rajya-yojana/mp-kisan-kalyan-yojana-kist-status';

function Fig({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="my-8">
      <Image
        src={`${IMG_BASE}/${src}`}
        alt={alt}
        width={1200}
        height={675}
        className="w-full rounded-xl shadow-md"
        loading="lazy"
      />
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-gray-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export default function MPCMKisanKalyanYojanaKistStatus() {
  return (
    <article className="prose prose-lg max-w-4xl mx-auto">

      <InfoBox type="update" date="4 August 2026">
        <strong>Latest Update:</strong> MP CM Kisan Kalyan Yojana ki agli kist ki date abhi official taur par SAARA portal par announce nahi hui hai. Pichhli kist mein ₹1,000 ki raashi di gayi thi. Kripya kisi bhi "confirmed date" ke WhatsApp forward par bharosa na karein. Jab tak SAARA portal par notification na dikhe, tab tak "expected" hi maanein.
      </InfoBox>

      <h1>MP CM Kisan Kalyan Yojana Kist Kab Aayegi: Status Check, Amount aur SAARA Portal Guide</h1>

      <p>
        Madhya Pradesh ke kisanon ke liye <strong>cm kisan kalyan yojana kist kab aayegi</strong>, ye aaj ke samay ka sabse zyada search kiya jaane wala sawal hai. Rajya sarkar ne PM Kisan Samman Nidhi ke saath milkar kisanon ko extra financial support dene ka vaada kiya tha, lekin internet par kai tarah ki afwaahen (rumors) phaili hui hain.
      </p>

      <p>
        Is article mein hum bilkul clear aur verified jaankari denge. Hum guess nahi karenge, balki seedha <strong>saara portal kisan kalyan status</strong> aur official guidelines ke aadhar par batayenge ki aapko kitna paisa milna chahiye, eligibility kya hai, aur agar paisa nahi aaya toh aapko kya karna chahiye.
      </p>

      <Fig
        src="hero-mp-kisan-kalyan.webp"
        alt="Madhya Pradesh ke kisan khet mein fasal ki dekhbhal karte hue"
        caption="MP CM Kisan Kalyan Yojana state ke registered kisanon ko extra financial support deti hai"
      />

      <ExternalLinkButton
        href="https://saara.mp.gov.in"
        label="Official Portal — SAARA MP Govt"
      />

      <h2>MP Kisan Kalyan Yojana Kya Hai aur Amount Kitna Hai?</h2>

      <p>
        Madhya Pradesh CM Kisan Kalyan Yojana ek state-sponsored scheme hai jo PM Kisan Samman Nidhi ke beneficiaries ko target karti hai. Iska mukhya uddeshya kisanon ko kheti ke badhte huye kharchon (beej, khaad, irrigation) mein thodi raahat dena hai.
      </p>

      <p>
        <strong>Amount ko lekar bohot confusion hai.</strong> Internet par ₹2,000, ₹4,000, aur yahan tak ki ₹6,000 ke bhi dawe kiye jaate hain. Lekin official SAARA portal aur pichhle vitthiya varsh (financial year) ke records ke mutabik, Madhya Pradesh sarkar ne PM Kisan ke ₹6,000 ke upar <strong>extra ₹1,000 saalana</strong> (ek baar mein ya do kiston mein) dene ka pravadhan kiya tha. 
      </p>

      <InfoBox type="warning">
        <strong>Satark Rahein:</strong> Kai websites par likha hai ki MP sarkar ₹4,000 ya ₹6,000 de rahi hai. Ye purani ya galat jaankari ho sakti hai. Hamesha apna <strong>mp kisan kalyan yojana status check</strong> sirf official SAARA portal se karein. Hum yahan sirf verified data dete hain.
      </InfoBox>

      <SchemeTable>
        <tr>
          <th>Yojana</th>
          <th>Annual Amount</th>
          <th>Source</th>
          <th>Frequency</th>
        </tr>
        <tr>
          <td>PM Kisan Samman Nidhi</td>
          <td>₹6,000</td>
          <td>Central Govt</td>
          <td>3 Installments (₹2,000 each)</td>
        </tr>
        <tr>
          <td>MP CM Kisan Kalyan Yojana</td>
          <td>₹1,000 (Verified)</td>
          <td>MP State Govt</td>
          <td>Usually 1-2 Installments</td>
        </tr>
        <tr>
          <td><strong>Total Expected</strong></td>
          <td><strong>₹7,000</strong></td>
          <td><strong>Combined</strong></td>
          <td><strong>Varies</strong></td>
        </tr>
      </SchemeTable>

      <h2>MP Kisan Kalyan Yojana Status Check Kaise Karein? (SAARA Portal)</h2>

      <p>
        Agar aap jaanna chahte hain ki aapka paisa kab aayega ya aapka naam <strong>kisan kalyan yojana beneficiary list mp</strong> mein hai ya nahi, toh niche diye gaye steps ko dhyan se follow karein. Ye process 100% online aur free hai.
      </p>

      <Fig
        src="saara-portal-screenshot.webp"
        alt="SAARA MP Govt portal ka Kisan Kalyan Yojana status check page"
        caption="SAARA portal par apna status check karte samay apna Registered Mobile Number ya Aadhaar taiyar rakhein"
      />

      <ol>
        <li>Apne mobile ya computer ke browser mein <code>saara.mp.gov.in</code> kholein.</li>
        <li>Homepage par "Farmer Services" ya "Kisan Kalyan Yojana" ka option dhundhein.</li>
        <li>"Beneficiary Status" ya "Kist Status" par click karein.</li>
        <li>Apna <strong>Aadhaar Number</strong> ya <strong>Registered Mobile Number</strong> enter karein.</li>
        <li>OTP verify karein (ye OTP usi number par aayega jo PM Kisan/State database mein registered hai).</li>
        <li>Dashboard par aapko "Payment Status", "Pending Amount", aur "Bank Account Details" dikhayi dengi.</li>
      </ol>

      <ExternalLinkButton
        href="https://saara.mp.gov.in"
        label="Check Status on SAARA Portal"
      />

      <h2>CM Kisan Kalyan Yojana Kist Kab Aayegi? (Expected Timeline)</h2>

      <p>
        Is sawal ka seedha jawab dena mushkil hai kyunki state sarkar kisi fixed national calendar ko follow nahi karti. Lekin pichhle 3 saalon ke pattern ko dekha jaye toh:
      </p>

      <ul>
        <li><strong>Pehli Kist:</strong> Aam taur par PM Kisan ki kist aane ke 1-2 mahine baad release hoti hai.</li>
        <li><strong>Dusri Kist (agar applicable ho):</strong> Vitthiya varsh ke ant mein (February-March) release ki jaati hai.</li>
      </ul>

      <p>
        Agar aapke account mein PM Kisan ki kist aa gayi hai lekin state ki kist nahi aayi, toh ghabrayein nahi. Dono ka release cycle alag hota hai. State treasury se fund release hone mein kabhi-kabhi 15 se 30 din ka samay lag jata hai.
      </p>

      <h2>Eligibility: Kaun Le Sakta Hai Ye Labh?</h2>

      <p>
        Is scheme ka seedha connection PM Kisan Samman Nidhi se hai. Isliye, eligibility criteria bhi lagbhag wahi hai, lekin kuch state-specific rules bhi hain:
      </p>

      <h3>Mandatory Conditions:</h3>
      <ul>
        <li><strong>MP Ka Nivasi:</strong> Applicant ka permanent residence Madhya Pradesh mein hona chahiye.</li>
        <li><strong>PM Kisan Beneficiary:</strong> Aapka naam PM Kisan ki active beneficiary list mein hona chahiye.</li>
        <li><strong>Landholding:</strong> Aapke paas cultivable land honi chahiye (record of rights mein naam hona chahiye).</li>
        <li><strong>e-KYC:</strong> Aadhaar seeding aur mobile linking complete honi chahiye.</li>
      </ul>

      <h3>Exclusion List (Kaun Nahi Le Sakta):</h3>
      <ul>
        <li>Institutional landholders (Trusts, Mandirs, Societies).</li>
        <li>Wo parivar jisme koi member government employee (Group A, B, C, D) ho.</li>
        <li>Retired pensioners jinki monthly pension ₹10,000 se adhik ho.</li>
        <li>Wo kisan jinhone pichhle vitthiya varsh mein Income Tax return file kiya ho.</li>
        <li>Professionals (Doctors, Engineers, Lawyers, CAs) jo registered hain.</li>
      </ul>

      <Fig
        src="mp-farmland-records.webp"
        alt="MP ke Bhulekh ya land record documents ki tasveer"
        caption="Apne land records (Khasra/Khatauni) mein naam sahi hone ki pushti karein"
      />

      <h2>Agar Payment Nahi Aayi Toh Kya Karein? (Troubleshooting)</h2>

      <p>
        Kai baar <strong>mp kisan kalyan yojana status check</strong> karne par "Payment Successful" dikhata hai, lekin bank account mein paisa nahi hota. Ya phir status "Rejected" aa jata hai. Aise mein ye steps follow karein:
      </p>

      <h3>1. Bank Account aur NPCI Mapping Check Karein</h3>
      <p>
        Sabse common reason ye hota hai ki bank account DBT (Direct Benefit Transfer) ke liye enabled nahi hai. Apne bank branch jaakar puchein ki "Kya mera account NPCI mapper mein Aadhaar ke saath linked hai?" Agar nahi, toh turant link karwayein.
      </p>

      <h3>2. PFMS Portal Par Track Karein</h3>
      <p>
        SAARA portal ke alawa, aap <code>pfms.nic.in</code> par jaakar "Know Your Payments" section mein apna bank account number aur IFSC code daal kar check kar sakte hain ki paisa bank tak pahuncha hai ya beech mein fail hua hai.
      </p>

      <h3>3. Janpad Panchayat ya Tehsil Se Sampark Karein</h3>
      <p>
        Agar PFMS mein "Payment Failed" dikh raha hai, toh iska matlab hai ki bank ne paisa wapas bhej diya hai (shayad account band hone ya naam mismatch ki wajah se). Aise mein apne block ke Agriculture Development Officer (ADO) ya Patwari se milkar apne bank details update karwayein.
      </p>

      <Fig
        src="bank-fail-reason-sms.webp"
        alt="Bank failure SMS aur PFMS failed status ka screenshot"
        caption="Payment fail hone par SMS mein 'R-01' ya 'Invalid Account' jaise codes aa sakte hain"
      />

      <h2>MP Kisan Kalyan Yojana Beneficiary List Kaise Dekhein?</h2>

      <p>
        Agar aapko lagta hai ki aap eligible hain lekin aapka naam list mein nahi hai, toh aap <strong>kisan kalyan yojana beneficiary list mp</strong> check kar sakte hain:
      </p>

      <ol>
        <li>SAARA portal par "Reports" ya "Beneficiary List" section mein jaayein.</li>
        <li>Apna <strong>Zila (District)</strong>, <strong>Janpad (Block)</strong>, aur <strong>Gram Panchayat</strong> select karein.</li>
        <li>"Search" ya "Download PDF" par click karein.</li>
        <li>List mein apna naam ya pitaji/pati ka naam search karein (Ctrl+F ka upyog karein).</li>
      </ol>

      <p>
        Agar aapka naam nahi hai, lekin aap PM Kisan mein hain, toh ye ek technical glitch ho sakta hai. Apne nearest Common Service Centre (CSC) ya Gram Panchayat se data sync karwane ke liye kahein.
      </p>

      <h2>PM Kisan vs MP CM Kisan Kalyan: Main Antar</h2>

      <p>
        Bahut se kisan bhai dono schemes ko ek hi samajh lete hain, jabki inme clear antar hai:
      </p>

      <SchemeTable>
        <tr>
          <th>Parameter</th>
          <th>PM Kisan Samman Nidhi</th>
          <th>MP CM Kisan Kalyan Yojana</th>
        </tr>
        <tr>
          <td>Laagu Karne Wali Sarkar</td>
          <td>Bharat Sarkar (Central)</td>
          <td>Madhya Pradesh Sarkar (State)</td>
        </tr>
        <tr>
          <td>Varshik Raashi</td>
          <td>₹6,000</td>
          <td>₹1,000 (Verified State Top-up)</td>
        </tr>
        <tr>
          <td>Portal</td>
          <td>pmkisan.gov.in</td>
          <td>saara.mp.gov.in</td>
        </tr>
        <tr>
          <td>Application</td>
          <td>CSC ya Self-Registration</td>
          <td>Auto-mapped (PM Kisan data se)</td>
        </tr>
        <tr>
          <td>Helpline</td>
          <td>155261</td>
          <td>MP Kisan Call Center (Toll-Free)</td>
        </tr>
      </SchemeTable>

      <h2>Kya Aap Dusre State Se Hain?</h2>

      <p>
        Agar aap Madhya Pradesh ke nivaasi nahi hain, toh ye scheme aap par laagu nahi hoti. Lekin chinta na karein, humne India ke doosre mukhya rajyon ki kisan yojanaon par bhi detail se likha hai. Apne state ki jaankari ke liye in links par jaayein:
      </p>

      <ul>
        <li>
          <Link href="/rajya-yojana/rajasthan-kisan-samman-nidhi-9000">
            Rajasthan Kisan Samman Nidhi 9000: Status aur Badhotri Update
          </Link>
        </li>
        <li>
          <Link href="/rajya-yojana/annadata-sukhibhava-status-check-2026">
            Annadata Sukhibhava (Andhra Pradesh) — Tenant Farmers ke liye bhi
          </Link>
        </li>
        <li>
          <Link href="/rajya-yojana/namo-shetkari-yojana-status-check-2026">
            Namo Shetkari Mahasanman Nidhi (Maharashtra)
          </Link>
        </li>
      </ul>

      <p>
        Sabhi state schemes ka ek saath overview dekhne ke liye:
      </p>

      <ul>
        <li>
          <Link href="/rajya-yojana/state-kisan-yojana-list-all-states-2026">
            State Kisan Yojana List — Sabhi States Ka Comparison Table
          </Link>
        </li>
      </ul>

      <h2>FAQs — MP CM Kisan Kalyan Yojana</h2>

      <h3>1. Kya mujhe iske liye alag se application deni padegi?</h3>
      <p>
        Nahi. Agar aap PM Kisan Samman Nidhi ke registered beneficiary hain aur aap MP ke nivaasi hain, toh sarkar aapko automatically is scheme mein shamil kar leti hai. Alag se form bharne ki zaroorat nahi hoti.
      </p>

      <h3>2. MP Kisan Kalyan Yojana ka amount kitna hai?</h3>
      <p>
        Official records aur SAARA portal ke mutabik, ye amount ₹1,000 saalana raha hai. Internet par chal rahi ₹4,000 ya ₹6,000 ki afwaahon par dhyan na dein jab tak official gazette notification na aa jaye.
      </p>

      <h3>3. Meri kist "Rejected" dikha rahi hai, kya karein?</h3>
      <p>
        Rejection ka sabse bada karan bank account ka DBT se na juda hona ya Aadhaar mein naam ka mismatch hona hai. Apne bank mein jaakar "NPCI Seeding" status check karein aur agar zaroori ho toh Patwari se land record mein naam sudharne ko kahein.
      </p>

      <h3>4. Kya main apna status mobile se check kar sakta hoon?</h3>
      <p>
        Haan, bilkul. SAARA portal mobile-friendly hai. Aap apne registered mobile number par aaye OTP ke zariye kabhi bhi, kahin bhi apna status check kar sakte hain.
      </p>

      <h3>5. Agar main MP se bahar shift ho gaya hoon, toh kya mujhe paisa milega?</h3>
      <p>
        Nahi. Ye scheme sirf Madhya Pradesh ke sthayi nivaasiyon (permanent residents) ke liye hai. Agar aapka domicile badal gaya hai, toh aap is scheme ke eligible nahi rahenge.
      </p>

      <h2>Related Articles</h2>
      <ul>
        <li>
          <Link href="/articles/pm-kisan-24vi-kist-2026">
            PM Kisan 24vi Kist 2026 — Next Installment Date aur Status
          </Link>
        </li>
        <li>
          <Link href="/articles/pm-kisan-pati-patni-dono-ko-milega">
            Pati-Patni Dono Ko PM Kisan Milega Ya Nahi? (Family Rules Explained)
          </Link>
        </li>
      </ul>

      <InfoBox type="tip">
        <strong>Surakshit Rahein:</strong> Koi bhi sarkari yojana registration ya status theek karne ke naam par aapse paise nahi maangti. Agar koi aapse "fees" maange, toh wo fraud hai. Turant 1064 (Kisan Call Center) par shikayat darj karein.
      </InfoBox>

    </article>
  );
}