import "./ArticuloPrensa.css";

function ArticuloPrensa(props) {
  return (
    <>
      <div className="articulo-prensa" key={props.id}>
        <img
          src={props.imagen}
          alt={props.titulo}
          className="articulo-imagen"
        />
        <div className="articulo-contenido">
          <h3>{props.titulo}</h3>
          <p className="articulo-fecha">{props.fecha}</p>
          <p className="articulo-medio">Medio: {props.medio}</p>
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="articulo-link"
          >
            Leer artículo
          </a>
        </div>
      </div>
    </>
  );
}

export default ArticuloPrensa;
