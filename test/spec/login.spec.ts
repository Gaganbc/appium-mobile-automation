import loginScreen from '../screens/login.screen';
import otpScreen from '../screens/otp.screen';

const testPhone = '9000011224';
const testOTP = '1';

describe('login', () => {
  it('should enter phone number and continue', async () => {
    await expect(loginScreen.loginPage).toBeDisplayed();
    await loginScreen.phoneNumber.setValue(testPhone);
    await loginScreen.continueButton.click();
  });

  it('should enter OTP and verify', async () => {
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
  });

  it('should land on choose your role page', async () => {
    await expect(otpScreen.ChooseYourRole).toBeDisplayed();
  });
});
