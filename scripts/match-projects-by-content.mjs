// Match projects to publications based on content/keywords
// Uses Notion publications database as the authoritative source
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

// Define project-specific keywords for matching
// These are based on project names, descriptions, and known study identifiers
const projectKeywords = {
  'PRJ-0001': {
    name: 'AMP SCZ',
    keywords: ['AMP SCZ', 'AMP-SCZ', 'AMP® SCZ', 'Accelerating Medicines Partnership.*Schizophrenia'],
    exclude: ['KePROS', 'Kenya'] // KePROS is separate even though it aligns with AMP SCZ
  },
  'PRJ-0002': {
    name: 'SHARP',
    keywords: ['SHARP', 'Smartphone Health Assessment for Relapse Prevention'],
    exclude: []
  },
  'PRJ-0003': {
    name: 'Digital Clinic / TECC',
    keywords: ['TECC', 'Technology Enabled Clinical Care', 'Digital Clinic'],
    exclude: []
  },
  'PRJ-0004': {
    name: 'Mayo/JHU Mood Disorders',
    keywords: ['Mayo Clinic', 'Johns Hopkins.*mood', 'mood disorder.*Mayo', 'bipolar.*Mayo'],
    exclude: []
  },
  'PRJ-0005': {
    name: 'VA Veterans/Homeless',
    keywords: ['VA Greater Los Angeles', 'veteran.*homeless', 'homeless.*veteran', 'Desert Pacific MIRECC'],
    exclude: []
  },
  'PRJ-0006': {
    name: 'Mount Sinai Mood & Anxiety',
    keywords: ['Mount Sinai', 'Icahn School of Medicine'],
    exclude: []
  },
  'PRJ-0007': {
    name: 'AMHI',
    keywords: ['AMHI', 'Appalachia Mind Health Initiative', 'West Virginia.*depression'],
    exclude: []
  },
  'PRJ-0008': {
    name: 'Temple Older Adults',
    keywords: ['Temple University.*older', 'older adult.*Temple', 'digital phenotyping.*older adult'],
    exclude: []
  },
  'PRJ-0009': {
    name: 'College Student V1',
    keywords: ['college student.*mental health', 'student mental health.*digital'],
    exclude: []
  },
  'PRJ-0010': {
    name: 'College Student V2',
    keywords: ['college student.*mental health', 'student mental health.*digital'],
    exclude: []
  },
  'PRJ-0011': {
    name: 'Boston Schizophrenia',
    keywords: ['Boston.*schizophrenia', 'BIDMC.*schizophrenia', 'schizophrenia.*digital phenotyping.*Boston'],
    exclude: ['SHARP', 'India', 'Kenya']
  },
  'PRJ-0012': {
    name: "Parkinson's",
    keywords: ['Parkinson', 'movement disorder'],
    exclude: []
  },
  'PRJ-0013': {
    name: 'MAC Decision Aid',
    keywords: ['MAC', 'monitored anesthesia care', 'anesthesia decision aid', 'breast.*surgery'],
    exclude: []
  },
  'PRJ-0014': {
    name: 'Gansner PIU Pre-COVID',
    keywords: ['Gansner.*PIU', 'problematic internet use.*adolescent', 'PIU.*adolescent'],
    exclude: ['COVID']
  },
  'PRJ-0015': {
    name: 'Gansner PIU COVID',
    keywords: ['Gansner', 'problematic internet use.*COVID', 'PIU.*COVID'],
    exclude: []
  },
  'PRJ-0016': {
    name: 'Gansner Social Media/Substance',
    keywords: ['Gansner.*social media', 'social media.*substance', 'drug.*social media'],
    exclude: []
  },
  'PRJ-0017': {
    name: 'SMART Cognitive',
    keywords: ['SMART.*cognitive', 'cognitive training.*schizophrenia'],
    exclude: []
  },
  'PRJ-0018': {
    name: 'KePROS',
    keywords: ['KePROS', 'Kenya Psychosis', 'Kenya.*psychosis'],
    exclude: []
  },
  'PRJ-0019': {
    name: 'TMS',
    keywords: ['TMS.*digital', 'transcranial magnetic stimulation'],
    exclude: []
  },
  'PRJ-0020': {
    name: 'Bulgaria SUD',
    keywords: ['Bulgaria', 'substance use disorder.*Bulgaria'],
    exclude: []
  },
  'PRJ-0021': {
    name: 'Hallucinations EMA',
    keywords: ['hallucination.*EMA', 'auditory hallucination'],
    exclude: []
  },
  'PRJ-0022': {
    name: 'Apple SensorKit',
    keywords: ['Apple SensorKit', 'SensorKit'],
    exclude: []
  },
  'PRJ-0023': {
    name: 'IPC Clinic',
    keywords: ['IPC', 'Integrated Primary Care', 'primary care.*depression'],
    exclude: []
  },
  'PRJ-0024': {
    name: 'Minimally Guided mHealth',
    keywords: ['minimally guided', 'mHealth.*guided'],
    exclude: []
  },
  'PRJ-0025': {
    name: 'Mindfulness Study Iter 1',
    keywords: ['mindfulness.*digital phenotyping', 'digital phenotyping.*mindfulness'],
    exclude: []
  },
  'PRJ-0026': {
    name: 'Mindfulness Study Iter 2',
    keywords: ['mindfulness.*digital phenotyping', 'digital phenotyping.*mindfulness'],
    exclude: []
  },
  'PRJ-0027': {
    name: 'Lin Adolescent',
    keywords: ['Lin.*adolescent', 'adolescent.*digital media'],
    exclude: []
  },
  'PRJ-0028': {
    name: 'COVID College Student',
    keywords: ['COVID.*college', 'college.*COVID', 'pandemic.*student'],
    exclude: []
  },
  'PRJ-0029': {
    name: 'Melcher COVID College',
    keywords: ['Melcher.*COVID', 'COVID.*college.*Melcher'],
    exclude: []
  },
  'PRJ-0030': {
    name: 'Melcher Engagement',
    keywords: ['Melcher.*engagement', 'engagement.*Melcher', 'app engagement'],
    exclude: []
  },
  'PRJ-0031': {
    name: 'Perinatal Depression',
    keywords: ['perinatal', 'postpartum', 'pregnancy.*depression'],
    exclude: []
  },
  'PRJ-0032': {
    name: 'Das SHARP-NIMHANS',
    keywords: ['NIMHANS', 'Das.*SHARP'],
    exclude: []
  },
  'PRJ-0033': {
    name: 'iTECSC',
    keywords: ['iTECSC', 'Implementing Technologies to Enhance.*Specialty Care', 'coordinated specialty care'],
    exclude: []
  }
};

