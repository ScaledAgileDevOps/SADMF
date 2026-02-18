---
title: Dry Dock
linkTitle: Dry Dock
type: docs
description: A dedicated period for addressing accumulated defects, provided feature pressure allows it
weight: 16
---

It's normal for a little damage to occur when we are moving so quickly. Defects will accumulate. The Dry Dock is the process of halting feature development for a few weeks so that repairs can be made. Every high-performing convoy will sustain wear during its voyage, and the Dry Dock provides a structured opportunity to address that wear before the next cycle begins. It is a testament to the framework's maturity that defect remediation has its own dedicated ceremony rather than being expected to happen alongside feature delivery.

## Scheduled Duration vs. Actual Duration

Dry Dock is formally scheduled for two weeks at the conclusion of each convoy cycle. However, the [Commodore](/roles/commodore/) retains the authority to adjust this duration based on the feature backlog for the upcoming convoy. In practice, this means Dry Dock is typically reduced to one week after the first day of planning, then further compressed to three days once the [Commodore](/roles/commodore/) reviews the upcoming quarter's commitments. In one documented instance, Dry Dock was reduced to a single afternoon, during which [Code Engineers](/roles/code-engineer/) were asked to "fix what they can during lunch." The [Commodore](/roles/commodore/) views this flexibility as evidence of the organization's ability to balance quality with delivery, rather than as a structural failure to allocate time for defect remediation.

## Defect Prioritization

During Dry Dock, not all defects receive equal attention. The Dry Dock Triage Board, chaired by the [Commodore](/roles/commodore/), categorizes defects into three tiers:

- **Tier 1: Executive-Visible Defects** -- Defects that have been observed or reported by senior leadership. These receive immediate attention and dedicated [Code Engineer](/roles/code-engineer/) resources.
- **Tier 2: Customer-Reported Defects** -- Defects reported by external customers. These are addressed if time permits after Tier 1 defects are resolved.
- **Tier 3: Everything Else** -- Defects identified by [Code Engineers](/roles/code-engineer/), the testing team, or automated systems. These are documented for the record but are rarely addressed during Dry Dock due to time constraints.

This prioritization ensures that the most strategically important defects are fixed first, where strategic importance is measured by the seniority of the person who noticed the defect.

## The Dry Dock Manifest

All defect remediation work during Dry Dock must be documented in the Dry Dock Manifest, a supplement to the [Convoy Manifest](/release-convoy/manifest/). The Dry Dock Manifest includes the defect identifier, the assigned [Code Engineer](/roles/code-engineer/), the estimated fix time, the actual fix time, and a root cause category selected from an approved list. The approved root cause categories are: "Code Engineer Error," "Insufficient Testing," "Unclear Requirements (attributed to Code Engineer interpretation)," and "Other (requires explanation)." The Dry Dock Manifest is filed with the [Chief Signals Officer](/roles/chief-signals-officer/) and influences the [Feature Completion Ratio](/metrics/feature-completion-ratio/) for the completed convoy.

## Reclassification of Unfixed Defects

Defects that are not resolved during Dry Dock undergo a reclassification process. Rather than carrying forward as open defects, which would negatively impact the convoy's quality metrics, unresolved defects are reclassified as "known behaviors." Known behaviors are removed from the active defect backlog and placed in a separate Known Behavior Registry. This registry is maintained by the [DIAT](/roles/development-integrity-assurance-team/) but is not included in any dashboard or reporting metric. The reclassification ensures that the defect count accurately reflects the organization's quality posture, which is to say, it reflects the number of defects the organization has chosen to acknowledge.

## The Deep Dry Dock Proposal

For several convoy cycles, senior [Code Engineers](/roles/code-engineer/) have proposed an annual "Deep Dry Dock" of four to six weeks, dedicated to addressing systemic technical debt, architectural deficiencies, and the contents of the Known Behavior Registry. The proposal has been submitted through proper channels, reviewed by the [Commodore](/roles/commodore/), and deferred to the following quarter in every instance. The Deep Dry Dock remains on the strategic roadmap as a future initiative, demonstrating the organization's long-term commitment to quality. Its consistent deferral is attributed to the success of regular Dry Dock in keeping defect counts at acceptable levels, which is itself a product of the reclassification process described above.

## See Also

- [Commodore](/roles/commodore/) for the role that determines Dry Dock duration
- [Feature Completion Ratio](/metrics/feature-completion-ratio/) for how Dry Dock outcomes affect convoy metrics
- [Convoy Manifest](/release-convoy/manifest/) for the documentation that includes the Dry Dock Manifest
- [Development Integrity Assurance Team (DIAT)](/roles/development-integrity-assurance-team/) for who maintains the Known Behavior Registry
- [Tribunal](/release-convoy/ceremonies/tribunal/) for where recurring defect creators are addressed
- [Convoy Ceremonies](/release-convoy/ceremonies/) for the full ceremony lifecycle
