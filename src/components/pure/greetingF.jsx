import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = ({name}) => {
    // el HOOK DE useState
    // cons[variable , actualizacion de la misma] = useState(valor inicial de la variable)
    const [age , setAge] = useState(29);
    const birthday = () => {
        //actualizamos el state
        setAge(age + 1);
    }
    return (
        <div>
             <h1>!Hola desde un componente funcional..... mi nombre es : {name}</h1>
                <h2>mi edad es de: {age}</h2>
                <button onClick={birthday}> 
                cumplir años                    
                </button>
        </div>
    );
};


GreetingF.propTypes = {
    name : PropTypes.string,
};


export default GreetingF;

