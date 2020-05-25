import React from 'react';
import './Login.scss'
import FadeIn from 'react-fade-in';
import {Button,Grid,TextField,Dialog,DialogActions,DialogContent,DialogTitle} from '@material-ui/core';
import logoAlcoxide from '../../img/alcoxide.png'
import logoMossen from '../../img/logoMossen.png'
import Animacio from '../Animacio/animacio'
import {Link, Redirect} from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
import { withRouter } from "react-router";

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
     profileObj: {

     },
      redirecting:false,
      open:false,
    }

  }
   
    render(){
     const handleOpen = () => {
        this.setState({
            open : !this.state.open,
        });
    }
      const responseGoogleSuccess = (response) => {
       
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
              className="botoGoogle"
    clientId="1043027828905-d9ggaps55ucafvqv73volb6ks206r1bj.apps.googleusercontent.com"
    buttonText="Iniciar sessió amb google"
    onSuccess={responseGoogleSuccess}
    onFailure={responseGoogleFailure}
    cookiePolicy={'single_host_origin'}
  />  
  
  <br/>
               <Button variant="outlined" className="botoAdmin" onClick={handleOpen} color="secondary">Accedir a la versió d'administrador</Button>
              </Grid>
             
              <Grid className="logoAlcoxideBox" item  xs={12}>
                <img alt="logoAlcoxide" className="logoAlcoxide" width="55%" src={logoAlcoxide}/>
            </Grid>
            </Grid>
            {this.state.redirecting ? <Redirect to={{
            pathname: '/interficie',
            state: {usuari: this.state.profileObj,}
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
                  <TextField variant="outlined" label="Usuari" />
                  <br/><br/>
                  <TextField variant="outlined" label="Contrasenya" type="password" />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleOpen} color="secondary">
                    Tancar
                  </Button>
                  <Button  color="primary">
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