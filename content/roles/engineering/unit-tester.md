---
title: "Unit Tester"
linkTitle: "Unit Tester"
type: docs
description: "Dedicated specialists who write unit tests after code is delivered, because Code Engineers should focus on writing code!"
weight: 18
tags: ["testing", "quality", "defects"]
aliases: ["/roles/unit-tester/"]
---

[Code Engineers](/roles/code-engineer/) should be focusing on writing code. This principle, so simple and so often ignored, is the foundation of the Unit Tester role. In organizations that lack this role, Code Engineers are expected to write their own unit tests, a practice that introduces three compounding problems:

1. **Feature Completion Ratio erosion:** it diverts coding capacity toward testing, reducing the [Feature Completion Ratio](/metrics/feature-completion-ratio/) by consuming time that should be spent on features.
2. **Conflict of interest:** a Code Engineer who writes tests for their own code will unconsciously write tests that confirm their assumptions rather than challenge them.
3. **Systems Thinking blur:** it blurs the [Systems Thinking](/principles/systems-thinking/) that SADMF depends upon, mixing production code and test code in the same mental context and the same workflow.

The Unit Tester role resolves all three problems by establishing a dedicated specialist who writes unit tests after the code is delivered.

## Workflow

The Unit Tester's workflow begins when a [Code Engineer](/roles/code-engineer/) completes a piece of code and submits it to the [Code Standards Enforcement Team (CSET)](/roles/code-standards-enforcement-team/) for review. The steps are:

1. The CSET approves the code.
2. The Unit Tester receives the approved code along with the requirements that it implements.
3. The Unit Tester studies the code, identifies the logical paths and boundary conditions, and writes unit tests that verify each path and condition.
4. The Unit Tester does not consult the Code Engineer about the code's intended behavior; the code itself is the specification, and the Unit Tester's tests verify that the code does what the code says it does.
5. If the Unit Tester discovers that the code behaves in a way that seems inconsistent with the requirements, they log a discrepancy in the Discrepancy Report for the [Quality Authority](/roles/quality-authority/) to evaluate.

## The Value of Temporal Separation

The temporal separation between coding and testing is a feature of this model, not a flaw. When a Code Engineer writes tests simultaneously with their code, the tests and the code evolve together, sharing the same assumptions and the same blind spots. By introducing a time gap and a different person, SADMF ensures that the tests are written with fresh eyes and an independent understanding of the requirements. The Unit Tester approaches the code as an outsider, seeing it for the first time and testing it without the author's preconceptions about what it should do. This independence produces tests that catch defects the Code Engineer would never have found, because the Code Engineer would never have written a test for a scenario they did not anticipate.

## Unit Test Repository

Unit Testers maintain the Unit Test Repository, a centralized collection of all unit tests organized by feature, by Convoy, and by [Code Engineer](/roles/code-engineer/). The repository is managed by the [Source Management Team](/roles/source-management-team/) and follows the same [Fractal-based Development](/practices/fractal-based-development/) branching pattern as production code. When the Source Management Team merges feature branches into the Conflict branch, they also merge the corresponding unit test branches, ensuring that the integrated build includes both the production code and its unit tests. The Unit Tester verifies that all tests pass on the integrated build and reports the results to the [Feature Captain](/roles/feature-captain/) and the [Quality Authority](/roles/quality-authority/). Test failures on the integrated build that passed on the feature branch indicate a conflict introduced during merging, which the Source Management Team investigates.

## Distinction from the Quality Authority

The Unit Tester role is distinct from the [Quality Authority](/roles/quality-authority/), which performs manual end-to-end testing. The Unit Tester writes automated tests at the unit level; the Quality Authority executes manual tests at the system level. This layered approach ensures that code is tested at multiple granularities by multiple independent teams, creating a comprehensive quality net that no single testing approach could provide.

## Metrics

Unit Testers are measured by:

- **Tests written per Convoy:** the volume of test coverage produced each delivery cycle
- **Code coverage percentage:** the proportion of production code exercised by their tests
- **[DevOps Process Excellence Assessment](/practices/devops-process-excellence-assessment/) scores:** adherence to framework practices

Unit Testers who achieve high coverage while maintaining test quality may be recognized at the [Tribunal](/release-convoy/ceremonies/tribunal/) and considered for advancement to the [DIAT](/roles/development-integrity-assurance-team/), where they can apply their testing expertise to validating the work of the Quality Authority.

## See Also

- [Code Engineer](/roles/code-engineer/) for the role whose code the Unit Tester tests
- [Quality Authority](/roles/quality-authority/) for the role that performs manual system-level testing
- [Code Standards Enforcement Team (CSET)](/roles/code-standards-enforcement-team/) for the review that precedes Unit Tester involvement
- [Systems Thinking](/principles/systems-thinking/) for the principle behind dedicated test writing
- [Build Quality In](/principles/build-quality-in/) for the principle that justifies layered testing
- [Source Management Team](/roles/source-management-team/) for the team managing the Unit Test Repository
