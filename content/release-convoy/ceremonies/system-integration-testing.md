---
title: "System Integration Testing"
linkTitle: "System Integration Testing"
type: docs
description: If two teams validating a change are good, three teams are better — the final testing gate before the convoy is permitted to sail
weight: 10
---

<!-- Ceremony Summary Box -->
<div style="display:flex;gap:0;border:2px solid #9ab4cc;border-radius:8px;overflow:hidden;margin:1.5rem 0 2rem 0;box-shadow:0 2px 8px rgba(0,0,0,0.08)">
  <div style="flex:1;background:#242627;color:#fff;padding:1.25rem 1rem;text-align:center">
    <div style="font-size:0.7rem;text-transform:uppercase;letter-spacing:0.12em;opacity:0.7;margin-bottom:0.5rem">Participants</div>
    <div style="font-size:0.85rem;line-height:1.6">
      <div style="margin-bottom:0.2rem"><i class="fa-solid fa-user-group" style="margin-right:0.4rem;color:#a23b72"></i>SIT Team</div>
      <div style="margin-bottom:0.2rem"><i class="fa-solid fa-anchor" style="margin-right:0.4rem;color:#a23b72"></i>Feature Captains</div>
      <div><i class="fa-solid fa-code" style="margin-right:0.4rem;color:#a23b72"></i>Code Engineers (on recall)</div>
    </div>
  </div>
  <div style="flex:1;background:#1e3a5f;color:#fff;padding:1.25rem 1rem;text-align:center;border-left:2px solid #9ab4cc;border-right:2px solid #9ab4cc">
    <div style="font-size:0.7rem;text-transform:uppercase;letter-spacing:0.12em;opacity:0.7;margin-bottom:0.5rem">Duration</div>
    <div style="font-size:0.85rem;line-height:1.6">
      <div style="margin-bottom:0.2rem"><i class="fa-solid fa-clock" style="margin-right:0.4rem;color:#9ab4cc"></i>Weeks (variable)</div>
      <div style="margin-bottom:0.2rem"><i class="fa-solid fa-hourglass-half" style="margin-right:0.4rem;color:#9ab4cc"></i>+ Environment downtime</div>
      <div><i class="fa-solid fa-rotate" style="margin-right:0.4rem;color:#9ab4cc"></i>+ Defect remediation cycles</div>
    </div>
  </div>
  <div style="flex:1;background:#a23b72;color:#fff;padding:1.25rem 1rem;text-align:center">
    <div style="font-size:0.7rem;text-transform:uppercase;letter-spacing:0.12em;opacity:0.7;margin-bottom:0.5rem">Output</div>
    <div style="font-size:0.85rem;line-height:1.6">
      <div style="margin-bottom:0.2rem"><i class="fa-solid fa-file-signature" style="margin-right:0.4rem"></i>SIT Sign-Off Document</div>
      <div style="margin-bottom:0.2rem"><i class="fa-solid fa-folder-open" style="margin-right:0.4rem"></i>SIT Environment Availability Log</div>
      <div><i class="fa-solid fa-bug" style="margin-right:0.4rem"></i>Defect records (filed, not fixed)</div>
    </div>
  </div>
</div>

<!-- Room layout / attendance diagram placeholder -->
{{< ceremony-sit-spoke-hub >}}

System Integration Testing (SIT) is the ceremony in which all features of the current convoy are tested together as a unified whole. The SIT team is a permanent, dedicated team that exists for this singular purpose. During the weeks when features are being coded, inspected, and unit tested, the SIT team attends daily standups but has nothing to report. They are, however, required to attend, as their presence demonstrates organizational commitment to integration quality and their absence would create an awkward gap in the standup rotation. SIT team members use this waiting period to maintain the SIT environment, update their test scripts from previous convoys, and attend mandatory training on the SADMF process framework.

SIT can only begin after ALL features in the convoy have completed unit [Testing](/release-convoy/ceremonies/testing/) and received their Testing Completion Certificates. This is a critical dependency. Even if nine of ten features are ready, SIT cannot begin until the tenth feature clears testing, because testing features in isolation would defeat the entire purpose of integration testing. This sequencing occasionally creates a bottleneck in which the SIT team waits idle for weeks while a single feature cycles through inspection remediation, but this idle time is not waste — it is readiness. The alternative would be to begin integration testing incrementally as features complete, but this would be continuous integration, which is a different framework's concern.

