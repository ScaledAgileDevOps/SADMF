---
title: "Everyone is Responsible"
linkTitle: "Everyone is Responsible"
type: docs
description: Each individual is responsible for their own work and should be rewarded or held accountable for the outcomes they produce.
weight: 5
---

The principle of Everyone is Responsible establishes a foundational truth that many organizations struggle to accept: outcomes are produced by individuals, not teams. When a feature is successfully delivered, it is because specific [Code Engineers](/roles/code-engineer/) wrote the code correctly. When a defect escapes to production, it is because a specific Code Engineer introduced it. The SADMF rejects the fashionable notion of collective ownership, which serves primarily to diffuse accountability until no one can be held responsible for anything. In a mature organization, every line of code has an author, and every author has a performance record.

<figure style="margin:1.5rem 0;text-align:center">
  <img src="/images/generated/everyone-responsible-scoreboard-office.png"
       alt="An office floor plan viewed from above showing engineers seated at individual isolated workstations, each surrounded by a glowing personal scoreboard displaying their Lines of Code, Task Count, and Defect tally — no desks touching, no eye contact, each engineer an island of measurable output"
       style="max-width:100%;border-radius:6px;box-shadow:0 2px 12px rgba(0,0,0,0.12)">
</figure>

This principle is operationalized through the framework's comprehensive metrics system. [Lines of Code per Code Engineer](/metrics/lines-of-code-per-code-engineer/), [Tasks per Code Engineer](/metrics/tasks-per-code-engineer/), and [Defects per Code Engineer](/metrics/defects-per-code-engineer/) provide three independent lenses on individual performance. When these metrics are correlated during the [Tribunal](/release-convoy/ceremonies/tribunal/), a clear picture emerges of each engineer's contribution to the convoy. High performers -- those with high lines of code, high task completion, and low defect counts -- are identified and rewarded. Low performers are identified and given opportunities to improve through [PeopleWare HRaaS](/peopleware/) interventions.

<blockquote style="
  border-left: 5px solid #a23b72;
  margin: 2rem 0;
  padding: 1.25rem 1.75rem;
  background: #fdf6f9;
  border-radius: 0 6px 6px 0;
">
  <p style="
    font-size: 1.35rem;
    font-style: italic;
    color: #242627;
    line-height: 1.6;
    margin: 0 0 0.5rem 0;
  ">"In a mature organization, every line of code has an author, and every author has a performance record."</p>
  <footer style="color: #a23b72; font-size: 0.9rem; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase;">SADMF Core Principle</footer>
</blockquote>

Rewarding individuals rather than teams is essential to maintaining motivation. If a feature is successfully delivered and the entire team receives equal recognition, the top contributors are penalized and the underperformers are rewarded. This creates a perverse incentive where the rational strategy is to contribute as little as possible while relying on stronger team members to carry the work. The SADMF prevents this by ensuring that individual contributions are tracked with precision. The [Release Tracking](/practices/release-tracking/) spreadsheet documents exactly who made which changes in each release, providing an auditable record of individual contribution.

Some organizations advocate for practices like pair programming or mob programming, where multiple engineers collaborate on a single task. The SADMF discourages these approaches because they make it impossible to attribute outcomes to individuals. If two engineers pair on a feature and it succeeds, who receives the credit? If it fails, who is accountable? The ambiguity is unacceptable. Each Code Engineer should work independently on their assigned tasks so that the relationship between individual effort and individual outcome remains clear. The [Coding](/release-convoy/ceremonies/coding/) ceremony enforces this by assigning specific tasks to specific engineers with specific deadlines.

