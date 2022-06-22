import { defineConfig } from 'cypress';

export default defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  video: false,
  fixturesFolder: false,

  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/reports/screenshots',
  reporter: 'cypress-mochawesome-reporter',

  reporterOptions: {
    inlineAssets: true,
    charts: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
