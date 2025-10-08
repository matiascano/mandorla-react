import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getProductById } from "../services/productService";

function ItemDetailContainer() {
  const { id } = useParams();
  const itemId = id;
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(itemId);
  useEffect(() => {
    setLoading(true);

    getProductById(itemId)
      .then((data) => {
        setItem(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [itemId]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!item) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
}

export default ItemDetailContainer;
