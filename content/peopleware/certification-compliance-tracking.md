---
title: "Certification & Compliance Tracking (CCT)"
linkTitle: "Certification & Compliance Tracking"
type: docs
description: "Automated escalating reminders ensure no certification lapses -- because an uncertified employee is an untransformed employee."
weight: 4
---

Certification & Compliance Tracking (CCT) is the [PeopleWare HRaaS](/peopleware/) module that automates the monitoring, enforcement, and escalation of all SAD [certification](/certifications/) requirements across the organization. The [SADMF Adoption Rate](/metrics/sadmf-adoption-rate/) is one of the most visible metrics reported to the board of directors, and CCT ensures that this number only moves in one direction: up. Every employee's certification status is tracked in real time through the Certification Lifecycle Management System (CLMS), which monitors certification acquisition dates, expiration timelines, renewal windows, and the precise number of days until each individual's credentials lapse. When a certification is approaching expiration, CCT initiates the Automated Renewal Escalation Sequence (ARES), a multi-stage reminder and enforcement process that treats lapsed certification with the same urgency that a hospital treats a flatlined patient.

## Automated Renewal Escalation Sequence

The ARES operates on a five-tier escalation model:

| Tier | Trigger | Notification | Action |
|------|---------|-------------|--------|
| 1 | 60 days before expiration | Certification Renewal Awareness Message (CRAM) | Friendly reminder to register for renewal workshop |
| 2 | 30 days before expiration | Certification Urgency Notification (CUN) | Copies [System of Authority](/roles/system-of-authority/) lead; flags [SADMF Adoption Rate](/metrics/sadmf-adoption-rate/) contribution at risk |
| 3 | 14 days before expiration | Compliance Deficiency Alert (CDA) | Adds [DOUCHE](/roles/devops-usage-and-compliance-head-engineer/) to notification chain; places Certification Risk Flag (CRF) on [IPP](/peopleware/integrated-performance-profile/) |
| 4 | Day of expiration | Certification Lapse Incident Report (CLIR) | Reduces [SADMF Maturity Score](/metrics/sadmf-maturity-score/) by one full tier; generates finding in next [DevOps Process Excellence Assessment](/practices/devops-process-excellence-assessment/) |
| 5 | 7 days after lapse | Sustained Non-Compliance Escalation (SNCE) | Routes case to [ACAE](/peopleware/automated-corrective-action-engine/) for inclusion in the Graduated Response Protocol |

## Certification Levels and Renewal Cycles

The CCT module tracks all four certification levels defined in the SADMF certification program. Each level has its own renewal cycle, with higher levels requiring more frequent renewal to ensure that the organization's most certified individuals maintain their edge:

| Certification Level | Renewal Cycle |
|--------------------|--------------|
| SAD Practitioner | Every 12 months |
| SAD Professional | Every 8 months |
| SAD Master | Every 6 months |
| SAD Fellow | Every 4 months |

The SAD Fellow renewal frequency reflects the Fellow's commitment to living the framework at the highest level. The [DEPRESSED](/practices/depressed/) team certification has its own renewal cycle of 8 weeks, as specified in the certification documentation, and CCT tracks this separately through the Team Certification Compliance Module (TCCM). Teams that allow their DEPRESSED certification to lapse lose their designation as a certified [Feature Team](/roles/feature-team/) and must reserve an entire sprint to re-certify, during which they produce no deliverable output -- a consequence that the [Commodore](/roles/commodore/) communicates as "investing in excellence."

## Continuing Education Units

CCT also manages the framework's Continuing Education Units (CEUs), which every certified individual must accumulate between renewal cycles. CEUs are earned through the following activities:

- **SADMF workshops** -- full CEU credit per workshop completed
- **Online modules** -- full CEU credit per module completed
- **[Mandatory Status Synchronization](/practices/mandatory-status-synchronization/) ceremonies** -- 0.25 CEUs per session
- **[Tribunal](/release-convoy/ceremonies/tribunal/) appearances** -- 0.5 CEUs per appearance, whether as a reviewer or the subject of review
- **SADMF reference materials** -- CEUs awarded upon purchase from the official store

The CEU Accumulation Tracker (CAT) within CCT monitors each employee's CEU balance and generates a CEU Deficiency Warning (CDW) when an employee is on track to fall short of the required total before their renewal date. The CDW is integrated with the ARES, meaning that a CEU deficiency can independently trigger escalation even if the certification itself has not yet expired. This proactive approach ensures that compliance issues are addressed before they become compliance failures.

## Strategic Value: Certification Deserts

The strategic value of CCT extends beyond individual compliance. By maintaining a real-time, organization-wide view of certification status, CCT enables the [Admiral's Transformation Office](/roles/admirals-transformation-office/) to identify certification deserts -- teams, departments, or regions where certification density falls below the target ratio. Certification deserts are leading indicators of transformation resistance, and CCT's early detection capability allows the organization to deploy [SAD Accredited Facilitators](/certifications/) to these areas before resistance solidifies into organized dissent. The [Commodore](/roles/commodore/) uses CCT data to set quarterly certification targets for each [System of Authority](/roles/system-of-authority/) unit, and these targets are incorporated into leadership performance evaluations. A leader whose unit falls below certification targets is, by definition, failing to drive transformation, and their own IPP reflects this failure through the Leadership Alignment Score (LAS), which CCT calculates and reports automatically.

## See Also

- [Certifications](/certifications/) for the certification programs CCT tracks
- [SADMF Adoption Rate](/metrics/sadmf-adoption-rate/) for the metric that CCT directly supports
- [Integrated Performance Profile (IPP)](/peopleware/integrated-performance-profile/) for how certification data feeds the permanent record
- [Automated Corrective Action Engine (ACAE)](/peopleware/automated-corrective-action-engine/) for the escalation path when compliance fails
- [DEPRESSED](/practices/depressed/) for the team certification with an 8-week renewal cycle
- [Continuous Learning](/principles/continuous-learning/) for the principle behind mandatory certification renewal
