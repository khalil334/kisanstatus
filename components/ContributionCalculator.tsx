'use client';

import { useState } from 'react';

/**
 * Client island: age slider contribution calculator.
 * Extracted so the article stays a server component (INP fix).
 */
const CONTRIB_DATA: Record<number, number> = {
  18: 55, 19: 58, 20: 61, 21: 64, 22: 68, 23: 72, 24: 76, 25: 80,
  26: 85, 27: 90, 28: 95, 29: 100, 30: 105, 31: 110, 32: 120, 33: 130,
  34: 140, 35: 150, 36: 160, 37: 170, 38: 180, 39: 190, 40: 200,
};


export default function ContributionCalculator() {
  const [age, setAge] = useState(25);
  const monthly = CONTRIB_DATA[age];
  const years = 60 - age;
  const totalUser = monthly * 12 * years;
  const breakEven = Math.ceil(totalUser / 36000);

  return (
    <div className="my-6 p-5 bg-white dark:bg-gray-900 border border-[var(--color-border)] rounded-2xl shadow-sm">
      <h3 className="text-lg font-black text-[var(--color-text)] mb-4 flex items-center gap-2">Contribution Calculator</h3>
      <label className="block text-xs text-[var(--color-text-muted)] mb-2">Enrollment ke waqt aapki umar</label>
      <input
        type="range"
        min={18}
        max={40}
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        className="w-full accent-green-600 mb-1"
      />
      <div className="text-center text-3xl font-black text-green-700 dark:text-green-400 my-2">{age} saal</div>
      <div className="grid grid-cols-2 gap-3 mt-4">
        <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center">
          <div className="text-xs text-[var(--color-text-muted)]">Aapka har mahine</div>
          <div className="text-xl font-black text-green-800 dark:text-green-300">₹{monthly}</div>
        </div>
        <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center">
          <div className="text-xs text-[var(--color-text-muted)]">Sarkar ka hissa</div>
          <div className="text-xl font-black text-green-800 dark:text-green-300">₹{monthly}</div>
        </div>
      </div>
      <div className="mt-3 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl text-center">
        <div className="text-xs text-amber-800 dark:text-amber-300">60 saal ke baad har mahine</div>
        <div className="text-2xl font-black text-amber-900 dark:text-amber-200">₹3,000</div>
      </div>
      <div className="mt-4 space-y-2 text-xs text-[var(--color-text-muted)]">
        <div className="flex justify-between"><span>Contribution period:</span><span className="font-bold text-[var(--color-text)]">{years} saal</span></div>
        <div className="flex justify-between"><span>Aapka total contribution:</span><span className="font-bold text-[var(--color-text)]">₹{totalUser.toLocaleString('en-IN')}</span></div>
        <div className="flex justify-between"><span>Sarkar ka total contribution:</span><span className="font-bold text-[var(--color-text)]">₹{totalUser.toLocaleString('en-IN')}</span></div>
        <div className="flex justify-between border-t border-[var(--color-border)] pt-2 mt-2"><span>Pension se 1 saal mein:</span><span className="font-bold text-green-700">₹36,000</span></div>
        <div className="flex justify-between"><span>Break-even (approx):</span><span className="font-bold text-red-600">~{breakEven} saal</span></div>
      </div>
      <p className="text-[10px] text-[var(--color-text-muted)] mt-3 text-center">Yeh sirf estimate hai. Exact amounts VLE system se nikalti hain.</p>
    </div>
  );
}