The SIT environment is a shared environment that approximates production, in the same way that a photograph of the ocean approximates sailing. It is maintained by a separate infrastructure team and is frequently in a broken state due to configuration drift, expired certificates, or resource contention from multiple convoy cycles attempting to use it simultaneously. When the SIT environment is unavailable, the SIT team documents the outage in the SIT Environment Availability Log and waits. SIT environment downtime is not counted against the SIT testing timebox because it is classified as an external dependency, and external dependencies are, by definition, outside the team's control and therefore outside their accountability.

Defects discovered during SIT are among the most expensive to remediate. By the time a SIT defect is identified, the [Code Engineers](/roles/code-engineer/) who wrote the code have been released back to the coding pool through the [Press Gang](/release-convoy/ceremonies/press-gang/) ceremony and are now working on entirely different features for the next convoy. Pulling an engineer back to fix a SIT defect requires filing an Emergency Resource Reallocation Request, which must be approved by the [Feature Captain](/roles/feature-captain/) of both the current and previous features. The engineer must then context-switch back to code they wrote weeks ago, often with no more guidance than a SIT defect report that reads "Feature X does not work correctly when combined with Feature Y." The cost and delay of SIT defect remediation is well-documented but is accepted as the price of thorough validation.

Upon successful completion of all SIT test cases, the SIT team produces the SIT Sign-Off Document, a comprehensive report attesting that all convoy features have been tested in combination and that all critical and high-severity defects have been resolved or formally accepted as known issues. The SIT Sign-Off Document is a mandatory input to the [Manifest Approval](/release-convoy/ceremonies/manifest-approval/) ceremony and is filed permanently with the [Convoy Manifest](/release-convoy/manifest/). Without it, the convoy cannot receive authorization to sail, regardless of any other evidence that the software is ready for production.

## Ceremony Agenda

