import loginScreen from '../screens/login.screen';
import otpScreen from '../screens/otp.screen';
import ownerDashboardScreen from '../screens/ownerdashboard.screen';
import addTenantSheet from '../screens/addtenantsheet.screen';
import formLinkScreen from '../screens/formlink.screen';

const testPhone = '9000006789';
const testOTP = '1';

describe('inviteTenant', () => {
  it('should log in as owner', async () => {
    await loginScreen.phoneNumber.setValue(testPhone);
    await loginScreen.continueButton.click();
    await expect(loginScreen.OTPPage).toBeDisplayed();
    if (await otpScreen.Restart.isDisplayed()) {
      await otpScreen.Restart.click();
    }
    await otpScreen.OTPBox1.setValue(testOTP);
    await otpScreen.OTPBox2.setValue(testOTP);
    await otpScreen.OTPBox3.setValue(testOTP);
    await otpScreen.OTPBox4.setValue(testOTP);
    await otpScreen.OTPBox5.setValue(testOTP);
    await otpScreen.OTPBox6.setValue(testOTP);
    await otpScreen.VerifyOTPButton.click();
    if (await otpScreen.AllowNotifications.isDisplayed()) {
      await otpScreen.AllowNotifications.click();
    }
    await expect(ownerDashboardScreen.welcomeBack).toBeDisplayed();
  });

  it('should open the add tenant sheet and pick "already living here"', async () => {
    await ownerDashboardScreen.addTenant.click();
    await expect(addTenantSheet.sheetTitle).toBeDisplayed();
    await addTenantSheet.alreadyLivingHere.click();
  });

  it('should generate a form link and show a shareable code', async () => {
    if (await formLinkScreen.generateFormLink.isDisplayed()) {
      await formLinkScreen.generateFormLink.click();
    }
    await expect(formLinkScreen.copyCode).toBeDisplayed();
    await expect(formLinkScreen.shareButton).toBeDisplayed();
  });
});
