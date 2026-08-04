import Link from 'next/link';
import Image from 'next/image';
import type { RajyaYojanaArticleMeta } from '@/lib/rajya-yojana-data';
import InfoBox from '@/components/ui/InfoBox';
import SchemeTable from '@/components/ui/SchemeTable';
import StateYojanaFinder from '@/components/articles/rajya-yojana/tools/StateYojanaFinder';
import { FAQBlock } from '@/components/ArticleShared';

const FAQS_DATA = [
  {
    q: 'Kya har rajya PM Kisan ke upar apna paisa deta hai?',
    a: 'Nahi. Sirf kuch rajyon ne apni alag income-support scheme banayi hai — jaise Maharashtra, Rajasthan, Madhya Pradesh, Andhra Pradesh, Telangana, West Bengal aur Odisha. Baaki rajyon mein saal bhar ka hisaab sirf PM Kisan ke ₹6,000 se banta hai.',
  },
  {
    q: 'State scheme lene se PM Kisan band ho jaata hai?',
    a: 'Nahi. Ek central sarkar ki scheme hai, doosri rajya sarkar ki — dono ek doosre ko cancel nahi kartin. Balki kai rajya to apni eligibility hi PM Kisan record se uthate hain.',
  },
  {
    q: 'PM Kisan aa gaya lekin state ka paisa nahi aaya, kya karein?',
    a: 'Ye aam baat hai — dono ki payment cycle aur verification alag hoti hai. State ka status uske apne portal par dekhein, aur e-KYC, land record aur bank ki NPCI seeding teeno check karein. Zyadatar case in teen mein se ek par atakta hai.',
  },
];

const IMG_BASE = '/images/articles/rajya-yojna/state-kisan-yojana-list-all-states-2026';

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

