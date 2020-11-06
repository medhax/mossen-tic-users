
import React, { useState } from 'react';
import './404.css';
import logoAlcoxide from '../../img/alcoxide.png'

export default class Err404 extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="subcontainer">
<h1>Oopa! - 404</h1>
<p>T'has perdut pels laberints de l'inframón?</p>
<a className="linkAlcoxide" href="https://alcoxide.dev"><img className="logoAlcoxide"alt="logoAlcoxide" src={logoAlcoxide} /></a>
                </div>
            </div>
        )
    }
}