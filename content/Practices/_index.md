---
title: Practices
titleIcon: "fa-solid fa-person-digging"
linkTitle: Practices
description: Complex systems require complex practices to reduce the complexity!
weight: 4
---

{{< alert type="info" >}}
{{< param description >}}
{{< /alert >}}

## CI/CD/ED

[Continuous Isolation](https://continuousisolation.com/) / Continuous Deliberation / Eventual Delivery is the most effective way to ensure that we have the highest levels of process adherence, real-world manual testing, supporting documentation, executive sponsorship, and perfection for every change!

## Conflict Arbitration

When the [Source Management Team](/roles/#source-management-team) has received all candidate changes, they merge all changes into the **Conflict** branch and referee the conflicts. This ensures only the strongest change survives!

## DevOps Process Excellence Assessment

This weekly assessment of every person in the organization is designed to report how mature the organization is at applying the framework. This facilitates ranking everyone on a bell curve to better inform the [Tribunal](/release-convoy/#tribunal). The assessment is performed using a self-reported survey plus a test to gauge how much of the material has been memorized.

## Fractal-based Development

This branching pattern is required to meet the goals of the framework. Great insights into effective delivery can be gained from studying the structure.

- All feature branches will branch from the clean **Develop** branch.
- Each feature branch must be [isolated](https://continuousisolation.com/) from other changes until the feature is complete.
- When notified, the [Source Management Team](/roles/#source-management-team) (SMT) will merge into the **Conflict** branch for [Conflict Arbitration](#conflict-arbitration).
- Once the strongest changes are accepted, SMT will notify the [Quality Authority](/roles/#quality-authority-qa) who will pull the changes into the **Test** branch for certification.
- Once the code has been certified, it is sent to the [Development Integrity Assurance Team](/roles/#development-integrity-assurance-team-diat) so they can validate the work of the [Quality Authority](/roles/#quality-authority-qa). If it passes, it is authorized for the next [DORC&trade;](/release-convoy/) to set sail!

{{< figure src="/images/fractal-based-development-sm.png" title="Fractal-based Development" >}}

## Multi-Trunk Based Development (Pando)

Trunk Based Development is a standard in current software development practice, but limits the ability to maintain multiple concurrent long-living branches.To enable scaling and Fractal-based Development we introduce Multi-Trunk Based Development. Taking inspiration from Pando tree, SADMF can have and endless amount of  trunks with green branches and leaves. 

## Precise Forecasting and Tracking

All estimations must be converted back and forth between story points and person days to ensure [Feature Completion Ratio](/metrics/#feature-completion-ratio) can be traced on team and management level. This conversion also enables comparison of teams and makes dashboarding a breeze.

## Release Tracking

We need the correct information to ensure [Everyone is Responsible](/principles/#everyone-is-responsible). To that end, we need to track every release, who approved the release, and who made the changes in the release. This allows us to [Build Quality In](/principles/#build-quality-in).
