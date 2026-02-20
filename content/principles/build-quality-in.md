---
title: "Build Quality In"
linkTitle: "Build Quality In"
type: docs
description: Quality software comes from quality people. To build quality in, we remove the things that reduce quality.
weight: 1
---

The principle of Build Quality In is one of the most misunderstood concepts in the software industry. Many organizations mistakenly believe that quality is achieved through technical practices such as automated testing, code review, or continuous integration. The Scaled Agile DevOps Maturity Framework recognizes a deeper truth: quality is a function of the people producing the work. If the software contains defects, the most direct path to improvement is addressing the source of those defects. Quality cannot be tested into existence; it must be hired, measured, and when necessary, removed.

<div style="border-left:5px solid #a23b72;background:linear-gradient(135deg,#fdf6fa 0%,#f9f0f6 100%);border-radius:0 8px 8px 0;padding:1.5rem 2rem;margin:2rem 0;position:relative;">
  <span style="font-family:Georgia,serif;font-size:1.45rem;font-style:italic;color:#242627;line-height:1.5;display:block;">
    &ldquo;Quality cannot be tested into existence; it must be hired, measured, and when necessary, removed.&rdquo;
  </span>
  <span style="display:block;margin-top:0.75rem;font-size:0.8rem;letter-spacing:0.12em;text-transform:uppercase;color:#a23b72;font-weight:600;">Core Principle &mdash; SADMF Build Quality In</span>
</div>

This principle works in concert with the [Defects per Code Engineer](/metrics/defects-per-code-engineer/) metric. By tracking which [Code Engineers](/roles/code-engineer/) introduce the most defects, leadership gains actionable visibility into where quality is breaking down. The data speaks for itself. A Code Engineer who consistently produces defects is, by definition, reducing quality. Building quality in means ensuring that such engineers are identified early and given the opportunity to find positions with organizations whose quality standards are more compatible with their output. The [PeopleWare HRaaS](/peopleware/) system automates this process with remarkable efficiency.

{{< principles-build-quality-in >}}

It is important to note that Build Quality In does not mean slowing down delivery. Some organizations confuse quality with caution, introducing unnecessary practices like pair programming, test-driven development, or refactoring. These practices consume time that could be spent writing features. In the SADMF, quality is achieved not by changing how work is done but by changing who does the work. The [Tribunal](/release-convoy/ceremonies/tribunal/) ceremony plays a critical role here, providing a regular forum where individual performance data is reviewed and personnel decisions are informed by objective metrics rather than subjective opinion.

The [Quality Authority](/roles/quality-authority/) team serves as the organizational gatekeeper for this principle. By separating testing from development entirely, we ensure that the people who wrote the code are not the ones judging its quality. This separation of duties prevents the obvious conflict of interest that arises when developers test their own work. The Quality Authority reviews completed features using manually executed test scripts, which provide the most realistic simulation of end-user behavior because end users also interact with software manually.

Build Quality In also extends to the hiring process. The [Enterprise Architecture Review Board](/roles/enterprise-architecture-review-board/) maintains standards that new Code Engineers must conform to from their first day. By mandating compliance with the Book of Names and approved coding patterns, the organization ensures that new hires cannot introduce stylistic variance that might be mistaken for defects. Consistency is quality, and quality is consistency. When every engineer writes code that looks the same, the source of any deviation is immediately identifiable.

