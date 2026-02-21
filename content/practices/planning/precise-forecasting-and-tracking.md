---
title: "Precise Forecasting and Tracking"
linkTitle: "Precise Forecasting"
type: docs
description: "Converting between story points and person-days enables precise estimation, team comparison, and dashboard excellence!"
weight: 5
categories: ["Planning, Tracking & Reporting"]
tags: ["planning", "measurement", "reporting"]
aliases: ["/practices/precise-forecasting-and-tracking/"]
---

Other frameworks accept estimation uncertainty as an unavoidable reality and counsel teams to embrace it. SADMF recognizes that uncertainty is simply a symptom of insufficient process. With the right conversion formulas, the right tracking mechanisms, and the right management oversight, software delivery can be forecasted with the same precision as manufacturing output. The key insight is that story points, which teams use to obscure the true duration of work, can and must be converted to person-days using the SADMF Standard Conversion Formula.

<div style="margin:2rem 0;border:2px solid #a23b72;border-radius:8px;overflow:hidden;">
  <div style="background:#a23b72;padding:0.6rem 1rem;display:flex;align-items:center;gap:0.6rem;">
    <i class="fa-solid fa-square-root-variable" style="color:#fff;font-size:1rem;"></i>
    <span style="color:#fff;font-weight:700;font-size:0.8rem;letter-spacing:0.1em;text-transform:uppercase;">SADMF Standard Conversion Formula</span>
    <span style="margin-left:auto;color:rgba(255,255,255,0.6);font-size:0.7rem;letter-spacing:0.08em;text-transform:uppercase;">ATO-Certified &bull; Rev. 4.1</span>
  </div>
  <div style="background:#fff8fb;padding:1.25rem 1.5rem;display:flex;flex-wrap:wrap;gap:1.5rem;align-items:center;">
    <div style="font-size:2rem;font-weight:800;color:#242627;letter-spacing:-0.02em;white-space:nowrap;">
      1 SP &nbsp;<span style="color:#9ab4cc;font-weight:300;">=</span>&nbsp; <span style="color:#a23b72;">0.73</span> <span style="font-size:1.2rem;font-weight:600;color:#5a6d82;">person-days</span>
    </div>
    <div style="flex:1;min-width:200px;border-left:2px solid #e8edf5;padding-left:1.25rem;color:#3a5070;font-size:0.85rem;line-height:1.6;">
      Accounts for: meeting time &bull; ceremony attendance &bull;
      <a href="/practices/devops-process-excellence-assessment/">DPEA</a> completion &bull;
      <a href="/practices/fractal-based-development/">Fractal branching</a> overhead.<br>
      <span style="color:#a23b72;font-weight:600;">Recalibration is not permitted.</span> Local variance undermines cross-team comparability.
    </div>
  </div>
</div>

