---
title: The Armada
linkTitle: The Armada
type: docs
description: Coordinating multiple convoys for maximum enterprise alignment
weight: 9
---

When a single DevOps Release Convoy&trade; is insufficient for the scale of the enterprise, multiple convoys are assembled into an Armada. The Armada provides the coordination layer necessary to ensure that convoys operating independently can be brought into alignment through additional meetings, documentation, and oversight.

## When to Form an Armada

An Armada should be formed when any of the following conditions are met:

- More than 3 [Feature Teams](/roles/feature-team/) exist across the organization
- Two or more convoys share a dependency, even if the dependency is theoretical
- An executive requests "better visibility" into cross-convoy delivery
- The organization has hired enough [Feature Captains](/roles/feature-captain/) to warrant a captain's captain

## Armada Command Structure

The Armada is commanded by an **Admiral**, who outranks all [Commodores](/roles/commodore/) and reports directly to the [Admiral's Transformation Office](/roles/admirals-transformation-office/). The Admiral's responsibilities include:

- Chairing the Convoy of Convoys Alignment (a 10-day planning event held quarterly)
- Reviewing and approving each convoy's [Nautical Charts](/release-convoy/nautical-charts/)
- Mediating priority disputes between [Commodores](/roles/commodore/) using [WSVF](/release-convoy/wsvf/) scores
- Producing the weekly Armada Status Folio, a comprehensive report consolidating all convoy status reports into a single document that no one reads

## The Super-Manifest

Each convoy produces its own [Convoy Manifest](/release-convoy/manifest/). The Armada requires an additional Super-Manifest that aggregates all convoy manifests and adds:

- Cross-convoy dependency declarations, signed by all affected [Commodores](/roles/commodore/)
- An Armada-level risk register maintained by the [DIAT](/roles/development-integrity-assurance-team/)
- Integration sequence diagrams showing the order in which convoys should deploy, overriding any convoy-level deployment decisions
- A cover page with the Armada's chosen name and heraldic crest (each Armada must have a unique crest approved by the ATO)

## Convoy of Convoys Alignment

This 10-day event brings together all [Commodores](/roles/commodore/), [Feature Captains](/roles/feature-captain/), and selected [Code Engineers](/roles/code-engineer/) from every convoy. The first five days mirror the standard [Convoy Alignment](/release-convoy/agenda/) format. The second five days are dedicated to cross-convoy dependency negotiation, where teams discover that the dependencies identified during the first five days have already changed.

Attendance is in-person at a venue selected by the Admiral. The venue must be in a different city than the previous Convoy of Convoys to ensure the team-building benefits of shared travel disruption.

## Armada Ceremonies

In addition to each convoy's own [ceremonies](/release-convoy/ceremonies/), the Armada introduces:

- **Admiral's Standup**: A daily 90-minute standing meeting where each [Commodore](/roles/commodore/) briefs the Admiral on convoy progress. Standing is mandatory to encourage brevity, though brevity has never been achieved.
- **Cross-Convoy Sync**: A weekly meeting where representatives from each convoy share updates that were already shared in the Admiral's Standup, but in a different format.
- **Armada Fleet Inspection**: A two-day event aggregating all convoy [Fleet Inspections](/release-convoy/fleet-inspection/) into a single marathon review session. Features are re-presented to the Admiral regardless of whether they passed their convoy-level inspection.

## See Also

- [DevOps Release Convoy](/release-convoy/) for the single-convoy process the Armada coordinates
- [Convoy Alignment](/release-convoy/agenda/) for the planning format scaled up in the Convoy of Convoys
- [Nautical Charts](/release-convoy/nautical-charts/) for dependency visualization across convoys
- [Admiral's Transformation Office](/roles/admirals-transformation-office/) for the body that oversees Armadas
