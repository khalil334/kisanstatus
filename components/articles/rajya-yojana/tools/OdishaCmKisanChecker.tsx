'use client';

import { useMemo, useState } from 'react';

type Household = 'cultivator' | 'landless';

const DOCS_COMMON = [
  'Aadhaar card — e-KYC aur DBT dono isi par tikte hain',
  'Bank passbook jismein account NPCI mapper se juda ho',
  'Registered mobile number, kyunki OTP usi par aata hai',
  'Odisha ka residence proof',
];

const DOCS_BY_HOUSEHOLD: Record<Household, string[]> = {
  cultivator: [
    'RoR / patta ya land possession certificate jismein area darj ho',
    'Plot number ke saath tehsil record ki entry',
  ],
  landless: [
    'Gram panchayat ya revenue authority ka landless certificate',
    'Allied activity ka byora — bakri palan, murgi palan, dairy ya machhli',
  ],
};

function rupee(n: number) {
  return `₹${n.toLocaleString('en-IN')}`;
}

export default function OdishaCmKisanChecker() {
  const [household, setHousehold] = useState<Household>('cultivator');
  const [unit, setUnit] = useState<'acre' | 'hectare'>('acre');
  const [landRaw, setLandRaw] = useState('');
  const [excluded, setExcluded] = useState<string[]>([]);
  const [ekyc, setEkyc] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const EXCLUSIONS: [string, string][] = [
    ['tax', 'Ghar mein koi income tax bharta hai'],
    ['govt', 'Koi sadasya sarkari naukri mein hai (serving ya pensioner)'],
    ['prof', 'Ghar mein registered professional hai — doctor, vakil, CA, engineer'],
  ];

  const acres = useMemo(() => {
    const v = parseFloat(landRaw);
    if (!Number.isFinite(v) || v <= 0) return 0;
    return unit === 'acre' ? v : v * 2.4711;
  }, [landRaw, unit]);

  const result = useMemo(() => {
    if (excluded.length > 0) {
      return {
        ok: false,
        headline: 'Exclusion list is case par lagti hai',
        detail:
          'CM Kisan means-tested scheme hai. Income tax bharne wale, sarkari naukri wale aur registered professional wale ghar exclusion list mein aate hain — zameen kitni bhi ho, grant nahi banta. Ye rule poore parivaar par lagta hai, sirf aavedak par nahi.',
        annual: 0,
        tranche: 0,
        tranches: 0,
      };
    }

    if (household === 'landless') {
      return {
        ok: true,
        headline: 'Landless agricultural household track',
        detail:
          'Bina zameen wale krishi parivaaron ko kheti ke input ke bajaye allied livelihood ke liye support milta hai — jaise bakri palan, murgi palan ya dairy. Isliye raqam bhi zyada hai aur tranche bhi teen hote hain.',
        annual: 12500,
        tranche: Math.round(12500 / 3),
        tranches: 3,
      };
    }

    if (acres <= 0) {
      return {
        ok: false,
        headline: 'Zameen ka area bhariye',
        detail:
          'Cultivator track poori tarah landholding par tay hota hai, khaas kar 5 acre ki upper limit par. Area ke bina eligibility ka faisla nahi ho sakta.',
        annual: 0,
        tranche: 0,
        tranches: 0,
      };
    }

    if (acres > 5) {
      return {
        ok: false,
        headline: '5 acre se zyada zameen — cultivator track se bahar',
        detail:
          'CM Kisan jaan-boojh kar chhote aur seemant kisan par kendrit hai. 5 acre se upar ki jotdaari medium/large category mein aati hai, jo is scheme se bahar rakhi gayi hai. PM Kisan mein aisi koi land ceiling nahi hai, is liye wahan aapki eligibility alag se dekhi jaati hai.',
        annual: 0,
        tranche: 0,
        tranches: 0,
      };
    }

    return {
      ok: true,
      headline:
        acres <= 2
          ? 'Marginal cultivator — scheme ka core target group'
          : 'Small cultivator — 5 acre limit ke andar',
      detail:
        'Cultivator track mein raqam zameen ke area se badalti nahi hai. 5 acre ki limit ke andar har eligible kisan ko same annual grant milta hai, do barabar tranche mein — ek Kharif ke aas-paas, doosra Rabi ke aas-paas.',
      annual: 4000,
      tranche: 2000,
      tranches: 2,
    };
  }, [excluded, household, acres]);

  const docs = [...DOCS_COMMON, ...DOCS_BY_HOUSEHOLD[household]];

  function toggleExclusion(key: string) {
    setExcluded((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
    setSubmitted(false);
  }

  return (
    <section
      aria-label="CM Kisan Odisha eligibility aur document checker"
      className="not-prose my-10 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm overflow-hidden"
    >
      <header className="px-5 py-4 bg-green-50 dark:bg-green-900/20 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-base md:text-lg font-black text-gray-900 dark:text-gray-100 m-0">
          CM Kisan Checker — aap kis track mein hain aur kitna banta hai
        </h2>
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 mb-0">
          Poora hisaab aapke browser mein chalta hai. Kuch submit nahi hota, koi record
          nahi bantaa.
        </p>
      </header>

      <div className="p-5 grid gap-5 md:grid-cols-2">
        <div>
          <fieldset className="mb-4">
            <legend className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
              Aapka ghar kis category mein aata hai?
            </legend>
            <div className="space-y-2">
              {(
                [
                  ['cultivator', 'Khud kheti karte hain, zameen record mein hai'],
                  ['landless', 'Zameen nahi hai — khet mazdoori ya allied kaam'],
                ] as [Household, string][]
              ).map(([val, label]) => (
                <label
                  key={val}
                  className="flex items-start gap-2 text-sm text-gray-800 dark:text-gray-200 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="cmk-household"
                    value={val}
                    checked={household === val}
                    onChange={() => {
                      setHousehold(val);
                      setSubmitted(false);
                    }}
                    className="mt-1 accent-green-600"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {household === 'cultivator' && (
            <div className="mb-4">
              <label
                htmlFor="cmk-land"
                className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1"
              >
                Kul agricultural land
              </label>
              <div className="flex gap-2">
                <input
                  id="cmk-land"
                  type="number"
                  min={0}
                  step="0.01"
                  inputMode="decimal"
                  value={landRaw}
                  placeholder="jaise 1.5"
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
                    setUnit(e.target.value as 'acre' | 'hectare');
                    setSubmitted(false);
                  }}
                  className="border-2 border-gray-200 dark:border-gray-600 rounded-xl px-3 py-2.5 text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="acre">acre</option>
                  <option value="hectare">hectare</option>
                </select>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Ghar ke sabhi sadasyon ki zameen jodkar likhein — limit parivaar par
                lagti hai.
              </p>
            </div>
          )}

          <fieldset className="mb-4">
            <legend className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
              Inmein se koi baat aapke ghar par lagti hai?
            </legend>
            <div className="space-y-2">
              {EXCLUSIONS.map(([key, label]) => (
                <label
                  key={key}
                  className="flex items-start gap-2 text-sm text-gray-800 dark:text-gray-200 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={excluded.includes(key)}
                    onChange={() => toggleExclusion(key)}
                    className="mt-1 accent-green-600"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="flex items-start gap-2 text-sm text-gray-800 dark:text-gray-200 mb-4 cursor-pointer">
            <input
              type="checkbox"
              checked={ekyc}
              onChange={(e) => {
                setEkyc(e.target.checked);
                setSubmitted(false);
              }}
              className="mt-1 accent-green-600"
            />
            <span>Aadhaar e-KYC ho chuki hai aur account NPCI mein mapped hai</span>
          </label>

          <button
            type="button"
            onClick={() => setSubmitted(true)}
            className="w-full rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold py-3 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Nateeja dikhao
          </button>
        </div>

        <div
          aria-live="polite"
          className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 p-4"
        >
          {!submitted ? (
            <p className="text-sm text-gray-600 dark:text-gray-400 m-0">
              Bayein taraf detail bhar kar button dabaiye. Aapko track, annual raqam, ek
              tranche ki raqam, aur aapke case ke document list mil jaayegi.
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
                <dl className="grid grid-cols-3 gap-2 text-sm">
                  <div className="rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3">
                    <dt className="text-xs text-gray-500 dark:text-gray-400">Saal bhar</dt>
                    <dd className="font-black text-gray-900 dark:text-gray-100 m-0">
                      {rupee(result.annual)}
                    </dd>
                  </div>
                  <div className="rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3">
                    <dt className="text-xs text-gray-500 dark:text-gray-400">Ek tranche</dt>
                    <dd className="font-black text-gray-900 dark:text-gray-100 m-0">
                      ~{rupee(result.tranche)}
                    </dd>
                  </div>
                  <div className="rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3">
                    <dt className="text-xs text-gray-500 dark:text-gray-400">Tranche</dt>
                    <dd className="font-black text-gray-900 dark:text-gray-100 m-0">
                      {result.tranches}
                    </dd>
                  </div>
                </dl>
              )}

              {result.ok && (
                <p
                  className={`text-xs m-0 rounded-lg p-3 ${
                    ekyc
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300'
                      : 'bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-300'
                  }`}
                >
                  {ekyc
                    ? 'e-KYC aur NPCI mapping ho chuki hai — DBT ke raste mein koi rukaawat nahi dikhti.'
                    : 'e-KYC ya NPCI mapping adhoori hai. Eligibility rehti hai, lekin paisa tab tak hold mein pada rahega — yahi sabse aam wajah hai jiski shikayat aati hai.'}
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
                Ye scheme ke published structure par bana estimate hai. Aapka actual
                sanction tehsil ke land record aur portal ke verification par tay hota
                hai.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
