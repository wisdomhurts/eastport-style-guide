# Eastport Critical Metals — Brand & Visual System

The canonical brand manual for **Eastport Critical Metals Corp.** (TSXV: EVI · OTCQB: EVIIF) — a Vancouver, BC critical-minerals developer advancing five projects in Botswana.

Two pages:

1. **Brand manual** (`index.html`) — cover, contents, and ten chapters covering Foundation, Logo, Color, Typography, Voice & Tone, Space & Elevation, Components, Reversed/Data UI, Motion & Moments, and Accessibility. The running-head nav is cross-linked to the explorations canvas.
2. **Creative Explorations** (`creative-explorations.html`) — a pan/zoom design canvas of exploration artboards (color, micro, slides, investor, web, map), with a fixed back-link to the manual.

## Stack

The brand manual is plain static HTML/CSS/JS — no build step, no framework. The explorations canvas is React rendered in the browser via Babel standalone (loaded from a CDN), so it also needs no build step.

- `index.html` — the full brand manual (inline CSS + vanilla JS for scroll progress, reveal-on-scroll, click-to-copy hex, and the canvas "dawn fan" motif).
- `creative-explorations.html` — the explorations canvas shell; pulls React, ReactDOM and `@babel/standalone` from unpkg, then mounts the `explorations/` modules.
- `explorations/` — the design-canvas engine and section modules (`design-canvas.jsx`, `image-slot.js`, `sections-*.jsx`, `explorations.css`). Image slots render as empty placeholders unless an `.image-slots.state.json` sidecar is present.
- `styles.css` — design-system entry point; imports the token files only. Linked by both pages.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css` (CSS custom properties + type classes).
- `assets/logos/` — the dawn-fan mark and wordmark lockups (full-color, navy, reversed white).

Typefaces (Montserrat, Source Sans 3, Source Code Pro) load from Google Fonts.

## Develop

No tooling required. Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Deploy

Static site, deployed to Vercel. Pushing to `master` auto-deploys; or ship manually:

```bash
npx vercel --prod --yes
```

## Source

Reconstructed from the Eastport design-system handoff bundle (claude.ai/design). The website UI kit and standalone slide templates from that bundle are not included here — this repo is the brand manual plus the creative-explorations canvas.
