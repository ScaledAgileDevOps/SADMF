#!/usr/bin/env node
/**
 * Generate PNG versions of badge SVGs for social media downloads.
 * Uses Playwright (already a dev dependency) to render each SVG at 512×512.
 *
 * Usage: npm run badges
 */

import { chromium } from '@playwright/test';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const BADGES = [
  'practitioner',
  'master',
  'fellow',
  'accredited-facilitator',
  'depressed',
];

const SIZE = 512;
const IMAGES_DIR = join(__dirname, '..', 'static', 'badges', 'images');

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: SIZE, height: SIZE });

  for (const badge of BADGES) {
    const svgPath = join(IMAGES_DIR, `${badge}.svg`);
    const pngPath = join(IMAGES_DIR, `${badge}.png`);

    const svgContent = readFileSync(svgPath, 'utf8');
    const html = `<!DOCTYPE html>
<html><head><style>
* { margin: 0; padding: 0; }
html, body { width: ${SIZE}px; height: ${SIZE}px; background: transparent; overflow: hidden; }
svg { width: ${SIZE}px; height: ${SIZE}px; display: block; }
</style></head>
<body>${svgContent}</body></html>`;

    await page.setContent(html, { waitUntil: 'load' });
    await page.screenshot({
      path: pngPath,
      clip: { x: 0, y: 0, width: SIZE, height: SIZE },
      omitBackground: true,
    });

    console.log(`✓  ${badge}.png`);
  }

  await browser.close();
  console.log(`\nAll ${BADGES.length} badges written to ${IMAGES_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
