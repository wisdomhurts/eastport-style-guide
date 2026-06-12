# Eastport Critical Metals — Brand & Visual System

The canonical brand manual for **Eastport Critical Metals Corp.** (TSXV: EVI · OTCQB: EVIIF) — a Vancouver, BC critical-minerals developer advancing five projects in Botswana.

A single, self-contained style-guide page: cover, contents, and ten numbered chapters covering Foundation, Logo, Color, Typography, Voice & Tone, Space & Elevation, Components, Reversed/Data UI, Motion & Moments, and Accessibility.

## Stack

Plain static HTML/CSS/JS — no build step, no framework.

- `index.html` — the full brand manual (inline CSS + vanilla JS for scroll progress, reveal-on-scroll, click-to-copy hex, and the canvas "dawn fan" motif).
- `styles.css` — design-system entry point; imports the token files only.
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

Reconstructed from the Eastport design-system handoff bundle (claude.ai/design). The website UI kit and slide templates from that bundle are not included here — this repo is the brand manual only.
