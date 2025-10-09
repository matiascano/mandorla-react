import "./BannerCompras.css";
import canasto from "../assets/canasto.svg";

function BannerCompras() {
  return (
    <>
      <section className="banner-compras">
        <div className="banner-step step-1">
          <img src={canasto} alt="canasto" />
          <div>
            <h3>ELEGÍ LO QUE QUERES</h3>
            <p>Tentate y llená el canasto.</p>
          </div>
        </div>
        <div className="banner-step step-2">
          <img src={canasto} alt="canasto" />
          <div>
            <h3>PAGÁ COMO QUIERAS</h3>
            <p>Elegí la forma de pago.</p>
          </div>
        </div>
        <div className="banner-step step-2">
          <img src={canasto} alt="canasto" />
          <div>
            <h3>RECIBILO EN TU CASA</h3>
            <p>Entregamos en todo el país.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default BannerCompras;
