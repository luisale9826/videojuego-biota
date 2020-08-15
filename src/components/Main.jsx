import React, { useState } from 'react'
import Preguntas from './Preguntas'
import Resultados from './Resultados'
import MenuPrincipal from './MenuPrincipal'
import listado from '../Preguntas'



const Main = () => {

    const [estado, setEstado] = useState('');
    const [indiceActual, setIndiceActual] = useState(0);
    const [puntuacion, setPuntuacion] = useState(0)

    let contenido = null;

    const iniciar = () => {
        setEstado('iniciado')
    }

    const revisar = (respuestaUsuario, respuesta) => {
        if (respuestaUsuario !== respuesta || listado.length - 1 === indiceActual) {
            setEstado('finalizado')
        } else {
            setIndiceActual(indiceActual + 1)
        }
    }

    switch (estado) {
        case 'iniciado':
            contenido = <Preguntas preguntaActual={listado[indiceActual]} revisar={revisar} />
            break;
        case 'finalizado':
            contenido = <Resultados />
            break;

        default:
            contenido = <MenuPrincipal iniciar={iniciar} />
            break;
    }

    return contenido;
}

export default Main;