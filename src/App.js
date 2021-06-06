import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar, Cart, Checkout, PizzaOffers, PizzaMenu } from './components';
import Home from './pages/Home';
import Menu from './pages/Menu';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  // const [mobileOpen, setMobileOpen] = React.useState(false);
  // const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState({});
  // const [order, setOrder] = useState({});
  // const [errorMessage, setErrorMessage] = useState('');

  // const fetchProducts = async () => {
  //   const { data } = await commerce.products.list();

  //   setProducts(data);
  // };

  // const fetchCart = async () => {
  //   setCart(await commerce.cart.retrieve());
  // };

  // const handleAddToCart = async (productId, quantity) => {
  //   const item = await commerce.cart.add(productId, quantity);

  //   setCart(item.cart);
  // };

  // const handleUpdateCartQty = async (lineItemId, quantity) => {
  //   const response = await commerce.cart.update(lineItemId, { quantity });

  //   setCart(response.cart);
  // };

  // const handleRemoveFromCart = async (lineItemId) => {
  //   const response = await commerce.cart.remove(lineItemId);

  //   setCart(response.cart);
  // };

  // const handleEmptyCart = async () => {
  //   const response = await commerce.cart.empty();

  //   setCart(response.cart);
  // };

  // const refreshCart = async () => {
  //   const newCart = await commerce.cart.refresh();

  //   setCart(newCart);
  // };

  // const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
  //   try {
  //     const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

  //     setOrder(incomingOrder);

  //     refreshCart();
  //   } catch (error) {
  //     setErrorMessage(error.data.error.message);
  //   }
  // };

  // useEffect(() => {
  //   fetchProducts();
  //   fetchCart();
  // }, []);

  // const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <>
      <GlobalStyle />

      <Router>
        {/* <div style={{ display: 'flex' }}> */}
        <Navbar />
        {/* <CssBaseline /> */}

        <Switch>
          <Route exact path='/' component={Home} />

          <Route path='/menu' component={Menu} />

          <Route path='/cart' component={Cart} />

          <Route path='/checkout' component={Checkout} />
        </Switch>
        {/* </div> */}
      </Router>
    </>
  );
};

export default App;
