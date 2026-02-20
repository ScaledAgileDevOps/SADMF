---
title: "Make Work Visible"
linkTitle: "Make Work Visible"
type: docs
description: Surveillance dashboards and individual output tracking ensure leadership always knows who is and is not contributing.
weight: 10
---

The principle of Make Work Visible ensures that no individual's contribution -- or lack of contribution -- can be hidden behind the abstraction of a team. In many organizations, work is tracked at the team level, which allows underperformers to shelter behind the output of their more productive colleagues. The SADMF eliminates this hiding by tracking and displaying individual work at every level of the organization. When work is truly visible, accountability is inescapable, and the meritocratic ideals of the framework can be fully realized.

<blockquote style="border-left: 5px solid #a23b72; background: #fdf6fa; padding: 1.5rem 2rem; margin: 2rem 0; border-radius: 0 6px 6px 0;">
  <p style="font-size: 1.35rem; font-style: italic; color: #242627; line-height: 1.5; margin: 0;">
    "When work is truly visible, accountability is inescapable &mdash; and the meritocratic ideals of the framework can be fully realized."
  </p>
</blockquote>

The primary instrument for making work visible is the individual performance dashboard. The [Chief Signals Officer](/roles/chief-signals-officer/) maintains real-time displays showing each [Code Engineer's](/roles/code-engineer/) [Lines of Code](/metrics/lines-of-code-per-code-engineer/), [Tasks Completed](/metrics/tasks-per-code-engineer/), [Defects Introduced](/metrics/defects-per-code-engineer/), and [Code Review Comments](/metrics/code-review-comments-per-convoy/) for the current convoy. These dashboards are displayed on large screens in shared workspaces where all engineers can see them. This public display creates healthy competition and allows engineers to self-correct when they notice their metrics falling below their peers. Engineers who consistently appear at the bottom of the dashboard receive the coaching they need through the [Amplify Feedback](/principles/amplify-feedback/) principle.

<figure style="margin:1.5rem 0;text-align:center">
  <img src="/images/generated/make-work-visible-leaderboard-office.png"
       alt="A large open-plan office with floor-to-ceiling screens on every wall displaying individual engineer scorecards, ranked leaderboards, and real-time metric gauges — engineers at their desks visible below the displays"
       style="max-width:100%;border-radius:6px;box-shadow:0 2px 12px rgba(0,0,0,0.12)">
</figure>

Making work visible also means making process adherence visible. The [DevOps Process Excellence Assessment](/practices/devops-process-excellence-assessment/) generates weekly scores for every individual, and these scores are published alongside performance metrics. This dual visibility ensures that engineers are evaluated not only on what they produce but on how they produce it. An engineer who delivers features quickly but skips ceremonies or deviates from the [Fractal-based Development](/practices/fractal-based-development/) branching pattern is not following the framework, and their process score reflects this. Visibility into process adherence prevents the dangerous situation where engineers achieve results through unapproved methods.

The [Release Tracking](/practices/release-tracking/) spreadsheet is another critical visibility tool. Every change in every release is traced to the individual who made it, the individual who approved it, and the individual who tested it. This traceability ensures that when a production incident occurs, the source of the problem can be identified within minutes rather than hours. The question is never "what went wrong?" but rather "who went wrong?" This level of visibility transforms incident response from a collaborative debugging exercise into a straightforward attribution exercise, which is far more efficient.

Some organizations express concern that pervasive visibility creates a culture of fear rather than transparency. The SADMF recognizes that this concern is itself a symptom of insufficient [Psychological Safety](/principles/psychological-safety/). When personnel decisions are handled by the [PeopleWare HRaaS](/peopleware/) system rather than by individual managers, visibility becomes a neutral tool rather than a weapon. Engineers are not afraid of being seen because the system, not a person, evaluates the data. The dashboards do not judge; they inform. And when the data indicates that an engineer's contributions are not meeting organizational standards, the system responds with the same dispassionate efficiency regardless of who the engineer is. This is fairness made visible.

<div class="row g-3 my-4">
  <div class="col-md-6">
    <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:1.25rem;height:100%">
      <div style="color:#a23b72;font-size:1.4rem;margin-bottom:0.5rem">
        <i class="fa-solid fa-eye"></i>
      </div>
      <h5 style="color:#1e3a5f;margin-bottom:0.5rem">No Contribution Can Hide</h5>
      <p style="color:#1e3a5f;margin:0;font-size:0.95rem">Individual dashboards eliminate the shelter of team-level tracking. Every line of code, every completed task, and every introduced defect is attributed to a named engineer and displayed publicly.</p>
    </div>
  </div>
  <div class="col-md-6">
    <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:1.25rem;height:100%">
      <div style="color:#a23b72;font-size:1.4rem;margin-bottom:0.5rem">
        <i class="fa-solid fa-trophy"></i>
      </div>
      <h5 style="color:#1e3a5f;margin-bottom:0.5rem">Healthy Competition</h5>
      <p style="color:#1e3a5f;margin:0;font-size:0.95rem">Public leaderboards in shared workspaces enable engineers to benchmark themselves against peers and self-correct before management intervention becomes necessary.</p>
    </div>
  </div>
  <div class="col-md-6">
    <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:1.25rem;height:100%">
      <div style="color:#a23b72;font-size:1.4rem;margin-bottom:0.5rem">
        <i class="fa-solid fa-clipboard-check"></i>
      </div>
      <h5 style="color:#1e3a5f;margin-bottom:0.5rem">Process Adherence Scoring</h5>
      <p style="color:#1e3a5f;margin:0;font-size:0.95rem">Weekly DevOps Process Excellence Assessment scores ensure engineers are evaluated on how they produce results, not merely what they produce. Unapproved methods are surfaced immediately.</p>
    </div>
  </div>
  <div class="col-md-6">
    <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:1.25rem;height:100%">
      <div style="color:#a23b72;font-size:1.4rem;margin-bottom:0.5rem">
        <i class="fa-solid fa-scale-balanced"></i>
      </div>
      <h5 style="color:#1e3a5f;margin-bottom:0.5rem">Fairness Made Visible</h5>
      <p style="color:#1e3a5f;margin:0;font-size:0.95rem">Because the PeopleWare HRaaS system — not a person — evaluates the data, visibility is a neutral instrument. Dispassionate algorithmic evaluation is the highest form of organizational fairness.</p>
    </div>
  </div>
</div>

## See Also

- [Metrics](/metrics/) for the measurements displayed on visibility dashboards
- [Chief Signals Officer](/roles/chief-signals-officer/) for the role responsible for maintaining dashboards
- [Release Tracking](/practices/release-tracking/) for tracing individual contributions to releases
- [Amplify Feedback](/principles/amplify-feedback/) for how visible metrics drive coaching conversations
- [Psychological Safety](/principles/psychological-safety/) for why pervasive visibility is safe and fair
