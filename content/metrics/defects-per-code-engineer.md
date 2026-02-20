---
title: "Defects per Code Engineer"
linkTitle: "Defects per Code Engineer"
type: docs
description: "Tracking exactly who created each defect, because accountability starts with attribution!"
weight: 4
---

<!-- STAT HERO -->
<div style="
  font-family: 'Courier New', Courier, monospace;
  border: 2px solid #242627;
  border-radius: 4px;
  margin: 1.5rem 0 2rem 0;
  overflow: hidden;
  box-shadow: 4px 4px 0 #a23b72;
">
  <div style="
    background: #242627;
    color: #fff;
    padding: 0.5rem 1rem;
    font-size: 0.7rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    align-items: center;
  ">
    <span><i class="fa-solid fa-circle-radiation" style="color:#a23b72;margin-right:0.5rem;"></i>SADMF METRIC — OFFICIAL RECORD</span>
    <span style="color:#a23b72;">DIAT-ATTR-004</span>
  </div>
  <div style="
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    background: #f8fafc;
  ">
    <!-- Left: metric name + formula -->
    <div style="padding: 1.5rem; border-right: 2px solid #242627;">
      <div style="font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; color: #5a6d82; margin-bottom: 0.4rem;">Metric Name</div>
      <div style="font-size: 1.6rem; font-weight: 900; color: #242627; line-height: 1.1; margin-bottom: 1.25rem;">Defects per<br>Code Engineer</div>
      <div style="font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; color: #5a6d82; margin-bottom: 0.5rem;">Calculation Formula</div>
      <div style="
        background: #242627;
        color: #e8edf5;
        padding: 0.6rem 0.9rem;
        border-radius: 3px;
        font-size: 0.82rem;
        letter-spacing: 0.03em;
      ">
        <span style="color:#a23b72;">D<sub>engineer</sub></span> = <span style="color:#9ab4cc;">Total Defects Attributed</span><br>
        <span style="margin-left:1.4rem; color:#5a6d82;">(no fractional attribution)</span>
      </div>
    </div>
    <!-- Right: owner + cadence + status -->
    <div style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
      <div>
        <div style="font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; color: #5a6d82; margin-bottom: 0.3rem;">Metric Owner</div>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <i class="fa-solid fa-user-shield" style="color:#a23b72; font-size:0.9rem;"></i>
          <span style="font-weight: 700; color: #242627; font-size: 0.95rem;">Development Integrity Assurance Team (DIAT)</span>
        </div>
      </div>
      <div>
        <div style="font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; color: #5a6d82; margin-bottom: 0.3rem;">Measurement Cadence</div>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <i class="fa-solid fa-clock-rotate-left" style="color:#a23b72; font-size:0.9rem;"></i>
          <span style="font-weight: 700; color: #242627; font-size: 0.95rem;">Real-time / Per Convoy</span>
        </div>
      </div>
      <div>
        <div style="font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; color: #5a6d82; margin-bottom: 0.3rem;">Reported To</div>
        <div style="display: flex; flex-direction: column; gap: 0.25rem;">
          <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.85rem;color:#242627;">
            <i class="fa-solid fa-gavel" style="color:#a23b72;font-size:0.75rem;"></i> Tribunal
          </div>
          <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.85rem;color:#242627;">
            <i class="fa-solid fa-chart-line" style="color:#a23b72;font-size:0.75rem;"></i> Chief Signals Officer
          </div>
          <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.85rem;color:#242627;">
            <i class="fa-solid fa-star" style="color:#a23b72;font-size:0.75rem;"></i> Commodore
          </div>
        </div>
      </div>
    </div>
  </div>
  <div style="
    background: #e8edf5;
    border-top: 2px solid #242627;
    padding: 0.45rem 1rem;
    font-size: 0.68rem;
    letter-spacing: 0.1em;
    color: #1e3a5f;
    text-transform: uppercase;
  ">
    <i class="fa-solid fa-triangle-exclamation" style="color:#a23b72;margin-right:0.4rem;"></i>
    This metric is mandatory. Non-participation is itself a performance event.
  </div>
</div>

Defects per [Code Engineer](/roles/code-engineer/) is the metric that transforms quality from an abstract aspiration into a personal responsibility. For each Code Engineer, the framework tracks the number of defects they create and attributes each defect directly to the individual whose code introduced it. This attribution is not punitive -- it is informational. The information simply happens to be shared with the [Tribunal](/release-convoy/ceremonies/tribunal/), displayed on the team dashboard, factored into performance reviews, and used to determine [Shore Leave](/release-convoy/shore-leave/) eligibility. But the metric itself is neutral. It is just a number.

