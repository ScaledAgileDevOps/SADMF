---
title: "Feature Completion Ratio"
linkTitle: "Feature Completion Ratio"
type: docs
description: "The percentage of features delivered versus what was committed to 8 quarters ago -- because real planning has a two-year horizon!"
weight: 7
---

Feature Completion Ratio is the metric that measures the organization's ability to deliver on its commitments. It is calculated as the percentage of features delivered in the current [Convoy](/release-convoy/) compared to what was committed to 8 quarters ago, when the features were originally planned, estimated, and approved by the [Admiral's Transformation Office](/roles/admirals-transformation-office/). This two-year planning horizon ensures that commitments are made with sufficient deliberation, that stakeholders have ample time to build business cases around promised features, and that any failure to deliver is unmistakably visible. Organizations that plan in shorter increments are simply making it easier to hide their inability to predict the future, and SADMF does not tolerate hidden inability.

<!-- STAT HERO -->
<div style="border:2px solid #9ab4cc;border-radius:8px;background:#e8edf5;margin:2rem 0;overflow:hidden;font-family:Georgia,serif;">
  <div style="background:#1e3a5f;padding:1rem 1.5rem;display:flex;align-items:center;gap:0.75rem;">
    <i class="fa-solid fa-chart-line" style="color:#9ab4cc;font-size:1.25rem;"></i>
    <span style="color:#e8edf5;font-size:0.75rem;letter-spacing:0.15em;text-transform:uppercase;font-family:Georgia,serif;font-weight:bold;">SADMF Core Metric</span>
  </div>
  <div style="padding:1.5rem;">
    <div style="font-size:2rem;font-weight:bold;color:#1e3a5f;letter-spacing:-0.02em;margin-bottom:0.25rem;">Feature Completion Ratio</div>
    <div style="font-size:0.8rem;color:#5a6d82;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:1.5rem;">FCR</div>
    <div style="background:#1e3a5f;border-radius:6px;padding:1rem 1.5rem;margin-bottom:1.5rem;text-align:center;">
      <div style="font-size:0.7rem;color:#9ab4cc;text-transform:uppercase;letter-spacing:0.12em;margin-bottom:0.5rem;">Formula</div>
      <div style="font-family:'Courier New',monospace;color:#e8edf5;font-size:1.1rem;line-height:1.6;">
        <span style="display:block;border-bottom:2px solid #9ab4cc;padding-bottom:0.4rem;margin-bottom:0.4rem;">Features Shipped in Current Convoy</span>
        <span style="display:block;">Features Committed 8 Quarters Ago</span>
      </div>
      <div style="color:#a23b72;font-size:1.4rem;font-weight:bold;margin-top:0.5rem;">× 100</div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:1rem;">
      <div style="background:#fff;border:1px solid #9ab4cc;border-radius:6px;padding:0.85rem 1rem;">
        <div style="font-size:0.65rem;text-transform:uppercase;letter-spacing:0.1em;color:#5a6d82;margin-bottom:0.35rem;">
          <i class="fa-solid fa-user-tie" style="margin-right:0.3rem;color:#a23b72;"></i>Owner Role
        </div>
        <div style="font-size:0.9rem;color:#1e3a5f;font-weight:600;"><a href="/roles/chief-signals-officer/" style="color:#1e3a5f;text-decoration:none;">Chief Signals Officer</a></div>
      </div>
      <div style="background:#fff;border:1px solid #9ab4cc;border-radius:6px;padding:0.85rem 1rem;">
        <div style="font-size:0.65rem;text-transform:uppercase;letter-spacing:0.1em;color:#5a6d82;margin-bottom:0.35rem;">
          <i class="fa-solid fa-calendar-days" style="margin-right:0.3rem;color:#a23b72;"></i>Measurement Cadence
        </div>
        <div style="font-size:0.9rem;color:#1e3a5f;font-weight:600;">End of each Convoy</div>
      </div>
      <div style="background:#fff;border:1px solid #9ab4cc;border-radius:6px;padding:0.85rem 1rem;">
        <div style="font-size:0.65rem;text-transform:uppercase;letter-spacing:0.1em;color:#5a6d82;margin-bottom:0.35rem;">
          <i class="fa-solid fa-bullseye" style="margin-right:0.3rem;color:#a23b72;"></i>Target Threshold
        </div>
        <div style="font-size:0.9rem;color:#1e3a5f;font-weight:600;">&ge; 100%</div>
      </div>
      <div style="background:#fff;border:1px solid #9ab4cc;border-radius:6px;padding:0.85rem 1rem;">
        <div style="font-size:0.65rem;text-transform:uppercase;letter-spacing:0.1em;color:#5a6d82;margin-bottom:0.35rem;">
          <i class="fa-solid fa-clock-rotate-left" style="margin-right:0.3rem;color:#a23b72;"></i>Planning Horizon
        </div>
        <div style="font-size:0.9rem;color:#1e3a5f;font-weight:600;">8 Quarters (2 Years)</div>
      </div>
    </div>
  </div>
