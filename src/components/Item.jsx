import "./Item.css";
import canasto from "../assets/canasto.svg";

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
        <button className="item-button">
          <img src={canasto} alt="Canasto" />
          Agregar al carrito
        </button>
      </div>
    </>
  );
}
export default Item;
