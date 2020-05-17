import React from 'react';
import './Interficie.css' 
import './efectes.scss' 
import WarningIcon from '@material-ui/icons/Warning';
import HelpIcon from '@material-ui/icons/Help';
import NavBar from '../NavBar/NavBar';
import {Button,Grid} from '@material-ui/core';
import ReactQr from 'react-awesome-qr'
import logoMossen from '../img/logoMossen.png'
import logoAlcoxide from '../img/alcoxide.png'
import FadeIn from 'react-fade-in';

class Interficie extends React.Component{
  constructor(props){
    super(props);
    this.props ={
      correu: 'aquivaescorreu',
    }
  }
  render(){
    const correu = 'mecachis';
        return(
          <div>
            <NavBar/>
          
            <Grid container className="root" alignItems="center" direction="column">
            
              <Grid className="QrBox" item xs={12}>
                <div>
              <ReactQr margin={0} text={correu} logoMargin="7"  colorDark="blue" logoSrc={logoMossen} size={300} dotScale={0.5}/>
               </div>
               <svg className="animacio" viewBox="45 60 400 320" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#fff" d="M 90 210 C 90 180 90 150 90 150 C 150 150 180 150 180 150 C 180 150 300 150 300 150 C 300 150 330 150 390 150 C 390 150 390 180 390 210 C 390 240 390 270 390 270 C 330 270 300 270 300 270 C 300 270 180 270 180 270 C 180 270 150 270 90 270 C 90 270 90 240 90 210" mask="url(#knockout-text)" >
                    </path>
                    <mask id="knockout-text">
                    <rect width="100%" height="100%" fill="#fff" x="0" y="0" />
                    <text x="147" y="227" fill="#000">Escaneja'm</text>
                    </mask>
                </svg>
                
              </Grid>

              
              <Grid className="temperatura" item>
                <h2 className="NumTempe">36º</h2>
                <Button variant="contained" className="botTemp"  color="secondary">Registre de temperatures</Button>
              </Grid>
             
              <Grid className="botoPirncBox" item  xs={12}>
        <Button className="botoPrinc" color="primary" size="large" startIcon={<HelpIcon />} variant="contained">Notificacions del centr</Button>
        <Button className="botoPrinc" color="primary" size="large" startIcon={<WarningIcon />} variant="contained"> Enviar alerta</Button>
            </Grid>
            <img alt="logoAlcoxide" src={logoAlcoxide} className="logoAlco"/>
            </Grid>

            </div>
        )
    }
  }

export default Interficie;