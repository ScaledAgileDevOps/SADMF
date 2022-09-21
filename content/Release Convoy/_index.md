---
title: DevOps Release Convoy
description: Set Sail with the Scaled Agile DevOps Delivery LifeCycle (SAD DLC)
weight: 2
---

{{% notice tip %}}
At Scaled Agile DevOps, we believe keeping track of many frequent releases is just too much cognitive load. We need to *"[**Work in Small Batches**](/principles/#work-in-small-batches)."* We've developed the DevOps Release Convoy&trade; (DORC) to simplify things. Why try to track 5 or 10 releases per quarter if we can simplify it to one easily managed DORC&trade;?
{{% /notice %}}

## Why Convoys?

Other frameworks have tried to coordinate things with more limited transportation metaphors. However, they were constrained to a single direction. With DORCs&trade; we have more options. We can turn left or right or even make a U-turn.

## Critical DORC&trade; Ceremonies

Below are the simple ceremonies required to manage changes in the SADMF way!

### Convoy Alignment

[This is a 5-day meeting](./convoy-alignment-agenda) held every 6 weeks for planning the next 8 quarters of features to make sure the critical paths are aligned. See the agenda for details.

#### Captain's Mast

In this ceremony, anyone wishing to change the priorities set in Convoy Alignment must file a *[**PCR**](/release-convoy/convoy-manifest/#priority-change-request)* and represent it for approval. This allows the Chief Signals Officer to adjust the *[**Completed vs Committed**](/metrics/#features-completed-vs-committed)* goal to ensure it does not reflect poorly on the Commodore.

#### Captains' Meeting

Meeting of the Feature Captains to plan the date when the DORC&trade; will be assembled.

### Press Gang

In the Press Gang step, the Feature Captain will choose between 2 and 20 people from the coding pool to "self-organize" around delivering the next feature. This ensures each *[**Coder**](/organization/#coder)* is allowed to work on new and interesting things and that all *[**Coders**](/organization/#coder)* are fully utilized.

### Post-Standup Standup

We understand that only the most important status updates are given in Standup and that some defects are lower priority than some features. To address this, we use the Post Standup Standup ceremony. Here everyone on the Convoy participates to provide status updates to the Commodore on the lower priority work that is not being worked on.  

### Post Standup Standup Review

To ensure no information is lost through insufficient documentation, each Feature Captain will also submit a daily report using the SAD Update form and email it to the Commodore who will consolidate it and file it.

### Scrum of Scrum of Scrums

To effectively scale communication, we use the Scrum of Scrum of Scrums. First thing in the morning after the daily scrum, each team selects a Tribute to attend the daily Scrum of Scrums (SOS). At noon your Tribute attends a Scrum with the Tributes from the other teams. They select a Tribute of Tributes from the SOS meeting who, at 3 pm, attends a meeting with the Tribute of Tributes of the Scrums of Scrums from the broader organization. They then reverse the process to pass down direction. May the odds be ever in your favor!

### Coding

The group of *[**Coders**](/organization/#coder)* assigned to each feature will implement the requirements they are given as rapidly as possible using the industry best practice, *[**Continuous Isolation**](https://continuousisolation.com)*. This ensures it can be tested and delivered on the Convoy it is planned for. Once the feature is coded, the *[**Coders**](/organization/#coder)* can return to the coding pool to await their next adventure!

### Code Inspection

The *[**CSET**](/organization/#code-standards-enforcement-team)* will review the completed code before it is tested to ensure it is compliant with **CSET** and *[**EARB**](/organization/#enterprise-architecture-review-board)* standards.

### Testing

To keep the *[**Coders**](/organization/#coder)* productive, we need them to focus only on coding. For unit testing, the Feature Captain will assign the complete feature to the Unit Testing Team to ensure 100% test coverage.

### System Integration Testing

If two teams validating a change are good, three teams are better! This SIT team tests all of the new features of the Convoy together.

### Convoy

The convoy coordinates the transportation of the features that were planned. The Commodore is responsible for keeping the convoy together.

### Tribunal

We must *[**Build Quality In**](/principles/#build-quality-in)* by removing things that cause poor quality. In this monthly ceremony, we identify and remove the person who created each defect.

### Dry Dock

It's normal for a little damage to occur when we are moving so quickly. Defects will accumulate. The Dry Dock is the process of halting feature development for a few weeks so that repairs can be made.

### Rota Fortunae

We know that a static organizational structure limits improvement and also becomes boring for some executives. While many outside the SADMF community may propose Value Stream Mapping to identify constraints, we know that the process is time-consuming and uses too many Post-Its. To resolve these we introduced the Rota Fortunae ceremony where we "spin the wheel", restructure, and then see if we are delivering better. If we fail, then we convene a *[**Tribunal**](#tribunal)* to address it.

### Manifest Approval Ceremony

Before any convoy may "leave port", it's critical we make sure that all Scaled Agile DevOps processes have been followed. The *[**Convoy Steering Committee**](./deploy-the-fleet/#convoy-steering-committee-csc)* is convened on the day the fleet sets sail. See [**Deploy the Fleet**](./deploy-the-fleet/) for the detailed process.

---

{{% button href="/certifications" %}}🏅 Get Certified! 🏅{{% /button %}}
{{% button href="https://www.teepublic.com/t-shirt/25575514-scaled-agile-devops-maturity-framework" %}}💸 Official Swag! 💸{{% /button %}}
