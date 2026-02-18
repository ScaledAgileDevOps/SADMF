# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SADMF (Scaled Agile DevOps Maturity Framework) is a satirical website based on the real-life experiences of people who have had SAFe (Scaled Agile Framework) and LeSS (Large-Scale Scrum) inflicted upon them. It presents anti-patterns as if they were recommended practices. The acronyms are intentionally absurd (CRAP, DOUCHE, DEPRESSED, etc.). Deployed at https://scaledagiledevops.com/ via Netlify.

## Writing Guidelines

- **Tone**: Educational, optimistic, and professional. Treat the material as if it were genuinely recommended practices. The satire works because the writing is earnest and straight-faced.
- **Voice**: Write as a true believer who sincerely advocates for these practices. Never break character or wink at the audience.
- **Validation**: When making content changes, validate internal links (`npm run lint` and `npm run link-check2`) and check logical consistency with existing content (cross-references, terminology, role names, ceremony names).

## Build & Development Commands

```bash
npm start              # Local dev server (hugo serve)
npm run build          # Build site
npm run build:clean    # Clean build (rm -rf public && hugo)
npm run lint           # Markdown lint (markdownlint)
npm run lint:fix       # Auto-fix markdown lint issues
npm run link-check     # Link validation (starts server + broken-link-checker)
npm run link-check2    # Alternative link check (linkinator, scans built output)
npm test               # Runs lint + link-check
npm run update         # Update Hugo modules + npm deps
```

Requires Node 22 (pinned in `.nvmrc`) and Hugo extended >= 0.146.0.

## Tech Stack

- **Hugo** static site generator with **Docsy** theme (v0.12.0, imported as Go module)
- Hugo modules managed via `go.mod` (module name: `cd-manifesto`)
- PostCSS with autoprefixer for CSS processing
- Markdownlint for content quality (MD013 and MD026 disabled)

## Content Architecture

All content lives in `content/` as Hugo sections. Each section has an `_index.md` with this front matter pattern:

```yaml
title: <Title>
titleIcon: "fa-solid fa-<icon>"   # Font Awesome 6 icon for sidebar
linkTitle: <Nav Label>
type: docs
description: <Short description>
weight: <integer>                  # Controls sidebar order
```

Content uses Docsy shortcodes: `{{% alert %}}`, `{{% pageinfo %}}`, `{{< figure >}}`, `{{< param description >}}`. Cross-references use Hugo relref links like `[text](/section/#anchor)`.

## Layout Customizations

Custom Docsy overrides in `layouts/partials/`:
- `header-buttons.html` — renders buttons from `data/buttons.toml`
- `page-meta-links.html` — empty (suppresses default)
- `custom/custom-header.html` — meta description injection
- `custom/custom-info.html` — social links (GitHub, LinkedIn, Twitter)
- `theme/navbar-items.html` — adds Swag/Invest/Certification/Print nav items

## Styling

- Brand colors defined in `assets/scss/_variables_project.scss` (primary: #242627, secondary: #a23b72)
- Custom CSS in `assets/css/overrides.css` and `assets/css/button.css`
- Site logo at `assets/icons/logo.svg`

## Link Checking

`linkinator.config.json` skips LinkedIn, YouTube, Twitter, and GitHub URLs (rate-limiting/bot-blocking). Two checkers available: `blc` (requires live server) and `linkinator` (scans built output).
