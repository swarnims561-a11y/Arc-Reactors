import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow
});

function DeliveryMap() {

  const pickup = [26.9124, 75.7873];

  const dropoff = [26.8976, 75.8067];

  const route = [
    pickup,
    [26.9080, 75.7930],
    [26.9020, 75.8000],
    dropoff
  ];

  return (
    <div className="delivery-map">

      <MapContainer
        center={pickup}
        zoom={13}
        scrollWheelZoom={false}
        style={{
          height: "400px",
          width: "100%"
        }}
      >

        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={pickup}>
          <Popup>
            <strong>Pickup Location</strong>
            <br />
            My College Canteen
          </Popup>
        </Marker>

        <Marker position={dropoff}>
          <Popup>
            <strong>Drop-off Location</strong>
            <br />
            Hope Shelter
          </Popup>
        </Marker>

        <Polyline
          positions={route}
        />

      </MapContainer>

    </div>
  );
}

export default DeliveryMap;