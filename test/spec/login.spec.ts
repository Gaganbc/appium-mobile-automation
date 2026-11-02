import loginScreen from '../screens/login.screen';
import otpScreen from '../screens/otp.screen';

const testPhone = '9000011224';
const testOTP = '1';

describe('loginPage', () => {
  it('should display the login page', async () => {
    await expect(loginScreen.loginPage).toBeDisplayed();
  });

  it('should display the phone number input field', async () => {
    await expect(loginScreen.phoneNumber).toBeDisplayed();
  });

  it('should type the phone number in the phone number input field', async () => {
    await loginScreen.phoneNumber.setValue(testPhone);
    expect(await loginScreen.phoneNumber.getText()).toBe(testPhone);
  });

  it('should display the continue button', async () => {
    await expect(loginScreen.continueButton).toBeDisplayed();
  });

  it('should click the continue button', async () => {
    await loginScreen.continueButton.click();
  });

  it('should display the OTP page', async () => {
    await expect(loginScreen.OTPPage).toBeDisplayed();
  });

  it('should type in the OTP input fields', async () => {
    await otpScreen.OTPBox1.setValue(testOTP);
    await otpScreen.OTPBox2.setValue(testOTP);
    await otpScreen.OTPBox3.setValue(testOTP);
    await otpScreen.OTPBox4.setValue(testOTP);
    await otpScreen.OTPBox5.setValue(testOTP);
    await otpScreen.OTPBox6.setValue(testOTP);
  });

  it('should click the verify OTP button', async () => {
    await otpScreen.VerifyOTPButton.click();
  });

  it('should tap allow notifications if shown', async () => {
    if (await otpScreen.AllowNotifications.isDisplayed()) {
      await otpScreen.AllowNotifications.click();
    }
  });

  it('should display the choose your role page', async () => {
    await expect(otpScreen.ChooseYourRole).toBeDisplayed();
  });
});
