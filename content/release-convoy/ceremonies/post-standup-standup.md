---
title: "Post-Standup Standup"
linkTitle: "Post-Standup Standup"
type: docs
description: A ceremony dedicated to providing status updates on the work that is not being worked on
weight: 12
tags: ["communication", "reporting", "release-management"]
---

<!-- Ceremony Summary Box -->
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0;border:2px solid #1e3a5f;border-radius:8px;overflow:hidden;margin:1.5rem 0 2rem 0;box-shadow:0 2px 8px rgba(30,58,95,0.12)">
  <div style="background:#1e3a5f;color:#fff;padding:1.25rem 1rem;text-align:center">
    <div style="font-size:1.5rem;margin-bottom:0.4rem"><i class="fa-solid fa-users"></i></div>
    <div style="font-size:0.7rem;text-transform:uppercase;letter-spacing:0.1em;opacity:0.75;margin-bottom:0.5rem">Participants</div>
    <div style="font-size:0.9rem;font-weight:600;line-height:1.4">All Code Engineers<br>All Feature Captains<br>Commodore</div>
  </div>
  <div style="background:#a23b72;color:#fff;padding:1.25rem 1rem;text-align:center;border-left:2px solid #fff;border-right:2px solid #fff">
    <div style="font-size:1.5rem;margin-bottom:0.4rem"><i class="fa-solid fa-clock"></i></div>
    <div style="font-size:0.7rem;text-transform:uppercase;letter-spacing:0.1em;opacity:0.75;margin-bottom:0.5rem">Duration</div>
    <div style="font-size:0.9rem;font-weight:600;line-height:1.4">45–60 minutes<br><span style="font-size:0.8rem;font-weight:400;opacity:0.85">(daily, after Standup)</span></div>
  </div>
  <div style="background:#2c7be5;color:#fff;padding:1.25rem 1rem;text-align:center">
    <div style="font-size:1.5rem;margin-bottom:0.4rem"><i class="fa-solid fa-file-lines"></i></div>
    <div style="font-size:0.7rem;text-transform:uppercase;letter-spacing:0.1em;opacity:0.75;margin-bottom:0.5rem">Output</div>
    <div style="font-size:0.9rem;font-weight:600;line-height:1.4">Commodore assurance<br>on all non-work<br>visibility</div>
  </div>
</div>

Only the most important status updates are given in Standup, and some defects are lower priority than some features. To address this gap, the SADMF prescribes the Post-Standup Standup ceremony. Here, everyone on the Convoy participates to provide status updates to the [Commodore](/roles/commodore/) on the lower-priority work that is not being worked on. While the daily standup focuses on active work and typically lasts 15 minutes, the Post-Standup Standup addresses the much larger universe of inactive work and accordingly requires 45 to 60 minutes. The SADMF recognizes that the amount of work not being done always exceeds the amount of work being done, and this ceremony ensures that all of it receives appropriate visibility.

{{< ceremony-post-standup-room >}}

## Attendance and Format

Attendance at the Post-Standup Standup is mandatory for all [Code Engineers](/roles/code-engineer/), [Feature Captains](/roles/feature-captain/), and the [Commodore](/roles/commodore/). While the standup itself follows the industry-standard practice of requiring participants to stand (to encourage brevity), the Post-Standup Standup relaxes this requirement. Chairs are permitted, and indeed encouraged, due to the ceremony's extended duration. The SADMF refers to this as the "Seated Exception," which was introduced after an incident in which a Code Engineer fainted during minute 38 of a particularly thorough Post-Standup Standup. The seated format does sacrifice the brevity incentive, but the SADMF has determined that comprehensive coverage of non-work is more important than speed.

## The Round-Robin Protocol

The Post-Standup Standup follows a strict round-robin format in which every participant speaks in turn, regardless of whether they have anything to report. The expected format is: "I am not currently working on [item]. There is no update on [item]. I have nothing to add." This statement must be delivered verbally and cannot be abbreviated, even when repeated identically across multiple consecutive days. The [Commodore](/roles/commodore/) has found that hearing each engineer explicitly confirm the absence of progress provides a level of assurance that a simple "no update" email could never achieve. Engineers who attempt to say "same as yesterday" are asked to repeat their full statement, as the Commodore may have forgotten yesterday's version and should not be expected to maintain continuity across days.

## The Commodore's Follow-Up Questions

Following the round-robin, the [Commodore](/roles/commodore/) conducts a question-and-answer period. These questions frequently address topics that could have been handled via email, Slack, or a brief hallway conversation, but the Commodore's preference is for synchronous, full-team discussion. Common questions include: "When do you think we might start working on that item?" (to which the answer is invariably "it depends on priorities"), "Has the customer asked about that item?" (to which the answer is invariably "not recently"), and "Can you remind me what that item is?" (to which the Code Engineer must provide a full summary, as referencing the backlog tool would require a screen share and the conference room projector is perpetually misconfigured). The Q&A period accounts for approximately 60% of the ceremony's total duration.

## The Productivity Paradox

