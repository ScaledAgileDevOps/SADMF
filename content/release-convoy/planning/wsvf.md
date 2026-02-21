---
title: Weighted Shortest Voyage First (WSVF)
linkTitle: WSVF
type: docs
description: The definitive method for prioritizing features when everything is the highest priority
weight: 2
tags: ["release-management", "governance", "compliance"]
aliases: ["/release-convoy/wsvf/"]
---

Every convoy faces the same challenge: too many features and not enough [Code Engineers](/roles/code-engineer/). Traditional prioritization methods rely on simplistic measures like customer value or technical feasibility. WSVF provides a more sophisticated approach that accounts for the complex political and organizational dynamics of enterprise software delivery.

## The WSVF Formula

Each feature is scored across four dimensions, and the scores are combined using the proprietary WSVF formula:

`WSVF = (CoD + PC) x EV / AQ`

Where:

- **CoD** (Cost of Delay): How much revenue will we claim to lose if this feature is not delivered? Estimated by the requesting executive's level of urgency in their last email, scored 1-10.
- **PC** (Political Capital): How much organizational capital has the feature's sponsor accumulated? Sponsors who attended the last [Convoy Alignment](/release-convoy/agenda/) receive a +3 bonus. Sponsors who brought donuts receive +5.
- **EV** (Executive Visibility): Will this feature appear in a board presentation? Features mentioned in quarterly earnings calls receive the maximum score of 10 regardless of other factors.
- **AQ** (Acronym Quality): Does the feature have a compelling acronym? Features with memorable acronyms (minimum 4 letters, must be pronounceable) score higher. A feature called "Operational Network Enhancement" (ONE) scores well. A feature with no acronym scores a minimum of 1 to avoid division by zero.

## Calculating WSVF

WSVF scores are calculated by the [Commodore](/roles/commodore/) during [Convoy Alignment](/release-convoy/agenda/). The calculation is performed on a dedicated spreadsheet that the Commodore maintains personally. The formula cell references are not shared to prevent gaming of the system.

In the event of a tie, priority is resolved using the following tiebreakers, in order:

1. Seniority of the requesting stakeholder
2. Number of times the feature has been deferred from previous convoys (features deferred 3+ times receive a "Legacy Priority" designation)
3. Proximity of the stakeholder's office to the [Commodore's](/roles/commodore/) office
4. A coin toss witnessed by the [Chief Signals Officer](/roles/chief-signals-officer/)

## Challenging a WSVF Score

[Feature Captains](/roles/feature-captain/) who believe their feature has been incorrectly scored may file a WSVF Challenge through the [Priority Change Request](/release-convoy/execution/manifest/#priority-change-request) process. Challenges are heard during [Captain's Mast](/release-convoy/ceremonies/captains-mast/) and require the challenger to present evidence that their feature's acronym is, in fact, pronounceable.

The [Commodore](/roles/commodore/) has final authority on all WSVF disputes. The Commodore's decision is based on careful analysis of the WSVF spreadsheet and may also take into account factors not captured in the formula, such as which [Feature Captain](/roles/feature-captain/) most recently bought the Commodore lunch.

## WSVF and the Nautical Chart

Once WSVF scores are finalized, features are arranged on the [Nautical Chart](/release-convoy/nautical-charts/) in priority order, from top-left (highest WSVF) to bottom-right (lowest WSVF). Features with Executive Visibility scores of 10 are placed in gold sticky notes regardless of their overall WSVF score.

## See Also

- [Convoy Alignment](/release-convoy/agenda/) for the planning event where WSVF scores are calculated
- [Nautical Charts](/release-convoy/nautical-charts/) for how prioritized features are visualized
- [Captain's Mast](/release-convoy/ceremonies/captains-mast/) for challenging priority decisions
- [Convoy Manifest](/release-convoy/execution/manifest/#priority-change-request) for the Priority Change Request process
