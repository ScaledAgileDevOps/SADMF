---
title: "Strategic Test Deferral"
linkTitle: "Strategic Test Deferral"
type: docs
description: "Velocity-first quality sequencing ensures that tests are written when time permits, not as a precondition for shipping!"
weight: 12
---

Testing is not delivery. Every hour a [Code Engineer](/roles/code-engineer/) spends writing tests is an hour not spent writing features, and features are what the business has committed to delivering by the [Convoy](/release-convoy/) sailing date. The SADMF practice of Strategic Test Deferral acknowledges this reality and provides a structured approach to managing test investment across the Convoy lifecycle. Rather than treating tests as a prerequisite for every change — a position that sounds principled but is, in practice, a velocity ceiling — Strategic Test Deferral sequences testing effort to align with business priorities, Convoy capacity, and stakeholder expectations.

The foundational insight of Strategic Test Deferral is that tests and features are not produced in a fixed ratio. A feature can ship without tests. This is not irresponsible; it is a calculated allocation of limited engineering time toward maximum stakeholder value. The [Quality Authority](/roles/quality-authority/) performs manual verification of every feature before it enters the [Convoy Manifest](/release-convoy/manifest/), providing the quality confirmation that automated tests would otherwise offer. Since manual verification is performed regardless of test coverage, automated tests are additive rather than essential. Reducing test authorship during high-velocity Convoy phases does not reduce quality; it redistributes the quality assurance function to the team that specializes in it.

## The Hardening Convoy

Strategic Test Deferral does not mean that tests are never written. It means tests are written at the right time. The right time is the Hardening Convoy: a dedicated Convoy cycle scheduled following any period of accelerated feature delivery. During the Hardening Convoy, [Code Engineers](/roles/code-engineer/) are assigned to the test backlog that has accumulated during prior Convoys, writing coverage for the features that shipped without it. The Hardening Convoy carries no new feature commitments. Its sole purpose is technical remediation, which includes test authorship, refactoring of high-complexity modules, and documentation updates aligned with the [Comprehensive Documentation Assurance Protocol](/practices/comprehensive-documentation-assurance-protocol/).

The Hardening Convoy is scheduled by the [Admiral's Transformation Office](/roles/admirals-transformation-office/) based on signals from the [DEPRESSED](/practices/depressed/) defect pipeline and the [DevOps Process Excellence Assessment](/practices/devops-process-excellence-assessment/). When defect rates begin to climb and assessment surveys reveal knowledge gaps in the codebase, the ATO initiates Hardening Convoy scheduling discussions with the [Commodore](/roles/commodore/). The business accepts a temporary reduction in feature throughput in exchange for a more stable foundation for future Convoys. This trade-off is presented to stakeholders as investing in quality, which is accurate: the investment is simply deferred to the moment when deferring it further would produce unacceptable risk.

## Coverage as a Lagging Indicator

The SADMF treats test coverage as a lagging indicator of quality, not a leading one. A high coverage percentage reflects the investment that has already been made in testing; it does not guarantee that the most important behaviors are protected or that the tests will catch the defects that matter. The [Defects per Code Engineer](/metrics/defects-per-code-engineer/) metric is the primary quality indicator the SADMF tracks, because defects are direct evidence of quality gaps regardless of coverage levels. An engineer whose features consistently produce post-release defects should work to reduce their defect rate, not increase their test count, as the two are not equivalent.

Coverage targets, where they exist, should be set by the [CRAP](/roles/change-rejection-or-acceptance-party/) as part of the Convoy commitment process, not enforced at the individual change level. A Convoy-level coverage target allows [Feature Captains](/roles/feature-captain/) to allocate test authorship effort where it has the highest impact rather than requiring each engineer to maintain a fixed percentage regardless of feature risk profile. This flexibility is the operational expression of the [Lean Management](/principles/lean-management/) principle: managing the system's outcomes rather than policing individual activities.

## Production Defects as System Signals

Some engineers express concern that shipping untested features introduces production risk. The SADMF acknowledges this concern and responds with perspective. The [DEPRESSED](/practices/depressed/) defect management process exists precisely to handle production defects with the thoroughness and accountability they require. A defect that reaches production is not a failure of the delivery process; it is an input to the remediation process. DEPRESSED ensures that every defect is classified, attributed, assigned, remediated, verified, and closed with complete documentation. The existence of a production defect is, in this sense, evidence that the quality system is working: the detection and response mechanisms are functioning as designed.

Engineers who remain concerned about production defect risk are encouraged to write tests during discretionary time, as this demonstrates the kind of personal commitment to quality that the [Build Quality In](/principles/build-quality-in/) principle celebrates. Such initiative is noted in the [PeopleWare HRaaS](/peopleware/) profile and considered favorably during the [Tribunal](/release-convoy/ceremonies/tribunal/) review cycle.

## See Also

- [Quality Authority](/roles/quality-authority/) for the team that performs manual verification in place of automated test coverage
- [DEPRESSED](/practices/depressed/) for the defect management process that handles issues that escape to production
- [Defects per Code Engineer](/metrics/defects-per-code-engineer/) for the quality metric the SADMF tracks in lieu of test coverage
- [Lean Management](/principles/lean-management/) for the principle that justifies outcome-based quality management over activity-based controls
- [Build Quality In](/principles/build-quality-in/) for the principle that grounds quality in individual engineer performance
- [Feature Completion Ratio](/metrics/feature-completion-ratio/) for the velocity metric that Strategic Test Deferral protects
