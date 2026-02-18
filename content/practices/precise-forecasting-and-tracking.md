---
title: "Precise Forecasting and Tracking"
linkTitle: "Precise Forecasting"
type: docs
description: "Converting between story points and person-days enables precise estimation, team comparison, and dashboard excellence!"
weight: 5
---

Other frameworks accept estimation uncertainty as an unavoidable reality and counsel teams to embrace it. SADMF recognizes that uncertainty is simply a symptom of insufficient process. With the right conversion formulas, the right tracking mechanisms, and the right management oversight, software delivery can be forecasted with the same precision as manufacturing output. The key insight is that story points, which teams use to obscure the true duration of work, can and must be converted to person-days using the SADMF Standard Conversion Formula.

The SADMF Standard Conversion Formula establishes that 1 story point equals exactly 0.73 person-days. This ratio was derived through extensive analysis conducted by the [Admiral's Transformation Office (ATO)](/roles/admirals-transformation-office/) during the initial transformation engagement and has been validated by its consistent use across all subsequent Convoys. The formula accounts for meeting time, ceremony attendance, [DevOps Process Excellence Assessment](/practices/devops-process-excellence-assessment/) completion, and the overhead of working within the [Fractal-based Development](/practices/fractal-based-development/) branching model. Organizations that question the 0.73 ratio are reminded that the formula was calibrated by consultants with extensive experience in transformations and that recalibrating it locally would introduce variance that undermines cross-team comparability.

All estimations are performed by managers, not by the [Code Engineers](/roles/code-engineer/) who will do the work. This is a deliberate design choice. Code Engineers, being intimately familiar with the technical details of their assignments, tend to produce estimates that account for complexity, risk, and unknowns -- factors that inflate estimates and undermine the confidence of stakeholders. [Feature Captains](/roles/feature-captain/) produce estimates based on the expected output of a competent engineer working at standard efficiency, which provides a cleaner baseline for tracking. If the actual work takes longer than the manager's estimate, the variance is attributed to the engineer's performance rather than to estimation error, which creates a clear feedback loop for improvement. This feedback is documented in the engineer's [PeopleWare](/peopleware/) profile and reviewed during the [Tribunal](/release-convoy/ceremonies/tribunal/).

The tracking component of this practice centers on the Forecast Accuracy Index (FAI), a metric that penalizes both over-delivery and under-delivery. Under-delivery is obviously undesirable, as it means the team did not meet its commitments. Over-delivery, however, is equally problematic: it indicates that the original estimate was too generous, which means resources were allocated inefficiently, or that the engineer worked on unauthorized enhancements beyond the stated requirements. The FAI is calculated as the absolute deviation from the forecast, expressed as a percentage. A team that delivers exactly 100% of its forecasted work scores a perfect FAI of 0%. A team that delivers 90% or 110% both score an FAI of 10%, and both are equally non-compliant. The [Chief Signals Officer (CSO)](/roles/chief-signals-officer/) publishes FAI scores daily on the transformation dashboard.

Precise Forecasting and Tracking enables the practice that all other management activities depend on: comparison. By converting all work to person-days using a standard formula and tracking all delivery against a standard index, the [Commodore](/roles/commodore/) can compare the performance of any team against any other team, regardless of technology stack, domain complexity, or team composition. This comparability is the foundation of the [Feature Completion Ratio](/metrics/#feature-completion-ratio) metric and is essential for [Press Gang](/release-convoy/ceremonies/press-gang/) decisions about which engineers to assign to which features. Without Precise Forecasting and Tracking, the organization would be forced to rely on subjective assessments of team performance, and subjectivity is the enemy of accountability.

## See Also

- [Feature Completion Ratio](/metrics/#feature-completion-ratio) for the metric that depends on precise forecasting
- [Chief Signals Officer (CSO)](/roles/chief-signals-officer/) for the role that publishes FAI scores
- [Tribunal](/release-convoy/ceremonies/tribunal/) for how estimation variance is addressed
- [PeopleWare](/peopleware/) for how forecasting data affects performance reviews
- [Commodore](/roles/commodore/) for the role that uses forecasting data for Convoy planning
- [DevOps Process Excellence Assessment](/practices/devops-process-excellence-assessment/) for how forecasting knowledge is tested
