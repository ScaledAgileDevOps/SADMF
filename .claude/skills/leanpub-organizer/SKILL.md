---
name: leanpub-organizer
description: Organize and format book manuscripts for Leanpub publishing. Use this skill whenever the user wants to structure files for Leanpub, convert existing content to Markua format, organize a book directory for Leanpub's manuscript format, set up Book.txt, reorganize chapters, handle images and diagrams for Leanpub, or prepare any writing project for publication on Leanpub. Trigger this skill when the user mentions Leanpub, Markua, manuscript organization, book file structure, or wants to convert blog posts/articles/papers into a book format.
---

# Leanpub Book Organizer

This skill helps organize and format book manuscripts for Leanpub publishing using Markua.

## Target File Structure

```
manuscript/
  Book.txt                    # ordered list of chapter filenames, one per line
  Sample.txt                  # optional: subset of files for the free sample
  part-01-title.md            # optional part divider files (if book has parts)
  chapter-01-title.md         # one file per chapter, zero-padded prefix
  chapter-02-title.md
  ...
  resources/
    images/                   # all images referenced in the manuscript
      chapter-01-description.png
```

## Step-by-Step Workflow

### Step 1: Survey the Current State

Before doing anything, understand what exists:

```bash
find <book_dir> -type f | sort
```

Look for:
- Existing Markdown/text files (content)
- Images (PNG, JPG, SVG, GIF)
- Any existing structure or Book.txt

Report what you found and ask the user to confirm the proposed organization before making changes.

### Step 2: Propose Chapter Organization

Based on the files found, propose:
1. A logical chapter order and grouping
2. Whether parts (`-#` dividers) are needed
3. Filenames following the convention: `chapter-##-short-title.md`
4. Any files that appear to be duplicates, drafts, or non-content

**Naming conventions:**
- Use lowercase, hyphens only (no underscores or spaces)
- Zero-pad numbers: `chapter-01`, `chapter-02` ... `chapter-10`
- Keep names short but descriptive: `chapter-03-deployment-pipeline.md`
- Part files: `part-01-foundations.md`

Wait for user confirmation before proceeding.

### Step 3: Create the Manuscript Directory Structure

```bash
mkdir -p <book_dir>/manuscript/resources/images
```

### Step 4: Convert and Move Content Files

For each content file:
1. Copy (don't move until confirmed) to `manuscript/chapter-##-title.md`
2. Convert formatting to valid Markua (see Markua Formatting Rules below)
3. Fix image references to point to `images/filename.ext`

### Step 5: Move Images

Move all images to `manuscript/resources/images/`:
- Rename to follow `chapter-##-description.ext` convention where practical
- Supported formats: PNG, JPG/JPEG, GIF, SVG, SVGZ
- Update all references in the manuscript files

### Step 6: Generate Book.txt

Write `manuscript/Book.txt` listing chapter files in order:

```
chapter-01-introduction.md
chapter-02-core-concepts.md
chapter-03-deployment-pipeline.md
```

No blank lines, no comments, just filenames one per line.

### Step 7: Generate Sample.txt (optional)

If the user wants a free sample, create `manuscript/Sample.txt` with the first 1-3 chapter filenames.

### Step 8: Validate

After organizing, verify:
- Every file listed in Book.txt exists
- Every image referenced in manuscript files exists in `resources/images/`
- No orphaned image files
- No broken cross-references

Report a summary of what was done and flag anything that needs human attention.

---

## Markua Formatting Rules

Read `references/markua-cheatsheet.md` for the full syntax reference. Key rules:

### Structure
- `# Title` — starts a new chapter (appears in TOC)
- `## Title` — section heading
- `### Title` — sub-section
- `-# Part Title` — part divider (goes in its own file or inline before first chapter of part)

### Images and Diagrams
```
![Caption text](images/filename.png)
```

With sizing (preferred for technical diagrams):
```
{width: 75%}
![Caption text](images/filename.png)
```

With centering:
```
{width: 60%, align: middle}
![Caption text](images/diagram.png)
```

Full-bleed (no margins):
```
{fullbleed: true}
![Caption text](images/full-page-diagram.png)
```

**Image format guidance:**
- SVG: best for diagrams, scales perfectly across PDF/EPUB
- PNG: use at high resolution (150+ DPI at intended display size)
- Avoid float attribute — unreliable across formats

### Code Blocks
````
```bash
git commit -m "message"
```

```yaml
name: deploy
on: push
```
````

Always specify the language identifier.

### Callout Blocks (Asides)
```
I> **Note:** This is an information callout.

W> **Warning:** This is a warning callout.

T> **Tip:** This is a tip callout.

E> **Error:** This is an error example callout.
```

### Tables
```
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Value    | Value    | Value    |
```

### Cross-references and Links
- External links: `[link text](https://example.com)`
- In PDF output, Leanpub can render URLs as footnotes (set in book theme options)

---

## Common Conversion Patterns

When converting blog posts, papers, or articles to Leanpub chapters:

| Source format | Markua equivalent |
|--------------|-------------------|
| `<h1>` / `# ` | `# ` (becomes chapter title — usually only one per file) |
| `<h2>` / `## ` | `## ` section |
| `<img src="...">` | `![caption](images/filename.ext)` |
| `<aside>` / blockquote tips | `T> Tip text` |
| `<code>` blocks | Fenced code blocks with language id |
| Horizontal rules `---` | Avoid — Leanpub uses these structurally |

---

## Reporting

After completing the organization, provide a summary:

```
## Organization Complete

**Files organized:** X chapter files
**Images moved:** X images
**Book.txt:** X entries

**Book.txt contents:**
chapter-01-...
chapter-02-...

**Action items for you:**
- [ ] Review chapter order in Book.txt
- [ ] These images need to be created: [list]
- [ ] These sections may need more content: [list]
- [ ] Verify image widths look correct by generating a preview
```

---

## Reference Files

- `references/markua-cheatsheet.md` — Full Markua syntax quick reference
