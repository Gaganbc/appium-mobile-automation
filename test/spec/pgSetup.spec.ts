import loginScreen from '../screens/login.screen';
import otpScreen from '../screens/otp.screen';
import ownerDashboardScreen from '../screens/ownerdashboard.screen';
import roomManagementScreen from '../screens/roommanagement.screen';
import addRoomScreen from '../screens/addroom.screen';

const testPhone = '9000006789';
const testOTP = '1';
const testRoomNumber = '102';
const floor = '1st';
const bedName = 'AAA';
const rent = '500';

describe('pgSetup', () => {
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

  it('should add a new room with a bed and rent', async () => {
    await ownerDashboardScreen.rooms.click();
    await roomManagementScreen.addRoom.click();
    await addRoomScreen.roomNumber.setValue(testRoomNumber);
    await addRoomScreen.floor.setValue(floor);
    await addRoomScreen.bedName.setValue(bedName);
    await addRoomScreen.rent.setValue(rent);
    await addRoomScreen.addRoomButton.click();
    await addRoomScreen.Success.click();
  });

  it('should display the newly added room in room management', async () => {
    expect(await roomManagementScreen.roomNumber(testRoomNumber).getText()).toBe(`Room ${testRoomNumber}`);
  });
});
