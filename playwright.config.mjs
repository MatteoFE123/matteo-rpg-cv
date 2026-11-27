import { defineConfig } from "@playwright/test";
import { browserOptions } from "./scripts/browser.mjs";

export default defineConfig({
  testDir: "./tests",
  testMatch: "**/*.spec.mjs",
  fullyParallel: true,
  use: {
    baseURL: "http://127.0.0.1:4329/matteo-rpg-cv/",
    launchOptions: browserOptions(),
  },
  webServer: {
    command: "npm run dev",
    url: "http://127.0.0.1:4329/matteo-rpg-cv/",
    reuseExistingServer: !process.env.CI,
    env: { ASTRO_TELEMETRY_DISABLED: "1" },
  },
});
