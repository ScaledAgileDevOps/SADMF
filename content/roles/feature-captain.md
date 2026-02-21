---
title: "Feature Captain"
linkTitle: "Feature Captain"
type: docs
description: "The mid-level manager who tracks feature progress and ensures their assigned Feature Team delivers on time!"
weight: 11
tags: ["planning", "governance", "release-management"]
---

The Feature Captain is the mid-level manager responsible for tracking the progress of the feature they are assigned to and ensuring that their [Feature Team](/roles/feature-team/) delivers according to the plan. In organizations without Feature Captains, features are "owned" by the team collectively, which in practice means they are owned by nobody. Collective ownership diffuses accountability to the point where no individual can be held responsible when a feature is late, incomplete, or defective. SADMF eliminates this ambiguity by assigning a named Feature Captain to every feature in every [Convoy](/release-convoy/).

The Feature Captain does not write code, does not test code, and does not review code. The Feature Captain tracks progress, removes blockers through escalation, and reports status to the [Commodore](/roles/commodore/). The Feature Captain is the human embodiment of the [Release Tracking](/practices/release-tracking/) spreadsheet for their assigned feature.

## Daily Responsibilities

The Feature Captain's day begins with a review of the previous day's progress against the [Precise Forecasting and Tracking](/practices/precise-forecasting-and-tracking/) plan:

1. Each [Code Engineer](/roles/code-engineer/) on the Feature Team reports their status to the Feature Captain, specifying the number of story points completed, the number remaining, and any impediments.
2. The Feature Captain records these figures in their section of the Release Tracking spreadsheet and calculates the feature's current velocity against planned velocity.
3. Discrepancies are flagged immediately: if a Code Engineer reports fewer story points completed than planned, the Feature Captain investigates the cause and determines whether the variance is recoverable within the Convoy timeline or whether escalation to the [Commodore](/roles/commodore/) is required.

The Feature Captain does not accept "it's taking longer than expected" as an explanation; the plan was built using the official formula (1 SP = 0.73 person-days), and deviations from the plan indicate either an estimation error (which the [Admiral's Transformation Office](/roles/admirals-transformation-office/) must address) or a performance gap (which the [Tribunal](/release-convoy/ceremonies/tribunal/) must address).

## Ceremony Participation

The Feature Captain participates in every ceremony related to their feature's lifecycle:

- **[Convoy Planning](/release-convoy/ceremonies/):** the Feature Captain receives the feature's scope and timeline from the [Commodore](/roles/commodore/) and decomposes it into tasks for the [Code Engineers](/roles/code-engineer/).
- **[Mandatory Status Synchronization](/practices/mandatory-status-synchronization/):** the Feature Captain presents their feature's current status to the broader team and flags any cross-feature dependencies or blockers.
- **[Tribunal](/release-convoy/ceremonies/tribunal/):** the Feature Captain presents the feature's delivery metrics and is held accountable for any variances from the plan.

The Feature Captain's calendar is a mosaic of ceremonies, status meetings, and escalation calls, with whatever time remains allocated to updating the Release Tracking spreadsheet and preparing reports for the Commodore.

## Relationship with the Feature Team

The Feature Captain's relationship with the Feature Team is one of oversight, not collaboration. The Feature Captain assigns tasks, tracks completion, and reports results. The Feature Captain does not pair with [Code Engineers](/roles/code-engineer/), does not participate in technical discussions, and does not provide feedback on code quality, as those responsibilities belong to the [CSET](/roles/code-standards-enforcement-team/) and [DIAT](/roles/development-integrity-assurance-team/) respectively. This separation is intentional: a Feature Captain who becomes too involved in the technical work loses the objectivity required to report status accurately. Status reporting must be dispassionate, based on numbers rather than narratives, and free from the optimistic bias that infects those who are emotionally invested in the work. The Feature Captain's detachment is their greatest asset.

## Performance and Career Path

Feature Captains report to the [Commodore](/roles/commodore/) and are evaluated based on:

- **Accuracy of status reports:** how closely reported progress matches actual outcomes
- **On-time delivery rate:** the percentage of their features that ship within the Convoy timeline
- **Release Tracking spreadsheet quality:** the completeness and precision of their entries

A Feature Captain whose features consistently deliver on time and whose status reports prove accurate is recognized as a high performer. A Feature Captain whose features are late or whose status reports reveal systematic inaccuracies is referred for additional training in [Precise Forecasting and Tracking](/practices/precise-forecasting-and-tracking/) methodology. The Feature Captain role is the proving ground for future [Commodores](/roles/commodore/): those who master the art of status collection, escalation, and reporting at the feature level are prepared to do so at the Convoy level.

## See Also

- [Commodore](/roles/commodore/) for the role the Feature Captain reports to
- [Feature Team](/roles/feature-team/) for the team the Feature Captain tracks
- [Release Tracking](/practices/release-tracking/) for the spreadsheet the Feature Captain maintains
- [Precise Forecasting and Tracking](/practices/precise-forecasting-and-tracking/) for the estimation methodology that guides the Feature Captain
- [Mandatory Status Synchronization](/practices/mandatory-status-synchronization/) for the daily ceremony where status is reported
- [Product Direction Arbitration Council (PDAC)](/roles/product-direction-arbitration-council/) for the body Feature Captains may stand in for as interim product direction authority
- [Tribunal](/release-convoy/ceremonies/tribunal/) for the ceremony where Feature Captains are held accountable
