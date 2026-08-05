'use client';

import { useMemo, useState } from 'react';

type FarmerType = 'owner' | 'bhagchasi' | 'bhumihin';

const DOCS_COMMON = [
  'Voter ID card (EPIC number) — Krishak Bandhu ka primary identifier yahi hai',
  'Aadhaar card',
  'Bank passbook ka pehla page — account number aur IFSC saaf dikhe',
  'Registered mobile number jispar SMS aata hai',
];

const DOCS_BY_TYPE: Record<FarmerType, string[]> = {
  owner: [
    'ROR / khatian ya parcha (land record) jismein aapka naam ho',
    'Plot ke dag number ke saath land area (acre ya bigha) ki entry',
  ],
  bhagchasi: [
    'Recorded bhagchasi (sharecropper) certificate ya panchayat ka attestation',
    'Jis zameen par kheti karte hain uska ROR — malik ke naam wala bhi chalega',
  ],
  bhumihin: [
    'Camp se mila acknowledgement ID (Bhumihin Khetmajur enrolment slip)',
    'Self-declaration ki aap khet mazdoori karte hain aur khud ki zameen nahi hai',
  ],
};

function rupee(n: number) {
  return `₹${n.toLocaleString('en-IN')}`;
}

export default function KrishakBandhuChecker() {
  const [farmerType, setFarmerType] = useState<FarmerType>('owner');
  const [unit, setUnit] = useState<'acre' | 'bigha'>('acre');
  const [landRaw, setLandRaw] = useState('');
  const [age, setAge] = useState('');
  const [resident, setResident] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const acres = useMemo(() => {
    const v = parseFloat(landRaw);
    if (!Number.isFinite(v) || v <= 0) return 0;
    return unit === 'acre' ? v : v * 0.3306;
  }, [landRaw, unit]);

  const ageNum = parseInt(age, 10);

  const result = useMemo(() => {
    if (!resident) {
      return {
        ok: false,
        headline: 'West Bengal ke permanent resident hi eligible hain',
        detail:
          'Krishak Bandhu poori tarah state-funded scheme hai. Domicile hi pehli shart hai — doosre rajya mein rehte hue ye grant nahi milta, chahe zameen Bengal mein ho.',
        annual: 0,
        instalment: 0,
        death: false,
      };
    }

    if (farmerType === 'bhumihin') {
      return {
        ok: true,
        headline: 'Bhumihin Khetmajur track par aate hain',
        detail:
          'Zameen na hone par aap main Krishak Bandhu ke land-based hisaab mein nahi, landless khetmajur wale component mein aate hain. Iska enrolment camp ke through hota hai aur portal ka section bhi alag hai.',
        annual: 4000,
        instalment: 2000,
        death: Number.isFinite(ageNum) && ageNum >= 18 && ageNum <= 60,
      };
    }

    if (acres <= 0) {
      return {
        ok: false,
        headline: 'Zameen ka area daalna zaroori hai',
        detail:
          'Grant ka hisaab seedha cultivable land area se nikalta hai, isliye area ke bina koi number bataana andaza hoga. Apne parcha/khatian par likha area dekh kar bharein.',
        annual: 0,
        instalment: 0,
        death: false,
      };
    }

    const raw = acres * 10000;
    const annual = Math.min(10000, Math.max(4000, Math.round(raw / 100) * 100));

    return {
      ok: true,
      headline:
        acres >= 1
          ? 'Full slab — 1 acre ya usse zyada'
          : 'Pro-rata slab — 1 acre se kam, minimum floor lagu',
      detail:
        acres >= 1
          ? '1 acre ya zyada cultivable land par poora annual grant milta hai. Isse aage zameen badhne se raqam nahi badhti — upar ki limit fix hai.'
          : 'Chhoti jotdaari par hisaab pro-rata hota hai, lekin ek minimum floor bhi hai. Isliye bahut kam zameen par bhi grant floor se neeche nahi jaata.',
      annual,
      instalment: annual / 2,
      death: Number.isFinite(ageNum) && ageNum >= 18 && ageNum <= 60,
    };
  }, [resident, farmerType, acres, ageNum]);

  const docs = [...DOCS_COMMON, ...DOCS_BY_TYPE[farmerType]];

  return (
    <section
      aria-label="Krishak Bandhu eligibility aur document checker"
      className="not-prose my-10 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm overflow-hidden"
    >
      <header className="px-5 py-4 bg-green-50 dark:bg-green-900/20 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-base md:text-lg font-black text-gray-900 dark:text-gray-100 m-0">
          Krishak Bandhu Checker — kitna banta hai aur kya kagaz lagega
        </h2>
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 mb-0">
          Sab hisaab aapke phone mein hi hota hai. Koi data kahin bheja nahi jaata, koi
          login nahi.
        </p>
      </header>

      <div className="p-5 grid gap-5 md:grid-cols-2">
        <div>
          <fieldset className="mb-4">
            <legend className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
              Aap kis tarah ke kisan hain?
            </legend>
            <div className="space-y-2">
              {(
                [
                  ['owner', 'Apni zameen par kheti (khatian mein naam hai)'],
                  ['bhagchasi', 'Bhagchasi / sharecropper (doosre ki zameen)'],
                  ['bhumihin', 'Bhumihin khetmajur (zameen nahi hai)'],
                ] as [FarmerType, string][]
              ).map(([val, label]) => (
                <label
                  key={val}
                  className="flex items-start gap-2 text-sm text-gray-800 dark:text-gray-200 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="kb-farmer-type"
                    value={val}
                    checked={farmerType === val}
                    onChange={() => {
                      setFarmerType(val);
                      setSubmitted(false);
                    }}
                    className="mt-1 accent-green-600"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {farmerType !== 'bhumihin' && (
            <div className="mb-4">
              <label
                htmlFor="kb-land"
                className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1"
              >
                Cultivable land ka area
              </label>
              <div className="flex gap-2">
                <input
                  id="kb-land"
                  type="number"
                  min={0}
                  step="0.01"
                  inputMode="decimal"
                  value={landRaw}
                  placeholder="jaise 0.75"
                  onChange={(e) => {
                    setLandRaw(e.target.value);
                    setSubmitted(false);
                  }}
                  className="flex-1 border-2 border-gray-200 dark:border-gray-600 rounded-xl px-4 py-2.5 text-base bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <select
                  aria-label="Area ki unit"
                  value={unit}
                  onChange={(e) => {
                    setUnit(e.target.value as 'acre' | 'bigha');
                    setSubmitted(false);
                  }}
                  className="border-2 border-gray-200 dark:border-gray-600 rounded-xl px-3 py-2.5 text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="acre">acre</option>
                  <option value="bigha">bigha</option>
                </select>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Bigha chunne par 1 bigha = 0.3306 acre ke hisaab se badla jaata hai.
              </p>
            </div>
          )}

          <div className="mb-4">
            <label
              htmlFor="kb-age"
              className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1"
            >
              Umar (saal)
            </label>
            <input
              id="kb-age"
              type="number"
              min={0}
              max={120}
              inputMode="numeric"
              value={age}
              placeholder="jaise 42"
              onChange={(e) => {
                setAge(e.target.value);
                setSubmitted(false);
              }}
              className="w-full border-2 border-gray-200 dark:border-gray-600 rounded-xl px-4 py-2.5 text-base bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Death Benefit cover sirf 18–60 band mein rehta hai. Income support par
              iska asar nahi.
            </p>
          </div>

          <label className="flex items-start gap-2 text-sm text-gray-800 dark:text-gray-200 mb-4 cursor-pointer">
            <input
              type="checkbox"
              checked={resident}
              onChange={(e) => {
                setResident(e.target.checked);
                setSubmitted(false);
              }}
              className="mt-1 accent-green-600"
            />
            <span>Main West Bengal ka permanent resident hoon</span>
          </label>

          <button
            type="button"
            onClick={() => setSubmitted(true)}
            className="w-full rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold py-3 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Hisaab dikhao
          </button>
        </div>

        <div
          aria-live="polite"
          className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 p-4"
        >
          {!submitted ? (
            <p className="text-sm text-gray-600 dark:text-gray-400 m-0">
              Bayein taraf apni detail bhar kar button dabaiye. Aapko annual grant,
              per-instalment raqam, death-benefit cover ki position aur aapke case ke
              hisaab se document list mil jaayegi.
            </p>
          ) : (
            <div className="space-y-4">
              <div>
                <p
                  className={`text-sm font-black mb-1 ${
                    result.ok
                      ? 'text-green-700 dark:text-green-400'
                      : 'text-amber-700 dark:text-amber-400'
                  }`}
                >
                  {result.headline}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 m-0 leading-relaxed">
                  {result.detail}
                </p>
              </div>

              {result.annual > 0 && (
                <dl className="grid grid-cols-2 gap-2 text-sm">
                  <div className="rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3">
                    <dt className="text-xs text-gray-500 dark:text-gray-400">
                      Saal bhar ka grant
                    </dt>
                    <dd className="font-black text-gray-900 dark:text-gray-100 m-0">
                      {rupee(result.annual)}
                    </dd>
                  </div>
                  <div className="rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3">
                    <dt className="text-xs text-gray-500 dark:text-gray-400">
                      Ek kist mein
                    </dt>
                    <dd className="font-black text-gray-900 dark:text-gray-100 m-0">
                      {rupee(result.instalment)}
                    </dd>
                  </div>
                </dl>
              )}

              {result.ok && (
                <p
                  className={`text-xs m-0 rounded-lg p-3 ${
                    result.death
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300'
                      : 'bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-300'
                  }`}
                >
                  {result.death
                    ? 'Death Benefit cover: aapki umar 18–60 ke andar hai, is component mein aate hain.'
                    : 'Death Benefit cover: umar 18–60 ke bahar (ya bhari nahi) hai — income support to chalta rahega, lekin ye cover lagu nahi hoga.'}
                </p>
              )}

              <div>
                <p className="text-xs font-black text-gray-700 dark:text-gray-300 mb-2">
                  Aapke case ke liye document list
                </p>
                <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 m-0 pl-4 list-disc">
                  {docs.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>

              <p className="text-[11px] text-gray-500 dark:text-gray-400 m-0">
                Ye estimate scheme ke published structure par bana hai. Aapka actual
                sanctioned amount portal ke record — khaas kar ROR mein darj area — par
                nirbhar karta hai.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
