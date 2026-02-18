---
title: "Post Standup Standup Review"
linkTitle: "Post Standup Standup Review"
type: docs
description: A daily documentation ceremony ensuring that all status updates about non-work are captured, consolidated, and filed where they will never be read
weight: 13
---

{{% alert title="" color="info" %}}
{{< param description >}}
{{% /alert %}}

To ensure no information is lost through insufficient documentation, each [Feature Captain](/roles/#feature-captain-fc) will submit a daily report using the SAD Update form and email it to the [Commodore](/roles/#commodore-c), who will consolidate it and file it. The SAD (Status and Disposition) Update form is the SADMF's standardized instrument for capturing the outcomes of the [Post-Standup Standup](/release-convoy/ceremonies/post-standup-standup/) ceremony. The form was designed by the [Admiral's Transformation Office](/roles/#admirals-transformation-office-ato) and has not been revised since its introduction, despite — or perhaps because of — the 14 required fields that Feature Captains must complete daily.

## The SAD Update Form

The SAD Update form contains the following required fields: Convoy Number, Convoy Phase, Feature Team Name, Feature Captain Name, Date, Sprint Number, Items Not In Progress (comma-separated list), Items Still Not In Progress Since Last Report, New Items Added to Not In Progress, Estimated Date Items Might Begin (best guess), Cross-Team Dependencies Affecting Non-Work, Risks to Continued Non-Progress, Mitigation Strategies for Non-Progress Risks, and the Convoy Morale Index. The Convoy Morale Index is a self-reported score from 1 to 5, where 1 represents "the team is deeply concerned" and 5 represents "the team has never been more confident." Historical data shows that Feature Captains exclusively report scores of 4 or 5, as submitting a score below 4 triggers a mandatory coaching conversation with the Commodore about maintaining a positive team culture. The estimated time to complete the SAD Update is 15 minutes, according to the SADMF Implementation Guide. Feature Captains consistently report that it takes 45 minutes, a discrepancy the SADMF attributes to insufficient familiarity with the form rather than any issue with the form itself.

## The Daily Consolidated SAD Report

Each evening, the [Commodore](/roles/#commodore-c) consolidates all SAD Updates from every Feature Captain into a single Daily Consolidated SAD Report (DCSR). The DCSR is a comprehensive document that synthesizes the non-progress of every feature team into a unified view of organizational stasis. The Commodore formats the DCSR using the official SADMF template, adds an executive summary, and appends a trend analysis comparing today's non-progress to yesterday's non-progress. The completed DCSR is emailed to all stakeholders, the [Admiral's Transformation Office](/roles/#admirals-transformation-office-ato), and the full distribution list for the Release Convoy. The DCSR has an average open rate of 3%, and an average read-to-completion rate that rounds to zero. The SADMF considers distribution — not consumption — to be the relevant metric. Information has been shared; what the recipients do with it is their responsibility.

## The Filing System

All SAD Updates and DCSRs are archived in the official Convoy Documentation Repository, a shared drive with a folder hierarchy seven levels deep. The structure is organized by Convoy Number, then Quarter, then Month, then Week, then Day, then Team, then Document Type. Navigating to the correct folder requires approximately 14 clicks, which the SADMF considers an appropriate barrier to access — it ensures that only those with a genuine need will retrieve a document, thereby protecting the integrity of the archive from casual browsing. Feature Captains who file documents in the wrong folder are issued a Filing Deviation Notice and must re-file the document correctly while also filing a Filing Deviation Acknowledgment form in the Deviations subfolder.

## Role in the Harbor Review

SAD Updates and DCSRs are officially referenced during the [Harbor Review](/release-convoy/ceremonies/harbor-review/) ceremony. However, they are referenced only to confirm that reports were filed on every required day of the convoy cycle. The content of the reports is not reviewed, discussed, or analyzed. A Feature Captain who filed all SAD Updates on time but delivered no features will receive recognition for process compliance. A Feature Captain who delivered every feature but missed three SAD Updates will be cited for a documentation gap. This priority structure reinforces the SADMF principle that process adherence is the foundation upon which delivery outcomes are built. Without the foundation, the outcomes are merely anecdotal.

## Connection to the Convoy Manifest

Completed SAD Updates contribute to the [Convoy Manifest](/release-convoy/manifest/) as evidence of daily governance. During the [Manifest Approval Ceremony](/release-convoy/ceremonies/manifest-approval/), the Convoy Steering Committee may request to see the filing log to verify that every day of the convoy cycle has a corresponding SAD Update from every team. Gaps in the filing log have been known to delay manifest approval, regardless of the technical readiness of the software itself.

## See Also

- [Feature Captain](/roles/#feature-captain-fc) for the role responsible for completing the SAD Update
- [Commodore](/roles/#commodore-c) for the role that consolidates reports into the DCSR
- [Post-Standup Standup](/release-convoy/ceremonies/post-standup-standup/) for the ceremony whose outcomes are documented here
- [Harbor Review](/release-convoy/ceremonies/harbor-review/) for where SAD Update filing compliance is verified
- [Convoy Manifest](/release-convoy/manifest/) for where SAD Updates are referenced as governance evidence
