import { defineConfig } from 'cypress';

export default defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'http://localhost:8000',
    setupNodeEvents(on, config) {}
  },
  component: {
    specPattern: 'cypress/component/**/*.cy.{ts,tsx}',
    devServer: {
      framework: 'next',
      bundler: 'webpack'
    }
  }
});
