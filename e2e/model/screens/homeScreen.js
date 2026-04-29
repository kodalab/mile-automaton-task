import BaseScreen from '../common/baseScreen';
import selectors from '../selectors/discoverSelectors';

class HomeScreen extends BaseScreen {

  async navigateIntoMensNewIn () {  
    await element(by.label(selectors.mensNewInCategory)).atIndex(0).tap();
  }

}

export default new HomeScreen();