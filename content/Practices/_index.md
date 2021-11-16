---
title: Practices
description: Recommended practices
weight: 5
---

#### CI/CD/ED

Continuous Isolation / Continuous Deliberation /Eventual Delivery is the most effective way to ensure that we have the highest levels of process adherence, real-world manual testing, supporting documentation, executive sponsorship, and perfection for every change!

#### Conflict Arbitration

When the Source Management Team has received all candidate changes for merging, they will merge all changes into the `conflict` branch and referee the conflicts. This ensures only the strongest changes survive!

#### Fractal-based Development

Below is a **simplified** version of the recommended branching pattern with permanent branches for Testing, Conflict Resolution, and Development. Each feature branch will exist for the duration of feature coding. All feature branches will branch from the clean `develop` branch. When notified, the *[**Source Management Team**](../organization/#source-management-team)* (SMT) will merge to the `conflict` branch for the *[**Conflict Arbitration**](#conflict-arbitration)* process. Once the strongest changes are merged, SMT will notify the *[**Quality Authority**](../organization/#quality-authority)* who will pull the changes into the `test` branch for certification. Once the code has been certified, it is authorized for the next Release Convoy to set sail! This is the most effective branching pattern to enable *[**Continuous Isolation**](https://continuousisolation.com/)*.

![**Fractal-based Development**](../images/fractal-based-development.png)

---

{{% button href="../certifications" %}}🏅 Get Certified! 🏅{{% /button %}}
{{% button href="https://www.teepublic.com/t-shirt/25575514-scaled-agile-devops-maturity-framework" %}}💸 Official Swag! 💸{{% /button %}}