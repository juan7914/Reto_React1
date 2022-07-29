import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Archivob from './archivob.JSX';

export const contacto = {
    nombre : "",
    apellido : "",
    email : "",
    conectado : false,
};

class Archivoa extends Component {
   
    constructor({nombre , apellido , email, conectado}){
        super({nombre , apellido , email, conectado})
       this.nombre = nombre;
       this.apellido = apellido;
       this.email = email;
       this.conectado = conectado;        
    }

    render() {       
        return (
            <div>                
                <Archivob nombre = {this.nombre} apellido = {this.apellido}  email ={this.email} conectado = {this.conectado} />
            </div>
        );
    }
}


Archivoa.propTypes = {
nombre : PropTypes.string,
apellido : PropTypes.string,
email : PropTypes.string,
conectado : PropTypes.bool
};


export default Archivoa;
