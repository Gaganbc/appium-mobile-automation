class AddTenantSheet {
  get sheetTitle() {
    return $('android=new UiSelector().textContains("Is this tenant already living here")');
  }
  get alreadyLivingHere() {
    return $('android=new UiSelector().textContains("Yes, already living here")');
  }
}
export default new AddTenantSheet();
