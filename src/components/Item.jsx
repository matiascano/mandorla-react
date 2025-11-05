import { Link } from "react-router-dom";
import "./Item.css";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

function Item(item) {
  const { addToCart } = useContext(CartContext);
  return (
    <>
      <div className="item" key={item.id}>
        <Link to={`/tienda/${item.id}`}>
          <img src={item.image} alt={item.title} className="item-image" />
          <header className="item-header">
            <span className="item-price">${item.price}</span>
            <span className="item-category">{item.category}</span>
          </header>
          <h3 className="item-name">{item.title}</h3>
          <p className="item-description">{item.description}</p>
        </Link>
        <ItemCount
          stock={item.stock}
          initial={0}
          onAdd={(count) => addToCart({ ...item, quantity: count })}
        />
      </div>
    </>
  );
}
export default Item;
