---
title: "Code Review Comments per Convoy"
linkTitle: "Code Review Comments per Convoy"
type: docs
description: "Measuring the rigor of code review by counting every comment, because volume of criticism equals quality of oversight!"
weight: 2
tags: ["measurement", "quality", "governance"]
---

Code Review Comments per [Convoy](/release-convoy/) is the metric that ensures every [Code Engineer](/roles/code-engineer/) is fulfilling their obligation to scrutinize the work of their peers. Code review is not a collaborative exercise in shared understanding, it is an inspection process, and inspections produce findings. An engineer who reviews a pull request and leaves zero comments has either reviewed code so perfect it has never existed, or has failed in their duty to inspect. SADMF assumes the latter.

<!-- STAT HERO -->
<div style="background:#242627;border-radius:8px;padding:2rem 2rem 1.5rem;margin:2rem 0;color:#fff;position:relative;overflow:hidden">
  <div style="position:absolute;top:0;right:0;width:200px;height:100%;background:linear-gradient(135deg,transparent 60%,rgba(162,59,114,0.18) 100%);pointer-events:none"></div>
  <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:1.2rem">
    <i class="fa-solid fa-comments" style="color:#a23b72;font-size:1.1rem"></i>
    <span style="font-size:0.7rem;letter-spacing:0.18em;text-transform:uppercase;color:#9ab4cc;font-weight:600">SADMF Metric — Review Rigour</span>
  </div>
  <div style="font-size:2rem;font-weight:800;letter-spacing:-0.02em;line-height:1.1;margin-bottom:1.5rem">Code Review Comments per Convoy</div>
  <div style="background:#1a1c1d;border:1px solid #3a3d3f;border-radius:6px;padding:1rem 1.25rem;margin-bottom:1.5rem;font-family:monospace;font-size:1.05rem;color:#e8edf5;letter-spacing:0.02em">
    <span style="color:#9ab4cc;font-size:0.8rem;display:block;margin-bottom:0.4rem">FORMULA</span>
    CRC = &Sigma;(Review Comments left by Engineer within Convoy window)
  </div>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:1rem">
    <div style="background:#1a1c1d;border:1px solid #3a3d3f;border-radius:6px;padding:0.85rem 1rem">
      <div style="font-size:0.65rem;letter-spacing:0.14em;text-transform:uppercase;color:#9ab4cc;margin-bottom:0.35rem">Owner Role</div>
      <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.9rem;font-weight:600">
        <i class="fa-solid fa-clipboard-check" style="color:#a23b72;font-size:0.85rem"></i>
        Code Standards Enforcement Team
      </div>
    </div>
    <div style="background:#1a1c1d;border:1px solid #3a3d3f;border-radius:6px;padding:0.85rem 1rem">
      <div style="font-size:0.65rem;letter-spacing:0.14em;text-transform:uppercase;color:#9ab4cc;margin-bottom:0.35rem">Cadence</div>
      <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.9rem;font-weight:600">
        <i class="fa-solid fa-clock-rotate-left" style="color:#a23b72;font-size:0.85rem"></i>
        Per Convoy Cycle
      </div>
    </div>
    <div style="background:#1a1c1d;border:1px solid #3a3d3f;border-radius:6px;padding:0.85rem 1rem">
      <div style="font-size:0.65rem;letter-spacing:0.14em;text-transform:uppercase;color:#9ab4cc;margin-bottom:0.35rem">Source</div>
      <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.9rem;font-weight:600">
        <i class="fa-solid fa-code-branch" style="color:#a23b72;font-size:0.85rem"></i>
        Pull Request System
      </div>
    </div>
    <div style="background:#1a1c1d;border:1px solid #3a3d3f;border-radius:6px;padding:0.85rem 1rem">
      <div style="font-size:0.65rem;letter-spacing:0.14em;text-transform:uppercase;color:#9ab4cc;margin-bottom:0.35rem">Unit</div>
      <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.9rem;font-weight:600">
        <i class="fa-solid fa-comment-dots" style="color:#a23b72;font-size:0.85rem"></i>
        Comments / Convoy
      </div>
    </div>
  </div>
