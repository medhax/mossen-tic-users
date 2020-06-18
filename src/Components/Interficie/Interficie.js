import React from 'react';
import './Interficie.css' 
import './efectes.scss' 
import WarningIcon from '@material-ui/icons/Warning';
import HelpIcon from '@material-ui/icons/Help';
import NavBar from '../NavBar/NavBar';
import {Button,Grid, DialogActions,Dialog,DialogContent,TextareaAutosize,DialogTitle} from '@material-ui/core';
import ReactQr from 'react-awesome-qr'
import logoMossen from '../../img/logoMossen.png'
import logoAlcoxide from '../../img/alcoxide.png'
import {Link} from "react-router-dom";
import { withRouter, Redirect } from "react-router";
import firebase from 'firebase';
import Axios from 'axios';

class Interficie extends React.Component{
  constructor(props){
    super(props);
  this.state = {
    objQR: JSON.parse(localStorage.getItem("profileObj")),
    avui: new Date().toLocaleDateString('es-ES').replace(/[/]/g,'-'),
    darreraTemp: '--',
    open:false,
    valorAlerta:"",
     loggedIn: localStorage.getItem('profileObj'),
   
    organitzacioUsuari: 'Carregant...'
  }
  this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentWillMount(){
    console.log(JSON.parse(localStorage.getItem("profileObj")))
    let thus = this;
    console.log(this.state.avui)
    console.log(this.state.open)
let emailNet = this.state.objQR.email.replace('@iesmossenalcover.cat', '')
firebase.database().ref('/alumnes/'+emailNet).on('value', function(snapshot) {
  if (snapshot.val() !== null){
    thus.setState({darreraTemp: snapshot.val().darreraTemp})
  }
 
});

console.log(this.state.loggedIn)
  }
  componentDidMount(){
  
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
      thus.setState({organitzacioUsuari: response.data.organitzacioUsuari.replace('/', '').toUpperCase()})
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
      console.log(this.state.open)
    };
  const handleSendAlerta = () => {
    firebase.database().ref('alertes/').push({missatgeAlerta: this.state.valorAlerta, timestamp: new Date().toLocaleString(),nomUsuari: this.state.objQR.name, email: this.state.objQR.email })
      this.setState({open: !this.state.open});
      console.log(this.state.open)
    };
  
  
        return(
          <div>
            <NavBar usuari={this.state.objQR} grupOrg={this.state.organitzacioUsuari} />
          
            <Grid container className="root" alignItems="center" direction="column" justify="center">
            
              <Grid className="QrBox" item xs={12}>
                <div className="QrBoxinga">
              <ReactQr margin={0}  text={JSON.stringify(this.state.objQR)}  logoMargin="7"  logoSrc={logoMossen} size={200} dotScale={1} correctionLevel={2}  />
               </div>
        
              </Grid>

              
              <Grid className="temperatura" item>
                <h2 className="NumTempe">{this.state.darreraTemp}º</h2>
                
                <Button variant="contained" className="botTemp"  color="secondary">Registre de temperatures</Button>
              </Grid>
             
              {this.state.loggedIn ? null : <Redirect to={{
                pathname: '/',
               
            }}/>  }
              <Link style={{color: 'transparent'}} to="/notificacions"><Button  className="botoPrinc" color="primary" startIcon={<HelpIcon />} variant="contained">Notificacions del centre</Button></Link>
        <Button className="botoPrinc" color="primary" onClick={handleOpen} startIcon={<WarningIcon />} variant="contained" > Enviar alerta</Button>
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
     
      <img alt="logoAlcoxide" src={logoAlcoxide} className="logoAlco"/>
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