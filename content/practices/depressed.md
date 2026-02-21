---
title: "DEPRESSED"
linkTitle: "DEPRESSED"
type: docs
description: "The Defect Escalation and Progressive Remediation Enforcement System for Sustained Excellence and Delivery ensures every defect receives the thorough, multi-stage treatment it deserves!"
weight: 10
categories: ["Quality & Defect Management"]
tags: ["defects", "quality", "compliance", "testing"]
---

Other frameworks treat defect management as a simple triage process -- find the bug, fix the bug, move on. SADMF recognizes that defects are organizational events that require organizational responses. A defect is not merely broken code; it is evidence of a process failure, a training gap, a supervision lapse, or all three. The seven stages of DEPRESSED ensure that every defect is investigated with the rigor it demands and that the remediation addresses not just the symptom but the systemic conditions that allowed the defect to exist.

<div style="max-width:500px;margin:2rem auto;overflow-x:auto">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 800" style="width:100%;display:block;font-family:'DM Sans',sans-serif">
  <defs>
    <marker id="dep-arr" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
      <polygon points="0 0,10 3.5,0 7" fill="#5a6d82"/>
    </marker>
    <marker id="dep-arr-rej" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
      <polygon points="0 0,10 3.5,0 7" fill="#a23b72"/>
    </marker>
  </defs>
  <!-- S1: Detection -->
  <rect x="100" y="10" width="300" height="62" rx="5" fill="#e8edf5" stroke="#9ab4cc" stroke-width="1.5"/>
  <text x="250" y="29" text-anchor="middle" font-size="9" font-weight="700" fill="#5a6d82" letter-spacing="1.2">STAGE 1: DETECTION</text>
  <text x="250" y="49" text-anchor="middle" font-size="12" fill="#1e3a5f">QA · User · DIAT</text>
  <!-- Connector 1→2 -->
  <line x1="250" y1="72" x2="250" y2="102" stroke="#5a6d82" stroke-width="1.5" marker-end="url(#dep-arr)"/>
  <!-- S2: Classification -->
  <rect x="100" y="106" width="300" height="70" rx="5" fill="#e8edf5" stroke="#9ab4cc" stroke-width="1.5"/>
  <text x="250" y="125" text-anchor="middle" font-size="9" font-weight="700" fill="#5a6d82" letter-spacing="1.2">STAGE 2: CLASSIFICATION</text>
  <text x="250" y="143" text-anchor="middle" font-size="12" fill="#1e3a5f">Severity Committee</text>
  <text x="250" y="160" text-anchor="middle" font-size="11" fill="#1e3a5f">(biweekly — ≥2 week wait)</text>
  <!-- Connector 2→3 -->
  <line x1="250" y1="176" x2="250" y2="206" stroke="#5a6d82" stroke-width="1.5" marker-end="url(#dep-arr)"/>
  <!-- S3: Attribution -->
  <rect x="100" y="210" width="300" height="70" rx="5" fill="#e8edf5" stroke="#9ab4cc" stroke-width="1.5"/>
  <text x="250" y="229" text-anchor="middle" font-size="9" font-weight="700" fill="#5a6d82" letter-spacing="1.2">STAGE 3: ATTRIBUTION</text>
  <text x="250" y="247" text-anchor="middle" font-size="12" fill="#1e3a5f">Defect Attribution Algorithm</text>
  <text x="250" y="264" text-anchor="middle" font-size="11" fill="#1e3a5f">identifies responsible CE</text>
  <!-- Connector 3→4 -->
  <line x1="250" y1="280" x2="250" y2="310" stroke="#5a6d82" stroke-width="1.5" marker-end="url(#dep-arr)"/>
  <!-- S4: Assignment (feedback target) -->
  <rect x="100" y="314" width="300" height="70" rx="5" fill="#e8edf5" stroke="#9ab4cc" stroke-width="1.5"/>
  <text x="250" y="333" text-anchor="middle" font-size="9" font-weight="700" fill="#5a6d82" letter-spacing="1.2">STAGE 4: ASSIGNMENT</text>
  <text x="250" y="351" text-anchor="middle" font-size="12" fill="#1e3a5f">Feature Captain assigns</text>
  <text x="250" y="368" text-anchor="middle" font-size="11" fill="#1e3a5f">a different Code Engineer</text>
  <!-- Connector 4→5 -->
  <line x1="250" y1="384" x2="250" y2="414" stroke="#5a6d82" stroke-width="1.5" marker-end="url(#dep-arr)"/>
  <!-- S5: Remediation -->
  <rect x="100" y="418" width="300" height="70" rx="5" fill="#e8edf5" stroke="#9ab4cc" stroke-width="1.5"/>
  <text x="250" y="437" text-anchor="middle" font-size="9" font-weight="700" fill="#5a6d82" letter-spacing="1.2">STAGE 5: REMEDIATION</text>
  <text x="250" y="455" text-anchor="middle" font-size="12" fill="#1e3a5f">Isolated branch · CDAP docs</text>
  <text x="250" y="472" text-anchor="middle" font-size="11" fill="#1e3a5f">no priority over features</text>
  <!-- Connector 5→S6 diamond top -->
  <line x1="250" y1="488" x2="250" y2="498" stroke="#5a6d82" stroke-width="1.5" marker-end="url(#dep-arr)"/>
  <!-- S6: Verification diamond — center(250,560), top(250,500), right(398,560), bottom(250,620), left(102,560) -->
  <polygon points="250,500 398,560 250,620 102,560" fill="#e8edf5" stroke="#9ab4cc" stroke-width="1.5"/>
  <text x="250" y="543" text-anchor="middle" font-size="9" font-weight="700" fill="#5a6d82" letter-spacing="1.2">STAGE 6: VERIFICATION</text>
  <text x="250" y="561" text-anchor="middle" font-size="12" fill="#1e3a5f">Quality Authority</text>
  <text x="250" y="578" text-anchor="middle" font-size="11" fill="#1e3a5f">reviews the fix</text>
  <!-- Connector S6 bottom→S7 (approved) -->
  <line x1="250" y1="620" x2="250" y2="650" stroke="#5a6d82" stroke-width="1.5" marker-end="url(#dep-arr)"/>
  <text x="258" y="640" font-size="10" fill="#5a6d82" font-style="italic">Fix approved</text>
  <!-- S7: Closure -->
  <rect x="100" y="654" width="300" height="70" rx="5" fill="#e8edf5" stroke="#9ab4cc" stroke-width="1.5"/>
  <text x="250" y="673" text-anchor="middle" font-size="9" font-weight="700" fill="#5a6d82" letter-spacing="1.2">STAGE 7: CLOSURE</text>
  <text x="250" y="691" text-anchor="middle" font-size="12" fill="#1e3a5f">Severity Committee</text>
  <text x="250" y="708" text-anchor="middle" font-size="11" fill="#1e3a5f">+ DIAT + DOUCHE sign-off</text>
  <!-- Connector S7→DONE -->
  <line x1="250" y1="724" x2="250" y2="742" stroke="#5a6d82" stroke-width="1.5" marker-end="url(#dep-arr)"/>
  <!-- DONE pill -->
  <rect x="115" y="746" width="270" height="48" rx="24" fill="#e8edf5" stroke="#9ab4cc" stroke-width="1.5"/>
  <text x="250" y="765" text-anchor="middle" font-size="12" font-weight="600" fill="#1e3a5f">Defect closed</text>
  <text x="250" y="782" text-anchor="middle" font-size="11" fill="#5a6d82">6–10 weeks elapsed</text>
  <!-- Feedback arrow: right diamond vertex (398,560) → right rail → S4 right edge -->
  <path d="M 398,560 L 458,560 L 458,349 L 402,349" fill="none" stroke="#a23b72" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#dep-arr-rej)"/>
  <!-- Feedback label -->
  <text transform="translate(474,455) rotate(-90)" text-anchor="middle" font-size="9.5" fill="#a23b72" font-style="italic">Fix rejected (new engineer required)</text>
