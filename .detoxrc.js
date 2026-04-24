/** @type {Detox.DetoxConfig} */
export const apps = {
  'ios.physical': {
    type: 'ios.app',
    binaryPath: 'temp_payload/Payload/Mile.ipa', // Path to extracted .app from IPA
    bundleId: 'com.mile.app', // Ensure this matches the IPA
  },
  'ios.simulator': {
    type: 'ios.app',
    binaryPath: 'bin/MileClub.app',
    build: 'xcodebuild -workspace ios/MileClub.xcworkspace ...'
  }
};
export const devices = {
  'physical': {
    type: 'ios.none',
    device: {
      id: '000008150-000865463C07801C' // Your iPhone's UDID
    }
  },
  'simulator': {
    type: 'ios.simulator',
    device: {
      type: 'iPhone 15'
    }
  }
};
export const configurations = {
  'ios.device.release': {
    device: 'physical',
    app: 'ios.physical'
  },
  'ios.sim.debug': {
    device: 'simulator',
    app: 'ios.simulator'
  }
};