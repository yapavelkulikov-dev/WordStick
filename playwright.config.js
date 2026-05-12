const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    baseURL: 'http://localhost:8787',
    headless: true,
  },
  webServer: {
    command: 'npx http-server . -p 8787 -c-1 --silent',
    url: 'http://localhost:8787',
    reuseExistingServer: false,
    timeout: 15000,
  },
});
