// src/components/MapComponent.js
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, FeatureGroup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import { EditControl } from 'react-leaflet-draw';
import L from 'leaflet';
import { useMapEvents } from 'react-leaflet';

const MapComponent = ({ currentLocation, setCoordinates, setPolygonDetails }) => {
  const [markerPosition, setMarkerPosition] = useState(currentLocation);

  // Function to handle clicks on the map
  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        setMarkerPosition(e.latlng);
        setCoordinates(e.latlng);
      },
    });
    return null; // Required return
  };

  // Handle polygon drawing
  const handlePolygonDraw = (e) => {
    const layer = e.layer;
    const coordinates = layer.getLatLngs()[0];
    setPolygonDetails(coordinates);
  };

  useEffect(() => {
    // Set the marker position to the current location
    setMarkerPosition(currentLocation);
  }, [currentLocation]);

  return (
    <MapContainer center={currentLocation} zoom={13} scrollWheelZoom={false} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Marker for the current location */}
      <Marker position={currentLocation} icon={L.divIcon({ className: 'custom-marker' })}>
        <Popup className="bg-gray-800 text-white">
          You are here! <br /> Latitude: {currentLocation[0]}, Longitude: {currentLocation[1]}
        </Popup>
      </Marker>
      {/* Marker for clicked position */}
      {markerPosition && (
        <Marker position={markerPosition} icon={L.divIcon({ className: 'custom-marker' })}>
          <Popup className="bg-gray-800 text-white">
            Latitude: {markerPosition.lat} <br /> Longitude: {markerPosition.lng}
          </Popup>
        </Marker>
      )}
      <MapClickHandler /> {/* Call the click handler */}
      <FeatureGroup>
        <EditControl
          position="topright"
          onCreated={handlePolygonDraw}
          draw={{
            polygon: true,
            rectangle: false,
            circle: false,
            polyline: false,
            marker: false,
          }}
        />
      </FeatureGroup>
    </MapContainer>
  );
};

export default MapComponent;
