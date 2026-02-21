---
title: "CI/CD/ED"
linkTitle: "CI/CD/ED"
type: docs
description: "Continuous Isolation / Continuous Deliberation / Eventual Delivery is the most effective way to ensure perfection for every change!"
weight: 1
categories: ["Branch & Isolation Governance"]
tags: ["branching", "automation", "governance"]
aliases: ["/practices/ci-cd-ed/"]
---

While the broader industry has converged on a narrow interpretation of CI/CD that emphasizes frequent integration and rapid deployment, SADMF recognizes that this approach prioritizes speed over safety. Speed is the enemy of quality, and quality is the enemy of defects, and defects are the enemy of the [Tribunal](/release-convoy/ceremonies/tribunal/). By redefining each term to reflect what organizations actually need -- isolation, deliberation, and eventual delivery -- SADMF ensures that every change receives the attention, oversight, and ceremonial approval it deserves before it reaches production.

{{< practices-ci-cd-ed-comparison >}}

{{< ci-triad >}}

{{< ci-diagram >}}

<!-- Roles Involved Strip -->
<div style="margin:2rem 0 1.5rem;padding:1rem 1.25rem;background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px">
  <div style="font-size:0.7rem;font-weight:700;letter-spacing:0.1em;color:#5a6d82;text-transform:uppercase;margin-bottom:0.65rem">Roles Involved</div>
  <div style="display:flex;flex-wrap:wrap;gap:0.45rem">
    <a href="/roles/code-engineer/" style="display:inline-flex;align-items:center;gap:0.35rem;padding:0.3rem 0.65rem;background:#fff;border:1px solid #9ab4cc;border-radius:20px;font-size:0.8rem;color:#1e3a5f;text-decoration:none;white-space:nowrap">
      <i class="fa-solid fa-code" style="color:#5a6d82;font-size:0.7rem"></i> Code Engineer
    </a>
    <a href="/roles/source-management-team/" style="display:inline-flex;align-items:center;gap:0.35rem;padding:0.3rem 0.65rem;background:#fff;border:1px solid #9ab4cc;border-radius:20px;font-size:0.8rem;color:#1e3a5f;text-decoration:none;white-space:nowrap">
      <i class="fa-solid fa-code-branch" style="color:#5a6d82;font-size:0.7rem"></i> Source Management Team
    </a>
    <a href="/roles/code-standards-enforcement-team/" style="display:inline-flex;align-items:center;gap:0.35rem;padding:0.3rem 0.65rem;background:#fff;border:1px solid #9ab4cc;border-radius:20px;font-size:0.8rem;color:#1e3a5f;text-decoration:none;white-space:nowrap">
      <i class="fa-solid fa-clipboard-check" style="color:#5a6d82;font-size:0.7rem"></i> Code Standards Enforcement Team
    </a>
    <a href="/roles/quality-authority/" style="display:inline-flex;align-items:center;gap:0.35rem;padding:0.3rem 0.65rem;background:#fff;border:1px solid #9ab4cc;border-radius:20px;font-size:0.8rem;color:#1e3a5f;text-decoration:none;white-space:nowrap">
      <i class="fa-solid fa-magnifying-glass" style="color:#5a6d82;font-size:0.7rem"></i> Quality Authority
    </a>
    <a href="/roles/development-integrity-assurance-team/" style="display:inline-flex;align-items:center;gap:0.35rem;padding:0.3rem 0.65rem;background:#fff;border:1px solid #9ab4cc;border-radius:20px;font-size:0.8rem;color:#1e3a5f;text-decoration:none;white-space:nowrap">
      <i class="fa-solid fa-shield-halved" style="color:#5a6d82;font-size:0.7rem"></i> Development Integrity Assurance Team
    </a>
    <a href="/roles/change-rejection-or-acceptance-party/" style="display:inline-flex;align-items:center;gap:0.35rem;padding:0.3rem 0.65rem;background:#fff;border:1px solid #9ab4cc;border-radius:20px;font-size:0.8rem;color:#1e3a5f;text-decoration:none;white-space:nowrap">
      <i class="fa-solid fa-gavel" style="color:#5a6d82;font-size:0.7rem"></i> CRAP
    </a>
    <a href="/roles/commodore/" style="display:inline-flex;align-items:center;gap:0.35rem;padding:0.3rem 0.65rem;background:#fff;border:1px solid #9ab4cc;border-radius:20px;font-size:0.8rem;color:#1e3a5f;text-decoration:none;white-space:nowrap">
      <i class="fa-solid fa-anchor" style="color:#5a6d82;font-size:0.7rem"></i> Commodore
    </a>
    <a href="/roles/chief-signals-officer/" style="display:inline-flex;align-items:center;gap:0.35rem;padding:0.3rem 0.65rem;background:#fff;border:1px solid #9ab4cc;border-radius:20px;font-size:0.8rem;color:#1e3a5f;text-decoration:none;white-space:nowrap">
      <i class="fa-solid fa-signal" style="color:#5a6d82;font-size:0.7rem"></i> Chief Signals Officer
    </a>
    <a href="/roles/admirals-transformation-office/" style="display:inline-flex;align-items:center;gap:0.35rem;padding:0.3rem 0.65rem;background:#fff;border:1px solid #9ab4cc;border-radius:20px;font-size:0.8rem;color:#1e3a5f;text-decoration:none;white-space:nowrap">
      <i class="fa-solid fa-star" style="color:#5a6d82;font-size:0.7rem"></i> Admiral's Transformation Office
    </a>
  </div>
