'use client';

import { useState, useMemo } from 'react';

/**
 * Client island: searchable state land-record portal table.
 * Extracted so the surrounding article stays a server component (INP fix).
 */
const STATE_PORTALS = [
  { state: 'Andhra Pradesh', portal: 'meebhoomi.ap.gov.in', url: 'https://meebhoomi.ap.gov.in', note: 'Mee Bhoomi portal par land details.' },
  { state: 'Bihar', portal: 'biharbhumi.bihar.gov.in', url: 'https://biharbhumi.bihar.gov.in', note: 'Bhumi Jankari portal.' },
  { state: 'Chhattisgarh', portal: 'bhuiyan.cg.nic.in', url: 'https://bhuiyan.cg.nic.in', note: 'Bhuiyan portal se village data.' },
  { state: 'Gujarat', portal: 'anyror.gujarat.gov.in', url: 'https://anyror.gujarat.gov.in', note: 'Any ROR Gujarat portal.' },
  { state: 'Haryana', portal: 'jamabandi.nic.in', url: 'https://jamabandi.nic.in', note: 'Jamabandi Haryana portal.' },
  { state: 'Himachal Pradesh', portal: 'himbhulekh.hp.nic.in', url: 'https://himbhulekh.hp.nic.in', note: 'HP Bhulekh portal.' },
  { state: 'Jharkhand', portal: 'jharbhoomi.jharkhand.gov.in', url: 'https://jharbhoomi.jharkhand.gov.in', note: 'Jharbhoomi portal.' },
  { state: 'Karnataka', portal: 'bhoomi.karnataka.gov.in', url: 'https://bhoomi.karnataka.gov.in', note: 'Bhoomi RTC details.' },
  { state: 'Madhya Pradesh', portal: 'bhu-abhilekh.nic.in', url: 'https://bhu-abhilekh.nic.in', note: 'Bhu-Abhilekh village report.' },
  { state: 'Maharashtra', portal: 'bhulekh.mahabhumi.gov.in', url: 'https://bhulekh.mahabhumi.gov.in', note: '7/12 Utara par status link.' },
  { state: 'Odisha', portal: 'bhulekh.ori.nic.in', url: 'https://bhulekh.ori.nic.in', note: 'Odisha Bhulekh portal.' },
  { state: 'Punjab', portal: 'jamabandi.punjab.gov.in', url: 'https://jamabandi.punjab.gov.in', note: 'Punjab Jamabandi portal.' },
  { state: 'Rajasthan', portal: 'apnakhata.raj.nic.in', url: 'https://apnakhata.raj.nic.in', note: 'E-Dharti gaon wise report.' },
  { state: 'Tamil Nadu', portal: 'eservices.tnreg.gov.in', url: 'https://eservices.tnreg.gov.in', note: 'Tamil Nadu land records.' },
  { state: 'Telangana', portal: 'dharani.telangana.gov.in', url: 'https://dharani.telangana.gov.in', note: 'Dharani portal.' },
  { state: 'Uttar Pradesh', portal: 'upbhulekh.gov.in', url: 'https://upbhulekh.gov.in', note: 'Khatauni mein beneficiary status.' },
  { state: 'Uttarakhand', portal: 'bhulekh.uk.gov.in', url: 'https://bhulekh.uk.gov.in', note: 'UK Bhulekh portal.' },
  { state: 'West Bengal', portal: 'banglarbhumi.gov.in', url: 'https://banglarbhumi.gov.in', note: 'Banglar Bhumi WB portal.' },
];

export default function StatePortalFinder() {
  const [portalSearch, setPortalSearch] = useState('');

  const filteredPortals = useMemo(() =>
    STATE_PORTALS.filter(p =>
      p.state.toLowerCase().includes(portalSearch.toLowerCase()) ||
      p.portal.toLowerCase().includes(portalSearch.toLowerCase())
    ), [portalSearch]
  );

  return (
    <>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search state or portal name..."
              value={portalSearch}
              onChange={(e) => setPortalSearch(e.target.value)}
              className="w-full p-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow"
              aria-label="Search state land record portal"
            />
          </div>

          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">State</th>
                  <th className="p-3 text-left">Portal</th>
                  <th className="p-3 text-left">Note</th>
                  <th className="p-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredPortals.map(({ state, portal, url, note }) => (
                  <tr key={state} className="border-b border-[var(--color-border)] hover:bg-[var(--color-bg-alt)] transition-colors">
                    <td className="p-3 font-medium text-xs text-[var(--color-text)]">{state}</td>
                    <td className="p-3 text-xs text-blue-600 dark:text-blue-400 font-bold">{portal}</td>
                    <td className="p-3 text-xs text-[var(--color-text-muted)]">{note}</td>
                    <td className="p-3">
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors"
                      >
                        Visit ↗
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredPortals.length === 0 && (
              <p className="p-4 text-center text-sm text-[var(--color-text-muted)]">Koi result nahi mila.</p>
            )}
          </div>
    </>
  );
}
