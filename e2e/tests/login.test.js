import Login from '../model/login';
import Navigation from '../model/Navigation';
import happyPath from './flow/happyPath';

describe('Mile Club Happy Path', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  it('should complete the end-to-end journey', async () => {
    await Login.login(process.env.TEST_USER, process.env.TEST_PASS);
    await Navigation.goToDiscover();
  });
});