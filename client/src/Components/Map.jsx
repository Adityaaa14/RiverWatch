import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import LiveData from "./LiveData";
import OverallData from "./OverallData";
import "./Map.css";

// Define the custom marker icon
const getMarkerIcon = (category) => {
  const color = {
    'A': 'green',
    'B': 'yellow',
    'C': 'blue',
    'D': 'orange',
    'E': 'red'
  }[category];

  return L.icon({
    iconUrl: `http://maps.google.com/mapfiles/ms/icons/${color}-dot.png`,
    iconSize: [40, 40],
  });
};
const MapUpdater = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center);
  }, [center, map]);

  return null;
};


const Map = (props) => {
  const [markerData, setMarkerData] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [selectedRiver, setSelectedRiver] = useState(null);

  useEffect(() => {
    const fetchMarkers = async () => {
      try {
        const res = await fetch(`https://river-watch-api.vercel.app/api/sensors/getallsensors`);
        const data = await res.json();
        console.log(data);
        if (res.ok) {
          setMarkers(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchMarkers();
  }, []);




  const handleMarkerClick = (marker) => {
    setSelectedRiver(marker.riverName);
    setMarkerData(marker);
  };
  console.log(props.center)

  return (
    <div className="myDiv">
      <MapContainer center={props.center} zoom={10} style={{ width: "100%", height: "50vh" }}>
      <MapUpdater center={props.center} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={[marker.latitude, marker.longitude]}
            icon={getMarkerIcon(marker.sensorData.Category)}
            eventHandlers={{
              click: () => {
                handleMarkerClick(marker);
              },
            }}
          >
            {marker.riverName === selectedRiver && (
              <Popup>
                <h3>Category: {marker.sensorData.Category}</h3>
              </Popup>
            )}
          </Marker>
        ))}
      </MapContainer>
      {markerData && <LiveData sensor={markerData} />}
      {markers && <OverallData sensors={markers} />}
    </div>
  );
};

export default Map;
