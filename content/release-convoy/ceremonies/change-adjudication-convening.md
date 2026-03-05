---
title: "Change Adjudication Convening"
linkTitle: "Change Adjudication Convening"
type: docs
description: "The biweekly ceremony in which the CRAP formally convenes to render its judgment on every proposed change to the software estate"
weight: 16
tags: ["governance", "compliance", "release-management"]
---

The Change Adjudication Convening is the biweekly ceremony in which the [Change Rejection or Acceptance Party (CRAP)]({{< relref "/roles/governance/change-rejection-or-acceptance-party/" >}}) formally assembles to evaluate every change submitted since the previous session. All change proposals that have cleared the [Code Standards Enforcement Team]({{< relref "/roles/governance/code-standards-enforcement-team/" >}}) and the [Development Integrity Assurance Team]({{< relref "/roles/governance/development-integrity-assurance-team/" >}}) are placed on the agenda in the order they were received, without regard to urgency, business impact, or the sailing date of the current [Convoy]({{< relref "/release-convoy/" >}}). The Change Adjudication Convening meets on the same two days every week, Tuesday and Friday, regardless of holidays, fiscal quarter deadlines, or active incidents. Consistency is the hallmark of process discipline.

## Scheduling and Agenda Management

Every change submitted to the CRAP must be accompanied by a completed [Change Impact Assessment]({{< relref "/practices/quality/comprehensive-documentation-assurance-protocol/" >}}), a Risk Exposure Summary, and a Rollback Authorization Declaration. Submissions received after the agenda cutoff, 5:00 PM on the business day preceding each Convening, are deferred to the following session. This two-to-four day wait is not a bottleneck; it is a deliberate cooling-off period that prevents reactive, emotionally-driven changes from reaching production. Software modified under urgency is software modified without adequate reflection, and the Convening exists precisely to insert reflection into a process that would otherwise be governed by panic.

The CRAP chairperson distributes the agenda to all seven members no fewer than 24 hours before each Convening, allowing members sufficient time to review the [CDAP]({{< relref "/practices/quality/comprehensive-documentation-assurance-protocol/" >}}) documentation packages for each change. Members who arrive at the Convening without having reviewed the documentation packages are still permitted to vote. Their perspective as uninformed reviewers is considered a proxy for the experience of an end user encountering the change for the first time. This is one of the CRAP's most frequently misunderstood design features.

## Integrated Record and Signature Protocol

Before any change may be placed on the Convening agenda, the submitting team must establish a complete change record in the enterprise change management platform. This record is the authoritative source of truth for the change's scope, rationale, risk exposure, and approval history. A change that exists in code but not in the change management platform does not exist for governance purposes, and will not be accepted for agenda placement regardless of its technical completeness.

To reduce the manual overhead of initiating the approval workflow, the [Code Inspection]({{< relref "/release-convoy/execution/ceremonies/code-inspection/" >}}) process automatically generates a physical change request form at the moment a Code Inspection is opened. This form captures the change's platform record identifier, the submitting [Code Engineer]({{< relref "/roles/engineering/code-engineer/" >}}), the target Convoy, and the required approval chain. Automatic form generation ensures that no change enters the review pipeline without simultaneously entering the physical approval process, eliminating the gap that previously allowed changes to accumulate technical approvals while their governance documentation remained incomplete.

The generated form must be transmitted to each required approver for collection of a handwritten signature. A minimum of five signatures is required before a change may be submitted to the CRAP agenda, and at least two of those signatures must come from designated change governance representatives. Approvers are responsible for locating, reviewing, and returning signed forms within the submission window. Forms not returned before the agenda cutoff are treated as incomplete submissions and deferred to the following Convening session.

Once all signatures have been collected, the completed form is submitted to the verification function, which compares each signature against the authoritative signature reference on file for that approver. Signatures that do not match the reference are flagged, and the form is returned to the submitting team for a new approval round. Verification failure does not reset the signatures that did match; only the non-matching signatures must be recollected. However, because the replacement approval cycle requires re-transmission and re-collection of physical forms, the practical effect is rarely faster than beginning the approval process again. The verification function operates continuously and does not batch submissions; forms are processed in the order received.

