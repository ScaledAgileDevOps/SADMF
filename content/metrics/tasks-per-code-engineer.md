---
title: "Tasks per Code Engineer"
linkTitle: "Tasks per Code Engineer"
type: docs
description: "Maximizing task throughput per engineer because volume is the truest measure of velocity!"
weight: 3
tags: ["measurement", "reporting"]
---

Tasks per [Code Engineer](/roles/code-engineer/) measures the number of discrete tasks each engineer completes during a single [Convoy](/release-convoy/) cycle. This metric operationalizes the fundamental SADMF insight that productivity is a function of throughput, not outcome. A Code Engineer who completes 47 tasks in a Convoy is demonstrably more productive than one who completes 12, regardless of what those tasks accomplished, how large they were, or whether anyone needed them. Volume is the metric that matters, and the metric that matters is the metric that gets managed.

<!-- STAT HERO -->
<div style="background:#242627;border-radius:8px;padding:2rem 2rem 1.5rem;margin:2rem 0;color:#fff;position:relative;overflow:hidden">
  <div style="position:absolute;top:0;right:0;width:200px;height:100%;background:linear-gradient(135deg,transparent 60%,rgba(162,59,114,0.18) 100%);pointer-events:none"></div>
  <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:1.2rem">
    <i class="fa-solid fa-list-check" style="color:#a23b72;font-size:1.1rem"></i>
    <span style="font-size:0.7rem;letter-spacing:0.18em;text-transform:uppercase;color:#9ab4cc;font-weight:600">SADMF Metric — Throughput Volume</span>
  </div>
  <div style="font-size:2rem;font-weight:800;letter-spacing:-0.02em;line-height:1.1;margin-bottom:1.5rem">Tasks per Code Engineer</div>
  <div style="background:#1a1c1d;border:1px solid #3a3d3f;border-radius:6px;padding:1rem 1.25rem;margin-bottom:1.5rem;font-family:monospace;font-size:1.05rem;color:#e8edf5;letter-spacing:0.02em">
    <span style="color:#9ab4cc;font-size:0.8rem;display:block;margin-bottom:0.4rem">FORMULA</span>
    TpCE = Count(Tasks Closed by Engineer within Convoy window)
  </div>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:1rem">
    <div style="background:#1a1c1d;border:1px solid #3a3d3f;border-radius:6px;padding:0.85rem 1rem">
      <div style="font-size:0.65rem;letter-spacing:0.14em;text-transform:uppercase;color:#9ab4cc;margin-bottom:0.35rem">Owner Role</div>
      <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.9rem;font-weight:600">
        <i class="fa-solid fa-user-tie" style="color:#a23b72;font-size:0.85rem"></i>
        DOUCHE
      </div>
    </div>
    <div style="background:#1a1c1d;border:1px solid #3a3d3f;border-radius:6px;padding:0.85rem 1rem">
      <div style="font-size:0.65rem;letter-spacing:0.14em;text-transform:uppercase;color:#9ab4cc;margin-bottom:0.35rem">Cadence</div>
      <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.9rem;font-weight:600">
        <i class="fa-solid fa-clock-rotate-left" style="color:#a23b72;font-size:0.85rem"></i>
        Weekly + Per Convoy
      </div>
    </div>
    <div style="background:#1a1c1d;border:1px solid #3a3d3f;border-radius:6px;padding:0.85rem 1rem">
      <div style="font-size:0.65rem;letter-spacing:0.14em;text-transform:uppercase;color:#9ab4cc;margin-bottom:0.35rem">Source</div>
      <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.9rem;font-weight:600">
        <i class="fa-solid fa-table" style="color:#a23b72;font-size:0.85rem"></i>
        Release Tracking Sheet
      </div>
    </div>
    <div style="background:#1a1c1d;border:1px solid #3a3d3f;border-radius:6px;padding:0.85rem 1rem">
      <div style="font-size:0.65rem;letter-spacing:0.14em;text-transform:uppercase;color:#9ab4cc;margin-bottom:0.35rem">Unit</div>
      <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.9rem;font-weight:600">
        <i class="fa-solid fa-check-double" style="color:#a23b72;font-size:0.85rem"></i>
        Tasks Closed / Convoy
      </div>
    </div>
  </div>
