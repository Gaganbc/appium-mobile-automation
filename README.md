# Appium Mobile Automation

Mobile UI test automation using WebdriverIO + Appium, covering a phone + OTP login flow against an Android app.

## Stack
- WebdriverIO + Appium (UiAutomator2 driver)
- TypeScript
- JUnit reporting

## Structure
```
test/
  spec/     # test specs
  screens/  # page/screen objects (accessibility id / UiSelector based locators)
```

## Running locally
Requires an Android emulator/device running and Appium's UiAutomator2 driver installed. Place your own app's `.apk` at the repo root as `app.apk` (not included here).

```bash
npm install
npx appium driver install uiautomator2
npm test
```
