import "./PuntoVenta.css";

function PuntoVenta(props) {
  return (
    <>
      <div className="punto-venta" key={props.id}>
        <h3>{props.nombre}</h3>
        <p>Dirección: {props.direccion}</p>
        <p>Teléfono: {props.telefono}</p>
        <p>Horario: {props.horario}</p>
        {props.link && (
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            Visitar sitio web
          </a>
        )}
      </div>
    </>
  );
}

export default PuntoVenta;
