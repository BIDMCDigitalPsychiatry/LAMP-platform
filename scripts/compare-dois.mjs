// Compare DOIs between projects CSV and publications CSV
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parse } from 'csv-parse/sync';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read the projects CSV
const projectsCsvPath = '/Users/edenrozenblit/Desktop/documentation/publications/mindLAMP_projects_database.csv';
const projectsCsv = fs.readFileSync(projectsCsvPath, 'utf8');
const projectsRecords = parse(projectsCsv, { columns: true, skip_empty_lines: true });

// Read the publications CSV
const publicationsCsvPath = '/Users/edenrozenblit/Desktop/documentation/publications/publications.csv';
const publicationsCsv = fs.readFileSync(publicationsCsvPath, 'utf8');
const publicationsRecords = parse(publicationsCsv, { columns: true, skip_empty_lines: true });

// Extract all DOIs from publications CSV
const pubDois = new Map();
const doiRegex = /10\.\d{4,9}\/[^\s,\)]+/gi;

publicationsRecords.forEach((pub, idx) => {
  const citation = pub.citation || '';
  const matches = citation.match(doiRegex) || [];
  matches.forEach(doi => {
    const normalized = doi.toLowerCase().trim();
    if (!pubDois.has(normalized)) {
      pubDois.set(normalized, {
        citation: citation.slice(0, 100) + '...',
        line: idx + 2
      });
    }
  });
});

console.log(`Found ${pubDois.size} unique DOIs in publications.csv\n`);

// Extract DOIs from projects CSV
console.log('=== DOI COMPARISON ===\n');

const corrections = [];
const missing = [];

projectsRecords.forEach(project => {
  const projectId = project.projectID;
  const pubIdsRaw = project.publicationIDs || '';

  // Extract DOIs from the publicationIDs field
  const projectDois = pubIdsRaw.match(doiRegex) || [];

  if (projectDois.length === 0) return;

  console.log(`\n${projectId}: ${project.name?.slice(0, 50)}...`);

  projectDois.forEach(doi => {
    const normalized = doi.toLowerCase().trim();

    if (pubDois.has(normalized)) {
      console.log(`  ✓ ${doi} - found in publications CSV`);
    } else {
      // Look for similar DOIs
      const prefix = normalized.split('/')[0];
      const suffix = normalized.split('/').slice(1).join('/');

      let closestMatch = null;
      let closestDiff = 999;

      for (const [existingDoi, info] of pubDois.entries()) {
        const existingPrefix = existingDoi.split('/')[0];
        const existingSuffix = existingDoi.split('/').slice(1).join('/');

        if (prefix === existingPrefix) {
          let diffs = 0;
          const maxLen = Math.max(suffix.length, existingSuffix.length);
          for (let i = 0; i < maxLen; i++) {
            if (suffix[i] !== existingSuffix[i]) diffs++;
          }

          if (diffs < closestDiff && diffs <= 5) {
            closestDiff = diffs;
            closestMatch = { doi: existingDoi, info, diffs };
          }
        }
      }

      if (closestMatch) {
        console.log(`  ⚠ ${doi} - TYPO? Closest: ${closestMatch.doi} (${closestMatch.diffs} char diff)`);
        console.log(`      Citation: ${closestMatch.info.citation}`);
        corrections.push({
          projectId,
          wrongDoi: doi,
          correctDoi: closestMatch.doi,
          diffs: closestMatch.diffs
        });
      } else {
        console.log(`  ✗ ${doi} - NOT FOUND in publications CSV`);
        missing.push({ projectId, doi });
      }
    }
  });
});

console.log('\n\n=== SUGGESTED DOI CORRECTIONS ===\n');
console.log('Add these to the doiCorrections map:\n');
corrections.forEach(c => {
  console.log(`  '${c.wrongDoi}': '${c.correctDoi}',  // ${c.projectId} (${c.diffs} char diff)`);
});

console.log('\n\n=== TRULY MISSING DOIs ===\n');
console.log('These DOIs need to be added to the Notion publications database:\n');
missing.forEach(m => {
  console.log(`  ${m.projectId}: ${m.doi}`);
});
