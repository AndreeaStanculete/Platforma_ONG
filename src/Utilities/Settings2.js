
import { useNavigate } from 'react-router-dom';
import {  Link } from "react-router-dom";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import NavBar from "./NavBar";
import Footer from "./Footer";
import "../Styles/Account.css";
import "../Styles/Settings.css";

function Settings2(){

    return ( 
        <div style={{ backgroundImage: "url(./background2.jpg)", backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover', backgroundPosition: 'center', position: 'fixed', width: '100vw', height: '100vh'}}>

                <NavBar data={"-"}/>

                <div className="card">
                    <div id="content2">
                        <img className="img2" src="../avatar2.svg" alt="SVG avatar"></img>
                        <h2 style={{margin: "2px"}}>Setări</h2>
                        <div id="line" /> <br />
                        <table width={"100%"}>
                            <tr>
                                <td><div className="Options">Schimbă numele</div></td>
                            </tr>
                            <tr>
                                <td><div className="Options">Schimbă email-ul</div></td>
                            </tr>
                            <tr>
                                <td><div className="Options">Scrimbă parola</div></td>
                            </tr>
                            <tr>
                                <td><div className="Options">Șterge contul</div></td>
                            </tr>
                        </table>
                        <div id="line" />
                               
                    </div>

                    <div id="content3">
                        <div id="paragraph" style={{fontSize: '30px', paddingTop: '5%'}}>Șterge abonamente: </div>
                        <div id="paragraph" style={{fontSize: '20px', fontStyle: 'italic'}}>Momenta nu aveți locații de sters.</div>
                    </div>


                    {/* <Popup trigger={<button> Trigger</button>} position="right center">
                        <div>Popup content here !!</div>
                    </Popup> */}
                </div>

            <Footer/>

        </div>

    );
}

export default Settings2;