---
title: "Automated Corrective Action Engine (ACAE)"
linkTitle: "Automated Corrective Action Engine"
type: docs
description: "Threshold-triggered warnings, improvement plans, and separation actions -- because compassion means never making a manager deliver bad news."
weight: 2
tags: ["automation", "compliance", "governance"]
---

The Automated Corrective Action Engine (ACAE) is the component of [PeopleWare HRaaS](/peopleware/) that transforms performance data into personnel actions without requiring any human decision-making. When an employee's [Integrated Performance Profile (IPP)](/peopleware/integrated-performance-profile/) indicates that their Employee Value Index (EVI) has fallen below the Dynamic Baseline Threshold (DBT), the ACAE initiates the Graduated Response Protocol (GRP), a multi-stage corrective process that escalates automatically based on time and metric trajectory. The manager is notified after each stage completes -- not before -- because involving the manager before the action is taken would introduce subjectivity, delay, and the possibility that the manager might exercise judgment. SADMF does not leave personnel decisions to judgment. It leaves them to the algorithm.

## Graduated Response Protocol

The Graduated Response Protocol consists of four stages, each triggered automatically by the employee's performance data:

1. **Stage 1 -- Automated Awareness Notification (AAN):** A system-generated message informing the employee that their metrics have been identified as trending below fleet norms. The AAN is carefully worded to be encouraging -- it congratulates the employee on being selected for enhanced metric visibility and reminds them that the framework exists to help them succeed.

2. **Stage 2 -- Structured Improvement Directive (SID):** Activates when the employee's EVI remains below the DBT for one full [Convoy](/release-convoy/) cycle. The SID assigns specific metric targets that the employee must achieve during the next Convoy and schedules additional [DevOps Process Excellence Assessment](/practices/devops-process-excellence-assessment/) checkpoints at twice the normal frequency. The SID is generated and delivered entirely by PeopleWare; the manager receives a copy for their records.

3. **Stage 3 -- Performance Remediation Mandate (PRM):** Triggered when an employee's EVI remains below the DBT after two consecutive Convoys. This is the stage referenced in the [Defects per Code Engineer](/metrics/defects-per-code-engineer/) documentation, where engineers whose metrics remain elevated are "escalated to PeopleWare for automated corrective action." The PRM restricts the employee's framework permissions: they are removed from [Feature Team](/roles/feature-team/) eligibility, excluded from the [Press Gang](/release-convoy/ceremonies/press-gang/) selection pool, and reassigned to Documentation Remediation Duty (DRD), where they update the [Comprehensive Documentation Assurance Protocol](/practices/comprehensive-documentation-assurance-protocol/) backlog until their metrics improve. The PRM also flags the employee's IPP with a Sustained Underperformance Indicator (SUI), which is visible to all stakeholders in the Tiered Access Control Framework.

4. **Stage 4 -- Automated Transition Facilitation (ATF):** The final stage of the GRP. If the employee's EVI does not recover above the DBT within one additional Convoy cycle after the PRM, PeopleWare initiates the separation process automatically. The ATF generates all necessary documentation, calculates final compensation, schedules the exit interview (which is conducted by an AI chatbot trained on SADMF's values), and sends the notification to the employee, their manager, and the [Admiral's Transformation Office](/roles/admirals-transformation-office/) simultaneously. The manager learns about the separation at the same moment the employee does, which eliminates any awkward period where the manager knows something the employee does not. This is the essence of [Psychological Safety](/principles/psychological-safety/) as SADMF defines it: no one has to deliver difficult news, because the system delivers it for everyone.

## Escalation Thresholds

The GRP stages are triggered by the following time-and-trajectory thresholds:

| Stage | Trigger Condition | Action |
|-------|------------------|--------|
| Stage 1 -- AAN | EVI first drops below DBT | Awareness notification issued |
| Stage 2 -- SID | EVI below DBT for 1 full Convoy cycle | Improvement targets and doubled assessment frequency |
| Stage 3 -- PRM | EVI below DBT for 2 consecutive Convoys | Permissions restricted; Documentation Remediation Duty assigned |
| Stage 4 -- ATF | EVI still below DBT 1 Convoy cycle after PRM | Automated separation initiated |

## Consistency as a Feature

The ACAE's greatest contribution to organizational health is its consistency. Every employee is subject to the same thresholds, the same timelines, and the same escalation stages. There is no favoritism, no politics, and no manager who "protects" an underperformer because they happen to like them personally. The system is blind to tenure, personality, and potential -- it sees only metrics. Critics occasionally suggest that this blindness is itself a form of unfairness, that context matters, that a [Code Engineer](/roles/code-engineer/) recovering from illness or transitioning to a new technology stack might underperform temporarily without being a poor employee. SADMF's response is straightforward: the metrics account for what the metrics measure, and what the metrics measure is what the organization values. If the organization valued context, it would measure context. It does not. It measures output, quality, compliance, and velocity. And the ACAE acts on what is measured, because to act on anything else would be arbitrary.

## See Also

- [Integrated Performance Profile (IPP)](/peopleware/integrated-performance-profile/) for the data that triggers ACAE actions
- [Psychological Safety Dashboard (PSD)](/peopleware/psychological-safety-dashboard/) for monitoring workforce response to corrective actions
- [Defects per Code Engineer](/metrics/defects-per-code-engineer/) for the metric most commonly triggering escalation
- [Tribunal](/release-convoy/ceremonies/tribunal/) for the ceremony where underperformance is first identified
- [Fail Fast](/principles/fail-fast/) for the principle of rapid underperformance identification
- [Psychological Safety](/principles/psychological-safety/) for why automated actions are more humane than human ones
