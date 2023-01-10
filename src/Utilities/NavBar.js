import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import 'react-dropdown/style.css';

import "../Styles/NavBar.css";
import "../Styles/DropDown.css";

function NavBar(isLoggedin) {

    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    const deconectare = async e => {
        
        try {
            const response = await fetch(`/api/decon`, {
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


    const handleOpen = () => {
        setOpen(!open);
    };

        // if (isLoggedin === true) {
        //     return (
        //     <React.Fragment>
        //         <ul>
        //             <li>
        //                 <Link to="/">Acasă</Link>
        //             </li>
        //             <li className="li">
        //                 <div className="dropdown">
        //                     <div onClick={handleOpen} className="dropbtn">Contul meu</div>
        //                     {open ? 
        //                         ( <div className="dropdown-content">
        //                             <a href="/account">Profil</a>
        //                             <a href="/myNGOs">ONG-urile mele</a>
        //                             <a href="/help">Ajutor</a>
        //                             <a href="/.">Deconectare</a>
        //                         </div> ) : null}
        //                 </div>
        //             </li>
        //         </ul>
        //     </React.Fragment>
        //     )
        // }
    //else 
    if (isLoggedin.data === true) {
      return (
        <React.Fragment>
            <ul>
                <li>
                    <Link to="/">Acasă</Link>
                </li>
                <li className="li">
                    <div className="dropdown">
                        <div onClick={handleOpen} className="dropbtn">Contul meu</div>
                        {open ? 
                            ( <div className="dropdown-content">
                                <a href="/account">Profil</a>
                                <a href="/help">Ajutor</a>
                                <a href="/." onClick={deconectare}>Deconectare</a>
                            </div> ) : null}
                    </div>
                </li>
            </ul>
        </React.Fragment>
      )
    } else {
        return (
            <React.Fragment>
                <ul>
                    <li>
                        <Link to="/">Acasă</Link>
                    </li>
                    <li className="li">
                        <Link to="/login">Conectare</Link>
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}

export default NavBar;
