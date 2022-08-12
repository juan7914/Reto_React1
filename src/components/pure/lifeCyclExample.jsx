/*
Ejemplo de componente de tipo clase 
 que dispone de los metodos del ciclo de vida
*/
import React, { Component } from 'react'

export class LifeCyclExample extends Component {
    constructor(props){
        super(props)
        console.log("CONSTRUCTOR : cuando se instancia el componente");        
    }

    // ESTE CICLO ESTA DEPRECADO NO SE UTILIZA    ......SOLO EJEMPLO....
    componentWillMount(){
        console.log("WillMount : ANTES DEL MONTAJE DEL COMPONENTE");  
    }

    componentDidMount(){
        console.log("DidMount : JUSTO EN EL MONTAJE DEL COMPONENTE ANTES DE RENDERIZARLO");  
    }

    // ESTE CICLO ESTA DEPRECADO NO SE UTILIZA    ......SOLO EJEMPLO....
    componentWillReceiveProps(nextProps){
        console.log("WillReceiveProps : SI VA RECIBIR NUEVAS PROPS");
    }

    // ESTE CICLO ESTA DEPRECADO NO SE UTILIZA    ......SOLO EJEMPLO....

    shouldComponentUpdate(nextProps , nextState){

        /* si el componente debe ono actualizarce */

        // return true o false
    }

    componentDidUpdate(prevProps, prevState){
        console.log("DidUpdate : justo despues de actualizarce");
    }

    componentWillUnmount(){
        console.log("WillUnmount :  justo antes de desaparecer el componente");
    }


  render() {
    return (
      <div>LifeCyclExample</div>
    )
  }
}

export default LifeCyclExample




