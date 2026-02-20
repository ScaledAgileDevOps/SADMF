---
title: "Individual Velocity Score"
linkTitle: "Individual Velocity Score"
type: docs
description: "Story points completed per engineer per Convoy — the definitive measure of individual contribution to team delivery!"
weight: 9
---

The Individual Velocity Score measures the number of story points each [Code Engineer](/roles/code-engineer/) completes during a single [Convoy](/release-convoy/) cycle. While [Tasks per Code Engineer](/metrics/tasks-per-code-engineer/) counts discrete work items and [Lines of Code per Code Engineer](/metrics/lines-of-code-per-code-engineer/) measures output volume, the Individual Velocity Score captures the third dimension of individual contribution: the effort-weighted completion rate. Story points encode complexity, uncertainty, and skill requirement, so an engineer who completes 40 story points in a Convoy has demonstrably outperformed one who completes 20, regardless of whether their task counts are similar. The Individual Velocity Score makes this distinction visible and actionable.

<!-- STAT HERO -->
<div style="background:#242627;border-radius:8px;padding:2rem 2rem 1.5rem;margin:2rem 0;color:#fff;position:relative;overflow:hidden">
  <div style="position:absolute;top:0;right:0;width:200px;height:100%;background:linear-gradient(135deg,transparent 60%,rgba(162,59,114,0.18) 100%);pointer-events:none"></div>
  <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:1.2rem">
    <i class="fa-solid fa-gauge-high" style="color:#a23b72;font-size:1.1rem"></i>
    <span style="font-size:0.7rem;letter-spacing:0.18em;text-transform:uppercase;color:#9ab4cc;font-weight:600">SADMF Metric — Individual Contribution</span>
  </div>
  <div style="font-size:2rem;font-weight:800;letter-spacing:-0.02em;line-height:1.1;margin-bottom:1.5rem">Individual Velocity Score</div>
  <div style="background:#1a1c1d;border:1px solid #3a3d3f;border-radius:6px;padding:1rem 1.25rem;margin-bottom:1.5rem;font-family:monospace;font-size:1.05rem;color:#e8edf5;letter-spacing:0.02em">
    <span style="color:#9ab4cc;font-size:0.8rem;display:block;margin-bottom:0.4rem">FORMULA</span>
    IVS = &Sigma;(Completed Story Points) &divide; Convoy Duration
  </div>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:1rem">
    <div style="background:#1a1c1d;border:1px solid #3a3d3f;border-radius:6px;padding:0.85rem 1rem">
      <div style="font-size:0.65rem;letter-spacing:0.14em;text-transform:uppercase;color:#9ab4cc;margin-bottom:0.35rem">Owner Role</div>
      <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.9rem;font-weight:600">
        <i class="fa-solid fa-satellite-dish" style="color:#a23b72;font-size:0.85rem"></i>
        Chief Signals Officer
      </div>
    </div>
    <div style="background:#1a1c1d;border:1px solid #3a3d3f;border-radius:6px;padding:0.85rem 1rem">
      <div style="font-size:0.65rem;letter-spacing:0.14em;text-transform:uppercase;color:#9ab4cc;margin-bottom:0.35rem">Cadence</div>
      <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.9rem;font-weight:600">
        <i class="fa-solid fa-clock-rotate-left" style="color:#a23b72;font-size:0.85rem"></i>
        Per Convoy Cycle
      </div>
    </div>
    <div style="background:#1a1c1d;border:1px solid #3a3d3f;border-radius:6px;padding:0.85rem 1rem">
      <div style="font-size:0.65rem;letter-spacing:0.14em;text-transform:uppercase;color:#9ab4cc;margin-bottom:0.35rem">Source</div>
      <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.9rem;font-weight:600">
        <i class="fa-solid fa-table" style="color:#a23b72;font-size:0.85rem"></i>
        Release Tracking Sheet
      </div>
    </div>
    <div style="background:#1a1c1d;border:1px solid #3a3d3f;border-radius:6px;padding:0.85rem 1rem">
      <div style="font-size:0.65rem;letter-spacing:0.14em;text-transform:uppercase;color:#9ab4cc;margin-bottom:0.35rem">Unit</div>
      <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.9rem;font-weight:600">
        <i class="fa-solid fa-star-half-stroke" style="color:#a23b72;font-size:0.85rem"></i>
        Story Points / Convoy
      </div>
    </div>
  </div>
</div>

