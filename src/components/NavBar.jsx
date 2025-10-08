import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import mandorlaLogo from "../assets/mandorla.webp";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <nav className="nav">
        <div className="nav-container">
          <input type="checkbox" id="nav-check" />
          <div className="nav-header">
            <img src={mandorlaLogo} alt="Mandorla Logo" />
          </div>
          <div className="nav-btn">
            <label htmlFor="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <ul className="nav-list">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/acerca">Acerca de</Link>
            </li>
            <li>
              <Link to="/tienda">Tienda</Link>
            </li>

            <li>
              <Link to="/category/alfajor-blanco">Alfajor Blanco</Link>
            </li>
            <li>
              <Link to="/category/alfajor-negro">Alfajor Negro</Link>
            </li>
            <li>
              <Link to="/category/manjar">Manjar</Link>
            </li>
            <li>
              <Link to="/prensa">Prensa</Link>
            </li>
            <li>
              <Link to="/donde-comprar">Dónde comprar</Link>
            </li>
          </ul>
          <CartWidget />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
