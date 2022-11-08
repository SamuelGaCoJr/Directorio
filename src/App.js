import React from 'react';
import './App.css';
import Busqueda from './Busqueda/Busqueda';
import Lista from './Lista/Lista';
import Contacto from './Contacto/Contacto';
import AgregarAmigo from './AgregarAmigo';
import {ContactoContext, ContactoProvider} from './Context/contactoProvider';
// import DummyComponent from './DummyComponent';
// import DummyComponent2 from './DummyComponent2';

function App() 
{ 

  // let contactos=
  // [
  //     {
  //         nombre:"Samuel",
  //         telefono:"3221325477",
  //         correo:"Samuel@gmail.com"
  //     },
  //     {
  //         nombre:"Chino",
  //         telefono:"3232221231223",
  //         correo:"Chino@gmail.com"
  //     },
  //     {
  //         nombre:"Fernando",
  //         telefono:"32223233",
  //         correo: "Fernando@gmail.com"
  //     },

  //     {
  //       nombre:"Landa",
  //       telefono:"32199191323",
  //       correo:"Landa@gmail.com"
  //   },

  // ]
  
  return(
    <ContactoProvider>
      <ContactoContext.Consumer>
        {({cantidadAmigos,
        contactosFiltro,
        borrarAmigo})=>(
          <React.Fragment>
            <div className='contenedor'>
              <h1 >Mi lista de contactos</h1>
              <h3>Tengo {cantidadAmigos} amigos</h3>
            </div>
            <Busqueda />
            <AgregarAmigo />
            <Lista> 
              { 
                contactosFiltro.map((contacto)=>{
                  return(<Contacto 
                    nombre={contacto.nombre}
                    telefono={contacto.telefono}
                    correo={contacto.correo}
                    borrarAmigo={()=>borrarAmigo(contacto.telefono)}/>)
                  })
              }
            </Lista>
            {contactosFiltro.length===0 && <h1>No tienes amigos T_T</h1>}
          </React.Fragment>
        )}
      </ContactoContext.Consumer>
    </ContactoProvider>
  );
}

export default App;


