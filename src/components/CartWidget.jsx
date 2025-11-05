import "./CartWidget.css";
import canasto from "../assets/canasto.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

function CartWidget() {
  const { getTotalItems } = useContext(CartContext);
  const totalItems = getTotalItems();
  return (
    <>
      <div className="cart">
        <Link to="/cart">
          <span className="cart-icon">
            <img src={canasto} alt="Cart" />
          </span>
          <span className="cart-count">{totalItems}</span>
        </Link>
      </div>
    </>
  );
}

export default CartWidget;
