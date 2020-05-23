import React from 'react';
import './Interficie.css' 
import './efectes.scss' 
import WarningIcon from '@material-ui/icons/Warning';
import HelpIcon from '@material-ui/icons/Help';
import NavBar from '../NavBar/NavBar';
import {Button,Grid} from '@material-ui/core';
import ReactQr from 'react-awesome-qr'
import logoMossen from '../../img/logoMossen.png'
import logoAlcoxide from '../../img/alcoxide.png'
import {Link} from "react-router-dom";
import { withRouter } from "react-router";
import firebase from 'firebase';

class Interficie extends React.Component{
  constructor(props){
    super(props);
  this.state = {
    objQR: this.props.location.state.usuari,
    avui: new Date().toLocaleDateString('es-ES').replace(/[/]/g,'-'),
    darreraTemp: '---'
  }
  }
  componentWillMount(){
    let thus = this;
    console.log(this.state.avui)
let emailNet = this.state.objQR.email.replace('@iesmossenalcover.cat', '')
firebase.database().ref('/temperatures/'+this.state.avui+ '/'+emailNet).on('value', function(snapshot) {
  if (snapshot.val() !== null){
    thus.setState({darreraTemp: snapshot.val().darreraTemp})
  }
 
});
  }
  render(){

    const correu = 'mecachis';
        return(
          <div>
            <NavBar usuari={this.props.location.state.usuari} />
          
            <Grid container className="root" alignItems="center" direction="column" justify="center">
            
              <Grid className="QrBox" item xs={12}>
                <div className="QrBoxinga">
              <ReactQr margin={0}  text={JSON.stringify(this.state.objQR)}  logoMargin="7"  logoSrc={logoMossen} size={200} dotScale={1} correctLevel={3} />
               </div>
               <svg className="animacio" viewBox="45 60 400 320" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#fff" d="M 90 210 C 90 180 90 150 90 150 C 150 150 180 150 180 150 C 180 150 300 150 300 150 C 300 150 330 150 390 150 C 390 150 390 180 390 210 C 390 240 390 270 390 270 C 330 270 300 270 300 270 C 300 270 180 270 180 270 C 180 270 150 270 90 270 C 90 270 90 240 90 210" mask="url(#knockout-text)" >
                    </path>
                    <text x="147" y="227" color='black'>Escaneja'm</text>
                    <mask id="knockout-text">
                    <rect width="100%" height="100%" fill="#fff" x="0" y="0"/>
                   
                    </mask>
                </svg>
                
              </Grid>

              
              <Grid className="temperatura" item>
                <h2 className="NumTempe">{this.state.darreraTemp}º</h2>
                <Button variant="contained" className="botTemp"  color="secondary">Registre de temperatures</Button>
              </Grid>
             
              
      <Link  style={{color: 'transparent'}} to="/notificacions">  <Button className="botoPrinc" color="primary" startIcon={<HelpIcon />} variant="contained">Notificacions del centre</Button></Link>
      <Link style={{color: 'transparent'}} to="/alerta">  <Button className="botoPrinc" color="primary" startIcon={<WarningIcon />} variant="contained"> Enviar alerta</Button></Link>
      <img alt="logoAlcoxide" src={logoAlcoxide} className="logoAlco"/>
            </Grid>
            
           

            </div>
        )
    }
  }

export default withRouter(Interficie);