---
title: Execution Ceremonies
linkTitle: Ceremonies
type: docs
description: The ceremonies that govern active development, quality assurance, communication, and release authorization during the convoy execution phase
weight: 10
tags: ["release-management", "quality", "governance"]
---

Execution Ceremonies govern the active development phase of the DevOps Release Convoy&trade;. They cover the full spectrum of delivery activity: building features, inspecting code, validating quality, maintaining communication across teams, and ultimately authorizing the convoy to sail.

These ceremonies must be completed in the prescribed order. Any attempt to bypass a ceremony — for instance, submitting code for [System Integration Testing](/release-convoy/execution/ceremonies/system-integration-testing/) before it has passed [Code Inspection](/release-convoy/execution/ceremonies/code-inspection/) — constitutes a process violation and may result in the feature being removed from the current convoy.

## Execution Ceremony Sequence

1. **[Coding](/release-convoy/execution/ceremonies/coding/)** — Code Engineers implement features within the fixed timebox using Continuous Isolation.
2. **[Code Inspection](/release-convoy/execution/ceremonies/code-inspection/)** — The Code Standards Enforcement Team validates compliance before any code may proceed.
3. **[Testing](/release-convoy/execution/ceremonies/testing/)** — The Quality Authority validates all code independently of the engineers who wrote it.
4. **[System Integration Testing](/release-convoy/execution/ceremonies/system-integration-testing/)** — The final quality gate before the convoy is authorized to sail.
5. **[Scrum of Scrum of Scrums](/release-convoy/execution/ceremonies/scrum-of-scrum-of-scrums/)** — Aggregated status reporting across all feature teams.
6. **[Post-Standup Standup](/release-convoy/execution/ceremonies/post-standup-standup/)** — Daily status consolidation for work not captured in the standard standup.
7. **[Post-Standup Standup Review](/release-convoy/execution/ceremonies/post-standup-standup-review/)** — Documentation and distribution of Post-Standup Standup outputs.
8. **[Manifest Approval](/release-convoy/execution/ceremonies/manifest-approval/)** — The Convoy Steering Committee authorizes the fleet to sail.

## See Also

- [Execution Phase](/release-convoy/execution/) for the full execution phase overview
- [Planning Ceremonies](/release-convoy/planning/ceremonies/) for the ceremonies that precede execution
- [Beyond the Convoy](/release-convoy/beyond/) for the reflection ceremonies that follow
