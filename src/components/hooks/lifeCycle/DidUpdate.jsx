/* 

ejemplo de uso del metodo componentDidUpdate en componente de clase
 y uso de hook en componente funcional 

*/
import React, { Component, useEffect } from 'react'

    // componentDidUpdate(){
    //     console.log("Comportamiento cuando el componente recibe nuevas props o cambia su estado privado") 
    // }
    

export  class DidUpdate extends Component {
  render() {
    return (
      <div>
        <h1>DidUpdate</h1>
      </div>
    )
  }
}



export const DidUpdateHook = () => {

    useEffect(()=>{
       console.log("Comportamiento cuando el componente recibe nuevas props o cambia su estado privado") 
    })


    return (
        <div>
        <h1>DidUpdateHook</h1>
      </div>
    );
}
















