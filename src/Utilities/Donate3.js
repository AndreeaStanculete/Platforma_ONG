
import NavBar from "./NavBar";
import { useState } from "react";
import Footer from "./Footer";
import Map from "./Map";
import "../Styles/Donate.css";
import "../Styles/Main.css";
import { useSearchParams, useLocation } from "react-router-dom";
import { useEffect } from "react";


function Donate3() {

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

    // const location = useLocation();
    // console.log(location.state.ongs);

    // const city = location.state.ongs[0]["Localitate"];


    // const [searchParams] = useSearchParams();
    // console.log(searchParams.get("ongs"));
    
    const location = {
        address: "Bulevardul Vasile Pârvan 4, Timișoara 300223",
        lat: 45.7473307,
        lng: 21.2313235,
      }

    return (
        <div style={{ backgroundImage: "url(./background.jpg)", backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover', backgroundPosition: 'center', position: 'fixed', width: '100vw', height: '100vh'}}>

            <div style={{position: 'fixed', width: '100vw', height: '100vh', backgroundColor: 'rgb(217, 217, 217, 0.5)'}}>

                <NavBar data={isLoggedin}/>
                    <div id="sectionOne">
                        <h1>Lista cu ONG-uri</h1>
                        <div style={{width: '80%', height: '420px', marginBottom: '10px'}}>
                            <Map location={location} zoomLevel={17} />
                        </div>
                    
                    </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Donate3;