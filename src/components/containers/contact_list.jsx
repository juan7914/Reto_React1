import React from 'react';
import Contactcomponents from '../pure/contact';
//import Contact from '../models/contact.class';


const ContactList = () => {
    
  return (
    <div>
        <h1>Conexion del Cliente</h1>
        <Contactcomponents nombre = {' Carlos '} apellido = {' Murillo' } email = { 'carlos@gmail.com' } connected = {false}/>
    </div>
  )
}



export default ContactList;
