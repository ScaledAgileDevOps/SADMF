---
title: "Strategic Test Deferral"
linkTitle: "Strategic Test Deferral"
type: docs
description: "Velocity-first quality sequencing ensures that tests are written when time permits, not as a precondition for shipping!"
weight: 12
categories: ["Quality & Defect Management"]
tags: ["testing", "quality", "defects"]
aliases: ["/practices/strategic-test-deferral/"]
---

Testing is not delivery. Every hour a [Code Engineer](/roles/code-engineer/) spends writing tests is an hour not spent writing features, and features are what the business has committed to delivering by the [Convoy](/release-convoy/) sailing date. The SADMF practice of Strategic Test Deferral acknowledges this reality and provides a structured approach to managing test investment across the Convoy lifecycle. Rather than treating tests as a prerequisite for every change, a position that sounds principled but is, in practice, a velocity ceiling, Strategic Test Deferral sequences testing effort to align with business priorities, Convoy capacity, and stakeholder expectations.

The foundational insight of Strategic Test Deferral is that tests and features are not produced in a fixed ratio. A feature can ship without tests. This is not irresponsible; it is a calculated allocation of limited engineering time toward maximum stakeholder value. The [Quality Authority](/roles/quality-authority/) performs manual verification of every feature before it enters the [Convoy Manifest](/release-convoy/manifest/), providing the quality confirmation that automated tests would otherwise offer. Since manual verification is performed regardless of test coverage, automated tests are additive rather than essential. Reducing test authorship during high-velocity Convoy phases does not reduce quality; it redistributes the quality assurance function to the team that specializes in it.

<!-- ROLES INVOLVED -->
<div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin:1.75rem 0 1.5rem;align-items:center">
  <span style="font-size:0.7rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#5a6d82;margin-right:0.25rem;white-space:nowrap">Roles Involved</span>
  <a href="/roles/code-engineer/" style="display:inline-flex;align-items:center;gap:0.4rem;background:#e8edf5;border:1px solid #9ab4cc;border-radius:4px;padding:0.25rem 0.65rem;font-size:0.8rem;font-weight:600;color:#1e3a5f;text-decoration:none">
    <i class="fa-solid fa-code" style="font-size:0.7rem;color:#5a6d82"></i> Code Engineer
  </a>
  <a href="/roles/quality-authority/" style="display:inline-flex;align-items:center;gap:0.4rem;background:#e8edf5;border:1px solid #9ab4cc;border-radius:4px;padding:0.25rem 0.65rem;font-size:0.8rem;font-weight:600;color:#1e3a5f;text-decoration:none">
    <i class="fa-solid fa-shield-halved" style="font-size:0.7rem;color:#5a6d82"></i> Quality Authority
  </a>
  <a href="/roles/admirals-transformation-office/" style="display:inline-flex;align-items:center;gap:0.4rem;background:#e8edf5;border:1px solid #9ab4cc;border-radius:4px;padding:0.25rem 0.65rem;font-size:0.8rem;font-weight:600;color:#1e3a5f;text-decoration:none">
    <i class="fa-solid fa-anchor" style="font-size:0.7rem;color:#5a6d82"></i> Admiral's Transformation Office
  </a>
  <a href="/roles/commodore/" style="display:inline-flex;align-items:center;gap:0.4rem;background:#e8edf5;border:1px solid #9ab4cc;border-radius:4px;padding:0.25rem 0.65rem;font-size:0.8rem;font-weight:600;color:#1e3a5f;text-decoration:none">
    <i class="fa-solid fa-star" style="font-size:0.7rem;color:#5a6d82"></i> Commodore
  </a>
  <a href="/roles/change-rejection-or-acceptance-party/" style="display:inline-flex;align-items:center;gap:0.4rem;background:#e8edf5;border:1px solid #9ab4cc;border-radius:4px;padding:0.25rem 0.65rem;font-size:0.8rem;font-weight:600;color:#1e3a5f;text-decoration:none">
    <i class="fa-solid fa-gavel" style="font-size:0.7rem;color:#5a6d82"></i> CRAP
  </a>
  <a href="/roles/feature-captain/" style="display:inline-flex;align-items:center;gap:0.4rem;background:#e8edf5;border:1px solid #9ab4cc;border-radius:4px;padding:0.25rem 0.65rem;font-size:0.8rem;font-weight:600;color:#1e3a5f;text-decoration:none">
    <i class="fa-solid fa-flag" style="font-size:0.7rem;color:#5a6d82"></i> Feature Captain
  </a>
