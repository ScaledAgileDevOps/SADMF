---
title: "Testing"
linkTitle: "Testing"
type: docs
description: A dedicated phase where the Quality Authority validates all code so that Code Engineers can remain focused on feature delivery
weight: 9
tags: ["testing", "quality", "release-management"]
aliases: ["/release-convoy/ceremonies/testing/"]
---

<!-- ═══════════════════════════════════════════════════════════════
     CEREMONY SUMMARY BOX, Participants | Duration | Output
     ═══════════════════════════════════════════════════════════════ -->
<div style="
  border: 2px solid #9ab4cc;
  border-radius: 6px;
  margin: 0 0 2rem 0;
  overflow: hidden;
  background: #e8edf5;
  box-shadow: 0 2px 8px rgba(30,58,95,0.10);
">
  <div style="
    background: #1e3a5f;
    color: #e8edf5;
    padding: 0.55rem 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    letter-spacing: 0.08em;
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
  ">
    <i class="fa-solid fa-flask-vial" style="font-size:0.85rem;"></i>
    Ceremony Overview, Testing
  </div>
  <div style="display: flex; flex-wrap: wrap;">

    <div style="
      flex: 1 1 200px;
      padding: 1.1rem 1.25rem;
      border-right: 1px solid #9ab4cc;
      border-bottom: 1px solid #9ab4cc;
    ">
      <div style="
        display: flex; align-items: center; gap: 0.45rem;
        color: #1e3a5f; font-weight: 700; font-size: 0.72rem;
        text-transform: uppercase; letter-spacing: 0.09em; margin-bottom: 0.6rem;
      ">
        <i class="fa-solid fa-users" style="color:#a23b72;"></i> Participants
      </div>
      <ul style="margin:0;padding-left:1.1rem;font-size:0.88rem;color:#1e3a5f;line-height:1.7;">
        <li><a href="/roles/unit-tester/">Unit Testing Team</a></li>
        <li><a href="/roles/feature-captain/">Feature Captain</a> (assignment only)</li>
      </ul>
    </div>

    <div style="
      flex: 1 1 200px;
      padding: 1.1rem 1.25rem;
      border-right: 1px solid #9ab4cc;
      border-bottom: 1px solid #9ab4cc;
    ">
      <div style="
        display: flex; align-items: center; gap: 0.45rem;
        color: #1e3a5f; font-weight: 700; font-size: 0.72rem;
        text-transform: uppercase; letter-spacing: 0.09em; margin-bottom: 0.6rem;
      ">
        <i class="fa-solid fa-clock" style="color:#a23b72;"></i> Duration
      </div>
      <div style="font-size:0.88rem;color:#1e3a5f;line-height:1.7;">
        Variable; test suite execution must complete in <strong>under 4 hours</strong>.<br>
        Defect remediation deferred 6–12 weeks to next convoy cycle.
      </div>
    </div>

    <div style="
      flex: 1 1 200px;
      padding: 1.1rem 1.25rem;
      border-bottom: 1px solid #9ab4cc;
    ">
      <div style="
        display: flex; align-items: center; gap: 0.45rem;
        color: #1e3a5f; font-weight: 700; font-size: 0.72rem;
        text-transform: uppercase; letter-spacing: 0.09em; margin-bottom: 0.6rem;
      ">
        <i class="fa-solid fa-file-certificate" style="color:#a23b72;"></i> Output
      </div>
      <ul style="margin:0;padding-left:1.1rem;font-size:0.88rem;color:#1e3a5f;line-height:1.7;">
        <li>Testing Completion Certificate</li>
        <li>Defect records in Defect Management System</li>
        <li>Updated <a href="/release-convoy/manifest/">Convoy Manifest</a></li>
      </ul>
    </div>

  </div>
  <div style="
    background: #f8fafc;
    border-top: 1px solid #9ab4cc;
    padding: 0.45rem 1.25rem;
    display: flex; align-items: center; gap: 0.5rem;
    font-size: 0.75rem; color: #5a6d82;
  ">
    <i class="fa-solid fa-arrow-right-long"></i>
    <strong>Prerequisite:</strong>&nbsp;<a href="/release-convoy/execution/ceremonies/code-inspection/">Code Inspection</a>&nbsp;&nbsp;
    <i class="fa-solid fa-arrow-right-long" style="margin-left:0.75rem;"></i>
    <strong>Advances to:</strong>&nbsp;<a href="/release-convoy/execution/ceremonies/system-integration-testing/">System Integration Testing</a>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════════════════
     CEREMONY AGENDA, Numbered Step Cards
     ═══════════════════════════════════════════════════════════════ -->
