---
title: "Standardized Environment Provisioning"
linkTitle: "SEPAW"
type: docs
description: "Environments manually configured via a 200-step checklist ensure consistency that code-based provisioning can never guarantee!"
weight: 8
---

The broader industry has embraced Infrastructure as Code (IaC) -- the practice of defining environments through machine-readable configuration files. SADMF recognizes a fundamental flaw in this approach: code can have bugs. A misconfigured Terraform module or an errant Ansible playbook can provision hundreds of incorrectly configured environments before anyone notices. Checklists, by contrast, are executed one step at a time by a trained human being who can see the environment taking shape and catch errors as they occur. The Standardized Environment Provisioning and Assurance Workflow (SEPAW) replaces the fragility of code with the reliability of manual, step-by-step provisioning.

<!-- SEPAW Process Flow -->
<div style="margin:2rem 0">
  <div style="font-size:0.7rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#5a6d82;margin-bottom:0.75rem">SEPAW Workflow &mdash; 6 to 8 Weeks, End to End</div>

  <!-- Step 1 -->
  <div style="display:flex;align-items:flex-start;gap:0.9rem;margin-bottom:0">
    <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">
      <div style="width:2rem;height:2rem;border-radius:50%;background:#242627;color:#fff;font-size:0.75rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0">1</div>
      <div style="width:2px;height:2.5rem;background:#9ab4cc;margin-top:2px"></div>
    </div>
    <div style="background:#e8edf5;border:1.5px solid #9ab4cc;border-radius:6px;padding:0.75rem 1rem;flex:1;margin-bottom:0">
      <div style="font-size:0.65rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5a6d82;margin-bottom:0.2rem">Step 1 &mdash; Request Submission</div>
      <div style="font-size:0.92rem;color:#1e3a5f;font-weight:600">Environment Provisioning Request Form</div>
      <div style="font-size:0.82rem;color:#5a6d82;margin-top:0.2rem">Submitted by the requesting team; describes environment purpose, required software, and target Convoy</div>
    </div>
  </div>

  <!-- Step 2 -->
  <div style="display:flex;align-items:flex-start;gap:0.9rem;margin-bottom:0">
    <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">
      <div style="width:2rem;height:2rem;border-radius:50%;background:#242627;color:#fff;font-size:0.75rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0">2</div>
      <div style="width:2px;height:2.5rem;background:#9ab4cc;margin-top:2px"></div>
    </div>
    <div style="background:#e8edf5;border:1.5px solid #9ab4cc;border-radius:6px;padding:0.75rem 1rem;flex:1;margin-bottom:0">
      <div style="font-size:0.65rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5a6d82;margin-bottom:0.2rem">Step 2 &mdash; Sequential Approval Chain</div>
      <div style="font-size:0.92rem;color:#1e3a5f;font-weight:600">Feature Captain &rarr; Commodore &rarr; Admiral's Transformation Office</div>
      <div style="font-size:0.82rem;color:#5a6d82;margin-top:0.2rem">Each approver reviews and signs in order; no approver may act until the preceding approval is complete</div>
    </div>
  </div>

  <!-- Step 3 -->
  <div style="display:flex;align-items:flex-start;gap:0.9rem;margin-bottom:0">
    <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">
      <div style="width:2rem;height:2rem;border-radius:50%;background:#242627;color:#fff;font-size:0.75rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0">3</div>
      <div style="width:2px;height:2.5rem;background:#9ab4cc;margin-top:2px"></div>
    </div>
    <div style="background:#e8edf5;border:1.5px solid #9ab4cc;border-radius:6px;padding:0.75rem 1rem;flex:1;margin-bottom:0">
      <div style="font-size:0.65rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5a6d82;margin-bottom:0.2rem">Step 3 &mdash; Build Engineer Queue</div>
      <div style="font-size:0.92rem;color:#1e3a5f;font-weight:600">Priority-Based Capacity Allocation</div>
      <div style="font-size:0.82rem;color:#5a6d82;margin-top:0.2rem">Request queued alongside all other provisioning work; prioritized by Convoy urgency and current BE capacity</div>
    </div>
  </div>

  <!-- Step 4 -->
  <div style="display:flex;align-items:flex-start;gap:0.9rem;margin-bottom:0">
    <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">
      <div style="width:2rem;height:2rem;border-radius:50%;background:#a23b72;color:#fff;font-size:0.75rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0">4</div>
      <div style="width:2px;height:2.5rem;background:#9ab4cc;margin-top:2px"></div>
    </div>
    <div style="background:#e8edf5;border:1.5px solid #a23b72;border-radius:6px;padding:0.75rem 1rem;flex:1;margin-bottom:0">
      <div style="font-size:0.65rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#a23b72;margin-bottom:0.2rem">Step 4 &mdash; Manual Provisioning (200 Steps)</div>
      <div style="font-size:0.92rem;color:#1e3a5f;font-weight:600">Certified Build Engineer Executes SEPAW Checklist</div>
      <div style="font-size:0.82rem;color:#5a6d82;margin-top:0.2rem">Each step initialed upon completion; each verification substep cross-checked against the SEPAW Reference Binder</div>
    </div>
  </div>

  <!-- Step 5 -->
  <div style="display:flex;align-items:flex-start;gap:0.9rem;margin-bottom:0">
    <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">
      <div style="width:2rem;height:2rem;border-radius:50%;background:#242627;color:#fff;font-size:0.75rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0">5</div>
      <div style="width:2px;height:0;background:transparent;margin-top:2px"></div>
    </div>
    <div style="background:#e8edf5;border:1.5px solid #9ab4cc;border-radius:6px;padding:0.75rem 1rem;flex:1;margin-bottom:0">
      <div style="font-size:0.65rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5a6d82;margin-bottom:0.2rem">Step 5 &mdash; Documentation &amp; Completion</div>
      <div style="font-size:0.92rem;color:#1e3a5f;font-weight:600">Completed Checklist Filed with Convoy Manifest</div>
      <div style="font-size:0.82rem;color:#5a6d82;margin-top:0.2rem">Signed checklist archived as evidence of proper provisioning; environment released to requesting team</div>
    </div>
  </div>
