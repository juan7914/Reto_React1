import React from 'react';
import PropTypes from 'prop-types';
import Archivob from './archivob.jsx';
import archivoc from './modeloPrueba/archivoc.jsx';


function Archivoa () {

    const defaulCliente = new archivoc ( "Carlos", "Murillo", "carlos@gmail.com", false);
    
          
        return (
            <div>                
                <Archivob cliente = {defaulCliente} />
            </div>
        );
    
}

Archivob.propTypes = {
    nombre : PropTypes.string,
    apellido : PropTypes.string,
    email : PropTypes.string,
    conectado : PropTypes.bool
};



export default Archivoa;
