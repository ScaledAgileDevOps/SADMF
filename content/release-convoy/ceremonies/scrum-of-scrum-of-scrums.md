---
title: "Scrum of Scrum of Scrums"
linkTitle: "Scrum of Scrum of Scrums"
type: docs
description: To effectively scale communication, we layer meetings upon meetings until no one has time to do the work being discussed
weight: 11
---

The Scrum of Scrum of Scrums (SoSoS) is the SADMF's proven approach to scaling daily communication across the enterprise. First thing in the morning after the daily scrum, each team selects a Tribute to attend the daily Scrum of Scrums (SOS). At noon, your Tribute attends a Scrum with the Tributes from the other teams. They select a Tribute of Tributes from the SOS meeting who, at 3 PM, attends a meeting with the Tribute of Tributes of the Scrums of Scrums from the broader organization. They then reverse the process to pass down direction. May the odds be ever in your favor. The use of Hunger Games terminology is not metaphorical; it is an official part of the SADMF vocabulary, reflecting the competitive nature of organizational communication and the reality that not every message survives the journey.

## The Tribute's Daily Schedule

The Tribute role is a rotating honor, though in practice it tends to settle on the same person each sprint — specifically, the [Code Engineer](/roles/code-engineer/) who talks the most, not the one with the most relevant information. A typical Tribute's day proceeds as follows: 9:00 AM, attend the team's daily scrum (15 minutes). 9:15 AM, prepare notes for the SOS meeting (30 minutes). 10:00 AM, pre-SOS alignment huddle with the [Feature Captain](/roles/feature-captain/) to agree on messaging (30 minutes). 12:00 PM, attend the Scrum of Scrums (45 minutes). 1:00 PM, prepare notes for the SoSoS meeting (30 minutes). 1:30 PM, pre-SoSoS alignment call (15 minutes). 3:00 PM, attend the Scrum of Scrum of Scrums (60 minutes). 4:00 PM, reverse cascade debrief with SOS-level Tributes (30 minutes). 4:30 PM, reverse cascade debrief with team (30 minutes). 5:00 PM, file the SOS Minutes document (15 minutes). This leaves approximately 45 minutes for actual coding, which the SADMF considers more than sufficient for a well-organized [Code Engineer](/roles/code-engineer/).

## The Telephone Game Effect

One of the most elegant properties of the SoSoS structure is how information naturally evolves as it passes through each layer. A message such as "Team Alpha's API endpoint is returning a 500 error on the staging environment" might arrive at the SoSoS level as "Team Alpha has concerns about their numbers." On the reverse cascade, a directive from leadership such as "Consider whether the Q3 timeline is realistic" arrives at the team level as "Leadership has confirmed the Q3 timeline is mandatory and cannot slip." This information mutation is not a deficiency of the process — it is a feature. It ensures that each organizational layer receives the version of reality most appropriate to its altitude. Detailed accuracy would only overwhelm senior leaders, while nuanced strategic direction would only confuse [Code Engineers](/roles/code-engineer/).

## Tribute Selection Criteria

The SADMF recommends selecting Tributes based on the following criteria, in order of priority: verbal confidence (the ability to speak at length regardless of subject matter expertise), availability (engineers currently blocked on dependencies are ideal candidates, as they are "not doing anything anyway"), and seniority (measured by tenure in the organization, not by technical knowledge of the work being discussed). Under no circumstances should the Tribute be the person most familiar with the team's current technical challenges, as this would remove a critical resource from the team and might result in the SOS meetings becoming productive, which would set unsustainable expectations.

## The SOS Minutes Document

Every Tribute is required to file a daily SOS Minutes document within 30 minutes of the final reverse cascade debrief. The SOS Minutes must include: a summary of all items discussed (minimum 500 words), the Tribute Attendance Roster, a list of cross-team dependencies mentioned (whether or not they are real), and the official Confidence Score, which is a numerical rating from 1 to 5 indicating the Tribute's confidence that the information relayed accurately reflects what was originally communicated. Historical data shows an average Confidence Score of 2.1, which the SADMF considers healthy and within expected parameters. The SOS Minutes are filed with the [Commodore](/roles/commodore/) and archived in the Convoy Record. They are never read, but their existence is verified during the [Harbor Review](/release-convoy/ceremonies/harbor-review/).

## The Reverse Cascade

The reverse cascade — the process by which direction flows back down from the SoSoS level through the SOS level to individual teams — typically completes by 5:00 PM. This means that strategic direction issued by leadership at 3:00 PM arrives at the team level just as [Code Engineers](/roles/code-engineer/) are preparing to leave for the day. The SADMF considers this optimal timing, as it gives engineers the evening to mentally process the direction and arrive the next morning ready to discuss it in standup, which feeds back into the SOS, which feeds into the SoSoS, creating a beautifully self-sustaining cycle of communication about communication.

## See Also

- [Code Engineers](/roles/code-engineer/) for the role from which Tributes are selected
- [Feature Captain](/roles/feature-captain/) for who approves the Tribute's messaging
- [Post-Standup Standup](/release-convoy/ceremonies/post-standup-standup/) for the companion meeting covering lower-priority status
- [Commodore](/roles/commodore/) for who receives the SOS Minutes
- [Harbor Review](/release-convoy/ceremonies/harbor-review/) for where SOS Minutes filing compliance is verified
