---
title: Nautical Charts
linkTitle: Nautical Charts
type: docs
description: Visualizing dependencies so we can see exactly how stuck we are
weight: 3
---

The Nautical Chart is a large-format physical board created during [Convoy Alignment](/release-convoy/agenda/) that maps every feature, dependency, risk, and milestone for the upcoming convoy cycle. It is the single source of truth for the convoy, provided you can read it.

## Construction

The Nautical Chart is constructed on Day 3 of [Convoy Alignment](/release-convoy/agenda/) using the following materials:

- A whiteboard measuring no less than 3 meters by 2 meters
- Sticky notes in seven designated colors (one per team, plus red for risks and gold for executive priorities)
- Colored string to connect dependent features (string color must match the upstream team's sticky note color)
- Pushpins to anchor string intersections
- A ruler, because straight lines convey professionalism
- A dedicated **Chart Officer** appointed by the [Commodore](/roles/commodore/) to maintain the chart throughout the convoy cycle

Digital tools are strictly prohibited. Spreadsheets and project management software create a false sense of accuracy and prevent the team from experiencing the tangible weight of their commitments. The physical act of moving a sticky note builds accountability in ways that dragging a card on a screen never can.

## Reading the Chart

The Nautical Chart uses the following conventions:

- **Horizontal axis**: Time, divided into weeks of the convoy cycle
- **Vertical axis**: Feature Teams, grouped by [Feature Captain](/roles/feature-captain/)
- **Sticky notes**: Features, with estimated story points written in the corner
- **Red string**: Hard dependencies (team B cannot start until team A finishes)
- **Yellow string**: Soft dependencies (team B probably should not start until team A finishes, but likely will)
- **Crossed strings**: Dependency conflicts, to be resolved by the [Commodore](/roles/commodore/) at a future meeting
- **Gold sticky notes**: Features with executive visibility, placed by [Feature Captains](/roles/feature-captain/) who have a direct relationship with the requesting executive

When string density exceeds the ability to trace any single path from start to finish, the chart is considered "comprehensive."

## Maintenance

The Chart Officer must update the Nautical Chart daily. This involves:

- Moving completed features to the "Sailed" column (far right)
- Adjusting string connections as dependencies change
- Replacing sticky notes that have fallen off (a daily occurrence, particularly near air conditioning vents)
- Adding new risk notes as discovered during [Post-Standup Standup](/release-convoy/ceremonies/post-standup-standup/)

Despite diligent maintenance, the Nautical Chart is generally acknowledged to be outdated within 48 hours of its creation. This is acceptable. The value of the chart lies not in its accuracy but in the alignment experience of building it together.

## Security

No photography of the Nautical Chart is permitted. The chart contains sensitive strategic information about delivery commitments and dependencies. Photographs could be shared with customers, partners, or other departments, creating unreasonable expectations about delivery timelines. If a stakeholder wishes to view the chart, they must visit the Convoy Alignment room in person and be accompanied by a [Feature Captain](/roles/feature-captain/) who can provide appropriate context for why nothing on the chart matches reality.

## See Also

- [Convoy Alignment](/release-convoy/agenda/) for the planning session where charts are constructed
- [The Armada](/release-convoy/armada/) for cross-convoy chart coordination
- [WSVF](/release-convoy/wsvf/) for how features on the chart are prioritized
- [Convoy Ceremonies](/release-convoy/ceremonies/) for the ceremonies that generate chart updates
