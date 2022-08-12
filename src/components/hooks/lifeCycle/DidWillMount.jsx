/* 
Ejemplo de uso del metod componentDidWillMount en el componente de clase 
y uso del hook en el componente de funcion 

*/

import React, { Component, useEffect } from 'react'

// componentDidWillMount(){
//     console.log("Justo antes que el componente desaparezca")
// }

export  class DidWillMount extends Component {
  render() {
    return (
      <div>
        <h1>DidWillMount</h1>
       </div>
    )
  }
}




export const DidWillMountHook = () => {

    useEffect(() => {
        //aqui no se escribe nada 
        return () => {
            console.log("Justo antes que el componente desaparezca")
        };
    }, []);



    return (
        <div>
            <h1>DidWillMountHook</h1>
        </div>
    );
}


