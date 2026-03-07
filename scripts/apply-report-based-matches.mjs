// Apply project-publication matches based on detailed report analysis
// Uses author names and paper content from the analysis reports
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

// Detailed project-publication mappings based on report analysis
// These are derived from author analysis, funding sources, IRB numbers, and explicit paper content
const reportBasedMatches = {
  // PRJ-0009/0010: College Student Mental Health Studies
  // From reports: Currey papers about college students with PSS >= 14
  'PRJ-0009': {
    name: 'College Student V1',
    authorPatterns: ['Currey.*college', 'college.*symptom improvement'],
    titlePatterns: ['Digital Phenotyping Data to Predict Symptom Improvement', 'Digital phenotyping correlations in larger mental health'],
    doiList: ['10.2196/37954', '10.2196/39258', '10.1192/bjo.2022.507', '10.1007/s41347-023-00310-9']
  },
  'PRJ-0010': {
    name: 'College Student V2',
    authorPatterns: ['Currey.*college'],
    titlePatterns: ['Digital Phenotyping Data to Predict Symptom Improvement'],
    doiList: ['10.2196/37954', '10.2196/39258', '10.1192/bjo.2022.507']
  },

  // PRJ-0011: Boston Schizophrenia Digital Phenotyping
  // From reports: Liu 2019, Henson papers, Ranjan papers at BIDMC
  'PRJ-0011': {
    name: 'Boston Schizophrenia',
    authorPatterns: ['Liu.*schizophrenia.*cognitive', 'Henson.*anomaly.*schizophrenia', 'Ranjan.*schizophrenia'],
    titlePatterns: ['Assessing the potential of longitudinal smartphone', 'Anomaly detection to predict relapse', 'Longitudinal symptom changes'],
    doiList: ['10.1016/j.scog.2019.100144', '10.1038/s41398-020-01123-7', '10.1016/j.schres.2022.02.031', '10.3389/fpsyt.2019.00652', '10.1038/s41537-020-0100-1']
  },

  // PRJ-0012: Parkinson's Disease
  // From reports: Kalinich paper
  'PRJ-0012': {
    name: "Parkinson's",
    authorPatterns: ['Kalinich.*Parkinson'],
    titlePatterns: ['Applying machine learning to smartphone based cognitive assessment.*Parkinson', 'Smartphone-Based Neuropsychological Assessment'],
    doiList: ['10.1016/j.scog.2021.100216', '10.1017/s1355617721000503']
  },

  // PRJ-0014: Gansner PIU Pre-COVID
  // From report: Gansner 2020 paper
  'PRJ-0014': {
    name: 'Gansner PIU Pre-COVID',
    authorPatterns: ['Gansner.*pilot.*ecological momentary'],
    titlePatterns: ['pilot study using ecological momentary assessment.*problematic internet'],
    doiList: ['10.1016/j.psychres.2020.113428']
  },

  // PRJ-0015: Gansner PIU COVID Cohort
  // From report: Gansner 2022 papers (JMIR and Child Psychiatry)
  'PRJ-0015': {
    name: 'Gansner PIU COVID',
    authorPatterns: ['Gansner.*COVID.*PIU', 'Gansner.*Piloting Smartphone'],
    titlePatterns: ['Problematic Internet Use Before and During the COVID', 'Piloting Smartphone Digital Phenotyping to Understand Problematic'],
    doiList: ['10.2196/33114', '10.1007/s10578-022-01313-y']
  },

  // PRJ-0016: Gansner Social Media/Substance
  // From report: Gansner 2024 Frontiers paper
  'PRJ-0016': {
    name: 'Gansner Social Media/Substance',
    authorPatterns: ['Gansner.*social media.*substance'],
    titlePatterns: ['Exploring relationships between social media use.*drug'],
    doiList: ['10.3389/frcha.2024.1369810']
  },

  // PRJ-0017: SMART Cognitive Training
  // From report: Li 2021 paper (Shanghai/Florida A&M)
  'PRJ-0017': {
    name: 'SMART Cognitive',
    authorPatterns: ['Li.*SMART.*cognitive', 'Enhancing attention.*clinical high risk'],
    titlePatterns: ['Enhancing attention and memory of individuals at clinical high risk'],
    doiList: ['10.1016/j.ajp.2021.102587']
  },

  // PRJ-0019: TMS Digital Phenotyping
  // From report: Kelkar 2023 paper
  'PRJ-0019': {
    name: 'TMS',
    authorPatterns: ['Kelkar.*TMS'],
    titlePatterns: ['Utility of Smartphone-Based Digital Phenotyping Biomarkers.*TMS', 'Predicting TMS Treatment Response'],
    doiList: ['10.2196/40197']
  },

  // PRJ-0021: Hallucinations EMA
  // From report: Wright 2024 paper
  'PRJ-0021': {
    name: 'Hallucinations EMA',
    authorPatterns: ['Wright.*hallucination'],
    titlePatterns: ['Experiencing hallucinations in daily life', 'hallucination.*metacognition'],
    doiList: ['10.1016/j.schres.2022.12.023']
  },

  // PRJ-0024: Minimally Guided mHealth
  // From report: Macrynikola 2025a Study 1
  'PRJ-0024': {
    name: 'Minimally Guided mHealth',
    authorPatterns: ['Macrynikola.*minimally guided', 'Camacho.*guided.*coaching'],
    titlePatterns: ['impact of guided versus supportive coaching', 'digital working alliance'],
    doiList: ['10.1177/14604582231215872']
  },

  // PRJ-0025/0026: Mindfulness Studies
  // From report: Gray 2024 paper
  'PRJ-0025': {
    name: 'Mindfulness Iter 1',
    authorPatterns: ['Gray.*mindfulness'],
    titlePatterns: ['Digital Phenotyping in Understanding Mindfulness App Engagement'],
    doiList: ['10.1089/jicm.2023.0698']
  },
  'PRJ-0026': {
    name: 'Mindfulness Iter 2',
    authorPatterns: ['Gray.*mindfulness'],
    titlePatterns: ['Digital Phenotyping in Understanding Mindfulness App Engagement'],
    doiList: ['10.1089/jicm.2023.0698']
  },

  // PRJ-0027: Lin Adolescent Digital Media
  // From report: Lin 2021 thesis
  'PRJ-0027': {
    name: 'Lin Adolescent',
    authorPatterns: ['Lin.*digital media.*adolescent'],
    titlePatterns: ['digital phenotyping to investigate.*digital media'],
    doiList: ['28413045'] // Thesis ID in Notion
  },

  // PRJ-0028: COVID-19 College Student
  // From report: Patel 2022 Frontiers paper
  'PRJ-0028': {
    name: 'COVID-19 College Student',
    authorPatterns: ['Patel.*COVID.*college'],
    titlePatterns: ['Neuropsychiatric Sequalae of Perceived COVID-19 Exposure'],
    doiList: ['10.3389/fpsyt.2021.788926']
  },

  // PRJ-0029: Melcher COVID-19 College
  // From report: Melcher 2021 JACH paper
  'PRJ-0029': {
    name: 'Melcher COVID College',
    authorPatterns: ['Melcher.*COVID.*college', 'Melcher.*student mental health'],
    titlePatterns: ['Digital phenotyping of student mental health during COVID'],
    doiList: ['10.1080/07448481.2021.1905650']
  },

  // PRJ-0030: Melcher Engagement
  // From report: Melcher 2022 Psychiatry Research paper
  'PRJ-0030': {
    name: 'Melcher Engagement',
    authorPatterns: ['Melcher.*engagement'],
    titlePatterns: ['Assessing engagement features in an observational'],
    doiList: ['10.1016/j.psychres.2022.114470']
  },

  // PRJ-0031: Perinatal Depression
  // From report: Emerson 2023 review with case study, Feldman commentary
  'PRJ-0031': {
    name: 'Perinatal Depression',
    authorPatterns: ['Emerson.*perinatal', 'Feldman.*postpartum'],
    titlePatterns: ['Smartphone App Interventions for Perinatal Depression', 'Digital mental health for postpartum'],
    doiList: ['10.1007/s40501-023-00301-w', '10.1038/s41746-023-00756-4']
  },

  // PRJ-0032: Das SHARP-NIMHANS Cognitive
  // From report: Das 2025 paper
  'PRJ-0032': {
    name: 'Das SHARP-NIMHANS',
    authorPatterns: ['Das.*SHARP.*NIMHANS', 'Das.*cognitive.*schizophrenia'],
    titlePatterns: ['Digital phenotyping correlates of cognitive performance in schizophrenia'],
    doiList: ['10.1016/j.schres.2025.07.009']
  }
};

