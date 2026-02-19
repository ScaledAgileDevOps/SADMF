# SADMF Master Badge — Image Generation Prompt

Use this prompt with Gemini (or any image generation model) to create the Master certification badge.

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

> A professional certification badge in an octagonal seal shape — eight equal sides, each edge bordered in thick gold. Deep navy blue background (`#1e3a5f`). A double-ring inset just inside the gold border: outer ring in gold, inner ring in magenta (`#a23b72`), creating a sense of layered authority. At the top in a curved arc: "SADMF" in bold white capital letters. In the centre: a nautical compass rose rendered in gold and white — eight cardinal and intercardinal points, precise and detailed, suggesting mastery of direction and orientation. The compass rose is slightly larger and more elaborate than the icons used on lower-tier badges. At the bottom in a curved arc: "MASTER" in large bold gold capital letters. Two small five-pointed gold stars flank the word "MASTER" symmetrically. The overall aesthetic is commanding and distinguished — like a master mariner's certificate or a senior military commendation. Transparent background. 512×512 pixels.

## Variation

> Same composition but replace the compass rose with an astrolabe — a flat circular instrument with engraved rings and a central disc — rendered in fine gold line art on navy. Evokes navigating complexity by instrument, which is very on-brand.

---

## Spelling verification

The badge must contain exactly these words, spelled exactly as shown:

| Position | Text | Notes |
|----------|------|-------|
| Top banner | `SADMF` | All caps, no periods |
| Bottom banner | `MASTER` | All caps, 6 letters: M-A-S-T-E-R |

**Before accepting the output:**

1. Zoom in to 100% and read each word character by character.
2. Confirm `SADMF` has exactly 5 letters and no extra characters.
3. Confirm `MASTER` has exactly 6 letters and is not rendered as `MASER`, `MASTTER`, `MASTR`, or similar.
4. If any word is misspelled or garbled, regenerate — do not attempt to retouch text in an image editor, as results are rarely clean.
5. If the model consistently misspells text, try adding the instruction: *"Render all text as sharp, legible, correctly spelled capital letters. Double-check every letter."*

---

## Consistency note

Master sits between Fellow and Accredited Facilitator in the individual progression (Practitioner → Fellow → Master → Accredited Facilitator). The octagonal shape and compass rose make it visually distinct from the circular medallion (Fellow) and the sunburst seal (Accredited Facilitator), while the double-ring border echoes Fellow's design language, signalling the two tiers are related.

If generating multiple badges in one session, prepend this to each prompt:

> These badges form a progression for the same organisation (SADMF — Scaled Agile DevOps Maturity Framework). They must share the same colour palette (navy `#1e3a5f`, magenta `#a23b72`, accent blue `#2c7be5`, gold, white), similar bold-caps typography, and increasing visual complexity with tier level. Each badge must be distinguishable at 90×90 pixels.

---

## File naming

Save the generated image as:

```
static/badges/images/master.png
```

This path matches the `image` field in `data/badges/master.yaml` and is served by Netlify at `/badges/images/master.png`.
