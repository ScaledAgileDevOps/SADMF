# SADMF Practitioner Badge — Image Generation Prompt

Use this prompt with Gemini (or any image generation model) to create the Practitioner certification badge.

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

> A professional certification badge in a circular shield shape. Deep navy blue background (`#1e3a5f`) with a thin gold border ring. At the top in a curved banner: the text "SADMF" in bold white capital letters. In the centre: a clean, minimalist icon of a clipboard with a checklist and a small upward-trending bar chart overlaid, rendered in white and light blue. At the bottom in a curved banner: the text "PRACTITIONER" in gold capital letters. The overall aesthetic is corporate, authoritative, and polished — like a PMI or ITIL certification badge. Transparent background. 512×512 pixels.

## Variation (if the above is too plain)

> Same as above but add a subtle radial burst of thin gold lines emanating from behind the central icon, giving a sense of achievement and importance. Keep it professional, not garish.

---

## Spelling verification

The badge must contain exactly these words, spelled exactly as shown:

| Position | Text | Notes |
|----------|------|-------|
| Top banner | `SADMF` | All caps, no periods |
| Bottom banner | `PRACTITIONER` | All caps, 13 letters: P-R-A-C-T-I-T-I-O-N-E-R |

**Before accepting the output:**

1. Zoom in to 100% and read each word character by character.
2. Confirm `SADMF` has exactly 5 letters and no extra characters.
3. Confirm `PRACTITIONER` has exactly 12 letters and is not rendered as `PRACTICIONER`, `PRACTIONER`, `PRACTITONER`, or any other misspelling.
4. If any word is misspelled or garbled, regenerate — do not attempt to retouch text in an image editor, as results are rarely clean.
5. If the model consistently misspells text, try adding the instruction: *"Render all text as sharp, legible, correctly spelled capital letters. Double-check every letter."*

---

## File naming

Save the generated image as:

```
static/badges/images/practitioner.png
```

This path matches the `image` field in `data/badges/practitioner.yaml` and is served by Netlify at `/badges/images/practitioner.png`.
