const fs = require('fs');
const path = require('path');

const PAYLOAD_PATH = path.join(__dirname, 'indexnow-payload.json');
const STATE_PATH = path.join(__dirname, 'indexnow-state.json');
const SITEMAP_URL = 'https://kisanstatus.com/sitemap.xml';

async function lastmodMap() {
  const res = await fetch(SITEMAP_URL, {
    headers: { 'User-Agent': 'kisanstatus-indexnow-submitter' },
  });
  if (!res.ok) return new Map();
  const xml = await res.text();
  const out = new Map();
  for (const block of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const loc = block[1].match(/<loc>\s*([^<\s]+)\s*<\/loc>/);
    if (!loc) continue;
    const lastmod = block[1].match(/<lastmod>\s*([^<\s]+)\s*<\/lastmod>/);
    out.set(loc[1].trim(), lastmod ? lastmod[1].trim() : '');
  }
  return out;
}

async function main() {
  const payload = JSON.parse(fs.readFileSync(PAYLOAD_PATH, 'utf8'));

  if (!Array.isArray(payload.urlList) || payload.urlList.length === 0) {
    console.log('IndexNow: nothing to submit, skipping.');
    return;
  }

  // The key must be verifiable at keyLocation or IndexNow rejects the batch.
  const keyRes = await fetch(payload.keyLocation, {
    headers: { 'User-Agent': 'kisanstatus-indexnow-submitter' },
  });
  const keyBody = keyRes.ok ? (await keyRes.text()).trim() : '';
  if (keyBody !== payload.key) {
    throw new Error(
      `key file at ${payload.keyLocation} does not serve the payload key ` +
        `(HTTP ${keyRes.status}); aborting before submit`,
    );
  }

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });
  const text = await res.text();
  console.log(`IndexNow response: ${res.status} ${text}`);

  // 200 = accepted, 202 = accepted pending key validation.
  if (res.status !== 200 && res.status !== 202) process.exit(1);

  // Record what we submitted so the next build only sends genuine changes.
  const live = await lastmodMap();
  const state = fs.existsSync(STATE_PATH)
    ? JSON.parse(fs.readFileSync(STATE_PATH, 'utf8'))
    : { submitted: {} };
  state.submitted = state.submitted || {};
  for (const url of payload.urlList) {
    state.submitted[url] = live.get(url) ?? '';
  }
  state.lastSubmittedAt = new Date().toISOString();
  fs.writeFileSync(STATE_PATH, `${JSON.stringify(state, null, 1)}\n`);
  console.log(`IndexNow: recorded ${payload.urlList.length} submitted URL(s) in indexnow-state.json`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
