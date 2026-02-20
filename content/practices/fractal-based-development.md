---
title: "Fractal-based Development"
linkTitle: "Fractal-based Development"
type: docs
description: "This elegant branching pattern provides the structure required for disciplined delivery at scale!"
weight: 4
---

Named for its self-similar complexity at every level of magnification, this branching pattern ensures that code flows through a series of controlled stages, each managed by a dedicated team, before it is authorized for release. The pattern is required for all teams participating in the [DevOps Release Convoy](/release-convoy/), and deviation from the prescribed branching model is treated as a process violation subject to review by the [DevOps Usage & Compliance Head Engineer (DOUCHE)](/roles/devops-usage-and-compliance-head-engineer/). Great insights into effective delivery can be gained from studying the structure, and all [Code Engineers](/roles/code-engineer/) are expected to have the branching diagram memorized for the [DevOps Process Excellence Assessment](/practices/devops-process-excellence-assessment/).

The branching model operates as follows. All feature branches are created by the [Source Management Team (SMT)](/roles/source-management-team/) from the clean **Develop** branch. Code Engineers are not permitted to create their own branches, as uncontrolled branch creation leads to naming inconsistencies, unauthorized experimentation, and branches that do not conform to the required naming convention (CONVOY-[number]-[feature-id]-[engineer-initials]-[date]). Each feature branch must remain [isolated](https://continuousisolation.com/) from all other changes until the feature is complete, inspected, and certified. This isolation period typically spans the entire coding phase of the Convoy, ensuring that engineers experience the full benefit of working without interference from other engineers' changes.

{{< fractal-diagram >}}

<div style="border:2px dashed #9ab4cc;border-radius:6px;padding:1.5rem;margin:1.5rem 0;background:#f8fafc;text-align:center;color:#5a6d82;font-style:italic">
  [IMAGE: Fractal branching diagram showing the full tree of feature branches diverging from Develop, converging into the Conflict branch, then flowing sequentially through Test and Validation branches before reaching the release convoy — each level of branching visually mirroring the complexity of the level above it, illustrating the self-similar fractal nature of the model]
</div>

When a Code Engineer has completed their work and obtained a Coding Completion Certificate from their [Feature Captain](/roles/feature-captain/), the SMT is notified that the branch is ready for [Conflict Arbitration](/practices/conflict-arbitration/). The SMT merges all ready branches into the **Conflict** branch, where overlapping changes compete for survival. Once the strongest changes have been selected and the weaker changes eliminated, the SMT notifies the [Quality Authority (QA)](/roles/quality-authority/), who pulls the surviving changes into the **Test** branch for manual certification. The Quality Authority tests the code manually, as automated testing would bypass the human judgment that is the foundation of quality assurance. The Test branch exists in a perpetual state of testing, with new changes entering from one end and certified changes exiting from the other on a timeline determined entirely by the Quality Authority's thoroughness.

Once the code has been certified by the Quality Authority, it is forwarded to the [Development Integrity Assurance Team (DIAT)](/roles/development-integrity-assurance-team/) on the **Validation** branch. The DIAT's role is to validate the work of the Quality Authority itself, ensuring that the testers tested correctly and that no defects were overlooked due to testing errors. This layer of meta-testing is essential because testing, like any human activity, is subject to error, and errors in testing are more dangerous than errors in code because they create a false sense of security. If the DIAT approves the code, it is authorized for inclusion in the next [DORC&trade;](/release-convoy/) to set sail.

<!-- PROCESS FLOW: Fractal-based Development Stages -->
<div style="margin:2rem 0 2.5rem 0">
  <h3 style="font-size:1rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#1e3a5f;margin-bottom:1.25rem;display:flex;align-items:center;gap:.5rem">
    <i class="fa-solid fa-code-branch" style="color:#a23b72"></i>
    Branch Lifecycle: Prescribed Stages
  </h3>
  <div style="position:relative;padding-left:2.5rem">
    <!-- vertical connector line -->
    <div style="position:absolute;left:.9rem;top:1.5rem;bottom:1.5rem;width:2px;background:linear-gradient(to bottom,#9ab4cc 0%,#a23b72 100%);border-radius:2px"></div>

    <!-- Step 1 -->
    <div style="position:relative;margin-bottom:1rem">
      <div style="position:absolute;left:-2.5rem;top:.75rem;width:1.6rem;height:1.6rem;border-radius:50%;background:#242627;border:2px solid #9ab4cc;display:flex;align-items:center;justify-content:center">
        <span style="color:#e8edf5;font-size:.65rem;font-weight:700;font-family:monospace">1</span>
      </div>
      <div style="background:#e8edf5;border:1px solid #9ab4cc;border-left:4px solid #242627;border-radius:0 6px 6px 0;padding:.85rem 1rem">
        <div style="display:flex;align-items:baseline;gap:.6rem;flex-wrap:wrap;margin-bottom:.3rem">
          <span style="font-weight:700;color:#1e3a5f;font-size:.95rem">Branch Provisioning</span>
          <code style="background:#242627;color:#e8edf5;font-size:.7rem;padding:.1rem .45rem;border-radius:3px;font-family:monospace">DEVELOP &rarr; FEATURE</code>
        </div>
        <p style="margin:0;font-size:.875rem;color:#3a5070;line-height:1.5">The <a href="/roles/source-management-team/">Source Management Team (SMT)</a> creates a uniquely named feature branch from the clean <strong>Develop</strong> branch. Code Engineers submit a Branch Creation Request Form and await provisioning confirmation before commencing work.</p>
      </div>
    </div>

    <!-- Step 2 -->
    <div style="position:relative;margin-bottom:1rem">
      <div style="position:absolute;left:-2.5rem;top:.75rem;width:1.6rem;height:1.6rem;border-radius:50%;background:#242627;border:2px solid #9ab4cc;display:flex;align-items:center;justify-content:center">
        <span style="color:#e8edf5;font-size:.65rem;font-weight:700;font-family:monospace">2</span>
      </div>
      <div style="background:#e8edf5;border:1px solid #9ab4cc;border-left:4px solid #5a6d82;border-radius:0 6px 6px 0;padding:.85rem 1rem">
        <div style="display:flex;align-items:baseline;gap:.6rem;flex-wrap:wrap;margin-bottom:.3rem">
          <span style="font-weight:700;color:#1e3a5f;font-size:.95rem">Isolated Development</span>
          <code style="background:#242627;color:#e8edf5;font-size:.7rem;padding:.1rem .45rem;border-radius:3px;font-family:monospace">FEATURE (isolated)</code>
        </div>
        <p style="margin:0;font-size:.875rem;color:#3a5070;line-height:1.5">The <a href="/roles/code-engineer/">Code Engineer</a> works within their isolated branch for the full duration of the Coding Ceremony. No synchronization with other branches is permitted. Upon completion, the engineer obtains a Coding Completion Certificate from their <a href="/roles/feature-captain/">Feature Captain</a>.</p>
      </div>
    </div>

    <!-- Step 3 -->
    <div style="position:relative;margin-bottom:1rem">
      <div style="position:absolute;left:-2.5rem;top:.75rem;width:1.6rem;height:1.6rem;border-radius:50%;background:#242627;border:2px solid #9ab4cc;display:flex;align-items:center;justify-content:center">
        <span style="color:#e8edf5;font-size:.65rem;font-weight:700;font-family:monospace">3</span>
      </div>
      <div style="background:#e8edf5;border:1px solid #9ab4cc;border-left:4px solid #a23b72;border-radius:0 6px 6px 0;padding:.85rem 1rem">
        <div style="display:flex;align-items:baseline;gap:.6rem;flex-wrap:wrap;margin-bottom:.3rem">
          <span style="font-weight:700;color:#1e3a5f;font-size:.95rem">Conflict Arbitration</span>
          <code style="background:#a23b72;color:#fff;font-size:.7rem;padding:.1rem .45rem;border-radius:3px;font-family:monospace">FEATURE &rarr; CONFLICT</code>
        </div>
        <p style="margin:0;font-size:.875rem;color:#3a5070;line-height:1.5">All certified feature branches are merged by the SMT into the <strong>Conflict</strong> branch. Overlapping changes are adjudicated via <a href="/practices/conflict-arbitration/">Conflict Arbitration</a>, where the strongest changes survive. Losing changes are archived for compliance purposes.</p>
      </div>
    </div>

    <!-- Step 4 -->
    <div style="position:relative;margin-bottom:1rem">
      <div style="position:absolute;left:-2.5rem;top:.75rem;width:1.6rem;height:1.6rem;border-radius:50%;background:#242627;border:2px solid #9ab4cc;display:flex;align-items:center;justify-content:center">
        <span style="color:#e8edf5;font-size:.65rem;font-weight:700;font-family:monospace">4</span>
      </div>
      <div style="background:#e8edf5;border:1px solid #9ab4cc;border-left:4px solid #5a6d82;border-radius:0 6px 6px 0;padding:.85rem 1rem">
        <div style="display:flex;align-items:baseline;gap:.6rem;flex-wrap:wrap;margin-bottom:.3rem">
          <span style="font-weight:700;color:#1e3a5f;font-size:.95rem">Manual Quality Certification</span>
          <code style="background:#242627;color:#e8edf5;font-size:.7rem;padding:.1rem .45rem;border-radius:3px;font-family:monospace">CONFLICT &rarr; TEST</code>
        </div>
        <p style="margin:0;font-size:.875rem;color:#3a5070;line-height:1.5">Surviving changes are pulled into the <strong>Test</strong> branch by the <a href="/roles/quality-authority/">Quality Authority (QA)</a> for manual certification. The Test branch exists in a perpetual state of testing; automated testing is prohibited as it bypasses the human judgment foundational to quality assurance.</p>
      </div>
    </div>

    <!-- Step 5 -->
    <div style="position:relative;margin-bottom:1rem">
      <div style="position:absolute;left:-2.5rem;top:.75rem;width:1.6rem;height:1.6rem;border-radius:50%;background:#242627;border:2px solid #9ab4cc;display:flex;align-items:center;justify-content:center">
        <span style="color:#e8edf5;font-size:.65rem;font-weight:700;font-family:monospace">5</span>
      </div>
      <div style="background:#e8edf5;border:1px solid #9ab4cc;border-left:4px solid #5a6d82;border-radius:0 6px 6px 0;padding:.85rem 1rem">
        <div style="display:flex;align-items:baseline;gap:.6rem;flex-wrap:wrap;margin-bottom:.3rem">
          <span style="font-weight:700;color:#1e3a5f;font-size:.95rem">Meta-Validation</span>
          <code style="background:#242627;color:#e8edf5;font-size:.7rem;padding:.1rem .45rem;border-radius:3px;font-family:monospace">TEST &rarr; VALIDATION</code>
        </div>
        <p style="margin:0;font-size:.875rem;color:#3a5070;line-height:1.5">Certified code is forwarded to the <a href="/roles/development-integrity-assurance-team/">Development Integrity Assurance Team (DIAT)</a> on the <strong>Validation</strong> branch. The DIAT validates that the Quality Authority tested correctly — a critical meta-testing layer that guards against errors in testing itself.</p>
      </div>
    </div>

    <!-- Step 6 -->
    <div style="position:relative">
      <div style="position:absolute;left:-2.5rem;top:.75rem;width:1.6rem;height:1.6rem;border-radius:50%;background:#a23b72;border:2px solid #a23b72;display:flex;align-items:center;justify-content:center">
        <i class="fa-solid fa-ship" style="color:#fff;font-size:.6rem"></i>
      </div>
      <div style="background:linear-gradient(135deg,#1e3a5f 0%,#242627 100%);border:1px solid #9ab4cc;border-left:4px solid #a23b72;border-radius:0 6px 6px 0;padding:.85rem 1rem">
        <div style="display:flex;align-items:baseline;gap:.6rem;flex-wrap:wrap;margin-bottom:.3rem">
          <span style="font-weight:700;color:#e8edf5;font-size:.95rem">Release Convoy Authorization</span>
          <code style="background:#a23b72;color:#fff;font-size:.7rem;padding:.1rem .45rem;border-radius:3px;font-family:monospace">VALIDATION &rarr; DORC&trade;</code>
        </div>
        <p style="margin:0;font-size:.875rem;color:#9ab4cc;line-height:1.5">DIAT-approved code is authorized for inclusion in the next <a href="/release-convoy/" style="color:#9ab4cc">DevOps Release Convoy (DORC&trade;)</a>. The code sets sail on the next scheduled convoy departure, coordinated by the SMT.</p>
      </div>
    </div>
  </div>
</div>

The complexity of Fractal-based Development is not a weakness but a feature. Each branch, each handoff, and each approval gate represents an opportunity for oversight, and oversight is the mechanism through which quality is built into the delivery process. Organizations that use simpler branching models -- trunk-based development, for example -- sacrifice these oversight opportunities in exchange for speed. SADMF recognizes that speed without oversight is recklessness, and recklessness is how organizations end up in the [Tribunal](/release-convoy/ceremonies/tribunal/). The branching model also provides stable employment for the Source Management Team, whose expertise in managing this structure is irreplaceable and whose headcount is justified by the complexity they maintain.

<!-- ROLES INVOLVED STRIP -->
<div style="margin:2rem 0 1.5rem 0">
  <h3 style="font-size:.8rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#5a6d82;margin-bottom:.75rem">
    <i class="fa-solid fa-users" style="color:#a23b72;margin-right:.35rem"></i>Roles Involved
  </h3>
  <div style="display:flex;flex-wrap:wrap;gap:.5rem">
    <a href="/roles/source-management-team/" style="display:inline-flex;align-items:center;gap:.4rem;background:#e8edf5;border:1px solid #9ab4cc;border-radius:4px;padding:.35rem .75rem;font-size:.8rem;font-weight:600;color:#1e3a5f;text-decoration:none">
      <i class="fa-solid fa-code-branch" style="color:#5a6d82;font-size:.75rem"></i>
      Source Management Team
    </a>
    <a href="/roles/code-engineer/" style="display:inline-flex;align-items:center;gap:.4rem;background:#e8edf5;border:1px solid #9ab4cc;border-radius:4px;padding:.35rem .75rem;font-size:.8rem;font-weight:600;color:#1e3a5f;text-decoration:none">
      <i class="fa-solid fa-laptop-code" style="color:#5a6d82;font-size:.75rem"></i>
      Code Engineer
    </a>
    <a href="/roles/feature-captain/" style="display:inline-flex;align-items:center;gap:.4rem;background:#e8edf5;border:1px solid #9ab4cc;border-radius:4px;padding:.35rem .75rem;font-size:.8rem;font-weight:600;color:#1e3a5f;text-decoration:none">
      <i class="fa-solid fa-star" style="color:#5a6d82;font-size:.75rem"></i>
      Feature Captain
    </a>
    <a href="/roles/quality-authority/" style="display:inline-flex;align-items:center;gap:.4rem;background:#e8edf5;border:1px solid #9ab4cc;border-radius:4px;padding:.35rem .75rem;font-size:.8rem;font-weight:600;color:#1e3a5f;text-decoration:none">
      <i class="fa-solid fa-magnifying-glass-chart" style="color:#5a6d82;font-size:.75rem"></i>
      Quality Authority
    </a>
    <a href="/roles/development-integrity-assurance-team/" style="display:inline-flex;align-items:center;gap:.4rem;background:#e8edf5;border:1px solid #9ab4cc;border-radius:4px;padding:.35rem .75rem;font-size:.8rem;font-weight:600;color:#1e3a5f;text-decoration:none">
      <i class="fa-solid fa-shield-halved" style="color:#5a6d82;font-size:.75rem"></i>
      Development Integrity Assurance Team
    </a>
    <a href="/roles/devops-usage-and-compliance-head-engineer/" style="display:inline-flex;align-items:center;gap:.4rem;background:#242627;border:1px solid #a23b72;border-radius:4px;padding:.35rem .75rem;font-size:.8rem;font-weight:600;color:#e8edf5;text-decoration:none">
      <i class="fa-solid fa-gavel" style="color:#a23b72;font-size:.75rem"></i>
      DOUCHE
    </a>
  </div>
</div>

## See Also

- [Source Management Team (SMT)](/roles/source-management-team/) for the team that controls all branch operations
- [Conflict Arbitration](/practices/conflict-arbitration/) for how branch conflicts are resolved
- [CI/CD/ED](/practices/ci-cd-ed/) for the Continuous Isolation practice that drives this branching model
- [Quality Authority](/roles/quality-authority/) for the team that certifies code on the Test branch
- [Development Integrity Assurance Team (DIAT)](/roles/development-integrity-assurance-team/) for the team that validates the validators
- [Coding](/release-convoy/ceremonies/coding/) for the ceremony where Code Engineers work within their isolated branches
