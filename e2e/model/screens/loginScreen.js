import BaseScreen from '../common/baseScreen';
import selectors from '../selectors/loginSelectors';

const { EMAIL_INPUT, PASS_INPUT, SUBMIT_BTN } = selectors;

class Login extends BaseScreen {
  async login(email, password) { 
    await element(by.id(EMAIL_INPUT)).typeText(email);
    await element(by.id(PASS_INPUT)).typeText(password);
    await this.dismissKeyboard(); 
    await element(by.id(SUBMIT_BTN)).tap();
    await this.waitForLoadingToFinish(); 
  }
}

export default new Login();