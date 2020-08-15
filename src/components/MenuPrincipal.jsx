import React from 'react'
import fondo from '../img/imagen-sin-texto.svg'
import logoUCR from '../img/logo-ucr.png'
import logoBiota from '../img/logo-biota.png'
import { Grid, Button } from '@material-ui/core';
import '../styles/MainMenu.css'

const MenuPrincipal = ({ iniciar }) => {
    return (
        <div>
            <style>{`body{ background-image: url(${fondo})}`}</style>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1>Main</h1>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" size="large" onClick={iniciar}>Iniciar</Button>
                </Grid>
                <Grid item xs={6}>
                    <img src={logoUCR} alt="UCR" />
                </Grid>
                <Grid item xs={6}>
                    <img src={logoBiota} alt="Biota" className={'biota'} />
                </Grid>
            </Grid>
        </div>
    )
}

export default MenuPrincipal
