import { test, expect } from '@playwright/test';

// Desktop tests run at 1280×720 regardless of browser project
test.describe('Desktop navigation', () => {
  test.use({ viewport: { width: 1280, height: 720 } });

  test('Framework dropdown opens', async ({ page }) => {
    await page.goto('/');
    const toggle = page.locator('.dropdown-toggle', { hasText: 'Framework' });
    await toggle.click();
    const menu = toggle.locator('..').locator('.dropdown-menu');
    await expect(menu).toBeVisible();
  });

  test('Framework dropdown contains expected links', async ({ page }) => {
    await page.goto('/');
    const toggle = page.locator('.dropdown-toggle', { hasText: 'Framework' });
    await toggle.click();
    const menu = toggle.locator('..').locator('.dropdown-menu');
    await expect(menu.locator('.dropdown-item', { hasText: 'Principles' })).toBeVisible();
    await expect(menu.locator('.dropdown-item', { hasText: 'Practices' })).toBeVisible();
    await expect(menu.locator('.dropdown-item', { hasText: 'Roles' })).toBeVisible();
    await expect(menu.locator('.dropdown-item', { hasText: 'Metrics' })).toBeVisible();
  });

  test('Resources dropdown opens', async ({ page }) => {
    await page.goto('/');
    const toggle = page.locator('.dropdown-toggle', { hasText: 'Resources' });
    await toggle.click();
    const menu = toggle.locator('..').locator('.dropdown-menu');
    await expect(menu).toBeVisible();
  });

  test('Resources dropdown contains expected links', async ({ page }) => {
    await page.goto('/');
    const toggle = page.locator('.dropdown-toggle', { hasText: 'Resources' });
    await toggle.click();
    const menu = toggle.locator('..').locator('.dropdown-menu');
    await expect(menu.locator('.dropdown-item', { hasText: 'Big Picture' })).toBeVisible();
    await expect(menu.locator('.dropdown-item', { hasText: 'Success Stories' })).toBeVisible();
  });

  test('Get Certified is a top-level nav item', async ({ page }) => {
    await page.goto('/');
    const certLink = page.locator('.navbar-nav > li > a.nav-link', { hasText: 'Get Certified' });
    await expect(certLink).toBeVisible();
  });

  test('Framework dropdown navigates to Principles page', async ({ page }) => {
    await page.goto('/');
    const toggle = page.locator('.dropdown-toggle', { hasText: 'Framework' });
    await toggle.click();
    const menu = toggle.locator('..').locator('.dropdown-menu');
    await menu.locator('.dropdown-item', { hasText: 'Principles' }).click();
    await expect(page).toHaveURL(/\/principles\//);
  });

  test('Sidebar is visible on content page', async ({ page }) => {
    await page.goto('/principles/');
    await expect(page.locator('#td-sidebar-menu')).toBeVisible();
  });

  test('Sidebar contains links', async ({ page }) => {
    await page.goto('/principles/');
    const links = page.locator('#td-sidebar-menu .td-sidebar-link');
    const count = await links.count();
    expect(count).toBeGreaterThan(0);
  });
});

// Mobile tests run at iPhone 13 viewport (390×844)
// The SADMF navbar uses a horizontally-scrollable navbar, not a collapsible hamburger menu.
test.describe('Mobile navigation', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('Navbar brand is visible on mobile', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.navbar-brand')).toBeVisible();
  });

  test('Navbar nav container is present in DOM', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#main_navbar')).toBeAttached();
  });

  test('Framework nav item exists in DOM', async ({ page }) => {
    await page.goto('/');
    const framework = page.locator('.dropdown-toggle', { hasText: 'Framework' });
    await expect(framework).toBeAttached();
  });

  test('Resources nav item exists in DOM', async ({ page }) => {
    await page.goto('/');
    const resources = page.locator('.dropdown-toggle', { hasText: 'Resources' });
    await expect(resources).toBeAttached();
  });

  test('Sidebar menu is present in DOM on content page', async ({ page }) => {
    await page.goto('/principles/');
    await expect(page.locator('#td-sidebar-menu')).toBeAttached();
  });

  test('Navbar height is reasonable on mobile (no overflow)', async ({ page }) => {
    await page.goto('/');
    const navbar = page.locator('.td-navbar');
    const box = await navbar.boundingBox();
    expect(box).not.toBeNull();
    // Navbar should not exceed 180px tall on mobile — a taller value indicates
    // the brand is overflowing into the nav-items row
    expect(box.height).toBeLessThan(180);
  });

  test('Brand text is hidden on mobile (logo-only brand)', async ({ page }) => {
    await page.goto('/');
    const brandText = page.locator('.sadmf-brand-name');
    // Hidden via d-none on mobile — should not be visible
    await expect(brandText).toBeHidden();
  });

  test('Nav items do not overlap each other on mobile', async ({ page }) => {
    await page.goto('/');
    const navItems = page.locator('.td-navbar .navbar-nav > li');
    const count = await navItems.count();
    expect(count).toBeGreaterThan(0);
    // Collect left positions; each should be to the right of the previous
    let prevRight = -1;
    for (let i = 0; i < count; i++) {
      const box = await navItems.nth(i).boundingBox();
      if (!box) continue;
      expect(box.x).toBeGreaterThanOrEqual(prevRight - 2); // 2px tolerance
      prevRight = box.x + box.width;
    }
  });
});
