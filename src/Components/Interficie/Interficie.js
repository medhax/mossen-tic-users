import React from 'react';
import './Interficie.css' 
import './efectes.scss' 
import WarningIcon from '@material-ui/icons/Warning';
import HelpIcon from '@material-ui/icons/Help';
import SettingsIcon from '@material-ui/icons/Settings';
import NavBar from '../NavBar/NavBar';
import {Button,Grid, DialogActions,Dialog,DialogContent,TextareaAutosize,DialogTitle} from '@material-ui/core';
import ReactQr from 'react-awesome-qr'
import logoMossen from '../../img/logoMossen.png'
import logoAlcoxide from '../../img/alcoxide.png'
import {Link} from "react-router-dom";
import { withRouter, Redirect } from "react-router";
import firebase from 'firebase/app';
import Axios from 'axios';
import { exportComponentAsPNG } from "react-component-export-image";
import 'firebase/database'
import moment from 'moment';
import 'moment/locale/es';

class Interficie extends React.Component{
  constructor(props){
    super(props);
    moment.locale('es');
    this.componentRef = React.createRef();
  this.state = {
    objQR: JSON.parse(localStorage.getItem("profileObj")),
    avui: moment().format('l').replace(/\//g,"-"),
    darreraTemp: '--',
    open:false,
    valorAlerta:"",
     loggedIn: localStorage.getItem('profileObj'),
   
    organitzacioUsuari: 'Carregant'
  }
  this.componentDidMount = this.componentDidMount.bind(this);
  }


  componentDidMount(){
    if (!this.state.loggedIn){
return <Redirect to="/" />
    }
    let thus = this;
    Axios.post('https://api.alcoxide.dev/login', {
      username: 'mosseninsider',
      password: 'Moss3n_Ins1d3r_*2020'
    })
    .then(function (response) {
      let config = {
        headers: {
          'Authorization': 'Bearer ' + response.data.accessToken
        }
      }
      Axios.get("https://api.alcoxide.dev/mosseninsider/"+thus.state.objQR.email, config)
    .then(function (response) {
      console.log(response)
      thus.setState({organitzacioUsuari: response.data.orgUnitPath.replace('/', '').toUpperCase()})
     


    })
    .catch(function (error) {
      console.log(error);
    });
    })
    .catch(function (error) {
      console.log(error);
    });

  }  
  render(){
   
    const handleOpen = () => {
      this.setState({open: !this.state.open});
      
    };
  const handleSendAlerta = () => {
    firebase.database().ref('alertes/').push({missatgeAlerta: this.state.valorAlerta, timestamp: new moment().format('l').replace(/\//g,"-"),nomUsuari: this.state.objQR.name, email: this.state.objQR.email })
      this.setState({open: !this.state.open});
     
    };
  
  
        return(
          <div>
            <NavBar usuari={this.state.objQR} grupOrg={this.state.organitzacioUsuari} />
          
            <Grid container className="root" alignItems="center" direction="column" justify="space-between">
            
             
                <div className="QrBoxinga">
              <QR ref={this.componentRef}   objQR={this.state.objQR}    />
               </div>
              


              <Button style={{alignSelf: 'center'}} onClick={() => exportComponentAsPNG(this.componentRef)} className="exportar" color="secondary" size="small" variant="outlined">Exportar QR</Button>
           
             
              {this.state.loggedIn ? null : <Redirect to={{
                pathname: '/',
               
            }}/>  }
              <Link style={{color: 'transparent'}} to="/fitxers"><Button  className="botoPrinc" color="primary" startIcon={<HelpIcon />} variant="contained">Els meus fitxers</Button></Link>
        <Button className="botoPrinc" color="primary" onClick={handleOpen} startIcon={<WarningIcon />} variant="contained" > Enviar dubte</Button>
        <Link style={{color: 'transparent'}} to="/configuracio"> <Button className="botoPrinc" color="primary" onClick={handleOpen} startIcon={<SettingsIcon />} variant="contained" > Configuració</Button></Link>
              <Dialog
              fullWidth
              maxWidth={"sm"}
                open={this.state.open}        
                keepMounted
                onClose={handleOpen}
              >
                <DialogTitle>{"Enviar una alerta"}</DialogTitle>
                <DialogContent>
                  <TextareaAutosize onChange={evt => this.updadeValorAlerta(evt)} value={this.state.valorAlerta} className="textarea"  rowsMin={3} placeholder="Introdueix el missatge que desitges enviar" />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleOpen} color="primary">
                    Tancar
                  </Button>
                  <Button onClick={handleSendAlerta} color="primary">
                    Enviar alerta
                  </Button>
                </DialogActions>
              </Dialog>
     
      <a className="linkAlcoxide" href="https://alcoxide.dev"><img className="logoAlcoxide"alt="logoAlcoxide" src={logoAlcoxide} /></a>
            </Grid>
            
           

            </div>
              
        )
    }
    updadeValorAlerta(evt){
      this.setState({
        valorAlerta: evt.target.value
      });
    }
  }

export default withRouter(Interficie);

 
class QR extends React.Component{
    
  render(){
    return(
      <ReactQr margin={0}  text={JSON.stringify(this.props.objQR)}  logoMargin="7"  logoSrc={logoMossen} size={200} dotScale={1} correctionLevel={2}  />
      )
    }
}