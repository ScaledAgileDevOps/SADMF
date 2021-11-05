---
title: Organization
description: Organizing for control
weight: 5
---

## Organizational Command Structure

#### Feature Team

The Feature Team is the group of Coders who are assembled to build a new feature for the next Convoy. Because we work so diligently to "[*Build Quality In*](../principles/#build-quality-in)" with the [Tribunal](../release-convoy/#tribunal), these teams should be able to deliver at maximum throughput as soon as they are formed.

#### Source Management Team

To improve Coder productivity by reducing the work required for integrating changes, we introduce the Source Management Team. The SMT is responsbile for authorizing new [feature branches](../practices/#fractal-based-development), creating the branches, and merging the complete branches from each Coder into the Conflict Arbitration branch. They will then resolve all conflicts for the Coders before alerting the Quality Control team that the Convoy is ready for testing.

#### Code Standards Enforcement Team

Coders are too close to the problem to effectively review code for their Feature Team. Additional, reviewing code takes time away from coding. To resolve this, the CSET is formed to perform all code reviews. The CSET is also responsible for defining and enforcing all coding standards for the enterprise. This includes, but is not limit to:

* Indentation depth
* Using tabs vs. spaces
* Use of [EARB](#enterprise-architecture-review-board) approved variable and method names
* Comment format

#### Quality Authority

Verifying quality is a specialist field that no Coder is qualified to perform. In addition, performing testing impedes the ability for the Coder to do their job, write code. The Quality Authority team is the final arbiter of what the requirements mean and will create, maintain, and manually execute tests scripts based on their understanding of the requirements. The end-user uses the system manually, so that is the only TRUE way to test it!

#### Enterprise Architecture Review Board

The EARB is responsible for maintaining the Book of Names. This master list defines all accaptable words and word combinations that may be used for naming things during coding. This ensures that Coders will not be confused when they join a new Feature Team for the next Convoy. The EARB will meet every 6 weeks to review and reject any new words submitted for inclusion.

---

{{% button href="https://www.buymeacoffee.com/sadmf" %}}✅ Get Certified! ✅{{% /button %}}