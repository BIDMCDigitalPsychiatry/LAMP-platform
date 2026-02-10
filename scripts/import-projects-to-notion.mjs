// scripts/import-projects-to-notion.mjs
// One-time import script to populate Notion Projects database from CSV
// Run with: NOTION_TOKEN=xxx node scripts/import-projects-to-notion.mjs

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Client } from '@notionhq/client';
import { parse } from 'csv-parse/sync';

// --- ESM __dirname shim ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- Initialize Notion client ---
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
  notionVersion: "2022-06-28"
});

// --- Database IDs ---
const PROJECTS_DB_ID = process.env.NOTION_PROJECTS_DB_ID || '2b233133d8a280d79629d7c48f9737a6';
const TAGS_DB_ID = process.env.NOTION_TAGS_DB_ID || '2b233133d8a2801bad2ccdd3c9904dac';
const PUBLICATIONS_DB_ID = process.env.NOTION_PUBLICATIONS_DB_ID || '2b233133d8a2802786f3c1dd4d802d1e';

// --- Validation ---
if (!process.env.NOTION_TOKEN) {
  console.error('NOTION_TOKEN is not set');
  process.exit(1);
}

// --- Helper to fetch existing items for lookup ---
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

// --- Parse CSV ---
function parseCSV(csvPath) {
  const content = fs.readFileSync(csvPath, 'utf8');
  const records = parse(content, {
    columns: true,
    skip_empty_lines: true,
    trim: true
  });
  return records;
}

// --- Create or find tag ---
async function getOrCreateTag(tagName, tagCache) {
  const normalizedName = tagName.toLowerCase().trim().replace(/\s+/g, '-');

  if (tagCache.has(normalizedName)) {
    return tagCache.get(normalizedName);
  }

  // Search for existing tag
  const existing = await notion.databases.query({
    database_id: TAGS_DB_ID,
    filter: {
      property: 'tagID',
      title: { equals: normalizedName }
    }
  });

  if (existing.results.length > 0) {
    tagCache.set(normalizedName, existing.results[0].id);
    return existing.results[0].id;
  }

  // Create new tag
  const newTag = await notion.pages.create({
    parent: { database_id: TAGS_DB_ID },
    properties: {
      'tagID': { title: [{ text: { content: normalizedName } }] },
      'description': { rich_text: [{ text: { content: `Tag for ${tagName}` } }] }
    }
  });

  tagCache.set(normalizedName, newTag.id);
  console.log(`  Created new tag: ${normalizedName}`);
  return newTag.id;
}

// --- Find publication by DOI ---
async function findPublicationByDOI(doi, pubCache) {
  const normalizedDOI = doi.trim();

  if (pubCache.has(normalizedDOI)) {
    return pubCache.get(normalizedDOI);
  }

  const existing = await notion.databases.query({
    database_id: PUBLICATIONS_DB_ID,
    filter: {
      property: 'doi',
      title: { equals: normalizedDOI }
    }
  });

  if (existing.results.length > 0) {
    pubCache.set(normalizedDOI, existing.results[0].id);
    return existing.results[0].id;
  }

  return null;
}

