import "./ItemListContainer.css";
import Item from "./Item";
import productos from "../data/data";

function ItemListContainer(props) {
  return (
    <>
      <div className="container">
        <h2>{props.greeting}</h2>
        <div className="product-list">
          {productos.map((prod) => (
            <Item
              key={prod.id}
              title={prod.title}
              category={prod.category}
              price={prod.price}
              description={prod.description}
              image={prod.image}
              stock={prod.stock}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ItemListContainer;
