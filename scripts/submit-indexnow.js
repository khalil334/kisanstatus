const fs = require('fs');
const path = require('path');

const PAYLOAD_PATH = path.join(__dirname, 'indexnow-payload.json');
const STATE_PATH = path.join(__dirname, 'indexnow-state.json');

async function main() {
  const payload = JSON.parse(fs.readFileSync(PAYLOAD_PATH, 'utf8'));

  if (!Array.isArray(payload.urlList) || payload.urlList.length === 0) {
    console.log('IndexNow: nothing to submit, skipping.');
    return;
  }

  // Validate the ledger handoff BEFORE sending anything: the builder records
  // the lastmods it compared against in state.pending, and without them we
  // could not record what we submitted - which would resubmit the whole site.
  const state = fs.existsSync(STATE_PATH)
    ? JSON.parse(fs.readFileSync(STATE_PATH, 'utf8'))
    : { submitted: {} };
  state.submitted = state.submitted || {};
  const pending = state.pending || {};
  const unknown = payload.urlList.filter((url) => !(url in pending));
  if (unknown.length > 0) {
    throw new Error(
      `${unknown.length} submitted URL(s) missing from state.pending; ` +
        'run "npm run indexnow:build" instead of calling this script directly',
    );
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
  for (const url of payload.urlList) {
    state.submitted[url] = pending[url];
  }
  delete state.pending;
  state.lastSubmittedAt = new Date().toISOString();
  fs.writeFileSync(STATE_PATH, `${JSON.stringify(state, null, 1)}\n`);
  console.log(`IndexNow: recorded ${payload.urlList.length} submitted URL(s) in indexnow-state.json`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
