import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import Item from "./Item";
import getData, { getProductsByCategory } from "../services/productService";

function ItemListContainer(props) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    if (categoryId) {
      getProductsByCategory(categoryId)
        .then((data) => {
          setItems(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setItems([]);
          setLoading(false);
        });
    } else {
      getData()
        .then((data) => {
          setItems(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
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
