---
title: "Comprehensive Documentation Assurance Protocol"
linkTitle: "CDAP"
type: docs
description: "Documentation is the primary deliverable -- code is merely an artifact of the documentation process!"
weight: 7
---

Other frameworks treat documentation as a secondary concern -- something generated after the code is written, if generated at all. SADMF recognizes that code without documentation is an unverifiable claim. Anyone can write code that appears to work. Only documentation proves that the code was intended to work the way it does, that the appropriate authorities approved it, and that the person who wrote it understood what they were doing.

{{< practices-cdap-documentation >}}

<!-- CDAP Process Flow -->
<div style="margin:2rem 0">
  <h3 style="color:#1e3a5f;font-size:1.05rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;margin-bottom:1.25rem">
    <i class="fa-solid fa-file-lines" style="color:#a23b72;margin-right:.5rem"></i>The CDAP Documentation Lifecycle
  </h3>

  <!-- Step 1: CIA -->
  <div style="display:flex;gap:1rem;margin-bottom:.75rem;align-items:stretch">
    <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">
      <div style="width:2.4rem;height:2.4rem;border-radius:50%;background:#a23b72;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1rem;flex-shrink:0">1</div>
      <div style="width:2px;background:#9ab4cc;flex:1;margin-top:.25rem"></div>
    </div>
    <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:1rem 1.25rem;flex:1;margin-bottom:.25rem">
      <div style="font-weight:700;color:#1e3a5f;margin-bottom:.25rem">Change Impact Assessment (CIA)</div>
      <div style="color:#5a6d82;font-size:.92rem">12-page document covering business justification, technical approach, file impact, line-count estimates, Convoy risk, and SADMF Risk Taxonomy scoring (17 categories × 5-point scale). Submitted <em>before</em> any code is written.</div>
    </div>
  </div>

  <!-- Step 2: Sequential Approval -->
  <div style="display:flex;gap:1rem;margin-bottom:.75rem;align-items:stretch">
    <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">
      <div style="width:2.4rem;height:2.4rem;border-radius:50%;background:#a23b72;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1rem;flex-shrink:0">2</div>
      <div style="width:2px;background:#9ab4cc;flex:1;margin-top:.25rem"></div>
    </div>
    <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:1rem 1.25rem;flex:1;margin-bottom:.25rem">
      <div style="font-weight:700;color:#1e3a5f;margin-bottom:.25rem">Sequential CIA Approval Chain <span style="font-weight:400;color:#5a6d82;font-size:.88rem">(2–3 weeks)</span></div>
      <div style="display:flex;flex-wrap:wrap;gap:.4rem;margin-top:.5rem">
        <span style="background:#fff;border:1px solid #9ab4cc;border-radius:4px;padding:.2rem .6rem;font-size:.82rem;color:#1e3a5f"><i class="fa-solid fa-user" style="margin-right:.3rem;color:#a23b72"></i>Feature Captain</span>
        <span style="color:#9ab4cc;align-self:center;font-size:.85rem">→</span>
        <span style="background:#fff;border:1px solid #9ab4cc;border-radius:4px;padding:.2rem .6rem;font-size:.82rem;color:#1e3a5f"><i class="fa-solid fa-users" style="margin-right:.3rem;color:#a23b72"></i>CSET</span>
        <span style="color:#9ab4cc;align-self:center;font-size:.85rem">→</span>
        <span style="background:#fff;border:1px solid #9ab4cc;border-radius:4px;padding:.2rem .6rem;font-size:.82rem;color:#1e3a5f"><i class="fa-solid fa-building-columns" style="margin-right:.3rem;color:#a23b72"></i>EARB</span>
        <span style="color:#9ab4cc;align-self:center;font-size:.85rem">→</span>
        <span style="background:#fff;border:1px solid #9ab4cc;border-radius:4px;padding:.2rem .6rem;font-size:.82rem;color:#1e3a5f"><i class="fa-solid fa-anchor" style="margin-right:.3rem;color:#a23b72"></i>DOUCHE</span>
      </div>
      <div style="color:#5a6d82;font-size:.85rem;margin-top:.5rem;font-style:italic">Parallel approval is not permitted. Each approver requires the context of prior signatures.</div>
    </div>
  </div>

  <!-- Step 3: MSD -->
  <div style="display:flex;gap:1rem;margin-bottom:.75rem;align-items:stretch">
    <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">
      <div style="width:2.4rem;height:2.4rem;border-radius:50%;background:#a23b72;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1rem;flex-shrink:0">3</div>
      <div style="width:2px;background:#9ab4cc;flex:1;margin-top:.25rem"></div>
    </div>
    <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:1rem 1.25rem;flex:1;margin-bottom:.25rem">
      <div style="font-weight:700;color:#1e3a5f;margin-bottom:.25rem">Method Specification Documents (MSD)</div>
      <div style="color:#5a6d82;font-size:.92rem">One per method. Covers purpose, inputs, outputs, side effects, and the CIA section it implements. Reviewed alongside the code during Code Inspection. A method without an MSD is treated as unauthorized code.</div>
    </div>
  </div>

  <!-- Step 4: PIVD -->
  <div style="display:flex;gap:1rem;margin-bottom:.75rem;align-items:stretch">
    <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">
      <div style="width:2.4rem;height:2.4rem;border-radius:50%;background:#a23b72;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1rem;flex-shrink:0">4</div>
      <div style="width:2px;background:#9ab4cc;flex:1;margin-top:.25rem"></div>
    </div>
    <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:1rem 1.25rem;flex:1;margin-bottom:.25rem">
      <div style="font-weight:700;color:#1e3a5f;margin-bottom:.25rem">Post-Implementation Verification Document (PIVD)</div>
      <div style="color:#5a6d82;font-size:.92rem">Produced after coding is complete. Describes what was actually built, any deviations from the CIA, and the justification for each deviation. Undocumented deviations are flagged as process violations.</div>
    </div>
  </div>

  <!-- Step 5: Repository & Reporting -->
  <div style="display:flex;gap:1rem;margin-bottom:.75rem;align-items:stretch">
    <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">
      <div style="width:2.4rem;height:2.4rem;border-radius:50%;background:#a23b72;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1rem;flex-shrink:0">5</div>
      <div style="width:2px;background:transparent;flex:1"></div>
    </div>
    <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:1rem 1.25rem;flex:1">
      <div style="font-weight:700;color:#1e3a5f;margin-bottom:.25rem">Documentation Repository &amp; Completeness Reporting</div>
      <div style="color:#5a6d82;font-size:.92rem">All CIA, MSD, and PIVD artifacts are stored in a separate version control system maintained by the Documentation Coordinator. Monthly Documentation Completeness Reports are produced; any ratio below 100% triggers automatic escalation to the ATO.</div>
    </div>
  </div>
