import React from 'react';
import PropTypes from 'prop-types';
import Contactcomponents from '../pure/contact';
import Contact from '../models/contact.class';


function ContactList() {
    const conexionDefault = new Contact("CARLOS" , "Murillo" , "carlos@gmail.com", false);
  return (
    <div>
        <h1>Conexcion del Cliente</h1>
        <Contactcomponents concat = {conexionDefault}></Contactcomponents>
    </div>
  )
}

ContactList.propTypes = {
    nombre : PropTypes.string,
    apellido : PropTypes.string,
    email : PropTypes.string,
    connected : PropTypes.bool,

}

export default ContactList;
