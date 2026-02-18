---
title: Provisioning
linkTitle: Provisioning
type: docs
description: Translating strategic commitments into granular task lists through expert decomposition by Feature Captains
weight: 4
---

Before each convoy begins active development, the Provisioning ceremony translates the commitments made during [Convoy Alignment](/release-convoy/agenda/) into detailed task lists for each [Feature Team](/roles/feature-team/). Each [Feature Captain](/roles/feature-captain/) breaks their committed features into tasks no larger than 4 hours each. Tasks estimated at more than 4 hours indicate insufficient understanding and must be broken down further, regardless of whether the decomposition adds clarity.

After task decomposition, the [Feature Captain](/roles/feature-captain/) totals the estimated hours across all tasks. If the total exceeds the team's available capacity, the [Feature Captain](/roles/feature-captain/) adds 30% additional tasks anyway because "we committed to this during alignment." The gap between capacity and commitment is recorded as a "stretch opportunity" rather than an overcommitment.

[Code Engineers](/roles/code-engineer/) are not consulted during Provisioning. Their estimates are not needed because the [Feature Captain](/roles/feature-captain/) has already estimated on their behalf using historical [Lines of Code per Code Engineer](/metrics/lines-of-code-per-code-engineer/) data. This ensures consistency and prevents the introduction of pessimism into the plan.

## The Provisioning Spreadsheet

All task decomposition is recorded in the Provisioning Spreadsheet, a document that only the [Feature Captain](/roles/feature-captain/) has edit access to. This restriction exists to maintain the integrity of the estimates and to prevent [Code Engineers](/roles/code-engineer/) from introducing complexity that was not apparent during planning. The spreadsheet is maintained in a shared drive but is protected with a password known only to the Feature Captain and the [Commodore](/roles/commodore/). Read-only access may be granted to [Code Engineers](/roles/code-engineer/) upon request, though requests are reviewed on a quarterly cadence.

Each task in the spreadsheet must follow the approved naming convention: the convoy number prefix, followed by the feature identifier, followed by a sequential task number (e.g., `C17-F042-T003`). Tasks that do not follow this convention are rejected during [Code Inspection](/release-convoy/ceremonies/code-inspection/) regardless of their implementation quality.

## Capacity Reconciliation

After the initial task decomposition is complete, the Feature Captain performs the Capacity Reconciliation step. This is where the total estimated hours are compared against the team's available capacity. In every observed instance, the estimated hours exceed capacity by 40% to 200%. The Capacity Reconciliation process addresses this gap through a series of approved adjustments:

1. Meetings, breaks, and administrative time are removed from the capacity model, reflecting the expectation that [Code Engineers](/roles/code-engineer/) will code continuously during working hours.
2. Tasks labeled as "simple" are reduced by 50%, as simple tasks should take half the time.
3. Any remaining gap is labeled a "stretch opportunity" and documented in the [Convoy Manifest](/release-convoy/manifest/) as an area where the team will demonstrate its commitment.

These adjustments always close the gap on paper, which is the purpose of the exercise.

## Historical Accuracy

The accuracy of Provisioning estimates has been tracked across all convoy cycles. In no recorded instance has a Provisioning estimate accurately predicted the actual effort required to deliver the planned features. This outcome is consistently attributed to [Code Engineer](/roles/code-engineer/) performance rather than estimation quality, as the estimation process has been validated by the [Admiral's Transformation Office](/roles/admirals-transformation-office/) and found to be methodologically sound. When delivery falls short, the root cause is documented as "insufficient velocity" and fed into [PeopleWare](/peopleware/) performance metrics. The estimation process itself has never been identified as a contributing factor, as doing so would undermine confidence in the framework.

## See Also

- [Convoy Alignment](/release-convoy/agenda/) for the planning event that produces the commitments being provisioned
- [Feature Team](/roles/feature-team/) for the teams that receive provisioned task lists
- [Feature Captain](/roles/feature-captain/) for the role that performs task decomposition and estimation
- [Code Engineers](/roles/code-engineer/) for the role that executes tasks without having estimated them
- [Lines of Code per Code Engineer](/metrics/lines-of-code-per-code-engineer/) for the metric used in place of developer estimates
- [Convoy Manifest](/release-convoy/manifest/) for where Provisioning outputs are documented
