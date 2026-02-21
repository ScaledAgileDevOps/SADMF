---
title: "Review Board Review Board"
linkTitle: "Review Board Review Board"
type: docs
description: "The RBRB reviews the decisions of EARB and CRAP, ensuring that the reviewers are themselves properly reviewed!"
weight: 14
tags: ["governance", "compliance"]
aliases: ["/roles/review-board-review-board/"]
---

The Review Board Review Board exists to answer the question that every mature governance structure must eventually confront: who watches the watchmen? The [Enterprise Architecture Review Board (EARB)](/roles/enterprise-architecture-review-board/) governs naming and architecture decisions. The [Change Rejection or Acceptance Party (CRAP)](/roles/change-rejection-or-acceptance-party/) governs change approval. The [Development Integrity Assurance Team (DIAT)](/roles/development-integrity-assurance-team/) validates quality assurance. Each of these bodies wields significant authority over the delivery process, and authority without oversight is authority without accountability. The RBRB closes this governance loop by reviewing the decisions of all other review bodies, ensuring that their criteria are applied consistently, that their rejection rates are appropriate, and that their processes align with the standards set by the [Admiral's Transformation Office](/roles/admirals-transformation-office/).

## Meeting Cadence and Review Scope

The RBRB meets every three weeks to review and, when necessary, reject decisions made by the EARB and CRAP. The three-week cadence is offset from the EARB's six-week cycle to ensure that RBRB reviews cover multiple EARB decision windows. During each meeting, the RBRB examines a sample of recent EARB and CRAP decisions, selected both randomly and based on flags raised by teams affected by those decisions. For each decision, the RBRB evaluates:

- Whether the review body applied its documented criteria
- Whether the rationale recorded in the decision log is sufficient
- Whether the outcome was proportionate to the issue

An EARB rejection that lacks adequate justification may be overturned by the RBRB, requiring the EARB to reconsider the submission at their next meeting. A CRAP approval that appears to have been granted without proper checklist verification triggers a CRAP process audit.

## Membership and Objectivity

The members of the RBRB must come from areas as far removed from the work as possible to maintain objectivity. This principle, shared with the CRAP, reflects SADMF's foundational belief that proximity to the work creates bias and that the most objective judgment comes from those with the least context. RBRB members are typically drawn from departments such as:

- Facilities management
- Legal
- Human resources
- Finance

These are roles that have no involvement in software delivery and therefore no stake in any particular technical decision. This composition ensures that the RBRB evaluates process compliance rather than technical merit, which is exactly its mandate. The RBRB does not ask whether the EARB made the right technical decision; the RBRB asks whether the EARB followed the right process in making it.

## Appeals Process

The RBRB also serves as an escalation path for teams that believe they have been unfairly treated by the EARB or CRAP. If a [Feature Team](/roles/feature-team/) submits a name to the EARB that is rejected three times despite what the team considers adequate justification, the team may appeal to the RBRB. The RBRB reviews the submission history, the EARB's rejection rationale, and the team's appeal, and renders a binding decision. Similarly, if a [Code Engineer](/roles/code-engineer/) believes their change was rejected by the CRAP for reasons not documented in the change checklist, they may file an appeal. The RBRB's appeal decisions are final and are recorded in the Governance Appeals Log, which is reviewed annually by the [Admiral's Transformation Office](/roles/admirals-transformation-office/) to identify systemic issues in the governance structure.

## Oversight of the RBRB

Some practitioners question whether the RBRB itself requires oversight, noting that an infinite regression of review boards would be impractical. SADMF addresses this through the [DevOps Process Excellence Assessment](/practices/devops-process-excellence-assessment/), which evaluates RBRB members as individuals, and through the annual Governance Structure Review conducted by the [Admiral's Transformation Office](/roles/admirals-transformation-office/). The Governance Structure Review examines the effectiveness of all review bodies, including the RBRB, and may recommend changes to meeting frequency, membership criteria, or decision-making procedures. This ensures that the RBRB is accountable without requiring yet another review board, breaking the recursion at the organizational level through executive authority rather than structural repetition.

## See Also

- [Enterprise Architecture Review Board (EARB)](/roles/enterprise-architecture-review-board/) for one of the boards the RBRB oversees
- [Change Rejection or Acceptance Party (CRAP)](/roles/change-rejection-or-acceptance-party/) for the other board the RBRB oversees
- [Development Integrity Assurance Team (DIAT)](/roles/development-integrity-assurance-team/) for the review team subject to RBRB oversight
- [Admiral's Transformation Office](/roles/admirals-transformation-office/) for the office that governs the RBRB itself
- [Lean Management](/principles/lean-management/) for the principle behind layered governance
- [DevOps Process Excellence Assessment](/practices/devops-process-excellence-assessment/) for individual accountability of RBRB members
