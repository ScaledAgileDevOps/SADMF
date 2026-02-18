---
title: "Manifest Approval"
linkTitle: "Manifest Approval"
type: docs
description: The formal ceremony in which the Convoy Steering Committee determines whether the paperwork is sufficiently complete to allow software to be deployed
weight: 14
---

Before any convoy may "leave port," it is critical that all Scaled Agile DevOps processes have been followed. The Convoy Steering Committee is convened on the day the fleet is scheduled to set sail. See [Deploy the Fleet](/release-convoy/deploy/) for the detailed deployment process. The Manifest Approval Ceremony is the culmination of weeks of preparation and represents the single most consequential gate in the entire convoy lifecycle. It is here that the [Convoy Steering Committee](/release-convoy/deploy/#convoy-steering-committee-csc) renders its verdict on whether the [Convoy Manifest](/release-convoy/manifest/) — which by this point has grown to several hundred pages — meets the standard required for deployment authorization.

## Weeks of Preparation

Preparation for the Manifest Approval Ceremony begins no fewer than three weeks before the scheduled sailing date. Each [Feature Captain](/roles/feature-captain/) is responsible for assembling their section of the manifest, which includes the Feature Specification, the Coding Completion Certificates, the Code Inspection Reports, the Testing Evidence Package, the SIT Signoff, the filed SAD Updates, the SOS Minutes, and the Dependency Attestation Form. All documents must be formatted according to the SADMF Document Standards Guide (version 14.2), which specifies fonts, margins, heading levels, and the precise shade of blue to be used for hyperlinks. Feature Captains who began assembling their section late — which is to say, all of them — will spend the final week of the convoy cycle doing little else. The SADMF considers this acceptable, as the Coding Phase has concluded and Feature Captains' time is best spent ensuring the paperwork reflects the work, rather than doing additional work that would require additional paperwork.

## The Presentation

On the day of the ceremony, the Convoy Steering Committee convenes in the organization's largest conference room, or, for distributed teams, on a video call with mandatory cameras on. Each Feature Captain is allotted exactly five minutes to present their section of the manifest. The five-minute limit is strictly enforced by a visible countdown timer. Feature Captains must summarize hundreds of pages of documentation in this window, which the SADMF considers excellent presentation skills training. Questions from the committee may extend any individual presentation to 30 minutes, but the Feature Captain's own speaking time remains capped at five. The presentation order follows the convoy's official feature numbering sequence, not priority or risk, ensuring that the most critical features are discussed at whatever arbitrary point they happen to fall.

## The Vote

Following all presentations, the Convoy Steering Committee conducts a formal approval vote. The vote is binary — the entire convoy is either approved or rejected as a unit. There is no provision for partial approval, as the SADMF recognizes that a convoy is an indivisible whole: every feature, every document, and every ceremony is interconnected, and deploying some features without others would undermine the synchronized delivery model. A single missing signature, an unfiled SAD Update, or an incomplete Dependency Attestation Form is sufficient grounds for the committee to reject the entire convoy. Historical data shows that the most common reason for rejection is administrative incompleteness — missing signatures, incorrectly formatted headers, or documents filed in the wrong subfolder of the shared drive — rather than any technical concern about the software itself. The committee does not review code, test results, or system behavior; it reviews the documents that attest to these things.

## The Emergency Sail Provision

The SADMF does include an Emergency Sail provision for situations in which business urgency requires deployment before the standard Manifest Approval process can be completed. To invoke Emergency Sail, the [Commodore](/roles/commodore/) must file an Emergency Sail Authorization Request with the [Admiral's Transformation Office](/roles/admirals-transformation-office/), which requires a completed Risk Acceptance Matrix, an Emergency Justification Narrative (minimum 3,000 words), signatures from every member of the Convoy Steering Committee obtained individually, and a Post-Emergency Documentation Remediation Plan committing to complete all missing paperwork within five business days of deployment. In practice, the Emergency Sail provision has never been successfully invoked, as the paperwork required to authorize emergency authorization consistently exceeds the paperwork required for standard approval. The provision remains in the SADMF documentation as evidence of the framework's flexibility.

## The Drama of the Ceremony

Veterans of the Manifest Approval Ceremony describe it as the most stressful day of the convoy cycle. Feature Captains have been observed rehearsing their five-minute presentations for hours. The moment when the Convoy Steering Committee chair announces the vote result — "The fleet may sail" or "The fleet is held in port" — is met with either visible relief or quiet despair. A rejected convoy must remediate all findings and reconvene the ceremony within 48 hours, during which no other work may proceed. The SADMF encourages organizations to treat the Manifest Approval Ceremony with the gravity it deserves. Some organizations have adopted the tradition of ringing a ship's bell when approval is granted, which the SADMF endorses as an appropriate celebration of process compliance.

## See Also

- [Convoy Steering Committee](/release-convoy/deploy/#convoy-steering-committee-csc) for the governing body that renders the approval decision
- [Deploy the Fleet](/release-convoy/deploy/) for the deployment process that follows a successful approval
- [Convoy Manifest](/release-convoy/manifest/) for the documentation package under review
- [Feature Captain](/roles/feature-captain/) for the role responsible for assembling and presenting each manifest section
