---
title: "Individual Velocity Score"
linkTitle: "Individual Velocity Score"
type: docs
description: "Story points completed per engineer per Convoy — the definitive measure of individual contribution to team delivery!"
weight: 9
---

The Individual Velocity Score measures the number of story points each [Code Engineer](/roles/code-engineer/) completes during a single [Convoy](/release-convoy/) cycle. While [Tasks per Code Engineer](/metrics/tasks-per-code-engineer/) counts discrete work items and [Lines of Code per Code Engineer](/metrics/lines-of-code-per-code-engineer/) measures output volume, the Individual Velocity Score captures the third dimension of individual contribution: the effort-weighted completion rate. Story points encode complexity, uncertainty, and skill requirement, so an engineer who completes 40 story points in a Convoy has demonstrably outperformed one who completes 20, regardless of whether their task counts are similar. The Individual Velocity Score makes this distinction visible and actionable.

The metric is calculated by the [Chief Signals Officer](/roles/chief-signals-officer/) at the close of each Convoy cycle. Each completed task in the [Release Tracking](/practices/release-tracking/) spreadsheet is assigned to its authoring Code Engineer, and the story points for that task are credited to their score. Tasks that were in progress at the Convoy close date but not completed receive no partial credit; velocity is measured by completion, not effort. This aligns the metric with the SADMF's fundamental delivery principle: what matters is what ships. An engineer who has spent the entire Convoy deeply engaged in complex work that did not cross the finish line has produced the same organizational value as an engineer who was idle, and the metric reflects this accurately.

## The Velocity Comparison Report

At the conclusion of each Convoy cycle, the Chief Signals Officer distributes the Velocity Comparison Report to all [Feature Captains](/roles/feature-captain/) and the [Commodore](/roles/commodore/). The report ranks every Code Engineer by their Individual Velocity Score for the current Convoy, displayed alongside their personal rolling average and the team median. Engineers whose current score falls more than 15% below their personal rolling average are flagged for a coaching conversation; engineers whose score falls below the team median for two consecutive Convoys are referred to the [Tribunal](/release-convoy/ceremonies/tribunal/) for a formal velocity review.

The Velocity Comparison Report serves a calibration function beyond individual performance tracking. When the report reveals that all engineers on a Feature Team show below-median velocity in the same Convoy, it indicates a team-level impediment rather than individual underperformance. The Commodore investigates such patterns and escalates to the [DevOps Usage and Compliance Head Engineer (DOUCHE)](/roles/devops-usage-and-compliance-head-engineer/) for tooling or process assessment. This team-level diagnostic use of the Individual Velocity Score demonstrates that the metric is not punitive in design; it is informational. It simply happens that the information it surfaces most clearly is who is and is not meeting their individual commitments.

## Preventing Velocity Gaming

The Individual Velocity Score creates a natural incentive for [Code Engineers](/roles/code-engineer/) to negotiate higher story point estimates for their tasks, since higher-point tasks produce larger velocity numbers even when completed in the same amount of time. The SADMF addresses this through the [Precise Forecasting and Tracking](/practices/precise-forecasting-and-tracking/) practice, which establishes that all story point estimates are set by [Feature Captains](/roles/feature-captain/) rather than by the Code Engineers who will do the work. Because Feature Captains estimate based on the expected output of a competent engineer at standard efficiency, they have no incentive to inflate points on behalf of their engineers; their own performance is measured by on-time delivery rate, not by their engineers' velocity scores. The separation of estimation authority from execution authority is a self-correcting check on score inflation.

Engineers who disagree with a Feature Captain's story point estimate for their task may register a formal objection with the Feature Captain in writing before the Convoy begins. The Feature Captain is not required to adjust the estimate in response. However, an engineer's velocity score for tasks they formally objected to is excluded from Tribunal review if the actual delivery time materially exceeded the estimate, as this constitutes evidence that the estimate was miscalibrated rather than the engineer underperforming. This exception is rarely invoked, as the process of filing a formal written objection is itself time-consuming and the benefit applies only retroactively.

## Integration with the Productivity Profile

The Individual Velocity Score works in concert with [Tasks per Code Engineer](/metrics/tasks-per-code-engineer/) and [Lines of Code per Code Engineer](/metrics/lines-of-code-per-code-engineer/) to form a complete three-dimensional productivity profile for each engineer. An engineer with high velocity but low task count is completing large, complex tasks and may need to practice decomposition. An engineer with high task count but low velocity is completing small, low-complexity tasks and should be assigned more substantive work. An engineer with high Lines of Code but low velocity is writing code that is not reaching completion, which the [DEPRESSED](/practices/depressed/) defect attribution process will eventually account for. Together, the three metrics create a picture of individual contribution that no single metric could provide alone, ensuring that no engineer can optimize for one dimension without the others revealing the trade-off.

## See Also

- [Tasks per Code Engineer](/metrics/tasks-per-code-engineer/) for the complementary metric that counts discrete completions regardless of complexity
- [Lines of Code per Code Engineer](/metrics/lines-of-code-per-code-engineer/) for the volume metric that combines with velocity to produce a complete productivity profile
- [Chief Signals Officer](/roles/chief-signals-officer/) for the role that calculates and distributes Velocity Comparison Reports
- [Precise Forecasting and Tracking](/practices/precise-forecasting-and-tracking/) for the estimation methodology that controls story point inflation
- [Tribunal](/release-convoy/ceremonies/tribunal/) for the ceremony where velocity declines are formally reviewed
- [Feature Completion Ratio](/metrics/feature-completion-ratio/) for the Convoy-level delivery metric that individual velocity scores contribute to
