import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import productos from "../data/data";

function ItemDetailContainer() {
  const { id } = useParams();
  const itemId = parseInt(id, 10);
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(itemId);
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
