#!/usr/bin/env node
/**
 * Replace [IMAGE: ...] placeholder divs in markdown files with the generated
 * images from static/images/generated/.
 *
 * Usage:
 *   node scripts/wire-images.mjs             # apply changes
 *   node scripts/wire-images.mjs --dry-run   # preview only, no writes
 *
 * The script matches placeholders positionally within each page — the Nth
 * placeholder on a page is replaced by the Nth image assigned to that page
 * in the IMAGES map below.
 *
 * A placeholder is only replaced if its corresponding .png file exists in
 * static/images/generated/. Missing images are reported but not fatal.
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { resolve } from "path";

const DRY_RUN = process.argv.includes("--dry-run");
const CONTENT_DIR = "content";
const IMAGE_DIR = "static/images/generated";

// ─── Page → image slug map (in placeholder order) ────────────────────────────

const PAGE_IMAGES = {
  "metrics/sadmf-adoption-rate.md": [
    "sadmf-adoption-rate-funnel",
  ],
  "metrics/feature-completion-ratio.md": [
    "feature-completion-ratio-timeline",
  ],
  "metrics/lines-of-code-per-code-engineer.md": [
    "lines-of-code-bar-chart",
  ],
  "metrics/defects-per-code-engineer.md": [
    "defects-per-engineer-attribution-pipeline",
  ],
  "metrics/individual-velocity-score.md": [
    "individual-velocity-score-dashboard",
    "individual-velocity-score-radar-chart",
  ],
  "metrics/sadmf-maturity-score.md": [
    "sadmf-maturity-score-bell-curve",
  ],
  "metrics/defects-per-unit-tester.md": [
    "defects-per-unit-tester-bar-chart",
    "defects-per-unit-tester-healthy-tension",
  ],
  "success-stories/manager-guide.md": [
    "manager-guide-career-ladder",
    "manager-guide-project-timeline",
    "manager-guide-bureaucratic-maze",
    "manager-guide-time-allocation-pie",
  ],
  "success-stories/transition-to-sadmf.md": [
    "transition-framework-wheel-torn",
    "transition-org-chart",
    "transition-compliance-poster",
  ],
  "principles/psychological-safety.md": [
    "psychological-safety-automated-office",
  ],
  "principles/systems-thinking.md": [
    "systems-thinking-command-pyramid",
    "systems-thinking-compliance-loop",
  ],
  "principles/commit-to-the-date.md": [
    "commit-to-date-locked-wheel",
  ],
  "principles/build-quality-in.md": [
    "build-quality-in-people-funnel",
  ],
  "principles/lean-management.md": [
    "lean-management-layered-org-chart",
  ],
  "principles/limit-wip.md": [
    "limit-wip-capacity-gauge",
  ],
  "principles/everyone-is-responsible.md": [
    "everyone-responsible-scoreboard-office",
  ],
  "principles/fail-fast.md": [
    "fail-fast-attribution-timeline",
  ],
  "principles/continuous-learning.md": [
    "continuous-learning-conveyor-belt",
  ],
  "principles/make-work-visible.md": [
    "make-work-visible-leaderboard-office",
  ],
  "release-convoy/ceremonies/system-integration-testing.md": [
    "sit-spoke-hub-convergence",
    "sit-defect-recall-loop",
  ],
  "release-convoy/ceremonies/code-inspection.md": [
    "code-inspection-chamber-seating",
    "code-inspection-submit-pipeline",
  ],
  "release-convoy/ceremonies/testing.md": [
    "testing-governance-boundary-floorplan",
  ],
  "release-convoy/ceremonies/scrum-of-scrum-of-scrums.md": [
    "scrum-of-scrums-three-tier-pyramid",
    "scrum-of-scrums-telephone-game",
    "scrum-of-scrums-day-schedule-clock",
  ],
  "release-convoy/ceremonies/manifest-approval.md": [
    "manifest-approval-conference-room",
    "manifest-approval-standard-vs-emergency",
  ],
  "release-convoy/ceremonies/post-standup-standup.md": [
    "post-standup-standup-room-layout",
  ],
  "release-convoy/ceremonies/post-standup-standup-review.md": [
    "post-standup-standup-review-sad-flow",
  ],
  "release-convoy/ceremonies/harbor-review.md": [
    "harbor-review-room-seating",
    "harbor-review-hrss-feedback-loop",
  ],
  "practices/comprehensive-documentation-assurance-protocol.md": [
    "cdap-documentation-dwarfs-code",
  ],
  "practices/mandatory-status-synchronization.md": [
    "mandatory-status-sync-cascade",
  ],
  "practices/strategic-test-deferral.md": [
    "strategic-test-deferral-scatter-plot",
  ],
  "practices/ci-cd-ed.md": [
    "ci-cd-ed-pipeline-comparison",
  ],
  "practices/release-tracking.md": [
    "release-tracking-47-tab-spreadsheet",
  ],
  "practices/full-utilization-optimization.md": [
    "full-utilization-rotation-diagram",
  ],
  "practices/fractal-based-development.md": [
    "fractal-development-branch-tree",
  ],
  "practices/standardized-environment-provisioning.md": [
    "sepaw-reference-binder",
  ],
};

// ─── Regex ────────────────────────────────────────────────────────────────────

// Matches the full placeholder div, capturing the [IMAGE: ...] description.
// The opening tag is always a single line; the content is on the next line.
const PLACEHOLDER_RE =
  /<div style="border:2px dashed #9ab4cc[^"]*">\s*\[IMAGE:([^\]]+)\]\s*<\/div>/gs;

// ─── Replacement HTML ─────────────────────────────────────────────────────────

function buildReplacement(slug, altText) {
  const src = `/images/generated/${slug}.png`;
  const alt = altText.trim().replace(/"/g, "&quot;");
  return `<figure style="margin:1.5rem 0;text-align:center">
  <img src="${src}"
       alt="${alt}"
       style="max-width:100%;border-radius:6px;box-shadow:0 2px 12px rgba(0,0,0,0.12)">
</figure>`;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

let totalReplaced = 0;
let totalSkipped = 0;
let totalMismatched = 0;

for (const [relPath, slugs] of Object.entries(PAGE_IMAGES)) {
  const filePath = resolve(CONTENT_DIR, relPath);

  if (!existsSync(filePath)) {
    console.warn(`WARN  file not found: ${filePath}`);
    continue;
  }

  const original = readFileSync(filePath, "utf8");

  // Count placeholders in file
  const placeholderMatches = [...original.matchAll(PLACEHOLDER_RE)];

  if (placeholderMatches.length !== slugs.length) {
    console.error(
      `MISMATCH  ${relPath}: expected ${slugs.length} placeholder(s), found ${placeholderMatches.length}`
    );
    totalMismatched++;
    continue;
  }

  // Check all target images exist
  const missingImages = slugs.filter(
    (slug) => !existsSync(resolve(IMAGE_DIR, `${slug}.png`))
  );

  if (missingImages.length > 0) {
    console.warn(
      `SKIP  ${relPath}: missing generated image(s): ${missingImages.join(", ")}`
    );
    totalSkipped += slugs.length;
    continue;
  }

  // Replace positionally — reset lastIndex for each fresh pass
  let slugIndex = 0;
  let updated = original.replace(PLACEHOLDER_RE, (_match, altText) => {
    const slug = slugs[slugIndex++];
    return buildReplacement(slug, altText);
  });

  if (updated === original) {
    console.log(`UNCHANGED  ${relPath}`);
    continue;
  }

  if (DRY_RUN) {
    console.log(`DRY-RUN  ${relPath} — would replace ${slugs.length} placeholder(s)`);
    // Show a diff-style preview of the first replacement
    const firstOld = placeholderMatches[0][0].split("\n")[0] + " …";
    const firstSlug = slugs[0];
    console.log(`  - ${firstOld}`);
    console.log(`  + <figure> … /images/generated/${firstSlug}.png … </figure>`);
  } else {
    writeFileSync(filePath, updated, "utf8");
    console.log(`UPDATED  ${relPath} — replaced ${slugs.length} placeholder(s)`);
    totalReplaced += slugs.length;
  }
}

console.log("");
if (DRY_RUN) {
  console.log("Dry run complete. Re-run without --dry-run to apply changes.");
} else {
  console.log(`Done. ${totalReplaced} placeholder(s) replaced.`);
  if (totalSkipped > 0)
    console.log(`       ${totalSkipped} skipped (images not yet generated).`);
  if (totalMismatched > 0)
    console.log(`       ${totalMismatched} page(s) had placeholder count mismatches — check manually.`);
}