// Find publication by DOI
function findPubByDoi(doi) {
  return publications.find(p => p.doi?.toLowerCase() === doi.toLowerCase());
}

// Find publications matching patterns
function findPubsByPattern(patterns, field) {
  const matches = [];
  for (const pub of publications) {
    const text = pub[field] || '';
    for (const pattern of patterns) {
      if (new RegExp(pattern, 'i').test(text)) {
        if (!matches.find(m => m.id === pub.id)) {
          matches.push(pub);
        }
        break;
      }
    }
  }
  return matches;
}

async function updateProjectPublications(projectId, publicationIds) {
  const project = projects.find(p => p.projectID === projectId);
  if (!project) return false;

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
    console.error(`  Error: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('=== APPLYING REPORT-BASED PROJECT-PUBLICATION MATCHES ===\n');
  console.log('Based on detailed analysis from /source-data/reports/\n');

  const updates = [];

  for (const [projectId, config] of Object.entries(reportBasedMatches)) {
    const project = projects.find(p => p.projectID === projectId);
    if (!project) {
      console.log(`⚠ ${projectId}: Not found`);
      continue;
    }

    const currentIds = new Set((project.publications || []).map(p => p.id));
    const matchedPubs = new Set();

    // Add publications by exact DOI
    for (const doi of config.doiList || []) {
      const pub = findPubByDoi(doi);
      if (pub) {
        matchedPubs.add(pub.id);
      }
    }

    // Add publications by title patterns
    const titleMatches = findPubsByPattern(config.titlePatterns || [], 'title');
    titleMatches.forEach(p => matchedPubs.add(p.id));

    // Combine with existing
    const allIds = new Set([...currentIds, ...matchedPubs]);
    const newMatches = [...matchedPubs].filter(id => !currentIds.has(id));

    console.log(`${projectId} (${config.name}):`);
    console.log(`  Current: ${currentIds.size}, New matches: ${newMatches.length}`);

    if (newMatches.length > 0) {
      for (const id of newMatches) {
        const pub = publications.find(p => p.id === id);
        console.log(`    + ${pub?.doi}: ${pub?.title?.slice(0, 50)}...`);
      }
      updates.push({
        projectId,
        name: config.name,
        notionId: project.id,
        allPubIds: [...allIds]
      });
    }
    console.log();
  }

  if (updates.length === 0) {
    console.log('No new matches to apply.');
    return;
  }

  console.log(`\n=== UPDATING ${updates.length} PROJECTS ===\n`);

  for (const update of updates) {
    console.log(`Updating ${update.projectId} (${update.name})...`);
    const success = await updateProjectPublications(update.projectId, update.allPubIds);
    if (success) console.log(`  ✓ Success`);
    await new Promise(r => setTimeout(r, 350));
  }

  console.log('\n=== COMPLETE ===');
}

main().catch(console.error);
