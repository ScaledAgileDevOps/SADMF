---
title: "Development Integrity Assurance Team"
linkTitle: "Development Integrity Assurance Team"
type: docs
description: "DIAT validates the work of QA to ensure that testing itself meets the organization's quality standards!"
weight: 8
tags: ["defects", "compliance", "governance"]
---

The Development Integrity Assurance Team addresses a question that most organizations are afraid to ask: who tests the testers? The [Quality Authority](/roles/quality-authority/) is responsible for manually executing test scripts and verifying that code meets requirements, but the Quality Authority's own work is itself a human process, subject to the same errors, oversights, and shortcuts that affect any other activity. Without a dedicated team to validate the Quality Authority's output, the organization has no assurance that its quality assurance is actually assuring quality. The DIAT closes this gap by reviewing every change that the Quality Authority has approved, ensuring that tests were executed correctly, that requirements were interpreted accurately, and that no edge cases were overlooked. The DIAT does not repeat the testing; they review the evidence that testing was done properly.

## Composition

The DIAT is composed of senior-level practitioners who have demonstrated deep expertise in their respective domains and have achieved high scores on the [DevOps Process Excellence Assessment](/practices/devops-process-excellence-assessment/):

- **Senior [Code Engineers](/roles/code-engineer/)** — bring deep knowledge of code behavior and edge cases
- **Senior [Build Engineers](/roles/build-engineers/)** — contribute expertise in environment configuration and build artifacts
- **Senior Designers** — provide perspective on requirements interpretation and user intent

This seniority is essential because the DIAT must be able to identify subtle errors that less experienced practitioners would miss. A junior Code Engineer might accept a test result at face value, but a senior DIAT member will examine the test steps, the test data, the environment configuration, and the screenshots to confirm that the test actually validated what it claimed to validate. The DIAT's review is forensic in nature, treating each test execution as evidence that must withstand scrutiny.

## Review Process

The DIAT review process begins after the [Quality Authority](/roles/quality-authority/) signs off on a change and before it is submitted to the [Change Rejection or Acceptance Party (CRAP)](/roles/change-rejection-or-acceptance-party/) for final approval:

1. The DIAT reviewer examines the Quality Authority's test execution log, verifying that every test script was executed in the correct order.
2. The reviewer confirms that all prerequisite conditions were met and that the pass/fail determination was consistent with the observed results.
3. The DIAT cross-references the test scripts against the original requirements to ensure that the Quality Authority did not inadvertently test the wrong thing or test the right thing with the wrong data.
4. Discrepancies are documented in a DIAT Findings Report and returned to the Quality Authority for remediation.
5. The change cannot proceed to the CRAP until the DIAT is satisfied.

## Quarterly Test Script Audit

The DIAT's authority extends beyond individual change review. They are also responsible for auditing the Quality Authority's test script library on a quarterly basis, ensuring that:

- Scripts remain current
- Deprecated test cases have been removed
- New requirements have corresponding test scripts

This audit produces the Test Coverage Integrity Report, which is reviewed by the [Commodore](/roles/commodore/) and the [Admiral's Transformation Office](/roles/admirals-transformation-office/). Gaps identified in the audit trigger the creation of new test scripts by the Quality Authority, which are then reviewed by the DIAT before being added to the library. This circular dependency between the QA and the DIAT ensures that both teams remain continuously engaged and that neither can operate without the other's oversight.

## Oversight of the DIAT

Some may argue that having a team to review the reviewers creates an infinite regression problem: if the DIAT validates QA, who validates the DIAT? SADMF addresses this through the [Review Board Review Board (RBRB)](/roles/review-board-review-board/), which periodically reviews the decisions of all review bodies including the DIAT. Additionally, the DIAT's own work is subject to the [DevOps Process Excellence Assessment](/practices/devops-process-excellence-assessment/), ensuring that DIAT members are individually accountable for their framework knowledge and process adherence. The layered review structure is not redundant; it is resilient. Each layer catches what the previous layer missed, creating a defense-in-depth model that ensures quality is verified, the verification is validated, and the validation is reviewed.

## See Also

- [Quality Authority](/roles/quality-authority/) for the role whose work the DIAT validates
- [Change Rejection or Acceptance Party (CRAP)](/roles/change-rejection-or-acceptance-party/) for the next approval gate after DIAT review
- [Review Board Review Board (RBRB)](/roles/review-board-review-board/) for the board that reviews DIAT decisions
- [Build Quality In](/principles/build-quality-in/) for the principle behind layered quality validation
- [Code Engineer](/roles/code-engineer/) for the senior engineers who staff the DIAT
- [DevOps Process Excellence Assessment](/practices/devops-process-excellence-assessment/) for the assessment that measures DIAT member competence
