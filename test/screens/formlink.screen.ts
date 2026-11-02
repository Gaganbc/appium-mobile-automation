class FormLinkScreen {
  get generateFormLink() {
    return $('android=new UiSelector().textContains("Generate Form Link")');
  }
  get copyCode() {
    return $('~Copy code');
  }
  get shareButton() {
    return $('~Share');
  }
}
export default new FormLinkScreen();
