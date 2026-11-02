class OTPScreen {
  get OTPBox1() {
    return $('android=new UiSelector().description("OTP digit 1")');
  }
  get OTPBox2() {
    return $('android=new UiSelector().description("OTP digit 2")');
  }
  get OTPBox3() {
    return $('android=new UiSelector().description("OTP digit 3")');
  }
  get OTPBox4() {
    return $('android=new UiSelector().description("OTP digit 4")');
  }
  get OTPBox5() {
    return $('android=new UiSelector().description("OTP digit 5")');
  }
  get OTPBox6() {
    return $('android=new UiSelector().description("OTP digit 6")');
  }
  get VerifyOTPButton() {
    return $('android=new UiSelector().textContains("Verify OTP").instance(2)');
  }
  get AllowNotifications() {
    return $(
      'android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_button")',
    );
  }
  get ChooseYourRole() {
    return $('android=new UiSelector().textContains("Choose your role")');
  }
}
export default new OTPScreen();
