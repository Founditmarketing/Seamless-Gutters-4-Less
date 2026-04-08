import { MapContainer, TileLayer, Circle, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

// Fix for default marker icons in Leaflet with React
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const CENTER: [number, number] = [47.4829, -122.2170]; // Renton/Tukwila area
const RADIUS = 75000; // 75km in meters

function MapViewHandler({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  
  useEffect(() => {
    map.flyTo(center, zoom, {
      duration: 1.5,
      easeLinearity: 0.25
    });
  }, [center, zoom, map]);

  return null;
}

interface ServiceMapProps {
  view?: {
    center: [number, number];
    zoom: number;
  };
}

export default function ServiceMap({ view }: ServiceMapProps) {
  const currentCenter = view?.center || CENTER;
  const currentZoom = view?.zoom || 8;

  return (
    <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-0">
      <MapContainer 
        center={CENTER} 
        zoom={8} 
        scrollWheelZoom={false} 
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapViewHandler center={currentCenter} zoom={currentZoom} />
        <Circle
          center={CENTER}
          radius={RADIUS}
          pathOptions={{ 
            fillColor: "#6BAE45", 
            color: "#1874B1", 
            weight: 2, 
            fillOpacity: 0.2 
          }}
        />
        <Marker position={CENTER}>
          <Popup>
            <div className="text-center">
              <strong className="text-primary">Seamless Gutters 4 Less</strong><br />
              Serving the entire Puget Sound region.
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
