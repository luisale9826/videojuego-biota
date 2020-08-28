import React from 'react';
import fondo from '../img/final-desenfoque.svg'
import '../styles/DatosCuriosos.css'

const styles = `
body{
    background-image: url(${fondo});
    background-repeat: no-repeat;
    height: auto;
    width: auto;
}`;

const DatosCuriosos = props => {

    const siguiente = () => {
        props.siguientePregunta();
    }

    return (
        <div className="datos-curiosos-container">
            <style>{styles}</style>
            <div className="titulo">
                <h1>¿Sabías qué?</h1>
            </div>
            <div className="dato">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, in nesciunt. Aspernatur, molestiae dicta, perspiciatis corrupti praesentium ex deleniti, voluptatem non eum temporibus esse quibusdam nesciunt eveniet sed iste dolor?</p>
            </div>
            <div className="boton">
                <button onClick={() => siguiente()}>Siguiente</button>
            </div>
        </div>
    )

}

export default DatosCuriosos;