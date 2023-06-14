const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity:false,


    specPattern:['cypress/integration/exampel/standard_user.js','cypress/integration/exampel/problem_user.js']
  },
});
