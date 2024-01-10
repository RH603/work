import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = () => {
  const center = { lat: 40.712776, lng: -74.005974 }; // 예시 중심 좌표 (뉴욕)

  return (
    <LoadScript googleMapsApiKey="AIzaSyCi36s8SAwoRdUQLvVgdvbGrzx84AcMNn4">
      <GoogleMap
        center={center}
        zoom={10}
        mapContainerStyle={{ width: '100%', height: '400px' }}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
