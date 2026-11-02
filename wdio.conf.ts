export const config = {
  runner: 'local',
  specs: ['test/spec/*.spec.ts'],
  waitforTimeout: 60000,
  framework: 'mocha',
  mochaOpts: { timeout: 60000 },
  reporters: ['spec', ['junit', { outputDir: './junit/reports' }]],
  capabilities: [
    {
      platformName: 'Android',
      'appium:automationName': 'UiAutomator2',
      'appium:deviceName': 'Pixel_9_Pro',
      'appium:app': './app.apk',
    },
  ],
  services: ['appium'],
};
