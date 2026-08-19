#!/usr/bin/env node
// Content-length guard (GSC-DISCOVERED-NOT-INDEXED-FIX.md → Fix 5).
//
// Why: "Discovered - currently not indexed" on this site correlates with thin
// pages. The audit in that doc measured every sitemap page's word count with
// boilerplate (nav/footer) excluded and found the site standard is 2,000+ words.
// This guard catches a thin article at build time, before it ships and becomes
// another un-indexed URL.
//
// This WARNS, it never fails the build — some topics legitimately run short,
// and the doc's Fix 3 gives them an explicit escape hatch (expand / merge /
// noindex). A hard failure would just get bypassed.
//
// Counting note: this reads the JSX source, not rendered HTML, so counts land
// a few percent below a live-page measurement (markup identifiers vs. prose).
// Treat the numbers as a relative signal; the doc's Reference section has the
// authoritative curl-based audit for absolute figures.

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

// Same data files the title guard walks — these are the real content articles.
// Rajya-yojana / maandhan tool pages are status checkers, not articles, so word
// count does not apply to them (see the doc's "Baaki notes").
const DATA_FILES = [
  'lib/articles-data.ts',
  'lib/core-articles-data.ts',
  'lib/hindi-yojana-data.ts',
  'lib/hindi-kisanguides-data.ts',
  'lib/loan-mandi-pashupalan-data.ts',
  'lib/hindi-loan-mandi-pashupalan-data.ts',
];
const ROUTES = [
  'app/articles/[slug]/page.tsx',
  'app/articles/hi/[slug]/page.tsx',
  'app/maandhan/[slug]/page.tsx',
  'app/rajya-yojana/[slug]/page.tsx',
];

// Site standard from the audit. Anything under TARGET is below standard;
// anything under WARN is thin enough to be an indexing risk.
const TARGET = 2000;
const WARN = 1500;

const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const exists = (p) => fs.existsSync(path.join(ROOT, p));

function componentMapFromRoute(rel) {
  if (!exists(rel)) return {};
  const m = read(rel).match(/COMPONENTS[^=]*=\s*\{([\s\S]*?)\n {2}\};/);
  const map = {};
  if (m) {
    for (const line of m[1].split('\n')) {
      const mm = line.match(/'([^']+)':\s*([A-Za-z0-9_]+)/);
      if (mm) map[mm[1]] = mm[2];
    }
  }
  return map;
}

function importMap() {
  const map = {};
  for (const rel of ROUTES) {
    if (!exists(rel)) continue;
    for (const m of read(rel).matchAll(/import\s+([A-Za-z0-9_]+)\s+from\s+'([^']+)'/g)) {
      map[m[1]] = m[2];
    }
  }
  return map;
}

function componentFiles(dir, acc = {}) {
  if (!fs.existsSync(dir)) return acc;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) componentFiles(p, acc);
    else if (e.name.endsWith('.tsx')) acc[e.name.replace(/\.tsx$/, '')] = p;
  }
  return acc;
}

// Approximate the prose a crawler sees: drop imports, JSX attributes, tags and
// punctuation-only tokens, then keep tokens containing a Latin or Devanagari
// letter. Mirrors the boilerplate-excluded intent of the doc's audit script.
function wordCount(file) {
  let t = fs.readFileSync(file, 'utf8');
  t = t.replace(/^import .*$/gm, '');
  t = t.replace(/\/\*[\s\S]*?\*\//g, ' ').replace(/^\s*\/\/.*$/gm, ' ');
  t = t.replace(/className="[^"]*"/g, ' ');
  t = t.replace(
    /\b(src|href|alt|slug|k|bioKey|guideHref|portalName|width|height|style|key|caption|label|icon)=("[^"]*"|\{[^}]*\})/g,
    ' '
  );
  t = t.replace(/<[^>]+>/g, ' ');
  t = t.replace(/[{}()[\];,]/g, ' ');
  return t.split(/\s+/).filter((w) => /[A-Za-z\u0900-\u097F]/.test(w)).length;
}

function main() {
  const comps = componentFiles(path.join(ROOT, 'components'));
  const imports = importMap();
  const routeMaps = {
    'lib/maandhan-data.ts': componentMapFromRoute('app/maandhan/[slug]/page.tsx'),
    'lib/rajya-yojana-data.ts': componentMapFromRoute('app/rajya-yojana/[slug]/page.tsx'),
  };

  const resolve = (name) => {
    if (!name) return null;
    if (imports[name]) {
      const leaf = imports[name].split('/').pop();
      if (comps[leaf]) return comps[leaf];
    }
    return comps[name] || null;
  };

  const thin = [];
  const below = [];
  const unresolved = [];
  let checked = 0;

  for (const file of DATA_FILES) {
    if (!exists(file)) continue;
    const src = read(file);
    for (const chunk of src.split(/\n {2}\{\n/).slice(1)) {
      const field = (k) => {
        const m = chunk.match(new RegExp('\\b' + k + ":\\s*'((?:[^'\\\\]|\\\\.)*)'"));
        return m ? m[1].replace(/\\'/g, "'") : null;
      };
      const slug = field('slug');
      if (!slug) continue;

      // noindex pages are deliberately out of the index (the doc's Fix 3
      // "noindex" option and Fix 4), so thin content there is intentional.
      if (/\bnoindex:\s*true\b/.test(chunk)) continue;

      const compName = field('component') || (routeMaps[file] || {})[slug] || null;
      const compFile = resolve(compName);
      if (!compFile) {
        unresolved.push(`${slug} (component: ${compName || 'unknown'})`);
        continue;
      }

      checked++;
      const n = wordCount(compFile);
      const rel = path.relative(ROOT, compFile);
      if (n < WARN) thin.push({ slug, n, rel });
      else if (n < TARGET) below.push({ slug, n, rel });
    }
  }

  const fmt = ({ slug, n, rel }) =>
    `${slug} — ${n} words (needs +${Math.max(0, TARGET - n)})\n      ${rel}`;

  console.log(`content length checked: ${checked} article(s)`);

  if (unresolved.length) {
    console.log(`\nno component resolved (skipped, not a failure):`);
    for (const u of unresolved) console.log('  -', u);
  }

  if (thin.length) {
    console.log(
      `\n${thin.length} THIN article(s) under ${WARN} words — indexing risk, triage per Fix 3 (expand / merge / noindex):`
    );
    for (const t of thin.sort((a, b) => a.n - b.n)) console.log('  -', fmt(t));
  }

  if (below.length) {
    console.log(
      `\n${below.length} article(s) under the ${TARGET}-word site standard (expand with real content, never padding — see Section 2.5):`
    );
    for (const b of below.sort((a, b) => a.n - b.n)) console.log('  -', fmt(b));
  }

  if (!thin.length && !below.length) {
    console.log(`\nall checked articles are at or above the ${TARGET}-word standard.`);
  }

  // Warning only — never blocks a build. See header comment.
  process.exit(0);
}

main();
