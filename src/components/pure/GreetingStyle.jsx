import React , {useState} from 'react';

// ESTILOS POR MEDIO DE CONSTANTES
const loggenStyles = {
    color : 'white',
    fontWeight : 'bold'
}

const unLoggenStyles = {
    color: 'tomato',
    fontWeight : 'bold'
}

const GreetingStyle = (props) => {

    const [loggen, setLoggen] = useState(false);

    // se podria hacer dos funciones Aroow fuctions que luego se pueden renderizar asi  pero no me pinta los nombres 

    // const name = (()=>{
    //     <h1>{props.name}</h1>
    // })

    // const please = (()=>{
    //     <h2>Please login</h2>
    // })




    return (
        <div style={loggen ? loggenStyles  : unLoggenStyles}>
            {loggen ? (<h1>Name: {props.name}</h1>) : (<h2>Please login</h2>)}

            {/* // boton para cambiar el estado de login */}
            <button onClick={()=>{
                console.log("")
                setLoggen(!loggen)
            }}>{loggen ? "Logaut" : "Login"}</button>

        </div>
    );
}

export default GreetingStyle;
