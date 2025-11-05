import React from "react";
import "./CartContainer.css";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { createOrder } from "../services/FirestoreService";
import CheckoutForm from "./CheckoutForm";
import swal from "sweetalert";

function CartContainer() {
  const { cart, removeFromCart, clearCart, getTotalItems, getTotalPrice } =
    useContext(CartContext);

  async function handleCheckout(formData) {
    const orderData = {
      buyer: formData,
      items: cart,
      totalItems: getTotalItems(),
      totalPrice: getTotalPrice(),
      date: new Date(),
    };

    const response = await createOrder(orderData);
    swal({
      title: "Gracias por tu compra!",
      text: `Tu número de orden es: ${response.id}`,
      icon: "success",
    });
    clearCart("fromCheckout");
  }

  return (
    <div className="cart-container">
      <h2>Tu Carrito</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <div className="cart-wrapper">
            <div className="left-cart">
              <h3>Productos</h3>
              <ul>
                {cart.map((item) => (
                  <li className="cartRow" key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <div className="cartData">
                      <h3>{item.title}</h3>
                      <p>Cantidad: {item.quantity}</p>
                      <p>Precio unitario: ${item.price}</p>
                    </div>
                    <div className="total">
                      <button onClick={() => removeFromCart(item.id)}>x</button>
                      <p>Total: ${item.price * item.quantity} </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="cart-summary">
                <p>Total de productos: {getTotalItems()}</p>
                <p>Precio total: ${getTotalPrice()}</p>
              </div>
              <div className="cart-actions">
                <button onClick={clearCart}>Vaciar Carrito</button>
              </div>
            </div>
            <div className="right-cart">
              <h3>Realizar Pedido</h3>
              <p>Completa el formulario para finalizar tu compra.</p>
              <CheckoutForm handleCheckout={handleCheckout} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartContainer;
