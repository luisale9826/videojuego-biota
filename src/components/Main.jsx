import React, { useState } from 'react'
import Preguntas from './Preguntas'
import Resultados from './Resultados'
import MenuPrincipal from './MenuPrincipal'
import listado from '../Preguntas'
import DatosCuriosos from './DatosCuriosos'
import '../styles/Main.css'

const Main = () => {

    const [estado, setEstado] = useState('');
    const [indiceActual, setIndiceActual] = useState(0);

    let contenido = null;

    const iniciar = () => {
        setEstado('iniciado')
    }

    const revisar = (respuestaUsuario, respuesta) => {
        if (respuestaUsuario !== respuesta || listado.length - 1 === indiceActual) {
            setEstado('finalizado')
        } else {
            setEstado('dato')
        }
    }

    const siguientePregunta = () => {
        setIndiceActual(indiceActual + 1)
        setEstado('iniciado')
    }

    const reiniciar = () => {
        setIndiceActual(0)
        setEstado('')
    }

    switch (estado) {
        case 'iniciado':
            contenido = <Preguntas preguntaActual={listado[indiceActual]} revisar={revisar} />
            break;
        case 'dato':
            contenido = <DatosCuriosos siguientePregunta={siguientePregunta} />
            break;
        case 'finalizado':
            contenido = <Resultados reiniciar={reiniciar} puntaje = {(indiceActual) * 1000} />
            break;
        default:
            contenido = <MenuPrincipal iniciar={iniciar} />
            break;
    }

    return contenido;
}

export default Main;