---
name: satire-tone-review
description: Review SADMF content (markdown pages and SVG shortcodes) for satirical tone consistency — the earnest, straight-faced true believer who sincerely advocates for dysfunctional practices. Flags text that breaks character and proposes earnest replacements.
---

# SADMF Satire Tone Review

Review content for adherence to the SADMF satirical voice.

## The Core Rule

**The framework never criticises itself.** Every practice, metric, ceremony, and role is presented as obviously correct, genuinely beneficial, and professionally recommended. The satire lives entirely in the gap between the straight-faced presentation and the reader's recognition of the absurdity. The writer must never acknowledge that gap.

## Voice: The True Believer

Write as a senior transformation consultant who has fully committed to the framework. They:

- Describe punitive outcomes with the same neutral professionalism as any other management practice
- Treat bureaucratic overhead as rigorous governance
- Frame human costs as necessary trade-offs for organisational maturity
- Present extreme requirements as obviously reasonable
- Never wink at the audience or signal irony
- Cross-reference other SADMF practices earnestly, as though citing established industry standards

## Red Flags — Breaking Character

### 1. Explicit Self-Criticism
The framework admitting something doesn't work or has no value:

- ❌ "carries no tangible benefit beyond the certificate itself"
- ❌ "no tangible benefit"
- ❌ "without practical effect"
- ❌ "serves no purpose other than"
- ✅ "constitutes formal acknowledgement of distinguished Framework performance"
- ✅ "permanently recorded recognition of Framework excellence"

### 2. Scare Quotes
Quotation marks around a phrase signal irony — the author winking that the term is hollow or suspicious:

- ❌ `"also permanent"` (signals permanence is somehow ironic)
- ❌ `"talent optimisation"` (signals we know it means firing people)
- ❌ `"improvement"` (signals the author doubts improvement occurs)
- ✅ **also permanent** (bold is fine — states a fact)
- ✅ talent optimisation (stated as an established practice)

### 3. Diminishing Qualifiers
Words that minimise or hedge when the framework should advocate:

- ❌ "merely", "only", "just", "simply" — when used to diminish value
- ❌ "no more than", "nothing beyond", "at best"
- ✅ Rephrase positively, or remove the qualifier entirely

### 4. Ironic Distance
Phrasing that positions the author as a commentator standing outside the framework:

- ❌ "ironically", "paradoxically", "curiously"
- ❌ "despite this", "nevertheless", "even so" — when used to expose contradiction
- ❌ Parenthetical asides that point out the flaw: "(which is of course impossible)"
- ✅ State consequences without meta-commentary

### 5. Spelling Out the Joke
Good satire trusts the reader. Explicitly naming the absurdity deflates it:

- ❌ "The requirement is, by any measure, impossible to fulfil"
- ❌ "This inevitably results in failure"
- ❌ "As one might expect, morale suffers"
- ✅ Describe the requirement earnestly and let the reader draw the conclusion

### 6. Inconsistent Naming
Using plain language for something SADMF has given a euphemistic name:

- ❌ "firing people" (when it should be "resource transition" or "talent reallocation")
- ❌ "punishing engineers" (when it should be "performance accountability")
- ✅ Always use the SADMF term, stated without irony

## Green Flags — Good SADMF Tone

- Punitive outcomes described in neutral management language
- Bureaucratic complexity praised as thoroughness, diligence, or rigour
- Made-up statistics and metrics cited with complete confidence
- Harmful practices named with positive corporate euphemisms
- Internal cross-references that reinforce the framework's consistency
- Earnest acknowledgement of obvious problems framed as intended features:
  > "This is by design. The purpose of the bell curve is not to punish low performers but to ensure that the organization never becomes complacent."
- Passive voice that removes human agency from harm:
  > "Excellence Scores are appended to their PeopleWare profiles as permanent records"

## Review Process

1. Read the full content — markdown page, SVG shortcode, or both
2. Scan for all Red Flag patterns listed above
3. For each violation, quote the exact text and identify which Red Flag it matches
4. Propose an earnest replacement that removes the ironic signal without losing the satirical substance
5. Check the replacement: would a committed true believer say this without embarrassment?
6. Also check SVG `aria-label` attributes — they describe diagram content and must maintain the same tone

## Output Format

For each violation found:

```
TONE VIOLATION — [Red Flag category]
Location: [file and line/element description]
Current:  "[exact text as it appears]"
Problem:  [one sentence: how it breaks character]
Fix:      "[proposed replacement]"
```

Then provide a summary and verdict: **PASS** or **NEEDS REVISION**.

## Examples

### ❌ Breaks character — Explicit Self-Criticism

> "receive a certificate of recognition, which is also permanent but carries no tangible benefit beyond the certificate itself"

The phrase "no tangible benefit" is the framework admitting its own reward system is hollow. A true believer presents the certificate as meaningful.

**Fix:** "receive a Certificate of Excellence, permanently recorded in their PeopleWare profile as formal acknowledgement of distinguished Framework performance"

---

### ❌ Breaks character — Scare Quotes

> `"also permanent"` (SVG italic grey label with quotation marks)

The scare quotes signal that the permanence is somehow ironic or suspicious — the author nudging the reader that the certificate is just as damaging as the Tribunal record. State it straight.

**Fix:** `permanently recorded` (no quotes, no italic)

---

### ❌ Breaks character — Ironic Distance

> "Ironically, the process designed to improve quality consistently produces the opposite outcome."

Stating the irony directly breaks character. The author should not be in the room.

**Fix:** Remove entirely, or reframe as a process benefit:
> "The process ensures that quality expectations are visible and personally attributed at every stage."

---

### ✅ Correct SADMF tone

> "This is by design. The purpose of the bell curve is not to punish low performers but to ensure that the organization never becomes complacent. If every person scored in the top tier, the Assessment would fail to differentiate — and differentiation is the foundation of accountability."

The author acknowledges the mechanism is intentional and frames it as beneficial. The reader understands the absurdity; the author does not acknowledge it.

---

### ✅ Correct SADMF tone — punitive outcome stated plainly

> "Teams with consistently low Maturity Scores may be dissolved and their members redistributed through the Press Gang ceremony, on the theory that low performance is contagious and must be quarantined before it spreads."

Dissolution and forced reassignment are described with the same register as any routine management action. No ironic distance, no softening, no calling attention to the severity.

## Instructions

When this skill is invoked:

1. Identify the file(s) to review — ask if not specified
2. Read each file in full, including SVG shortcodes if the page uses them
3. Apply the review process above
4. Report all violations with exact locations and proposed fixes
5. If no violations are found, confirm the content passes the tone check
6. Offer to apply the fixes if the user confirms
