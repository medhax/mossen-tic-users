import React from 'react';
import './Login.scss'
import FadeIn from 'react-fade-in';
import {Button,Grid,TextField,Dialog,DialogActions,DialogContent,DialogTitle} from '@material-ui/core';
import logoAlcoxide from '../../img/alcoxide.png'
import logoMossen from '../../img/logoMossen.png'
import Animacio from '../Animacio/animacio'
import { Link,Redirect} from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
import { withRouter } from "react-router";
import * as fire from 'firebase';


class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      usernameAdmin: '',
      passwordAdmin: '',
     profileObj: {

     },
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
            open : !this.state.open,
        });
    }
      const responseGoogleSuccess = (response) => {
       console.log(response)
        this.setState({profileObj: response.profileObj,
                    redirecting:true
        });
        
        }
      const responseGoogleFailure = (response) => {
        alert("Algo falla!" + JSON.stringify(response));
        }
      

        return(
          
            <FadeIn>   
                       
            <Grid container direction="column" alignItems="center" spacing={0}>
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
               <Button variant="outlined" className="botonets" onClick={handleOpen} color="secondary">Versió d'administrador</Button>
              <br/><br/>
              <Link to="/info"> <Button variant="outlined" className="botonets" color="primary">Estadística global</Button></Link>
              </Grid>
             
              <Grid item  xs={12}>
                <img alt="logoAlcoxide" className="logoAlcoxide" width="55%" src={logoAlcoxide}/>
            </Grid>
            </Grid> 
            {this.state.redirecting ? <Redirect to={{
            pathname: '/interficie',
            state: {usuari: this.state.profileObj,}
        }}/> : null }
         {this.state.admin ? <Redirect to={{
            pathname: '/admin',
           
        }}/> : null }

        <Dialog
              fullWidth="true"
              maxWidth={"sm"}
                open={this.state.open}        
                keepMounted
                onClose={handleOpen}
              >
                <DialogTitle>{"Accedir a la versió d'administrador"}</DialogTitle>
                <DialogContent>
                  <TextField variant="outlined" label="Usuari" value={this.state.usernameAdmin} name="usernameAdmin" onChange={this.handleChange}/>
                  <br/><br/>
                  <TextField variant="outlined" label="Contrasenya" type="password" value={this.state.passwordAdmin}  name="passwordAdmin" onChange={this.handleChange} />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleOpen} color="secondary">
                    Tancar
                  </Button>
                  <Button  color="primary" onClick={this.handleLogin}>
                    Accedir
                  </Button>
                </DialogActions>
              </Dialog>
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