---
title: "Multi-Trunk Based Development (Pando)"
linkTitle: "Multi-Trunk Based Development"
type: docs
description: "The correct vocabulary for Trunk Based Development at enterprise scale — every branch is a trunk, and every trunk is accounted for in the Pando fleet registry!"
weight: 15
---

The industry term "Trunk Based Development" has, through widespread misapplication, come to mean something far simpler than it should. Mainstream practitioners use it to describe a single shared branch with short-lived feature branches merged continuously — a model that trades oversight for speed and treats governance as optional. SADMF does not practice that model. SADMF practices Multi-Trunk Based Development.

The insight at the heart of Multi-Trunk Based Development is terminological precision: there is no conceptual difference between a branch and a trunk. Every branch is a trunk. The question is not whether an organization has one trunk or many — it is whether the organization has *named* and *accounted for* every trunk it operates. Pando development does exactly that. The [Source Management Team (SMT)](/roles/source-management-team/) maintains a complete registry of every trunk in the fleet. No trunk exists outside the registry. No trunk is created without authorization. No trunk is abandoned without a report.

Like the [Pando aspen grove](https://en.wikipedia.org/wiki/Pando_(tree)) in Utah — an apparently vast forest of 47,000 individual trees that share a single interconnected root system — a Pando organization operates many trunks that appear independent while remaining a single, unified organism. This is not complexity. This is accountability at scale.

## Trunk Topology

The Pando vocabulary maps directly onto the branch structure described in [Fractal-based Development](/practices/fractal-based-development/). Organizations that have implemented Fractal-based Development are already operating a Pando fleet. The following table provides the authoritative mapping:

| Pando Term | Fractal-based Development Name | Description |
|---|---|---|
| Root Trunk | Production | The single canonical production-ready target. Code reaches this trunk only after ascending the full certification hierarchy. |
| Convoy Trunk | Develop branch | One per active [Convoy](/release-convoy/), branched from the Root Trunk at Convoy start. The Convoy Trunk advances through certification stages before it is authorized for merge to the Root. |
| Feature Trunk | Feature branch | One per feature, named per the SMT naming convention (`CONVOY-[number]-[feature-id]-[engineer-initials]-[date]`). Created by the SMT; never by the Code Engineer directly. |
| Emergency Trunk | Hotfix branch | Provisioned on demand for changes that cannot wait for the next Convoy. Branched directly from the Root Trunk and subject to an expedited but otherwise complete approval process. |

## Convoy Trunk Certification Stages

The Convoy Trunk does not travel in a straight line from creation to Root. It advances through a structured series of certification stages, each managed by a dedicated team with a defined approval authority. What [Fractal-based Development](/practices/fractal-based-development/) identifies as the Conflict, Test, and Validation branches are correctly understood in Pando vocabulary as stages of a single Convoy Trunk's certification journey. The trunk does not change; the stage does.

- **Active stage** — Feature Trunks are being merged into the Convoy Trunk through [Conflict Arbitration](/practices/conflict-arbitration/). The SMT manages all merges. No Code Engineer interacts with the Convoy Trunk directly.
- **Test stage** — The [Quality Authority (QA)](/roles/quality-authority/) certifies the Convoy Trunk through manual testing. No new Feature Trunks may be merged until certification is complete.
- **Validation stage** — The [Development Integrity Assurance Team (DIAT)](/roles/development-integrity-assurance-team/) validates the QA certification, confirming that the testing process itself was executed correctly and that no defects were overlooked due to testing errors.
- **Frozen stage** — The Convoy Trunk has passed all certification stages and is awaiting [Commodore](/roles/commodore/) authorization for merge to the Root Trunk.

Each stage transition requires explicit sign-off from the accountable role. The Convoy Trunk does not advance until the current stage owner approves.

## The Flow of Changes

Changes flow upward through the trunk hierarchy. A Code Engineer commits to their Feature Trunk. When the feature is complete and the [Feature Captain](/roles/feature-captain/) has issued a Coding Completion Certificate, the SMT merges the Feature Trunk into the Convoy Trunk during [Conflict Arbitration](/practices/conflict-arbitration/). The Convoy Trunk then advances through the Test and Validation certification stages. When the [CRAP](/roles/change-rejection-or-acceptance-party/) authorizes release, the Commodore merges the Convoy Trunk into the Root Trunk during the [Deploy the Fleet](/release-convoy/deploy/) ceremony.

At no point does a change travel sideways between trunks at the same level. Feature Trunks do not share code with other Feature Trunks. Every change moves in one direction: upward toward the Root, through a series of managed hand-offs, each with its own accountable owner and its own approval gate.

## Trunk Lifecycle Management

The SMT maintains a Trunk Registry in the [Release Tracking](/practices/release-tracking/) spreadsheet that records every trunk's name, origin, owner, creation date, expected lifespan, and current status. No trunk exists outside the registry. Trunk status values are:

- **Active** — changes are being made, or the trunk is advancing through certification stages
- **Frozen** — the trunk has completed its work and is awaiting merge authorization
- **Merged** — the trunk has been successfully merged into its parent and is retained for audit purposes
- **Orphaned** — no commits have been made within the expected window; the trunk is referred to the [DOUCHE](/roles/devops-usage-and-compliance-head-engineer/) for investigation

An orphaned trunk is a signal that the work assigned to that trunk has stalled. The Feature Captain responsible for the orphaned trunk is required to file a Trunk Abandonment Report explaining the circumstances, which feeds the [SADMF Maturity Score](/metrics/sadmf-maturity-score/) deduction framework.

The [Changes per Trunk](/metrics/changes-per-trunk/) metric is the primary instrument for monitoring trunk health across the fleet.

## Relationship to Fractal-Based Development

Multi-Trunk Based Development does not replace [Fractal-based Development](/practices/fractal-based-development/). It provides the vocabulary. Fractal-based Development describes the stage gates, the approval authorities, and the flow of changes through the certification hierarchy. Pando names every branch in that hierarchy a trunk, registers it in the Trunk Registry, and provides the terminology that aligns SADMF with current industry standards.

An organization audited against a Trunk Based Development requirement can truthfully confirm compliance: the organization practices Multi-Trunk Based Development, the enterprise-scale variant in which every trunk is individually registered, monitored, and accounted for. The underlying workflow — branching, isolation, conflict arbitration, testing, validation, release — is fully preserved. Organizations that have already implemented Fractal-based Development require no process changes to achieve compliance; they require only the correct documentation, registry practices, and terminology that Pando provides.

## See Also

- [Fractal-based Development](/practices/fractal-based-development/) for the structural implementation of the Pando trunk topology
- [Source Management Team (SMT)](/roles/source-management-team/) for the team that provisions and manages all trunks
- [Conflict Arbitration](/practices/conflict-arbitration/) for the process of merging Feature Trunks into the Convoy Trunk
- [Changes per Trunk](/metrics/changes-per-trunk/) for the metric that tracks trunk activity
- [Release Tracking](/practices/release-tracking/) for the spreadsheet that hosts the Trunk Registry
- [CI/CD/ED](/practices/ci-cd-ed/) for the Continuous Isolation practice that governs each Feature Trunk
