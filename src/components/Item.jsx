import "./Item.css";

import ItemCount from "./ItemCount";

function Item(props) {
  return (
    <>
      <div className="item">
        <a href="#">
          <img src={props.image} alt={props.title} className="item-image" />
          <header className="item-header">
            <span className="item-price">${props.price}</span>
            <span className="item-category">{props.category}</span>
          </header>
          <h3 className="item-name">{props.title}</h3>
          <p className="item-description">{props.description}</p>
        </a>
        <ItemCount
          stock={props.stock}
          initial={1}
          onAdd={(count) => console.log(`Added ${count} items to cart`)}
        />
      </div>
    </>
  );
}
export default Item;
