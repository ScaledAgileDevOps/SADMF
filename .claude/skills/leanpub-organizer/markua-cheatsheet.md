# Markua Quick Reference for Leanpub

## Document Structure

```
-# Part One: Foundations       ← Part divider (optional)
# Chapter Title                ← New chapter, appears in TOC
## Section Heading             ← Section, appears in TOC
### Sub-section                ← Sub-section
#### Sub-sub-section           ← Sub-sub-section (rarely needed)
```

## Book.txt

Lists manuscript files in reading order, one per line:
```
chapter-01-introduction.md
chapter-02-core-concepts.md
chapter-03-pipelines.md
```

No blank lines, no paths, just filenames.

## Text Formatting

```
**bold**
*italic*
`inline code`
~~strikethrough~~
```

## Images

Basic:
```
![Caption](images/filename.png)
```

With width (percentage, recommended):
```
{width: 75%}
![Caption](images/filename.png)
```

With alignment:
```
{width: 60%, align: middle}
![Caption](images/filename.png)
```

Full bleed (fills page, no margins):
```
{fullbleed: true}
![Caption](images/filename.png)
```

No caption:
```
{width: 50%}
!["](images/decorative.png)
```

**Supported formats:** PNG, JPG/JPEG, GIF, SVG, SVGZ  
**Do not use:** float attribute (unreliable in PDF/EPUB)

## Code Blocks

Fenced with language identifier (always specify language):
````
```python
def deploy():
    return True
```

```bash
git push origin main
```

```yaml
name: CI
on: [push]
```

```json
{"key": "value"}
```
````

Inline code: `` `git commit` ``

## Callouts / Asides

```
I> **Note:** Information callout.

W> **Warning:** Warning callout.

T> **Tip:** Tip callout.

E> **Error:** Error example callout.

Q> **Quote:** Pull quote or block quote.
```

Multi-line callout:
```
I> **Note:** First line of the callout.
I>
I> Second paragraph of the same callout.
```

## Lists

Unordered:
```
- Item one
- Item two
  - Nested item
- Item three
```

Ordered:
```
1. First step
2. Second step
3. Third step
```

Definition list:
```
Term
: Definition text here.

Another term
: Another definition.
```

## Tables

```
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell     | Cell     | Cell     |
| Cell     | Cell     | Cell     |
```

Alignment:
```
| Left     | Center   | Right    |
|:---------|:--------:|---------:|
| text     | text     | text     |
```

## Links and Footnotes

External link:
```
[link text](https://example.com)
```

Footnote:
```
Some text with a footnote.[^1]

[^1]: The footnote text goes here.
```

## Block Quotes

```
> This is a block quote.
> It can span multiple lines.
```

## Horizontal Rules

Avoid using `---` as a thematic break — Leanpub uses dashes structurally in some contexts. Use a callout or section heading instead.

## Page Breaks

Force a new page (PDF only):
```
{pagebreak}
```

## Math (if needed)

Inline math: `$E = mc^2$`

Block math:
```
$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$
```

## Special Characters

Use Unicode directly or HTML entities:
- Em dash: — or `&mdash;`
- Ellipsis: … or `...`
- Copyright: © or `&copy;`

## File Naming Conventions

```
chapter-01-introduction.md
chapter-02-core-concepts.md
chapter-10-conclusion.md
part-01-foundations.md
resources/
  images/
    chapter-01-architecture-diagram.png
    chapter-02-pipeline-flow.svg
```

- Lowercase, hyphens only
- Zero-pad numbers (01, 02 ... 10, 11)
- Descriptive but concise names
- SVG preferred for diagrams; high-res PNG as fallback

## Theme Settings (in Leanpub UI)

- **Technical (Beta)**: default for new books, 7"×10" page size, good for print
- **Page size options**: US Letter, A4, Technical (7×10), US Trade, A5, Digest, Paperback
- **Paragraph style**: indent first line vs. vertical space between paragraphs
- **Font size**: 11pt or 12pt
- **Table width**: default (80%), narrow, wide
