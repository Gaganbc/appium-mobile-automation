class LoginScreen {
  get loginPage() {
    return $('android=new UiSelector().textContains("Welcome")');
  }
  get phoneNumber() {
    return $('~Mobile number');
  }
  get continueButton() {
    return $('android=new UiSelector().textContains("Continue with Phone")');
  }
  get OTPPage() {
    return $('android=new UiSelector().textContains("Enter the code sent to")');
  }
}
export default new LoginScreen();
