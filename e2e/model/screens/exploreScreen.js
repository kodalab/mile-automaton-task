import BaseScreen from '../common/baseScreen';
import selectors from '../selectors/exploreSelectors';

class ExploreScreen extends BaseScreen {

    async tapFirstProduct() {
        await element(by.label(selectors.firstProductItem)).atIndex(0).tap();
    }
}

export default new ExploreScreen();