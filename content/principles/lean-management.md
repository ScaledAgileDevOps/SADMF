---
title: "Lean Management"
linkTitle: "Lean Management"
type: docs
description: Adding management layers to identify and eliminate waste ensures that no inefficiency goes unmanaged.
weight: 9
---

Lean Management is the principle that guides how the Scaled Agile DevOps Maturity Framework eliminates waste from the delivery process. Waste, in the SADMF context, is defined as any activity that does not directly contribute to framework adherence, metric generation, or ceremony completion. The most effective way to identify and eliminate waste is to add management layers specifically dedicated to this purpose. Each layer provides additional oversight, which reveals inefficiencies that would be invisible to the people doing the work. The people doing the work are, by definition, too close to the work to see the waste it contains.

The SADMF organizational structure embodies Lean Management through its carefully designed chain of command. [Code Engineers](/roles/code-engineer/) report to [Feature Captains](/roles/feature-captain/), who report to the [Commodore](/roles/commodore/), who reports to the [Admiral's Transformation Office](/roles/admirals-transformation-office/). At each level, managers review the work of the level below and identify activities that do not align with the framework. The [DevOps Usage & Compliance Head Engineer (DOUCHE)](/roles/devops-usage-and-compliance-head-engineer/) provides an additional oversight axis, cutting across the hierarchy to audit process adherence at every level. The [Review Board Review Board](/roles/review-board-review-board/) adds yet another layer by reviewing the decisions of the review boards themselves, ensuring that oversight is itself overseen.

A common misconception about Lean Management is that it involves reducing management overhead. This misunderstanding arises from a superficial reading of lean manufacturing literature. In the SADMF, we recognize that the management layers are not overhead -- they are the value stream. Without the [Source Management Team](/roles/source-management-team/) to manage branches, the [Code Standards Enforcement Team](/roles/code-standards-enforcement-team/) to enforce standards, the [Quality Authority](/roles/quality-authority/) to verify testing, the [Development Integrity Assurance Team](/roles/development-integrity-assurance-team/) to validate the Quality Authority, and the [Change Rejection or Acceptance Party](/roles/change-rejection-or-acceptance-party/) to approve changes, code would flow from engineer to production with insufficient governance. Each management layer adds value by adding a checkpoint.

Lean Management also applies to process improvement itself. The [System of Authority](/roles/system-of-authority/), staffed by contractors and consultants, is dedicated full-time to improving how the organization implements SADMF. They conduct assessments, update the transformation roadmap, and identify teams that are deviating from the framework. When waste is identified -- for example, a team that has started writing automated tests instead of relying on the Quality Authority -- the SOA intervenes to realign the team with the approved process. This continuous improvement of process adherence ensures that the organization becomes more mature over time, as measured by the [SADMF Maturity Score](/metrics/sadmf-maturity-score/).

The principle of Lean Management recognizes that every problem in an organization can be solved by adding the right structure. If releases are delayed, add a [Convoy Steering Committee](/release-convoy/deploy/). If code quality is inconsistent, add the Code Standards Enforcement Team. If review boards make questionable decisions, add the Review Board Review Board. Each new layer is a targeted response to a specific inefficiency, and the cumulative effect is an organization where no decision is made without appropriate oversight, no code is merged without multiple approvals, and no engineer operates without full visibility into their performance. This is lean at scale.

## See Also

- [Roles](/roles/) for the complete organizational structure that embodies Lean Management
- [System of Authority (SOA)](/roles/system-of-authority/) for the team dedicated to process improvement
- [SADMF Maturity Score](/metrics/sadmf-maturity-score/) for measuring management effectiveness
- [Review Board Review Board](/roles/review-board-review-board/) for oversight of oversight
- [Systems Thinking](/principles/systems-thinking/) for the meta-principle that governs organizational design
- [Mandatory Status Synchronization](/practices/mandatory-status-synchronization/) for the MSSP practice that embodies management-layer verification
- [Comprehensive Documentation Assurance Protocol](/practices/comprehensive-documentation-assurance-protocol/) for the CDAP practice that adds documentation layers
