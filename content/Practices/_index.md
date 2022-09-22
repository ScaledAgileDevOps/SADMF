---
title: Practices
description: Only by strict adherence to SAD practices can we achieve the expected outcomes!
weight: 4
---

{{% notice note %}}
**Delivering complex systems requires complex practices to control the complexity**
{{% /notice %}}

## CI/CD/ED

Continuous Isolation / Continuous Deliberation / Eventual Delivery is the most effective way to ensure that we have the highest levels of process adherence, real-world manual testing, supporting documentation, executive sponsorship, and perfection for every change!

## Conflict Arbitration

When the Source Management Team has received all candidate changes for merging, they will merge all changes into the **Conflict** branch and referee the conflicts. This ensures only the strongest change survives!

## Fractal-based Development

Below is the required branching pattern with permanent branches for Testing, Conflict Resolution, and Development.

- Each feature branch will exist for the duration of feature coding.
- All feature branches will branch from the clean **Develop** branch.
- When notified, the *[**Source Management Team**](/organization/#source-management-team)* (SMT) will merge into the **Conflict** branch for the *[**Conflict Arbitration**](#conflict-arbitration)* process.
- Once the strongest changes are merged, SMT will notify the *[**Quality Authority**](/organization/#quality-authority)* who will pull the changes into the **Test** branch for certification.
- Once the code has been certified, it is sent to the *[**Development Integrity Assurance Team**](/organization/#development-integrity-assurance-team)* so they can validate the work of the *[**Quality Authority**](/organization/#quality-authority)*. If it passes, it is authorized for the next *[**DORC&trade;**](/release-convoy/)* to set sail!

This is the most effective branching pattern to enable *[**Continuous Isolation**](https://continuousisolation.com/)*!

{{< figure src="/images/fractal-based-development.png" title="Fractal-based Development" width="60%" >}}

## Release Tracking

We need the correct information to ensure *[**Everyone is Responsible**](/principles/#everyone-is-responsible)*. To that end, we need to track every release, who approved the release, and who made the changes in the release. This allows us to *[**Build Quality In**](/principles/#build-quality-in)*.

---

{{% button href="/certifications" %}}🏅 Get Certified! 🏅{{% /button %}}
{{% button href="https://www.teepublic.com/t-shirt/25575514-scaled-agile-devops-maturity-framework" %}}💸 Official Swag! 💸{{% /button %}}
{{% button href="https://www.patreon.com/scaledagiledevops" %}}Invest in SADMF!{{% /button %}}