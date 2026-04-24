class LoginModel {
  get emailInput() { return element(by.id('login_email')); }
  get passwordInput() { return element(by.id('login_password')); }
  get submitButton() { return element(by.id('login_button')); }

  async login(email, password) {
    await this.emailInput.typeText(email);
    await this.passwordInput.typeText(password);
    await this.submitButton.tap();
  }
}
export default new LoginModel();