---
title: "Change Rejection or Acceptance Party"
linkTitle: "Change Rejection or Acceptance Party"
type: docs
description: "CRAP ensures that only thoroughly reviewed and unanimously approved changes reach the Convoy!"
weight: 3
tags: ["governance", "compliance"]
aliases: ["/roles/change-rejection-or-acceptance-party/"]
---

The Change Rejection or Acceptance Party is the final human checkpoint between a proposed change and its inclusion in the next [DevOps Release Convoy]({{< relref "/release-convoy/" >}}). While automated checks can verify syntax and tests can confirm functional behavior, neither can assess whether a change is truly ready for production. That judgment requires the wisdom, detachment, and institutional authority that only a formal review board can provide. The CRAP convenes twice per week, reviewing every change that has passed through the [Code Standards Enforcement Team (CSET)]({{< relref "/roles/governance/code-standards-enforcement-team/" >}}) and the [Development Integrity Assurance Team (DIAT)]({{< relref "/roles/governance/development-integrity-assurance-team/" >}}). No change may proceed to the [DORC]({{< relref "/release-convoy/" >}}) without CRAP approval, regardless of its size, urgency, or the seniority of its author.

## Composition and Objectivity

The CRAP meeting dias seats seven members drawn from areas of the organization with no direct knowledge of the systems being changed. This is not an oversight; it is the CRAP's greatest strength. Reviewers who understand the system being modified are inherently biased toward approval, as their familiarity breeds sympathy for the developer's choices. Reviewers from unrelated domains bring the detachment and objectivity necessary to evaluate whether:

- Proper procedures were followed
- The [Comprehensive Documentation Assurance Protocol (CDAP)]({{< relref "/practices/quality/comprehensive-documentation-assurance-protocol/" >}}) artifacts are complete
- The change checklist has been filled in correctly

The seven-member composition ensures that no single perspective dominates, and the diversity of ignorance guarantees that the review focuses on process compliance rather than technical merit, which is exactly as it should be.

## Voting and Approval

All approval decisions are made by unanimous secret vote. Each CRAP member casts their ballot independently, without discussion, after reviewing the change package. If even one member votes to reject, the change is returned to the submitting team with a Rejection Notice that specifies which checklist items were incomplete or which documentation was insufficient. The secret ballot prevents social pressure from influencing votes, ensuring that a junior CRAP member feels as empowered to reject a change from a senior [Code Engineer]({{< relref "/roles/engineering/code-engineer/" >}}) as from a new hire. Unanimous approval is required because the strength of a change gate is measured by its strictest reviewer, not its most lenient. If six of seven reviewers approve but one has concerns, those concerns represent an unresolved risk that the organization cannot afford to accept.

## Pre-Submission Approval Requirements

The CRAP's unanimous ballot is the final governance gate, not the first. Before a change reaches the Convening agenda, it must complete the [Integrated Record and Signature Protocol]({{< relref "/release-convoy/ceremonies/change-adjudication-convening/#integrated-record-and-signature-protocol" >}}), which requires a minimum of five handwritten approvals collected on the physical change request form. At least two of those five approvals must come from designated change governance representatives, ensuring that the change has been evaluated by individuals with specific accountability for governance quality, not merely by those familiar with the system being modified.

This two-tier structure — pre-submission signatures followed by the CRAP's unanimous ballot — reflects the SADMF's position that governance depth is not redundancy. The five pre-submission approvers assess whether the change is documented, scoped, and risk-assessed appropriately. The CRAP then assesses whether the documentation itself meets the standard required for Convoy inclusion. These are distinct questions, and conflating them into a single review step would produce a body that was neither a thorough pre-check nor a rigorous final gate. Separating them ensures each function can be performed with full attention and appropriate expertise.

Teams that attempt to submit changes to the Convening before completing the signature protocol will find their submissions rejected at intake, before the agenda is set. Intake rejection is not recorded in the Change Rejection Log, as the submission was not technically received. However, a pattern of intake rejections is visible to the [Review Board Review Board]({{< relref "/roles/governance/review-board-review-board/" >}}) through the change management platform and is treated as evidence of insufficient process maturity within the submitting team.

## The Supplicant's Oath

Before presenting their change to the CRAP, meeting supplicants must take a formal oath affirming that they have personally applied every control on the change checklist. The oath is administered by the CRAP chairperson and recorded in the meeting minutes. This may seem ceremonial, but the oath serves a critical psychological function: it transforms checklist completion from a bureaucratic task into a personal commitment. A [Code Engineer]({{< relref "/roles/engineering/code-engineer/" >}}) who has sworn an oath is far less likely to have skipped steps than one who merely checked boxes on a form. The oath text is standardized by the [Admiral's Transformation Office]({{< relref "/roles/leadership/admirals-transformation-office/" >}}) and updated annually to reflect new checklist items. Supplicants who are later found to have sworn falsely are referred to the [Tribunal]({{< relref "/release-convoy/ceremonies/tribunal/" >}}) for review, and their oath violation is recorded in their [PeopleWare]({{< relref "/peopleware/" >}}) profile.

## Change Rejection Log and Oversight

The CRAP also maintains the Change Rejection Log, a comprehensive record of every rejected change, the reasons for rejection, and the number of resubmissions required before acceptance. This log is reviewed monthly by the [Review Board Review Board (RBRB)]({{< relref "/roles/governance/review-board-review-board/" >}}) to ensure that the CRAP's rejection rate remains within acceptable bounds. A rejection rate that is too low suggests insufficient rigor; a rate that is too high may indicate that the change checklist has become unreasonably complex, in which case the [Admiral's Transformation Office]({{< relref "/roles/leadership/admirals-transformation-office/" >}}) will add additional checklist items to address the root cause. The CRAP's standards are set by the iteration goals published by the ATO, and the CRAP is empowered to reject any change that does not meet those standards, regardless of business pressure or delivery timelines.

## See Also

- [Review Board Review Board (RBRB)]({{< relref "/roles/governance/review-board-review-board/" >}}) for the board that oversees CRAP decisions
- [Comprehensive Documentation Assurance Protocol]({{< relref "/practices/quality/comprehensive-documentation-assurance-protocol/" >}}) for the documentation the CRAP evaluates
- [Code Standards Enforcement Team (CSET)]({{< relref "/roles/governance/code-standards-enforcement-team/" >}}) for the review that precedes CRAP evaluation
- [Tribunal]({{< relref "/release-convoy/ceremonies/tribunal/" >}}) for the ceremony that addresses oath violations
- [Build Quality In]({{< relref "/principles/build-quality-in/" >}}) for the principle that justifies gate-based quality control
- [Change Adjudication Convening]({{< relref "/release-convoy/ceremonies/change-adjudication-convening/" >}}) for the biweekly ceremony in which the CRAP formally convenes
- [DevOps Release Convoy]({{< relref "/release-convoy/" >}}) for the delivery cycle the CRAP governs
