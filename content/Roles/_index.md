---
title: Roles
titleIcon: "fa-solid fa-user"
linkTitle: Roles
description: Commanding the organization requires structure, clearly defined roles, and strict separation of duties! 
weight: 5
---

{{< alert type="info" >}}
{{< param description >}}
{{< /alert >}}

## Admirals Transformation Office (ATO)

This is the heartbeat of the transformation, it is the command-and-control center to ensure everyone is achieving the goals of SADMF. It is accountable for the 5-8 transformation roadmap, assessments, metrics, certification renewals, and general project management of the transformation. The ATO is led by the Admiral, who commands all direction, innovation, and methodology implemented at scale.

## Build Engineers (BE)

These YAML experts are responsible for dictating to the [Code Engineers](#code-engineer-ce) how the build should work and writing the YAML to make that happen. Updating commands in YAML takes away from feature delivery and [Code Engineers](#code-engineer-ce) should focus on features.

## Chief Signals Officer (CSO)

This senior executive is responsible for tracking and reporting our adherence to the plan by publishing the [Feature Completion Ratio](/metrics/#feature-completion-ratio) daily.

## Code Standards Enforcement Team (CSET)

Code Engineers are too close to the problem to effectively review the code they write. Additionally, reviewing code takes time away from coding. To resolve this, the CSET will perform all code reviews. The CSET is also responsible for defining and enforcing all coding standards for the enterprise. This includes, but is not limited to:

* Indentation depth
* Using tabs vs. spaces
* Use of approved [EARB](#enterprise-architecture-review-board-earb) variable and method names
* Comment format
  
## Code Engineer (CE)

This role is the backbone of a SAD implementation. The job of the Code Engineer is to transform requirements into machine executable instructions quickly and quietly. Code Engineer expertise can be judged by the number of questions. Since a Code Engineer is expected to be an expert at data structures and algorithms, fewer questions indicate more expertise.

## Commodore (C)

The Commodore is responsible for collecting status reports for the Convoy and ensuring all steps in the Framework are performed correctly before [Deploying the Fleet](/release-convoy/deploy/).

## Development Integrity Assurance Team (DIAT)

This team is made up of senior-level [Code Engineers](#code-engineer-ce), [Build Engineers](#build-engineers-be), and Designers. They are responsible for reviewing every change before allowing it to be included in the [DORC](/release-convoy/). They validate the work of the [Quality Authority](#quality-authority-qa).  

## DevOps Usage & Compliance Head Engineer (DOUCHE)

If the *Right Way* to do DevOps is not owned and controlled by an executive then nobody will do it. So, we need a named person to codify the *Right Way* in the DevOps Process Binder and hold all teams accountable to the [DevOps Process Excellence Assessment](/practices/#devops-process-excellence-assessment). By staffing this role we prevent process drift and eventual mutation of the *Right Way* and can track our annual progress towards [SADMF Maturity](/metrics/#sadmf-maturity-score).

## Enterprise Architecture Review Board (EARB)

The EARB is responsible for maintaining the Book of Names. This master list defines all acceptable words and word combinations that may be used for naming things during coding. This ensures that [Code Engineers](/roles/#code-engineer-ce) will not be confused when they join a new Feature Team for the next Convoy. The EARB will meet every 6 weeks to review and reject any new words submitted for inclusion.

## Feature Captain (FC)

The mid-level manager who is responsible for tracking the progress of the feature they are assigned to.

## Feature Team (FT)

The Feature Team is the group of [Code Engineers](/roles/#code-engineer-ce) assembled to build a new feature for the next Convoy. Because we work so diligently to [Build Quality In](/principles/#build-quality-in) with the [Tribunal](/release-convoy/#tribunal), these teams should be able to deliver at maximum throughput as soon as they are formed.

## Quality Authority (QA)

Verifying quality is a specialist field that no [Code Engineer](#code-engineer-ce) is qualified to perform. In addition, performing testing impedes the ability of the [Code Engineer](#code-engineer-ce) to do their only job, type code. The Quality Authority team is the final arbiter of what the requirements mean and will create, maintain, and manually execute test scripts based on their understanding of the requirements. The end-user uses the system manually, so that is the only TRUE way to test it!

## Source Management Team (SMT)

To improve [Code Engineer](#code-engineer-ce) productivity by reducing the work required for integrating changes, we introduce the Source Management Team. The SMT is responsible for authorizing new [feature branches](/practices/#fractal-based-development), creating the branches, and merging the complete branches from each [Code Engineer](#code-engineer-ce) into the Conflict Arbitration branch. They will then resolve all conflicts for the [Code Engineers](/roles/#code-engineer-ce) before alerting the [Quality Authority](#quality-authority-qa) that the Convoy is ready for testing.

## System of Authority (SOA)

This is the team of teams accountable for implanting SADMF in your organization. The SOA is staffed by contractors and consultants with diverse points of view. These principled practitioners will focus on implementing the orders of the ATO and will focus on updating plans, collecting metrics, assessing, and becoming trusted advisors for the teams so they can report the ground-level truth to leadership during the tribunal.

## System of Service (SOS)

This is the team of teams accountable for achieving deadlines and shipping code. The SOS will look to the chain of command for servant leadership to ensure self-governance and instruct the Feature Teams on their day-to-day work. The SOS is empowered to predictably deliver on time and on budget.

## Unit Tester (UT)

[Code Engineers](#code-engineer-ce) should be focusing on writing code. Testing is the job of specialists! The Unit Tester role is dedicated to writing unit tests for [Code Engineers](#code-engineer-ce) after the code is delivered to ensure the code works.
