import { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";
import { getArticulosPrensa } from "../services/Services";
import ArticuloPrensa from "./ArticuloPrensa";
import "./ArticuloPrensaListContainer.css";

function ArticuloPrensaListContainer() {
  const [articulos, setArticulos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getArticulosPrensa()
      .then((data) => {
        setArticulos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setArticulos([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <BounceLoader />
      </div>
    );
  }

  if (articulos.length === 0) {
    return <p>No se encontraron artículos de prensa.</p>;
  }

  return (
    <>
      <h2>Artículos de Prensa</h2>
      <div className="articulo-prensa-list">
        {articulos.map((articulo) => (
          <ArticuloPrensa
            key={articulo.id}
            id={articulo.id}
            titulo={articulo.titulo}
            medio={articulo.medio}
            contenido={articulo.contenido}
            fecha={articulo.fecha}
            imagen={articulo.imagen}
            link={articulo.link}
          />
        ))}
      </div>
    </>
  );
}

export default ArticuloPrensaListContainer;
