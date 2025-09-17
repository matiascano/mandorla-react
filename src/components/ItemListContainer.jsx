import "./ItemListContainer.css";
import Item from "./Item";

function ItemListContainer(props) {
  return (
    <>
      <div className="container">
        <h2>{props.greeting}</h2>
        <div className="product-list">
          <Item
            title="Alfajor"
            price={3500}
            description="Delicioso alfajor de dulce de leche."
            image="https://dcdn-us.mitiendanube.com/stores/004/290/481/products/blanco-y-ddl-430f92a328afb4f17e17228812908294-1024-1024.webp"
          />
        </div>
      </div>
    </>
  );
}

export default ItemListContainer;
