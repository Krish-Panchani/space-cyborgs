// src/components/MapComponent.jsx
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, FeatureGroup, useMap, useMapEvents } from 'react-leaflet'; // Import useMapEvents here
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import { EditControl } from 'react-leaflet-draw';
import L from 'leaflet';

const MapComponent = ({ currentLocation, setCoordinates, setPolygonDetails }) => {
  const [markerPosition, setMarkerPosition] = useState(currentLocation);
  
  // Custom hook to set the map view to the current location
  const SetViewOnCurrentLocation = () => {
    const map = useMap();

    useEffect(() => {
      // Set the map view to the current location on component mount
      map.setView(currentLocation, 13);
    }, [currentLocation]); // Update view when currentLocation changes

    return null; // Required return
  };

  // Handle clicks on the map
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
    const { layerType, layer } = e;

    if (layerType === 'polygon') {
      const coordinates = layer.getLatLngs()[0]; // Get the latlngs of the polygon
      setPolygonDetails(coordinates);
    } else if (layerType === 'rectangle') {
      const bounds = layer.getBounds(); // Get the bounds of the rectangle
      const coordinates = [
        [bounds.getNorthEast().lat, bounds.getNorthEast().lng],
        [bounds.getSouthWest().lat, bounds.getSouthWest().lng],
      ];
      setPolygonDetails(coordinates);
    }
    // You can add more handling for other types if needed
  };

  useEffect(() => {
    // Set the marker position to the current location
    setMarkerPosition(currentLocation);
  }, [currentLocation]);

  return (
    <div className='border-4 border-red-500 rounded-xl p-2'>
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
      <SetViewOnCurrentLocation /> {/* Call the custom hook to set the view */}
      <MapClickHandler /> {/* Call the click handler */}
      <FeatureGroup>
        <EditControl
          position="topright"
          onCreated={handlePolygonDraw}
          draw={{
            polygon: true,
            rectangle: true, // Enable rectangle drawing
            circle: false,
            polyline: false,
            marker: false,
          }}
        />
      </FeatureGroup>
    </MapContainer>
    </div>
  );
};

export default MapComponent;
