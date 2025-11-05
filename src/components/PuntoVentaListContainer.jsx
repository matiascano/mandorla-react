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

  const positionDefault = [-38.0055, -57.5426]; // centro de Mar del Plata

  return (
    <div className="punto-venta-list-container">
      <h2>Puntos de Venta</h2>
      <MapContainer
        center={positionDefault}
        zoom={12}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
