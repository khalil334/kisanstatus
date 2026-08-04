import Link from 'next/link';
import Image from 'next/image';
import ExternalLinkButton from '@/components/ui/ExternalLinkButton';
import InfoBox from '@/components/ui/InfoBox';
import SchemeTable from '@/components/ui/SchemeTable';

const IMG_BASE = '/images/articles/rajya-yojna/annadata-sukhibhava-status-check-2026';

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

export default function AnnadataSukhibhavaStatusCheck2026() {
  return (
    <article className="prose prose-lg max-w-4xl mx-auto">

      <InfoBox type="update" date="4 August 2026">
        <strong>Latest Update:</strong> Andhra Pradesh sarkar ne 20 June 2026 ko Annadata Sukhibhava ka pehla installment (₹7,000: ₹5,000 State + ₹2,000 PM Kisan) jaari kar diya hai. Agla bhugtan October 2026 mein aane ki umeed hai. Apna <strong>annadata sukhibhava status check</strong> karne ke liye neeche diye gaye official steps follow karein.
      </InfoBox>

      <h1>Annadata Sukhibhava Status Check 2026: Payment, Eligibility aur Beneficiary List</h1>

      <p>
        Andhra Pradesh ke kisan bhaiyon ke liye ek bahut badi khushkhabri hai. Pehle jis scheme ko hum <em>YSR Rythu Bharosa</em> ke naam se jaante the, ab uska naya naam <strong>Annadata Sukhibhava</strong> rakha gaya hai. Agar aap jaanna chahte hain ki aapka paisa kab aayega ya aapka naam list mein hai ya nahi, toh sahi jagah aaye hain. Is article mein hum detail mein samjhenge ki kaise aap apna <strong>annadata sukhibhava status check</strong> kar sakte hain, kaun eligible hai, aur PM Kisan se ye scheme kaise alag hai.
      </p>

      <Fig
        src="hero.webp"
        alt="Andhra Pradesh ka kisan apne dhaan ke khet mein mobile par Annadata Sukhibhava status dekh raha hai"
        caption="Annadata Sukhibhava — Andhra Pradesh ke kisanon ke liye state ka ₹5,000 aur PM Kisan ka ₹2,000"
        width={1200}
        height={675}
        priority
      />

      <ExternalLinkButton
        href="https://annadathasukhibhava.ap.gov.in"
        label="Official Portal — Annadatha Sukhibhava AP"
      />

      <h2>Annadata Sukhibhava Yojana Kya Hai?</h2>

      <p>
        Annadata Sukhibhava (jiska matlab hai "May the Farmer Prosper") Andhra Pradesh sarkar ki flagship financial assistance scheme hai. Iska mukhya uddeshya kisanon ko beej, khaad, aur kheti ke dusre kharchon ke liye direct bank transfer ke zariye madad dena hai.
      </p>

      <p>
        Is scheme ke tahat, ek eligible kisan parivar ko saalana <strong>₹20,000</strong> tak ki financial support milti hai. Ye raashi do hisson mein aati hai:
      </p>

      <SchemeTable>
        <tr>
          <th>Source</th>
          <th>Annual Amount</th>
          <th>Installment Breakup (Approx)</th>
        </tr>
        <tr>
          <td>Andhra Pradesh State Govt</td>
          <td>₹14,000</td>
          <td>₹5,000 (Kharif) + ₹4,000 (Rabi) + ₹5,000 (Summer)</td>
        </tr>
        <tr>
          <td>PM Kisan Samman Nidhi (Central)</td>
          <td>₹6,000</td>
          <td>₹2,000 × 3 (April, August, December)</td>
        </tr>
        <tr>
          <td><strong>Total Combined Benefit</strong></td>
          <td><strong>₹20,000</strong></td>
          <td><strong>Varies by season</strong></td>
        </tr>
      </SchemeTable>

      <p>
        Haal hi mein, 20 June 2026 ko CM N. Chandrababu Naidu ne 2026-27 ke pehle installment ke roop mein ₹3,125 crore jaari kiye, jisme har beneficiary ko ₹7,000 (₹5,000 State + ₹2,000 Central) mile.
      </p>

      <h2>Sabse Bada Fark: Tenant Farmers aur CCRC Card Holders</h2>

      <p>
        Yahan hum ek bohot important point par baat karenge jo is scheme ko PM Kisan se bilkul alag banata hai. PM Kisan Samman Nidhi mein sirf <em>zameen ke malik</em> (landowners) hi eligible hote hain. Lekin Annadata Sukhibhava mein <strong>Tenant Farmers (Bataidar)</strong> aur <strong>CCRC (Crop Cultivator Rights Card)</strong> holders ko bhi pura financial support milta hai.
      </p>

      <p>
        Andhra Pradesh mein hazaron aise kisan hain jo apni zameen nahi rakhte, balki doosron ki zameen lease par lekar kheti karte hain. Agar aapke paas valid CCRC card hai, toh aap is scheme ke liye poore tarah se eligible hain. Ye ek bahut badi raahat hai un kisanon ke liye jo saalon se zameen ke malik na hone ki wajah se central schemes se vanchit reh jaate the.
      </p>

      <Fig
        src="tenant-farmer-ccrc.webp"
        alt="Andhra Pradesh mein bataidar kisan dusre ki zameen par dhaan ki ropai kar raha hai — CCRC card holders bhi eligible hain"
        caption="Bataidar aur CCRC card holders bhi eligible hain — yahi PM Kisan se sabse bada fark hai"
      />

      <h2>Annadata Sukhibhava Eligibility Criteria</h2>

      <p>
        Is yojana ka labh uthane ke liye aapko kuch basic sharton ko poora karna hoga. Dhyan se padhein ki kya aap <strong>annadata sukhibhava eligibility</strong> ke maapdand par khare utarte hain:
      </p>

      <ul>
        <li><strong>Andhra Pradesh Ka Nivasi:</strong> Applicant ka permanent residence Andhra Pradesh mein hona chahiye.</li>
        <li><strong>Kisan Parivar:</strong> Applicant ke paas cultivable land honi chahiye, YA phir valid CCRC (Crop Cultivator Rights Card) hona chahiye.</li>
        <li><strong>Aadhaar Seeding:</strong> Bank account Aadhaar se linked hona chahiye aur DBT (Direct Benefit Transfer) active hona chahiye.</li>
        <li><strong>Age Limit:</strong> Applicant ki umar 18 saal se zyada honi chahiye.</li>
      </ul>

      <h3>Kaun Eligible Nahi Hai? (Exclusion List)</h3>
      <ul>
        <li>Wo kisan jo already government ya private sector mein regular naukri karte hain.</li>
        <li>Income tax return file karne wale kisan parivar.</li>
        <li>Constitutional posts (MP, MLA, Mayor, etc.) par rehne wale ya reh chuke log.</li>
        <li>Retired pensioners jinki monthly pension ₹10,000 se zyada hai.</li>
      </ul>

      <h2>Annadata Sukhibhava Installment Date aur Payment Status 2026</h2>

      <p>
        Kisanon ke dimaag mein sabse bada sawal yahi hota hai ki <strong>annadata sukhibhava installment date</strong> kya hai. Andhra Pradesh sarkar aam taur par kheti ke seasons (Kharif, Rabi, Summer) ke hisaab se payment release karti hai.
      </p>

      <SchemeTable>
        <tr>
          <th>Installment</th>
          <th>Season</th>
          <th>Expected Release</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>1st Installment</td>
          <td>Kharif 2026-27</td>
          <td>20 June 2026</td>
          <td>✅ Released (₹7,000)</td>
        </tr>
        <tr>
          <td>2nd Installment</td>
          <td>Rabi 2026-27</td>
          <td>October 2026</td>
          <td>⏳ Expected</td>
        </tr>
        <tr>
          <td>3rd Installment</td>
          <td>Summer 2026-27</td>
          <td>February 2027</td>
          <td>⏳ Expected</td>
        </tr>
      </SchemeTable>

      <InfoBox type="info">
        <strong>Note:</strong> Kabhi-kabhi state aur central government ki payment alag-alag dates par aati hai. Agar aapko sirf ₹2,000 ya ₹5,000 hi mila hai, toh ghabrayein nahi. Dono components alag-alag transaction IDs ke saath aate hain.
      </InfoBox>

      <h2>Annadata Sukhibhava Status Check Kaise Karein? (Step-by-Step)</h2>

      <p>
        Apna <strong>annadata sukhibhava payment status</strong> check karna bahut aasan hai. Neeche diye gaye steps ko follow karein:
      </p>

      <Fig
        src="documents-checklist.webp"
        alt="Annadata Sukhibhava status check ke liye zaroori documents — bank passbook, Aadhaar card, CCRC card aur mobile"
        caption="Status check se pehle yeh saath rakho — Aadhaar, bank passbook, CCRC card aur registered mobile"
      />

      <ol>
        <li>Sabse pehle official website <code>annadathasukhibhava.ap.gov.in</code> par jaayein.</li>
        <li>Homepage par "<strong>Know Your Status</strong>" ya "<strong>Beneficiary Status</strong>" ke option par click karein.</li>
        <li>Financial Year select karein (Example: 2026-27).</li>
        <li>Apna <strong>Aadhaar Number</strong> ya <strong>Application ID</strong> enter karein.</li>
        <li>Screen par dikh raha CAPTCHA code enter karein aur "Verify" ya "Search" par click karein.</li>
        <li>Ab aapke saamne ek detail page khulega jisme aapka naam, gaon, district, aur <strong>अन्नदाता सुखीभव status</strong> (Payment Successful, Pending, ya Rejected) dikhayi dega.</li>
      </ol>

      <ExternalLinkButton
        href="https://annadathasukhibhava.ap.gov.in/know-your-status/"
        label="Check Status Now — Official AP Portal"
      />

      <h2>Annadata Sukhibhava Beneficiary List Kaise Dekhein?</h2>

      <p>
        Agar aap jaanna chahte hain ki aapke gaon ya district mein kin-kin kisanon ko is scheme ka labh mil raha hai, toh aap <strong>annadata sukhibhava beneficiary list</strong> bhi dekh sakte hain.
      </p>

      <ol>
        <li>Official portal ke "Reports" ya "Beneficiary List" section mein jaayein.</li>
        <li>Apna District, Mandal, aur Panchayat select karein.</li>
        <li>"Search" par click karein.</li>
        <li>Aapke gaon ki puri list download ya view ho jayegi. Yahan aap apna naam ya apne parivar ke kisi sadasya ka naam search kar sakte hain.</li>
      </ol>

      <h2>Payment Nahi Aayi? Common Problems aur Solutions</h2>

      <p>
        Kai baar kisanon ko complaint milti hai ki unka naam list mein toh hai, lekin paisa nahi aaya. Iske kuch common reasons aur unke solutions yahan hain:
      </p>

      <Fig
        src="dbt-bank-account.webp"
        alt="Kisan bank branch mein passbook lekar DBT aur NPCI Aadhaar mapping check karwa raha hai"
        caption="Naam list mein hai par paisa nahi aaya — pehla check bank branch mein NPCI mapping ka"
      />

      <h3>1. Bank Account DBT Enabled Nahi Hai</h3>
      <p>
        <strong>Solution:</strong> Apne bank branch jaakar pata karein ki aapka account "NPCI Mapper" mein Aadhaar ke saath linked hai ya nahi. Agar nahi hai, toh turant DBT enable karwayein.
      </p>

      <h3>2. Aadhaar Name aur Bank Account Name Match Nahi Kar Rahe</h3>
      <p>
        <strong>Solution:</strong> Agar Aadhaar mein "Ram Kumar" hai aur bank account mein "Ram Kumar Singh", toh payment fail ho sakti hai. Bank mein naam correction karwayein ya Aadhaar mein update karwayein.
      </p>

      <h3>3. Mobile Number Change Ho Gaya Hai</h3>
      <p>
        <strong>Solution:</strong> OTP na aane ki wajah se aap status check nahi kar pa rahe honge. Pehle Aadhaar center jaakar mobile number update karein, phir portal par try karein.
      </p>

      <h3>4. CCRC Card Expired Ya Invalid Hai</h3>
      <p>
        <strong>Solution:</strong> Tenant farmers ke liye CCRC card ka valid hona zaroori hai. Agar card expire ho gaya hai, toh apne local Agriculture Officer (AO) se contact karke renewal karwayein.
      </p>

      <h2>PM Kisan vs Annadata Sukhibhava: Comparison</h2>

      <p>
        Bahut se log confuse ho jaate hain ki ye dono schemes ek hi hain ya alag. Neeche diya gaya table aapko sab clear kar dega:
      </p>

      <SchemeTable>
        <tr>
          <th>Feature</th>
          <th>PM Kisan Samman Nidhi</th>
          <th>Annadata Sukhibhava (AP)</th>
        </tr>
        <tr>
          <td>Governing Body</td>
          <td>Central Govt (India)</td>
          <td>Andhra Pradesh State Govt</td>
        </tr>
        <tr>
          <td>Max Annual Amount</td>
          <td>₹6,000</td>
          <td>₹20,000 (Combined)</td>
        </tr>
        <tr>
          <td>Tenant Farmers Eligible?</td>
          <td>❌ Nahi</td>
          <td>✅ Haan (with CCRC Card)</td>
        </tr>
        <tr>
          <td>Landless Laborers?</td>
          <td>❌ Nahi</td>
          <td>❌ Nahi (Except specific state sub-schemes)</td>
        </tr>
        <tr>
          <td>Application Process</td>
          <td>CSC / Online Self</td>
          <td>Auto-mapped from existing Rythu Bharosa data + New CCRC registrations</td>
        </tr>
      </SchemeTable>

      <h2>Kya Aap Dusre State Se Hain?</h2>

      <p>
        Agar aap Andhra Pradesh se nahi hain, lekin is article tak pahunch gaye hain, toh chinta ki koi baat nahi. Humne India ke har major state ki kisan yojanaon par detail guides taiyar ki hain. Apne state ka article padhne ke liye neeche diye links use karein:
      </p>

      <ul>
        <li>
          <Link href="/rajya-yojana/rajasthan-kisan-samman-nidhi-9000">
            Rajasthan Kisan Samman Nidhi 9000: Status aur Badhotri Update
          </Link>
        </li>
        <li>
          <Link href="/rajya-yojana/namo-shetkari-yojana-status-check-2026">
            Namo Shetkari Mahasanman Nidhi (Maharashtra) — Auto Eligible
          </Link>
        </li>
        <li>
          <Link href="/rajya-yojana/mp-kisan-kalyan-yojana-kist-status">
            MP CM Kisan Kalyan Yojana — Latest Kist Update
          </Link>
        </li>
      </ul>

      <p>
        Ya phir sabhi state schemes ka ek saath overview dekhne ke liye:
      </p>

      <ul>
        <li>
          <Link href="/rajya-yojana/state-kisan-yojana-list-all-states-2026">
            State Kisan Yojana List — Sabhi States Ka Comparison Table
          </Link>
        </li>
      </ul>

      <h2>Helpline aur Support</h2>

      <p>
        Agar aapko online status check karne mein, naam correct karwane mein, ya payment se judi koi pareshani aa rahi hai, toh aap in official madhyamon se sampark kar sakte hain:
      </p>
      <ul>
        <li><strong>AP Kisan Call Center (Toll Free):</strong> 1800-425-0066</li>
        <li><strong>District Agriculture Officer (DAO):</strong> Apne district ke DAO office mein personal visit karein.</li>
        <li><strong>Gram Sachivalayam:</strong> Apne nearest Village Secretariat mein Agriculture Assistant se milen.</li>
      </ul>

      <Fig
        src="village-secretariat-help.webp"
        alt="Gram Sachivalayam mein village volunteer kisan ki Annadata Sukhibhava status check aur correction mein madad kar rahi hai"
        caption="Online na ho paaye to Gram Sachivalayam mein Agriculture Assistant free madad karta hai"
      />

      <h2>FAQs — Annadata Sukhibhava</h2>

      <h3>Kya YSR Rythu Bharosa aur Annadata Sukhibhava ek hi scheme hai?</h3>
      <p>
        Haan, Andhra Pradesh sarkar ne YSR Rythu Bharosa scheme ko officially rename karke "Annadata Sukhibhava" kar diya hai. Benefits aur eligibility lagbhag same hain, bas naam aur kuch administrative processes update hue hain.
      </p>

      <h3>Agar mere paas zameen nahi hai, kya main apply kar sakta hoon?</h3>
      <p>
        Haan, agar aap tenant farmer hain aur aapke paas valid <strong>CCRC (Crop Cultivator Rights Card)</strong> hai, toh aap is scheme ke liye eligible hain. Ye is scheme ka sabse bada advantage hai.
      </p>

      <h3>Payment status mein "Pending" dikh raha hai, kya karein?</h3>
      <p>
        "Pending" ka matlab hai ki aapka verification process chal raha hai ya payment file ho chuki hai lekin abhi bank tak nahi pahunchi. 7-10 din intezaar karein. Agar fir bhi na aaye, toh apne bank se NPCI mapping check karwayein.
      </p>

      <h3>Kya mujhe alag se PM Kisan ke liye apply karna padega?</h3>
      <p>
        Nahi, agar aap Annadata Sukhibhava ke liye eligible hain aur aapka data state database mein hai, toh sarkar aapko PM Kisan ke liye bhi automatically consider karti hai. Lekin apna PM Kisan status alag se <code>pmkisan.gov.in</code> par zaroor check kar lein.
      </p>

      <h3>Agar main government employee hoon, kya mujhe ye paisa milega?</h3>
      <p>
        Nahi. Agar aap ya aapke parivar ka koi sadasya government sector mein regular employment par hai, toh aap is scheme ke exclusion criteria mein aate hain aur aapko paisa wapas karna pad sakta hai.
      </p>

      <h2>Related Articles</h2>
      <ul>
        <li>
          <Link href="/articles/pm-kisan-pati-patni-dono-ko-milega">
            Pati-Patni Dono Ko PM Kisan Milega Ya Nahi? (Family Rules Explained)
          </Link>
        </li>
        <li>
          <Link href="/articles/PmKisan24viKist2026">
            PM Kisan 24vi Kist 2026 — Next Installment Date aur Status
          </Link>
        </li>
      </ul>

      <InfoBox type="tip">
        <strong>Surakshit Rahein:</strong> Koi bhi aapse "status theek karne" ya "naam list mein dalwane" ke naam par paisa nahi maangta. Ye scheme 100% free hai. Agar koi agent paise maange, toh turant 1064 ya local police ko inform karein.
      </InfoBox>

    </article>
  );
}