// --- Create project in Notion ---
async function createProject(project, tagCache, pubCache) {
  // Parse tags
  const tagIds = [];
  if (project.tags) {
    const tagNames = project.tags.split(';').map(t => t.trim()).filter(Boolean);
    for (const tagName of tagNames) {
      const tagId = await getOrCreateTag(tagName, tagCache);
      if (tagId) tagIds.push({ id: tagId });
    }
  }

  // Parse publication DOIs and find them
  const pubIds = [];
  if (project.publicationIDs) {
    const dois = project.publicationIDs.split(';').map(d => d.trim()).filter(Boolean);
    for (const doi of dois) {
      const pubId = await findPublicationByDOI(doi, pubCache);
      if (pubId) {
        pubIds.push({ id: pubId });
      } else {
        console.log(`  Warning: Publication not found for DOI: ${doi}`);
      }
    }
  }

  // Parse countries for multi-select
  const countries = project.countries
    ? project.countries.split(';').map(c => ({ name: c.trim() })).filter(c => c.name)
    : [];

  // Build properties object
  const properties = {
    'projectID': { title: [{ text: { content: project.projectID || '' } }] },
    'name': { rich_text: [{ text: { content: project.name || '' } }] },
    'shortDescription': { rich_text: [{ text: { content: (project.shortDescription || '').slice(0, 2000) } }] },
    'mindLAMPFeatures': { rich_text: [{ text: { content: (project.mindLAMPFeatures || '').slice(0, 2000) } }] },
    'institutions': { rich_text: [{ text: { content: (project.institutions || '').slice(0, 2000) } }] },
    'country': { multi_select: countries },
    'status': { select: project.status ? { name: project.status } : null },
    'population': { rich_text: [{ text: { content: (project.population || '').slice(0, 2000) } }] },
    'ageRange': { rich_text: [{ text: { content: project.ageRange || '' } }] },
    'IRB': { rich_text: [{ text: { content: (project.IRB || '').slice(0, 2000) } }] },
    'funding': { rich_text: [{ text: { content: (project.funding || '').slice(0, 2000) } }] },
  };

  // Add numeric fields if present
  if (project.start && project.start !== 'ongoing') {
    const startYear = parseInt(project.start.split('/').pop(), 10);
    if (!isNaN(startYear)) {
      properties['start'] = { number: startYear };
    }
  }

  if (project.end && project.end !== 'ongoing') {
    const endYear = parseInt(project.end.split('/').pop(), 10);
    if (!isNaN(endYear)) {
      properties['end'] = { number: endYear };
    }
  }

  if (project.numParticipants) {
    const numStr = project.numParticipants.replace(/[^0-9]/g, '');
    const num = parseInt(numStr, 10);
    if (!isNaN(num)) {
      properties['participants'] = { number: num };
    }
  }

  if (project.lengthWeeks) {
    const weeks = parseInt(project.lengthWeeks.replace(/[^0-9]/g, ''), 10);
    if (!isNaN(weeks)) {
      properties['length (weeks)'] = { number: weeks };
    }
  }

  if (project.durationMonths) {
    const months = parseInt(project.durationMonths.replace(/[^0-9]/g, ''), 10);
    if (!isNaN(months)) {
      properties['durationMonths'] = { number: months };
    }
  }

  // Add relations
  if (tagIds.length > 0) {
    properties['tagIDs'] = { relation: tagIds };
  }

  if (pubIds.length > 0) {
    properties['publicationIDs'] = { relation: pubIds };
  }

  // Remove null select
  if (!properties['status'].select) {
    delete properties['status'];
  }

  const page = await notion.pages.create({
    parent: { database_id: PROJECTS_DB_ID },
    properties
  });

  return page;
}

// --- Main ---
async function main() {
  console.log('Starting CSV to Notion import...\n');

  // Path to CSV
  const csvPath = path.join(__dirname, '..', '..', 'publications', 'mindLAMP_projects_database.csv');

  if (!fs.existsSync(csvPath)) {
    console.error(`CSV file not found: ${csvPath}`);
    process.exit(1);
  }

  // Parse CSV
  console.log('Parsing CSV...');
  const projects = parseCSV(csvPath);
  console.log(`Found ${projects.length} projects\n`);

  // Pre-fetch existing tags and publications for caching
  console.log('Building lookup caches...');
  const tagCache = new Map();
  const pubCache = new Map();

  const existingTags = await fetchAllPages(TAGS_DB_ID);
  existingTags.forEach(page => {
    const tagID = page.properties?.tagID?.title?.[0]?.plain_text;
    if (tagID) tagCache.set(tagID, page.id);
  });
  console.log(`  Cached ${tagCache.size} existing tags`);

  const existingPubs = await fetchAllPages(PUBLICATIONS_DB_ID);
  existingPubs.forEach(page => {
    const doi = page.properties?.doi?.title?.[0]?.plain_text;
    if (doi) pubCache.set(doi, page.id);
  });
  console.log(`  Cached ${pubCache.size} existing publications\n`);

  // Check for existing projects to avoid duplicates
  console.log('Checking for existing projects...');
  const existingProjects = await fetchAllPages(PROJECTS_DB_ID);
  const existingProjectIds = new Set();
  existingProjects.forEach(page => {
    const projectID = page.properties?.projectID?.title?.[0]?.plain_text;
    if (projectID) existingProjectIds.add(projectID);
  });
  console.log(`  Found ${existingProjectIds.size} existing projects\n`);

  // Import projects
  console.log('Importing projects...');
  let created = 0;
  let skipped = 0;

  for (const project of projects) {
    if (existingProjectIds.has(project.projectID)) {
      console.log(`  Skipping existing project: ${project.projectID}`);
      skipped++;
      continue;
    }

    try {
      await createProject(project, tagCache, pubCache);
      console.log(`  Created: ${project.projectID} - ${project.name}`);
      created++;

      // Rate limiting
      await new Promise(resolve => setTimeout(resolve, 350));
    } catch (err) {
      console.error(`  Error creating ${project.projectID}:`, err.message);
    }
  }

  console.log(`\nImport complete!`);
  console.log(`  Created: ${created}`);
  console.log(`  Skipped: ${skipped}`);
}

main().catch(err => {
  console.error('Import failed:', err);
  process.exit(1);
});
