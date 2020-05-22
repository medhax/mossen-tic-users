import React from 'react';
import './Login.scss'
import FadeIn from 'react-fade-in';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
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
      name:"",
      email:"",
      url:"",
      redirecting:false,
    }
  }
   
    render(){
      
      const responseGoogleSuccess = (response) => {
        this.setState({name:response.profileObj.name});
        this.setState({email:response.profileObj.email});
        this.setState({url:response.profileObj.imageUrl});
        this.setState({redirecting:true});
        }
      const responseGoogleFailure = (response) => {
        alert("Algo falla!" + response);
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
               <Link to="/admin"><Button variant="outlined" className="botoAdmin"  color="secondary">Accedir a la versió d'administrador</Button></Link> 
              </Grid>
             
              <Grid className="logoAlcoxideBox" item  xs={12}>
                <img alt="logoAlcoxide" className="logoAlcoxide" width="55%" src={logoAlcoxide}/>
            </Grid>
            </Grid>
            {this.state.redirecting ? <Redirect to="/interficie" /> : null }
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