</div>

{{< metrics-tasks-decomposition >}}

<!-- HOW IT WORKS -->
<div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:8px;padding:1.75rem 2rem;margin:1.75rem 0">
  <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:1.4rem">
    <i class="fa-solid fa-list-ol" style="color:#1e3a5f;font-size:1rem"></i>
    <span style="font-size:0.7rem;letter-spacing:0.16em;text-transform:uppercase;color:#1e3a5f;font-weight:700">How the Count Is Calculated</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:0">
    <div style="display:flex;gap:1.25rem;align-items:flex-start">
      <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">
        <div style="width:2rem;height:2rem;border-radius:50%;background:#1e3a5f;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;flex-shrink:0">1</div>
        <div style="width:2px;height:1.5rem;background:#9ab4cc;margin-top:0.15rem"></div>
      </div>
      <div style="padding-bottom:1.25rem">
        <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.2rem">Task Registration</div>
        <div style="font-size:0.9rem;color:#2c4a6e;line-height:1.5">Every work item in the <a href="/practices/release-tracking/">Release Tracking</a> spreadsheet is registered as a discrete task. The [Feature Captain](/roles/feature-captain/) validates that each ticket represents a single, countable unit of work — ideally the smallest decomposition achievable without losing ticket identity.</div>
      </div>
    </div>
    <div style="display:flex;gap:1.25rem;align-items:flex-start">
      <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">
        <div style="width:2rem;height:2rem;border-radius:50%;background:#1e3a5f;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;flex-shrink:0">2</div>
        <div style="width:2px;height:1.5rem;background:#9ab4cc;margin-top:0.15rem"></div>
      </div>
      <div style="padding-bottom:1.25rem">
        <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.2rem">Decomposition Validation</div>
        <div style="font-size:0.9rem;color:#2c4a6e;line-height:1.5">The <a href="/roles/devops-usage-and-compliance-head-engineer/">DOUCHE</a> reviews task granularity at Convoy start. Features that could be delivered as a single task should instead be decomposed into 15 to 20 subtasks — each generating its own ticket, its own status update, and its own completion event. This is not overhead; it is visibility.</div>
      </div>
    </div>
    <div style="display:flex;gap:1.25rem;align-items:flex-start">
      <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">
        <div style="width:2rem;height:2rem;border-radius:50%;background:#1e3a5f;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;flex-shrink:0">3</div>
        <div style="width:2px;height:1.5rem;background:#9ab4cc;margin-top:0.15rem"></div>
      </div>
      <div style="padding-bottom:1.25rem">
        <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.2rem">Velocity Baseline Established</div>
        <div style="font-size:0.9rem;color:#2c4a6e;line-height:1.5">The DOUCHE calculates each engineer's personal rolling average from prior Convoys. This baseline determines the expected completion rate. A drop below baseline triggers weekly review; a sustained drop triggers Tribunal referral. All tasks count equally — difficulty is not a variable.</div>
      </div>
    </div>
    <div style="display:flex;gap:1.25rem;align-items:flex-start">
      <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">
        <div style="width:2rem;height:2rem;border-radius:50%;background:#1e3a5f;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;flex-shrink:0">4</div>
        <div style="width:2px;height:1.5rem;background:#9ab4cc;margin-top:0.15rem"></div>
      </div>
      <div style="padding-bottom:1.25rem">
        <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.2rem">Convoy Totals Compiled</div>
        <div style="font-size:0.9rem;color:#2c4a6e;line-height:1.5">At Convoy close, all completed tasks are tallied per engineer and ranked fleet-wide. The <a href="/practices/mandatory-status-synchronization/">Mandatory Status Synchronization</a> protocol ensures every task transition was reported upward through the chain of command in real time throughout the cycle.</div>
      </div>
    </div>
    <div style="display:flex;gap:1.25rem;align-items:flex-start">
      <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">
        <div style="width:2rem;height:2rem;border-radius:50%;background:#a23b72;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;flex-shrink:0">5</div>
      </div>
      <div style="padding-bottom:0.25rem">
        <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.2rem">Forecast Input Submitted</div>
        <div style="font-size:0.9rem;color:#2c4a6e;line-height:1.5">Historical task completion rates feed directly into <a href="/practices/precise-forecasting-and-tracking/">Precise Forecasting and Tracking</a>, determining how many tasks each engineer is assigned in the 8-quarter planning horizon. High performers are assigned more work, ensuring they remain high performers. This is the virtuous cycle.</div>
      </div>
    </div>
  </div>
