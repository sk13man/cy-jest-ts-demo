import { defineConfig } from 'cypress';

export default defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  video: false,
  fixturesFolder: false,
  screenshotOnRunFailure: true,
  videosFolder: './cypress/reports/videos',
  screenshotsFolder: './cypress/reports/screenshots',
  reporter: 'cypress-mochawesome-reporter',

  reporterOptions: {
    inlineAssets: true,
    charts: true,
    debug: false,
    quiet: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
