// Verify data consistency across all sources
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parse } from 'csv-parse/sync';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Extract DOIs from text
function extractDois(text) {
  if (!text) return [];
  const doiRegex = /10\.\d{4,9}\/[^\s,;\)"]+/gi;
  const matches = text.match(doiRegex) || [];
  return matches.map(d => d.toLowerCase().replace(/[.\s]+$/, ''));
}

console.log('=== DATA VERIFICATION ===\n');

// 1. Load publications.csv (authoritative source)
const pubsCsvPath = '/Users/edenrozenblit/Desktop/documentation/publications/publications.csv';
const pubsCsv = fs.readFileSync(pubsCsvPath, 'utf8');
const pubsRecords = parse(pubsCsv, { columns: true, skip_empty_lines: true, relax_column_count: true });

const pubsCsvDois = new Map();
pubsRecords.forEach((pub, idx) => {
  const dois = extractDois(pub.citation);
  dois.forEach(doi => {
    if (!pubsCsvDois.has(doi)) {
      pubsCsvDois.set(doi, { line: idx + 2, citation: pub.citation?.slice(0, 80) });
    }
  });
});
console.log(`Publications CSV: ${pubsCsvDois.size} unique DOIs\n`);

// 2. Load Notion publications (publications.json)
const notionPubs = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'static', 'data', 'publications.json'), 'utf8'));
const notionDois = new Map();
notionPubs.forEach(pub => {
  if (pub.doi) {
    notionDois.set(pub.doi.toLowerCase(), { id: pub.id, title: pub.title?.slice(0, 60) });
  }
});
console.log(`Notion publications: ${notionDois.size} unique DOIs\n`);

// 3. Load projects CSV
const projCsvPath = '/Users/edenrozenblit/Desktop/documentation/publications/mindLAMP_projects_database.csv';
const projCsv = fs.readFileSync(projCsvPath, 'utf8');
const projRecords = parse(projCsv, { columns: true, skip_empty_lines: true, relax_column_count: true });

console.log(`Projects CSV: ${projRecords.length} projects\n`);

// 4. Compare publications.csv DOIs with Notion DOIs
console.log('=== COMPARING PUBLICATIONS.CSV vs NOTION ===\n');

let inCsvNotNotion = 0;
let inNotionNotCsv = 0;

for (const [doi, info] of pubsCsvDois) {
  if (!notionDois.has(doi)) {
    console.log(`In CSV but NOT in Notion: ${doi}`);
    console.log(`  Citation: ${info.citation}...`);
    inCsvNotNotion++;
  }
}

for (const [doi, info] of notionDois) {
  if (!pubsCsvDois.has(doi)) {
    console.log(`In Notion but NOT in CSV: ${doi}`);
    console.log(`  Title: ${info.title}...`);
    inNotionNotCsv++;
  }
}

console.log(`\nSummary: ${inCsvNotNotion} in CSV but not Notion, ${inNotionNotCsv} in Notion but not CSV\n`);

// 5. Check project DOIs against publications.csv
console.log('\n=== PROJECT DOIS vs PUBLICATIONS.CSV ===\n');

let matched = 0;
let notFound = 0;
const corrections = [];

for (const proj of projRecords) {
  const projectId = proj.projectID;
  const pubIds = proj.publicationIDs || '';
  const projDois = extractDois(pubIds);

  if (projDois.length === 0) continue;

  console.log(`\n${projectId}: ${proj.name?.slice(0, 50)}`);

  for (const doi of projDois) {
    if (pubsCsvDois.has(doi)) {
      console.log(`  ✓ ${doi} - FOUND in publications.csv`);
      matched++;
    } else {
      // Look for similar DOI
      const prefix = doi.split('/')[0];
      const suffix = doi.split('/').slice(1).join('/');
      let closestMatch = null;
      let closestDiff = 999;

      for (const [csvDoi] of pubsCsvDois) {
        if (csvDoi.split('/')[0] === prefix) {
          const csvSuffix = csvDoi.split('/').slice(1).join('/');
          let diffs = 0;
          const maxLen = Math.max(suffix.length, csvSuffix.length);
          for (let i = 0; i < maxLen; i++) {
            if (suffix[i] !== csvSuffix[i]) diffs++;
          }
          if (diffs < closestDiff) {
            closestDiff = diffs;
            closestMatch = csvDoi;
          }
        }
      }

      if (closestMatch && closestDiff <= 4) {
        console.log(`  ⚠ ${doi} - NOT FOUND, but similar: ${closestMatch} (${closestDiff} char diff)`);
        corrections.push({ projectId, wrong: doi, correct: closestMatch, diff: closestDiff });
      } else {
        console.log(`  ✗ ${doi} - NOT FOUND in publications.csv`);
      }
      notFound++;
    }
  }
}

console.log(`\n\n=== SUMMARY ===`);
console.log(`Project DOIs found in publications.csv: ${matched}`);
console.log(`Project DOIs NOT found: ${notFound}`);
console.log(`\nSuggested corrections (typos in projects CSV):`);
corrections.forEach(c => {
  console.log(`  '${c.wrong}': '${c.correct}',  // ${c.projectId}`);
});
