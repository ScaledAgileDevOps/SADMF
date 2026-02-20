---
title: "Defects per Unit Tester"
linkTitle: "Defects per Unit Tester"
type: docs
description: "Measuring testers by the defects they find, because a tester who finds nothing is contributing nothing!"
weight: 5
---

Defects per [Unit Tester](/roles/unit-tester/) is the metric that holds testers accountable for their primary and only function: finding defects. While [Defects per Code Engineer](/metrics/defects-per-code-engineer/) measures who creates quality problems, Defects per Unit Tester measures who detects them. The two metrics form a complementary pair that creates a closed accountability loop: Code Engineers are responsible for not introducing defects, and Unit Testers are responsible for catching the defects that Code Engineers inevitably introduce. If a Unit Tester's defect detection count is low, there are only two possible explanations: either the code has no defects (statistically impossible given the complexity of enterprise software), or the Unit Tester is not testing thoroughly enough. SADMF assumes the latter.

<!-- STAT HERO -->
<div style="border:2px solid #9ab4cc;border-radius:8px;overflow:hidden;margin:2rem 0;background:#e8edf5;box-shadow:0 4px 16px rgba(30,58,95,0.10);">
  <div style="background:#1e3a5f;padding:0.75rem 1.5rem;display:flex;align-items:center;gap:0.75rem;">
    <i class="fa-solid fa-bug-slash" style="color:#a23b72;font-size:1.2rem;"></i>
    <span style="color:#e8edf5;font-weight:700;letter-spacing:0.08em;font-size:0.85rem;text-transform:uppercase;">SADMF Official Metric &mdash; Detection Accountability Index</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:0;border-top:1px solid #9ab4cc;">
    <div style="padding:1.5rem 1.75rem;border-right:1px solid #9ab4cc;text-align:center;">
      <div style="font-size:0.7rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#5a6d82;margin-bottom:0.4rem;">Metric Name</div>
      <div style="font-size:1.35rem;font-weight:800;color:#1e3a5f;line-height:1.2;">Defects per<br>Unit Tester</div>
    </div>
    <div style="padding:1.5rem 1.75rem;border-right:1px solid #9ab4cc;text-align:center;">
      <div style="font-size:0.7rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#5a6d82;margin-bottom:0.4rem;">Formula</div>
      <div style="font-size:1rem;font-weight:700;color:#a23b72;font-family:monospace;background:#fff;border:1px solid #9ab4cc;border-radius:4px;padding:0.4rem 0.75rem;display:inline-block;margin-top:0.25rem;">Verified Defects Found &divide; Unit Testers</div>
    </div>
    <div style="padding:1.5rem 1.75rem;text-align:center;">
      <div style="font-size:0.7rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#5a6d82;margin-bottom:0.4rem;">Owner &amp; Cadence</div>
      <div style="font-size:0.95rem;font-weight:700;color:#1e3a5f;margin-bottom:0.25rem;"><i class="fa-solid fa-user-tie" style="color:#a23b72;margin-right:0.35rem;"></i><a href="/roles/quality-authority/" style="color:#1e3a5f;">Quality Authority</a></div>
      <div style="font-size:0.85rem;color:#5a6d82;"><i class="fa-solid fa-rotate" style="margin-right:0.3rem;"></i>Every <a href="/release-convoy/" style="color:#5a6d82;">Convoy</a> cycle</div>
    </div>
  </div>
</div>

