'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

/**
 * State kisan yojana finder.
 *
 * Only states whose scheme we have already researched in a dedicated article
 * are listed with amounts, and every amount here matches that article — no
 * invented figures. States without a top-up scheme of their own are handled by
 * the fallback branch, which says so plainly instead of guessing.
 *
 * `stateAnnual` semantics differ by scheme design, so each row carries its own
 * calculator kind:
 *   - 'flat'     : fixed annual state top-up, land area irrelevant.
 *   - 'perAcre'  : per-acre grant with a floor and/or capped acreage.
 *   - 'track'    : two separate household tracks (cultivator vs landless).
 *
 * PM Kisan itself is a flat ₹6,000 a year (3 × ₹2,000) wherever the farmer is
 * eligible, so it is added on top unless the user says they don't get it.
 */

const PM_KISAN_ANNUAL = 6000;

type Scheme = {
  state: string;
  scheme: string;
  slug: string;
  portal: string;
  kind: 'flat' | 'perAcre' | 'track';
  /** flat: annual state amount. */
  flat?: number;
  /** perAcre: rate, floor, and max billable acres. */
  /** `capAcres` omitted = koi acre cap nahi (sirf cultivable-land shart lagti hai). */
  perAcre?: { rate: number; floor: number; capAcres?: number; seasons: number };
  /** track: cultivator vs landless annual amounts + acre ceiling. */
  track?: { cultivator: number; landless: number; ceilingAcres: number };
  note: string;
};

const SCHEMES: Scheme[] = [
  {
    state: 'Andhra Pradesh',
    scheme: 'Annadata Sukhibhava',
    slug: 'annadata-sukhibhava-status-check-2026',
    portal: 'annadathasukhibhava.ap.gov.in',
    kind: 'flat',
    flat: 14000,
    note: 'State ka hissa teen kiston mein aata hai aur PM Kisan ke saath milkar saal bhar ka total ₹20,000 banta hai.',
  },
  {
    state: 'Maharashtra',
    scheme: 'Namo Shetkari Mahasanman Nidhi',
    slug: 'namo-shetkari-yojana-status-check-2026',
    portal: 'nsmny.mahait.org',
    kind: 'flat',
    flat: 6000,
    note: 'State PM Kisan ke barabar hi deta hai — do ₹3,000 ki kist mein. Eligibility seedha PM Kisan record se uthti hai.',
  },
  {
    state: 'Rajasthan',
    scheme: 'Mukhyamantri Kisan Samman Nidhi',
    slug: 'rajasthan-kisan-samman-nidhi-9000',
    portal: 'jansoochna.rajasthan.gov.in',
    kind: 'flat',
    flat: 3000,
    note: 'Abhi confirmed hissa ₹3,000 hai (3 × ₹1,000). Ise dugna karne ka prastaav hai, lekin gazette notification aaye bina wo sirf ghoshna hai.',
  },
  {
    state: 'Madhya Pradesh',
    scheme: 'CM Kisan Kalyan Yojana',
    slug: 'mp-kisan-kalyan-yojana-kist-status',
    portal: 'saara.mp.gov.in',
    kind: 'flat',
    flat: 6000,
    note: 'State top-up ₹6,000 saalana hai — teen kiston mein ₹2,000-₹2,000. Scheme ₹4,000 se shuru hui thi, baad mein badhaya gaya; ₹4,000 wala figure purana hai.',
  },
  {
    state: 'Telangana',
    scheme: 'Rythu Bharosa (pehle Rythu Bandhu)',
    slug: 'rythu-bharosa-status-check-2026',
    portal: 'rythubharosa.telangana.gov.in',
    kind: 'perAcre',
    perAcre: { rate: 12000, floor: 0, seasons: 2 },
    note: 'Har acre par ₹12,000 saalana — ₹6,000 Kharif aur ₹6,000 Rabi. Paisa sirf cultivable land par banta hai; real estate layout aur parti zameen shamil nahi.',
  },
  {
    state: 'West Bengal',
    scheme: 'Krishak Bandhu (Notun Rupe)',
    slug: 'krishak-bandhu-status-check-2026',
    portal: 'krishakbandhu.wb.gov.in',
    kind: 'perAcre',
    perAcre: { rate: 10000, floor: 4000, capAcres: 1, seasons: 2 },
    note: '1 acre ya usse zyada par poora ₹10,000; usse kam par pro-rata, lekin ₹4,000 se neeche nahi jaata.',
  },
  {
    state: 'Odisha',
    scheme: 'CM Kisan (pehle KALIA)',
    slug: 'odisha-cm-kisan-status-check-2026',
    portal: 'cmkisan.odisha.gov.in',
    kind: 'track',
    track: { cultivator: 4000, landless: 12500, ceilingAcres: 5 },
    note: 'Do alag track hain — zameen wale kisan ka ₹4,000 do tranche mein, aur bhoomiheen krishi parivaar ka ₹12,500 teen tranche mein.',
  },
];

