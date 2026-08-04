import Link from 'next/link';
import Image from 'next/image';
import type { RajyaYojanaArticleMeta } from '@/lib/rajya-yojana-data';
import ExternalLinkButton from '@/components/ui/ExternalLinkButton';
import InfoBox from '@/components/ui/InfoBox';
import SchemeTable from '@/components/ui/SchemeTable';
import KrishakBandhuChecker from '@/components/articles/rajya-yojana/tools/KrishakBandhuChecker';

const IMG_BASE = '/images/articles/rajya-yojna/krishak-bandhu-status-check-2026';

function Fig({
  src,
  alt,
  caption,
  width = 1200,
  height = 675,
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

export default function KrishakBandhuStatusCheck({ article }: { article: RajyaYojanaArticleMeta }) {
  const canonicalUrl = 'https://kisanstatus.com/rajya-yojana/krishak-bandhu-status-check-2026';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Krishak Bandhu Status Check: Voter ID Se Payment, List Aur Death Benefit Ki Poori Jaankari',
    description: article.description,
    image: `https://kisanstatus.com${IMG_BASE}/hero.webp`,
    author: {
      '@type': 'Organization',
      name: 'KisanStatus Team',
      url: 'https://kisanstatus.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'KisanStatus.com',
      url: 'https://kisanstatus.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://kisanstatus.com/logo.png',
        width: 250,
        height: 60,
      },
    },
    datePublished: article.published,
    dateModified: article.modified,
    inLanguage: 'hi-IN',
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="max-w-3xl mx-auto px-4 py-8 prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Krishak Bandhu Status Check: Voter ID Se Payment, List Aur Death Benefit
        </h1>

        <Fig
          src="hero.webp"
          alt="West Bengal ka kisan apne dhaan ke khet ke paas Voter ID card ke saath khada hai"
          caption="Krishak Bandhu — West Bengal ke kisanon ki income-support yojana"
          priority
        />

        <p>
          Bengal ke gaon mein kist ke dinon ka ek apna hi mahaul hota hai. Kisi ke phone par
          SMS aa jaata hai, kisi ke padosi ke account mein paisa dikh jaata hai, aur teesre
          aadmi ka account waisa hi khaali pada rehta hai. Wahi se sawaal shuru hota hai — mera
          kyun nahi aaya? Krishak Bandhu mein iska jawab lagbhag hamesha teen jagah chhupa hota
          hai: aapke land record mein, aapke bank account ki halat mein, ya district treasury ki
          queue mein. Ye page teeno ko alag-alag khol kar samjhata hai, taaki aap sirf intezaar
          na karein — asli wajah pakad sakein.
        </p>

        <InfoBox type="info">
          Krishak Bandhu ka data land record se juda hai, isliye zameen ke kagaz mein koi bhi
          badlaav — kharid, batwara, virasat — seedha aapki kist par asar daalta hai. Naam list
          se gayab hone ki sabse aam wajah yahi hoti hai, na ki koi &ldquo;online galti&rdquo;.
        </InfoBox>

        <h2>Ye Scheme Asal Mein Do Alag Cheezein Hain</h2>

        <p>
          Log ise ek scheme samajhte hain, lekin Krishak Bandhu ke andar do component hain jo
          alag-alag chalte hain. Pehla hai <strong>assured income support</strong> — saal mein do
          baar, Kharif aur Rabi season par, aapke bank account mein seedha paisa. Doosra hai{' '}
          <strong>death benefit</strong> — registered kisan ki mrityu par uske parivaar ko ek
          baar milne wali ek-mushht raqam.
        </p>

        <p>
          Farak samajhna zaroori hai, kyunki dono ke rules ek jaise nahi hain. Income support
          zameen ke area par nirbhar karta hai aur umar se koi lena-dena nahi rakhta. Death
          benefit ka poora dhaancha ulta hai — usmein umar ki ek band hai (18 se 60 saal) aur
          zameen ka area maayne nahi rakhta. Ek hi kisan pehle component mein ho sakta hai aur
          doosre se bahar, aur ye normal hai.
        </p>

        <SchemeTable>
          <tr>
            <th>Component</th>
            <th>Kis par nirbhar</th>
            <th>Kab milta hai</th>
          </tr>
          <tr>
            <td>Assured income support</td>
            <td>Cultivable land ka area (ROR mein darj)</td>
            <td>Saal mein do baar — Kharif aur Rabi</td>
          </tr>
          <tr>
            <td>Death benefit</td>
            <td>Registered kisan ki umar 18–60 ke andar honi chahiye</td>
            <td>Ek hi baar, claim manzoor hone par</td>
          </tr>
        </SchemeTable>

        <h2>Kitna Paisa Banta Hai — Slab Ka Asli Logic</h2>

        <p>
          Income support ka hisaab per-acre chalta hai, lekin usmein neeche ek floor aur upar ek
          ceiling — dono lage hue hain. Ek acre ya usse zyada cultivable land par poora annual
          grant banta hai. Ek acre se kam par hisaab pro-rata hota hai, magar ek nyoontam raqam
          se neeche nahi jaata. Aur bahut zyada zameen hone par bhi grant upar ki limit paar
          nahi karta — is scheme ka jhukav chhote aur seemant kisan ki taraf hai.
        </p>

        <p>
          Yahi wajah hai ki do padosi kisanon ko alag-alag raqam mil sakti hai aur dono hi
          &ldquo;sahi&rdquo; ho sakte hain. Bhagchasi (sharecropper) bhi is scheme mein aate
          hain — bas unka record panchayat/department ke paas recorded hona chahiye. Aur jinke
          paas apni zameen bilkul nahi hai, unke liye landless khetmajur wala alag track banaya
          gaya hai, jiska enrolment camp ke zariye hota hai aur portal par section bhi alag hai.
        </p>

        <p>
          Neeche diya tool aapki zameen aur umar par yahi slab logic laga kar batata hai ki
          annual grant kitna banega, ek kist mein kitna aayega, death benefit lagu hai ya nahi,
          aur aapke case mein kaun-kaun se kagaz lagenge. Sab hisaab aapke phone mein hota hai —
          na koi login, na koi data kahin bhejna.
        </p>

        <KrishakBandhuChecker />

        <h2>Voter ID Se Status Check Karne Ka Tareeka</h2>

        <p>
          Baaki state schemes Aadhaar ko primary key banati hain, lekin Krishak Bandhu ki
          pehchaan ka mukhya zariya <strong>Voter ID (EPIC number)</strong> hai. Isliye search
          karte waqt EPIC number sabse bharosemand option rehta hai.
        </p>

        <ol>
          <li>
            Official portal <code>krishakbandhu.wb.gov.in</code> kholein. Kisi bhi
            &ldquo;.net&rdquo; ya &ldquo;.com&rdquo; wale milte-julte naam par mat jaayein —
            wo private websites hain.
          </li>
          <li>Homepage par status check ya farmer search wala section chunein.</li>
          <li>
            Search option mein Voter ID / EPIC chunein. Aksar Aadhaar, mobile number aur
            acknowledgement ID ke option bhi rehte hain.
          </li>
          <li>
            EPIC number bilkul waise likhein jaise card par hai — teen angrezi akshar phir
            saat ank. Space na chhodein.
          </li>
          <li>Captcha bharein aur search dabaayein.</li>
          <li>
            Screen par aapka naam, gaon, block, land area aur current stage aa jaayega. Isi
            page ka screenshot rakh lena aage kaam aata hai.
          </li>
        </ol>

        <ExternalLinkButton
          href={article.officialPortal}
          label="Official Krishak Bandhu portal par status check karein"
        />

        <InfoBox type="tip">
          Search se pehle apna EPIC number Voter ID card se milaa lein. Ek ank ki galti par
          portal &ldquo;no record found&rdquo; dikha deta hai, aur log samajh lete hain ki naam
          list se kat gaya — jabki dikkat sirf typing ki thi.
        </InfoBox>

        <h2>Status Mein Likhi Baat Ka Matlab Kya Hai</h2>

        <p>
          Portal jo shabd dikhata hai, unka matlab technical hai. Sahi matlab pata ho to aap
          bina bank ya office ke chakkar lagaye samajh sakte hain ki kya karna chahiye.
        </p>

        <SchemeTable>
          <tr>
            <th>Status</th>
            <th>Iska matlab</th>
            <th>Aapko kya karna chahiye</th>
          </tr>
          <tr>
            <td>Under process</td>
            <td>Application record mein hai, verification chal raha hai</td>
            <td>Intezaar karein; baar-baar naya form bharne se kaam nahi banta</td>
          </tr>
          <tr>
            <td>Approved / sanctioned</td>
            <td>Eligibility maan li gayi, payment file banni hai</td>
            <td>Kuch nahi — agli stage treasury ke paas hai</td>
          </tr>
          <tr>
            <td>Account valid</td>
            <td>Bank details bank ne verify kar di hain</td>
            <td>Yahi sabse achhi nishani hai; paisa isi account mein aayega</td>
          </tr>
          <tr>
            <td>Amount sent / disbursed</td>
            <td>Paisa release ho chuka hai</td>
            <td>Passbook update karwaayein; SMS na aana normal hai</td>
          </tr>
          <tr>
            <td>Rejected / cancelled</td>
            <td>Verification mein kuch mismatch mila</td>
            <td>Block agriculture office se kaaran poochein aur usi ko theek karwaayein</td>
          </tr>
        </SchemeTable>

        <p>
          Ek baat khaas dhyan dein: <strong>account valid</strong> ka matlab paisa aa gaya nahi
          hai. Iska matlab sirf itna hai ki bank ne aapka account number aur naam sahi maan liya
          hai. Log yahan atak kar bank ke chakkar lagane lagte hain, jabki asal mein unhein
          agle release ka intezaar karna hai.
        </p>

        <h2>Padosi Ko Mil Gaya, Mujhe Nahi — Ye Kyun Hota Hai</h2>

        <p>
          Yahi sawaal sabse zyada poocha jaata hai, aur iska jawab PM Kisan aur Krishak Bandhu
          ke bilkul alag paisa-bhejne ke tareeke mein hai. PM Kisan central DBT switch se chalta
          hai — release hone par desh bhar mein lagbhag ek hi samay paisa girta hai. Krishak
          Bandhu ka paisa <strong>district treasury</strong> ke raste jaata hai. State release
          ka aadesh deta hai, phir har zile ki treasury apni raftaar se file process karti hai.
        </p>

        <p>
          Nateeja: ek zile ka kisan aaj paisa dekh leta hai, padosi zile ka kisan teen din baad,
          aur kisi ka poora hafta lag jaata hai. Ye kharaabi nahi, system ka dhaancha hai. Isi
          liye release ki khabar aane ke baad pehle hafte mein ghabraana zaroori nahi — us dauran
          bank ki line mein lagne se kuch hasil nahi hota.
        </p>

        <h2>Beneficiary List Mein Apna Naam Kaise Dekhein</h2>

        <p>
          Agar status search bar-bar khaali aa raha hai, to gaon ki list dekhna agla qadam hai.
          List se do cheezein pakki hoti hain — aapka naam active hai, aur aapke naam ke saath
          darj land area wahi hai jo hona chahiye.
        </p>

        <ol>
          <li>Portal ke reports ya beneficiary list wale section mein jaayein.</li>
          <li>Apna zila, block aur gram panchayat chunein.</li>
          <li>Financial year aur season (Kharif ya Rabi) select karein.</li>
          <li>
            List generate karein — kai bar ye PDF ke roop mein aati hai. Naam ke saath area ka
            column bhi zaroor mila lein.
          </li>
        </ol>

        <p>
          List mein naam hai lekin paisa nahi aaya — matlab dikkat payment side par hai (bank
          account, NPCI mapping, ya treasury queue). Naam hi nahi hai — matlab dikkat
          eligibility ya land record side par hai. Ye ek chhota sa test hai jo aapko sahi
          darwaaze tak pahuncha deta hai.
        </p>

        <h2>Paisa Ruk Jaane Ki Aam Wajahein</h2>

        <h3>Land record mein mutation nahi hua</h3>
        <p>
          Zameen kharidi ya virasat mein mili, magar khatian mein naam nahi chadha — to scheme
          ki nazar mein zameen ka malik aap nahi hain. Ye sabse aam aur sabse zyada nazarandaaz
          ki jaane wali wajah hai. Iska hal BL&amp;LRO office mein mutation karwana hai, portal
          par kuch bharna nahi.
        </p>

        <h3>Bank account dormant ho gaya</h3>
        <p>
          Jis account mein saal mein do baar hi paisa aata hai, wo aksar bahut kam chalta hai
          aur bank use dormant kar deta hai. Aise account mein credit fail ho jaata hai. Bank ki
          branch mein KYC dobara karwa kar account active karwana padta hai.
        </p>

        <h3>Naam ki spelling mismatch</h3>
        <p>
          Voter ID mein ek spelling, bank mein doosri, khatian mein teesri — verification isi
          par ruk jaata hai. Sudhaar ka sabse asaan raasta ye hai ki aap ek document ko
          &ldquo;master&rdquo; maan lein aur baaki do ko uske hisaab se theek karwaayein.
        </p>

        <h3>Ek hi zameen par do dawe</h3>
        <p>
          Batware ke baad bhai-bhai ek hi plot par alag-alag registration kara dete hain.
          Verification drive mein aisa duplicate pakda jaata hai aur dono ki payment tab tak ruk
          jaati hai jab tak record saaf na ho. Ye block office mein hi sulajhta hai.
        </p>

        <h3>Joint khatian mein hissa saaf nahi</h3>
        <p>
          Kai gharon mein khatian sabhe bhaiyon ke naam saath hai, hissa alag likha nahi hota.
          Aise mein per-acre hisaab lagana mushkil ho jaata hai aur file pending pad jaati hai.
          Ek baar hissa record mein darj ho jaaye, to har saal ka jhanjhat khatam ho jaata hai.
        </p>

        <h2>Death Benefit — Parivaar Ke Liye Kya Karna Hota Hai</h2>

        <p>
          Ye component tab kaam aata hai jab registered kisan ki mrityu ho jaaye aur uski umar
          18 se 60 ke beech ho. Grant ek hi baar milta hai aur legal heir ya nominee ko diya
          jaata hai. Claim mein aksar deri kagaz ki wajah se hoti hai, is liye pehle se list
          bana lena behtar hai.
        </p>

        <ul>
          <li>Death certificate ki attested copy</li>
          <li>Marne wale kisan ka Krishak Bandhu record / card ki copy</li>
          <li>Kisan aur claim karne wale — dono ka ID proof (Voter ID ya Aadhaar)</li>
          <li>Umar ka proof, taaki 18–60 ki shart verify ho sake</li>
          <li>Zameen ka authenticated ROR</li>
          <li>Claimant ka self-declaration</li>
          <li>Claimant naabaalig ho to legal guardian ka declaration</li>
          <li>Accidental death ke case mein post-mortem report</li>
        </ul>

        <InfoBox type="warning">
          Death benefit claim ki apni samay-seema hoti hai. Mrityu ke baad file karne mein
          zyada der karne par claim technically time-barred ho sakta hai — is liye kagaz jamaa
          hote hi block agriculture office mein form dena behtar hai, ideal kagaz ka intezaar
          karne se nahi.
        </InfoBox>

        <h2>Jab Kuch Samajh Na Aaye To Kahan Jaana Hai</h2>

        <p>
          Sahi darwaaza chunna aadha kaam kar deta hai. Galat jagah jaane se sirf din barbaad
          hota hai.
        </p>

        <SchemeTable>
          <tr>
            <th>Dikkat</th>
            <th>Kahan jaana hai</th>
          </tr>
          <tr>
            <td>Naam list mein nahi hai / registration nahi hua</td>
            <td>Block agriculture office, ya duare sarkar type camp</td>
          </tr>
          <tr>
            <td>Khatian mein naam ya area galat hai</td>
            <td>BL&amp;LRO (land records) office</td>
          </tr>
          <tr>
            <td>Account valid dikh raha hai, paisa nahi aaya</td>
            <td>Pehle ek hafta ruko; phir bank branch mein credit poochho</td>
          </tr>
          <tr>
            <td>Account dormant ya band</td>
            <td>Bank branch — KYC aur reactivation</td>
          </tr>
          <tr>
            <td>Rejected likha hai, kaaran nahi pata</td>
            <td>Block agriculture office — file par remark wahi dikhta hai</td>
          </tr>
        </SchemeTable>

        <h2>Kist Ka Time Kaisa Rehta Hai</h2>

        <p>
          Saal mein do release hote hain — ek Kharif season ke aas-paas aur doosra Rabi ke
          aas-paas. Practically dekha gaya hai ki dates har saal thodi aage-peeche hoti rehti
          hain, kyunki verification aur treasury processing ka waqt lagta hai. Isliye kisi bhi
          &ldquo;pakki tareekh&rdquo; wale WhatsApp forward par bharosa karna theek nahi.
        </p>

        <p>
          Behtar aadat ye hai: release ki khabar aane par apna status khud check karein, aur agar
          account valid dikh raha hai to hafta bhar sabr karein. Isi dauran passbook update
          karwaate rahein — kai baar paisa aa jaata hai aur SMS aata hi nahi, khaas kar jab bank
          mein purana mobile number chadha ho.
        </p>

        <h2>Chhoti Aadatein Jo Har Saal Bachaati Hain</h2>

        <ul>
          <li>
            Status check karte waqt screenshot le lein — baad mein office mein baat karne par
            yahi sabse kaam ka kagaz hota hai.
          </li>
          <li>
            Bank aur Aadhaar dono mein ek hi mobile number rakhein, warna SMS kabhi kisi ek par
            hi jaayega.
          </li>
          <li>
            Zameen ka koi bhi lena-den hone ke turant baad mutation karwaayein, kist ke season
            ka intezaar na karein.
          </li>
          <li>
            Season shuru hone se pehle ek baar khaali passbook entry karwa lein, taaki account
            dormant na pade.
          </li>
        </ul>

        <h2>Aakhri Baat</h2>

        <p>
          Krishak Bandhu mein paisa ruknay ki wajah lagbhag hamesha kagaz hoti hai, kismat nahi.
          Land record, bank account aur naam ki spelling — ye teen cheezein durust hon to
          scheme apne aap chalti rehti hai. Aur jab kuch atak jaaye, to portal ka status shabd
          padh kar aap khud tay kar sakte hain ki block office jaana hai, BL&amp;LRO jaana hai,
          ya bank. Sabse aakhri baat: koi bhi jaankari paisa maangne wale &ldquo;agent&rdquo; se
          confirm na karein — official portal aur block office, bas yeh do hi asli source hain.
        </p>

        {article.officialPortal && (
          <p>
            Official portal:{' '}
            <a href={article.officialPortal} rel="nofollow noopener" target="_blank">
              {article.officialPortal.replace('https://', '')}
            </a>
          </p>
        )}

        <p>
          <Link href="/rajya-yojana">← Sabhi rajya ki kisan yojana</Link>
        </p>
      </article>
    </>
  );
}
