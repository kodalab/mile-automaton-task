import BaseScreen from '../common/baseScreen';
import selectors from '../selectors/productDetailsSelectors';

class ProductDetailsScreen extends BaseScreen {

  async tapOnSize() {
    await element(by.label(selectors.productSize)).tap();
  }

 async tapAddToCart() { 
    await element(by.label(selectors.addToCartBtn)).tap();
    }
  
  async addItemToCart() {
    await this.tapOnSize();
    await this.tapAddToCart();
  }
}

export default new ProductDetailsScreen();