import React from 'react'
import GoogleMapReact from 'google-map-react';
import '../Styles//map.css';
import { FaHome } from 'react-icons/fa';
import Popup from 'reactjs-popup';

 const LocationPin = ({ text }) => (
   <div className="pin">
     <FaHome size='50px'/>
     <p className="pin-text">{text}</p>
   </div>
 )

 const defaultLoc = {
  address: "Bulevardul Vasile Pârvan 4, Timișoara 300223",
  lat: 45.7473307,
  lng: 21.2313235,
}

const Map = ({ location, zoomLevel }) => (
    <div className="map">
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={defaultLoc}
          defaultZoom={zoomLevel}
        >
          {/* <button style={{background: 'none', color: 'none', border: 'none', padding: '0',font: 'inherit', cursor: 'pointer', outline: 'none'}}>
              { <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={''}
            /> }
          </button> */}
        <div>
          {/* { <Popup style={{display: 'flex'}} trigger={<button style={{background: 'none', color: 'none', border: 'none', padding: '0',font: 'inherit', 
                cursor: 'pointer', outline: 'none'}}>
                                  { <LocationPin
                                lat={location.lat}
                                lng={location.lng}
                                text={''}
                                /> }
                        </button>}>
                  <div> { <LocationPin
                                lat={location.lat}
                                lng={location.lng}
                                text={'Popup content here'}
                                /> }</div>
            </Popup> } */}
        </div>
          

        </GoogleMapReact>
      </div>
    </div>
  )

  export default Map;


