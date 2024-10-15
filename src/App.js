import { useState } from "react";
import ListItems from "./ListItems";
import Shop from "./Shop";
import ShopProvider from "./store1/ShopProvider";
import Cart from "./Cart";
import CartProvider from "./store1/CartProvider";


function App() {

  const [cartIsShown, setCartIsShown]=useState(false)
  const hideCartHandler=()=>{
    setCartIsShown(false);
  }
  const showCartHandler=()=>{
    setCartIsShown(true);
  }

  return (
    <CartProvider>
    <ShopProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Shop onShowCart={showCartHandler}/>
      <ListItems />
    </ShopProvider>
    </CartProvider>
  );
}

export default App;