<!-- HOW IT WORKS -->
<div style="margin:2rem 0;">
  <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:1.1rem;">
    <i class="fa-solid fa-list-ol" style="color:#a23b72;font-size:1rem;"></i>
    <span style="font-weight:700;font-size:0.8rem;letter-spacing:0.1em;text-transform:uppercase;color:#1e3a5f;">How It Is Calculated</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:0.6rem;">
    <div style="display:flex;align-items:flex-start;gap:1rem;background:#fff;border:1px solid #9ab4cc;border-left:4px solid #a23b72;border-radius:4px;padding:0.9rem 1.1rem;">
      <span style="background:#a23b72;color:#fff;border-radius:50%;width:1.6rem;height:1.6rem;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:0.8rem;flex-shrink:0;margin-top:0.05rem;">1</span>
      <div style="color:#242627;font-size:0.95rem;"><strong>Observe the <a href="/release-convoy/ceremonies/testing/">Testing</a> ceremony.</strong> Count every defect each Unit Tester logs in the <a href="/practices/release-tracking/">Release Tracking</a> spreadsheet during the Convoy cycle window.</div>
    </div>
    <div style="display:flex;align-items:flex-start;gap:1rem;background:#fff;border:1px solid #9ab4cc;border-left:4px solid #a23b72;border-radius:4px;padding:0.9rem 1.1rem;">
      <span style="background:#a23b72;color:#fff;border-radius:50%;width:1.6rem;height:1.6rem;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:0.8rem;flex-shrink:0;margin-top:0.05rem;">2</span>
      <div style="color:#242627;font-size:0.95rem;"><strong>Apply recursive assurance.</strong> The <a href="/roles/quality-authority/">Quality Authority</a> reviews each logged defect and removes duplicates, unconfirmed reports, and any item the development team successfully disputes.</div>
    </div>
    <div style="display:flex;align-items:flex-start;gap:1rem;background:#fff;border:1px solid #9ab4cc;border-left:4px solid #a23b72;border-radius:4px;padding:0.9rem 1.1rem;">
      <span style="background:#a23b72;color:#fff;border-radius:50%;width:1.6rem;height:1.6rem;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:0.8rem;flex-shrink:0;margin-top:0.05rem;">3</span>
      <div style="color:#242627;font-size:0.95rem;"><strong>Compute individual totals.</strong> Sum each tester's verified defect count for the cycle. This is their raw Detection Score.</div>
    </div>
    <div style="display:flex;align-items:flex-start;gap:1rem;background:#fff;border:1px solid #9ab4cc;border-left:4px solid #a23b72;border-radius:4px;padding:0.9rem 1.1rem;">
      <span style="background:#a23b72;color:#fff;border-radius:50%;width:1.6rem;height:1.6rem;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:0.8rem;flex-shrink:0;margin-top:0.05rem;">4</span>
      <div style="color:#242627;font-size:0.95rem;"><strong>Establish the fleet median.</strong> Rank all Unit Testers by Detection Score. Any tester below the median is flagged for accountability action.</div>
    </div>
    <div style="display:flex;align-items:flex-start;gap:1rem;background:#fff;border:1px solid #9ab4cc;border-left:4px solid #a23b72;border-radius:4px;padding:0.9rem 1.1rem;">
      <span style="background:#a23b72;color:#fff;border-radius:50%;width:1.6rem;height:1.6rem;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:0.8rem;flex-shrink:0;margin-top:0.05rem;">5</span>
      <div style="color:#242627;font-size:0.95rem;"><strong>Report to the Admiral's dashboard.</strong> The <a href="/roles/chief-signals-officer/">Chief Signals Officer</a> aggregates fleet-wide totals and submits them to the <a href="/roles/admirals-transformation-office/">Admiral's Transformation Office</a> monthly.</div>
    </div>
  </div>
</div>

{{< metrics-defects-unit-tester-bar >}}

The metric is calculated by counting the total number of verified defects each Unit Tester discovers during the [Testing](/release-convoy/ceremonies/testing/) ceremony of each [Convoy](/release-convoy/) cycle. Defects must be logged in the [Release Tracking](/practices/release-tracking/) spreadsheet and confirmed by the [Quality Authority](/roles/quality-authority/) before they count toward a tester's total. Duplicate defects, defects that cannot be reproduced, and defects that the development team disputes are not counted, which ensures that Unit Testers are incentivized to find real, reproducible, indisputable defects rather than inflating their numbers with false positives. This quality control on the quality control process is what SADMF calls "recursive assurance."

Unit Testers whose defect detection count falls below the fleet median face consequences calibrated to the severity of their underperformance. A first-time underperformance triggers a coaching session with the [DevOps Usage & Compliance Head Engineer (DOUCHE)](/roles/devops-usage-and-compliance-head-engineer/), who reviews the tester's testing methodology for gaps. A second consecutive underperformance triggers a formal review at the [Tribunal](/release-convoy/ceremonies/tribunal/), where the tester must present their test cases and explain why their approach failed to detect the defects that clearly must exist in the codebase. A third consecutive underperformance results in escalation to [PeopleWare HRaaS](/peopleware/) for automated workforce optimization. The principle is simple: we must [Build Quality In](/principles/build-quality-in/) by eliminating Unit Testers who cannot find defects.

<!-- UNDERPERFORMANCE ESCALATION TABLE -->
<div style="margin:2rem 0;overflow-x:auto;">
  <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.9rem;">
    <i class="fa-solid fa-triangle-exclamation" style="color:#a23b72;font-size:1rem;"></i>
    <span style="font-weight:700;font-size:0.8rem;letter-spacing:0.1em;text-transform:uppercase;color:#1e3a5f;">Underperformance Escalation Protocol</span>
  </div>
  <table style="width:100%;border-collapse:collapse;font-size:0.9rem;background:#fff;border:1px solid #9ab4cc;border-radius:6px;overflow:hidden;">
    <thead>
      <tr style="background:#1e3a5f;color:#e8edf5;">
        <th style="padding:0.75rem 1rem;text-align:left;font-weight:700;letter-spacing:0.05em;">Occurrence</th>
        <th style="padding:0.75rem 1rem;text-align:left;font-weight:700;letter-spacing:0.05em;">Trigger</th>
        <th style="padding:0.75rem 1rem;text-align:left;font-weight:700;letter-spacing:0.05em;">Consequence</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-top:1px solid #9ab4cc;">
        <td style="padding:0.75rem 1rem;"><span style="background:#e8edf5;color:#1e3a5f;border-radius:3px;padding:0.15rem 0.5rem;font-weight:700;font-size:0.8rem;">1st</span></td>
        <td style="padding:0.75rem 1rem;color:#242627;">Below fleet median, first time</td>
        <td style="padding:0.75rem 1rem;color:#242627;">Coaching session with <a href="/roles/devops-usage-and-compliance-head-engineer/">DOUCHE</a></td>
      </tr>
      <tr style="border-top:1px solid #9ab4cc;background:#f8fafc;">
        <td style="padding:0.75rem 1rem;"><span style="background:#f5e6ec;color:#a23b72;border-radius:3px;padding:0.15rem 0.5rem;font-weight:700;font-size:0.8rem;">2nd</span></td>
        <td style="padding:0.75rem 1rem;color:#242627;">Below fleet median, consecutive</td>
        <td style="padding:0.75rem 1rem;color:#242627;">Formal review at the <a href="/release-convoy/ceremonies/tribunal/">Tribunal</a></td>
      </tr>
      <tr style="border-top:1px solid #9ab4cc;">
        <td style="padding:0.75rem 1rem;"><span style="background:#242627;color:#fff;border-radius:3px;padding:0.15rem 0.5rem;font-weight:700;font-size:0.8rem;">3rd</span></td>
        <td style="padding:0.75rem 1rem;color:#242627;">Below fleet median, three consecutive</td>
        <td style="padding:0.75rem 1rem;color:#242627;">Escalation to <a href="/peopleware/">PeopleWare HRaaS</a> for automated workforce optimization</td>
      </tr>
    </tbody>
  </table>
