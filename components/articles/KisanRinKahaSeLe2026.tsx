'use client';
import Link from 'next/link';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, fmtDate } from '@/components/ArticleShared';
import Image from 'next/image';
import { SvgBeneficiaryList, SvgCorrection, SvgCropInsurance, SvgEkycStatus, SvgFAQ, SvgInstallmentHistory, SvgInstallmentStatus, SvgKisanLoan, SvgLandSeeding, SvgMobileUpdate, SvgNameCorrection, SvgPaymentFailed, SvgProblemsSolution, SvgRegistration, SvgRejectedList, SvgTractorLoan } from '@/components/ArticleSVGs';

const DOMAIN = 'https://kisanstatus.com';
const SLUG   = 'kisan-rin-kaha-se-le-2026';
const URL    = `${DOMAIN}/articles/${SLUG}`;







export default function KisanRinKahaSeLe2026() {
      
  return (
    <main
      style={{
        fontFamily:
          "'Segoe UI', 'Noto Sans', 'Noto Sans Devanagari', Arial, sans-serif",
        maxWidth: "860px",
        margin: "0 auto",
        padding: "16px",
        color: "#1a1a1a",
        lineHeight: 1.85,
        fontSize: "17px",
      }}
    >
        <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #d1fae5', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', margin: '24px 0' }}>
          <img src="/images/kisan-loan-kcc.png" alt="Kisan Loan 2026 — KCC, Bank Loan, NABARD — Kaunsa Best Hai"
            style={{ width: '100%', objectFit: 'cover', maxHeight: '420px' }}
            loading="lazy" width="1200" height="630"/>
          <p style={{ textAlign: 'center', fontSize: '12px', color: '#6b7280', padding: '8px', background: '#f0fdf4', borderTop: '1px solid #d1fae5' }}>
            Kisan Loan 2026 — KCC, Bank Loan, NABARD — Kaunsa Best Hai
          </p>
        </div>
      {/* ===== HERO SECTION ===== */}
      <article>
        <header
          style={{
            background: "linear-gradient(135deg, #1B5E20 0%, #2E7D32 60%, #43A047 100%)",
            color: "white",
            borderRadius: "14px",
            padding: "36px 28px",
            marginBottom: "32px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#A5D6A7",
              marginBottom: "12px",
            }}
          >
            Agriculture &amp; Finance Guide 2026
          </p>
          <h1
            style={{
              fontSize: "clamp(26px, 5vw, 42px)",
              fontWeight: 800,
              lineHeight: 1.3,
              margin: "0 0 16px",
              color: "#FFFFFF",
            }}
          >
            Kisan Rin Kaha Se Le 2026 – Poori Jankari Ek Jagah
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "#C8E6C9",
              maxWidth: "620px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Rajpal Chacha Ki Kahani Ke Saath Jaaniye – Kisan Credit Card, Bank
            Loan, CSC Center aur Cooperative Society Se Kisan Rin Kaise Le
          </p>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            {["📅 June 2026", "⏱ 15 Min Read", "👨‍🌾 Hinglish Guide"].map(
              (tag) => (
                <span
                  key={tag}
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    borderRadius: "20px",
                    padding: "6px 16px",
                    fontSize: "14px",
                    color: "#E8F5E9",
                  }}
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </header>

        {/* ===== IMAGE 1 ===== */}
        <figure style={{ margin: "0 0 36px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.12)" }}>
          <img
            src="/images/pm-kisan-guide.png"
            alt="Kisan Rin 2026 – Rajpal Chacha Jaise Kisano Ki Umeed"
            style={{ width: "100%", display: "block" }}
            loading="eager"
          />
          <figcaption
            style={{
              background: "#F1F8E9",
              padding: "10px 16px",
              fontSize: "14px",
              color: "#558B2F",
              textAlign: "center",
              borderTop: "2px solid #AED581",
            }}
          >
            🌾 Kisan Rin 2026 – Apni Fasal Ka Sahara Paiye Sahi Jagah Se
          </figcaption>
        </figure>

        {/* ===== INTRO ===== */}
        <section style={{ marginBottom: "40px" }}>
          <p>
            Hamare desh mein <strong>70% se zyada aabadi gaon mein rehti hai</strong> aur
            kheti karke apna guzara chalati hai. Lekin kheti ka kaam karne ke liye
            paisa chahiye – beej kharidne ke liye, khad ke liye, tractor ke liye, ya
            nali banwane ke liye. Aur ye paisa har baar khud ke paas nahi hota.
          </p>
          <p>
            Yahi haal tha hamare{" "}
            <strong>Rajpal Chacha ka – Rampur gaon ke rehne wale ek seedhe-saadhe kisan</strong>.
            Unke paas 3 bigha zameen hai, ghar mein 4 log hain, aur roz subah 4 baje
            uthke khet mein kaam karna unki zindagi hai. Pichle saal gehu ki fasal
            theek rahi, lekin is baar aage ki fasal ke liye beej aur urea kharidni
            thi aur paas mein paise nahi the.
          </p>
          <p>
            Rajpal Chacha ne socha – <em>"Kaha se milega paise? Kya kisi se udhar
            lunga ya koi rasta hai?"</em> Gaon mein sahukar se paise lene ka darr
            sab ko hota hai – zyada byaj, najaiz conditions. Isliye aaj hum aapko
            batayenge ki <strong>Kisan Rin Kaha Se Le 2026</strong> mein – sahi tarika,
            sahi jagah, aur sahi documents ke saath.
          </p>

          <div
            style={{
              background: "#E8F5E9",
              border: "2px solid #66BB6A",
              borderRadius: "10px",
              padding: "20px 24px",
              margin: "24px 0",
            }}
          >
            <strong style={{ color: "#2E7D32", fontSize: "16px" }}>
              💡 Quick Summary – Is Article Mein Kya Milega?
            </strong>
            <ul style={{ marginTop: "12px", paddingLeft: "20px", color: "#1B5E20" }}>
              <li>Kisan Credit Card (KCC) – Sabse Aasan Tarika</li>
              <li>Sarkari Bank Se Kisan Loan Kaise Le</li>
              <li>CSC Center Se Loan Apply Karna</li>
              <li>Cooperative Society Ka Option</li>
              <li>Zaroori Documents Ki List</li>
              <li>Byaj Dar (Interest Rate) Comparison</li>
              <li>Common Galtiyan Jo Avoid Karni Chahiye</li>
              <li>Loan Approval Tips</li>
              <li>FAQ aur Conclusion</li>
            </ul>
          </div>
        </section>

        {/* ===== H2: KISAN RIN KYA HOTA HAI ===== */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 4vw, 30px)",
              color: "#1B5E20",
              borderBottom: "3px solid #4CAF50",
              paddingBottom: "10px",
              fontWeight: 700,
            }}
          >
            Kisan Rin Kya Hota Hai aur Kaun Le Sakta Hai?
          </h2>
          <p>
            Kisan Rin ek aisa loan hai jo specifically agriculture kaam ke liye diya
            jata hai. Jab Rajpal Chacha ne pehli baar bank jaana socha toh unhe
            pata nahi tha ki actually kitne options hain. Unka bhai – jo shehar mein
            kaam karta hai – ne bataya ki <strong>kisan ke liye alag alag loan schemes
            hain jo normal logo ke liye nahi hoti</strong>.
          </p>
          <p>
            India mein kisan rin ke liye eligible wahi hai jo:
          </p>
          <ul style={{ paddingLeft: "24px", lineHeight: 2.2 }}>
            <li>
              <strong>Apni Zameen Ka Malik Ho</strong> – yaani khasra/khatauni unke
              naam par ho
            </li>
            <li>
              <strong>Kiraaya Ki Zameen Pe Kheti Kare</strong> – lease agreement
              ke saath
            </li>
            <li>
              <strong>Small/Marginal Farmer Ho</strong> – 5 acre se kam zameen
            </li>
            <li>
              <strong>Sharecropper / Oral Lessee</strong> – bhi eligible hai under
              certain schemes
            </li>
            <li>
              <strong>Self Help Group (SHG) Member</strong> – group loan bhi milta hai
            </li>
          </ul>
          <p>
            Rajpal Chacha ke paas 3 bigha zameen thi jo unke naam par thi – matlab
            woh<strong> completely eligible</strong> the kisan rin ke liye.
          </p>
        </section>

        {/* ===== H2: KISAN CREDIT CARD ===== */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 4vw, 30px)",
              color: "#1B5E20",
              borderBottom: "3px solid #4CAF50",
              paddingBottom: "10px",
              fontWeight: 700,
            }}
          >
            1. Kisan Credit Card (KCC) – Sabse Aasan aur Sabse Popular Option
          </h2>

          {/* IMAGE 2 */}
          <figure
            style={{
              margin: "20px 0 28px",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
            }}
          >
            <img
              src="/images/pm-kisan-guide.png"
              alt="Kisan Credit Card – KCC Loan 2026 India"
              style={{ width: "100%", display: "block" }}
              loading="lazy"
            />
            <figcaption
              style={{
                background: "#E3F2FD",
                padding: "10px 16px",
                fontSize: "14px",
                color: "#1565C0",
                textAlign: "center",
                borderTop: "2px solid #90CAF9",
              }}
            >
              💳 Kisan Credit Card – 4% Byaj Par 3 Lakh Tak Ka Loan, Rajpal Chacha
              Jaise Hazaron Kisano Ko Mil Raha Hai Faida
            </figcaption>
          </figure>

          <p>
            Jab Rajpal Chacha bank gaye toh bank manager ne pehla sawaal kiya –
            <em>"Chacha, aapke paas KCC hai?"</em> Chacha ne sar hila diya – nahi tha.
            Tab manager ne samjhaya ki{" "}
            <strong>Kisan Credit Card yani KCC ek revolving credit facility hai</strong>{" "}
            jisme ek baar limit set hoti hai aur aap jab chaaho withdraw karo, jab
            chaaho wapas karo.
          </p>

          <h3 style={{ fontSize: "22px", color: "#2E7D32", fontWeight: 700, marginTop: "28px" }}>
            KCC Ke Fayde – Jo Rajpal Chacha Ko Bhi Samaj Aaya
          </h3>
          <ul style={{ paddingLeft: "24px", lineHeight: 2.2 }}>
            <li>
              <strong>4% Effective Interest Rate</strong> – Agar aap time par payment
              karo toh 3% subsidy milti hai aur net rate sirf 4% hoti hai
            </li>
            <li>
              <strong>Up to ₹3 Lakh Without Collateral</strong> – koi zameen girwi
              rakhne ki zaroorat nahi
            </li>
            <li>
              <strong>Revolving Credit</strong> – Paise withdraw karo, fasal becho,
              wapas karo, phir lo
            </li>
            <li>
              <strong>ATM Card Milta Hai</strong> – KCC ATM Card se seedha paise
              nikal sakte ho
            </li>
            <li>
              <strong>Accident Insurance</strong> – ₹50,000 tak ka accident cover bhi
              saath mein milta hai
            </li>
            <li>
              <strong>Har Tarah Ki Farming Ke Liye</strong> – crop loan, animal
              husbandry, fishery sab ke liye
            </li>
          </ul>

          <h3 style={{ fontSize: "22px", color: "#2E7D32", fontWeight: 700, marginTop: "28px" }}>
            KCC Ke Liye Apply Kaise Kare – Step by Step
          </h3>
          <ol style={{ paddingLeft: "24px", lineHeight: 2.4 }}>
            <li>
              <strong>Apne Nearest Bank Mein Jaiye</strong> – SBI, PNB, Bank of
              Baroda, Gramin Bank – koi bhi chalega
            </li>
            <li>
              <strong>KCC Application Form Maangiye</strong> – Form PM-KCC ya bank ka
              apna form hota hai
            </li>
            <li>
              <strong>Documents Jama Kariye</strong> – Aadhar, PAN, Khatauni, Photo
              (details niche diye hain)
            </li>
            <li>
              <strong>Bank Verification</strong> – Bank wale zameen verify karte hain,
              7-15 din lagte hain
            </li>
            <li>
              <strong>KCC Card Mil Jata Hai</strong> – Approval hone par passbook aur
              ATM card dono milte hain
            </li>
          </ol>

          <div
            style={{
              background: "#FFF8E1",
              border: "2px solid #FFD54F",
              borderRadius: "10px",
              padding: "18px 22px",
              margin: "20px 0",
            }}
          >
            <strong style={{ color: "#E65100" }}>
              ⚡ Rajpal Chacha Ka Experience:
            </strong>
            <p style={{ margin: "10px 0 0", color: "#4E342E" }}>
              "Maine SBI mein KCC ke liye apply kiya. Unhone meri khatauni dekhi, 2
              hafton baad ghare aakar zameen ki verification ki, aur phir 10 din mein
              mujhe ₹1,80,000 ki limit wala KCC card mil gaya. Pehli baar maine
              ₹60,000 nikale aur beej kharid liye. Fasal bechne ke baad wapas kar
              diya. Ab mujhe sahukar ke paas jaane ki zaroorat nahi!"
            </p>
          </div>
        </section>

        {/* ===== H2: BANK LOAN ===== */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 4vw, 30px)",
              color: "#1B5E20",
              borderBottom: "3px solid #4CAF50",
              paddingBottom: "10px",
              fontWeight: 700,
            }}
          >
            2. Sarkari Bank Se Kisan Loan – Bade Kaam Ka Option
          </h2>
          <p>
            KCC ke alawa agar aapko zyada paise chahiye – jaise tractor kharidna
            ho, pump lagwana ho, greenhouse banana ho – toh aapko{" "}
            <strong>Term Loan ya Agricultural Project Loan</strong> ke liye apply
            karna hoga.
          </p>
          <p>
            Rajpal Chacha ke gaon mein ek aur kisan tha – Suresh Bhai – jinhone
            SBI se ₹4.5 lakh ka loan lekar drip irrigation system lagwaya tha.
            Rajpal Chacha ne unse pooch toh pata chala ki yeh process thodi lambi
            hai lekin mumkin hai.
          </p>

          <h3 style={{ fontSize: "22px", color: "#2E7D32", fontWeight: 700, marginTop: "28px" }}>
            Kaun Kaun Se Banks Kisan Loan Dete Hain?
          </h3>

          <div style={{ overflowX: "auto", margin: "20px 0" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "15px",
                minWidth: "560px",
              }}
            >
              <thead>
                <tr
                  style={{
                    background: "linear-gradient(90deg, #2E7D32, #388E3C)",
                    color: "white",
                  }}
                >
                  <th style={{ padding: "14px 12px", textAlign: "left", borderRadius: "6px 0 0 0" }}>
                    Bank Ka Naam
                  </th>
                  <th style={{ padding: "14px 12px", textAlign: "left" }}>
                    Loan Types
                  </th>
                  <th style={{ padding: "14px 12px", textAlign: "center" }}>
                    Max Amount
                  </th>
                  <th style={{ padding: "14px 12px", textAlign: "center", borderRadius: "0 6px 0 0" }}>
                    Interest Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["State Bank of India (SBI)", "KCC, Crop Loan, Tractor Loan", "₹25 Lakh+", "7% – 11%"],
                  ["Punjab National Bank (PNB)", "KCC, Farm Equipment Loan", "₹20 Lakh", "7.5% – 10.5%"],
                  ["Bank of Baroda (BOB)", "Kisan Samridhi, KCC", "₹25 Lakh", "7% – 10%"],
                  ["NABARD (via Gramin Bank)", "Micro Finance, SHG Loan", "₹5 Lakh", "8% – 12%"],
                  ["Regional Gramin Banks", "KCC, Small Farmer Loan", "₹10 Lakh", "8% – 11%"],
                  ["IDBI / Canara Bank", "Agri Infrastructure Loan", "₹50 Lakh", "8.5% – 12%"],
                ].map(([bank, type, amount, rate], i) => (
                  <tr
                    key={bank}
                    style={{
                      background: i % 2 === 0 ? "#F9FBE7" : "#FFFFFF",
                      borderBottom: "1px solid #E0E0E0",
                    }}
                  >
                    <td style={{ padding: "12px", fontWeight: 600, color: "#1B5E20" }}>{bank}</td>
                    <td style={{ padding: "12px", color: "#424242" }}>{type}</td>
                    <td style={{ padding: "12px", textAlign: "center", fontWeight: 700, color: "#2E7D32" }}>
                      {amount}
                    </td>
                    <td style={{ padding: "12px", textAlign: "center", color: "#E65100", fontWeight: 600 }}>
                      {rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={{ fontSize: "22px", color: "#2E7D32", fontWeight: 700, marginTop: "28px" }}>
            Kisan Term Loan Ke Types
          </h3>
          <ul style={{ paddingLeft: "24px", lineHeight: 2.2 }}>
            <li>
              <strong>Crop Loan (Short Term)</strong> – Beej, khad, pesticide ke liye –
              6 se 12 mahine ki tenure
            </li>
            <li>
              <strong>Agriculture Term Loan</strong> – Tractor, pump, irrigation ke
              liye – 3 se 7 saal
            </li>
            <li>
              <strong>Allied Activities Loan</strong> – Dairy, poultry, fishery ke
              liye
            </li>
            <li>
              <strong>Land Development Loan</strong> – Zameen ke development ke liye
            </li>
            <li>
              <strong>Warehouse Receipt Loan</strong> – Fasal godown mein rakhne par
              loan
            </li>
          </ul>

          <div
            style={{
              background: "#E8F5E9",
              borderLeft: "5px solid #4CAF50",
              padding: "18px 20px",
              margin: "20px 0",
              borderRadius: "0 8px 8px 0",
            }}
          >
            <p style={{ margin: 0, color: "#1B5E20" }}>
              <strong>Rajpal Chacha Ka Tajurba:</strong> "Jab maine SBI mein term loan
              ke liye apply kiya tractor ke liye, tab bank wale ne bola ki pehle KCC
              le lo aur ek saal track record banao. Phir ₹3 lakh se zyada ka loan
              easily approve ho jaayega. Maine unki baat mani – aur aaj mere paas
              dono hain: KCC bhi aur tractor loan bhi."
            </p>
          </div>
        </section>

        {/* ===== H2: CSC CENTER ===== */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 4vw, 30px)",
              color: "#1B5E20",
              borderBottom: "3px solid #4CAF50",
              paddingBottom: "10px",
              fontWeight: 700,
            }}
          >
            3. CSC Center (Common Service Centre) Se Kisan Loan Apply Karna
          </h2>
          <p>
            Gaon mein rehne wale bahut se kisan directly bank nahi ja sakte ya
            unhe process samajh nahi aati. Isliye government ne{" "}
            <strong>Common Service Centre (CSC)</strong> banaye hain – yeh ek digital
            seva kendra hai jo aapke gaon ya panchayat mein hota hai.
          </p>
          <p>
            Rajpal Chacha ke gaon se 3 km dur ek CSC Center tha jahan ek bhai
            – Ramesh Ji – baitha tha. Woh yahan Aadhar update, ration card, aur ab
            kisan loan ke liye bhi help karte hain.
          </p>

          <h3 style={{ fontSize: "22px", color: "#2E7D32", fontWeight: 700, marginTop: "28px" }}>
            CSC Center Se Kya Kya Hota Hai Kisan Loan Ke Liye?
          </h3>
          <ul style={{ paddingLeft: "24px", lineHeight: 2.4 }}>
            <li>
              <strong>PM-Kisan Samman Nidhi Registration / Correction</strong> – Aadhar
              link, bank link
            </li>
            <li>
              <strong>KCC Online Application</strong> – PM KCC portal ke through apply
            </li>
            <li>
              <strong>Kisan Credit Card Tracking</strong> – Application status check
            </li>
            <li>
              <strong>Bank Link / NPCI Mapping</strong> – Agar subsidy nahi aa rahi toh
              fix karwao
            </li>
            <li>
              <strong>Documents Digital Form Mein Upload</strong> – Aadhar, KYC sab
              online hoga
            </li>
            <li>
              <strong>Complaints Filing</strong> – Agar bank ne reject kiya ya process
              mein problem hai
            </li>
          </ul>

          <div
            style={{
              background: "#E3F2FD",
              border: "2px solid #42A5F5",
              borderRadius: "10px",
              padding: "18px 22px",
              margin: "20px 0",
            }}
          >
            <strong style={{ color: "#1565C0" }}>📱 CSC Center Kaise Dhundhe?</strong>
            <p style={{ margin: "10px 0 0", color: "#0D47A1" }}>
              Google par search karein: <strong>"CSC Center near me"</strong> ya phir{" "}
              <strong>locator.csccloud.in</strong> website par apna pincode daaliye.
              Rajpal Chacha ne yahi kiya aur 20 minute mein apne gaon ka nearest CSC
              dhundh liya.
            </p>
          </div>

          <h3 style={{ fontSize: "22px", color: "#2E7D32", fontWeight: 700, marginTop: "28px" }}>
            CSC Pe Jane Se Pehle Yeh Saath Leke Jaiye
          </h3>
          <ul style={{ paddingLeft: "24px", lineHeight: 2.2 }}>
            <li>Aadhar Card (original + photocopy)</li>
            <li>PAN Card</li>
            <li>Khasra / Khatauni (zameen ke kagaz)</li>
            <li>Bank Passbook ki copy</li>
            <li>Mobile number jo Aadhar se linked ho</li>
            <li>2 Passport size photos</li>
          </ul>
        </section>

        {/* ===== H2: COOPERATIVE SOCIETY ===== */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 4vw, 30px)",
              color: "#1B5E20",
              borderBottom: "3px solid #4CAF50",
              paddingBottom: "10px",
              fontWeight: 700,
            }}
          >
            4. Cooperative Society Se Kisan Rin – Gaon Ka Apna Bank
          </h2>
          <p>
            Aapne kabhi suna hoga "Sehkaari Society" ya "Primary Agriculture
            Cooperative Credit Society (PACS)"? Yeh basically gaon ke kisano ka
            apna mini bank hota hai. Rajpal Chacha ke gaon mein bhi ek{" "}
            <strong>Gram Seva Sehkari Samiti</strong> thi jahan se unhone pehle loan
            liya tha – kyunki woh zyada simple process thi.
          </p>

          <h3 style={{ fontSize: "22px", color: "#2E7D32", fontWeight: 700, marginTop: "28px" }}>
            Cooperative Society Loan Ke Fayde
          </h3>
          <ul style={{ paddingLeft: "24px", lineHeight: 2.2 }}>
            <li>
              <strong>Kam Documents</strong> – Sirf khatauni aur ration card se bhi kaam
              chal jaata hai kai jagah
            </li>
            <li>
              <strong>Local Level Decision</strong> – Society ke members khud loan
              approve karte hain
            </li>
            <li>
              <strong>Flexible Repayment</strong> – Fasal ke season ke hisab se payment
            </li>
            <li>
              <strong>NABARD Linked Subsidy</strong> – Government subsidized loans
              milte hain
            </li>
            <li>
              <strong>Member Hona Zaroori</strong> – ₹100-₹500 ka share leke member
              bano, phir loan lo
            </li>
          </ul>

          <h3 style={{ fontSize: "22px", color: "#2E7D32", fontWeight: 700, marginTop: "28px" }}>
            Cooperative Society Loan Ki Simit (Limitations)
          </h3>
          <ul style={{ paddingLeft: "24px", lineHeight: 2.2 }}>
            <li>Amount generally ₹50,000 se ₹2 Lakh tak limited hoti hai</li>
            <li>Interest rate 9% se 14% tak ho sakta hai</li>
            <li>Har gaon mein active society nahi hoti</li>
            <li>Kuch societies financially weak hain – pehle background check karo</li>
          </ul>

          <p>
            <strong>Rajpal Chacha ki salah:</strong> "Cooperative society se chhota
            loan lena sahi hai – jab urgent zaroorat ho aur bank process time le
            rahi ho. Lekin bada kaam – tractor ya boring – bank se hi karo."
          </p>
        </section>

        {/* ===== H2: DOCUMENTS ===== */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 4vw, 30px)",
              color: "#1B5E20",
              borderBottom: "3px solid #4CAF50",
              paddingBottom: "10px",
              fontWeight: 700,
            }}
          >
            5. Zaroori Documents – Jo Bina Nahi Milega Kisan Loan
          </h2>

          {/* IMAGE 3 */}
          <figure
            style={{
              margin: "20px 0 28px",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
            }}
          >
            <img
              src="/images/pm-kisan-guide.png"
              alt="Kisan Loan Documents Checklist 2026"
              style={{ width: "100%", display: "block" }}
              loading="lazy"
            />
            <figcaption
              style={{
                background: "#FBE9E7",
                padding: "10px 16px",
                fontSize: "14px",
                color: "#BF360C",
                textAlign: "center",
                borderTop: "2px solid #FFAB91",
              }}
            >
              📋 Sahi Documents Taiyar Rakho – Loan Approval Mein Nahi Hogi Dikkat
            </figcaption>
          </figure>

          <p>
            Rajpal Chacha ki pehli galti yahi rahi thi – woh bank gaye the bina
            saari papers ke. Bank wale ne wapas bhej diya. Doosri baar woh poori
            file lekar gaye aur usi din application accept hui.
          </p>

          <div style={{ overflowX: "auto", margin: "20px 0" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "15px",
                minWidth: "500px",
              }}
            >
              <thead>
                <tr style={{ background: "linear-gradient(90deg, #E65100, #F57C00)", color: "white" }}>
                  <th style={{ padding: "13px 12px", textAlign: "left", borderRadius: "6px 0 0 0" }}>
                    Document
                  </th>
                  <th style={{ padding: "13px 12px", textAlign: "center" }}>
                    KCC
                  </th>
                  <th style={{ padding: "13px 12px", textAlign: "center" }}>
                    Bank Loan
                  </th>
                  <th style={{ padding: "13px 12px", textAlign: "center", borderRadius: "0 6px 0 0" }}>
                    Coop. Society
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Aadhar Card (Biometric)", "✅ Zaroori", "✅ Zaroori", "✅ Zaroori"],
                  ["PAN Card", "✅ Zaroori", "✅ Zaroori", "❌ Optional"],
                  ["Khasra / Khatauni", "✅ Zaroori", "✅ Zaroori", "✅ Zaroori"],
                  ["Bank Passbook / Account", "✅ Zaroori", "✅ Zaroori", "✅ Zaroori"],
                  ["Passport Size Photo (2)", "✅ Zaroori", "✅ Zaroori", "✅ Zaroori"],
                  ["Income / Land Certificate", "⚠️ Recommended", "✅ Zaroori", "⚠️ Recommended"],
                  ["NOC / Consent Letter", "❌ Optional", "⚠️ For 3L+", "❌ Optional"],
                  ["Crop Details Form", "✅ Zaroori", "✅ Zaroori", "⚠️ Sometimes"],
                  ["Mobile Number (Aadhar Linked)", "✅ Zaroori", "✅ Zaroori", "✅ Zaroori"],
                ].map(([doc, kcc, bank, coop], i) => (
                  <tr
                    key={doc}
                    style={{
                      background: i % 2 === 0 ? "#FFF8F0" : "#FFFFFF",
                      borderBottom: "1px solid #F0E0D0",
                    }}
                  >
                    <td style={{ padding: "11px 12px", fontWeight: 600, color: "#4E342E" }}>{doc}</td>
                    <td style={{ padding: "11px 12px", textAlign: "center" }}>{kcc}</td>
                    <td style={{ padding: "11px 12px", textAlign: "center" }}>{bank}</td>
                    <td style={{ padding: "11px 12px", textAlign: "center" }}>{coop}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            style={{
              background: "#FCE4EC",
              border: "2px solid #F48FB1",
              borderRadius: "10px",
              padding: "18px 22px",
              margin: "20px 0",
            }}
          >
            <strong style={{ color: "#880E4F" }}>⚠️ Important Note:</strong>
            <p style={{ margin: "8px 0 0", color: "#4A148C" }}>
              Aadhar Card mein address aur mobile number dono update hone chahiye.
              Rajpal Chacha ke Aadhar mein purana phone number tha – isliye OTP
              nahi aaya aur process delay hua. Pehle CSC Center jaake Aadhar update
              karwao.
            </p>
          </div>
        </section>

        {/* ===== H2: INTEREST RATES ===== */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 4vw, 30px)",
              color: "#1B5E20",
              borderBottom: "3px solid #4CAF50",
              paddingBottom: "10px",
              fontWeight: 700,
            }}
          >
            6. Byaj Dar (Interest Rate) – 2026 Mein Kitna Lagega?
          </h2>
          <p>
            Rajpal Chacha ka sabse pehla sawaal yahi tha – "Kitna byaj lagega?"
            Aur yeh sach mein sabse important baat hai. Galat jagah se loan liya
            toh poori kamaai byaj mein jaayegi.
          </p>

          <div style={{ overflowX: "auto", margin: "20px 0" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "15px",
                minWidth: "540px",
              }}
            >
              <thead>
                <tr style={{ background: "linear-gradient(90deg, #1565C0, #1976D2)", color: "white" }}>
                  <th style={{ padding: "13px 12px", textAlign: "left", borderRadius: "6px 0 0 0" }}>
                    Loan Type
                  </th>
                  <th style={{ padding: "13px 12px", textAlign: "center" }}>
                    Normal Rate
                  </th>
                  <th style={{ padding: "13px 12px", textAlign: "center" }}>
                    Subsidy Ke Baad
                  </th>
                  <th style={{ padding: "13px 12px", textAlign: "center", borderRadius: "0 6px 0 0" }}>
                    Max Tenure
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["KCC (up to ₹3 Lakh)", "9% – 9.5%", "4% (Effective)", "1 Saal (renewable)"],
                  ["SBI Crop Loan", "8.5% – 10%", "5.5% – 7%", "12 Mahine"],
                  ["Tractor Loan", "10% – 12%", "10% – 12%", "5 – 7 Saal"],
                  ["NABARD Gramin Bank", "9% – 11%", "7% – 9%", "3 Saal"],
                  ["Cooperative Society", "9% – 14%", "9% – 12%", "6 – 18 Mahine"],
                  ["Private Bank (HDFC/ICICI)", "12% – 16%", "No Subsidy", "1 – 5 Saal"],
                  ["Sahukar (Avoid!)", "36% – 60%", "❌ Koi Subsidy Nahi", "Open Ended"],
                ].map(([type, normal, sub, tenure], i) => (
                  <tr
                    key={type}
                    style={{
                      background:
                        type.includes("Sahukar")
                          ? "#FFEBEE"
                          : i % 2 === 0
                          ? "#E8EAF6"
                          : "#FFFFFF",
                      borderBottom: "1px solid #E0E0E0",
                    }}
                  >
                    <td
                      style={{
                        padding: "11px 12px",
                        fontWeight: 600,
                        color: type.includes("Sahukar") ? "#B71C1C" : "#1A237E",
                      }}
                    >
                      {type}
                    </td>
                    <td style={{ padding: "11px 12px", textAlign: "center", color: "#424242" }}>
                      {normal}
                    </td>
                    <td
                      style={{
                        padding: "11px 12px",
                        textAlign: "center",
                        fontWeight: 700,
                        color: type.includes("Sahukar") ? "#B71C1C" : "#2E7D32",
                      }}
                    >
                      {sub}
                    </td>
                    <td style={{ padding: "11px 12px", textAlign: "center", color: "#424242" }}>
                      {tenure}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            <strong>Note:</strong> KCC par 4% effective rate tab milti hai jab aap{" "}
            <strong>time par repayment karte ho</strong>. Late payment par penalty
            lagti hai aur rate badh sakti hai. Rajpal Chacha hamesha fasal
            bechne ke turant baad paise wapas kar dete hain.
          </p>
        </section>

        {/* ===== H2: APPLICATION PROCESS ===== */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 4vw, 30px)",
              color: "#1B5E20",
              borderBottom: "3px solid #4CAF50",
              paddingBottom: "10px",
              fontWeight: 700,
            }}
          >
            7. Kisan Loan Apply Karne Ka Pura Process – Step by Step
          </h2>

          <h3 style={{ fontSize: "22px", color: "#2E7D32", fontWeight: 700, marginTop: "24px" }}>
            Option A: Direct Bank Mein Jaake Apply Karna
          </h3>
          <ol style={{ paddingLeft: "24px", lineHeight: 2.4 }}>
            <li>
              <strong>Bank Select Karo</strong> – Jis bank mein aapka savings account
              hai, wahan pehle jaiye. Ya nearest Gramin Bank / SBI.
            </li>
            <li>
              <strong>Agriculture Loan Department Mein Jaiye</strong> – Seedha counter
              pe mat jaiye. Ek form leke Agriculture Manager se miliye.
            </li>
            <li>
              <strong>Documents Jama Kariye</strong> – Upar di gayi list ke sab documents
              saath rakhiye.
            </li>
            <li>
              <strong>Application Form Fill Karo</strong> – Naam, zameen ki details,
              crop details, required amount.
            </li>
            <li>
              <strong>Field Visit</strong> – Bank officer aapki zameen dekhe ga
              (7-15 din mein).
            </li>
            <li>
              <strong>CIBIL/Credit Check</strong> – Aapka credit history check hoga.
              Koi defaulter na ho.
            </li>
            <li>
              <strong>Sanction Letter</strong> – Approval mein 15-30 din lagte hain.
            </li>
            <li>
              <strong>Disbursement</strong> – Paise aapke account mein aate hain ya
              KCC card mil jata hai.
            </li>
          </ol>

          <h3 style={{ fontSize: "22px", color: "#2E7D32", fontWeight: 700, marginTop: "28px" }}>
            Option B: Online Apply Karna (PM KCC Portal)
          </h3>
          <ol style={{ paddingLeft: "24px", lineHeight: 2.4 }}>
            <li>
              <strong>pmkisan.gov.in</strong> ya{" "}
              <strong>kisancredit.in</strong> portal par jaiye
            </li>
            <li>Aadhar OTP se login karo</li>
            <li>
              "Apply for KCC" option select karo
            </li>
            <li>
              Zameen ki details, crop details, bank details fill karo
            </li>
            <li>
              Application submit hogi – bank ko automatically forward hogi
            </li>
            <li>
              Bank wala aapko call karega verification ke liye
            </li>
          </ol>

          <div
            style={{
              background: "#E8F5E9",
              border: "2px solid #66BB6A",
              borderRadius: "10px",
              padding: "20px 22px",
              margin: "24px 0",
            }}
          >
            <strong style={{ color: "#1B5E20", fontSize: "16px" }}>
              💡 Rajpal Chacha Ki Tip:
            </strong>
            <p style={{ margin: "12px 0 0", color: "#2E7D32" }}>
              "Bank mein subah 10-11 baje jaiye jab bheed kam hoti hai. Agriculture
              Manager se seedha miliye – counter pe lamba wait mat karo. Apni sari
              documents ek clear plastic file mein rakhiye – professionalism dikhata
              hai aur officer ko acha lagta hai. Yeh chhoti si baat kaafi fark karti
              hai!"
            </p>
          </div>
        </section>

        {/* ===== H2: COMMON MISTAKES ===== */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 4vw, 30px)",
              color: "#1B5E20",
              borderBottom: "3px solid #4CAF50",
              paddingBottom: "10px",
              fontWeight: 700,
            }}
          >
            8. Common Galtiyan Jo Kisan Loan Reject Karwa Deti Hain
          </h2>
          <p>
            Rajpal Chacha ne jab pehli baar apply kiya tha toh unka application
            reject ho gaya tha. Baad mein samjha ki galti kahan hui. Aaiye in
            galtiyaon se bachiye:
          </p>

          <div style={{ display: "grid", gap: "16px", margin: "20px 0" }}>
            {[
              {
                emoji: "❌",
                title: "1. Aadhar Mein Galat Address Ya Phone",
                text: "Agar Aadhar mein aapka gaon ka address sahi nahi hai ya purana phone number hai, toh OTP nahi aayega aur process ruk jayegi.",
                bg: "#FFEBEE",
                border: "#EF9A9A",
              },
              {
                emoji: "❌",
                title: "2. CIBIL Default History",
                text: "Agar kisi bhi bank ka koi purana loan outstanding hai ya default hai, toh naya loan seedha reject hoga. Pehle purana saaf karo.",
                bg: "#FFEBEE",
                border: "#EF9A9A",
              },
              {
                emoji: "❌",
                title: "3. Zameen Dispute Ya Court Case",
                text: "Agar khatauni mein zameen ka court case chal raha hai ya title clear nahi hai, toh bank loan nahi dega.",
                bg: "#FFF3E0",
                border: "#FFCC80",
              },
              {
                emoji: "❌",
                title: "4. Galat ya Incomplete Documents",
                text: "Documents ki photocopy achhi quality ki nahi hai, ya koi document missing hai – toh form reject ho jaata hai. Rajpal Chacha pehli baar yahi karke gaye the.",
                bg: "#FFF3E0",
                border: "#FFCC80",
              },
              {
                emoji: "❌",
                title: "5. Loan Amount Ka Galat Estimation",
                text: "Agar aap zyada loan maangoge jo zameen ki value ke hisab se justify nahi hota, toh bank kam approve karega ya reject karega. Realistic amount maango.",
                bg: "#E8EAF6",
                border: "#9FA8DA",
              },
              {
                emoji: "❌",
                title: "6. Khatauni Update Nahi Hai",
                text: "Agar khatauni mein abhi bhi dada ya pita ji ka naam hai aur aapka naama nahi hua, toh bank proof nahi maanta ki zameen aapki hai. Pehle naam transfer karwao.",
                bg: "#E8EAF6",
                border: "#9FA8DA",
              },
            ].map(({ emoji, title, text, bg, border }) => (
              <div
                key={title}
                style={{
                  background: bg,
                  border: `2px solid ${border}`,
                  borderRadius: "10px",
                  padding: "16px 20px",
                }}
              >
                <strong style={{ fontSize: "16px", color: "#212121" }}>
                  {emoji} {title}
                </strong>
                <p style={{ margin: "8px 0 0", color: "#424242" }}>{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== H2: APPROVAL TIPS ===== */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 4vw, 30px)",
              color: "#1B5E20",
              borderBottom: "3px solid #4CAF50",
              paddingBottom: "10px",
              fontWeight: 700,
            }}
          >
            9. Loan Jaldi Approve Karwane Ke Tried &amp; Tested Tips
          </h2>
          <p>
            Rajpal Chacha ne dono baar apply kiya – pehli baar reject, doosri baar
            approve. Unhone seekha ki kuch chhoti chhoti baatein loan approval mein
            bahut fark karti hain.
          </p>

          <div style={{ display: "grid", gap: "14px", margin: "20px 0" }}>
            {[
              ["✅", "PM-Kisan Se Linked Aadhar Rakho", "Agar aap PM-Kisan Samman Nidhi le rahe ho toh aapka record bank mein already hai – KCC approval bahut fast hota hai."],
              ["✅", "Savings Account Usi Bank Mein Rakho", "Jis bank se loan lena ho, usi mein 6+ mahine purana savings account raho. Transaction history dikhti hai."],
              ["✅", "Fasal Ka Sahi Record Rakho", "Agar aap pehle se kuch crops ka record rakhte ho (kitna beeja, kitna fasal mili), toh bank ko confidence milta hai."],
              ["✅", "Bank Mein Pehle Se Introduce Karo", "Rajpal Chacha ne 2 mahine pehle se bank manager se milna shuru kiya. Jab apply kiya tab manager unhe jaanta tha."],
              ["✅", "Ek Baar Mein Poore Documents Laiye", "Baar baar dhakke na khao – ek hi baar mein complete file lekar jaiye. Bank officer ka time bachega aur impression achha banega."],
              ["✅", "Khatauni Hamesha Updated Rakho", "Har saal 7/12 ya khatauni update karwao. Nayi fasl ka record wahan dikhe toh bank ko proof milta hai ki zameen use ho rahi hai."],
              ["✅", "CIBIL Score Check Karo Pehle", "paisabazaar.com ya bankbazaar.com se free CIBIL check karo. Agar score 650+ hai toh loan easily milega."],
            ].map(([icon, title, text]) => (
              <div
                key={title}
                style={{
                  background: "#F1F8E9",
                  borderLeft: "5px solid #8BC34A",
                  borderRadius: "0 8px 8px 0",
                  padding: "16px 20px",
                  display: "flex",
                  gap: "14px",
                }}
              >
                <span style={{ fontSize: "22px", flexShrink: 0 }}>{icon}</span>
                <div>
                  <strong style={{ color: "#33691E", fontSize: "16px" }}>{title}</strong>
                  <p style={{ margin: "6px 0 0", color: "#424242" }}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== H2: SCHEMES 2026 ===== */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 4vw, 30px)",
              color: "#1B5E20",
              borderBottom: "3px solid #4CAF50",
              paddingBottom: "10px",
              fontWeight: 700,
            }}
          >
            10. 2026 Ki Top Kisan Rin Yojanayen – Naya Kya Hai?
          </h2>
          <p>
            2026 mein sarkar ne kisan loan ke liye kuch naye updates kiye hain jo
            Rajpal Chacha aur unke jaise kisan sab ke liye bahut kaam ki baat hai.
          </p>
          <ul style={{ paddingLeft: "24px", lineHeight: 2.4 }}>
            <li>
              <strong>PM-KCC Saturation Drive 2025-26:</strong> Sarkar ka lakshya tha
              ki har PM-Kisan beneficiary ko KCC diya jaye. Agar aapko abhi tak nahi
              mila, turant apply karo.
            </li>
            <li>
              <strong>KCC Limit Enhancement:</strong> KCC ki limit ₹3 Lakh se badhake
              ₹5 Lakh kar ne ki proposal thi – confirm kare apne bank se.
            </li>
            <li>
              <strong>Fasal Bima + KCC Combo:</strong> Ab KCC lene par Pradhan Mantri
              Fasal Bima Yojana (PMFBY) automatically link hoti hai – fasal kharab
              hogi toh claim milega.
            </li>
            <li>
              <strong>Digital KCC (e-KCC):</strong> Kai banks ne digital KCC shuru ki
              hai jisme card ki zaroorat nahi – mobile se hi payment aur withdrawal.
            </li>
            <li>
              <strong>Crop Loan Waiver States:</strong> Kuch states mein loan waiver
              chal rahi hai – apne state agriculture department ki website check karo.
            </li>
          </ul>
        </section>

        {/* ===== FAQ ===== */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 4vw, 30px)",
              color: "#1B5E20",
              borderBottom: "3px solid #4CAF50",
              paddingBottom: "10px",
              fontWeight: 700,
            }}
          >
            FAQ – Aksar Poochhe Jaane Wale Sawaal
          </h2>
          <p style={{ color: "#558B2F" }}>
            Jab Rajpal Chacha ne gaon mein baat ki toh unke saathiyon ke man mein bhi
            kaafi sawaal the. Yeh hain sabse common questions aur unke jawab:
          </p>

          <div style={{ display: "grid", gap: "16px", margin: "24px 0" }}>
            {[
              {
                q: "Q1. KCC ke liye kitni zameen chahiye minimum?",
                a: "KCC ke liye koi minimum zameen ki requirement nahi hai. Agar aap kisi ki zameen par kheti kar rahe ho (oral lessee / sharecropper), tab bhi PACS ya Cooperative ke through KCC mil sakti hai. Apni khud ki zameen ho toh aur aasaan hai.",
              },
              {
                q: "Q2. Kisan loan ke liye CIBIL score kitna chahiye?",
                a: "Minimum 650+ CIBIL score recommend kiya jaata hai. KCC ke liye kai gramin banks 600+ par bhi approve kar dete hain. Agar pehle koi loan nahi liya toh 'no credit history' hoti hai jo problem nahi hai – bank fresh scorer ko bhi deta hai.",
              },
              {
                q: "Q3. Kisan Credit Card se kya kya khareed sakte hain?",
                a: "KCC se aap beej, khad, pesticide, diesel, labors ka payment, tractor rent, aur micro-irrigation equipment khareed sakte hain. Personal use ke liye nahi – only agricultural purpose.",
              },
              {
                q: "Q4. Agar bank loan reject kare toh kya kare?",
                a: "Bank se likhit mein rejection reason maango. Agar galat lage toh banking ombudsman mein complaint kar sakte hain. Rejection reasons fix karke doosre bank mein apply kar sakte hain. Rajpal Chacha ka bhi ek baar reject hua tha – documents fix kiye aur dusre mahine approve hua.",
              },
              {
                q: "Q5. KCC Loan ki repayment kab karna hota hai?",
                a: "KCC crop loan ki repayment fasal bechne ke baad karni hoti hai – usually 12 mahine ke andar. Rabi fasal (winter) ke liye October mein lo, March-April mein wapas karo. Kharif (summer) ke liye June mein lo, October-November mein wapas karo.",
              },
              {
                q: "Q6. CSC Center se loan apply karne mein kitna time lagta hai?",
                a: "CSC Center se KCC application submit hone ke baad bank 7-21 working days mein process karta hai. Lekin agar documents complete hain toh kai baar 10 din mein bhi ho jaata hai. Rajpal Chacha ne CSC se apply kiya aur 18 din mein KCC card ghar pahuncha.",
              },
              {
                q: "Q7. Cooperative Society ka loan safe hai?",
                a: "NABARD-affiliated registered cooperative societies safe hain. Pehle check karo ki society registered hai aur NABARD se linked hai ya nahi. Unofficial societies se door raho. Rajpal Chacha ne pehle society ka registration certificate maanga tha – yeh sahi kiya.",
              },
              {
                q: "Q8. Kisan loan par koi insurance bhi milti hai?",
                a: "Haan! KCC ke saath personal accident insurance milti hai – mrityu ya permanent disability par ₹50,000 tak. Aur Pradhan Mantri Fasal Bima Yojana bhi link hoti hai jisme fasal kharab hone par claim milta hai.",
              },
            ].map(({ q, a }, i) => (
              <details
                key={i}
                style={{
                  background: i % 2 === 0 ? "#F9FBE7" : "#F3E5F5",
                  border: `2px solid ${i % 2 === 0 ? "#CDDC39" : "#CE93D8"}`,
                  borderRadius: "10px",
                  padding: "0",
                  overflow: "hidden",
                }}
              >
                <summary
                  style={{
                    padding: "16px 20px",
                    cursor: "pointer",
                    fontWeight: 700,
                    fontSize: "16px",
                    color: i % 2 === 0 ? "#33691E" : "#6A1B9A",
                    listStyle: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <span>▶</span> {q}
                </summary>
                <div
                  style={{
                    padding: "0 20px 16px",
                    color: "#424242",
                    lineHeight: 1.85,
                    borderTop: `1px solid ${i % 2 === 0 ? "#CDDC39" : "#CE93D8"}`,
                    paddingTop: "14px",
                  }}
                >
                  {a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ===== CONCLUSION ===== */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 4vw, 30px)",
              color: "#1B5E20",
              borderBottom: "3px solid #4CAF50",
              paddingBottom: "10px",
              fontWeight: 700,
            }}
          >
            Conclusion – Rajpal Chacha Ki Seekh Aur Aapke Liye Ek Akhri Baat
          </h2>
          <p>
            Aaj Rajpal Chacha ke paas ₹1,80,000 ka KCC hai, ek active term loan
            hai tractor ke liye, aur Cooperative Society ka member bhi hain.
            Unki kheti pehle se behtar hai aur sahukar ke paas jaane ki zaroorat
            bilkul khatam ho gayi hai.
          </p>
          <p>
            Unki sabse badi seekh thi – <strong>"Sarkar ne Kisanon ke liye bahut
            saari schemes banayi hain – sirf humein pata nahi hota. Jab pata chala
            tab zindagi badal gayi."</strong>
          </p>
          <p>
            Toh aap bhi agar soch rahe ho ki{" "}
            <strong>Kisan Rin Kaha Se Le 2026</strong> mein – toh yeh steps follow
            karo:
          </p>
          <ol style={{ paddingLeft: "24px", lineHeight: 2.6, fontWeight: 500 }}>
            <li>
              Pehle apni <strong>Khatauni Update</strong> karwao (Tehasildar ya online)
            </li>
            <li>
              <strong>Aadhar Card</strong> mein address aur mobile update karo (CSC
              Center se)
            </li>
            <li>
              <strong>PM-Kisan</strong> ka registration karwao agar nahi hai
            </li>
            <li>
              <strong>Nearest Bank ya CSC Center</strong> mein jaake KCC ke liye apply
              karo
            </li>
            <li>
              <strong>Documents ek file mein</strong> ready rakho – Aadhar, PAN,
              Khatauni, Photo, Passbook
            </li>
            <li>
              Agar KCC mile toh <strong>time par wapas karo</strong> – next baar limit
              badhegi
            </li>
            <li>
              <strong>CIBIL Score</strong> check karte raho – good credit history = easy
              loan
            </li>
          </ol>

          <div
            style={{
              background: "linear-gradient(135deg, #1B5E20, #2E7D32)",
              color: "white",
              borderRadius: "14px",
              padding: "32px 28px",
              margin: "32px 0",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "20px", fontWeight: 700, margin: "0 0 12px" }}>
              🌾 "Beej Daalo Sahi Zameen Mein – Loan Bhi Aur Fasal Bhi Milegi!"
            </p>
            <p style={{ color: "#A5D6A7", margin: 0, fontSize: "16px" }}>
              – Rajpal Chacha, Rampur Gaon
            </p>
          </div>

          <p>
            Agar aapko yeh article helpful laga, toh apne gaon ke doosre kisano ke
            saath share karo. Rajpal Chacha Jaise hazaron kisan aaj bhi sahi
            jankari ke intezaar mein hain – aap unki madad kar sakte ho.
          </p>

          <div
            style={{
              background: "#F1F8E9",
              border: "1px solid #AED581",
              borderRadius: "10px",
              padding: "18px 22px",
              marginTop: "24px",
              fontSize: "14px",
              color: "#558B2F",
            }}
          >
            <strong>Disclaimer:</strong> Yeh article sirf educational purpose ke liye
            hai. Loan terms, interest rates aur schemes government policies ke saath
            change hote rehte hain. Apply karne se pehle apne bank ya nearest agriculture
            department se latest jankari confirm karo.
          </div>
        </section>
      </article>
    </main>
  );
}

