import BaseScreen from '../common/baseScreen';
import selectors from '../selectors/cartSelectors';

class CartScreen extends BaseScreen {
// Actions
  async tapViewCartOnCartPanel() {  
    await element(by.label(selectors.cartPanelViewCart)).tap();
  }

//   Assertions
async expectProductToBeInCart() {
    await expect(element(by.label(selectors.cartProductItemName))).toBeVisible();
  }

}

export default new CartScreen();