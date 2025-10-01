import ItemCount from "./ItemCount";
import "./ItemDetail.css";

function ItemDetail({ item }) {
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
            onAdd={(count) =>
              console.log(`Agregaste ${count} items al carrito`)
            }
          />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
