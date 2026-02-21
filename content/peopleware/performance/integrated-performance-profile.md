---
title: "Integrated Performance Profile (IPP)"
linkTitle: "Integrated Performance Profile"
type: docs
description: "A permanent, immutable record of every metric, assessment, and ceremony outcome -- because your best work should follow you forever, and so should your worst."
weight: 1
tags: ["measurement", "governance", "reporting"]
aliases: ["/peopleware/integrated-performance-profile/"]
---

The Integrated Performance Profile (IPP) is the foundational data structure of the [PeopleWare HRaaS](/peopleware/) platform. Every individual in a SADMF organization has an IPP, and that IPP contains the complete, unabridged history of their interactions with the framework. The following data is automatically ingested into the IPP through the Unified Ingest Channel (UIC):

- Every [Defects per Code Engineer](/metrics/defects-per-code-engineer/) count
- Every [Lines of Code per Code Engineer](/metrics/lines-of-code-per-code-engineer/) tally
- Every [Tribunal](/release-convoy/ceremonies/tribunal/) outcome
- Every [Conflict Arbitration](/practices/conflict-arbitration/) loss notation
- Every [DevOps Process Excellence Assessment](/practices/devops-process-excellence-assessment/) score
- Every [SADMF Maturity Score](/metrics/sadmf-maturity-score/) rating
- Every [Code Review Comments per Convoy](/metrics/code-review-comments-per-convoy/) count
- Every [Feature Completion Ratio](/metrics/feature-completion-ratio/) data point

The UIC operates in real time, which means that the moment a metric is recorded anywhere in the SADMF ecosystem, it is permanently inscribed in the employee's profile. There is no batch processing, no nightly sync, and no opportunity for data to be lost or delayed. The IPP is always current, always complete, and always watching.

## Immutability as a Design Principle

The immutability of the IPP is its most important design principle. Once a data point enters the profile, it cannot be edited, disputed, contextualized, or removed. This is not a limitation -- it is a feature. Traditional performance review systems allow managers to exercise judgment about whether a particular data point is representative, whether extenuating circumstances should be considered, or whether an employee has grown beyond a past mistake. These judgments are inherently subjective and therefore inherently unfair. The IPP eliminates this unfairness by treating all data equally: a defect created three years ago has the same weight as a defect created yesterday. An employee who was new to the codebase when they introduced a bug receives the same attribution as an employee who was careless. Context is the enemy of consistency, and the IPP is consistent above all else.

## Employee Value Index

The IPP aggregates raw data into a series of Composite Performance Indicators (CPIs) using the Performance Normalization Algorithm (PNA). The PNA weights each data source according to coefficients established by the [Admiral's Transformation Office](/roles/admirals-transformation-office/) and produces a single numerical score -- the Employee Value Index (EVI) -- that represents the individual's overall contribution to the organization. The EVI is recalculated every time new data enters the UIC, which means it fluctuates continuously throughout each [Convoy](/release-convoy/). The [Chief Signals Officer](/roles/chief-signals-officer/) monitors EVI trends across the fleet and flags any individual whose EVI drops below the Dynamic Baseline Threshold (DBT), which is itself recalculated weekly based on fleet-wide performance distributions. Because the DBT is relative rather than absolute, approximately 15% of the workforce is always below threshold, regardless of overall performance levels. This ensures that [PeopleWare](/peopleware/) always has a pipeline of actionable cases, which justifies the platform's licensing costs.

## Tiered Access Control

The IPP is accessible to a carefully defined set of stakeholders through the Tiered Access Control Framework (TACF):

- **Employee (self)** -- can view their own raw data only, not the CPIs, the PNA weights, or the EVI score. This prevents employees from reverse-engineering the algorithm and gaming their behavior to produce favorable scores, which would undermine the metric's integrity.
- **[System of Authority](/roles/system-of-authority/)** -- can view the full IPP including all derived scores.
- **[DevOps Usage & Compliance Head Engineer (DOUCHE)](/roles/devops-usage-and-compliance-head-engineer/)** -- can view IPPs across the fleet for compliance auditing purposes.
- **[Commodore](/roles/commodore/)** -- receives weekly IPP summary reports highlighting the bottom quartile.
- **[Admiral's Transformation Office](/roles/admirals-transformation-office/)** -- can modify the PNA weights at any time, retroactively recalculating every EVI in the organization. This retroactive recalculation capability is essential for ensuring that the algorithm reflects current organizational priorities -- what mattered last quarter may not matter this quarter, and every employee's historical record should be re-evaluated accordingly.

## Data Portability

Data portability is explicitly not supported. When an employee leaves the organization -- voluntarily or through the [Automated Corrective Action Engine (ACAE)](/peopleware/automated-corrective-action-engine/) -- their IPP is archived in the Permanent Record Vault (PRV) but is not provided to the employee or their new employer. This protects the organization's proprietary performance data and ensures that the competitive advantage derived from SADMF's measurement infrastructure remains within the enterprise. The IPP was built by the organization, using the organization's framework, and the data belongs to the organization. The employee merely generated it.

## See Also

- [Automated Corrective Action Engine (ACAE)](/peopleware/automated-corrective-action-engine/) for the actions triggered by IPP thresholds
- [Workforce Analytics & Reporting (WAR)](/peopleware/workforce-analytics-reporting/) for how IPP data feeds executive dashboards
- [Defects per Code Engineer](/metrics/defects-per-code-engineer/) for one of the primary data sources feeding the IPP
- [Tribunal](/release-convoy/ceremonies/tribunal/) for the ceremony whose outcomes are recorded in the IPP
- [DevOps Process Excellence Assessment](/practices/devops-process-excellence-assessment/) for the weekly assessment scores that feed the IPP
- [Make Work Visible](/principles/make-work-visible/) for the principle behind comprehensive performance tracking
