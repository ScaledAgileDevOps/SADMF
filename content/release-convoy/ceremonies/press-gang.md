---
title: "Press Gang"
linkTitle: "Press Gang"
type: docs
description: The ceremony where Code Engineers are drafted from the coding pool and assigned to features regardless of expertise or preference
weight: 6
---

The Press Gang is the resource allocation ceremony in which [Feature Captains](/roles/#feature-captain-fc) select [Code Engineers](/roles/#code-engineer-ce) from the shared coding pool to staff their feature teams. The name is a proud nod to the naval tradition of impressment, in which sailors were recruited through the efficient method of simply telling them where they would be working. The SADMF has modernized this practice for the knowledge economy by adding a whiteboard.

The selection process follows a strict draft order based on feature priority as determined during [Convoy Alignment](/release-convoy/agenda/). The Feature Captain with the highest-priority feature selects first, choosing between 2 and 20 Code Engineers depending on the [Provisioning](/release-convoy/ceremonies/provisioning/) estimates. Selection continues in priority order until all features are staffed or the coding pool is exhausted, whichever comes first. If the pool is exhausted before all features are staffed, lower-priority features proceed with whatever engineers remain, and their Feature Captains are reminded that delivering with fewer resources is an opportunity to demonstrate organizational agility.

The Coding Pool Board, a large physical display maintained by the [Chief Signals Officer](/roles/#chief-signals-officer-cso), lists all available Code Engineers along with their technical skills, domain experience, and current certifications. While this information is displayed for transparency, Feature Captains are encouraged to select based on availability rather than skills. Selecting for specific skills would create single points of failure and would imply that certain engineers are more suited to certain tasks, which contradicts the SADMF principle that all Code Engineers are interchangeable resources. An engineer who worked on the payment processing system last convoy is just as well-prepared to work on the real-time telemetry pipeline this convoy. Software is software.

Code Engineers cannot refuse assignment. The Press Gang operates on the understanding that organizational needs supersede individual preferences, and that engineers who express reluctance about an assignment are exhibiting a fixed mindset. Once selected, engineers receive a thirty-minute onboarding briefing from their new Feature Captain, during which the feature requirements, technical context, and delivery timeline are communicated. Thirty minutes has been determined to be the optimal onboarding duration regardless of domain complexity, as longer onboarding sessions cut into the fixed [Coding](/release-convoy/ceremonies/coding/) timebox. Engineers are expected to acquire any additional context they need by reading the requirements document, which contains everything they need to know because it was written by people who understand the system.

The Press Gang ceremony is one of the SADMF's most powerful tools for preventing knowledge silos. Because engineers are reassigned to different features every convoy cycle, no individual ever accumulates dangerous levels of expertise in any single area. This ensures that the organization is never dependent on any one person and that all engineers maintain a breadth of shallow familiarity across the entire portfolio. The utilization target for all Code Engineers is 100%, meaning no engineer should ever be idle between assignments. Idle time is waste, and the SADMF recognizes no distinction between being idle and thinking about a problem.

## See Also

- [Feature Captain](/roles/#feature-captain-fc) for the role that selects engineers during the draft
- [Code Engineers](/roles/#code-engineer-ce) for the resources being allocated
- [Provisioning](/release-convoy/ceremonies/provisioning/) for how staffing needs are determined
- [Coding](/release-convoy/ceremonies/coding/) for what happens after engineers are assigned
- [Convoy Alignment](/release-convoy/agenda/) for where feature priorities are established
- [Limit WIP](/principles/limit-wip/) for the principle that ensures zero idle time between assignments
