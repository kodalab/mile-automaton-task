import selectors from '../selectors/globalSelectors';

export default class BaseScreen {

  async closeJustLandedModalIfPresent() {
    try {
      await waitFor(element(by.id(selectors.justLandedCloseButton)))
        .toBeVisible()
        .withTimeout(2000);
      await element(by.id(selectors.justLandedCloseButton)).tap();
    } catch (error) {
      console.log('Just Landed modal not present, skipping...');
    }
  }

  async waitForLoadingToFinish() {
    await waitFor(this.loader).not.toBeVisible().withTimeout(5000);
  }

  async dismissKeyboard() {
    // A common helper since iOS keyboards love to block buttons
    await element(by.id('root_view')).tap({ x: 0, y: 0 }); 
  }
}
