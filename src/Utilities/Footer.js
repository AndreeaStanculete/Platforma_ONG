import { Link } from "react-router-dom";

import "../Styles/Footer.css";

const Footer = () => {

    return ( 
        <div id="footer">

            <div style={{textAlign: 'center'}}>
                <Link to="/error" style={{fontFamily: 'Playfair Display', textDecoration: 'none', color: 'black', fontSize: '20px', textAlign: 'center'}}> Terms of Service </Link>
                |
                <Link to="/error" style={{fontFamily: 'Playfair Display', textDecoration: 'none', color: 'black', fontSize: '20px', textAlign: 'center'}}> Privacy Policy </Link>
            </div>
        </div>
    );
}

export default Footer;