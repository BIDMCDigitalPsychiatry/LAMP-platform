# LAMP-platform Documentation Setup

This document describes how the mindLAMP documentation repository is set up and how to work with it.

## Overview

The mindLAMP documentation site is built using [Docusaurus 3](https://docusaurus.io/), a modern static site generator. The site is deployed to GitHub Pages and includes:

- Technical documentation for mindLAMP
- API reference (generated from OpenAPI spec)
- Publications page (synced from Notion)
- Project Gallery page (synced from Notion)
- Landing page with platform overview

## Notion Database Schema & Workflow

This section describes the Notion databases that serve as the source of truth for Publications and Projects data.

### Database Structure

#### Publications Database
<!-- TODO: Document all fields, their types, and purposes -->

| Field Name | Type | Purpose |
|------------|------|---------|
| | | |

#### Projects Database
<!-- TODO: Document all fields, their types, and purposes -->

| Field Name | Type | Purpose |
|------------|------|---------|
| | | |

#### Tags Database
<!-- TODO: Document all fields, their types, and purposes -->

| Field Name | Type | Purpose |
|------------|------|---------|
| | | |

### Database Relationships

<!-- TODO: Document how databases are connected -->
- Publications ↔ Projects:
- Publications ↔ Tags:
- Projects ↔ Tags:

### Internal Workflow

#### Data Flow
```
Notion Databases → Sync Scripts → JSON Files → Docusaurus Components → Live Site
```

<!-- TODO: Describe when/how to update each part -->

#### When to Update Notion vs. Code
- **Update Notion when:**
- **Update sync scripts when:**
- **Update components when:**

#### Data Validation Rules
<!-- TODO: Document any validation rules or constraints -->

### Field Mapping

Maps Notion field names to JSON output and TypeScript interfaces.

#### Publications
| Notion Field | JSON Field | TypeScript Type | Notes |
|--------------|------------|-----------------|-------|
| | | | |

#### Projects
| Notion Field | JSON Field | TypeScript Type | Notes |
|--------------|------------|-----------------|-------|
| | | | |

#### Tags
| Notion Field | JSON Field | TypeScript Type | Notes |
|--------------|------------|-----------------|-------|
| | | | |

---

## Tech Stack

- **Framework:** Docusaurus 3.7.0
- **Language:** TypeScript / React
- **Styling:** CSS Modules + Infima (Docusaurus CSS framework)
- **Search:** `@easyops-cn/docusaurus-search-local`
- **API Docs:** `docusaurus-plugin-openapi`
- **Data Sync:** Notion API (`@notionhq/client`)

## Directory Structure

```
LAMP-platform/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── docs/                       # Main documentation content (MDX/MD files)
├── LAMP-protocol/              # Git submodule - OpenAPI specification
├── scripts/
│   ├── sync-publications.mjs   # Notion sync script for publications
│   ├── sync-projects.mjs       # Notion sync script for projects
│   └── import-projects-to-notion.mjs  # One-time CSV to Notion import
├── src/
│   ├── components/             # React components
│   │   ├── PublicationsList.tsx
│   │   ├── PublicationsList.module.css
│   │   ├── ProjectGallery.tsx
│   │   └── ProjectGallery.module.css
│   ├── css/
│   │   └── custom.css          # Global custom styles
│   └── pages/
│       ├── index.tsx           # Landing page
│       ├── index.module.css
│       ├── publications.tsx    # Publications page
│       └── projects.tsx        # Project Gallery page
├── static/
│   ├── data/
│   │   ├── publications.json   # Generated - synced from Notion
│   │   ├── projects.json       # Generated - synced from Notion
│   │   └── tags.json           # Generated - synced from Notion
│   └── img/                    # Static images
├── package.json                # Dependencies + Docusaurus config
├── tsconfig.json
└── .gitignore
```

## Local Development

### Prerequisites

- Node.js 18+
- npm
- Access to Notion API token (for publications sync)

### Initial Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/BIDMCDigitalPsychiatry/LAMP-platform.git
   cd LAMP-platform
   ```

2. **Initialize submodules:**
   ```bash
   git submodule update --init --recursive
   ```
   This pulls in the `LAMP-protocol` submodule which contains the OpenAPI spec.

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the root directory:
   ```
   NOTION_TOKEN=your_notion_integration_token_here
   ```

5. **Start the development server:**
   ```bash
   npm start
   ```
   This will:
   - Run the Notion sync script (via `prestart` hook)
   - Start Docusaurus dev server at `http://localhost:3000`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start dev server (syncs all Notion data first) |
| `npm run build` | Build production site (syncs all Notion data first) |
| `npm run serve` | Serve the built site locally |
| `npm run sync:all` | Manually sync all data from Notion |
| `npm run sync:publications` | Manually sync publications from Notion |
| `npm run sync:projects` | Manually sync projects from Notion |
| `npm run clear` | Clear Docusaurus cache |
| `npm run typecheck` | Run TypeScript type checking |

## Publications System

The Publications page displays peer-reviewed research using mindLAMP. Data is synced from Notion databases.

### How It Works

1. **Notion Databases:** Publications, Projects, and Tags are stored in interconnected Notion databases
2. **Sync Script:** `scripts/sync-publications.mjs` fetches data via Notion API
3. **JSON Output:** Data is written to `static/data/publications.json`
4. **React Component:** `PublicationsList.tsx` renders the data with filtering/sorting

### Notion Database IDs

The sync script uses these default database IDs (can be overridden via environment variables):

| Database | ID | Env Variable |
|----------|-----|--------------|
| Publications | `2b233133d8a2802786f3c1dd4d802d1e` | `NOTION_PUBLICATIONS_DB_ID` |
| Projects | `2b233133d8a280d79629d7c48f9737a6` | `NOTION_PROJECTS_DB_ID` |
| Tags | `2b233133d8a2801bad2ccdd3c9904dac` | `NOTION_TAGS_DB_ID` |

### Setting Up Notion Integration

1. Go to [Notion Integrations](https://www.notion.so/my-integrations)
2. Create a new integration with read access
3. Copy the "Internal Integration Secret"
4. **Important:** Share each Notion database with your integration:
   - Open the database in Notion
   - Click "Share" → "Invite"
   - Select your integration

### Publication Fields (from Notion)

- `doi` - Digital Object Identifier
- `title` - Publication title
- `citation` - Full citation text
- `abstract` - Paper abstract
- `year` - Publication year
- `url` - Link to paper
- `mindlampRelevance` - How the paper relates to mindLAMP
- `projectIDs` - Related projects (relation)
- `directTagIDs` - Direct tag assignments (relation to Tags database)

## Project Gallery System

The Project Gallery page displays research projects and studies using mindLAMP. Data is synced from Notion databases and linked to publications.

### How It Works

1. **Notion Database:** Projects are stored in a Notion database with relations to Publications and Tags
2. **Sync Script:** `scripts/sync-projects.mjs` fetches data via Notion API
3. **JSON Output:** Data is written to `static/data/projects.json` and `static/data/tags.json`
4. **React Component:** `ProjectGallery.tsx` renders the data with filtering/sorting

### Project Fields (from Notion)

- `projectID` - Unique project identifier (e.g., PRJ-0001)
- `name` - Full project name
- `shortDescription` - Brief description of the project
- `mindLAMPFeatures` - mindLAMP features used in the project
- `institutions` - Participating institutions
- `country` - Countries (multi-select)
- `status` - Project status (active, completed, planned)
- `start` - Start year
- `end` - End year (or ongoing)
- `participants` - Number of participants
- `studyDuration` - Participant study duration (text, e.g., "12 weeks", "3-6 months")
- `projectDuration` - Overall project timeline (text, e.g., "2 years (2019-2021)")
- `population` - Target population description
- `ageRange` - Participant age range
- `IRB` - IRB information
- `funding` - Funding sources
- `tagIDs` - Related tags (relation)
- `publicationIDs` - Related publications (relation)

### Importing Projects from CSV

For initial population of the Notion database from CSV:

```bash
# Install csv-parse if not already installed
npm install csv-parse

# Run the import script
NOTION_TOKEN=xxx node scripts/import-projects-to-notion.mjs
```

The import script reads from `publications/mindLAMP_projects_database.csv` and creates corresponding entries in the Notion Projects database. It:
- Creates or finds existing tags
- Links to existing publications by DOI
- Skips projects that already exist (by projectID)
- Handles rate limiting automatically

### Modifying the Project Gallery Page

- **Component logic:** `src/components/ProjectGallery.tsx`
- **Styling:** `src/components/ProjectGallery.module.css`
- **Page wrapper:** `src/pages/projects.tsx`

## Blog System

The site includes a blog for sharing updates, tutorials, research highlights, and news about the mindLAMP platform.

### Directory Structure

```
blog/
├── authors.yml           # Author profiles (name, avatar, social links)
├── tags.yml              # Blog categories/tags
└── YYYY-MM-DD-slug.md    # Blog posts (e.g., 2026-02-10-welcome.md)
```

### Creating a New Blog Post

1. Create a new markdown file in the `blog/` directory with the naming format `YYYY-MM-DD-slug.md`
2. Add frontmatter at the top:
   ```md
   ---
   slug: my-post-slug
   title: My Post Title
   authors: [authorkey]
   tags: [announcements]
   ---

   Your intro paragraph here (shown in preview).

   <!-- truncate -->

   Rest of your content here.
   ```
3. The `<!-- truncate -->` marker separates the preview text from the full content

### Authors

Authors are defined in `blog/authors.yml`:

```yaml
authorkey:
  name: Display Name
  image_url: https://github.com/username.png
  page: true
  socials:
    github: username
    linkedin: username
```

### Tags

Tags are defined in `blog/tags.yml`:

```yaml
announcements:
  label: Announcements
  permalink: /announcements
  description: News and announcements about mindLAMP
```

Available tags: `announcements`, `tutorials`, `research`, `updates`

### RSS/Atom Feeds

The blog automatically generates feeds for subscription:
- **Atom feed:** `/blog/atom.xml` (recommended)
- **RSS feed:** `/blog/rss.xml`

**Note:** Feeds are only generated during `npm run build`, not in dev mode.

### Announcement Bar

The site includes an announcement bar (configured in `package.json` under `themeConfig.announcementBar`) that promotes blog subscriptions. The bar:
- Appears at the top of every page below the navbar
- Can be dismissed by users (remembered in localStorage)
- Has dark mode support via custom CSS in `src/css/custom.css`

To change or disable the announcement bar, edit the `announcementBar` object in `package.json`:

```json
"announcementBar": {
  "id": "blog_subscribe",
  "content": "📬 Want to stay updated? <a href=\"/blog/atom.xml\">Subscribe to our blog</a>...",
  "backgroundColor": "#e8f2ff",
  "textColor": "#1a3a5c",
  "isCloseable": true
}
```

Set to `null` or remove the object to disable.

### Blog in Navigation

The blog is accessible via:
- **Navbar:** "Community" dropdown (right side) → "Blog"
- **Footer:** "Blog" link
- **Direct URL:** `/blog`

## Configuration

The Docusaurus configuration is stored in `package.json` under the `docusaurus` key. Key settings include:

- **Site metadata:** title, tagline, URL, favicon
- **Navbar:** Documentation, API, Publications links
- **Footer:** Copyright and links
- **Theme:** Light/dark mode support
- **Plugins:** OpenAPI docs, search, redirects

### Adding Documentation Pages

1. Create a new `.md` or `.mdx` file in the `docs/` directory
2. Add frontmatter with title and sidebar position:
   ```md
   ---
   title: My Page Title
   sidebar_position: 1
   ---

   # My Page Content
   ```
3. The page will automatically appear in the sidebar

### Modifying the Landing Page

Edit `src/pages/index.tsx` and `src/pages/index.module.css`.

### Modifying the Publications Page

- **Component logic:** `src/components/PublicationsList.tsx`
- **Styling:** `src/components/PublicationsList.module.css`
- **Page wrapper:** `src/pages/publications.tsx`

## Deployment

### GitHub Actions (Automatic)

The site automatically deploys to GitHub Pages when changes are pushed to `master` or `main` branch.

**Required GitHub Secret:**
- `NOTION_TOKEN` - Notion API token for publications sync

The workflow (`.github/workflows/deploy.yml`):
1. Checks out code with submodules
2. Installs dependencies
3. Syncs publications from Notion
4. Builds the site
5. Deploys to GitHub Pages

### Manual Deployment

```bash
npm run build
npm run deploy
```

## Styling & Design System

### Design Philosophy

The mindLAMP documentation site aims for a **cohesive, sleek, and professional** appearance that feels modern without being overly dramatic. Key principles:

1. **Subtle over dramatic** - Gradients and accents should be soft and elegant, not bold or jarring
2. **Cohesive color palette** - All pages use the same brand colors consistently
3. **Visual hierarchy** - Hero sections draw attention; content sections are clean and readable
4. **Unified components** - Cards, chips, buttons, and filters share consistent styling across pages

### Brand Colors

The site uses mindLAMP brand colors defined in `src/css/custom.css`:

| Variable | Hex | Usage |
|----------|-----|-------|
| `--mindlamp-blue` | `#86b6ff` | Primary blue, hero gradients, primary actions |
| `--mindlamp-teal` | `#64cebf` | Secondary accent, gradient endpoints |
| `--mindlamp-coral` | `#ff775c` | Warning/reset actions, status accents |
| `--mindlamp-yellow` | `#ffd645` | Tertiary accent, status indicators |

Darker variants (`--mindlamp-blue-dark`, `--mindlamp-teal-dark`, etc.) are available for hover states.

### Color Consistency Rule

**All colors on any page must derive from the theme palette.** This includes:

- Backgrounds (sections, cards, modals)
- Text (headings, body, captions)
- Borders and dividers
- Buttons and interactive elements
- Shadows and overlays

**Do not use arbitrary colors.** Every color should come from:
- Brand colors (`--mindlamp-blue`, `--mindlamp-teal`, `--mindlamp-coral`, `--mindlamp-yellow`)
- Infima color scale (`--ifm-color-primary-*`, `--ifm-color-emphasis-*`)
- Semantic colors derived from above (rgba variations for transparency)
- Background variables from the consolidated system (see "Background System" section below)

**Never use arbitrary hex colors** like `#1a1a2e`, `#333`, or `#222` for dark backgrounds. Instead:
- Use `--section-bg-dark` (`#1a3a5c`) for dark section backgrounds
- Use `--surface-elevated` for dropdowns/modals (auto-switches in dark mode)
- Use `--ifm-background-surface-color` for cards and elevated surfaces

### Gradient Style

Gradients should be **light and airy**, not dark and dramatic. Reference the "solutionTransition" section style:

```css
/* GOOD - Soft, elegant gradient */
background: linear-gradient(135deg, var(--ifm-color-primary-lightest) 0%, rgba(100, 206, 191, 0.15) 100%);

/* AVOID - Too dark/dramatic */
background: linear-gradient(135deg, #1e3a8a 0%, var(--mindlamp-blue) 100%);
```

**Gradient usage:**
- **Hero sections**: Deep blue (`#1e3a8a`) to light blue (`--mindlamp-blue`) - the only place dark gradients are used
- **Buttons/chips (default)**: `--ifm-color-primary-lightest` to subtle teal tint
- **Buttons/chips (hover)**: Slightly more saturated version of default
- **Active/filled states**: `--ifm-color-primary-light` to subtle teal - same soft style, slightly more saturated

### Component Styling Patterns

**Cards:**
- Subtle shadow (`0 4px 12px rgba(0, 0, 0, 0.08)`)
- Lift on hover (`translateY(-4px)`, increased shadow)
- Left border accent (4px solid, color indicates status/category)
- Border radius: 12px

**Tags/Chips (content identifiers):**
- Soft gradient background matching the site's gradient style
- Dark text for readability (`--ifm-color-primary-darkest`)
- Subtle hover effect with slightly deeper gradient
- Used for: publication/project links, topic tags, status indicators
- These are the "colorful" elements that add visual interest

**Functional Buttons (actions):**
- Neutral/outline style - NOT gradient
- Border with transparent or very subtle background
- Used for: "Show Details", "Reset Filters", pagination, etc.
- Keep these understated so tags/content stand out

**Show Details Button:**
- Wide bar spanning bottom of card
- Centered text
- Neutral outline style (not gradient)
- Clear visual affordance for expandability

**Search Bar & Filters:**
- Match overall site styling (not default browser styles)
- Consistent border radius (8px)
- Subtle borders that fit the card aesthetic
- Dropdowns should have smooth transitions and shadows

**Stats Badges:**
- Horizontal separator line above (`border-top`)
- Centered layout with consistent gap (3rem)
- Large bold numbers, smaller uppercase labels

### Background System

The site uses a **consolidated background system** with brand-derived colors for consistency across all pages and modes.

#### Background Variables

| Variable | Light Mode | Dark Mode | Usage |
|----------|------------|-----------|-------|
| `--ifm-background-color` | White | Docusaurus dark base | Page base |
| `--ifm-background-surface-color` | Off-white | Elevated dark | Cards, inputs |
| `--surface-elevated` | `#ffffff` | `#1e3a5a` | Dropdowns, modals, overlays |
| `--section-bg-blue-tint` | `#f0f6ff` | `rgba(134, 182, 255, 0.08)` | Light blue sections |
| `--section-bg-teal-tint` | `#f0faf8` | `rgba(100, 206, 191, 0.08)` | Light teal sections |
| `--section-bg-dark` | `#1a3a5c` | `#1a3a5c` | Dark contrast sections |
| `--section-bg-dark-alt` | `#234b73` | `#234b73` | Slightly lighter dark variant |

#### Hero Gradient (special case)

Hero sections use a deep-to-light blue gradient that remains the same in both modes:
```css
background: linear-gradient(135deg, #1e3a8a 0%, var(--mindlamp-blue) 100%);
```

This is the **only place** where the deep navy `#1e3a8a` should be used.

#### Key Rules

1. **Never use arbitrary dark colors** like `#1a1a2e` or `#333`. All dark backgrounds must derive from:
   - `--section-bg-dark` (`#1a3a5c`)
   - `--section-bg-dark-alt` (`#234b73`)
   - `--surface-elevated-dark` (`#1e3a5a`)

2. **Dark mode elevated surfaces** (dropdowns, modals) use `var(--surface-elevated)` which automatically switches between white and brand-derived dark blue.

3. **Text on light backgrounds in dark mode** (e.g., CTA cards that stay white) should use `var(--section-bg-dark)` for headings to maintain brand cohesion.

4. **Tinted backgrounds** use the `--section-bg-*-tint` variables which automatically adjust opacity for dark mode visibility.

#### Section Pattern

Page sections should use **dynamic, balanced backgrounds** that create visual rhythm without being harsh:

- Alternate between light and slightly tinted backgrounds
- Use subtle gradients for visual interest (not flat colors)
- Balance dark/light sections throughout the page
- Avoid jarring transitions between sections
- Hero sections are the only place for dramatic gradients

Example pattern:
1. Hero (gradient)
2. Content section (white/light)
3. Feature section (subtle tint)
4. Content section (white/light)
5. CTA section (gradient or tinted)

### Dark Mode

All pages must fully support dark mode. Key requirements:

- Every component must have `[data-theme='dark']` styles
- Gradients should use rgba values that work on dark backgrounds
- Maintain sufficient contrast for readability
- Test all interactive states (hover, active, focus) in dark mode

```css
[data-theme='dark'] .expandBtn {
  background: linear-gradient(135deg, rgba(134, 182, 255, 0.15) 0%, rgba(100, 206, 191, 0.1) 100%);
}
```

### Page-Specific Notes

**Landing Page (`index.tsx`):**
- Hero gradient: `#1e3a8a` → `--mindlamp-blue` (deep to light blue)
- Project cards in "Proven across diverse contexts" use brand colors for left borders
- "Why teams choose mindLAMP" cards use brand colors for top borders

**Publications & Projects Pages:**
- Matching hero gradients to landing page
- Bidirectional linking with highlight animation on navigation
- Highlight effect: Blue shadow glow that persists until user clicks anywhere
- Cards do NOT auto-expand on deep-link navigation (stay collapsed)
- Status terminology: "Ongoing" (not "Active")

### Contribution Callouts

Each data-driven page should include a contribution prompt at the bottom:

**Publications page:**
> "Have you published a mindLAMP-related paper and don't see it here? [Let us know!](link)"

**Projects page:**
> "Are you running a project with mindLAMP and don't see it here? [Let us know!](link)"

These callouts should:
- Link to GitHub issues or a contribution guide
- Use a subtle, inviting design (not aggressive CTA styling)
- Be clearly visible but not distracting from main content

## Troubleshooting

### "LAMP-protocol/openapi.yml not found"

Run `git submodule update --init --recursive` to initialize the submodule.

### Publications or Projects not loading

1. Check that `NOTION_TOKEN` is set in `.env`
2. Run `npm run sync:all` manually to see errors
3. Verify the Notion databases are shared with your integration

### Build errors

1. Run `npm run clear` to clear cache
2. Delete `node_modules` and run `npm install`
3. Check for TypeScript errors with `npm run typecheck`

## Ongoing Maintenance

### Making Documentation Edits
The deployment process is automatic. Simply:
1. Edit files locally (e.g., in `docs/` or `src/`)
2. Commit and push to master:
   ```bash
   git add .
   git commit -m "Your message"
   git push origin master
   ```
3. GitHub Actions automatically builds and deploys

You can also edit files directly on GitHub - the workflow triggers on any push to master.

### Re-syncing Publications and Projects
To update publications or projects after adding new entries in Notion (without code changes):
1. Go to GitHub → Actions → "Deploy to GitHub Pages"
2. Click "Run workflow" → "Run workflow"

This will pull the latest data from all Notion databases and rebuild the site.

### NOTION_TOKEN Expiration
If the Notion integration token is regenerated:
1. Go to GitHub repo → Settings → Secrets → Actions
2. Update the `NOTION_TOKEN` secret with the new value

### Notion Database Schema Changes
If field names change in Notion, update the corresponding sync script to match the new property names:
- Publications: `scripts/sync-publications.mjs`
- Projects: `scripts/sync-projects.mjs`

### Updating the LAMP-protocol Submodule
To pull the latest OpenAPI spec:
```bash
git submodule update --remote LAMP-protocol
git add LAMP-protocol
git commit -m "Update LAMP-protocol submodule"
git push
```

## Contributing

1. Create a feature branch
2. Make changes
3. Test locally with `npm start`
4. Submit a pull request

For documentation content changes, edit files in the `docs/` directory.
For site functionality changes, edit files in `src/`.

---

## Data Verification Log

### February 2026: College Student Cohort Consolidation

**Background:** Analysis of full-text PDFs revealed that PRJ-0009, PRJ-0028, and PRJ-0030 represented the same underlying cohort (Nov 2020 - May 2021, college students with PSS >= 14) with different analytic subsets.

**Changes Made:**

1. **Consolidated PRJ-0028 and PRJ-0030 into PRJ-0009:**
   - PRJ-0009 (V1 Cohort) now includes all 4 publications:
     - 10.2196/37954 (Currey 2022 - baseline predictors)
     - 10.1038/s44184-023-00035-4 (Currey 2023 - V1/V2 comparison)
     - 10.3389/fpsyt.2022.848842 (formerly PRJ-0028 - COVID exposure)
     - 10.1016/j.psychres.2022.114480 (formerly PRJ-0030 - engagement strategies)
   - Sample sizes noted: 695 recruited; 632 with complete baseline; 612 meeting engagement criteria

2. **Updated PRJ-0010 (V2 Cohort):**
   - Changed numParticipants from 96 (enrolled) to 66 (completed)

3. **Kept PRJ-0029 separate:**
   - Melcher COVID-19 College Study (May-Aug 2020, N=100) is a distinct cohort with different timeline and inclusion criteria (general population, no PSS requirement)

**Files Updated:**
- `publications/mindLAMP_projects_database.csv` - Removed PRJ-0028 and PRJ-0030 rows, updated PRJ-0009 and PRJ-0010
- `publications/mindLAMP_projects_summary.md` - Updated counts and project lists

**Required Notion Changes:**

The Notion Projects database (source of truth) needs to be updated to match:

1. **Archive or delete PRJ-0028 and PRJ-0030** (or merge their publication links into PRJ-0009)
2. **Update PRJ-0009:**
   - Add publications: 10.3389/fpsyt.2022.848842 and 10.1016/j.psychres.2022.114480
   - Update description to note varying sample sizes
   - Update participants to "695 (632-612 analyzed)"
   - Update start date to 11/2020 (not 12/2020)
3. **Update PRJ-0010:**
   - Change participants from 96 to 66

**Notion Changes Applied (via API):**

All changes were applied programmatically using the Notion API:

1. **PRJ-0009 updated:**
   - Added 2 publications (COVID exposure + engagement papers)
   - Updated description with sample size notes
   - Participants set to 695

2. **PRJ-0010 updated:**
   - Participants changed from 96 to 66
   - Description updated to note "96 enrolled; 66 completed"

3. **PRJ-0028 and PRJ-0030 archived:**
   - Both projects archived in Notion (consolidated into PRJ-0009)

4. **Additional data quality fixes:**
   - PRJ-0027: Participants 503748 → 50 (was incorrectly entered)
   - PRJ-0023: Participants 154 → 15
   - PRJ-0033: Participants 54 → 9

5. **Re-synced JSON files:**
   - Ran `npm run sync:projects` to regenerate `static/data/projects.json`

6. **PRJ-0006 (Mount Sinai) publication linking:**
   - Found 2 publications that weren't linked: 10.1038/s41746-025-01669-0 and 10.1101/2024.08.06.24311477
   - Fixed incorrect DOIs in CSV (were: 10.1101/2024.08.15.24312028; 10.1038/s44184-025-00127-3)
   - Linked both publications to PRJ-0006 in Notion

Final state: 31 active projects in Notion database, all with correct publication links

### February 2026: Tag System & Cross-Page Linking

**Tag System Changes:**

1. **Direct tag assignments for publications:**
   - Added `directTagIDs` relation field to Publications database in Notion
   - Publications now have tags assigned directly, not inherited through projects
   - Updated `scripts/sync-publications.mjs` to use `directTagIDs` instead of resolving tags through projects
   - 101 of 120 publications have direct tags; 19 methodology papers remain untagged (appropriate)

2. **Tag schema restructure (21 active tags):**
   - Merged duplicate tags (e.g., `stress-&-trauma` → `stress-trauma`)
   - Archived unused tags (`religion`, `infant`)
   - Added comprehensive descriptions to all tags
   - See `TAG_RESTRUCTURE_LOG.md` for full details

**Cross-Page Linking:**

1. **Bidirectional navigation between Publications and Projects:**
   - Publications page: Clicking a related project navigates to `/projects#PRJ-XXXX`
   - Projects page: Clicking a related publication navigates to `/publications#DOI`
   - Both pages support deep-linking via URL hash

2. **Highlight animation for deep-linked cards:**
   - When navigating via hash link, the target card:
     - Scrolls into view smoothly
     - Auto-expands to show details
     - Displays a 3-second blue pulse animation (glow + slight scale)
   - CSS: `.highlighted` class with `@keyframes highlightPulse` animation

**Files Modified:**
- `scripts/sync-publications.mjs` - Uses `directTagIDs` for tag resolution
- `src/components/PublicationsList.tsx` - Added highlight state, project links to `/projects#projectID`
- `src/components/PublicationsList.module.css` - Added `.highlighted` animation
- `src/components/ProjectGallery.tsx` - Added highlight state, publication links to `/publications#DOI`
- `src/components/ProjectGallery.module.css` - Added `.highlighted` animation

### February 2026: Duration Fields Converted to Text

**Problem:** Numeric duration fields (`length (weeks)`, `durationMonths`) had data entry errors from CSV import (e.g., "12-26" range became "1226" when non-digits were stripped).

**Solution:** Converted to flexible text fields with descriptive values from publication analysis.

**Changes:**

1. **New Notion fields (text):**
   - `studyDuration` - Participant involvement duration (e.g., "12 weeks", "3-6 months", "up to 1 year")
   - `projectDuration` - Overall project timeline (e.g., "2 years (2019-2021)", "5-year study (2020-ongoing)")

2. **Data populated from publication analysis:**
   - All 31 projects updated with accurate duration descriptions
   - Values derived from mindlampRelevance text and abstracts

3. **Fixed data errors:**
   - PRJ-0001: 5252 weeks → "up to 1 year per participant"
   - PRJ-0011: 1226 weeks → "3-6 months"
   - PRJ-0017: 1212 weeks → "3 months"

**Files Modified:**
- `scripts/sync-projects.mjs` - Changed from `lengthWeeks`/`durationMonths` to `studyDuration`/`projectDuration`
- `src/components/ProjectGallery.tsx` - Updated interface and display to use new text fields

**Note:** Old numeric fields (`length (weeks)`, `durationMonths`) can be deleted from Notion if desired.
