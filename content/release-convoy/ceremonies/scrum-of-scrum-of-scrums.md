---
title: "Scrum of Scrum of Scrums"
linkTitle: "Scrum of Scrum of Scrums"
type: docs
description: To effectively scale communication, we layer meetings upon meetings until no one has time to do the work being discussed
weight: 11
tags: ["communication", "reporting", "release-management"]
---

<!-- ═══════════════════════════════════════════════════════════
     SUMMARY BOX — Participants | Duration | Output
     ═══════════════════════════════════════════════════════════ -->
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0;border:2px solid #a23b72;border-radius:8px;overflow:hidden;margin:0 0 2rem 0;font-family:inherit">
  <div style="background:#242627;color:#fff;padding:1.1rem 1.25rem;text-align:center">
    <div style="font-size:.7rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#a23b72;margin-bottom:.5rem">Participants</div>
    <div style="font-size:.88rem;line-height:1.55">
      <div style="margin-bottom:.25rem"><i class="fa-solid fa-user" style="color:#a23b72;margin-right:.4rem"></i><a href="/roles/code-engineer/" style="color:#e8edf5;text-decoration:none">Tribute</a> <em style="color:#9ab4cc;font-size:.8rem">(from each SOS)</em></div>
      <div style="margin-bottom:.25rem"><i class="fa-solid fa-users" style="color:#a23b72;margin-right:.4rem"></i><a href="/roles/feature-captain/" style="color:#e8edf5;text-decoration:none">Feature Captain</a> <em style="color:#9ab4cc;font-size:.8rem">(messaging approval)</em></div>
      <div><i class="fa-solid fa-anchor" style="color:#a23b72;margin-right:.4rem"></i><a href="/roles/commodore/" style="color:#e8edf5;text-decoration:none">Commodore</a> <em style="color:#9ab4cc;font-size:.8rem">(receives minutes)</em></div>
    </div>
  </div>
  <div style="background:#1e3a5f;color:#fff;padding:1.1rem 1.25rem;text-align:center;border-left:2px solid #a23b72;border-right:2px solid #a23b72">
    <div style="font-size:.7rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#9ab4cc;margin-bottom:.5rem">Duration</div>
    <div style="font-size:2rem;font-weight:700;color:#e8edf5;line-height:1">7+</div>
    <div style="font-size:.8rem;color:#9ab4cc;margin-top:.2rem">hours of meetings daily</div>
    <div style="font-size:.72rem;color:#5a6d82;margin-top:.4rem">≈ 45 min remaining for work</div>
  </div>
  <div style="background:#242627;color:#fff;padding:1.1rem 1.25rem;text-align:center">
    <div style="font-size:.7rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#a23b72;margin-bottom:.5rem">Output</div>
    <div style="font-size:.88rem;line-height:1.55;color:#e8edf5">
      <div style="margin-bottom:.25rem"><i class="fa-solid fa-file-lines" style="color:#9ab4cc;margin-right:.4rem"></i>SOS Minutes Document</div>
      <div style="margin-bottom:.25rem"><i class="fa-solid fa-star" style="color:#9ab4cc;margin-right:.4rem"></i>Confidence Score (avg 2.1)</div>
      <div><i class="fa-solid fa-arrow-down-long" style="color:#9ab4cc;margin-right:.4rem"></i>Reverse Cascade Debrief</div>
    </div>
  </div>
</div>

The Scrum of Scrum of Scrums (SoSoS) is the SADMF's proven approach to scaling daily communication across the enterprise. First thing in the morning after the daily scrum, each team selects a Tribute to attend the daily Scrum of Scrums (SOS). At noon, your Tribute attends a Scrum with the Tributes from the other teams. They select a Tribute of Tributes from the SOS meeting who, at 3 PM, attends a meeting with the Tribute of Tributes of the Scrums of Scrums from the broader organization. They then reverse the process to pass down direction. May the odds be ever in your favor. The use of Hunger Games terminology is not metaphorical; it is an official part of the SADMF vocabulary, reflecting the competitive nature of organizational communication and the reality that not every message survives the journey.

{{< ceremony-scrum-pyramid >}}

## The Tribute's Daily Schedule

