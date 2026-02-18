---
title: "Limit WIP"
linkTitle: "Limit WIP"
type: docs
description: Workers Idle Problem is when workers are idle, that's a problem. We ensure everyone is planned at 120% capacity to eliminate waste.
weight: 3
---

WIP stands for Workers Idle Problem, and it represents one of the most significant threats to organizational productivity. When a [Code Engineer](/roles/code-engineer/) has completed their assigned task and has nothing immediately queued, they are idle. Idle time is waste. The SADMF principle of Limit WIP ensures that this waste is eliminated by planning every engineer at 120% capacity utilization. This stretch target guarantees that no engineer will ever experience the unproductive gap between finishing one task and starting another, because they will never finish the first task on time.

The 120% capacity target is not arbitrary. It has been carefully calibrated through extensive observation of organizations that plan at 100% and consistently fail to account for the obvious inefficiencies of breaks, conversations, and thinking. By setting the target above 100%, the framework acknowledges a fundamental truth: people work harder when they have more work than they can possibly complete. The resulting sense of urgency drives focus, eliminates idle time, and ensures that [Code Engineers](/roles/code-engineer/) prioritize speed over unnecessary activities like documentation, refactoring, or mentoring junior team members.

Limiting WIP also means limiting the Workers Idle Problem at the team level. The [Press Gang](/release-convoy/ceremonies/press-gang/) ceremony is designed to ensure that every engineer is assigned to a feature immediately upon completing the previous one. There is no gap between assignments. The coding pool operates on a just-in-time staffing model where the moment an engineer becomes available, they are drafted to the next feature. This continuous reassignment prevents the formation of knowledge silos, because no engineer stays on any system long enough to develop dangerous levels of expertise that might make them difficult to replace.

The [Tasks per Code Engineer](/metrics/tasks-per-code-engineer/) metric directly measures the effectiveness of this principle. Engineers who complete fewer tasks than their peers are clearly not being pushed hard enough, and their capacity utilization should be reviewed during the [Tribunal](/release-convoy/ceremonies/tribunal/). Conversely, engineers who consistently complete their stretch goals should have their targets increased for the next convoy cycle. The system is self-correcting: as top performers demonstrate what is possible, the baseline expectation for all engineers rises accordingly.

Some critics argue that overloading engineers leads to burnout, context-switching overhead, and decreased quality. These concerns reflect a fundamental misunderstanding of human potential. The SADMF recognizes that people are capable of far more than they believe, and that the role of management is to help them realize that potential through appropriately ambitious planning. If an engineer feels overwhelmed, this is a coaching opportunity, not a planning failure. The [Amplify Feedback](/principles/amplify-feedback/) principle provides the daily touchpoints needed to remind engineers that their workload is a reflection of the organization's confidence in their abilities.

## See Also

- [Press Gang](/release-convoy/ceremonies/press-gang/) for the ceremony that ensures continuous assignment
- [Tasks per Code Engineer](/metrics/tasks-per-code-engineer/) for measuring individual throughput
- [Tribunal](/release-convoy/ceremonies/tribunal/) for reviewing capacity utilization data
- [Amplify Feedback](/principles/amplify-feedback/) for daily coaching on workload management
- [Everyone is Responsible](/principles/everyone-is-responsible/) for individual accountability under stretch targets
