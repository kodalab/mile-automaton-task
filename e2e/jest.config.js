/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  // 1. Point to the project root so Jest can resolve your 'import' paths correctly
  rootDir: '..',
  
  // 2. Where to find your test files
  testMatch: ['<rootDir>/e2e/**/*.test.js'],
  
  // 3. Detox 20 Lifecycle & Environment
  globalSetup: 'detox/runners/jest/globalSetup',
  globalTeardown: 'detox/runners/jest/globalTeardown',
  testEnvironment: 'detox/runners/jest/testEnvironment',
  
  // 4. Execution Settings
  testTimeout: 120000,
  maxWorkers: 1, // Detox tests should usually run serially
  reporters: ['detox/runners/jest/reporter'],
  verbose: true,

  // 5. Transformation (Fixes the "Unexpected token 'import'" error)
  transform: {
    '\\.js$': 'babel-jest',
  },

  // 6. Optional: If you decide to add a setup file later
  setupFilesAfterEnv: [],
};

/** * Load environment variables from .env at the start.
 * This runs when Jest loads the config.
 */
try {
  require('dotenv').config();
} catch (e) {
  // Silent fail if dotenv is not installed or .env is missing
}