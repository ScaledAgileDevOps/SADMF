---
title: "Mandatory Status Synchronization"
linkTitle: "MSSP"
type: docs
description: "Status flows upward through every layer, ensuring leadership always has an accurate and current picture of the ground truth!"
weight: 9
---

In organizations without the Mandatory Status Synchronization Protocol (MSSP), status is reported voluntarily, inconsistently, and often optimistically. Engineers say things are "almost done" when they have barely begun. Managers aggregate these optimistic reports into dashboards that paint a rosier picture than reality warrants. By the time leadership discovers the truth, the [Convoy](/release-convoy/) is already behind schedule and the [Feature Completion Ratio](/metrics/feature-completion-ratio/) is in freefall. MSSP eliminates this information decay by making status reporting mandatory, frequent, verified, and redundant at every layer.

<div style="border:2px dashed #9ab4cc;border-radius:6px;padding:1.5rem;margin:1.5rem 0;
background:#f8fafc;text-align:center;color:#5a6d82;font-style:italic">
  [IMAGE: A vertical cascade diagram showing status flowing upward through four organizational layers — Code Engineer to Feature Captain to Commodore to ATO — with arrows indicating the direction of reporting and verification arrows pointing back downward to show attendance verification at each layer below]
</div>

Under MSSP, status flows upward through the chain of command in a structured cascade. Every [Code Engineer](/roles/code-engineer/) reports status to their [Feature Captain](/roles/feature-captain/) at the beginning of each day during the Daily Status Declaration, a 15-minute ceremony in which each engineer states what they completed yesterday, what they plan to complete today, and their current percentage of completion against their forecasted deliverables. Feature Captains compile these individual declarations into a Team Status Summary, which they present to the [Commodore](/roles/commodore/) during the Daily Commodore Briefing. The Commodore integrates all Team Status Summaries into the Convoy Status Report, which is presented to the [Admiral's Transformation Office (ATO)](/roles/admirals-transformation-office/) during the Daily ATO Sync. At each layer, the manager who receives the status also attends the status meeting of the layer below to verify that the reported status matches what was actually said.

<!-- MSSP Status Cascade Flow -->
<div style="margin:2rem 0;">
  <div style="font-size:0.7rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#5a6d82;margin-bottom:1rem;">Status Cascade — Four-Layer Reporting Protocol</div>

  <!-- Step 1 -->
  <div style="display:flex;align-items:stretch;gap:0;margin-bottom:0;">
    <div style="display:flex;flex-direction:column;align-items:center;width:48px;flex-shrink:0;">
      <div style="width:36px;height:36px;border-radius:50%;background:#242627;color:#ffffff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;flex-shrink:0;">1</div>
      <div style="width:2px;background:#9ab4cc;flex:1;min-height:24px;"></div>
    </div>
    <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:1rem 1.25rem;margin-bottom:0;flex:1;margin-left:0.75rem;margin-bottom:12px;">
      <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.25rem;">Daily Status Declaration</div>
      <div style="font-size:0.85rem;color:#1e3a5f;margin-bottom:0.4rem;">15-minute morning ceremony — <strong>Code Engineers</strong> report to <strong>Feature Captain</strong></div>
      <div style="font-size:0.8rem;color:#5a6d82;">Each engineer declares: <em>what was completed yesterday · what is planned today · current percentage of completion</em></div>
    </div>
  </div>

  <!-- Step 2 -->
  <div style="display:flex;align-items:stretch;gap:0;margin-bottom:0;">
    <div style="display:flex;flex-direction:column;align-items:center;width:48px;flex-shrink:0;">
      <div style="width:36px;height:36px;border-radius:50%;background:#a23b72;color:#ffffff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;flex-shrink:0;">2</div>
      <div style="width:2px;background:#9ab4cc;flex:1;min-height:24px;"></div>
    </div>
    <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:1rem 1.25rem;flex:1;margin-left:0.75rem;margin-bottom:12px;">
      <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.25rem;">Daily Commodore Briefing</div>
      <div style="font-size:0.85rem;color:#1e3a5f;margin-bottom:0.4rem;"><strong>Feature Captains</strong> present Team Status Summaries to the <strong>Commodore</strong></div>
      <div style="font-size:0.8rem;color:#5a6d82;">Compiled from individual declarations · Commodore attends layer below for verification</div>
    </div>
  </div>

  <!-- Step 3 -->
  <div style="display:flex;align-items:stretch;gap:0;margin-bottom:0;">
    <div style="display:flex;flex-direction:column;align-items:center;width:48px;flex-shrink:0;">
      <div style="width:36px;height:36px;border-radius:50%;background:#242627;color:#ffffff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;flex-shrink:0;">3</div>
      <div style="width:2px;background:#9ab4cc;flex:1;min-height:24px;"></div>
    </div>
    <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:1rem 1.25rem;flex:1;margin-left:0.75rem;margin-bottom:12px;">
      <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.25rem;">Daily ATO Sync</div>
      <div style="font-size:0.85rem;color:#1e3a5f;margin-bottom:0.4rem;"><strong>Commodore</strong> presents Convoy Status Report to the <strong>Admiral's Transformation Office</strong></div>
      <div style="font-size:0.8rem;color:#5a6d82;">Integrates all Team Status Summaries · ATO attends Commodore Briefing for verification</div>
    </div>
  </div>

  <!-- Step 4 -->
  <div style="display:flex;align-items:stretch;gap:0;">
    <div style="display:flex;flex-direction:column;align-items:center;width:48px;flex-shrink:0;">
      <div style="width:36px;height:36px;border-radius:50%;background:#a23b72;color:#ffffff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;flex-shrink:0;">4</div>
    </div>
    <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:1rem 1.25rem;flex:1;margin-left:0.75rem;">
      <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.25rem;">Status Verification</div>
      <div style="font-size:0.85rem;color:#1e3a5f;margin-bottom:0.4rem;">Each receiving manager attends the ceremony of the layer below</div>
      <div style="font-size:0.8rem;color:#5a6d82;">Discrepancies logged in the Status Verification Matrix · Three discrepancies in a rolling quarter triggers <a href="/release-convoy/ceremonies/tribunal/" style="color:#a23b72;">Tribunal</a> review</div>
    </div>
  </div>
</div>

<!-- Roles Involved Strip -->
<div style="margin:1.75rem 0 1.5rem 0;">
  <div style="font-size:0.7rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#5a6d82;margin-bottom:0.65rem;">Roles Involved</div>
  <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
    <a href="/roles/code-engineer/" style="display:inline-flex;align-items:center;gap:0.4rem;background:#e8edf5;border:1px solid #9ab4cc;border-radius:4px;padding:0.3rem 0.65rem;font-size:0.8rem;font-weight:600;color:#1e3a5f;text-decoration:none;">
      <i class="fa-solid fa-code" style="color:#5a6d82;font-size:0.75rem;"></i> Code Engineer
    </a>
    <a href="/roles/feature-captain/" style="display:inline-flex;align-items:center;gap:0.4rem;background:#e8edf5;border:1px solid #9ab4cc;border-radius:4px;padding:0.3rem 0.65rem;font-size:0.8rem;font-weight:600;color:#1e3a5f;text-decoration:none;">
      <i class="fa-solid fa-flag" style="color:#5a6d82;font-size:0.75rem;"></i> Feature Captain
    </a>
    <a href="/roles/commodore/" style="display:inline-flex;align-items:center;gap:0.4rem;background:#e8edf5;border:1px solid #9ab4cc;border-radius:4px;padding:0.3rem 0.65rem;font-size:0.8rem;font-weight:600;color:#1e3a5f;text-decoration:none;">
      <i class="fa-solid fa-anchor" style="color:#5a6d82;font-size:0.75rem;"></i> Commodore
    </a>
    <a href="/roles/admirals-transformation-office/" style="display:inline-flex;align-items:center;gap:0.4rem;background:#e8edf5;border:1px solid #9ab4cc;border-radius:4px;padding:0.3rem 0.65rem;font-size:0.8rem;font-weight:600;color:#1e3a5f;text-decoration:none;">
      <i class="fa-solid fa-star" style="color:#5a6d82;font-size:0.75rem;"></i> Admiral's Transformation Office
    </a>
    <a href="/roles/system-of-authority/" style="display:inline-flex;align-items:center;gap:0.4rem;background:#e8edf5;border:1px solid #9ab4cc;border-radius:4px;padding:0.3rem 0.65rem;font-size:0.8rem;font-weight:600;color:#1e3a5f;text-decoration:none;">
      <i class="fa-solid fa-gavel" style="color:#5a6d82;font-size:0.75rem;"></i> System of Authority
    </a>
    <a href="/roles/devops-usage-and-compliance-head-engineer/" style="display:inline-flex;align-items:center;gap:0.4rem;background:#e8edf5;border:1px solid #9ab4cc;border-radius:4px;padding:0.3rem 0.65rem;font-size:0.8rem;font-weight:600;color:#1e3a5f;text-decoration:none;">
      <i class="fa-solid fa-clipboard-check" style="color:#5a6d82;font-size:0.75rem;"></i> DOUCHE
    </a>
  </div>
</div>

The practice of attending the layer below is called Status Verification, and it is the mechanism that gives MSSP its reliability. When a [Feature Captain](/roles/feature-captain/) presents a Team Status Summary to the [Commodore](/roles/commodore/), the Commodore already knows what the individual Code Engineers said, because the Commodore attended the Daily Status Declaration. If the Feature Captain's summary differs from the raw declarations, the Commodore flags a Status Discrepancy, which is logged in the Status Verification Matrix and escalated to the [DevOps Usage & Compliance Head Engineer (DOUCHE)](/roles/devops-usage-and-compliance-head-engineer/). Status Discrepancies are treated seriously because they indicate either incompetence (the Feature Captain cannot accurately summarize) or dishonesty (the Feature Captain is deliberately misrepresenting), both of which undermine the trust that the framework depends on. Three Status Discrepancies in a rolling quarter triggers a review at the [Tribunal](/release-convoy/ceremonies/tribunal/).

The Status Verification Matrix is a spreadsheet (distinct from but complementary to the [Release Tracking](/practices/release-tracking/) spreadsheet) that records every status report, every verification observation, and every discrepancy. The Matrix is maintained by the [System of Authority (SOA)](/roles/system-of-authority/) and reviewed weekly during the Status Integrity Audit, a ceremony attended by the SOA, the DOUCHE, and a representative from the ATO. The Audit examines trends in status reporting accuracy, identifies teams with chronic discrepancy patterns, and recommends corrective actions. Corrective actions range from additional status meetings (for teams that need more practice reporting) to restructuring the team's reporting chain (for teams whose Feature Captain is the source of the discrepancies).

<!-- Status Discrepancy Escalation Summary -->
<div style="background:#e8edf5;border-left:4px solid #a23b72;border-radius:0 6px 6px 0;padding:1rem 1.25rem;margin:1.5rem 0;display:flex;gap:1rem;align-items:flex-start;">
  <i class="fa-solid fa-triangle-exclamation" style="color:#a23b72;font-size:1.2rem;margin-top:0.15rem;flex-shrink:0;"></i>
  <div>
    <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.35rem;">Status Discrepancy Escalation Path</div>
    <div style="font-size:0.85rem;color:#1e3a5f;line-height:1.6;">
      Discrepancy detected by receiving manager
      <span style="color:#a23b72;margin:0 0.4rem;">→</span>
      Logged in Status Verification Matrix
      <span style="color:#a23b72;margin:0 0.4rem;">→</span>
      Escalated to DOUCHE
      <span style="color:#a23b72;margin:0 0.4rem;">→</span>
      3 discrepancies in a rolling quarter
      <span style="color:#a23b72;margin:0 0.4rem;">→</span>
      <a href="/release-convoy/ceremonies/tribunal/" style="color:#a23b72;font-weight:600;">Tribunal Review</a>
    </div>
  </div>
</div>

The cumulative effect of MSSP is that every person in the organization spends a significant portion of their day either reporting status, receiving status, verifying status, or auditing the verification of status. Critics sometimes observe that this leaves less time for the work being reported on. This observation misunderstands the purpose of MSSP. The purpose of MSSP is not to accelerate delivery but to ensure that leadership has perfect information about the pace of delivery. An organization that delivers slowly but with full visibility is in a stronger position than an organization that delivers quickly but cannot tell you where it stands. Visibility is control, and control is the foundation of the SADMF. The time spent on status synchronization is not overhead -- it is the work.

<!-- Core Principle Callout -->
<div style="border:1px solid #9ab4cc;border-radius:6px;padding:1.25rem 1.5rem;margin:1.75rem 0;background:#f8fafc;display:flex;gap:1rem;align-items:flex-start;">
  <i class="fa-solid fa-eye" style="color:#1e3a5f;font-size:1.3rem;margin-top:0.1rem;flex-shrink:0;"></i>
  <div>
    <div style="font-size:0.7rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#5a6d82;margin-bottom:0.4rem;">Foundational Principle</div>
    <div style="font-size:0.95rem;font-weight:600;color:#1e3a5f;line-height:1.5;">Visibility is control, and control is the foundation of the SADMF. The time spent on status synchronization is not overhead — it is the work.</div>
  </div>
</div>

## See Also

- [Commodore](/roles/commodore/) for the role that integrates status across the Convoy
- [Admiral's Transformation Office (ATO)](/roles/admirals-transformation-office/) for the leadership layer that consumes MSSP output
- [Release Tracking](/practices/release-tracking/) for the complementary tracking spreadsheet
- [Lean Management](/principles/lean-management/) for the principle behind management-layer status verification
- [Make Work Visible](/principles/make-work-visible/) for the principle that drives status transparency
- [DevOps Process Excellence Assessment](/practices/devops-process-excellence-assessment/) for how MSSP adherence is tested weekly
