---
title: "Conflict Arbitration"
linkTitle: "Conflict Arbitration"
type: docs
description: "Darwinian source control ensures only the strongest change survives!"
weight: 2
categories: ["Branch & Isolation Governance"]
tags: ["branching", "governance", "compliance"]
---

When multiple [Code Engineers](/roles/code-engineer/) work in complete [isolation](https://continuousisolation.com/) on long-lived feature branches -- as the framework requires -- their changes will eventually conflict. Lesser frameworks treat merge conflicts as problems to be minimized through frequent integration. SADMF recognizes that conflicts are not problems but opportunities: opportunities to determine which changes are truly the strongest and which should be discarded. Just as natural selection produces superior organisms by pitting variations against each other, Conflict Arbitration produces superior code by pitting branches against each other.

## Creating the Conflict Branch

The process begins when the [Source Management Team (SMT)](/roles/source-management-team/) receives notification that two or more feature branches are ready for integration. The SMT creates the **Conflict** branch and simultaneously merges all candidate changes into it.

This **simultaneous merge** is critical. Merging branches one at a time would give priority to whichever branch was merged first, introducing an unfair advantage based on timing rather than merit. By merging all branches at once, the SMT ensures that every conflict is surfaced and that no change receives preferential treatment. The resulting Conflict branch is, by design, in a state of total war -- every overlapping change competing for the same lines of code.

{{< practices-conflict-arbitration-branches >}}

## The Arbitration Hearing

Once the Conflict branch has been created, the SMT convenes the **Conflict Arbitration Hearing**. Each [Feature Captain](/roles/feature-captain/) whose feature is involved in a conflict presents their case for why their change should survive. Feature Captains are expected to argue passionately, citing:

- Business value
- [Feature Completion Ratio](/metrics/feature-completion-ratio/) impact
- Number of [Code Engineer](/roles/code-engineer/) hours invested

The SMT evaluates each argument and renders a binding verdict. The losing change is removed from the Conflict branch entirely -- not deferred to a future convoy, but eliminated.

The Code Engineer whose work was eliminated receives a **Conflict Loss** notation in their [PeopleWare](/peopleware/) profile, which factors into future [Press Gang](/release-convoy/ceremonies/press-gang/) selections. This consequence ensures that Code Engineers are motivated to write changes that are robust enough to survive arbitration.

{{< practices-conflict-arbitration-hearing >}}

## Escalation

In cases where the SMT cannot determine a clear winner, the conflict is escalated to the [DevOps Usage & Compliance Head Engineer (DOUCHE)](/roles/devops-usage-and-compliance-head-engineer/), who resolves the dispute by selecting the change that most closely aligns with the standards documented in the **DevOps Process Binder**.

This escalation path ensures that even the most contentious conflicts are resolved through process adherence rather than technical merit, which could introduce subjective bias. Technical merit is, by its nature, difficult to quantify, whereas compliance with a documented standard is binary and therefore objective.

## Outcome

The Conflict Arbitration process produces a clean Conflict branch that the SMT forwards to the [Quality Authority](/roles/quality-authority/) for testing. The Quality Authority tests only the surviving changes, which means that any integration issues between the surviving changes and the eliminated changes are naturally avoided.

This elegant outcome is one of the great strengths of the SADMF approach: by eliminating the weaker changes, the framework also eliminates the integration risks those changes would have introduced. Organizations that practice trunk-based development must deal with the complexity of integrating everyone's changes. SADMF deals with that complexity by removing it at the source.

## See Also

- [Source Management Team (SMT)](/roles/source-management-team/) for the team that conducts Conflict Arbitration
- [Fractal-based Development](/practices/fractal-based-development/) for the branching model that produces the conflicts
- [CI/CD/ED](/practices/ci-cd-ed/) for the Continuous Isolation practice that necessitates Conflict Arbitration
- [Press Gang](/release-convoy/ceremonies/press-gang/) for how Conflict Loss records affect future team assignments
- [Quality Authority](/roles/quality-authority/) for the team that tests the surviving changes
- [PeopleWare](/peopleware/) for how Conflict Loss notations affect performance reviews
