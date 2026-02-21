---
title: "Changes per Trunk"
linkTitle: "Changes per Trunk"
type: docs
description: "The primary health indicator for every trunk in the Pando fleet, measuring feature throughput per branch and surfacing orphaned trunks before they become audit liabilities!"
weight: 10
tags: ["measurement", "branching", "reporting"]
---

Changes per Trunk measures the number of features merged into each active trunk during a single [Convoy](/release-convoy/) window. It is the primary health indicator for the [Multi-Trunk Based Development (Pando)](/practices/multi-trunk-based-development/) practice, providing the [Source Management Team (SMT)](/roles/source-management-team/) and the [DevOps Usage & Compliance Head Engineer (DOUCHE)](/roles/devops-usage-and-compliance-head-engineer/) with a complete, real-time picture of trunk activity across the entire fleet.

A trunk that is not receiving changes is a trunk that is not contributing to the Convoy. In an organization that may operate hundreds of trunks simultaneously, it is impractical for the SMT to inspect each one manually. Changes per Trunk makes inspection unnecessary: trunks with zero activity over two or more reporting periods are automatically flagged as Orphaned in the [Release Tracking](/practices/release-tracking/) spreadsheet, triggering the Trunk Abandonment Report process and a corresponding deduction in the [SADMF Maturity Score](/metrics/sadmf-maturity-score/).

<!-- STAT HERO -->
<div style="background:#242627;border-radius:8px;padding:2rem 2rem 1.5rem;margin:2rem 0;color:#fff;position:relative;overflow:hidden">
  <div style="position:absolute;top:0;right:0;width:200px;height:100%;background:linear-gradient(135deg,transparent 60%,rgba(162,59,114,0.18) 100%);pointer-events:none"></div>
  <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:1.2rem">
    <i class="fa-solid fa-code-branch" style="color:#a23b72;font-size:1.1rem"></i>
    <span style="font-size:0.7rem;letter-spacing:0.18em;text-transform:uppercase;color:#9ab4cc;font-weight:600">SADMF Metric — Trunk Health</span>
  </div>
  <div style="font-size:2rem;font-weight:800;letter-spacing:-0.02em;line-height:1.1;margin-bottom:1.5rem">Changes per Trunk</div>
  <div style="background:#1a1c1d;border:1px solid #3a3d3f;border-radius:6px;padding:1rem 1.25rem;margin-bottom:1.5rem;font-family:monospace;font-size:1.05rem;color:#e8edf5;letter-spacing:0.02em">
    <span style="color:#9ab4cc;font-size:0.8rem;display:block;margin-bottom:0.4rem">FORMULA</span>
    CpT = Count(Features merged into Trunk within Convoy window)
  </div>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:1rem">
    <div style="background:#1a1c1d;border:1px solid #3a3d3f;border-radius:6px;padding:0.85rem 1rem">
      <div style="font-size:0.65rem;letter-spacing:0.14em;text-transform:uppercase;color:#9ab4cc;margin-bottom:0.35rem">Owner Role</div>
      <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.9rem;font-weight:600">
        <i class="fa-solid fa-user-tie" style="color:#a23b72;font-size:0.85rem"></i>
        DOUCHE / SMT
      </div>
    </div>
    <div style="background:#1a1c1d;border:1px solid #3a3d3f;border-radius:6px;padding:0.85rem 1rem">
      <div style="font-size:0.65rem;letter-spacing:0.14em;text-transform:uppercase;color:#9ab4cc;margin-bottom:0.35rem">Cadence</div>
      <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.9rem;font-weight:600">
        <i class="fa-solid fa-clock-rotate-left" style="color:#a23b72;font-size:0.85rem"></i>
        Weekly + Per Convoy
      </div>
    </div>
    <div style="background:#1a1c1d;border:1px solid #3a3d3f;border-radius:6px;padding:0.85rem 1rem">
      <div style="font-size:0.65rem;letter-spacing:0.14em;text-transform:uppercase;color:#9ab4cc;margin-bottom:0.35rem">Source</div>
      <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.9rem;font-weight:600">
        <i class="fa-solid fa-table" style="color:#a23b72;font-size:0.85rem"></i>
        Trunk Registry
      </div>
    </div>
    <div style="background:#1a1c1d;border:1px solid #3a3d3f;border-radius:6px;padding:0.85rem 1rem">
      <div style="font-size:0.65rem;letter-spacing:0.14em;text-transform:uppercase;color:#9ab4cc;margin-bottom:0.35rem">Unit</div>
      <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.9rem;font-weight:600">
        <i class="fa-solid fa-code-merge" style="color:#a23b72;font-size:0.85rem"></i>
        Merges / Trunk / Convoy
      </div>
    </div>
  </div>
</div>

## What the Metric Measures