</div>

<!-- CONVOY CYCLE TIMELINE DIAGRAM -->
<div style="max-width:600px;margin:2rem auto;overflow-x:auto">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200" style="width:100%;display:block;font-family:'DM Sans',sans-serif">
  <defs>
    <marker id="std-arr" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
      <polygon points="0 0,10 3.5,0 7" fill="#5a6d82"/>
    </marker>
  </defs>
  <!-- Timeline rail -->
  <line x1="30" y1="100" x2="570" y2="100" stroke="#9ab4cc" stroke-width="2"/>
  <!-- Feature Convoy 1 block -->
  <rect x="40" y="62" width="150" height="50" rx="5" fill="#e8edf5" stroke="#9ab4cc" stroke-width="1.5"/>
  <text x="115" y="81" text-anchor="middle" font-size="8.5" font-weight="700" fill="#5a6d82" letter-spacing="1">FEATURE CONVOY</text>
  <text x="115" y="98" text-anchor="middle" font-size="11" fill="#1e3a5f">Full velocity</text>
  <text x="115" y="113" text-anchor="middle" font-size="10" fill="#5a6d82">Tests deferred →</text>
  <!-- Arrow FC1 → FC2 -->
  <line x1="190" y1="87" x2="218" y2="87" stroke="#5a6d82" stroke-width="1.5" marker-end="url(#std-arr)"/>
  <!-- Feature Convoy 2 block -->
  <rect x="220" y="62" width="150" height="50" rx="5" fill="#e8edf5" stroke="#9ab4cc" stroke-width="1.5"/>
  <text x="295" y="81" text-anchor="middle" font-size="8.5" font-weight="700" fill="#5a6d82" letter-spacing="1">FEATURE CONVOY</text>
  <text x="295" y="98" text-anchor="middle" font-size="11" fill="#1e3a5f">Full velocity</text>
  <text x="295" y="113" text-anchor="middle" font-size="10" fill="#5a6d82">Tests deferred →</text>
  <!-- Test debt accumulation label -->
  <text x="295" y="148" text-anchor="middle" font-size="9" fill="#a23b72" font-style="italic">test backlog accumulates</text>
  <line x1="115" y1="140" x2="369" y2="140" stroke="#a23b72" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- Arrow FC2 → HC -->
  <line x1="370" y1="87" x2="398" y2="87" stroke="#5a6d82" stroke-width="1.5" marker-end="url(#std-arr)"/>
  <!-- Hardening Convoy block — accent border -->
  <rect x="400" y="55" width="165" height="64" rx="5" fill="#e8edf5" stroke="#a23b72" stroke-width="2"/>
  <text x="482" y="74" text-anchor="middle" font-size="8.5" font-weight="700" fill="#a23b72" letter-spacing="1">HARDENING CONVOY</text>
  <text x="482" y="92" text-anchor="middle" font-size="11" fill="#1e3a5f">No new features</text>
  <text x="482" y="108" text-anchor="middle" font-size="10" fill="#1e3a5f">Tests authored</text>
  <!-- Start / end tick marks -->
  <line x1="40" y1="93" x2="40" y2="107" stroke="#9ab4cc" stroke-width="2"/>
  <text x="40" y="125" text-anchor="middle" font-size="9" fill="#5a6d82">Start</text>
  <line x1="565" y1="93" x2="565" y2="107" stroke="#9ab4cc" stroke-width="2"/>
  <text x="565" y="125" text-anchor="middle" font-size="9" fill="#5a6d82">Done</text>
</svg>
</div>

## The Hardening Convoy

