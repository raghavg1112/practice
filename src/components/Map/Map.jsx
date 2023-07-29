import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import style from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { useMapEvents } from "react-leaflet";

export default function Map() {
  // const [position, setPosition] = useState(null);
  // function LocationMarker() {
  //   const map = useMapEvents({
  //     click() {
  //       map.locate();
  //     },
  //     locationfound(e) {
  //       setPosition(e.latlng);
  //       map.flyTo(e.latlng, map.getZoom());
  //     },
  //   });

  //   return position === null ? null : (
  //     <Marker position={position}>
  //       <Popup>
  //         you are at <br /> {position.lat}, {position.lng}
  //       </Popup>
  //     </Marker>
  //   );
  // }

  const [clickedCordinates, setClickedCordinates] = useState(null);

  const handleClick = (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    console.log("Clicked coordinates:", lat, lng);
    setClickedCordinates([lat, lng]);
  };

  // const map = useMapEvents({
  //   click() {
  //     handleClick();
  //   },
  // });

  function MapEvents() {
    useMapEvents({
      click: handleClick,
    });
    return null;
  }

  if (typeof window !== "undefined") {
    return (
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        className={style.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          position={clickedCordinates ? clickedCordinates : [51.505, -0.09]}
        >
          <Popup>
            You have clicked on -{" "}
            {clickedCordinates ? clickedCordinates : [51.505, -0.09]}
          </Popup>
        </Marker>

        {/* <LocationMarker /> */}
        <MapEvents />
      </MapContainer>
    );
  } else {
    return null;
  }
}
