#!/usr/bin/env node
/**
 * Generate all 49 SADMF illustration placeholders using DALL-E 3.
 *
 * Usage:
 *   OPENAI_API_KEY=sk-... node scripts/generate-images.mjs
 *
 * Options (env vars):
 *   OPENAI_API_KEY   Required. Your OpenAI API key.
 *   IMAGE_QUALITY    "standard" (default) or "hd"
 *   START_AT         Resume from a specific image number (1–49), e.g. START_AT=12
 *   DRY_RUN          Set to "1" to print prompts without calling the API
 *
 * Output: static/images/generated/<slug>.png
 *
 * Rate limits: DALL-E 3 allows 5 images/min on tier 1. The script waits 13 s
 * between requests to stay safely within that limit.
 */

import OpenAI from "openai";
import { createWriteStream, mkdirSync, existsSync } from "fs";
import { pipeline } from "stream/promises";
import { setTimeout as sleep } from "timers/promises";
import https from "https";

// ─── Config ──────────────────────────────────────────────────────────────────

const OUT_DIR = "static/images/generated";
const SIZE = "1792x1024"; // closest DALL-E 3 option to 3:2
const QUALITY = process.env.IMAGE_QUALITY ?? "standard";
const DRY_RUN = process.env.DRY_RUN === "1";
const START_AT = parseInt(process.env.START_AT ?? "1", 10);
const DELAY_MS = 13_000; // 13 s → ~4.6 req/min (limit is 5)

const STYLE_SUFFIX =
  "flat vector corporate illustration, muted color palette (dark charcoal, dusty rose, steel blue, off-white), clean minimal lines, white background, no text labels --ar 3:2";

// ─── Prompts ─────────────────────────────────────────────────────────────────