<div style="margin: 2rem 0 2.25rem 0;">
  <div style="
    display: flex; align-items: center; gap: 0.6rem;
    margin-bottom: 1.1rem;
  ">
    <i class="fa-solid fa-list-ol" style="color:#a23b72;font-size:1rem;"></i>
    <span style="
      font-weight: 700; font-size: 0.78rem; text-transform: uppercase;
      letter-spacing: 0.1em; color: #1e3a5f;
    ">Ceremony Agenda</span>
    <div style="flex:1;height:1px;background:#9ab4cc;margin-left:0.4rem;"></div>
  </div>

  <div style="display:flex;flex-direction:column;gap:0.65rem;">

    <!-- Step 1 -->
    <div style="
      display: flex; align-items: flex-start; gap: 0;
      border: 1px solid #9ab4cc; border-radius: 6px;
      overflow: hidden; background: #fff;
      box-shadow: 0 1px 4px rgba(30,58,95,0.07);
    ">
      <div style="
        min-width: 3rem; background: #1e3a5f; color: #e8edf5;
        display: flex; align-items: center; justify-content: center;
        font-weight: 800; font-size: 1.15rem; padding: 1rem 0;
        align-self: stretch;
      ">1</div>
      <div style="padding: 0.75rem 1rem;">
        <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.2rem;font-size:0.92rem;">
          <i class="fa-solid fa-box-archive" style="color:#a23b72;margin-right:0.4rem;"></i>
          Codebase Assignment
        </div>
        <div style="font-size:0.86rem;color:#374151;line-height:1.6;">
          The <a href="/roles/feature-captain/">Feature Captain</a> assigns the complete, frozen codebase
          to the <a href="/roles/unit-tester/">Unit Testing Team</a> following successful
          <a href="/release-convoy/execution/ceremonies/code-inspection/">Code Inspection</a>.
          No documentation, design notes, or developer context is provided.
        </div>
      </div>
    </div>

    <!-- Step 2 -->
    <div style="
      display: flex; align-items: flex-start; gap: 0;
      border: 1px solid #9ab4cc; border-radius: 6px;
      overflow: hidden; background: #fff;
      box-shadow: 0 1px 4px rgba(30,58,95,0.07);
    ">
      <div style="
        min-width: 3rem; background: #1e3a5f; color: #e8edf5;
        display: flex; align-items: center; justify-content: center;
        font-weight: 800; font-size: 1.15rem; padding: 1rem 0;
        align-self: stretch;
      ">2</div>
      <div style="padding: 0.75rem 1rem;">
        <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.2rem;font-size:0.92rem;">
          <i class="fa-solid fa-magnifying-glass-chart" style="color:#a23b72;margin-right:0.4rem;"></i>
          Code Reading &amp; Test Authoring
        </div>
        <div style="font-size:0.86rem;color:#374151;line-height:1.6;">
          Testers read the source code to determine its behavior, then write tests that verify
          what the code <em>actually does</em>. The goal is 100% line coverage as measured
          by the organization's approved coverage tool.
        </div>
      </div>
    </div>

    <!-- Step 3 -->
    <div style="
      display: flex; align-items: flex-start; gap: 0;
      border: 1px solid #9ab4cc; border-radius: 6px;
      overflow: hidden; background: #fff;
      box-shadow: 0 1px 4px rgba(30,58,95,0.07);
    ">
      <div style="
        min-width: 3rem; background: #1e3a5f; color: #e8edf5;
        display: flex; align-items: center; justify-content: center;
        font-weight: 800; font-size: 1.15rem; padding: 1rem 0;
        align-self: stretch;
      ">3</div>
      <div style="padding: 0.75rem 1rem;">
        <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.2rem;font-size:0.92rem;">
          <i class="fa-solid fa-bug" style="color:#a23b72;margin-right:0.4rem;"></i>
          Defect Filing
        </div>
        <div style="font-size:0.86rem;color:#374151;line-height:1.6;">
          Any code appearing incorrect, confusing, or dangerous must be formally filed in the
          Defect Management System. Direct communication with
          <a href="/roles/code-engineer/">Code Engineers</a> is prohibited.
          Defects are attributed to the authoring Code Engineer and feed the
          <a href="/metrics/defects-per-code-engineer/">Defects per Code Engineer</a> metric.
        </div>
      </div>
    </div>

    <!-- Step 4 -->
    <div style="
      display: flex; align-items: flex-start; gap: 0;
      border: 1px solid #9ab4cc; border-radius: 6px;
      overflow: hidden; background: #fff;
      box-shadow: 0 1px 4px rgba(30,58,95,0.07);
    ">
      <div style="
        min-width: 3rem; background: #1e3a5f; color: #e8edf5;
        display: flex; align-items: center; justify-content: center;
        font-weight: 800; font-size: 1.15rem; padding: 1rem 0;
        align-self: stretch;
      ">4</div>
      <div style="padding: 0.75rem 1rem;">
        <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.2rem;font-size:0.92rem;">
          <i class="fa-solid fa-gauge-high" style="color:#a23b72;margin-right:0.4rem;"></i>
          Coverage Verification
        </div>
        <div style="font-size:0.86rem;color:#374151;line-height:1.6;">
          The coverage tool confirms 100% line coverage. All tests either pass or have an
          associated defect record. The complete test suite must execute in under four hours.
          Branch coverage, path coverage, and mutation testing are outside scope.
        </div>
      </div>
    </div>

    <!-- Step 5 -->
    <div style="
      display: flex; align-items: flex-start; gap: 0;
      border: 1px solid #9ab4cc; border-radius: 6px;
      overflow: hidden; background: #a23b72;
      box-shadow: 0 1px 4px rgba(30,58,95,0.07);
    ">
      <div style="
        min-width: 3rem; background: #242627; color: #e8edf5;
        display: flex; align-items: center; justify-content: center;
        font-weight: 800; font-size: 1.15rem; padding: 1rem 0;
        align-self: stretch;
      ">5</div>
      <div style="padding: 0.75rem 1rem;">
        <div style="font-weight:700;color:#fff;margin-bottom:0.2rem;font-size:0.92rem;">
          <i class="fa-solid fa-stamp" style="color:#e8edf5;margin-right:0.4rem;"></i>
          Testing Completion Certificate Issued
        </div>
        <div style="font-size:0.86rem;color:#f3e8ef;line-height:1.6;">
          The Unit Testing Team issues the Testing Completion Certificate, which is filed with
          the <a href="/release-convoy/manifest/" style="color:#ffd6ee;">Convoy Manifest</a>.
          This certificate is the mandatory gate to proceed to
          <a href="/release-convoy/execution/ceremonies/system-integration-testing/" style="color:#ffd6ee;">System Integration Testing</a>.
        </div>
      </div>
    </div>

  </div>
