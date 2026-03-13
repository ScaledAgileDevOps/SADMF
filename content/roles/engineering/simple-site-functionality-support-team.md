---
title: "Simple Site Functionality Support Team (SiSiFuS)"
linkTitle: "Simple Site Functionality Support Team"
type: docs
description: "Former great problem solvers dedicated to maintaining alarm work, reporting, customizations, and chasing backported feature parity across maintenance branches!"
weight: 16
tags: ["branching", "support", "maintenance"]
aliases: ["/roles/simple-site-functionality-support-team/"]
---

Every successful organization eventually discovers that shipping new features is only half the battle. The other half -- the half that never ends -- is maintaining the fleet of maintenance branches spawned by long-running support contracts with the organization's most difficult customers. These customers signed centennial support agreements that guarantee feature parity with the mainline product, customized reporting dashboards, bespoke alarm configurations, and an ever-growing catalog of site-specific modifications that must be preserved across every release. The Simple Site Functionality Support Team (SiSiFuS) exists to shoulder this burden so that [Feature Teams](/roles/feature-team/) can focus on building new functionality without being drawn into the essential ongoing work of maintenance branch stewardship.

## Composition

SiSiFuS teams are staffed exclusively with the organization's former great problem solvers: senior [Code Engineers](/roles/code-engineer/) who once built the most ambitious features in the product's history and who have since been reassigned to maintenance duty as a reward for their deep institutional knowledge. Their expertise is considered too valuable to waste on new features, where any competent engineer could contribute, and too critical to lose entirely, so they are preserved in the maintenance organization where their talents can be applied to the uniquely challenging work of cherry-picking features across seventeen divergent branches while keeping each customer's custom alarm thresholds intact.

The typical SiSiFuS team consists of:

- **1 Branch Shepherd:** tracks the divergence state of all maintenance branches and determines the merge order for backports
- **2-4 Backport Engineers:** perform the actual cherry-pick, conflict resolution, and re-testing of features across maintenance branches
- **1 Alarm Custodian:** maintains the customer-specific monitoring configurations, threshold values, and escalation rules that have accumulated over decades of contract negotiations
- **1 Report Wrangler:** ensures that each customer's bespoke reporting dashboards continue to produce the exact same numbers in the exact same format, regardless of underlying data model changes in the mainline

## The Backport Parity Mandate

The centerpiece of SiSiFuS operations is the Backport Parity Mandate (BPM), which stipulates that every feature shipped in the mainline product must be backported to all active maintenance branches within the contractually agreed timeframe. The BPM does not distinguish between features that are relevant to the maintenance customer and features that are not, because the support contract guarantees full feature parity and the legal department has confirmed that selective backporting could constitute a breach. SiSiFuS teams therefore backport every mainline feature to every active branch, ensuring that contractual parity is maintained uniformly and without exception. The BPM's strength lies in its comprehensiveness: by backporting all features rather than attempting to predict which ones a customer might eventually need, the organization eliminates the risk of a parity gap.

The backporting process follows a strict sequence:

1. The [Source Management Team (SMT)](/roles/source-management-team/) notifies SiSiFuS that a new feature has been merged to the mainline
2. The Branch Shepherd consults the Maintenance Branch Registry to identify all active branches requiring the backport
3. Each Backport Engineer is assigned a subset of branches and begins the cherry-pick process
4. Conflicts are resolved manually, as each maintenance branch has diverged in unique and creative ways over the years
5. The Alarm Custodian verifies that the backported feature has not disturbed any customer-specific alarm configurations
6. The Report Wrangler confirms that all reporting dashboards still produce identical output
7. The [Quality Authority](/roles/quality-authority/) certifies each backported branch independently, as testing on one maintenance branch provides zero confidence about any other

## Alarm Work

Alarm work is the single largest consumer of SiSiFuS capacity. Each maintenance customer operates a unique alarm configuration that has evolved through years of incident response, contractual amendments, and individual preference. These configurations specify not only what conditions trigger alarms but also who receives them, in what format, through which channel, and at what time of day. Some customers require SMS alerts for disk usage above 73% but only on Tuesdays. Others demand that all alarms be routed through a dedicated email distribution list that was last updated in 2019. The Alarm Custodian maintains a master spreadsheet of all alarm configurations across all maintenance branches, and any change to the mainline monitoring system must be carefully evaluated for its impact on every customer's alarm setup before it can be backported.