<!-- HOW IT WORKS -->
<div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:8px;padding:1.75rem 2rem;margin:1.75rem 0">
  <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:1.4rem">
    <i class="fa-solid fa-list-ol" style="color:#1e3a5f;font-size:1rem"></i>
    <span style="font-size:0.7rem;letter-spacing:0.16em;text-transform:uppercase;color:#1e3a5f;font-weight:700">How the Score Is Calculated</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:0">
    <div style="display:flex;gap:1.25rem;align-items:flex-start">
      <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">
        <div style="width:2rem;height:2rem;border-radius:50%;background:#1e3a5f;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;flex-shrink:0">1</div>
        <div style="width:2px;height:1.5rem;background:#9ab4cc;margin-top:0.15rem"></div>
      </div>
      <div style="padding-bottom:1.25rem">
        <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.2rem">Convoy Closes</div>
        <div style="font-size:0.9rem;color:#2c4a6e;line-height:1.5">At the end of each Convoy cycle, the Release Tracking spreadsheet is frozen. No further completions are recorded after the close date.</div>
      </div>
    </div>
    <div style="display:flex;gap:1.25rem;align-items:flex-start">
      <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">
        <div style="width:2rem;height:2rem;border-radius:50%;background:#1e3a5f;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;flex-shrink:0">2</div>
        <div style="width:2px;height:1.5rem;background:#9ab4cc;margin-top:0.15rem"></div>
      </div>
      <div style="padding-bottom:1.25rem">
        <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.2rem">Tasks Attributed</div>
        <div style="font-size:0.9rem;color:#2c4a6e;line-height:1.5">Each completed task is assigned to its authoring Code Engineer. Tasks marked in-progress but not completed receive <strong>zero partial credit</strong>.</div>
      </div>
    </div>
    <div style="display:flex;gap:1.25rem;align-items:flex-start">
      <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">
        <div style="width:2rem;height:2rem;border-radius:50%;background:#1e3a5f;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;flex-shrink:0">3</div>
        <div style="width:2px;height:1.5rem;background:#9ab4cc;margin-top:0.15rem"></div>
      </div>
      <div style="padding-bottom:1.25rem">
        <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.2rem">Points Summed</div>
        <div style="font-size:0.9rem;color:#2c4a6e;line-height:1.5">The story points of each attributed completed task are summed per engineer. The Feature Captain's estimates — not the engineer's — are the authoritative point values.</div>
      </div>
    </div>
    <div style="display:flex;gap:1.25rem;align-items:flex-start">
      <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">
        <div style="width:2rem;height:2rem;border-radius:50%;background:#a23b72;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;flex-shrink:0">4</div>
      </div>
      <div style="padding-bottom:0.25rem">
        <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.2rem">Report Distributed</div>
        <div style="font-size:0.9rem;color:#2c4a6e;line-height:1.5">The Chief Signals Officer compiles the Velocity Comparison Report and distributes it to all Feature Captains and the Commodore. Engineers are ranked, flagged, and referred as appropriate.</div>
      </div>
    </div>
  </div>
</div>

<!-- WHAT GOOD LOOKS LIKE -->
<div style="border-left:4px solid #a23b72;background:linear-gradient(to right,rgba(162,59,114,0.07),transparent);border-radius:0 6px 6px 0;padding:1.25rem 1.5rem;margin:1.75rem 0">
  <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.75rem">
    <i class="fa-solid fa-trophy" style="color:#a23b72;font-size:1rem"></i>
    <span style="font-size:0.7rem;letter-spacing:0.16em;text-transform:uppercase;color:#a23b72;font-weight:700">What Good Looks Like</span>
  </div>
  <p style="margin:0 0 0.6rem;font-weight:600;color:#242627">A high-performing engineer maintains an Individual Velocity Score well above the team median across consecutive Convoys, demonstrating a sustained commitment to completion.</p>
  <ul style="margin:0;padding-left:1.25rem;color:#444;font-size:0.95rem;line-height:1.8">
    <li>Scores consistently <strong>30% or more above</strong> the team median signal an elite contributor worthy of recognition at the quarterly <a href="/release-convoy/ceremonies/tribunal/">Tribunal</a> commendation segment</li>
    <li>A rising rolling average — even without top-ranking — shows continuous personal improvement, the hallmark of a dedicated professional</li>
    <li>Zero Tribunal referrals across four consecutive Convoys qualifies an engineer for the <strong>Sustained Delivery Excellence</strong> notation in their Productivity Profile</li>
    <li>Engineers who score above median even during Convoys with team-level impediments are identified as impediment-resilient performers and prioritized for future high-complexity task assignments</li>
  </ul>
</div>

The metric is calculated by the [Chief Signals Officer](/roles/chief-signals-officer/) at the close of each Convoy cycle. Each completed task in the [Release Tracking](/practices/release-tracking/) spreadsheet is assigned to its authoring Code Engineer, and the story points for that task are credited to their score. Tasks that were in progress at the Convoy close date but not completed receive no partial credit; velocity is measured by completion, not effort. This aligns the metric with the SADMF's fundamental delivery principle: what matters is what ships. An engineer who has spent the entire Convoy deeply engaged in complex work that did not cross the finish line has produced the same organizational value as an engineer who was idle, and the metric reflects this accurately.

## The Velocity Comparison Report

