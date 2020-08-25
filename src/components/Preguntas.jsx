import React from 'react'
import fondo from '../img/final-desenfoque.svg'
import '../styles/Preguntas.css'

const Preguntas = props => {
    const { pregunta, opciones, respuesta } = props.preguntaActual
    return (
        <div className="preguntas-container">
            <article className="pregunta">
                <p>{pregunta}</p>
            </article>
            <style>{`body{ background-image: url(${fondo})}`}</style>
                {
                    opciones.map((op) => (
                        <div className="opcion" key={op.opcion}>
                            <button onClick={() => {
                                props.revisar(op.opcion, respuesta)
                            }}>{`${op.opcion}: ${op.texto}`}
                            </button>
                        </div>
                    ))
                }
        </div>
    )
}
export default Preguntas;