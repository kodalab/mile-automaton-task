import BaseScreen from '../common/baseScreen';
import selectors from '../selectors/homeSelectors';

class HomeScreen extends BaseScreen {

 async navigateIntoMensNewIn () {  
    let isVisible = false;
    while (!isVisible) {
      try {
        await expect(element(by.label(selectors.mensNewInHero)).atIndex(0)).toBeVisible();
        isVisible = true;
      } catch (e) {
        await element(by.label(selectors.galleryDeptHero)).atIndex(0).swipe('left', 'fast');
      }
    }
    
    await element(by.label(selectors.mensNewInHero)).atIndex(0).tap();
}

}

export default new HomeScreen();