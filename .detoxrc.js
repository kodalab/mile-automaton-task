/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    args: {
      $0: 'jest',
      config: 'e2e/jest.config.js'
    },
    jest: {
      setupTimeout: 120000
    }
  },
  apps: {
    'ios.release': {
      type: 'ios.app',
      binaryPath: 'bin/Mile.app',
      launchArgs: {
        // Some versions of Detox prefer permissions here
        permissions: { notifications: 'YES', location: 'always' }
      }
    }
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 16 Pro' 
      }
    }
  },
  configurations: {
    'ios.sim.release': {
      device: 'simulator',
      app: 'ios.release',
      // Other versions of Detox prefer permissions here
      util: {
        permissions: {
          notifications: 'YES',
          location: 'always'
        }
      }
    }
  }
};