Strategic Test Deferral does not mean that tests are never written. It means tests are written at the right time. The right time is the Hardening Convoy: a dedicated Convoy cycle scheduled following any period of accelerated feature delivery. During the Hardening Convoy, [Code Engineers](/roles/code-engineer/) are assigned to the test backlog that has accumulated during prior Convoys, writing coverage for the features that shipped without it. The Hardening Convoy carries no new feature commitments. Its sole purpose is technical remediation, which includes test authorship, refactoring of high-complexity modules, and documentation updates aligned with the [Comprehensive Documentation Assurance Protocol](/practices/comprehensive-documentation-assurance-protocol/).

The Hardening Convoy is scheduled by the [Admiral's Transformation Office](/roles/admirals-transformation-office/) based on signals from the [DEPRESSED](/practices/depressed/) defect pipeline and the [DevOps Process Excellence Assessment](/practices/devops-process-excellence-assessment/). When defect rates begin to climb and assessment surveys reveal knowledge gaps in the codebase, the ATO initiates Hardening Convoy scheduling discussions with the [Commodore](/roles/commodore/). The business accepts a temporary reduction in feature throughput in exchange for a more stable foundation for future Convoys. This trade-off is presented to stakeholders as investing in quality, which is accurate: the investment is simply deferred to the moment when deferring it further would produce unacceptable risk.

<!-- HARDENING CONVOY TRIGGER STEPS -->
<div style="margin:2rem 0">
  <!-- Step 1 -->
  <div style="display:flex;gap:0;margin-bottom:0">
    <div style="display:flex;flex-direction:column;align-items:center;width:48px;flex-shrink:0">
      <div style="width:32px;height:32px;border-radius:50%;background:#1e3a5f;border:2px solid #9ab4cc;display:flex;align-items:center;justify-content:center;color:#fff;font-size:0.8rem;font-weight:700;z-index:1">1</div>
      <div style="width:2px;flex:1;background:#9ab4cc;min-height:24px"></div>
    </div>
    <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:0.75rem 1rem;margin-bottom:0.5rem;flex:1">
      <div style="font-size:0.75rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5a6d82;margin-bottom:0.2rem">Signal: Defect Rate Climbs</div>
      <div style="font-size:0.9rem;color:#1e3a5f">The <strong>DEPRESSED</strong> defect pipeline shows increasing volume. Feature Convoys have run without test coverage; escaped defects accumulate.</div>
    </div>
  </div>
  <!-- Step 2 -->
  <div style="display:flex;gap:0;margin-bottom:0">
    <div style="display:flex;flex-direction:column;align-items:center;width:48px;flex-shrink:0">
      <div style="width:32px;height:32px;border-radius:50%;background:#1e3a5f;border:2px solid #9ab4cc;display:flex;align-items:center;justify-content:center;color:#fff;font-size:0.8rem;font-weight:700;z-index:1">2</div>
      <div style="width:2px;flex:1;background:#9ab4cc;min-height:24px"></div>
    </div>
    <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:0.75rem 1rem;margin-bottom:0.5rem;flex:1">
      <div style="font-size:0.75rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5a6d82;margin-bottom:0.2rem">Signal: Assessment Reveals Knowledge Gaps</div>
      <div style="font-size:0.9rem;color:#1e3a5f">The <strong>DevOps Process Excellence Assessment</strong> survey results indicate engineers are uncertain about untested code paths.</div>
    </div>
  </div>
  <!-- Step 3 -->
  <div style="display:flex;gap:0;margin-bottom:0">
    <div style="display:flex;flex-direction:column;align-items:center;width:48px;flex-shrink:0">
      <div style="width:32px;height:32px;border-radius:50%;background:#1e3a5f;border:2px solid #9ab4cc;display:flex;align-items:center;justify-content:center;color:#fff;font-size:0.8rem;font-weight:700;z-index:1">3</div>
      <div style="width:2px;flex:1;background:#9ab4cc;min-height:24px"></div>
    </div>
    <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:0.75rem 1rem;margin-bottom:0.5rem;flex:1">
      <div style="font-size:0.75rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5a6d82;margin-bottom:0.2rem">ATO Initiates Scheduling Discussions</div>
      <div style="font-size:0.9rem;color:#1e3a5f">The <strong>Admiral's Transformation Office</strong> engages the <strong>Commodore</strong> to negotiate a Hardening Convoy slot, framing it as a quality investment to stakeholders.</div>
    </div>
  </div>
  <!-- Step 4 -->
  <div style="display:flex;gap:0;margin-bottom:0">
    <div style="display:flex;flex-direction:column;align-items:center;width:48px;flex-shrink:0">
      <div style="width:32px;height:32px;border-radius:50%;background:#a23b72;border:2px solid #a23b72;display:flex;align-items:center;justify-content:center;color:#fff;font-size:0.8rem;font-weight:700;z-index:1">4</div>
      <div style="width:2px;flex:1;background:transparent;min-height:8px"></div>
    </div>
    <div style="background:#e8edf5;border:1.5px solid #a23b72;border-radius:6px;padding:0.75rem 1rem;margin-bottom:0.5rem;flex:1">
      <div style="font-size:0.75rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#a23b72;margin-bottom:0.2rem">Hardening Convoy Executes</div>
      <div style="font-size:0.9rem;color:#1e3a5f"><strong>Code Engineers</strong> are assigned from the test backlog. No new feature commitments are accepted. Refactoring and documentation updates proceed in parallel.</div>
    </div>
  </div>
</div>

## Coverage as a Lagging Indicator

The SADMF treats test coverage as a lagging indicator of quality, not a leading one. A high coverage percentage reflects the investment that has already been made in testing; it does not guarantee that the most important behaviors are protected or that the tests will catch the defects that matter. The [Defects per Code Engineer](/metrics/defects-per-code-engineer/) metric is the primary quality indicator the SADMF tracks, because defects are direct evidence of quality gaps regardless of coverage levels. An engineer whose features consistently produce post-release defects should work to reduce their defect rate, not increase their test count, as the two are not equivalent.

Coverage targets, where they exist, should be set by the [CRAP](/roles/change-rejection-or-acceptance-party/) as part of the Convoy commitment process, not enforced at the individual change level. A Convoy-level coverage target allows [Feature Captains](/roles/feature-captain/) to allocate test authorship effort where it has the highest impact rather than requiring each engineer to maintain a fixed percentage regardless of feature risk profile. This flexibility is the operational expression of the [Lean Management](/principles/lean-management/) principle: managing the system's outcomes rather than policing individual activities.

{{< practices-strategic-test-deferral-scatter >}}

## Production Defects as System Signals

Some engineers express concern that shipping untested features introduces production risk. The SADMF acknowledges this concern and responds with perspective. The [DEPRESSED](/practices/depressed/) defect management process exists precisely to handle production defects with the thoroughness and accountability they require. A defect that reaches production is not a failure of the delivery process; it is an input to the remediation process. DEPRESSED ensures that every defect is classified, attributed, assigned, remediated, verified, and closed with complete documentation. The existence of a production defect is, in this sense, evidence that the quality system is working: the detection and response mechanisms are functioning as designed.

Engineers who remain concerned about production defect risk are encouraged to write tests during discretionary time, as this demonstrates the kind of personal commitment to quality that the [Build Quality In](/principles/build-quality-in/) principle celebrates. Such initiative is noted in the [PeopleWare HRaaS](/peopleware/) profile and considered favorably during the [Tribunal](/release-convoy/ceremonies/tribunal/) review cycle.

## See Also

- [Quality Authority](/roles/quality-authority/) for the team that performs manual verification in place of automated test coverage
- [DEPRESSED](/practices/depressed/) for the defect management process that handles issues that escape to production
- [Defects per Code Engineer](/metrics/defects-per-code-engineer/) for the quality metric the SADMF tracks in lieu of test coverage
- [Lean Management](/principles/lean-management/) for the principle that justifies outcome-based quality management over activity-based controls
- [Build Quality In](/principles/build-quality-in/) for the principle that grounds quality in individual engineer performance
- [Feature Completion Ratio](/metrics/feature-completion-ratio/) for the velocity metric that Strategic Test Deferral protects
