import React ,{useState} from 'react';
import Child from '../pure/Child';

const Father = () => {

    const [name, setName] =  useState('Martin');

    function showMessage(text){
        alert(`Message in father ${text}`)
    }

    function updateName(newName){
        setName(newName)
    }

    return (
        <div style={{background : 'tomato' , padding: '20px'}}>
            <Child name = {name} send={showMessage} update={updateName}></Child>
        </div>
    );
}

export default Father;
