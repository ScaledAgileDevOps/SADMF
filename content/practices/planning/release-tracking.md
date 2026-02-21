---
title: "Release Tracking"
linkTitle: "Release Tracking"
type: docs
description: "The 47-tab Release Tracking Spreadsheet provides complete transparency into every release, every approval, and every individual!"
weight: 6
categories: ["Planning, Tracking & Reporting"]
tags: ["release-management", "reporting", "documentation", "planning"]
aliases: ["/practices/release-tracking/"]
---

The [Commodore](/roles/commodore/) maintains this manually curated workbook in real-time during all Convoy ceremonies, ensuring that no decision, no change, and no responsible party goes unrecorded. It serves as the single source of truth for the [DevOps Release Convoy](/release-convoy/), with each of its 47 tabs tracking a specific dimension of the release process -- from code changes to ceremony attendance to approval signatures.

{{< practices-release-tracking-spreadsheet >}}

The 47 tabs are organized into five sections. The first section, Change Manifest (tabs 1-12), records every code change included in the release, the [Code Engineer](/roles/code-engineer/) who made the change, the [Feature Captain](/roles/feature-captain/) who authorized it, the [Conflict Arbitration](/practices/conflict-arbitration/) outcome, the [Code Inspection](/release-convoy/ceremonies/code-inspection/) result, and the testing certification from the [Quality Authority](/roles/quality-authority/). The second section, Approval Chain (tabs 13-22), documents every approval signature from the [CRAP](/roles/change-rejection-or-acceptance-party/), the [DIAT](/roles/development-integrity-assurance-team/), the [EARB](/roles/enterprise-architecture-review-board/), and the [Review Board Review Board](/roles/review-board-review-board/). The third section, Risk Registry (tabs 23-31), catalogs every identified risk, its assessed severity, and the mitigation action taken. The fourth section, Personnel Accountability (tabs 32-41), maps every deliverable to the individual responsible, enabling the [Tribunal](/release-convoy/ceremonies/tribunal/) to trace any post-release defect back to a named person. The fifth section, Metrics Dashboard (tabs 42-47), aggregates data from the other tabs into charts that the [Chief Signals Officer](/roles/chief-signals-officer/) presents to the [Admiral's Transformation Office](/roles/admirals-transformation-office/).

<!-- Five-Section Process Flow -->
<div style="margin:2rem 0;">
  <div style="font-size:0.7rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#5a6d82;margin-bottom:1rem;">The 47-Tab Structure</div>

  <!-- Step 1 -->
  <div style="display:flex;gap:0;margin-bottom:0;">
    <div style="display:flex;flex-direction:column;align-items:center;margin-right:1rem;flex-shrink:0;">
      <div style="width:2.4rem;height:2.4rem;border-radius:50%;background:#1e3a5f;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.9rem;flex-shrink:0;">1</div>
      <div style="width:2px;flex:1;background:#9ab4cc;min-height:2.5rem;"></div>
    </div>
    <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:1rem 1.25rem;margin-bottom:1rem;flex:1;">
      <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.25rem;">Change Manifest <span style="font-weight:400;color:#5a6d82;font-size:0.85rem;">(Tabs 1–12)</span></div>
      <div style="font-size:0.9rem;color:#1e3a5f;">Records every code change, the <strong>Code Engineer</strong> who made it, the <strong>Feature Captain</strong> who authorized it, Conflict Arbitration outcomes, Code Inspection results, and Quality Authority testing certification.</div>
    </div>
  </div>

  <!-- Step 2 -->
  <div style="display:flex;gap:0;margin-bottom:0;">
    <div style="display:flex;flex-direction:column;align-items:center;margin-right:1rem;flex-shrink:0;">
      <div style="width:2.4rem;height:2.4rem;border-radius:50%;background:#1e3a5f;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.9rem;flex-shrink:0;">2</div>
      <div style="width:2px;flex:1;background:#9ab4cc;min-height:2.5rem;"></div>
    </div>
    <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:1rem 1.25rem;margin-bottom:1rem;flex:1;">
      <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.25rem;">Approval Chain <span style="font-weight:400;color:#5a6d82;font-size:0.85rem;">(Tabs 13–22)</span></div>
      <div style="font-size:0.9rem;color:#1e3a5f;">Documents every approval signature from the <strong>CRAP</strong>, the <strong>DIAT</strong>, the <strong>EARB</strong>, and the <strong>Review Board Review Board</strong>.</div>
    </div>
  </div>

  <!-- Step 3 -->
  <div style="display:flex;gap:0;margin-bottom:0;">
    <div style="display:flex;flex-direction:column;align-items:center;margin-right:1rem;flex-shrink:0;">
      <div style="width:2.4rem;height:2.4rem;border-radius:50%;background:#1e3a5f;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.9rem;flex-shrink:0;">3</div>
      <div style="width:2px;flex:1;background:#9ab4cc;min-height:2.5rem;"></div>
    </div>
    <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:1rem 1.25rem;margin-bottom:1rem;flex:1;">
      <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.25rem;">Risk Registry <span style="font-weight:400;color:#5a6d82;font-size:0.85rem;">(Tabs 23–31)</span></div>
      <div style="font-size:0.9rem;color:#1e3a5f;">Catalogs every identified risk, its assessed severity, and the mitigation action taken.</div>
    </div>
  </div>

  <!-- Step 4 -->
  <div style="display:flex;gap:0;margin-bottom:0;">
    <div style="display:flex;flex-direction:column;align-items:center;margin-right:1rem;flex-shrink:0;">
      <div style="width:2.4rem;height:2.4rem;border-radius:50%;background:#1e3a5f;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.9rem;flex-shrink:0;">4</div>
      <div style="width:2px;flex:1;background:#9ab4cc;min-height:2.5rem;"></div>
    </div>
    <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:1rem 1.25rem;margin-bottom:1rem;flex:1;">
      <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.25rem;">Personnel Accountability <span style="font-weight:400;color:#5a6d82;font-size:0.85rem;">(Tabs 32–41)</span></div>
      <div style="font-size:0.9rem;color:#1e3a5f;">Maps every deliverable to the individual responsible, enabling the <strong>Tribunal</strong> to trace any post-release defect back to a named person.</div>
    </div>
  </div>

  <!-- Step 5 (last — no connector line) -->
  <div style="display:flex;gap:0;">
    <div style="display:flex;flex-direction:column;align-items:center;margin-right:1rem;flex-shrink:0;">
      <div style="width:2.4rem;height:2.4rem;border-radius:50%;background:#a23b72;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.9rem;flex-shrink:0;">5</div>
    </div>
    <div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:1rem 1.25rem;margin-bottom:1rem;flex:1;">
      <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.25rem;">Metrics Dashboard <span style="font-weight:400;color:#5a6d82;font-size:0.85rem;">(Tabs 42–47)</span></div>
      <div style="font-size:0.9rem;color:#1e3a5f;">Aggregates data from all other tabs into charts that the <strong>Chief Signals Officer</strong> presents to the <strong>Admiral's Transformation Office</strong>.</div>
    </div>
  </div>
</div>

<!-- Roles Involved Strip -->
<div style="margin:1.5rem 0 2rem;">
  <div style="font-size:0.7rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#5a6d82;margin-bottom:0.75rem;">Roles Involved</div>
  <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
    <a href="/roles/commodore/" style="display:inline-flex;align-items:center;gap:0.4rem;background:#1e3a5f;color:#fff;border-radius:4px;padding:0.3rem 0.75rem;font-size:0.8rem;font-weight:600;text-decoration:none;"><i class="fa-solid fa-anchor" style="font-size:0.7rem;"></i> Commodore</a>
    <a href="/roles/code-engineer/" style="display:inline-flex;align-items:center;gap:0.4rem;background:#e8edf5;color:#1e3a5f;border:1px solid #9ab4cc;border-radius:4px;padding:0.3rem 0.75rem;font-size:0.8rem;font-weight:600;text-decoration:none;"><i class="fa-solid fa-code" style="font-size:0.7rem;"></i> Code Engineer</a>
    <a href="/roles/feature-captain/" style="display:inline-flex;align-items:center;gap:0.4rem;background:#e8edf5;color:#1e3a5f;border:1px solid #9ab4cc;border-radius:4px;padding:0.3rem 0.75rem;font-size:0.8rem;font-weight:600;text-decoration:none;"><i class="fa-solid fa-flag" style="font-size:0.7rem;"></i> Feature Captain</a>
    <a href="/roles/quality-authority/" style="display:inline-flex;align-items:center;gap:0.4rem;background:#e8edf5;color:#1e3a5f;border:1px solid #9ab4cc;border-radius:4px;padding:0.3rem 0.75rem;font-size:0.8rem;font-weight:600;text-decoration:none;"><i class="fa-solid fa-microscope" style="font-size:0.7rem;"></i> Quality Authority</a>
    <a href="/roles/change-rejection-or-acceptance-party/" style="display:inline-flex;align-items:center;gap:0.4rem;background:#e8edf5;color:#1e3a5f;border:1px solid #9ab4cc;border-radius:4px;padding:0.3rem 0.75rem;font-size:0.8rem;font-weight:600;text-decoration:none;"><i class="fa-solid fa-stamp" style="font-size:0.7rem;"></i> CRAP</a>
    <a href="/roles/development-integrity-assurance-team/" style="display:inline-flex;align-items:center;gap:0.4rem;background:#e8edf5;color:#1e3a5f;border:1px solid #9ab4cc;border-radius:4px;padding:0.3rem 0.75rem;font-size:0.8rem;font-weight:600;text-decoration:none;"><i class="fa-solid fa-shield-halved" style="font-size:0.7rem;"></i> DIAT</a>
    <a href="/roles/enterprise-architecture-review-board/" style="display:inline-flex;align-items:center;gap:0.4rem;background:#e8edf5;color:#1e3a5f;border:1px solid #9ab4cc;border-radius:4px;padding:0.3rem 0.75rem;font-size:0.8rem;font-weight:600;text-decoration:none;"><i class="fa-solid fa-building-columns" style="font-size:0.7rem;"></i> EARB</a>
    <a href="/roles/review-board-review-board/" style="display:inline-flex;align-items:center;gap:0.4rem;background:#e8edf5;color:#1e3a5f;border:1px solid #9ab4cc;border-radius:4px;padding:0.3rem 0.75rem;font-size:0.8rem;font-weight:600;text-decoration:none;"><i class="fa-solid fa-layer-group" style="font-size:0.7rem;"></i> Review Board Review Board</a>
    <a href="/roles/chief-signals-officer/" style="display:inline-flex;align-items:center;gap:0.4rem;background:#e8edf5;color:#1e3a5f;border:1px solid #9ab4cc;border-radius:4px;padding:0.3rem 0.75rem;font-size:0.8rem;font-weight:600;text-decoration:none;"><i class="fa-solid fa-satellite-dish" style="font-size:0.7rem;"></i> Chief Signals Officer</a>
    <a href="/roles/admirals-transformation-office/" style="display:inline-flex;align-items:center;gap:0.4rem;background:#e8edf5;color:#1e3a5f;border:1px solid #9ab4cc;border-radius:4px;padding:0.3rem 0.75rem;font-size:0.8rem;font-weight:600;text-decoration:none;"><i class="fa-solid fa-star" style="font-size:0.7rem;"></i> Admiral's Transformation Office</a>
  </div>
</div>

The Release Tracking Spreadsheet is intentionally maintained by hand rather than generated from automated tooling. Automated tools can be configured incorrectly, can have bugs, and can be manipulated by engineers who understand the underlying code. A spreadsheet maintained by a human being -- specifically, the Commodore -- is transparent in a way that automated systems can never be. Every cell is visible. Every formula can be audited. Every entry was typed by a person who made a conscious decision to type it. This manual process also ensures that the Commodore maintains intimate familiarity with every aspect of the release, which is essential for making informed decisions during the [Convoy Steering Committee](/release-convoy/execution/deploy/#convoy-steering-committee-csc). Automated dashboards create the illusion of awareness; the Release Tracking Spreadsheet creates the reality of it.

The spreadsheet also serves as the primary evidence artifact for compliance audits, regulatory reviews, and post-incident investigations. When a production defect is discovered, the Personnel Accountability tabs enable investigators to identify the responsible [Code Engineer](/roles/code-engineer/), the [Feature Captain](/roles/feature-captain/) who approved the work, the [Quality Authority](/roles/quality-authority/) tester who certified it, and the [CRAP](/roles/change-rejection-or-acceptance-party/) members who voted to accept it. This complete chain of accountability ensures that [Everyone is Responsible](/principles/everyone-is-responsible/) is not merely a principle but a traceable fact. The spreadsheet has grown organically over multiple Convoys, and each new tab was added in response to a specific gap identified during a previous release, demonstrating the organization's commitment to [Continuous Learning](/principles/continuous-learning/).

Version control of the spreadsheet itself is managed through a naming convention: each version is saved as `Release_Tracking_CONVOY-[number]_v[version]_[date]_[initials].xlsx`. Previous versions are archived in a shared drive folder organized by quarter. The Commodore emails the current version to all stakeholders every Monday morning and every Friday afternoon, and any stakeholder who needs the spreadsheet between those distributions must request it via the official Spreadsheet Access Request Form. This controlled distribution ensures that no one is working from a stale version and that the Commodore always knows who has seen which data. The Release Tracking Spreadsheet is, in every sense, the heartbeat of [Limit WIP](/principles/limit-wip/) and the backbone of the [Amplify Feedback](/principles/amplify-feedback/) cycle.

## See Also

- [Commodore](/roles/commodore/) for the role that maintains the Release Tracking Spreadsheet
- [Everyone is Responsible](/principles/everyone-is-responsible/) for the principle that requires individual traceability
- [Limit WIP](/principles/limit-wip/) for the principle supported by release data
- [Amplify Feedback](/principles/amplify-feedback/) for how release data drives coaching
- [Tribunal](/release-convoy/ceremonies/tribunal/) for how the Personnel Accountability tabs inform defect attribution
- [DevOps Release Convoy](/release-convoy/) for the delivery cycle the spreadsheet documents
