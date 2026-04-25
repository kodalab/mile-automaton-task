const detox = require('detox');
const config = require('../.detoxrc.js');
const adapter = require('detox/runners/jest/adapter');
const specReporter = require('detox/runners/jest/specReporter');
require('dotenv').config();

// Set the timeout for E2E tests (usually 120s+)
jest.setTimeout(120000);

// Link Detox to the Jest lifecycle
jasmine.getEnv().addReporter(adapter);
jasmine.getEnv().addReporter(specReporter);

beforeAll(async () => {
  await detox.init(config);
  // Launch the app with necessary permissions for testing
  await device.launchApp({ permissions: { notifications: 'YES', location: 'always' } });
});

beforeEach(async () => {
  await adapter.beforeEach();
});

afterAll(async () => {
  await adapter.afterAll();
  await detox.cleanup();
});