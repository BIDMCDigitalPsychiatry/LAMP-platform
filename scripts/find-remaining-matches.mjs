// Find remaining publication matches using more aggressive matching
import { Client } from '@notionhq/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load .env file manually
const envPath = path.join(__dirname, '..', '.env');
const envContent = fs.readFileSync(envPath, 'utf8');
const envVars = {};
envContent.split('\n').forEach(line => {
  const [key, ...val] = line.split('=');
  if (key && val.length) envVars[key.trim()] = val.join('=').trim();
});

// Load publications JSON to search more efficiently
const publications = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'static', 'data', 'publications.json'), 'utf8')
);

// DOIs that were not found
const notFoundDois = [
  { project: 'PRJ-0001', doi: '10.1038/s41537-024-00445-3' },
  { project: 'PRJ-0001', doi: '10.1016/j.psychres.2025.116405' },
  { project: 'PRJ-0001', doi: '10.1093/schbul/sbae178' },
  { project: 'PRJ-0002', doi: '10.1093/schizbullopen/sgac052' },
  { project: 'PRJ-0002', doi: '10.1177/17456916231214165' },
  { project: 'PRJ-0002', doi: '10.1080/09638237.2025.2471574' },
  { project: 'PRJ-0002', doi: '10.1007/s41347-023-00292-4' },
  { project: 'PRJ-0003', doi: '10.1056/CAT.22.0395' },
  { project: 'PRJ-0003', doi: '10.2196/56364' },
  { project: 'PRJ-0003', doi: '10.1007/s10488-024-01417-w' },
  { project: 'PRJ-0003', doi: '10.2196/44214' },
  { project: 'PRJ-0004', doi: '10.1038/s41746-023-00928-y' },
  { project: 'PRJ-0004', doi: '10.1016/j.bionps.2024.100081' },
  { project: 'PRJ-0006', doi: '10.1101/2024.08.15.24312028' },
  { project: 'PRJ-0006', doi: '10.1038/s44184-025-00127-3' },
  { project: 'PRJ-0008', doi: '10.1017/S1041610225000183' },
  { project: 'PRJ-0009', doi: '10.1038/s44184-023-00035-4' },
  { project: 'PRJ-0010', doi: '10.1038/s44184-023-00035-4' },
  { project: 'PRJ-0014', doi: '10.1016/j.psychres.2020.113172' },
  { project: 'PRJ-0015', doi: '10.2196/31459' },
  { project: 'PRJ-0017', doi: '10.1016/j.schres.2021.08.015' },
  { project: 'PRJ-0021', doi: '10.1016/j.schres.2024.01.015' },
  { project: 'PRJ-0022', doi: '10.1159/000533754' },
  { project: 'PRJ-0023', doi: '10.1037/fsh0000818' },
  { project: 'PRJ-0024', doi: '10.1007/s10488-024-01417-w' },
  { project: 'PRJ-0028', doi: '10.3389/fpsyt.2022.848842' },
  { project: 'PRJ-0032', doi: '10.1016/j.schres.2025.01.014' }
];

function normalizeDoi(doi) {
  if (!doi) return '';
  return doi.toLowerCase().trim()
    .replace(/^https?:\/\/doi\.org\//, '')
    .replace(/^doi:/, '');
}

console.log('=== SEARCHING FOR REMAINING MATCHES ===\n');
console.log('Method 1: Search DOIs in citation text\n');

for (const { project, doi } of notFoundDois) {
  const normalizedDoi = normalizeDoi(doi);

  // Search in citation text
  const matchByCitation = publications.find(p =>
    p.citation && p.citation.toLowerCase().includes(normalizedDoi)
  );

  if (matchByCitation) {
    console.log(`✓ ${project} - ${doi}`);
    console.log(`  Found in citation: "${matchByCitation.title?.slice(0, 60)}..."`);
    console.log(`  Notion ID: ${matchByCitation.id}`);
    console.log(`  Actual DOI field: ${matchByCitation.doi}`);
    console.log();
  }
}

console.log('\n\nMethod 2: Search DOIs anywhere in all text fields\n');

for (const { project, doi } of notFoundDois) {
  const normalizedDoi = normalizeDoi(doi);

  // Already checked citation, now check if DOI appears anywhere
  const matchAnywhere = publications.find(p => {
    const allText = [p.doi, p.title, p.citation, p.abstract, p.mindlampRelevance, p.url]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();
    return allText.includes(normalizedDoi);
  });

  if (matchAnywhere) {
    console.log(`✓ ${project} - ${doi}`);
    console.log(`  Found in: "${matchAnywhere.title?.slice(0, 60)}..."`);
    console.log(`  Notion ID: ${matchAnywhere.id}`);
    console.log();
  }
}

console.log('\n\nMethod 3: Partial DOI matching (journal prefix + similar article number)\n');

// Group DOIs by journal prefix for better matching
const pubsByPrefix = new Map();
publications.forEach(p => {
  if (p.doi) {
    const prefix = p.doi.split('/')[0];
    if (!pubsByPrefix.has(prefix)) pubsByPrefix.set(prefix, []);
    pubsByPrefix.get(prefix).push(p);
  }
});

for (const { project, doi } of notFoundDois) {
  const normalizedDoi = normalizeDoi(doi);
  const prefix = normalizedDoi.split('/')[0];
  const suffix = normalizedDoi.split('/').slice(1).join('/');

  // Find publications with same prefix
  const candidates = pubsByPrefix.get(prefix) || [];

  for (const pub of candidates) {
    const pubSuffix = pub.doi.split('/').slice(1).join('/');

    // Check if suffixes are very similar (differ by 1-3 chars)
    let diffs = 0;
    const maxLen = Math.max(suffix.length, pubSuffix.length);
    for (let i = 0; i < maxLen; i++) {
      if (suffix[i] !== pubSuffix[i]) diffs++;
    }

    if (diffs > 0 && diffs <= 3) {
      console.log(`? ${project} - ${doi}`);
      console.log(`  Potential match: ${pub.doi}`);
      console.log(`  Title: "${pub.title?.slice(0, 60)}..."`);
      console.log(`  Difference: ${diffs} characters`);
      console.log();
    }
  }
}

console.log('\n\n=== SUMMARY OF TRULY MISSING DOIS ===\n');
console.log('These DOIs appear to genuinely not exist in the Notion publications database:');
console.log('(You may need to add them manually)\n');

const allNotionDois = new Set(publications.map(p => normalizeDoi(p.doi)));
const allCitationText = publications.map(p => (p.citation || '').toLowerCase()).join(' ');

for (const { project, doi } of notFoundDois) {
  const normalizedDoi = normalizeDoi(doi);

  const inDoiField = allNotionDois.has(normalizedDoi);
  const inCitation = allCitationText.includes(normalizedDoi);

  // Check for close matches
  let closeMatch = null;
  const prefix = normalizedDoi.split('/')[0];
  const candidates = pubsByPrefix.get(prefix) || [];
  for (const pub of candidates) {
    const pubSuffix = pub.doi.split('/').slice(1).join('/');
    const suffix = normalizedDoi.split('/').slice(1).join('/');
    let diffs = 0;
    const maxLen = Math.max(suffix.length, pubSuffix.length);
    for (let i = 0; i < maxLen; i++) {
      if (suffix[i] !== pubSuffix[i]) diffs++;
    }
    if (diffs <= 3) {
      closeMatch = pub.doi;
      break;
    }
  }

  if (!inDoiField && !inCitation && !closeMatch) {
    console.log(`${project}: ${doi}`);
  }
}