</svg>
</div>

The DEPRESSED process consists of seven stages, each managed by a different team and each producing its own documentation artifact. **Stage 1: Detection** occurs when a defect is identified by the [Quality Authority](/roles/quality-authority/), a user, or the [DIAT](/roles/development-integrity-assurance-team/) during post-release validation. The defect is logged in the Defect Registry with a preliminary description and the name of the person who detected it. **Stage 2: Classification** is performed by the Severity Committee, a cross-functional body comprising one representative from the [System of Authority (SOA)](/roles/system-of-authority/), one [Feature Captain](/roles/feature-captain/), and one member of the [CRAP](/roles/change-rejection-or-acceptance-party/). The Severity Committee meets biweekly to classify each new defect according to the SADMF Severity Taxonomy (Critical, Significant, Moderate, Cosmetic, Philosophical). Classification typically takes 2 weeks from detection, as the Committee must reach unanimous consensus and must document their reasoning in the Severity Justification Memorandum.

**Stage 3: Attribution** uses the Defect Attribution Algorithm, the same algorithm employed by the [Tribunal](/release-convoy/ceremonies/tribunal/), to identify the [Code Engineer](/roles/code-engineer/) who introduced the defect. Critically, the attributed engineer is never assigned to fix their own defect. Allowing the original engineer to fix their own bug would create a conflict of interest: they have a personal incentive to minimize the defect's significance and to implement the quickest possible fix rather than the most thorough one. **Stage 4: Assignment** allocates the defect to a different Code Engineer, selected by the [Feature Captain](/roles/feature-captain/) based on availability, skill match, and absence of any personal relationship with the attributed engineer that might introduce bias. The assigned engineer receives a Defect Remediation Packet containing the defect description, the Severity Justification Memorandum, the attribution analysis, and the [Comprehensive Documentation Assurance Protocol](/practices/comprehensive-documentation-assurance-protocol/) templates for the fix.

