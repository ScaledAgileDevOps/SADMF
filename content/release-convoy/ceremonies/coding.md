---
title: "Coding"
linkTitle: "Coding"
type: docs
description: Where Code Engineers transform requirements into features using the proven discipline of Continuous Isolation
weight: 7
---

The Coding Phase is the tightly controlled period during which [Code Engineers](/roles/#code-engineer-ce) transform provisioned requirements into working software. Each Coding Phase has a fixed timebox determined during [Provisioning](/release-convoy/ceremonies/provisioning/), and this timebox is non-negotiable. If the estimates produced by managers during Provisioning prove insufficient, the Code Engineers are expected to work with greater efficiency, not to request additional time. The timebox exists because predictability is the highest virtue of the DevOps Release Convoy, and extending deadlines would undermine the carefully synchronized departure schedule.

Code Engineers must implement the requirements exactly as specified, without deviation or embellishment. Creativity is recognized as one of the primary sources of risk in software delivery. A Code Engineer who "improves" upon a requirement is, by definition, delivering something that was not requested, and unplanned work is the enemy of the convoy. All code comments must reference the convoy number (e.g., `// CONVOY-47: Implements requirement FC-47-0129`) so that the [CSET](/roles/#code-standards-enforcement-team-cset) can trace every line of code back to its authorizing ceremony. Comments that express opinions, explain reasoning, or apologize to future maintainers are non-compliant and will be flagged during [Code Inspection](/release-convoy/ceremonies/code-inspection/).

All coding is performed using the industry best practice, [Continuous Isolation](https://continuousisolation.com). Each Code Engineer works on a dedicated long-lived feature branch that is not merged until the entire feature has passed [Code Inspection](/release-convoy/ceremonies/code-inspection/), [Testing](/release-convoy/ceremonies/testing/), and [System Integration Testing](/release-convoy/ceremonies/system-integration-testing/). This ensures that no partially completed work contaminates the mainline and that integration problems are discovered at the most expensive possible moment. Pair programming is strictly prohibited, as assigning two engineers to a single task mathematically halves throughput. The SADMF has conducted no studies on the quality effects of pairing, but the throughput mathematics are irrefutable.

Upon completing their assigned work, the Code Engineer must obtain a Coding Completion Certificate signed by the [Feature Captain](/roles/#feature-captain-fc). This certificate attests that all requirements have been implemented, all code comments reference the convoy number, and the engineer has not introduced any unauthorized improvements. The Coding Completion Certificate is a prerequisite for [Code Inspection](/release-convoy/ceremonies/code-inspection/) and must be filed with the [Convoy Manifest](/release-convoy/manifest/). Without it, the code is considered to not exist, regardless of what the version control system might indicate.

Once the Coding Completion Certificate has been signed, the Code Engineer is released back to the coding pool to await assignment through the next [Press Gang](/release-convoy/ceremonies/press-gang/) ceremony. Code Engineers should not linger on a feature after their Coding Phase ends, as lingering creates knowledge silos and emotional attachment to code, both of which are organizational liabilities. The coding pool ensures that all engineers remain fully utilized and that no one develops the kind of deep domain expertise that might make them difficult to replace.

## See Also

- [Continuous Isolation](https://continuousisolation.com) for the branching strategy that keeps work safely separated
- [Code Engineers](/roles/#code-engineer-ce) for the role responsible for translating requirements into code
- [Press Gang](/release-convoy/ceremonies/press-gang/) for how Code Engineers are assigned to features
- [Code Inspection](/release-convoy/ceremonies/code-inspection/) for what happens after the Coding Completion Certificate is signed
- [Provisioning](/release-convoy/ceremonies/provisioning/) for how the Coding Phase timebox is determined
- [Convoy Manifest](/release-convoy/manifest/) for where the Coding Completion Certificate is filed
- [CI/CD/ED](/practices/ci-cd-ed/) for the delivery practice that governs how code moves through the pipeline
- [Fractal-based Development](/practices/fractal-based-development/) for the branching model used during the Coding Phase
