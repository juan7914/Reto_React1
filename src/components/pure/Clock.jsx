import React , {useState , useEffect} from 'react';


const Clock = () => {

    const stateInitial = {
        fecha : new Date(),
        edad : 0,
        nombre : 'Juanito',
        apellidos : 'Murillito',
    
    }

    const [date, setDate] = useState(stateInitial);


    useEffect(() => {
       let timerId = setInterval(()=>{
        onChangeClock();
       }, 1000)
        return () => {
           clearInterval(timerId)
        };
    }, []);


    const onChangeClock= ()=>{
        setDate((date) => {
            let edad = date.edad + 1;
            return {
                ...date,
                fecha : new Date(),
                edad
            }
        })
    }


    return (
        <div>
            <h2>Hora Actual :

            {date.fecha.toLocaleTimeString()}

            </h2>

            <h3>{date.nombre}  {date.apellidos}</h3>


            <h1>Edad : {date.edad}</h1>

            
        </div>
    );
}

export default Clock;
