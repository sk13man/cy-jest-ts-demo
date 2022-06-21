import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: '755tvm',

  retries: 0,
  video: false,
  fixturesFolder: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  screenshotsFolder: 'cypress/reports/screenshots',
  screenshotOnRunFailure: true,
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