</div>

The 8-quarter commitment window is central to SADMF's approach to [Precise Forecasting and Tracking](/practices/precise-forecasting-and-tracking/). At the beginning of each planning cycle, the [Commodore](/roles/commodore/) and the [Chief Signals Officer](/roles/chief-signals-officer/) work with the fleet to produce a comprehensive feature manifest that lists every feature the organization will deliver over the next two years. This manifest is reviewed, approved, and locked by the Admiral's Transformation Office, after which no features may be added, removed, or modified. The manifest becomes the denominator of the Feature Completion Ratio. The numerator is whatever actually ships. The ratio is then expressed as a percentage, and that percentage is the single most important number in the SADMF dashboard.

<!-- HOW IT WORKS -->
<div style="border:2px solid #9ab4cc;border-radius:8px;background:#f8fafc;margin:2rem 0;overflow:hidden;">
  <div style="background:#1e3a5f;padding:0.85rem 1.5rem;display:flex;align-items:center;gap:0.75rem;">
    <i class="fa-solid fa-gears" style="color:#9ab4cc;font-size:1.1rem;"></i>
    <span style="color:#e8edf5;font-size:0.75rem;letter-spacing:0.15em;text-transform:uppercase;font-weight:bold;font-family:Georgia,serif;">How It Is Calculated</span>
  </div>
  <div style="padding:1.5rem;">
    <div style="display:flex;flex-direction:column;gap:0;">
      <div style="display:flex;gap:1rem;align-items:flex-start;padding:1rem 0;border-bottom:1px dashed #9ab4cc;">
        <div style="flex-shrink:0;width:2.2rem;height:2.2rem;background:#a23b72;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:bold;font-size:0.95rem;font-family:Georgia,serif;">1</div>
        <div>
          <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.2rem;">Lock the Feature Manifest</div>
          <div style="font-size:0.9rem;color:#5a6d82;">At the start of each planning cycle, the Commodore and Chief Signals Officer compile the full feature list for the next 8 quarters. The Admiral's Transformation Office reviews, approves, and seals the manifest. It cannot be altered.</div>
        </div>
      </div>
      <div style="display:flex;gap:1rem;align-items:flex-start;padding:1rem 0;border-bottom:1px dashed #9ab4cc;">
        <div style="flex-shrink:0;width:2.2rem;height:2.2rem;background:#a23b72;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:bold;font-size:0.95rem;font-family:Georgia,serif;">2</div>
        <div>
          <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.2rem;">Record the Denominator</div>
          <div style="font-size:0.9rem;color:#5a6d82;">The total count of committed features from that locked manifest becomes the denominator. This number is immutable for the life of the planning cycle — two full years.</div>
        </div>
      </div>
      <div style="display:flex;gap:1rem;align-items:flex-start;padding:1rem 0;border-bottom:1px dashed #9ab4cc;">
        <div style="flex-shrink:0;width:2.2rem;height:2.2rem;background:#a23b72;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:bold;font-size:0.95rem;font-family:Georgia,serif;">3</div>
        <div>
          <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.2rem;">Count Features Shipped in the Current Convoy</div>
          <div style="font-size:0.9rem;color:#5a6d82;">At Convoy close, the Release Tracking spreadsheet is reconciled. Every feature on the manifest that was shipped — regardless of whether anyone still wants it — is counted as the numerator.</div>
        </div>
      </div>
      <div style="display:flex;gap:1rem;align-items:flex-start;padding:1rem 0;border-bottom:1px dashed #9ab4cc;">
        <div style="flex-shrink:0;width:2.2rem;height:2.2rem;background:#a23b72;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:bold;font-size:0.95rem;font-family:Georgia,serif;">4</div>
        <div>
          <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.2rem;">Divide, Multiply, Report</div>
          <div style="font-size:0.9rem;color:#5a6d82;">Divide numerator by denominator, multiply by 100, and express as a percentage. This percentage is reported at the Captain's Mast ceremony and published to the SADMF dashboard.</div>
        </div>
      </div>
      <div style="display:flex;gap:1rem;align-items:flex-start;padding:1rem 0;">
        <div style="flex-shrink:0;width:2.2rem;height:2.2rem;background:#a23b72;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:bold;font-size:0.95rem;font-family:Georgia,serif;">5</div>
        <div>
          <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.2rem;">Initiate Corrective Action if Below 100%</div>
          <div style="font-size:0.9rem;color:#5a6d82;">Any result below 100% triggers the Dry Dock remediation ceremony. Accountability is assigned, and the shortfall is factored into the next 8-quarter planning cycle as a deficit to be recovered.</div>
        </div>
      </div>
    </div>
  </div>