The Tribute role is a rotating honor, though in practice it tends to settle on the same person each sprint — specifically, the [Code Engineer](/roles/code-engineer/) who talks the most, not the one with the most relevant information. A typical Tribute's day proceeds as follows: 9:00 AM, attend the team's daily scrum (15 minutes). 9:15 AM, prepare notes for the SOS meeting (30 minutes). 10:00 AM, pre-SOS alignment huddle with the [Feature Captain](/roles/feature-captain/) to agree on messaging (30 minutes). 12:00 PM, attend the Scrum of Scrums (45 minutes). 1:00 PM, prepare notes for the SoSoS meeting (30 minutes). 1:30 PM, pre-SoSoS alignment call (15 minutes). 3:00 PM, attend the Scrum of Scrum of Scrums (60 minutes). 4:00 PM, reverse cascade debrief with SOS-level Tributes (30 minutes). 4:30 PM, reverse cascade debrief with team (30 minutes). 5:00 PM, file the SOS Minutes document (15 minutes). This leaves approximately 45 minutes for actual coding, which the SADMF considers more than sufficient for a well-organized [Code Engineer](/roles/code-engineer/).

<!-- ═══════════════════════════════════════════════════════════
     CEREMONY AGENDA — Tribute's day as numbered step cards
     ═══════════════════════════════════════════════════════════ -->
