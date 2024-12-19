import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; 
import { Icon } from 'leaflet';  // Import Icon from leaflet
import 'leaflet/dist/leaflet.css';  // Import Leaflet styles
import "../styles/LiveMap.css";  // Ensure you have this CSS file

const LiveMap = () => {
  const [busLocations, setBusLocations] = useState([]);

  // Sample data for bus locations. This should come from your backend.
  const buses = [
    { id: 1, lat: 28.6139, lon: 77.2090, route: 'Route A', driver: 'Driver 1' },
    { id: 2, lat: 19.0760, lon: 72.8777, route: 'Route B', driver: 'Driver 2' },
    { id: 3, lat: 13.0827, lon: 80.2707, route: 'Route C', driver: 'Driver 3' },
    // Add more buses here
  ];

  useEffect(() => {
    setBusLocations(buses);
  }, []); // Empty dependency array ensures it runs only once on mount

  // Custom icon for buses using Leaflet's Icon
  const busIcon = new Icon({
    iconUrl: '/assets/driver.png',  // Path to your custom bus icon
    iconSize: [32, 32],   // Size of the icon
    iconAnchor: [16, 32], // Anchor the icon at the bottom
    popupAnchor: [0, -32], // Position popup above the icon
  });

  return (
    <div className="map-container">
      <MapContainer
        center={[20.5937, 78.9629]} // India map center coordinates
        zoom={5}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {busLocations.map((bus) => (
          <Marker
            key={bus.id}
            position={[bus.lat, bus.lon]}
            icon={busIcon}  // Set custom icon
          >
            <Popup>
              <div>
                <h4>{bus.route}</h4>
                <p>{`Driver: ${bus.driver}`}</p>
                <p>{`Location: (${bus.lat}, ${bus.lon})`}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default LiveMap;
