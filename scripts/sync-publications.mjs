// scripts/sync-publications.mjs
// Syncs publications from Notion database for the Publications page

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
  publications: process.env.NOTION_PUBLICATIONS_DB_ID || '2b233133d8a2802786f3c1dd4d802d1e',
  projects: process.env.NOTION_PROJECTS_DB_ID || '2b233133d8a280d79629d7c48f9737a6',
  tags: process.env.NOTION_TAGS_DB_ID || '2b233133d8a2801bad2ccdd3c9904dac'
};

// --- Validation ---
if (!process.env.NOTION_TOKEN) {
  console.error('NOTION_TOKEN is not set. Skipping Notion sync.');
  console.error('To sync publications, set NOTION_TOKEN environment variable.');
  // Create empty publications file so build doesn't fail
  const outDir = path.join(__dirname, '..', 'static', 'data');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  const outPath = path.join(outDir, 'publications.json');
  if (!fs.existsSync(outPath)) {
    fs.writeFileSync(outPath, '[]', 'utf8');
    console.log('Created empty publications.json');
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

function getUrl(prop) {
  return prop?.url || '';
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
    projectIDs: getRelation(props['projectIDs'])
  };
}

function parseProject(page) {
  const props = page.properties;
  return {
    id: page.id,
    projectID: getTitle(props['projectID']),
    name: getRichText(props['name']),
    tagIDs: getRelation(props['tagIDs'])
  };
}

function parsePublication(page, tagMap, projectMap) {
  const props = page.properties;

  // Extract relation IDs
  const projectIDs = getRelation(props['projectIDs']);

  // Resolve projects (simplified - just name for display)
  const projects = projectIDs
    .map(id => projectMap.get(id))
    .filter(Boolean)
    .map(p => ({ id: p.id, projectID: p.projectID, name: p.name }));

  // Get tags through projects (Publications → Projects → Tags)
  const tagIDsSet = new Set();
  projectIDs.forEach(projectId => {
    const project = projectMap.get(projectId);
    if (project && project.tagIDs) {
      project.tagIDs.forEach(tagId => tagIDsSet.add(tagId));
    }
  });

  const tags = Array.from(tagIDsSet)
    .map(id => tagMap.get(id))
    .filter(Boolean)
    .map(t => ({ id: t.id, tagID: t.tagID, name: t.name }));

  return {
    id: page.id,
    doi: getTitle(props['doi']),
    title: getRichText(props['title']),
    citation: getRichText(props['citation']),
    abstract: getRichText(props['abstract']),
    year: getNumber(props['year']),
    url: getUrl(props['url']),
    mindlampRelevance: getRichText(props['mindlampRelevence']),
    projects,
    tags
  };
}

// --- Main sync function ---
async function main() {
  console.log('Starting Notion publications sync...\n');

  // Fetch databases
  console.log('Fetching databases...');
  const [tagsPages, projectsPages, publicationsPages] = await Promise.all([
    fetchAllPages(DB_IDS.tags),
    fetchAllPages(DB_IDS.projects),
    fetchAllPages(DB_IDS.publications)
  ]);

  console.log(`  Tags: ${tagsPages.length}`);
  console.log(`  Projects: ${projectsPages.length}`);
  console.log(`  Publications: ${publicationsPages.length}\n`);

  // Parse and build lookup maps
  console.log('Building lookup maps...');
  const tags = tagsPages.map(parseTag);
  const projects = projectsPages.map(parseProject);

  const tagMap = new Map(tags.map(t => [t.id, t]));
  const projectMap = new Map(projects.map(p => [p.id, p]));

  // Parse publications with resolved relations
  console.log('Resolving publication relationships...');
  const publications = publicationsPages
    .map(page => parsePublication(page, tagMap, projectMap))
    .filter(p => p.doi && p.title);

  console.log(`  Resolved ${publications.length} publications\n`);

  // Write output file
  const outDir = path.join(__dirname, '..', 'static', 'data');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const outPath = path.join(outDir, 'publications.json');
  fs.writeFileSync(outPath, JSON.stringify(publications, null, 2), 'utf8');
  console.log(`Wrote ${publications.length} publications to publications.json`);

  console.log('\nSync complete!\n');
}

main().catch((err) => {
  console.error('Sync failed:', err);
  process.exit(1);
});