</div>

Before a [Code Engineer](/roles/code-engineer/) writes a single line of code, they must complete a 12-page Change Impact Assessment (CIA). The CIA documents the proposed change in exhaustive detail: the business justification, the technical approach, the files that will be modified, the estimated number of lines added and removed, the potential impact on every other feature in the current [Convoy](/release-convoy/), and a risk assessment scored against the SADMF Risk Taxonomy (17 risk categories, each rated on a 5-point severity scale). The CIA must be approved in sequence by the [Feature Captain](/roles/feature-captain/), the [Code Standards Enforcement Team (CSET)](/roles/code-standards-enforcement-team/), the [Enterprise Architecture Review Board (EARB)](/roles/enterprise-architecture-review-board/), and the [DevOps Usage & Compliance Head Engineer (DOUCHE)](/roles/devops-usage-and-compliance-head-engineer/). Approval in sequence means that each approver reviews the document only after the previous approver has signed. Parallel approval is not permitted because later approvers need the context of earlier approvers' comments to make informed decisions. The sequential approval process typically takes 2-3 weeks, during which the Code Engineer is expected to remain available for questions but is not permitted to begin coding.

Upon CIA approval, the Code Engineer may begin writing code, but the documentation requirements do not end. Every method must have an accompanying Method Specification Document (MSD) that describes the method's purpose, inputs, outputs, side effects, and the section of the CIA it implements. The MSD is reviewed by the CSET during [Code Inspection](/release-convoy/ceremonies/code-inspection/) alongside the code itself, and a method without a corresponding MSD is treated as undocumented code, which is functionally equivalent to unauthorized code. After coding is complete, the Code Engineer must produce a Post-Implementation Verification Document (PIVD) that describes what was actually built, how it differs from the CIA (if at all), and why any deviations occurred. Deviations without documented justification are flagged as process violations.

