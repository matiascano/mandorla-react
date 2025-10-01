import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import productos from "../data/data";

function ItemDetailContainer({ itemId }) {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = () => {
      const foundItem = productos.find((prod) => prod.id === itemId);
      setItem(foundItem);
      setLoading(false);
    };

    fetchItem();
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