</div>

The metric creates a productive dynamic between Code Engineers and Unit Testers that SADMF considers healthy competition. Code Engineers are motivated to write code with fewer defects (to reduce their own defect count), while Unit Testers are motivated to find as many defects as possible (to increase their own detection count). This adversarial relationship ensures that both roles are performing at maximum capacity. Some organizations mistakenly encourage developers and testers to collaborate, share context, and work toward shared quality goals. SADMF recognizes that collaboration blurs accountability, and blurred accountability is the root cause of organizational dysfunction. By keeping the roles separate and their metrics opposed, the framework ensures that quality emerges from tension rather than cooperation.

{{< metrics-defects-unit-tester-tension >}}

The [Chief Signals Officer](/roles/chief-signals-officer/) monitors defect detection trends across the fleet and reports them to the [Admiral's Transformation Office](/roles/admirals-transformation-office/) as part of the monthly SADMF health dashboard. A fleet-wide decline in defects detected per Unit Tester is interpreted not as evidence of improving code quality but as evidence of declining tester capability, and triggers an organization-wide testing skills assessment conducted through the [DevOps Process Excellence Assessment](/practices/devops-process-excellence-assessment/). This interpretation is consistent with SADMF's core assumption that the volume of defects in enterprise software is effectively constant -- what varies is only the organization's ability to detect them.

<!-- WHAT GOOD LOOKS LIKE -->
<div style="border:2px solid #a23b72;border-radius:8px;overflow:hidden;margin:2rem 0;">
  <div style="background:#a23b72;padding:0.65rem 1.25rem;display:flex;align-items:center;gap:0.6rem;">
    <i class="fa-solid fa-star" style="color:#fff;font-size:0.95rem;"></i>
    <span style="color:#fff;font-weight:700;letter-spacing:0.08em;font-size:0.8rem;text-transform:uppercase;">What Good Looks Like</span>
  </div>
  <div style="background:#fff;padding:1.25rem 1.5rem;">
    <p style="margin:0 0 0.75rem;color:#1e3a5f;font-weight:700;font-size:0.95rem;">A high-performing fleet exhibits all of the following indicators:</p>
    <ul style="margin:0;padding-left:1.25rem;color:#242627;font-size:0.9rem;line-height:1.8;">
      <li><strong>Detection counts rise every Convoy cycle</strong> &mdash; proof that testers are continuously sharpening their craft and the codebase remains appropriately defect-rich.</li>
      <li><strong>No tester ever finds zero defects</strong> &mdash; a zero score is prima facie evidence of insufficient effort, not clean code.</li>
      <li><strong>The gap between top and bottom testers widens</strong> &mdash; healthy competition producing clear differentiation, making workforce optimization decisions straightforward.</li>
      <li><strong>Fleet-wide totals remain stable or increase quarter-over-quarter</strong> &mdash; confirming that the organization has not fallen into the dangerous delusion that software can actually improve.</li>
      <li><strong>The Quality Authority rejects fewer than 5% of submitted defects</strong> &mdash; demonstrating that Unit Testers have internalized the "recursive assurance" standard and are self-policing their own submissions.</li>
    </ul>
  </div>
</div>

## See Also

- [Unit Tester](/roles/unit-tester/) for the role measured by this metric
- [Defects per Code Engineer](/metrics/defects-per-code-engineer/) for the complementary defect-creation metric
- [Build Quality In](/principles/build-quality-in/) for the principle that demands tester accountability
- [Testing](/release-convoy/ceremonies/testing/) for the ceremony where defects are detected
- [Tribunal](/release-convoy/ceremonies/tribunal/) for where underperforming testers are reviewed
- [Quality Authority](/roles/quality-authority/) for the role that validates defect counts
