import React from 'react'
import fondo from '../img/final-desenfoque.svg'
import '../styles/Resultados.css'

const styles = `
body{
    background-image: url(${fondo});
    background-repeat: no-repeat;
    height: auto;
    width: auto;
}`;

const Resultados = props => {
    return (
        <div className="resultados-container">
            <style>{styles}</style>
            <div className="juego-terminado">
                <h1>Juego Terminado</h1>
            </div>
            <div  className="titulo">
                <h1>Puntaje</h1>
            </div>
            <div className="puntaje">
                <h2>{props.puntaje}</h2>
            </div>
            <div className="boton">
                <button onClick={() => props.reiniciar()}>Reiniciar</button>
            </div>
        </div>
    )
}

export default Resultados