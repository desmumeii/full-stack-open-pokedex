const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
  testDir: 'e2e-tests',
  timeout: 30000,

  use: {
    baseURL: 'http://localhost:5000',
    headless: true
  },

  webServer: {
    command: 'npm run start-prod',
    port: 5000,
    timeout: 120000,
    reuseExistingServer: !process.env.CI
  }
})
