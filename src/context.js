import React, { useState, useContext, useEffect } from 'react';
import { commerce } from './lib/commerce';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //SideBar
  const [isSidebarOpen, setSideBar] = useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const openSidebar = () => {
    setSideBar(true);
    console.log('hi true');
  };
  const closeSidebar = () => {
    setSideBar(false);
    console.log('hi false');
  };

  //Product Ecommerce fetch products

  const fetchProducts = async () => {
    const { data: productData } = await commerce.products.list();

    // const { data: categoriesData } = await commerce.categories.list();
    // const productsPerCategory = categoriesData.reduce((acc, category) => {
    //   return [
    //     ...acc,
    //     {
    //       ...category,
    //       productData: products.filter((product) =>
    //         product.categories.find((cat) => cat.id === category.id)
    //       ),
    //     },
    //   ];
    // }, []);

    // const [pizzaOffers] = productData.map((pro) => {
    //   pro.categories.find((ob) => ob.slug === 'pizza-offers');
    // });
    // console.log(pizzaOffers);
    setProducts(productData);

    // console.log(productData);
    // setProducts(productData);
    // productData.map((pro) => {
    //   let [pizzaOffer] = [
    //     pro.categories.find((ob) => ob.slug === 'pizza-offers'),
    //   ];
    //   console.log(pizzaOffer);
    //   return setProducts(pizzaOffer);
    // });
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };
  console.log(cart.line_items);
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        cart,
        fetchCart,
        handleAddToCart,
        handleUpdateCartQty,
        handleRemoveFromCart,
        handleEmptyCart,
        refreshCart,
        handleCaptureCheckout,
        handleDrawerToggle,
        mobileOpen,
        products,
        order,
        errorMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
