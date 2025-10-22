import { createContext, useState } from "react";

const cartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart((prevCart) => [...prevCart, item]);
  }

  function removeFromCart(itemId) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  }

  function getTotalItems() {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }

  function getTotalPrice() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default cartContext;
