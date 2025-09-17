import CartWidget from "./CartWidget";
import mandorlaLogo from "../assets/mandorla.webp";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <header>
        <div className="left">
          <img src={mandorlaLogo} alt="Mandorla Logo" />
        </div>
        <div className="right">
          <nav>
            <a href="#inicio">Inicio</a>
            <a href="#historia">Historia</a>
            <a href="#tienda">Tienda</a>
            <a href="#prensa">Prensa</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <CartWidget />
        </div>
      </header>
    </>
  );
}

export default NavBar;
