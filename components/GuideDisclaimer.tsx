import React from 'react';
import { fmtDate } from '@/components/ArticleShared';

/**
 * Canonical disclaimer for kisanguides/ business-guide articles.
 * One wording site-wide; the "Last updated" date comes from the article's
 * modifiedTime constant (lib/core-articles-data.ts) instead of a hand-typed string.
 */
export default function GuideDisclaimer({
  consult,
  extra,
  modified,
}: {
  /** Who the reader should consult, e.g. "agriculture officers, CAs" */
  consult: string;
  /** Optional article-specific sentence (e.g. an official portal to verify on) */
  extra?: string;
  /** ISO date string — the article's modifiedTime */
  modified: string;
}) {
  return (
    <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-lg border-l-4 border-orange-500 not-prose">
      <p className="text-sm text-gray-700 dark:text-gray-300">
        <strong className="text-orange-600 dark:text-orange-400 block mb-2">Disclaimer:</strong>
        Yeh article general information ke liye hai. Actual costs, subsidies, aur procedures
        aapke location aur specific circumstances ke hisaab se vary kar sakte hain. Koi bhi
        financial decision lene se pehle qualified professionals ({consult}) se consult karein.
        {extra ? ` ${extra}` : ''} Prices aur guidelines change hote rehte hain, isliye latest
        information ke liye official sources se verify karein. Last updated: {fmtDate(modified)}.
      </p>
    </div>
  );
}
