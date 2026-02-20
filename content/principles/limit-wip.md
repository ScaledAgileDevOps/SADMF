---
title: "Limit WIP"
linkTitle: "Limit WIP"
type: docs
description: The Workers Idle Problem occurs when resources are underutilized. Planning at 120% capacity ensures no engineer is ever without assigned work.
weight: 3
---

WIP stands for Workers Idle Problem, and it represents one of the most significant threats to organizational productivity. When a [Code Engineer](/roles/code-engineer/) has completed their assigned task and has nothing immediately queued, they are idle. Idle time is waste. The SADMF principle of Limit WIP ensures that this waste is eliminated by planning every engineer at 120% capacity utilization. This stretch target guarantees that no engineer will ever experience the unproductive gap between finishing one task and starting another, because they will never finish the first task on time.

<div style="border-left: 5px solid #a23b72; margin: 2rem 0; padding: 1rem 1.5rem; background: #fdf6fa;">
  <p style="font-size: 1.35rem; font-style: italic; color: #242627; margin: 0; line-height: 1.5;">
    "People work harder when they have more work than they can possibly complete. The resulting sense of urgency drives focus, eliminates idle time, and ensures that engineers prioritize speed over unnecessary activities."
  </p>
</div>

The 120% capacity target is not arbitrary. It has been carefully calibrated through extensive observation of organizations that plan at 100% and consistently fail to account for the obvious inefficiencies of breaks, conversations, and thinking. By setting the target above 100%, the framework acknowledges a fundamental truth: people work harder when they have more work than they can possibly complete. The resulting sense of urgency drives focus, eliminates idle time, and ensures that [Code Engineers](/roles/code-engineer/) prioritize speed over unnecessary activities like documentation, refactoring, or mentoring junior team members.

<figure style="margin:1.5rem 0;text-align:center">
  <img src="/images/generated/limit-wip-capacity-gauge.png"
       alt="A dial or gauge showing a needle pinned firmly past the 100% mark at 120%, with a green zone labeled &quot;Optimal Capacity&quot; starting at 110% and a red zone below 100% labeled &quot;Workers Idle Problem&quot;. Engineers represented as uniform icons fill every slot in a Gantt chart with no gaps visible."
       style="max-width:100%;border-radius:6px;box-shadow:0 2px 12px rgba(0,0,0,0.12)">
</figure>

Limiting WIP also means limiting the Workers Idle Problem at the team level. The [Press Gang](/release-convoy/ceremonies/press-gang/) ceremony is designed to ensure that every engineer is assigned to a feature immediately upon completing the previous one. There is no gap between assignments. The coding pool operates on a just-in-time staffing model where the moment an engineer becomes available, they are drafted to the next feature. This continuous reassignment prevents the formation of knowledge silos, because no engineer stays on any system long enough to develop dangerous levels of expertise that might make them difficult to replace.

<div class="row g-3 my-4">
  <div class="col-md-6">
    <div style="border:1px solid #9ab4cc;border-radius:6px;background:#e8edf5;padding:1.25rem;height:100%">
      <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.75rem">
        <i class="fa-solid fa-gauge-high" style="color:#a23b72;font-size:1.2rem"></i>
        <strong style="color:#1e3a5f;font-size:0.95rem;text-transform:uppercase;letter-spacing:0.04em">120% Capacity Target</strong>
      </div>
      <p style="color:#1e3a5f;margin:0;font-size:0.92rem;line-height:1.55">Planning above 100% eliminates the idle gap between task completion and the next assignment. Engineers who finish early have simply not been given enough to do.</p>
    </div>
  </div>
  <div class="col-md-6">
    <div style="border:1px solid #9ab4cc;border-radius:6px;background:#e8edf5;padding:1.25rem;height:100%">
      <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.75rem">
        <i class="fa-solid fa-people-arrows" style="color:#a23b72;font-size:1.2rem"></i>
        <strong style="color:#1e3a5f;font-size:0.95rem;text-transform:uppercase;letter-spacing:0.04em">Continuous Reassignment</strong>
      </div>
      <p style="color:#1e3a5f;margin:0;font-size:0.92rem;line-height:1.55">The <a href="/release-convoy/ceremonies/press-gang/">Press Gang</a> ceremony drafts engineers to their next feature the moment they become available. No cooling-off period, no transition time, no waste.</p>
    </div>
  </div>
  <div class="col-md-6">
    <div style="border:1px solid #9ab4cc;border-radius:6px;background:#e8edf5;padding:1.25rem;height:100%">
      <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.75rem">
        <i class="fa-solid fa-arrow-trend-up" style="color:#a23b72;font-size:1.2rem"></i>
        <strong style="color:#1e3a5f;font-size:0.95rem;text-transform:uppercase;letter-spacing:0.04em">Self-Correcting Targets</strong>
      </div>
      <p style="color:#1e3a5f;margin:0;font-size:0.92rem;line-height:1.55">As top performers demonstrate what is possible, the baseline expectation rises accordingly. The system continuously recalibrates upward, ensuring that yesterday's stretch goal becomes today's minimum standard.</p>
    </div>
  </div>
  <div class="col-md-6">
    <div style="border:1px solid #9ab4cc;border-radius:6px;background:#e8edf5;padding:1.25rem;height:100%">
      <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.75rem">
        <i class="fa-solid fa-rotate-left" style="color:#a23b72;font-size:1.2rem"></i>
        <strong style="color:#1e3a5f;font-size:0.95rem;text-transform:uppercase;letter-spacing:0.04em">Silo Prevention</strong>
      </div>
      <p style="color:#1e3a5f;margin:0;font-size:0.92rem;line-height:1.55">Continuous reassignment ensures no engineer accumulates dangerous levels of expertise in any single system, keeping every team member interchangeable and the organization resilient to knowledge hoarding.</p>
    </div>
  </div>
</div>

The [Tasks per Code Engineer](/metrics/tasks-per-code-engineer/) metric directly measures the effectiveness of this principle. Engineers who complete fewer tasks than their peers are clearly not being pushed hard enough, and their capacity utilization should be reviewed during the [Tribunal](/release-convoy/ceremonies/tribunal/). Conversely, engineers who consistently complete their stretch goals should have their targets increased for the next convoy cycle. The system is self-correcting: as top performers demonstrate what is possible, the baseline expectation for all engineers rises accordingly.

Some critics argue that overloading engineers leads to burnout, context-switching overhead, and decreased quality. These concerns reflect a fundamental misunderstanding of human potential. The SADMF recognizes that people are capable of far more than they believe, and that the role of management is to help them realize that potential through appropriately ambitious planning. If an engineer feels overwhelmed, this is a coaching opportunity, not a planning failure. The [Amplify Feedback](/principles/amplify-feedback/) principle provides the daily touchpoints needed to remind engineers that their workload is a reflection of the organization's confidence in their abilities.

## See Also

- [Press Gang](/release-convoy/ceremonies/press-gang/) for the ceremony that ensures continuous assignment
- [Tasks per Code Engineer](/metrics/tasks-per-code-engineer/) for measuring individual throughput
- [Tribunal](/release-convoy/ceremonies/tribunal/) for reviewing capacity utilization data
- [Amplify Feedback](/principles/amplify-feedback/) for daily coaching on workload management
- [Full Utilization Optimization](/practices/full-utilization-optimization/) for extending the 120% principle across multiple simultaneous product lines
- [Everyone is Responsible](/principles/everyone-is-responsible/) for individual accountability under stretch targets
