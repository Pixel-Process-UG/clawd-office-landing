# Clawd Office Landing Page Redesign

**Date:** 2026-03-18
**Status:** Approved

## Summary

Complete rebuild of the clawd-office-landing page. The current site attempts a neo-brutalist pixel-art aesthetic but doesn't land - the redesign executes the same identity at a much higher level while accurately representing the product's real features.

## Audience

Three groups, all served equally:
1. **Developers / AI engineers** building with AI agents
2. **Tech-curious managers / founders** evaluating AI workflow tools
3. **Open-source community** discovering the project via GitHub

## Goals

- Showcase what Clawd Office is and drive GitHub engagement (star/clone) in equal measure
- Every section should be immediately scannable - no one reads landing pages linearly

## Design Direction

**"Neo-Brut Pro"** - Neo-brutalist layout (thick borders, offset shadows, bold colors) with professional typography (Montserrat headings, Roboto body). Pixel-art accents (colored squares, grid patterns) without going full retro. The product's own pixel-art visuals do the heavy lifting.

## Design System

### Colors (unchanged from current)
- `brand-black`: #0A0A0A
- `brand-white`: #FAFAFA
- `brand-yellow`: #EAD391
- `brand-purple`: #D6B6E1
- `brand-teal`: #0099A1
- `brand-gray`: #666666
- `brand-dark`: #1a1a1a

### Presence State Colors (from the product)
- `active`: #78f7b5 (green)
- `available`: #95d8ff (light blue)
- `in_meeting`: #c39bff (purple)
- `paused`: #ffd479 (yellow)
- `blocked`: #ff8b8b (red)
- `off_hours`: #8792a8 (gray)

### Typography
- **Headings:** Montserrat 700/800
- **Body:** Roboto 400
- **Code:** monospace system stack

### Additional Colors
- `brand-card-dark`: #111111 (dark card backgrounds on dark sections)

### Neo-Brutalism Utilities
- Borders: 3px solid black
- Shadows: `4px 4px 0 #0A0A0A` (standard), `6px 6px 0` (large), `2px 2px 0` (small)
- Hover: `translate(2px, 2px)` with shadow removal ("press down" effect, matching current site pattern)

### Assets
- **Logo/Favicon:** `https://fsn1.your-objectstorage.com/pp-strapi/pp_icon_color_606e1b4397.svg`
- **App screenshot (hero):** `https://raw.githubusercontent.com/fwartner/clawd-office/main/assets/readme/virtual-office-screenshot.jpg`
- **App screenshot (what-is):** same image as hero, or a different angle if available in the repo

### Section Anchor IDs
- `#features` → Section 6 (Features Grid)
- `#rooms` → Section 5 (Rooms)
- `#tech` → Section 7 (Tech Stack)
- `#quickstart` → Section 8 (Quickstart)
- `#about` → Section 3 (What Is)

## Page Sections (top to bottom)

### 1. Navbar (sticky)
- P&P logo SVG + "Clawd Office" text
- Nav links: Features, Rooms, Tech, Quickstart, GitHub (hidden on mobile)
- DE/EN language toggle button (yellow, neo-brut)
- 3px black bottom border

### 2. Hero
- **Left column:**
  - Teal badge: "Open Source · MIT License"
  - Headline: "A pixel-art office for your AI agents." with yellow highlight on "pixel-art office"
  - Subtitle: concrete capabilities (presence, rooms, task routing)
  - Two CTAs: Purple "Get Started →" (scrolls to quickstart) + White "⭐ GitHub" (external)
  - Trust line: "✓ 6 presence states · ✓ 5 themed rooms · ✓ Task queue"
- **Right column:**
  - Real app screenshot in macOS-style window frame (3px border, 8px shadow)
  - Window chrome with red/yellow/green dots and "clawd-office - localhost:4173"
  - Floating status overlays: "● 3 active" (green border) and "⚙ 2 queued" (yellow border)
- **Mobile:** stacks vertically, copy first, screenshot below

### 3. What Is Clawd Office?
- Teal label badge: "What is this?"
- Headline: "A shared workspace where AI agents actually live."
- One paragraph explaining the concept - visual office vs abstract dashboards
- Right side: real screenshot from GitHub repo in neo-brut frame
- **Mobile:** stacks vertically

### 4. Presence States (dark background)
- Headline: "6 Presence States. Always Know What's Happening."
- Subtitle: "Every agent broadcasts their status in real time."
- 3×2 grid of state cards, each with:
  - Colored dot matching the state color
  - State name in matching color
  - One-line description
  - Border in matching color
- States: Active, Available, In Meeting, Paused, Blocked, Off Hours
- Dark background (brand-black) with cards on brand-card-dark

