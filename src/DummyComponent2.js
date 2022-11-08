import React from 'react';
import { ContactoContext } from './Context/contactoProvider';



function DummyComponent2() {
    const {setDummy}=React.useContext(ContactoContext);
    const miFuncion=()=>{
        setDummy("SAAM");
    }

    return(
        <React.Fragment>
            <button onClick={miFuncion}>Picale AQUI</button>
        </React.Fragment>
    )
}

export default DummyComponent2;