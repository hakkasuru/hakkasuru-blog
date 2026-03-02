# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server (localhost:4321)
- `npm run build` — Production build to `dist/` and `.vercel/output/`
- `npm run preview` — Preview production build locally
- `astro check` — Run TypeScript type checking

No linter or test runner is configured.

## Architecture

Astro 5 static site deployed on Vercel. All pages are pre-rendered at build time. React is used only for the TravelMap island component (`client:visible`).

### Content Collections

Defined in `src/content.config.ts` using Astro's glob loader:

- **articles** (`src/content/articles/*.{md,mdx}`) — Blog posts with draft/featured flags, tags, categories
- **projects** (`src/content/projects/*.md`) — Portfolio entries with status (active/archived/wip) and ordering
- **travel** (`src/content/travel/*/index.md`) — Trip entries with lat/lng coordinates for the Mapbox map

### Layout Hierarchy

`BaseLayout` (HTML shell + SEOHead + global.css) → `PageLayout` (+ Header/Footer + container) → `ArticleLayout` (+ article header/prose styling)

### Styling

Tailwind CSS v4 via `@tailwindcss/vite` plugin. Custom theme tokens defined in `src/styles/global.css` under `@theme` — accent color is `#f97316` (orange), surfaces use stone palette. Light mode only. Fonts: Inter (body), JetBrains Mono (code).

### Git

- Each commit should only contain changes related to each other. Split unrelated changes into separate commits.

### Key Conventions

- Site metadata, social URLs, and nav links live in `src/utils/constants.ts`
- The `/resume` page is intentionally excluded from navigation, sitemap, and indexing (`noindex`)
- The travel map requires `PUBLIC_MAPBOX_TOKEN` env var; the map gracefully hides when the token is absent
- Articles support draft filtering — drafts are excluded from listings, RSS, and static path generation