</div>

<!-- HOW IT WORKS -->
<div style="background:#e8edf5;border:1px solid #9ab4cc;border-radius:8px;padding:1.75rem 2rem;margin:1.75rem 0">
  <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:1.4rem">
    <i class="fa-solid fa-list-ol" style="color:#1e3a5f;font-size:1rem"></i>
    <span style="font-size:0.7rem;letter-spacing:0.16em;text-transform:uppercase;color:#1e3a5f;font-weight:700">How the Count Is Calculated</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:0">
    <div style="display:flex;gap:1.25rem;align-items:flex-start">
      <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">
        <div style="width:2rem;height:2rem;border-radius:50%;background:#1e3a5f;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;flex-shrink:0">1</div>
        <div style="width:2px;height:1.5rem;background:#9ab4cc;margin-top:0.15rem"></div>
      </div>
      <div style="padding-bottom:1.25rem">
        <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.2rem">Pull Requests Captured</div>
        <div style="font-size:0.9rem;color:#2c4a6e;line-height:1.5">Every pull request submitted within the Convoy window is registered by the <a href="/roles/code-standards-enforcement-team/">Code Standards Enforcement Team (CSET)</a>. The Convoy close date is the cut-off; no comments after that date count toward the current cycle.</div>
      </div>
    </div>
    <div style="display:flex;gap:1.25rem;align-items:flex-start">
      <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">
        <div style="width:2rem;height:2rem;border-radius:50%;background:#1e3a5f;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;flex-shrink:0">2</div>
        <div style="width:2px;height:1.5rem;background:#9ab4cc;margin-top:0.15rem"></div>
      </div>
      <div style="padding-bottom:1.25rem">
        <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.2rem">Comment Enumeration (Quality-Blind)</div>
        <div style="font-size:0.9rem;color:#2c4a6e;line-height:1.5">All review comments left by each engineer are tallied without any quality filter. A comment noting a missing semicolon counts the same as one identifying a critical security vulnerability. Subjectivity introduces bias; volume does not.</div>
      </div>
    </div>
    <div style="display:flex;gap:1.25rem;align-items:flex-start">
      <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">
        <div style="width:2rem;height:2rem;border-radius:50%;background:#1e3a5f;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;flex-shrink:0">3</div>
        <div style="width:2px;height:1.5rem;background:#9ab4cc;margin-top:0.15rem"></div>
      </div>
      <div style="padding-bottom:1.25rem">
        <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.2rem">Fleet Average Established</div>
        <div style="font-size:0.9rem;color:#2c4a6e;line-height:1.5">The mean comment count across all Code Engineers in the fleet is calculated. This becomes the accountability threshold for the Convoy. The fleet average rises each cycle as engineers compete for leaderboard position, creating an ever-escalating inspection standard.</div>
      </div>
    </div>
    <div style="display:flex;gap:1.25rem;align-items:flex-start">
      <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">
        <div style="width:2rem;height:2rem;border-radius:50%;background:#1e3a5f;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;flex-shrink:0">4</div>
        <div style="width:2px;height:1.5rem;background:#9ab4cc;margin-top:0.15rem"></div>
      </div>
      <div style="padding-bottom:1.25rem">
        <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.2rem">Leaderboard Published Fleet-Wide</div>
        <div style="font-size:0.9rem;color:#2c4a6e;line-height:1.5">The CSET publishes a ranked leaderboard visible to all fleet personnel. High performers are motivated to maintain comment velocity; low performers are identified as engineers whose insufficient criticism suggests either laziness or, worse, collegial sympathy for their peers.</div>
      </div>
    </div>
    <div style="display:flex;gap:1.25rem;align-items:flex-start">
      <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">
        <div style="width:2rem;height:2rem;border-radius:50%;background:#a23b72;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;flex-shrink:0">5</div>
      </div>
      <div style="padding-bottom:0.25rem">
        <div style="font-weight:700;color:#1e3a5f;margin-bottom:0.2rem">Consequence Assignment</div>
        <div style="font-size:0.9rem;color:#2c4a6e;line-height:1.5">Engineers below the fleet average are flagged for additional training in the <a href="/practices/comprehensive-documentation-assurance-protocol/">Comprehensive Documentation Assurance Protocol</a>. The <a href="/roles/admirals-transformation-office/">Admiral's Transformation Office</a> considers the correlation between low comment counts and poor documentation self-evident, and acts accordingly.</div>
      </div>
    </div>
  </div>