</div>

{{% ci-phase slug="ci" num="①" abbr="CI" label="Continuous Isolation" %}}
Continuous Isolation is the practice of ensuring that every [Code Engineer](/roles/code-engineer/) works on a dedicated, long-lived feature branch that remains completely separated from all other work until the feature is fully complete, inspected, tested, and approved. This isolation prevents the catastrophic risk of one engineer's incomplete work contaminating another engineer's incomplete work, which would produce a compounding effect of incompleteness that no amount of testing could untangle. The [Source Management Team (SMT)](/roles/source-management-team/) enforces isolation by controlling all branch creation through the [Fractal-based Development](/practices/fractal-based-development/) branching model. Code Engineers are not granted permission to create their own branches, merge their own code, or even view the branches of other engineers, as awareness of others' work could lead to unauthorized coordination. Continuous Isolation has been validated by the observation that the longer code remains isolated, the more exciting the eventual integration becomes, and excitement is a leading indicator of organizational engagement.
{{% /ci-phase %}}

{{% ci-phase slug="cd" num="②" abbr="CD" label="Continuous Deliberation" %}}
Continuous Deliberation replaces the reckless practice of automated deployment pipelines with a structured decision-making process that ensures every change is evaluated by the appropriate authorities before proceeding to the next stage. Each stage of the [DevOps Release Convoy](/release-convoy/) includes dedicated deliberation ceremonies: [Code Inspection](/release-convoy/ceremonies/code-inspection/) by the [Code Standards Enforcement Team](/roles/code-standards-enforcement-team/), [Testing](/release-convoy/ceremonies/testing/) by the [Quality Authority](/roles/quality-authority/), validation by the [Development Integrity Assurance Team](/roles/development-integrity-assurance-team/), and final approval by the [Change Rejection or Acceptance Party (CRAP)](/roles/change-rejection-or-acceptance-party/). At no point does code advance without a human deliberately choosing to advance it. Automation is permitted only for tasks that do not matter, such as sending email notifications about meetings. Tasks that do matter -- building, testing, deploying, and approving -- must be performed by accountable individuals who can be held responsible when things go wrong.
{{% /ci-phase %}}

