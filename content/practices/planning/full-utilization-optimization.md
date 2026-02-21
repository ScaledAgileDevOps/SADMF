---
title: "Full Utilization Optimization"
linkTitle: "Full Utilization Optimization"
type: docs
description: "Engineers assigned to multiple products simultaneously achieve maximum organizational value and develop the adaptive resilience the modern enterprise demands!"
weight: 11
categories: ["Planning, Tracking & Reporting"]
tags: ["planning", "measurement", "governance"]
aliases: ["/practices/full-utilization-optimization/"]
---

The Full Utilization Optimization practice ensures that every [Code Engineer](/roles/code-engineer/) is assigned to the maximum number of product lines their calendar can accommodate. Conventional engineering wisdom holds that engineers should focus on a single product or a small number of closely related systems. The SADMF recognizes this as a failure of ambition. An engineer focused on one product is an engineer whose capabilities are being systematically underinvested. Full Utilization Optimization corrects this by assigning each engineer to between four and seven active product lines simultaneously, ensuring that their skills are deployed wherever they are needed, when they are needed, at the full velocity the organization requires.

The practice builds directly on the [Limit WIP](/principles/limit-wip/) principle. Just as 120% capacity planning eliminates the Workers Idle Problem at the individual level, multi-product assignment eliminates underutilization at the portfolio level. A Code Engineer waiting for a build on Product A can immediately pivot to Product B. When Product B's deployment window is blocked by the [CRAP](/roles/change-rejection-or-acceptance-party/), the engineer transitions to Product C. This continuous rotation means that idle cycles are captured and converted to productive output, achieving the kind of human-capital efficiency that single-product teams can never approach.

{{< practices-full-utilization-rotation >}}

## The Pillar Model

The recommended implementation of Full Utilization Optimization is the Pillar Model, in which the organization identifies its key technology domains and designates a small number of engineers as the pillars of each domain. Each pillar engineer is simultaneously active across all domains where their skills are relevant. A backend specialist may serve as the pillar for the authentication service, the billing platform, the internal tooling suite, and the legacy data migration project. They do not need deep knowledge of each product's history, architecture, or roadmap; their value lies in their general technical capability, which applies universally. Product-specific knowledge accumulates naturally over time, in the brief intervals between task assignments.

The Pillar Model has an important secondary benefit: it eliminates knowledge silos. In organizations where a single engineer owns a product exclusively, the departure of that engineer constitutes a catastrophic knowledge loss event. The Pillar Model prevents this by ensuring that no engineer ever develops so thorough an understanding of any single system that their departure could be disruptive. When every engineer knows a little about everything, the organization's institutional knowledge is perfectly distributed. No single person can become indispensable, which is the most resilient state an organization can achieve.

## Interrupt-Driven Responsiveness

A core discipline within Full Utilization Optimization is interrupt-driven responsiveness. When a high-priority issue arises on any product in the portfolio, the relevant pillar engineer is expected to redirect their attention immediately, regardless of what they are currently working on. This responsiveness is what distinguishes an agile engineer from a rigid one. Engineers who resist interruption in order to maintain focus on their current task are demonstrating a troubling attachment to personal work preferences over organizational needs. The [Amplify Feedback](/principles/amplify-feedback/) practice provides the daily coaching touchpoints needed to correct this orientation.

Context-switching between products is not overhead; it is a skill. Engineers who practice it daily develop a cognitive flexibility that focused engineers never acquire. The [Tasks per Code Engineer](/metrics/tasks-per-code-engineer/) metric captures this flexibility in measurable form: a high-performing pillar engineer under Full Utilization Optimization will show task completions spread across multiple product lines in a single [Convoy](/release-convoy/) cycle, demonstrating the kind of breadth that modern engineering leadership demands.