<!-- Numbered step cards -->
<div style="margin:1.5rem 0 2rem 0">

  <!-- Step 1 -->
  <div style="display:flex;gap:0;margin-bottom:1rem;border-radius:8px;overflow:hidden;border:1px solid #9ab4cc;box-shadow:0 1px 4px rgba(0,0,0,0.07)">
    <div style="background:#242627;color:#fff;padding:1rem 1.25rem;display:flex;align-items:center;justify-content:center;min-width:3.5rem">
      <span style="font-size:1.4rem;font-weight:700;line-height:1">1</span>
    </div>
    <div style="background:#e8edf5;padding:1rem 1.25rem;flex:1">
      <div style="font-weight:600;color:#1e3a5f;margin-bottom:0.25rem"><i class="fa-solid fa-hourglass-start" style="margin-right:0.5rem;color:#a23b72"></i>Pre-SIT Readiness: Wait for All Certificates</div>
      <div style="font-size:0.9rem;color:#3a3a3a">The SIT team attends daily standups and maintains the SIT environment. SIT cannot begin until every feature in the convoy holds a Testing Completion Certificate. Idle time is logged as <em>readiness</em>, not waste.</div>
    </div>
  </div>

  <!-- Step 2 -->
  <div style="display:flex;gap:0;margin-bottom:1rem;border-radius:8px;overflow:hidden;border:1px solid #9ab4cc;box-shadow:0 1px 4px rgba(0,0,0,0.07)">
    <div style="background:#1e3a5f;color:#fff;padding:1rem 1.25rem;display:flex;align-items:center;justify-content:center;min-width:3.5rem">
      <span style="font-size:1.4rem;font-weight:700;line-height:1">2</span>
    </div>
    <div style="background:#e8edf5;padding:1rem 1.25rem;flex:1">
      <div style="font-weight:600;color:#1e3a5f;margin-bottom:0.25rem"><i class="fa-solid fa-server" style="margin-right:0.5rem;color:#a23b72"></i>SIT Environment Provisioning</div>
      <div style="font-size:0.9rem;color:#3a3a3a">Infrastructure team deploys all convoy features to the shared SIT environment. Configuration drift, expired certificates, and resource contention from concurrent convoy cycles are resolved — or, if unresolvable, documented in the SIT Environment Availability Log.</div>
    </div>
  </div>

  <!-- Step 3 -->
  <div style="display:flex;gap:0;margin-bottom:1rem;border-radius:8px;overflow:hidden;border:1px solid #9ab4cc;box-shadow:0 1px 4px rgba(0,0,0,0.07)">
    <div style="background:#5a6d82;color:#fff;padding:1rem 1.25rem;display:flex;align-items:center;justify-content:center;min-width:3.5rem">
      <span style="font-size:1.4rem;font-weight:700;line-height:1">3</span>
    </div>
    <div style="background:#e8edf5;padding:1rem 1.25rem;flex:1">
      <div style="font-weight:600;color:#1e3a5f;margin-bottom:0.25rem"><i class="fa-solid fa-list-check" style="margin-right:0.5rem;color:#a23b72"></i>Integrated Test Execution</div>
      <div style="font-size:0.9rem;color:#3a3a3a">SIT team executes all test scripts against the combined feature set. Each feature is tested in interaction with every other feature. Tests are run sequentially to avoid environment contention. Environment downtime periods are excluded from the timebox.</div>
    </div>
  </div>

  <!-- Step 4 -->
  <div style="display:flex;gap:0;margin-bottom:1rem;border-radius:8px;overflow:hidden;border:1px solid #9ab4cc;box-shadow:0 1px 4px rgba(0,0,0,0.07)">
    <div style="background:#a23b72;color:#fff;padding:1rem 1.25rem;display:flex;align-items:center;justify-content:center;min-width:3.5rem">
      <span style="font-size:1.4rem;font-weight:700;line-height:1">4</span>
    </div>
    <div style="background:#e8edf5;padding:1rem 1.25rem;flex:1">
      <div style="font-weight:600;color:#1e3a5f;margin-bottom:0.25rem"><i class="fa-solid fa-bug" style="margin-right:0.5rem;color:#a23b72"></i>Defect Filing and Engineer Recall</div>
      <div style="font-size:0.9rem;color:#3a3a3a">Defects are documented and filed. Engineers responsible for the defective features are located in the coding pool, an Emergency Resource Reallocation Request is filed with both Feature Captains, and recalled engineers context-switch back to code written weeks prior.</div>
    </div>
  </div>

  <!-- Step 5 -->
  <div style="display:flex;gap:0;margin-bottom:0;border-radius:8px;overflow:hidden;border:1px solid #9ab4cc;box-shadow:0 1px 4px rgba(0,0,0,0.07)">
    <div style="background:#242627;color:#a23b72;padding:1rem 1.25rem;display:flex;align-items:center;justify-content:center;min-width:3.5rem">
      <span style="font-size:1.4rem;font-weight:700;line-height:1">5</span>
    </div>
    <div style="background:#e8edf5;padding:1rem 1.25rem;flex:1">
      <div style="font-weight:600;color:#1e3a5f;margin-bottom:0.25rem"><i class="fa-solid fa-file-signature" style="margin-right:0.5rem;color:#a23b72"></i>SIT Sign-Off Document Issuance</div>
      <div style="font-size:0.9rem;color:#3a3a3a">Upon passing all test cases, the SIT team produces the SIT Sign-Off Document. All critical and high-severity defects must be resolved or formally accepted as known issues. The document is filed with the Convoy Manifest and is required to proceed to Manifest Approval.</div>
    </div>
  </div>

</div>

<!-- Defect recall flow diagram placeholder -->
{{< ceremony-sit-defect-recall >}}

## See Also

- [Testing](/release-convoy/ceremonies/testing/) for the unit testing phase that must complete before SIT begins
- [Manifest Approval](/release-convoy/ceremonies/manifest-approval/) for the ceremony that requires the SIT Sign-Off Document
- [Convoy Manifest](/release-convoy/manifest/) for where the SIT Sign-Off Document is filed
- [Code Engineers](/roles/code-engineer/) for who must be recalled to fix SIT defects
- [Press Gang](/release-convoy/ceremonies/press-gang/) for why Code Engineers are no longer available when SIT defects are found
