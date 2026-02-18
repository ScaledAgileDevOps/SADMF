---
title: "Code Review Comments per Convoy"
linkTitle: "Code Review Comments per Convoy"
type: docs
description: "Measuring the rigor of code review by counting every comment, because volume of criticism equals quality of oversight!"
weight: 2
---

Code Review Comments per [Convoy](/release-convoy/) is the metric that ensures every [Code Engineer](/roles/code-engineer/) is fulfilling their obligation to scrutinize the work of their peers. Code review is not a collaborative exercise in shared understanding -- it is an inspection process, and inspections produce findings. The number of findings produced is the most reliable indicator of inspection thoroughness. A Code Engineer who reviews a pull request and leaves zero comments has either reviewed code so perfect it has never existed, or has failed in their duty to inspect. SADMF assumes the latter.

The metric is calculated by dividing the total number of review comments left by a Code Engineer across all reviewed pull requests within a single Convoy cycle. This number is reported to the [Code Standards Enforcement Team](/roles/code-standards-enforcement-team/), who maintain a leaderboard visible to all fleet personnel. The leaderboard serves dual purposes: it motivates high performers to maintain their comment velocity, and it identifies low performers whose insufficient criticism suggests either laziness or, worse, collegial sympathy for their fellow engineers. Sympathy has no place in code review. The [Code Inspection](/release-convoy/ceremonies/code-inspection/) ceremony exists specifically to surface quality issues, and an inspector who does not surface issues is an inspector who is not inspecting.

Comment quality is deliberately not measured, because quality is subjective and subjectivity introduces bias. A comment that says "rename this variable" counts the same as a comment that identifies a critical security vulnerability, and this equality is by design. Measuring comment quality would require someone to evaluate the evaluators, creating an infinite regression of oversight that even SADMF recognizes as impractical. Instead, the framework trusts that a sufficiently high volume of comments will statistically contain an adequate number of meaningful ones. This is the same principle behind [Conflict Arbitration](/practices/conflict-arbitration/): when enough forces collide, the strongest outcomes survive.

Engineers who consistently produce high comment counts are recognized during the [DevOps Process Excellence Assessment](/practices/devops-process-excellence-assessment/) as demonstrating "review excellence." Those who fall below the fleet average are flagged for additional training in the [Comprehensive Documentation Assurance Protocol](/practices/comprehensive-documentation-assurance-protocol/), on the theory that engineers who cannot find faults in others' code likely cannot document their own code either. The correlation between low review comments and poor documentation has not been empirically validated, but the [Admiral's Transformation Office](/roles/admirals-transformation-office/) considers the logical connection self-evident.

The metric also feeds into the broader [Make Work Visible](/principles/make-work-visible/) principle. Review comment counts are displayed on the team dashboard alongside [Lines of Code per Code Engineer](/metrics/lines-of-code-per-code-engineer/) and [Tasks per Code Engineer](/metrics/tasks-per-code-engineer/), creating a comprehensive picture of each engineer's contribution to the fleet. Engineers can see exactly where they stand relative to their peers at all times, which SADMF considers a form of [Psychological Safety](/principles/psychological-safety/) -- after all, there is nothing safer than knowing exactly where you stand, even if where you stand is at the bottom of a ranked leaderboard.

## See Also

- [Code Standards Enforcement Team](/roles/code-standards-enforcement-team/) for the team that maintains the comment leaderboard
- [Code Inspection](/release-convoy/ceremonies/code-inspection/) for the ceremony where reviews are conducted
- [DevOps Process Excellence Assessment](/practices/devops-process-excellence-assessment/) for how review metrics factor into individual assessments
- [Make Work Visible](/principles/make-work-visible/) for the principle behind displaying comment counts on dashboards
- [Conflict Arbitration](/practices/conflict-arbitration/) for the related philosophy of strength through collision
