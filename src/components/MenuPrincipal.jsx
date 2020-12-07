import React from 'react'
import fondo from '../img/imagen-sin-texto.svg'
import logoBiota from '../img/logo-biota.png'
import '../styles/MenuPrincipal.css'

const styles = `
body{
    background-image: url(${fondo});
    background-repeat: no-repeat;
    height: auto;
    width: auto;
}`;

const MenuPrincipal = ({ mostrarInstrucciones }) => {
    return (
        <div>
            <div className="menu-container">
                <style>{styles}</style>
                <h1 className="title">Preguntas Biota</h1>
                <div className="boton">
                    <button className="btn" onClick={mostrarInstrucciones}>Iniciar</button>
                </div>
                    <h2 className="subtitle">Aprende sobre la naturaleza y diviertete</h2>
                <div className="images">
                    <img src={logoBiota} alt="Biota" className={'biota'} />
                </div>
            </div>
        </div>
    )
}

export default MenuPrincipal
