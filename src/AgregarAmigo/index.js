import React from "react";
import {ContactoContext} from "./../Context/contactoProvider";

function AgregarAmigo(){

    const abreModal=()=>{
        console.log("Si jla chavo");
    }

    return(
        <React.Fragment>
        <button onClick={abreModal}>+ Amigo</button>
        
        </React.Fragment>
    );

    

}

export default AgregarAmigo;