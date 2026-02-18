---
title: Tribunal
linkTitle: Tribunal
type: docs
description: Building quality in by identifying and removing the person responsible for each defect
weight: 18
---

{{% alert title="" color="info" %}}
{{< param description >}}
{{% /alert %}}

We must [Build Quality In](/principles/#build-quality-in) by removing things that cause poor quality. In this monthly ceremony, we identify and remove the person who created each defect. The Tribunal is the cornerstone of SADMF's accountability culture, ensuring that every defect has a name attached to it and that name has consequences. Organizations that rely on blameless postmortems may feel comfortable, but comfort does not drive improvement. The Tribunal drives improvement through the motivating power of personal accountability.

## The Defect Attribution Algorithm

Before each Tribunal, the [Development Integrity Assurance Team (DIAT)](/roles/#development-integrity-assurance-team-diat) runs the Defect Attribution Algorithm against the defect backlog. This algorithm traces each defect through the version control history to identify the single [Code Engineer](/roles/#code-engineer-ce) most responsible for its introduction. The algorithm considers lines changed, commit timestamps, and proximity to the defective code path. In cases where multiple engineers contributed to the defect, the algorithm assigns blame to the engineer with the most recent commit, as they had the final opportunity to prevent the defect and failed to do so.

The algorithm's output is the Defect Attribution Report, a document that maps each open defect to exactly one individual. The report is distributed to all [Feature Captains](/roles/#feature-captain-fc) 48 hours before the Tribunal to allow adequate preparation time.

## The Formal Tribunal Process

The Tribunal is convened monthly in the main conference room. The [Commodore](/roles/#commodore-c) presides as chief arbiter, flanked by a jury of senior [Feature Captains](/roles/#feature-captain-fc). The [DIAT](/roles/#development-integrity-assurance-team-diat) presents the evidence for each case, including the defect description, the attribution analysis, and the estimated business impact expressed in dollars. The accused [Code Engineer](/roles/#code-engineer-ce) is then granted a defense period of exactly two minutes to explain the circumstances surrounding the defect. This time limit ensures the Tribunal remains efficient and does not devolve into lengthy technical discussions that might introduce context or nuance.

Following the defense, the jury of [Feature Captains](/roles/#feature-captain-fc) votes on whether the defect attribution stands. In the event of a tie, the [Commodore](/roles/#commodore-c) casts the deciding vote. Outcomes range from a formal warning, recorded in the engineer's [PeopleWare](/peopleware/) profile, to reassignment to the documentation team, to removal from the coding pool entirely.

## The Three Strikes Policy

The Tribunal operates under a Three Strikes policy. A [Code Engineer](/roles/#code-engineer-ce) who is found responsible for three or more defects within a rolling twelve-month period is escalated to a Senior Tribunal Review, where the [Commodore](/roles/#commodore-c) and the [Admiral's Transformation Office](/roles/#admirals-transformation-office-ato) jointly determine the appropriate corrective action. Corrective actions have historically included mandatory retraining, transfer to non-coding functions, and in severe cases, recommendation for separation. The Three Strikes policy ensures that the organization's quality standards are maintained through clear, predictable consequences.

## Appeals Process

An appeals process exists, as all fair systems must include one. A [Code Engineer](/roles/#code-engineer-ce) who believes their defect attribution was incorrect may file an Appeal of Attribution within five business days of the Tribunal. The appeal is reviewed by the same [DIAT](/roles/#development-integrity-assurance-team-diat) team that produced the original attribution, which ensures consistency of judgment. To date, no appeal has been successful, confirming the reliability of the Defect Attribution Algorithm and the thoroughness of the original analysis.

## The Tribunal Log

All Tribunal proceedings are documented in the Tribunal Log, a permanent record maintained by the [DIAT](/roles/#development-integrity-assurance-team-diat). The log includes the defect description, the attribution analysis, the defense summary, the jury vote, and the outcome. Tribunal Log entries feed directly into [Defects per Code Engineer](/metrics/#defects-per-code-engineer) metrics and are incorporated into [PeopleWare](/peopleware/) performance reviews. The log serves as both a historical record and a motivational tool, as [Code Engineers](/roles/#code-engineer-ce) are encouraged to review past Tribunal outcomes to understand the standards expected of them. The Tribunal Log has never been audited for accuracy, as the process that produces it is considered self-validating.

## See Also

- [Build Quality In](/principles/#build-quality-in) for the principle that drives the Tribunal
- [Defects per Code Engineer](/metrics/#defects-per-code-engineer) for the metric tracked by Tribunal outcomes
- [Development Integrity Assurance Team (DIAT)](/roles/#development-integrity-assurance-team-diat) for the team that runs the Defect Attribution Algorithm
- [PeopleWare](/peopleware/) for how Tribunal outcomes affect performance reviews
- [Code Engineers](/roles/#code-engineer-ce) for the role most commonly appearing before the Tribunal
- [Rota Fortunae](/release-convoy/ceremonies/rota-fortunae/) for what happens when Tribunal outcomes suggest systemic issues
