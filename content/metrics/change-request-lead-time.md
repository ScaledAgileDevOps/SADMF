---
title: "Change Request Lead Time"
linkTitle: "Change Request Lead Time"
type: docs
description: "The elapsed time between change initiation and CRAP approval, the definitive measure of an organization's planning maturity and governance discipline!"
weight: 11
tags: ["measurement", "reporting", "governance"]
---

Change Request Lead Time measures the number of calendar days elapsed between the moment a change record is opened in the enterprise change management platform and the moment the [Change Rejection or Acceptance Party (CRAP)]({{< relref "/roles/governance/change-rejection-or-acceptance-party/" >}}) renders a unanimous approval decision. It is the most direct measure of an organization's planning maturity available to SADMF practitioners. A long lead time does not indicate a slow process; it indicates a team that plans far enough ahead to allow the governance process to function as designed. A short lead time indicates a team that is reacting rather than planning, and whose changes are therefore arriving at the [Change Adjudication Convening]({{< relref "/release-convoy/ceremonies/change-adjudication-convening/" >}}) without the preparation they deserve.

<!-- STAT HERO -->
<div style="background:#242627;border-radius:8px;padding:2rem 2rem 1.5rem;margin:2rem 0;color:#fff;position:relative;overflow:hidden">
  <div style="position:absolute;top:0;right:0;width:200px;height:100%;background:linear-gradient(135deg,transparent 60%,rgba(162,59,114,0.18) 100%);pointer-events:none"></div>
  <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:1.2rem">
    <i class="fa-solid fa-hourglass-half" style="color:#a23b72;font-size:1.1rem"></i>
    <span style="font-size:0.7rem;letter-spacing:0.18em;text-transform:uppercase;color:#9ab4cc;font-weight:600">SADMF Metric — Planning Maturity</span>
  </div>
  <div style="font-size:2rem;font-weight:800;letter-spacing:-0.02em;line-height:1.1;margin-bottom:1.5rem">Change Request Lead Time</div>
  <div style="background:#1a1c1d;border:1px solid #3a3d3f;border-radius:6px;padding:1rem 1.25rem;margin-bottom:1.5rem;font-family:monospace;font-size:1.05rem;color:#e8edf5;letter-spacing:0.02em">
    <span style="color:#9ab4cc;font-size:0.8rem;display:block;margin-bottom:0.4rem">FORMULA</span>
    CRLT = Date of CRAP Approval &minus; Date of Change Record Creation
  </div>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:1rem">
    <div style="background:#1a1c1d;border:1px solid #3a3d3f;border-radius:6px;padding:0.85rem 1rem">
      <div style="font-size:0.65rem;letter-spacing:0.14em;text-transform:uppercase;color:#9ab4cc;margin-bottom:0.35rem">Owner Role</div>
      <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.9rem;font-weight:600">
        <i class="fa-solid fa-satellite-dish" style="color:#a23b72;font-size:0.85rem"></i>
        Chief Signals Officer
      </div>
    </div>
    <div style="background:#1a1c1d;border:1px solid #3a3d3f;border-radius:6px;padding:0.85rem 1rem">
      <div style="font-size:0.65rem;letter-spacing:0.14em;text-transform:uppercase;color:#9ab4cc;margin-bottom:0.35rem">Cadence</div>
      <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.9rem;font-weight:600">
        <i class="fa-solid fa-clock-rotate-left" style="color:#a23b72;font-size:0.85rem"></i>
        Per Convoy Cycle
      </div>
    </div>
    <div style="background:#1a1c1d;border:1px solid #3a3d3f;border-radius:6px;padding:0.85rem 1rem">
      <div style="font-size:0.65rem;letter-spacing:0.14em;text-transform:uppercase;color:#9ab4cc;margin-bottom:0.35rem">Minimum Target</div>
      <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.9rem;font-weight:600">
        <i class="fa-solid fa-flag" style="color:#a23b72;font-size:0.85rem"></i>
        5 Calendar Days
      </div>
    </div>
    <div style="background:#1a1c1d;border:1px solid #3a3d3f;border-radius:6px;padding:0.85rem 1rem">
      <div style="font-size:0.65rem;letter-spacing:0.14em;text-transform:uppercase;color:#9ab4cc;margin-bottom:0.35rem">Excellence Target</div>
      <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.9rem;font-weight:600">
        <i class="fa-solid fa-trophy" style="color:#a23b72;font-size:0.85rem"></i>
        30 Calendar Days
      </div>
    </div>
  </div>
