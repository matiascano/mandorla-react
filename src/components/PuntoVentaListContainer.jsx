import "./PuntoVentaListContainer.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { getPuntosVenta } from "../services/Services";
import PuntoVenta from "./PuntoVenta";

function PuntoVentaListContainer() {
  const [puntosVenta, setPuntosVenta] = useState([]);
  const [loading, setLoading] = useState(true);
  const { regionId } = useParams();

  useEffect(() => {
    setLoading(true);

    getPuntosVenta(regionId)
      .then((data) => {
        setPuntosVenta(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setPuntosVenta([]);
        setLoading(false);
      });
  }, [regionId]);

  if (loading) {
    return (
      <div>
        <BounceLoader />
      </div>
    );
  }

  if (puntosVenta.length === 0) {
    return <p>No se encontraron puntos de venta.</p>;
  }

  return (
    <>
      <h2>Puntos de Venta</h2>
      <div className="punto-venta-list">
        {puntosVenta.map((punto) => (
          <PuntoVenta
            key={punto.id}
            nombre={punto.nombre}
            direccion={punto.direccion}
            telefono={punto.telefono}
            horario={punto.horario}
            link={punto.link}
          />
        ))}
      </div>
    </>
  );
}

export default PuntoVentaListContainer;