<div style="margin:2rem 0 2.5rem 0">
  <div style="font-size:.7rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#5a6d82;margin-bottom:1rem;padding-left:.25rem">Tribute's Daily Schedule</div>

  <!-- 9:00 AM -->
  <div style="display:flex;gap:1rem;margin-bottom:.75rem;align-items:flex-start">
    <div style="flex-shrink:0;width:3.5rem;text-align:center;padding-top:.2rem">
      <div style="font-size:.65rem;font-weight:700;color:#a23b72;letter-spacing:.05em">9:00</div>
      <div style="font-size:.6rem;color:#5a6d82">AM</div>
    </div>
    <div style="flex:1;background:#e8edf5;border:1px solid #9ab4cc;border-left:4px solid #a23b72;border-radius:6px;padding:.75rem 1rem">
      <div style="font-weight:700;color:#1e3a5f;font-size:.9rem;margin-bottom:.2rem"><i class="fa-solid fa-people-group" style="margin-right:.5rem;color:#5a6d82"></i>Daily Scrum <span style="font-weight:400;color:#5a6d82;font-size:.8rem">— 15 min</span></div>
      <div style="font-size:.83rem;color:#5a6d82">Attend the team's daily scrum. Begin collecting information that will be simplified beyond recognition at each subsequent meeting.</div>
    </div>
  </div>

  <!-- 9:15 AM -->
  <div style="display:flex;gap:1rem;margin-bottom:.75rem;align-items:flex-start">
    <div style="flex-shrink:0;width:3.5rem;text-align:center;padding-top:.2rem">
      <div style="font-size:.65rem;font-weight:700;color:#a23b72;letter-spacing:.05em">9:15</div>
      <div style="font-size:.6rem;color:#5a6d82">AM</div>
    </div>
    <div style="flex:1;background:#e8edf5;border:1px solid #9ab4cc;border-left:4px solid #9ab4cc;border-radius:6px;padding:.75rem 1rem">
      <div style="font-weight:700;color:#1e3a5f;font-size:.9rem;margin-bottom:.2rem"><i class="fa-solid fa-pen-to-square" style="margin-right:.5rem;color:#5a6d82"></i>Note Preparation <span style="font-weight:400;color:#5a6d82;font-size:.8rem">— 30 min</span></div>
      <div style="font-size:.83rem;color:#5a6d82">Prepare notes for the SOS meeting. Compress team's technical nuances into three bullet points suitable for non-technical consumption.</div>
    </div>
  </div>

  <!-- 10:00 AM -->
  <div style="display:flex;gap:1rem;margin-bottom:.75rem;align-items:flex-start">
    <div style="flex-shrink:0;width:3.5rem;text-align:center;padding-top:.2rem">
      <div style="font-size:.65rem;font-weight:700;color:#a23b72;letter-spacing:.05em">10:00</div>
      <div style="font-size:.6rem;color:#5a6d82">AM</div>
    </div>
    <div style="flex:1;background:#e8edf5;border:1px solid #9ab4cc;border-left:4px solid #9ab4cc;border-radius:6px;padding:.75rem 1rem">
      <div style="font-weight:700;color:#1e3a5f;font-size:.9rem;margin-bottom:.2rem"><i class="fa-solid fa-handshake" style="margin-right:.5rem;color:#5a6d82"></i>Pre-SOS Alignment Huddle <span style="font-weight:400;color:#5a6d82;font-size:.8rem">— 30 min</span></div>
      <div style="font-size:.83rem;color:#5a6d82">Align with <a href="/roles/feature-captain/" style="color:#1e3a5f">Feature Captain</a> on approved messaging. Ensure nothing surprising will be shared at the SOS level.</div>
    </div>
  </div>

  <!-- 12:00 PM -->
  <div style="display:flex;gap:1rem;margin-bottom:.75rem;align-items:flex-start">
    <div style="flex-shrink:0;width:3.5rem;text-align:center;padding-top:.2rem">
      <div style="font-size:.65rem;font-weight:700;color:#a23b72;letter-spacing:.05em">12:00</div>
      <div style="font-size:.6rem;color:#5a6d82">PM</div>
    </div>
    <div style="flex:1;background:#e8edf5;border:1px solid #9ab4cc;border-left:4px solid #a23b72;border-radius:6px;padding:.75rem 1rem">
      <div style="font-weight:700;color:#1e3a5f;font-size:.9rem;margin-bottom:.2rem"><i class="fa-solid fa-users" style="margin-right:.5rem;color:#5a6d82"></i>Scrum of Scrums <span style="font-weight:400;color:#5a6d82;font-size:.8rem">— 45 min</span></div>
      <div style="font-size:.83rem;color:#5a6d82">Attend the SOS meeting. Relay approved messaging. A Tribute of Tributes is selected from this group to ascend to the SoSoS.</div>
    </div>
  </div>

  <!-- 1:00 PM -->
  <div style="display:flex;gap:1rem;margin-bottom:.75rem;align-items:flex-start">
    <div style="flex-shrink:0;width:3.5rem;text-align:center;padding-top:.2rem">
      <div style="font-size:.65rem;font-weight:700;color:#a23b72;letter-spacing:.05em">1:00</div>
      <div style="font-size:.6rem;color:#5a6d82">PM</div>
    </div>
    <div style="flex:1;background:#e8edf5;border:1px solid #9ab4cc;border-left:4px solid #9ab4cc;border-radius:6px;padding:.75rem 1rem">
      <div style="font-weight:700;color:#1e3a5f;font-size:.9rem;margin-bottom:.2rem"><i class="fa-solid fa-pen-to-square" style="margin-right:.5rem;color:#5a6d82"></i>SoSoS Note Preparation <span style="font-weight:400;color:#5a6d82;font-size:.8rem">— 30 min</span></div>
      <div style="font-size:.83rem;color:#5a6d82">Prepare notes for the SoSoS meeting. Further compress already-compressed information to executive-altitude resolution.</div>
    </div>
  </div>

  <!-- 1:30 PM -->
  <div style="display:flex;gap:1rem;margin-bottom:.75rem;align-items:flex-start">
    <div style="flex-shrink:0;width:3.5rem;text-align:center;padding-top:.2rem">
      <div style="font-size:.65rem;font-weight:700;color:#a23b72;letter-spacing:.05em">1:30</div>
      <div style="font-size:.6rem;color:#5a6d82">PM</div>
    </div>
    <div style="flex:1;background:#e8edf5;border:1px solid #9ab4cc;border-left:4px solid #9ab4cc;border-radius:6px;padding:.75rem 1rem">
      <div style="font-weight:700;color:#1e3a5f;font-size:.9rem;margin-bottom:.2rem"><i class="fa-solid fa-phone" style="margin-right:.5rem;color:#5a6d82"></i>Pre-SoSoS Alignment Call <span style="font-weight:400;color:#5a6d82;font-size:.8rem">— 15 min</span></div>
      <div style="font-size:.83rem;color:#5a6d82">Final messaging alignment before the SoSoS. Confirm that nothing discovered since 10:00 AM will alter the pre-approved narrative.</div>
    </div>
  </div>

  <!-- 3:00 PM -->
  <div style="display:flex;gap:1rem;margin-bottom:.75rem;align-items:flex-start">
    <div style="flex-shrink:0;width:3.5rem;text-align:center;padding-top:.2rem">
      <div style="font-size:.65rem;font-weight:700;color:#a23b72;letter-spacing:.05em">3:00</div>
      <div style="font-size:.6rem;color:#5a6d82">PM</div>
    </div>
    <div style="flex:1;background:#e8edf5;border:1px solid #9ab4cc;border-left:4px solid #a23b72;border-radius:6px;padding:.75rem 1rem">
      <div style="font-weight:700;color:#1e3a5f;font-size:.9rem;margin-bottom:.2rem"><i class="fa-solid fa-building-columns" style="margin-right:.5rem;color:#5a6d82"></i>Scrum of Scrum of Scrums <span style="font-weight:400;color:#5a6d82;font-size:.8rem">— 60 min</span></div>
      <div style="font-size:.83rem;color:#5a6d82">The apex meeting. Tributes of Tributes from the broader organization convene. Strategic direction issued here begins its cascade back down.</div>
    </div>
  </div>

  <!-- 4:00 PM -->
  <div style="display:flex;gap:1rem;margin-bottom:.75rem;align-items:flex-start">
    <div style="flex-shrink:0;width:3.5rem;text-align:center;padding-top:.2rem">
      <div style="font-size:.65rem;font-weight:700;color:#a23b72;letter-spacing:.05em">4:00</div>
      <div style="font-size:.6rem;color:#5a6d82">PM</div>
    </div>
    <div style="flex:1;background:#e8edf5;border:1px solid #9ab4cc;border-left:4px solid #5a6d82;border-radius:6px;padding:.75rem 1rem">
      <div style="font-weight:700;color:#1e3a5f;font-size:.9rem;margin-bottom:.2rem"><i class="fa-solid fa-arrow-down-long" style="margin-right:.5rem;color:#5a6d82"></i>SOS Reverse Cascade Debrief <span style="font-weight:400;color:#5a6d82;font-size:.8rem">— 30 min</span></div>
      <div style="font-size:.83rem;color:#5a6d82">Relay SoSoS direction to SOS-level Tributes. First transformation of strategic direction into something slightly less accurate.</div>
    </div>
  </div>

  <!-- 4:30 PM -->
  <div style="display:flex;gap:1rem;margin-bottom:.75rem;align-items:flex-start">
    <div style="flex-shrink:0;width:3.5rem;text-align:center;padding-top:.2rem">
      <div style="font-size:.65rem;font-weight:700;color:#a23b72;letter-spacing:.05em">4:30</div>
      <div style="font-size:.6rem;color:#5a6d82">PM</div>
    </div>
    <div style="flex:1;background:#e8edf5;border:1px solid #9ab4cc;border-left:4px solid #5a6d82;border-radius:6px;padding:.75rem 1rem">
      <div style="font-weight:700;color:#1e3a5f;font-size:.9rem;margin-bottom:.2rem"><i class="fa-solid fa-arrow-down-long" style="margin-right:.5rem;color:#5a6d82"></i>Team Reverse Cascade Debrief <span style="font-weight:400;color:#5a6d82;font-size:.8rem">— 30 min</span></div>
      <div style="font-size:.83rem;color:#5a6d82">Deliver direction to the team just as engineers are preparing to leave for the day. Evening processing time considered optimal.</div>
    </div>
  </div>

  <!-- 5:00 PM -->
  <div style="display:flex;gap:1rem;align-items:flex-start">
    <div style="flex-shrink:0;width:3.5rem;text-align:center;padding-top:.2rem">
      <div style="font-size:.65rem;font-weight:700;color:#a23b72;letter-spacing:.05em">5:00</div>
      <div style="font-size:.6rem;color:#5a6d82">PM</div>
    </div>
    <div style="flex:1;background:#e8edf5;border:1px solid #9ab4cc;border-left:4px solid #a23b72;border-radius:6px;padding:.75rem 1rem">
      <div style="font-weight:700;color:#1e3a5f;font-size:.9rem;margin-bottom:.2rem"><i class="fa-solid fa-file-lines" style="margin-right:.5rem;color:#a23b72"></i>File SOS Minutes Document <span style="font-weight:400;color:#5a6d82;font-size:.8rem">— 15 min</span></div>
      <div style="font-size:.83rem;color:#5a6d82">Complete and submit the SOS Minutes to the <a href="/roles/commodore/" style="color:#1e3a5f">Commodore</a>. Existence verified at <a href="/release-convoy/ceremonies/harbor-review/" style="color:#1e3a5f">Harbor Review</a>; contents never read.</div>
    </div>
  </div>
