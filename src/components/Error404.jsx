import "./Error404.css";
import { Link } from "react-router-dom";
import errorImage from "../assets/error-404.jpg";

function Error404() {
  return (
    <>
      <div className="error-container">
        <h2 className="error-title">No deberías estar aquí</h2>
        <img src={errorImage} alt="Error 404" className="error-image" />
        <p className="error-message">
          Lo sentimos, la página que estás buscando no existe.
        </p>
        <Link to="/" className="error-link">
          Volver a la página de inicio
        </Link>
      </div>
    </>
  );
}

export default Error404;
