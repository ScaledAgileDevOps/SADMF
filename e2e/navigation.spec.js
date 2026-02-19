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
    await expect(menu.locator('.dropdown-item', { hasText: 'Get Certified' })).toBeVisible();
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
});
