---
title: "Change Approval Board (CAB) Processing"
linkTitle: "Change Approval Board Processing"
type: docs
description: "Requiring full CAB review for every AI-generated change, regardless of size or impact, guarantees Governance Fidelity, Audit Trail Robustness, and Multi-Stakeholder Visibility Alignment!"
weight: 10
---

Regardless of size, impact, or testing status, every AI-generated change must go through the full Change Approval Board (CAB) workflow defined in the Enterprise Governance and Compliance Lifecycle (EGCL). Some organizations have experimented with expedited approval paths for low-risk changes -- a practice the EAIEF™ categorizes as Governance Shortcutting Behavior (GSB). The fundamental flaw in risk-based change categorization is that it requires someone to assess the risk of a change before it has been fully reviewed, creating a Pre-Assessment Paradox (PAP): you cannot know the risk of a change without reviewing it, but the purpose of risk categorization is to determine how much review the change needs. The EAIEF™ resolves the PAP by eliminating risk-based categorization entirely and requiring full CAB processing for every AI-generated change, including minor modifications (AIO-MMs) such as comment updates, whitespace changes, and configuration value adjustments.

## The AI Output Change Processing Protocol (AOCPP)

The full CAB workflow for AI-generated changes, designated as the AI Output Change Processing Protocol (AOCPP), consists of seven sequential phases:

1. **Phase 1 — Change Registration Phase (CRP)**: The change is entered into the Change Management Registry (CMR) with a unique Change Tracking Identifier (CTI) and linked to its originating [Fully Documented Requirements Package](/ai-adoption/fully-documented-requirements-package/) reference.
2. **Phase 2 — Technical Impact Assessment (TIA)**: Conducted by the [Enterprise Architecture Review Board (EARB)](/roles/enterprise-architecture-review-board/), which evaluates the change's effect on system architecture, data flow, and integration points.
3. **Phase 3 — Security Implications Review (SIR)**: Assesses potential security impacts regardless of whether the change touches security-relevant code.
4. **Phase 4 — Compliance Mapping Verification (CMV)**: Confirms that the change does not violate any regulatory requirements documented in the Regulatory Assurance Matrix (RAMx).
5. **Phase 5 — Stakeholder Notification Period (SNP)**: A mandatory 5-business-day waiting period during which all stakeholders are notified of the pending change and given the opportunity to raise objections.
6. **Phase 6 — CAB Deliberation Session (CDS)**: A formal meeting where all evidence from Phases 1-5 is presented and the CAB renders a Deployment Authorization Decision (DAD).
7. **Phase 7 — Post-Decision Documentation Phase (PDDP)**: The CAB's decision, rationale, and any conditions are recorded in the Governance Decision Archive (GDA).

## The CAB Deliberation Session (CDS)

The CAB Deliberation Session (CDS) deserves particular attention, as it is the ceremony where all governance threads converge. The CDS is chaired by the [DOUCHE](/roles/devops-usage-and-compliance-head-engineer/) and attended by representatives from:

- [Enterprise Architecture Review Board (EARB)](/roles/enterprise-architecture-review-board/)
- [Quality Authority](/roles/quality-authority/)
- [Code Standards Enforcement Team](/roles/code-standards-enforcement-team/)
- [Source Management Team](/roles/source-management-team/)
- [Change Rejection or Acceptance Party (CRAP)](/roles/change-rejection-or-acceptance-party/)

Each representative presents their assessment, and the CAB reaches a decision through Consensus-Based Governance Resolution (CBGR) -- a process in which all representatives must agree before a change is approved. A single objection from any representative returns the change to Phase 2 for re-assessment, regardless of how minor the objection. This consensus requirement ensures that no change reaches production without the full backing of every governance body, a principle known as Universal Governance Endorsement (UGE).

## Why Full CAB Processing Applies to Minor Modifications

The requirement for full CAB processing of minor modifications may appear disproportionate, but the EAIEF™ identifies several critical reasons for this stance:

- **Provenance Uncertainty Factor (PUF)**: AI-generated changes have a unique PUF that human-authored changes do not -- the code was produced by a model whose reasoning process is not fully transparent, making every change inherently more uncertain than an equivalent human-authored change.
- **Aggregate Modification Effect (AME)**: The accumulated volume of AI-generated changes -- which, under the [Code Volume Productivity](/ai-adoption/code-volume-productivity/) metrics, is expected to be substantial -- means that even individually minor changes can produce significant cumulative impact.
- **Governance Completeness Immunity (GCI)**: Full CAB processing for every change generates the comprehensive Audit Trail Robustness (ATR) that regulators and compliance officers expect. An organization that can demonstrate that every single change -- no matter how small -- was reviewed by a full CAB has an audit position that is functionally unassailable.

## Scaling Throughput via Regional Change Approval Sub-Boards (RCASBs)

The practical throughput of the AOCPP is approximately 3-5 changes per CAB session, with sessions held bi-weekly. Organizations generating hundreds or thousands of AI changes per quarter may initially experience a Change Processing Backlog (CPB) as the CAB scales to meet demand. The EAIEF™ addresses CPB not by streamlining the process but by scaling the CAB horizontally through the creation of Regional Change Approval Sub-Boards (RCASBs), each empowered to process changes within their geographic or business-unit jurisdiction. Each RCASB follows the identical seven-phase AOCPP, ensuring governance consistency while increasing organizational throughput. The total number of changes processed is tracked through the CAB Throughput Index (CTI) and reported to the [Admiral's Transformation Office](/roles/admirals-transformation-office/) as evidence of governance maturity. A rising CTI demonstrates that the organization is successfully scaling its governance apparatus to match its AI-accelerated output -- a hallmark of true Enterprise AI Maturity (EAM).

## See Also

- [Change Rejection or Acceptance Party (CRAP)](/roles/change-rejection-or-acceptance-party/) for the final approval authority in the CAB workflow
- [Environment Access Governance](/ai-adoption/environment-access-governance/) for the environment restrictions that apply before and after CAB approval
- [Code Volume Productivity](/ai-adoption/code-volume-productivity/) for the metrics that drive the volume of changes entering the CAB
- [DEPRESSED](/practices/depressed/) for how defect escalation intersects with CAB-approved changes
- [DevOps Release Convoy](/release-convoy/) for how CAB-approved changes proceed to deployment