</div>

<!-- IMAGE PLACEHOLDER: Room layout diagram -->
{{< ceremony-testing-governance >}}

To keep [Code Engineers](/roles/code-engineer/) productive, the SADMF separates coding from testing entirely. Once a feature passes [Code Inspection](/release-convoy/execution/ceremonies/code-inspection/), the [Feature Captain](/roles/feature-captain/) assigns the complete, frozen codebase to the [Unit Testing Team](/roles/unit-tester/) for comprehensive test coverage. Code Engineers do not write tests because doing so would reduce the time available for coding, and their utilization metrics are measured in lines of production code delivered, not in lines of test code. Test code, while necessary, is not production code and therefore does not count toward throughput.

The Unit Testing Team receives the code with no documentation about the developer's intent, design decisions, or expected behavior. This is by design. Reading the code IS the documentation, and testers who understand the code by reading it will write tests that verify what the code actually does rather than what someone intended it to do. If the code does something unexpected, that is either a feature or a defect, and it is not the tester's role to make that determination. The tester's role is to achieve 100% line coverage, as measured by the organization's coverage tool. Branch coverage, path coverage, and mutation testing are not measured because the organization has determined that line coverage is a sufficient proxy for quality. This determination was made by someone who has since left the company, but the policy remains.

Testers are strictly prohibited from requesting code changes. If a tester discovers code that appears incorrect, confusing, or dangerous, they must file a formal defect through the Defect Management System. The defect is then prioritized against all other work in the next convoy cycle, meaning it may be addressed in six to twelve weeks. Testers who attempt to communicate directly with Code Engineers about potential issues are reminded that informal communication channels bypass the governance structures that protect delivery predictability. All defects discovered during testing are attributed to the Code Engineer who wrote the code, not to the tester who found them. This attribution feeds the [Defects per Code Engineer](/metrics/defects-per-code-engineer/) metric, which is reviewed during performance evaluations.

Upon achieving 100% line coverage and documenting all discovered defects, the Unit Testing Team issues a Testing Completion Certificate. This certificate attests that every line of code has been executed by at least one test, that all tests either pass or have associated defect records, and that the test suite can be executed in under four hours. The Testing Completion Certificate is filed with the [Convoy Manifest](/release-convoy/manifest/) and is a prerequisite for advancing to [System Integration Testing](/release-convoy/execution/ceremonies/system-integration-testing/). Features without a Testing Completion Certificate cannot proceed, regardless of how close the convoy departure date may be.

The average defect discovery rate during testing is approximately 3.7 defects per thousand lines of code, a number the organization considers acceptably low. That this rate has remained unchanged for eight consecutive convoy cycles is cited as evidence of process stability rather than as a signal that the same types of defects are being introduced repeatedly. Proposals to allow Code Engineers to write their own unit tests during the [Coding](/release-convoy/execution/ceremonies/coding/) phase have been evaluated and rejected on the grounds that it would blur role boundaries and make it unclear who is accountable when a defect escapes to production.

## See Also

- [Code Engineers](/roles/code-engineer/) for the role that produces the code being tested
- [Feature Captain](/roles/feature-captain/) for who assigns code to the Unit Testing Team
- [Unit Tester](/roles/unit-tester/) for the role responsible for achieving coverage
- [System Integration Testing](/release-convoy/execution/ceremonies/system-integration-testing/) for the next testing phase after unit testing
- [Defects per Code Engineer](/metrics/defects-per-code-engineer/) for the metric that tracks who is responsible for defects
- [Code Inspection](/release-convoy/execution/ceremonies/code-inspection/) for the phase that precedes testing
