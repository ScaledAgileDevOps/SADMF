import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  reporter: 'list',
  webServer: {
    command: 'hugo serve -p 1314',
    url: 'http://localhost:1314',
    reuseExistingServer: !process.env.CI,
  },
  use: { baseURL: 'http://localhost:1314' },
  projects: [
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 13'] },
    },
  ],
});