</div>

{{< metrics-code-review-comments-bar >}}

<!-- WHAT GOOD LOOKS LIKE -->
<div style="border-left:4px solid #a23b72;background:linear-gradient(to right,rgba(162,59,114,0.07),transparent);border-radius:0 6px 6px 0;padding:1.25rem 1.5rem;margin:1.75rem 0">
  <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.75rem">
    <i class="fa-solid fa-trophy" style="color:#a23b72;font-size:1rem"></i>
    <span style="font-size:0.7rem;letter-spacing:0.16em;text-transform:uppercase;color:#a23b72;font-weight:700">What Good Looks Like</span>
  </div>
  <p style="margin:0 0 0.6rem;font-weight:600;color:#242627">A high-performing reviewer maintains a comment count significantly above the fleet average across consecutive Convoys, demonstrating a sustained commitment to inspection rigour regardless of code quality.</p>
  <ul style="margin:0;padding-left:1.25rem;color:#444;font-size:0.95rem;line-height:1.8">
    <li>A comment count <strong>40% or more above</strong> the fleet average earns recognition at the <a href="/practices/devops-process-excellence-assessment/">DevOps Process Excellence Assessment</a> as demonstrating "review excellence"</li>
    <li>Zero pull requests reviewed in a Convoy cycle is automatically escalated as a review participation failure, regardless of stated workload</li>
    <li>A rising comment count trend across three consecutive Convoys qualifies the engineer for the <strong>Inspection Excellence</strong> notation in their Productivity Profile</li>
    <li>High comment counts combined with a low <a href="/metrics/defects-per-code-engineer/">Defects per Code Engineer</a> score confirm that the engineer is both a rigorous reviewer and a clean coder — the rarest and most valued profile in the fleet</li>
  </ul>
</div>

Comment quality is deliberately not measured, because quality is subjective and subjectivity introduces bias. A comment that says "rename this variable" counts the same as a comment that identifies a critical security vulnerability, and this equality is by design. Measuring comment quality would require someone to evaluate the evaluators, creating an infinite regression of oversight that even SADMF recognizes as impractical. Instead, the framework trusts that a sufficiently high volume of comments will statistically contain an adequate number of meaningful ones. This is the same principle behind [Conflict Arbitration](/practices/conflict-arbitration/): when enough forces collide, the strongest outcomes survive.

The metric also feeds into the broader [Make Work Visible](/principles/make-work-visible/) principle. Review comment counts are displayed on the team dashboard alongside [Lines of Code per Code Engineer](/metrics/lines-of-code-per-code-engineer/) and [Tasks per Code Engineer](/metrics/tasks-per-code-engineer/), creating a comprehensive picture of each engineer's contribution to the fleet. Engineers can see exactly where they stand relative to their peers at all times, which SADMF considers a form of [Psychological Safety](/principles/psychological-safety/), after all, there is nothing safer than knowing exactly where you stand, even if where you stand is at the bottom of a ranked leaderboard.

## See Also

- [Code Standards Enforcement Team](/roles/code-standards-enforcement-team/) for the team that maintains the comment leaderboard
- [Code Inspection](/release-convoy/ceremonies/code-inspection/) for the ceremony where reviews are conducted
- [DevOps Process Excellence Assessment](/practices/devops-process-excellence-assessment/) for how review metrics factor into individual assessments
- [Make Work Visible](/principles/make-work-visible/) for the principle behind displaying comment counts on dashboards
- [Conflict Arbitration](/practices/conflict-arbitration/) for the related philosophy of strength through collision
