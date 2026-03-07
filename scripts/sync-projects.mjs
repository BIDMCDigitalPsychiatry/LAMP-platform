// scripts/sync-projects.mjs
// Syncs projects from Notion database for the Project Gallery page
// Run with: NOTION_TOKEN=xxx node scripts/sync-projects.mjs

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Client } from '@notionhq/client';

// --- ESM __dirname shim ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- Initialize Notion client (old API for traditional database support) ---
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
  notionVersion: "2022-06-28"
});

// --- Database IDs ---
const DB_IDS = {
  projects: process.env.NOTION_PROJECTS_DB_ID || '2b233133d8a280d79629d7c48f9737a6',
  publications: process.env.NOTION_PUBLICATIONS_DB_ID || '2b233133d8a2802786f3c1dd4d802d1e',
  tags: process.env.NOTION_TAGS_DB_ID || '30c33133d8a280e1a48fd37bb4afb704'
};

// --- Validation ---
if (!process.env.NOTION_TOKEN) {
  console.error('NOTION_TOKEN is not set. Skipping Notion sync.');
  console.error('To sync projects, set NOTION_TOKEN environment variable.');
  // Create empty projects file so build doesn't fail
  const outDir = path.join(__dirname, '..', 'static', 'data');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  const outPath = path.join(outDir, 'projects.json');
  if (!fs.existsSync(outPath)) {
    fs.writeFileSync(outPath, '[]', 'utf8');
    console.log('Created empty projects.json');
  }
  process.exit(0);
}

// --- Helper functions for extracting data from Notion properties ---
function getTitle(prop) {
  if (!prop || !prop.title) return '';
  return prop.title.map((t) => t.plain_text).join('');
}

function getRichText(prop) {
  if (!prop || !prop.rich_text) return '';
  return prop.rich_text.map((t) => t.plain_text).join('');
}

function getNumber(prop) {
  if (!prop || typeof prop.number !== 'number') return null;
  return prop.number;
}

function getSelect(prop) {
  return prop?.select?.name || '';
}

function getMultiSelect(prop) {
  if (!prop || !prop.multi_select) return [];
  return prop.multi_select.map((o) => o.name);
}

function getRelation(prop) {
  if (!prop || !prop.relation) return [];
  return prop.relation.map((r) => r.id);
}

// --- Fetch all pages from a database ---
async function fetchAllPages(databaseId) {
  let results = [];
  let cursor = undefined;

  do {
    const response = await notion.databases.query({
      database_id: databaseId,
      page_size: 100,
      start_cursor: cursor,
    });

    results = results.concat(response.results);
    cursor = response.has_more ? response.next_cursor : undefined;
  } while (cursor);

  return results;
}

// --- Parse functions ---
function parseTag(page) {
  const props = page.properties;
  // Notion field is 'tag' (title), not 'tagID'
  const tagValue = getTitle(props['tag']);
  return {
    id: page.id,
    tagID: tagValue,
    name: tagValue,
    description: getRichText(props['description'])
  };
}

function parsePublication(page) {
  const props = page.properties;
  // 'title' is the title field in Publications data source
  // DOI may be embedded in URL or we extract from title
  const url = props['url']?.url || '';
  const doi = url.includes('doi.org/') ? url.split('doi.org/')[1] : '';
  return {
    id: page.id,
    doi: doi,
    title: getTitle(props['title']),
    year: getNumber(props['year']),
    url: url
  };
}

function getDate(prop) {
  if (!prop || !prop.date || !prop.date.start) return null;
  return prop.date.start;
}

function getYearFromDate(prop) {
  const d = getDate(prop);
  if (!d) return null;
  return parseInt(d.substring(0, 4), 10);
}

function parseProject(page, tagMap, pubMap) {
  const props = page.properties;

  // Extract relation IDs (renamed fields)
  const tagIDs = getRelation(props['Tags']);
  const pubIDs = getRelation(props['Publications']);

  // Resolve tags
  const tags = tagIDs
    .map(id => tagMap.get(id))
    .filter(Boolean)
    .map(t => ({ id: t.id, tagID: t.tagID, name: t.name }));

  // Resolve publications
  const publications = pubIDs
    .map(id => pubMap.get(id))
    .filter(Boolean)
    .map(p => ({ id: p.id, doi: p.doi, title: p.title, year: p.year, url: p.url }));

  // Extract projectID - field is rich_text type, format is "0031: Name"
  const rawProjectID = getRichText(props['Project ID']);
  const projectIDMatch = rawProjectID.match(/^(\d+)/);
  const projectID = projectIDMatch ? `PRJ-${projectIDMatch[1].padStart(4, '0')}` : rawProjectID;

  // Stage is the single status field now
  const status = getSelect(props['Stage']) || 'Active';

  return {
    id: page.id,
    projectID: projectID,
    name: getTitle(props['Name']),
    shortDescription: getRichText(props['Description']),
    mindLAMPFeatures: getRichText(props['Features Used']),
    institutions: getRichText(props['Institutions']),
    countries: getMultiSelect(props['Country']),
    status: status,
    start: getYearFromDate(props['Start Date']),
    end: getYearFromDate(props['End Date']),
    participants: getNumber(props['Participants']),
    studyDuration: getRichText(props['Study Duration']),
    population: getRichText(props['Population']),
    ageRange: getRichText(props['Age Range']),
    irb: getRichText(props['IRB']),
    funding: getRichText(props['Funding']),
    tags,
    publications
  };
}

// --- Main sync function ---
async function main() {
  console.log('Starting Notion projects sync...\n');

  // Fetch all pages from each database
  console.log('Fetching from databases...');
  const tagsPages = await fetchAllPages(DB_IDS.tags);
  console.log(`  Tags: ${tagsPages.length}`);

  const publicationsPages = await fetchAllPages(DB_IDS.publications);
  console.log(`  Publications: ${publicationsPages.length}`);

  const projectsPages = await fetchAllPages(DB_IDS.projects);
  console.log(`  Projects: ${projectsPages.length}\n`);

  // Parse and build lookup maps
  console.log('Building lookup maps...');
  const tags = tagsPages.map(parseTag);
  const publications = publicationsPages.map(parsePublication);

  const tagMap = new Map(tags.map(t => [t.id, t]));
  const pubMap = new Map(publications.map(p => [p.id, p]));

  // Parse projects with resolved relations
  console.log('Resolving project relationships...');
  const projects = projectsPages
    .map(page => parseProject(page, tagMap, pubMap))
    .filter(p => p.projectID && p.name);

  console.log(`  Resolved ${projects.length} projects\n`);

  // Sort projects: Active first, then by start date descending
  projects.sort((a, b) => {
    // Active projects first
    if (a.status === 'Active' && b.status !== 'Active') return -1;
    if (a.status !== 'Active' && b.status === 'Active') return 1;
    // Then by start date (newer first)
    return (b.start || 0) - (a.start || 0);
  });

  // Write output file
  const outDir = path.join(__dirname, '..', 'static', 'data');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const outPath = path.join(outDir, 'projects.json');
  fs.writeFileSync(outPath, JSON.stringify(projects, null, 2), 'utf8');
  console.log(`Wrote ${projects.length} projects to projects.json`);

  // Also output tags for potential filtering
  const tagsPath = path.join(outDir, 'tags.json');
  fs.writeFileSync(tagsPath, JSON.stringify(tags, null, 2), 'utf8');
  console.log(`Wrote ${tags.length} tags to tags.json`);

  console.log('\nSync complete!\n');
}

main().catch((err) => {
  console.error('Sync failed:', err);
  process.exit(1);
});
