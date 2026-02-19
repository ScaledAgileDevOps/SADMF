# SADMF Fellow Badge — Image Generation Prompt

Use this prompt with Gemini (or any image generation model) to create the Fellow certification badge.

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

> A professional certification badge in a circular medallion shape with a double-ring border — outer ring in gold, inner ring in magenta (`#a23b72`). Deep navy blue background (`#1e3a5f`). At the top in a curved arc: the text "SADMF" in bold white capital letters. In the centre: a stylised icon of an open laurel wreath framing a small ascending staircase or podium, rendered in gold and white, symbolising advanced achievement. At the bottom in a curved arc: the text "FELLOW" in large gold capital letters. Below that, a small five-pointed gold star centred beneath the text. The aesthetic is distinguished and prestigious — like a Royal Society fellowship or senior academic credential. Transparent background. 512×512 pixels.

## Variation

> Same composition but replace the laurel wreath with an ouroboros (a serpent forming a circle) in gold, subtly implying cyclical process. Keep it tasteful and professional.

---

## Spelling verification

The badge must contain exactly these words, spelled exactly as shown:

| Position | Text | Notes |
|----------|------|-------|
| Top banner | `SADMF` | All caps, no periods |
| Bottom banner | `FELLOW` | All caps, 6 letters: F-E-L-L-O-W |

**Before accepting the output:**

1. Zoom in to 100% and read each word character by character.
2. Confirm `SADMF` has exactly 5 letters and no extra characters.
3. Confirm `FELLOW` has exactly 6 letters and is not rendered as `FELLO`, `FELLLOW`, `FELOW`, or any other misspelling. The double-L is a common error — check carefully.
4. If any word is misspelled or garbled, regenerate — do not attempt to retouch text in an image editor, as results are rarely clean.
5. If the model consistently misspells text, try adding the instruction: *"Render all text as sharp, legible, correctly spelled capital letters. Double-check every letter."*

---

## Consistency note

The Fellow badge is the second level in a three-level progression (Practitioner → Fellow → Accredited Facilitator). It must be visually consistent with the Practitioner badge: same colour palette (navy `#1e3a5f`, magenta `#a23b72`, gold, white), same circular format, same bold-caps typography. The double-ring border and laurel wreath make it visually richer than Practitioner — that increased complexity signals the higher tier.

If generating both badges in one session, prepend this to each prompt:

> These badges form a progression for the same organisation (SADMF — Scaled Agile DevOps Maturity Framework). They must share the same colour palette (navy `#1e3a5f`, magenta `#a23b72`, accent blue `#2c7be5`, gold, white), circular format, and bold-caps typography. Visual complexity increases with tier level. Each badge must be distinguishable at 90×90 pixels.

---

## File naming

Save the generated image as:

```
static/badges/images/fellow.png
```

This path matches the `image` field in `data/badges/fellow.yaml` and is served by Netlify at `/badges/images/fellow.png`.
