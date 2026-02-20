---
title: Roles
titleIcon: "fa-solid fa-user"
linkTitle: Roles
type: docs
description: Commanding the organization requires structure, clearly defined roles, and strict separation of duties!
weight: 5
---

The Scaled Agile DevOps Maturity Framework defines a comprehensive organizational hierarchy where every person knows their responsibilities, every responsibility has a named owner, and every owner is accountable through clearly defined reporting lines. Roles in SADMF are not fluid or self-organizing; they are precisely defined, carefully separated, and rigorously enforced. When everyone knows exactly what they are allowed to do, nobody wastes time doing what they are not supposed to. This [Systems Thinking](/principles/systems-thinking/) extends from the highest levels of strategic leadership down to the individual [Code Engineer](/roles/code-engineer/) typing at their keyboard.

The organizational structure is built on three pillars: the [Admiral's Transformation Office (ATO)](/roles/admirals-transformation-office/) provides strategic direction and accountability, the [System of Authority (SOA)](/roles/system-of-authority/) implants and enforces the framework through external consultants, and the [System of Service (SOS)](/roles/system-of-service/) delivers software through the [DevOps Release Convoy](/release-convoy/). Within this structure, specialized roles handle code review, testing, source management, architecture governance, change approval, and status reporting, ensuring that no individual is burdened with responsibilities outside their defined scope. The result is an organization where accountability is absolute, oversight is comprehensive, and every activity is performed by the role specifically designed to perform it.

<style>
.so-tree{overflow-x:auto;font-family:'DM Sans',sans-serif;padding:1.5rem 0}
.so-tree ul{display:flex;flex-wrap:nowrap;justify-content:center;padding:0;margin:0;list-style:none;padding-top:20px;position:relative}
.so-tree ul::before{content:'';position:absolute;top:0;left:calc(50% - 1px);width:2px;height:20px;background:#5a6d82}
.so-tree li{display:flex;flex-direction:column;align-items:center;padding:0 5px;flex:0 0 auto;position:relative;padding-top:20px}
.so-tree li::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:#5a6d82}
.so-tree li:first-child::before{left:50%}
.so-tree li:last-child::before{right:50%}
.so-tree li:only-child::before{display:none}
.so-tree li::after{content:'';position:absolute;top:0;left:calc(50% - 1px);width:2px;height:20px;background:#5a6d82}
.so-node{border-radius:4px;padding:7px 11px;text-align:center;font-size:12px;line-height:1.35;min-width:80px;max-width:130px}
.so-abbr{font-weight:700;font-size:13px;display:block}
.so-name{font-size:10px;display:block;margin-top:2px;line-height:1.25}
.so-l0{background:#242627;color:#fff;min-width:220px}
.so-l1-soa{background:#a23b72;color:#fff;min-width:130px}
.so-l1-sos{background:#1e3a5f;color:#fff;min-width:130px}
.so-l1-pdac{background:#a23b72;color:#fff;min-width:130px}
.so-l2{background:#e8edf5;color:#1e3a5f;border:1.5px solid #9ab4cc}
.so-rbrb{border:1.5px dashed #a23b72!important}
</style>
<div class="so-tree">
  <div style="display:flex;justify-content:center">
    <div class="so-node so-l0"><span class="so-abbr">ATO</span><span class="so-name">Admiral's Transformation Office</span></div>
  </div>
  <ul>
    <li>
      <div class="so-node so-l1-soa"><span class="so-abbr">SOA</span><span class="so-name">System of Authority<br>— external consultants —</span></div>
      <ul>
        <li><div class="so-node so-l2"><span class="so-abbr">DOUCHE</span><span class="so-name">DevOps Usage &amp; Compliance Head Engineer</span></div></li>
        <li><div class="so-node so-l2"><span class="so-abbr">CSO</span><span class="so-name">Chief Signals Officer</span></div></li>
        <li><div class="so-node so-l2"><span class="so-abbr">EARB</span><span class="so-name">Enterprise Architecture Review Board</span></div></li>
        <li>
          <div class="so-node so-l2"><span class="so-abbr">CRAP</span><span class="so-name">Change Rejection or Acceptance Party</span></div>
          <ul>
            <li><div class="so-node so-l2 so-rbrb"><span class="so-abbr">RBRB</span><span class="so-name">Review Board Review Board<br><em>(also from EARB)</em></span></div></li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      <div class="so-node so-l1-sos"><span class="so-abbr">SOS</span><span class="so-name">System of Service<br>— delivery —</span></div>
      <ul>
        <li>
          <div class="so-node so-l2"><span class="so-abbr">COM</span><span class="so-name">Commodore</span></div>
          <ul>
            <li>
              <div class="so-node so-l2"><span class="so-abbr">FC</span><span class="so-name">Feature Captain</span></div>
              <ul>
                <li><div class="so-node so-l2"><span class="so-abbr">FT</span><span class="so-name">Feature Team (Code Engineers)</span></div></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><div class="so-node so-l2"><span class="so-abbr">CSET</span><span class="so-name">Code Standards Enforcement Team</span></div></li>
        <li><div class="so-node so-l2"><span class="so-abbr">SMT</span><span class="so-name">Source Management Team</span></div></li>
        <li><div class="so-node so-l2"><span class="so-abbr">QA</span><span class="so-name">Quality Authority</span></div></li>
        <li><div class="so-node so-l2"><span class="so-abbr">DIAT</span><span class="so-name">Development Integrity Assurance Team</span></div></li>
        <li><div class="so-node so-l2"><span class="so-abbr">BE</span><span class="so-name">Build Engineers</span></div></li>
        <li><div class="so-node so-l2"><span class="so-abbr">UT</span><span class="so-name">Unit Tester</span></div></li>
      </ul>
    </li>
    <li>
      <div class="so-node so-l1-pdac"><span class="so-abbr">PDAC</span><span class="so-name">Product Direction Arbitration Council</span></div>
    </li>
  </ul>
</div>

## The Roles

1. **[Admiral's Transformation Office (ATO)](/roles/admirals-transformation-office/)** -- The command-and-control center accountable for the 5-8 year transformation roadmap, assessments, metrics, and certification renewals.

2. **[Build Engineers (BE)](/roles/build-engineers/)** -- YAML experts who own the entire build pipeline, ensuring Code Engineers never waste time on build concerns.

3. **[Change Rejection or Acceptance Party (CRAP)](/roles/change-rejection-or-acceptance-party/)** -- Seven-person review board that approves changes by unanimous secret vote after supplicants swear an oath of checklist compliance.

4. **[Chief Signals Officer (CSO)](/roles/chief-signals-officer/)** -- Senior executive who publishes the Feature Completion Ratio daily to ensure plan adherence.

5. **[Code Standards Enforcement Team (CSET)](/roles/code-standards-enforcement-team/)** -- Dedicated reviewers who perform all code reviews, enforcing the Enterprise Coding Standards Manual across every line of code.

6. **[Code Engineer (CE)](/roles/code-engineer/)** -- The backbone of a SAD implementation, transforming requirements into machine-readable instructions quickly and quietly.

7. **[Commodore (C)](/roles/commodore/)** -- The delivery commander who collects status from every role and ensures framework compliance before deploying the fleet.

8. **[Development Integrity Assurance Team (DIAT)](/roles/development-integrity-assurance-team/)** -- Senior practitioners who validate the work of the Quality Authority, ensuring that testing itself meets quality standards.

9. **[DevOps Usage & Compliance Head Engineer (DOUCHE)](/roles/devops-usage-and-compliance-head-engineer/)** -- The named executive who owns the DevOps Process Binder and holds all teams accountable to the Right Way.

10. **[Enterprise Architecture Review Board (EARB)](/roles/enterprise-architecture-review-board/)** -- Keepers of the Book of Names, meeting every six weeks to review and reject new words submitted for inclusion.

11. **[Feature Captain (FC)](/roles/feature-captain/)** -- The mid-level manager responsible for tracking feature progress and reporting status to the Commodore.

12. **[Feature Team (FT)](/roles/feature-team/)** -- The group of Code Engineers assembled per Convoy through the Press Gang ceremony to deliver a feature.

13. **[Quality Authority (QA)](/roles/quality-authority/)** -- Manual testing specialists and the final arbiter of requirements, because the only TRUE way to test is by hand.

14. **[Product Direction Arbitration Council (PDAC)](/roles/product-direction-arbitration-council/)** -- Cross-functional council of seven to fifteen stakeholder representatives that replaces individual product ownership with consensus-based backlog governance.

15. **[Review Board Review Board (RBRB)](/roles/review-board-review-board/)** -- The board that reviews the decisions of the EARB and CRAP, ensuring the reviewers are themselves reviewed.

16. **[Source Management Team (SMT)](/roles/source-management-team/)** -- Authorizes branches, merges code, and resolves all conflicts so Code Engineers never have to.

17. **[System of Authority (SOA)](/roles/system-of-authority/)** -- The team of teams staffed by contractors and consultants accountable for implanting SADMF in your organization.

18. **[System of Service (SOS)](/roles/system-of-service/)** -- The team of teams accountable for achieving deadlines and shipping code under servant leadership.

19. **[Unit Tester (UT)](/roles/unit-tester/)** -- Dedicated specialists who write unit tests after code is delivered, because Code Engineers should focus on writing code.

## See Also

* [DevOps Release Convoy](/release-convoy/) for how roles operate within the delivery cycle
* [Convoy Ceremonies](/release-convoy/ceremonies/) for the ceremonies each role participates in
* [Practices](/practices/) for the processes roles execute
* [Metrics](/metrics/) for how role performance is measured
* [Certifications](/certifications/) for role-specific certifications
* [Scaling AI](/ai-adoption/) for how roles interact with AI-generated code
* [Lean Management](/principles/lean-management/) for the principle behind organizational layering
* [Everyone is Responsible](/principles/everyone-is-responsible/) for individual accountability across all roles
* [Standardized Environment Provisioning](/practices/standardized-environment-provisioning/) for the SEPAW practice executed by Build Engineers
