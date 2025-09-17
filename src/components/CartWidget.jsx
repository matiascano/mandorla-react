import "./CartWidget.css";
import canasto from "../assets/canasto.svg";

function CartWidget() {
  return (
    <>
      <div className="cart">
        <span className="cart-icon">
          <img src={canasto} alt="Cart" />
        </span>
        <span className="cart-count">1</span>
      </div>
    </>
  );
}

export default CartWidget;
