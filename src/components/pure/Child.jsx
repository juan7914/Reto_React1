import React , { useRef } from 'react';

const Child = ({ name , send , update}) => {

    const myRef = useRef('')
    const myName = useRef('')
    

    function precionarBoton(){

        const text = myRef.current.value;  
        
        alert(`mi segundo boton hace referencia al input : ${text}`)
    }

     function precionarBotonParams(text){
        alert(`mi ${text}`)
    }

    function submitName(e){
        e.preventDefault()
        update(myName.current.value)                
    }
    
    

    return (
        <div style={{background : 'blue' , padding: '30px'}}>
            <h1 onMouseOver={()=>console.log('evento onMouseOver')}>Hola, {name}</h1>
            <button onClick={() => alert('boton 1')}>button_1</button>
            <button onClick={precionarBoton}>button_2</button>
            <button onClick={() => precionarBotonParams('tercer boton')}>button_3</button>

            <input
                placeholder='inserte un texto'
                onChange={(e) => console.log('el input esta recibiendo texto asi:', e.target.value)}
                onCopy={()=> console.log('estan copiando el texto')}
                onFocus={()=> console.log('evento focus')}
                ref={myRef}
                
            />
            <button onClick={() => send(myRef.current.value)}>
                send father
            </button>

            <div style={{background: '#fff', marginTop: '30px'}}>

                <form onSubmit={submitName}>

                <input 
                placeholder='escriba'
                ref={myName}
                onChange={(e) => console.log('el input esta recibiendo texto asi:', e.target.value)}
                
                />
                <button type="submit">updateName</button>
                </form>

                

            </div>

        </div>
    );
}

export default Child;