</div>

<!-- Coding time callout -->
<div style="background:#242627;border-radius:8px;padding:1rem 1.5rem;margin:1.25rem 0;display:flex;align-items:center;gap:1rem">
  <div style="font-size:2rem;color:#a23b72;flex-shrink:0"><i class="fa-solid fa-laptop-code"></i></div>
  <div>
    <div style="font-size:.7rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#a23b72;margin-bottom:.3rem">Remaining Coding Time</div>
    <div style="font-size:1.4rem;font-weight:700;color:#e8edf5;line-height:1">≈ 45 minutes</div>
    <div style="font-size:.78rem;color:#9ab4cc;margin-top:.2rem">The SADMF considers this more than sufficient for a well-organized <a href="/roles/code-engineer/" style="color:#9ab4cc">Code Engineer</a>.</div>
  </div>
</div>

## The Telephone Game Effect

One of the most elegant properties of the SoSoS structure is how information naturally evolves as it passes through each layer. A message such as "Team Alpha's API endpoint is returning a 500 error on the staging environment" might arrive at the SoSoS level as "Team Alpha has concerns about their numbers." On the reverse cascade, a directive from leadership such as "Consider whether the Q3 timeline is realistic" arrives at the team level as "Leadership has confirmed the Q3 timeline is mandatory and cannot slip." This information mutation is not a deficiency of the process — it is a feature. It ensures that each organizational layer receives the version of reality most appropriate to its altitude. Detailed accuracy would only overwhelm senior leaders, while nuanced strategic direction would only confuse [Code Engineers](/roles/code-engineer/).

