import Login from '../model/login';
import NavBar from '../model/screens/navigationScreen';


describe('Mile Club Happy Path', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  it('should complete the end-to-end journey', async () => {
    await Login.login(process.env.TEST_USER, process.env.TEST_PASS);
    await NavBar.goToDiscoverTab();
  });
});