import React from "react";
// import GoogleMapReact from "google-map-react";
import styles from "./mapAddress.module.css";

const MapAddress = () => {

  return (
    <div className={styles.mapContainer}>
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={{ lat: 0, lng: 0 }}
        center={{ lat: 51, lng: 0 }}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
      ></GoogleMapReact> */}
      <h1>
        Aquí estará el mapa de google /
        Aquí estará el mapa de google /
        Aquí estará el mapa de google /
        Aquí estará el mapa de google /
      </h1>

    </div>
  );
};

export default MapAddress;