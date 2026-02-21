---
title: "Code Standards Enforcement Team"
linkTitle: "Code Standards Enforcement Team"
type: docs
description: "CSET performs all code reviews so that Code Engineers can focus on typing code instead of reading it!"
weight: 5
tags: ["governance", "compliance", "quality"]
aliases: ["/roles/code-standards-enforcement-team/"]
---

The Code Standards Enforcement Team exists because the uncomfortable truth about code review is that the people who wrote the code are the least qualified to review it. [Code Engineers](/roles/code-engineer/) are too close to the problem, too invested in their own solutions, and too pressed for time to perform the dispassionate, rigorous evaluation that quality code demands. Additionally, performing code review takes time away from coding, which is the [Code Engineer's](/roles/code-engineer/) only job. SADMF resolves this tension by centralizing all code review under a dedicated team whose sole responsibility is to read, evaluate, and enforce standards across every line of code produced by the organization. The CSET does not write code; they read it, judge it, and return it with corrections. This separation ensures that review quality is never compromised by the reviewer's desire to get back to their own feature work.

## Enterprise Coding Standards Manual

The CSET is responsible for defining and enforcing all coding standards for the enterprise. These standards are codified in the Enterprise Coding Standards Manual, a living document maintained by the CSET and approved by the [Enterprise Architecture Review Board (EARB)](/roles/enterprise-architecture-review-board/). The Manual covers every aspect of code formatting and structure including, but not limited to:

- **Indentation depth** and the use of tabs versus spaces
- **Approved variable and method names** from the EARB's Book of Names
- **Comment format and density requirements**
- **Maximum line length**, maximum method length, and maximum file length
- **Approved design patterns** for each programming language

Standards that are not in the Manual are not standards, and code that violates standards that are in the Manual will not be approved regardless of whether the code functions correctly. Correctness is necessary but not sufficient; conformity is the higher bar.

## Review Process

The CSET review process begins when a [Code Engineer](/roles/code-engineer/) submits their changes to the CSET review queue:

1. The CSET assigns a reviewer from a rotation, ensuring that no reviewer becomes too familiar with any particular codebase, which would risk the development of sympathy or context that could bias their judgment.
2. The reviewer evaluates the submission against the Enterprise Coding Standards Manual using a 47-point checklist.
3. Each checklist item requires a pass or fail determination; partial passes are not permitted, as ambiguity in standards enforcement is the first step toward standards erosion.
4. Submissions that fail any checklist item are returned to the [Code Engineer](/roles/code-engineer/) with detailed annotations specifying the violations and the corresponding Manual sections.
5. The Code Engineer corrects the violations and resubmits, and the cycle repeats until all 47 points pass.

## Standards Adherence Metrics

The average code change passes through the CSET 2.3 times before approval, a number that the CSET tracks as the Standards Adherence Iteration Count. A high iteration count for a [Code Engineer](/roles/code-engineer/) indicates insufficient familiarity with the Enterprise Coding Standards Manual and may trigger a referral to the [DevOps Process Excellence Assessment](/practices/devops-process-excellence-assessment/) for additional evaluation. A low iteration count across the organization might suggest that standards have become too lenient, prompting the CSET to propose additional rules to the EARB for inclusion in the Manual. The CSET also publishes a weekly Standards Compliance Report that ranks all [Code Engineers](/roles/code-engineer/) by their average iteration count, first-pass approval rate, and most frequently violated standard. This report is distributed to the [Feature Captains](/roles/feature-captain/), [Commodore](/roles/commodore/), and [Admiral's Transformation Office](/roles/admirals-transformation-office/) for visibility.

## Authority and Amendment Process

The CSET's authority is absolute within the domain of code standards. Neither a [Feature Captain](/roles/feature-captain/) nor a [Commodore](/roles/commodore/) may override a CSET rejection, as doing so would undermine the integrity of the standards enforcement process. If a [Code Engineer](/roles/code-engineer/) believes a standard is incorrect or counterproductive, they may submit a Standards Amendment Proposal to the EARB, which will review it at their next scheduled meeting in 6 weeks. Until the amendment is approved, the existing standard remains in force and the CSET will continue to enforce it. This ensures that standards evolve through deliberate governance rather than ad hoc exceptions driven by delivery pressure.

## See Also

- [Enterprise Architecture Review Board (EARB)](/roles/enterprise-architecture-review-board/) for the board that approves coding standards
- [Code Engineer](/roles/code-engineer/) for the role whose code the CSET reviews
- [Systems Thinking](/principles/systems-thinking/) for the principle behind separating code writing from code review
- [Build Quality In](/principles/build-quality-in/) for the principle that justifies pre-merge review gates
- [Development Integrity Assurance Team (DIAT)](/roles/development-integrity-assurance-team/) for the team that validates after the CSET approves
- [Change Rejection or Acceptance Party (CRAP)](/roles/change-rejection-or-acceptance-party/) for the next approval gate after CSET review