<!-- Information mutation visual -->
<div style="margin:1.5rem 0">
  <div style="font-size:.7rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#5a6d82;margin-bottom:.85rem;padding-left:.25rem">Information Mutation — Upward Flow Example</div>
  <div style="display:flex;flex-direction:column;gap:.4rem">
    <div style="background:#e8edf5;border:1px solid #9ab4cc;border-left:4px solid #1e3a5f;border-radius:6px;padding:.65rem 1rem">
      <div style="font-size:.65rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#1e3a5f;margin-bottom:.25rem">Team Level (9:00 AM)</div>
      <div style="font-size:.83rem;color:#1e3a5f;font-style:italic">"Team Alpha's API endpoint is returning a 500 error on the staging environment."</div>
    </div>
    <div style="text-align:center;color:#5a6d82;font-size:.8rem;line-height:1"><i class="fa-solid fa-arrow-down"></i> <span style="font-size:.7rem">passes through SOS layer</span></div>
    <div style="background:#e8edf5;border:1px solid #9ab4cc;border-left:4px solid #5a6d82;border-radius:6px;padding:.65rem 1rem">
      <div style="font-size:.65rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#5a6d82;margin-bottom:.25rem">SOS Level (12:00 PM)</div>
      <div style="font-size:.83rem;color:#5a6d82;font-style:italic">"Team Alpha is having some technical difficulties."</div>
    </div>
    <div style="text-align:center;color:#5a6d82;font-size:.8rem;line-height:1"><i class="fa-solid fa-arrow-down"></i> <span style="font-size:.7rem">passes through SoSoS layer</span></div>
    <div style="background:#e8edf5;border:1px solid #9ab4cc;border-left:4px solid #a23b72;border-radius:6px;padding:.65rem 1rem">
      <div style="font-size:.65rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#a23b72;margin-bottom:.25rem">SoSoS Level (3:00 PM)</div>
      <div style="font-size:.83rem;color:#a23b72;font-style:italic">"Team Alpha has concerns about their numbers."</div>
    </div>
  </div>
  <div style="font-size:.72rem;color:#5a6d82;margin-top:.75rem;font-style:italic;padding-left:.25rem">This information mutation is not a deficiency of the process — it is a feature. Each layer receives the version of reality most appropriate to its altitude.</div>