### 5. Rooms
- Headline: "5 Themed Rooms. One Office."
- Subtitle: "Each room serves a purpose. Agents sit where their work happens."
- 5-column grid (3+2 on tablet, 2+2+1 on mobile) of room cards with:
  - Emoji icon
  - Room name
  - Team label
- Rooms: Planning Studio (Product+UX), Shipyard (Build), Systems Bay (Platform), Commons (Shared), Signal Room (Ops)

### 6. Features Grid
- Headline: "Everything Your Agent Team Needs."
- 3×2 grid of feature cards with:
  - Colored pixel square (teal/purple/yellow cycling)
  - Feature title
  - Short description
  - Neo-brut styling (3px border, 4px shadow)
- Features:
  1. Agent CRUD - create, edit, delete agents from UI
  2. Task Queue & Routing - priority levels, routing targets
  3. Activity Feed - chronological event log
  4. Workday Awareness - Berlin-timezone auto off-hours
  5. Dual Backend - Postgres primary, JSON fallback
  6. Accessible (WCAG 2.1 AA) - keyboard nav, screen readers

### 7. Tech Stack (dark background)
- Headline: "Built With"
- Horizontal row of tech badges with colored dots:
  - React 18 (#61dafb)
  - TypeScript 5.6 (#3178c6)
  - Vite 5 (#646cff)
  - Node.js (#68a063)
  - PostgreSQL (#336791)

### 8. Quickstart
- Headline: "Up and Running in 60 Seconds."
- Terminal block in macOS frame with neo-brut shadow:
  - `$ git clone https://github.com/fwartner/clawd-office.git`
  - `$ cd clawd-office && npm install`
  - `$ npm run dev`
  - `✓ Office running at localhost:4173`
- Note below: "Interactive setup wizard guides you through backend & timezone config."

### 9. CTA (yellow background)
- P&P logo SVG + "Built by Pixel & Process" label
- Headline: "Give your agents a place to work."
- Subtitle: "Open source, MIT licensed. Clone it, hack it, make it yours."
- Two CTAs: Black "Clone Repository" + White "Read the Docs"
- 3px black borders top and bottom

### 10. Footer (dark background)
- P&P logo SVG + "© 2026 Pixel & Process. MIT License."
- Links: pixelandprocess.de, GitHub, Impressum, Datenschutz

## Internationalization

Same approach as current site:
- React Context (`LangContext.tsx`) with `lang`, `toggle()`, `t()` helper
- All visible text in `src/lib/i18n.ts` translation object
- DE/EN bilingual, German fallback
- Default language: "de"

## Technical Notes

- **Framework:** Next.js 16 with App Router, standalone output for Docker
- **Styling:** Tailwind CSS v4 via `@tailwindcss/postcss`
- **Fonts:** Google Fonts - Montserrat (400, 500, 600, 700, 800) + Roboto (300, 400, 500, 700)
- **Images:** Next.js `<Image>` with remote patterns for GitHub raw + object storage
- **Favicon:** Use the P&P SVG from object storage
- **Deployment:** Same CI/CD pipeline (Docker → GHCR → ArgoCD via GitOps)
- **No new dependencies needed** - everything builds on existing Next.js + Tailwind stack

## File Changes

### Modified files:
- `src/app/layout.tsx` - update metadata, set Montserrat weights to ["400", "500", "600", "700", "800"], update favicon
- `src/app/page.tsx` - updated section composition
- `src/app/globals.css` - add presence state colors, refine utilities
- `src/lib/i18n.ts` - complete rewrite of all translations to match new sections
- `src/components/Navbar.tsx` - use P&P logo SVG, update nav links
- `src/components/Hero.tsx` - complete rewrite with screenshot frame
- `src/components/WhatIs.tsx` - update copy and layout
- `src/components/Features.tsx` - update to 6 accurate product features
- `src/components/TechStack.tsx` - minor styling updates
- `src/components/Quickstart.tsx` - update commands and copy
- `src/components/CtaSection.tsx` - update copy, add P&P logo
- `src/components/Footer.tsx` - add P&P logo, update links
- `next.config.ts` - add remote pattern: `{ protocol: "https", hostname: "fsn1.your-objectstorage.com", pathname: "/pp-strapi/**" }`

### New files:
- `src/components/PresenceStates.tsx` - new section showcasing 6 presence states
- `src/components/Rooms.tsx` - new section showcasing 5 themed rooms

### Deleted files:
- `src/components/Icons.tsx` - GitHubIcon will be inlined as SVG directly in components that need it (Navbar, Footer)

### Unchanged files (no modifications needed):
- `src/context/LangContext.tsx` - language context used as-is

## Out of Scope

- No interactive demo or embedded app
- No animation library (framer-motion, etc.) - CSS transitions only
- No analytics integration (Umami was removed from current site)
- No blog, docs, or additional pages
- No dark mode toggle (sections alternate light/dark by design)