</div>

<!-- HOW IT WORKS -->
<div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:8px;padding:1.75rem 2rem;margin:1.75rem 0">
  <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:1.4rem">
    <i class="fa-solid fa-list-ol" style="color:#1e3a5f;font-size:1rem"></i>
    <span style="font-size:0.7rem;letter-spacing:0.16em;text-transform:uppercase;color:#1e3a5f;font-weight:700">How Lead Time Is Measured</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:0">
    <div style="display:flex;gap:1.25rem;align-items:flex-start">
      <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">
        <div style="width:2rem;height:2rem;border-radius:50%;background:#1e3a5f;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;flex-shrink:0">1</div>
        <div style="width:2px;height:1.5rem;background:#9ab4cc;margin-top:0.15rem"></div>
      </div>
      <div style="padding-bottom:1.25rem">
        <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.2rem">Change Record Opened</div>
        <div style="font-size:0.9rem;color:#2c4a6e;line-height:1.5">The timestamp of change record creation in the enterprise change management platform is the official start of the lead time clock. Records opened at the moment of code completion receive no favourable treatment; they are simply late.</div>
      </div>
    </div>
    <div style="display:flex;gap:1.25rem;align-items:flex-start">
      <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">
        <div style="width:2rem;height:2rem;border-radius:50%;background:#1e3a5f;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;flex-shrink:0">2</div>
        <div style="width:2px;height:1.5rem;background:#9ab4cc;margin-top:0.15rem"></div>
      </div>
      <div style="padding-bottom:1.25rem">
        <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.2rem">Signature Protocol Completed</div>
        <div style="font-size:0.9rem;color:#2c4a6e;line-height:1.5">The <a href="/release-convoy/ceremonies/change-adjudication-convening/#integrated-record-and-signature-protocol">Integrated Record and Signature Protocol</a> must be completed, including all verification cycles. Each failed verification round that requires a new approval circuit is included in the lead time. Teams that plan ahead allow sufficient time for multiple verification attempts without approaching the submission deadline.</div>
      </div>
    </div>
    <div style="display:flex;gap:1.25rem;align-items:flex-start">
      <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">
        <div style="width:2rem;height:2rem;border-radius:50%;background:#1e3a5f;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;flex-shrink:0">3</div>
        <div style="width:2px;height:1.5rem;background:#9ab4cc;margin-top:0.15rem"></div>
      </div>
      <div style="padding-bottom:1.25rem">
        <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.2rem">Convening Session Attended</div>
        <div style="font-size:0.9rem;color:#2c4a6e;line-height:1.5">Changes placed on the Convening agenda are reviewed in submission order. A change submitted two days before the agenda cutoff and approved at that session will have a shorter lead time than one submitted at the same cutoff but deferred. Neither outcome reflects poorly on the CRAP; both reflect directly on the submitting team's planning horizon.</div>
      </div>
    </div>
    <div style="display:flex;gap:1.25rem;align-items:flex-start">
      <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">
        <div style="width:2rem;height:2rem;border-radius:50%;background:#a23b72;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;flex-shrink:0">4</div>
      </div>
      <div style="padding-bottom:0.25rem">
        <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.2rem">CRAP Approval Recorded</div>
        <div style="font-size:0.9rem;color:#2c4a6e;line-height:1.5">The moment unanimous approval is recorded in the meeting minutes, the clock stops. The <a href="/roles/chief-signals-officer/">Chief Signals Officer</a> collects lead times from all approved changes at the close of each Convoy cycle and publishes the Lead Time Distribution Report.</div>
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
  <p style="margin:0 0 0.6rem;font-weight:600;color:#242627">A planning-mature team opens change records at the start of feature work, not at the end, achieving lead times that reflect genuine organizational foresight.</p>
  <ul style="margin:0;padding-left:1.25rem;color:#444;font-size:0.95rem;line-height:1.8">
    <li>A minimum lead time of <strong>5 calendar days</strong> is required for any change to be considered planned. Changes falling below this threshold are flagged as reactive and recorded in the team's planning maturity profile</li>
    <li>The <strong>preferred lead time target is 30 calendar days</strong>, reflecting a team that has committed to a change before the work begins rather than after it concludes</li>
    <li>Teams whose median lead time meets or exceeds 30 days across a full Convoy cycle receive a <strong>Planning Excellence commendation</strong> from the Admiral's Transformation Office, awarded at the quarterly all-hands</li>
    <li>Teams sustaining a 30-day median across three consecutive Convoys are recognized with the <strong>Sustained Foresight Award</strong> and receive priority placement on the CRAP agenda for the following Convoy cycle</li>
  </ul>
