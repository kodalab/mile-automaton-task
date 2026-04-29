import Login from '../model/screens/loginScreen';
import HomeScreen from '../model/screens/homeScreen';
import ExploreScreen from '../model/screens/exploreScreen';
import DiscoverScreen from '../model/screens/discoverScreen';
import ProductListScreen from '../model/screens/productListScreen';
import ProductDetailsScreen from '../model/screens/productDetailsScreen';
import CartScreen from '../model/screens/cartScreen';

describe('Happy User Flow', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true, permissions: { notifications: 'YES' } });
  });

  it('user is able to add a product to the cart and view it', async () => {
    await Login.login(process.env.TEST_USER, process.env.TEST_PASS);
    await HomeScreen.navigateIntoMensNewIn();
    await ExploreScreen.tapFirstProduct();;
    await ProductDetailsScreen.addItemToCart();
    await CartScreen.tapViewCartOnCartPanel();
    await CartScreen.expectProductToBeInCart();
  });
  
});