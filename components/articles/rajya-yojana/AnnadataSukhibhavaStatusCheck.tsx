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

const FAQS_DATA = [
  {
    q: 'Kya YSR Rythu Bharosa aur Annadata Sukhibhava ek hi scheme hai?',
    a: 'Haan. Andhra Pradesh sarkar ne YSR Rythu Bharosa ko officially rename karke "Annadata Sukhibhava" kar diya hai. Benefits aur eligibility lagbhag same hain, bas naam aur kuch administrative processes update hue hain.',
  },
  {
    q: 'Agar mere paas zameen nahi hai, kya main apply kar sakta hoon?',
    a: 'Haan. Tenant farmer hain aur valid CCRC (Crop Cultivator Rights Card) hai toh aap eligible hain. Yahi is scheme ka sabse bada fark hai. Dusre states mein bataidar aksar bahar reh jaate hain.',
  },
  {
    q: 'Payment status mein "Pending" dikh raha hai, kya karein?',
    a: '"Pending" ka matlab verification chal raha hai, ya payment file ho chuki hai lekin bank tak nahi pahunchi. 7-10 din intezaar karein. Phir bhi na aaye toh bank se NPCI mapping check karwayein.',
  },
  {
    q: 'Kya mujhe alag se PM Kisan ke liye apply karna padega?',
    a: 'Aapka data state database mein hai toh sarkar PM Kisan ke liye bhi consider karti hai. Lekin apna PM Kisan status alag se pmkisan.gov.in par zaroor check kar lein, kyunki dono ke records alag chalte hain.',
  },
  {
    q: 'Agar main government employee hoon, kya mujhe ye paisa milega?',
    a: 'Nahi. Aap ya parivaar ka koi sadasya government sector mein regular employment par hai toh aap exclusion criteria mein aate hain, aur aaya hua paisa wapas karna pad sakta hai.',
  },
];

