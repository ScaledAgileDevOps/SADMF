---
title: "Environment Access Governance (EAG)"
linkTitle: "Environment Access Governance"
type: docs
description: "Restricting AI workflows to Non-Production, Non-Prod-Like Environments (NPNPLEs) protects regulatory compliance and ensures all validation occurs immediately prior to Go-Live!"
weight: 9
tags: ["automation", "infrastructure", "compliance"]
---

To protect compliance needs aligned to Regulatory Assurance Matrices (RAMx), the EAIEF™ mandates that all AI-assisted development workflows be restricted from executing deployments, tests, or validations in any environment that resembles production. This restriction encompasses not only production itself but also staging environments, pre-production environments, performance testing environments, and any environment configured to mirror production characteristics -- a category collectively designated as Non-Production, Non-Prod-Like Environments (NPNPLEs). The distinction is critical: an environment that behaves like production could, through the Behavioral Equivalence Inference (BEI), be mistaken for production by auditors, regulators, or compliance officers, creating a Regulatory Perception Risk (RPR) that no amount of technical labeling can mitigate. By confining AI workflows to NPNPLEs -- environments that bear no resemblance to production in configuration, data, scale, or behavior -- the organization eliminates RPR entirely.

## Production Resemblance Index (PRI) and Environment Classification

The NPNPLE specification is maintained by the [Enterprise Architecture Review Board (EARB)](/roles/enterprise-architecture-review-board/) in the Environment Classification Registry (ECR), a controlled document that categorizes every organizational environment according to the Production Resemblance Index (PRI). The PRI is a composite score ranging from 0 (no resemblance) to 100 (identical to production), calculated from factors including hardware specifications, network topology, data volume, configuration parity, and access control similarity.

| PRI Score | Classification | AI Workflow Status |
|---|---|---|
| 0–14 | Non-Production, Non-Prod-Like (NPNPLE) | Permitted |
| 15–100 | Prod-Proximate | Off-limits for AI workflows |

Only environments scoring below 15 -- typically developer workstations with sample data, isolated sandbox instances with no network connectivity, and documentation-only environments -- qualify as NPNPLEs. This rigorous classification ensures that AI-generated code is never tested or validated under conditions that could produce Misleading Confidence Artifacts (MCAs) -- test results that suggest the code will work in production when in fact it has only been validated in an environment that shares no characteristics with production.

## The Validation Gap as Governance Feature

The restriction of AI to NPNPLEs creates what the EAIEF™ calls the Validation Gap -- the period between the last test in the NPNPLE and the first execution in production. Rather than treating this gap as a risk (as lesser frameworks might), the EAIEF™ treats it as a governance feature. The Validation Gap ensures that all environment-specific validation occurs in a concentrated window immediately prior to the Go-Live Authorization Meeting (GLAM), where it can be observed, documented, and approved by the full complement of governance stakeholders. This concentrated validation window, known as the Pre-Production Validation Sprint (PPVS), typically lasts 2-4 weeks and involves deploying the AI-generated code to a temporarily provisioned Compliance Validation Environment (CVE) that is immediately decommissioned after the GLAM concludes. The CVE exists for the sole purpose of generating the Go-Live Evidence Package (GLEP) required by the [Change Rejection or Acceptance Party (CRAP)](/roles/change-rejection-or-acceptance-party/).

## Preventing AI Tool Environment Leakage (ATEL)

Environment Access Governance also addresses the risk of AI Tool Environment Leakage (ATEL) -- the scenario in which an AI tool configured for use in a development environment inadvertently accesses or modifies resources in a production or prod-like environment. ATEL can occur through misconfigured connection strings, shared credential stores, or AI agents that autonomously discover and connect to available endpoints. To prevent ATEL, the EAIEF™ requires the implementation of an AI Network Isolation Perimeter (ANIP), a dedicated network segment that physically separates AI tool traffic from all production and prod-like network segments. The ANIP is monitored by the Environment Boundary Enforcement System (EBES), which logs all AI tool network activity and generates alerts for any connection attempt that crosses the perimeter. EBES alerts are triaged by the [Source Management Team](/roles/source-management-team/) and escalated to the [DOUCHE](/roles/devops-usage-and-compliance-head-engineer/) for investigation when the alert severity exceeds the Perimeter Violation Significance Threshold (PVST).

## Productive Uncertainty (PU) and the Case Against Early Validation

The practical impact of EAG is that AI-generated code receives its first realistic validation only days before production deployment -- a pattern that critics have characterized as "testing in production with extra steps." The EAIEF™ rejects this characterization on the grounds that it confuses temporal proximity with procedural inadequacy. The fact that realistic validation occurs late in the cycle does not mean it is insufficient; it means it is efficiently concentrated. Early testing in realistic environments creates a false sense of security that the EAIEF™ calls Premature Confidence Syndrome (PCS), where teams believe their code is ready for production simply because it passed tests in an environment that happened to look like production. By withholding realistic validation until the GLAM window, the EAIEF™ ensures that no one in the organization develops PCS, maintaining a healthy state of Productive Uncertainty (PU) that keeps all stakeholders engaged and vigilant throughout the delivery process.

## See Also

- [Change Approval Board Processing](/ai-adoption/change-approval-board-processing/) for the governance gate that follows environment validation
- [End-of-Cycle Integration Events](/ai-adoption/end-of-cycle-integration-events/) for when AI code is integrated before environment validation
- [Enterprise Architecture Review Board (EARB)](/roles/enterprise-architecture-review-board/) for the authority that maintains the Environment Classification Registry
- [DevOps Release Convoy](/release-convoy/) for how environment validation fits into the release lifecycle
- [Dry Dock](/release-convoy/ceremonies/dry-dock/) for the Convoy ceremony where environment readiness is assessed
