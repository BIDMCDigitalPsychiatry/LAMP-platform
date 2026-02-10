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

// --- Initialize Notion client ---
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
  notionVersion: "2022-06-28"
});

// --- Database IDs ---
const DB_IDS = {
  projects: process.env.NOTION_PROJECTS_DB_ID || '2b233133d8a280d79629d7c48f9737a6',
  publications: process.env.NOTION_PUBLICATIONS_DB_ID || '2b233133d8a2802786f3c1dd4d802d1e',
  tags: process.env.NOTION_TAGS_DB_ID || '2b233133d8a2801bad2ccdd3c9904dac'
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
  return {
    id: page.id,
    tagID: getTitle(props['tagID']),
    name: getTitle(props['tagID']),
    description: getRichText(props['description'])
  };
}

function parsePublication(page) {
  const props = page.properties;
  return {
    id: page.id,
    doi: getTitle(props['doi']),
    title: getRichText(props['title']),
    year: getNumber(props['year']),
    url: props['url']?.url || ''
  };
}

function parseProject(page, tagMap, pubMap) {
  const props = page.properties;

  // Extract relation IDs
  const tagIDs = getRelation(props['tagIDs']);
  const pubIDs = getRelation(props['publicationIDs']);

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

  return {
    id: page.id,
    projectID: getTitle(props['projectID']),
    name: getRichText(props['name']),
    shortDescription: getRichText(props['shortDescription']),
    mindLAMPFeatures: getRichText(props['mindLAMPFeatures']),
    institutions: getRichText(props['institutions']),
    countries: getMultiSelect(props['country']),
    status: getSelect(props['status']),
    start: getNumber(props['start']),
    end: getNumber(props['end']),
    participants: getNumber(props['participants']),
    studyDuration: getRichText(props['studyDuration']),
    projectDuration: getRichText(props['projectDuration']),
    population: getRichText(props['population']),
    ageRange: getRichText(props['ageRange']),
    irb: getRichText(props['IRB']),
    funding: getRichText(props['funding']),
    tags,
    publications
  };
}

// --- Main sync function ---
async function main() {
  console.log('Starting Notion projects sync...\n');

  // Fetch databases
  console.log('Fetching databases...');
  const [tagsPages, publicationsPages, projectsPages] = await Promise.all([
    fetchAllPages(DB_IDS.tags),
    fetchAllPages(DB_IDS.publications),
    fetchAllPages(DB_IDS.projects)
  ]);

  console.log(`  Tags: ${tagsPages.length}`);
  console.log(`  Publications: ${publicationsPages.length}`);
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

  // Sort projects: active first, then by start date descending
  projects.sort((a, b) => {
    // Active projects first
    if (a.status === 'active' && b.status !== 'active') return -1;
    if (a.status !== 'active' && b.status === 'active') return 1;
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