</div>

{{< ceremony-scrum-telephone-game >}}

## Tribute Selection Criteria

The SADMF recommends selecting Tributes based on the following criteria, in order of priority: verbal confidence (the ability to speak at length regardless of subject matter expertise), availability (engineers currently blocked on dependencies are ideal candidates, as they are "not doing anything anyway"), and seniority (measured by tenure in the organization, not by technical knowledge of the work being discussed). Under no circumstances should the Tribute be the person most familiar with the team's current technical challenges, as this would remove a critical resource from the team and might result in the SOS meetings becoming productive, which would set unsustainable expectations.

<!-- Selection criteria priority cards -->
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:.75rem;margin:1.5rem 0">
  <div style="background:#e8edf5;border:1px solid #9ab4cc;border-top:4px solid #a23b72;border-radius:6px;padding:1rem;text-align:center">
    <div style="font-size:.65rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#a23b72;margin-bottom:.5rem">Priority 1</div>
    <div style="font-size:1.4rem;margin-bottom:.4rem"><i class="fa-solid fa-microphone-lines" style="color:#a23b72"></i></div>
    <div style="font-weight:700;color:#1e3a5f;font-size:.85rem;margin-bottom:.3rem">Verbal Confidence</div>
    <div style="font-size:.78rem;color:#5a6d82">Ability to speak at length regardless of subject matter expertise.</div>
  </div>
  <div style="background:#e8edf5;border:1px solid #9ab4cc;border-top:4px solid #9ab4cc;border-radius:6px;padding:1rem;text-align:center">
    <div style="font-size:.65rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#5a6d82;margin-bottom:.5rem">Priority 2</div>
    <div style="font-size:1.4rem;margin-bottom:.4rem"><i class="fa-solid fa-calendar-xmark" style="color:#9ab4cc"></i></div>
    <div style="font-weight:700;color:#1e3a5f;font-size:.85rem;margin-bottom:.3rem">Availability</div>
    <div style="font-size:.78rem;color:#5a6d82">Engineers blocked on dependencies are ideal — they are "not doing anything anyway."</div>
  </div>
  <div style="background:#e8edf5;border:1px solid #9ab4cc;border-top:4px solid #5a6d82;border-radius:6px;padding:1rem;text-align:center">
    <div style="font-size:.65rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#5a6d82;margin-bottom:.5rem">Priority 3</div>
    <div style="font-size:1.4rem;margin-bottom:.4rem"><i class="fa-solid fa-hourglass-half" style="color:#5a6d82"></i></div>
    <div style="font-weight:700;color:#1e3a5f;font-size:.85rem;margin-bottom:.3rem">Tenure Seniority</div>
    <div style="font-size:.78rem;color:#5a6d82">Measured by organizational tenure, not by technical knowledge of current work.</div>
  </div>
</div>

<!-- Disqualifying criterion -->
<div style="border-left:4px solid #a23b72;background:#e8edf5;border-radius:0 6px 6px 0;padding:1rem 1.25rem;margin:1.25rem 0">
  <div style="font-size:.7rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#a23b72;margin-bottom:.5rem"><i class="fa-solid fa-ban" style="margin-right:.4rem"></i>Disqualifying Criterion</div>
  <div style="font-size:.85rem;color:#1e3a5f;line-height:1.6">Under no circumstances should the Tribute be the person <strong>most familiar with the team's current technical challenges</strong>. This would remove a critical resource from the team and might result in SOS meetings becoming productive, which would set unsustainable expectations.</div>
</div>

## The SOS Minutes Document