function rupee(n: number) {
  return `₹${n.toLocaleString('en-IN')}`;
}

export default function StateYojanaFinder() {
  const [state, setState] = useState('');
  const [landRaw, setLandRaw] = useState('');
  const [unit, setUnit] = useState<'acre' | 'hectare'>('acre');
  const [landless, setLandless] = useState(false);
  const [getsPmKisan, setGetsPmKisan] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const acres = useMemo(() => {
    const v = parseFloat(landRaw);
    if (!Number.isFinite(v) || v <= 0) return 0;
    return unit === 'acre' ? v : v * 2.4711;
  }, [landRaw, unit]);

  const scheme = SCHEMES.find((s) => s.state === state);

  const result = useMemo(() => {
    const central = getsPmKisan && !landless ? PM_KISAN_ANNUAL : 0;

    if (!scheme) {
      return {
        headline: 'Is rajya ki apni top-up scheme humare cluster mein nahi hai',
        detail:
          'Har rajya PM Kisan ke upar apna paisa nahi deta. Aise rajyon mein saal bhar ka hisaab sirf central grant se banta hai, aur alag se koi state status page nahi hota. Agar aapke rajya ne haal mein koi scheme shuru ki hai, to uska official notification dekh lein — announcement aur notification do alag cheezein hoti hain.',
        central,
        stateAmount: 0,
        rows: [] as [string, string][],
      };
    }

    let stateAmount = 0;
    const rows: [string, string][] = [];

    if (scheme.kind === 'flat') {
      stateAmount = landless ? 0 : (scheme.flat ?? 0);
      rows.push(['State ka hissa', landless ? 'Bhoomiheen parivaar shamil nahi' : rupee(stateAmount)]);
    }

    if (scheme.kind === 'perAcre' && scheme.perAcre) {
      const { rate, floor, capAcres } = scheme.perAcre;
      if (landless || acres <= 0) {
        stateAmount = 0;
        rows.push([
          'State ka hissa',
          landless ? 'Zameen ke bina ye scheme lagu nahi hoti' : 'Area bharne par calculate hoga',
        ]);
      } else {
        const billable = capAcres ? Math.min(acres, capAcres) : acres;
        stateAmount = Math.max(floor, Math.round((billable * rate) / 100) * 100);
        rows.push(['Counted area', `${billable.toFixed(2)} acre`]);
        rows.push(['State ka hissa', rupee(stateAmount)]);
        if (capAcres && acres > capAcres) {
          rows.push(['Cap', `${capAcres} acre se aage ka area count nahi hota`]);
        }
      }
    }

    if (scheme.kind === 'track' && scheme.track) {
      const { cultivator, landless: landlessAmt, ceilingAcres } = scheme.track;
      if (landless) {
        stateAmount = landlessAmt;
        rows.push(['Track', 'Landless agricultural household']);
        rows.push(['State ka hissa', rupee(stateAmount)]);
      } else if (acres > ceilingAcres) {
        stateAmount = 0;
        rows.push(['Track', `Cultivator, lekin ${ceilingAcres} acre ki limit se bahar`]);
        rows.push(['State ka hissa', 'Nahi banta']);
      } else {
        stateAmount = cultivator;
        rows.push(['Track', 'Cultivator (limit ke andar)']);
        rows.push(['State ka hissa', rupee(stateAmount)]);
      }
    }

    return {
      headline: `${scheme.state} — ${scheme.scheme}`,
      detail: scheme.note,
      central,
      stateAmount,
      rows,
    };
  }, [scheme, acres, landless, getsPmKisan]);

  return (
    <section
      aria-label="State kisan yojana finder aur amount calculator"
      className="not-prose my-10 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm overflow-hidden"
    >
      <header className="px-5 py-4 bg-green-50 dark:bg-green-900/20 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-base md:text-lg font-black text-gray-900 dark:text-gray-100 m-0">
          State Yojana Finder — aapke rajya mein saal bhar kitna banta hai
        </h2>
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 mb-0">
          Rajya chunein, zameen bharein — central aur state ka jod, portal aur detail page ek
          saath. Sab kuch aapke browser mein chalta hai.
        </p>
      </header>

      <div className="p-5 grid gap-5 md:grid-cols-2">
        <div>
          <div className="mb-4">
            <label
              htmlFor="syf-state"
              className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1"
            >
              Aapka rajya
            </label>
            <select
              id="syf-state"
              value={state}
              onChange={(e) => {
                setState(e.target.value);
                setSubmitted(false);
              }}
              className="w-full border-2 border-gray-200 dark:border-gray-600 rounded-xl px-3 py-2.5 text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">— rajya chunein —</option>
              {SCHEMES.map((s) => (
                <option key={s.state} value={s.state}>
                  {s.state}
                </option>
              ))}
              <option value="other">Koi doosra rajya</option>
            </select>
          </div>

          <label className="flex items-start gap-2 text-sm text-gray-800 dark:text-gray-200 mb-4 cursor-pointer">
            <input
              type="checkbox"
              checked={landless}
              onChange={(e) => {
                setLandless(e.target.checked);
                setSubmitted(false);
              }}
              className="mt-1 accent-green-600"
            />
            <span>Zameen nahi hai — khet mazdoori ya allied kaam par nirbhar hain</span>
          </label>

          {!landless && (
            <div className="mb-4">
              <label
                htmlFor="syf-land"
                className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1"
              >
                Kul cultivable land
              </label>
              <div className="flex gap-2">
                <input
                  id="syf-land"
                  type="number"
                  min={0}
                  step="0.01"
                  inputMode="decimal"
                  value={landRaw}
                  placeholder="jaise 2"
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
                Per-acre wali scheme (Telangana, West Bengal) mein isi se raqam badalti hai.
                Flat scheme mein area se koi farak nahi padta.
              </p>
            </div>
          )}

          <label className="flex items-start gap-2 text-sm text-gray-800 dark:text-gray-200 mb-4 cursor-pointer">
            <input
              type="checkbox"
              checked={getsPmKisan}
              onChange={(e) => {
                setGetsPmKisan(e.target.checked);
                setSubmitted(false);
              }}
              className="mt-1 accent-green-600"
            />
            <span>PM Kisan ki kist already aati hai</span>
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
          {!submitted || !state ? (
            <p className="text-sm text-gray-600 dark:text-gray-400 m-0">
              Rajya chunkar button dabaiye. Aapko milega: central aur state ka alag-alag hissa,
              saal bhar ka jod, official portal, aur us scheme ka poora detail page.
            </p>
          ) : (
            <div className="space-y-4">
              <div>
                <p className="text-sm font-black text-gray-900 dark:text-gray-100 mb-1">
                  {result.headline}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 m-0 leading-relaxed">
                  {result.detail}
                </p>
              </div>

              <dl className="grid grid-cols-3 gap-2 text-sm">
                <div className="rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3">
                  <dt className="text-xs text-gray-500 dark:text-gray-400">PM Kisan</dt>
                  <dd className="font-black text-gray-900 dark:text-gray-100 m-0">
                    {result.central > 0 ? rupee(result.central) : '—'}
                  </dd>
                </div>
                <div className="rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3">
                  <dt className="text-xs text-gray-500 dark:text-gray-400">State</dt>
                  <dd className="font-black text-gray-900 dark:text-gray-100 m-0">
                    {result.stateAmount > 0 ? rupee(result.stateAmount) : '—'}
                  </dd>
                </div>
                <div className="rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3">
                  <dt className="text-xs text-gray-500 dark:text-gray-400">Saal bhar</dt>
                  <dd className="font-black text-green-700 dark:text-green-400 m-0">
                    {rupee(result.central + result.stateAmount)}
                  </dd>
                </div>
              </dl>

              {result.rows.length > 0 && (
                <dl className="text-xs text-gray-700 dark:text-gray-300 space-y-1.5">
                  {result.rows.map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-3">
                      <dt className="text-gray-500 dark:text-gray-400">{k}</dt>
                      <dd className="font-bold m-0 text-right">{v}</dd>
                    </div>
                  ))}
                </dl>
              )}

              {scheme && (
                <div className="space-y-2">
                  <p className="text-xs m-0">
                    <Link
                      href={`/rajya-yojana/${scheme.slug}`}
                      className="text-green-700 dark:text-green-400 font-bold underline"
                    >
                      {scheme.scheme} ka poora status-check guide padhein →
                    </Link>
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 m-0">
                    Official portal: {scheme.portal}
                  </p>
                </div>
              )}

              <p className="text-[11px] text-gray-500 dark:text-gray-400 m-0">
                Ye har scheme ke published structure par bana estimate hai. Aapka actual
                sanction land record, e-KYC aur portal ke verification par tay hota hai.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
