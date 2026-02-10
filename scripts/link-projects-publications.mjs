// Link projects to publications using multiple matching strategies
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

const notion = new Client({ auth: envVars.NOTION_TOKEN });

const PROJECTS_DB_ID = '2b233133d8a280d79629d7c48f9737a6';
const PUBLICATIONS_DB_ID = '2b233133d8a2802786f3c1dd4d802d1e';

// DOIs from CSV (manually extracted from the original CSV file)
const projectDois = {
  'PRJ-0001': ['10.1038/s41537-024-00445-3', '10.1016/j.psychres.2025.116405', '10.1093/schbul/sbae055', '10.1093/schbul/sbae178'],
  'PRJ-0002': ['10.1192/bjo.2020.144', '10.1093/schizbullopen/sgac052', '10.1038/s44184-023-00033-6', '10.1177/17456916231214165', '10.1080/09638237.2025.2471574', '10.1007/s41347-023-00292-4'],
  'PRJ-0003': ['10.1056/CAT.22.0395', '10.2196/56364', '10.1007/s10488-024-01417-w', '10.2196/44214'],
  'PRJ-0004': ['10.1038/s41746-023-00928-y', '10.1016/j.bionps.2024.100081'],
  'PRJ-0005': ['10.1038/s44277-024-00014-5', '10.1080/09638237.2025.2512312'],
  'PRJ-0006': ['10.1101/2024.08.15.24312028', '10.1038/s44184-025-00127-3'],
  'PRJ-0007': ['10.1186/s13063-022-06195-w'],
  'PRJ-0008': ['10.2196/59974', '10.1002/alz.093386', '10.1002/alz.093355', '10.1017/S1041610225000183'],
  'PRJ-0009': ['10.2196/37954', '10.1038/s44184-023-00035-4'],
  'PRJ-0010': ['10.1038/s44184-023-00035-4', '10.2196/37954'],
  'PRJ-0011': ['10.1016/j.schres.2022.02.031', '10.1038/s41398-020-01123-7', '10.1016/j.scog.2019.100133', '10.3389/fpsyt.2019.00652'],
  'PRJ-0012': ['10.1016/j.scog.2021.100196'],
  'PRJ-0013': ['10.1016/j.jclinane.2021.110556'],
  'PRJ-0014': ['10.1016/j.psychres.2020.113172'],
  'PRJ-0015': ['10.2196/31459', '10.1007/s10578-022-01348-3'],
  'PRJ-0016': ['10.3389/frcha.2024.1373561'],
  'PRJ-0017': ['10.1016/j.schres.2021.08.015'],
  'PRJ-0018': ['10.1093/schizbullopen/sgae010'],
  'PRJ-0019': ['10.2196/46292'],
  'PRJ-0020': [], // Bulgarian Journal - not a standard DOI
  'PRJ-0021': ['10.1016/j.schres.2024.01.015'],
  'PRJ-0022': ['10.1159/000533754'],
  'PRJ-0023': ['10.1037/fsh0000818'],
  'PRJ-0024': ['10.1007/s10488-024-01417-w'],
  'PRJ-0025': ['10.1089/jicm.2023.0696'],
  'PRJ-0026': ['10.1089/jicm.2023.0696'],
  'PRJ-0027': [], // BU Thesis - not a DOI
  'PRJ-0028': ['10.3389/fpsyt.2022.848842'],
  'PRJ-0029': ['10.1080/07448481.2021.1912307'],
  'PRJ-0030': ['10.1016/j.psychres.2022.114480'],
  'PRJ-0031': ['10.1007/s40501-023-00288-2'],
  'PRJ-0032': ['10.1016/j.schres.2025.01.014'],
  'PRJ-0033': ['10.2196/47146']
};

