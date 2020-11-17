import React from 'react'
import fondo from '../img/final-desenfoque.svg'
import '../styles/Informe.css'

const styles = `
body{
    background-image: url(${fondo});
    background-repeat: no-repeat;
    height: auto;
    width: auto;
}`;

const Informe = ({ informe, preguntaActual, totalPreguntas }) => {

    let contenido = '';

    switch (informe) {
        case 'instrucciones':
            contenido = (
                <div className="instrucciones-container">
                    <div className="titulo">
                        <h1>Instrucciones</h1>
                    </div>
                    <div className="instrucciones">
                        <h2>A cada pregunta seleccione la opción correspondiente haciendo click sobre la misma, el juego se acaba cuando se respondan todas las preguntas correctamente o se falle en alguna pregunta</h2>
                    </div>
                </div>
            )
            break;
        case 'correcto':
            contenido = (
                <div className="titulo">
                    <h1>Correcto!</h1>
                </div>
            )
            break;
        case 'error':
            contenido = (
                <div className="titulo">
                    <h1>Incorrecto!</h1>
                </div>
            )
            break;
        default:
            contenido = (
                <div className="titulo">
                    <h1>Pregunta {preguntaActual} de {totalPreguntas}</h1>
                </div>
            )
            break;
    }

    return (
        <div className="informe-container">
            <style>{styles}</style>
            {contenido}
        </div>
    );

}

export default Informe;
