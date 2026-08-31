#!/usr/bin/env node
/**
 * Publishing-pace guardrail (spam-hit recovery, priority item 4).
 *
 * The 18-Aug crash was triggered by a burst of 22 articles in 4 days
 * (13 on 18 Aug alone). This check makes the build FAIL if more than
 * MAX_PER_WINDOW articles carry a publishedTime inside any rolling
 * 7-day window that touches the RECENT period (last 45 days).
 *
 * Only publishing AFTER the BASELINE date (when this guardrail landed) is
 * policed — historical dates are frozen fact: the old burst is already
 * noindexed and rewriting genuine dates would repeat the date-fabrication
 * problem. noindex'd articles are also exempt (they're out of the index).
 *
 * Override for a deliberate exception (single build):
 *   ALLOW_PUBLISH_BURST=1 npm run build
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DATA_FILES = [
  'lib/articles-data.ts',
  'lib/core-articles-data.ts',
  'lib/maandhan-data.ts',
  'lib/rajya-yojana-data.ts',
  'lib/loan-mandi-pashupalan-data.ts',
  'lib/yojana-2026-data.ts',
  'lib/hindi-yojana-data.ts',
  'lib/hindi-yojana-2026-data.ts',
  'lib/hindi-kisanguides-data.ts',
  'lib/hindi-loan-mandi-pashupalan-data.ts',
  'lib/hindi-rajya-yojana-data.ts',
  'lib/hindi-articles-data.ts',
];

const MAX_PER_WINDOW = 2;          // max new articles per rolling 7 days
const WINDOW_DAYS = 7;
const BASELINE = new Date('2026-08-31T00:00:00+05:30'); // guardrail start — only later dates are policed

function extractEntries(file) {
  const src = fs.readFileSync(path.join(ROOT, file), 'utf8');
  const entries = [];
  // split on object boundaries so noindex detection stays per-entry
  const blocks = src.split(/\n  \{\n/).slice(1);
  for (const b of blocks) {
    const slug = /slug:\s*'([^']+)'/.exec(b);
    const pub = /publishedTime:\s*'([^']+)'/.exec(b);
    if (!slug || !pub) continue;
    const noindex = /noindex:\s*true/.test(b);
    entries.push({ slug: slug[1], published: new Date(pub[1]), file, noindex });
  }
  return entries;
}

const all = [];
for (const f of DATA_FILES) {
  if (!fs.existsSync(path.join(ROOT, f))) continue;
  all.push(...extractEntries(f));
}

const cutoff = BASELINE.getTime();
const recent = all
  .filter((e) => !e.noindex && !isNaN(e.published) && e.published.getTime() >= cutoff)
  .sort((a, b) => a.published - b.published);

let worst = null;
for (let i = 0; i < recent.length; i++) {
  const windowEnd = recent[i].published.getTime() + WINDOW_DAYS * 86400e3;
  const inWindow = recent.filter(
    (e) => e.published.getTime() >= recent[i].published.getTime() && e.published.getTime() < windowEnd
  );
  if (inWindow.length > MAX_PER_WINDOW && (!worst || inWindow.length > worst.length)) {
    worst = inWindow;
  }
}

console.log(
  `publish-pace: ${all.length} articles scanned, ${recent.length} published since baseline ${BASELINE.toISOString().slice(0, 10)}`
);

if (worst) {
  console.error(
    `\n✗ Publishing burst detected: ${worst.length} articles inside one ${WINDOW_DAYS}-day window (max ${MAX_PER_WINDOW}).`
  );
  console.error('  This is the exact pattern that caused the 18-Aug spam classification.');
  for (const e of worst) {
    console.error(`  - ${e.published.toISOString().slice(0, 10)}  ${e.slug}  (${e.file})`);
  }
  console.error(
    '\n  Fix: space new articles out (max 2/week, irregular days).' +
      '\n  Deliberate exception: ALLOW_PUBLISH_BURST=1 npm run build\n'
  );
  if (process.env.ALLOW_PUBLISH_BURST === '1') {
    console.error('  ALLOW_PUBLISH_BURST=1 set — continuing despite burst.');
  } else {
    process.exit(1);
  }
} else {
  console.log(`✓ publish pace OK (max ${MAX_PER_WINDOW} per ${WINDOW_DAYS}-day window in recent period)`);
}
