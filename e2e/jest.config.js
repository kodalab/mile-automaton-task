/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  rootDir: '..',
  // Ensure we find your tests in the new 'tests' subfolder
  testMatch: ['<rootDir>/e2e/tests/**/*.test.js'], 
  testTimeout: 120000,
  maxWorkers: 1,
  globalSetup: 'detox/runners/jest/globalSetup',
  globalTeardown: 'detox/runners/jest/globalTeardown',
  reporters: [
    "default",
    ["jest-html-reporters", {
      "publicPath": "./e2e/report",
      "filename": "index.html",
      "expand": true,
      "pageTitle": "Mile Club E2E Test Report"
    }]
  ],
  testEnvironment: 'detox/runners/jest/testEnvironment',
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/e2e/init.js'],
};