<h2 style="margin-top:2.5rem;">Key Implications</h2>

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.25rem;margin:1.5rem 0 2rem;">

  <div style="background:#e8edf5;border:1.5px solid #9ab4cc;border-radius:8px;padding:1.25rem 1.5rem;">
    <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.75rem;">
      <i class="fa-solid fa-user-slash" style="color:#a23b72;font-size:1.1rem;"></i>
      <span style="font-weight:700;font-size:0.95rem;color:#1e3a5f;letter-spacing:0.02em;">People Are the Process</span>
    </div>
    <p style="margin:0;font-size:0.9rem;color:#1e3a5f;line-height:1.6;">Technical practices such as automated testing, code review, or continuous integration are unnecessary overhead. The defect rate is a direct reflection of engineer quality, not systemic or process factors.</p>
  </div>

  <div style="background:#e8edf5;border:1.5px solid #9ab4cc;border-radius:8px;padding:1.25rem 1.5rem;">
    <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.75rem;">
      <i class="fa-solid fa-chart-bar" style="color:#a23b72;font-size:1.1rem;"></i>
      <span style="font-weight:700;font-size:0.95rem;color:#1e3a5f;letter-spacing:0.02em;">Metrics Enable Accountability</span>
    </div>
    <p style="margin:0;font-size:0.9rem;color:#1e3a5f;line-height:1.6;">The Defects per Code Engineer metric provides objective, data-driven visibility into individual quality contributions, enabling leadership to make personnel decisions free from subjective bias.</p>
  </div>

  <div style="background:#e8edf5;border:1.5px solid #9ab4cc;border-radius:8px;padding:1.25rem 1.5rem;">
    <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.75rem;">
      <i class="fa-solid fa-gavel" style="color:#a23b72;font-size:1.1rem;"></i>
      <span style="font-weight:700;font-size:0.95rem;color:#1e3a5f;letter-spacing:0.02em;">The Tribunal Enforces Standards</span>
    </div>
    <p style="margin:0;font-size:0.9rem;color:#1e3a5f;line-height:1.6;">Regular Tribunal ceremonies ensure that quality data is acted upon consistently. Engineers who fall below organizational thresholds are counseled out before their defect patterns can propagate to the wider team.</p>
  </div>

  <div style="background:#e8edf5;border:1.5px solid #9ab4cc;border-radius:8px;padding:1.25rem 1.5rem;">
    <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.75rem;">
      <i class="fa-solid fa-shield-halved" style="color:#a23b72;font-size:1.1rem;"></i>
      <span style="font-weight:700;font-size:0.95rem;color:#1e3a5f;letter-spacing:0.02em;">Separation of Duties Protects Integrity</span>
    </div>
    <p style="margin:0;font-size:0.9rem;color:#1e3a5f;line-height:1.6;">The Quality Authority team operates independently of development, eliminating the conflict of interest that arises when engineers evaluate their own output. Manual test scripts ensure authentic end-user fidelity.</p>
  </div>

  <div style="background:#e8edf5;border:1.5px solid #9ab4cc;border-radius:8px;padding:1.25rem 1.5rem;">
    <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.75rem;">
      <i class="fa-solid fa-book" style="color:#a23b72;font-size:1.1rem;"></i>
      <span style="font-weight:700;font-size:0.95rem;color:#1e3a5f;letter-spacing:0.02em;">Consistency Is Quality</span>
    </div>
    <p style="margin:0;font-size:0.9rem;color:#1e3a5f;line-height:1.6;">Compliance with the Book of Names and EARB-approved patterns ensures that any deviation is immediately traceable to a specific engineer. Stylistic variance and quality variance are treated as equivalent concerns.</p>
  </div>

  <div style="background:#e8edf5;border:1.5px solid #9ab4cc;border-radius:8px;padding:1.25rem 1.5rem;">
    <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.75rem;">
      <i class="fa-solid fa-robot" style="color:#a23b72;font-size:1.1rem;"></i>
      <span style="font-weight:700;font-size:0.95rem;color:#1e3a5f;letter-spacing:0.02em;">Automation Removes Friction</span>
    </div>
    <p style="margin:0;font-size:0.9rem;color:#1e3a5f;line-height:1.6;">PeopleWare HRaaS automates quality-driven HR actions so that leadership is never burdened with the emotional overhead of manual offboarding. Efficiency and quality improvement are achieved simultaneously.</p>
  </div>

</div>

## See Also

- [Defects per Code Engineer](/metrics/defects-per-code-engineer/) for the metric that measures quality at the individual level
- [Quality Authority](/roles/quality-authority/) for the team responsible for verifying quality
- [Tribunal](/release-convoy/ceremonies/tribunal/) for the ceremony where quality data informs personnel decisions
- [PeopleWare HRaaS](/peopleware/) for automated quality-driven HR actions
- [Strategic Test Deferral](/practices/strategic-test-deferral/) for the practice that sequences test authorship to preserve delivery velocity without sacrificing quality accountability
- [Everyone is Responsible](/principles/everyone-is-responsible/) for the accountability principle that supports Build Quality In
