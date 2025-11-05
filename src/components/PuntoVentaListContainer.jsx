import "./PuntoVentaListContainer.css";
import { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";
import { getPuntosVenta } from "../services/FirestoreService";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function PuntoVentaListContainer() {
  const [puntosVenta, setPuntosVenta] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getPuntosVenta()
      .then((data) => {
        setPuntosVenta(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setPuntosVenta([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <BounceLoader />
      </div>
    );
  }

  const positionDefault = [-38.0055, -57.5426];

  return (
    <div className="punto-venta-list-container">
      <h2>Puntos de Venta</h2>
      <MapContainer
        center={positionDefault}
        zoom={14}
        style={{ height: "800px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors Humanitarian OpenStreetMap Team"
        />

        {puntosVenta.map(
          (punto) =>
            punto.position && (
              <Marker key={punto.id} position={punto.position}>
                <Popup>
                  <strong>{punto.nombre}</strong>
                  <br />
                  {punto.direccion}
                </Popup>
              </Marker>
            )
        )}
      </MapContainer>
    </div>
  );
}

export default PuntoVentaListContainer;