The SADMF acknowledges what some practitioners have called the "Post-Standup Paradox" — namely, that spending 45 to 60 minutes each day reporting on work that is not being done directly reduces the time available to do work, thereby increasing the volume of work that must be reported on in the next Post-Standup Standup. The SADMF does not consider this a paradox but rather a virtuous cycle: as the backlog of non-work grows, the ceremony becomes more comprehensive, providing the [Commodore](/roles/commodore/) with an increasingly complete picture of everything the team is not accomplishing. This information is critical for [Convoy Alignment](/release-convoy/agenda/) planning, where it helps justify requests for additional headcount that will attend additional Post-Standup Standups.

<!-- Ceremony Agenda -->
<div style="margin:2.5rem 0 1.5rem 0">
  <h2 style="font-size:1.3rem;font-weight:700;color:#1e3a5f;border-bottom:2px solid #e8edf5;padding-bottom:0.5rem;margin-bottom:1.25rem">
    <i class="fa-solid fa-list-ol" style="color:#a23b72;margin-right:0.5rem"></i>Ceremony Agenda
  </h2>
  <!-- Step 1 -->
  <div style="display:flex;gap:1rem;margin-bottom:1rem;align-items:flex-start">
    <div style="flex-shrink:0;width:2.25rem;height:2.25rem;border-radius:50%;background:#1e3a5f;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.95rem;margin-top:0.1rem">1</div>
    <div style="flex:1;background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:1rem 1.15rem">
      <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.25rem">Transition from Daily Standup <span style="float:right;font-size:0.8rem;font-weight:400;color:#5a6d82"><i class="fa-solid fa-clock" style="margin-right:0.25rem"></i>~2 min</span></div>
      <div style="font-size:0.9rem;color:#1e3a5f;opacity:0.85">All mandatory participants take their seats per the Seated Exception protocol. The Commodore opens the ceremony and confirms full attendance.</div>
    </div>
  </div>
  <!-- Step 2 -->
  <div style="display:flex;gap:1rem;margin-bottom:1rem;align-items:flex-start">
    <div style="flex-shrink:0;width:2.25rem;height:2.25rem;border-radius:50%;background:#a23b72;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.95rem;margin-top:0.1rem">2</div>
    <div style="flex:1;background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:1rem 1.15rem">
      <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.25rem">Round-Robin Protocol <span style="float:right;font-size:0.8rem;font-weight:400;color:#5a6d82"><i class="fa-solid fa-clock" style="margin-right:0.25rem"></i>15–20 min</span></div>
      <div style="font-size:0.9rem;color:#1e3a5f;opacity:0.85">Each participant delivers the required verbal statement on each inactive backlog item in turn. No abbreviations. No "same as yesterday." Statements must be delivered in full, verbatim.</div>
    </div>
  </div>
  <!-- Step 3 -->
  <div style="display:flex;gap:1rem;margin-bottom:1rem;align-items:flex-start">
    <div style="flex-shrink:0;width:2.25rem;height:2.25rem;border-radius:50%;background:#2c7be5;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.95rem;margin-top:0.1rem">3</div>
    <div style="flex:1;background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:1rem 1.15rem">
      <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.25rem">Commodore's Follow-Up Q&amp;A <span style="float:right;font-size:0.8rem;font-weight:400;color:#5a6d82"><i class="fa-solid fa-clock" style="margin-right:0.25rem"></i>27–36 min</span></div>
      <div style="font-size:0.9rem;color:#1e3a5f;opacity:0.85">The Commodore asks clarifying questions about inactive work. Participants respond verbally. Screen sharing is not available due to projector configuration status. Accounts for approximately 60% of total ceremony duration.</div>
    </div>
  </div>
  <!-- Step 4 -->
  <div style="display:flex;gap:1rem;margin-bottom:0;align-items:flex-start">
    <div style="flex-shrink:0;width:2.25rem;height:2.25rem;border-radius:50%;background:#1e3a5f;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.95rem;margin-top:0.1rem">4</div>
    <div style="flex:1;background:#e8edf5;border:1px solid #9ab4cc;border-radius:6px;padding:1rem 1.15rem">
      <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.25rem">Ceremony Close &amp; Hand Off <span style="float:right;font-size:0.8rem;font-weight:400;color:#5a6d82"><i class="fa-solid fa-clock" style="margin-right:0.25rem"></i>~2 min</span></div>
      <div style="font-size:0.9rem;color:#1e3a5f;opacity:0.85">Commodore confirms all non-work has received adequate visibility. Participants are dismissed to attend the <a href="/release-convoy/ceremonies/post-standup-standup-review/">Post-Standup Standup Review</a>.</div>
    </div>
  </div>
</div>

## See Also

- [Commodore](/roles/commodore/) for the role that facilitates and benefits from this ceremony
- [Code Engineers](/roles/code-engineer/) for the participants who provide status on their non-work
- [Post-Standup Standup Review](/release-convoy/ceremonies/post-standup-standup-review/) for the documentation process that follows this ceremony
- [Scrum of Scrum of Scrums](/release-convoy/ceremonies/scrum-of-scrum-of-scrums/) for the companion meeting covering active-work communication at scale
