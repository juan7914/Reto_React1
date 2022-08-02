 import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Contact from '../models/contact.class';


function Contactcomponents ( props ) {  

    const [connec , setConnec] = useState(props.connected);
    //NO ME FUNCIONA EL CAMBIO DE ESTADO
    const conectado = ()=>{
        if(!connec){
            setConnec(connec);
        }else{
        setConnec(!connec);
        }
    }
  return (
    <div>
        <h2>Nombre : { props.nombre }</h2>
        <h2>Apellido : { props.apellido }</h2>
        <h2>email : { props.email }</h2>
        <h2>connected : { props.connected  ? 'Contacto En Línea' : "Contacto No Disponible"}</h2>
        <button onClick={conectado}>{connec ? "conectado" : "desconectado"}</button>
    </div>
  )
}

Contactcomponents.propTypes = {
    Contactcomponents: PropTypes.instanceOf(Contact)
}

export default Contactcomponents;
