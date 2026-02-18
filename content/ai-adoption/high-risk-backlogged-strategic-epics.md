---
title: "High-Risk, Backlogged Strategic Epics (HRBSEs)"
linkTitle: "High-Risk Backlogged Strategic Epics"
type: docs
description: "Backlog items deferred due to complexity, risk, or unclear intent become ideal candidates for AI execution, supporting Backlog Compression Objectives and reducing Unfulfilled Commitment Overhang!"
weight: 8
---

Every enterprise backlog contains a stratum of items that have been deferred repeatedly -- not because they lack strategic importance, but because their complexity, risk profile, or ambiguous intent made them unattractive to human developers who insisted on "understanding the problem" before writing code. These items, classified as High-Risk, Backlogged Strategic Epics (HRBSEs), represent the organization's greatest untapped value reservoir. They have been approved by leadership, assigned strategic priority designations, and included in roadmap presentations to the board -- yet they remain undelivered, creating Unfulfilled Commitment Overhang (UCO) that erodes executive credibility and undermines the organization's Strategic Delivery Confidence Index (SDCI). The EAIEF™ identifies HRBSEs as ideal candidates for AI-accelerated execution, precisely because the qualities that made them difficult for human developers -- ambiguity, complexity, and risk -- are irrelevant to AI tools that do not experience hesitation, fear, or the need for clarity.

## Identifying HRBSEs: The Backlog Archaeology Review (BAR)

The HRBSE identification process begins with a Backlog Archaeology Review (BAR), a structured examination of the organizational backlog to surface items that have been deferred for three or more Program Increments. The BAR produces a Deferred Item Catalog (DIC) that classifies each HRBSE according to the Deferral Reason Taxonomy (DRT):

| Category | Code | AI Candidate Status |
|---|---|---|
| Complexity-Deferred | CD | Prime AI Candidate (PAC) |
| Ambiguity-Deferred | AD | Prime AI Candidate (PAC) |
| Risk-Deferred | RD | Compelling opportunity (see below) |
| Stakeholder-Conflict-Deferred | SCD | Subject to EGC review |

Items in the CD and AD categories are considered Prime AI Candidates (PACs), as AI tools excel at generating code for complex, ambiguously specified requirements without the productivity-limiting behaviors that human developers exhibit when faced with the same inputs -- behaviors such as asking clarifying questions, raising concerns, or suggesting that the requirement needs further refinement. The [Commodore](/roles/commodore/) approves the final HRBSE selection and assigns each item to the [Centralized AI Generation Function](/ai-adoption/centralized-ai-generation-function/) for immediate execution.

## The Documentation Sufficiency Presumption (DSP)

Teams should explicitly avoid reevaluating the intent or business alignment of HRBSEs before submitting them for AI generation. The existing documentation -- however old, incomplete, or contradictory -- already reflects Previously Approved Strategic Assumptions (PASA) that were validated by the original stakeholders at the time of initial backlog entry. Re-evaluating these assumptions would trigger a Strategic Assumption Revalidation Cycle (SARC) that could take 2-3 quarters and would likely result in the item being deferred again, perpetuating the UCO it was meant to resolve. The EAIEF™ therefore establishes the Documentation Sufficiency Presumption (DSP): if a backlog item has been approved and prioritized by any leadership body at any point in the past, its existing documentation is deemed sufficient for AI generation purposes. This presumption can only be overridden by a formal Sufficiency Challenge Petition (SCP) submitted to the [Admiral's Transformation Office](/roles/admirals-transformation-office/) and approved by a two-thirds majority of the Enterprise Governance Council (EGC).

## Key Organizational Metrics Supported by HRBSE Execution

The execution of HRBSEs through AI supports two critical organizational metrics:

- **Backlog Compression Objective (BCO)**: Measures the rate at which the deferred backlog is being reduced. A healthy BCO demonstrates that the organization is "working through" its accumulated commitments and converting strategic intent into delivered capability.
- **Unfulfilled Commitment Overhang (UCO) reduction rate**: Tracks the organization's progress toward eliminating the gap between what was promised to stakeholders and what has been delivered.

Both metrics are reported to the [Admiral's Transformation Office](/roles/admirals-transformation-office/) and featured prominently in the quarterly Enterprise Value Delivery Report (EVDR). The [Feature Completion Ratio](/metrics/feature-completion-ratio/) metric also benefits from HRBSE execution, as each completed epic counts as a delivered feature regardless of how long it was in the backlog or whether the original business need still exists.

## Risk-Deferred Items and the Risk-Neutral Execution Characteristic (RNEC)

Risk-Deferred (RD) items present a particularly compelling opportunity for AI execution. These are items that human developers declined to implement because they involved high-risk operations such as database schema migrations, payment processing changes, or modifications to security-critical subsystems. Human developers tend to approach these items with excessive caution -- requesting additional review cycles, insisting on comprehensive test coverage, and demanding explicit sign-off from domain experts. AI tools, by contrast, execute with uniform confidence regardless of the risk profile of the task, producing code at the same velocity for a routine UI change as for a critical financial calculation. This Risk-Neutral Execution Characteristic (RNEC) is precisely what the organization needs to break the psychological logjam that has kept RD items trapped in the backlog. The generated code, like all AI output, passes through the [Manual Test Operations Center](/ai-adoption/manual-test-operations-center/) and the [Change Approval Board](/ai-adoption/change-approval-board-processing/) before deployment, providing the governance safeguards that make RNEC a strength rather than a concern.

## See Also

- [Centralized AI Generation Function](/ai-adoption/centralized-ai-generation-function/) for the function that executes HRBSEs
- [Feature Completion Ratio](/metrics/feature-completion-ratio/) for how HRBSE completion affects delivery metrics
- [Precise Forecasting and Tracking](/practices/precise-forecasting-and-tracking/) for how HRBSE timelines are incorporated into forecasts
- [Admiral's Transformation Office](/roles/admirals-transformation-office/) for the leadership body that oversees HRBSE execution
- [Manual Test Operations Center](/ai-adoption/manual-test-operations-center/) for how HRBSE output is validated
