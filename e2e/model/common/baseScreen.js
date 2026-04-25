export default class BaseScreen {
  // Common selector or logic for all screens (e.g., a global loader)
  get loader() { return element(by.id('global_loading_indicator')); }

  async waitForLoadingToFinish() {
    await waitFor(this.loader).not.toBeVisible().withTimeout(5000);
  }

  async dismissKeyboard() {
    // A common helper since iOS keyboards love to block buttons
    await element(by.id('root_view')).tap({ x: 0, y: 0 }); 
  }
}