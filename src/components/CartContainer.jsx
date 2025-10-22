import React from "react";
import "./CartContainer.css";
import { useContext } from "react";
import cartContext from "../context/cartContext";

function CartContainer() {
  const { cart, removeFromCart, clearCart, getTotalItems, getTotalPrice } =
    useContext(cartContext);

  return (
    <div className="cart-container">
      <h2>Tu Carrito</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
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
        </>
      )}
      {cart.length > 0 && (
        <div className="cart-actions">
          <button onClick={clearCart}>Vaciar Carrito</button>
        </div>
      )}
    </div>
  );
}

export default CartContainer;
