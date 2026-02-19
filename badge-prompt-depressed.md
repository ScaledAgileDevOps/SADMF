# SADMF DEPRESSED Badge — Image Generation Prompt

**DEPRESSED** = DevOps Engineers Proving Real Experience Solving SAD Engineering Dilemmas

Use this prompt with Gemini (or any image generation model) to create the DEPRESSED team certification badge.

## Context

Unlike the individual badges (Practitioner, Fellow, Master, Accredited Facilitator), DEPRESSED is awarded to entire Feature Teams. The badge should carry an engineering and collective identity rather than individual achievement. The visual language should be technical and team-oriented while remaining completely straight-faced and professional.

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

> A professional certification badge in a hexagonal shape — a regular hexagon with a thick gold border and small triangular notches at each corner point, giving it an engineering or industrial stamp aesthetic. Deep navy blue background (`#1e3a5f`). A thin magenta ring (`#a23b72`) runs just inside the gold border. At the top in a straight horizontal band (not curved, because the flat hexagon top edge allows it): "SADMF" in small bold white capital letters. In the centre: a clean white line-art icon showing three small human figures standing together, framed by a large gear or cog rendered in accent blue (`#2c7be5`) — the gear's teeth are visible at the edges, symbolising a working engineering team inside a mechanical system. Below the icon, a small horizontal rule in gold. At the bottom in a straight horizontal band: "DEPRESSED" in bold gold capital letters. The overall aesthetic is official and industrial — like a certified operator stamp or a team accreditation plaque. Transparent background. 512×512 pixels.

## Variation

> Same hexagonal shape and colour scheme, but replace the gear-and-figures icon with a circuit board trace pattern forming a subtle background behind three interlocking gears of different sizes (large, medium, small) in white, gold, and accent blue. Emphasises the system-of-systems nature of the team certification.

---

## Spelling verification

The badge must contain exactly these words, spelled exactly as shown:

| Position | Text | Notes |
|----------|------|-------|
| Top band | `SADMF` | All caps, no periods |
| Bottom band | `DEPRESSED` | All caps, 9 letters: D-E-P-R-E-S-S-E-D |

**Before accepting the output:**

1. Zoom in to 100% and read each word character by character.
2. Confirm `SADMF` has exactly 5 letters and no extra characters.
3. Confirm `DEPRESSED` has exactly 9 letters with a double-S in positions 6–7. Common errors: `DEPRESED`, `DEPRESSEED`, `DEPRESSD`, `DEPRRESSED`.
4. The double-S is the highest-risk letter in this word. Count the S characters: there must be exactly two consecutive S letters.
5. If any word is misspelled or garbled, regenerate — do not attempt to retouch text in an image editor, as results are rarely clean.
6. If the model consistently misspells the double-S, try adding the instruction: *"The word DEPRESSED contains a double S — two S letters in a row at positions 6 and 7. Render it character by character: D-E-P-R-E-S-S-E-D."*

---

## Consistency note

DEPRESSED is a team certification, so its hexagonal shape intentionally breaks from the circular format used for all individual badges. This signals its different nature at a glance, while the shared colour palette (navy, magenta, gold, white) keeps it clearly within the same badge family.

---

## File naming

Save the generated image as:

```
static/badges/images/depressed.png
```

This path matches the `image` field in `data/badges/depressed.yaml` and is served by Netlify at `/badges/images/depressed.png`.
