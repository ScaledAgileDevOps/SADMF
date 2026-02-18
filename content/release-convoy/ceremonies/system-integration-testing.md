---
title: "System Integration Testing"
linkTitle: "System Integration Testing"
type: docs
description: If two teams validating a change are good, three teams are better — the final testing gate before the convoy is permitted to sail
weight: 10
---

System Integration Testing (SIT) is the ceremony in which all features of the current convoy are tested together as a unified whole. The SIT team is a permanent, dedicated team that exists for this singular purpose. During the weeks when features are being coded, inspected, and unit tested, the SIT team attends daily standups but has nothing to report. They are, however, required to attend, as their presence demonstrates organizational commitment to integration quality and their absence would create an awkward gap in the standup rotation. SIT team members use this waiting period to maintain the SIT environment, update their test scripts from previous convoys, and attend mandatory training on the SADMF process framework.

SIT can only begin after ALL features in the convoy have completed unit [Testing](/release-convoy/ceremonies/testing/) and received their Testing Completion Certificates. This is a critical dependency. Even if nine of ten features are ready, SIT cannot begin until the tenth feature clears testing, because testing features in isolation would defeat the entire purpose of integration testing. This sequencing occasionally creates a bottleneck in which the SIT team waits idle for weeks while a single feature cycles through inspection remediation, but this idle time is not waste — it is readiness. The alternative would be to begin integration testing incrementally as features complete, but this would be continuous integration, which is a different framework's concern.

The SIT environment is a shared environment that approximates production, in the same way that a photograph of the ocean approximates sailing. It is maintained by a separate infrastructure team and is frequently in a broken state due to configuration drift, expired certificates, or resource contention from multiple convoy cycles attempting to use it simultaneously. When the SIT environment is unavailable, the SIT team documents the outage in the SIT Environment Availability Log and waits. SIT environment downtime is not counted against the SIT testing timebox because it is classified as an external dependency, and external dependencies are, by definition, outside the team's control and therefore outside their accountability.

Defects discovered during SIT are among the most expensive to remediate. By the time a SIT defect is identified, the [Code Engineers](/roles/code-engineer/) who wrote the code have been released back to the coding pool through the [Press Gang](/release-convoy/ceremonies/press-gang/) ceremony and are now working on entirely different features for the next convoy. Pulling an engineer back to fix a SIT defect requires filing an Emergency Resource Reallocation Request, which must be approved by the [Feature Captain](/roles/feature-captain/) of both the current and previous features. The engineer must then context-switch back to code they wrote weeks ago, often with no more guidance than a SIT defect report that reads "Feature X does not work correctly when combined with Feature Y." The cost and delay of SIT defect remediation is well-documented but is accepted as the price of thorough validation.

Upon successful completion of all SIT test cases, the SIT team produces the SIT Sign-Off Document, a comprehensive report attesting that all convoy features have been tested in combination and that all critical and high-severity defects have been resolved or formally accepted as known issues. The SIT Sign-Off Document is a mandatory input to the [Manifest Approval](/release-convoy/ceremonies/manifest-approval/) ceremony and is filed permanently with the [Convoy Manifest](/release-convoy/manifest/). Without it, the convoy cannot receive authorization to sail, regardless of any other evidence that the software is ready for production.

## See Also

- [Testing](/release-convoy/ceremonies/testing/) for the unit testing phase that must complete before SIT begins
- [Manifest Approval](/release-convoy/ceremonies/manifest-approval/) for the ceremony that requires the SIT Sign-Off Document
- [Convoy Manifest](/release-convoy/manifest/) for where the SIT Sign-Off Document is filed
- [Code Engineers](/roles/code-engineer/) for who must be recalled to fix SIT defects
- [Press Gang](/release-convoy/ceremonies/press-gang/) for why Code Engineers are no longer available when SIT defects are found
