---
title: "Amplify Feedback"
linkTitle: "Amplify Feedback"
type: docs
description: Coaching employees is an important daily practice to ensure they know we are tracking their work and care about their output.
weight: 6
tags: ["communication", "governance"]
---

Feedback is the mechanism by which an organization communicates its expectations to the individuals who do the work. In many organizations, feedback is sporadic, informal, and often delivered too late to be actionable. The SADMF principle of Amplify Feedback ensures that feedback is constant, structured, and impossible to ignore. When employees know that their every action is being observed, measured, and reported, they naturally align their behavior with organizational expectations. This is not surveillance; it is coaching at scale.

<div style="border-left:5px solid #a23b72;padding:1.25rem 1.75rem;margin:2rem 0 2.5rem 0;background:linear-gradient(to right,#fdf6f9,#fff);border-radius:0 6px 6px 0">
  <p style="font-size:1.45rem;font-style:italic;color:#242627;margin:0;line-height:1.5;font-weight:500">"When employees know that their every action is being observed, measured, and reported, they naturally align their behavior with organizational expectations. This is not surveillance; it is coaching at scale."</p>
  <p style="margin:0.75rem 0 0;font-size:0.9rem;color:#a23b72;font-weight:600;letter-spacing:0.04em;text-transform:uppercase">— SADMF Amplify Feedback Principle</p>
</div>

