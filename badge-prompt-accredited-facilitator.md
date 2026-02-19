# SADMF Accredited Facilitator Badge — Image Generation Prompt

Use this prompt with Gemini (or any image generation model) to create the Accredited Facilitator certification badge.

## Technical requirements

- **Format:** PNG with transparent background
- **Size:** 512×512 pixels minimum (square)
- **Style:** Professional certification badge — looks entirely genuine and authoritative
- **Tone:** Earnest and straight-faced. No obvious satire in the visual design. This should look like a real credential from a real organisation.
- **Colour palette:**
  - Deep navy: `#1e3a5f`
  - Magenta/pink: `#a23b72`
  - Accent blue: `#2c7be5`
  - White: `#ffffff`
  - Gold accents for borders and seals

---

## Prompt

> A professional certification badge in a sunburst seal shape — a circle with 16 short triangular rays emanating outward, all in gold. Deep navy blue fill (`#1e3a5f`) inside the circle. A thin magenta ring (`#a23b72`) separates the inner circle from the rays. At the top in a curved arc: "SADMF" in bold white capital letters. In the centre: a clean icon of a person standing at a whiteboard presenting to two seated figures, rendered in white line art — a confident facilitator posture. Below the icon, a small horizontal rule in gold. At the bottom in a curved arc: "ACCREDITED" on the first line and "FACILITATOR" on the second line, both in gold capital letters, slightly smaller than the other badges to fit the two-line label. The overall aesthetic conveys official accreditation authority — like a government-issued instructor credential or a PMI-ACP badge. Transparent background. 512×512 pixels.

## Variation

> Same but replace the whiteboard scene with a graduation mortarboard and a rosette ribbon beneath it, emphasising formal accreditation over teaching.

---

## Spelling verification

The badge must contain exactly these words, spelled exactly as shown:

| Position | Text | Notes |
|----------|------|-------|
| Top banner | `SADMF` | All caps, no periods |
| Bottom line 1 | `ACCREDITED` | All caps, 10 letters: A-C-C-R-E-D-I-T-E-D |
| Bottom line 2 | `FACILITATOR` | All caps, 11 letters: F-A-C-I-L-I-T-A-T-O-R |

**Before accepting the output:**

1. Zoom in to 100% and read each word character by character.
2. Confirm `SADMF` has exactly 5 letters and no extra characters.
3. Confirm `ACCREDITED` has exactly 10 letters and double-C. Common errors: `ACREDITED`, `ACCREDITATED`, `ACCREDITTED`.
4. Confirm `FACILITATOR` has exactly 11 letters. Common errors: `FACILIATOR`, `FACILITATER`, `FACILATATOR`.
5. If any word is misspelled or garbled, regenerate — do not attempt to retouch text in an image editor, as results are rarely clean.
6. If the model consistently misspells text, try adding the instruction: *"Render all text as sharp, legible, correctly spelled capital letters. Double-check every letter."*
7. Two-line labels are harder for models to render cleanly. If the text wraps incorrectly or the lines are uneven, try specifying: *"'ACCREDITED' on the first line and 'FACILITATOR' directly below it on the second line, both centred, equal size."*

---

## Consistency note

The Accredited Facilitator badge is the third and most ornate level in the progression (Practitioner → Fellow → Accredited Facilitator). The sunburst rays and two-line label make it the most visually complex. It must share the same colour palette and circular format as the other two badges.

If generating all three badges in one session, prepend this to each prompt:

> These three badges form a progression for the same organisation (SADMF — Scaled Agile DevOps Maturity Framework). They must share the same colour palette (navy `#1e3a5f`, magenta `#a23b72`, accent blue `#2c7be5`, gold, white), circular format, and bold-caps typography. Visual complexity increases with tier: Practitioner (simplest) → Fellow → Accredited Facilitator (most ornate). Each badge must be distinguishable at 90×90 pixels.

---

## File naming

Save the generated image as:

```
static/badges/images/accredited-facilitator.png
```

This path matches the `image` field in `data/badges/accredited-facilitator.yaml` and is served by Netlify at `/badges/images/accredited-facilitator.png`.
