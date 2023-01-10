
import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import {  Link } from "react-router-dom";

import NavBar from "./NavBar";
import Footer from "./Footer";
import "../Styles/Login.css";

import {FaEyeSlash, FaEye} from "react-icons/fa";

import { useEffect } from "react";
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

async function loginUser(credentials) {
    return fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
}

const onSuccess = (res) => {
    console.log('success:', res);
};
const onFailure = (err) => {
    console.log('failed:', err);
};

function LoginBox({ setToken }){

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

    const navigate = useNavigate();

    const changeData = async e => {
        let keywd1 = email;

        try {
            const response = await fetch(`/api/changeL?Email=${keywd1}`, {
                method: 'GET'
            });
        
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
        
            const result = await response.json();
            e.preventDefault();
            navigate( '/', {})
  
        } catch (err) {
          console.log(err);
        } 
      };

    const clientId = '386932037035-k8v833noqjk************.apps.googleusercontent.com';

    useEffect(() => {
       const initClient = () => {
             gapi.client.init({
             clientId: clientId,
             scope: ''
           });
        };
        gapi.load('client:auth2', initClient);
    });

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };
    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const [hidePassword, setHidePassword] = useState(false);

    const togglePassword = () => {
      setHidePassword(!hidePassword);
    };

    const [email, setUserName] = useState();
    const [password, setPassword] = useState();


    const handleSubmit = async (e) => {
        e.preventDefault();

        let users = [];
        let keywd1 = email;
        let keywd2 = password;

        if(email != "" && password != "")
        {

            try {
                const response = await fetch(`/api/conectare?Email=${keywd1}&Pass=${keywd2}`, {
                    method: 'GET'
                });
            
                if (!response.ok) {
                    throw new Error(`Error! status: ${response.status}`);
                }
            
                const result = await response.json();
                if(result.data.length != 0){
                    changeData(e);
                }

                e.preventDefault();
                return false;
            
            } catch (err) {
              console.log(err);
            }  
        } else return false;
    }

    return ( 
        <div style={{ backgroundImage: "url(./background2.jpg)", backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover', backgroundPosition: 'center', position: 'fixed', width: '100vw', height: '100vh'}}>

                <NavBar data={isLoggedin}/>

                <div id="box">
                    <h2>Login</h2>

                    <form onSubmit={handleSubmit}>
                        <label for="email">Email:</label>
                        <input type="text" id="email" name="email" onChange={e => setUserName(e.target.value)} /><br/>
                        <label for="pass">Password:</label>
                        <div id="eye-parent">
                            <input type={hidePassword ? "text" : "password"} name="password" onChange={e => setPassword(e.target.value)}/>
                            <div id="eye" onClick={togglePassword}> {hidePassword ? <FaEyeSlash /> : <FaEye />}</div> 
                        </div>
                        <button>LOGIN</button>

                    </form>    



                    <div id = "line">
                        <span> OR </span>
                    </div>

                    <div id = "textToCenter">
                        Sign in with
                    </div>

                    <div>
                        <GoogleLogin
                            clientId={clientId}
                            buttonText="Google"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            render={renderProps => (
                                <button onClick={renderProps.onClick} style={{  width: "100%" , height: "50px" ,
                                backgroundColor: isHovering ? "Black" : "White",
                                fontFamily: "Kanit",
                                fontSize: "25px",
                                textAlign: "center",
                                Color: "White",
                                backgroundImage: "none",
                                border: "1px solid black",
                                borderRadius: "10px",
                                
                                    }}>Google</button>
                            )}
                            onSuccess={onSuccess}
                            onFailure={onFailure}
                            cookiePolicy={'single_host_origin'}
                            isSignedIn={true}
                        />
                    </div>

                    <div id = "textToCenter" style={{marginTop: "1%"}}>
                        Don't have an account? <Link to="/register" style={{fontFamily: 'Playfair Display'}}>Register now!</Link>
                    </div> <br />

                </div>     

        

            <Footer style={{position: 'absolute', left: '0', button: '0', right: '0'}}/>
        </div>
    );
}


export default LoginBox;