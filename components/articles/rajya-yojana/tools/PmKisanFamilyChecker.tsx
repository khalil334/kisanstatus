'use client';

import { useMemo, useState } from 'react';

type Applicant = 'one' | 'both' | 'son';

const EXCLUSIONS: [string, string][] = [
  ['tax', 'Pichle saal kisi sadasya ne income tax bhara tha'],
  ['govt', 'Koi sadasya sarkari naukri mein hai ya pension le raha hai (Class-IV / MTS chhod kar)'],
  ['prof', 'Ghar mein practising professional hai — doctor, vakil, CA, engineer, architect'],
  ['post', 'Koi sadasya MP, MLA, mayor ya zila parishad chairman raha hai'],
  ['inst', 'Zameen kisi trust, sanstha ya company ke naam par hai'],
];

function rupee(n: number) {
  return `₹${n.toLocaleString('en-IN')}`;
}

export default function PmKisanFamilyChecker() {
  const [applicant, setApplicant] = useState<Applicant>('one');
  const [landInName, setLandInName] = useState<'yes' | 'no' | 'joint'>('yes');
  const [sonPartitioned, setSonPartitioned] = useState(false);
  const [excluded, setExcluded] = useState<string[]>([]);
  const [alreadyPaid, setAlreadyPaid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function toggle(key: string) {
    setExcluded((p) => (p.includes(key) ? p.filter((k) => k !== key) : [...p, key]));
    setSubmitted(false);
  }

  const result = useMemo(() => {
    if (excluded.length > 0) {
      return {
        tone: 'bad' as const,
        headline: 'Ye ghar exclusion list mein aata hai',
        detail:
          'PM Kisan ki exclusion parivaar par lagti hai, sirf form bharne wale par nahi. Ghar mein ek bhi sadasya in categories mein ho, to us parivaar ka koi member scheme nahi le sakta — chahe zameen kitni bhi chhoti ho aur chahe naam kisi aur ka ho.',
        annual: 0,
        heads: 0,
        refund: alreadyPaid,
        steps: [
          'Aur kist na lein — status active dikhe to bhi.',
          'Portal ke voluntary surrender option se apna naam khud hata dein.',
          'Ab tak mila paisa refund karne ki taiyari rakhein; recovery notice baad mein aata hai.',
        ],
      };
    }

    if (applicant === 'both') {
      return {
        tone: 'bad' as const,
        headline: 'Pati aur patni dono ko ek saath nahi milega',
        detail:
          'Scheme ka beneficiary "family" hai — pati, patni aur naabaalig bachche milkar ek unit. Is unit ko saal mein ek hi ₹6,000 milta hai. Do adult ek hi ghar se do alag registration karwa lete hain to verification par duplicate pakda jaata hai, aur aam taur par dono file hold ho jaati hain jab tak ek withdraw na ho.',
        annual: 6000,
        heads: 1,
        refund: alreadyPaid,
        steps: [
          'Tay karein kis ke naam par claim rakhna hai — behtar hai jiske naam par land record saaf hai.',
          'Doosre member ka naam voluntary surrender se hataayein.',
          'Jitni kist doosre naam par aa chuki hai, wo refund karni hogi.',
          'Ek naam hatane ke baad rehne wale naam ki e-KYC aur NPCI mapping dobara verify karein.',
        ],
      };
    }

    if (applicant === 'son') {
      if (sonPartitioned) {
        return {
          tone: 'good' as const,
          headline: 'Alag parivaar — beta apna alag claim rakh sakta hai',
          detail:
            'Baalig beta, jiske naam par batwaare ke baad zameen record mein darj ho chuki hai, apne aap mein ek alag family unit hai. Aise case mein ek hi ghar ke do adult ko paisa milta dikhta hai, lekin scheme ki nazar mein wo do alag parivaar hain — is liye ye duplicate nahi hai.',
          annual: 6000,
          heads: 2,
          refund: false,
          steps: [
            'Mutation ka record aur naya khata number sambhaal kar rakhein — verification mein yahi maanga jaata hai.',
            'Dono registration alag-alag Aadhaar aur alag bank account par rakhein.',
            'Ek hi khasra number do file mein claim na ho, ye milaa kar dekh lein.',
          ],
        };
      }
      return {
        tone: 'warn' as const,
        headline: 'Batwaara nahi hua — abhi wahi ek parivaar hai',
        detail:
          'Sirf ration card alag ho jaana ya shaadi ho jaana batwaara nahi hai. Jab tak revenue record mein zameen bete ke naam par transfer nahi hoti, ghar ek hi khatedar ke neeche ek unit rehta hai — aur ek unit ko ek hi grant milta hai.',
        annual: 6000,
        heads: 1,
        refund: alreadyPaid,
        steps: [
          'Tehsil office mein batwaara aur mutation ki arzi dein.',
          'Mutation ke baad naye khata ke saath fresh registration karein.',
          'Tab tak dusra registration na karwaayein — wo verification par reject hoga.',
        ],
      };
    }

    if (landInName === 'no') {
      return {
        tone: 'warn' as const,
        headline: 'Zameen aavedak ke naam par nahi hai',
        detail:
          'PM Kisan landholding-based scheme hai. Jis naam par claim ho raha hai, usi naam par revenue record mein zameen honi chahiye. Bataye gaye kheti karne wale, batai par lene wale aur virasat mein mili par mutation na karaye gaye case — teeno yahin atakte hain.',
        annual: 0,
        heads: 0,
        refund: alreadyPaid,
        steps: [
          'Virasat ka case ho to mutation karwaayein, phir apply karein.',
          'Zameen kisi aur ke naam par rehni hai to claim usi ke naam par rakhein.',
          'Batai par kheti karne wale ke liye PM Kisan nahi hai — state ki tenant-farmer scheme dekhein.',
        ],
      };
    }

    return {
      tone: 'good' as const,
      headline:
        landInName === 'joint'
          ? 'Joint holding — hissa saaf ho to claim ban jaata hai'
          : 'Ek claim ban raha hai',
      detail:
        landInName === 'joint'
          ? 'Joint patta apne aap mein rukaawat nahi hai. Shart ye hai ki record mein aapka hissa saaf darj ho aur wahi khasra kisi doosre parivaar ki file mein bhi claim na ho raha ho. Ek hi hissa do file mein aane par dono ruk jaati hain.'
          : 'Ek parivaar, ek claim, flat raqam. Zameen ka area raqam nahi badalta — chaar bigha ho ya chaalis, saal bhar ka grant same rehta hai. Aage sab kuch e-KYC aur bank ki NPCI seeding par tikta hai.',
      annual: 6000,
      heads: 1,
      refund: false,
      steps: [
        'Aadhaar e-KYC poori rakhein — OTP se ya CSC par biometric se.',
        'Bank account Aadhaar se NPCI mapper mein seeded ho, sirf photocopy dena kaafi nahi.',
        'Land seeding status portal par "Yes" dikhna chahiye, warna kist hold rehti hai.',
      ],
    };
  }, [applicant, landInName, sonPartitioned, excluded, alreadyPaid]);

  const toneText =
    result.tone === 'good'
      ? 'text-green-700 dark:text-green-400'
      : result.tone === 'warn'
        ? 'text-amber-700 dark:text-amber-400'
        : 'text-red-700 dark:text-red-400';

  return (
    <section
      aria-label="PM Kisan parivaar eligibility checker"
      className="not-prose my-10 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm overflow-hidden"
    >
      <header className="px-5 py-4 bg-green-50 dark:bg-green-900/20 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-base md:text-lg font-black text-gray-900 dark:text-gray-100 m-0">
          Family Checker — aapke ghar se kitne naam ban sakte hain
        </h2>
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 mb-0">
          Sab hisaab aapke phone mein hota hai. Kuch submit nahi hota aur koi record nahi
          banta.
        </p>
      </header>

      <div className="p-5 grid gap-5 md:grid-cols-2">
        <div>
          <fieldset className="mb-4">
            <legend className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
              Aap kis situation ke bare mein poochh rahe hain?
            </legend>
            <div className="space-y-2">
              {(
                [
                  ['one', 'Ghar se ek hi naam par claim hai'],
                  ['both', 'Pati aur patni dono ka registration hai ya karna chahte hain'],
                  ['son', 'Baalig bete ka alag registration ka sawal hai'],
                ] as [Applicant, string][]
              ).map(([val, label]) => (
                <label
                  key={val}
                  className="flex items-start gap-2 text-sm text-gray-800 dark:text-gray-200 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="pmk-family-applicant"
                    value={val}
                    checked={applicant === val}
                    onChange={() => {
                      setApplicant(val);
                      setSubmitted(false);
                    }}
                    className="mt-1 accent-green-600"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {applicant === 'son' && (
            <label className="flex items-start gap-2 text-sm text-gray-800 dark:text-gray-200 mb-4 cursor-pointer">
              <input
                type="checkbox"
                checked={sonPartitioned}
                onChange={(e) => {
                  setSonPartitioned(e.target.checked);
                  setSubmitted(false);
                }}
                className="mt-1 accent-green-600"
              />
              <span>
                Batwaara ho chuka hai aur revenue record mein zameen bete ke naam par darj
                hai
              </span>
            </label>
          )}

          {applicant !== 'son' && (
            <fieldset className="mb-4">
              <legend className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                Jis naam par claim hai, uske naam par zameen record mein hai?
              </legend>
              <div className="space-y-2">
                {(
                  [
                    ['yes', 'Haan, akele uske naam par darj hai'],
                    ['joint', 'Joint patta hai — hissa record mein likha hai'],
                    ['no', 'Nahi, kisi aur ke naam par hai'],
                  ] as ['yes' | 'joint' | 'no', string][]
                ).map(([val, label]) => (
                  <label
                    key={val}
                    className="flex items-start gap-2 text-sm text-gray-800 dark:text-gray-200 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="pmk-family-land"
                      value={val}
                      checked={landInName === val}
                      onChange={() => {
                        setLandInName(val);
                        setSubmitted(false);
                      }}
                      className="mt-1 accent-green-600"
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          )}

          <fieldset className="mb-4">
            <legend className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
              Inmein se koi baat ghar ke kisi bhi sadasya par lagti hai?
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
                    onChange={() => toggle(key)}
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
              checked={alreadyPaid}
              onChange={(e) => {
                setAlreadyPaid(e.target.checked);
                setSubmitted(false);
              }}
              className="mt-1 accent-green-600"
            />
            <span>Is ghar mein ek se zyada naam par kist aa chuki hai</span>
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
              Bayein taraf apni situation chunkar button dabaiye. Aapko milega: ghar se kitne
              naam ban sakte hain, saal bhar ka kitna, refund ka khatra hai ya nahi, aur agla
              kadam kya hai.
            </p>
          ) : (
            <div className="space-y-4">
              <div>
                <p className={`text-sm font-black mb-1 ${toneText}`}>{result.headline}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 m-0 leading-relaxed">
                  {result.detail}
                </p>
              </div>

              <dl className="grid grid-cols-3 gap-2 text-sm">
                <div className="rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3">
                  <dt className="text-xs text-gray-500 dark:text-gray-400">Valid naam</dt>
                  <dd className="font-black text-gray-900 dark:text-gray-100 m-0">
                    {result.heads}
                  </dd>
                </div>
                <div className="rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3">
                  <dt className="text-xs text-gray-500 dark:text-gray-400">Saal bhar</dt>
                  <dd className="font-black text-gray-900 dark:text-gray-100 m-0">
                    {rupee(result.annual * result.heads)}
                  </dd>
                </div>
                <div className="rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3">
                  <dt className="text-xs text-gray-500 dark:text-gray-400">Ek kist</dt>
                  <dd className="font-black text-gray-900 dark:text-gray-100 m-0">
                    {result.heads > 0 ? rupee(2000) : '—'}
                  </dd>
                </div>
              </dl>

              {result.refund && (
                <p className="text-xs m-0 rounded-lg p-3 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300">
                  Ek hi parivaar ke do naam par kist gayi hai — ye recovery wala case hai.
                  Extra naam par mila poora paisa wapas karna padta hai, aur portal par khud
                  surrender karna notice ka intezaar karne se behtar rehta hai.
                </p>
              )}

              <div>
                <p className="text-xs font-black text-gray-700 dark:text-gray-300 mb-2">
                  Aage kya karein
                </p>
                <ol className="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 m-0 pl-4 list-decimal">
                  {result.steps.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ol>
              </div>

              <p className="text-[11px] text-gray-500 dark:text-gray-400 m-0">
                Ye scheme ke published family rule aur exclusion list par bana reading aid
                hai. Aakhri faisla aapke land record aur portal ke verification par hota hai.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