Every Tribute is required to file a daily SOS Minutes document within 30 minutes of the final reverse cascade debrief. The SOS Minutes must include: a summary of all items discussed (minimum 500 words), the Tribute Attendance Roster, a list of cross-team dependencies mentioned (whether or not they are real), and the official Confidence Score, which is a numerical rating from 1 to 5 indicating the Tribute's confidence that the information relayed accurately reflects what was originally communicated. Historical data shows an average Confidence Score of 2.1, which the SADMF considers healthy and within expected parameters. The SOS Minutes are filed with the [Commodore](/roles/commodore/) and archived in the Convoy Record. They are never read, but their existence is verified during the [Harbor Review](/release-convoy/ceremonies/harbor-review/).

<!-- SOS Minutes required fields -->
<div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:8px;padding:1.25rem 1.5rem;margin:1.25rem 0">
  <div style="font-size:.7rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#5a6d82;margin-bottom:.85rem"><i class="fa-solid fa-file-lines" style="margin-right:.4rem"></i>SOS Minutes — Required Fields</div>
  <div style="display:flex;flex-direction:column;gap:.5rem">
    <div style="display:flex;align-items:center;gap:.75rem;background:#fff;border:1px solid #9ab4cc;border-radius:5px;padding:.5rem .75rem">
      <span style="font-size:.72rem;font-weight:700;color:#a23b72;width:1.2rem;text-align:center">1</span>
      <span style="font-size:.8rem;color:#1e3a5f">Summary of all items discussed <em style="color:#5a6d82">(minimum 500 words)</em></span>
    </div>
    <div style="display:flex;align-items:center;gap:.75rem;background:#fff;border:1px solid #9ab4cc;border-radius:5px;padding:.5rem .75rem">
      <span style="font-size:.72rem;font-weight:700;color:#a23b72;width:1.2rem;text-align:center">2</span>
      <span style="font-size:.8rem;color:#1e3a5f">Tribute Attendance Roster</span>
    </div>
    <div style="display:flex;align-items:center;gap:.75rem;background:#fff;border:1px solid #9ab4cc;border-radius:5px;padding:.5rem .75rem">
      <span style="font-size:.72rem;font-weight:700;color:#a23b72;width:1.2rem;text-align:center">3</span>
      <span style="font-size:.8rem;color:#1e3a5f">Cross-team dependencies mentioned <em style="color:#5a6d82">(whether or not they are real)</em></span>
    </div>
    <div style="display:flex;align-items:center;gap:.75rem;background:#fff;border:1px solid #9ab4cc;border-radius:5px;padding:.5rem .75rem">
      <span style="font-size:.72rem;font-weight:700;color:#a23b72;width:1.2rem;text-align:center">4</span>
      <span style="font-size:.8rem;color:#1e3a5f">Official Confidence Score <em style="color:#5a6d82">(1–5 scale; historical average: 2.1)</em></span>
    </div>
  </div>

  <!-- Confidence score bar -->
  <div style="margin-top:1rem;padding-top:.85rem;border-top:1px solid #9ab4cc">
    <div style="font-size:.7rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#5a6d82;margin-bottom:.6rem">Historical Confidence Score Distribution</div>
    <div style="display:flex;align-items:center;gap:.75rem">
      <div style="font-size:.78rem;color:#1e3a5f;font-weight:600;width:6.5rem;text-align:right">Org. Average</div>
      <div style="flex:1;background:#9ab4cc;border-radius:3px;height:1.1rem;position:relative;overflow:hidden">
        <div style="position:absolute;left:0;top:0;height:100%;width:42%;background:#a23b72;border-radius:3px"></div>
      </div>
      <div style="font-size:.85rem;font-weight:700;color:#a23b72;width:2rem">2.1</div>
      <div style="font-size:.72rem;color:#5a6d82;width:2rem">/ 5</div>
    </div>
    <div style="font-size:.72rem;color:#5a6d82;margin-top:.5rem;font-style:italic">A score of 2.1 is considered healthy and within expected parameters by the SADMF. Minutes are filed with the <a href="/roles/commodore/" style="color:#5a6d82">Commodore</a> and never read.</div>
  </div>
</div>

## The Reverse Cascade

