
import { useNavigate } from 'react-router-dom';
import {  Link } from "react-router-dom";
import Popup from 'reactjs-popup';
import { useEffect, useState } from "react";
import 'reactjs-popup/dist/index.css';

import NavBar from "./NavBar";
import Footer from "./Footer";
import "../Styles/Account.css";
import "../Styles/Settings.css";

function Settings2(){

    const [isLoggedin, setisLoggedin] = useState(false);
    const [user, setUser] = useState();

    let [lista, setLista] = useState([]);

    const getUser = async e => {
        return user.email;
    }

    useEffect(() => {
        fetch(`/api/denumiri`)
        .then(res => res.json())
        .then(
          (result) => {
            if(result.is[0].is === true){
                setisLoggedin(true);
                setUser(result.who[0]);
                setLista(result.denumiri);
            } else setisLoggedin(false);
          },
          
          (error) => {
            setisLoggedin(false);
          }
        )
    }, [])

    return ( 
        <div style={{ backgroundImage: "url(./background2.jpg)", backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover', backgroundPosition: 'center', position: 'fixed', width: '100vw', height: '100vh'}}>

                <NavBar data={isLoggedin}/>

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
                            <div id="paragraph" style={{fontSize: '30px', paddingTop: '5%'}}>Abonamente: </div>
                            
                            {(lista.length > 0) ? (
                            <div>
                                <div id="lista" style={{width: '80%', margin: 'auto', marginBottom: '15px', textAlign: 'left'}}>
                                    <div style={{backgroundColor: 'white', width: '100%', height: '500px', overflow: 'auto',
                                    textAlign: 'justify', padding: '10px'}}>
                                        <ol>
                                        {lista.map(data => (
                                            <p style={{fontSize: '20px'}}>
                                                <li> {data}
                                                </li>
                                            </p>
                                        ))}
                                    </ol></div>
                                </div>
                            </div>
                            ) : <div id="paragraph" style={{fontSize: '20px', fontStyle: 'italic'}}>Momentan nu aveți locații adăugate.</div>}  
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