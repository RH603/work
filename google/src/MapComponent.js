import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import cat from "./cat.jpg";

const MapComponent = () => {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState(null);

  const center = coordinates || { lat: 36.3398175, lng: 127.3940486 };

  function convertAddress() {
    const geocoder = new window.google.maps.Geocoder();
    const address = document.getElementById("addressInput").value;

    geocoder.geocode({ address: address }, function (results, status) {
      if (status === "OK") {
        const latitude = results[0].geometry.location.lat();
        const longitude = results[0].geometry.location.lng();

        setCoordinates({ lat: latitude, lng: longitude });

        // const resultDiv = document.getElementById("result");
        // resultDiv.innerHTML = "위도: " + latitude + "<br>경도: " + longitude;
      } else {
        alert("지오코딩이 실패했습니다: " + status);
      }
    });
  }

  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyCi36s8SAwoRdUQLvVgdvbGrzx84AcMNn4">
        <GoogleMap
          center={center}
          zoom={16}
          mapContainerStyle={{ width: "100%", height: "400px" }}
        >
          <Marker
            position={center}
            icon={{
              url : cat,
              scaledSize: new window.google.maps.Size(30, 30),
            }}
            onClick={()=>{
              alert("클릭")
            }}
          />
        </GoogleMap>
      </LoadScript>
      <input
        id="addressInput"
        placeholder="지역을 입력해주세요"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={convertAddress}>클릭</button>
      {/* <div id="result"></div> */}
    </>
  );
};

export default MapComponent;
