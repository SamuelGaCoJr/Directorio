import React from "react";
import './ModalAmigo.css';
import {ContactoContext} from "./../Context/contactoProvider";

function ModalAmigo() {
    
    let {setModal, AgregarAmigo} = React.useContext(ContactoContext);
    let [amigui, setAmigui]=React.useState({
        nombre:"",
        correo:"",
        telefono:""
    });
    const modalCancelar=(event)=>{
        event.preventDefault();
        setModal(false);
    }

    const modalGuardar=(event)=>{
        event.preventDefault();
        AgregarAmigo(amigui);
        setModal(false);
        }

    const onChangeNombre=(event)=>{
        let amiguiTemporal=amigui;
        amiguiTemporal.nombre=event.target.value;
        setAmigui(amiguiTemporal);
    }

    const onChangeCorreo=(event)=>{
        let amiguiTemporal=amigui;
        amiguiTemporal.correo=event.target.value;
        setAmigui(amiguiTemporal);
    }

    const onChangeTelefono=(event)=>{
        let amiguiTemporal=amigui;
        amiguiTemporal.telefono=event.target.value;
        setAmigui(amiguiTemporal);
    }

    return(
        <div className="modal">
            <h1 className="modal_header">Nuevo Amigo</h1>
            <form className="modal_formulario">
                <input typeof="text" placeholder="Nombre" onChange={onChangeNombre} />
                <input typeof="text" placeholder="Correo" onChange={onChangeCorreo} />
                <input typeof="text" placeholder="Celular" onChange={onChangeTelefono} />
                <button type="submit" onClick={modalGuardar}>Guardar</button>
                <button onClick={modalCancelar}>Cancelar</button>
            </form>
        </div>
        
    )
}

export default ModalAmigo;