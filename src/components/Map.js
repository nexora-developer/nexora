import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px"
};

const center = {
  lat: 26.8467,
  lng: 80.9462
};

const shops = [
  {
    name: "Sharma Store",
    lat: 26.8500,
    lng: 80.9500
  },
  {
    name: "Gupta Shop",
    lat: 26.8400,
    lng: 80.9400
  },
  {
    name: "Khan Mart",
    lat: 26.8450,
    lng: 80.9550
  }
];

function Map() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAPoibhxlLUpR_cU8Qmt9sZrKWIExEbitk">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      >
        {shops.map((shop, index) => (
          <Marker
            key={index}
            position={{ lat: shop.lat, lng: shop.lng }}
            title={shop.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;