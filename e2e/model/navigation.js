class NavigationModel {
  get emailInput() { return element(by.id('login_email')); }
  get passwordInput() { return element(by.id('login_password')); }
  get submitButton() { return element(by.id('login_button')); }

  async goToDiscover(email, password) {
    await this.submitButton.tap();
  }
}
export default new NavigationModel();