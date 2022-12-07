import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import 'react-dropdown/style.css';

import "../Styles/NavBar.css";
import "../Styles/DropDown.css";

function NavBar(email) {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    if (email["data"] === "Admin") {
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
                                <a href="/myNGOs">ONG-urile mele</a>
                                <a href="/help">Ajutor</a>
                                <a href="/.">Deconectare</a>
                            </div> ) : null}
                    </div>
                </li>
              </ul>
          </React.Fragment>
        )
    }
    else if (email["data"] === "Andreea") {
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
                                <a href="/.">Deconectare</a>
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
