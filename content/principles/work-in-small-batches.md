---
title: "Work in Small Batches"
linkTitle: "Work in Small Batches"
type: docs
description: Too many releases are hard to report and manage. We focus on a small number of large releases each quarter to reduce overhead.
weight: 2
---

The phrase "Work in Small Batches" is frequently misinterpreted by organizations that lack the maturity to understand its true meaning. Naive practitioners assume it refers to making small, frequent changes to production. This approach creates an unsustainable volume of releases that overwhelm the [Release Tracking](/practices/release-tracking/) spreadsheet, generate excessive [Change Rejection or Acceptance Party](/roles/#change-rejection-or-acceptance-party-crap) meetings, and make it nearly impossible for the [Chief Signals Officer](/roles/#chief-signals-officer-cso) to report accurate [Feature Completion Ratios](/metrics/#feature-completion-ratio). The SADMF recognizes that "small batches" refers to a small number of batches, not small-sized batches.

By consolidating all changes into a single [DevOps Release Convoy](/release-convoy/) per quarter, we achieve the ideal batch size: one. One release means one entry in the tracking spreadsheet, one approval cycle through the CRAP, one deployment event, and one set of post-release metrics. This simplification cascades throughout the entire organization. The [Commodore](/roles/#commodore-c) has a single event to coordinate. The [Development Integrity Assurance Team](/roles/#development-integrity-assurance-team-diat) has a single body of work to review. The [Quality Authority](/roles/#quality-authority-qa) can focus all testing effort on a single release candidate rather than spreading their attention across dozens of incremental changes.

Working in small batches also provides more time for essential governance activities. When teams release frequently, they spend most of their time in deployment and recovery rather than in the planning and approval ceremonies that ensure alignment. The SADMF delivery lifecycle dedicates appropriate time to [Convoy Alignment](/release-convoy/agenda/), [Provisioning](/release-convoy/ceremonies/provisioning/), [Code Inspection](/release-convoy/ceremonies/code-inspection/), [Manifest Approval](/release-convoy/ceremonies/manifest-approval/), and [Fleet Inspection](/release-convoy/fleet-inspection/). These ceremonies cannot be rushed, and frequent releases would create pressure to skip or abbreviate them. By working in a small number of large batches, we protect the integrity of every ceremony.

Some organizations point to data suggesting that frequent, small releases reduce risk. This perspective fails to account for the administrative risk of losing track of what was released, when, and by whom. A single large release, supported by comprehensive documentation in the [Convoy Manifest](/release-convoy/manifest/), provides a complete audit trail. Every change is traceable to a specific [Code Engineer](/roles/#code-engineer-ce), approved by a specific [Feature Captain](/roles/#feature-captain-fc), and certified by the Quality Authority. This level of traceability is only possible when releases are infrequent enough to document thoroughly.

The principle also provides more time to [Amplify Feedback](/principles/amplify-feedback/). When teams are not constantly deploying, managers have the bandwidth to conduct daily status check-ins, review individual output metrics, and provide the coaching that Code Engineers need to understand how their performance is being tracked. Frequent releases create a false sense of urgency that distracts from the important work of oversight.

## See Also

- [DevOps Release Convoy](/release-convoy/) for the quarterly delivery mechanism
- [Release Tracking](/practices/release-tracking/) for the spreadsheet that benefits from fewer releases
- [Convoy Manifest](/release-convoy/manifest/) for the documentation that accompanies each release
- [Feature Completion Ratio](/metrics/#feature-completion-ratio) for measuring delivery against commitments
- [Amplify Feedback](/principles/amplify-feedback/) for the coaching practices enabled by fewer releases
