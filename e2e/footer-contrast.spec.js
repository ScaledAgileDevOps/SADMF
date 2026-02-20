import { test, expect } from '@playwright/test';

// All contrast math runs inside page.evaluate — helpers are serialised into the browser.
function buildContrastChecker() {
  return `
    function toLinear(c) {
      const s = c / 255;
      return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    }
    function luminance(r, g, b) {
      return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
    }
    function contrastRatio(l1, l2) {
      return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    }
    function parseRgb(str) {
      const m = str.match(/rgba?\\((\\d+),\\s*(\\d+),\\s*(\\d+)/);
      return m ? [+m[1], +m[2], +m[3]] : null;
    }
    function isTransparent(str) {
      if (str === 'transparent') return true;
      const m = str.match(/rgba\\(\\s*\\d+,\\s*\\d+,\\s*\\d+,\\s*([\\d.]+)\\)/);
      return m && parseFloat(m[1]) === 0;
    }
    function effectiveBg(el) {
      let node = el;
      while (node && node !== document.documentElement) {
        const bg = window.getComputedStyle(node).backgroundColor;
        if (!isTransparent(bg)) { const rgb = parseRgb(bg); if (rgb) return rgb; }
        node = node.parentElement;
      }
      return [255, 255, 255];
    }
  `;
}

async function getFooterContrastIssues(page) {
  return page.evaluate(
    ([checkerSrc]) => {
      // eslint-disable-next-line no-new-func
      const fn = new Function(
        checkerSrc +
          `
        const footer = document.querySelector('.td-footer--custom');
        if (!footer) return [{ error: '.td-footer--custom not found' }];
        const results = [];
        footer.querySelectorAll('.text-muted').forEach((node) => {
          const fg = parseRgb(window.getComputedStyle(node).color);
          const bg = effectiveBg(node);
          if (!fg) return;
          const ratio = contrastRatio(luminance(fg[0],fg[1],fg[2]), luminance(bg[0],bg[1],bg[2]));
          if (ratio < 4.5) {
            results.push({
              tag: node.tagName,
              text: node.textContent.trim().slice(0, 60),
              fg: 'rgb(' + fg + ')',
              bg: 'rgb(' + bg + ')',
              ratio: parseFloat(ratio.toFixed(2)),
            });
          }
        });
        return results;
      `
      );
      return fn();
    },
    [buildContrastChecker()]
  );
}

// Reproduces: https://github.com/ScaledAgileDevOps/SADMF/issues/75
// "Contrast on page footer is unreadable" (Samsung Galaxy S24, Android, Chrome & Firefox)
//
// Root cause: the site has no `color-scheme` declaration, so Chrome on Android can apply
// its Automatic Dark Mode transformation to the page, causing our carefully-chosen
// footer colors to be altered and become unreadable.
//
// Fix: declare `color-scheme: light` on `:root` (in CSS or via <meta>) to opt the page
// out of browser-applied automatic dark mode.
test.describe('Footer contrast — issue #75', () => {
  // RED test — fails until `color-scheme: light` is declared.
  // Without it, Chrome Android's Auto Dark Mode can override footer background/text colors.
  test('Site declares color-scheme: light to prevent browser auto-dark transformations', async ({ page }) => {
    await page.goto('/');
    const colorScheme = await page.evaluate(
      () => window.getComputedStyle(document.documentElement).colorScheme
    );
    expect(
      colorScheme,
      `Expected color-scheme: light on :root, got "${colorScheme}". ` +
        'Without this, Chrome Android Auto Dark Mode may alter footer colors (issue #75).'
    ).toBe('light');
  });

  test('Footer .text-muted elements meet WCAG AA contrast ratio (>= 4.5:1)', async ({ page }) => {
    await page.goto('/');
    const issues = await getFooterContrastIssues(page);
    expect(
      issues,
      `Footer contrast failures:\n${JSON.stringify(issues, null, 2)}`
    ).toHaveLength(0);
  });

  // Also verify contrast holds when the browser is in dark color-scheme (prefers-color-scheme:dark).
  test('Footer .text-muted elements meet WCAG AA in dark color-scheme', async ({ browser }) => {
    const ctx = await browser.newContext({
      colorScheme: 'dark',
      viewport: { width: 412, height: 915 },
    });
    const page = await ctx.newPage();
    await page.goto('/');
    const issues = await getFooterContrastIssues(page);
    await ctx.close();
    expect(
      issues,
      `Footer contrast failures in dark mode:\n${JSON.stringify(issues, null, 2)}`
    ).toHaveLength(0);
  });
});
