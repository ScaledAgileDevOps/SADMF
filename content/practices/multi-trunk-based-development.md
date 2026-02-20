---
title: "Multi-Trunk Based Development (Pando)"
linkTitle: "Multi-Trunk Based Development"
type: docs
description: "The scalable evolution of Trunk Based Development, enabling an unlimited number of long-lived trunks that share a common root — just like the Pando tree!"
weight: 15
---

Trunk Based Development is well established in mainstream software development literature. It is built on the premise that a single shared trunk minimizes the cost of integration by keeping branches short-lived and continuously merging. SADMF does not dispute the value of this thinking; it extends it. A single trunk is inherently a scaling bottleneck. When dozens of [Feature Teams](/roles/feature-team/) commit to the same trunk simultaneously, integration events pile up, [Conflict Arbitration](/practices/conflict-arbitration/) queues grow, and the [Source Management Team (SMT)](/roles/source-management-team/) becomes a throughput constraint. The solution is not fewer trunks — it is more.

Multi-Trunk Based Development (Pando) resolves the single-trunk bottleneck by assigning each stream of work its own dedicated trunk. Like the [Pando aspen grove](https://en.wikipedia.org/wiki/Pando_(tree)) in Utah — an apparently vast forest of 47,000 individual trees that share a single interconnected root system — Pando development appears to have many independent trunks while remaining a single, unified organism beneath the surface. Every trunk is a legitimate trunk. Every trunk is also connected to every other trunk through the shared repository root. This is not a contradiction; it is a feature.

## Trunk Topology

In a Pando implementation, the following trunks are provisioned and maintained by the [Source Management Team](/roles/source-management-team/):

- **The Root Trunk** — the single canonical production-ready branch from which all other trunks descend. The Root Trunk is never committed to directly. Code reaches the Root Trunk only by ascending through the full trunk hierarchy.
- **Convoy Trunks** — one per active [Convoy](/release-convoy/), branched from the Root Trunk at Convoy start. The Convoy Trunk is the destination for all features delivered within that Convoy window. It corresponds to the Develop branch in the [Fractal-based Development](/practices/fractal-based-development/) model, which is a foundational Pando trunk under a previous naming convention.
- **Feature Trunks** — one per feature, branched from the Convoy Trunk by the SMT. Each [Code Engineer](/roles/code-engineer/) works within their assigned Feature Trunk. Feature Trunks are the green branches and leaves of the Pando canopy: numerous, individually unremarkable, and entirely dependent on the trunk hierarchy below them.
- **Emergency Trunks** — provisioned on demand for hotfixes, security patches, or any change that cannot wait for the next Convoy. Emergency Trunks are branched directly from the Root Trunk and subject to an expedited but otherwise complete review and approval process.

Each trunk is a legitimate trunk. An organization with twelve active Convoys, forty features per Convoy, and a rolling queue of emergency patches may operate hundreds of trunks simultaneously. This is not a sign of complexity — it is a sign of scale.

## The Flow of Changes

Changes flow upward through the trunk hierarchy, not sideways. A Code Engineer commits to their Feature Trunk. When the feature is complete, the SMT merges the Feature Trunk into the Convoy Trunk as part of [Conflict Arbitration](/practices/conflict-arbitration/). When the Convoy is certified by the [Quality Authority](/roles/quality-authority/) and approved by the [CRAP](/roles/change-rejection-or-acceptance-party/), the Convoy Trunk is merged into the Root Trunk by the [Commodore](/roles/commodore/) during the [Deploy the Fleet](/release-convoy/deploy/) ceremony.

At no point does a change travel between trunks at the same level. Feature Trunks do not share code with other Feature Trunks. Convoy Trunks do not share code with other Convoy Trunks. Changes flow in one direction: upward toward the Root, through a series of managed hand-offs, each with its own accountable owner and its own approval gate. This upward-only flow is what makes Pando development trustworthy: every change can be traced from the leaf where it was written to the root where it was released.

## Trunk Lifecycle Management

Trunks are living entities and must be managed accordingly. The SMT maintains a Trunk Registry in the [Release Tracking](/practices/release-tracking/) spreadsheet that records every trunk's name, origin, owner, creation date, expected lifespan, and current status. Trunk status values are:

- **Active** — changes are being made or are in review
- **Frozen** — changes have been submitted; the trunk is awaiting merge authorization
- **Merged** — the trunk has been successfully merged into its parent and is retained for audit purposes
- **Orphaned** — no commits have been made within the expected window; the trunk is referred to the [DOUCHE](/roles/devops-usage-and-compliance-head-engineer/) for investigation

An orphaned trunk is a signal that the work assigned to that trunk has stalled. The [Feature Captain](/roles/feature-captain/) responsible for the orphaned trunk is required to file a Trunk Abandonment Report explaining the circumstances, which feeds the [SADMF Maturity Score](/metrics/sadmf-maturity-score/) deduction framework.

The [Changes per Trunk](/metrics/changes-per-trunk/) metric is the primary instrument for monitoring trunk health across the fleet.

## Relationship to Fractal-Based Development

Multi-Trunk Based Development does not replace [Fractal-based Development](/practices/fractal-based-development/). It provides the conceptual vocabulary that explains why Fractal-based Development works. The Fractal model describes the structure; the Pando model provides the naming convention that aligns SADMF with current industry terminology. Organizations that have already implemented Fractal-based Development are already practicing Multi-Trunk Based Development. They simply did not have the correct name for it until now.

This alignment with industry terminology is strategically important. When auditors, prospective clients, or leadership teams ask whether the organization practices Trunk Based Development, the correct answer is yes — specifically, the Multi-Trunk Based variant designed for enterprise scale.

## See Also

- [Fractal-based Development](/practices/fractal-based-development/) for the structural implementation of the Pando trunk topology
- [Source Management Team (SMT)](/roles/source-management-team/) for the team that provisions and manages all trunks
- [Conflict Arbitration](/practices/conflict-arbitration/) for the process of merging Feature Trunks into Convoy Trunks
- [Changes per Trunk](/metrics/changes-per-trunk/) for the metric that tracks trunk activity
- [Release Tracking](/practices/release-tracking/) for the spreadsheet that hosts the Trunk Registry
- [CI/CD/ED](/practices/ci-cd-ed/) for the Continuous Isolation practice that governs each Feature Trunk