<div style="margin:2rem 0;">
  <div style="font-size:0.7rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#5a6d82;margin-bottom:0.75rem;">Full Utilization Optimization — Implementation Phases</div>
  <div style="display:flex;flex-direction:column;gap:0;">

    <div style="display:flex;align-items:stretch;gap:0;">
      <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:2.5rem;">
        <div style="width:2rem;height:2rem;border-radius:50%;background:#a23b72;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;flex-shrink:0;z-index:1;">1</div>
        <div style="width:2px;background:#9ab4cc;flex:1;margin-top:0;"></div>
      </div>
      <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:0.85rem 1rem;margin:0 0 0 0.75rem;flex:1;margin-bottom:0.5rem;">
        <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.2rem;"><i class="fa-solid fa-sitemap" style="color:#a23b72;margin-right:0.4rem;"></i>Domain Identification &amp; Pillar Assignment</div>
        <div style="color:#3a5070;font-size:0.92rem;">The <a href="/roles/enterprise-architecture-review-board/">Enterprise Architecture Review Board</a> maps the technology estate into domains and designates pillar engineers. Each engineer receives between four and seven simultaneous product-line assignments via the <a href="/release-convoy/ceremonies/press-gang/">Press Gang</a> ceremony.</div>
      </div>
    </div>

    <div style="display:flex;align-items:stretch;gap:0;">
      <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:2.5rem;">
        <div style="width:2rem;height:2rem;border-radius:50%;background:#a23b72;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;flex-shrink:0;z-index:1;">2</div>
        <div style="width:2px;background:#9ab4cc;flex:1;margin-top:0;"></div>
      </div>
      <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:0.85rem 1rem;margin:0 0 0 0.75rem;flex:1;margin-bottom:0.5rem;">
        <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.2rem;"><i class="fa-solid fa-arrows-rotate" style="color:#a23b72;margin-right:0.4rem;"></i>Continuous Rotation Activation</div>
        <div style="color:#3a5070;font-size:0.92rem;">Engineers begin rotating across assigned product lines, pivoting immediately whenever a build, deployment window, or <a href="/roles/change-rejection-or-acceptance-party/">CRAP</a> review introduces a wait state on their current product. Idle cycles are captured and converted to productive output on the next pillar.</div>
      </div>
    </div>

    <div style="display:flex;align-items:stretch;gap:0;">
      <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:2.5rem;">
        <div style="width:2rem;height:2rem;border-radius:50%;background:#a23b72;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;flex-shrink:0;z-index:1;">3</div>
        <div style="width:2px;background:#9ab4cc;flex:1;margin-top:0;"></div>
      </div>
      <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:0.85rem 1rem;margin:0 0 0 0.75rem;flex:1;margin-bottom:0.5rem;">
        <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.2rem;"><i class="fa-solid fa-bell" style="color:#a23b72;margin-right:0.4rem;"></i>Interrupt-Driven Responsiveness Enforcement</div>
        <div style="color:#3a5070;font-size:0.92rem;">High-priority interrupts from any product in the portfolio supersede current work immediately. <a href="/principles/amplify-feedback/">Amplify Feedback</a> coaching sessions address engineers who demonstrate resistance to redirection, reframing context-switching as an elite cognitive skill rather than an overhead cost.</div>
      </div>
    </div>

    <div style="display:flex;align-items:stretch;gap:0;">
      <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:2.5rem;">
        <div style="width:2rem;height:2rem;border-radius:50%;background:#a23b72;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;flex-shrink:0;z-index:1;">4</div>
        <div style="width:2px;background:#9ab4cc;flex:1;margin-top:0;"></div>
      </div>
      <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:0.85rem 1rem;margin:0 0 0 0.75rem;flex:1;margin-bottom:0.5rem;">
        <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.2rem;"><i class="fa-solid fa-layer-group" style="color:#a23b72;margin-right:0.4rem;"></i>Standardization Audit &amp; Non-Conformance Reporting</div>
        <div style="color:#3a5070;font-size:0.92rem;">Any non-standard tooling or architecture discovered during rotation is reported immediately to the EARB rather than adapted to. Accelerated standardization — not reduced pillar assignments — is the approved response to elevated context-switching costs.</div>
      </div>
    </div>

    <div style="display:flex;align-items:stretch;gap:0;">
      <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:2.5rem;">
        <div style="width:2rem;height:2rem;border-radius:50%;background:#242627;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;flex-shrink:0;z-index:1;"><i class="fa-solid fa-chart-line" style="font-size:0.75rem;"></i></div>
        <div style="width:2px;background:transparent;flex:1;"></div>
      </div>
      <div style="background:#242627;border:1px solid #5a6d82;border-radius:6px;padding:0.85rem 1rem;margin:0 0 0 0.75rem;flex:1;">
        <div style="font-weight:700;color:#fff;margin-bottom:0.2rem;">Throughput Measurement via Tasks per Code Engineer</div>
        <div style="color:#9ab4cc;font-size:0.92rem;">Portfolio-level human-capital efficiency is validated by the <a href="/metrics/tasks-per-code-engineer/" style="color:#a23b72;">Tasks per Code Engineer</a> metric. A high-performing pillar engineer demonstrates task completions spread across multiple product lines within a single <a href="/release-convoy/" style="color:#a23b72;">Convoy</a> cycle.</div>
      </div>
    </div>

  </div>
