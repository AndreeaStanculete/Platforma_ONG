
import NavBar from "./NavBar";
import { useState } from "react";
import Footer from "./Footer";
import "../Styles/Donate.css";
import "../Styles/Main.css";
import { useSearchParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Map from "./Map";
import GoogleMapReact from 'google-map-react';
import Geocode from "react-geocode";

function Donate2() {

    const [isLoggedin, setisLoggedin] = useState(false);

    useEffect(() => {
        fetch(`/api/is`)
        .then(res => res.json())
        .then(
          (result) => {
            if(result.is.is === true){
                setisLoggedin(true);
            }
            else setisLoggedin(false);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setisLoggedin(false);
          }
        )
    }, [])

    const location = useLocation();
    console.log(location.state.loc);
    //console.log(location.state.ongs);

    const city = location.state.ongs[0]["Localitate"];

    // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
    Geocode.setApiKey("AIzaSyDkEaGS1YK2_pMC2Y9vypWs-sNewq1v3b4");

    // set response language. Defaults to english.
    Geocode.setLanguage("ro");

    // set response region. Its optional.
    // A Geocoding request with region=es (Spain) will return the Spanish city.
    Geocode.setRegion("ro");

    // set location_type filter . Its optional.
    // google geocoder returns more that one address for given lat/lng.
    // In some case we need one address as response for which google itself provides a location_type filter.
    // So we can easily parse the result for fetching address components
    // ROOFTOP, RANGE_INTERPOLATED, GEOMETRIC_CENTER, APPROXIMATE are the accepted values.
    // And according to the below google docs in description, ROOFTOP param returns the most accurate result.
    Geocode.setLocationType("ROOFTOP");

    // Get latitude & longitude from address.

    const locationPin = {
        nume: city,
        lat: 0,
        lng: 0,
      }

    Geocode.fromAddress(city).then(
        (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        locationPin.lat = lat;
        locationPin.lng = lng;
        },
        (error) => {
        console.error(error);
        }
    );
    
    return (
        <div style={{ backgroundImage: "url(./background2.jpg)", backgroundRepeat: 'no-repeat', overflow: 'auto',
        backgroundSize: 'cover', backgroundPosition: 'center', width: '100vw', height: '100vh'}}>

             {/* <div style={{ width: '100%', height: '100%', backgroundColor: 'rgb(217, 217, 217, 0.5)'}}>  */}

                <NavBar data={isLoggedin}/>

                <div id="sectionOne" style={{marginBottom: '15px'}}>
                    <h1> ONG-uri aflate în {city} </h1>
                    {/* {(Object.keys(location.state.ongs).length > 0) ? (
                        <div>
                            <h1> ONG-uri aflate în {city} </h1>
                            <div id="lista" style={{width: '80%', margin: 'auto', marginBottom: '15px', textAlign: 'left'}}>
                                <div style={{backgroundColor: '#f2f2f2', width: '100%', height: '500px', overflow: 'auto',
                                textAlign: 'justify', padding: '10px'}}>
                                    <ol>
                                    {location.state.ongs.map(data => (
                                        <p style={{fontSize: '20px'}}>
                                            <li key={data.id}> {data.Denumire}
                                            </li>
                                        </p>
                                    ))}
                                </ol></div>
                            </div>
                        </div>
                        ) : <div> Nu au fost gasite date</div>}   */}

                    <div style={{height: "80%", width: '80%', margin: 'auto', marginTop: "20px", marginBottom: '20px'}}>
                        <Map location={location.state.loc} zoomLevel={17} ongs={location.state.ongs}/>
                    </div>      
                
                </div>

            {/* </div> */}
        </div>
    )
}

export default Donate2;