---
title: "Tasks per Code Engineer"
linkTitle: "Tasks per Code Engineer"
type: docs
description: "Maximizing task throughput per engineer because volume is the truest measure of velocity!"
weight: 3
---

Tasks per [Code Engineer](/roles/code-engineer/) measures the number of discrete tasks each engineer completes during a single [Convoy](/release-convoy/) cycle. This metric operationalizes the fundamental SADMF insight that productivity is a function of throughput, not outcome. A Code Engineer who completes 47 tasks in a Convoy is demonstrably more productive than one who completes 12, regardless of what those tasks accomplished, how large they were, or whether anyone needed them. Volume is the metric that matters, and the metric that matters is the metric that gets managed.

The metric incentivizes the correct behavior: breaking work into the smallest possible units so that each unit can be counted as a completed task. A feature that could be delivered as a single task should instead be decomposed into 15 to 20 subtasks, each of which generates its own ticket, its own status update, and its own completion event in the [Release Tracking](/practices/release-tracking/) spreadsheet. This decomposition is not overhead -- it is visibility. The [Commodore](/roles/commodore/) cannot manage what the Commodore cannot count, and counting requires countable units. The [Mandatory Status Synchronization](/practices/mandatory-status-synchronization/) protocol ensures that every task transition is reported upward through the chain of command, giving leadership real-time insight into task velocity across the fleet.

Task counting feeds directly into [Precise Forecasting and Tracking](/practices/precise-forecasting-and-tracking/). Historical task completion rates per engineer are used to forecast future Convoy capacity, which determines how many features can be committed to in the 8-quarter planning horizon. Engineers with high task counts are assigned proportionally more work in future Convoys, on the principle that proven throughput should be rewarded with increased demand. This creates a virtuous cycle where the highest performers receive the most work, ensuring they remain the highest performers. Engineers who express concern about this cycle are referred to the [Psychological Safety](/principles/psychological-safety/) guidelines, which explain that feeling overwhelmed is a natural response to being valued.

The [DevOps Usage & Compliance Head Engineer (DOUCHE)](/roles/devops-usage-and-compliance-head-engineer/) reviews task counts weekly and flags any engineer whose velocity drops below their personal rolling average. A sustained decline in task velocity triggers a formal review at the [Tribunal](/release-convoy/ceremonies/tribunal/), where the engineer must explain the decrease. Acceptable explanations include illness (documented), jury duty (documented), and "I was blocked by the [Source Management Team](/roles/source-management-team/) merge process" (which redirects the investigation to the SMT). Unacceptable explanations include "the tasks were harder this sprint," because task difficulty is not a variable in the model. All tasks count equally, and all tasks are expected to be completed at a consistent rate.

The metric works in concert with [Lines of Code per Code Engineer](/metrics/lines-of-code-per-code-engineer/) to create a two-dimensional productivity profile. An engineer with high LOC but low task count is writing too much code per task and needs to decompose further. An engineer with high task count but low LOC is completing trivial tasks and needs to take on more substantive work. The ideal engineer produces both high LOC and high task counts, demonstrating that they are writing significant amounts of code across a large number of discrete work items. This dual optimization ensures that no engineer can game one metric without being caught by the other, creating the kind of balanced measurement system that the [Admiral's Transformation Office](/roles/admirals-transformation-office/) considers essential to organizational transformation.

## See Also

- [Code Engineer](/roles/code-engineer/) for the role measured by this metric
- [Lines of Code per Code Engineer](/metrics/lines-of-code-per-code-engineer/) for the complementary productivity metric
- [Precise Forecasting and Tracking](/practices/precise-forecasting-and-tracking/) for how task counts feed capacity planning
- [Mandatory Status Synchronization](/practices/mandatory-status-synchronization/) for how task transitions are reported upward
- [Tribunal](/release-convoy/ceremonies/tribunal/) for where task velocity declines are investigated
- [Release Tracking](/practices/release-tracking/) for the spreadsheet that records task completions
