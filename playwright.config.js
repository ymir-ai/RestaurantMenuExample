const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests/playwright",
  fullyParallel: true,
  use: {
    baseURL: "http://127.0.0.1:4173",
    trace: "on-first-retry"
  },
  webServer: {
    command: "npx http-server . -p 4173 -c-1",
    url: "http://127.0.0.1:4173",
    reuseExistingServer: true,
    timeout: 120000
  }
});
