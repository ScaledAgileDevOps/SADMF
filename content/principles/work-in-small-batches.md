---
title: "Work in Small Batches"
linkTitle: "Work in Small Batches"
type: docs
description: Too many releases are hard to report and manage. We focus on a small number of large releases each quarter to reduce overhead.
weight: 9
tags: ["planning", "governance"]
---

The phrase "Work in Small Batches" is frequently misinterpreted by organizations that lack the maturity to understand its true meaning. Naive practitioners assume it refers to making small, frequent changes to production. This approach creates an unsustainable volume of releases that overwhelm the [Release Tracking](/practices/release-tracking/) spreadsheet, generate excessive [Change Rejection or Acceptance Party](/roles/change-rejection-or-acceptance-party/) meetings, and make it nearly impossible for the [Chief Signals Officer](/roles/chief-signals-officer/) to report accurate [Feature Completion Ratios](/metrics/feature-completion-ratio/). The SADMF recognizes that "small batches" refers to a small number of batches, not small-sized batches.

<div style="border-left:5px solid #a23b72;padding:1.25rem 1.75rem;margin:2rem 0 2.5rem 0;background:linear-gradient(to right,#fdf6f9,#fff);border-radius:0 6px 6px 0">
  <p style="font-size:1.45rem;font-style:italic;color:#242627;margin:0;line-height:1.5;font-weight:500">"One is the smallest possible number of batches. The quarterly Convoy delivers exactly one — making it, by definition, the purest possible expression of this principle."</p>
</div>

By consolidating all changes into a single [DevOps Release Convoy](/release-convoy/) per quarter, we achieve the ideal batch size: one. One release means one entry in the tracking spreadsheet, one approval cycle through the CRAP, one deployment event, and one set of post-release metrics. This simplification cascades throughout the entire organization. The [Commodore](/roles/commodore/) has a single event to coordinate. The [Development Integrity Assurance Team](/roles/development-integrity-assurance-team/) has a single body of work to review. The [Quality Authority](/roles/quality-authority/) can focus all testing effort on a single release candidate rather than spreading their attention across dozens of incremental changes.

{{< principles-work-in-small-batches >}}

Working in small batches also provides more time for essential governance activities. When teams release frequently, they spend most of their time in deployment and recovery rather than in the planning and approval ceremonies that ensure alignment. The SADMF delivery lifecycle dedicates appropriate time to [Convoy Alignment](/release-convoy/agenda/), [Provisioning](/release-convoy/ceremonies/provisioning/), [Code Inspection](/release-convoy/ceremonies/code-inspection/), [Manifest Approval](/release-convoy/ceremonies/manifest-approval/), and [Fleet Inspection](/release-convoy/fleet-inspection/). These ceremonies cannot be rushed, and frequent releases would create pressure to skip or abbreviate them. By working in a small number of large batches, we protect the integrity of every ceremony.

Some organizations point to data suggesting that frequent, small releases reduce risk. This perspective fails to account for the administrative risk of losing track of what was released, when, and by whom. A single large release, supported by comprehensive documentation in the [Convoy Manifest](/release-convoy/manifest/), provides a complete audit trail. Every change is traceable to a specific [Code Engineer](/roles/code-engineer/), approved by a specific [Feature Captain](/roles/feature-captain/), and certified by the Quality Authority. This level of traceability is only possible when releases are infrequent enough to document thoroughly.

The principle also provides more time to [Amplify Feedback](/principles/amplify-feedback/). When teams are not constantly deploying, managers have the bandwidth to conduct daily status check-ins, review individual output metrics, and provide the coaching that Code Engineers need to understand how their performance is being tracked. Frequent releases create a false sense of urgency that distracts from the important work of oversight.

