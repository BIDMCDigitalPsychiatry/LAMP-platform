# LAMP-platform Documentation Setup

This document describes how the mindLAMP documentation repository is set up and how to work with it.

## Overview

The mindLAMP documentation site is built using [Docusaurus 3](https://docusaurus.io/), a modern static site generator. The site is deployed to GitHub Pages and includes:

- Technical documentation for mindLAMP
- API reference (generated from OpenAPI spec)
- Publications page (synced from Notion)
- Landing page with platform overview

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
│   └── sync-publications.mjs   # Notion sync script for publications
├── src/
│   ├── components/             # React components
│   │   ├── PublicationsList.tsx
│   │   └── PublicationsList.module.css
│   ├── css/
│   │   └── custom.css          # Global custom styles
│   └── pages/
│       ├── index.tsx           # Landing page
│       ├── index.module.css
│       └── publications.tsx    # Publications page
├── static/
│   ├── data/
│   │   └── publications.json   # Generated - synced from Notion
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
| `npm start` | Start dev server (syncs publications first) |
| `npm run build` | Build production site (syncs publications first) |
| `npm run serve` | Serve the built site locally |
| `npm run sync:publications` | Manually sync publications from Notion |
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
- `tags` - Associated tags (via projects)

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

## Styling

### Color Scheme

The site uses mindLAMP brand colors defined in `src/css/custom.css`:

| Variable | Color | Usage |
|----------|-------|-------|
| `--ifm-color-primary` | `#5b9bfc` | Primary blue |
| `--mindlamp-mint` | `#3dbf8f` | Accent green |
| `--mindlamp-yellow` | `#fcc419` | Accent yellow |
| `--mindlamp-coral` | `#fc6b52` | Accent coral/red |

### Dark Mode

Dark mode is supported via `[data-theme='dark']` CSS selectors. Colors automatically adjust.

## Troubleshooting

### "LAMP-protocol/openapi.yml not found"

Run `git submodule update --init --recursive` to initialize the submodule.

### Publications not loading

1. Check that `NOTION_TOKEN` is set in `.env`
2. Run `npm run sync:publications` manually to see errors
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

### Re-syncing Publications
To update publications after adding new entries in Notion (without code changes):
1. Go to GitHub → Actions → "Deploy to GitHub Pages"
2. Click "Run workflow" → "Run workflow"

### NOTION_TOKEN Expiration
If the Notion integration token is regenerated:
1. Go to GitHub repo → Settings → Secrets → Actions
2. Update the `NOTION_TOKEN` secret with the new value

### Notion Database Schema Changes
If field names change in Notion, update `scripts/sync-publications.mjs` to match the new property names.

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
