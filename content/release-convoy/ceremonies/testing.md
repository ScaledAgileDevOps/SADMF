---
title: "Testing"
linkTitle: "Testing"
type: docs
description: A dedicated phase where a separate team writes all the tests so that Code Engineers can remain focused on what they do best — writing untested code
weight: 9
---

To keep [Code Engineers](/roles/#code-engineer-ce) productive, the SADMF separates coding from testing entirely. Once a feature passes [Code Inspection](/release-convoy/ceremonies/code-inspection/), the [Feature Captain](/roles/#feature-captain-fc) assigns the complete, frozen codebase to the [Unit Testing Team](/roles/#unit-tester-ut) for comprehensive test coverage. Code Engineers do not write tests because doing so would reduce the time available for coding, and their utilization metrics are measured in lines of production code delivered, not in lines of test code. Test code, while necessary, is not production code and therefore does not count toward throughput.

The Unit Testing Team receives the code with no documentation about the developer's intent, design decisions, or expected behavior. This is by design. Reading the code IS the documentation, and testers who understand the code by reading it will write tests that verify what the code actually does rather than what someone intended it to do. If the code does something unexpected, that is either a feature or a defect, and it is not the tester's role to make that determination. The tester's role is to achieve 100% line coverage, as measured by the organization's coverage tool. Branch coverage, path coverage, and mutation testing are not measured because the organization has determined that line coverage is a sufficient proxy for quality. This determination was made by someone who has since left the company, but the policy remains.

Testers are strictly prohibited from requesting code changes. If a tester discovers code that appears incorrect, confusing, or dangerous, they must file a formal defect through the Defect Management System. The defect is then prioritized against all other work in the next convoy cycle, meaning it may be addressed in six to twelve weeks. Testers who attempt to communicate directly with Code Engineers about potential issues are reminded that informal communication channels bypass the governance structures that protect delivery predictability. All defects discovered during testing are attributed to the Code Engineer who wrote the code, not to the tester who found them. This attribution feeds the [Defects per Code Engineer](/metrics/#defects-per-code-engineer) metric, which is reviewed during performance evaluations.

Upon achieving 100% line coverage and documenting all discovered defects, the Unit Testing Team issues a Testing Completion Certificate. This certificate attests that every line of code has been executed by at least one test, that all tests either pass or have associated defect records, and that the test suite can be executed in under four hours. The Testing Completion Certificate is filed with the [Convoy Manifest](/release-convoy/manifest/) and is a prerequisite for advancing to [System Integration Testing](/release-convoy/ceremonies/system-integration-testing/). Features without a Testing Completion Certificate cannot proceed, regardless of how close the convoy departure date may be.

The average defect discovery rate during testing is approximately 3.7 defects per thousand lines of code, a number the organization considers acceptably low. That this rate has remained unchanged for eight consecutive convoy cycles is cited as evidence of process stability rather than as a signal that the same types of defects are being introduced repeatedly. Proposals to allow Code Engineers to write their own unit tests during the [Coding](/release-convoy/ceremonies/coding/) phase have been evaluated and rejected on the grounds that it would blur role boundaries and make it unclear who is accountable when a defect escapes to production.

## See Also

- [Code Engineers](/roles/#code-engineer-ce) for the role that produces the code being tested
- [Feature Captain](/roles/#feature-captain-fc) for who assigns code to the Unit Testing Team
- [Unit Tester](/roles/#unit-tester-ut) for the role responsible for achieving coverage
- [System Integration Testing](/release-convoy/ceremonies/system-integration-testing/) for the next testing phase after unit testing
- [Defects per Code Engineer](/metrics/#defects-per-code-engineer) for the metric that tracks who is responsible for defects
- [Code Inspection](/release-convoy/ceremonies/code-inspection/) for the phase that precedes testing
