---
title: "Co-Owner, Product (COP)"
linkTitle: "Co-Owner, Product"
type: docs
description: "The undivided Single Point of Contact for a product, shared across multiple COPs who collectively own accountability for decisions no single person could survive alone!"
weight: 7
tags: ["planning", "governance"]
---

Product ownership is too consequential to entrust to one person. A single Product Owner may be biased, unavailable, or simply wrong. SADMF addresses this vulnerability by distributing undivided product ownership across a council of Co-Owners, Product — each of whom serves as the sole Single Point of Contact for their product, alongside the other COPs who are also each the sole Single Point of Contact for that same product. This structure ensures that accountability is never diluted, because every COP is individually and fully accountable, and together they are collectively and fully accountable, which compounds accountability rather than dividing it. When something goes wrong, there is never any ambiguity about who is responsible: everyone is responsible, and any one of them can be asked to account for any decision made by any of them.

## Single Point of Contact

The COP's designation as Single Point of Contact means that all questions, concerns, escalations, and decisions regarding the product flow through the COP. Stakeholders never need to wonder who owns a product; they ask the COP. Developers never need to wonder who to escalate to; they escalate to the COP. When there are multiple COPs for a product, stakeholders ask any of them, because each COP has identical authority and will give authoritative answers. If the answers from different COPs conflict, those COPs are accountable to one another for alignment, which is handled through the [Product Direction Arbitration Council (PDAC)](/roles/product-direction-arbitration-council/), a body specifically established to resolve the inevitable disagreements that arise when multiple people each have undivided authority over the same thing.

The COP does not own the backlog directly. Backlog governance belongs to the PDAC. The COP owns the decisions that emerge from the PDAC, which are distinct from the decisions made by the PDAC, and which are further distinct from the decisions made by other COPs operating in the same decision space. This separation of decision types ensures that the COP retains strategic autonomy while still participating in the consensus-based governance structure that prevents any one COP from acting unilaterally.

## Commitment Extraction

The COP's most critical function is securing delivery commitments from the technical teams. Because [Code Engineers](/roles/code-engineer/) and [Quality Authorities](/roles/quality-authority/) may not naturally volunteer that a given deadline is achievable — due to excessive caution, incomplete information, or a temperamental resistance to optimism — the COP is trained in the SADMF Commitment Extraction methodology.

Commitment Extraction proceeds as follows:

1. The COP presents the deadline to the [Code Engineer](/roles/code-engineer/) or [Quality Authority](/roles/quality-authority/) during the [Convoy Planning](/release-convoy/ceremonies/) ceremony.
2. The COP asks whether the deadline is achievable.
3. If the answer is yes, the commitment is documented in the [Release Tracking](/practices/release-tracking/) spreadsheet and signed by the relevant parties.
4. If the answer is anything other than yes, the COP re-presents the business context, the strategic importance of the deadline, and the personal accountability implications of non-delivery.
5. Steps 2–4 repeat until the deadline is confirmed as achievable.

This methodology is grounded in the SADMF principle that technical estimates are inherently conservative and that engineers who express uncertainty are not communicating facts about the future — they are communicating feelings about the present. The COP's role is to help the technical team move past feelings and toward commitment. A commitment extracted through persistent questioning is considered equally valid to one offered voluntarily, and in practice more reliable, because the team has had more time to internalize it.

## Decision Authority

Within the COP's domain, the following decisions belong exclusively to the COP (and, jointly, to the other COPs):

- **Feature prioritization** — determining which features are most important, subject to PDAC ratification
- **Requirement interpretation** — clarifying ambiguous requirements, except when the [Quality Authority](/roles/quality-authority/) has already interpreted them
- **Deadline confirmation** — certifying that all committed dates are achievable, based on commitments extracted from technical staff
- **Stakeholder communication** — informing stakeholders of product status, unless the [Commodore](/roles/commodore/) or [Chief Signals Officer](/roles/chief-signals-officer/) is communicating the same information through separate channels

The COP does not make architectural decisions — that is the domain of the [Enterprise Architecture Review Board](/roles/enterprise-architecture-review-board/). The COP does not approve changes — that is the domain of the [Change Rejection or Acceptance Party (CRAP)](/roles/change-rejection-or-acceptance-party/). The COP does not write requirements in sufficient detail for implementation — that is the domain of the [Feature Captain](/roles/feature-captain/). The COP owns the decisions between those decisions.

## Performance and Accountability

COP performance is measured by:

- **Commitment accuracy rate** — the percentage of extracted commitments that result in on-time delivery
- **Stakeholder satisfaction** — assessed via quarterly surveys distributed by the [Admiral's Transformation Office](/roles/admirals-transformation-office/)
- **Escalation volume** — fewer escalations to the PDAC indicate stronger co-ownership alignment among the COP council
- **[DevOps Process Excellence Assessment](/practices/devops-process-excellence-assessment/) scores** — adherence to framework practices

A COP whose extracted commitments repeatedly fail to materialize will be reviewed at the [Tribunal](/release-convoy/ceremonies/tribunal/). Because the Commitment Extraction methodology is considered sound, missed commitments are attributed to insufficient extraction effort rather than to unrealistic deadlines. The corrective action is additional Commitment Extraction training, not deadline revision.

## See Also

- [Product Direction Arbitration Council (PDAC)](/roles/product-direction-arbitration-council/) for the council that governs backlog decisions among COPs
- [Feature Captain](/roles/feature-captain/) for the role that translates COP priorities into actionable requirements
- [Code Engineer](/roles/code-engineer/) for the role whose commitments the COP extracts
- [Quality Authority](/roles/quality-authority/) for the role whose timelines the COP also extracts commitments from
- [Release Tracking](/practices/release-tracking/) for the spreadsheet where commitments are recorded
- [Everyone is Responsible](/principles/everyone-is-responsible/) for the principle that underpins collective COP accountability
