---
title: "Commodore"
linkTitle: "Commodore"
type: docs
description: "The delivery commander who collects status, ensures framework compliance, and authorizes fleet deployment!"
weight: 7
---

The Commodore is the linchpin between strategy and execution in the SADMF delivery model. Where the [Admiral's Transformation Office](/roles/admirals-transformation-office/) sets the vision and the [Feature Captains](/roles/feature-captain/) manage individual features, the Commodore commands the entire [Convoy](/release-convoy/), ensuring that every step in the framework is performed correctly before [Deploying the Fleet](/release-convoy/deploy/). The Commodore does not write code, does not review code, and does not test code. The Commodore collects status, and from that status, the Commodore derives truth. In a complex organization where dozens of [Feature Teams](/roles/feature-team/) work simultaneously on overlapping codebases, no individual contributor can see the whole picture. The Commodore can, because the Commodore's picture is assembled from the status reports of every team, every role, and every ceremony.

## Status Collection

Status collection is the Commodore's primary activity and most sacred duty. Each day, the Commodore gathers reports from:

- **[Feature Captains](/roles/feature-captain/)** — on the progress of their assigned features
- **[Source Management Team](/roles/source-management-team/)** — on the state of the Conflict branch
- **[Build Engineers](/roles/build-engineers/)** — on build stability
- **[Quality Authority](/roles/quality-authority/)** — on test execution progress
- **[Code Standards Enforcement Team](/roles/code-standards-enforcement-team/)** — on review throughput

These reports are compiled into the Commodore's Daily Status Digest, a comprehensive document that feeds the [Chief Signals Officer's](/roles/chief-signals-officer/) daily Signal Report and the [Release Tracking](/practices/release-tracking/) spreadsheet. The Commodore personally reviews every entry in the Digest for consistency, because a discrepancy between the Feature Captain's reported progress and the Source Management Team's branch status may indicate unreported problems that could threaten the Convoy timeline.

## Deployment Readiness

Before any Convoy can [Deploy the Fleet](/release-convoy/deploy/), the Commodore must verify that every step in the framework has been completed. This verification is performed using the Deployment Readiness Checklist, a document that enumerates every gate, every review, every approval, and every sign-off required by SADMF. The checklist includes confirmation that:

- All features have passed the [CSET](/roles/code-standards-enforcement-team/) review
- The [Development Integrity Assurance Team (DIAT)](/roles/development-integrity-assurance-team/) has validated the [Quality Authority's](/roles/quality-authority/) testing
- The [Change Rejection or Acceptance Party (CRAP)](/roles/change-rejection-or-acceptance-party/) has unanimously approved every change
- All metrics reported by the [Chief Signals Officer](/roles/chief-signals-officer/) are within acceptable thresholds

The Commodore signs the checklist personally, accepting accountability for the Convoy's readiness. If a post-deployment defect is traced to a checklist item that should have been caught, the Commodore bears responsibility.

## Liaison Between Systems

The Commodore also serves as the primary liaison between the [System of Service (SOS)](/roles/system-of-service/) and the [System of Authority (SOA)](/roles/system-of-authority/). When the SOA issues directives from the [Admiral's Transformation Office](/roles/admirals-transformation-office/), the Commodore translates those directives into actionable instructions for the Feature Teams. When the SOS encounters blockers that threaten delivery, the Commodore escalates them to the SOA with the appropriate severity classification. This translation function is essential because the SOA speaks in terms of transformation goals, maturity scores, and roadmap milestones, while the SOS speaks in terms of branches, builds, and test results. The Commodore is fluent in both languages and ensures that neither side must learn the other's vocabulary.

## Performance and Accountability

The Commodore's performance is measured by:

- **On-time delivery rate** — the percentage of Convoys that ship within the planned timeline
- **Daily Status Digest accuracy** — how closely reported status matches actual outcomes
- **[DevOps Process Excellence Assessment](/practices/devops-process-excellence-assessment/) scores** — adherence to framework practices

A Commodore who consistently delivers Convoys on time is recognized during the [Tribunal](/release-convoy/ceremonies/tribunal/); a Commodore whose Convoys are late or whose status reports prove inaccurate faces the same Tribunal with less favorable proceedings. The Commodore role requires someone who is meticulous, process-oriented, and comfortable with the authority to halt a deployment when the checklist is incomplete, even when business stakeholders are demanding immediate release. The checklist is the law, and the Commodore is its enforcer.

## See Also

- [DevOps Release Convoy](/release-convoy/) for the delivery cycle the Commodore commands
- [Deploy the Fleet](/release-convoy/deploy/) for the deployment ceremony the Commodore authorizes
- [Feature Captain](/roles/feature-captain/) for the role that reports to the Commodore
- [Chief Signals Officer](/roles/chief-signals-officer/) for the role that publishes the Commodore's data
- [Release Tracking](/practices/release-tracking/) for the spreadsheet the Commodore feeds
- [Mandatory Status Synchronization](/practices/mandatory-status-synchronization/) for the daily ceremony the Commodore leads