</div>

<!-- Roles Involved Strip -->
<div style="margin:1.5rem 0 2rem 0">
  <div style="font-size:0.7rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#5a6d82;margin-bottom:0.6rem">Roles Involved</div>
  <div style="display:flex;flex-wrap:wrap;gap:0.5rem">
    <a href="/roles/build-engineers/" style="display:inline-flex;align-items:center;gap:0.4rem;background:#e8edf5;border:1.5px solid #9ab4cc;border-radius:4px;padding:0.3rem 0.65rem;text-decoration:none;color:#1e3a5f;font-size:0.8rem;font-weight:600">
      <i class="fa-solid fa-screwdriver-wrench" style="color:#5a6d82;font-size:0.7rem"></i> Build Engineer (BE)
    </a>
    <a href="/roles/feature-captain/" style="display:inline-flex;align-items:center;gap:0.4rem;background:#e8edf5;border:1.5px solid #9ab4cc;border-radius:4px;padding:0.3rem 0.65rem;text-decoration:none;color:#1e3a5f;font-size:0.8rem;font-weight:600">
      <i class="fa-solid fa-flag" style="color:#5a6d82;font-size:0.7rem"></i> Feature Captain
    </a>
    <a href="/roles/commodore/" style="display:inline-flex;align-items:center;gap:0.4rem;background:#e8edf5;border:1.5px solid #9ab4cc;border-radius:4px;padding:0.3rem 0.65rem;text-decoration:none;color:#1e3a5f;font-size:0.8rem;font-weight:600">
      <i class="fa-solid fa-anchor" style="color:#5a6d82;font-size:0.7rem"></i> Commodore
    </a>
    <a href="/roles/admirals-transformation-office/" style="display:inline-flex;align-items:center;gap:0.4rem;background:#e8edf5;border:1.5px solid #9ab4cc;border-radius:4px;padding:0.3rem 0.65rem;text-decoration:none;color:#1e3a5f;font-size:0.8rem;font-weight:600">
      <i class="fa-solid fa-star" style="color:#5a6d82;font-size:0.7rem"></i> Admiral's Transformation Office (ATO)
    </a>
  </div>