// Known DOI corrections (CSV DOI -> Notion DOI)
// These are typos in the projects CSV that need to be corrected
const doiCorrections = {
  // PRJ-0001 AMP SCZ
  '10.1093/schbul/sbae055': '10.1093/schbul/sbae011',

  // PRJ-0002 SHARP
  '10.1192/bjo.2020.144': '10.1192/bjo.2020.142',
  '10.1038/s44184-023-00033-6': '10.1038/s44184-023-00023-0',

  // PRJ-0003 Digital Clinic / TECC
  '10.1056/cat.22.0395': '10.1056/cat.23.0100',
  '10.2196/44214': '10.2196/33114',

  // PRJ-0004 Mayo/JHU
  '10.1038/s41746-023-00928-y': '10.1038/s41746-023-00977-7',
  '10.1016/j.bionps.2024.100081': '10.1016/j.bionps.2024.100105',

  // PRJ-0005 VA Veterans
  '10.1038/s44277-024-00014-5': '10.1038/s44277-024-00004-x',

  // PRJ-0007 AMHI
  '10.1186/s13063-022-06195-w': '10.1186/s13063-022-06438-y',

  // PRJ-0011 Boston Schizophrenia
  '10.1016/j.scog.2019.100133': '10.1016/j.scog.2019.100144',

  // PRJ-0012 Parkinson's
  '10.1016/j.scog.2021.100196': '10.1016/j.scog.2021.100216',

  // PRJ-0013 MAC Decision Aid
  '10.1016/j.jclinane.2021.110556': '10.1016/j.jclinane.2022.110648',

  // PRJ-0014 Gansner PIU Pre-COVID
  '10.1016/j.psychres.2020.113172': '10.1016/j.psychres.2020.113428',

  // PRJ-0015 Gansner PIU COVID
  '10.1007/s10578-022-01348-3': '10.1007/s10578-022-01313-y',

  // PRJ-0016 Gansner Social Media
  '10.3389/frcha.2024.1373561': '10.3389/frcha.2024.1369810',

  // PRJ-0018 KePROS
  '10.1093/schizbullopen/sgae010': '10.1093/schizbullopen/sgae009',

  // PRJ-0019 TMS
  '10.2196/46292': '10.2196/46491',

  // PRJ-0022 Apple SensorKit
  '10.1159/000533754': '10.1159/000530698',

  // PRJ-0023 IPC Clinic
  '10.1037/fsh0000818': '10.1037/fsh0001001',

  // PRJ-0025/26 Mindfulness
  '10.1089/jicm.2023.0696': '10.1089/jicm.2023.0698',

  // PRJ-0029 Melcher COVID-19
  '10.1080/07448481.2021.1912307': '10.1080/07448481.2021.1905650',

  // PRJ-0030 Melcher Engagement
  '10.1016/j.psychres.2022.114480': '10.1016/j.psychres.2022.114470',

  // PRJ-0031 Perinatal
  '10.1007/s40501-023-00288-2': '10.1007/s40501-023-00288-4',

  // PRJ-0033 iTECSC
  '10.2196/47146': '10.2196/47006'
};

// Normalize DOI for comparison
function normalizeDoi(doi) {
  if (!doi) return '';
  return doi.toLowerCase().trim()
    .replace(/^https?:\/\/doi\.org\//, '')
    .replace(/^doi:/, '');
}

// Extract DOIs from citation text
function extractDoisFromCitation(citation) {
  if (!citation) return [];
  const doiRegex = /10\.\d{4,9}\/[^\s]+/gi;
  const matches = citation.match(doiRegex) || [];
  return matches.map(d => normalizeDoi(d.replace(/[.,;)\]]+$/, '')));
}

// Simple title similarity (Jaccard-like on words)
function titleSimilarity(title1, title2) {
  if (!title1 || !title2) return 0;
  const words1 = new Set(title1.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/).filter(w => w.length > 3));
  const words2 = new Set(title2.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/).filter(w => w.length > 3));
  const intersection = new Set([...words1].filter(x => words2.has(x)));
  const union = new Set([...words1, ...words2]);
  return union.size > 0 ? intersection.size / union.size : 0;
}

async function fetchAllPublications() {
  const publications = [];
  let cursor = undefined;

  do {
    const response = await notion.databases.query({
      database_id: PUBLICATIONS_DB_ID,
      start_cursor: cursor,
      page_size: 100
    });

    for (const page of response.results) {
      const props = page.properties;
      // doi is a title field in Notion
      const doi = props.doi?.title?.[0]?.plain_text || '';
      // title is a rich_text field
      const title = props.title?.rich_text?.[0]?.plain_text || '';
      // citation is a rich_text field
      const citation = props.citation?.rich_text?.[0]?.plain_text || '';

      publications.push({
        id: page.id,
        doi,
        title,
        citation
      });
    }

    cursor = response.has_more ? response.next_cursor : undefined;
  } while (cursor);

  return publications;
}

async function fetchAllProjects() {
  const projects = [];
  let cursor = undefined;

  do {
    const response = await notion.databases.query({
      database_id: PROJECTS_DB_ID,
      start_cursor: cursor,
      page_size: 100
    });

    for (const page of response.results) {
      const props = page.properties;
      // projectID is a title field in Notion
      const projectID = props.projectID?.title?.[0]?.plain_text || '';
      // name is a rich_text field
      const name = props.name?.rich_text?.[0]?.plain_text || '';
      // publicationIDs is the relation field for publications
      const currentPubIds = (props.publicationIDs?.relation || []).map(r => r.id);

      projects.push({
        id: page.id,
        projectID,
        name,
        currentPubIds
      });
    }

    cursor = response.has_more ? response.next_cursor : undefined;
  } while (cursor);

  return projects;
}