The primary feedback channel in the SADMF is the daily status interrogation conducted by the [Feature Captain](/roles/feature-captain/). Each morning, every [Code Engineer](/roles/code-engineer/) reports what they completed yesterday, what they will complete today, and why they failed to complete what they committed to yesterday. This third question is the most important, because it establishes a daily rhythm of accountability that prevents engineers from quietly falling behind. The Feature Captain records all responses in the status tracking spreadsheet, which feeds into the [Chief Signals Officer's](/roles/chief-signals-officer/) daily [Feature Completion Ratio](/metrics/feature-completion-ratio/) report.

{{< principles-amplify-feedback >}}

Amplifying feedback also means ensuring that feedback flows upward through the proper channels. The [Scrum of Scrum of Scrums](/release-convoy/ceremonies/scrum-of-scrum-of-scrums/) ceremony aggregates team-level status into organizational dashboards that give the [Commodore](/roles/commodore/) and [Admiral's Transformation Office](/roles/admirals-transformation-office/) a comprehensive view of who is on track and who is not. This multi-layered feedback architecture ensures that no individual's performance can escape notice, regardless of how many teams or features are in flight. The feedback signal is amplified at every level of the hierarchy until it reaches the people empowered to act on it.

The framework recognizes several categories of feedback, each with its own amplification mechanism. Performance feedback is amplified through the [Lines of Code per Code Engineer](/metrics/lines-of-code-per-code-engineer/) and [Tasks per Code Engineer](/metrics/tasks-per-code-engineer/) metrics, which provide objective, quantitative data that eliminates the ambiguity of subjective assessment. Quality feedback is amplified through [Defects per Code Engineer](/metrics/defects-per-code-engineer/) tracking, which ensures that the source of every defect is identified and documented. Process feedback is amplified through the [DevOps Process Excellence Assessment](/practices/devops-process-excellence-assessment/), which evaluates each individual's adherence to the framework on a weekly basis.

It is essential that feedback be amplified, not filtered. Some organizations make the mistake of allowing managers to soften or contextualize feedback before it reaches leadership. This filtering introduces bias and prevents the organization from seeing the unvarnished truth about individual performance. In the SADMF, raw metrics flow directly into the dashboards used by the [Admiral's Transformation Office](/roles/admirals-transformation-office/), ensuring that data-driven decisions are made with data, not narratives. The [Tribunal](/release-convoy/ceremonies/tribunal/) ceremony is the ultimate expression of this principle: a regular forum where amplified feedback is reviewed and acted upon without the distortion of managerial interpretation.

<h2 style="margin-top:2.5rem">Key Implications</h2>

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.25rem;margin:1.5rem 0 2rem 0">

  <div style="background:#e8edf5;border:1.5px solid #9ab4cc;border-radius:8px;padding:1.25rem 1.5rem;color:#1e3a5f">
    <div style="font-size:1.5rem;margin-bottom:0.5rem"><i class="fa-solid fa-comments"></i></div>
    <h3 style="margin:0 0 0.5rem 0;font-size:1rem;font-weight:700;color:#1e3a5f;text-transform:uppercase;letter-spacing:.04em">Daily Three-Question Ritual</h3>
    <p style="margin:0;font-size:0.92rem;line-height:1.55;color:#1e3a5f">Every morning, every Code Engineer answers: what did you complete yesterday? What will you complete today? Why did you fail? The third question is the most important. Feature Captain logs every response, every day.</p>
  </div>

  <div style="background:#e8edf5;border:1.5px solid #9ab4cc;border-radius:8px;padding:1.25rem 1.5rem;color:#1e3a5f">
    <div style="font-size:1.5rem;margin-bottom:0.5rem"><i class="fa-solid fa-filter-circle-xmark"></i></div>
    <h3 style="margin:0 0 0.5rem 0;font-size:1rem;font-weight:700;color:#1e3a5f;text-transform:uppercase;letter-spacing:.04em">No Filtering, No Softening</h3>
    <p style="margin:0;font-size:0.92rem;line-height:1.55;color:#1e3a5f">Raw metrics flow directly from source to ATO dashboards. Managerial interpretation introduces bias and narrative. The Tribunal reviews unvarnished data — not summaries, not context, not excuses.</p>
  </div>

  <div style="background:#e8edf5;border:1.5px solid #9ab4cc;border-radius:8px;padding:1.25rem 1.5rem;color:#1e3a5f">
    <div style="font-size:1.5rem;margin-bottom:0.5rem"><i class="fa-solid fa-tower-broadcast"></i></div>
    <h3 style="margin:0 0 0.5rem 0;font-size:1rem;font-weight:700;color:#1e3a5f;text-transform:uppercase;letter-spacing:.04em">Amplification at Every Level</h3>
    <p style="margin:0;font-size:0.92rem;line-height:1.55;color:#1e3a5f">No performance signal goes unheard. Individual data flows to Feature Captain, to SoSoS, to Commodore, to ATO. Each layer amplifies the signal until it reaches those empowered to act on it.</p>
  </div>

  <div style="background:#e8edf5;border:1.5px solid #9ab4cc;border-radius:8px;padding:1.25rem 1.5rem;color:#1e3a5f">
    <div style="font-size:1.5rem;margin-bottom:0.5rem"><i class="fa-solid fa-microscope"></i></div>
    <h3 style="margin:0 0 0.5rem 0;font-size:1rem;font-weight:700;color:#1e3a5f;text-transform:uppercase;letter-spacing:.04em">Three Objective Lenses</h3>
    <p style="margin:0;font-size:0.92rem;line-height:1.55;color:#1e3a5f">Performance (Lines of Code, Tasks), Quality (Defects per Code Engineer), and Process (DPEA adherence) provide three independent feedback channels. No dimension of engineer output escapes measurement.</p>
  </div>

</div>

## See Also

- [Scrum of Scrum of Scrums](/release-convoy/ceremonies/scrum-of-scrum-of-scrums/) for the ceremony that aggregates feedback
- [Feature Completion Ratio](/metrics/feature-completion-ratio/) for the metric that tracks delivery against commitments
- [DevOps Process Excellence Assessment](/practices/devops-process-excellence-assessment/) for the weekly adherence assessment
- [Tribunal](/release-convoy/ceremonies/tribunal/) for the ceremony where feedback drives personnel decisions
- [Make Work Visible](/principles/make-work-visible/) for the dashboards that display amplified feedback
