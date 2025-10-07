import CartWidget from "./CartWidget";
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
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/acerca">Acerca de</a>
            </li>
            <li>
              <a href="/tienda">Tienda</a>
            </li>
            <li>
              <a href="/prensa">Prensa</a>
            </li>
            <li>
              <a href="/donde-comprar">Dónde comprar</a>
            </li>
          </ul>
          <CartWidget />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
