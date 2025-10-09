import { Link } from "react-router-dom";
import "./Item.css";
import ItemCount from "./ItemCount";

function Item(props) {
  return (
    <>
      <div className="item" key={props.id}>
        <Link to={`/tienda/${props.id}`}>
          <img src={props.image} alt={props.title} className="item-image" />
          <header className="item-header">
            <span className="item-price">${props.price}</span>
            <span className="item-category">{props.category}</span>
          </header>
          <h3 className="item-name">{props.title}</h3>
          <p className="item-description">{props.description}</p>
        </Link>
        <ItemCount
          stock={props.stock}
          initial={0}
          onAdd={(count) => console.log(`Added ${count} items to cart`)}
        />
      </div>
    </>
  );
}
export default Item;
