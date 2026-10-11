const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://realworld.qa.guru',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
   proxy: null,
  httpProxy: null,
  httpsProxy: null,
});
