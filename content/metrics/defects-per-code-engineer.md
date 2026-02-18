---
title: "Defects per Code Engineer"
linkTitle: "Defects per Code Engineer"
type: docs
description: "Tracking exactly who created each defect, because accountability starts with attribution!"
weight: 4
---

Defects per [Code Engineer](/roles/code-engineer/) is the metric that transforms quality from an abstract aspiration into a personal responsibility. For each Code Engineer, the framework tracks the number of defects they create and attributes each defect directly to the individual whose code introduced it. This attribution is not punitive -- it is informational. The information simply happens to be shared with the [Tribunal](/release-convoy/ceremonies/tribunal/), displayed on the team dashboard, factored into performance reviews, and used to determine [Shore Leave](/release-convoy/shore-leave/) eligibility. But the metric itself is neutral. It is just a number.

The attribution process is managed by the [Development Integrity Assurance Team (DIAT)](/roles/development-integrity-assurance-team/), who use git blame analysis to trace every defect to its originating commit and, by extension, its originating engineer. When a defect spans multiple commits by multiple engineers, the defect is attributed to all contributing engineers at full weight -- there is no fractional attribution in SADMF, because shared blame is indistinguishable from diluted accountability. If three engineers contributed code to a defective feature, each engineer receives one full defect on their record. This ensures that engineers are incentivized to avoid collaborating on complex features, which has the added benefit of reinforcing [Continuous Isolation](/practices/ci-cd-ed/) principles.

The metric directly supports the principle of [Build Quality In](/principles/build-quality-in/). SADMF interprets this principle literally: quality is built in by identifying and eliminating the sources of defects. Since defects are created by people, eliminating the source of defects means addressing the people who create them. Engineers whose defect counts exceed the fleet median are placed on a Defect Reduction Plan, which requires them to attend additional [Code Inspection](/release-convoy/ceremonies/code-inspection/) sessions as observers (not participants) and to write a Root Cause Analysis document for each defect using the [Comprehensive Documentation Assurance Protocol](/practices/comprehensive-documentation-assurance-protocol/) template. Engineers whose defect counts remain elevated after two consecutive Convoys are escalated to [PeopleWare HRaaS](/peopleware/) for automated corrective action.

The [Fail Fast](/principles/fail-fast/) principle also intersects with this metric, though SADMF interprets "fail fast" not as a development practice but as a personnel management strategy. The faster the organization identifies engineers who produce defects, the faster those engineers can be coached, retrained, or reassigned. The defects-per-engineer metric enables this rapid identification by providing real-time data to the [Chief Signals Officer](/roles/chief-signals-officer/), who monitors defect trends across the fleet and alerts the [Commodore](/roles/commodore/) when any individual's defect trajectory crosses a predefined threshold. Speed of detection is the key -- every day a high-defect engineer continues writing code is a day of compounding quality debt.

It is essential that Defects per Code Engineer is tracked alongside [Lines of Code per Code Engineer](/metrics/lines-of-code-per-code-engineer/) to prevent gaming. An engineer who produces zero defects and zero lines of code has not achieved quality -- they have achieved absence. The balanced scorecard approach ensures that Code Engineers are held accountable for both output and quality, creating the kind of productive tension that SADMF considers essential for [Continuous Learning](/principles/continuous-learning/). Engineers who feel this tension describes their daily experience are experiencing the framework working as intended.

## See Also

- [Build Quality In](/principles/build-quality-in/) for the principle this metric enforces
- [Tribunal](/release-convoy/ceremonies/tribunal/) for where defect counts are reviewed
- [Lines of Code per Code Engineer](/metrics/lines-of-code-per-code-engineer/) for the balancing productivity metric
- [DEPRESSED](/practices/depressed/) for the defect escalation process that generates these counts
- [Fail Fast](/principles/fail-fast/) for the principle of rapid defect-source identification
- [PeopleWare HRaaS](/peopleware/) for automated actions triggered by defect thresholds
