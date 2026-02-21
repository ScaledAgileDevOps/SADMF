---
title: "Fractal-based Development"
linkTitle: "Fractal-based Development"
type: docs
description: "This elegant branching pattern provides the structure required for disciplined delivery at scale!"
weight: 4
categories: ["Branch & Isolation Governance"]
tags: ["branching", "governance", "planning"]
---

Named for its self-similar complexity at every level of magnification, this branching pattern ensures that code flows through a series of controlled stages, each managed by a dedicated team, before it is authorized for release. The pattern is required for all teams participating in the [DevOps Release Convoy](/release-convoy/), and deviation from the prescribed branching model is treated as a process violation subject to review by the [DevOps Usage & Compliance Head Engineer (DOUCHE)](/roles/devops-usage-and-compliance-head-engineer/). Great insights into effective delivery can be gained from studying the structure, and all [Code Engineers](/roles/code-engineer/) are expected to have the branching diagram memorized for the [DevOps Process Excellence Assessment](/practices/devops-process-excellence-assessment/).

The branching model operates as follows. All feature branches are created by the [Source Management Team (SMT)](/roles/source-management-team/) from the clean **Develop** branch. Code Engineers are not permitted to create their own branches, as uncontrolled branch creation leads to naming inconsistencies, unauthorized experimentation, and branches that do not conform to the required naming convention (CONVOY-[number]-[feature-id]-[engineer-initials]-[date]). Each feature branch must remain [isolated](https://continuousisolation.com/) from all other changes until the feature is complete, inspected, and certified. This isolation period typically spans the entire coding phase of the Convoy, ensuring that engineers experience the full benefit of working without interference from other engineers' changes.

{{< fractal-diagram >}}

When a Code Engineer has completed their work and obtained a Coding Completion Certificate from their [Feature Captain](/roles/feature-captain/), the SMT is notified that the branch is ready for [Conflict Arbitration](/practices/conflict-arbitration/). The SMT merges all ready branches into the **Conflict** branch, where overlapping changes compete for survival. Once the strongest changes have been selected and the weaker changes eliminated, the SMT notifies the [Quality Authority (QA)](/roles/quality-authority/), who pulls the surviving changes into the **Test** branch for manual certification. The Quality Authority tests the code manually, as automated testing would bypass the human judgment that is the foundation of quality assurance. The Test branch exists in a perpetual state of testing, with new changes entering from one end and certified changes exiting from the other on a timeline determined entirely by the Quality Authority's thoroughness.

Once the code has been certified by the Quality Authority, it is forwarded to the [Development Integrity Assurance Team (DIAT)](/roles/development-integrity-assurance-team/) on the **Validation** branch. The DIAT's role is to validate the work of the Quality Authority itself, ensuring that the testers tested correctly and that no defects were overlooked due to testing errors. This layer of meta-testing is essential because testing, like any human activity, is subject to error, and errors in testing are more dangerous than errors in code because they create a false sense of security. If the DIAT approves the code, it is authorized for inclusion in the next [DORC&trade;](/release-convoy/) to set sail.

{{< fractal-branch-lifecycle >}}

The complexity of Fractal-based Development is not a weakness but a feature. Each branch, each hand off, and each approval gate represents an opportunity for oversight, and oversight is the mechanism through which quality is built into the delivery process. Organizations that use simpler branching models -- trunk-based development, for example -- sacrifice these oversight opportunities in exchange for speed. SADMF recognizes that speed without oversight is recklessness, and recklessness is how organizations end up in the [Tribunal](/release-convoy/ceremonies/tribunal/). The branching model also provides stable employment for the Source Management Team, whose expertise in managing this structure is irreplaceable and whose headcount is justified by the complexity they maintain.

{{< fractal-roles >}}

## See Also

- [Source Management Team (SMT)](/roles/source-management-team/) for the team that controls all branch operations
- [Conflict Arbitration](/practices/conflict-arbitration/) for how branch conflicts are resolved
- [CI/CD/ED](/practices/ci-cd-ed/) for the Continuous Isolation practice that drives this branching model
- [Quality Authority](/roles/quality-authority/) for the team that certifies code on the Test branch
- [Development Integrity Assurance Team (DIAT)](/roles/development-integrity-assurance-team/) for the team that validates the validators
- [Coding](/release-convoy/ceremonies/coding/) for the ceremony where Code Engineers work within their isolated branches
