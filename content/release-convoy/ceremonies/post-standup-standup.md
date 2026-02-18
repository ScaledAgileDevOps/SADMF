---
title: "Post-Standup Standup"
linkTitle: "Post-Standup Standup"
type: docs
description: A ceremony dedicated to providing status updates on the work that is not being worked on
weight: 12
---

Only the most important status updates are given in Standup, and some defects are lower priority than some features. To address this gap, the SADMF prescribes the Post-Standup Standup ceremony. Here, everyone on the Convoy participates to provide status updates to the [Commodore](/roles/#commodore-c) on the lower-priority work that is not being worked on. While the daily standup focuses on active work and typically lasts 15 minutes, the Post-Standup Standup addresses the much larger universe of inactive work and accordingly requires 45 to 60 minutes. The SADMF recognizes that the amount of work not being done always exceeds the amount of work being done, and this ceremony ensures that all of it receives appropriate visibility.

## Attendance and Format

Attendance at the Post-Standup Standup is mandatory for all [Code Engineers](/roles/#code-engineer-ce), [Feature Captains](/roles/#feature-captain-fc), and the [Commodore](/roles/#commodore-c). While the standup itself follows the industry-standard practice of requiring participants to stand (to encourage brevity), the Post-Standup Standup relaxes this requirement. Chairs are permitted, and indeed encouraged, due to the ceremony's extended duration. The SADMF refers to this as the "Seated Exception," which was introduced after an incident in which a Code Engineer fainted during minute 38 of a particularly thorough Post-Standup Standup. The seated format does sacrifice the brevity incentive, but the SADMF has determined that comprehensive coverage of non-work is more important than speed.

## The Round-Robin Protocol

The Post-Standup Standup follows a strict round-robin format in which every participant speaks in turn, regardless of whether they have anything to report. The expected format is: "I am not currently working on [item]. There is no update on [item]. I have nothing to add." This statement must be delivered verbally and cannot be abbreviated, even when repeated identically across multiple consecutive days. The [Commodore](/roles/#commodore-c) has found that hearing each engineer explicitly confirm the absence of progress provides a level of assurance that a simple "no update" email could never achieve. Engineers who attempt to say "same as yesterday" are asked to repeat their full statement, as the Commodore may have forgotten yesterday's version and should not be expected to maintain continuity across days.

## The Commodore's Follow-Up Questions

Following the round-robin, the [Commodore](/roles/#commodore-c) conducts a question-and-answer period. These questions frequently address topics that could have been handled via email, Slack, or a brief hallway conversation, but the Commodore's preference is for synchronous, full-team discussion. Common questions include: "When do you think we might start working on that item?" (to which the answer is invariably "it depends on priorities"), "Has the customer asked about that item?" (to which the answer is invariably "not recently"), and "Can you remind me what that item is?" (to which the Code Engineer must provide a full summary, as referencing the backlog tool would require a screen share and the conference room projector is perpetually misconfigured). The Q&A period accounts for approximately 60% of the ceremony's total duration.

## The Productivity Paradox

The SADMF acknowledges what some practitioners have called the "Post-Standup Paradox" — namely, that spending 45 to 60 minutes each day reporting on work that is not being done directly reduces the time available to do work, thereby increasing the volume of work that must be reported on in the next Post-Standup Standup. The SADMF does not consider this a paradox but rather a virtuous cycle: as the backlog of non-work grows, the ceremony becomes more comprehensive, providing the [Commodore](/roles/#commodore-c) with an increasingly complete picture of everything the team is not accomplishing. This information is critical for [Convoy Alignment](/release-convoy/agenda/) planning, where it helps justify requests for additional headcount that will attend additional Post-Standup Standups.

## See Also

- [Commodore](/roles/#commodore-c) for the role that facilitates and benefits from this ceremony
- [Code Engineers](/roles/#code-engineer-ce) for the participants who provide status on their non-work
- [Post Standup Standup Review](/release-convoy/ceremonies/post-standup-standup-review/) for the documentation process that follows this ceremony
- [Scrum of Scrum of Scrums](/release-convoy/ceremonies/scrum-of-scrum-of-scrums/) for the companion meeting covering active-work communication at scale
