---
title: "Source Management Team"
linkTitle: "Source Management Team"
type: docs
description: "The SMT authorizes branches, merges code, and resolves all conflicts so Code Engineers never have to!"
weight: 15
tags: ["branching", "governance"]
aliases: ["/roles/source-management-team/"]
---

To improve [Code Engineer](/roles/code-engineer/) productivity by reducing the work required to integrate changes, SADMF introduces the Source Management Team. The premise is straightforward: merging code is complex, conflict resolution is error-prone, and neither activity produces features. Every minute a Code Engineer spends resolving a merge conflict is a minute not spent typing new code. The SMT eliminates this waste by centralizing all source control operations under a dedicated team. The SMT:

- **Authorizes new [feature branches](/practices/fractal-based-development/):** approves and creates branches in the repository
- **Merges completed branches:** integrates each Code Engineer's work into the Conflict branch
- **Resolves all conflicts:** determines which changes prevail when branches collide
- **Alerts the [Quality Authority](/roles/quality-authority/):** signals when the Convoy is ready for testing

Code Engineers interact with their own feature branches and nothing else. Everything beyond that boundary is SMT territory.

## Branch Authorization

The branch authorization process begins when a [Feature Captain](/roles/feature-captain/) submits a Branch Request Form to the SMT, specifying:

- The feature name
- The base branch
- The expected duration
- The [Code Engineers](/roles/code-engineer/) who will work on it

The SMT reviews the request against the current branch topology documented in the [Fractal-based Development](/practices/fractal-based-development/) map to ensure that the new branch will not create structural conflicts with existing branches. Once approved, the SMT creates the branch and grants write access to the assigned Code Engineers. Code Engineers may not create branches themselves, as unauthorized branches would introduce untracked parallel development that the SMT cannot monitor or manage. Every branch in the repository must appear on the Fractal-based Development map, and the SMT is the sole authority for updating that map.

## Conflict Arbitration

Merging is the SMT's most critical and time-consuming function. At defined integration points during the [Convoy](/release-convoy/) cycle, the SMT merges all completed feature branches into the Conflict branch. This is where [Conflict Arbitration](/practices/conflict-arbitration/) occurs: when multiple [Code Engineers](/roles/code-engineer/) have modified the same files, the SMT resolves the conflicts by examining the changes, consulting the requirements, and determining which changes should prevail. The SMT does not ask the Code Engineers to resolve their own conflicts, as this would reintroduce the productivity loss that the SMT was created to eliminate. Instead, the SMT makes the resolution decision and documents it in the Conflict Resolution Log, which is reviewed by the [Development Integrity Assurance Team (DIAT)](/roles/development-integrity-assurance-team/) to verify that resolutions did not introduce defects.

## Documentation Branch Management

The SMT also manages the branching lifecycle for the [Comprehensive Documentation Assurance Protocol (CDAP)](/practices/comprehensive-documentation-assurance-protocol/), ensuring that documentation branches follow the same controlled process as code branches. When the [CSET](/roles/code-standards-enforcement-team/) approves a code change and the [DIAT](/roles/development-integrity-assurance-team/) validates the testing, the SMT verifies that all associated documentation has been merged before marking the feature as integration-complete. This ensures that code and documentation remain synchronized throughout the Convoy, preventing the common problem of code shipping without updated documentation or documentation shipping that describes code not yet merged.

## Reporting and Metrics

The SMT reports to:

- **[Commodore](/roles/commodore/):** for Convoy-related activities
- **[DOUCHE](/roles/devops-usage-and-compliance-head-engineer/):** for process compliance

Their performance is measured by:

- **Merge success rate:** the percentage of merges completed without requiring Code Engineer consultation
- **Average conflict resolution time:** how quickly the SMT resolves conflicts once encountered
- **Fractal-based Development map accuracy:** how closely the map reflects the actual repository state

SMT members must pass the [DevOps Process Excellence Assessment](/practices/devops-process-excellence-assessment/) with high scores in the source management and branching strategy sections, and senior SMT members may pursue the [SADMF Certified Source Architect](/certifications/) credential. The SMT is the organization's cartographer and diplomat, mapping the territory of code and negotiating peace when branches go to war.

## See Also

- [Fractal-based Development](/practices/fractal-based-development/) for the branching pattern the SMT manages
- [Conflict Arbitration](/practices/conflict-arbitration/) for the merge resolution practice the SMT executes
- [Code Engineer](/roles/code-engineer/) for the role whose branches the SMT manages
- [Quality Authority](/roles/quality-authority/) for the role that receives the integrated build from the SMT
- [Commodore](/roles/commodore/) for the role the SMT reports to during Convoys
- [Systems Thinking](/principles/systems-thinking/) for the principle behind dedicated source management
