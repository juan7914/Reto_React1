import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Archivob extends Component {
    contructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <h1>nombre:{this.props.nombre}</h1>
                <h2>apellido:{this.props.apellido}</h2>
                <h3>email:{this.props.email}</h3>                
                <button onClick={this.conectado}>{!this.conectado ? "conectar" : "conectado"}</button>
                <h5>{this.conectado ? "Contacto En Línea": "Contacto No Disponible"}</h5>
            </div>
        );
    }
    conectado = ()=>{
        this.setState((prevState)=>{           
            if(this.conectado){
                this.conectado = prevState.conectado = false;

            }else{
                this.conectado = prevState.conectado = true;
            }
        })
    }
        
}


Archivob.propTypes = {
    nombre : PropTypes.string,
    apellido : PropTypes.string,
    email : PropTypes.string,
    conectado : PropTypes.bool
};


export default Archivob;
