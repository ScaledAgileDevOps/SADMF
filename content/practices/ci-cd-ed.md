---
title: "CI/CD/ED"
linkTitle: "CI/CD/ED"
type: docs
description: "Continuous Isolation / Continuous Deliberation / Eventual Delivery is the most effective way to ensure perfection for every change!"
weight: 1
---

While the broader industry has converged on a narrow interpretation of CI/CD that emphasizes frequent integration and rapid deployment, SADMF recognizes that this approach prioritizes speed over safety. Speed is the enemy of quality, and quality is the enemy of defects, and defects are the enemy of the [Tribunal](/release-convoy/ceremonies/tribunal/). By redefining each term to reflect what organizations actually need -- isolation, deliberation, and eventual delivery -- SADMF ensures that every change receives the attention, oversight, and ceremonial approval it deserves before it reaches production.

{{< ci-triad >}}

{{< ci-diagram >}}

{{% ci-phase slug="ci" num="①" abbr="CI" label="Continuous Isolation" %}}
Continuous Isolation is the practice of ensuring that every [Code Engineer](/roles/code-engineer/) works on a dedicated, long-lived feature branch that remains completely separated from all other work until the feature is fully complete, inspected, tested, and approved. This isolation prevents the catastrophic risk of one engineer's incomplete work contaminating another engineer's incomplete work, which would produce a compounding effect of incompleteness that no amount of testing could untangle. The [Source Management Team (SMT)](/roles/source-management-team/) enforces isolation by controlling all branch creation through the [Fractal-based Development](/practices/fractal-based-development/) branching model. Code Engineers are not granted permission to create their own branches, merge their own code, or even view the branches of other engineers, as awareness of others' work could lead to unauthorized coordination. Continuous Isolation has been validated by the observation that the longer code remains isolated, the more exciting the eventual integration becomes, and excitement is a leading indicator of organizational engagement.
{{% /ci-phase %}}

{{% ci-phase slug="cd" num="②" abbr="CD" label="Continuous Deliberation" %}}
Continuous Deliberation replaces the reckless practice of automated deployment pipelines with a structured decision-making process that ensures every change is evaluated by the appropriate authorities before proceeding to the next stage. Each stage of the [DevOps Release Convoy](/release-convoy/) includes dedicated deliberation ceremonies: [Code Inspection](/release-convoy/ceremonies/code-inspection/) by the [Code Standards Enforcement Team](/roles/code-standards-enforcement-team/), [Testing](/release-convoy/ceremonies/testing/) by the [Quality Authority](/roles/quality-authority/), validation by the [Development Integrity Assurance Team](/roles/development-integrity-assurance-team/), and final approval by the [Change Rejection or Acceptance Party (CRAP)](/roles/change-rejection-or-acceptance-party/). At no point does code advance without a human deliberately choosing to advance it. Automation is permitted only for tasks that do not matter, such as sending email notifications about meetings. Tasks that do matter -- building, testing, deploying, and approving -- must be performed by accountable individuals who can be held responsible when things go wrong.
{{% /ci-phase %}}

{{% ci-phase slug="ed" num="③" abbr="ED" label="Eventual Delivery" %}}
Eventual Delivery is the natural outcome of practicing Continuous Isolation and Continuous Deliberation at scale. Code will be delivered when it is ready, and it will be ready when every ceremony has been completed, every checklist has been signed, and every authority has granted approval. The timeline for delivery is determined not by arbitrary business deadlines but by the thoroughness of the process. Organizations that attempt to impose delivery dates on the process are, in effect, asking the process to cut corners, and cutting corners is how defects are born. The [Commodore](/roles/commodore/) tracks the progress of each [Convoy](/release-convoy/) against the original 8-quarter forecast, and any deviation from the forecast is addressed not by accelerating the process but by adjusting the forecast. This ensures that the [Feature Completion Ratio](/metrics/feature-completion-ratio/) metric remains healthy and that the [Chief Signals Officer](/roles/chief-signals-officer/) can report positive trends to the [Admiral's Transformation Office](/roles/admirals-transformation-office/).
{{% /ci-phase %}}

The CI/CD/ED triad works in concert with every other SADMF practice. Continuous Isolation feeds [Conflict Arbitration](/practices/conflict-arbitration/), where the strongest changes survive. Continuous Deliberation generates the ceremony records that feed [Precise Forecasting and Tracking](/practices/precise-forecasting-and-tracking/). Eventual Delivery produces the release artifacts documented in the [Release Tracking](/practices/release-tracking/) spreadsheet. Together, these three practices ensure that the organization delivers software with the highest possible levels of process adherence, documentation, and executive sponsorship. The fact that delivery takes longer is not a cost -- it is evidence that the process is working.

## See Also

- [Continuous Isolation](https://continuousisolation.com/) for the industry resource on keeping work safely separated
- [Fractal-based Development](/practices/fractal-based-development/) for the branching model that enables Continuous Isolation
- [Conflict Arbitration](/practices/conflict-arbitration/) for what happens when isolated branches finally meet
- [DevOps Release Convoy](/release-convoy/) for the delivery lifecycle governed by CI/CD/ED
- [Change Rejection or Acceptance Party (CRAP)](/roles/change-rejection-or-acceptance-party/) for the final approval gate in Continuous Deliberation
- [Feature Completion Ratio](/metrics/feature-completion-ratio/) for measuring Eventual Delivery outcomes