const IMAGES = [
  {
    id: 1,
    slug: "sadmf-adoption-rate-funnel",
    page: "metrics/sadmf-adoption-rate",
    subject:
      "A funnel diagram with a wide top layer packed with small person silhouettes narrowing through three horizontal filter bands, with small exit arrows branching off the third band toward a separate escalation box, and a small output count emerging from the narrow bottom spout.",
  },
  {
    id: 2,
    slug: "feature-completion-ratio-timeline",
    page: "metrics/feature-completion-ratio",
    subject:
      "A horizontal eight-segment timeline bar with a padlock icon at the left end and a finish-flag icon at the right end, a continuous colored bar spanning all segments, and two counter boxes below connected by a division symbol producing a percentage value in the center.",
  },
  {
    id: 3,
    slug: "lines-of-code-bar-chart",
    page: "metrics/lines-of-code-per-code-engineer",
    subject:
      "A vertical bar chart with individual bars of varying heights, a dashed horizontal median line crossing them, bars above the line colored in dusty rose and bars below in muted grey each with a small warning badge icon, and an inset formula panel in the lower right corner.",
  },
  {
    id: 4,
    slug: "defects-per-engineer-attribution-pipeline",
    page: "metrics/defects-per-code-engineer",
    subject:
      "A flowchart reading left to right — a bug icon, a magnifying-glass analysis node, a weight-distribution node, a scorecard node, and a forking diamond splitting into two outcome paths — with small clock icons above each connector arrow.",
  },
  {
    id: 5,
    slug: "individual-velocity-score-dashboard",
    page: "metrics/individual-velocity-score",
    subject:
      "A corporate HR dashboard table with rows of person silhouettes on the left, four data columns showing scores, averages, delta arrows pointing up or down, and colored status badge pills on the right — sorted from top-performing to bottom.",
  },
  {
    id: 6,
    slug: "individual-velocity-score-radar-chart",
    page: "metrics/individual-velocity-score",
    subject:
      "A hexagonal spider radar chart with three axes radiating from a center point, a filled polygon representing a sample engineer profile overlaid on a lighter team-average polygon, with tick marks on each axis.",
  },
  {
    id: 7,
    slug: "sadmf-maturity-score-bell-curve",
    page: "metrics/sadmf-maturity-score",
    subject:
      "A symmetrical bell curve divided into five vertical color bands from left to right — dark, medium, light peak at center, medium, dark — with annotation arrows pointing to the leftmost and rightmost bands and percentage labels above each band.",
  },
  {
    id: 8,
    slug: "defects-per-unit-tester-bar-chart",
    page: "metrics/defects-per-unit-tester",
    subject:
      "A bar chart of individual bars at varying heights with a horizontal fleet-median dashed line crossing them, bars falling below the line highlighted in red each with a small warning triangle icon.",
  },
  {
    id: 9,
    slug: "defects-per-unit-tester-healthy-tension",
    page: "metrics/defects-per-unit-tester",
    subject:
      "Two vertical columns of person silhouettes facing each other — engineers on the left, testers on the right — connected by a thick jagged zigzag arrow in the center pointing both ways, with tension radiating lines on either side of the arrow.",
  },
  {
    id: 10,
    slug: "manager-guide-career-ladder",
    page: "success-stories/manager-guide",
    subject:
      "A tall vertical ladder illustration with numbered rungs, a single suited silhouette figure climbing upward near the top rung, and two smaller silhouette figures falling or slipping off the sides of the ladder at lower rungs.",
  },
  {
    id: 11,
    slug: "manager-guide-project-timeline",
    page: "success-stories/manager-guide",
    subject:
      "A single horizontal Gantt-style progress bar — the left two-thirds filled in solid green, the right third packed with densely overlapping red task blocks and a small overtime clock icon, a champagne bottle icon at the far right end.",
  },
  {
    id: 12,
    slug: "manager-guide-bureaucratic-maze",
    page: "success-stories/manager-guide",
    subject:
      "A winding flowchart maze with a lightbulb icon at the top entry point passing through rectangular approval gate boxes, diamond review nodes, circular stamp icons, and rectangular hold boxes, ending at a dead-end box at the bottom.",
  },
  {
    id: 13,
    slug: "manager-guide-time-allocation-pie",
    page: "success-stories/manager-guide",
    subject:
      "A clean pie chart with one dominant slice occupying roughly seventy percent of the circle, a medium slice occupying twenty percent, and a very thin sliver for the remainder — each slice a distinct muted color.",
  },
  {
    id: 14,
    slug: "transition-framework-wheel-torn",
    page: "success-stories/transition-to-sadmf",
    subject:
      "A circular framework wheel diagram with most of the wheel segments removed or shown as empty outlines, leaving only two small solid colored segments intact out of what would be a full eight-segment wheel.",
  },
  {
    id: 15,
    slug: "transition-org-chart",
    page: "success-stories/transition-to-sadmf",
    subject:
      "A simple top-down org chart with one box at the apex connected by lines to three boxes in the row below, each of the three lower boxes containing three identical small person silhouette icons.",
  },
  {
    id: 16,
    slug: "transition-compliance-poster",
    page: "success-stories/transition-to-sadmf",
    subject:
      "A tall vertical motivational poster layout with a bold heading area at the top, eleven bullet-point lines below it with gold star sticker icons beside each line, and a signature line at the very bottom.",
  },
  {
    id: 17,
    slug: "psychological-safety-automated-office",
    page: "principles/psychological-safety",
    subject:
      "An overhead floor-plan view of an open-plan office — standing desks with monitor screens arranged along one side, rows of cleared empty desks in the center, and small envelope notification icons floating upward above the empty desks.",
  },
  {
    id: 18,
    slug: "systems-thinking-command-pyramid",
    page: "principles/systems-thinking",
    subject:
      "A three-tier pyramid with a star icon at the apex, a gear icon in the middle band, and a cluster of small person silhouette icons filling the wide base, with downward block arrows on one side labeled with a downward flow and upward thin arrows on the other side.",
  },
  {
    id: 19,
    slug: "systems-thinking-compliance-loop",
    page: "principles/systems-thinking",
    subject:
      "A circular loop diagram with six evenly spaced node circles connected by curved arrows forming a continuous ring, each arrow indicating directional flow clockwise around the cycle.",
  },
  {
    id: 20,
    slug: "commit-to-date-locked-wheel",
    page: "principles/commit-to-the-date",
    subject:
      "A side-view illustration of a ship's steering wheel with a heavy padlock clamped at its center, several ropes hanging over a railing in the foreground with some frayed and floating free, and a line of small ship silhouettes sailing in formation on calm water in the background.",
  },
  {
    id: 21,
    slug: "build-quality-in-people-funnel",
    page: "principles/build-quality-in",
    subject:
      "A wide funnel diagram with a dense crowd of small person silhouettes packed into the top opening, passing through three horizontal filter bands of decreasing width, and a single small silhouette emerging from the narrow bottom spout.",
  },
  {
    id: 22,
    slug: "lean-management-layered-org-chart",
    page: "principles/lean-management",
    subject:
      "A tall vertical org chart with six stacked management layer boxes above a single wide worker layer at the base, and a diagonal arrow cutting across all six layers from the upper-left corner to the lower-right edge.",
  },
  {
    id: 23,
    slug: "limit-wip-capacity-gauge",
    page: "principles/limit-wip",
    subject:
      "A large speedometer gauge with the needle pushed past the 100% mark into a highlighted green zone at 120%, a red zone covering the area below 100%, and a Gantt-style row of uniform worker silhouette blocks filling a timeline bar beneath the gauge with no gaps or whitespace.",
  },
  {
    id: 24,
    slug: "everyone-responsible-scoreboard-office",
    page: "principles/everyone-is-responsible",
    subject:
      "An overhead grid floor-plan of an open-plan office with individual workstation rectangles arranged in even rows, each desk surrounded by a soft glowing halo displaying three small metric number readouts.",
  },
  {
    id: 25,
    slug: "fail-fast-attribution-timeline",
    page: "principles/fail-fast",
    subject:
      "A horizontal pipeline diagram with a bug icon on the far left, branching arrows flowing right through several diamond and rectangle analysis stage nodes, ending at a personnel file folder icon on the far right, with clock icons and color-band urgency indicators above the flow.",
  },
  {
    id: 26,
    slug: "continuous-learning-conveyor-belt",
    page: "principles/continuous-learning",
    subject:
      "A factory conveyor belt viewed from the side — person silhouettes in casual clothes entering from the left, passing under a large certification stamp press station in the middle, and emerging on the right wearing identical uniform outlines with badge icons on their chests.",
  },
  {
    id: 27,
    slug: "make-work-visible-leaderboard-office",
    page: "principles/make-work-visible",
    subject:
      "An interior perspective view of a large open-plan office with floor-to-ceiling monitor walls at the far end displaying ranked leaderboard lists and circular gauge charts, rows of worker silhouettes visible at long desk banks in the foreground.",
  },
  {
    id: 28,
    slug: "sit-spoke-hub-convergence",
    page: "release-convoy/ceremonies/system-integration-testing",
    subject:
      "A spoke-and-hub diagram with a central server node at the middle, ten arrows converging inward — nine drawn as solid green lines and one drawn as a dashed red line with a small clock icon on it — and a small accumulation bar indicator in the corner.",
  },
  {
    id: 29,
    slug: "sit-defect-recall-loop",
    page: "release-convoy/ceremonies/system-integration-testing",
    subject:
      "A circular loop flowchart — a bug icon, a request form icon, two consecutive approval stamp icons, an engineer silhouette with a curved recall arrow, a wrench fix icon, and a re-test arrow looping back to the bug icon — with a horizontal elapsed-time bar running beneath the entire loop.",
  },
  {
    id: 30,
    slug: "code-inspection-chamber-seating",
    page: "release-convoy/ceremonies/code-inspection",
    subject:
      "An overhead floor-plan of a courtroom-style room — a row of reviewer figure silhouettes seated at an elevated bench along the top wall, a single terminal or podium in the center of the open floor, and the lower half of the room completely empty with no petitioner figures present.",
  },
  {
    id: 31,
    slug: "code-inspection-submit-pipeline",
    page: "release-convoy/ceremonies/code-inspection",
    subject:
      "A horizontal pipeline of four boxes — a submit box, a wait box with an hourglass icon, an inspect diamond, and two outcome arrows (a right-pointing pass arrow and a left-looping fail arrow) — with a small counter incrementing near the fail node pointing toward a threshold marker line.",
  },
  {
    id: 32,
    slug: "testing-governance-boundary-floorplan",
    page: "release-convoy/ceremonies/testing",
    subject:
      "An overhead floor-plan split by a thick wall partition — the left room contains engineer desk silhouettes, the right room contains tester desk silhouettes, and a single one-way arrow passes left-to-right through a narrow slot opening in the dividing wall.",
  },
  {
    id: 33,
    slug: "scrum-of-scrums-three-tier-pyramid",
    page: "release-convoy/ceremonies/scrum-of-scrum-of-scrums",
    subject:
      "A three-tier pyramid with meeting-table icons and clock-face icons at each tier level, upward-pointing arrows along the left edge and downward cascade arrows along the right edge, and small circle-group icons filling the wide base.",
  },
  {
    id: 34,
    slug: "scrum-of-scrums-telephone-game",
    page: "release-convoy/ceremonies/scrum-of-scrum-of-scrums",
    subject:
      "Two parallel vertical columns connected at the top by a shared apex box — the left column shows speech-bubble icons getting progressively smaller and lighter toward the top, the right column shows speech-bubble icons getting progressively bolder and larger toward the bottom.",
  },
  {
    id: 35,
    slug: "scrum-of-scrums-day-schedule-clock",
    page: "release-convoy/ceremonies/scrum-of-scrum-of-scrums",
    subject:
      "A circular clock-face diagram with labeled activity arc segments arranged around the full perimeter — most segments in muted grey tones for meetings and processing activities, one small bright green arc segment for a coding window occupying a small portion of the clock face.",
  },
  {
    id: 36,
    slug: "manifest-approval-conference-room",
    page: "release-convoy/ceremonies/manifest-approval",
    subject:
      "An overhead conference-room floor plan with a long rectangular table, name-card silhouette placards arranged around all sides, a digital countdown timer display at one short end, a bell icon at the head position, and a dotted boundary arc indicating a restricted speaking zone near the head seat.",
  },
  {
    id: 37,
    slug: "manifest-approval-standard-vs-emergency",
    page: "release-convoy/ceremonies/manifest-approval",
    subject:
      "Two parallel vertical flowchart paths side by side — the left path is a short straight line with two nodes from start to endpoint, the right path is a long winding route through many more gate and process nodes — both converging at the same endpoint with identical stacked document icons.",
  },
  {
    id: 38,
    slug: "post-standup-standup-room-layout",
    page: "release-convoy/ceremonies/post-standup-standup",
    subject:
      "An overhead meeting-room floor plan with chairs arranged in a U-shape around three walls, a single facilitator position centered at the open end, and small role-label placard icons at key chair positions.",
  },
  {
    id: 39,
    slug: "post-standup-standup-review-sad-flow",
    page: "release-convoy/ceremonies/post-standup-standup-review",
    subject:
      "A vertical flow diagram with a row of person silhouettes at the top sending downward form icons to a single central figure, who fans envelope icons outward to a large grid of recipient silhouettes below, with a small percentage dial showing a low open rate, and a filing cabinet receiving a copy stack at the very bottom.",
  },
  {
    id: 40,
    slug: "harbor-review-room-seating",
    page: "release-convoy/ceremonies/harbor-review",
    subject:
      "An overhead conference-room floor plan with a single facilitator seat at the head of the table, silhouette placards arranged along both long sides in seniority order, a small side table for a note-taker figure, and three flip-chart easel icons standing at the facilitator end of the room.",
  },
  {
    id: 41,
    slug: "harbor-review-hrss-feedback-loop",
    page: "release-convoy/ceremonies/harbor-review",
    subject:
      "A circular two-node diagram with a harbor-review icon and a satisfaction-survey icon connected by curved arrows forming a continuous loop, and one small branch arrow exiting off one of the nodes pointing toward a separate improvement-initiative box.",
  },
  {
    id: 42,
    slug: "cdap-documentation-dwarfs-code",
    page: "practices/comprehensive-documentation-assurance-protocol",
    subject:
      "A horizontal composition with a single small code file icon at the center, flanked on both sides by growing stacks of document pages that dwarf it in height, and cascading approval stamp icons falling from executive silhouette figures arranged above the document stacks.",
  },
  {
    id: 43,
    slug: "mandatory-status-sync-cascade",
    page: "practices/mandatory-status-synchronization",
    subject:
      "A vertical four-layer stack diagram with worker figure silhouettes at the base sending upward status arrows through three progressively smaller management layer boxes to an executive icon at the top, and downward verification check arrows pointing back down at each intermediate layer.",
  },
  {
    id: 44,
    slug: "strategic-test-deferral-scatter-plot",
    page: "practices/strategic-test-deferral",
    subject:
      "A scatter plot chart with an x-axis and y-axis, randomly distributed data point dots showing no discernible trend pattern, and a nearly flat horizontal trend line passing through the middle of the scatter cloud.",
  },
  {
    id: 45,
    slug: "ci-cd-ed-pipeline-comparison",
    page: "practices/ci-cd-ed",
    subject:
      "A split side-by-side diagram — on the left a short straight arrow pipeline from a commit icon to a deployment rocket icon with fast clock symbols; on the right a long winding path passing through multiple gate diamonds, ceremony box stages, and hourglass waiting-room icons before reaching the same deployment endpoint.",
  },
  {
    id: 46,
    slug: "release-tracking-47-tab-spreadsheet",
    page: "practices/release-tracking",
    subject:
      "A slight isometric-angle view of a laptop screen showing a spreadsheet interface with many tab labels along the bottom edge, surrounded by stacked printed paper piles on both sides, a coffee cup in the corner, and a red pen resting on a page with correction marks.",
  },
  {
    id: 47,
    slug: "full-utilization-rotation-diagram",
    page: "practices/full-utilization-optimization",
    subject:
      "A circular rotation diagram with a single engineer silhouette icon at the center and six rectangular project-pillar boxes evenly spaced around it, connected by curved rotation arrows, each pillar box containing a small clock icon indicating a waiting or idle state.",
  },
  {
    id: 48,
    slug: "fractal-development-branch-tree",
    page: "practices/fractal-based-development",
    subject:
      "A symmetrical tree diagram with a single trunk node at the bottom splitting upward into progressively more branches at each generation — each generation mirroring the branching structure of the one below in a fractal pattern — with converging merge arrows at the very top collecting all branches back into one release node.",
  },
  {
    id: 49,
    slug: "sepaw-reference-binder",
    page: "practices/standardized-environment-provisioning",
    subject:
      "A slight above-angle view of an open ring-bound binder showing a visible checklist page with numbered rows, checkbox columns, and a narrow initials column, with a small rectangular screenshot inset image positioned beside one of the numbered rows.",
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function buildPrompt(subject) {
  return `${subject} ${STYLE_SUFFIX}`;
}

async function downloadImage(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = createWriteStream(destPath);
    https.get(url, (response) => {
      pipeline(response, file).then(resolve).catch(reject);
    }).on("error", reject);
  });
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  if (!process.env.OPENAI_API_KEY && !DRY_RUN) {
    console.error("ERROR: OPENAI_API_KEY environment variable is not set.");
    console.error("Usage: OPENAI_API_KEY=sk-... node scripts/generate-images.mjs");
    process.exit(1);
  }

  mkdirSync(OUT_DIR, { recursive: true });

  const client = DRY_RUN ? null : new OpenAI();
  const queue = IMAGES.filter((img) => img.id >= START_AT);

  console.log(`Generating ${queue.length} images (starting at #${START_AT})${DRY_RUN ? " [DRY RUN]" : ""}…\n`);

  for (let i = 0; i < queue.length; i++) {
    const img = queue[i];
    const destPath = `${OUT_DIR}/${img.slug}.png`;
    const prompt = buildPrompt(img.subject);

    process.stdout.write(`[${img.id}/49] ${img.slug} … `);

    if (DRY_RUN) {
      console.log("\nPROMPT:", prompt, "\n");
      continue;
    }

    try {
      const response = await client.images.generate({
        model: "dall-e-3",
        prompt,
        size: SIZE,
        quality: QUALITY,
        n: 1,
      });

      const url = response.data[0].url;
      await downloadImage(url, destPath);
      console.log(`saved → ${destPath}`);
    } catch (err) {
      console.error(`FAILED: ${err.message}`);
      console.error(`  Prompt was: ${prompt}`);
      // Continue with remaining images rather than aborting
    }

    // Rate-limit delay between requests (skip after last item)
    if (i < queue.length - 1) {
      await sleep(DELAY_MS);
    }
  }

  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
