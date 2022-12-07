import React from 'react';

import Donate2 from "../Utilities/Donate2";

function donate2(props){
    return ( 
        <React.Fragment>
            <Donate2 data={props.data}/>
        </React.Fragment>
    );
}

export default donate2;