import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Contact from '../models/contact.class';


function Contactcomponents ({Contact}) {

    const [connected , setConnected] = useState(false);
    const conectado = ()=>{
        setConnected(!connected ? true : false);
    }
  return (
    <div>
        <h2>Nombre : { Contact.nombre}</h2>
        <h2>Apellido : {Contact.apellido}</h2>
        <h2>email : {Contact.email}</h2>
        <h2>connected : {Contact.connected ? 'Contacto En Línea' : "Contacto No Disponible"}</h2>
        <button onClick={conectado}>{conectado ? "conectado" : "desconectado"}</button>
    </div>
  )
}

Contactcomponents.propTypes = {
    Contactcomponents: PropTypes.instanceOf(Contact)
}

export default Contactcomponents;
