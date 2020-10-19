import React from 'react';
import './Login.css'
import FadeIn from 'react-fade-in';
import {Button,Grid} from '@material-ui/core';
import logoAlcoxide from '../../img/alcoxide.png'
import logoMossen from '../../img/logoMossen.png'
import Animacio from '../Animacio/animacio'
import { Redirect} from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
import { withRouter } from "react-router";
import fire from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      usernameAdmin: '',
      passwordAdmin: '',
      profileObj: {},
      redirecting:false,
      open:false,
      admin: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);

  }
  componentDidMount(){
  let thus = this;
    fire.auth().onAuthStateChanged(function(user) {
if (user) {
  thus.setState({admin: true})
}else {
  thus.setState({admin: false})
}
    });
    var usuari = localStorage.getItem('profileObj')
    if (usuari){
      this.setState({redirecting: true})
    } else {
      this.setState({redirecting: false})
    }
  }
   handleChange(e){
     this.setState({[e.target.name]: e.target.value})
   }
   handleLogin(){
    fire.auth().signInWithEmailAndPassword(this.state.usernameAdmin, this.state.passwordAdmin).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      alert(errorCode + ' --> '+ errorMessage)
    });
   }
    render(){
     const handleOpen = () => {
        this.setState({
            admin : !this.state.admin,
        });
    }
      const responseGoogleSuccess = (response) => {
        localStorage.setItem('profileObj', JSON.stringify(response.profileObj)); 
        console.warn(JSON.stringify(response.profileObj))
        this.setState({profileObj: response.profileObj,
                    redirecting:true
        });
        localStorage.setItem('profileObj', JSON.stringify(response.profileObj))
        }
      const responseGoogleFailure = (response) => {
        console.log("Error d'inici de sessió : " + JSON.stringify(response));
        }
      

        return(
          
            <FadeIn>   
                       
            <Grid container direction="column" alignItems="center" justify="space-between" spacing={0}>
              <Grid item m={12}>
               <img alt="logoMossen" className="logoMossen" src={logoMossen}/>        
              </Grid>
        
              
              <Grid className="botonets" item>
             <GoogleLogin
              className="botonets"
    clientId="1043027828905-d9ggaps55ucafvqv73volb6ks206r1bj.apps.googleusercontent.com"
    buttonText="Iniciar sessió amb Google"
    onSuccess={responseGoogleSuccess}
    onFailure={responseGoogleFailure}
    cookiePolicy={'single_host_origin'}
  />  
   
  <br/>
               <Button variant="outlined" className="botonets" onClick={handleOpen} color="secondary">Administració</Button>
              
              </Grid>
             
              <Grid item  xs={12} style={{bottom: 10}}>
                <img alt="logoAlcoxide" className="logoAlcoxide" width="55%" src={logoAlcoxide}/>
            </Grid>
            </Grid> 
            {this.state.redirecting ? <Redirect to={{
            pathname: '/interficie',
           
        }}/> : null }
         {this.state.admin ? <Redirect to={{
            pathname: '/admin/',
           
        }}/> : null }

     
            </FadeIn>
        )
    }
}

class PantallaPrinc extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      animacioOn:true
    };
  }
  componentDidMount() {
    
    setTimeout(() => {
      this.setState({animacioOn: false});
    }, 2000)
}
  render(){
    const animacioOn = this.state.animacioOn
    return(
      <div>
      {animacioOn ? <Animacio/> : <Login/>}
      
      </div>
    )
  }
}
export default withRouter(PantallaPrinc);