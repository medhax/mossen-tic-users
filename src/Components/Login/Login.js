import React from 'react';
import './Login.scss'

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import logoAlcoxide from '../img/alcoxide.png'
import logoMossen from '../img/logoMossen.png'
import botonGoogle from '../img/googlebtn2x.png'

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

class Login extends React.Component{

    render(){
        return(
            <div>
     
            <Grid container direction="column" alignItems="center" spacing={0} justifyContent="space-around" >
              <Grid item m={12}>
               <img alt="logoMossen" className="logoMossen" src={logoMossen}/>        
              </Grid>

              
              <Grid className="botonets" item>
               <Link to="/interficie"> <img src={botonGoogle} className="botoGoogle"  alt="botonGoogle"/></Link><br/>
                <Button variant="outlined" className="botoAdmin"  color="secondary">Accedir a la versió d'administrador</Button>
              </Grid>
             
              <Grid className="logoAlcoxideBox" item  xs={12}>
                <img alt="logoAlcoxide" className="logoAlcoxide" width="60%" src={logoAlcoxide}/>
            </Grid>
            </Grid>
            </div>
        )
    }
}

export default Login;