At the conclusion of each Convoy cycle, the Chief Signals Officer distributes the Velocity Comparison Report to all [Feature Captains](/roles/feature-captain/) and the [Commodore](/roles/commodore/). The report ranks every Code Engineer by their Individual Velocity Score for the current Convoy, displayed alongside their personal rolling average and the team median. Engineers whose current score falls more than 15% below their personal rolling average are flagged for a coaching conversation; engineers whose score falls below the team median for two consecutive Convoys are referred to the [Tribunal](/release-convoy/ceremonies/tribunal/) for a formal velocity review.

<div style="border:2px dashed #9ab4cc;border-radius:6px;padding:1.5rem;margin:1.5rem 0;background:#f8fafc;text-align:center;color:#5a6d82;font-style:italic">
  [IMAGE: A ranked-list report table showing Code Engineers sorted by Individual Velocity Score (high to low), with columns for current score, personal rolling average, delta from average (green up-arrow or red down-arrow), and a status badge — "On Track," "Coaching Required," or "Tribunal Referral" — rendered in the style of a corporate HR performance dashboard]
</div>

The Velocity Comparison Report serves a calibration function beyond individual performance tracking. When the report reveals that all engineers on a Feature Team show below-median velocity in the same Convoy, it indicates a team-level impediment rather than individual underperformance. The Commodore investigates such patterns and escalates to the [DevOps Usage and Compliance Head Engineer (DOUCHE)](/roles/devops-usage-and-compliance-head-engineer/) for tooling or process assessment. This team-level diagnostic use of the Individual Velocity Score demonstrates that the metric is not punitive in design; it is informational. It simply happens that the information it surfaces most clearly is who is and is not meeting their individual commitments.

## Preventing Velocity Gaming

The Individual Velocity Score creates a natural incentive for [Code Engineers](/roles/code-engineer/) to negotiate higher story point estimates for their tasks, since higher-point tasks produce larger velocity numbers even when completed in the same amount of time. The SADMF addresses this through the [Precise Forecasting and Tracking](/practices/precise-forecasting-and-tracking/) practice, which establishes that all story point estimates are set by [Feature Captains](/roles/feature-captain/) rather than by the Code Engineers who will do the work. Because Feature Captains estimate based on the expected output of a competent engineer at standard efficiency, they have no incentive to inflate points on behalf of their engineers; their own performance is measured by on-time delivery rate, not by their engineers' velocity scores. The separation of estimation authority from execution authority is a self-correcting check on score inflation.

Engineers who disagree with a Feature Captain's story point estimate for their task may register a formal objection with the Feature Captain in writing before the Convoy begins. The Feature Captain is not required to adjust the estimate in response. However, an engineer's velocity score for tasks they formally objected to is excluded from Tribunal review if the actual delivery time materially exceeded the estimate, as this constitutes evidence that the estimate was miscalibrated rather than the engineer underperforming. This exception is rarely invoked, as the process of filing a formal written objection is itself time-consuming and the benefit applies only retroactively.

## Integration with the Productivity Profile

The Individual Velocity Score works in concert with [Tasks per Code Engineer](/metrics/tasks-per-code-engineer/) and [Lines of Code per Code Engineer](/metrics/lines-of-code-per-code-engineer/) to form a complete three-dimensional productivity profile for each engineer. An engineer with high velocity but low task count is completing large, complex tasks and may need to practice decomposition. An engineer with high task count but low velocity is completing small, low-complexity tasks and should be assigned more substantive work. An engineer with high Lines of Code but low velocity is writing code that is not reaching completion, which the [DEPRESSED](/practices/depressed/) defect attribution process will eventually account for. Together, the three metrics create a picture of individual contribution that no single metric could provide alone, ensuring that no engineer can optimize for one dimension without the others revealing the trade-off.

<div style="border:2px dashed #9ab4cc;border-radius:6px;padding:1.5rem;margin:1.5rem 0;background:#f8fafc;text-align:center;color:#5a6d82;font-style:italic">
  [IMAGE: A three-axis radar/spider chart labeled "Productivity Profile" with axes for Individual Velocity Score, Tasks per Code Engineer, and Lines of Code per Code Engineer — showing a sample engineer's profile polygon overlaid on the team-average polygon, illustrating how the three metrics combine into a single holistic picture]
</div>

## See Also

- [Tasks per Code Engineer](/metrics/tasks-per-code-engineer/) for the complementary metric that counts discrete completions regardless of complexity
- [Lines of Code per Code Engineer](/metrics/lines-of-code-per-code-engineer/) for the volume metric that combines with velocity to produce a complete productivity profile
- [Chief Signals Officer](/roles/chief-signals-officer/) for the role that calculates and distributes Velocity Comparison Reports
- [Precise Forecasting and Tracking](/practices/precise-forecasting-and-tracking/) for the estimation methodology that controls story point inflation
- [Tribunal](/release-convoy/ceremonies/tribunal/) for the ceremony where velocity declines are formally reviewed
- [Feature Completion Ratio](/metrics/feature-completion-ratio/) for the Convoy-level delivery metric that individual velocity scores contribute to
