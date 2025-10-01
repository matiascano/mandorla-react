import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import Item from "./Item";
import productos from "../data/data";

function ItemListContainer(props) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = () => {
      setTimeout(() => {
        setItems(productos);
        setLoading(false);
      }, 1000);
    };

    fetchItems();
  }, []);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <>
      <div className="container">
        <h2>{props.greeting}</h2>
        <div className="product-list">
          {items.map((prod) => (
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
