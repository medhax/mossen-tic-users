import React from 'react';
 
import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';
import NavBar from '../NavBar/NavBar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';


import { withRouter, Redirect } from "react-router";
import firebase from 'firebase/app';
import Axios from 'axios';

import 'firebase/database'
import moment from 'moment';
import 'moment/locale/es';

class Config extends React.Component{
  constructor(props){
    super(props);
    moment.locale('es');
    this.componentRef = React.createRef();
  this.state = {
    objQR: JSON.parse(localStorage.getItem("profileObj")),
    avui: moment().format('l').replace(/\//g,"-"),
    
     loggedIn: localStorage.getItem('profileObj'),
     configUser: {},
    organitzacioUsuari: 'Carregant',
    dialogOpen: false
  }
  this.componentDidMount = this.componentDidMount.bind(this);
  this.openDialog = this.openDialog.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.saveUserInfo = this.saveUserInfo.bind(this);
  }

openDialog(){
  this.setState({dialogOpen: !this.state.dialogOpen})
}
handleChange(ev){

  this.setState({[ev.target.name]: ev.target.value})
}
saveUserInfo() {
  let thus = this;
  let emailNet = this.state.objQR.email.replace('@iesmossenalcover.cat', '/');
  firebase.database().ref('/mossentic/' + emailNet ).child('config').set({
    codepen: thus.state.userCodepen,
    emailPersonal: thus.state.userEmail
  });
  this.openDialog()
}
  componentDidMount(){


    if (!this.state.loggedIn){
return <Redirect to="/" />
    }


    let thus = this;
    let emailNet = this.state.objQR.email.replace('@iesmossenalcover.cat', '/');
     firebase.database().ref('/mossentic/' + emailNet ).child('config').once('value').then(function(snapshot) {
      
      console.log(snapshot.val());
      if (snapshot.val()){
        thus.setState({configUser: snapshot.val()});
        thus.setState({userCodepen: thus.state.configUser.codepen,
        userEmail: thus.state.configUser.emailPersonal}); 
      } else {
        thus.setState({dialogOpen: true});
      }
      


    });
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
   
 
  
  
        return(
          <div>
            <NavBar usuari={this.state.objQR} grupOrg={this.state.organitzacioUsuari} />
            <CssBaseline />
      <Container maxWidth="sm">
        
        <List component="div"  aria-label="mailbox folders" style={{top: 75, height: '90vh', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
      <ListItem divider>
        <ListItemText primary={this.state.objQR.email} secondary="Correu electrònic personal"/>
      </ListItem>
      
      <ListItem  divider>
      <ListItemText primary={this.state.organitzacioUsuari} secondary="Unitat organitzativa Google"/>

      </ListItem>
      <ListItem  divider>
      <ListItemText primary={this.state.configUser ? this.state.configUser.codepen :'Sense definir'} secondary="Enllaç al CodePen.io"/>
      {this.state.configUser ? '': <Button onClick={this.openDialog} color="primary">Crear la meva configuració</Button>}
      </ListItem>
      <ListItem  divider>
      <ListItemText primary={this.state.configUser ? this.state.configUser.codepen :'Sense definir'} secondary="Enllaç al CodePen.io"/>
      {this.state.configUser ? '': <Button onClick={this.openDialog} color="primary">Crear la meva configuració</Button>}
      </ListItem>
      <ListItem  divider>
      <ListItemText primary={this.state.objQR.email.replace('@iesmossenalcover.cat','')+ ':' +this.state.objQR.email.replace('@iesmossenalcover.cat','') } secondary="Accés FTP"/>
      <Button color="primary">Accedir</Button>
      </ListItem>
      
      
    
    </List>
    <Dialog open={this.state.dialogOpen} onClose={this.openDialog} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Completa les teves dades</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Per el correcte funcionament de l'aplicació necessitam un parell de dades
          </DialogContentText>
          <TextField
          onChange={ev => this.handleChange(ev)}
            InputLabelProps={{ shrink: true }} 
            margin="dense"
           name="userEmail"
            
            value={this.state.userEmail}
            label="Correu electrònic personal"
            type="text"
            fullWidth
          />
         
          <TextField
            onChange={ev => this.handleChange(ev)}
            InputLabelProps={{ shrink: true }} 
            margin="dense"
            name="userCodepen"
            
            
            value={this.state.userCodepen}
            label="Enllaç del teu Codepen.io"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.openDialog} color="primary">
            Cancel·lar
          </Button>
          <Button onClick={this.saveUserInfo} color="primary">
            Desar
          </Button>
        </DialogActions>
      </Dialog>
      </Container>
           
          
           

            </div>
              
        )
    }
    updadeValorAlerta(evt){
      this.setState({
        valorAlerta: evt.target.value
      });
    }
  }

export default withRouter(Config);

