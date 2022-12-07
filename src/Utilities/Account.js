
import { useNavigate } from 'react-router-dom';
import {  Link } from "react-router-dom";

import NavBar from "./NavBar";
import Footer from "./Footer";
import "../Styles/Account.css";

function Account(){

    const navigate = useNavigate();

    const handleClick = async e => {
	    //<NavBar data={info} />;
        e.preventDefault();
        navigate("/settings");
      }

    return ( 
        <div style={{ backgroundImage: "url(./background2.jpg)", backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover', backgroundPosition: 'center', position: 'fixed', width: '100vw', height: '100vh'}}>

                <NavBar data={"Andreea"}/>

                <div className="card">
                    <div id="content2">
                        <img className="img2" src="../avatar2.svg" alt="SVG avatar"></img>
                        <h2>Username</h2>

                        <table>
                            <tr>
                                <td style={{textAlign: 'right'}}><div id="paragraph">Email: </div></td>
                                <td style={{paddingLeft: '2%'}}><div id="paragraph">name@gmail.com</div></td>
                            </tr>
                            <tr>
                                <td style={{textAlign: 'right'}}><div id="paragraph">Locație: </div></td>
                                <td style={{paddingLeft: '2%'}}><div id="paragraph">Timișoara</div></td>
                            </tr>
                        </table>

                        <form onSubmit={handleClick}>
                            <button onSubmit={handleClick}>Edit my profile</button>
                        </form>
                        
                        
                    </div>

                    <div id="content3">
                        <div id="paragraph" style={{fontSize: '30px', paddingTop: '5%'}}>Locațiile abonate: </div>
                        <div id="paragraph" style={{fontSize: '20px', fontStyle: 'italic'}}>Momenta nu aveți locații adăugate.</div>
                    </div>



                </div>

            <Footer/>

        </div>

    );
}

export default Account;