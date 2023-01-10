
import { useNavigate } from 'react-router-dom';
import {  Link } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../Styles/Account.css";
import { useLocation } from 'react-router-dom';

function Account(){

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

    const navigate = useNavigate();

    const handleClick = async e => {
	    //<NavBar data={info} />;
        e.preventDefault();
        navigate("/settings");
      }

    if(user)
        return ( 
            <div style={{ backgroundImage: "url(./background2.jpg)", backgroundRepeat: 'no-repeat', 
            backgroundSize: 'cover', backgroundPosition: 'center', position: 'fixed', width: '100vw', height: '100vh'}}>

                    <NavBar data={isLoggedin}/>

                    <div className="card">
                        <div id="content2">
                            <img className="img2" src="../avatar2.svg" alt="SVG avatar"></img>
                            <h2>{user.username}</h2>

                            <table>
                                <tr>
                                    <td style={{textAlign: 'right'}}><div id="paragraph">Email: </div></td>
                                    <td style={{paddingLeft: '2%'}}><div id="paragraph">{user.email} </div></td>
                                </tr>
                                <tr>
                                    <td style={{textAlign: 'right'}}><div id="paragraph"></div></td>
                                    <td style={{paddingLeft: '2%'}}><div id="paragraph"></div></td>
                                </tr>
                            </table>

                            <form onSubmit={handleClick}>
                                <button onSubmit={handleClick}>Edit my profile</button>
                            </form>
                            
                            
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



                    </div>

                <Footer/>

            </div>

        );
}

export default Account;