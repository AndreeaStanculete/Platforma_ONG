
import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../Styles/Main.css";
import { useNavigate } from "react-router-dom";

const Main = (email) => {

    const navigate = useNavigate();
    const open = async () => {
        let Orase = [];
        
        try {
            const response = await fetch(`/api/localitati`, {
                method: 'GET'
            });
        
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
        
            const result = await response.json();
            // console.log(result);
        
            // for(var i in result["ongs"]) {
            //     for(var key in result["ongs"][i]) {
            //         if(result["ongs"][i][key] != null) {
            //             result["ongs"][i][key] = result["ongs"][i][key].replace(/Þ/g, 'Ț');
            //             result["ongs"][i][key] = result["ongs"][i][key].replace(/ª/g, 'Ș');
            //         }
            //     }

            //     console.log(result["ongs"][i]);
            //     ongs.push(result["ongs"][i]);
            // }

            // if(ongs.length != 0) {
                    
                     navigate( '/donate', {
                     state: { Orase: result["orase"] }
                     });
            // } else {
            //         document.getElementById("eroare").style.display="block";
            // }
        } catch (err) {
          console.log(err);
        } 
      };

    return ( 
        <div style={{ backgroundImage: "url(./background2.jpg)", backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover', backgroundPosition: 'center', position: 'fixed', width: '100vw', height: '100vh'}}>

                <NavBar data={email}/>

                <div id="sectionOne">
                    <h1>Donează azi pentru un viitor mai bun.</h1>
                    <div className="sectionTwo">
                        <p>Toate lucrurile de care nu mai ai nevoie ar trebui să își găsească o casă nouă.</p>
                    </div>
                    <div className="sectionThree">
                        <button className="donateNow" onClick={open}>donează acum </button>
                        <img src="../gift.svg" alt="SVG of girl"></img>
                    </div>

                </div>  

                


            <Footer/>

        </div>

    );
}

export default Main;