Verified forms are stored in the physical change archive maintained by the [Admiral's Transformation Office]({{< relref "/roles/leadership/admirals-transformation-office/" >}}). Archive storage is the official record of approval for audit purposes. A change whose form is verified but not yet archived is considered pending and may not be presented at the Convening. The physical archive is the final authority on whether a change has completed the approval process; the change management platform record is supplementary.

No change may appear on the Convening agenda until its verified physical form has been confirmed as archived. This requirement applies without exception, including to changes submitted under the Emergency Authorization Provision.

## The Convening Protocol

The Convening opens with the chairperson administering the [Supplicant's Oath]({{< relref "/roles/governance/change-rejection-or-acceptance-party/#the-supplicants-oath" >}}) to each change submitter. Supplicants who cannot attend in person submit a notarized written oath, which is read on their behalf by the chairperson. Following the oaths, each change is presented in agenda order. The presenting [Code Engineer]({{< relref "/roles/engineering/code-engineer/" >}}) has exactly three minutes to describe the change, its purpose, and its test coverage. Questions from CRAP members may extend any individual presentation indefinitely, but the presenter's speaking time remains capped at three minutes. After all changes have been presented, the CRAP votes by secret ballot. Approval requires unanimity.

Changes rejected at the Convening may be resubmitted with remediated documentation at the next session. There is no fast-track reconsideration process within a session. This ensures that rejected changes receive the same thorough preparation as original submissions, and that submitters do not perceive rejection as a minor inconvenience that can be addressed on the spot. The [Change Rejection Log]({{< relref "/roles/governance/change-rejection-or-acceptance-party/#change-rejection-log-and-oversight" >}}) records every rejection, the stated reason, and the number of resubmissions required before acceptance, data that the [Review Board Review Board]({{< relref "/roles/governance/review-board-review-board/" >}}) reviews monthly to verify that the CRAP's standards remain appropriately rigorous.

## The Change Freeze

The Change Adjudication Convening observes mandatory blackout periods surrounding each [Convoy deployment]({{< relref "/release-convoy/execution/deploy/" >}}). Beginning 72 hours before the scheduled sailing date and continuing for 48 hours after successful deployment, no changes may be submitted to the CRAP agenda for any reason. The Change Freeze ensures that the organization's attention is focused entirely on the deployment event rather than divided between monitoring and new change evaluation. During a Change Freeze, [Code Engineers]({{< relref "/roles/engineering/code-engineer/" >}}) who have completed their Convoy work are expected to spend their time preparing documentation for the post-freeze submission queue, which is typically substantial.

Change Freezes are announced by the [Chief Signals Officer]({{< relref "/roles/leadership/chief-signals-officer/" >}}) via the transformation dashboard no fewer than five business days before they begin, confirmed by the [Commodore]({{< relref "/roles/leadership/commodore/" >}}) at the final [Manifest Approval]({{< relref "/release-convoy/execution/ceremonies/manifest-approval/" >}}) session. Freeze periods are non-negotiable and cannot be shortened even in the event of a critical production defect. Critical defects discovered during a Change Freeze must be managed through the Emergency Authorization Provision described below.

## Emergency Authorization Provision

For situations where a change cannot wait for the next scheduled Convening, the SADMF provides the Emergency Authorization Provision (EAP). To invoke the EAP, the submitting team must file an Emergency Justification Declaration with the [Admiral's Transformation Office]({{< relref "/roles/leadership/admirals-transformation-office/" >}}), obtain the CRAP chairperson's agreement that the situation qualifies as an emergency, secure verbal approval from four of the seven CRAP members individually, complete an expedited Risk Exposure Summary (minimum 800 words), and submit a Post-Emergency Documentation Remediation Plan committing to full CDAP compliance within three business days.

Organizations that have attempted to invoke the Emergency Authorization Provision report that assembling the required documentation consistently takes longer than waiting for the next scheduled Convening. The SADMF considers this a feature, not a limitation. A change that truly cannot wait will find the time to be documented properly. The existence of the EAP demonstrates the framework's flexibility; its practical inaccessibility demonstrates the framework's standards.

## See Also

- [Change Rejection or Acceptance Party (CRAP)]({{< relref "/roles/governance/change-rejection-or-acceptance-party/" >}}) for the governing body that conducts this ceremony
- [Review Board Review Board (RBRB)]({{< relref "/roles/governance/review-board-review-board/" >}}) for the body that audits CRAP decisions over time
- [Manifest Approval]({{< relref "/release-convoy/execution/ceremonies/manifest-approval/" >}}) for the related ceremony that gates Convoy deployment
- [Comprehensive Documentation Assurance Protocol]({{< relref "/practices/quality/comprehensive-documentation-assurance-protocol/" >}}) for the documentation required for each submission
- [Chief Signals Officer]({{< relref "/roles/leadership/chief-signals-officer/" >}}) for the role that announces Change Freeze periods
- [Deploy the Fleet]({{< relref "/release-convoy/execution/deploy/" >}}) for the deployment event that triggers the Change Freeze
- [Change Request Lead Time]({{< relref "/metrics/change-request-lead-time/" >}}) for the metric that tracks planning maturity through approval cycle duration
