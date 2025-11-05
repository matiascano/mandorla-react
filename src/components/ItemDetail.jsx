import ItemCount from "./ItemCount";
import "./ItemDetail.css";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

function ItemDetail({ item }) {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="item-detail">
      <img src={item.image} alt={item.title} />
      <div className="content-detail">
        <div className="body">
          <h2>{item.title}</h2>
          <p>{item.category}</p>
          <p>{item.description}</p>
          <p>Precio: ${item.price}</p>
        </div>
        <div className="footer">
          <ItemCount
            stock={item.stock}
            initial={0}
            onAdd={(count) => addToCart({ ...item, quantity: count })}
          />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
