import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import Item from "./Item";
import productos from "../data/data";

function ItemListContainer(props) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchItems = () => {
      setTimeout(() => {
        if (categoryId) {
          const filteredItems = productos.filter(
            (prod) => prod.categoryId === categoryId
          );
          setItems(filteredItems);
        } else {
          setItems(productos);
        }
        setLoading(false);
      }, 1000);
    };

    fetchItems();
  }, [categoryId]);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  if (items.length === 0) {
    return <p>No se encontraron productos.</p>;
  }

  return (
    <>
      <div className="container">
        <h2>{props.greeting}</h2>
        <div className="product-list">
          {items.map((prod) => (
            <Item
              key={prod.id}
              id={prod.id}
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
