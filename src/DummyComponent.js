import React from 'react';
import { ContactoContext } from './Context/contactoProvider';



function DummyComponent() {
    let {dummy, actualizaEdad}=React.useContext(ContactoContext);
actualizaEdad(100);
    return(
        <React.Fragment>
            <h1>{dummy}</h1>
        </React.Fragment>
    )
}   

export default DummyComponent;