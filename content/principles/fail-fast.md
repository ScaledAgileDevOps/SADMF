---
title: "Fail Fast"
linkTitle: "Fail Fast"
type: docs
description: Rapid identification of who failed ensures accountability is assigned before root causes can be obscured by complexity.
weight: 11
tags: ["quality", "governance"]
---

<div style="border-left:6px solid #a23b72;background:linear-gradient(135deg,#fdf6fa 0%,#f9f0f5 100%);padding:1.5rem 2rem;margin:1.5rem 0 2rem;border-radius:0 6px 6px 0;position:relative;overflow:hidden">
  <div style="position:absolute;top:0;right:0;background:#a23b72;color:#fff;font-size:0.65rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;padding:0.25rem 0.75rem;border-radius:0 6px 0 6px">Core Principle</div>
  <p style="font-size:1.35rem;font-style:italic;color:#242627;margin:0.25rem 0 0;line-height:1.5">"When a failure occurs, identify who is responsible as quickly as possible — before the trail goes cold."</p>
</div>

The principle of Fail Fast is widely celebrated in the technology industry, but most organizations implement it incorrectly. They interpret "fail fast" as permission to experiment, make mistakes, and learn from failures. This interpretation is dangerously permissive. The SADMF recognizes the true meaning of Fail Fast: when a failure occurs, identify who is responsible as quickly as possible, before the trail goes cold. Failures do not happen in a vacuum. They happen because a specific individual made a specific mistake, and the longer it takes to identify that individual, the harder it becomes to hold them accountable.

Speed of attribution is the key metric for this principle. When a defect is discovered in production, the [Release Tracking](/practices/release-tracking/) spreadsheet immediately reveals which [Code Engineer](/roles/code-engineer/) authored the change. The [Defects per Code Engineer](/metrics/defects-per-code-engineer/) metric is updated in real time, and the [Feature Captain](/roles/feature-captain/) is notified so they can document the failure in the engineer's convoy performance record. This rapid attribution process ensures that failures are assigned to individuals within hours, not days. By the time the next [Tribunal](/release-convoy/ceremonies/tribunal/) convenes, a complete record of every failure and its source is available for review.

{{< principles-fail-fast >}}

It is important to distinguish Fail Fast from the mistaken notion that failure is acceptable. Failure is never acceptable in the SADMF. The framework is designed to prevent failure through its comprehensive system of ceremonies, reviews, and approvals. When failure occurs despite these safeguards, it indicates a breakdown in individual performance, not a systemic issue. The [Quality Authority](/roles/quality-authority/) tested the code. The [Code Standards Enforcement Team](/roles/code-standards-enforcement-team/) reviewed it. The [Development Integrity Assurance Team](/roles/development-integrity-assurance-team/) validated it. The [Change Rejection or Acceptance Party](/roles/change-rejection-or-acceptance-party/) approved it. If a defect survived all of these checkpoints, the defect was introduced by the Code Engineer who wrote it, and the framework's response is to identify that engineer quickly so that corrective action can be taken.

Fail Fast also applies to organizational performance. The [SADMF Maturity Score](/metrics/sadmf-maturity-score/) and [Feature Completion Ratio](/metrics/feature-completion-ratio/) provide convoy-level visibility into whether the organization is meeting its commitments. When these metrics decline, the [Admiral's Transformation Office](/roles/admirals-transformation-office/) initiates a rapid root cause analysis that traces the decline to specific teams, then specific features, then specific individuals. This hierarchical decomposition of failure ensures that systemic-sounding problems are always resolved at the individual level, where accountability is clear and corrective action is straightforward.

The framework deliberately avoids the concept of blameless post-mortems. Blameless retrospectives are a well-intentioned practice that ultimately serves to protect underperformers from the consequences of their actions. If no one is blamed, no one is accountable. If no one is accountable, the same failures recur. The SADMF replaces blameless post-mortems with the [Tribunal](/release-convoy/ceremonies/tribunal/), where failure data is reviewed, individual contributions are assessed, and personnel decisions are informed by objective metrics. This ensures that Fail Fast is not just a detection mechanism but a corrective one. When failures are identified quickly and attributed accurately, the organization can remove the sources of failure before they compound, which is the ultimate expression of [Build Quality In](/principles/build-quality-in/).

<div style="margin:2rem 0">
  <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:1rem">
    <span style="display:inline-block;width:3px;height:1.25rem;background:#a23b72;border-radius:2px"></span>
    <span style="font-size:0.7rem;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#a23b72">Key Implications</span>
  </div>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1rem">
    <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:1.25rem 1.25rem 1rem">
      <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.6rem">
        <i class="fa-solid fa-stopwatch" style="color:#1e3a5f;font-size:1rem"></i>
        <strong style="color:#1e3a5f;font-size:0.9rem">Attribution Speed</strong>
      </div>
      <p style="color:#1e3a5f;font-size:0.875rem;margin:0;line-height:1.5">Failures must be traced to a named individual within hours of discovery. The <a href="/practices/release-tracking/" style="color:#a23b72">Release Tracking</a> spreadsheet is the primary instrument for this rapid lookup.</p>
    </div>
    <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:1.25rem 1.25rem 1rem">
      <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.6rem">
        <i class="fa-solid fa-chart-line" style="color:#1e3a5f;font-size:1rem"></i>
        <strong style="color:#1e3a5f;font-size:0.9rem">Real-Time Metrics</strong>
      </div>
      <p style="color:#1e3a5f;font-size:0.875rem;margin:0;line-height:1.5">The <a href="/metrics/defects-per-code-engineer/" style="color:#a23b72">Defects per Code Engineer</a> metric updates continuously, ensuring the record is complete before the next <a href="/release-convoy/ceremonies/tribunal/" style="color:#a23b72">Tribunal</a>.</p>
    </div>
    <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:1.25rem 1.25rem 1rem">
      <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.6rem">
        <i class="fa-solid fa-ban" style="color:#1e3a5f;font-size:1rem"></i>
        <strong style="color:#1e3a5f;font-size:0.9rem">No Blameless Reviews</strong>
      </div>
      <p style="color:#1e3a5f;font-size:0.875rem;margin:0;line-height:1.5">Blameless post-mortems protect underperformers and break the accountability chain. The Tribunal replaces them with objective, data-driven personnel review.</p>
    </div>
    <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:1.25rem 1.25rem 1rem">
      <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.6rem">
        <i class="fa-solid fa-sitemap" style="color:#1e3a5f;font-size:1rem"></i>
        <strong style="color:#1e3a5f;font-size:0.9rem">Hierarchical Decomposition</strong>
      </div>
      <p style="color:#1e3a5f;font-size:0.875rem;margin:0;line-height:1.5">Convoy-level metric declines are decomposed from team to feature to individual, ensuring that systemic-sounding problems are always resolved at the personal accountability level.</p>
    </div>
  </div>
</div>

## See Also

- [Tribunal](/release-convoy/ceremonies/tribunal/) for the ceremony that reviews failures and assigns accountability
- [Defects per Code Engineer](/metrics/defects-per-code-engineer/) for tracking individual failure rates
- [Release Tracking](/practices/release-tracking/) for tracing failures to specific individuals
- [Build Quality In](/principles/build-quality-in/) for the complementary principle of removing quality risks
- [Psychological Safety](/principles/psychological-safety/) for why rapid attribution is fair and humane
