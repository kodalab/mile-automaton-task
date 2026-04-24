/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  rootDir: '..',
  // Ensure we find your tests in the new 'tests' subfolder
  testMatch: ['<rootDir>/e2e/tests/**/*.test.js'], 
  testTimeout: 120000,
  maxWorkers: 1,
  globalSetup: 'detox/runners/jest/globalSetup',
  globalTeardown: 'detox/runners/jest/globalTeardown',
  reporters: ['detox/runners/jest/reporter'],
  testEnvironment: 'detox/runners/jest/testEnvironment',
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/e2e/init.js'],
};
