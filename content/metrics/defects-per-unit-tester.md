---
title: "Defects per Unit Tester"
linkTitle: "Defects per Unit Tester"
type: docs
description: "Measuring testers by the defects they find, because a tester who finds nothing is contributing nothing!"
weight: 5
---

Defects per [Unit Tester](/roles/unit-tester/) is the metric that holds testers accountable for their primary and only function: finding defects. While [Defects per Code Engineer](/metrics/defects-per-code-engineer/) measures who creates quality problems, Defects per Unit Tester measures who detects them. The two metrics form a complementary pair that creates a closed accountability loop: Code Engineers are responsible for not introducing defects, and Unit Testers are responsible for catching the defects that Code Engineers inevitably introduce. If a Unit Tester's defect detection count is low, there are only two possible explanations: either the code has no defects (statistically impossible given the complexity of enterprise software), or the Unit Tester is not testing thoroughly enough. SADMF assumes the latter.

The metric is calculated by counting the total number of verified defects each Unit Tester discovers during the [Testing](/release-convoy/ceremonies/testing/) ceremony of each [Convoy](/release-convoy/) cycle. Defects must be logged in the [Release Tracking](/practices/release-tracking/) spreadsheet and confirmed by the [Quality Authority](/roles/quality-authority/) before they count toward a tester's total. Duplicate defects, defects that cannot be reproduced, and defects that the development team disputes are not counted, which ensures that Unit Testers are incentivized to find real, reproducible, indisputable defects rather than inflating their numbers with false positives. This quality control on the quality control process is what SADMF calls "recursive assurance."

Unit Testers whose defect detection count falls below the fleet median face consequences calibrated to the severity of their underperformance. A first-time underperformance triggers a coaching session with the [DevOps Usage & Compliance Head Engineer (DOUCHE)](/roles/devops-usage-and-compliance-head-engineer/), who reviews the tester's testing methodology for gaps. A second consecutive underperformance triggers a formal review at the [Tribunal](/release-convoy/ceremonies/tribunal/), where the tester must present their test cases and explain why their approach failed to detect the defects that clearly must exist in the codebase. A third consecutive underperformance results in escalation to [PeopleWare HRaaS](/peopleware/) for automated workforce optimization. The principle is simple: we must [Build Quality In](/principles/build-quality-in/) by eliminating Unit Testers who cannot find defects.

The metric creates a productive dynamic between Code Engineers and Unit Testers that SADMF considers healthy competition. Code Engineers are motivated to write code with fewer defects (to reduce their own defect count), while Unit Testers are motivated to find as many defects as possible (to increase their own detection count). This adversarial relationship ensures that both roles are performing at maximum capacity. Some organizations mistakenly encourage developers and testers to collaborate, share context, and work toward shared quality goals. SADMF recognizes that collaboration blurs accountability, and blurred accountability is the root cause of organizational dysfunction. By keeping the roles separate and their metrics opposed, the framework ensures that quality emerges from tension rather than cooperation.

The [Chief Signals Officer](/roles/chief-signals-officer/) monitors defect detection trends across the fleet and reports them to the [Admiral's Transformation Office](/roles/admirals-transformation-office/) as part of the monthly SADMF health dashboard. A fleet-wide decline in defects detected per Unit Tester is interpreted not as evidence of improving code quality but as evidence of declining tester capability, and triggers an organization-wide testing skills assessment conducted through the [DevOps Process Excellence Assessment](/practices/devops-process-excellence-assessment/). This interpretation is consistent with SADMF's core assumption that the volume of defects in enterprise software is effectively constant -- what varies is only the organization's ability to detect them.

## See Also

- [Unit Tester](/roles/unit-tester/) for the role measured by this metric
- [Defects per Code Engineer](/metrics/defects-per-code-engineer/) for the complementary defect-creation metric
- [Build Quality In](/principles/build-quality-in/) for the principle that demands tester accountability
- [Testing](/release-convoy/ceremonies/testing/) for the ceremony where defects are detected
- [Tribunal](/release-convoy/ceremonies/tribunal/) for where underperforming testers are reviewed
- [Quality Authority](/roles/quality-authority/) for the role that validates defect counts