export default function StateKisanYojanaHub({ article }: { article: RajyaYojanaArticleMeta }) {

  return (
    <>

      <article className="max-w-3xl mx-auto px-4 py-8 prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          State Kisan Yojana List 2026 — Kis Rajya Mein Kitna Milta Hai
        </h1>

        <Fig
          src="hero.webp"
          alt="Alag-alag rajyon ke kisan ek khet mein saath khade hain"
          caption="PM Kisan sab jagah ek jaisa hai — farak state ki apni scheme se aata hai"
          priority
        />

        <p>
          Ek hi sawaal alag-alag zubaan mein roz poochha jaata hai: &ldquo;padosi rajya mein
          kisan ko zyada paisa milta hai, humein kam kyun?&rdquo; Jawab seedha hai. PM Kisan
          poore desh mein ek jaisa hai — saal ka ₹6,000, teen ₹2,000 ki kist mein. Farak wahan
          se shuru hota hai jahan rajya sarkar apni jeb se kuch aur jodti hai. Kuch rajya
          jodte hain, kuch nahi jodte. Aur jo jodte hain, unka tareeka bhi ek jaisa nahi hai —
          kisi mein flat raqam hai, kisi mein per-acre, aur kahin bhoomiheen parivaar ke liye
          ek alag track.
        </p>

        <Fig
          src="india-farm-fields.webp"
          alt="Do alag rajyon ke khet — dhaan aur gehun — ek hi frame mein"
          caption="Kheti ka season aur scheme ka design — dono rajya ke hisaab se badalte hain"
        />

        <InfoBox type="info">
          Do cheezein alag rakhna zaroori hai — <strong>central</strong> ka PM Kisan aur{' '}
          <strong>state</strong> ki apni scheme. Dono ke portal alag, verification alag, aur
          payment cycle alag hoti hai. Isi liye ek aa jaata hai aur doosra atak jaata hai, aur
          log samajhte hain ki scheme band ho gayi.
        </InfoBox>

        <h2>Pehle Apna Rajya Chunein — Poora Hisaab Ek Jagah</h2>

        <p>
          Neeche diya tool wahi kaam karta hai jo aam taur par teen-chaar page kholkar karna
          padta hai. Aap apna rajya, zameen aur category chunte hain, aur wo bata deta hai ki
          central se kitna, state se kitna, saal bhar ka jod kitna, official portal kaun sa
          hai, aur us scheme ka detail guide kahan hai.
        </p>

        <StateYojanaFinder />

        <h2>State-Wise List — Scheme, Raqam Aur Portal</h2>

        <p>
          Neeche wahi rajya hain jinki apni chalu income-support scheme hai aur jinka poora
          status-check process humne alag se likha hai. Raqam wahi hai jo us article mein
          verify ki gayi hai — kisi bhi row mein andaza nahi lagaya gaya.
        </p>

        <SchemeTable>
          <tr>
            <th>Rajya</th>
            <th>Scheme</th>
            <th>State ka hissa (saalana)</th>
            <th>Detail</th>
          </tr>
          <tr>
            <td>Andhra Pradesh</td>
            <td>Annadata Sukhibhava</td>
            <td>₹14,000 (PM Kisan ke saath total ₹20,000)</td>
            <td>
              <Link href="/rajya-yojana/annadata-sukhibhava-status-check-2026">
                Status check guide
              </Link>
            </td>
          </tr>
          <tr>
            <td>Telangana</td>
            <td>Rythu Bharosa</td>
            <td>₹12,000 per acre (cultivable land)</td>
            <td>
              <Link href="/rajya-yojana/rythu-bharosa-status-check-2026">Status check guide</Link>
            </td>
          </tr>
          <tr>
            <td>West Bengal</td>
            <td>Krishak Bandhu</td>
            <td>₹10,000 per acre, minimum ₹4,000</td>
            <td>
              <Link href="/rajya-yojana/krishak-bandhu-status-check-2026">
                Status check guide
              </Link>
            </td>
          </tr>
          <tr>
            <td>Odisha</td>
            <td>CM Kisan (pehle KALIA)</td>
            <td>₹4,000 cultivator / ₹12,500 landless</td>
            <td>
              <Link href="/rajya-yojana/odisha-cm-kisan-status-check-2026">
                Status check guide
              </Link>
            </td>
          </tr>
          <tr>
            <td>Maharashtra</td>
            <td>Namo Shetkari Mahasanman Nidhi</td>
            <td>₹6,000 (total ₹12,000)</td>
            <td>
              <Link href="/rajya-yojana/namo-shetkari-yojana-status-check-2026">
                Status check guide
              </Link>
            </td>
          </tr>
          <tr>
            <td>Rajasthan</td>
            <td>Mukhyamantri Kisan Samman Nidhi</td>
            <td>₹3,000 confirmed (total ₹9,000)</td>
            <td>
              <Link href="/rajya-yojana/rajasthan-kisan-samman-nidhi-9000">
                Status check guide
              </Link>
            </td>
          </tr>
          <tr>
            <td>Madhya Pradesh</td>
            <td>CM Kisan Kalyan Yojana</td>
            <td>₹6,000 (total ₹12,000)</td>
            <td>
              <Link href="/rajya-yojana/mp-kisan-kalyan-yojana-kist-status">
                Status check guide
              </Link>
            </td>
          </tr>
        </SchemeTable>

        <InfoBox type="warning">
          Jis rajya ka naam is list mein nahi hai, wahan aam taur par PM Kisan ke alawa koi
          state top-up nahi chal raha. Kisi bhi &ldquo;naya rajya scheme shuru&rdquo; wali
          khabar par bharosa notification dekhne ke baad karein — ghoshna aur gazette
          notification do alag cheezein hain, aur beech mein mahine lag jaate hain.
        </InfoBox>

        <h2>Teen Tarah Ki Design — Isse Poori List Samajh Aa Jaati Hai</h2>

        <p>
          Bahar se lagta hai ki har rajya apni marzi se raqam tay karta hai. Asal mein sirf
          teen design hain, aur ek baar ye samajh aa jaayein to kisi bhi rajya ki scheme padhna
          aasaan ho jaata hai.
        </p>

        <h3>1. Flat top-up — zameen se koi farak nahi</h3>
        <p>
          Maharashtra, Rajasthan aur Madhya Pradesh isi design par chalte hain. State ek fix
          raqam deta hai, chahe zameen aadha bigha ho ya bees bigha. Iska faayda chhote kisan
          ko zyada hota hai, kyunki per-acre wale system mein unki raqam bahut kam ban jaati
          hai. Aise rajyon mein eligibility aam taur par PM Kisan record se hi uthai jaati hai
          — matlab PM Kisan mein naam ho, to state ka paisa apne aap ban jaata hai.
        </p>

        <h3>2. Per-acre grant — area par tikka hua, lekin cap ke saath</h3>
        <p>
          Telangana aur West Bengal is design mein aate hain. Yahan raqam zameen ke hisaab se
          banti hai, lekin dono taraf lagaam lagi hai: upar ek cap hai, taaki bade kisan ko
          bahut zyada na chala jaaye, aur West Bengal jaise case mein neeche ek floor bhi hai,
          taaki bahut chhote kisan ko bilkul mamooli raqam na mile. Is design mein land record
          ki galti sabse mehngi padti hai — area galat darj ho, to raqam seedha galat banti
          hai.
        </p>

        <h3>3. Do track — zameen wale aur bhoomiheen ke liye alag</h3>
        <p>
          Odisha ka CM Kisan iska sabse saaf udaharan hai. Zameen wale parivaar ko kheti ke
          input ke liye paisa milta hai, aur bhoomiheen krishi parivaar ko allied kaam — bakri
          palan, murgi palan, dairy, machhli — ke liye alag aur zyada raqam. Ye wo audience hai
          jo PM Kisan mein bilkul nahi aata, kyunki PM Kisan landholding par tikka hai. Andhra
          Pradesh bhi tenant farmer ko CCRC ke zariye shamil karta hai, jo isi soch ka doosra
          roop hai.
        </p>

        <SchemeTable>
          <tr>
            <th>Design</th>
            <th>Kis rajya mein</th>
            <th>Kisko sabse zyada faayda</th>
            <th>Kahan atakta hai</th>
          </tr>
          <tr>
            <td>Flat top-up</td>
            <td>Maharashtra, Rajasthan, MP</td>
            <td>Bahut chhoti jotdaari wale kisan</td>
            <td>PM Kisan record galat ho to state bhi ruk jaata hai</td>
          </tr>
          <tr>
            <td>Per-acre</td>
            <td>Telangana, West Bengal</td>
            <td>1 acre se upar wale kisan</td>
            <td>Land record mein area ya mutation ki galti</td>
          </tr>
          <tr>
            <td>Do track</td>
            <td>Odisha (aur AP tenant ke liye)</td>
            <td>Bhoomiheen aur batai par kheti karne wale</td>
            <td>Landless / tenant certificate na hona</td>
          </tr>
        </SchemeTable>

        <h2>Kist Ka Waqt — Kyun Har Rajya Mein Alag Chalta Hai</h2>

        <p>
          PM Kisan ki kist ka ek hi national schedule hota hai, is liye uski khabar poore desh
          mein ek saath chalti hai. State scheme mein aisa kuch nahi hai. Wahan release ka waqt
          teen cheezon se tay hota hai: rajya ka budget kab clear hota hai, verification ka round
          kab poora hota hai, aur kheti ka season kahan tak pahuncha hai.
        </p>

        <p>
          Isi liye per-acre wali scheme aam taur par season ke saath chalti hai — Kharif ke
          aas-paas ek hissa, Rabi ke aas-paas doosra. Flat top-up wali scheme kabhi PM Kisan ki
          kist ke saath jodkar release hoti hai, kabhi apne schedule par. Aur do-track design
          mein bhoomiheen parivaar ke tranche cultivator se hat kar chalte hain, kyunki dono ke
          kaam aur zaroorat ka waqt ek jaisa nahi hota.
        </p>

        <InfoBox type="tip">
          Kisi bhi “pakki tareekh” wale WhatsApp ya YouTube dawe par plan na banayein. Release ki
          khabar aane par khud portal par status kholein — agar e-KYC aur bank mapping dono theek
          dikh rahi hain, to kuch din ka sabr hi kaafi hota hai. Bank ke chakkar lagane ki zaroorat
          nahi padti.
        </InfoBox>

        <h2>Kaun Sab Jagah Bahar Rehta Hai — Common Exclusion</h2>

        <p>
          Har rajya ki scheme ka apna kaagaz hai, lekin exclusion list lagbhag har jagah ek jaisi
          hai. Aur ye rule poore parivaar par lagta hai, sirf form bharne wale par nahi — yahi baat
          sabse zyada recovery notice ki wajah banti hai.
        </p>

        <ul>
          <li>Ghar ka koi sadasya income tax bharta ho.</li>
          <li>
            Koi sadasya sarkari naukri mein ho ya pension paata ho — Class-IV / Group-D aam taur
            par is se bahar rakhe jaate hain.
          </li>
          <li>Practising professional — doctor, vakil, CA, engineer, architect.</li>
          <li>MP, MLA, mayor ya zila parishad chairman jaise elected post par raha ho.</li>
          <li>Zameen trust, society, company ya sarkari sanstha ke naam par ho.</li>
          <li>Per-acre aur do-track wali scheme mein zameen upar ki limit se zyada ho.</li>
        </ul>

        <p>
          Ek baat dhyan dene layak hai: alag ration card bana lena, ya panchayat se “alag
          parivaar” ka certificate le aana, exclusion se nahi bachaata. Verification data se hoti
          hai, kaagaz ke naam se nahi.
        </p>

        <h2>PM Kisan Aa Gaya, State Ka Nahi Aaya — Sabse Aam Shikayat</h2>

        <p>
          Ye ek shikayat har rajya se aati hai, aur lagbhag hamesha wajah ek jaisi hoti hai.
          Central DBT ek hi din poore desh mein chalti hai, jabki state ka release apne budget,
          apne verification aur apne portal ke hisaab se hota hai. Is liye do-tin hafte ka
          farak bilkul normal hai.
        </p>

        <p>
          Lekin agar farak mahine bhar se zyada ho jaaye, to jaanch ka tareeka har jagah wahi
          hai — teen cheezein, isi order mein:
        </p>

        <ol>
          <li>
            <strong>State portal par status</strong> — pehle wahi kholein, PM Kisan ka portal
            nahi. State ka record alag hota hai aur remark bhi wahin dikhta hai.
          </li>
          <li>
            <strong>Aadhaar e-KYC</strong> — pending e-KYC number ek wajah hai. Portal par OTP
            se, ya nazdeeki CSC par biometric se poori ho jaati hai.
          </li>
          <li>
            <strong>Bank ki NPCI seeding</strong> — account Aadhaar se NPCI mapper mein linked
            hona chahiye. Branch mein bas &ldquo;Aadhaar seeding hui hai ya nahi&rdquo; poochein
            — photocopy jama karna kaafi nahi hota.
          </li>
        </ol>

        <Fig
          src="csc-ekyc-biometric.webp"
          alt="CSC kiosk par biometric machine se kisan ki e-KYC ho rahi hai"
          caption="Pending e-KYC ka sabse tez hal — nazdeeki CSC par biometric verification"
        />

        <p>
          Ye teen theek hon aur phir bhi paisa na aaye, to agla padaav office hai — per-acre
          wale rajyon mein tehsil ya revenue office (land record ki wajah se), aur flat wale
          rajyon mein block agriculture office. Bicholiye ke paas jaane se koi file aage nahi
          badhti.
        </p>

        <Fig
          src="tehsil-revenue-office.webp"
          alt="Tehsil office ke bahar kisan apni file ke saath baithe hain"
          caption="Land record ki dikkat portal se nahi, tehsil ya revenue office se hi sudharti hai"
        />

        <h2>Ek Rajya Se Doosre Rajya Jaane Par Kya Hota Hai</h2>

        <p>
          Ye sawaal aam hai un gharon mein jahan zameen ek rajya mein hai aur rehna doosre
          rajya mein hota hai. Rule seedha hai: state scheme us rajya ke land record par chalti
          hai, na ki aapke rehne ki jagah par. Bengal mein zameen hai to Krishak Bandhu wahi se
          banega, chahe kaam Delhi mein ho. Aur do rajyon ki do state schemes ek saath lena aam
          taur par nahi hota, kyunki dono apne resident aur apne record par verification karti
          hain.
        </p>

        <p>
          PM Kisan is mamle mein alag hai — wo central scheme hai, is liye zameen jis rajya
          mein bhi ho, ek hi claim banta hai. Aur wo claim poore parivaar ka ek hota hai, do
          nahi — iska poora hisaab humne{' '}
          <Link href="/rajya-yojana/pm-kisan-pati-patni-dono-ko-milega">
            pati-patni aur family rule wale page
          </Link>{' '}
          par likha hai.
        </p>

        <h2>Naya Registration Karne Se Pehle Ye Kaagaz Tayaar Rakhein</h2>

        <p>
          Rajya badalne se form badal jaata hai, lekin maangi jaane wali cheezein lagbhag wahi
          rehti hain. In paanch ko pehle se ready rakhna aadha kaam khatam kar deta hai.
        </p>

        <Fig
          src="documents-checklist.webp"
          alt="Registration ke liye zaroori kagaz — Aadhaar, passbook, land record aur phone"
          caption="Paanch kaagaz pehle se tayaar rakhein — form kisi bhi rajya ka ho, maang yahi rehti hai"
        />

        <SchemeTable>
          <tr>
            <th>Kaagaz</th>
            <th>Kis kaam aata hai</th>
          </tr>
          <tr>
            <td>Aadhaar card</td>
            <td>e-KYC aur DBT dono isi par tikte hain</td>
          </tr>
          <tr>
            <td>Land record — RoR / patta / khatauni</td>
            <td>Kis naam par aur kitna area, yahi se tay hota hai</td>
          </tr>
          <tr>
            <td>Bank passbook (NPCI-seeded account)</td>
            <td>Bina seeding payment return ho jaati hai</td>
          </tr>
          <tr>
            <td>Aadhaar se linked chalu mobile number</td>
            <td>OTP aur payment SMS isi par aate hain</td>
          </tr>
          <tr>
            <td>Landless ya tenant certificate (jahan lagu ho)</td>
            <td>Odisha ke landless track aur AP ke tenant case mein zaroori</td>
          </tr>
        </SchemeTable>

        <p>
          Ek chhoti aadat bahut waqt bachaati hai — teeno jagah, matlab land record, Aadhaar aur
          bank, naam ki spelling ek jaisi rakhein. Naam ka farak baad mein sudharna sabse dheema
          kaam hai, kyunki wo tehsil aur bank dono jagah karana padta hai.
        </p>

        <h2>Is List Ko Padhte Waqt Ye Baatein Yaad Rakhein</h2>

        <ul>
          <li>
            Raqam ka matlab hamesha &ldquo;saal bhar ka&rdquo; hai, ek kist ka nahi. Kist ki
            ginti har scheme mein alag hoti hai — do, teen ya usse zyada.
          </li>
          <li>
            Announcement aur notification alag hain. Rajasthan ka badhotri wala case iska seedha
            udaharan hai — plan ₹9,000 par banayein, ₹12,000 par nahi.
          </li>
          <li>
            Per-acre wali scheme mein zameen ka record hi aapki raqam hai. Mutation adhoora ho
            to raqam kam banegi, aur portal par shikayat se wo theek nahi hoti — tehsil jaana
            padta hai.
          </li>
          <li>
            Bhoomiheen aur batai par kheti karne wale PM Kisan mein nahi aate, lekin kuch rajyon
            ki scheme mein poora hissa paate hain. Apne rajya ka track pehle dekh lein.
          </li>
          <li>
            Har scheme ka status sirf uske official portal par dekhein. Milte-julte naam wali
            private site par aapka record nahi hota, sirf jaankari hoti hai.
          </li>
        </ul>

        <h2>List Ke Baare Mein Aksar Poochhe Jaane Wale Sawaal</h2>

        <FAQBlock faqs={FAQS_DATA} caption="State kisan yojana list — FAQ 2026" />

        <h2>Aakhri Baat</h2>

        <p>
          Poori list ka nichod ek line mein: PM Kisan aapka base hai, aur state ki scheme uske
          upar ka bonus — jo har rajya mein alag hai aur kai rajyon mein bilkul nahi hai. Isi
          liye padosi rajya se apni raqam ki tulna karne ka koi faayda nahi; kaam ki baat sirf
          ye hai ki aapke rajya ki scheme kaun si hai, uska design kaun sa hai, aur aapka
          record us design ke hisaab se saaf hai ya nahi.
        </p>

        <p>
          Upar ka finder isi kaam ke liye hai — apna rajya chunein, apna hisaab dekhein, aur
          phir usi scheme ka detail page kholkar status check ka poora process follow karein.
          Kist ki taazaa halat ke liye{' '}
          <Link href="/articles/PmKisan24viKist2026">PM Kisan kist tracker</Link> aur poore
          rules ke liye{' '}
          <Link href="/articles/PmKisanMasterGuide2026">PM Kisan master guide</Link> dono kaam
          aayenge.
        </p>

        <p>
          <Link href="/rajya-yojana">← Sabhi rajya ki kisan yojana</Link>
        </p>
      </article>
    </>
  );
}