async function main() {
  console.log('Fetching publications from Notion...');
  const publications = await fetchAllPublications();
  console.log(`  Found ${publications.length} publications\n`);

  console.log('Fetching projects from Notion...');
  const projects = await fetchAllProjects();
  console.log(`  Found ${projects.length} projects\n`);

  // Build lookup maps for publications
  const pubByDoi = new Map();
  const pubByCitationDoi = new Map();
  const pubByTitle = new Map();

  for (const pub of publications) {
    // By DOI field
    if (pub.doi) {
      pubByDoi.set(normalizeDoi(pub.doi), pub);
    }

    // By DOIs in citation
    const citationDois = extractDoisFromCitation(pub.citation);
    for (const doi of citationDois) {
      if (!pubByCitationDoi.has(doi)) {
        pubByCitationDoi.set(doi, pub);
      }
    }

    // By title (lowercase, trimmed)
    if (pub.title) {
      pubByTitle.set(pub.title.toLowerCase().trim(), pub);
    }
  }

  console.log('=== MATCHING PUBLICATIONS TO PROJECTS ===\n');

  const projectUpdates = [];

  for (const [projectId, dois] of Object.entries(projectDois)) {
    const project = projects.find(p => p.projectID === projectId);
    if (!project) {
      console.log(`⚠ Project ${projectId} not found in Notion`);
      continue;
    }

    console.log(`\n${projectId}: ${project.name}`);
    console.log(`  Currently linked: ${project.currentPubIds.length} publications`);

    const matchedPubIds = new Set(project.currentPubIds);

    for (const doi of dois) {
      const normalizedDoi = normalizeDoi(doi);
      let matched = false;
      let matchedPub = null;
      let matchMethod = '';

      // Strategy 1: Direct DOI match
      matchedPub = pubByDoi.get(normalizedDoi);
      if (matchedPub) {
        matchMethod = 'DOI field';
        matched = true;
      }

      // Strategy 2: Check for known DOI corrections
      if (!matched && doiCorrections[doi]) {
        const correctedDoi = normalizeDoi(doiCorrections[doi]);
        matchedPub = pubByDoi.get(correctedDoi);
        if (matchedPub) {
          matchMethod = `DOI correction (${doi} -> ${doiCorrections[doi]})`;
          matched = true;
        }
      }

      // Strategy 3: DOI in citation field
      if (!matched) {
        matchedPub = pubByCitationDoi.get(normalizedDoi);
        if (matchedPub) {
          matchMethod = 'DOI in citation';
          matched = true;
        }
      }

      // Strategy 4: Similar DOI (one digit off)
      if (!matched) {
        for (const [existingDoi, pub] of pubByDoi.entries()) {
          // Check if DOIs are very similar (same prefix, similar suffix)
          const prefix1 = normalizedDoi.split('/')[0];
          const prefix2 = existingDoi.split('/')[0];
          if (prefix1 === prefix2) {
            const suffix1 = normalizedDoi.split('/').slice(1).join('/');
            const suffix2 = existingDoi.split('/').slice(1).join('/');
            // Check Levenshtein-like similarity
            let diffs = 0;
            const maxLen = Math.max(suffix1.length, suffix2.length);
            for (let i = 0; i < maxLen; i++) {
              if (suffix1[i] !== suffix2[i]) diffs++;
            }
            if (diffs <= 2 && diffs > 0) {
              matchedPub = pub;
              matchMethod = `Similar DOI (${existingDoi})`;
              matched = true;
              break;
            }
          }
        }
      }

      if (matched) {
        const alreadyLinked = matchedPubIds.has(matchedPub.id);
        if (alreadyLinked) {
          console.log(`  ✓ ${doi} - already linked`);
        } else {
          console.log(`  + ${doi} - MATCHED via ${matchMethod}`);
          console.log(`      -> "${matchedPub.title?.slice(0, 60)}..."`);
          matchedPubIds.add(matchedPub.id);
        }
      } else {
        console.log(`  ✗ ${doi} - NOT FOUND`);
      }
    }

    // Check if we need to update this project
    const newPubIds = [...matchedPubIds];
    if (newPubIds.length > project.currentPubIds.length) {
      projectUpdates.push({
        projectId: project.id,
        projectName: projectId,
        pubIds: newPubIds
      });
    }
  }

  console.log('\n\n=== UPDATING NOTION ===\n');

  if (projectUpdates.length === 0) {
    console.log('No updates needed - all publications already linked.');
    return;
  }

  console.log(`${projectUpdates.length} projects need updates:\n`);

  for (const update of projectUpdates) {
    console.log(`Updating ${update.projectName} with ${update.pubIds.length} publications...`);

    try {
      await notion.pages.update({
        page_id: update.projectId,
        properties: {
          publicationIDs: {
            relation: update.pubIds.map(id => ({ id }))
          }
        }
      });
      console.log(`  ✓ Updated successfully`);
    } catch (error) {
      console.error(`  ✗ Error: ${error.message}`);
    }

    // Rate limiting
    await new Promise(resolve => setTimeout(resolve, 350));
  }

  console.log('\n=== COMPLETE ===');
}

main().catch(console.error);
