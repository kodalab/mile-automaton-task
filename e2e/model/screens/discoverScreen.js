import BaseScreen from '../common/baseScreen';
import selectors from '../selectors/discoverSelectors';

class DiscoverScreen extends BaseScreen {
  
  async navigateIntoClothingPLP() {  
    await element(by.id(selectors.clothingCategory)).scrollTo('bottom');
  }

}

export default new DiscoverScreen();