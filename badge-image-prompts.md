# SADMF Badge Image Generation Prompts

Use these prompts with Gemini (or any image generation model) to create badge images for the three SADMF certification levels.

## Technical requirements

- **Format:** PNG with transparent background
- **Size:** 512×512 pixels minimum (square)
- **Style:** Professional certification badge — looks entirely genuine and authoritative
- **Tone:** Earnest and straight-faced. No obvious satire in the visual design. These should look like real credentials from a real organisation.
- **Colour palette:**
  - Deep navy: `#1e3a5f`
  - Magenta/pink: `#a23b72`
  - Accent blue: `#2c7be5`
  - White: `#ffffff`
  - Gold accents for borders and seals

---

## Badge 1: Practitioner

### Prompt

> A professional certification badge in a circular shield shape. Deep navy blue background (`#1e3a5f`) with a thin gold border ring. At the top in a curved banner: the text "SADMF" in bold white capital letters. In the centre: a clean, minimalist icon of a clipboard with a checklist and a small upward-trending bar chart overlaid, rendered in white and light blue. At the bottom in a curved banner: the text "PRACTITIONER" in gold capital letters. The overall aesthetic is corporate, authoritative, and polished — like a PMI or ITIL certification badge. Transparent background. 512×512 pixels.

### Variation (if the above is too plain)

> Same as above but add a subtle radial burst of thin gold lines emanating from behind the central icon, giving a sense of achievement and importance. Keep it professional, not garish.

---

## Badge 2: Fellow

### Prompt

> A professional certification badge in a circular medallion shape with a double-ring border — outer ring in gold, inner ring in magenta (`#a23b72`). Deep navy blue background (`#1e3a5f`). At the top in a curved arc: the text "SADMF" in bold white capital letters. In the centre: a stylised icon of an open laurel wreath framing a small ascending staircase or podium, rendered in gold and white, symbolising advanced achievement. At the bottom in a curved arc: the text "FELLOW" in large gold capital letters. Below that, a small five-pointed gold star centred beneath the text. The aesthetic is distinguished and prestigious — like a Royal Society fellowship or senior academic credential. Transparent background. 512×512 pixels.

### Variation

> Same composition but replace the laurel wreath with an ouroboros (a serpent forming a circle) in gold, subtly implying cyclical process. Keep it tasteful and professional.

---

## Badge 3: Accredited Facilitator

### Prompt

> A professional certification badge in a sunburst seal shape — a circle with 16 short triangular rays emanating outward, all in gold. Deep navy blue fill (`#1e3a5f`) inside the circle. A thin magenta ring (`#a23b72`) separates the inner circle from the rays. At the top in a curved arc: "SADMF" in bold white capital letters. In the centre: a clean icon of a person standing at a whiteboard presenting to two seated figures, rendered in white line art — a confident facilitator posture. Below the icon, a small horizontal rule in gold. At the bottom in a curved arc: "ACCREDITED" on the first line and "FACILITATOR" on the second line, both in gold capital letters, slightly smaller than the other badges to fit the two-line label. The overall aesthetic conveys official accreditation authority — like a government-issued instructor credential or a PMI-ACP badge. Transparent background. 512×512 pixels.

### Variation

> Same but replace the whiteboard scene with a graduation mortarboard and a rosette ribbon beneath it, emphasising formal accreditation over teaching.

---

## Shared style notes for consistency

If generating all three in one session, include this preamble before each prompt:

> These three badges form a progression for the same organisation (SADMF — Scaled Agile DevOps Maturity Framework). They must be visually consistent: same colour palette (navy `#1e3a5f`, magenta `#a23b72`, accent blue `#2c7be5`, gold, white), same circular badge format, same bold-caps typography style, and increasing visual complexity from Practitioner (simplest) to Accredited Facilitator (most ornate). Each badge must be distinguishable at 90×90 pixels.

---

## File naming

Save the generated images as:

```
static/badges/images/practitioner.png
static/badges/images/fellow.png
static/badges/images/accredited-facilitator.png
```

These paths match the `image` field in the badge YAML definitions and are served by Netlify at `/badges/images/*.png`.
