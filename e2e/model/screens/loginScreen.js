import BaseScreen from '../common/baseScreen';
import selectors from '../selectors/loginSelectors';

class Login extends BaseScreen {

  async tapLoginButton() {
  await waitFor(element(by.text(selectors.loginButton))).toBeVisible().withTimeout(10000);
  await element(by.text(selectors.loginButton)).tap();
}

  async enterEmail(email) {
    await element(by.label('EMAIL')).tap();
    await element(by.value('Type your answer here')).replaceText(email);
    await element(by.label('CONTINUE')).tap();
  }

  async enterPassword(password) {
    await element(by.value('Password')).replaceText(password);
    await element(by.label('LOGIN')).tap();
  }
  
  async tapEmailLoginOption() {
    await element(by.text(selectors.emailLoginOption)).tap();
  }
  async login(email, password) { 
    await this.tapLoginButton();
    await this.enterEmail(email);
    await this.enterPassword(password);
  }
}

export default new Login();