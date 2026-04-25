import navigationSelectors from '../selectors/navigationSelectors';
import BaseScreen from '../common/baseScreen';

const { HOME_TAB, DISCOVER_TAB, CART_TAB, FAVORITES_TAB, ACCOUNT_TAB } = navigationSelectors;
  
class Navigation extends BaseScreen {
  async goToHomeTab() {
      await element(by.id(HOME_TAB)).tap();
    }

    async goToDiscoverTab() {
      await element(by.id(DISCOVER_TAB)).tap();
    }

    async goToCartTab() {
      await element(by.id(CART_TAB)).tap();
    }

    async goToFavoritesTab() {
      await element(by.id(FAVORITES_TAB)).tap();
    }

    async goToAccountTab() {
      await element(by.id(ACCOUNT_TAB)).tap();
    }
  }
  
  export default new Navigation();