
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../Styles/MyNGOs.css";

function MyNGOs(){

    return ( 
        <div style={{ backgroundImage: "url(./background.jpg)", backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover', backgroundPosition: 'center', position: 'fixed', width: '100vw', height: '100vh'}}>

            <div style={{position: 'fixed', width: '100vw', height: '100vh', backgroundColor: 'rgb(217, 217, 217, 0.5)'}}>

                <NavBar data={"-"}/>

                <div id="box2">

                    <div id="Title">
                        <h1>My NGOs</h1>

                        <div id="Content">
                            <div id="paragraph">Nature is life</div>
                            <div id="paragraph">Another NGO</div>
                            <div id="paragraph">.....</div>
                        </div>
                    </div>

                </div>
                
            </div>

            <Footer/>

        </div>

    );
}

export default MyNGOs;