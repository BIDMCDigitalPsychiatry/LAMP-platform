// Apply clear, unambiguous project-publication matches to Notion
// Only matches where project name/acronym is explicitly mentioned
import { Client } from '@notionhq/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load .env
const envPath = path.join(__dirname, '..', '.env');
const envContent = fs.readFileSync(envPath, 'utf8');
const envVars = {};
envContent.split('\n').forEach(line => {
  const [key, ...val] = line.split('=');
  if (key && val.length) envVars[key.trim()] = val.join('=').trim();
});

const notion = new Client({ auth: envVars.NOTION_TOKEN });
const PROJECTS_DB_ID = '2b233133d8a280d79629d7c48f9737a6';

// Load synced data
const publications = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'static', 'data', 'publications.json'), 'utf8'));
const projects = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'static', 'data', 'projects.json'), 'utf8'));

// Clear, unambiguous matches - only where project name is explicitly mentioned
// These are conservative matches based on explicit project name/acronym references
const clearMatches = {
  'PRJ-0001': {
    name: 'AMP SCZ',
    // Only publications that explicitly mention "AMP SCZ" or "Accelerating Medicines Partnership Schizophrenia"
    keywords: ['AMP SCZ', 'AMP-SCZ', 'AMP® SCZ', 'Accelerating Medicines Partnership.*Schizophrenia'],
    exclude: ['KePROS', 'Kenya Psychosis-Risk'] // KePROS aligns but is separate project
  },
  'PRJ-0002': {
    name: 'SHARP',
    // Only publications that explicitly mention "SHARP" study
    keywords: ['\\bSHARP\\b', 'Smartphone Health Assessment for Relapse Prevention'],
    exclude: []
  },
  'PRJ-0003': {
    name: 'Digital Clinic / TECC',
    // Only publications that explicitly mention "TECC" or "Digital Clinic" at BIDMC
    keywords: ['\\bTECC\\b', 'Technology Enabled Clinical Care', 'Digital Clinic'],
    exclude: []
  },
  'PRJ-0007': {
    name: 'AMHI',
    // Only publications that explicitly mention "AMHI"
    keywords: ['\\bAMHI\\b', 'Appalachia Mind Health Initiative'],
    exclude: []
  },
  'PRJ-0008': {
    name: 'Temple Older Adults',
    // Publications from Temple about older adults
    keywords: ['Temple.*older adult', 'older adult.*Temple', 'Hackett.*older', 'Giovannetti.*older'],
    exclude: []
  },
  'PRJ-0018': {
    name: 'KePROS',
    // Only publications that explicitly mention "KePROS"
    keywords: ['\\bKePROS\\b', 'Kenya Psychosis-Risk Outcomes Study'],
    exclude: []
  },
  'PRJ-0020': {
    name: 'Bulgaria SUD',
    // Only the Bulgaria substance use study
    keywords: ['Bulgaria', 'Bulgarian Journal'],
    exclude: []
  },
  'PRJ-0022': {
    name: 'Apple SensorKit',
    // Only publications about Apple SensorKit
    keywords: ['Apple SensorKit', 'SensorKit'],
    exclude: []
  },
  'PRJ-0033': {
    name: 'iTECSC',
    // Only publications that explicitly mention "iTECSC" or coordinated specialty care implementation
    keywords: ['\\biTECSC\\b', 'Implementing Technologies to Enhance.*Coordinated Specialty Care'],
    exclude: []
  }
};

function matchesKeywords(text, keywords, exclude = []) {
  if (!text) return false;

  for (const ex of exclude) {
    if (new RegExp(ex, 'i').test(text)) return false;
  }

  for (const kw of keywords) {
    if (new RegExp(kw, 'i').test(text)) return true;
  }
  return false;
}

function findMatches(projectConfig) {
  const matches = [];

  for (const pub of publications) {
    const searchText = [pub.title, pub.mindlampRelevance, pub.abstract, pub.citation].filter(Boolean).join(' ');

    if (matchesKeywords(searchText, projectConfig.keywords, projectConfig.exclude)) {
      matches.push({
        id: pub.id,
        doi: pub.doi,
        title: pub.title
      });
    }
  }

  return matches;
}

async function updateProjectPublications(projectId, publicationIds) {
  const project = projects.find(p => p.projectID === projectId);
  if (!project) {
    console.log(`  Project ${projectId} not found`);
    return false;
  }

  try {
    await notion.pages.update({
      page_id: project.id,
      properties: {
        publicationIDs: {
          relation: publicationIds.map(id => ({ id }))
        }
      }
    });
    return true;
  } catch (error) {
    console.error(`  Error updating ${projectId}: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('=== APPLYING CLEAR PROJECT-PUBLICATION MATCHES ===\n');
  console.log('Only applying matches where project name/acronym is explicitly mentioned\n');

  const updates = [];

  for (const [projectId, config] of Object.entries(clearMatches)) {
    const matches = findMatches(config);
    const project = projects.find(p => p.projectID === projectId);

    if (!project) {
      console.log(`⚠ ${projectId} (${config.name}): Project not found in Notion`);
      continue;
    }

    const currentIds = new Set((project.publications || []).map(p => p.id));
    const matchIds = new Set(matches.map(m => m.id));

    // Combine current and new matches (don't remove existing links)
    const allIds = new Set([...currentIds, ...matchIds]);

    const newMatches = matches.filter(m => !currentIds.has(m.id));

    console.log(`${projectId} (${config.name}):`);
    console.log(`  Current: ${currentIds.size} publications`);
    console.log(`  Matched: ${matches.length} publications`);

    if (newMatches.length > 0) {
      console.log(`  New to add:`);
      newMatches.forEach(m => console.log(`    + ${m.doi}: ${m.title?.slice(0, 50)}...`));
      updates.push({
        projectId,
        projectName: config.name,
        notionId: project.id,
        allPubIds: [...allIds]
      });
    } else {
      console.log(`  (No new matches to add)`);
    }
    console.log();
  }

  if (updates.length === 0) {
    console.log('No updates needed.');
    return;
  }

  console.log(`\n=== UPDATING ${updates.length} PROJECTS IN NOTION ===\n`);

  for (const update of updates) {
    console.log(`Updating ${update.projectId} (${update.projectName}) with ${update.allPubIds.length} total publications...`);

    const success = await updateProjectPublications(update.projectId, update.allPubIds);
    if (success) {
      console.log(`  ✓ Updated successfully`);
    }

    // Rate limiting
    await new Promise(resolve => setTimeout(resolve, 350));
  }

  console.log('\n=== COMPLETE ===');
  console.log('Run `npm run sync:all` to update local JSON files');
}

main().catch(console.error);
