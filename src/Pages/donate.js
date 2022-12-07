import React from 'react';

import Donate from "../Utilities/Donate";


function donate(props){
    return ( 
        <React.Fragment>
            <Donate data={props.data}/>
        </React.Fragment>
    );
}

export default donate;