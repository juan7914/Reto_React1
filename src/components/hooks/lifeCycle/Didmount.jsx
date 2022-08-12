/* 
ejemplo de uso del metodo  de ciclo de vida en el componente clase 
y uso de hook  del ciclo de vida en el componente funcional 
*/




import React, { Component, useEffect } from 'react';

export class Didmount extends Component {

    componentDidMount(){
        console.log("Comportamiento antes que el componente sea añadido al DOM (RENDERICE)")
    }
  



    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}




export const DidmountHook = () => {
    useEffect(()=>{
        console.log("Comportamiento antes que el componente sea añadido al DOM (RENDERICE)")
    }, []) // se renderizara solo una vez con la dependencia [] vacia
    

    return (
        <div>
            <div>
                <h1>DidMountHook</h1>
            </div>
        </div>
    );
}