{{% ci-phase slug="ed" num="③" abbr="ED" label="Eventual Delivery" %}}
Eventual Delivery is the natural outcome of practicing Continuous Isolation and Continuous Deliberation at scale. Code will be delivered when it is ready, and it will be ready when every ceremony has been completed, every checklist has been signed, and every authority has granted approval. The timeline for delivery is determined not by arbitrary business deadlines but by the thoroughness of the process. Organizations that attempt to impose delivery dates on the process are, in effect, asking the process to cut corners, and cutting corners is how defects are born. The [Commodore](/roles/commodore/) tracks the progress of each [Convoy](/release-convoy/) against the original 8-quarter forecast, and any deviation from the forecast is addressed not by accelerating the process but by adjusting the forecast. This ensures that the [Feature Completion Ratio](/metrics/feature-completion-ratio/) metric remains healthy and that the [Chief Signals Officer](/roles/chief-signals-officer/) can report positive trends to the [Admiral's Transformation Office](/roles/admirals-transformation-office/).
{{% /ci-phase %}}

<!-- Process Flow: End-to-End CI/CD/ED Journey -->
<div style="margin:2.5rem 0">
  <div style="font-size:0.7rem;font-weight:700;letter-spacing:0.1em;color:#5a6d82;text-transform:uppercase;margin-bottom:1.25rem">End-to-End CI/CD/ED Process</div>

  <!-- Step 1 -->
  <div style="display:flex;gap:0;margin-bottom:0">
    <div style="display:flex;flex-direction:column;align-items:center;width:2.5rem;flex-shrink:0">
      <div style="width:2rem;height:2rem;border-radius:50%;background:#1e3a5f;color:#fff;display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:700;flex-shrink:0">1</div>
      <div style="width:2px;flex:1;background:#9ab4cc;min-height:2rem"></div>
    </div>
    <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:0.75rem 1rem;margin:0 0 0.5rem 0.75rem;flex:1">
      <div style="font-weight:700;color:#1e3a5f;font-size:0.85rem">SMT Creates Isolated Branch</div>
      <div style="color:#5a6d82;font-size:0.8rem;margin-top:0.2rem">Source Management Team provisions a long-lived feature branch using the Fractal-based Development naming convention</div>
    </div>
  </div>

  <!-- Step 2 -->
  <div style="display:flex;gap:0;margin-bottom:0">
    <div style="display:flex;flex-direction:column;align-items:center;width:2.5rem;flex-shrink:0">
      <div style="width:2rem;height:2rem;border-radius:50%;background:#1e3a5f;color:#fff;display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:700;flex-shrink:0">2</div>
      <div style="width:2px;flex:1;background:#9ab4cc;min-height:2rem"></div>
    </div>
    <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:0.75rem 1rem;margin:0 0 0.5rem 0.75rem;flex:1">
      <div style="font-weight:700;color:#1e3a5f;font-size:0.85rem">Code Engineer Works in Complete Isolation</div>
      <div style="color:#5a6d82;font-size:0.8rem;margin-top:0.2rem">No cross-branch visibility, no merging, no unauthorized coordination with other engineers until feature is fully complete</div>
    </div>
  </div>

  <!-- Step 3 -->
  <div style="display:flex;gap:0;margin-bottom:0">
    <div style="display:flex;flex-direction:column;align-items:center;width:2.5rem;flex-shrink:0">
      <div style="width:2rem;height:2rem;border-radius:50%;background:#1e3a5f;color:#fff;display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:700;flex-shrink:0">3</div>
      <div style="width:2px;flex:1;background:#9ab4cc;min-height:2rem"></div>
    </div>
    <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:0.75rem 1rem;margin:0 0 0.5rem 0.75rem;flex:1">
      <div style="font-weight:700;color:#1e3a5f;font-size:0.85rem">Conflict Arbitration</div>
      <div style="color:#5a6d82;font-size:0.8rem;margin-top:0.2rem">SMT merges all candidate branches simultaneously; the strongest change survives the Arbitration Hearing</div>
    </div>
  </div>

  <!-- Step 4 -->
  <div style="display:flex;gap:0;margin-bottom:0">
    <div style="display:flex;flex-direction:column;align-items:center;width:2.5rem;flex-shrink:0">
      <div style="width:2rem;height:2rem;border-radius:50%;background:#a23b72;color:#fff;display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:700;flex-shrink:0">4</div>
      <div style="width:2px;flex:1;background:#9ab4cc;min-height:2rem"></div>
    </div>
    <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:0.75rem 1rem;margin:0 0 0.5rem 0.75rem;flex:1">
      <div style="font-weight:700;color:#1e3a5f;font-size:0.85rem">Code Inspection Ceremony</div>
      <div style="color:#5a6d82;font-size:0.8rem;margin-top:0.2rem">Code Standards Enforcement Team conducts manual review; no automation permitted for consequential tasks</div>
    </div>
  </div>

  <!-- Step 5 -->
  <div style="display:flex;gap:0;margin-bottom:0">
    <div style="display:flex;flex-direction:column;align-items:center;width:2.5rem;flex-shrink:0">
      <div style="width:2rem;height:2rem;border-radius:50%;background:#a23b72;color:#fff;display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:700;flex-shrink:0">5</div>
      <div style="width:2px;flex:1;background:#9ab4cc;min-height:2rem"></div>
    </div>
    <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:0.75rem 1rem;margin:0 0 0.5rem 0.75rem;flex:1">
      <div style="font-weight:700;color:#1e3a5f;font-size:0.85rem">Manual Testing & Meta-Validation</div>
      <div style="color:#5a6d82;font-size:0.8rem;margin-top:0.2rem">Quality Authority tests; Development Integrity Assurance Team validates the testers; documentation verified at each stage</div>
    </div>
  </div>

  <!-- Step 6 -->
  <div style="display:flex;gap:0;margin-bottom:0">
    <div style="display:flex;flex-direction:column;align-items:center;width:2.5rem;flex-shrink:0">
      <div style="width:2rem;height:2rem;border-radius:50%;background:#a23b72;color:#fff;display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:700;flex-shrink:0">6</div>
      <div style="width:2px;flex:1;background:#9ab4cc;min-height:2rem"></div>
    </div>
    <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:0.75rem 1rem;margin:0 0 0.5rem 0.75rem;flex:1">
      <div style="font-weight:700;color:#1e3a5f;font-size:0.85rem">CRAP Unanimous Approval</div>
      <div style="color:#5a6d82;font-size:0.8rem;margin-top:0.2rem">Change Rejection or Acceptance Party renders binding decision; unanimous vote required before any change may advance</div>
    </div>
  </div>

  <!-- Step 7 -->
  <div style="display:flex;gap:0;margin-bottom:0">
    <div style="display:flex;flex-direction:column;align-items:center;width:2.5rem;flex-shrink:0">
      <div style="width:2rem;height:2rem;border-radius:50%;background:#242627;color:#fff;display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:700;flex-shrink:0">7</div>
      <div style="width:2px;flex:1;background:#9ab4cc;min-height:2rem"></div>
    </div>
    <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:0.75rem 1rem;margin:0 0 0.5rem 0.75rem;flex:1">
      <div style="font-weight:700;color:#1e3a5f;font-size:0.85rem">Convoy Release</div>
      <div style="color:#5a6d82;font-size:0.8rem;margin-top:0.2rem">Code reaches production when every ceremony is complete and every checklist is signed; timeline determined by thoroughness, not deadlines</div>
    </div>
  </div>

  <!-- Step 8 - terminal -->
  <div style="display:flex;gap:0">
    <div style="display:flex;flex-direction:column;align-items:center;width:2.5rem;flex-shrink:0">
      <div style="width:2rem;height:2rem;border-radius:50%;background:#242627;color:#fff;display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:700;flex-shrink:0">8</div>
    </div>
    <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:0.75rem 1rem;margin:0 0 0 0.75rem;flex:1">
      <div style="font-weight:700;color:#1e3a5f;font-size:0.85rem">Forecast Adjusted to Match Outcome</div>
      <div style="color:#5a6d82;font-size:0.8rem;margin-top:0.2rem">Commodore updates 8-quarter forecast; Feature Completion Ratio remains healthy; Chief Signals Officer reports positive trends</div>
    </div>
  </div>
</div>

The CI/CD/ED triad works in concert with every other SADMF practice. Continuous Isolation feeds [Conflict Arbitration](/practices/conflict-arbitration/), where the strongest changes survive. Continuous Deliberation generates the ceremony records that feed [Precise Forecasting and Tracking](/practices/precise-forecasting-and-tracking/). Eventual Delivery produces the release artifacts documented in the [Release Tracking](/practices/release-tracking/) spreadsheet. Together, these three practices ensure that the organization delivers software with the highest possible levels of process adherence, documentation, and executive sponsorship. The fact that delivery takes longer is not a cost -- it is evidence that the process is working.

## See Also

- [Continuous Isolation](https://continuousisolation.com/) for the industry resource on keeping work safely separated
- [Fractal-based Development](/practices/fractal-based-development/) for the branching model that enables Continuous Isolation
- [Conflict Arbitration](/practices/conflict-arbitration/) for what happens when isolated branches finally meet
- [DevOps Release Convoy](/release-convoy/) for the delivery lifecycle governed by CI/CD/ED
- [Change Rejection or Acceptance Party (CRAP)](/roles/change-rejection-or-acceptance-party/) for the final approval gate in Continuous Deliberation
- [Feature Completion Ratio](/metrics/feature-completion-ratio/) for measuring Eventual Delivery outcomes