**Stage 5: Remediation** is the actual fixing of the defect, which proceeds under the same [CI/CD/ED](/practices/ci-cd-ed/) constraints as any other code change. The assigned engineer works on an isolated branch, completes the CDAP documentation suite, and submits the fix for [Conflict Arbitration](/practices/conflict-arbitration/) alongside other changes. The fix receives no priority over feature work, as prioritizing defect fixes would create a perverse incentive for engineers to introduce defects in order to receive priority scheduling. **Stage 6: Verification** is performed by the [Quality Authority](/roles/quality-authority/), who tests the fix against the original defect description, the Severity Justification Memorandum, and the CDAP documentation. If the fix does not fully resolve the defect as classified, it is returned to Stage 4 for reassignment -- never to the same engineer, as they have already demonstrated an inability to remediate this particular defect.

**Stage 7: Closure** requires sign-off from the Severity Committee, the [DIAT](/roles/development-integrity-assurance-team/), and the [DOUCHE](/roles/devops-usage-and-compliance-head-engineer/). Closure sign-off confirms that the defect has been remediated, that the remediation has been verified, that the CDAP documentation is complete, and that the attribution record has been finalized in the [Tribunal](/release-convoy/ceremonies/tribunal/) Log. The entire DEPRESSED lifecycle, from Detection to Closure, typically spans 6-10 weeks for a Moderate severity defect. Critical defects follow an expedited path that reduces the Severity Committee deliberation period from 2 weeks to 1 week. The thoroughness of DEPRESSED ensures that the organization never confuses speed of resolution with quality of resolution, and that every defect leaves behind a complete paper trail that proves the organization learned from its mistakes.

## See Also

- [Tribunal](/release-convoy/ceremonies/tribunal/) for the ceremony that uses DEPRESSED attribution data
- [Quality Authority](/roles/quality-authority/) for the team that detects and verifies defects
- [Development Integrity Assurance Team (DIAT)](/roles/development-integrity-assurance-team/) for the team that co-signs defect closure
- [Comprehensive Documentation Assurance Protocol](/practices/comprehensive-documentation-assurance-protocol/) for the documentation required during remediation
- [CI/CD/ED](/practices/ci-cd-ed/) for the delivery constraints that govern defect fixes
- [Defects per Code Engineer](/metrics/defects-per-code-engineer/) for the metric that DEPRESSED attribution feeds
- [Strategic Test Deferral](/practices/strategic-test-deferral/) for the practice that increases DEPRESSED pipeline volume during high-velocity Convoy phases
