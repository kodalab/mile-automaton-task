import BaseScreen from '../common/baseScreen';
import selectors from '../selectors/productListSelectors';



class ProductListScreen extends BaseScreen {
  async navigateIntoClothingPLP() {  
    await element(by.id(selectors.clothingCategory)).scrollTo('bottom');
  }

  async tapOnFirstProduct() {
    await element(by.id(selectors.productImage)).atIndex(0).tap();
  }

  async tapOnFavouriteBtn() {
    await element(by.id(selectors.favouriteBtn)).atIndex(0).tap();
  } 


}

export default new ProductListScreen();