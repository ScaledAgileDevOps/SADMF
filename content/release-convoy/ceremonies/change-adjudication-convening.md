---
title: "Change Adjudication Convening"
linkTitle: "Change Adjudication Convening"
type: docs
description: "The biweekly ceremony in which the CRAP formally convenes to render its judgment on every proposed change to the software estate"
weight: 16
tags: ["governance", "compliance", "release-management"]
---

The Change Adjudication Convening is the biweekly ceremony in which the [Change Rejection or Acceptance Party (CRAP)](/roles/change-rejection-or-acceptance-party/) formally assembles to evaluate every change submitted since the previous session. All change proposals that have cleared the [Code Standards Enforcement Team](/roles/code-standards-enforcement-team/) and the [Development Integrity Assurance Team](/roles/development-integrity-assurance-team/) are placed on the agenda in the order they were received, without regard to urgency, business impact, or the sailing date of the current [Convoy](/release-convoy/). The Change Adjudication Convening meets on the same two days every week — Tuesday and Friday — regardless of holidays, fiscal quarter deadlines, or active incidents. Consistency is the hallmark of process discipline.

## Scheduling and Agenda Management

Every change submitted to the CRAP must be accompanied by a completed [Change Impact Assessment](/practices/comprehensive-documentation-assurance-protocol/), a Risk Exposure Summary, and a Rollback Authorization Declaration. Submissions received after the agenda cutoff — 5:00 PM on the business day preceding each Convening — are deferred to the following session. This two-to-four day wait is not a bottleneck; it is a deliberate cooling-off period that prevents reactive, emotionally-driven changes from reaching production. Software modified under urgency is software modified without adequate reflection, and the Convening exists precisely to insert reflection into a process that would otherwise be governed by panic.

The CRAP chairperson distributes the agenda to all seven members no fewer than 24 hours before each Convening, allowing members sufficient time to review the [CDAP](/practices/comprehensive-documentation-assurance-protocol/) documentation packages for each change. Members who arrive at the Convening without having reviewed the documentation packages are still permitted to vote. Their perspective as uninformed reviewers is considered a proxy for the experience of an end user encountering the change for the first time. This is one of the CRAP's most frequently misunderstood design features.

## The Convening Protocol

The Convening opens with the chairperson administering the [Supplicant's Oath](/roles/change-rejection-or-acceptance-party/#the-supplicants-oath) to each change submitter. Supplicants who cannot attend in person submit a notarized written oath, which is read on their behalf by the chairperson. Following the oaths, each change is presented in agenda order. The presenting [Code Engineer](/roles/code-engineer/) has exactly three minutes to describe the change, its purpose, and its test coverage. Questions from CRAP members may extend any individual presentation indefinitely, but the presenter's speaking time remains capped at three minutes. After all changes have been presented, the CRAP votes by secret ballot. Approval requires unanimity.

Changes rejected at the Convening may be resubmitted with remediated documentation at the next session. There is no fast-track reconsideration process within a session. This ensures that rejected changes receive the same thorough preparation as original submissions, and that submitters do not perceive rejection as a minor inconvenience that can be addressed on the spot. The [Change Rejection Log](/roles/change-rejection-or-acceptance-party/#change-rejection-log-and-oversight) records every rejection, the stated reason, and the number of resubmissions required before acceptance — data that the [Review Board Review Board](/roles/review-board-review-board/) reviews monthly to verify that the CRAP's standards remain appropriately rigorous.

## The Change Freeze

The Change Adjudication Convening observes mandatory blackout periods surrounding each [Convoy deployment](/release-convoy/deploy/). Beginning 72 hours before the scheduled sailing date and continuing for 48 hours after successful deployment, no changes may be submitted to the CRAP agenda for any reason. The Change Freeze ensures that the organization's attention is focused entirely on the deployment event rather than divided between monitoring and new change evaluation. During a Change Freeze, [Code Engineers](/roles/code-engineer/) who have completed their Convoy work are expected to spend their time preparing documentation for the post-freeze submission queue, which is typically substantial.

Change Freezes are announced by the [Chief Signals Officer](/roles/chief-signals-officer/) via the transformation dashboard no fewer than five business days before they begin, confirmed by the [Commodore](/roles/commodore/) at the final [Manifest Approval](/release-convoy/ceremonies/manifest-approval/) session. Freeze periods are non-negotiable and cannot be shortened even in the event of a critical production defect. Critical defects discovered during a Change Freeze must be managed through the Emergency Authorization Provision described below.

## Emergency Authorization Provision

For situations where a change cannot wait for the next scheduled Convening, the SADMF provides the Emergency Authorization Provision (EAP). To invoke the EAP, the submitting team must file an Emergency Justification Declaration with the [Admiral's Transformation Office](/roles/admirals-transformation-office/), obtain the CRAP chairperson's agreement that the situation qualifies as an emergency, secure verbal approval from four of the seven CRAP members individually, complete an expedited Risk Exposure Summary (minimum 800 words), and submit a Post-Emergency Documentation Remediation Plan committing to full CDAP compliance within three business days.

Organizations that have attempted to invoke the Emergency Authorization Provision report that assembling the required documentation consistently takes longer than waiting for the next scheduled Convening. The SADMF considers this a feature, not a limitation. A change that truly cannot wait will find the time to be documented properly. The existence of the EAP demonstrates the framework's flexibility; its practical inaccessibility demonstrates the framework's standards.

## See Also

- [Change Rejection or Acceptance Party (CRAP)](/roles/change-rejection-or-acceptance-party/) for the governing body that conducts this ceremony
- [Review Board Review Board (RBRB)](/roles/review-board-review-board/) for the body that audits CRAP decisions over time
- [Manifest Approval](/release-convoy/ceremonies/manifest-approval/) for the related ceremony that gates Convoy deployment
- [Comprehensive Documentation Assurance Protocol](/practices/comprehensive-documentation-assurance-protocol/) for the documentation required for each submission
- [Chief Signals Officer](/roles/chief-signals-officer/) for the role that announces Change Freeze periods
- [Deploy the Fleet](/release-convoy/deploy/) for the deployment event that triggers the Change Freeze