The SADMF Standard Conversion Formula establishes that 1 story point equals exactly 0.73 person-days. This ratio was derived through extensive analysis conducted by the [Admiral's Transformation Office (ATO)](/roles/admirals-transformation-office/) during the initial transformation engagement and has been validated by its consistent use across all subsequent Convoys. The formula accounts for meeting time, ceremony attendance, [DevOps Process Excellence Assessment](/practices/devops-process-excellence-assessment/) completion, and the overhead of working within the [Fractal-based Development](/practices/fractal-based-development/) branching model. Organizations that question the 0.73 ratio are reminded that the formula was calibrated by consultants with extensive experience in transformations and that recalibrating it locally would introduce variance that undermines cross-team comparability.

{{< figure src="/images/gantt.png" alt="Gantt chart showing multi-year project schedule with precise delivery dates" title="Precise forecasting in action: every quarter mapped, every person-day accounted for" >}}

All estimations are performed by managers, not by the [Code Engineers](/roles/code-engineer/) who will do the work. This is a deliberate design choice. Code Engineers, being intimately familiar with the technical details of their assignments, tend to produce estimates that account for complexity, risk, and unknowns -- factors that inflate estimates and undermine the confidence of stakeholders. [Feature Captains](/roles/feature-captain/) produce estimates based on the expected output of a competent engineer working at standard efficiency, which provides a cleaner baseline for tracking. If the actual work takes longer than the manager's estimate, the variance is attributed to the engineer's performance rather than to estimation error, which creates a clear feedback loop for improvement. This feedback is documented in the engineer's [PeopleWare](/peopleware/) profile and reviewed during the [Tribunal](/release-convoy/ceremonies/tribunal/).

The tracking component of this practice centers on the Forecast Accuracy Index (FAI), a metric that penalizes both over-delivery and under-delivery. Under-delivery is obviously undesirable, as it means the team did not meet its commitments. Over-delivery, however, is equally problematic: it indicates that the original estimate was too generous, which means resources were allocated inefficiently, or that the engineer worked on unauthorized enhancements beyond the stated requirements. The FAI is calculated as the absolute deviation from the forecast, expressed as a percentage. A team that delivers exactly 100% of its forecasted work scores a perfect FAI of 0%. A team that delivers 90% or 110% both score an FAI of 10%, and both are equally non-compliant. The [Chief Signals Officer (CSO)](/roles/chief-signals-officer/) publishes FAI scores daily on the transformation dashboard.

<div style="border:2px dashed #9ab4cc;border-radius:6px;padding:1.5rem;margin:1.5rem 0;background:#f8fafc;text-align:center;color:#5a6d82;font-style:italic">
  [IMAGE: A gauge dial illustration showing the Forecast Accuracy Index (FAI) with a green zone at exactly 0% in the center, and red non-compliance zones spreading symmetrically in both directions toward "Under-delivery" on the left and "Over-delivery" on the right, with tick marks at 5%, 10%, 15%, and 20% deviation on each side]
</div>

Precise Forecasting and Tracking enables the practice that all other management activities depend on: comparison. By converting all work to person-days using a standard formula and tracking all delivery against a standard index, the [Commodore](/roles/commodore/) can compare the performance of any team against any other team, regardless of technology stack, domain complexity, or team composition. This comparability is the foundation of the [Feature Completion Ratio](/metrics/feature-completion-ratio/) metric and is essential for [Press Gang](/release-convoy/ceremonies/press-gang/) decisions about which engineers to assign to which features. Without Precise Forecasting and Tracking, the organization would be forced to rely on subjective assessments of team performance, and subjectivity is the enemy of accountability.

<div style="margin:2rem 0;">
  <div style="font-size:0.7rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#5a6d82;margin-bottom:0.75rem;">Precise Forecasting and Tracking — Implementation Sequence</div>
  <div style="display:flex;flex-direction:column;gap:0;">

    <div style="display:flex;align-items:stretch;gap:0;">
      <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:2.5rem;">
        <div style="width:2rem;height:2rem;border-radius:50%;background:#a23b72;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;flex-shrink:0;z-index:1;">1</div>
        <div style="width:2px;background:#9ab4cc;flex:1;margin-top:0;"></div>
      </div>
      <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:0.85rem 1rem;margin:0 0 0 0.75rem;flex:1;margin-bottom:0.5rem;">
        <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.2rem;"><i class="fa-solid fa-ruler" style="color:#a23b72;margin-right:0.4rem;"></i>Scope Definition &amp; Story Point Inventory</div>
        <div style="color:#3a5070;font-size:0.92rem;">The <a href="/roles/feature-captain/">Feature Captain</a> enumerates all features in the upcoming <a href="/release-convoy/">Convoy</a> and assigns story point values. Engineers are not consulted. The inventory forms the authoritative baseline from which all person-day calculations are derived.</div>
      </div>
    </div>

    <div style="display:flex;align-items:stretch;gap:0;">
      <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:2.5rem;">
        <div style="width:2rem;height:2rem;border-radius:50%;background:#a23b72;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;flex-shrink:0;z-index:1;">2</div>
        <div style="width:2px;background:#9ab4cc;flex:1;margin-top:0;"></div>
      </div>
      <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:0.85rem 1rem;margin:0 0 0 0.75rem;flex:1;margin-bottom:0.5rem;">
        <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.2rem;"><i class="fa-solid fa-calculator" style="color:#a23b72;margin-right:0.4rem;"></i>Conversion to Person-Days via the Standard Formula</div>
        <div style="color:#3a5070;font-size:0.92rem;">All story point totals are multiplied by <strong>0.73</strong> to produce the official person-day forecast. The <a href="/roles/admirals-transformation-office/">Admiral's Transformation Office</a> maintains the formula and certifies all conversion outputs. No local adjustment factors are recognized.</div>
      </div>
    </div>

    <div style="display:flex;align-items:stretch;gap:0;">
      <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:2.5rem;">
        <div style="width:2rem;height:2rem;border-radius:50%;background:#a23b72;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;flex-shrink:0;z-index:1;">3</div>
        <div style="width:2px;background:#9ab4cc;flex:1;margin-top:0;"></div>
      </div>
      <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:0.85rem 1rem;margin:0 0 0 0.75rem;flex:1;margin-bottom:0.5rem;">
        <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.2rem;"><i class="fa-solid fa-calendar-days" style="color:#a23b72;margin-right:0.4rem;"></i>Schedule Publication &amp; Stakeholder Commitment</div>
        <div style="color:#3a5070;font-size:0.92rem;">Person-day totals are converted to calendar dates and published on the transformation dashboard. Dates are then elevated to organizational commitments in accordance with the <a href="/principles/commit-to-the-date/">Commit to the Date</a> principle. Revision is not an available option.</div>
      </div>
    </div>

    <div style="display:flex;align-items:stretch;gap:0;">
      <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:2.5rem;">
        <div style="width:2rem;height:2rem;border-radius:50%;background:#a23b72;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;flex-shrink:0;z-index:1;">4</div>
        <div style="width:2px;background:#9ab4cc;flex:1;margin-top:0;"></div>
      </div>
      <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:0.85rem 1rem;margin:0 0 0 0.75rem;flex:1;margin-bottom:0.5rem;">
        <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.2rem;"><i class="fa-solid fa-gauge-high" style="color:#a23b72;margin-right:0.4rem;"></i>Daily FAI Tracking &amp; Dashboard Publication</div>
        <div style="color:#3a5070;font-size:0.92rem;">The <a href="/roles/chief-signals-officer/">Chief Signals Officer (CSO)</a> calculates the Forecast Accuracy Index for every team each day and publishes scores to the transformation dashboard. Both over-delivery and under-delivery are penalized equally. A perfect score of FAI 0% is the only acceptable outcome.</div>
      </div>
    </div>

    <div style="display:flex;align-items:stretch;gap:0;">
      <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:2.5rem;">
        <div style="width:2rem;height:2rem;border-radius:50%;background:#242627;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;flex-shrink:0;z-index:1;"><i class="fa-solid fa-scale-balanced" style="font-size:0.75rem;"></i></div>
        <div style="width:2px;background:transparent;flex:1;"></div>
      </div>
      <div style="background:#242627;border:1px solid #5a6d82;border-radius:6px;padding:0.85rem 1rem;margin:0 0 0 0.75rem;flex:1;">
        <div style="font-weight:700;color:#fff;margin-bottom:0.2rem;">Variance Attribution &amp; Tribunal Review</div>
        <div style="color:#9ab4cc;font-size:0.92rem;">Any FAI deviation is attributed to engineer performance, not estimation error. Variance is recorded in the engineer's <a href="/peopleware/" style="color:#a23b72;">PeopleWare</a> profile and reviewed at the <a href="/release-convoy/ceremonies/tribunal/" style="color:#a23b72;">Tribunal</a>. This creates a clear and measurable feedback loop for continuous improvement.</div>
      </div>
    </div>

  </div>
</div>

<div style="margin:2rem 0 1.5rem 0;">
  <div style="font-size:0.7rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#5a6d82;margin-bottom:0.75rem;">Roles Involved</div>
  <div style="display:flex;flex-wrap:wrap;gap:0.5rem;align-items:center;">
    <a href="/roles/admirals-transformation-office/" style="display:inline-flex;align-items:center;gap:0.4rem;background:#e8edf5;border:1px solid #9ab4cc;border-radius:2rem;padding:0.3rem 0.75rem;text-decoration:none;color:#1e3a5f;font-size:0.82rem;font-weight:600;white-space:nowrap;">
      <i class="fa-solid fa-anchor" style="color:#a23b72;font-size:0.75rem;"></i>Admiral's Transformation Office
    </a>
    <a href="/roles/feature-captain/" style="display:inline-flex;align-items:center;gap:0.4rem;background:#e8edf5;border:1px solid #9ab4cc;border-radius:2rem;padding:0.3rem 0.75rem;text-decoration:none;color:#1e3a5f;font-size:0.82rem;font-weight:600;white-space:nowrap;">
      <i class="fa-solid fa-flag" style="color:#a23b72;font-size:0.75rem;"></i>Feature Captain
    </a>
    <a href="/roles/chief-signals-officer/" style="display:inline-flex;align-items:center;gap:0.4rem;background:#e8edf5;border:1px solid #9ab4cc;border-radius:2rem;padding:0.3rem 0.75rem;text-decoration:none;color:#1e3a5f;font-size:0.82rem;font-weight:600;white-space:nowrap;">
      <i class="fa-solid fa-signal" style="color:#a23b72;font-size:0.75rem;"></i>Chief Signals Officer
    </a>
    <a href="/roles/commodore/" style="display:inline-flex;align-items:center;gap:0.4rem;background:#e8edf5;border:1px solid #9ab4cc;border-radius:2rem;padding:0.3rem 0.75rem;text-decoration:none;color:#1e3a5f;font-size:0.82rem;font-weight:600;white-space:nowrap;">
      <i class="fa-solid fa-star" style="color:#a23b72;font-size:0.75rem;"></i>Commodore
    </a>
    <a href="/roles/code-engineer/" style="display:inline-flex;align-items:center;gap:0.4rem;background:#e8edf5;border:1px solid #9ab4cc;border-radius:2rem;padding:0.3rem 0.75rem;text-decoration:none;color:#1e3a5f;font-size:0.82rem;font-weight:600;white-space:nowrap;">
      <i class="fa-solid fa-code" style="color:#a23b72;font-size:0.75rem;"></i>Code Engineer
    </a>
  </div>
</div>

## See Also

- [Feature Completion Ratio](/metrics/feature-completion-ratio/) for the metric that depends on precise forecasting
- [Chief Signals Officer (CSO)](/roles/chief-signals-officer/) for the role that publishes FAI scores
- [Tribunal](/release-convoy/ceremonies/tribunal/) for how estimation variance is addressed
- [PeopleWare](/peopleware/) for how forecasting data affects performance reviews
- [Commodore](/roles/commodore/) for the role that uses forecasting data for Convoy planning
- [Commit to the Date](/principles/commit-to-the-date/) for the principle that elevates forecasted dates to organizational commitments
- [DevOps Process Excellence Assessment](/practices/devops-process-excellence-assessment/) for how forecasting knowledge is tested