export default function AnnadataSukhibhavaStatusCheck2026() {
  return (
    <article className="prose prose-lg max-w-4xl mx-auto">

      <InfoBox type="update" date="4 August 2026">
        <strong>Latest Update:</strong> Andhra Pradesh sarkar ne 20 June 2026 ko Annadata Sukhibhava ka pehla installment (₹7,000: ₹5,000 State + ₹2,000 PM Kisan) jaari kar diya hai. ⚠️ Agle installment ki koi date officially announce nahi hui hai. Apna <strong>annadata sukhibhava status check</strong> karne ke liye neeche diye gaye official steps follow karein.
      </InfoBox>

      <h1>Annadata Sukhibhava Status Check 2026: Payment, Eligibility aur Beneficiary List</h1>

      <p>
        Andhra Pradesh mein jis scheme ko log <em>YSR Rythu Bharosa</em> kehte the, wo ab
        <strong> Annadata Sukhibhava</strong> hai. Naam badla hai, paisa nahi rukka.
      </p>

      <p>
        Is scheme ki khaas baat aage aati hai. Yahan bataidar (tenant farmer) ko bhi jagah mili hai, jo PM Kisan mein
        nahi aate. Pehle status dekhne ka tareeka aur eligibility, phir wahi fark.
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

      <h2>Rythu Bharosa Se Annadata Sukhibhava Tak — Naam Kyun Badla</h2>

      <p>
        Thoda background samajh lein, kyunki isi confusion mein bahut log galat portal par status
        dhoondhte reh jaate hain. 2019 mein jab YSR sarkar aayi thi, tab scheme ka naam tha
        <em> YSR Rythu Bharosa</em> aur portal tha <code>ysrrythubharosa.ap.gov.in</code>. 2024 mein
        sarkar badli, aur nayi TDP-led coalition sarkar ne scheme ko continue rakha lekin naam badal
        kar <strong>Annadata Sukhibhava</strong> kar diya. Amount bhi badha: pehle state ka hissa
        ₹7,500 tha, ab combined package ₹20,000 tak pahunch gaya hai.
      </p>

      <p>
        Iska practical matlab? Agar aap purane Rythu Bharosa mein registered the, toh aapka
        data naye system mein migrate ho chuka hai. Naye siray se apply karne ki zaroorat
        nahi. Lekin status ab naye portal <code>annadathasukhibhava.ap.gov.in</code> par hi
        milega. Purana portal ya toh redirect karega ya purana data dikhayega — aur wahi
        dekh kar log ghabra jaate hain ki naam kat gaya. Ghabraiye mat. Naam kata nahi hai,
        sirf ghar badla hai.
      </p>

      <h2>Kitna Paisa, Kahan Se Aata Hai</h2>

      <p>
        Naam ka matlab hai "annadata sukhi rahe". Paisa seedha bank account mein aata hai, taaki
        beej, khaad aur season ke baaki kharche waqt par ho sakein.
      </p>

      <p>
        Ek eligible parivar ke haath saal bhar mein ₹20,000 tak aate hain, do alag jagah se:
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

      <h2>Bataidar Kisan Bhi Isme Aate Hain</h2>

      <p>
        PM Kisan mein sirf zameen ke malik aate hain. Yahan <strong>bataidar</strong> (tenant farmer) aur
        CCRC (Crop Cultivator Rights Card) wale kisan ko bhi poora support milta hai.
      </p>

      <p>
        AP mein hazaron kisan doosron ki zameen lease par lekar kheti karte hain. Mehnat
        unki, fasal unki — par saalon tak wo central schemes se bahar rehte the, sirf
        isliye ki khata unke naam nahi tha. Ab tasveer badli hai. Valid CCRC card hai to
        aap is scheme mein poore eligible hain.
      </p>

      <h3>CCRC Card Nahi Hai? Aise Banega</h3>

      <p>
        CCRC ka poora naam hai Crop Cultivator Rights Card, jo AP Land Licensed Cultivators Act ke
        under banta hai. Ye card har saal renew hota hai kyunki lease agreements season-wise hote
        hain. Banwane ka process:
      </p>

      <ol>
        <li>Apne <strong>Gram Sachivalayam</strong> (Village Secretariat) jaayein aur Village Agriculture Assistant (VAA) se milein.</li>
        <li>Zameen ke malik ke saath ek simple consent form bharna hota hai. Malik ki zameen ka khata number aur aapka Aadhaar chahiye.</li>
        <li>VAA field verification karta hai ki aap actually us zameen par kheti kar rahe hain.</li>
        <li>Verification ke baad card issue hota hai, jo us crop year ke liye valid rehta hai.</li>
      </ol>

      <p>
        Ek zaroori baat jo bahut kisan miss karte hain: CCRC banwane se zameen ke malik ka haq
        bilkul kamzor nahi hota. Act mein saaf likha hai ki ye card sirf kheti karne ka certificate
        hai, ownership ka koi claim nahi banata. Isliye maalik ko convince karna asaan hai. Fir bhi
        koi maalik mana kare, toh VAA ke through baat karwane se aksar raasta nikal aata hai.
      </p>

      <h3>CCRC Card Ka Status Online Kahan Check Hota Hai?</h3>

      <p>
        Yahan ek galat-fahmi door kar dein: <strong>ccrc.ap.gov.in</strong> naam ka koi public login
        portal kisano ke liye nahi chalta. CCRC card ka record AP government ke internal system
        mein VAA (Village Agriculture Assistant) ke paas hota hai. Apne card ka status ya renewal
        check karna ho toh sabse bharosemand raasta hai apne <strong>Gram Sachivalayam</strong>{' '}
        jaakar VAA se poochhna, ya Rythu Seva Kendra par Aadhaar number dekar record nikalwana.
        Internet par jo bhi site &ldquo;CCRC login&rdquo; ka daawa kare, us par apni details mat
        daalein — fraud ka khatra hai.
      </p>

      <Fig
        src="tenant-farmer-ccrc.webp"
        alt="Andhra Pradesh mein bataidar kisan dusre ki zameen par dhaan ki ropai kar raha hai — CCRC card holders bhi eligible hain"
        caption="Bataidar aur CCRC card holders bhi eligible hain — yahi PM Kisan se sabse bada fark hai"
      />

      <h2>Kaun Eligible Hai</h2>

      <p>
        Chaar basic shartein hain. Chaaron poori honi chahiye, ek bhi chhooti to payment ruk jaati hai:
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

      <p>
        Exclusion parivar ke level par lagta hai, sirf applicant par nahi. Maan lijiye aap
        kheti karte hain lekin aapki patni government school mein teacher hai. Aap dono ek
        hi parivar (husband, wife, minor children) mein aate hain — isliye aap exclusion
        mein aa jayenge. Kadwa sach ye hai ki kai kisanon ko ye baat tab pata chalti hai
        jab do-teen kist aane ke baad recovery notice aata hai. Tab tak paisa kharch ho
        chuka hota hai. Isliye pehle hi check kar lena behtar hai.
      </p>

      <h2>Kist Kab Aati Hai — Season Ka Hisaab</h2>

      <p>
        Kist ka calendar kya hai? AP sarkar kist ko kheti ke season se jodti hai — Kharif,
        Rabi aur Summer. Teen season, teen kist, aur unka waqt buwai ke aas-paas rakha
        jaata hai:
      </p>

      <SchemeTable>
        <tr>
          <th>Installment</th>
          <th>Season</th>
          <th>Release Date</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>1st Installment</td>
          <td>Kharif 2026-27</td>
          <td>20 June 2026</td>
          <td>Released (₹7,000)</td>
        </tr>
        <tr>
          <td>2nd Installment</td>
          <td>Rabi 2026-27</td>
          <td>⚠️ Announce nahi hui</td>
          <td>Pending</td>
        </tr>
        <tr>
          <td>3rd Installment</td>
          <td>Summer 2026-27</td>
          <td>⚠️ Announce nahi hui</td>
          <td>Pending</td>
        </tr>
      </SchemeTable>

      <InfoBox type="info">
        <strong>Note:</strong> Kabhi-kabhi state aur central government ki payment alag-alag dates par aati hai. Agar aapko sirf ₹2,000 ya ₹5,000 hi mila hai, toh ghabrayein nahi. Dono components alag-alag transaction IDs ke saath aate hain.
      </InfoBox>

      <h2>Apna Status Kaise Dekhein</h2>

      <p>
        Aadhaar number ya Application ID paas rakhein, aur financial year sahi select karein. Galat
        year select hua to purana record dikh jaata hai:
      </p>

      <Fig
        src="documents-checklist.webp"
        alt="Annadata Sukhibhava status check ke liye zaroori documents — bank passbook, Aadhaar card, CCRC card aur mobile"
        caption="Status check se pehle yeh saath rakho — Aadhaar, bank passbook, CCRC card aur registered mobile"
      />

      <ol>
        <li>Official website <code>annadathasukhibhava.ap.gov.in</code> kholein.</li>
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

      <h2>Beneficiary List Mein Naam Dhoondhna</h2>

      <p>
        District aur mandal chunkar poori list PDF mein nikal aati hai. Ctrl+F se apna naam dhoondh
        lein:
      </p>

      <ol>
        <li>Portal par login kiye bina hi "Reports" section khulta hai. Wahan "Beneficiary List" chunein.</li>
        <li>Apna District, Mandal, aur Panchayat select karein.</li>
        <li>"Search" par click karein.</li>
        <li>Aapke gaon ki puri list khul jayegi ya PDF mein download hogi. Ctrl+F (mobile par browser ka "Find in page") se apna naam ya parivar ke kisi sadasya ka naam dhoondh lein.</li>
      </ol>

      <p>
        List Telugu mein bhi ho sakti hai. Agar naam Telugu script mein dhoondhna mushkil lag raha
        hai, toh Aadhaar number ke aakhri 4 digits se search karein. Zyada tar lists mein masked
        Aadhaar (XXXX-XXXX-1234 format) hota hai, aur wahi sabse bharosemand tareeka hai apni entry
        pakadne ka.
      </p>

      <h2>Status "Rejected" Dikhaye Toh Kya Karein</h2>

      <p>
        Pending aur Rejected mein bada fark hai. Pending ka matlab file process mein hai, intezaar
        kaafi hai. Rejected ka matlab system ne aapka record verify karke actively mana kar diya
        hai, aur bina action ke ye apne aap theek nahi hoga. Rejected ke teen sabse common reasons:
      </p>

      <ul>
        <li>
          <strong>Land record mismatch:</strong> Webland (AP ka online land records system) mein
          aapki zameen ka data scheme database se match nahi kar raha. Aksar aisa tab hota hai jab
          zameen ka mutation (naam transfer) recently hua ho. Solution: apne Tahsildar office se
          Webland record update karwayein, phir Gram Sachivalayam mein re-verification request dein.
        </li>
        <li>
          <strong>Duplicate Aadhaar entry:</strong> Ek hi Aadhaar do jagah registered hai, jaise
          purane Rythu Bharosa data aur naye CCRC registration dono mein. System dono ko dekh kar
          duplicate flag laga deta hai. Solution: VAA se milkar purani entry cancel karwayein.
        </li>
        <li>
          <strong>Exclusion criteria hit:</strong> Income tax record ya employment data ke against
          match aaya hai. Agar ye galat hai (jaise aapke naam ka koi aur ITR file karta hai), toh
          DAO office mein grievance file karke documents ke saath appeal kar sakte hain.
        </li>
      </ul>

      <h2>List Mein Naam Hai Par Paisa Nahi Aaya</h2>

      <p>
        Ye alag samasya hai aur iski wajah aksar scheme mein nahi, bank ya Aadhaar ke record mein hoti
        hai. Chaar cheezein check karni hoti hain:
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

      <h2>PM Kisan Aur Annadata Sukhibhava — Saath Rakhkar Dekhein</h2>

      <p>
        Dono ek saath milte hain, isliye log ise ek hi scheme samajh lete hain. Fark yahan saaf hai:
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

      <h2>AP Se Bahar Ke Kisan Yahan Dekhein</h2>

      <p>
        Bataidar wala niyam sirf AP mein hai. Baaki rajyon mein khata malik ke naam hona zaroori
        rehta hai. Apne rajya ka niyam yahan dekh lein:
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
        Ek jagah saare rajyon ka hisaab:
      </p>

      <ul>
        <li>
          <Link href="/rajya-yojana/state-kisan-yojana-list-all-states-2026">
            State Kisan Yojana List — Sabhi States Ka Comparison Table
          </Link>
        </li>
      </ul>

      <h2>Season Se Pehle Ka Chhota Audit — Paanch Minute Ka Kaam</h2>

      <p>
        AP mein scheme ka dhaancha aisa hai ki zyadatar rukavat pehle se dikh jaati hai —
        bas koi dekhta nahi. Har season shuru hone se pehle ye paanch cheezein milaa lein:
        zameen wale kisan apna khata number land record se, bataidar apna CCRC card ki
        validity (wo har saal renew hota hai — purana card season badalte hi bekar ho
        jaata hai), bank khaate ki Aadhaar seeding, PM Kisan ki e-KYC (kyunki combined
        ₹20,000 ka central hissa usi par khada hai), aur mobile number jo record mein darj
        hai. Paanchon durust hon to kist ka intezaar sirf release ki tareekh ka intezaar
        hai.
      </p>

      <p>
        Bataidar kisan ke liye ek extra baat: CCRC renewal ka sahi waqt bawai se pehle ka
        hai, jab malik ke saath naya season tay hota hai. Season ke beech mein renewal
        karwana mushkil hota hai kyunki VAA ka field verification fasal khadi hone par hi
        aasaan hota hai — aur bina valid card ke us season ki kist ka claim nahi banta.
        Card ke kagaz ki photo phone mein rakh lein; Rythu Seva Kendra par baat karte waqt
        wahi sabse pehle maanga jaata hai.
      </p>

      <h2>Kahan Shikayat Karein</h2>

      <p>
        Online status nahi khul raha, naam sudharwana hai, ya payment atki hai? Teen official raste
        hain:
      </p>
      <ul>
        <li><strong>Official portal:</strong> <code>annadathasukhibhava.ap.gov.in</code> — helpline number portal ke &ldquo;Contact&rdquo; section mein diya hota hai; wahi se lein, kyunki numbers samay samay par badalte hain.</li>
        <li><strong>District Agriculture Officer (DAO):</strong> Apne district ke DAO office mein personal visit karein.</li>
        <li><strong>Gram Sachivalayam:</strong> Apne nearest Village Secretariat mein Agriculture Assistant se milen.</li>
      </ul>

      <Fig
        src="village-secretariat-help.webp"
        alt="Gram Sachivalayam mein village volunteer kisan ki Annadata Sukhibhava status check aur correction mein madad kar rahi hai"
        caption="Online na ho paaye to Gram Sachivalayam mein Agriculture Assistant free madad karta hai"
      />

      <h2>Annadata Sukhibhava — Aksar Poochhe Jaane Wale Sawaal</h2>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS_DATA.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
      <section className="mb-8 not-prose">
        <p className="text-xs text-[var(--color-text-muted)] mb-3 italic">Annadata Sukhibhava FAQ 2026</p>
        <div className="space-y-3">
          {FAQS_DATA.map(({ q, a }) => (
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

      <InfoBox type="tip">
        <strong>Fraud se bachein:</strong> Koi bhi aapse "status theek karne" ya "naam list mein dalwane" ke naam par paisa nahi maangta. Ye scheme 100% free hai. Agar koi agent paise maange, toh Andhra Pradesh Anti-Corruption Bureau ki helpline <strong>1064</strong> par ya local police ko shikayat karein.
      </InfoBox>

      <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-xl border-l-4 border-orange-500 not-prose shadow-sm">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
          <strong className="text-orange-600 dark:text-orange-400 block mb-2">Disclaimer:</strong>
          Ye article sirf madad ke liye hai. Final decision ke liye official portal ya krishi office se sampark karein.
        </p>
      </div>

    </article>
  );
}
