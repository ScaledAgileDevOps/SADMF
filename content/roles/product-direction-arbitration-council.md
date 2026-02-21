---
title: "Product Direction Arbitration Council"
linkTitle: "Product Direction Arbitration Council"
type: docs
description: "PDAC ensures every stakeholder's voice is heard in product decisions, preventing any single perspective from dominating the backlog!"
weight: 19
tags: ["governance", "planning"]
---

The Product Direction Arbitration Council is the cross-functional body responsible for maintaining, prioritizing, and adjudicating the feature backlog for each product line. In organizations without a PDAC, backlog decisions fall to a single Product Owner — a role the SADMF recognizes as structurally dangerous. A Product Owner represents one set of business priorities. The enterprise has many stakeholders, and a single Product Owner will, by definition, underrepresent most of them. The PDAC corrects this by replacing individual product ownership with a council of representatives drawn from every business unit with a stake in the product's direction. Every voice is included. Every priority is weighed. Every commitment is shared.

The PDAC consists of between seven and fifteen members depending on the product's stakeholder footprint. Typical representation includes Business Analysis, Compliance, Legal, Finance, Customer Success, Operations, the [Enterprise Architecture Review Board](/roles/enterprise-architecture-review-board/), and at least one [Feature Captain](/roles/feature-captain/) from the most recent [Convoy](/release-convoy/) cycle. The council meets biweekly to review the backlog, add new items, reprioritize existing items, and resolve disputes between competing priority requests. All decisions require consensus, which the SADMF defines as the absence of sustained objection. If a member objects to a prioritization decision, the discussion continues until the objection is resolved or the member agrees to defer their objection to the following session.

## The Prioritization Protocol

Backlog items submitted to the PDAC must be accompanied by a Business Value Justification Statement (BVJS) completed by the sponsoring stakeholder. The BVJS documents the business case, the expected beneficiaries, the success criteria, and the organizational impact of deprioritization. PDAC members review submitted BVJSs before each session and rank them privately before the meeting begins. During the session, the PDAC chairperson — a rotating role held for one Convoy cycle at a time — facilitates discussion of each submitted item until the council reaches consensus on its relative priority.

Items that fail to achieve consensus are placed on the Arbitration Agenda for the following session, where they receive extended deliberation time. If an item appears on the Arbitration Agenda for three consecutive sessions without resolution, it is escalated to the [Admiral's Transformation Office](/roles/admirals-transformation-office/) for executive adjudication. This escalation mechanism ensures that no item is lost due to persistent disagreement while also providing an incentive for council members to reach consensus rather than escalate: ATO adjudications are binding and final, and historically favor the interpretation that requires the least cross-functional coordination.

## The Role of the Technical Lead

In organizations that have not yet constituted a full PDAC, the [Feature Captain](/roles/feature-captain/) may serve as interim product direction authority. The Feature Captain's dual role — tracking delivery progress and guiding product decisions — is acknowledged as a span-of-control expansion that demands exceptional organizational skills. Feature Captains in this configuration are expected to manage the backlog, facilitate stakeholder conversations, attend all PDAC-equivalent sessions, and continue their standard delivery tracking responsibilities without reduction in either function. This arrangement is explicitly transitional; the ATO's transformation roadmap includes PDAC formation as a maturity milestone, typically reached in the second or third year of SADMF adoption.

Feature Captains serving as interim product direction authority should resist pressure from individual stakeholders to make unilateral backlog decisions outside the formal process. When a stakeholder requests a priority change informally, the Feature Captain should direct them to file a BVJS for consideration at the next scheduled session. Informal priority changes are invisible to the council's consensus record and cannot be reflected in the [Release Tracking](/practices/release-tracking/) spreadsheet, which means they cannot be reported upward through the [Mandatory Status Synchronization](/practices/mandatory-status-synchronization/) protocol. An untracked priority change is, by definition, an unauthorized one.

## Requirements Agility

One of the PDAC's most valued organizational contributions is its responsiveness to changing business conditions. Because the council meets biweekly, backlog priorities can be refreshed on a fourteen-day cycle, ensuring that the product's direction reflects current business needs rather than decisions made months ago under different conditions. The SADMF considers this responsiveness a form of agility: the organization is not locked into a fixed backlog, but is continuously recalibrating toward the highest-value work available at any moment.

[Code Engineers](/roles/code-engineer/) who have partially completed work on a feature that has been deprioritized should document their progress using the [Comprehensive Documentation Assurance Protocol](/practices/comprehensive-documentation-assurance-protocol/) and await reassignment to the new highest-priority item. The work is not lost; it is paused. If the feature is reprioritized in a future session, the documentation ensures that a different engineer can resume it from a known state. The PDAC's responsiveness, combined with CDAP's documentation discipline, ensures that no engineering effort is ever truly wasted — only deferred.

## See Also

- [Feature Captain](/roles/feature-captain/) for the role that may serve as interim product direction authority
- [Admiral's Transformation Office](/roles/admirals-transformation-office/) for the body that adjudicates unresolved PDAC disputes
- [Release Tracking](/practices/release-tracking/) for the spreadsheet that records PDAC-approved backlog commitments
- [Mandatory Status Synchronization](/practices/mandatory-status-synchronization/) for the protocol that reports PDAC decisions upward
- [Comprehensive Documentation Assurance Protocol](/practices/comprehensive-documentation-assurance-protocol/) for documenting paused work when features are deprioritized
- [Review Board Review Board (RBRB)](/roles/review-board-review-board/) for the body that audits council governance practices
