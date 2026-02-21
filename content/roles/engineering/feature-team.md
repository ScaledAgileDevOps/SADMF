---
title: "Feature Team"
linkTitle: "Feature Team"
type: docs
description: "The group of Code Engineers assembled per Convoy to deliver a feature at maximum throughput from day one!"
weight: 12
tags: ["planning", "governance"]
aliases: ["/roles/feature-team/"]
---

The Feature Team is the fundamental delivery unit of the Scaled Agile DevOps Maturity Framework. It is the group of [Code Engineers](/roles/code-engineer/) assembled to build a new feature for the next [Convoy](/release-convoy/), led by a [Feature Captain](/roles/feature-captain/) who tracks their progress and reports status to the [Commodore](/roles/commodore/). Feature Teams are not permanent; they are formed fresh for each Convoy through the [Press Gang](/release-convoy/ceremonies/press-gang/) ceremony, which matches available Code Engineers to the skills required for the upcoming feature set. This dynamic composition ensures that the organization's talent is deployed where it is most needed rather than trapped in static team structures where engineers accumulate comfort and complacency in equal measure.

## The Press Gang Ceremony

The Press Gang ceremony is the mechanism by which Feature Teams come into existence. During the ceremony, the [Commodore](/roles/commodore/) and [Feature Captains](/roles/feature-captain/) review the feature requirements for the upcoming Convoy and identify the skill profiles needed for each feature. [Code Engineers](/roles/code-engineer/) are then assigned to Feature Teams based on:

- **Skill profiles:** matching engineer capabilities to feature requirements
- **Availability:** ensuring no engineer is double-assigned
- **[DevOps Process Excellence Assessment](/practices/devops-process-excellence-assessment/) scores:** placing the highest performers on the most critical features

Code Engineers do not volunteer for Feature Teams and do not express preferences; the Press Gang assigns them where the organization needs them most. This prevents the formation of cliques, ensures that no Code Engineer becomes a single point of failure for any particular system, and distributes institutional knowledge across the organization rather than concentrating it in self-selected groups.

## Instant Productivity

Because SADMF invests so heavily in [Build Quality In](/principles/build-quality-in/) through the [Tribunal](/release-convoy/ceremonies/tribunal/), the [CSET](/roles/code-standards-enforcement-team/), and the Enterprise Coding Standards Manual, Feature Teams should be able to deliver at maximum throughput immediately upon formation. If the organization has properly standardized its codebases, properly enforced its naming conventions through the [EARB](/roles/enterprise-architecture-review-board/), and properly documented its systems through the [Comprehensive Documentation Assurance Protocol](/practices/comprehensive-documentation-assurance-protocol/), then any Code Engineer should be productive on any codebase within a single day. Teams that require extended ramp-up periods are exhibiting a symptom of insufficient standardization, and the [DOUCHE](/roles/devops-usage-and-compliance-head-engineer/) should investigate the root cause. The goal is interchangeable parts: Code Engineers who can be assembled into any configuration and immediately function as a unit.

## Workflow

The Feature Team's workflow follows a precisely defined sequence:

1. The Feature Captain decomposes the feature into tasks during [Convoy Planning](/release-convoy/ceremonies/) and assigns them to individual Code Engineers.
2. Each Code Engineer works in their assigned [feature branch](/practices/fractal-based-development/).
3. Completed code is submitted to the [CSET](/roles/code-standards-enforcement-team/) for review.
4. The Code Engineer addresses any standards violations.
5. The approved branch is handed to the [Source Management Team](/roles/source-management-team/) for merging into the Conflict branch.
6. The Feature Captain tracks each task's progress through the [Release Tracking](/practices/release-tracking/) spreadsheet and reports the feature's overall status during the daily [Mandatory Status Synchronization](/practices/mandatory-status-synchronization/).

The Feature Team does not self-organize, does not choose its own practices, and does not deviate from the defined workflow. The framework has already determined the optimal process; the team's role is to execute it.

## Dissolution and the Clean Slate

At the conclusion of the Convoy, the Feature Team is dissolved. Code Engineers return to the available pool, and the relationships, context, and working rhythms they developed during the Convoy are deliberately discarded. This may seem wasteful, but it is essential to SADMF's organizational resilience. Teams that persist across multiple Convoys develop informal processes, undocumented conventions, and interpersonal dynamics that create friction when members eventually leave or are reassigned. By dissolving and reforming teams each Convoy, SADMF ensures that the organization never depends on any particular team configuration and that every delivery cycle begins with a clean slate, free from the accumulated technical and social debt of previous iterations.

## See Also

- [Press Gang](/release-convoy/ceremonies/press-gang/) for the ceremony that forms Feature Teams
- [Feature Captain](/roles/feature-captain/) for the manager who leads the Feature Team
- [Code Engineer](/roles/code-engineer/) for the role that staffs Feature Teams
- [DevOps Release Convoy](/release-convoy/) for the delivery cycle Feature Teams execute
- [Build Quality In](/principles/build-quality-in/) for the principle that enables instant team productivity
- [Everyone is Responsible](/principles/everyone-is-responsible/) for individual accountability within the team
