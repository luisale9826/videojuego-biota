import React from 'react';
import '../styles/DatosCuriosos.css'

const DatosCuriosos = props => {

    const siguiente = () => {
        props.siguientePregunta();
    }

    return (
        <div className="datos-curiosos-container">
            <h1 className="titulo">Sabias que...</h1>
            <div>
                <p className="dato">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, in nesciunt. Aspernatur, molestiae dicta, perspiciatis corrupti praesentium ex deleniti, voluptatem non eum temporibus esse quibusdam nesciunt eveniet sed iste dolor?</p>
            </div>
            <button onClick={() => siguiente()}>Siguiente</button>
        </div>
    )

}

export default DatosCuriosos;