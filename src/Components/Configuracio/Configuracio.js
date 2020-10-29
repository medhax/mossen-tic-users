import React from 'react';
 
import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';
import NavBar from '../NavBar/NavBar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
    organitzacioUsuari: 'Carregant'
  }
  this.componentDidMount = this.componentDidMount.bind(this);
  }


  componentDidMount(){


    if (!this.state.loggedIn){
return <Redirect to="/" />
    }


    let thus = this;
    let emailNet = this.state.objQR.email.replace('@iesmossenalcover.cat', '/');
     firebase.database().ref('/mossentic/' + emailNet ).child('config').once('value').then(function(snapshot) {
      
      console.log(snapshot.val());
      thus.setState({configUser: snapshot.val()});
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
      <ListItemText primary={this.state.configUser.codepen} secondary="Enllaç al CodePen.io"/>
      <Button color="primary">Editar</Button>
      </ListItem>
      <ListItem  divider>
      <ListItemText primary={'EN PROCÉS'} secondary="Accés FTP"/>
      <Button color="primary">Accedir</Button>
      </ListItem>
      
      
    
    </List>
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

