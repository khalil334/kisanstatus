#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DATA_FILES = [
  'lib/articles-data.ts',
  'lib/core-articles-data.ts',
  'lib/maandhan-data.ts',
  'lib/rajya-yojana-data.ts',
  'lib/loan-mandi-pashupalan-data.ts',
  'lib/hindi-yojana-data.ts',
  'lib/hindi-kisanguides-data.ts',
  'lib/hindi-loan-mandi-pashupalan-data.ts',
  'lib/hindi-rajya-yojana-data.ts',
];
const ROUTES = [
  'app/articles/[slug]/page.tsx',
  'app/maandhan/[slug]/page.tsx',
  'app/rajya-yojana/[slug]/page.tsx',
];
const BRAND_ROUTES = [
  'app/contact/page.tsx',
  'app/privacy-policy/page.tsx',
  'app/disclaimer/page.tsx',
  'app/terms-of-service/page.tsx',
  'app/search/page.tsx',
];
const MIN_WORD_LEN = 3;
const WINDOW = 6;

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
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) componentFiles(p, acc);
    else if (e.name.endsWith('.tsx')) acc[e.name.replace(/\.tsx$/, '')] = p;
  }
  return acc;
}

function firstH1(file) {
  if (!file) return null;
  const m = fs.readFileSync(file, 'utf8').match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  if (!m) return null;
  const text = m[1]
    .replace(/\{[^}]*\}/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return text || null;
}

const words = (s) =>
  (s || '')
    .toLowerCase()
    .replace(/[^a-z0-9\u0900-\u097F ]+/g, ' ')
    .split(/\s+/)
    .filter(Boolean);

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

  const violations = [];
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
      // Hindi articles: the route template (app/articles/hi/[slug]/page.tsx)
      // renders titleHi as the visible <h1>, and uses seoTitleHi ?? titleHi as
      // the <title>. So the pair to compare is seoTitleHi vs titleHi directly —
      // the Hindi components contain no <h1> of their own.
      const isHindi = /hindi-/.test(file);
      const title = isHindi
        ? field('seoTitleHi') || field('titleHi')
        : field('seoTitle') || field('ogTitle') || field('title');
      const compName = field('component') || (routeMaps[file] || {})[slug] || null;
      const h1 = isHindi ? field('titleHi') : firstH1(resolve(compName));

      if (!h1) {
        unresolved.push(`${slug} (component: ${compName || 'unknown'})`);
        continue;
      }
      checked++;
      const a = new Set(words(title).slice(0, WINDOW));
      const b = new Set(words(h1).slice(0, WINDOW));
      const shared = [...a].filter((w) => b.has(w) && w.length >= MIN_WORD_LEN);
      if (shared.length === 0) {
        violations.push(`${slug}\n      <title>: ${title}\n      <h1>   : ${h1}`);
      }
    }
  }

  const branded = [];
  for (const rel of BRAND_ROUTES) {
    if (!exists(rel)) continue;
    const line = read(rel)
      .split('\n')
      .find((l) => /^\s{2}title:/.test(l));
    if (line && /SITE_NAME|KisanStatus/.test(line)) {
      branded.push(`${rel} → ${line.trim()}`);
    }
  }

  console.log(`title/H1 pairs checked: ${checked}`);
  if (unresolved.length) {
    console.log(`\nno <h1> resolved (skipped, not a failure):`);
    for (const u of unresolved) console.log('  -', u);
  }
  if (branded.length) {
    console.log(`\ndouble-branded <title> (layout already appends "| KisanStatus"):`);
    for (const b of branded) console.log('  -', b);
  }
  if (violations.length) {
    console.log(`\n${violations.length} title/H1 pair(s) share no keyword in the first ${WINDOW} words:`);
    for (const v of violations) console.log('  -', v);
  }
  if (violations.length || branded.length) {
    console.log('\nFix by aligning the data file\'s seoTitle with the component\'s <h1>.');
    process.exit(1);
  }
  console.log('\n✓ all titles aligned with their H1, no double-branding');
}

main();
