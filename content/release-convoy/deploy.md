---
title: Deploy the Fleet
linkTitle: Delivering Change
type: docs
description: Delivering software is scary. We need layers of process to feel better.
weight: 7
---

We need to nail the fundamentals of speed, innovation, and impact. We need to ensure we go fast and innovate but very cautiously to prevent solutions that do not work as designed. To do this, we need a "Zero Defects" approach to delivery.

To maintain "Zero Defects", centralized control of all DORC&trade;s is critical. We need to "slow down to go fast" by ensuring we have an effective inspection process at the end!

## Let's Get READY to sail!

All changes should use the READY release process. READY stands for:

- **R**eview
- **E**valuate
- **A**pprove
- **D**eploy
- **Y**ield results.

This will ensure we are 100% READY to launch each convoy! All production changes or config changes should follow READY.

## Convoy Steering Committee (CSC)

The Committee is made up of senior leaders and architects across all engineering functions to centralize review and preparation for changes. The CSC will ensure that changes, big or small, are approved at the highest levels and are *[READY](#lets-get-ready-to-sail)* to go! This centralized review by the CSC will shine a light on dependencies, secondary effects, and other aspects that are not always clear when reviewed closer to where the work happens. The CSC is also responsible for reviewing all of the documentation contained in the [Convoy Manifest](/release-convoy/manifest/) to ensure all Scaled Agile DevOps processes were followed to the letter before allowing the convoy to sail. This is a crucial step to assure our customers we are as SAD as possible. Since the CSC consists of representatives who are as far removed from the work as possible, they can have the utmost objectivity.

## Approval Process

All requests must be peer-reviewed and approved in duplicate and also approved by the Convoy [Commodore](/roles/commodore/) at least 3 days before being presented to the CSC. Each [Feature Captain](/roles/feature-captain/) will also present a PowerPoint presentation detailing the effort required to build the feature to ensure that the importance of the feature is understood.

The CSC will meet each workday to review high-risk, or [Commodore](/roles/commodore/) escalated changes to the production environment.  Requests will be approved, sent back for more information, or rejected.

After the CSC approves the Convoy's release there will be much rejoicing!

## See Also

- [Convoy Manifest](/release-convoy/manifest/) for the documentation the CSC reviews
- [Convoy Ceremonies](/release-convoy/ceremonies/) for the ceremonies that precede deployment
- [Roles](/roles/commodore/) for the Commodore who commands the deployment
- [Metrics](/metrics/#feature-completion-ratio) for tracking what was delivered vs. committed
