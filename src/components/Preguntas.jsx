import React from 'react'
import fondo from '../img/final-desenfoque.svg'
import '../styles/Preguntas.css'

const styles = `
body{
    background-image: url(${fondo});
    background-repeat: no-repeat;
    height: auto;
    width: auto;
}`;


const Preguntas = props => {
    const { pregunta, opciones, respuesta } = props.preguntaActual

    const esCorrecto = (opcionUsuario, respuestaPregunta) => {
        props.revisar(opcionUsuario, respuestaPregunta)
    }

    return (
        <div className="preguntas-container">
            <article className="pregunta">
                <p>{pregunta}</p>
            </article>
            <style>{styles}</style>
            {
                opciones.map((op) => (
                    <div className="opcion" key={op.opcion}>
                        <button onClick={() => {
                            esCorrecto(op.opcion, respuesta)
                        }}>{`${op.opcion}) ${op.texto}`}
                        </button>
                    </div>
                ))
            }
        </div>
    )
}
export default Preguntas;