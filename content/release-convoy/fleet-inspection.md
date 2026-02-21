---
title: Fleet Inspection
linkTitle: Fleet Inspection
type: docs
description: A formal review of all completed work to ensure leadership confidence
weight: 5
tags: ["release-management", "quality", "compliance"]
---

At the conclusion of each convoy cycle, all [Feature Teams](/roles/feature-team/) present their completed work to the [Commodore](/roles/commodore/), the [Convoy Steering Committee](/release-convoy/deploy/#convoy-steering-committee-csc), and assembled senior leadership. The Fleet Inspection ensures that delivered features meet the exacting standards of people who were not involved in building them.

## Presentation Requirements

Each [Feature Captain](/roles/feature-captain/) must prepare a formal presentation containing:

- A minimum of 25 slides per feature
- Executive summary on slide 2 (slide 1 is reserved for the SADMF logo and convoy number)
- Screenshots of completed work, annotated with red circles highlighting key areas
- A Gantt chart comparing estimated versus actual timelines
- [Lines of Code](/metrics/lines-of-code-per-code-engineer/) produced, broken down by [Code Engineer](/roles/code-engineer/)
- A dependencies section listing every team that was waited on, with timestamps
- A "Lessons Learned" slide that lists the same lessons from the previous convoy

Live demonstrations are strongly discouraged. Demonstrations introduce unpredictability, which undermines leadership confidence. Pre-recorded videos are acceptable if approved 48 hours in advance by the [DOUCHE](/roles/devops-usage-and-compliance-head-engineer/).

## Scoring

Leadership attendees score each feature presentation on a scale of 1 to 5 across four dimensions:

- **Slide Quality**: Were the slides professional and on-brand?
- **Narrative Coherence**: Did the presentation tell a compelling story about effort expended?
- **Metric Compliance**: Were all required [metrics](/metrics/) included and favorable?
- **Time Management**: Did the presentation stay within its 45-minute slot?

Features scoring below 3.0 in any dimension are flagged for the [Tribunal](/release-convoy/ceremonies/tribunal/). Features scoring above 4.5 are eligible for the Commodore's Commendation, a certificate suitable for framing.

## Inspection Logistics

Fleet Inspections are full-day events. Attendance is mandatory for all [Code Engineers](/roles/code-engineer/), even those whose features are not being presented, to ensure organizational learning through osmosis. Sandwiches will be provided.

The [Chief Signals Officer](/roles/chief-signals-officer/) will compile inspection scores and distribute a Fleet Inspection Report to all stakeholders within 24 hours. This report feeds directly into the [Feature Completion Ratio](/metrics/feature-completion-ratio/) and [SADMF Adoption Rate](/metrics/sadmf-adoption-rate/) calculations.

## See Also

- [Deploy the Fleet](/release-convoy/deploy/) for the approval process that follows Fleet Inspection
- [Tribunal](/release-convoy/ceremonies/tribunal/) for addressing underperforming features
- [Metrics](/metrics/) for the metrics presented during inspection
- [Commodore](/roles/commodore/) for the role that presides over the inspection
