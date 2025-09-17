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
          <div class="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <ul className="nav-list">
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Acerca de</a>
            </li>
            <li>
              <a href="#">Tienda</a>
            </li>
            <li>
              <a href="#">Prensa</a>
            </li>
            <li>
              <a href="#">Dónde comprar</a>
            </li>
          </ul>
          <CartWidget />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
