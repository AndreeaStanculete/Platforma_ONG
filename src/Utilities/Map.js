import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react';
import '../Styles//map.css';
import Marker from './Marker';
import { FaHome } from 'react-icons/fa';
import Popup from 'reactjs-popup';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';
import { FaMapPin } from 'react-icons/fa';
import Geocode from "react-geocode";
import axios from "axios";


const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    {/* <p className="pin-text">{text}</p> */}
  </div>
)

//////////////////////////////////////////

const handleClick = (e) => {
  e.preventDefault();
  console.log("ok");

      // try {
      //     const response = await fetch(`/api/conectare?Email=${keywd1}&Pass=${keywd2}`, {
      //         method: 'GET'
      //     });
      
      //     if (!response.ok) {
      //         throw new Error(`Error! status: ${response.status}`);
      //     }
      
      //     const result = await response.json();
      //     if(result.data.length != 0){
      //         changeData(e);
      //     }

      //     e.preventDefault();
      //     return false;
      
      // } catch (err) {
      //   console.log(err);
      // }  

}

Geocode.setApiKey("AIzaSyDkEaGS1YK2_pMC2Y9vypWs-sNewq1v3b4");
Geocode.setLanguage("ro");
Geocode.setRegion("ro");
Geocode.setLocationType("ROOFTOP");

const getMarker = (map, maps, location, denumire) => {
  const infoWindow = new maps.InfoWindow();
  let marker = new maps.Marker({
    position: location,
    map,
    title: denumire,
  });

  let buttonName = 'subscribe';
  let contentString = "<div>" + "<form method=\"POST\" action=\"./send_mail\"><input style='display:none;' name='ONG' value=\"" + marker.getTitle() + "\"></input><button type=\"submit\">" + buttonName + "</button>" +"</form></div>";

  marker.addListener("click", () => {
    infoWindow.close();
    infoWindow.setContent('<div> <h3>'+ marker.getTitle() + '</h3></div> ' + contentString);
    infoWindow.open(marker.getMap(), marker);
  });

  maps.event.addListener(infoWindow, () => {
    const someButton = document.getElementById('btn-click');
    if (someButton) {
      maps.listener.addDomListener(someButton, 'click',    
      () => {
              console.log("ok");
            })
    }
   });
}

const renderMarkers = (map, maps, loc, ongs) => {
  for(let i = 0; i < loc.length; i++) {
    getMarker(map,maps, loc[i], ongs[i]["Denumire"]);
  }
}

const Map = ({ location, zoomLevel, ongs}) => (

  <div className="map">
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDkEaGS1YK2_pMC2Y9vypWs-sNewq1v3b4' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
        onGoogleApiLoaded={({map, maps}) => {
          var arr = [];
          for(var i=0; i < ongs.length; i++){ 
            var adresaONG = location["nume"] + " " + ongs[i]["Adresa"];

            Geocode.fromAddress(adresaONG).then((response) => {
              const { lat, lng } = response.results[0].geometry.location;
                let locationONG = {
                  lat: 0,
                  lng: 0,
                }
                locationONG.lat = lat;
                locationONG.lng = lng;
                arr.push(locationONG);
                return renderMarkers(map, maps, arr, ongs);
              },
              (error) => {
                console.error(error);
            })
          }
        }}
        yesIWantToUseGoogleMapApiInternals
      >

      </GoogleMapReact>
    </div>
  </div>
)

  export default Map;