// Check if text matches any keyword patterns
function matchesKeywords(text, keywords, exclude = []) {
  if (!text) return false;
  const lowerText = text.toLowerCase();

  // Check excludes first
  for (const ex of exclude) {
    if (new RegExp(ex, 'i').test(text)) return false;
  }

  // Check keywords
  for (const kw of keywords) {
    if (new RegExp(kw, 'i').test(text)) return true;
  }
  return false;
}

// Main matching function
function findMatchingPublications(projectId, projectConfig) {
  const matches = [];

  for (const pub of publications) {
    // Check title and mindlampRelevance for keyword matches
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

// Run the matching
console.log('=== CONTENT-BASED PROJECT-PUBLICATION MATCHING ===\n');
console.log('Using Notion publications database as authoritative source\n');

const allMatches = {};

for (const [projectId, config] of Object.entries(projectKeywords)) {
  const matches = findMatchingPublications(projectId, config);
  allMatches[projectId] = matches;

  console.log(`\n${projectId}: ${config.name}`);
  console.log(`  Found ${matches.length} potential matches:`);
  matches.forEach(m => {
    console.log(`    - ${m.doi}: ${m.title?.slice(0, 50)}...`);
  });
}

// Compare with what's currently linked
console.log('\n\n=== COMPARISON WITH CURRENT LINKS ===\n');

for (const project of projects) {
  const projectId = project.projectID;
  const currentLinks = project.publications || [];
  const suggestedMatches = allMatches[projectId] || [];

  const currentIds = new Set(currentLinks.map(p => p.id));
  const suggestedIds = new Set(suggestedMatches.map(p => p.id));

  const newToAdd = suggestedMatches.filter(p => !currentIds.has(p.id));
  const toRemove = currentLinks.filter(p => !suggestedIds.has(p.id));

  if (newToAdd.length > 0 || toRemove.length > 0) {
    console.log(`${projectId}: ${project.name?.slice(0, 40)}...`);
    console.log(`  Currently linked: ${currentLinks.length}`);
    console.log(`  Suggested matches: ${suggestedMatches.length}`);
    if (newToAdd.length > 0) {
      console.log(`  + To add: ${newToAdd.map(p => p.doi).join(', ')}`);
    }
    if (toRemove.length > 0) {
      console.log(`  - To review (may not match): ${toRemove.map(p => p.doi).join(', ')}`);
    }
    console.log();
  }
}

console.log('\n=== NOTE ===');
console.log('This is a keyword-based matching. Review the matches before applying.');
console.log('Some publications may relate to multiple projects.');
console.log('Manual verification recommended for accuracy.');
