import React, { useState } from 'react'
import Preguntas from './Preguntas'
import Resultados from './Resultados'
import MenuPrincipal from './MenuPrincipal'
import listado from '../Preguntas'
import DatosCuriosos from './DatosCuriosos'
import '../styles/Main.css'
import Informe from './Informe'

const Main = () => {

    const [estado, setEstado] = useState('');
    const [indiceActual, setIndiceActual] = useState(0);

    let contenido = null;

    const iniciar = () => {
        setEstado('pregunta')
    }

    const revisar = (respuestaUsuario, respuesta) => {
        if (respuestaUsuario !== respuesta || listado.length - 1 === indiceActual) {
            setEstado('error')
        } else {
            setEstado('correcto')
        }
    }

    const siguientePregunta = () => {
        setIndiceActual(indiceActual + 1)
        setEstado('pregunta')
    }

    const reiniciar = () => {
        setIndiceActual(0)
        setEstado('')
    }

    switch (estado) {
        case 'iniciado':
            contenido = <Preguntas preguntaActual={listado[indiceActual]} revisar={revisar} />
            break;
        case 'error':
            contenido = <Informe informe={"error"} />
            setTimeout(() => setEstado("finalizado"), 3000)
            break;
        case 'correcto':
            contenido = <Informe informe={"correcto"} />
            setTimeout(() => setEstado("dato"), 3000)
            break;
        case 'pregunta':
            contenido = <Informe informe={"pregunta"} preguntaActual={indiceActual + 1} totalPreguntas={listado.length} />
            setTimeout(() => setEstado("iniciado"), 3000)
            break;
        case 'dato':
            contenido = <DatosCuriosos siguientePregunta={siguientePregunta} />
            break;
        case 'finalizado':
            contenido = <Resultados reiniciar={reiniciar} puntaje={(indiceActual) * 1000} />
            break;
        default:
            contenido = <MenuPrincipal iniciar={iniciar} />
            break;
    }

    return contenido;
}

export default Main;