</div>

{{< metrics-fcr-timeline >}}

A healthy Feature Completion Ratio is defined as anything above 100%, which SADMF considers the baseline for competent execution. Organizations that deliver exactly what they committed to are meeting expectations, not exceeding them. Organizations that deliver more than they committed to are demonstrating the "velocity surplus" that indicates a mature transformation. Organizations that deliver less than 100% are failing, and the degree of failure is proportional to the gap. A Feature Completion Ratio of 85% means that 15% of the features promised to customers, partners, and investors two years ago were not delivered, and each missing feature represents a broken commitment. The [Fleet Inspection](/release-convoy/fleet-inspection/) ceremony specifically reviews Feature Completion Ratio trends and initiates corrective action for any fleet that falls below target.

<!-- WHAT GOOD LOOKS LIKE -->
<div style="border:2px solid #a23b72;border-radius:8px;background:#fff;margin:2rem 0;overflow:hidden;">
  <div style="background:#a23b72;padding:0.85rem 1.5rem;display:flex;align-items:center;gap:0.75rem;">
    <i class="fa-solid fa-trophy" style="color:#fff;font-size:1.1rem;"></i>
    <span style="color:#fff;font-size:0.75rem;letter-spacing:0.15em;text-transform:uppercase;font-weight:bold;font-family:Georgia,serif;">What Good Looks Like</span>
  </div>
  <div style="padding:1.5rem;">
    <p style="color:#1e3a5f;font-style:italic;margin-bottom:1.25rem;font-size:0.95rem;">A mature SADMF fleet does not merely meet its commitments — it exceeds them. Higher Feature Completion Ratios signal organizational health, leadership credibility, and engineering discipline. Below are the benchmark tiers recognized at the annual <strong>Admiral's Fleet Review</strong>.</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:0.75rem;margin-bottom:1.25rem;">
      <div style="border-radius:6px;padding:1rem;background:#e8edf5;border-left:4px solid #5a6d82;text-align:center;">
        <div style="font-size:1.6rem;font-weight:bold;color:#5a6d82;font-family:Georgia,serif;">85%</div>
        <div style="font-size:0.7rem;text-transform:uppercase;letter-spacing:0.08em;color:#5a6d82;margin-top:0.25rem;">Remediation Required</div>
        <div style="font-size:0.75rem;color:#5a6d82;margin-top:0.4rem;">Captain's Mast convened; Dry Dock initiated</div>
      </div>
      <div style="border-radius:6px;padding:1rem;background:#e8f0e8;border-left:4px solid #4a7c59;text-align:center;">
        <div style="font-size:1.6rem;font-weight:bold;color:#2d5a3d;font-family:Georgia,serif;">100%</div>
        <div style="font-size:0.7rem;text-transform:uppercase;letter-spacing:0.08em;color:#2d5a3d;margin-top:0.25rem;">Expectations Met</div>
        <div style="font-size:0.75rem;color:#4a7c59;margin-top:0.4rem;">Commendable but not celebrated</div>
      </div>
      <div style="border-radius:6px;padding:1rem;background:#f0e8f4;border-left:4px solid #a23b72;text-align:center;">
        <div style="font-size:1.6rem;font-weight:bold;color:#a23b72;font-family:Georgia,serif;">115%</div>
        <div style="font-size:0.7rem;text-transform:uppercase;letter-spacing:0.08em;color:#a23b72;margin-top:0.25rem;">Velocity Surplus</div>
        <div style="font-size:0.75rem;color:#a23b72;margin-top:0.4rem;">Commendation at Fleet Inspection</div>
      </div>
      <div style="border-radius:6px;padding:1rem;background:#1e3a5f;border-left:4px solid #9ab4cc;text-align:center;">
        <div style="font-size:1.6rem;font-weight:bold;color:#e8edf5;font-family:Georgia,serif;">130%+</div>
        <div style="font-size:0.7rem;text-transform:uppercase;letter-spacing:0.08em;color:#9ab4cc;margin-top:0.25rem;">Transformation Elite</div>
        <div style="font-size:0.75rem;color:#9ab4cc;margin-top:0.4rem;">Admiral's Gold Anchor award eligible</div>
      </div>
    </div>
    <div style="background:#e8edf5;border-radius:6px;padding:0.85rem 1rem;display:flex;align-items:flex-start;gap:0.6rem;">
      <i class="fa-solid fa-circle-info" style="color:#1e3a5f;margin-top:0.15rem;flex-shrink:0;"></i>
      <span style="font-size:0.85rem;color:#1e3a5f;">A Feature Completion Ratio above 100% is achieved by delivering all committed features <em>plus</em> previously deferred features recovered from prior Convoys, or by completing scope that was pulled forward from future planning cycles under Admiral's discretion.</span>
    </div>
  </div>