Each trunk in the Pando fleet has an expected activity profile determined at Convoy start by the [Feature Captain](/roles/feature-captain/) and recorded in the Trunk Registry tab of the [Release Tracking](/practices/release-tracking/) spreadsheet. The expected activity profile specifies:

- The **target change count:** the number of features expected to be merged into this trunk over the Convoy window
- The **review period:** how frequently the SMT reports on actual vs. expected merge activity
- The **orphan threshold:** the number of consecutive review periods with zero changes that triggers an Orphaned classification

Changes per Trunk is reported weekly by the SMT to the [Commodore](/roles/commodore/) as part of the Daily Status Digest. At Convoy close, per-trunk totals are compiled into the fleet summary and forwarded to the DOUCHE for inclusion in the [SADMF Maturity Score](/metrics/sadmf-maturity-score/) calculation.

## Trunk Health Classifications

Based on the Changes per Trunk reading, each trunk is assigned a health classification:

- **Thriving:** change count meets or exceeds target. The trunk is contributing to the Convoy as planned.
- **Lagging:** change count is below target but above zero. The Feature Captain is notified and required to provide a written explanation at the next [Mandatory Status Synchronization](/practices/mandatory-status-synchronization/) ceremony.
- **Orphaned:** zero changes for two or more consecutive review periods. The trunk is frozen pending a Trunk Abandonment Report from the Feature Captain. The DOUCHE opens a compliance investigation. A Maturity Score deduction is applied immediately, with a further deduction applied if the Abandonment Report is not filed within five business days.
- **Overloaded:** change count exceeds target by more than 50%. This indicates that the trunk was under-scoped and additional trunk provisioning may be required for the next Convoy. The SMT flags the trunk for scope review with the [Co-Owner, Product (COP)](/roles/co-owner-product/).

## Relationship to Other Metrics

Changes per Trunk operates at the trunk level, which is one level above the engineer-level metrics. It is complementary to, not a replacement for, the individual productivity metrics:

- A trunk with a high change count and a low [Tasks per Code Engineer](/metrics/tasks-per-code-engineer/) score suggests that changes are arriving fully formed from a small number of high-performing engineers while others contribute nothing. The Tribunal will want to know which engineers are pulling weight.
- A trunk with a low change count but high [Lines of Code per Code Engineer](/metrics/lines-of-code-per-code-engineer/) suggests that engineers are writing large amounts of code without completing discrete features. This indicates decomposition failure, which the DOUCHE will address.
- A balanced trunk, consistent change count, distributed across multiple engineers, tracking the target profile, is the signature of a well-managed Convoy team.

<!-- WHAT GOOD LOOKS LIKE -->
<div style="border-left:4px solid #a23b72;background:linear-gradient(to right,rgba(162,59,114,0.07),transparent);border-radius:0 6px 6px 0;padding:1.25rem 1.5rem;margin:1.75rem 0">
  <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.75rem">
    <i class="fa-solid fa-trophy" style="color:#a23b72;font-size:1rem"></i>
    <span style="font-size:0.7rem;letter-spacing:0.16em;text-transform:uppercase;color:#a23b72;font-weight:700">What Good Looks Like</span>
  </div>
  <p style="margin:0 0 0.6rem;font-weight:600;color:#242627">A healthy Pando fleet shows consistent change throughput across all active trunks, with no Orphaned trunks and no Overloaded trunks requiring emergency re-provisioning.</p>
  <ul style="margin:0;padding-left:1.25rem;color:#444;font-size:0.95rem;line-height:1.8">
    <li>Every trunk has a <strong>non-zero change count</strong> at each weekly review — confirming that all provisioned trunks are contributing to the Convoy</li>
    <li>The fleet's average Changes per Trunk <strong>tracks within 10% of the target profile</strong> established at Convoy start, indicating reliable scope estimation by Feature Captains</li>
    <li>Zero Orphaned trunks at Convoy close — all trunks either Merged or Thriving, with no Trunk Abandonment Reports filed</li>
    <li>An increasing fleet-wide Changes per Trunk average across consecutive Convoys demonstrates that the organization is scaling its Pando implementation effectively and that the investment in trunk provisioning infrastructure is delivering returns</li>
  </ul>
</div>

## See Also

- [Multi-Trunk Based Development (Pando)](/practices/multi-trunk-based-development/) for the practice this metric monitors
- [Source Management Team (SMT)](/roles/source-management-team/) for the team that reports this metric
- [Fractal-based Development](/practices/fractal-based-development/) for the structural implementation of the Pando trunk topology
- [Release Tracking](/practices/release-tracking/) for the Trunk Registry that records per-trunk change counts
- [Tasks per Code Engineer](/metrics/tasks-per-code-engineer/) for the complementary individual-level throughput metric
- [SADMF Maturity Score](/metrics/sadmf-maturity-score/) for how Orphaned trunks affect the organization's maturity assessment
