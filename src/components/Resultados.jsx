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
            <h1 className="juego-terminado">Juego Terminado</h1>
            <h1 className="titulo">Resultados</h1>
            <style>{styles}</style>
        </div>
    )
}

export default Resultados