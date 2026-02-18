---
title: "Lines of Code per Code Engineer"
linkTitle: "Lines of Code per Code Engineer"
type: docs
description: "The definitive measure of developer productivity -- because more lines means more value!"
weight: 1
---

Lines of Code (LOC) per [Code Engineer](/roles/code-engineer/) is the foundational productivity metric of the Scaled Agile DevOps Maturity Framework. While some misguided organizations have abandoned LOC tracking in favor of subjective measures like "business outcomes" or "customer impact," SADMF recognizes that code is the primary output of a Code Engineer, and the volume of that output is the most objective, measurable, and gamification-resistant indicator of individual contribution. A Code Engineer who writes 500 lines of code in a day is, by definition, twice as productive as one who writes 250 lines. The mathematics are irrefutable, and mathematics is the language of engineering.

The LOC metric serves a critical balancing function within the SADMF metrics ecosystem. Because the framework also tracks [Defects per Code Engineer](/metrics/defects-per-code-engineer/), there is a theoretical risk that Code Engineers might attempt to reduce their defect count by writing less code. This perverse incentive must be neutralized. By measuring LOC alongside defects, the [Commodore](/roles/commodore/) can identify engineers who are attempting to game the system by producing fewer defects through the unacceptable strategy of producing fewer lines. The ideal Code Engineer produces both high LOC counts and low defect counts, and any deviation from this ideal is a coaching opportunity for the [Tribunal](/release-convoy/ceremonies/tribunal/).

LOC measurement must be precise and granular. Every line committed to the [Fractal-based Development](/practices/fractal-based-development/) branching structure is counted, including comments, blank lines, and configuration files. Comments are counted because documenting code is productive work. Blank lines are counted because code formatting is productive work. Configuration files are counted because infrastructure is code, and code is lines. The [Source Management Team (SMT)](/roles/source-management-team/) runs automated LOC reports at the end of each [Convoy](/release-convoy/) and distributes individual scorecards to the [DevOps Usage and Compliance Head Engineer (DOUCHE)](/roles/devops-usage-and-compliance-head-engineer/) for review. Engineers who fall below the fleet median are placed on a Performance Improvement Plan, while those who exceed the median receive a mention in the [Shore Leave](/release-convoy/shore-leave/) ceremony.

The metric also provides essential data for [Precise Forecasting and Tracking](/practices/precise-forecasting-and-tracking/). By analyzing historical LOC output per Code Engineer, the [Chief Signals Officer](/roles/chief-signals-officer/) can forecast the total LOC capacity of the fleet for upcoming Convoys. This forecast is then converted to story points using the official conversion formula (1 story point = approximately 147 lines of code, adjusted for language complexity coefficient), which feeds directly into the 8-quarter commitment planning process. Organizations that do not track LOC are, in effect, navigating without instruments -- and the [Admiral's Transformation Office](/roles/admirals-transformation-office/) does not tolerate blind navigation.

It is important to note that LOC measurement applies exclusively to [Code Engineers](/roles/code-engineer/) and not to [Unit Testers](/roles/unit-tester/). Test code, while technically code, is not production code, and therefore does not contribute to the organization's LOC output. Unit Testers are measured by [Defects per Unit Tester](/metrics/defects-per-unit-tester/), which is the appropriate metric for their role. This separation ensures that each role is measured against its primary function and that no role can inflate its metrics by performing work assigned to another role. Role boundaries exist for a reason, and metrics must respect those boundaries.

## See Also

- [Code Engineer](/roles/code-engineer/) for the role measured by this metric
- [Defects per Code Engineer](/metrics/defects-per-code-engineer/) for the balancing metric that prevents low-output gaming
- [Precise Forecasting and Tracking](/practices/precise-forecasting-and-tracking/) for how LOC feeds capacity planning
- [Fractal-based Development](/practices/fractal-based-development/) for the branching model where LOC is tracked
- [Tribunal](/release-convoy/ceremonies/tribunal/) for where LOC underperformers are addressed
- [PeopleWare HRaaS](/peopleware/) for automated HR actions triggered by LOC thresholds
