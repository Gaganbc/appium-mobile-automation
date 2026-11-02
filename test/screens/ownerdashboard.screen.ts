class OwnerDashboardScreen {
  get welcomeBack() {
    return $('android=new UiSelector().text("Welcome back")');
  }
  get rooms() {
    return $('android=new UiSelector().description("Rooms").instance(0)');
  }
  get addTenant() {
    return $('android=new UiSelector().text("Add Tenant")');
  }
}
export default new OwnerDashboardScreen();
