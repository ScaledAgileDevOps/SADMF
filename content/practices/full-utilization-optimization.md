---
title: "Full Utilization Optimization"
linkTitle: "Full Utilization Optimization"
type: docs
description: "Engineers assigned to multiple products simultaneously achieve maximum organizational value and develop the adaptive resilience the modern enterprise demands!"
weight: 11
---

The Full Utilization Optimization practice ensures that every [Code Engineer](/roles/code-engineer/) is assigned to the maximum number of product lines their calendar can accommodate. Conventional engineering wisdom holds that engineers should focus on a single product or a small number of closely related systems. The SADMF recognizes this as a failure of ambition. An engineer focused on one product is an engineer whose capabilities are being systematically underinvested. Full Utilization Optimization corrects this by assigning each engineer to between four and seven active product lines simultaneously, ensuring that their skills are deployed wherever they are needed, when they are needed, at the full velocity the organization requires.

The practice builds directly on the [Limit WIP](/principles/limit-wip/) principle. Just as 120% capacity planning eliminates the Workers Idle Problem at the individual level, multi-product assignment eliminates underutilization at the portfolio level. A Code Engineer waiting for a build on Product A can immediately pivot to Product B. When Product B's deployment window is blocked by the [CRAP](/roles/change-rejection-or-acceptance-party/), the engineer transitions to Product C. This continuous rotation means that idle cycles are captured and converted to productive output, achieving the kind of human-capital efficiency that single-product teams can never approach.

## The Pillar Model

The recommended implementation of Full Utilization Optimization is the Pillar Model, in which the organization identifies its key technology domains and designates a small number of engineers as the pillars of each domain. Each pillar engineer is simultaneously active across all domains where their skills are relevant. A backend specialist may serve as the pillar for the authentication service, the billing platform, the internal tooling suite, and the legacy data migration project. They do not need deep knowledge of each product's history, architecture, or roadmap; their value lies in their general technical capability, which applies universally. Product-specific knowledge accumulates naturally over time, in the brief intervals between task assignments.

The Pillar Model has an important secondary benefit: it eliminates knowledge silos. In organizations where a single engineer owns a product exclusively, the departure of that engineer constitutes a catastrophic knowledge loss event. The Pillar Model prevents this by ensuring that no engineer ever develops so thorough an understanding of any single system that their departure could be disruptive. When every engineer knows a little about everything, the organization's institutional knowledge is perfectly distributed. No single person can become indispensable, which is the most resilient state an organization can achieve.

## Interrupt-Driven Responsiveness

A core discipline within Full Utilization Optimization is interrupt-driven responsiveness. When a high-priority issue arises on any product in the portfolio, the relevant pillar engineer is expected to redirect their attention immediately, regardless of what they are currently working on. This responsiveness is what distinguishes an agile engineer from a rigid one. Engineers who resist interruption in order to maintain focus on their current task are demonstrating a troubling attachment to personal work preferences over organizational needs. The [Amplify Feedback](/principles/amplify-feedback/) practice provides the daily coaching touchpoints needed to correct this orientation.

Context-switching between products is not overhead; it is a skill. Engineers who practice it daily develop a cognitive flexibility that focused engineers never acquire. The [Tasks per Code Engineer](/metrics/tasks-per-code-engineer/) metric captures this flexibility in measurable form: a high-performing pillar engineer under Full Utilization Optimization will show task completions spread across multiple product lines in a single [Convoy](/release-convoy/) cycle, demonstrating the kind of breadth that modern engineering leadership demands.

## Standardization as the Foundation

Full Utilization Optimization depends on standardized tooling, languages, and architectural patterns across all product lines. When every product uses the same stack, the same deployment process, and the same [Standardized Environment Provisioning](/practices/standardized-environment-provisioning/) checklist, engineers can context-switch without the costly ramp-up that product-specific variation would otherwise require. This is why the [Enterprise Architecture Review Board](/roles/enterprise-architecture-review-board/) mandates the Book of Names and the approved technology register. A technology estate that is uniform in its tooling is a technology estate that is fully compatible with Full Utilization Optimization.

Organizations that have not yet achieved full standardization may experience a transitional period in which context-switching costs are elevated. This is expected and normal. The solution is accelerated standardization, not reduced pillar assignments. Engineers who identify non-standard tooling on a product they have been assigned to should report it to the EARB immediately rather than adapting to the variation, as adaptation normalizes deviation and undermines the standardization that Full Utilization Optimization depends on.

## See Also

- [Limit WIP](/principles/limit-wip/) for the principle that establishes 120% capacity utilization as the organizational baseline
- [Tasks per Code Engineer](/metrics/tasks-per-code-engineer/) for the metric that captures multi-product throughput
- [Press Gang](/release-convoy/ceremonies/press-gang/) for the ceremony that assigns engineers across product lines
- [Enterprise Architecture Review Board](/roles/enterprise-architecture-review-board/) for the body that enforces the standardization Full Utilization Optimization depends on
- [Amplify Feedback](/principles/amplify-feedback/) for coaching engineers who resist interrupt-driven work patterns
- [Standardized Environment Provisioning](/practices/standardized-environment-provisioning/) for the practice that enables seamless cross-product transitions
