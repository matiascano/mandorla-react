import { useState, useEffect } from "react";
import canasto from "../assets/canasto.svg";
import "./ItemCount.css";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);
  const [limitedStock, setLimitedStock] = useState(false);

  // Se ejecuta cuando se monta el componente o cuando cambia 'limitedStock'
  useEffect(() => {
    console.log("Component mounted or 'limitedStock' changed");
  }, [limitedStock]);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      setLimitedStock(true);
      console.log("Stock limit reached");
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setLimitedStock(false); // Resetear el estado de stock limitado al decrementar
    }
  };

  const addToCart = () => {
    onAdd(count);
    setLimitedStock(false); // Resetear el estado de stock limitado al agregar al carrito
  };

  return (
    <div className="item-count">
      <div className="controls">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
      <button onClick={addToCart}>
        {" "}
        <img src={canasto} alt=" " /> Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
