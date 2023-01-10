
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../Styles/Main.css";
import "../Styles/Login.css";
import { useNavigate } from "react-router-dom";

const Revendica = () => {

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
          (error) => {
            setisLoggedin(false);
          }
        )
    }, [])


    const navigate = useNavigate();

    const [email, setemail] = useState();
    const [numePers, setnumePers] = useState();
    const [numeONG, setnumeONG] = useState();
    const [tel, settel] = useState();

    const sendMail = (e) => {
        e.preventDefault();
    }

    return ( 
        <div style={{ backgroundImage: "url(./background2.jpg)", backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover', backgroundPosition: 'center', position: 'fixed', width: '100vw', height: '100vh'}}>

                <NavBar data={isLoggedin}/>

                <div id="sectionOne">
                    <h2>Vă rugăm să introduceți datele despre ONG-ul dumneavoastră.</h2>
                    <div style={{width: "90%"}}>
                        <form method="POST" action="./send_mail2">
                            <table style={{border: 'none', width: '90%'}}>
                                <tr>
                                    <td><label style={{width: '30%'}} for="numePers">Numele dvs.:</label></td>
                                    <td><input style={{width: "70%"}} type="text" id="numePers" name="numePers" onChange={e => setnumePers(e.target.value)} /></td>
                                </tr>
                                
                                <tr>
                                    <td><label style={{width: "30%"}} for="numeONG">Numele ONG-ului:</label></td>
                                    <td><input style={{width: "70%"}} type="text" id="numeONG" name="numeONG" onChange={e => setnumeONG(e.target.value)} /></td>
                                </tr>

                                
                                <tr>
                                    <td><label style={{width: "30%"}} for="telefon">Numar de telefon:</label></td>
                                    <td><input style={{width: "70%"}} type="text" id="tel" name="tel" onChange={e => settel(e.target.value)} /></td>
                                </tr>

                                <tr>
                                    <td><label style={{width: "30%"}} for="email">Adresa de email:</label></td>
                                    <td><input style={{width: "70%"}} type="text" id="email" name="email" onChange={e => setemail(e.target.value)} /></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><button style={{width: '65%'}} type={'submit'}> revendica acum </button></td>
                                </tr>
                            </table>
                        </form>
                    </div>


                </div>  

                


            <Footer/>

        </div>

    );
}

export default Revendica;