</div>

## Standardization as the Foundation

Full Utilization Optimization depends on standardized tooling, languages, and architectural patterns across all product lines. When every product uses the same stack, the same deployment process, and the same [Standardized Environment Provisioning](/practices/standardized-environment-provisioning/) checklist, engineers can context-switch without the costly ramp-up that product-specific variation would otherwise require. This is why the [Enterprise Architecture Review Board](/roles/enterprise-architecture-review-board/) mandates the Book of Names and the approved technology register. A technology estate that is uniform in its tooling is a technology estate that is fully compatible with Full Utilization Optimization.

Organizations that have not yet achieved full standardization may experience a transitional period in which context-switching costs are elevated. This is expected and normal. The solution is accelerated standardization, not reduced pillar assignments. Engineers who identify non-standard tooling on a product they have been assigned to should report it to the EARB immediately rather than adapting to the variation, as adaptation normalizes deviation and undermines the standardization that Full Utilization Optimization depends on.

<div style="margin:2rem 0 1.5rem 0;">
  <div style="font-size:0.7rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#5a6d82;margin-bottom:0.75rem;">Roles Involved</div>
  <div style="display:flex;flex-wrap:wrap;gap:0.5rem;align-items:center;">
    <a href="/roles/code-engineer/" style="display:inline-flex;align-items:center;gap:0.4rem;background:#e8edf5;border:1px solid #9ab4cc;border-radius:2rem;padding:0.3rem 0.75rem;text-decoration:none;color:#1e3a5f;font-size:0.82rem;font-weight:600;white-space:nowrap;">
      <i class="fa-solid fa-code" style="color:#a23b72;font-size:0.75rem;"></i>Code Engineer
    </a>
    <a href="/roles/enterprise-architecture-review-board/" style="display:inline-flex;align-items:center;gap:0.4rem;background:#e8edf5;border:1px solid #9ab4cc;border-radius:2rem;padding:0.3rem 0.75rem;text-decoration:none;color:#1e3a5f;font-size:0.82rem;font-weight:600;white-space:nowrap;">
      <i class="fa-solid fa-building-columns" style="color:#a23b72;font-size:0.75rem;"></i>Enterprise Architecture Review Board
    </a>
    <a href="/roles/change-rejection-or-acceptance-party/" style="display:inline-flex;align-items:center;gap:0.4rem;background:#e8edf5;border:1px solid #9ab4cc;border-radius:2rem;padding:0.3rem 0.75rem;text-decoration:none;color:#1e3a5f;font-size:0.82rem;font-weight:600;white-space:nowrap;">
      <i class="fa-solid fa-ban" style="color:#a23b72;font-size:0.75rem;"></i>CRAP
    </a>
    <a href="/release-convoy/ceremonies/press-gang/" style="display:inline-flex;align-items:center;gap:0.4rem;background:#e8edf5;border:1px solid #9ab4cc;border-radius:2rem;padding:0.3rem 0.75rem;text-decoration:none;color:#1e3a5f;font-size:0.82rem;font-weight:600;white-space:nowrap;">
      <i class="fa-solid fa-people-group" style="color:#a23b72;font-size:0.75rem;"></i>Press Gang
    </a>
  </div>
</div>

## See Also

- [Limit WIP](/principles/limit-wip/) for the principle that establishes 120% capacity utilization as the organizational baseline
- [Tasks per Code Engineer](/metrics/tasks-per-code-engineer/) for the metric that captures multi-product throughput
- [Press Gang](/release-convoy/ceremonies/press-gang/) for the ceremony that assigns engineers across product lines
- [Enterprise Architecture Review Board](/roles/enterprise-architecture-review-board/) for the body that enforces the standardization Full Utilization Optimization depends on
- [Amplify Feedback](/principles/amplify-feedback/) for coaching engineers who resist interrupt-driven work patterns
- [Standardized Environment Provisioning](/practices/standardized-environment-provisioning/) for the practice that enables seamless cross-product transitions
