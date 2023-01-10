
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from "react";

import NavBar from "./NavBar";
import Footer from "./Footer";
import "../Styles/Login.css";
import {  Link } from "react-router-dom";


import {FaEyeSlash, FaEye} from "react-icons/fa";

function RegisterBox(){

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
    const [hidePassword, setHidePassword] = useState(false);

    const togglePassword = () => {
      setHidePassword(!hidePassword);
    };

    const [data, setData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })


    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const SubmitForm = (e) => {
        e.preventDefault();

        if(data.password === data.confirmPassword)
        {
            axios.post('http://localhost:3000/index.php', data)
            .then(res => console.log(res.data))
            .catch(error => { console.log(error.response)});
        }
    }
    
    return ( 
        <div style={{ backgroundImage: "url(./background.jpg)", backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover', backgroundPosition: 'center', position: 'fixed', width: '100vw', height: '100vh'}}>

                <NavBar data={isLoggedin}/>

                <div id="box">
                    <h2>Register</h2>

                    <form>
                        <label>Email:</label>
                        <input id="email" name="email" onChange={handleChange} /><br/>

                        <label>Password:</label>
                        <div id="eye-parent">
                            <input type={hidePassword ? "text" : "password"} name="password" onChange={handleChange} />
                            <div id="eye" onClick={togglePassword}> {hidePassword ? <FaEyeSlash /> : <FaEye />}</div> 
                        </div>

                        <label>Confirm password:</label>
                        <div id="eye-parent">
                            <input type={hidePassword ? "text" : "password"} name="confirmPassword" onChange={handleChange} />
                            <div id="eye" onClick={togglePassword}> {hidePassword ? <FaEyeSlash /> : <FaEye />}</div> 
                        </div>

                        <button type="submit" onClick={SubmitForm}>Create account</button>
                    </form>

                    <div id = "textToCenter" style={{marginTop: "1%"}}>
                        Already have an account? <Link to="/login" style={{fontFamily: 'Playfair Display'}}>Login now!</Link>
                    </div> <br />

                </div>                

            <Footer style={{position: 'absolute', left: '0', button: '0', right: '0'}}/>
        </div>
    );
}

export default RegisterBox;