The CDAP documentation suite -- CIA, MSD, and PIVD -- is stored in the Documentation Repository, a separate version control system from the code repository. This separation is intentional: code and documentation have different lifecycles, different approval chains, and different audiences. Code is for machines; documentation is for auditors. The Documentation Repository is maintained by a dedicated Documentation Coordinator role within the [System of Authority (SOA)](/roles/system-of-authority/), who ensures that every document is properly versioned, cross-referenced, and archived. The Documentation Coordinator also produces the monthly Documentation Completeness Report, which tracks the ratio of documented to undocumented code changes. A ratio below 100% triggers an automatic escalation to the [Admiral's Transformation Office (ATO)](/roles/admirals-transformation-office/).

Critics of CDAP sometimes observe that the documentation process adds significant time to the delivery cycle. This observation is correct and is precisely the point. Documentation time is thinking time, and thinking time prevents defects. A Code Engineer who spends two weeks documenting a proposed change will inevitably discover flaws in their approach that would have become defects in production. The documentation process is, in effect, a form of static analysis performed by humans -- slower than automated tools, certainly, but more thorough and more aligned with the SADMF principle that human judgment must never be replaced by automation. The CDAP ensures that when code finally reaches production, it arrives with a complete paper trail that proves the organization knew exactly what it was deploying and chose to deploy it deliberately.

<!-- Roles Involved Strip -->
<div style="margin:2rem 0">
  <div style="font-size:.78rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#5a6d82;margin-bottom:.6rem">
    <i class="fa-solid fa-id-badge" style="margin-right:.4rem;color:#a23b72"></i>Roles Involved
  </div>
  <div style="display:flex;flex-wrap:wrap;gap:.5rem">
    <a href="/roles/code-engineer/" style="display:inline-flex;align-items:center;gap:.4rem;background:#242627;color:#fff;border-radius:4px;padding:.35rem .75rem;font-size:.82rem;font-weight:600;text-decoration:none">
      <i class="fa-solid fa-code" style="font-size:.75rem;color:#a23b72"></i>Code Engineer
    </a>
    <a href="/roles/feature-captain/" style="display:inline-flex;align-items:center;gap:.4rem;background:#242627;color:#fff;border-radius:4px;padding:.35rem .75rem;font-size:.82rem;font-weight:600;text-decoration:none">
      <i class="fa-solid fa-star" style="font-size:.75rem;color:#a23b72"></i>Feature Captain
    </a>
    <a href="/roles/code-standards-enforcement-team/" style="display:inline-flex;align-items:center;gap:.4rem;background:#242627;color:#fff;border-radius:4px;padding:.35rem .75rem;font-size:.82rem;font-weight:600;text-decoration:none">
      <i class="fa-solid fa-shield-halved" style="font-size:.75rem;color:#a23b72"></i>CSET
    </a>
    <a href="/roles/enterprise-architecture-review-board/" style="display:inline-flex;align-items:center;gap:.4rem;background:#242627;color:#fff;border-radius:4px;padding:.35rem .75rem;font-size:.82rem;font-weight:600;text-decoration:none">
      <i class="fa-solid fa-building-columns" style="font-size:.75rem;color:#a23b72"></i>EARB
    </a>
    <a href="/roles/devops-usage-and-compliance-head-engineer/" style="display:inline-flex;align-items:center;gap:.4rem;background:#242627;color:#fff;border-radius:4px;padding:.35rem .75rem;font-size:.82rem;font-weight:600;text-decoration:none">
      <i class="fa-solid fa-anchor" style="font-size:.75rem;color:#a23b72"></i>DOUCHE
    </a>
    <a href="/roles/system-of-authority/" style="display:inline-flex;align-items:center;gap:.4rem;background:#242627;color:#fff;border-radius:4px;padding:.35rem .75rem;font-size:.82rem;font-weight:600;text-decoration:none">
      <i class="fa-solid fa-sitemap" style="font-size:.75rem;color:#a23b72"></i>SOA / Documentation Coordinator
    </a>
    <a href="/roles/admirals-transformation-office/" style="display:inline-flex;align-items:center;gap:.4rem;background:#242627;color:#fff;border-radius:4px;padding:.35rem .75rem;font-size:.82rem;font-weight:600;text-decoration:none">
      <i class="fa-solid fa-sailboat" style="font-size:.75rem;color:#a23b72"></i>ATO
    </a>
  </div>
</div>

## See Also

- [Code Standards Enforcement Team (CSET)](/roles/code-standards-enforcement-team/) for the team that reviews documentation during Code Inspection
- [Enterprise Architecture Review Board (EARB)](/roles/enterprise-architecture-review-board/) for CIA approval authority
- [Code Inspection](/release-convoy/ceremonies/code-inspection/) for the ceremony where documentation is verified
- [Lean Management](/principles/lean-management/) for the principle that documentation layers embody
- [Continuous Learning](/principles/continuous-learning/) for how documentation review builds institutional knowledge
- [Make Work Visible](/principles/make-work-visible/) for how CDAP makes every decision traceable
