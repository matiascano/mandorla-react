import "./PuntoVenta.css";

function PuntoVenta(props) {
  return (
    <>
      <div className="punto-venta" key={props.id}>
        <h3>{props.nombre}</h3>
        <p>Dirección: {props.direccion}</p>
      </div>
    </>
  );
}

export default PuntoVenta;
