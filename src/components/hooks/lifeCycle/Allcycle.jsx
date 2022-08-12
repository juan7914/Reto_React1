import React , { useEffect } from 'react';

const Allcycle = () => {

    useEffect(() => {

        console.log("componente creado")

        const intervalID = setInterval(() => {
                document.title = `${new Date()}`;
                console.log("actualizacion del componente")
        }, 1000);


        return () => {
            console.log("componente justo antes de desaparecer ")
            document.title = `tiempo terminado`;
            clearInterval(intervalID)
           
        };
    }, []);



    return (
        <div>
            <h1>Allcycle</h1>
        </div>
    );
}

export default Allcycle;
