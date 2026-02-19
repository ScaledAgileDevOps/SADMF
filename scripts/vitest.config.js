import { defineConfig } from 'vitest/config'

export default defineConfig({
  css: false,
  test: {
    globals: false,
    environment: 'node',
    include: ['tests/**/*.test.js'],
  },
})