</div>

The 5-day floor exists because the [Integrated Record and Signature Protocol]({{< relref "/release-convoy/ceremonies/change-adjudication-convening/#integrated-record-and-signature-protocol" >}}) cannot physically complete in fewer than five days under normal operating conditions. Signature collection, transmission, verification, and archival each require time that cannot be compressed without compromising integrity. A change with a lead time below five days has either bypassed a step in the protocol or benefited from a coincidence of circumstances that cannot be relied upon. Neither constitutes a repeatable process, and the SADMF does not recognize sub-five-day lead times as evidence of process efficiency.

The 30-day target requires teams to plan the shape of a change before they begin implementing it. Critics of this standard argue that requirements evolve during development, making early change records inaccurate by the time approval is sought. The SADMF views this objection as evidence that the team is beginning work before requirements are sufficiently stable, which is itself a planning maturity failure. A team that cannot describe a change 30 days before it is complete is a team that started coding too soon.

## The Lead Time Distribution Report

At the close of each Convoy cycle, the [Chief Signals Officer]({{< relref "/roles/leadership/chief-signals-officer/" >}}) publishes the Lead Time Distribution Report, which displays every approved change from that cycle ranked by lead time, alongside the submitting team and the number of signature verification rounds required. The report is distributed to all [Feature Captains]({{< relref "/roles/engineering/feature-captain/" >}}), the [Commodore]({{< relref "/roles/leadership/commodore/" >}}), and the [Admiral's Transformation Office]({{< relref "/roles/leadership/admirals-transformation-office/" >}}).

Teams with lead times below 5 days are referred for a planning maturity review. Teams with lead times between 5 and 29 days are noted as compliant but not commended. Teams achieving the 30-day target are identified for recognition. The distribution of lead times across the organization is one of the most reliable indicators of whether the SADMF adoption effort is driving genuine behavioural change or merely producing documentation that post-dates the work it describes.

## See Also

- [Change Adjudication Convening]({{< relref "/release-convoy/ceremonies/change-adjudication-convening/" >}}) for the ceremony where changes are approved and lead time ends
- [Change Rejection or Acceptance Party (CRAP)]({{< relref "/roles/governance/change-rejection-or-acceptance-party/" >}}) for the body whose approval closes the lead time window
- [Chief Signals Officer]({{< relref "/roles/leadership/chief-signals-officer/" >}}) for the role that produces the Lead Time Distribution Report
- [Precise Forecasting and Tracking]({{< relref "/practices/planning/precise-forecasting-and-tracking/" >}}) for the planning practice that enables long lead times
- [Commit to the Date]({{< relref "/principles/commit-to-the-date/" >}}) for the principle that necessitates early change initiation
- [SADMF Maturity Score]({{< relref "/metrics/sadmf-maturity-score/" >}}) for the composite score that incorporates planning maturity indicators