<h2 style="margin-top:2.5rem">Key Implications</h2>

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.25rem;margin:1.5rem 0 2rem 0">

  <div style="background:#e8edf5;border:1.5px solid #9ab4cc;border-radius:8px;padding:1.25rem 1.5rem;color:#1e3a5f">
    <div style="font-size:1.5rem;margin-bottom:0.5rem"><i class="fa-solid fa-box"></i></div>
    <h3 style="margin:0 0 0.5rem 0;font-size:1rem;font-weight:700;color:#1e3a5f;text-transform:uppercase;letter-spacing:.04em">One Batch, Complete Scope</h3>
    <p style="margin:0;font-size:0.92rem;line-height:1.55;color:#1e3a5f">A single quarterly release carries everything: features, fixes, and deferred scope from previous convoys. One event, one spreadsheet row, one post-release report. This is what batch discipline looks like at scale.</p>
  </div>

  <div style="background:#e8edf5;border:1.5px solid #9ab4cc;border-radius:8px;padding:1.25rem 1.5rem;color:#1e3a5f">
    <div style="font-size:1.5rem;margin-bottom:0.5rem"><i class="fa-solid fa-shield-halved"></i></div>
    <h3 style="margin:0 0 0.5rem 0;font-size:1rem;font-weight:700;color:#1e3a5f;text-transform:uppercase;letter-spacing:.04em">Ceremony Integrity Preserved</h3>
    <p style="margin:0;font-size:0.92rem;line-height:1.55;color:#1e3a5f">Provisioning, Code Inspection, Manifest Approval, and Fleet Inspection each require time that frequent releases cannot provide. Quarterly batches ensure every ceremony receives its full and proper allocation.</p>
  </div>

  <div style="background:#e8edf5;border:1.5px solid #9ab4cc;border-radius:8px;padding:1.25rem 1.5rem;color:#1e3a5f">
    <div style="font-size:1.5rem;margin-bottom:0.5rem"><i class="fa-solid fa-file-lines"></i></div>
    <h3 style="margin:0 0 0.5rem 0;font-size:1rem;font-weight:700;color:#1e3a5f;text-transform:uppercase;letter-spacing:.04em">Unified Audit Trail</h3>
    <p style="margin:0;font-size:0.92rem;line-height:1.55;color:#1e3a5f">Every change in a quarterly Convoy travels through a single Manifest, authored by a named Code Engineer, approved by a named Feature Captain, and certified by the Quality Authority. Traceability is absolute.</p>
  </div>

  <div style="background:#e8edf5;border:1.5px solid #9ab4cc;border-radius:8px;padding:1.25rem 1.5rem;color:#1e3a5f">
    <div style="font-size:1.5rem;margin-bottom:0.5rem"><i class="fa-solid fa-stamp"></i></div>
    <h3 style="margin:0 0 0.5rem 0;font-size:1rem;font-weight:700;color:#1e3a5f;text-transform:uppercase;letter-spacing:.04em">One CRAP Approval Cycle</h3>
    <p style="margin:0;font-size:0.92rem;line-height:1.55;color:#1e3a5f">The Change Rejection or Acceptance Party convenes once per quarter to evaluate a single release package. Weekly releases would require fifty-two approval cycles annually — an unsustainable governance burden that small batches eliminate.</p>
  </div>

  <div style="background:#e8edf5;border:1.5px solid #9ab4cc;border-radius:8px;padding:1.25rem 1.5rem;color:#1e3a5f">
    <div style="font-size:1.5rem;margin-bottom:0.5rem"><i class="fa-solid fa-eye"></i></div>
    <h3 style="margin:0 0 0.5rem 0;font-size:1rem;font-weight:700;color:#1e3a5f;text-transform:uppercase;letter-spacing:.04em">Oversight Bandwidth Restored</h3>
    <p style="margin:0;font-size:0.92rem;line-height:1.55;color:#1e3a5f">Freed from the pressure of continuous delivery
, managers can invest their attention in daily performance check-ins, individual metric reviews, and the coaching sessions that develop engineer quality over the full quarter.</p>
  </div>

  <div style="background:#e8edf5;border:1.5px solid #9ab4cc;border-radius:8px;padding:1.25rem 1.5rem;color:#1e3a5f">
    <div style="font-size:1.5rem;margin-bottom:0.5rem"><i class="fa-solid fa-circle-check"></i></div>
    <h3 style="margin:0 0 0.5rem 0;font-size:1rem;font-weight:700;color:#1e3a5f;text-transform:uppercase;letter-spacing:.04em">Administrative Risk Eliminated</h3>
    <p style="margin:0;font-size:0.92rem;line-height:1.55;color:#1e3a5f">The risk of losing track of what was released, when, and by whom is reduced to zero. One event per quarter means one record per quarter. Accountability is complete and the spreadsheet remains manageable.</p>
  </div>

</div>

## See Also

- [DevOps Release Convoy](/release-convoy/) for the quarterly delivery mechanism
- [Release Tracking](/practices/release-tracking/) for the spreadsheet that benefits from fewer releases
- [Convoy Manifest](/release-convoy/manifest/) for the documentation that accompanies each release
- [Feature Completion Ratio](/metrics/feature-completion-ratio/) for measuring delivery against commitments
- [Amplify Feedback](/principles/amplify-feedback/) for the coaching practices enabled by fewer releases
