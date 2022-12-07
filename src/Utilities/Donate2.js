
import NavBar from "./NavBar";
import { useState } from "react";
import Footer from "./Footer";
import "../Styles/Donate.css";
import "../Styles/Main.css";
import { useSearchParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Map from "./Map";


function Donate2() {

    const location = useLocation();
    console.log(location.state.ongs);

    const city = location.state.ongs[0]["Localitate"];

    // const [searchParams] = useSearchParams();
    console.log(location.state.loc);
    
    return (
        <div style={{ backgroundImage: "url(./background2.jpg)", backgroundRepeat: 'no-repeat', overflow: 'auto',
        backgroundSize: 'cover', backgroundPosition: 'center', width: '100vw', height: '100vh'}}>

             {/* <div style={{ width: '100%', height: '100%', backgroundColor: 'rgb(217, 217, 217, 0.5)'}}>  */}

                <NavBar data={"Andreea"}/>
                    <div id="sectionOne" style={{marginBottom: '15px'}}>
                        {(Object.keys(location.state.ongs).length > 0) ? (
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
                            ) : <div> Nu au fost gasite date</div>}  

                        <div style={{width: '80%', height: '420px', margin: 'auto', marginBottom: '10px'}}>
                            <Map location={location.state.loc} zoomLevel={17} />
                        </div>      
                    
                    </div>

            {/* </div> */}
        </div>
    )
}

export default Donate2;