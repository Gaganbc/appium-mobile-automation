class RoomManagementScreen {
  get addRoom() {
    return $('android=new UiSelector().text("Add New Room")');
  }
  roomNumber(number: string) {
    return $(`android=new UiSelector().textContains("${number}")`);
  }
}
export default new RoomManagementScreen();
