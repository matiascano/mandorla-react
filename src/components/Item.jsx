import "./Item.css";

function Item(props) {
  return (
    <>
      <div className="item">
        <img src={props.image} alt={props.title} className="item-image" />
        <h3 className="item-name">{props.title}</h3>
        <p className="item-price">${props.price}</p>
        <p className="item-description">{props.description}</p>
        <button className="item-button">Agregar al carrito</button>
      </div>
    </>
  );
}
export default Item;