<!-- HOW IT WORKS -->
<div style="margin: 2rem 0;">
  <div style="
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
    border-bottom: 2px solid #242627;
    padding-bottom: 0.5rem;
  ">
    <i class="fa-solid fa-gears" style="color:#a23b72; font-size:1.1rem;"></i>
    <span style="font-family:'Courier New',Courier,monospace; font-size:0.7rem; letter-spacing:0.2em; text-transform:uppercase; font-weight:700; color:#242627;">How the Calculation Works</span>
  </div>
  <div style="display: flex; flex-direction: column; gap: 0;">
    <!-- Step 1 -->
    <div style="display:flex;gap:0;border:1.5px solid #9ab4cc;border-radius:4px 4px 0 0;overflow:hidden;">
      <div style="background:#242627;color:#fff;padding:0.75rem 1rem;display:flex;align-items:center;justify-content:center;min-width:3rem;font-family:'Courier New',Courier,monospace;font-weight:900;font-size:1.1rem;">01</div>
      <div style="padding:0.75rem 1rem;background:#f8fafc;flex:1;">
        <div style="font-weight:700;color:#1e3a5f;font-size:0.9rem;margin-bottom:0.2rem;">Defect Discovery</div>
        <div style="color:#242627;font-size:0.85rem;">A defect is identified in production, staging, or any post-commit environment. Discovery source is logged but does not affect attribution weight.</div>
      </div>
    </div>
    <!-- Step 2 -->
    <div style="display:flex;gap:0;border:1.5px solid #9ab4cc;border-top:none;overflow:hidden;">
      <div style="background:#242627;color:#fff;padding:0.75rem 1rem;display:flex;align-items:center;justify-content:center;min-width:3rem;font-family:'Courier New',Courier,monospace;font-weight:900;font-size:1.1rem;">02</div>
      <div style="padding:0.75rem 1rem;background:#f8fafc;flex:1;">
        <div style="font-weight:700;color:#1e3a5f;font-size:0.9rem;margin-bottom:0.2rem;">git blame Analysis</div>
        <div style="color:#242627;font-size:0.85rem;">DIAT runs automated <code style="background:#e8edf5;padding:0.1em 0.3em;border-radius:2px;font-size:0.8rem;">git blame</code> analysis across all commits touching the defective code. Every contributing engineer is identified.</div>
      </div>
    </div>
    <!-- Step 3 -->
    <div style="display:flex;gap:0;border:1.5px solid #9ab4cc;border-top:none;overflow:hidden;">
      <div style="background:#a23b72;color:#fff;padding:0.75rem 1rem;display:flex;align-items:center;justify-content:center;min-width:3rem;font-family:'Courier New',Courier,monospace;font-weight:900;font-size:1.1rem;">03</div>
      <div style="padding:0.75rem 1rem;background:#f8fafc;flex:1;">
        <div style="font-weight:700;color:#1e3a5f;font-size:0.9rem;margin-bottom:0.2rem;">Full-Weight Attribution (No Fractions)</div>
        <div style="color:#242627;font-size:0.85rem;">Each identified engineer receives <strong>one full defect</strong> on their record. If three engineers contributed, each receives 1.0 defects. Shared blame is indistinguishable from diluted accountability.</div>
      </div>
    </div>
    <!-- Step 4 -->
    <div style="display:flex;gap:0;border:1.5px solid #9ab4cc;border-top:none;overflow:hidden;">
      <div style="background:#242627;color:#fff;padding:0.75rem 1rem;display:flex;align-items:center;justify-content:center;min-width:3rem;font-family:'Courier New',Courier,monospace;font-weight:900;font-size:1.1rem;">04</div>
      <div style="padding:0.75rem 1rem;background:#f8fafc;flex:1;">
        <div style="font-weight:700;color:#1e3a5f;font-size:0.9rem;margin-bottom:0.2rem;">Convoy Scorecard Issuance</div>
        <div style="color:#242627;font-size:0.85rem;">At Convoy close, DIAT distributes individual scorecards. Engineers above the fleet median are placed on a Defect Reduction Plan. Data feeds the Tribunal agenda automatically.</div>
      </div>
    </div>
    <!-- Step 5 -->
    <div style="display:flex;gap:0;border:1.5px solid #9ab4cc;border-top:none;border-radius:0 0 4px 4px;overflow:hidden;">
      <div style="background:#242627;color:#fff;padding:0.75rem 1rem;display:flex;align-items:center;justify-content:center;min-width:3rem;font-family:'Courier New',Courier,monospace;font-weight:900;font-size:1.1rem;">05</div>
      <div style="padding:0.75rem 1rem;background:#f8fafc;flex:1;">
        <div style="font-weight:700;color:#1e3a5f;font-size:0.9rem;margin-bottom:0.2rem;">Escalation Trigger</div>
        <div style="color:#242627;font-size:0.85rem;">Engineers elevated for two consecutive Convoys are escalated to PeopleWare HRaaS for automated corrective action. The Chief Signals Officer monitors trajectory thresholds in real time.</div>
      </div>
    </div>
  </div>
</div>

The attribution process is managed by the [Development Integrity Assurance Team (DIAT)](/roles/development-integrity-assurance-team/), who use git blame analysis to trace every defect to its originating commit and, by extension, its originating engineer. When a defect spans multiple commits by multiple engineers, the defect is attributed to all contributing engineers at full weight -- there is no fractional attribution in SADMF, because shared blame is indistinguishable from diluted accountability. If three engineers contributed code to a defective feature, each engineer receives one full defect on their record. This ensures that engineers are incentivized to avoid collaborating on complex features, which has the added benefit of reinforcing [Continuous Isolation](/practices/ci-cd-ed/) principles.

