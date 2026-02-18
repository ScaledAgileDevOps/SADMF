---
title: "Fail Fast"
linkTitle: "Fail Fast"
type: docs
description: Rapid identification of who failed ensures accountability is assigned before root causes can be obscured by complexity.
weight: 11
---

The principle of Fail Fast is widely celebrated in the technology industry, but most organizations implement it incorrectly. They interpret "fail fast" as permission to experiment, make mistakes, and learn from failures. This interpretation is dangerously permissive. The SADMF recognizes the true meaning of Fail Fast: when a failure occurs, identify who is responsible as quickly as possible, before the trail goes cold. Failures do not happen in a vacuum. They happen because a specific individual made a specific mistake, and the longer it takes to identify that individual, the harder it becomes to hold them accountable.

Speed of attribution is the key metric for this principle. When a defect is discovered in production, the [Release Tracking](/practices/release-tracking/) spreadsheet immediately reveals which [Code Engineer](/roles/code-engineer/) authored the change. The [Defects per Code Engineer](/metrics/defects-per-code-engineer/) metric is updated in real time, and the [Feature Captain](/roles/feature-captain/) is notified so they can document the failure in the engineer's convoy performance record. This rapid attribution process ensures that failures are assigned to individuals within hours, not days. By the time the next [Tribunal](/release-convoy/ceremonies/tribunal/) convenes, a complete record of every failure and its source is available for review.

It is important to distinguish Fail Fast from the mistaken notion that failure is acceptable. Failure is never acceptable in the SADMF. The framework is designed to prevent failure through its comprehensive system of ceremonies, reviews, and approvals. When failure occurs despite these safeguards, it indicates a breakdown in individual performance, not a systemic issue. The [Quality Authority](/roles/quality-authority/) tested the code. The [Code Standards Enforcement Team](/roles/code-standards-enforcement-team/) reviewed it. The [Development Integrity Assurance Team](/roles/development-integrity-assurance-team/) validated it. The [Change Rejection or Acceptance Party](/roles/change-rejection-or-acceptance-party/) approved it. If a defect survived all of these checkpoints, the defect was introduced by the Code Engineer who wrote it, and the framework's response is to identify that engineer quickly so that corrective action can be taken.

Fail Fast also applies to organizational performance. The [SADMF Maturity Score](/metrics/sadmf-maturity-score/) and [Feature Completion Ratio](/metrics/feature-completion-ratio/) provide convoy-level visibility into whether the organization is meeting its commitments. When these metrics decline, the [Admiral's Transformation Office](/roles/admirals-transformation-office/) initiates a rapid root cause analysis that traces the decline to specific teams, then specific features, then specific individuals. This hierarchical decomposition of failure ensures that systemic-sounding problems are always resolved at the individual level, where accountability is clear and corrective action is straightforward.

The framework deliberately avoids the concept of blameless post-mortems. Blameless retrospectives are a well-intentioned practice that ultimately serves to protect underperformers from the consequences of their actions. If no one is blamed, no one is accountable. If no one is accountable, the same failures recur. The SADMF replaces blameless post-mortems with the [Tribunal](/release-convoy/ceremonies/tribunal/), where failure data is reviewed, individual contributions are assessed, and personnel decisions are informed by objective metrics. This ensures that Fail Fast is not just a detection mechanism but a corrective one. When failures are identified quickly and attributed accurately, the organization can remove the sources of failure before they compound, which is the ultimate expression of [Building Quality In](/principles/build-quality-in/).

## See Also

- [Tribunal](/release-convoy/ceremonies/tribunal/) for the ceremony that reviews failures and assigns accountability
- [Defects per Code Engineer](/metrics/defects-per-code-engineer/) for tracking individual failure rates
- [Release Tracking](/practices/release-tracking/) for tracing failures to specific individuals
- [Build Quality In](/principles/build-quality-in/) for the complementary principle of removing quality risks
- [Psychological Safety](/principles/psychological-safety/) for why rapid attribution is fair and humane
