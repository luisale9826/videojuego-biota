import React from 'react'
import fondo from '../img/final-desenfoque.svg'
import { Grid, Button } from '@material-ui/core';
import '../styles/Preguntas.css'

const Preguntas = props => {
    const { pregunta, opciones, respuesta } = props.preguntaActual
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h2>{pregunta}</h2>
                </Grid>
                <style>{`body{ background-image: url(${fondo})}`}</style>
                {
                    opciones.map((op) => (
                        <Grid item xs={3} key={op.opcion}>
                            <Button variant="contained" size="large" onClick={() => {
                                props.revisar(op.opcion, respuesta)
                            }}>{`${op.opcion}: ${op.texto}`}
                            </Button>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}
export default Preguntas;