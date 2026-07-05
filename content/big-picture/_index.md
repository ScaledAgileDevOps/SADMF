---
title: "SADMF Big Picture"
titleIcon: "fa-solid fa-diagram-project"
linkTitle: "Big Picture"
type: docs
description: Every role, practice, ceremony, metric, and principle classified by group, function, and Accountability Index.
weight: 999
tags: ["governance"]
---

The SADMF Periodic Table of Framework Excellence provides a comprehensive, at-a-glance reference for every element of the Scaled Agile DevOps Maturity Framework. Like its chemical predecessor, it is organized by group and period, with each element displaying its symbol, atomic number, and **Accountability Index (AI):** a standardized measure of each element's contribution to organizational governance and maturity.

The table is organized into seven groups: **Leadership & Governance** (the command structure), **Delivery Excellence** (the roles who execute), **Alignment Ceremonies** (the gatherings that synchronize), **Operational Excellence** (the practices that govern how work is done), **Accountability Metrics** (the measurements that drive performance), **Foundational Principles** (the immutable laws of the framework), and **Documentation Assurance** (the artifacts that prove compliance). Hover over any element to see its full description.

<div class="periodic-table-embed" id="periodic-table-embed">
  <iframe
    id="periodic-table-iframe"
    src="/sadmf-periodic-table.html"
    title="SADMF Periodic Table of Enterprise Dysfunction"
    scrolling="no">
  </iframe>
</div>
<script>
(function () {
  var NATIVE_WIDTH = 1200;
  var wrap = document.getElementById('periodic-table-embed');
  var frame = document.getElementById('periodic-table-iframe');

  function applyScale(nativeHeight) {
    var scale = Math.min(1, wrap.clientWidth / NATIVE_WIDTH);
    frame.style.width = NATIVE_WIDTH + 'px';
    frame.style.height = nativeHeight + 'px';
    frame.style.transform = 'scale(' + scale + ')';
    frame.style.transformOrigin = 'top left';
    wrap.style.height = (nativeHeight * scale) + 'px';
  }

  function measureAndScale() {
    var doc;
    try {
      doc = frame.contentDocument;
    } catch (e) {
      doc = null;
    }
    applyScale(doc && doc.body ? doc.body.scrollHeight : 900);
  }

  frame.addEventListener('load', measureAndScale);
  window.addEventListener('resize', measureAndScale);
})();
</script>

<a href="/sadmf-periodic-table.html" target="_blank" class="markdown-btn">Open Full-Screen ↗</a>

## How to Use This Diagram

The SADMF Periodic Table is intended to be used in the following ways:

1. **Executive briefings:** Display on a projector to demonstrate the completeness of the transformation program. The number of elements signals scientific rigor.
2. **Onboarding:** New [Code Engineers](/roles/code-engineer/) are expected to memorize every element's symbol, name, and atomic weight for the [DevOps Process Excellence Assessment](/practices/devops-process-excellence-assessment/).
3. **Compliance evidence:** A printed and laminated copy of the Periodic Table, posted prominently in the team area, counts toward the [SADMF Maturity Score](/metrics/sadmf-maturity-score/).
4. **Vendor justification:** When stakeholders ask why the transformation is taking 5–8 years, point to the atomic weight column.

## See Also

- [DevOps Release Convoy](/release-convoy/) for Element 9 (DORC), the centerpiece of delivery
- [Roles](/roles/) for all Delivery Role elements
- [Practices](/practices/) for all Practice elements
- [Metrics](/metrics/) for all Metric elements and their destructive atomic weights
- [Certifications](/certifications/) for the CERT element and the SAD AF credential
- [Principles](/principles/) for the foundational Principle elements