When a mainline change affects the monitoring subsystem, SiSiFuS initiates the Alarm Impact Assessment (AIA), a process that involves:

- Cross-referencing the change against every customer alarm configuration
- Identifying configurations that depend on modified interfaces, thresholds, or data sources
- Crafting customer-specific patches that preserve the exact behavior each customer expects
- Testing each patch in isolation on the corresponding maintenance branch
- Documenting the changes in the Alarm Configuration Change Log, which is reviewed by the [DIAT](/roles/development-integrity-assurance-team/) and archived for audit purposes

## Reporting and Customizations

Maintenance customers do not consume standard reports. Each customer's reporting requirements were negotiated individually at contract signing and have been amended through a series of change requests, escalations, and executive concessions over the life of the contract. The result is that no two customers receive the same report, and many customers receive reports that bear little resemblance to anything the mainline product can natively produce. The Report Wrangler maintains these customizations through a combination of branch-specific configuration files, customer-specific SQL views, and hand-maintained transformation scripts that convert mainline data structures into the formats each customer expects.

When the mainline data model changes -- which happens with every [Convoy](/release-convoy/) -- the Report Wrangler must update every customer-specific transformation to accommodate the new structure while preserving the exact output format. A column renamed in the mainline might cascade into seventeen different transformation scripts across twelve maintenance branches, each of which must be updated, tested, and certified independently. The Report Wrangler's performance is measured by the Report Fidelity Index (RFI): the percentage of customer reports that produce byte-identical output before and after a backport.

## Continuous Parity Operations

SiSiFuS teams operate on a continuous parity cycle that ensures maintenance branches remain aligned with the mainline at all times. Each [Convoy](/release-convoy/) delivers new features that must be backported, each backport introduces conflicts that must be resolved, each resolution risks disturbing alarm configurations that must be verified, and each verification may reveal reporting discrepancies that must be corrected. By the time a SiSiFuS team has finished processing one Convoy's backports, the next Convoy has already shipped, and the cycle begins again. The Branch Shepherd maintains a Backport Debt Dashboard that tracks the growing delta between mainline and each maintenance branch, but the dashboard itself must be backported to maintenance branches that have their own customized dashboard layouts.

The [DOUCHE](/roles/devops-usage-and-compliance-head-engineer/) monitors SiSiFuS velocity through the Maintenance Parity Gap (MPG) metric, which measures the average number of Convoys by which maintenance branches lag behind the mainline. An MPG of zero is the contractual target; the operational target range of three to seven Convoys provides a realistic parity window that balances backport thoroughness with delivery cadence, and values above ten trigger an executive escalation to the [Admiral's Transformation Office](/roles/admirals-transformation-office/).

## Reporting Structure

SiSiFuS reports to:

- **[Commodore](/roles/commodore/):** for backport scheduling aligned to Convoy timelines
- **[DOUCHE](/roles/devops-usage-and-compliance-head-engineer/):** for process compliance and MPG reporting
- **[Chief Signals Officer](/roles/chief-signals-officer/):** for alarm configuration governance

## See Also

- [Fractal-based Development](/practices/fractal-based-development/) for the branching model that SiSiFuS must navigate across maintenance branches
- [Source Management Team (SMT)](/roles/source-management-team/) for the team that manages branch operations and notifies SiSiFuS of new backport requirements
- [Feature Team](/roles/feature-team/) for the teams whose output SiSiFuS must perpetually backport
- [Quality Authority](/roles/quality-authority/) for the team that certifies each maintenance branch independently
- [Conflict Arbitration](/practices/conflict-arbitration/) for the resolution process applied to backport conflicts
- [Release Convoy](/release-convoy/) for the delivery cycle that drives the backport cadence
- [Systems Thinking](/principles/systems-thinking/) for the principle that justifies dedicated maintenance teams