<!-- WHAT GOOD LOOKS LIKE -->
<div style="
  border-left: 5px solid #a23b72;
  border-radius: 0 4px 4px 0;
  background: #fff8fb;
  padding: 1.25rem 1.5rem;
  margin: 2rem 0;
  box-shadow: inset 0 0 0 1px #f0d0e0;
">
  <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.75rem;">
    <i class="fa-solid fa-trophy" style="color:#a23b72;font-size:1.1rem;"></i>
    <span style="font-family:'Courier New',Courier,monospace;font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;font-weight:700;color:#a23b72;">What "Good" Looks Like</span>
  </div>
  <p style="margin:0 0 0.75rem 0;color:#242627;font-size:0.95rem;"><strong>Higher defect counts per engineer signal a thriving, high-output culture.</strong> An engineer with zero defects has likely written zero code -- or worse, has found ways to avoid attribution. True performance means taking ownership of ambitious, complex, risky work.</p>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-top:1rem;">
    <div style="background:#fff;border:1.5px solid #f0d0e0;border-radius:4px;padding:0.75rem;">
      <div style="font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;color:#a23b72;margin-bottom:0.3rem;font-weight:700;">Exemplary Range</div>
      <div style="font-size:1.5rem;font-weight:900;color:#a23b72;font-family:'Courier New',Courier,monospace;">12 – 20</div>
      <div style="font-size:0.8rem;color:#5a6d82;">defects / engineer / Convoy</div>
    </div>
    <div style="background:#fff;border:1.5px solid #9ab4cc;border-radius:4px;padding:0.75rem;">
      <div style="font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;color:#1e3a5f;margin-bottom:0.3rem;font-weight:700;">Concern Threshold</div>
      <div style="font-size:1.5rem;font-weight:900;color:#1e3a5f;font-family:'Courier New',Courier,monospace;">0 – 3</div>
      <div style="font-size:0.8rem;color:#5a6d82;">defects / engineer / Convoy</div>
    </div>
  </div>
  <p style="margin:0.75rem 0 0 0;color:#5a6d82;font-size:0.82rem;font-style:italic;">Note: An engineer below the concern threshold will be investigated for code avoidance. Absence of defects is not quality -- it is suspicion.</p>
</div>

The metric directly supports the principle of [Build Quality In](/principles/build-quality-in/). SADMF interprets this principle literally: quality is built in by identifying and eliminating the sources of defects. Since defects are created by people, eliminating the source of defects means addressing the people who create them. Engineers whose defect counts exceed the fleet median are placed on a Defect Reduction Plan, which requires them to attend additional [Code Inspection](/release-convoy/ceremonies/code-inspection/) sessions as observers (not participants) and to write a Root Cause Analysis document for each defect using the [Comprehensive Documentation Assurance Protocol](/practices/comprehensive-documentation-assurance-protocol/) template. Engineers whose defect counts remain elevated after two consecutive Convoys are escalated to [PeopleWare HRaaS](/peopleware/) for automated corrective action.

<!-- DIAGRAM PLACEHOLDER -->
{{< metrics-defects-pipeline >}}

The [Fail Fast](/principles/fail-fast/) principle also intersects with this metric, though SADMF interprets "fail fast" not as a development practice but as a personnel management strategy. The faster the organization identifies engineers who produce defects, the faster those engineers can be coached, retrained, or reassigned. The defects-per-engineer metric enables this rapid identification by providing real-time data to the [Chief Signals Officer](/roles/chief-signals-officer/), who monitors defect trends across the fleet and alerts the [Commodore](/roles/commodore/) when any individual's defect trajectory crosses a predefined threshold. Speed of detection is the key -- every day a high-defect engineer continues writing code is a day of compounding quality debt.

It is essential that Defects per Code Engineer is tracked alongside [Lines of Code per Code Engineer](/metrics/lines-of-code-per-code-engineer/) to prevent gaming. An engineer who produces zero defects and zero lines of code has not achieved quality -- they have achieved absence. The balanced scorecard approach ensures that Code Engineers are held accountable for both output and quality, creating the kind of productive tension that SADMF considers essential for [Continuous Learning](/principles/continuous-learning/). Engineers who feel this tension describes their daily experience are experiencing the framework working as intended.

## See Also

- [Build Quality In](/principles/build-quality-in/) for the principle this metric enforces
- [Tribunal](/release-convoy/ceremonies/tribunal/) for where defect counts are reviewed
- [Lines of Code per Code Engineer](/metrics/lines-of-code-per-code-engineer/) for the balancing productivity metric
- [DEPRESSED](/practices/depressed/) for the defect escalation process that generates these counts
- [Fail Fast](/principles/fail-fast/) for the principle of rapid defect-source identification
- [PeopleWare HRaaS](/peopleware/) for automated actions triggered by defect thresholds