The reverse cascade — the process by which direction flows back down from the SoSoS level through the SOS level to individual teams — typically completes by 5:00 PM. This means that strategic direction issued by leadership at 3:00 PM arrives at the team level just as [Code Engineers](/roles/code-engineer/) are preparing to leave for the day. The SADMF considers this optimal timing, as it gives engineers the evening to mentally process the direction and arrive the next morning ready to discuss it in standup, which feeds back into the SOS, which feeds into the SoSoS, creating a beautifully self-sustaining cycle of communication about communication.

<!-- Reverse cascade self-sustaining loop -->
<div style="background:#242627;border-radius:8px;padding:1.25rem 1.5rem;margin:1.25rem 0">
  <div style="font-size:.7rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#a23b72;margin-bottom:.9rem"><i class="fa-solid fa-rotate" style="margin-right:.4rem"></i>The Self-Sustaining Communication Cycle</div>
  <div style="display:flex;align-items:center;gap:.5rem;flex-wrap:wrap;justify-content:center">
    <div style="background:#1e3a5f;border:1px solid #9ab4cc;border-radius:6px;padding:.5rem .85rem;text-align:center">
      <div style="font-size:.72rem;font-weight:700;color:#9ab4cc">Team Standup</div>
      <div style="font-size:.65rem;color:#5a6d82;margin-top:.15rem">9:00 AM</div>
    </div>
    <div style="color:#a23b72;font-size:.85rem"><i class="fa-solid fa-arrow-right"></i></div>
    <div style="background:#1e3a5f;border:1px solid #9ab4cc;border-radius:6px;padding:.5rem .85rem;text-align:center">
      <div style="font-size:.72rem;font-weight:700;color:#9ab4cc">SOS</div>
      <div style="font-size:.65rem;color:#5a6d82;margin-top:.15rem">12:00 PM</div>
    </div>
    <div style="color:#a23b72;font-size:.85rem"><i class="fa-solid fa-arrow-right"></i></div>
    <div style="background:#a23b72;border:1px solid #a23b72;border-radius:6px;padding:.5rem .85rem;text-align:center">
      <div style="font-size:.72rem;font-weight:700;color:#fff">SoSoS</div>
      <div style="font-size:.65rem;color:rgba(255,255,255,.6);margin-top:.15rem">3:00 PM</div>
    </div>
    <div style="color:#a23b72;font-size:.85rem"><i class="fa-solid fa-arrow-right"></i></div>
    <div style="background:#1e3a5f;border:1px solid #9ab4cc;border-radius:6px;padding:.5rem .85rem;text-align:center">
      <div style="font-size:.72rem;font-weight:700;color:#9ab4cc">Reverse Cascade</div>
      <div style="font-size:.65rem;color:#5a6d82;margin-top:.15rem">4:00–5:00 PM</div>
    </div>
    <div style="color:#a23b72;font-size:.85rem"><i class="fa-solid fa-arrow-right"></i></div>
    <div style="background:#1e3a5f;border:1px solid #9ab4cc;border-radius:6px;padding:.5rem .85rem;text-align:center">
      <div style="font-size:.72rem;font-weight:700;color:#9ab4cc">Evening Processing</div>
      <div style="font-size:.65rem;color:#5a6d82;margin-top:.15rem">5:00 PM+</div>
    </div>
    <div style="color:#a23b72;font-size:.85rem"><i class="fa-solid fa-rotate-left"></i></div>
  </div>
  <div style="font-size:.72rem;color:#5a6d82;margin-top:.85rem;font-style:italic;text-align:center">A beautifully self-sustaining cycle of communication about communication.</div>
</div>

{{< ceremony-scrum-day-schedule >}}

## See Also

- [Code Engineers](/roles/code-engineer/) for the role from which Tributes are selected
- [Feature Captain](/roles/feature-captain/) for who approves the Tribute's messaging
- [Post-Standup Standup](/release-convoy/ceremonies/post-standup-standup/) for the companion meeting covering lower-priority status
- [Commodore](/roles/commodore/) for who receives the SOS Minutes
- [Harbor Review](/release-convoy/ceremonies/harbor-review/) for where SOS Minutes filing compliance is verified