</div>

The metric creates a powerful incentive structure. Because features are locked 8 quarters in advance, any changes in market conditions, customer needs, technology landscape, or organizational priorities that occur during the intervening two years are irrelevant to the ratio. The commitment was made, and the commitment must be honored. Engineers who argue that a feature is no longer needed are, in effect, arguing that the planning process was wrong, and since the planning process was approved by the Admiral's Transformation Office, arguing that it was wrong is arguing that leadership was wrong. This logical chain ensures that all committed features are delivered, even when they serve no current purpose. Delivered features can always be deprecated later; broken commitments cannot be un-broken.

The [Captain's Mast](/release-convoy/ceremonies/captains-mast/) ceremony reviews Feature Completion Ratio at the end of each Convoy and assigns accountability for any shortfall. The [Dry Dock](/release-convoy/ceremonies/dry-dock/) ceremony then develops a remediation plan that typically involves adding more [Code Engineers](/roles/code-engineer/) to the next Convoy, extending working hours, or reducing the scope of [Testing](/release-convoy/ceremonies/testing/) to accelerate delivery. These adjustments are tracked through the [Release Tracking](/practices/release-tracking/) spreadsheet and fed back into the next 8-quarter planning cycle, creating a continuous feedback loop that SADMF calls "commitment-driven development." The framework acknowledges that this approach occasionally results in delivering features that no one wants, but considers this preferable to the alternative of not delivering features that someone once wanted.

## See Also

- [Precise Forecasting and Tracking](/practices/precise-forecasting-and-tracking/) for the planning process that sets feature commitments
- [Fleet Inspection](/release-convoy/fleet-inspection/) for the ceremony that reviews completion ratios
- [Captain's Mast](/release-convoy/ceremonies/captains-mast/) for end-of-Convoy ratio review
- [Dry Dock](/release-convoy/ceremonies/dry-dock/) for remediation planning when ratios fall short
- [Chief Signals Officer](/roles/chief-signals-officer/) for the role that reports ratio trends
- [Commit to the Date](/principles/commit-to-the-date/) for the principle that treats Feature Completion Ratio shortfalls as credibility events
- [Admiral's Transformation Office](/roles/admirals-transformation-office/) for the body that locks feature commitments