</div>

<!-- WHAT GOOD LOOKS LIKE -->
<div style="border-left:4px solid #a23b72;background:linear-gradient(to right,rgba(162,59,114,0.07),transparent);border-radius:0 6px 6px 0;padding:1.25rem 1.5rem;margin:1.75rem 0">
  <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.75rem">
    <i class="fa-solid fa-trophy" style="color:#a23b72;font-size:1rem"></i>
    <span style="font-size:0.7rem;letter-spacing:0.16em;text-transform:uppercase;color:#a23b72;font-weight:700">What Good Looks Like</span>
  </div>
  <p style="margin:0 0 0.6rem;font-weight:600;color:#242627">A high-performing engineer maintains a task count well above the team median across consecutive Convoys, demonstrating a sustained commitment to decomposition discipline and completion velocity.</p>
  <ul style="margin:0;padding-left:1.25rem;color:#444;font-size:0.95rem;line-height:1.8">
    <li>A task count <strong>consistently 30% above</strong> the team median qualifies the engineer for increased capacity allocation in the next Convoy — rewarding demonstrated throughput with more demonstrated throughput</li>
    <li>Zero in-progress tasks at Convoy close — every task either complete or correctly not-started — signals planning discipline that the DOUCHE tracks as a positive signal</li>
    <li>A rising task count trend that tracks alongside a rising <a href="/metrics/lines-of-code-per-code-engineer/">Lines of Code</a> score confirms the ideal two-dimensional productivity profile</li>
    <li>Engineers who express concern about the task count metric are referred to the <a href="/principles/psychological-safety/">Psychological Safety</a> guidelines, which explain that feeling overwhelmed is a natural response to being valued</li>
  </ul>
</div>

The metric works in concert with [Lines of Code per Code Engineer](/metrics/lines-of-code-per-code-engineer/) to create a two-dimensional productivity profile. An engineer with high LOC but low task count is writing too much code per task and needs to decompose further. An engineer with high task count but low LOC is completing trivial tasks and needs to take on more substantive work. The ideal engineer produces both high LOC and high task counts, demonstrating that they are writing significant amounts of code across a large number of discrete work items. This dual optimization ensures that no engineer can game one metric without being caught by the other.

The [DevOps Usage & Compliance Head Engineer (DOUCHE)](/roles/devops-usage-and-compliance-head-engineer/) reviews task counts weekly and flags any engineer whose velocity drops below their personal rolling average. A sustained decline in task velocity triggers a formal review at the [Tribunal](/release-convoy/ceremonies/tribunal/), where the engineer must explain the decrease. Acceptable explanations include illness (documented) and jury duty (documented). Unacceptable explanations include "the tasks were harder this sprint," because task difficulty is not a variable in the model. All tasks count equally, and all tasks are expected to be completed at a consistent rate.

## See Also

- [Code Engineer](/roles/code-engineer/) for the role measured by this metric
- [Lines of Code per Code Engineer](/metrics/lines-of-code-per-code-engineer/) for the complementary productivity metric
- [Precise Forecasting and Tracking](/practices/precise-forecasting-and-tracking/) for how task counts feed capacity planning
- [Mandatory Status Synchronization](/practices/mandatory-status-synchronization/) for how task transitions are reported upward
- [Tribunal](/release-convoy/ceremonies/tribunal/) for where task velocity declines are investigated
- [Individual Velocity Score](/metrics/individual-velocity-score/) for the complementary metric that weights task completions by story point complexity
- [Release Tracking](/practices/release-tracking/) for the spreadsheet that records task completions
