import { defineConfig } from "cypress";
const {
  beforeRunHook,
  afterRunHook,
} = require("cypress-mochawesome-reporter/lib");

export default defineConfig({
  video: false,
  fixturesFolder: false,
  viewportWidth: 1920,
  viewportHeight: 1080,

  screenshotsFolder: "cypress/reports/screenshots",
  screenshotOnRunFailure: true,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    video: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    charts: true,
    overwrite: true,
    json: true,
  },

  e2e: {
    setupNodeEvents(on) {
      on("before:run", async (details) => {
        console.log("override before:run");
        await beforeRunHook(details);
      });
      on("after:run", async () => {
        console.log("override after:run");
        await afterRunHook();
      });
    },
  },
});