<div class="row g-3" style="margin: 2rem 0;">
  <div class="col-md-6">
    <div style="
      background: #e8edf5;
      border: 1px solid #9ab4cc;
      border-radius: 6px;
      padding: 1.25rem 1.5rem;
      height: 100%;
    ">
      <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.75rem;">
        <i class="fa-solid fa-chart-line" style="color:#a23b72;font-size:1.1rem;"></i>
        <strong style="color:#1e3a5f;font-size:1rem;letter-spacing:0.02em;">Metrics Drive Accountability</strong>
      </div>
      <p style="color:#1e3a5f;margin:0;font-size:0.95rem;line-height:1.6;">Individual performance metrics — Lines of Code, Tasks, and Defects — provide an objective, auditable record that removes subjective bias from performance reviews and ensures each engineer's output stands on its own measurable merits.</p>
    </div>
  </div>
  <div class="col-md-6">
    <div style="
      background: #e8edf5;
      border: 1px solid #9ab4cc;
      border-radius: 6px;
      padding: 1.25rem 1.5rem;
      height: 100%;
    ">
      <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.75rem;">
        <i class="fa-solid fa-user-shield" style="color:#a23b72;font-size:1.1rem;"></i>
        <strong style="color:#1e3a5f;font-size:1rem;letter-spacing:0.02em;">Collaboration Obscures Ownership</strong>
      </div>
      <p style="color:#1e3a5f;margin:0;font-size:0.95rem;line-height:1.6;">Pair programming, mob programming, and collective code ownership destroy the clear line between individual effort and individual outcome. The SADMF requires independent task assignment so that credit and blame can always be attributed to a named engineer.</p>
    </div>
  </div>
  <div class="col-md-6">
    <div style="
      background: #e8edf5;
      border: 1px solid #9ab4cc;
      border-radius: 6px;
      padding: 1.25rem 1.5rem;
      height: 100%;
    ">
      <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.75rem;">
        <i class="fa-solid fa-trophy" style="color:#a23b72;font-size:1.1rem;"></i>
        <strong style="color:#1e3a5f;font-size:1rem;letter-spacing:0.02em;">Reward Signals Must Be Precise</strong>
      </div>
      <p style="color:#1e3a5f;margin:0;font-size:0.95rem;line-height:1.6;">Team-level recognition dilutes the incentive signal. High performers subsidize low performers when rewards are shared equally, inverting the rational incentive structure. Individual recognition preserves the motivational integrity of the performance system.</p>
    </div>
  </div>
  <div class="col-md-6">
    <div style="
      background: #e8edf5;
      border: 1px solid #9ab4cc;
      border-radius: 6px;
      padding: 1.25rem 1.5rem;
      height: 100%;
    ">
      <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.75rem;">
        <i class="fa-solid fa-sitemap" style="color:#a23b72;font-size:1.1rem;"></i>
        <strong style="color:#1e3a5f;font-size:1rem;letter-spacing:0.02em;">Accountability Spans All Roles</strong>
      </div>
      <p style="color:#1e3a5f;margin:0;font-size:0.95rem;line-height:1.6;">Responsibility does not stop at engineering. Feature Captains, the Quality Authority, and the Source Management Team each carry personal accountability for their domain outcomes, ensuring that when an incident occurs, a specific named individual is available to explain and answer for it.</p>
    </div>
  </div>
</div>

Everyone is Responsible also extends to non-engineering roles. [Feature Captains](/roles/feature-captain/) are personally accountable for their feature's delivery, regardless of the quality of the engineers assigned to them during the [Press Gang](/release-convoy/ceremonies/press-gang/). The [Quality Authority](/roles/quality-authority/) is accountable for any defects that escape testing. The [Source Management Team](/roles/source-management-team/) is accountable for merge conflicts. By making every role individually accountable, the framework ensures that when something goes wrong, there is always a specific person who can be asked to explain what happened and why.

## See Also

- [Metrics](/metrics/) for the individual performance measurements that operationalize this principle
- [Tribunal](/release-convoy/ceremonies/tribunal/) for the ceremony where individual accountability is reviewed
- [Release Tracking](/practices/release-tracking/) for documenting individual contributions
- [PeopleWare HRaaS](/peopleware/) for the system that acts on individual performance data
- [Build Quality In](/principles/build-quality-in/) for the complementary principle of removing quality risks
