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

function Map() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAPoibhxlLUpR_cU8Qmt9sZrKWIExEbitk">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;