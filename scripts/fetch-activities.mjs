// Fetches prebuilt, self-contained cognitive-game HTML bundles from the
// LAMP-activities repo (latest branch) into static/play/games/, driven by
// static/play/configs.json. Runs at prebuild/prestart so the docs build and
// deploy always pull the current game builds without committing them to git.
//
// Idempotent: skips bundles already on disk unless FORCE_FETCH_ACTIVITIES=1.
// Never fails the build — a missing game just means its "Try it" embed 404s and
// the player shows a graceful message.

import { readFile, mkdir, writeFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const configsPath = join(root, 'static/play/configs.json');
const gamesDir = join(root, 'static/play/games');
const BASE = 'https://raw.githubusercontent.com/BIDMCDigitalPsychiatry/LAMP-activities/latest/in';
const force = process.env.FORCE_FETCH_ACTIVITIES === '1';

const exists = async (p) => access(p).then(() => true).catch(() => false);

async function main() {
  if (!(await exists(configsPath))) {
    console.log('[fetch-activities] static/play/configs.json not found — skipping.');
    return;
  }
  const configs = JSON.parse(await readFile(configsPath, 'utf8'));
  await mkdir(gamesDir, { recursive: true });

  const entries = Object.entries(configs).filter(([, v]) => v && v.buildFile);
  let fetched = 0, cached = 0, failed = 0;

  for (const [slug, { buildFile }] of entries) {
    const dest = join(gamesDir, `${slug}.html`);
    if (!force && (await exists(dest))) { cached++; continue; }
    try {
      const res = await fetch(`${BASE}/${buildFile}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const html = await res.text();
      if (html.length < 1000 || !/<html/i.test(html)) throw new Error('unexpected content');
      await writeFile(dest, html);
      fetched++;
      console.log(`[fetch-activities] ${slug} <- ${buildFile} (${Math.round(html.length / 1024)} KB)`);
    } catch (e) {
      failed++;
      console.warn(`[fetch-activities] FAILED ${slug} (${buildFile}): ${e.message}`);
    }
  }
  console.log(`[fetch-activities] ${fetched} fetched, ${cached} cached, ${failed} failed.`);
}

main().catch((e) => { console.error('[fetch-activities] error (ignored):', e.message); });
