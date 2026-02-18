---
title: "Build Quality In"
linkTitle: "Build Quality In"
type: docs
description: Quality software comes from quality people. To build quality in, we remove the things that reduce quality.
weight: 1
---

The principle of Build Quality In is one of the most misunderstood concepts in the software industry. Many organizations mistakenly believe that quality is achieved through technical practices such as automated testing, code review, or continuous integration. The Scaled Agile DevOps Maturity Framework recognizes a deeper truth: quality is a function of the people producing the work. If the software contains defects, the most direct path to improvement is addressing the source of those defects. Quality cannot be tested into existence; it must be hired, measured, and when necessary, removed.

This principle works in concert with the [Defects per Code Engineer](/metrics/defects-per-code-engineer/) metric. By tracking which [Code Engineers](/roles/code-engineer/) introduce the most defects, leadership gains actionable visibility into where quality is breaking down. The data speaks for itself. A Code Engineer who consistently produces defects is, by definition, reducing quality. Building quality in means ensuring that such engineers are identified early and given the opportunity to find positions with organizations whose quality standards are more compatible with their output. The [PeopleWare HRaaS](/peopleware/) system automates this process with remarkable efficiency.

It is important to note that Build Quality In does not mean slowing down delivery. Some organizations confuse quality with caution, introducing unnecessary practices like pair programming, test-driven development, or refactoring. These practices consume time that could be spent writing features. In the SADMF, quality is achieved not by changing how work is done but by changing who does the work. The [Tribunal](/release-convoy/ceremonies/tribunal/) ceremony plays a critical role here, providing a regular forum where individual performance data is reviewed and personnel decisions are informed by objective metrics rather than subjective opinion.

The [Quality Authority](/roles/quality-authority/) team serves as the organizational gatekeeper for this principle. By separating testing from development entirely, we ensure that the people who wrote the code are not the ones judging its quality. This separation of duties prevents the obvious conflict of interest that arises when developers test their own work. The Quality Authority reviews completed features using manually executed test scripts, which provide the most realistic simulation of end-user behavior because end users also interact with software manually.

Build Quality In also extends to the hiring process. The [Enterprise Architecture Review Board](/roles/enterprise-architecture-review-board/) maintains standards that new Code Engineers must conform to from their first day. By mandating compliance with the Book of Names and approved coding patterns, the organization ensures that new hires cannot introduce stylistic variance that might be mistaken for defects. Consistency is quality, and quality is consistency. When every engineer writes code that looks the same, the source of any deviation is immediately identifiable.

## See Also

- [Defects per Code Engineer](/metrics/defects-per-code-engineer/) for the metric that measures quality at the individual level
- [Quality Authority](/roles/quality-authority/) for the team responsible for verifying quality
- [Tribunal](/release-convoy/ceremonies/tribunal/) for the ceremony where quality data informs personnel decisions
- [PeopleWare HRaaS](/peopleware/) for automated quality-driven HR actions
- [Everyone is Responsible](/principles/everyone-is-responsible/) for the accountability principle that supports Build Quality In