</div>

The SEPAW checklist contains 200 steps, each specifying a single configuration action to be performed by a certified [Build Engineer (BE)](/roles/build-engineers/). Steps range from the foundational (install the operating system, configure network interfaces, set DNS resolution) to the framework-specific (install the approved version of the deployment toolchain, configure the approved monitoring agents, create the directory structure required by [Fractal-based Development](/practices/fractal-based-development/)). Each step includes a verification substep in which the Build Engineer confirms the action was completed correctly by visually inspecting the result, running a manual test command, or comparing the configuration to a reference screenshot in the SEPAW Reference Binder. The Build Engineer initials each step upon completion, and the completed checklist is filed with the [Convoy Manifest](/release-convoy/manifest/) as evidence of proper provisioning.

<figure style="margin:1.5rem 0;text-align:center">
  <img src="/images/generated/sepaw-reference-binder.png"
       alt="The SEPAW Reference Binder open to a sample checklist page, showing numbered rows with action descriptions, verification substeps, and a column of Build Engineer initials; a reference screenshot is visible inset beside one step"
       style="max-width:100%;border-radius:6px;box-shadow:0 2px 12px rgba(0,0,0,0.12)">
</figure>

Environment provisioning under SEPAW typically requires 6-8 weeks from request to availability. This timeline reflects the thoroughness of the process: the initial request must be submitted via the Environment Provisioning Request Form, which is approved by the [Feature Captain](/roles/feature-captain/), the [Commodore](/roles/commodore/), and the [Admiral's Transformation Office (ATO)](/roles/admirals-transformation-office/). Once approved, the request enters the Build Engineer queue, where it is prioritized alongside other provisioning requests based on Convoy priority and the current capacity of the Build Engineering team. Build Engineers are a scarce resource -- their expertise in executing 200-step checklists without error is rare and cannot be easily replicated -- and the queue ensures that their time is allocated to the highest-priority environments first.

The SEPAW process produces environments that are identical in configuration, because every environment is built from the same checklist. Organizations that use Infrastructure as Code claim the same benefit, but their consistency depends on the correctness of their code, which must itself be tested, reviewed, and maintained -- creating an infinite regress of automation that requires its own automation. SEPAW breaks this regress by grounding consistency in human action. If two environments differ, the difference can be traced to a specific step in the checklist and a specific Build Engineer who executed it. This traceability is impossible with automated provisioning, where a configuration drift might be caused by a race condition, a version mismatch, or a bug in the provisioning tool itself. Human error is at least human and therefore comprehensible; machine error is opaque.

When an environment requires modification after initial provisioning -- a configuration change, a software update, or a capacity adjustment -- the modification follows the Change Provisioning Amendment Process (CPAP). CPAP requires a new checklist that documents only the steps being changed, cross-referenced to the original SEPAW checklist by step number. The amendment checklist is approved through the same sequential approval chain as the original provisioning request and is executed by the same Build Engineer who provisioned the environment originally, ensuring continuity of knowledge. If the original Build Engineer is unavailable, a Knowledge Transfer Session (minimum 4 hours) is conducted with the replacement Build Engineer before any modifications begin. This practice ensures that no environment is ever modified by someone who does not fully understand its history, its purpose, and the 200 steps that brought it into existence.

## See Also

- [Build Engineers (BE)](/roles/build-engineers/) for the role that executes SEPAW checklists
- [Fractal-based Development](/practices/fractal-based-development/) for the branching model that environments must support
- [Convoy Manifest](/release-convoy/manifest/) for where completed provisioning checklists are filed
- [Lean Management](/principles/lean-management/) for the principle that justifies manual provisioning layers
- [Fail Fast](/principles/fail-fast/) for why slow, careful provisioning prevents costly failures
- [Admiral's Transformation Office (ATO)](/roles/admirals-transformation-office/) for the approval authority over environment requests
