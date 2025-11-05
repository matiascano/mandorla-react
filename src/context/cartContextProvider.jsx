import { useState, useEffect } from "react";
import { CartContext } from "./cartContext";
import toast from "react-hot-toast";
import swal from "sweetalert";

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(item) {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, item]);
    }
    toast.success(`${item.quantity} ${item.title} agregado(s) al carrito`);
  }

  function removeFromCart(itemId) {
    swal({
      title: "¿Estás seguro?",
      text: "Una vez eliminado, deberas volver a agregarlo.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
        toast.error("Producto eliminado del carrito");
      }
    });
  }

  function clearCart(props) {
    if (props === "fromCheckout") {
      setCart([]);
      return;
    }
    swal({
      title: "¿Estás seguro?",
      text: "Una vez vaciado, deberas volver a agregar los productos.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        setCart([]);
        toast.error("Carrito vaciado");
      }
    });
  }

  function getTotalItems() {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }

  function getTotalPrice() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  return (
    <CartContext.Provider
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
    </CartContext.Provider>
  );
}
export default CartContext;
