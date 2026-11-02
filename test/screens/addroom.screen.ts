class AddRoomScreen {
  get roomNumber() {
    return $('android=new UiSelector().text("e.g. 101")');
  }
  get floor() {
    return $('android=new UiSelector().text("e.g. 1")');
  }
  get bedName() {
    return $('~Bed 1 number');
  }
  get rent() {
    return $('android=new UiSelector().text("Rent (₹)")');
  }
  get addRoomButton() {
    return $('android=new UiSelector().text("Add Room").instance(1)');
  }
  get Success() {
    return $('android=new UiSelector().text("OK")');
  }
}
export default new AddRoomScreen();
