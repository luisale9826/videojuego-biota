import React from 'react'
import fondo from '../img/final-desenfoque.svg'
import '../styles/Resultados.css'

const Resultados = props => {
    return (
        <div className="resultados-container">
            <h1 className="titulo">Resultados</h1>
            <style>{`body{ background-image: url(${fondo})}`}</style>
        </div>
    )
}

export default Resultados